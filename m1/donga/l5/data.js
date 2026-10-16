/* 중1 영어(동아·윤정미) Lesson 5 · Think like Sherlock Holmes!
   단원명은 교과서·문제집 목차 기준. 의사소통 기능과 문법은 추정(estimate: true).
   대화문·읽기 글(짧은 추리 이야기)은 교과서 원문이 아니라 새로 쓴 글입니다. */
window.LESSON = {
  book: 'm1-donga', no: 5, estimate: true,
  title: 'Think like Sherlock Holmes!', ko: '셜록 홈스처럼 생각해!',
  bigQ: {en: 'How can we find the truth like a detective?', ko: '탐정처럼 진실을 찾으려면 어떻게 해야 할까?'},
  goals: {
    vocab: ['탐정·추리와 관련된 낱말 16개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 무언가를 관찰한 문장을 말할 수 있다.'],
    talk: ['단서를 보고 추측을 말할 수 있다.', '까닭을 묻고 답할 수 있다.'],
    grammar: ['감각동사 + 형용사로 보고 듣고 맡은 것을 말할 수 있다.', '비교급으로 두 대상을 비교할 수 있다.'],
    read1: ['추리 이야기의 사건과 단서를 파악할 수 있다.'],
    read2: ['단서를 정리해 범인을 추리하고, 나만의 짧은 추리 문제를 영어로 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'Look at your partner. What did they eat for lunch? Guess!', ko: '짝을 잘 보세요. 점심으로 무엇을 먹었을까요? 추측해 보세요!', note: '옷에 묻은 자국, 냄새 등 ‘단서’를 근거로 말하게 한다. 근거 없이 찍는 것과 단서로 추리하는 것의 차이를 짚는다.'},
    words: [
      {w: 'detective', pos: 'n.', ko: '탐정', ic: '🕵️', ex: 'Sherlock Holmes is a famous detective.', exKo: '셜록 홈스는 유명한 탐정이다.'},
      {w: 'clue', pos: 'n.', ko: '단서', ic: '🔍', ex: 'The detective found a clue.', exKo: '탐정이 단서를 찾았다.'},
      {w: 'mystery', pos: 'n.', ko: '미스터리, 수수께끼', ic: '❓', ex: 'I love mystery stories.', exKo: '나는 추리 이야기를 아주 좋아한다.'},
      {w: 'missing', pos: 'adj.', ko: '사라진, 없어진', ic: '🫥', ex: 'My pencil is missing.', exKo: '내 연필이 없어졌다.'},
      {w: 'footprint', pos: 'n.', ko: '발자국', ic: '👣', ex: 'There are footprints in the snow.', exKo: '눈 위에 발자국이 있다.'},
      {w: 'crumb', pos: 'n.', ko: '부스러기', ic: '🍪', ex: 'Cookie crumbs were on the floor.', exKo: '쿠키 부스러기가 바닥에 있었다.'},
      {w: 'guess', pos: 'v./n.', ko: '추측하다; 추측', ic: '🤔', ex: 'Can you guess the answer?', exKo: '답을 추측할 수 있니?'},
      {w: 'smell', pos: 'v./n.', ko: '냄새가 나다; 냄새', ic: '👃', ex: 'The kitchen smells sweet.', exKo: '부엌에서 달콤한 냄새가 난다.'},
      {w: 'sound', pos: 'v.', ko: '~하게 들리다', ic: '👂', ex: 'That sounds strange.', exKo: '그거 이상하게 들린다.'},
      {w: 'look', pos: 'v.', ko: '~하게 보이다', ic: '👀', ex: 'You look worried.', exKo: '너 걱정스러워 보여.'},
      {w: 'careful', pos: 'adj.', ko: '조심스러운, 주의 깊은', ic: '🧐', ex: 'A detective is careful.', exKo: '탐정은 주의 깊다.'},
      {w: 'tiny', pos: 'adj.', ko: '아주 작은', ic: '🐜', ex: 'I saw a tiny footprint.', exKo: '나는 아주 작은 발자국을 보았다.'},
      {w: 'muddy', pos: 'adj.', ko: '진흙투성이의', ic: '🟫', ex: 'His shoes were muddy.', exKo: '그의 신발은 진흙투성이였다.'},
      {w: 'solve', pos: 'v.', ko: '해결하다, 풀다', ic: '✅', ex: 'She solved the mystery.', exKo: '그녀는 수수께끼를 풀었다.'},
      {w: 'truth', pos: 'n.', ko: '진실', ic: '💡', ex: 'Tell me the truth.', exKo: '나에게 진실을 말해 줘.'},
      {w: 'thief', pos: 'n.', ko: '도둑', ic: '🦹', ex: 'Who is the thief?', exKo: '누가 도둑일까?'}
    ],
    phrases: [
      {w: 'look for', ko: '~을 찾다', ex: 'I’m looking for my key.', exKo: '나는 열쇠를 찾고 있다.'},
      {w: 'find out', ko: '알아내다', ex: 'Let’s find out the truth.', exKo: '진실을 알아내자.'},
      {w: 'pay attention to', ko: '~에 주의를 기울이다', ex: 'Pay attention to small things.', exKo: '작은 것에 주의를 기울여라.'},
      {w: 'in front of', ko: '~ 앞에', ex: 'A dog sat in front of the door.', exKo: '개 한 마리가 문 앞에 앉아 있었다.'},
      {w: 'at first', ko: '처음에는', ex: 'At first, I didn’t know.', exKo: '처음에 나는 몰랐다.'},
      {w: 'in the end', ko: '결국, 마침내', ex: 'In the end, she solved it.', exKo: '마침내 그녀가 그것을 풀었다.'}
    ],
    pairs: [
      {a: 'tiny', b: 'huge', rel: '반대말'},
      {a: 'careful', b: 'careless', rel: '반대말'},
      {a: 'missing', b: 'lost', rel: '비슷한 말'},
      {a: 'mystery', b: 'mysterious', rel: '명사 / 형용사'}
    ],
    wrap: {en: 'I found a clue: ______. It looks ______.', ko: '오늘 배운 낱말로 교실에서 찾은 ‘단서’ 하나 설명하기'}
  },

  talk: {
    hook: {en: 'Who is your favorite detective?', ko: '가장 좋아하는 탐정은 누구인가요?', note: '셜록 홈스, 코난 등. 탐정이 잘하는 것(관찰, 질문, 추리)을 끌어낸다.'},
    speakers: {Ella: {voice: 0, pitch: 1.15}, Jun: {voice: 1, pitch: .95}, 'Ms. Yoon': {voice: 2, pitch: 1.05}, Sam: {voice: 1, pitch: 1}, Rina: {voice: 0, pitch: 1.1}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '추측하여 말하기',
        key: {q: ['What do you think happened?', 'Who do you think ~?'], a: ['I think ~.', 'Maybe ~.', 'It looks like ~.']},
        note: '추측할 때 I think ~ / Maybe ~ / It looks like + 명사. 단서(because ~)를 함께 말하게 한다.',
        dialogs: [
          { title: 'Dialogue A', setting: '아침, 교실 창가', lines: [
            {s: 'Ella', en: 'Jun, look! The flower pot is on the floor.', ko: '준, 봐! 화분이 바닥에 떨어져 있어.'},
            {s: 'Jun', en: 'Oh no. {{What do you think happened}}?', ko: '이런. 무슨 일이 있었던 것 같아?'},
            {s: 'Ella', en: '{{I think}} the wind pushed it. The window is open.', ko: '바람이 밀었던 것 같아. 창문이 열려 있잖아.'},
            {s: 'Jun', en: 'But look. There are tiny footprints.', ko: '그런데 봐. 아주 작은 발자국이 있어.'},
            {s: 'Ella', en: 'You’re right. {{It looks like}} a cat’s footprints!', ko: '맞네. 고양이 발자국 같아!'}
          ]},
          { title: 'Dialogue B', setting: '점심시간, 사물함 앞', lines: [
            {s: 'A', en: 'My eraser is missing. {{Who do you think}} took it?', ko: '내 지우개가 없어졌어. 누가 가져간 것 같아?'},
            {s: 'B', en: '{{Maybe}} nobody took it. Did you check your bag?', ko: '아마 아무도 안 가져갔을 거야. 가방 확인해 봤어?'},
            {s: 'A', en: 'Oh, here it is! It was in my pencil case.', ko: '아, 여기 있다! 필통 안에 있었어.'},
            {s: 'B', en: 'A good detective checks everything first.', ko: '좋은 탐정은 먼저 모든 걸 확인하지.'}
          ]}
        ],
        check: [
          {q: 'What did Ella and Jun find on the floor?', a: 'The flower pot.'},
          {q: 'What did Ella think at first?', a: 'She thought the wind pushed it.'},
          {q: 'Where was A’s eraser?', a: 'In A’s pencil case.'}
        ],
        drill: {frame: ['A: What do you think happened?', 'B: I think ____.'], opts: ['a cat came in', 'the wind blew', 'someone was hungry', 'the dog did it', 'it fell down', 'my brother took it']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '까닭 묻고 답하기',
        key: {q: ['Why do you think so?', 'Why ~?'], a: ['Because ~.', 'Look at ~.', 'There is / are ~.']},
        note: 'Why do you think so?에는 Because + 문장으로 근거를 말한다. 단서를 가리키며 Look at ~.을 써도 좋다.',
        dialogs: [
          { title: 'Dialogue A', setting: '과학실, 수수께끼 상자 활동', lines: [
            {s: 'Ms. Yoon', en: 'Sam, what’s in the box? Guess!', ko: '샘, 상자 안에 뭐가 있을까? 맞혀 봐!'},
            {s: 'Sam', en: 'I think it’s an orange.', ko: '오렌지 같아요.'},
            {s: 'Ms. Yoon', en: '{{Why do you think so}}?', ko: '왜 그렇게 생각하니?'},
            {s: 'Sam', en: '{{Because}} it smells sweet, and it feels round.', ko: '달콤한 냄새가 나고 둥근 느낌이 나서요.'},
            {s: 'Ms. Yoon', en: 'Great thinking! Let’s open it.', ko: '좋은 생각이야! 열어 보자.'}
          ]},
          { title: 'Dialogue B', setting: '방과 후, 운동장', lines: [
            {s: 'A', en: '{{Why}} is Rina’s face red?', ko: '리나 얼굴이 왜 빨개?'},
            {s: 'B', en: '{{Look at}} her shoes. She just ran ten laps.', ko: '신발 좀 봐. 방금 운동장 열 바퀴를 뛰었대.'},
            {s: 'A', en: 'Wow. She looks tired.', ko: '와. 피곤해 보이네.'},
            {s: 'B', en: 'But she looks happy, too!', ko: '그래도 행복해 보여!'}
          ]}
        ],
        check: [
          {q: 'What does Sam guess?', a: 'An orange.'},
          {q: 'Why does Sam think so?', a: 'Because it smells sweet and feels round.'},
          {q: 'Why is Rina’s face red?', a: 'She just ran ten laps.'}
        ],
        drill: {frame: ['A: Why do you think so?', 'B: Because it ____.'], opts: ['smells sweet', 'feels soft', 'sounds loud', 'looks round', 'tastes sour', 'feels cold']}
      }
    ],
    interviewEx: 'Yujin thinks a cat broke the pot because there are tiny footprints.',
    watch: {
      label: 'Let’s Watch', title: 'The Wet Umbrella', setting: '비 오는 날, 교무실 앞. 윤 선생님이 학생 탐정 리나에게 문제를 낸다.',
      lines: [
        {s: 'Ms. Yoon', en: 'Rina, someone left this umbrella. Can you find the owner?', ko: '리나야, 누가 이 우산을 두고 갔구나. 주인을 찾을 수 있겠니?'},
        {s: 'Rina', en: 'Let me see. The umbrella is still wet, so the owner came in just now.', ko: '어디 보자. 우산이 아직 젖어 있으니 주인은 방금 들어왔어요.'},
        {s: 'Ms. Yoon', en: 'Good. What else?', ko: '좋아. 또?'},
        {s: 'Rina', en: 'It’s smaller than a teacher’s umbrella, and it has a soccer ball sticker.', ko: '선생님 우산보다 작고, 축구공 스티커가 붙어 있어요.'},
        {s: 'Ms. Yoon', en: 'So who do you think it is?', ko: '그럼 누구라고 생각하니?'},
        {s: 'Rina', en: 'I think it’s Jun. He loves soccer, and his shoes look wet!', ko: '준인 것 같아요. 축구를 좋아하고 신발이 젖어 보여요!'}
      ],
      check: [
        {q: 'Why does Rina think the owner came in just now?', a: 'Because the umbrella is still wet.'},
        {q: 'What sticker is on the umbrella?', a: 'A soccer ball sticker.'},
        {q: 'Who does Rina think the owner is?', a: 'Jun.'}
      ]
    },
    wrap: {en: 'Look at a picture with your partner. Guess what happened and say why.', ko: '짝과 그림을 보고 무슨 일이 있었는지 추측하고 근거 말하기'}
  },

  grammar: {
    cover: 'look · -er',
    hook: {en: 'The cookie {{smells}} sweet.  /  This footprint is {{smaller than}} that one.', ko: '빈칸에 들어갈 말은 각각 어떤 뜻을 더해 줄까?', answer: 'smells sweet는 ‘달콤한 냄새가 나다’(감각동사 + 형용사), smaller than은 ‘~보다 더 작은’(비교급)', note: 'smell 뒤에 sweetly가 아니라 sweet가 온다는 점에 주목하게 한다.'},
    points: [
      { id: 'g1', name: '감각동사 + 형용사', short: '감각동사', form: 'look / sound / smell / taste / feel + 형용사', meaning: '~하게 보이다 / 들리다 / 냄새가 나다 / 맛이 나다 / 느껴지다',
        notice: [
          {en: 'You {{look tired}}.', ko: '너 피곤해 보여.'},
          {en: 'That {{sounds strange}}.', ko: '그거 이상하게 들려.'},
          {en: 'The soup {{tastes salty}}.', ko: '그 수프는 짠맛이 난다.'}
        ],
        rule: [
          {k: '형태', v: '감각동사 뒤에는 형용사 (부사 ✗)', ex: 'It feels soft. (○) / softly (✗)'},
          {k: '+ like', v: '뒤에 명사가 오면 감각동사 + like + 명사', ex: 'It looks like a cat.'},
          {k: '3인칭 단수', v: 'looks, sounds, smells, tastes, feels', ex: 'She looks happy.'}
        ],
        check: [
          {q: 'This bread smells ____. (good / well)', a: 'good'},
          {q: 'You look ____ today. (happy / happily)', a: 'happy'},
          {q: 'It looks ____ a dog’s footprint. (like)', a: 'like'},
          {q: 'The towel ____ soft. (feel)', a: 'feels'},
          {q: 'That idea sounds ____. (great)', a: 'great'}
        ],
        trap: {bad: 'The cake tastes sweetly.', good: 'The cake tastes sweet.', why: '감각동사 뒤에는 부사가 아니라 형용사를 쓴다.'},
        scramble: [
          {ko: '그 발자국은 진흙투성이로 보인다.', en: 'The footprint looks muddy.'},
          {ko: '그것은 이상하게 들렸다.', en: 'It sounded strange.'},
          {ko: '이 상자는 무겁게 느껴진다.', en: 'This box feels heavy.'}
        ]
      },
      { id: 'g2', name: '비교급', short: '비교급', form: '형용사-er + than / more + 형용사 + than', meaning: '~보다 더 …한',
        notice: [
          {en: 'This footprint is {{smaller than}} that one.', ko: '이 발자국은 저것보다 더 작다.'},
          {en: 'Jun is {{taller than}} Rina.', ko: '준은 리나보다 키가 더 크다.'},
          {en: 'This case is {{more difficult than}} the last one.', ko: '이번 사건은 지난번 것보다 더 어렵다.'}
        ],
        rule: [
          {k: '짧은 말', v: '+ er (big → bigger, easy → easier)', ex: 'A dog is bigger than a cat.'},
          {k: '긴 말', v: 'more + 형용사', ex: 'more careful, more interesting'},
          {k: '불규칙', v: 'good → better, bad → worse, many → more', ex: 'Your idea is better than mine.'}
        ],
        check: [
          {q: 'My bag is ____ than yours. (heavy)', a: 'heavier'},
          {q: 'A detective is ____ careful than a thief. (more)', a: 'more'},
          {q: 'This clue is ____ than that one. (good)', a: 'better'},
          {q: 'The cat’s footprint is ____ than the dog’s. (small)', a: 'smaller'},
          {q: 'Today is hotter ____ yesterday.', a: 'than'}
        ],
        trap: {bad: 'This box is more big than that box.', good: 'This box is bigger than that box.', why: '짧은 형용사는 more를 쓰지 않고 -er을 붙인다.'},
        scramble: [
          {ko: '이 단서는 저것보다 더 중요하다.', en: 'This clue is more important than that one.'},
          {ko: '고양이는 개보다 더 작다.', en: 'The cat is smaller than the dog.'},
          {ko: '그녀는 나보다 더 주의 깊다.', en: 'She is more careful than me.'}
        ]
      }
    ],
    wrap: {en: 'The ______ looks ______. It is ______er than ______.', ko: '감각동사 한 문장, 비교급 한 문장으로 교실 물건 설명하기'},
    wrapEx: 'My pencil case looks old. It is bigger than my friend’s.'
  },

  reading: {
    title: 'The Case of the Missing Cookies', kind: '짧은 추리 이야기', cover: 'Clue', coverKo: '사라진 쿠키', cover2: 'Solved', coverKo2: '단서가 말해 준 것',
    before: [
      {q: 'Look at the title. What is missing?', a: '쿠키'},
      {q: 'What clues can a cookie thief leave?', a: '부스러기, 발자국, 냄새 등'}
    ],
    gloss: {'case': '사건', 'baked': '구웠다', 'plate': '접시', 'empty': '텅 빈', 'magnifying glass': '돋보기', 'suspects': '용의자들', 'sofa': '소파', 'fur': '털', 'chocolate chips': '초콜릿 칩', 'paws': '(동물의) 발', 'whispered': '속삭였다'},
    paras: [
      {who: 'The Case', en: 'On Saturday, Mom baked chocolate chip cookies. She put ten cookies on a plate in the kitchen. An hour later, the plate was empty! “Who ate my cookies?” Mom asked.',
       ko: '토요일에 엄마가 초콜릿 칩 쿠키를 구우셨다. 엄마는 부엌 접시에 쿠키 열 개를 올려 두셨다. 한 시간 뒤, 접시는 텅 비어 있었다! “누가 내 쿠키를 먹었니?” 엄마가 물으셨다.',
       check: {q: 'How many cookies were on the plate?', a: 'Ten cookies.'}, think: '여러분이 탐정이라면 가장 먼저 무엇을 할까?'},
      {who: 'The Detective', en: 'I am Lucy, the family detective. I took out my magnifying glass. “Let’s find out the truth,” I said. There were three suspects: my little brother Ted, my big sister Amy, and our dog Max.',
       ko: '나는 우리 가족 탐정 루시다. 나는 돋보기를 꺼냈다. “진실을 알아내 보자.” 내가 말했다. 용의자는 셋이었다. 남동생 테드, 언니 에이미, 그리고 우리 개 맥스.',
       check: {q: 'Who are the three suspects?', a: 'Ted, Amy, and Max.'}, think: '용의자 중 누가 가장 의심스러운가요? 왜요?'},
      {who: 'Clue 1', en: 'First, I looked at the floor. There were cookie crumbs from the kitchen to the living room. The crumbs looked fresh. The thief went to the living room!',
       ko: '먼저 나는 바닥을 살폈다. 부엌에서 거실까지 쿠키 부스러기가 있었다. 부스러기는 막 떨어진 것 같았다. 도둑은 거실로 간 것이다!',
       check: {q: 'Where did the crumbs go?', a: 'From the kitchen to the living room.'}, think: '부스러기는 무엇을 알려 줄까?'},
      {who: 'Clue 2', en: 'In the living room, Ted was watching TV. His hands looked clean, and he sounded calm. “I didn’t eat them,” he said. Amy was reading a book. She said, “I don’t like chocolate.”',
       ko: '거실에서 테드는 TV를 보고 있었다. 손은 깨끗해 보였고 목소리도 차분했다. “난 안 먹었어.” 테드가 말했다. 에이미는 책을 읽고 있었다. 에이미는 “난 초콜릿 안 좋아해.”라고 말했다.',
       check: {q: 'Why doesn’t Amy eat the cookies?', a: 'She doesn’t like chocolate.'}, think: '테드와 에이미의 말은 믿을 만할까?'},
      {who: 'Clue 3', en: 'Then I looked behind the sofa. I found something: a piece of cookie with dog fur on it! I also saw tiny brown paw prints. They were smaller than my hand.',
       ko: '그때 나는 소파 뒤를 살펴보았다. 무언가를 찾았다. 개털이 묻은 쿠키 조각이었다! 아주 작은 갈색 발자국도 보였다. 내 손보다 더 작았다.',
       check: {q: 'What did Lucy find behind the sofa?', a: 'A piece of cookie with dog fur on it (and tiny paw prints).'}, think: '이제 범인을 알 것 같나요?'},
      {who: 'Solved', en: 'I walked to Max’s bed. Max looked guilty, and his mouth smelled like chocolate. “Case solved!” I said. But wait, chocolate is bad for dogs. We took Max to the vet, and he was okay.',
       ko: '나는 맥스의 잠자리로 걸어갔다. 맥스는 죄지은 표정이었고 입에서 초콜릿 냄새가 났다. “사건 해결!” 내가 말했다. 그런데 잠깐, 초콜릿은 개에게 해롭다. 우리는 맥스를 동물 병원에 데려갔고, 맥스는 괜찮았다.',
       check: {q: 'Why did they take Max to the vet?', a: 'Because chocolate is bad for dogs.'}, think: '루시가 사건을 푼 방법을 순서대로 말해 보자.'},
      {who: 'Lucy’s Tip', en: 'A good detective doesn’t guess. A good detective looks, listens, and smells carefully. Small clues tell big stories. Pay attention to them!',
       ko: '좋은 탐정은 그냥 찍지 않는다. 좋은 탐정은 주의 깊게 보고, 듣고, 냄새를 맡는다. 작은 단서가 큰 이야기를 들려준다. 단서에 주의를 기울이자!',
       check: {q: 'What does a good detective do?', a: 'Looks, listens, and smells carefully.'}, think: '생활 속에서 ‘탐정처럼 생각’할 때는 언제일까?'}
    ],
    split: 3,
    next: '부스러기를 따라간 루시는\n무엇을 찾았을까?',
    recap: {q: '사건과 첫 단서는?', items: [{k: 'CASE', v: 'ten cookies were missing'}, {k: 'SUSPECTS', v: 'Ted, Amy, and Max'}, {k: 'CLUE 1', v: 'fresh crumbs to the living room'}]},
    tf: [
      {p: 0, s: 'Mom baked chocolate chip cookies.', a: true},
      {p: 1, s: 'Lucy’s big sister is the detective.', a: false, why: '루시가 가족 탐정이다.'},
      {p: 2, s: 'The crumbs went to the bedroom.', a: false, why: '거실로 이어졌다.'},
      {p: 3, s: 'Amy doesn’t like chocolate.', a: true},
      {p: 4, s: 'The paw prints were bigger than Lucy’s hand.', a: false, why: '손보다 더 작았다.'},
      {p: 5, s: 'Max’s mouth smelled like chocolate.', a: true}
    ],
    key: [
      {en: 'The crumbs {{looked fresh}}.', note: 'look + 형용사', g: 'g1'},
      {en: 'His hands {{looked clean}}, and he {{sounded calm}}.', note: 'look / sound + 형용사', g: 'g1'},
      {en: 'They were {{smaller than}} my hand.', note: '비교급 + than', g: 'g2'},
      {en: 'Max {{looked guilty}}.', note: 'look + 형용사 (죄지은 듯한)', g: 'g1'},
      {en: 'His mouth {{smelled like}} chocolate.', note: '감각동사 + like + 명사', g: 'g1'},
      {en: 'A good detective {{looks, listens, and smells}} carefully.', note: '감각과 관련된 동사 세 개', g: ''}
    ],
    summary: {text: 'Ten cookies were {{missing}}. Lucy, the family {{detective}}, followed the {{crumbs}} to the living room. Ted and Amy didn’t eat them. Behind the sofa, she found dog {{fur}} and paw prints {{smaller}} than her hand. Max’s mouth {{smelled}} like chocolate.'},
    order: ['The cookies were missing.', 'Lucy found crumbs on the floor.', 'She talked to Ted and Amy.', 'She found dog fur behind the sofa.'],
    chart: {title: 'THE SUSPECTS', ko: '용의자 정리하기', cols: ['Clue', 'Thief?'], note: '각 용의자의 단서를 감각동사 문장으로 말하게 한 뒤 결론을 내린다.', rows: [
      {name: 'Ted', cells: ['hands looked clean', 'No']},
      {name: 'Amy', cells: ['doesn’t like chocolate', 'No']},
      {name: 'Max', cells: ['fur, paw prints, smelled like chocolate', 'Yes!']}
    ]},
    wrap: {en: 'A mystery: ______ is missing. Clue 1: It looks ______. Clue 2: It is ______er than ______. Who did it?', ko: '관통 질문으로 돌아가기: 짝이 풀 수 있는 나만의 짧은 추리 문제 쓰기'}
  },

  quiz: [
    ['“단서”를 뜻하는 낱말은?', ['clue', 'thief', 'truth', 'crumb'], 0, 'clue: 단서'],
    ['“tiny”의 반대말은?', ['muddy', 'huge', 'missing', 'careful'], 1, 'tiny ↔ huge'],
    ['“Let’s find ___ the truth.” (알아내다)', ['in', 'up', 'out', 'for'], 2, 'find out: 알아내다'],
    ['“Pay attention ___ small things.”', ['at', 'in', 'for', 'to'], 3, 'pay attention to'],
    ['추측을 나타내는 표현은?', ['Good job!', 'Thank you.', 'Maybe it’s a cat.', 'Let’s go to the park.'], 2, 'Maybe ~ / I think ~'],
    ['“Why do you think so?”에 알맞은 대답은?', ['Yes, I do.', 'It’s a good idea.', 'Because it smells sweet.', 'I don’t know who you are.'], 2, 'Because + 근거'],
    ['Let’s Watch에서 리나가 우산 주인으로 추측한 사람은?', ['Jun', 'Sam', 'Ella', 'Ms. Yoon'], 0, 'I think it’s Jun.'],
    ['빈칸에 알맞은 것은? “This bread smells ___.”', ['well', 'good', 'goodly', 'to good'], 1, '감각동사 + 형용사'],
    ['빈칸에 알맞은 것은? “It looks ___ a cat.”', ['as', 'to', 'for', 'like'], 3, '감각동사 + like + 명사'],
    ['빈칸에 알맞은 것은? “My bag is ___ than yours.”', ['heavy', 'heavier', 'heavyer', 'more heavy'], 1, 'heavy → heavier'],
    ['어법상 틀린 문장은?', ['You look tired.', 'It feels soft.', 'Your idea is better.', 'The box is more big.'], 3, 'more big → bigger'],
    ['쿠키 부스러기가 이어진 곳은?', ['거실', '침실', '현관', '마당'], 0, 'from the kitchen to the living room'],
    ['에이미가 범인이 아닌 까닭은?', ['책을 읽고 있어서', 'TV를 보고 있어서', '초콜릿을 안 좋아해서', '손이 아주 깨끗해 보여서'], 2, 'I don’t like chocolate.'],
    ['쿠키를 먹은 범인은?', ['엄마', '테드', '에이미', '맥스'], 3, '개 맥스'],
    ['루시가 말하는 좋은 탐정의 태도는?', ['빨리 추측한다', '주의 깊게 관찰한다', '용의자를 많이 찾는다', '돋보기를 꼭 쓴다'], 1, 'looks, listens, and smells carefully']
  ]
};
