---
name: agent-browser
description: 실제 브라우저로 이 저장소의 화면을 열어 보고·클릭하고·입력하며 확인할 때 쓴다 (화면 확인, 버튼 동작 점검, 레이아웃 깨짐 확인, 탐색형 테스트, 스크린샷). Playwright 테스트 스크립트를 새로 짜기 전에, 고친 화면이 실제로 어떻게 보이고 동작하는지 빠르게 볼 때 먼저 쓴다. agent-browser CLI (vercel-labs/agent-browser, Apache-2.0)를 쓴다.
allowed-tools: Bash(agent-browser:*), Bash(npx agent-browser:*)
---

# agent-browser — 화면을 직접 열어 확인하기

접근성 트리 스냅샷(`@e1` 같은 짧은 참조)으로 페이지를 읽으므로, HTML 전체나 스크린샷보다 토큰이 훨씬 적게 든다.

## 처음 한 번

이 파일은 안내 요약이다. 명령을 쓰기 전에 설치된 버전에 맞는 사용법을 CLI에서 불러온다:

```bash
agent-browser skills get core          # 기본 사용법(스냅샷 → 참조로 클릭/입력)
agent-browser skills get dogfood       # 탐색형 테스트·버그 찾기
```

## 이 저장소에서 쓰는 법

1. 화면 서버를 띄운다 (저장소 루트에서, 백그라운드). 명령과 포트는 CLAUDE.md 의 "화면 서버" 항목을 따른다.
   적혀 있지 않으면 정적 사이트는 `python3 -m http.server 8765`.
2. `agent-browser open http://localhost:<포트>/` → `agent-browser snapshot -i` 로 화면 구조를 읽고, `agent-browser click @e3` / `fill @e5 "값"` 으로 조작한다.
3. 눈으로 봐야 할 때만 `agent-browser screenshot <파일>.png` 를 찍어 Read 로 본다.
4. 끝나면 `agent-browser close`.

## 브라우저 찾기

- 클라우드 세션: SessionStart 훅이 CLI를 설치하고 `AGENT_BROWSER_EXECUTABLE_PATH` 를 Playwright 크롬(`/opt/pw-browsers/...`)으로 잡아 둔다. `Chrome not found` 가 나오면:
  `export AGENT_BROWSER_EXECUTABLE_PATH=$(ls -d /opt/pw-browsers/chromium-*/chrome-linux*/chrome | head -1)` 후 `agent-browser close` → 다시 `open`.
- 선생님 PC: `npm i -g agent-browser && agent-browser install` (설치된 크롬을 자동으로 찾기도 한다).

## 언제 무엇을

- 고친 화면을 한 번 확인 → agent-browser.
- 반복해서 돌릴 회귀 테스트 → 기존 `tests/*.ui.test.mjs`(Playwright) 에 추가.
