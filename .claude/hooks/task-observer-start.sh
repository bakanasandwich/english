#!/bin/sh
# SessionStart 훅: task-observer 를 매 세션 켜도록 안내 + 관찰 기록 상태를 주입한다.
# (references/environments.md "A session-start hook" 의 공식 예시를 이 저장소에 맞춘 것)
# 클라우드와 선생님 PC 모두에서 실행된다. 하는 일은 글을 출력하는 것뿐이다.
ROOT="${CLAUDE_PROJECT_DIR:-$(pwd)}"
OBS_WORKSPACE="$ROOT/.claude/observer"
SKILL_DIR="$ROOT/.claude/skills/task-observer"
d="$OBS_WORKSPACE/skill-observations"

# 이후 Bash 호출에서 쓸 환경변수 (지원되는 환경에서만)
if [ -n "$CLAUDE_ENV_FILE" ]; then
  echo "export TASK_OBSERVER_WORKSPACE=\"$OBS_WORKSPACE\"" >> "$CLAUDE_ENV_FILE"
fi

open=$(find "$d/observation-log" -maxdepth 1 -name '*.md' -exec grep -l '^status: open$' {} + 2>/dev/null | wc -l | tr -d ' ')
last=$(tr -d '\r' 2>/dev/null < "$d/last-review-date.txt"); last=${last:-never}
msg="task-observer workspace (pinned absolute path): $OBS_WORKSPACE . Skill directory: $SKILL_DIR . Make the first tool call of this session one batched call that both lists the task-observer workspace ($OBS_WORKSPACE) and invokes the task-observer skill; then run its Session Start Protocol (scan: bash \"$SKILL_DIR/scripts/session-start-scan.sh\" \"$OBS_WORKSPACE\"). Observation files are created only by bash \"$SKILL_DIR/scripts/new-observation.sh\" <slug> \"$OBS_WORKSPACE\", never by copying a header. Skill updates are staged in $OBS_WORKSPACE/skill-updates/ and applied to live skills only after the user approves. This workspace persists only through git: commit changes under .claude/observer/ together with the session's work."
if [ "${open:-0}" -gt 0 ]; then
  msg="$msg $open open observations; last review: $last."
  cutoff=$(date -d '7 days ago' +%F 2>/dev/null || date -v-7d +%F)
  case "$last" in
    (never) msg="$msg Offer the review." ;;
    (*) [ "$(printf '%s\n%s\n' "$last" "$cutoff" | sort | head -1)" = "$last" ] && msg="$msg Offer the review." ;;
  esac
fi
msg=$(printf '%s' "$msg" | sed 's/\\/\\\\/g; s/"/\\"/g' | tr -d '\000-\037')
printf '{"hookSpecificOutput":{"hookEventName":"SessionStart","additionalContext":"%s"}}\n' "$msg"
