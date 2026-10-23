#!/bin/bash
# 클라우드(claude.ai/code) 세션에서만 실행. 선생님 PC에서는 아무것도 하지 않는다.
[ "$CLAUDE_CODE_REMOTE" = "true" ] || exit 0
cd "${CLAUDE_PROJECT_DIR:-.}" || exit 0

# 1) agent-browser — 실제 브라우저로 화면 확인(.claude/skills/agent-browser). 클라우드엔 Playwright 크롬이 있어 그걸 쓴다.
command -v agent-browser >/dev/null 2>&1 || npm install -g agent-browser >/dev/null 2>&1
CH=$(ls -d /opt/pw-browsers/chromium-*/chrome-linux*/chrome 2>/dev/null | head -1)
[ -n "$CH" ] && [ -n "$CLAUDE_ENV_FILE" ] && echo "export AGENT_BROWSER_EXECUTABLE_PATH=\"$CH\"" >> "$CLAUDE_ENV_FILE"

# 2) graphify 코드 지도(선택) — 아래 GRAPHIFY_DIR 에 지도 그릴 폴더를 적으면 켜진다(비워 두면 꺼짐).
#    코드 구조만 읽어 몇 초면 끝남(LLM·토큰 사용 없음). 지도(graphify-out/)는 .gitignore 로 커밋하지 않는다.
GRAPHIFY_DIR=""
if [ -n "$GRAPHIFY_DIR" ]; then
  command -v graphify >/dev/null 2>&1 || pip install --break-system-packages -q graphifyy >/dev/null 2>&1
  [ -d "$HOME/.claude/skills/graphify" ] || graphify install --platform claude >/dev/null 2>&1
  GRAPHIFY_OUT="$PWD/graphify-out" graphify update "$GRAPHIFY_DIR" >/dev/null 2>&1
fi
exit 0
