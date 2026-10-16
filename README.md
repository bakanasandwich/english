# 중·고 영어 수업실

2022 개정 교육과정 중·고등학교 영어 차시별 수업 자료입니다. 빌드 과정 없이 HTML 파일만으로 작동하는 정적 사이트로, GitHub Pages(저장소 Settings → Pages → Branch: `main` / root)로 배포합니다.

## 담긴 자료 (단원마다)

| 차시 | 슬라이드 | 연습실 |
|---|---|---|
| 1차시 어휘 | `slides1.html` 낱말·예문·덩어리 표현·철자 | `sim.html#words` 낱말 카드 · 듣고 뜻 고르기 · 듣고 철자 쓰기 |
| 2차시 대화문 | `slides2.html` Listen & Talk 1·2, Let's Watch | `sim.html#talk` 듣고 따라 하기 · 역할 연기 · 핵심 표현 쓰기 |
| 3차시 문법 | `slides3.html` 규칙 발견 → 정리 → 확인 → 실수 → 배열 | `sim.html#grammar` 문장 만들기 · to? -ing? · 형태 바꾸기 |
| 4·5차시 본문 | `slides4.html` `slides5.html` (어두운 명조 스타일) | `sim.html#read` 들으며 읽기 · 문장 순서 · T/F · 요약 빈칸 |

단원 자료: `worksheet.html`(A4 학습지, 정답지 겸용), `game.html`(모둠 대결 게임 3종), `quiz/bell.html?b=책&n=단원`(골든벨)

## 폴더 구조

```
index.html                 메인 화면 (교과서 → 단원 → 차시 → 자료)
assets/
  catalog.js               사이트 이름·제작자, 교과서와 단원 목록
  common.js                발음 듣기(브라우저 음성), 위 막대·아래 글
  deck.css, deck.js        수업 슬라이드 엔진 (밝은 모양 / 본문용 어두운 모양)
  lab.css, lab.js          연습실
  ws.css, ws.js            학습지
  game.css, game.js        게임,  bell.js 골든벨,  home.js 메인 화면
  vendor/qrcode.js         QR 코드 (MIT, Kazuhiko Arase)
m2/donga/l1/
  data.js                  ★ 단원 내용 전부 (이 파일 하나로 모든 자료가 만들어짐)
  slides1~5.html, sim.html, worksheet.html, game.html   (짧은 틀 파일)
```

## 새 단원 만들기

1. `m2/donga/l1` 폴더를 복사해 `l2`로 이름을 바꿉니다.
2. `l2/data.js`의 내용을 새 단원으로 바꿉니다(`no: 2`). 문장 속 `{{ }}`는 슬라이드·학습지에서 빈칸이 되는 핵심 표현입니다.
3. `assets/catalog.js`에서 해당 단원의 `ready`를 `true`로 바꾸고 제목·의사소통 기능·문법을 적습니다.

## 슬라이드 조작

→ / 스페이스 / 클릭: 다음 단계 · ← : 이전 · N: 교사 메모(해석·발문 포함) · O: 전체 보기 · F: 전체 화면 · 주소 끝 `#5`: 5장부터.
본문 슬라이드에서 점선 낱말을 누르면 뜻이 뜨고 발음이 들립니다.

## 알아 둘 점

- 교과서 원문(대화문·본문)은 저작권 때문에 싣지 않았습니다. 단원 주제·의사소통 기능·언어 형식에 맞춰 새로 쓴 글입니다.
- 정적 사이트라서 정답이 페이지 소스에 들어 있습니다(학생에게 서버에서 정답을 숨기는 기능은 없음).
- 발음은 기기의 브라우저 음성(Web Speech)을 씁니다. 크롬·엣지·사파리에서 작동하며, 목소리는 기기마다 다릅니다.
