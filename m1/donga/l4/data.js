/* 중1 영어(동아·윤정미) Lesson 4 · The Joy of Traveling
   교과서 대조(2026-10): 의사소통 기능(계획 묻고 답하기 · 기대·희망 표현하기), 언어 형식(동명사 · be going to),
   읽기 주제(The Colorful Villages of the World — 세계의 알록달록한 마을에서 보낸 엽서), 단원 어휘를 교과서 목차·단어 목록과 맞췄다.
   대화문·읽기 글은 저작권 때문에 교과서 원문을 싣지 않고, 같은 주제·같은 언어 형식·교과서 어휘로 새로 쓴 글이다. */
window.LESSON = {
  book: 'm1-donga', no: 4,
  title: 'The Joy of Traveling', ko: '여행의 즐거움',
  bigQ: {en: 'Why do people love traveling?', ko: '사람들은 왜 여행을 좋아할까?'},
  align: {
    tb: {reading: 'The Colorful Villages of the World', funcs: ['계획 묻고 답하기', '기대·희망 표현하기'], forms: ['동명사 (enjoy -ing)', 'be going to'],
      note: '교과서 읽기는 세 사람이 색깔이 특별한 마을(한국·스페인·모로코)에서 보낸 엽서. 여기 본문은 다른 세 마을(부산 감천, 이탈리아 부라노, 콜롬비아 과타페)로 새로 쓴 엽서다.'},
    std: {vocab: ['9영01-01', '9영02-01'], talk: ['9영01-02', '9영02-04'], grammar: ['9영02-04'], read1: ['9영01-02', '9영01-08'], read2: ['9영02-04', '9영02-08']},
    forms: ['Gerunds', 'Tenses']
  },
  goals: {
    vocab: ['여행과 관련된 낱말 20개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 가 보고 싶은 곳을 한 문장으로 말할 수 있다.'],
    talk: ['계획을 묻고 답할 수 있다. (What are you going to do ~? — I’m going to ~.)', '기대를 표현할 수 있다. (I’m looking forward to ~ing.)'],
    grammar: ['동명사(-ing)를 enjoy, like, look forward to 뒤에 쓸 수 있다.', 'be going to + 동사원형으로 계획을 말할 수 있다.'],
    read1: ['여행 엽서를 읽고 첫 두 마을의 특징과 글쓴이가 한 일을 파악할 수 있다.'],
    read2: ['세 마을을 비교하고, 가 보고 싶은 곳에서 보내는 엽서를 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'Where do you want to go this vacation?', ko: '이번 방학에 어디에 가고 싶나요?', note: '국내·해외 여행지를 모으고, 그곳에서 하고 싶은 일을 함께 묻는다.'},
    words: [
      {w: 'village', pos: 'n.', ko: '마을', ic: '🏘️', audio: 'assets/audio/village.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The village is on a hill.', exKo: '그 마을은 언덕 위에 있다.'},
      {w: 'island', pos: 'n.', ko: '섬', ic: '🏝️', audio: 'assets/audio/island.mp3', audioCredit: 'stalker of Amanda T and Amanda found out Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'We took a boat to the island.', exKo: '우리는 배를 타고 섬에 갔다.'},
      {w: 'narrow', pos: 'adj.', ko: '좁은', ic: '↕️', audio: 'assets/audio/narrow.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The streets are narrow.', exKo: '길이 좁다.'},
      {w: 'view', pos: 'n.', ko: '경치, 전망', ic: '🌄', audio: 'assets/audio/view.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The view from the top is amazing.', exKo: '꼭대기에서 보는 경치는 놀랍다.'},
      {w: 'souvenir', pos: 'n.', ko: '기념품', ic: '🎁', ex: 'I bought a souvenir for my mom.', exKo: '나는 엄마에게 드릴 기념품을 샀다.'},
      {w: 'local', pos: 'adj. / n.', ko: '지역의 / 현지인', ic: '📍', audio: 'assets/audio/local.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'We ate local food.', exKo: '우리는 그 지역 음식을 먹었다.'},
      {w: 'explore', pos: 'v.', ko: '탐험하다, 둘러보다', ic: '🧭', audio: 'assets/audio/explore.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Let’s explore the village.', exKo: '마을을 둘러보자.'},
      {w: 'fee', pos: 'n.', ko: '요금', ic: '💳', ex: 'There is no entrance fee.', exKo: '입장료가 없다.'},
      {w: 'rental', pos: 'n. / adj.', ko: '대여; 대여의', ic: '🔑', ex: 'I went to a bike rental shop.', exKo: '나는 자전거 대여점에 갔다.'},
      {w: 'bicycle', pos: 'n.', ko: '자전거', ic: '🚲', audio: 'assets/audio/bicycle.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'We explored the island by bicycle.', exKo: '우리는 자전거로 섬을 둘러보았다.'},
      {w: 'schedule', pos: 'n.', ko: '일정', ic: '🗓️', audio: 'assets/audio/schedule.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'What’s your schedule for tomorrow?', exKo: '내일 일정이 어떻게 되니?'},
      {w: 'tour', pos: 'n.', ko: '여행, 관광', ic: '🚌', audio: 'assets/audio/tour.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'We took a bus tour.', exKo: '우리는 버스 관광을 했다.'},
      {w: 'museum', pos: 'n.', ko: '박물관', ic: '🏛️', audio: 'assets/audio/museum.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The museum opens at nine.', exKo: '박물관은 9시에 연다.'},
      {w: 'trail', pos: 'n.', ko: '오솔길, 산길', ic: '🥾', audio: 'assets/audio/trail.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'We walked along the trail.', exKo: '우리는 오솔길을 따라 걸었다.'},
      {w: 'cliff', pos: 'n.', ko: '절벽', ic: '🧗', audio: 'assets/audio/cliff.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The house stands on a cliff.', exKo: '그 집은 절벽 위에 서 있다.'},
      {w: 'terrace', pos: 'n.', ko: '테라스', ic: '☕', ex: 'We had lunch on the terrace.', exKo: '우리는 테라스에서 점심을 먹었다.'},
      {w: 'fantastic', pos: 'adj.', ko: '환상적인', ic: '✨', audio: 'assets/audio/fantastic.mp3', audioCredit: 'Sylvanmoon · CC BY-SA 4.0 (Wikimedia Commons, US)', ex: 'The sunset was fantastic.', exKo: '석양이 환상적이었다.'},
      {w: 'perfect', pos: 'adj.', ko: '완벽한', ic: '💯', ex: 'It’s a perfect day for a picnic.', exKo: '소풍 가기에 완벽한 날이다.'},
      {w: 'vacation', pos: 'n.', ko: '방학, 휴가', ic: '🏖️', ex: 'What are you going to do this vacation?', exKo: '이번 방학에 무엇을 할 거니?'},
      {w: 'spend', pos: 'v.', ko: '(시간을) 보내다, (돈을) 쓰다', ic: '⏰', audio: 'assets/audio/spend.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'We spent a day in the village.', exKo: '우리는 그 마을에서 하루를 보냈다.'}
    ],
    phrases: [
      {w: 'be full of', ko: '~으로 가득하다', ex: 'The streets are full of shops.', exKo: '거리는 가게로 가득하다.'},
      {w: 'on one’s way to', ko: '~로 가는 길에', ex: 'I’m on my way to the beach.', exKo: '나는 해변에 가는 길이다.'},
      {w: 'look forward to -ing', ko: '~하기를 기대하다', ex: 'I’m looking forward to seeing you.', exKo: '너를 만나기를 기대하고 있어.'},
      {w: 'take pictures of', ko: '~의 사진을 찍다', ex: 'I took pictures of the houses.', exKo: '나는 집들의 사진을 찍었다.'},
      {w: 'be famous for', ko: '~으로 유명하다', ex: 'The island is famous for lace.', exKo: '그 섬은 레이스로 유명하다.'},
      {w: 'all day long', ko: '하루 종일', ex: 'We walked all day long.', exKo: '우리는 하루 종일 걸었다.'}
    ],
    pairs: [
      {a: 'narrow', b: 'wide', rel: '반대말'},
      {a: 'rent', b: 'rental', rel: '동사 / 명사'},
      {a: 'spend', b: 'spent', rel: '현재 / 과거'},
      {a: 'travel', b: 'traveling', rel: '동사 / 동명사'}
    ],
    wrap: {en: 'I want to visit ______. I’m looking forward to ______ing there.', ko: '오늘 배운 낱말로 가 보고 싶은 곳과 거기서 하고 싶은 일 쓰기'}
  },

  talk: {
    hook: {en: 'What are you going to do this weekend?', ko: '이번 주말에 무엇을 할 계획인가요?', note: '계획을 몇 가지 들은 뒤, 그 계획을 기대하는 마음까지 영어로 말해 보자고 안내한다.'},
    speakers: {Hojin: {voice: 1, pitch: 1}, Ella: {voice: 0, pitch: 1.1}, Grandma: {voice: 2, pitch: 1.1}, Nari: {voice: 0, pitch: 1.15}, Tom: {voice: 1, pitch: .95}, Guide: {voice: 2, pitch: 1}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '계획 묻고 답하기',
        key: {q: ['What are you going to do ~?', 'Do you have any plans for ~?'], a: ['I’m going to ~.', 'We’re going to ~.', 'I don’t have any plans yet.']},
        note: 'What are you going to do + 때(this summer, tomorrow)?로 계획을 묻고, I’m going to + 동사원형으로 답한다.',
        dialogs: [
          { title: 'Dialogue A', setting: '종업식 날, 교실', lines: [
            {s: 'Ella', en: 'Hojin, {{do you have any plans}} for this summer vacation?', ko: '호진아, 이번 여름 방학에 계획 있어?'},
            {s: 'Hojin', en: 'Yes. {{I’m going to}} visit Busan with my family.', ko: '응. 가족이랑 부산에 갈 거야.'},
            {s: 'Ella', en: 'Nice! {{What are you going to do}} there?', ko: '좋다! 거기서 뭐 할 거야?'},
            {s: 'Hojin', en: '{{We’re going to}} walk around Gamcheon Culture Village.', ko: '감천문화마을을 걸어서 둘러볼 거야.'},
            {s: 'Ella', en: 'Take lots of pictures for me!', ko: '나를 위해 사진 많이 찍어 줘!'}
          ]},
          { title: 'Dialogue B', setting: '금요일 저녁, 전화 통화', lines: [
            {s: 'A', en: 'What are you going to do tomorrow?', ko: '내일 뭐 할 거야?'},
            {s: 'B', en: 'I’m going to rent a bicycle and ride along the river.', ko: '자전거를 빌려서 강을 따라 탈 거야.'},
            {s: 'A', en: 'Sounds fun. What time are you going to start?', ko: '재미있겠다. 몇 시에 출발할 거야?'},
            {s: 'B', en: 'At nine. Do you want to come with me?', ko: '9시에. 나랑 같이 갈래?'}
          ]}
        ],
        check: [
          {q: 'Where is Hojin going to go this summer?', a: 'To Busan (with his family).'},
          {q: 'What is Hojin going to do there?', a: 'He is going to walk around Gamcheon Culture Village.'},
          {q: 'What time is B going to start?', a: 'At nine.'}
        ],
        drill: {frame: ['A: What are you going to do this weekend?', 'B: I’m going to ____.'], opts: ['visit a museum', 'go camping', 'ride a bike', 'see a movie', 'explore a village', 'stay home']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '기대·희망 표현하기',
        key: {q: ['Are you excited about ~?'], a: ['I’m looking forward to ~ing.', 'I’m looking forward to it.', 'I can’t wait!']},
        note: 'look forward to 뒤에는 명사나 동명사(-ing)가 온다. to가 전치사라서 동사원형이 아니라 -ing! (look forward to see ✗)',
        dialogs: [
          { title: 'Dialogue A', setting: '공항, 출국 수속 줄', lines: [
            {s: 'Nari', en: 'Grandma, we’re going to see the colorful houses on Burano tomorrow!', ko: '할머니, 저희 내일 부라노의 알록달록한 집들을 보러 가요!'},
            {s: 'Grandma', en: 'Are you excited?', ko: '신나니?'},
            {s: 'Nari', en: 'Yes! {{I’m looking forward to taking}} pictures of them.', ko: '네! 그 집들 사진 찍는 게 정말 기대돼요.'},
            {s: 'Grandma', en: 'Don’t forget to buy me some lace.', ko: '할머니 레이스 사 오는 것 잊지 마라.'}
          ]},
          { title: 'Dialogue B', setting: '여행 첫날 밤, 호텔', lines: [
            {s: 'Tom', en: 'Tomorrow we’re going to climb El Peñol.', ko: '내일 우리 엘 페뇰에 올라갈 거야.'},
            {s: 'A', en: 'It has more than 700 steps!', ko: '거기 계단이 700개가 넘어!'},
            {s: 'Tom', en: 'I know, but the view from the top is fantastic. {{I’m looking forward to it}}.', ko: '알아, 그래도 꼭대기 경치가 환상적이래. 정말 기대돼.'},
            {s: 'A', en: 'Me, too. {{I can’t wait}}!', ko: '나도. 빨리 가고 싶어!'}
          ]}
        ],
        check: [
          {q: 'What is Nari looking forward to?', a: 'Taking pictures of the colorful houses (on Burano).'},
          {q: 'What does Grandma want?', a: 'Some lace.'},
          {q: 'How many steps does El Peñol have?', a: 'More than 700.'}
        ],
        drill: {frame: ['A: What are you looking forward to?', 'B: I’m looking forward to ____.'], opts: ['seeing my friends', 'the summer vacation', 'eating local food', 'riding a horse', 'my birthday party', 'visiting Jeju']}
      }
    ],
    interviewEx: 'Jiho is going to visit Gyeongju. He is looking forward to riding a bicycle there.',
    watch: {
      label: 'Let’s Watch', title: 'The Village Tour', setting: '감천문화마을 입구. 관광 안내원이 하루 일정을 설명한다.',
      lines: [
        {s: 'Guide', en: 'Welcome to Gamcheon! Here is our schedule. First, we’re going to walk up the narrow stairs.', ko: '감천에 오신 걸 환영해요! 일정을 알려 드릴게요. 먼저 좁은 계단을 올라갈 거예요.'},
        {s: 'Hojin', en: 'Is there an entrance fee?', ko: '입장료가 있나요?'},
        {s: 'Guide', en: 'No, it’s free. After that, we’re going to visit a small museum and a souvenir shop.', ko: '아니요, 무료예요. 그다음 작은 박물관과 기념품 가게에 갈 거예요.'},
        {s: 'Ella', en: 'I’m looking forward to buying a postcard!', ko: '엽서 사는 게 기대돼요!'},
        {s: 'Guide', en: 'Great. Enjoy exploring the village!', ko: '좋아요. 마을 탐험 즐기세요!'}
      ],
      check: [
        {q: 'What are they going to do first?', a: 'Walk up the narrow stairs.'},
        {q: 'Is there an entrance fee?', a: 'No, it’s free.'},
        {q: 'What is Ella looking forward to?', a: 'Buying a postcard.'}
      ]
    },
    wrap: {en: 'Tell your partner about your vacation plan and what you are looking forward to.', ko: '짝에게 방학 계획과 가장 기대되는 일을 말하기'}
  },

  grammar: {
    cover: '-ing · going to',
    hook: {en: 'I enjoyed {{taking}} pictures of the houses.  /  Tomorrow I’m {{going to}} get up early.', ko: '첫 문장의 taking, 둘째 문장의 going to는 각각 어떤 뜻을 더할까?', answer: 'taking → “찍는 것”(동명사, enjoy의 목적어) / going to + 동사원형 → “~할 예정이다”(계획)', note: '교과서 언어 형식(I enjoyed taking pictures ~. / I’m going to get up early.)과 같은 짜임이다.'},
    points: [
      { id: 'g1', name: '동명사 (-ing)', short: '동명사', form: '동사-ing = ~하는 것 (주어·목적어 자리)', meaning: '~하는 것, ~하기',
        notice: [
          {en: 'I enjoyed {{walking}} through the narrow streets.', ko: '나는 좁은 거리를 걷는 것을 즐겼다.'},
          {en: '{{Exploring}} a new village is exciting.', ko: '새로운 마을을 둘러보는 것은 신난다.'},
          {en: 'I’m looking forward to {{seeing}} the view.', ko: '나는 그 경치를 보기를 기대하고 있다.'}
        ],
        rule: [
          {k: '목적어', v: 'enjoy, finish, like, love + 동사-ing', ex: 'She enjoys taking pictures.'},
          {k: '주어', v: '동명사 주어는 하나의 일 → 단수 동사', ex: 'Riding a bike is fun.'},
          {k: '전치사 뒤', v: 'look forward to, be good at, thank you for + 동사-ing', ex: 'Thank you for inviting me.'}
        ],
        compare: {
          title: 'enjoy 뒤에는 -ing만', note: 'enjoy는 to부정사를 목적어로 쓰지 않는다. like, love는 둘 다 가능.',
          head: ['enjoy', 'like / love'],
          cols: [['enjoy swimming ✔', 'enjoy to swim ✘'], ['like swimming ✔', 'like to swim ✔']]
        },
        check: [
          {q: 'I enjoyed ____ souvenirs. (buy)', a: 'buying'},
          {q: '____ by bicycle is fun. (travel)', a: 'Traveling'},
          {q: 'We finished ____ the trail. (walk)', a: 'walking'},
          {q: 'I’m looking forward to ____ you. (see)', a: 'seeing'},
          {q: 'He is good at ____ pictures. (take)', a: 'taking'}
        ],
        trap: {bad: 'I enjoyed to explore the island.', good: 'I enjoyed exploring the island.', why: 'enjoy 뒤에는 동명사(-ing)만 온다.'},
        scramble: [
          {ko: '나는 좁은 거리를 걷는 것을 즐겼다.', en: 'I enjoyed walking through the narrow streets.'},
          {ko: '자전거를 타는 것은 재미있다.', en: 'Riding a bicycle is fun.'},
          {ko: '나는 그 경치를 보기를 기대한다.', en: 'I’m looking forward to seeing the view.'}
        ]
      },
      { id: 'g2', name: 'be going to', short: 'be going to', form: 'am / are / is + going to + 동사원형', meaning: '~할 예정이다, ~할 것이다 (계획)',
        notice: [
          {en: 'I’m {{going to}} get up early tomorrow.', ko: '나는 내일 일찍 일어날 예정이다.'},
          {en: 'We’re {{going to}} climb El Peñol.', ko: '우리는 엘 페뇰에 오를 예정이다.'},
          {en: 'She {{isn’t going to}} take a taxi.', ko: '그녀는 택시를 타지 않을 예정이다.'}
        ],
        rule: [
          {k: '형태', v: 'be동사는 주어에 맞추고, to 뒤에는 동사원형', ex: 'He is going to visit a museum.'},
          {k: '부정문', v: 'be동사 + not + going to', ex: 'I’m not going to stay home.'},
          {k: '의문문', v: 'Be동사 + 주어 + going to ~?', ex: 'Are you going to rent a bike? — Yes, I am.'}
        ],
        check: [
          {q: 'I ____ going to explore the island. (be)', a: 'am'},
          {q: 'They are going to ____ a boat. (take)', a: 'take'},
          {q: 'She ____ going to visit the museum. (be 부정)', a: 'isn’t'},
          {q: '____ you going to buy souvenirs? (be)', a: 'Are'},
          {q: 'We are going to ____ a day there. (spend)', a: 'spend'}
        ],
        trap: {bad: 'I’m going to visiting Burano.', good: 'I’m going to visit Burano.', why: 'be going to의 to 뒤에는 동사원형. (look forward to + -ing와 헷갈리지 않기)'},
        scramble: [
          {ko: '나는 내일 일찍 일어날 것이다.', en: 'I am going to get up early tomorrow.'},
          {ko: '그들은 자전거를 빌릴 예정이다.', en: 'They are going to rent bicycles.'},
          {ko: '너는 박물관에 갈 거니?', en: 'Are you going to visit the museum?'}
        ]
      }
    ],
    wrap: {en: 'Today I enjoyed ______ing. Tomorrow I’m going to ______.', ko: '여행지에서 오늘 즐긴 일(동명사)과 내일 계획(be going to) 쓰기'},
    wrapEx: 'Today I enjoyed riding a bicycle around the island. Tomorrow I’m going to visit the local market.'
  },

  reading: {
    title: 'Postcards from Colorful Villages', kind: '여행 엽서 세 장', cover: 'Colors', coverKo: '세계의 알록달록한 마을', cover2: 'Postcards', coverKo2: '엽서로 떠나는 여행',
    before: [
      {q: 'Look at the pictures. What is special about these villages?', a: '집과 거리가 화려한 색으로 칠해져 있다'},
      {q: 'What do people write on a postcard?', a: '어디에 있는지, 한 일, 할 일, 받는 사람과 보내는 사람'}
    ],
    gloss: {'hillside': '언덕 비탈', 'statue': '조각상', 'fishermen': '어부들', 'lace': '레이스', 'water bus': '수상 버스', 'foggy': '안개 낀', 'painted': '칠해진', 'panel': '판, 장식 판'},
    paras: [
      {who: 'Dear Grandpa', en: 'Hello from Gamcheon Culture Village in Busan! The houses here are pink, blue, and yellow, and they cover the whole hillside. I enjoyed walking up the narrow stairs. I also took a picture with the Little Prince statue. Tomorrow we’re going to try local fish cakes. Love, Hojin',
       ko: '부산 감천문화마을에서 안녕하세요! 이곳 집들은 분홍, 파랑, 노랑이고 언덕 전체를 덮고 있어요. 좁은 계단을 걸어 올라가는 게 즐거웠어요. 어린 왕자 조각상과 사진도 찍었어요. 내일은 이 지역 어묵을 먹어 볼 거예요. 사랑해요, 호진 올림',
       check: {q: 'What did Hojin enjoy?', a: 'Walking up the narrow stairs.'}, think: '언덕 위 집들을 왜 여러 색으로 칠했을까?',
       bg: {src: 'm1/donga/l4/img/r-p0.jpg', credit: 'bryan... · CC BY-SA 2.0 (Flickr)', link: 'https://www.flickr.com/photos/91049143@N00/31877407908', about: '부산 감천문화마을'}},
      {who: 'Hi Ella', en: 'I’m on Burano, a small island near Venice, Italy. I took a water bus here. Every house is a different color — red, green, purple! Long ago, fishermen painted their houses. They wanted to find their homes on foggy days. Burano is also famous for lace, so I bought some for Grandma. Your friend, Nari',
       ko: '나는 이탈리아 베네치아 근처의 작은 섬 부라노에 있어. 수상 버스를 타고 왔어. 집마다 색이 달라. 빨강, 초록, 보라! 옛날에 어부들이 집을 칠했대. 안개 낀 날에도 자기 집을 찾고 싶었던 거지. 부라노는 레이스로도 유명해서 할머니께 드릴 레이스를 좀 샀어. 너의 친구, 나리가',
       check: {q: 'Why did the fishermen paint their houses?', a: 'They wanted to find their homes on foggy days.'}, think: '집 색깔에 숨은 까닭이 재미있는 까닭은?',
       bg: {src: 'm1/donga/l4/img/r-p1.jpg', credit: 'o palsson · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/45713725@N00/5029900200', about: '부라노섬의 알록달록한 집들'}},
      {who: 'Hi Ella', en: 'Now I’m eating lunch on the terrace of a small restaurant. The view of the canal is perfect. After lunch, I’m going to explore the island by bicycle. I’m looking forward to finding my favorite house!',
       ko: '지금은 작은 식당 테라스에서 점심을 먹고 있어. 운하 경치가 완벽해. 점심을 먹고 나서 자전거로 섬을 둘러볼 거야. 가장 마음에 드는 집을 찾는 게 기대돼!',
       check: {q: 'What is Nari going to do after lunch?', a: 'She is going to explore the island by bicycle.'}, think: '나라면 어떤 색 집을 가장 좋아할까?',
       bg: {src: 'm1/donga/l4/img/r-p2.jpg', credit: 'WorldIslandInfo.com · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/76074333@N00/3061467147', about: '부라노섬의 운하'}},
      {who: 'Dear Mom', en: 'Greetings from Guatapé in Colombia! The buildings here have colorful panels on the bottom. Each panel shows a picture — a sheep, a flower, or a bicycle. All day long, I enjoyed taking pictures of them. The streets are full of small shops, so I bought a souvenir for you.',
       ko: '콜롬비아 과타페에서 인사드려요! 이곳 건물들은 아랫부분에 알록달록한 장식 판이 있어요. 판마다 양, 꽃, 자전거 같은 그림이 그려져 있어요. 하루 종일 그 판들 사진을 찍으며 즐거웠어요. 거리는 작은 가게들로 가득해서 엄마께 드릴 기념품을 샀어요.',
       check: {q: 'What do the panels show?', a: 'Pictures (a sheep, a flower, or a bicycle).'}, think: '우리 동네 건물에 그림을 그린다면 무엇을 그릴까?'},
      {who: 'Dear Mom', en: 'Tomorrow I’m going to climb El Peñol, a huge rock near the town. It has more than 700 steps. It won’t be easy, but the view from the top is fantastic. I’m looking forward to it! Love, Tom',
       ko: '내일은 마을 근처의 거대한 바위 엘 페뇰에 올라갈 거예요. 계단이 700개가 넘어요. 쉽지 않겠지만 꼭대기 경치가 환상적이래요. 정말 기대돼요! 사랑해요, 톰 올림',
       check: {q: 'What is Tom going to climb tomorrow?', a: 'El Peñol (a huge rock near the town).'}, think: '힘들어도 꼭대기에 오르는 까닭은?'},
      {who: 'You', en: 'Pink stairs, rainbow houses, and painted panels. Each village has its own colors and its own story. Which village are you going to visit someday?',
       ko: '분홍 계단, 무지개 집, 그림 장식 판. 마을마다 자기만의 색과 이야기가 있다. 여러분은 언젠가 어느 마을에 가 볼 건가요?',
       check: {q: 'What does each village have?', a: 'Its own colors and its own story.'}, think: '가 보고 싶은 마을과 그 까닭은?'}
    ],
    split: 3,
    next: '세 번째 엽서는\n어디에서 왔을까?',
    recap: {q: '호진이와 나리는 어디에서 무엇을 했을까?', items: [{k: 'GAMCHEON', v: 'colorful houses on a hillside · narrow stairs · Little Prince statue'}, {k: 'BURANO', v: 'island near Venice · fishermen’s houses · lace'}]},
    tf: [
      {p: 0, s: 'The houses in Gamcheon cover the whole hillside.', a: true},
      {p: 1, s: 'Nari went to Burano by train.', a: false, why: 'I took a water bus here.'},
      {p: 1, s: 'Fishermen painted their houses long ago.', a: true},
      {p: 2, s: 'Nari is going to explore the island by bicycle.', a: true},
      {p: 3, s: 'The panels in Guatapé are on the roofs.', a: false, why: 'The buildings have colorful panels on the bottom.'},
      {p: 4, s: 'El Peñol has fewer than 100 steps.', a: false, why: 'It has more than 700 steps.'}
    ],
    key: [
      {en: 'I enjoyed {{walking}} up the narrow stairs.', note: 'enjoy + 동명사', g: 'g1'},
      {en: 'Tomorrow we’re {{going to}} try local fish cakes.', note: 'be going to + 동사원형', g: 'g2'},
      {en: 'After lunch, I’m {{going to}} explore the island by bicycle.', note: 'be going to + 동사원형', g: 'g2'},
      {en: 'I’m looking forward to {{finding}} my favorite house!', note: 'look forward to + 동명사', g: 'g1'},
      {en: 'All day long, I enjoyed {{taking}} pictures of them.', note: 'enjoy + 동명사', g: 'g1'},
      {en: 'Tomorrow I’m {{going to}} climb El Peñol.', note: 'be going to + 동사원형', g: 'g2'}
    ],
    summary: {text: 'Hojin enjoyed walking up the {{narrow}} stairs in Gamcheon. Nari visited Burano, an {{island}} famous for lace, and she is going to {{explore}} it by bicycle. Tom took pictures of the painted panels in Guatapé and bought a {{souvenir}}. He is {{looking}} forward to the {{view}} from El Peñol.'},
    order: ['Nari took a water bus to Burano.', 'She bought some lace for Grandma.', 'She is eating lunch on a terrace.', 'She is going to explore the island by bicycle.'],
    chart: {title: 'COLORFUL VILLAGES', ko: '세 마을 정리하기', cols: ['What’s special', 'Enjoyed / Going to'], note: '표를 보고 He/She enjoyed ~ing. He/She is going to ~. 문장으로 말하게 한다.', rows: [
      {name: 'Gamcheon', cells: ['colorful houses on a hillside', 'walking up the stairs / try fish cakes']},
      {name: 'Burano', cells: ['rainbow houses, lace', 'buying lace / explore by bicycle']},
      {name: 'Guatapé', cells: ['painted panels, El Peñol', 'taking pictures / climb El Peñol']}
    ]},
    wrap: {en: 'Hello from ______! I enjoyed ______ing. Tomorrow I’m going to ______.', ko: '관통 질문으로 돌아가기: 가 보고 싶은 곳에서 보내는 엽서 쓰기'}
  },

  quiz: [
    ['“기념품”을 뜻하는 낱말은?', ['souvenir', 'schedule', 'terrace', 'rental'], 0, 'souvenir: 기념품'],
    ['“narrow”의 반대말은?', ['local', 'wide', 'perfect', 'fantastic'], 1, 'narrow ↔ wide'],
    ['“The streets are full ___ shops.”', ['with', 'of', 'in', 'for'], 1, 'be full of: ~으로 가득하다'],
    ['계획을 묻는 표현은?', ['What are you going to do?', 'What did you do?', 'What are you doing?', 'What do you do?'], 0, 'What are you going to do ~?'],
    ['기대를 표현하는 말은?', ['I’m sorry to hear that.', 'I’m looking forward to it.', 'How often do you go?', 'Why don’t you go?'], 1, 'I’m looking forward to ~.'],
    ['“look forward to” 다음에 알맞은 것은?', ['see you', 'seeing you', 'saw you', 'to see you'], 1, 'look forward to + 동명사'],
    ['Let’s Watch에서 감천마을 입장료는?', ['1,000원', '2,000원', '무료', '알 수 없음'], 2, 'No, it’s free.'],
    ['빈칸에 알맞은 것은? “I enjoyed ___ pictures.”', ['take', 'took', 'taking', 'to take'], 2, 'enjoy + 동명사'],
    ['빈칸에 알맞은 것은? “We are going to ___ a bike.”', ['rent', 'rents', 'renting', 'rented'], 0, 'be going to + 동사원형'],
    ['어법상 틀린 문장은?', ['I enjoyed swimming.', 'She is going to visit Rome.', 'I enjoyed to swim.', 'Riding a bike is fun.'], 2, 'I enjoyed swimming.'],
    ['빈칸에 알맞은 것은? “___ you going to visit the museum?”', ['Do', 'Are', 'Will', 'Is'], 1, 'Are you going to ~?'],
    ['부라노의 어부들이 집을 칠한 까닭은?', ['관광객을 모으려고', '안개 낀 날에도 집을 찾으려고', '레이스를 팔려고', '비를 막으려고'], 1, 'They wanted to find their homes on foggy days.'],
    ['나리가 점심 후에 할 일은?', ['레이스 사기', '수상 버스 타기', '자전거로 섬 둘러보기', '사진 찍기'], 2, 'I’m going to explore the island by bicycle.'],
    ['과타페 건물의 특징은?', ['지붕이 모두 파랗다', '아랫부분에 그림 장식 판이 있다', '모두 흰색이다', '절벽 위에 있다'], 1, 'colorful panels on the bottom'],
    ['글의 요지로 알맞은 것은?', ['여행은 비싸다', '마을마다 자기만의 색과 이야기가 있다', '계단 오르기는 힘들다', '기념품을 꼭 사야 한다'], 1, 'Each village has its own colors and its own story.']
  ]
};

/* ── 보강: 원리 중심 문법 · 모션 그래픽 · 낱말 만들기 · 발음 기호 ── */
(function (L) {
  const ipa = {village: '/ˈvɪlɪdʒ/', island: '/ˈaɪlənd/', narrow: '/ˈnæroʊ/', view: '/vjuː/', souvenir: '/ˌsuːvəˈnɪr/', local: '/ˈloʊkl/', explore: '/ɪkˈsplɔːr/', fee: '/fiː/', rental: '/ˈrentl/', bicycle: '/ˈbaɪsɪkl/', schedule: '/ˈskedʒuːl/', tour: '/tʊr/', museum: '/mjuˈziːəm/', trail: '/treɪl/', cliff: '/klɪf/', terrace: '/ˈterəs/', fantastic: '/fænˈtæstɪk/', perfect: '/ˈpɜːrfɪkt/', vacation: '/veɪˈkeɪʃn/', spend: '/spend/'};
  L.vocab.words.forEach(w => { if (ipa[w.w]) w.ipa = ipa[w.w]; });
  L.vocab.morph = [
    {w: 'bicycle', ko: '자전거', parts: [{t: 'bi', k: 'pre', m: '둘'}, {t: 'cycle', k: 'root', m: '바퀴, 원'}], family: ['tricycle', 'recycle', 'unicycle'], note: '바퀴(cycle)가 두(bi) 개 → 자전거. tri(셋) + cycle = 세발자전거.'},
    {w: 'rental', ko: '대여', parts: [{t: 'rent', k: 'root', m: '빌리다'}, {t: 'al', k: 'suf', m: '~하는 일 (명사)'}], family: ['arrival', 'survival', 'renter'], note: '동사 + -al = 명사 (arrive → arrival).'},
    {w: 'explore', ko: '탐험하다', parts: [{t: 'ex', k: 'pre', m: '밖으로'}, {t: 'plore', k: 'root', m: '소리쳐 부르다'}], family: ['explorer', 'exploration', 'exit'], note: '밖으로 나가 찾아다니다 → 탐험하다. -er을 붙이면 탐험가(explorer).'}
  ];
  const [g1, g2] = L.grammar.points;
  g1.principle = {
    q: '동사가 어떻게 명사 자리에 들어갈까?',
    pic: [{en: 'travel', ko: '여행하다 (동사)'}, {en: 'traveling', ko: '여행하는 것 (명사)', hot: true}],
    core: '동사에 -ing를 붙이면 “~하는 것”이라는 명사가 된다. 그래서 주어·목적어·보어 자리에 들어갈 수 있다.',
    why: ['주어 자리: Traveling is fun. (동명사 주어는 하나의 일 → 단수 is)', 'enjoy, finish, like 같은 동사 뒤 목적어 자리에 온다.', '전치사(at, about, of) 뒤에도 동사를 쓰려면 -ing로 바꾼다 (good at swimming).']
  };
  g1.anim = [{title: '동사 → “~하는 것” (명사)', states: [
    {t: 'I/S | travel/V#tr | . | / | It/S#it | is | fun/C#fun | .', note: '두 문장', ko: '나는 여행한다. 그것은 재미있다.'},
    {t: 'Traveling/X#tr | is/V | fun/C#fun | .', note: '-ing를 붙여 주어 자리에!', ko: '여행하는 것은 재미있다.'}]}];
  g1.contrast = {title: '동명사가 들어가는 자리', pairs: [
    {a: '{{Climbing}} El Peñol was hard.', ka: '엘 페뇰을 오르는 것은 힘들었다. (주어)', b: 'I enjoyed {{climbing}} El Peñol.', kb: '나는 엘 페뇰 오르기를 즐겼다. (enjoy의 목적어)'}],
    point: '동사가 명사 자리에 오려면 -ing.'};
  g2.principle = {
    q: 'will과 be going to는 어떻게 다를까?',
    pic: [{en: 'be going to', ko: '이미 정한 계획 (향해 가는 중)', hot: true}, {en: 'will', ko: '말하는 순간 정한 일'}],
    core: 'be going to는 “~하는 쪽으로 가고 있다” — 이미 정해서 준비하고 있는 계획에 쓴다.',
    why: ['be동사는 주어에 맞추고(am/are/is), to 뒤에는 동사원형.', '부정문: be동사 + not going to. 의문문: Be동사 + 주어 + going to ~?', '말하는 순간 정한 일이나 예측에는 will을 쓰기도 한다.']
  };
  g2.anim = [{title: '계획을 말하는 be going to', states: [
    {t: 'My family/S | visits/V#v | Busan/M | tomorrow/M | .', note: '그냥 사실처럼', ko: '우리 가족은 내일 부산에 간다.'},
    {t: 'My family/S | is going to/X | visit/V#v | Busan/M | tomorrow/M | .', note: 'is going to + 동사원형 = 이미 정한 계획', ko: '우리 가족은 내일 부산에 갈 예정이다.'}]}];
  g2.contrast = {title: '정해 둔 계획 vs 방금 정한 일', pairs: [
    {a: 'I’m {{going to}} visit my aunt this weekend.', ka: '이번 주말에 이모 댁에 갈 예정이다. (미리 정한 계획)', b: 'It’s cold. I {{will}} close the window.', kb: '춥다. 내가 창문 닫을게. (지금 막 정한 일)'}],
    point: '미리 정한 계획은 be going to, 그 자리에서 정한 일은 will.'};
})(window.LESSON);
