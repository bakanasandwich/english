/* 중1 영어(동아·윤정미) Lesson 6 · Good for the Earth, Good for Us
   교과서 대조(2026-10): 의사소통 기능(도움 요청하고 답하기 · 거절의 이유 말하기), 언어 형식(to부정사 명사적 용법 · 명사절 접속사 that),
   읽기 주제(Join the Zero-Waste Challenge — 쓰레기 줄이기 도전 이야기), 단원 어휘를 교과서 목차·단어 목록과 맞췄다.
   대화문·읽기 글은 저작권 때문에 교과서 원문을 싣지 않고, 같은 주제·같은 언어 형식·교과서 어휘로 새로 쓴 글이다. */
window.LESSON = {
  book: 'm1-donga', no: 6,
  title: 'Good for the Earth, Good for Us', ko: '지구에 좋은 것이 우리에게도 좋다',
  bigQ: {en: 'What small things can we do for the Earth?', ko: '지구를 위해 우리가 할 수 있는 작은 일은 무엇일까?'},
  align: {
    tb: {reading: 'Join the Zero-Waste Challenge', funcs: ['도움 요청하고 답하기', '거절의 이유 말하기'], forms: ['to부정사 명사적 용법 (want to save)', '접속사 that (I heard that ~)'],
      note: '교과서 읽기는 네 사람이 음식물 쓰레기 줄이기·다시 쓰기·일회용 플라스틱 안 쓰기·재활용 도전을 한 경험을 나누는 글. 여기 본문은 다른 네 가지 도전(중고 장터, 플로깅, 라벨 떼기, 채소 다시 키우기)으로 새로 쓴 글이다.'},
    std: {vocab: ['9영01-01', '9영02-01'], talk: ['9영01-06', '9영02-11'], grammar: ['9영02-04'], read1: ['9영01-02', '9영01-09'], read2: ['9영02-06', '9영02-09']},
    forms: ['To-Infinitive', 'Reports of Questions and Statements']
  },
  goals: {
    vocab: ['환경과 관련된 낱말 20개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 내가 할 수 있는 환경 보호 실천을 한 문장으로 말할 수 있다.'],
    talk: ['도움을 요청하고 답할 수 있다. (Can you please ~? — Sure. No problem.)', '거절하면서 그 이유를 말할 수 있다. (I’m sorry, but I can’t. I’m ~.)'],
    grammar: ['want, decide, plan 뒤에 to부정사를 써서 하고 싶은 일·결심을 말할 수 있다.', 'think, know, hear, learn 뒤에 접속사 that절을 써서 생각이나 들은 내용을 말할 수 있다.'],
    read1: ['쓰레기 줄이기 도전 글을 읽고 첫 두 사람이 한 일을 파악할 수 있다.'],
    read2: ['네 가지 도전을 비교하고, 내가 해 볼 도전과 그 까닭을 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'How much trash do you throw away in a day?', ko: '하루에 쓰레기를 얼마나 버리나요?', note: '과자 봉지, 음료 컵, 휴지 등 오늘 버린 것을 떠올리게 한다. 그 쓰레기를 줄이는 말로 이어진다.'},
    words: [
      {w: 'challenge', pos: 'n.', ko: '도전', ic: '🏁', ex: 'Join the zero-waste challenge!', exKo: '쓰레기 없애기 도전에 참여하세요!'},
      {w: 'environment', pos: 'n.', ko: '환경', ic: '🌍', ex: 'We must protect the environment.', exKo: '우리는 환경을 보호해야 한다.'},
      {w: 'reduce', pos: 'v.', ko: '줄이다', ic: '📉', ex: 'Let’s reduce food waste.', exKo: '음식물 쓰레기를 줄이자.'},
      {w: 'recycle', pos: 'v.', ko: '재활용하다', ic: '♻️', ex: 'I recycle cans and bottles.', exKo: '나는 캔과 병을 재활용한다.'},
      {w: 'produce', pos: 'v.', ko: '만들어 내다, 생산하다', ic: '🏭', ex: 'We produce a lot of trash.', exKo: '우리는 쓰레기를 많이 만들어 낸다.'},
      {w: 'single', pos: 'adj.', ko: '단 하나의, 한 번의', ic: '1️⃣', ex: 'Say no to single-use cups.', exKo: '일회용 컵을 거절하세요.'},
      {w: 'container', pos: 'n.', ko: '용기, 그릇', ic: '🥡', ex: 'Bring your own container.', exKo: '자기 용기를 가져오세요.'},
      {w: 'own', pos: 'adj.', ko: '자기 자신의', ic: '🙋', ex: 'I use my own cup.', exKo: '나는 내 컵을 쓴다.'},
      {w: 'secondhand', pos: 'adj.', ko: '중고의', ic: '👕', ex: 'I bought a secondhand jacket.', exKo: '나는 중고 재킷을 샀다.'},
      {w: 'plog', pos: 'v.', ko: '플로깅하다 (달리며 쓰레기 줍기)', ic: '🏃', ex: 'We plog in the park on Sundays.', exKo: '우리는 일요일마다 공원에서 플로깅을 한다.'},
      {w: 'label', pos: 'n.', ko: '상표, 라벨', ic: '🏷️', ex: 'Take the label off the bottle.', exKo: '병에서 라벨을 떼어라.'},
      {w: 'machine', pos: 'n.', ko: '기계', ic: '🤖', ex: 'Put the cans into the machine.', exKo: '캔을 기계에 넣어라.'},
      {w: 'leftover', pos: 'n.', ko: '남은 음식', ic: '🍱', ex: 'I made lunch out of leftovers.', exKo: '나는 남은 음식으로 점심을 만들었다.'},
      {w: 'delivery', pos: 'n.', ko: '배달', ic: '🛵', ex: 'Food delivery uses a lot of plastic.', exKo: '음식 배달은 플라스틱을 많이 쓴다.'},
      {w: 'completely', pos: 'adv.', ko: '완전히', ic: '✅', ex: 'Plastic never goes away completely.', exKo: '플라스틱은 결코 완전히 사라지지 않는다.'},
      {w: 'plant', pos: 'v. / n.', ko: '심다; 식물', ic: '🌱', ex: 'We planted green onions.', exKo: '우리는 파를 심었다.'},
      {w: 'leader', pos: 'n.', ko: '대표, 지도자', ic: '🧑‍✈️', ex: 'She is the leader of the green club.', exKo: '그녀는 환경 동아리 대표다.'},
      {w: 'favor', pos: 'n.', ko: '부탁, 호의', ic: '🙏', ex: 'Can you do me a favor?', exKo: '내 부탁 하나 들어줄래?'},
      {w: 'tear', pos: 'v.', ko: '찢다 (과거 tore)', ic: '✂️', ex: 'My dog tore my bag.', exKo: '우리 개가 내 가방을 찢었다.'},
      {w: 'sew', pos: 'v.', ko: '바느질하다, 꿰매다', ic: '🪡', ex: 'I sewed the hole in my shirt.', exKo: '나는 셔츠의 구멍을 꿰맸다.'}
    ],
    phrases: [
      {w: 'Can you please ~?', ko: '~해 줄 수 있니?', ex: 'Can you please carry this box?', exKo: '이 상자 좀 날라 줄 수 있니?'},
      {w: 'I’m sorry, but I can’t.', ko: '미안하지만 안 돼.', ex: 'I’m sorry, but I can’t. I’m busy.', exKo: '미안하지만 못 해. 바빠.'},
      {w: 'eat out', ko: '외식하다', ex: 'We ate out last night.', exKo: '우리는 어젯밤 외식했다.'},
      {w: 'in return', ko: '보답으로, 대신에', ex: 'I got points in return.', exKo: '나는 그 대가로 포인트를 받았다.'},
      {w: 'one by one', ko: '하나씩', ex: 'Put the bottles in one by one.', exKo: '병을 하나씩 넣어라.'},
      {w: 'go away', ko: '사라지다', ex: 'The smell didn’t go away.', exKo: '냄새가 사라지지 않았다.'}
    ],
    pairs: [
      {a: 'reduce', b: 'increase', rel: '반대말'},
      {a: 'use', b: 'reuse', rel: '쓰다 / 다시 쓰다 (re- = 다시)'},
      {a: 'deliver', b: 'delivery', rel: '동사 / 명사'},
      {a: 'complete', b: 'completely', rel: '형용사 / 부사'}
    ],
    wrap: {en: 'I want to ______ for the Earth. I think that ______.', ko: '오늘 배운 낱말로 내가 할 수 있는 환경 보호 실천 쓰기'}
  },

  talk: {
    hook: {en: 'When do you ask your friends for help?', ko: '친구에게 언제 도움을 부탁하나요?', note: '무거운 짐, 숙제, 청소 등 상황을 모은다. 부탁하고, 들어주거나 이유를 대며 거절하는 영어 표현으로 이어진다.'},
    speakers: {Yuna: {voice: 0, pitch: 1.15}, Alex: {voice: 1, pitch: 1}, Dad: {voice: 2, pitch: .9}, Seho: {voice: 1, pitch: .95}, 'Ms. Lim': {voice: 2, pitch: 1.05}, Jia: {voice: 0, pitch: 1.1}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '도움 요청하고 답하기',
        key: {q: ['Can you please ~?', 'Can you do me a favor?', 'Can you help me ~?'], a: ['Sure. No problem.', 'Of course.', 'OK. What is it?']},
        note: 'Can you please + 동사원형 ~?은 부탁하는 말. please를 넣으면 더 공손하다. 들어줄 때는 Sure. / No problem.',
        dialogs: [
          { title: 'Dialogue A', setting: '방과 후, 환경 동아리 방', lines: [
            {s: 'Yuna', en: 'Alex, {{can you do me a favor}}?', ko: '알렉스, 부탁 하나 들어줄래?'},
            {s: 'Alex', en: '{{Sure}}. What is it?', ko: '물론이지. 뭔데?'},
            {s: 'Yuna', en: '{{Can you please}} take the labels off these bottles?', ko: '이 병들에서 라벨 좀 떼어 줄 수 있어?'},
            {s: 'Alex', en: '{{No problem}}. Why do we take them off?', ko: '문제없어. 왜 떼는 거야?'},
            {s: 'Yuna', en: 'Clean bottles are easier to recycle.', ko: '깨끗한 병이 재활용하기 더 쉽거든.'}
          ]},
          { title: 'Dialogue B', setting: '토요일 아침, 공원 입구', lines: [
            {s: 'A', en: 'Can you please hold this bag for me? I’m going to pick up that can.', ko: '이 봉투 좀 들어 줄래? 저 캔을 주우려고.'},
            {s: 'B', en: 'Of course. Are you plogging?', ko: '물론이지. 플로깅하는 중이야?'},
            {s: 'A', en: 'Yes. I jog and pick up trash at the same time.', ko: '응. 조깅하면서 동시에 쓰레기를 주워.'},
            {s: 'B', en: 'Cool. Can I join you?', ko: '멋지다. 나도 같이 해도 돼?'}
          ]}
        ],
        check: [
          {q: 'What does Yuna ask Alex to do?', a: 'Take the labels off the bottles.'},
          {q: 'Why do they take the labels off?', a: 'Clean bottles are easier to recycle.'},
          {q: 'What is plogging?', a: 'Jogging and picking up trash at the same time.'}
        ],
        drill: {frame: ['A: Can you please ____?', 'B: Sure. No problem.'], opts: ['open the door', 'carry this box', 'turn off the light', 'help me with this', 'hold my bag', 'close the window']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '거절의 이유 말하기',
        key: {q: ['Can you please ~?'], a: ['I’m sorry, but I can’t. I’m busy now.', 'I’m afraid I can’t. I have to ~.', 'Sorry. Maybe next time.']},
        note: '거절할 때는 I’m sorry, but I can’t.로 먼저 미안함을 말하고, 바로 이유를 붙인다. 이유가 있으면 상대가 덜 서운하다.',
        dialogs: [
          { title: 'Dialogue A', setting: '저녁, 집 부엌', lines: [
            {s: 'Dad', en: 'Seho, can you please take out the recycling?', ko: '세호야, 재활용 쓰레기 좀 내다 줄래?'},
            {s: 'Seho', en: '{{I’m sorry, but I can’t}}, Dad. {{I’m late for}} my piano lesson.', ko: '죄송하지만 못 해요, 아빠. 피아노 수업에 늦었어요.'},
            {s: 'Dad', en: 'Oh, I see. Then I’ll do it.', ko: '아, 그렇구나. 그럼 내가 할게.'},
            {s: 'Seho', en: 'Thanks, Dad. I’ll do it tomorrow.', ko: '고마워요, 아빠. 내일은 제가 할게요.'}
          ]},
          { title: 'Dialogue B', setting: '쉬는 시간, 교실', lines: [
            {s: 'Jia', en: 'Can you please come to the secondhand market on Saturday? We need more helpers.', ko: '토요일에 중고 장터에 와 줄 수 있어? 도우미가 더 필요해.'},
            {s: 'B', en: '{{I’m afraid I can’t}}. {{I have to}} visit my grandma.', ko: '안 될 것 같아. 할머니 댁에 가야 하거든.'},
            {s: 'Jia', en: 'That’s OK. Can you give us some old books, then?', ko: '괜찮아. 그럼 헌책을 좀 줄 수 있어?'},
            {s: 'B', en: 'Sure. No problem.', ko: '물론이지. 문제없어.'}
          ]}
        ],
        check: [
          {q: 'Why can’t Seho take out the recycling?', a: 'He is late for his piano lesson.'},
          {q: 'Why can’t B go to the secondhand market?', a: 'B has to visit B’s grandma.'},
          {q: 'What will B give Jia?', a: 'Some old books.'}
        ],
        drill: {frame: ['A: Can you please help me?', 'B: I’m sorry, but I can’t. I ____.'], opts: ['am busy now', 'have a lot of homework', 'am late for class', 'have to go home', 'am sick today', 'have soccer practice']}
      }
    ],
    interviewEx: 'Minji asked me to plog with her. I said, “I’m sorry, but I can’t. I have a piano lesson.”',
    watch: {
      label: 'Let’s Watch', title: 'Green Club Meeting', setting: '환경 동아리 회의. 임 선생님과 학생들이 역할을 나눈다.',
      lines: [
        {s: 'Ms. Lim', en: 'Our Green Week starts on Monday. Jia, can you please make the posters?', ko: '그린 주간이 월요일에 시작해요. 지아, 포스터를 만들어 줄 수 있니?'},
        {s: 'Jia', en: 'Sure. No problem. I want to use old paper for them.', ko: '물론이죠. 문제없어요. 헌 종이로 만들고 싶어요.'},
        {s: 'Ms. Lim', en: 'Great idea! Alex, can you please be the leader of the plogging team?', ko: '좋은 생각이야! 알렉스, 플로깅 팀 대표를 맡아 줄 수 있니?'},
        {s: 'Alex', en: 'I’m sorry, but I can’t. I have soccer practice every morning. But I can help on Saturday.', ko: '죄송하지만 못 해요. 매일 아침 축구 연습이 있어요. 하지만 토요일에는 도울 수 있어요.'},
        {s: 'Ms. Lim', en: 'OK. Thank you, everyone. I think that we can make a big change!', ko: '알겠어. 모두 고마워요. 우리가 큰 변화를 만들 수 있을 거라고 생각해요!'}
      ],
      check: [
        {q: 'What will Jia make?', a: 'The posters (with old paper).'},
        {q: 'Why can’t Alex be the leader?', a: 'He has soccer practice every morning.'},
        {q: 'When can Alex help?', a: 'On Saturday.'}
      ]
    },
    wrap: {en: 'Ask your partner for help with a green activity. Accept, or refuse and give a reason.', ko: '짝에게 환경 활동을 도와 달라고 부탁하고, 들어주거나 이유를 대며 거절하기'}
  },

  grammar: {
    cover: 'to · that',
    hook: {en: 'Do you {{want to}} save the Earth?  /  I heard {{that}} plastic never goes away completely.', ko: 'want 뒤의 to save, heard 뒤의 that은 각각 어떤 덩어리를 만들까?', answer: 'to save → “구하는 것”(want의 목적어) / that + 주어 + 동사 → “~라는 것”(heard의 목적어)', note: '교과서 언어 형식(Do you want to save the Earth? / I heard that plastic never goes away completely.)과 같은 짜임이다.'},
    points: [
      { id: 'g1', name: 'to부정사 (명사적 용법)', short: 'to부정사', form: 'want / plan / decide / hope / need + to + 동사원형', meaning: '~하는 것, ~하기를',
        notice: [
          {en: 'I {{want to}} reduce my trash.', ko: '나는 쓰레기를 줄이고 싶다.'},
          {en: 'She {{decided to}} fix her old bag.', ko: '그녀는 낡은 가방을 고치기로 결심했다.'},
          {en: 'We {{need to}} bring our own cups.', ko: '우리는 자기 컵을 가져와야 한다.'}
        ],
        rule: [
          {k: '형태', v: 'to + 동사원형 (주어·시제와 상관없이 늘 원형)', ex: 'He wants to plog. (wants to plogs ✗)'},
          {k: '목적어', v: 'want, hope, plan, decide, need, learn + to부정사', ex: 'I learned to sew.'},
          {k: '주어·보어', v: 'To recycle is easy. / My plan is to plant seeds.', ex: 'My goal is to reduce waste.'}
        ],
        compare: {
          title: '목적어로 무엇을 쓸까?', note: 'want, decide는 to부정사만, enjoy, finish는 동명사만, like, start는 둘 다.',
          head: ['to부정사만', '동명사만', '둘 다'],
          cols: [['want to ~', 'decide to ~', 'plan to ~'], ['enjoy -ing', 'finish -ing', 'mind -ing'], ['like', 'love', 'start']]
        },
        check: [
          {q: 'I want ____ the Earth. (save)', a: 'to save'},
          {q: 'She decided ____ her bag. (fix)', a: 'to fix'},
          {q: 'We plan ____ a secondhand market. (open)', a: 'to open'},
          {q: 'He needs ____ less plastic. (use)', a: 'to use'},
          {q: 'My goal is ____ food waste. (reduce)', a: 'to reduce'}
        ],
        trap: {bad: 'I decided fixing my bag.', good: 'I decided to fix my bag.', why: 'decide는 to부정사를 목적어로 쓴다.'},
        scramble: [
          {ko: '나는 쓰레기를 줄이고 싶다.', en: 'I want to reduce my trash.'},
          {ko: '그는 낡은 셔츠를 꿰매기로 결심했다.', en: 'He decided to sew his old shirt.'},
          {ko: '우리는 자기 용기를 가져와야 한다.', en: 'We need to bring our own containers.'}
        ]
      },
      { id: 'g2', name: '접속사 that', short: '접속사 that', form: 'think / know / hear / learn + (that) + 주어 + 동사', meaning: '~라는 것을, ~라고',
        notice: [
          {en: 'I heard {{that}} plastic never goes away completely.', ko: '나는 플라스틱이 결코 완전히 사라지지 않는다고 들었다.'},
          {en: 'I think {{that}} plogging is fun.', ko: '나는 플로깅이 재미있다고 생각한다.'},
          {en: 'We learned {{that}} labels make recycling hard.', ko: '우리는 라벨이 재활용을 어렵게 한다는 것을 배웠다.'}
        ],
        rule: [
          {k: '역할', v: 'that + 주어 + 동사 = “~라는 것” (동사의 목적어가 되는 문장 덩어리)', ex: 'I know that you are busy.'},
          {k: '생략', v: '목적어 자리의 that은 자주 생략한다', ex: 'I think (that) it’s a good idea.'},
          {k: '부정', v: '“~가 아니라고 생각한다”는 보통 I don’t think that ~', ex: 'I don’t think that the bag looks perfect.'}
        ],
        check: [
          {q: 'I think ____ recycling is important. (접속사)', a: 'that'},
          {q: 'She knows that I ____ a reusable cup. (use)', a: 'use'},
          {q: 'I heard that he ____ a new bag yesterday. (buy)', a: 'bought'},
          {q: 'I ____ think that it is perfect. (부정)', a: 'don’t'},
          {q: 'We learned ____ plastic hurts sea animals. (접속사)', a: 'that'}
        ],
        trap: {bad: 'I think that is plogging fun.', good: 'I think that plogging is fun.', why: 'that 뒤에는 평서문 어순(주어 + 동사).'},
        scramble: [
          {ko: '나는 플라스틱이 사라지지 않는다고 들었다.', en: 'I heard that plastic doesn’t go away.'},
          {ko: '나는 중고 옷이 멋지다고 생각한다.', en: 'I think that secondhand clothes are cool.'},
          {ko: '나는 그 가방이 완벽해 보인다고 생각하지 않는다.', en: 'I don’t think that the bag looks perfect.'}
        ]
      }
    ],
    wrap: {en: 'I want to ______. I think that ______.', ko: '내가 해 보고 싶은 환경 실천(to부정사)과 그에 대한 내 생각(that절) 쓰기'},
    wrapEx: 'I want to bring my own container to the bakery. I think that it can reduce a lot of plastic.'
  },

  reading: {
    title: 'Our Green Week Stories', kind: '환경 동아리 게시판', cover: 'Green', coverKo: '쓰레기 줄이기 도전', cover2: 'Zero Waste', coverKo2: '작은 실천, 큰 변화',
    before: [
      {q: 'Look at the title. What did the students do for a week?', a: '쓰레기를 줄이는 도전'},
      {q: 'What can you do to reduce trash?', a: '자기 컵 쓰기, 재활용, 중고 물건 쓰기 등'}
    ],
    gloss: {'Green Week': '그린 주간(환경 실천 주간)', 'market': '장터', 'swap': '맞바꾸다', 'bottle cap': '병뚜껑', 'glue': '접착제', 'root': '뿌리', 'green onion': '파', 'scrap': '조각, 남은 것'},
    paras: [
      {who: 'Green Club', en: 'Every day, we produce a lot of trash. Last week, our class joined Green Week. Do you want to know about our challenges? Here are four stories from our members.',
       ko: '우리는 날마다 쓰레기를 많이 만들어 낸다. 지난주에 우리 반은 그린 주간에 참여했다. 우리의 도전에 대해 알고 싶나요? 동아리 회원 네 명의 이야기를 소개한다.',
       check: {q: 'What did the class join last week?', a: 'Green Week.'}, think: '우리 반이 그린 주간을 연다면 무엇을 할까?'},
      {who: 'Jia', en: 'I love new clothes, but I learned that making one T-shirt uses a lot of water. So I decided to try a secondhand market. I brought my old jacket and swapped it for a cool secondhand shirt. I think that it looks better on me!',
       ko: '나는 새 옷을 좋아하지만, 티셔츠 한 장을 만드는 데 물이 많이 든다는 것을 알게 되었다. 그래서 중고 장터에 가 보기로 했다. 내 낡은 재킷을 가져가서 멋진 중고 셔츠와 바꿨다. 이 셔츠가 나한테 더 잘 어울리는 것 같다!',
       check: {q: 'What did Jia swap her old jacket for?', a: 'A (cool) secondhand shirt.'}, think: '중고 옷을 사면 환경에 어떤 도움이 될까?'},
      {who: 'Alex', en: 'On Saturday, I went plogging with my soccer team. We jogged along the river and picked up trash one by one. In one hour, we filled five bags! I hope to plog every month.',
       ko: '토요일에 나는 축구 팀과 플로깅을 했다. 강을 따라 달리면서 쓰레기를 하나씩 주웠다. 한 시간 만에 봉투 다섯 개를 채웠다! 나는 매달 플로깅을 하고 싶다.',
       check: {q: 'How many bags did Alex’s team fill?', a: 'Five bags.'}, think: '플로깅은 무엇과 무엇을 합친 활동일까?'},
      {who: 'Seho', en: 'I heard that dirty bottles are hard to recycle. So I washed all our plastic bottles and took the labels off. Then I put them into a recycling machine near my house. I got some points in return. I want to use them at the school store.',
       ko: '나는 더러운 병은 재활용하기 어렵다고 들었다. 그래서 우리 집 플라스틱병을 모두 씻고 라벨을 뗐다. 그리고 집 근처 재활용 기계에 넣었다. 그 대가로 포인트를 받았다. 그 포인트를 학교 매점에서 쓰고 싶다.',
       check: {q: 'What did Seho get in return?', a: 'Some points.'}, think: '왜 라벨을 떼고 병을 씻어야 할까?'},
      {who: 'Yuna', en: 'My family often throws away the roots of green onions. This time, I decided to plant them in a container with water. In a week, they grew again! Now we don’t need to buy green onions. I don’t think that my little garden looks perfect, but I love it.',
       ko: '우리 가족은 파 뿌리를 자주 버린다. 이번에는 그것을 물이 담긴 용기에 심어 보기로 했다. 일주일 만에 파가 다시 자랐다! 이제 우리는 파를 살 필요가 없다. 내 작은 텃밭이 완벽해 보이지는 않지만 나는 정말 좋다.',
       check: {q: 'What did Yuna plant?', a: 'The roots of green onions.'}, think: '버리는 것 가운데 다시 쓸 수 있는 것은?'},
      {who: 'Green Club', en: 'Our challenges were small, but we learned that small things can make a big change. What do you want to try? Join our challenge, and share your story!',
       ko: '우리의 도전은 작았지만, 작은 일이 큰 변화를 만들 수 있다는 것을 배웠다. 여러분은 무엇을 해 보고 싶나요? 우리 도전에 참여하고 이야기를 나눠 주세요!',
       check: {q: 'What did the club learn?', a: 'Small things can make a big change.'}, think: '내가 이번 주에 해 볼 수 있는 도전은?'}
    ],
    split: 3,
    next: '세호와 유나는\n어떤 도전을 했을까?',
    recap: {q: '지아와 알렉스는 어떤 도전을 했을까?', items: [{k: 'JIA', v: 'secondhand market · swapped an old jacket'}, {k: 'ALEX', v: 'plogging along the river · five bags in one hour'}]},
    tf: [
      {p: 1, s: 'Jia bought a new T-shirt.', a: false, why: 'She swapped her old jacket for a secondhand shirt.'},
      {p: 1, s: 'Making one T-shirt uses a lot of water.', a: true},
      {p: 2, s: 'Alex plogged alone.', a: false, why: 'He went plogging with his soccer team.'},
      {p: 3, s: 'Seho took the labels off the bottles.', a: true},
      {p: 4, s: 'Yuna’s green onions grew again in a week.', a: true},
      {p: 4, s: 'Yuna thinks that her garden looks perfect.', a: false, why: 'I don’t think that my little garden looks perfect.'}
    ],
    key: [
      {en: 'Do you {{want to know}} about our challenges?', note: 'want + to부정사', g: 'g1'},
      {en: 'I learned {{that}} making one T-shirt uses a lot of water.', note: 'learn + that절', g: 'g2'},
      {en: 'So I {{decided to try}} a secondhand market.', note: 'decide + to부정사', g: 'g1'},
      {en: 'I {{hope to plog}} every month.', note: 'hope + to부정사', g: 'g1'},
      {en: 'I heard {{that}} dirty bottles are hard to recycle.', note: 'hear + that절', g: 'g2'},
      {en: 'I don’t think {{that}} my little garden looks perfect.', note: 'don’t think + that절', g: 'g2'}
    ],
    summary: {text: 'Jia swapped her jacket for a {{secondhand}} shirt. Alex went {{plogging}} and filled five bags. Seho took the {{labels}} off bottles and got points in {{return}}. Yuna decided to {{plant}} green onion roots. They learned {{that}} small things can make a big change.'},
    order: ['Seho heard that dirty bottles are hard to recycle.', 'He washed the plastic bottles.', 'He put them into a recycling machine.', 'He got some points in return.'],
    chart: {title: 'GREEN WEEK', ko: '네 가지 도전 정리하기', cols: ['Challenge', 'What they learned / want'], note: '표를 보고 He/She decided to ~. He/She learned that ~. 문장으로 말하게 한다.', rows: [
      {name: 'Jia', cells: ['secondhand market', 'making a T-shirt uses a lot of water']},
      {name: 'Alex', cells: ['plogging', 'hopes to plog every month']},
      {name: 'Seho', cells: ['washing bottles, removing labels', 'dirty bottles are hard to recycle']},
      {name: 'Yuna', cells: ['planting green onion roots', 'doesn’t need to buy green onions']}
    ]},
    wrap: {en: 'I want to try ______. I think that ______.', ko: '관통 질문으로 돌아가기: 내가 해 볼 쓰레기 줄이기 도전과 그 까닭 쓰기'}
  },

  quiz: [
    ['“중고의”를 뜻하는 낱말은?', ['single', 'secondhand', 'completely', 'own'], 1, 'secondhand: 중고의'],
    ['“reduce”의 반대말은?', ['recycle', 'produce', 'increase', 'reuse'], 2, 'reduce ↔ increase'],
    ['“I got some points in ___.”', ['back', 'return', 'turn', 'time'], 1, 'in return: 보답으로'],
    ['도움을 요청하는 표현은?', ['Can you please carry this?', 'I’m sorry, but I can’t.', 'Sure. No problem.', 'I think that it’s fun.'], 0, 'Can you please ~?'],
    ['부탁을 들어주는 대답은?', ['I’m afraid I can’t.', 'Sure. No problem.', 'Maybe next time.', 'I’m busy now.'], 1, 'Sure. No problem.'],
    ['거절하며 이유를 말한 것은?', ['Of course.', 'Sure.', 'I’m sorry, but I can’t. I’m busy.', 'OK. What is it?'], 2, 'I’m sorry, but I can’t. + 이유'],
    ['Let’s Watch에서 알렉스가 대표를 맡지 못하는 까닭은?', ['아파서', '매일 아침 축구 연습이 있어서', '포스터를 만들어야 해서', '할머니 댁에 가야 해서'], 1, 'I have soccer practice every morning.'],
    ['빈칸에 알맞은 것은? “I want ___ the Earth.”', ['save', 'saving', 'to save', 'saved'], 2, 'want + to부정사'],
    ['빈칸에 알맞은 것은? “I heard ___ plastic never goes away.”', ['what', 'that', 'to', 'it'], 1, 'hear + that절'],
    ['어법상 틀린 문장은?', ['I decided to fix it.', 'She wants to plog.', 'I enjoy to recycle.', 'I think that it’s cool.'], 2, 'I enjoy recycling.'],
    ['빈칸에 알맞은 것은? “I don’t think that it ___ perfect.”', ['look', 'looks', 'looking', 'to look'], 1, 'that절의 주어 it + looks'],
    ['지아가 중고 장터에 간 까닭은?', ['새 옷이 비싸서', '티셔츠를 만드는 데 물이 많이 든다는 것을 알아서', '재킷이 작아져서', '친구가 불러서'], 1, 'I learned that making one T-shirt uses a lot of water.'],
    ['알렉스 팀이 한 시간 동안 채운 봉투 수는?', ['한 개', '세 개', '다섯 개', '열 개'], 2, 'we filled five bags'],
    ['세호가 재활용 전에 한 일은?', ['병을 찢었다', '병을 씻고 라벨을 뗐다', '병을 중고로 팔았다', '병에 파를 심었다'], 1, 'I washed all our plastic bottles and took the labels off.'],
    ['글의 요지로 알맞은 것은?', ['쓰레기는 기계로 줄인다', '작은 실천이 큰 변화를 만든다', '새 옷을 사지 말자', '플로깅은 힘들다'], 1, 'small things can make a big change']
  ]
};

/* ── 보강: 원리 중심 문법 · 모션 그래픽 · 낱말 만들기 · 발음 기호 ── */
(function (L) {
  const ipa = {challenge: '/ˈtʃælɪndʒ/', environment: '/ɪnˈvaɪrənmənt/', reduce: '/rɪˈduːs/', recycle: '/ˌriːˈsaɪkl/', produce: '/prəˈduːs/', single: '/ˈsɪŋɡl/', container: '/kənˈteɪnər/', own: '/oʊn/', secondhand: '/ˌsekəndˈhænd/', plog: '/plɑːɡ/', label: '/ˈleɪbl/', machine: '/məˈʃiːn/', leftover: '/ˈleftoʊvər/', delivery: '/dɪˈlɪvəri/', completely: '/kəmˈpliːtli/', plant: '/plænt/', leader: '/ˈliːdər/', favor: '/ˈfeɪvər/', tear: '/ter/', sew: '/soʊ/'};
  L.vocab.words.forEach(w => { if (ipa[w.w]) w.ipa = ipa[w.w]; });
  L.vocab.morph = [
    {w: 'recycle', ko: '재활용하다', parts: [{t: 're', k: 'pre', m: '다시'}, {t: 'cycle', k: 'root', m: '돌다, 순환'}], family: ['reuse', 'reduce', 'bicycle'], note: '다시(re) 돌게 하다 → 재활용하다.'},
    {w: 'secondhand', ko: '중고의', parts: [{t: 'second', k: 'root', m: '두 번째'}, {t: 'hand', k: 'root', m: '손'}], family: ['handmade', 'handwriting'], note: '두 번째 사람의 손에 들어간 → 중고의.'},
    {w: 'leftover', ko: '남은 음식', parts: [{t: 'left', k: 'root', m: '남겨진 (leave의 과거분사)'}, {t: 'over', k: 'root', m: '넘어서, 남아서'}], family: ['leave', 'left', 'takeover'], note: '먹고 남겨진(left) 것 → 남은 음식. 보통 복수형 leftovers.'}
  ];
  const [g1, g2] = L.grammar.points;
  g1.principle = {
    q: 'want 뒤에는 왜 to가 붙을까?',
    pic: [{en: 'I want', ko: '바라다'}, {en: 'to →', ko: '~쪽으로 (앞으로 할 일)', hot: true}, {en: 'save the Earth', ko: '하고 싶은 일'}],
    core: 'to의 원래 뜻은 “~쪽으로”다. to + 동사원형은 아직 하지 않은 “앞으로 할 일”을 가리키므로, want·hope·plan·decide처럼 앞을 바라보는 동사와 함께 쓰인다.',
    why: ['to 뒤에는 늘 동사원형 (to becomes ✗ → to become).', 'want to, hope to, plan to, decide to = ~하고 싶다/~하기를 바라다/~할 계획이다/~하기로 결심하다.', '“~하는 것”이라는 명사 역할을 하므로 명사적 용법이라고 부른다.']
  };
  g1.anim = [{title: '하고 싶은 일을 to 뒤에 붙이면', states: [
    {t: 'I/S | want/V | a new bag/O#o | .', note: '목적어 = 명사', ko: '나는 새 가방을 원한다.'},
    {t: 'I/S | want/V | to fix/X#o | my old bag | .', note: '목적어 자리에 to + 동사원형 (앞으로 할 일)', ko: '나는 낡은 가방을 고치고 싶다.'}]}];
  g1.contrast = {title: 'to 뒤에는 동사원형', pairs: [
    {a: 'She decided {{to plant}} the roots.', ka: '그녀는 뿌리를 심기로 결심했다. (to + 원형)', b: 'She {{planted}} the roots last week.', kb: '그녀는 지난주에 뿌리를 심었다. (과거 동사)'}],
    point: 'to 뒤에서는 시제·주어와 상관없이 동사원형.'};
  g2.principle = {
    q: 'that은 어떻게 문장 하나를 통째로 목적어로 만들까?',
    pic: [{en: 'I think', ko: '생각하다'}, {en: 'that', ko: '포장지', hot: true}, {en: 'plogging is fun', ko: '생각의 내용 (문장)'}],
    core: '접속사 that은 문장 하나를 “~라는 것”이라는 명사 덩어리로 포장해 준다. 그래서 think, know, believe의 목적어 자리에 문장이 통째로 들어갈 수 있다.',
    why: ['that 뒤에는 주어와 동사가 다 갖춰진 완전한 문장이 온다.', '목적어 자리의 that은 자주 생략된다 (I think plogging is fun).', '관계대명사 that(뒤가 불완전)과 구별: 접속사 that은 뒤가 완전하다.']
  };
  g2.anim = [{title: '문장을 that으로 포장해 목적어로', states: [
    {t: 'Plastic/S#e | never goes away/V#v | completely/M#f | . | / | I/S | heard/V | it | .', note: '두 문장', ko: '플라스틱은 결코 완전히 사라지지 않는다. 나는 그것을 들었다.'},
    {t: 'I/S | heard/V | that/X | plastic/S#e | never goes away/V#v | completely/M#f | .', note: 'that + 문장 = heard의 목적어', ko: '나는 플라스틱이 결코 완전히 사라지지 않는다고 들었다.'},
    {t: 'I/S | heard/V | plastic/S#e | never goes away/V#v | completely/M#f | .', note: '목적어 that은 생략할 수 있다', ko: '같은 뜻'}]}];
  g2.contrast = {title: '접속사 that vs 관계대명사 that', pairs: [
    {a: 'I think {{that}} plogging is fun.', ka: '나는 플로깅이 재미있다고 생각한다. (that + 주어 + 동사)', b: 'I think {{so}}.', kb: '나는 그렇게 생각한다. (짧게 받는 말)'}],
    point: 'think, know, hear, learn 뒤의 that + 주어 + 동사 = “~라는 것”.'};
})(window.LESSON);
