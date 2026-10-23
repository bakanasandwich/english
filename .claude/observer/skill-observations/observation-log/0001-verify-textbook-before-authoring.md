---
id: 0001
title: Textbook-companion lessons were authored from estimated unit contents instead of the published textbook and curriculum text
status: open
type: internal
skill: []
proposes_skill: [textbook-aligned-lesson-authoring]
target_file: [CLAUDE.md]
siblings_checked: none — no installed skill covers lesson-material authoring for this repository
area: lesson data authoring (m1/m2/m3/h1 data.js) — source verification step
date: 2026-10-23
session_context: Building 동아 textbook companion materials (middle school 윤정미, high school 이병민) with 2022 curriculum alignment and 기출 mapping
resolved:
resolution:
reference:
commands_verified: none
---

## What happened

The middle-school lessons (중1·중2·중3) were first written from unit titles and
grammar points marked `estimate: true`. The user had to point out that the
materials had never been checked against the actual textbook or the 2022
curriculum original. Cross-checking afterwards showed:

- 중1·중2: all 16 reading topics differed from the textbook; grammar differed in
  중1 L5–L8 and 중2 L1–L4, L8; most communicative functions were guesses.
- 공통영어2 (이병민): readings for L1, L3, L4 cover different topics from the
  textbook ("Are You a Good Eater?", "Social Media Algorithms", "Rediscovering
  Art Through Science").

Both sources were obtainable when searched for properly:

- Curriculum original: the MOE notice attachment (HWP inside a zip) on moe.go.kr,
  parsed with olefile + zlib (record tag 67 = paragraph text, 72 = cell header).
- Textbook unit structure: publicly posted per-lesson PDFs list 의사소통 기능,
  읽기 제목 and 언어 형식 on page 1 (used for reference only, not copied).

## Proposed rule

Before authoring any lesson that claims to follow a named textbook, collect and
record (in the lesson's `align` block) the textbook's unit structure — functions,
language forms, reading title/topic, word list — and the matching curriculum
standards. Only where no source exists (e.g. a textbook not yet published) mark
the unit as an estimate, and say so in the lesson and in the report.
