/* 중1 영어(동아·윤정미) Lesson 2 · Eat, Play, and Live Well!
   교과서 대조(2026-10): 의사소통 기능(빈도 묻고 답하기 · 제안하기), 언어 형식(현재진행형 · 조동사 can/will),
   읽기 주제(Healthy and Yummy Snacks for You — 십대 요리사들이 건강 간식을 소개), 단원 어휘를 교과서 목차·단어 목록과 맞췄다.
   대화문·읽기 글은 저작권 때문에 교과서 원문을 싣지 않고, 같은 주제·같은 언어 형식·교과서 어휘로 새로 쓴 글이다. */
window.LESSON = {
  book: 'm1-donga', no: 2,
  title: 'Eat, Play, and Live Well!', ko: '잘 먹고, 잘 놀고, 잘 살자!',
  bigQ: {en: 'What can we do for a healthy life?', ko: '건강하게 살기 위해 우리는 무엇을 할 수 있을까?'},
  align: {
    tb: {reading: 'Healthy and Yummy Snacks for You', funcs: ['빈도 묻고 답하기', '제안하기'], forms: ['현재진행형', '조동사 can · will'],
      note: '교과서 읽기는 요리 방송에 나온 세 나라의 십대 요리사가 건강 간식을 만들며 소개하는 글. 여기 본문은 학교 건강 간식 대회로 무대를 바꿔 새로 쓴 글이다.'},
    std: {vocab: ['9영01-01', '9영02-01'], talk: ['9영01-02', '9영02-04'], grammar: ['9영02-03'], read1: ['9영01-02', '9영01-03'], read2: ['9영02-03', '9영02-07']},
    forms: ['Progressives', 'Modals']
  },
  goals: {
    vocab: ['음식·건강과 관련된 낱말 20개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 나의 건강 간식을 한 문장으로 소개할 수 있다.'],
    talk: ['얼마나 자주 하는지 묻고 답할 수 있다. (How often do you ~? — Twice a week.)', '상대에게 제안할 수 있다. (Why don’t you ~? / Let’s ~.)'],
    grammar: ['현재진행형(be + -ing)으로 지금 하고 있는 일을 말할 수 있다.', '조동사 can, will 뒤에 동사원형을 써서 능력과 예정을 말할 수 있다.'],
    read1: ['건강 간식을 소개하는 글을 읽고 첫 두 요리사의 간식을 이해할 수 있다.'],
    read2: ['세 간식을 비교하고, 나만의 건강 간식 만드는 법을 영어로 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'What is your favorite snack? Is it healthy?', ko: '가장 좋아하는 간식은 무엇인가요? 그 간식은 건강한가요?', note: '과자, 떡볶이, 과일 등 답을 모으고 건강한 간식과 그렇지 않은 간식으로 나눈다.'},
    words: [
      {w: 'healthy', pos: 'adj.', ko: '건강한, 건강에 좋은', ic: '💪', audio: 'assets/audio/healthy.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Fruit is a healthy snack.', exKo: '과일은 건강한 간식이다.'},
      {w: 'unhealthy', pos: 'adj.', ko: '건강에 좋지 않은', ic: '🍟', ex: 'Too much soda is unhealthy.', exKo: '탄산음료를 너무 많이 마시면 건강에 좋지 않다.'},
      {w: 'chef', pos: 'n.', ko: '요리사', ic: '👩‍🍳', ex: 'The chef is cooking pasta.', exKo: '요리사가 파스타를 요리하고 있다.'},
      {w: 'host', pos: 'n.', ko: '진행자, 주인', ic: '🎙️', audio: 'assets/audio/host.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The host welcomes the guests.', exKo: '진행자가 손님들을 맞이한다.'},
      {w: 'teen', pos: 'n.', ko: '십대', ic: '🧑', audio: 'assets/audio/teen.mp3', audioCredit: 'Dvortygirl · GFDL (Wikimedia Commons, US)', ex: 'Three teens are on the show.', exKo: '십대 세 명이 방송에 나온다.'},
      {w: 'fair', pos: 'n.', ko: '박람회, 대회', ic: '🎪', audio: 'assets/audio/fair.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Our school has a food fair.', exKo: '우리 학교는 음식 박람회를 연다.'},
      {w: 'prize', pos: 'n.', ko: '상, 상품', ic: '🏅', audio: 'assets/audio/prize.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'She won first prize.', exKo: '그녀는 1등 상을 받았다.'},
      {w: 'bowl', pos: 'n.', ko: '그릇, 사발', ic: '🥣', audio: 'assets/audio/bowl.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Put the yogurt in a bowl.', exKo: '요구르트를 그릇에 담아라.'},
      {w: 'flour', pos: 'n.', ko: '밀가루', ic: '🌾', audio: 'assets/audio/flour.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'I don’t use any flour.', exKo: '나는 밀가루를 전혀 쓰지 않는다.'},
      {w: 'nut', pos: 'n.', ko: '견과', ic: '🥜', audio: 'assets/audio/nut.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Nuts are good for your brain.', exKo: '견과는 뇌에 좋다.'},
      {w: 'honey', pos: 'n.', ko: '꿀', ic: '🍯', audio: 'assets/audio/honey.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Add some honey on top.', exKo: '위에 꿀을 조금 넣어라.'},
      {w: 'garlic', pos: 'n.', ko: '마늘', ic: '🧄', audio: 'assets/audio/garlic.mp3', audioCredit: 'Association Shtooka, Judith Franck · CC BY 3.0 (Wikimedia Commons, UK)', ex: 'This sauce has garlic in it.', exKo: '이 소스에는 마늘이 들어 있다.'},
      {w: 'leaf', pos: 'n.', ko: '잎 (복수 leaves)', ic: '🍃', audio: 'assets/audio/leaf.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Put a mint leaf on the cup.', exKo: '컵 위에 박하 잎 하나를 올려라.'},
      {w: 'fry', pos: 'v.', ko: '(기름에) 튀기다', ic: '🍳', audio: 'assets/audio/fry.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'I don’t fry the potatoes.', exKo: '나는 감자를 튀기지 않는다.'},
      {w: 'thick', pos: 'adj.', ko: '걸쭉한, 두꺼운', ic: '🥤', ex: 'The smoothie is thick and cold.', exKo: '스무디가 걸쭉하고 차갑다.'},
      {w: 'enjoy', pos: 'v.', ko: '즐기다', ic: '😋', audio: 'assets/audio/enjoy.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'People enjoy this snack.', exKo: '사람들은 이 간식을 즐긴다.'},
      {w: 'regularly', pos: 'adv.', ko: '규칙적으로', ic: '📆', audio: 'assets/audio/regularly.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'I exercise regularly.', exKo: '나는 규칙적으로 운동한다.'},
      {w: 'instead', pos: 'adv.', ko: '대신에', ic: '🔄', ex: 'Drink water instead.', exKo: '대신 물을 마셔라.'},
      {w: 'important', pos: 'adj.', ko: '중요한', ic: '⭐', ex: 'Sleep is important for teens.', exKo: '잠은 십대에게 중요하다.'},
      {w: 'jog', pos: 'v.', ko: '조깅하다', ic: '🏃', audio: 'assets/audio/jog.mp3', audioCredit: 'Mx. Granger · CC0 (Wikimedia Commons, US)', ex: 'I jog in the park twice a week.', exKo: '나는 일주일에 두 번 공원에서 조깅한다.'}
    ],
    phrases: [
      {w: 'How often ~?', ko: '얼마나 자주 ~하니?', ex: 'How often do you jog?', exKo: '너는 얼마나 자주 조깅하니?'},
      {w: 'once / twice a week', ko: '일주일에 한 번 / 두 번', ex: 'I swim twice a week.', exKo: '나는 일주일에 두 번 수영한다.'},
      {w: 'Why don’t you ~?', ko: '~하는 게 어때?', ex: 'Why don’t you eat more fruit?', exKo: '과일을 더 먹는 게 어때?'},
      {w: 'be good for', ko: '~에 좋다', ex: 'Nuts are good for you.', exKo: '견과는 몸에 좋다.'},
      {w: 'be low in', ko: '~이 적다', ex: 'This snack is low in sugar.', exKo: '이 간식은 설탕이 적다.'},
      {w: 'all over the world', ko: '전 세계에서', ex: 'People all over the world love rice.', exKo: '전 세계 사람들이 쌀을 좋아한다.'}
    ],
    pairs: [
      {a: 'healthy', b: 'unhealthy', rel: '반대말 (un- = 아닌)'},
      {a: 'thick', b: 'thin', rel: '반대말'},
      {a: 'leaf', b: 'leaves', rel: '단수 / 복수'},
      {a: 'regular', b: 'regularly', rel: '형용사 / 부사'}
    ],
    wrap: {en: 'My healthy snack is ______. I eat it ______ a week.', ko: '오늘 배운 낱말로 나의 건강 간식을 소개하는 두 문장 쓰기'}
  },

  talk: {
    hook: {en: 'How often do you eat fast food?', ko: '패스트푸드를 얼마나 자주 먹나요?', note: '손을 들게 해 “일주일에 한 번, 두 번, 거의 안 먹음”으로 나눠 본다. 영어로 빈도를 묻고 답하는 법으로 이어진다.'},
    speakers: {Emma: {voice: 0, pitch: 1.1}, Jun: {voice: 1, pitch: 1}, Coach: {voice: 2, pitch: .95}, Hana: {voice: 0, pitch: 1.15}, Leo: {voice: 1, pitch: .95}, 'Ms. Yoon': {voice: 2, pitch: 1.05}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '빈도 묻고 답하기',
        key: {q: ['How often do you ~?'], a: ['Once a week.', 'Twice a month.', 'Three times a day.', 'Every day. / Almost never.']},
        note: 'How often은 “얼마나 자주”. 한 번 once, 두 번 twice, 세 번부터는 three times. 기간 앞에는 a를 쓴다 (once a week).',
        dialogs: [
          { title: 'Dialogue A', setting: '방과 후, 학교 운동장', lines: [
            {s: 'Emma', en: 'Jun, you run so fast! {{How often do you}} jog?', ko: '준, 너 정말 빨리 달린다! 얼마나 자주 조깅해?'},
            {s: 'Jun', en: 'I jog {{three times a week}}. How about you?', ko: '일주일에 세 번 조깅해. 너는?'},
            {s: 'Emma', en: 'I jog {{once a month}}. I’m always busy.', ko: '나는 한 달에 한 번 해. 늘 바빠서.'},
            {s: 'Jun', en: 'Jogging is important. It’s good for your heart.', ko: '조깅은 중요해. 심장에 좋거든.'}
          ]},
          { title: 'Dialogue B', setting: '편의점 앞', lines: [
            {s: 'A', en: 'Is that soda again? How often do you drink soda?', ko: '그거 또 탄산음료야? 탄산음료를 얼마나 자주 마셔?'},
            {s: 'B', en: '{{Every day}}. I love it.', ko: '매일 마셔. 정말 좋아해.'},
            {s: 'A', en: 'That’s unhealthy. It has a lot of sugar.', ko: '그건 건강에 안 좋아. 설탕이 많이 들어 있어.'},
            {s: 'B', en: 'I know, but it’s hard to stop.', ko: '알아, 그런데 끊기가 어려워.'}
          ]}
        ],
        check: [
          {q: 'How often does Jun jog?', a: 'Three times a week.'},
          {q: 'How often does Emma jog?', a: 'Once a month.'},
          {q: 'How often does B drink soda?', a: 'Every day.'}
        ],
        drill: {frame: ['A: How often do you ____?', 'B: ...'], opts: ['jog', 'eat fruit', 'drink milk', 'play games', 'ride a bike', 'eat fast food']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '제안하기',
        key: {q: ['Why don’t you ~?', 'Let’s ~.', 'How about ~ing?'], a: ['OK. I’ll try.', 'That’s a good idea.', 'Sorry, I can’t.']},
        note: 'Why don’t you + 동사원형 ~?은 “~하는 게 어때?”라는 제안. 이유를 묻는 말이 아니다. 받아들일 때는 OK, I’ll try. / Good idea.',
        dialogs: [
          { title: 'Dialogue A', setting: '편의점 앞 (Dialogue B에 이어서)', lines: [
            {s: 'A', en: '{{Why don’t you}} drink water {{instead}}?', ko: '대신 물을 마시는 게 어때?'},
            {s: 'B', en: 'Water? It has no taste.', ko: '물? 아무 맛도 없잖아.'},
            {s: 'A', en: 'Put a lemon slice in it. It’ll taste good.', ko: '레몬 한 조각을 넣어 봐. 맛있을 거야.'},
            {s: 'B', en: '{{OK. I’ll try}}.', ko: '알았어. 해 볼게.'}
          ]},
          { title: 'Dialogue B', setting: '토요일 아침, 전화 통화', lines: [
            {s: 'Hana', en: 'Leo, it’s a sunny day. {{Let’s}} ride bikes along the river.', ko: '레오, 날씨가 맑아. 강을 따라 자전거 타자.'},
            {s: 'Leo', en: '{{That’s a good idea}}. What time?', ko: '좋은 생각이야. 몇 시에?'},
            {s: 'Hana', en: '{{How about}} meeting at ten?', ko: '열 시에 만나는 거 어때?'},
            {s: 'Leo', en: 'Perfect. I’ll bring some nuts and bananas.', ko: '좋아. 내가 견과랑 바나나를 가져갈게.'}
          ]}
        ],
        check: [
          {q: 'What does A suggest to B?', a: 'Drinking water instead (of soda).'},
          {q: 'What will Hana and Leo do?', a: 'They will ride bikes along the river.'},
          {q: 'What will Leo bring?', a: 'Some nuts and bananas.'}
        ],
        drill: {frame: ['A: I’m always tired.', 'B: Why don’t you ____?'], opts: ['go to bed early', 'eat breakfast', 'jog regularly', 'drink more water', 'eat fruit', 'stretch every morning']}
      }
    ],
    interviewEx: 'Minho jogs twice a week. I suggested eating fruit instead of chips.',
    watch: {
      label: 'Let’s Watch', title: 'The Snack Swap', setting: '건강 수업 시간. 윤 선생님이 간식을 건강한 것으로 바꾸는 활동을 한다.',
      lines: [
        {s: 'Ms. Yoon', en: 'How often do you eat chips, Leo?', ko: '레오, 감자칩을 얼마나 자주 먹니?'},
        {s: 'Leo', en: 'Almost every day.', ko: '거의 매일이요.'},
        {s: 'Ms. Yoon', en: 'Why don’t you eat baked sweet potato sticks instead? They’re sweet and crunchy.', ko: '대신 구운 고구마 스틱을 먹어 보는 게 어떠니? 달고 바삭하단다.'},
        {s: 'Hana', en: 'I eat yogurt with honey twice a week. It’s really good!', ko: '저는 일주일에 두 번 꿀을 넣은 요구르트를 먹어요. 정말 맛있어요!'},
        {s: 'Ms. Yoon', en: 'Great! Let’s all try one healthy snack this week.', ko: '좋아! 이번 주에 다 같이 건강 간식 하나씩 먹어 보자.'}
      ],
      check: [
        {q: 'How often does Leo eat chips?', a: 'Almost every day.'},
        {q: 'What does Ms. Yoon suggest to Leo?', a: 'Eating baked sweet potato sticks instead.'},
        {q: 'How often does Hana eat yogurt with honey?', a: 'Twice a week.'}
      ]
    },
    wrap: {en: 'Ask your partner how often they do something healthy, and make one suggestion.', ko: '짝에게 건강한 습관의 빈도를 묻고, 한 가지를 제안하기'}
  },

  grammar: {
    cover: 'be + -ing',
    hook: {en: 'Look! The chef {{is making}} a smoothie. You {{can}} make it, too. It {{will}} taste great.', ko: '세 문장의 동사 부분은 각각 어떤 뜻을 더할까?', answer: 'is making → 지금 하는 중 / can → 할 수 있다 / will → ~할 것이다 (뒤에는 모두 동사원형)', note: '교과서 언어 형식(I’m making ~ / Anyone can make these. / They’ll become ~.)과 같은 짜임이다. 세 동사를 색으로 구별해 보여 준다.'},
    points: [
      { id: 'g1', name: '현재진행형', short: '현재진행형', form: 'am / are / is + 동사-ing', meaning: '(지금) ~하고 있다',
        notice: [
          {en: 'I {{am making}} sweet potato sticks.', ko: '나는 고구마 스틱을 만들고 있다.'},
          {en: 'The teens {{are cooking}} healthy snacks.', ko: '십대들이 건강 간식을 요리하고 있다.'},
          {en: 'Look! Omar {{is cutting}} carrots.', ko: '봐! 오마르가 당근을 자르고 있다.'}
        ],
        rule: [
          {k: '-ing 만들기', v: '대부분 + -ing / e로 끝나면 e 빼고 + -ing (make → making) / 단모음 + 단자음이면 자음 하나 더 (cut → cutting)', ex: 'bake → baking, run → running'},
          {k: '부정문', v: 'be동사 + not + -ing', ex: 'I’m not frying the chips.'},
          {k: '의문문', v: 'Be동사 + 주어 + -ing ~?', ex: 'Are you making a smoothie? — Yes, I am.'}
        ],
        compare: {
          title: '현재형 vs 현재진행형', note: '현재형은 늘 하는 일(습관), 현재진행형은 지금 하는 중인 일.',
          head: ['현재형 (습관)', '현재진행형 (지금)'],
          cols: [['I jog every day.', 'She eats nuts often.'], ['I am jogging now.', 'She is eating nuts now.']]
        },
        check: [
          {q: 'The host ____ the chefs now. (interview)', a: 'is interviewing'},
          {q: 'We ____ yogurt bowls. (make)', a: 'are making'},
          {q: 'Look! He ____ in the park. (run)', a: 'is running'},
          {q: 'I ____ the potatoes. I bake them. (fry, 부정)', a: 'am not frying'},
          {q: '____ you ____ hummus? (make, 의문)', a: 'Are / making'}
        ],
        trap: {bad: 'She is make a smoothie now.', good: 'She is making a smoothie now.', why: '현재진행형은 be동사 + 동사-ing. be동사만 쓰고 원형을 두면 틀린다.'},
        scramble: [
          {ko: '요리사들이 건강 간식을 만들고 있다.', en: 'The chefs are making healthy snacks.'},
          {ko: '나는 감자를 튀기고 있지 않다.', en: 'I am not frying the potatoes.'},
          {ko: '너는 스무디를 만들고 있니?', en: 'Are you making a smoothie?'}
        ]
      },
      { id: 'g2', name: '조동사 can · will', short: 'can · will', form: 'can / will + 동사원형', meaning: 'can ~할 수 있다 / will ~할 것이다',
        notice: [
          {en: 'Anyone {{can make}} this snack.', ko: '누구나 이 간식을 만들 수 있다.'},
          {en: 'It {{will taste}} sweet.', ko: '그것은 달콤한 맛이 날 것이다.'},
          {en: 'You {{can’t use}} a microwave here.', ko: '여기서는 전자레인지를 쓸 수 없다.'}
        ],
        rule: [
          {k: '동사원형', v: 'can / will 뒤에는 늘 동사원형 (주어가 3인칭 단수여도 -s 없음)', ex: 'She can cook. (She can cooks ✗)'},
          {k: '부정문', v: 'can’t (cannot) / won’t (will not) + 동사원형', ex: 'I won’t eat chips today.'},
          {k: '의문문', v: 'Can / Will + 주어 + 동사원형 ~?', ex: 'Can you make it? — Yes, I can.'}
        ],
        check: [
          {q: 'Anyone ____ make this. (할 수 있다)', a: 'can'},
          {q: 'It ____ taste good. (~일 것이다)', a: 'will'},
          {q: 'She can ____ the guitar. (play)', a: 'play'},
          {q: 'I ____ drink soda today. (will 부정)', a: 'won’t'},
          {q: '____ you jog with me tomorrow? (will 의문)', a: 'Will'}
        ],
        trap: {bad: 'He can makes yogurt bowls.', good: 'He can make yogurt bowls.', why: '조동사 뒤에는 동사원형. 3인칭 단수 -s를 붙이지 않는다.'},
        scramble: [
          {ko: '누구나 이 간식을 만들 수 있다.', en: 'Anyone can make this snack.'},
          {ko: '그것은 맛이 좋을 것이다.', en: 'It will taste good.'},
          {ko: '나는 오늘 탄산음료를 마시지 않을 것이다.', en: 'I won’t drink soda today.'}
        ]
      }
    ],
    wrap: {en: 'I am making ______. Anyone can ______. It will ______.', ko: '나만의 건강 간식을 진행형·can·will 세 문장으로 소개하기'},
    wrapEx: 'I am making a fruit salad. Anyone can make it in five minutes. It will taste fresh and sweet.'
  },

  reading: {
    title: 'The Healthy Snack Fair', kind: '학교 행사 현장 기사', cover: 'Snack', coverKo: '건강 간식 대회', cover2: 'Yummy', coverKo2: '맛있고 건강하게',
    before: [
      {q: 'Look at the title. What are the students doing?', a: '건강 간식을 만들어 소개한다'},
      {q: 'What makes a snack healthy?', a: '설탕·기름이 적고, 채소·과일·견과가 들어 있다'}
    ],
    gloss: {'sweet potato': '고구마', oven: '오븐', crunchy: '바삭한', yogurt: '요구르트', 'Greek yogurt': '그릭 요구르트(진한 요구르트)', hummus: '후무스(병아리콩 소스)', chickpea: '병아리콩', judge: '심사위원', vote: '투표하다'},
    paras: [
      {who: 'Host', en: 'Welcome to the Healthy Snack Fair at Hanbit Middle School! I’m your host, Ms. Yoon. Three teen chefs are cooking right now. They will tell us about their snacks. The best snack will win a prize!',
       ko: '한빛중학교 건강 간식 대회에 오신 걸 환영해요! 저는 진행자 윤 선생님이에요. 지금 십대 요리사 세 명이 요리하고 있어요. 자기 간식을 소개해 줄 거예요. 가장 좋은 간식은 상을 받아요!',
       check: {q: 'What will the best snack win?', a: 'A prize.'}, think: '건강 간식 대회에 나간다면 무엇을 만들까?'},
      {who: 'Jiwoo', en: 'Hi, I’m Jiwoo. I’m making sweet potato sticks. I don’t fry them. I bake them in the oven. They are sweet and crunchy, but they’re low in fat. You can eat them with a little honey.',
       ko: '안녕하세요, 저는 지우예요. 저는 고구마 스틱을 만들고 있어요. 튀기지 않아요. 오븐에 구워요. 달고 바삭하지만 지방은 적어요. 꿀을 조금 곁들여 먹어도 돼요.',
       check: {q: 'How does Jiwoo cook the sweet potato sticks?', a: 'She bakes them in the oven.'}, think: '튀기지 않고 구우면 왜 더 건강할까?'},
      {who: 'Sofia', en: 'Hello, I’m Sofia from Greece. I’m putting Greek yogurt in a bowl. It is thick and creamy. Next, I’m adding nuts and fresh berries. Anyone can make this bowl in five minutes. It will give you energy for the day.',
       ko: '안녕하세요, 저는 그리스에서 온 소피아예요. 그릇에 그릭 요구르트를 담고 있어요. 걸쭉하고 부드러워요. 다음으로 견과와 신선한 베리를 넣고 있어요. 누구나 5분 만에 이 그릇을 만들 수 있어요. 하루 동안 쓸 힘을 줄 거예요.',
       check: {q: 'What is Sofia adding to the yogurt?', a: 'Nuts and fresh berries.'}, think: '소피아의 간식은 왜 “누구나” 만들 수 있을까?'},
      {who: 'Omar', en: 'Hi, everyone. I’m Omar from Egypt. I’m making hummus. It is a thick dip from chickpeas, garlic, and lemon. I’m cutting carrots and cucumbers for it. People all over the world enjoy hummus. You will love it, too!',
       ko: '안녕하세요, 여러분. 저는 이집트에서 온 오마르예요. 저는 후무스를 만들고 있어요. 병아리콩, 마늘, 레몬으로 만든 걸쭉한 소스예요. 거기에 찍어 먹을 당근과 오이를 자르고 있어요. 전 세계 사람들이 후무스를 즐겨요. 여러분도 좋아할 거예요!',
       check: {q: 'What is hummus made from?', a: 'Chickpeas, garlic, and lemon.'}, think: '채소를 소스에 찍어 먹으면 좋은 점은?'},
      {who: 'Host', en: 'Now the judges are tasting the snacks. They are smiling. Every snack is different, but every snack is healthy and yummy. Who will win the prize? Students, it’s your turn. Taste them and vote!',
       ko: '이제 심사위원들이 간식을 맛보고 있어요. 모두 웃고 있네요. 간식은 저마다 다르지만 모두 건강하고 맛있어요. 누가 상을 받을까요? 학생 여러분, 여러분 차례예요. 맛보고 투표하세요!',
       check: {q: 'What are the judges doing now?', a: 'They are tasting the snacks.'}, think: '나라면 어느 간식에 투표할까? 왜?'},
      {who: 'You', en: 'Healthy snacks don’t need to be boring. Use fruit, nuts, and vegetables instead of sugar and oil. What healthy snack can you make?',
       ko: '건강 간식이 지루할 필요는 없어요. 설탕과 기름 대신 과일, 견과, 채소를 쓰세요. 여러분은 어떤 건강 간식을 만들 수 있나요?',
       check: {q: 'What can we use instead of sugar and oil?', a: 'Fruit, nuts, and vegetables.'}, think: '집에서 만들 수 있는 건강 간식은?'}
    ],
    split: 3,
    next: '오마르는 무엇을 만들고,\n누가 상을 받을까?',
    recap: {q: '지우와 소피아는 무엇을 만들고 있을까?', items: [{k: 'JIWOO', v: 'sweet potato sticks · baked, not fried · with honey'}, {k: 'SOFIA', v: 'yogurt bowl · nuts and berries · five minutes'}]},
    tf: [
      {p: 0, s: 'Ms. Yoon is the host of the fair.', a: true},
      {p: 1, s: 'Jiwoo fries the sweet potato sticks.', a: false, why: 'I don’t fry them. I bake them in the oven.'},
      {p: 2, s: 'Sofia’s yogurt is thick and creamy.', a: true},
      {p: 2, s: 'Sofia’s bowl takes thirty minutes.', a: false, why: 'Anyone can make this bowl in five minutes.'},
      {p: 3, s: 'Omar is cutting carrots and cucumbers.', a: true},
      {p: 4, s: 'The judges don’t like the snacks.', a: false, why: 'They are smiling.'}
    ],
    key: [
      {en: 'Three teen chefs {{are cooking}} right now.', note: 'are + -ing (지금 하는 중)', g: 'g1'},
      {en: 'I {{am making}} sweet potato sticks.', note: 'am + -ing', g: 'g1'},
      {en: 'You {{can eat}} them with a little honey.', note: 'can + 동사원형', g: 'g2'},
      {en: 'Anyone {{can make}} this bowl in five minutes.', note: 'can + 동사원형', g: 'g2'},
      {en: 'It {{will give}} you energy for the day.', note: 'will + 동사원형', g: 'g2'},
      {en: 'Now the judges {{are tasting}} the snacks.', note: 'are + -ing', g: 'g1'}
    ],
    summary: {text: 'At the Healthy Snack Fair, three teen {{chefs}} are cooking. Jiwoo bakes sweet potato sticks instead of {{frying}} them. Sofia puts {{thick}} yogurt, nuts, and berries in a {{bowl}}. Omar makes hummus with chickpeas and {{garlic}}. The best snack will win a {{prize}}.'},
    order: ['Sofia puts Greek yogurt in a bowl.', 'She adds nuts and fresh berries.', 'The judges taste the snacks.', 'The students vote for the best snack.'],
    chart: {title: 'SNACK FAIR', ko: '세 간식 정리하기', cols: ['Snack', 'Why healthy?'], note: '표를 보고 He/She is making ~. It is ~. 문장으로 말하게 한다.', rows: [
      {name: 'Jiwoo', cells: ['sweet potato sticks', 'baked, not fried · low in fat']},
      {name: 'Sofia', cells: ['yogurt bowl', 'nuts and berries · gives energy']},
      {name: 'Omar', cells: ['hummus with vegetables', 'chickpeas, garlic · fresh vegetables']}
    ]},
    wrap: {en: 'I am making ______. You can ______. It will ______.', ko: '관통 질문으로 돌아가기: 나만의 건강 간식 소개글 쓰기'}
  },

  quiz: [
    ['“밀가루”를 뜻하는 낱말은?', ['flour', 'flower', 'fry', 'nut'], 0, 'flour: 밀가루 (flower 꽃과 발음이 같다)'],
    ['“healthy”의 반대말은?', ['thick', 'unhealthy', 'important', 'regularly'], 1, 'healthy ↔ unhealthy'],
    ['“This snack is low ___ sugar.”', ['at', 'on', 'in', 'for'], 2, 'be low in: ~이 적다'],
    ['빈도를 묻는 표현은?', ['How much is it?', 'How often do you jog?', 'How are you?', 'How old are you?'], 1, 'How often ~?'],
    ['“How often do you swim?”에 알맞은 대답은?', ['Yes, I do.', 'At the pool.', 'Twice a week.', 'It’s fun.'], 2, '빈도: once / twice / three times a week'],
    ['제안하는 표현이 아닌 것은?', ['Why don’t you rest?', 'Let’s go jogging.', 'How about eating fruit?', 'How often do you eat fruit?'], 3, 'How often ~?는 빈도를 묻는 말'],
    ['Let’s Watch에서 윤 선생님이 레오에게 권한 간식은?', ['요구르트', '고구마 스틱', '후무스', '견과'], 1, 'Why don’t you eat baked sweet potato sticks instead?'],
    ['빈칸에 알맞은 것은? “Look! He ___ in the park.”', ['run', 'runs', 'is running', 'is runing'], 2, 'be + run → running (자음 하나 더)'],
    ['빈칸에 알맞은 것은? “Anyone can ___ this snack.”', ['make', 'makes', 'making', 'to make'], 0, '조동사 + 동사원형'],
    ['어법상 틀린 문장은?', ['I am baking bread.', 'She can cooks well.', 'It will taste good.', 'They are cutting carrots.'], 1, 'She can cook well.'],
    ['빈칸에 알맞은 것은? “I ___ drink soda today.” (~하지 않을 것이다)', ['can', 'don’t', 'won’t', 'isn’t'], 2, 'will not = won’t'],
    ['지우가 고구마를 조리하는 방법은?', ['튀긴다', '삶는다', '오븐에 굽는다', '날로 먹는다'], 2, 'I don’t fry them. I bake them in the oven.'],
    ['소피아의 간식에 들어가지 않는 것은?', ['요구르트', '견과', '베리', '마늘'], 3, '마늘은 오마르의 후무스에 들어간다.'],
    ['오마르가 지금 하고 있는 일은?', ['당근과 오이를 자르고 있다', '요구르트를 담고 있다', '고구마를 굽고 있다', '투표하고 있다'], 0, 'I’m cutting carrots and cucumbers for it.'],
    ['글의 요지로 알맞은 것은?', ['간식은 먹지 말자', '건강 간식도 맛있을 수 있다', '요리 대회는 어렵다', '외국 음식이 더 맛있다'], 1, 'Healthy snacks don’t need to be boring.']
  ]
};

/* ── 보강: 원리 중심 문법 · 모션 그래픽 · 낱말 만들기 · 발음 기호 ── */
(function (L) {
  const ipa = {healthy: '/ˈhelθi/', unhealthy: '/ʌnˈhelθi/', chef: '/ʃef/', host: '/hoʊst/', teen: '/tiːn/', fair: '/fer/', prize: '/praɪz/', bowl: '/boʊl/', flour: '/ˈflaʊər/', nut: '/nʌt/', honey: '/ˈhʌni/', garlic: '/ˈɡɑːrlɪk/', leaf: '/liːf/', fry: '/fraɪ/', thick: '/θɪk/', enjoy: '/ɪnˈdʒɔɪ/', regularly: '/ˈreɡjələrli/', instead: '/ɪnˈsted/', important: '/ɪmˈpɔːrtnt/', jog: '/dʒɑːɡ/'};
  L.vocab.words.forEach(w => { if (ipa[w.w]) w.ipa = ipa[w.w]; });
  L.vocab.morph = [
    {w: 'unhealthy', ko: '건강에 좋지 않은', parts: [{t: 'un', k: 'pre', m: '아닌, 반대'}, {t: 'health', k: 'root', m: '건강'}, {t: 'y', k: 'suf', m: '~한 (형용사)'}], family: ['healthy', 'unhappy', 'unkind'], note: '명사 + -y = 형용사(health → healthy), 앞에 un-이 붙으면 반대 뜻(unhealthy).'},
    {w: 'regularly', ko: '규칙적으로', parts: [{t: 'regular', k: 'root', m: '규칙적인'}, {t: 'ly', k: 'suf', m: '~하게 (부사)'}], family: ['quickly', 'slowly', 'usually'], note: '형용사 + -ly = 동작을 꾸미는 부사.'},
    {w: 'teenager', ko: '십대', parts: [{t: 'teen', k: 'root', m: '13~19 (thirteen ~ nineteen)'}, {t: 'age', k: 'root', m: '나이'}, {t: 'er', k: 'suf', m: '~인 사람'}], family: ['teen', 'thirteen', 'nineteen'], note: '-teen으로 끝나는 나이(13~19세)의 사람 → 십대. 줄여서 teen.'}
  ];
  const [g1, g2] = L.grammar.points;
  g1.principle = {
    q: '“먹는다”와 “먹고 있다”는 어떻게 다를까?',
    pic: [{en: 'I eat', ko: '늘 하는 일 (습관)'}, {en: 'I am eating', ko: '지금 이 순간 하는 일', hot: true}],
    core: '현재진행형(be + -ing)은 “지금 바로 이 순간 진행 중인 동작”을 사진 찍듯 보여 준다.',
    why: ['be동사는 주어에 맞추고(am/are/is), 동사에는 -ing를 붙인다.', '-ing는 “하는 중”이라는 뜻을 담고 있다.', 'like, know, want처럼 상태를 나타내는 동사는 진행형으로 잘 쓰지 않는다.']
  };
  g1.anim = [{title: '습관 → 지금 하는 중', states: [
    {t: 'I/S | eat/V#v | toast/O | every morning/M#t | .', note: '현재형: 매일 하는 습관', ko: '나는 매일 아침 토스트를 먹는다.'},
    {t: 'I/S | am/X | eating/V#v | toast/O | now/M#t | .', note: 'am + -ing: 지금 먹고 있는 중', ko: '나는 지금 토스트를 먹고 있다.'}]}];
  g1.contrast = {title: '현재형 vs 현재진행형', pairs: [
    {a: 'She {{plays}} badminton on Fridays.', ka: '그녀는 금요일마다 배드민턴을 친다. (습관)', b: 'She {{is playing}} badminton now.', kb: '그녀는 지금 배드민턴을 치고 있다. (진행 중)'}],
    point: '늘 하는 일은 현재형, 지금 하는 중인 일은 be + -ing.'};
  g2.principle = {
    q: 'can과 will 뒤에는 왜 늘 동사원형일까?',
    pic: [{en: 'can / will', ko: '말하는 사람의 판단·생각'}, {en: '+ 동사원형', ko: '그 행동 자체', hot: true}],
    core: '조동사(can, will)는 동사 앞에서 “할 수 있다”, “할 것이다”라는 생각을 더해 준다. 뜻은 조동사가 다 맡으므로 뒤의 동사는 원래 모양 그대로 둔다.',
    why: ['주어가 he·she여도 can·will에는 -s가 붙지 않고, 뒤 동사도 원형이다.', '부정문은 조동사 뒤에 not (can’t, won’t).', '의문문은 조동사를 주어 앞으로 (Can you ~? / Will you ~?).']
  };
  g2.anim = [{title: '조동사가 들어오면 -s가 사라진다', states: [
    {t: 'He/S | makes/V#v | hummus/O | .', note: '3인칭 단수 + -s', ko: '그는 후무스를 만든다.'},
    {t: 'He/S | can/X | make/V#v | hummus/O | .', note: 'can + 동사원형 (-s 없음)', ko: '그는 후무스를 만들 수 있다.'},
    {t: 'Can/X | he/S | make/V#v | hummus/O | ?', note: '의문문: can이 주어 앞으로', ko: '그는 후무스를 만들 수 있니?'}]}];
  g2.contrast = {title: 'can과 will의 차이', pairs: [
    {a: 'I {{can}} sleep at ten.', ka: '나는 10시에 잘 수 있다. (능력·가능)', b: 'I {{will}} sleep at ten.', kb: '나는 10시에 잘 것이다. (앞으로의 계획·의지)'}],
    point: 'can = 할 수 있다(능력), will = 할 것이다(미래·의지). 둘 다 뒤에 동사원형.'};
})(window.LESSON);
