/* 중2 영어(동아·윤정미) Lesson 3 · What a Great Idea!
   단원명은 교과서 목차 기준. 대화문·읽기 글은 교과서 원문이 아니라 단원 주제에 맞춰 새로 쓴 글입니다.
   의사소통 기능과 문법은 교과서 구성표 확인 전 추정(estimate: true).
   읽기 글의 인물·사실(포스트잇, 밴드, 앤 마코신스키의 손전등)은 널리 알려진 실제 이야기를 바탕으로 했습니다. */
window.LESSON = {
  book: 'm2-donga', no: 3, estimate: true,
  title: 'What a Great Idea!', ko: '정말 멋진 생각이야!',
  bigQ: {en: 'How can a small problem become a great idea?', ko: '작은 문제가 어떻게 멋진 생각이 될까?'},
  goals: {
    vocab: ['발명·아이디어와 관련된 낱말 20개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 내가 아는 발명품을 한 문장으로 설명할 수 있다.'],
    talk: ['놀라움을 표현하고 그에 답할 수 있다.', '방법을 묻고 순서대로 설명할 수 있다.'],
    grammar: ['감탄문(What / How)으로 놀라움을 표현할 수 있다.', '주격 관계대명사 who / which / that으로 사람·사물을 설명할 수 있다.'],
    read1: ['글의 주제를 예측하고, 포스트잇이 탄생한 과정을 이해할 수 있다.'],
    read2: ['세 발명가의 문제·생각·결과를 비교하고 글의 요지를 요약할 수 있다.', '내 주변의 문제와 해결 아이디어를 영어로 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'What is the most useful thing in your pencil case?', ko: '필통 속 물건 중 가장 쓸모 있는 것은?', note: '지우개 달린 연필, 포스트잇, 형광펜 등 학생 답을 모은 뒤 “누군가 처음 생각해 낸 것”이라는 점을 짚는다. invent, idea, useful로 연결된다.'},
    words: [
      {w: 'invent', pos: 'v.', ko: '발명하다', ic: '💡', ex: 'Who invented the telephone?', exKo: '누가 전화기를 발명했을까?'},
      {w: 'invention', pos: 'n.', ko: '발명품', ic: '🔧', ex: 'The light bulb was a great invention.', exKo: '전구는 위대한 발명품이었다.'},
      {w: 'inventor', pos: 'n.', ko: '발명가', ic: '🧑‍🔬', ex: 'She became a young inventor.', exKo: '그녀는 어린 발명가가 되었다.'},
      {w: 'useful', pos: 'adj.', ko: '쓸모 있는', ic: '👍', ex: 'This app is really useful.', exKo: '이 앱은 정말 쓸모 있다.'},
      {w: 'solve', pos: 'v.', ko: '해결하다, 풀다', ic: '🧩', ex: 'We tried to solve the problem together.', exKo: '우리는 함께 그 문제를 해결하려고 했다.'},
      {w: 'glue', pos: 'n./v.', ko: '풀, 접착제; 붙이다', ic: '🧴', ex: 'This glue is not very strong.', exKo: '이 풀은 그다지 강하지 않다.'},
      {w: 'stick', pos: 'v.', ko: '붙다, 달라붙다', ic: '📌', ex: 'The note sticks to the wall.', exKo: '그 메모는 벽에 붙는다.'},
      {w: 'easily', pos: 'adv.', ko: '쉽게', ic: '🪶', ex: 'You can take it off easily.', exKo: '그것은 쉽게 뗄 수 있다.'},
      {w: 'simple', pos: 'adj.', ko: '간단한, 단순한', ic: '✏️', ex: 'The best ideas are often simple.', exKo: '가장 좋은 생각은 흔히 단순하다.'},
      {w: 'amazing', pos: 'adj.', ko: '놀라운', ic: '🤩', ex: 'What an amazing robot!', exKo: '정말 놀라운 로봇이다!'},
      {w: 'design', pos: 'v./n.', ko: '설계하다; 디자인', ic: '📐', ex: 'He designed a new chair.', exKo: '그는 새 의자를 설계했다.'},
      {w: 'material', pos: 'n.', ko: '재료, 물질', ic: '🧱', ex: 'Paper is a cheap material.', exKo: '종이는 값싼 재료다.'},
      {w: 'battery', pos: 'n.', ko: '배터리, 건전지', ic: '🔋', ex: 'My phone battery is low.', exKo: '내 휴대폰 배터리가 얼마 없다.'},
      {w: 'heat', pos: 'n.', ko: '열, 열기', ic: '🔥', ex: 'Our bodies make heat.', exKo: '우리 몸은 열을 만든다.'},
      {w: 'electricity', pos: 'n.', ko: '전기', ic: '⚡', ex: 'Many homes in the village have no electricity.', exKo: '그 마을의 많은 집에는 전기가 없다.'},
      {w: 'prize', pos: 'n.', ko: '상', ic: '🏆', ex: 'She won first prize at the science fair.', exKo: '그녀는 과학 박람회에서 1등상을 받았다.'},
      {w: 'mistake', pos: 'n.', ko: '실수', ic: '❌', ex: 'Some inventions came from mistakes.', exKo: '어떤 발명품은 실수에서 나왔다.'},
      {w: 'company', pos: 'n.', ko: '회사', ic: '🏢', ex: 'He worked for a big company.', exKo: '그는 큰 회사에서 일했다.'},
      {w: 'everyday', pos: 'adj.', ko: '일상의', ic: '📅', ex: 'Look for problems in everyday life.', exKo: '일상생활에서 문제를 찾아보라.'},
      {w: 'creative', pos: 'adj.', ko: '창의적인', ic: '🎨', ex: 'That’s a creative idea!', exKo: '그거 창의적인 생각이다!'}
    ],
    phrases: [
      {w: 'come up with', ko: '(생각을) 떠올리다', ex: 'She came up with a great idea.', exKo: '그녀는 멋진 생각을 떠올렸다.'},
      {w: 'fall out', ko: '빠지다, 떨어져 나오다', ex: 'The pages kept falling out.', exKo: '종이가 자꾸 빠졌다.'},
      {w: 'by oneself', ko: '혼자서', ex: 'She put on the bandage by herself.', exKo: '그녀는 혼자서 붕대를 붙였다.'},
      {w: 'turn A into B', ko: 'A를 B로 바꾸다', ex: 'He turned a problem into an idea.', exKo: '그는 문제를 아이디어로 바꾸었다.'},
      {w: 'run on', ko: '~으로 작동하다', ex: 'This car runs on electricity.', exKo: '이 차는 전기로 달린다.'},
      {w: 'in common', ko: '공통으로', ex: 'We have a lot in common.', exKo: '우리는 공통점이 많다.'}
    ],
    pairs: [
      {a: 'useful', b: 'useless', rel: '반대말'},
      {a: 'simple', b: 'difficult', rel: '반대말'},
      {a: 'solve', b: 'fix', rel: '비슷한 말'},
      {a: 'invent', b: 'inventor', rel: '동사 / 사람', note: 'invent → invention(발명품) → inventor(발명가)'}
    ],
    wrap: {en: 'The most useful invention for me is ______. It helps me ______.', ko: '오늘 배운 낱말을 넣어 나에게 가장 쓸모 있는 발명품 소개하기'}
  },

  talk: {
    hook: {en: 'Have you ever made something by yourself?', ko: '무언가를 혼자 만들어 본 적이 있나요?', note: '종이접기, 블록, 요리 등 무엇이든 좋다. 만든 과정을 묻는 질문(How did you make it?)으로 Listen & Talk 2를 예고한다.'},
    speakers: {Eric: {voice: 1, pitch: .95}, Somi: {voice: 0, pitch: 1.1}, Grace: {voice: 0, pitch: 1.15}, Jay: {voice: 1, pitch: .9}, Dana: {voice: 0, pitch: 1.05}, Luke: {voice: 1, pitch: 1}, 'Ms. Han': {voice: 2, pitch: 1}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '놀람 표현하고 답하기',
        key: {q: ['Guess what!', 'Did you know (that) ~?'], a: ['That’s amazing!', 'What a surprise!', 'I can’t believe it!']},
        note: '놀람을 나타낼 때 That’s amazing! / I can’t believe it! 그리고 감탄문 What a ~! 를 쓴다. 3차시 감탄문과 이어진다.',
        dialogs: [
          { title: 'Dialogue A', setting: '과학실, 발명 동아리 시간', lines: [
            {s: 'Somi', en: 'Eric, {{guess what}}! My little brother made a robot.', ko: '에릭, 있잖아! 내 남동생이 로봇을 만들었어.'},
            {s: 'Eric', en: 'Really? {{I can’t believe it}}! He’s only ten.', ko: '정말? 믿을 수가 없다! 걔 겨우 열 살이잖아.'},
            {s: 'Somi', en: 'It picks up toys and puts them in a box.', ko: '장난감을 집어서 상자에 넣어.'},
            {s: 'Eric', en: '{{What a}} smart robot! How did he make it?', ko: '정말 똑똑한 로봇이다! 어떻게 만들었대?'},
            {s: 'Somi', en: 'He used an old toy car and some paper cups.', ko: '오래된 장난감 차랑 종이컵 몇 개를 썼어.'},
            {s: 'Eric', en: '{{That’s amazing}}!', ko: '놀랍다!'}
          ]},
          { title: 'Dialogue B', setting: '점심시간, 휴대폰으로 기사를 보며', lines: [
            {s: 'A', en: '{{Did you know}} that potato chips came from a mistake?', ko: '감자칩이 실수에서 나왔다는 거 알았어?'},
            {s: 'B', en: 'No! {{What a surprise}}!', ko: '아니! 정말 놀랍다!'},
            {s: 'A', en: 'A cook sliced the potatoes too thin by accident.', ko: '한 요리사가 실수로 감자를 너무 얇게 썰었대.'},
            {s: 'B', en: 'Wow, I’m glad he made that mistake.', ko: '와, 그가 그 실수를 해서 다행이다.'}
          ]}
        ],
        check: [
          {q: 'What does Somi’s brother’s robot do?', a: 'It picks up toys and puts them in a box.'},
          {q: 'What did her brother use to make it?', a: 'An old toy car and some paper cups.'},
          {q: 'What came from a mistake?', a: 'Potato chips.'}
        ],
        drill: {frame: ['A: Guess what! I ____.', 'B: That’s amazing!'], opts: ['won first prize', 'made a robot', 'baked a cake', 'fixed my bike', 'wrote a song', 'drew a comic']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '방법 묻고 설명하기',
        key: {q: ['Can you tell me how to ~?', 'How do I ~?'], a: ['First, ~. Then, ~.', 'After that, ~.', 'Finally, ~.']},
        note: 'how to + 동사원형: ~하는 방법. 순서를 말할 때 First → Then → After that → Finally를 차례로 쓴다.',
        dialogs: [
          { title: 'Dialogue A', setting: '미술실, 재활용 만들기 수업', lines: [
            {s: 'Jay', en: 'Grace, {{can you tell me how to}} make a phone stand?', ko: '그레이스, 휴대폰 거치대 만드는 법 알려 줄래?'},
            {s: 'Grace', en: 'Sure. It’s simple. {{First}}, cut a paper cup in half.', ko: '물론이지. 간단해. 먼저 종이컵을 반으로 잘라.'},
            {s: 'Jay', en: 'Okay. And then?', ko: '알았어. 그다음은?'},
            {s: 'Grace', en: '{{Then}}, cut a small hole on one side.', ko: '그다음, 한쪽에 작은 구멍을 내.'},
            {s: 'Jay', en: 'Like this? What’s next?', ko: '이렇게? 다음은 뭐야?'},
            {s: 'Grace', en: '{{Finally}}, put your phone in the hole. That’s it!', ko: '마지막으로 휴대폰을 구멍에 꽂아. 끝!'}
          ]},
          { title: 'Dialogue B', setting: '컴퓨터실', lines: [
            {s: 'A', en: '{{How do I}} save this file?', ko: '이 파일 어떻게 저장해?'},
            {s: 'B', en: 'First, click “File.” Then, choose “Save As.”', ko: '먼저 ‘파일’을 눌러. 그다음 ‘다른 이름으로 저장’을 골라.'},
            {s: 'A', en: 'And {{after that}}?', ko: '그 뒤에는?'},
            {s: 'B', en: 'Type a name and click “OK.”', ko: '이름을 쓰고 ‘확인’을 눌러.'}
          ]}
        ],
        check: [
          {q: 'What does Jay want to make?', a: 'A phone stand.'},
          {q: 'What is the first step?', a: 'Cut a paper cup in half.'},
          {q: 'What should A choose after clicking “File”?', a: '“Save As.”'}
        ],
        drill: {frame: ['A: Can you tell me how to ____?', 'B: Sure. First, ...'], opts: ['make a paper plane', 'cook ramen', 'use this app', 'fold a paper crane', 'clean my keyboard', 'grow beans']}
      }
    ],
    interviewEx: 'Hyun said, “I won first prize!” He can tell me how to make a paper plane.',
    watch: {
      label: 'Let’s Watch', title: 'The Umbrella Problem', setting: '비 오는 날 교실. 우산을 잃어버린 데이나와 루크가 한 선생님과 이야기한다.',
      lines: [
        {s: 'Dana', en: 'Oh no, someone took my umbrella again!', ko: '아, 누가 또 내 우산을 가져갔어!'},
        {s: 'Luke', en: 'All the umbrellas look the same. That’s the problem.', ko: '우산이 다 똑같이 생겼어. 그게 문제야.'},
        {s: 'Ms. Han', en: 'Then why don’t you invent something to solve it?', ko: '그럼 그걸 해결할 무언가를 발명해 보는 건 어때?'},
        {s: 'Dana', en: 'How about a name tag which lights up in the rain?', ko: '빗속에서 빛나는 이름표는 어때요?'},
        {s: 'Luke', en: 'What a creative idea! Can you tell me how to make it?', ko: '정말 창의적이다! 어떻게 만드는지 알려 줄래?'},
        {s: 'Dana', en: 'First, cut a shape from glow paper. Then, write your name on it.', ko: '먼저 야광 종이로 모양을 오려. 그다음 이름을 써.'},
        {s: 'Ms. Han', en: 'Finally, stick it on the handle. I can’t believe it’s so simple!', ko: '마지막으로 손잡이에 붙이고. 이렇게 간단하다니 믿을 수가 없구나!'}
      ],
      check: [
        {q: 'What is the problem?', a: 'All the umbrellas look the same, so people take the wrong one.'},
        {q: 'What is Dana’s idea?', a: 'A name tag which lights up in the rain.'},
        {q: 'Where do they stick the tag?', a: 'On the handle.'}
      ]
    },
    wrap: {en: 'Tell your partner a surprising fact, and explain how to make something in three steps.', ko: '놀라운 사실 하나를 말하고, 무언가를 만드는 방법을 세 단계로 설명하기'}
  },

  grammar: {
    cover: 'What a ~!',
    hook: {en: '{{What a}} great idea!  /  This is a flashlight {{which}} runs on body heat.', ko: '빈칸에 들어갈 말은 각각 무슨 일을 할까?', answer: 'What a ~!는 놀라움(감탄)을, which는 앞의 명사(flashlight)를 뒤에서 설명해 준다', note: '첫 문장은 억양을 살려 읽게 한다. 두 번째 문장은 “어떤 손전등?”을 물으며 which 이하가 설명이라는 점을 찾게 한다.'},
    points: [
      { id: 'g1', name: '감탄문', short: '감탄문', form: 'What a(n) + 형용사 + 명사! / How + 형용사!', meaning: '정말 ~하구나!',
        notice: [
          {en: '{{What a}} smart robot (it is)!', ko: '정말 똑똑한 로봇이구나!'},
          {en: '{{What}} useful notes (these are)!', ko: '정말 쓸모 있는 메모들이구나!'},
          {en: '{{How}} simple (the idea is)!', ko: '(그 생각은) 정말 간단하구나!'}
        ],
        rule: [
          {k: 'What', v: 'What + a(n) + 형용사 + 단수 명사!', ex: 'What an amazing invention!'},
          {k: '복수·셀 수 없는', v: 'What + 형용사 + 복수 명사 / 셀 수 없는 명사! (a 없음)', ex: 'What cute shoes! / What good news!'},
          {k: 'How', v: 'How + 형용사/부사 (+ 주어 + 동사)!', ex: 'How fast he runs!'}
        ],
        compare: {
          title: 'What일까, How일까?', note: '뒤에 명사가 있으면 What, 형용사·부사만 있으면 How. a(n)는 단수 명사일 때만 쓴다.',
          head: ['What a(n) + 형 + 단수 명사', 'What + 형 + 복수/셀 수 없는 명사', 'How + 형용사/부사'],
          cols: [['What a great idea!', 'What an old car!', 'What a big box!'], ['What great ideas!', 'What nice weather!', 'What fresh bread!'], ['How great!', 'How old it is!', 'How fast it moves!']]
        },
        check: [
          {q: '____ a creative idea! (What / How)', a: 'What'},
          {q: '____ useful this app is! (What / How)', a: 'How'},
          {q: 'What ____ interesting story! (a / an)', a: 'an'},
          {q: '____ cute puppies they are! (What / How)', a: 'What'},
          {q: 'How ____ the robot moves! (quick → 부사)', a: 'quickly'}
        ],
        trap: {bad: 'What great idea it is!', good: 'What a great idea it is!', why: '셀 수 있는 단수 명사 앞에는 a(n)를 꼭 쓴다.'},
        scramble: [
          {ko: '정말 놀라운 발명품이구나!', en: 'What an amazing invention!'},
          {ko: '그 생각은 정말 간단하구나!', en: 'How simple the idea is!'},
          {ko: '정말 쓸모 있는 도구들이구나!', en: 'What useful tools they are!'}
        ]
      },
      { id: 'g2', name: '주격 관계대명사', short: '주격 관계대명사', form: '명사 + who / which / that + 동사 ~', meaning: '~하는 (명사)',
        notice: [
          {en: 'Ann is a girl {{who}} loves making things.', ko: '앤은 무언가 만들기를 좋아하는 소녀이다.'},
          {en: 'It is a flashlight {{which}} runs on body heat.', ko: '그것은 체온으로 작동하는 손전등이다.'},
          {en: 'He made a glue {{that}} comes off easily.', ko: '그는 쉽게 떨어지는 풀을 만들었다.'}
        ],
        rule: [
          {k: '사람', v: '명사 + who (또는 that) + 동사', ex: 'I have a friend who invents things.'},
          {k: '사물·동물', v: '명사 + which (또는 that) + 동사', ex: 'This is a robot which cleans the floor.'},
          {k: '동사의 수', v: '관계대명사 뒤 동사는 앞 명사에 맞춘다', ex: 'I know people who make apps.'}
        ],
        check: [
          {q: 'She is an inventor ____ made a flashlight. (who / which)', a: 'who'},
          {q: 'I want a bag ____ has many pockets. (who / which)', a: 'which'},
          {q: 'He has a dog ____ catches balls. (who / that)', a: 'that'},
          {q: 'I know a boy who ____ robots. (make)', a: 'makes'},
          {q: 'These are notes which ____ to the wall. (stick)', a: 'stick'}
        ],
        trap: {bad: 'I met a scientist which won a prize.', good: 'I met a scientist who won a prize.', why: '앞의 명사가 사람이면 which가 아니라 who(또는 that)를 쓴다.'},
        scramble: [
          {ko: '나는 노래를 잘 부르는 친구가 있다.', en: 'I have a friend who sings well.'},
          {ko: '이것은 물에 뜨는 신발이다.', en: 'These are shoes which float on water.'},
          {ko: '그녀는 아이들을 돕는 의사이다.', en: 'She is a doctor who helps children.'}
        ]
      }
    ],
    wrap: {en: 'What a(n) ______! I want an invention which ______.', ko: '감탄문 한 문장, 주격 관계대명사 한 문장으로 내가 원하는 발명품 쓰기'},
    wrapEx: 'What a useful pen! I want an invention which does my homework.'
  },

  reading: {
    title: 'Small Problems, Great Ideas', kind: '발명 이야기 칼럼', cover: 'Idea', coverKo: '작은 문제에서 시작된 생각', cover2: 'Invent', coverKo2: '문제를 해결하는 사람들',
    before: [
      {q: 'Look at the title. Where do great ideas come from?', a: '작은(일상의) 문제에서'},
      {q: 'Do you know any inventions that came from a mistake?', a: '자유롭게 예측한 뒤 글과 비교'}
    ],
    gloss: {
      clever: '영리한, 기발한', 'sticky notes': '붙임쪽지(포스트잇)', 'co-worker': '직장 동료', bookmarks: '책갈피', bandages: '붕대', cotton: '솜', tape: '테이프',
      flashlight: '손전등', 'science fair': '과학 박람회', inventors: '발명가들', 'Philippines': '필리핀', closely: '자세히'
    },
    paras: [
      {who: '', en: '“What a great idea!” We say this when we see something clever. Many great inventions did not start in big labs. They started with small problems in everyday life. Here are three people who turned problems into ideas.',
       ko: '“정말 멋진 생각이야!” 우리는 기발한 것을 보면 이렇게 말합니다. 많은 위대한 발명품은 커다란 실험실에서 시작되지 않았습니다. 일상생활의 작은 문제에서 시작되었죠. 문제를 아이디어로 바꾼 세 사람을 소개합니다.',
       check: {q: 'Where did many great inventions start?', a: 'With small problems in everyday life.'}, think: '여러분 주변의 ‘작은 문제’는 무엇인가요?'},
      {who: 'Sticky Notes (1)', en: 'In 1968, Spencer Silver, a scientist at the company 3M, was trying to make a very strong glue. Instead, he made a weak glue which could stick to paper and come off easily. Nobody knew how to use it.',
       ko: '1968년, 3M이라는 회사의 과학자 스펜서 실버는 아주 강한 풀을 만들려고 하고 있었습니다. 그런데 그 대신 종이에 붙었다가 쉽게 떨어지는 약한 풀을 만들었어요. 아무도 그것을 어디에 써야 할지 몰랐습니다.',
       check: {q: 'What kind of glue did Spencer Silver want to make?', a: 'A very strong glue.'}, think: '실패한 실험은 정말 실패일까?'},
      {who: 'Sticky Notes (2)', en: 'Years later, his co-worker Art Fry had a problem. The paper bookmarks in his song book kept falling out. He put Silver’s glue on them, and they stayed in place! What a simple idea! This was the start of sticky notes.',
       ko: '몇 년 뒤, 그의 동료 아트 프라이에게 문제가 생겼습니다. 노래책에 끼운 종이 책갈피가 자꾸 빠졌거든요. 그가 실버의 풀을 책갈피에 바르자 책갈피가 제자리에 붙어 있었습니다! 정말 간단한 생각이죠! 이것이 붙임쪽지의 시작이었습니다.',
       check: {q: 'What was Art Fry’s problem?', a: 'His paper bookmarks kept falling out of his song book.'}, think: '실버와 프라이 중 누가 발명가일까?'},
      {who: 'Band-Aids', en: 'In 1920, Earle Dickson’s wife often cut her fingers while she was cooking. Big bandages were hard to put on by herself. So he put small pieces of cotton on tape and covered them. Now she could use them by herself. His company later sold them as Band-Aids.',
       ko: '1920년, 얼 딕슨의 아내는 요리하다가 손가락을 자주 베였습니다. 큰 붕대는 혼자서 감기 어려웠어요. 그래서 그는 작은 솜 조각을 테이프 위에 올리고 덮어 두었습니다. 이제 아내는 혼자서도 쓸 수 있었죠. 그의 회사는 나중에 이것을 ‘밴드에이드’로 팔았습니다.',
       check: {q: 'Why did Earle Dickson make small bandages?', a: 'Because his wife often cut her fingers and couldn’t put on big bandages by herself.'}, think: '누군가를 돕고 싶은 마음은 발명에 어떤 힘이 될까?'},
      {who: 'A Teen Inventor (1)', en: 'Ann Makosinski is a Canadian girl who loves making things. When she was 15, she heard about a friend in the Philippines. Her friend had no electricity at home, so she couldn’t study at night.',
       ko: '앤 마코신스키는 무언가 만들기를 좋아하는 캐나다 소녀입니다. 열다섯 살 때 그녀는 필리핀에 사는 한 친구의 이야기를 들었습니다. 그 친구는 집에 전기가 없어서 밤에 공부할 수 없었어요.',
       check: {q: 'Why couldn’t Ann’s friend study at night?', a: 'Because she had no electricity at home.'}, think: '전기 없이 밤을 보낸다면 무엇이 가장 불편할까?'},
      {who: 'A Teen Inventor (2)', en: 'Ann wanted to help her friend, so she designed a flashlight which runs on the heat of your hand. It doesn’t need batteries! With this invention, she won a top prize at a big science fair.',
       ko: '앤은 친구를 돕고 싶어서 손의 열로 작동하는 손전등을 설계했습니다. 건전지가 필요 없죠! 이 발명품으로 그녀는 큰 과학 박람회에서 최고상을 받았습니다.',
       check: {q: 'What does Ann’s flashlight run on?', a: 'The heat of your hand.'}, think: '이 손전등은 또 어디에 쓰일 수 있을까?'},
      {who: 'Your Turn', en: 'These inventors had something in common. They looked closely at problems which people had every day. Is there a problem around you? Look closely. Your answer could be the next great idea.',
       ko: '이 발명가들에게는 공통점이 있었습니다. 사람들이 날마다 겪는 문제를 자세히 들여다보았다는 것이죠. 여러분 주변에도 문제가 있나요? 자세히 보세요. 여러분의 답이 다음 멋진 아이디어가 될 수도 있습니다.',
       check: {q: 'What did the inventors have in common?', a: 'They looked closely at problems which people had every day.'}, think: '내가 해결해 보고 싶은 일상의 문제는?'}
    ],
    split: 3,
    next: '다른 발명가들은\n어떤 문제를 해결했을까?',
    recap: {q: '붙임쪽지는 어떻게 태어났을까?', items: [{k: 'MISTAKE', v: 'Silver made a weak glue.'}, {k: 'PROBLEM', v: 'Fry’s bookmarks kept falling out.'}, {k: 'IDEA', v: 'He put the glue on the bookmarks.'}]},
    tf: [
      {p: 1, s: 'Spencer Silver wanted to make a weak glue.', a: false, why: '아주 강한 풀을 만들려고 했다.'},
      {p: 2, s: 'Art Fry’s bookmarks kept falling out of his song book.', a: true},
      {p: 3, s: 'Earle Dickson’s wife cut her fingers while gardening.', a: false, why: '요리하다가 베였다.'},
      {p: 3, s: 'The small bandages were easy to use alone.', a: true},
      {p: 5, s: 'Ann’s flashlight needs batteries.', a: false, why: '건전지 없이 손의 열로 작동한다.'},
      {p: 6, s: 'The inventors looked closely at everyday problems.', a: true}
    ],
    key: [
      {en: 'Here are three people {{who}} turned problems into ideas.', note: '주격 관계대명사 who: 사람을 설명', g: 'g2'},
      {en: 'He made a weak glue {{which}} could stick to paper.', note: '주격 관계대명사 which: 사물을 설명', g: 'g2'},
      {en: '{{What a simple idea}}!', note: 'What + a + 형용사 + 명사! (감탄문)', g: 'g1'},
      {en: 'The bookmarks {{kept falling out}}.', note: 'keep + -ing: 계속 ~하다', g: ''},
      {en: 'She designed a flashlight {{which runs on}} the heat of your hand.', note: 'which + 단수 동사 runs (앞 명사 flashlight)', g: 'g2'},
      {en: 'They looked closely at problems {{which}} people had every day.', note: 'which 이하가 problems를 설명', g: 'g2'}
    ],
    summary: {text: 'Spencer Silver made a weak {{glue}} by mistake, and Art Fry used it for his {{bookmarks}}. Earle Dickson made small {{bandages}} for his wife. Ann Makosinski designed a {{flashlight}} which runs on body {{heat}}. Great ideas often start with small {{problems}}.'},
    order: ['Silver tried to make a strong glue.', 'He made a weak glue instead.', 'Fry’s bookmarks kept falling out.', 'Fry put the glue on his bookmarks.'],
    chart: {title: 'THREE IDEAS', ko: '세 발명 비교하기', cols: ['Problem', 'Idea', 'Result'], note: '세 발명 모두 ‘누군가의 불편’에서 시작했다는 공통점을 찾게 한다.', rows: [
      {name: 'Silver & Fry', cells: ['bookmarks fell out', 'use the weak glue', 'sticky notes']},
      {name: 'Dickson', cells: ['big bandages were hard to use', 'small cotton on tape', 'Band-Aids']},
      {name: 'Makosinski', cells: ['no electricity at night', 'a flashlight on hand heat', 'top prize at a science fair']}
    ]},
    wrap: {en: 'A small problem around me is ______. I want to make something which ______. What a ______ idea!', ko: '관통 질문으로 돌아가기: 내 주변의 문제와 해결 아이디어를 세 문장으로 쓰기'}
  },

  quiz: [
    ['“발명가”를 뜻하는 낱말은?', ['invent', 'inventor', 'invention', 'inventive'], 1, 'invent(발명하다) → inventor(발명가)'],
    ['“simple”의 반대말은?', ['easy', 'useful', 'amazing', 'difficult'], 3, 'simple(간단한) ↔ difficult(어려운)'],
    ['빈칸에 알맞은 것은? “This car runs ___ electricity.”', ['on', 'at', 'off', 'into'], 0, 'run on: ~으로 작동하다'],
    ['“She ___ a great idea.” (떠올렸다)', ['fell out', 'ran on', 'came up with', 'turned into'], 2, 'come up with: 떠올리다'],
    ['놀람을 나타내는 표현이 아닌 것은?', ['What a surprise!', 'That’s amazing!', 'I can’t believe it!', 'Can you tell me how?'], 3, 'Can you tell me how ~?는 방법을 묻는 표현.'],
    ['방법을 묻는 표현은?', ['Guess what!', 'How do I save it?', 'Did you know that?', 'What a great idea!'], 1, 'How do I ~? / Can you tell me how to ~?'],
    ['순서를 나타내는 말로 알맞게 짝지은 것은?', ['First – Then – Finally', 'Then – First – Finally', 'Finally – Then – First', 'First – Finally – Then'], 0, 'First → Then → Finally'],
    ['Let’s Watch에서 데이나의 아이디어는?', ['새 우산 사기', '우산에 리본 달기', '우산꽂이 바꾸기', '빛나는 이름표 붙이기'], 3, 'a name tag which lights up in the rain'],
    ['빈칸에 알맞은 것은? “___ a creative idea!”', ['How', 'What', 'Which', 'Who'], 1, 'What + a + 형용사 + 명사!'],
    ['빈칸에 알맞은 것은? “She is a girl ___ loves robots.”', ['who', 'what', 'which', 'when'], 0, '사람을 설명하는 주격 관계대명사 who'],
    ['어법상 틀린 문장은?', ['How fast it is!', 'What great news!', 'What cute dogs!', 'What great idea it is!'], 3, 'What a great idea it is!'],
    ['빈칸에 알맞은 것은? “I have a robot which ___ the floor.”', ['clean', 'cleans', 'cleaning', 'to clean'], 1, '앞 명사 a robot이 단수 → cleans'],
    ['스펜서 실버가 원래 만들려던 것은?', ['아주 강한 풀', '약한 풀', '종이 책갈피', '붙임쪽지'], 0, 'he was trying to make a very strong glue'],
    ['얼 딕슨이 작은 밴드를 만든 까닭은?', ['상을 받으려고', '회사의 지시로', '아내를 도우려고', '솜이 남아서'], 2, '아내가 혼자서도 쓸 수 있도록'],
    ['앤 마코신스키의 손전등의 특징은?', ['태양열로 켜진다', '물속에서도 켜진다', '건전지가 필요 없다', '목소리로 켜진다'], 2, 'runs on the heat of your hand, doesn’t need batteries']
  ]
};
