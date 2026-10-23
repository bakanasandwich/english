/* 중1 영어(동아·윤정미) Lesson 6 · Good for the Earth, Good for Us
   단원명은 교과서·문제집 목차 기준. 의사소통 기능과 문법은 추정(estimate: true).
   대화문·읽기 글은 교과서 원문이 아니라 단원 주제에 맞춰 새로 쓴 글입니다. */
window.LESSON = {
  book: 'm1-donga', no: 6, estimate: true,
  title: 'Good for the Earth, Good for Us', ko: '지구에 좋은 것이 우리에게도 좋다',
  bigQ: {en: 'What is good for both the Earth and us?', ko: '지구와 우리 모두에게 좋은 것은 무엇일까?'},
  goals: {
    vocab: ['음식·텃밭·환경과 관련된 낱말 16개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 지구를 위한 실천을 한 문장으로 말할 수 있다.'],
    talk: ['도움을 요청하고 그에 답할 수 있다.', '금지와 주의를 표현할 수 있다.'],
    grammar: ['조동사 should와 must로 충고와 의무를 말할 수 있다.', '접속사 when으로 ‘~할 때’를 표현할 수 있다.'],
    read1: ['학교 텃밭 이야기의 앞부분을 읽고 텃밭을 시작한 까닭을 이해할 수 있다.'],
    read2: ['텃밭이 지구와 우리에게 준 좋은 점을 정리하고, 나의 실천을 영어로 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'Where does your lunch come from?', ko: '여러분의 점심은 어디에서 올까요?', note: '급식 재료가 어디서 왔을지 추측하게 한다(멀리서 트럭·배로). 가까운 곳에서 키운 음식과 비교하며 단원을 연다.'},
    words: [
      {w: 'earth', pos: 'n.', ko: '지구; 흙', ic: '🌍', audio: 'assets/audio/earth.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'We live on the Earth.', exKo: '우리는 지구에 산다.'},
      {w: 'garden', pos: 'n.', ko: '정원, 텃밭', ic: '🪴', audio: 'assets/audio/garden.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Our school has a small garden.', exKo: '우리 학교에는 작은 텃밭이 있다.'},
      {w: 'plant', pos: 'v./n.', ko: '심다; 식물', ic: '🌱', audio: 'assets/audio/plant.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'We planted tomatoes.', exKo: '우리는 토마토를 심었다.'},
      {w: 'grow', pos: 'v.', ko: '기르다, 자라다', ic: '📈', audio: 'assets/audio/grow.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Plants grow fast in summer.', exKo: '식물은 여름에 빨리 자란다.'},
      {w: 'water', pos: 'v./n.', ko: '물을 주다; 물', ic: '💧', audio: 'assets/audio/water.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Water the plants every morning.', exKo: '매일 아침 식물에 물을 줘라.'},
      {w: 'seed', pos: 'n.', ko: '씨앗', ic: '🌰', audio: 'assets/audio/seed.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'I put a seed in the soil.', exKo: '나는 흙에 씨앗 하나를 넣었다.'},
      {w: 'soil', pos: 'n.', ko: '흙, 토양', ic: '🟫', audio: 'assets/audio/soil.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Good soil helps plants grow.', exKo: '좋은 흙은 식물이 자라는 것을 돕는다.'},
      {w: 'fresh', pos: 'adj.', ko: '신선한', ic: '🥬', audio: 'assets/audio/fresh.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'These vegetables are fresh.', exKo: '이 채소들은 신선하다.'},
      {w: 'local', pos: 'adj.', ko: '지역의', ic: '📍', audio: 'assets/audio/local.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Local food is fresher.', exKo: '지역 음식이 더 신선하다.'},
      {w: 'pick', pos: 'v.', ko: '따다, 고르다', ic: '🍅', audio: 'assets/audio/pick.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'We picked the red tomatoes.', exKo: '우리는 빨간 토마토를 땄다.'},
      {w: 'compost', pos: 'n.', ko: '퇴비', ic: '🪱', ex: 'We make compost from food waste.', exKo: '우리는 음식물 쓰레기로 퇴비를 만든다.'},
      {w: 'insect', pos: 'n.', ko: '곤충', ic: '🐞', audio: 'assets/audio/insect.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Some insects help the garden.', exKo: '어떤 곤충은 텃밭에 도움이 된다.'},
      {w: 'chemical', pos: 'n.', ko: '화학 물질', ic: '🧪', audio: 'assets/audio/chemical.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'We don’t use chemicals.', exKo: '우리는 화학 물질을 쓰지 않는다.'},
      {w: 'share', pos: 'v.', ko: '나누다', ic: '🤲', audio: 'assets/audio/share.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'We shared the lettuce with our neighbors.', exKo: '우리는 상추를 이웃과 나눴다.'},
      {w: 'harvest', pos: 'n./v.', ko: '수확; 수확하다', ic: '🧺', audio: 'assets/audio/harvest.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The harvest was big this year.', exKo: '올해는 수확이 많았다.'},
      {w: 'rooftop', pos: 'n.', ko: '옥상', ic: '🏢', ex: 'There is a garden on the rooftop.', exKo: '옥상에 텃밭이 있다.'}
    ],
    phrases: [
      {w: 'take care of', ko: '~을 돌보다', ex: 'We take care of the plants.', exKo: '우리는 식물을 돌본다.'},
      {w: 'come from', ko: '~에서 오다', ex: 'This rice comes from our town.', exKo: '이 쌀은 우리 마을에서 온다.'},
      {w: 'throw away', ko: '버리다', ex: 'Don’t throw away food.', exKo: '음식을 버리지 마라.'},
      {w: 'be good for', ko: '~에 좋다', ex: 'Fresh food is good for you.', exKo: '신선한 음식은 너에게 좋다.'},
      {w: 'a little', ko: '조금', ex: 'Give the plants a little water.', exKo: '식물에 물을 조금 줘라.'},
      {w: 'little by little', ko: '조금씩', ex: 'The seeds grew little by little.', exKo: '씨앗이 조금씩 자랐다.'}
    ],
    pairs: [
      {a: 'fresh', b: 'old', rel: '반대말'},
      {a: 'plant', b: 'harvest', rel: '심다 / 거두다'},
      {a: 'grow', b: 'raise', rel: '비슷한 말'},
      {a: 'garden', b: 'gardener', rel: '장소 / 사람'}
    ],
    wrap: {en: 'I want to grow ______. It is good for ______.', ko: '오늘 배운 낱말로 키우고 싶은 식물과 그 까닭 쓰기'}
  },

  talk: {
    hook: {en: 'Have you ever grown a plant?', ko: '식물을 키워 본 적이 있나요?', note: '강낭콩, 화분, 다육이 등 경험을 나눈다. 키우면서 누구에게 도움을 받았는지 물으며 Can you help me ~?로 연결한다.'},
    speakers: {Yejin: {voice: 0, pitch: 1.15}, Owen: {voice: 1, pitch: 1}, 'Mr. Jang': {voice: 2, pitch: .9}, Hani: {voice: 0, pitch: 1.1}, Lucas: {voice: 1, pitch: .95}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '도움 요청하고 답하기',
        key: {q: ['Can you help me ~?', 'Could you ~?'], a: ['Sure. / Of course.', 'No problem.', 'Sorry, I can’t. I’m busy.']},
        note: 'Could you ~?는 Can you ~?보다 공손하다. 거절할 때도 Sorry 뒤에 까닭을 말하게 한다.',
        dialogs: [
          { title: 'Dialogue A', setting: '아침, 옥상 텃밭', lines: [
            {s: 'Yejin', en: 'Owen, {{can you help me}} carry this water can?', ko: '오웬, 이 물뿌리개 옮기는 거 도와줄래?'},
            {s: 'Owen', en: '{{Sure}}. Wow, it’s heavy!', ko: '물론이지. 와, 무겁다!'},
            {s: 'Yejin', en: 'We should water the tomatoes before class.', ko: '수업 전에 토마토에 물을 줘야 해.'},
            {s: 'Owen', en: 'Look! There’s a small green tomato.', ko: '봐! 작은 초록 토마토가 있어.'},
            {s: 'Yejin', en: 'When it turns red, we can pick it.', ko: '빨개지면 딸 수 있어.'}
          ]},
          { title: 'Dialogue B', setting: '쉬는 시간, 교실', lines: [
            {s: 'A', en: '{{Could you}} make a poster for our garden club?', ko: '우리 텃밭 동아리 포스터 좀 만들어 줄 수 있어?'},
            {s: 'B', en: '{{Sorry, I can’t}}. I have a math test today.', ko: '미안, 못 해. 오늘 수학 시험이 있어.'},
            {s: 'A', en: 'How about tomorrow?', ko: '내일은 어때?'},
            {s: 'B', en: '{{No problem}}. I’ll do it tomorrow.', ko: '문제없어. 내일 할게.'}
          ]}
        ],
        check: [
          {q: 'What does Yejin ask Owen to do?', a: 'To help her carry the water can.'},
          {q: 'When can they pick the tomato?', a: 'When it turns red.'},
          {q: 'Why can’t B make a poster today?', a: 'B has a math test today.'}
        ],
        drill: {frame: ['A: Can you help me ____?', 'B: Sure. No problem.'], opts: ['water the plants', 'carry this box', 'pick the tomatoes', 'clean the garden', 'make a poster', 'plant the seeds']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '금지·주의 표현하기',
        key: {q: ['Can I ~?', 'Is it okay to ~?'], a: ['You must not ~.', 'You shouldn’t ~.', 'Be careful! / Don’t ~.']},
        note: 'must not은 강한 금지, shouldn’t는 충고에 가까운 금지. 3차시 should / must와 이어진다.',
        dialogs: [
          { title: 'Dialogue A', setting: '방과 후, 텃밭', lines: [
            {s: 'Lucas', en: 'Mr. Jang, {{can I}} use this spray on the bugs?', ko: '장 선생님, 벌레에 이 스프레이 뿌려도 돼요?'},
            {s: 'Mr. Jang', en: 'No, {{you must not}} use it. It has chemicals.', ko: '아니, 그건 쓰면 안 돼. 화학 물질이 들어 있어.'},
            {s: 'Lucas', en: 'Then what should I do?', ko: '그럼 어떻게 해야 해요?'},
            {s: 'Mr. Jang', en: 'Pick them off by hand. And {{be careful}}. Some insects help our garden.', ko: '손으로 떼어 내렴. 그리고 조심해. 어떤 곤충은 텃밭을 도와주거든.'},
            {s: 'Lucas', en: 'Oh, like ladybugs!', ko: '아, 무당벌레처럼요!'}
          ]},
          { title: 'Dialogue B', setting: '점심시간, 급식실', lines: [
            {s: 'A', en: '{{Is it okay to}} throw away my vegetables?', ko: '채소 버려도 돼?'},
            {s: 'B', en: '{{You shouldn’t}} waste food. Try one bite.', ko: '음식을 낭비하면 안 돼. 한 입만 먹어 봐.'},
            {s: 'A', en: 'Okay. Hmm, it’s not bad.', ko: '알겠어. 음, 나쁘지 않네.'},
            {s: 'B', en: 'It’s from our school garden!', ko: '그거 우리 학교 텃밭에서 온 거야!'}
          ]}
        ],
        check: [
          {q: 'Why must Lucas not use the spray?', a: 'It has chemicals.'},
          {q: 'What should Lucas do with the bugs?', a: 'Pick them off by hand.'},
          {q: 'Where are the vegetables from?', a: 'From the school garden.'}
        ],
        drill: {frame: ['A: Can I ____?', 'B: No, you must not.'], opts: ['throw away food', 'pick the flowers', 'use chemicals', 'step on the plants', 'leave the water on', 'feed the cat chocolate']}
      }
    ],
    interviewEx: 'Jiu asked me to help her plant seeds. I said, “Sure.”',
    watch: {
      label: 'Let’s Watch', title: 'The Compost Box', setting: '텃밭 동아리 시간. 하니와 장 선생님이 퇴비 상자 앞에 서 있다.',
      lines: [
        {s: 'Hani', en: 'Mr. Jang, what is this box? It smells strange.', ko: '장 선생님, 이 상자는 뭐예요? 냄새가 이상해요.'},
        {s: 'Mr. Jang', en: 'It’s a compost box. We put fruit peels and leaves in it.', ko: '퇴비 상자야. 과일 껍질이랑 나뭇잎을 넣지.'},
        {s: 'Hani', en: 'Why? Can you tell me?', ko: '왜요? 알려 주실래요?'},
        {s: 'Mr. Jang', en: 'When they break down, they become good soil for our plants.', ko: '그것들이 분해되면 우리 식물을 위한 좋은 흙이 된단다.'},
        {s: 'Hani', en: 'Cool! Can I put my banana peel in it?', ko: '멋져요! 제 바나나 껍질 넣어도 돼요?'},
        {s: 'Mr. Jang', en: 'Sure. But you must not put plastic in it.', ko: '물론이지. 하지만 플라스틱은 넣으면 안 돼.'}
      ],
      check: [
        {q: 'What do they put in the compost box?', a: 'Fruit peels and leaves.'},
        {q: 'What happens when they break down?', a: 'They become good soil for the plants.'},
        {q: 'What must Hani not put in the box?', a: 'Plastic.'}
      ]
    },
    wrap: {en: 'Ask your partner for help with a garden job, and tell one thing they must not do.', ko: '텃밭 일을 도와 달라고 부탁하고, 해서는 안 되는 일 하나를 말하기'}
  },

  grammar: {
    cover: 'should · when',
    hook: {en: 'We {{should}} eat local food.  /  {{When}} the tomato turns red, we can pick it.', ko: '빈칸에 들어갈 말은 각각 어떤 뜻을 더해 줄까?', answer: 'should는 ‘~해야 한다(충고)’, When은 ‘~할 때’(시간)', note: '첫 문장은 조언, 두 번째 문장은 ‘언제’를 말한다는 점을 찾게 한다.'},
    points: [
      { id: 'g1', name: '조동사 should · must', short: 'should · must', form: 'should / must + 동사원형', meaning: '~해야 한다 (충고 / 의무)',
        notice: [
          {en: 'You {{should}} eat more vegetables.', ko: '너는 채소를 더 먹어야 한다. (충고)'},
          {en: 'We {{must}} water the plants every day.', ko: '우리는 매일 식물에 물을 줘야 한다. (의무)'},
          {en: 'You {{must not}} use chemicals.', ko: '너는 화학 물질을 쓰면 안 된다. (금지)'}
        ],
        rule: [
          {k: 'should', v: '좋은 생각이니 ~하는 게 좋다 (부정 shouldn’t)', ex: 'You shouldn’t waste food.'},
          {k: 'must', v: '꼭 해야 한다 / must not: ~하면 안 된다', ex: 'You must wear gloves.'},
          {k: '주의', v: '뒤에 동사원형, 3인칭이어도 -s 없음', ex: 'She should drink water. (○) / shoulds (✗)'}
        ],
        check: [
          {q: 'You ____ wash your hands. (충고)', a: 'should'},
          {q: 'We must ____ the seeds today. (plant)', a: 'plant'},
          {q: 'You ____ ____ step on the plants. (금지, must)', a: 'must not'},
          {q: 'He shouldn’t ____ away food. (throw)', a: 'throw'},
          {q: 'She ____ wear a hat in the sun. (should)', a: 'should'}
        ],
        trap: {bad: 'You should to eat fresh food.', good: 'You should eat fresh food.', why: 'should 뒤에는 to 없이 동사원형.'},
        scramble: [
          {ko: '우리는 음식을 낭비하면 안 된다.', en: 'We should not waste food.'},
          {ko: '너는 매일 아침 식물에 물을 줘야 한다.', en: 'You must water the plants every morning.'},
          {ko: '우리는 지역 음식을 먹어야 한다.', en: 'We should eat local food.'}
        ]
      },
      { id: 'g2', name: '접속사 when', short: '접속사 when', form: 'When + 주어 + 동사, 주어 + 동사', meaning: '~할 때',
        notice: [
          {en: '{{When}} the tomato turns red, we pick it.', ko: '토마토가 빨개지면 우리는 그것을 딴다.'},
          {en: 'I feel happy {{when}} I work in the garden.', ko: '나는 텃밭에서 일할 때 행복하다.'},
          {en: '{{When}} it rains, we don’t water the plants.', ko: '비가 올 때 우리는 식물에 물을 주지 않는다.'}
        ],
        rule: [
          {k: '자리', v: 'When절이 앞이면 쉼표(,) / 뒤에 오면 쉼표 없음', ex: 'We pick it when it turns red.'},
          {k: '구별', v: '의문사 When? (언제?)과 다르다', ex: 'When do you water them? (언제)'},
          {k: '시제', v: '앞일이 미래라도 when절은 현재시제', ex: 'When summer comes, we will harvest.'}
        ],
        check: [
          {q: '____ I get home, I eat a snack. (~할 때)', a: 'When'},
          {q: 'We were happy when we ____ the corn. (pick, 과거)', a: 'picked'},
          {q: 'When it ____ hot, the plants need more water. (be)', a: 'is'},
          {q: 'I wear gloves ____ I work in the garden.', a: 'when'},
          {q: 'When the seeds ____, we will be excited. (grow)', a: 'grow'}
        ],
        trap: {bad: 'When it will rain, we will stay inside.', good: 'When it rains, we will stay inside.', why: '시간을 나타내는 when절에서는 미래 일도 현재시제로 쓴다.'},
        scramble: [
          {ko: '나는 텃밭에 있을 때 행복하다.', en: 'I am happy when I am in the garden.'},
          {ko: '토마토가 빨개지면 우리는 그것을 딴다.', en: 'When the tomatoes turn red, we pick them.'},
          {ko: '비가 올 때 우리는 물을 주지 않는다.', en: 'When it rains, we don’t water.'}
        ]
      }
    ],
    wrap: {en: 'We should ______. When ______, I ______.', ko: 'should 한 문장, when 한 문장으로 지구를 위한 실천 쓰기'},
    wrapEx: 'We should not throw away food. When I eat lunch, I finish my vegetables.'
  },

  reading: {
    title: 'Our Rooftop Garden', kind: '학교 소식지 기사', cover: 'Seed', coverKo: '옥상 위의 작은 밭', cover2: 'Harvest', coverKo2: '우리가 거둔 것',
    before: [
      {q: 'Look at the title. Where is the garden?', a: '옥상 (rooftop)'},
      {q: 'Why do people grow food at school?', a: '자유롭게 예측한 뒤 글에서 확인'}
    ],
    gloss: {'gray': '회색의', 'boxes': '상자들', 'lettuce': '상추', 'peppers': '고추', 'sprout': '싹', 'ladybugs': '무당벌레', 'trucks': '트럭', 'salad': '샐러드', 'neighbors': '이웃', 'proud': '자랑스러운'},
    paras: [
      {who: 'Spring', en: 'Our school rooftop used to be empty and gray. This spring, the garden club changed it. We put twenty wooden boxes on the rooftop and filled them with soil.',
       ko: '우리 학교 옥상은 예전에 텅 비고 회색이었다. 올봄 텃밭 동아리가 그곳을 바꿨다. 우리는 옥상에 나무 상자 스무 개를 놓고 흙을 채웠다.',
       check: {q: 'What did the garden club put on the rooftop?', a: 'Twenty wooden boxes (filled with soil).'}, think: '우리 학교에서 텃밭을 만들 수 있는 곳은?'},
      {who: 'Why a Garden?', en: 'Why did we start a garden? Food in stores often comes from far away. Big trucks carry it for a long time, and they make air pollution. When we grow our own food, it travels zero kilometers!',
       ko: '왜 텃밭을 시작했을까? 가게의 음식은 흔히 먼 곳에서 온다. 큰 트럭이 오랫동안 실어 나르고, 트럭은 대기 오염을 만든다. 우리가 먹을 것을 직접 기르면 음식이 이동하는 거리는 0킬로미터다!',
       check: {q: 'Why is store food not always good for the Earth?', a: 'Big trucks carry it from far away and make air pollution.'}, think: '‘0킬로미터 음식’은 무슨 뜻일까?'},
      {who: 'Rules', en: 'Our teacher, Mr. Jang, gave us some rules. “You must water the plants every day. You must not use chemicals. And you should be patient.” We planted lettuce, tomatoes, and peppers.',
       ko: '장 선생님은 우리에게 몇 가지 규칙을 주셨다. “매일 식물에 물을 줘야 한다. 화학 물질은 쓰면 안 된다. 그리고 참을성을 가져야 한다.” 우리는 상추, 토마토, 고추를 심었다.',
       check: {q: 'What did they plant?', a: 'Lettuce, tomatoes, and peppers.'}, think: '왜 참을성이 필요할까?'},
      {who: 'Summer', en: 'At first, nothing happened. Then one morning, we saw tiny green sprouts. When bugs ate the leaves, we didn’t use sprays. We picked off the bugs and welcomed ladybugs. Little by little, the plants grew.',
       ko: '처음에는 아무 일도 일어나지 않았다. 그러다 어느 아침, 아주 작은 초록 싹이 보였다. 벌레가 잎을 먹었을 때 우리는 스프레이를 쓰지 않았다. 벌레를 손으로 떼어 내고 무당벌레를 반겼다. 조금씩 식물이 자랐다.',
       check: {q: 'What did they do when bugs ate the leaves?', a: 'They picked off the bugs and welcomed ladybugs.'}, think: '무당벌레를 반긴 까닭은?'},
      {who: 'Harvest', en: 'In July, we had our first harvest. We made a big salad with our lettuce and tomatoes. It tasted fresher than store salad! We also shared some vegetables with our neighbors.',
       ko: '7월에 첫 수확을 했다. 우리가 키운 상추와 토마토로 큰 샐러드를 만들었다. 가게 샐러드보다 더 신선한 맛이 났다! 채소 일부는 이웃과 나누기도 했다.',
       check: {q: 'What did they make with their vegetables?', a: 'A big salad.'}, think: '직접 기른 음식이 더 맛있게 느껴지는 까닭은?'},
      {who: 'What We Learned', en: 'Our garden is good for the Earth because it saves energy. It is good for us, too. We eat fresh food, we work together, and we feel proud. What can you grow?',
       ko: '우리 텃밭은 에너지를 아끼기 때문에 지구에 좋다. 우리에게도 좋다. 우리는 신선한 음식을 먹고, 함께 일하고, 뿌듯함을 느낀다. 여러분은 무엇을 기를 수 있나요?',
       check: {q: 'How is the garden good for the students?', a: 'They eat fresh food, work together, and feel proud.'}, think: '집에서 기를 수 있는 식물은?'}
    ],
    split: 3,
    next: '텃밭의 식물들은\n어떻게 자랐을까?',
    recap: {q: '옥상 텃밭은 어떻게 시작됐을까?', items: [{k: 'BEFORE', v: 'an empty, gray rooftop'}, {k: 'WHY', v: 'store food travels far and trucks make pollution'}, {k: 'RULES', v: 'water every day · no chemicals · be patient'}]},
    tf: [
      {p: 0, s: 'The rooftop used to be empty.', a: true},
      {p: 1, s: 'Food in stores always comes from nearby.', a: false, why: '흔히 먼 곳에서 온다.'},
      {p: 2, s: 'Mr. Jang said, “You must use chemicals.”', a: false, why: '화학 물질을 쓰면 안 된다.'},
      {p: 3, s: 'The students used sprays on the bugs.', a: false, why: '손으로 떼어 냈다.'},
      {p: 4, s: 'They shared vegetables with their neighbors.', a: true},
      {p: 5, s: 'The garden is good for the Earth and for the students.', a: true}
    ],
    key: [
      {en: '{{When}} we grow our own food, it travels zero kilometers!', note: 'When + 주어 + 동사: ~할 때', g: 'g2'},
      {en: 'You {{must water}} the plants every day.', note: 'must + 동사원형: 의무', g: 'g1'},
      {en: 'You {{must not use}} chemicals.', note: 'must not: 금지', g: 'g1'},
      {en: 'You {{should be}} patient.', note: 'should + be + 형용사', g: 'g1'},
      {en: '{{When}} bugs ate the leaves, we didn’t use sprays.', note: 'When절 (과거)', g: 'g2'},
      {en: 'It {{tasted fresher}} than store salad!', note: '감각동사 + 비교급', g: ''}
    ],
    summary: {text: 'The garden club made a {{rooftop}} garden. Food from far away needs {{trucks}}, so growing our own food is good for the Earth. The students must {{water}} the plants and must not use {{chemicals}}. In July, they made a {{salad}} and shared vegetables with their {{neighbors}}.'},
    order: ['They put boxes on the rooftop.', 'They planted lettuce and tomatoes.', 'Tiny green sprouts came up.', 'They had their first harvest.'],
    chart: {title: 'GOOD FOR...', ko: '텃밭의 좋은 점 정리하기', cols: ['How?'], note: '‘지구에 좋은 점’과 ‘우리에게 좋은 점’을 나누어 말하게 하고 관통 질문에 답한다.', rows: [
      {name: 'The Earth', cells: ['no trucks, no chemicals, saves energy']},
      {name: 'Our body', cells: ['fresh, healthy food']},
      {name: 'Our mind', cells: ['work together, feel proud']}
    ]},
    wrap: {en: 'We should ______ for the Earth. When I ______, I feel ______. It is good for the Earth and good for us!', ko: '관통 질문으로 돌아가기: 지구와 나 모두에게 좋은 실천 쓰기'}
  },

  quiz: [
    ['“씨앗”을 뜻하는 낱말은?', ['soil', 'seed', 'plant', 'insect'], 1, 'seed: 씨앗'],
    ['“fresh”의 반대말은?', ['old', 'local', 'green', 'healthy'], 0, 'fresh ↔ old'],
    ['“We take care ___ the plants.”', ['to', 'for', 'of', 'with'], 2, 'take care of'],
    ['“수확”을 뜻하는 낱말은?', ['garden', 'rooftop', 'compost', 'harvest'], 3, 'harvest: 수확'],
    ['도움을 요청하는 표현은?', ['Be careful!', 'Can you help me?', 'You must not go.', 'That sounds great.'], 1, 'Can you help me ~?'],
    ['금지를 나타내는 표현은?', ['Sure, I can.', 'No problem at all.', 'Of course, I can help.', 'You must not do that.'], 3, 'You must not ~'],
    ['Let’s Watch에서 퇴비 상자에 넣으면 안 되는 것은?', ['나뭇잎', '과일 껍질', '플라스틱', '바나나 껍질'], 2, 'you must not put plastic in it'],
    ['빈칸에 알맞은 것은? “You ___ eat more vegetables.” (충고)', ['should', 'shoulds', 'should to', 'are should'], 0, 'should + 동사원형'],
    ['빈칸에 알맞은 것은? “___ it rains, we don’t water.”', ['If', 'Why', 'What', 'When'], 3, '~할 때: When'],
    ['어법상 틀린 문장은?', ['You must wear gloves.', 'She should drink water.', 'We should to save water.', 'You must not run in here.'], 2, 'should 뒤에 to를 쓰지 않는다.'],
    ['빈칸에 알맞은 것은? “When summer ___, we will harvest.”', ['come', 'comes', 'came', 'will come'], 1, 'when절은 미래도 현재시제'],
    ['옥상 텃밭을 만들기 전 옥상의 모습은?', ['텅 비고 회색이었다', '작은 창고였다', '넓은 운동장이었다', '꽃과 나무가 가득했다'], 0, 'empty and gray'],
    ['가게 음식이 지구에 좋지 않은 까닭은?', ['값이 너무 비싸서', '맛이 별로 없어서', '트럭이 오염을 만들어서', '포장 쓰레기가 너무 많아서'], 2, 'Big trucks ... make air pollution.'],
    ['벌레가 잎을 먹었을 때 학생들이 한 일은?', ['식물을 모두 뽑았다', '선생님께 다 맡겼다', '벌레에 스프레이를 뿌렸다', '손으로 벌레를 떼어 냈다'], 3, 'We picked off the bugs.'],
    ['첫 수확으로 만든 것은?', ['피자', '샐러드', '김밥', '주스'], 1, 'a big salad']
  ]
};
