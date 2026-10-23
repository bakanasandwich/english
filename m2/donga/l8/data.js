/* 중2 영어(동아·윤정미) Lesson 8 · Time Travel
   교과서 대조(2026-10): 언어 형식(현재완료 · want + 목적어 + to부정사), 읽기 주제(A Butterfly That Changed the Future — 시간 여행 이야기)를 교과서와 맞췄다.
   교과서 8과는 의사소통 기능 없이 읽기 중심으로 구성된 단원이라, 2차시 대화문은 단원 주제에 맞춘 보충 활동이다.
   대화문·읽기 글은 저작권 때문에 교과서 원문을 싣지 않고, 같은 주제·같은 언어 형식으로 새로 쓴 글이다. */
window.LESSON = {
  book: 'm2-donga', no: 8,
  title: 'Time Travel', ko: '시간 여행',
  bigQ: {en: 'If you could travel in time, what would you want to see?', ko: '시간 여행을 할 수 있다면 무엇을 보고 싶나요?'},
  align: {
    tb: {reading: 'A Butterfly That Changed the Future', funcs: ['(읽기 중심 단원 — 의사소통 기능 없음)'], forms: ['현재완료 (I’ve never seen such a huge thing.)', 'want + 목적어 + to부정사 (I don’t want you to do anything foolish.)'],
      note: '교과서 읽기는 과거로 시간 여행을 떠난 사람이 나비 한 마리를 밟아 미래가 바뀌는 단편 이야기. 여기 본문은 다락방의 카메라로 1970년에 간 소녀가 어린 할머니를 만나는 이야기로, 같은 주제·같은 언어 형식으로 새로 쓴 글이다.'},
    std: {vocab: ['9영01-01', '9영02-01'], talk: ['9영01-02', '9영02-04'], grammar: ['9영02-04'], read1: ['9영01-04', '9영01-05'], read2: ['9영01-07', '9영02-07']},
    forms: ['Perfectives', 'To-Infinitive']
  },
  goals: {
    vocab: ['시간·과거와 관련된 낱말 20개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 옛날과 지금을 한 문장으로 비교할 수 있다.'],
    talk: ['경험을 묻고 답할 수 있다.', '기대하는 일을 표현할 수 있다.'],
    grammar: ['현재완료(경험·계속·완료)로 과거와 지금을 이어 말할 수 있다.', 'want / ask / tell + 목적어 + to부정사로 남에게 바라는 일을 말할 수 있다.'],
    read1: ['이야기의 배경과 사건을 파악하고, 민서가 과거로 간 과정을 이해할 수 있다.'],
    read2: ['1970년과 지금을 비교하고 이야기의 결말을 이해하며, 가고 싶은 시대를 영어로 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'What is the oldest thing in your house?', ko: '여러분 집에서 가장 오래된 물건은 무엇인가요?', note: '할머니의 재봉틀, 오래된 사진, 카세트테이프 등. “그 물건이 말을 한다면 어떤 이야기를 할까?”로 이야기 단원을 연다.'},
    words: [
      {w: 'past', pos: 'n.', ko: '과거', ic: '⏪', audio: 'assets/audio/past.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Let’s learn about the past.', exKo: '과거에 대해 배워 보자.'},
      {w: 'future', pos: 'n.', ko: '미래', ic: '⏩', audio: 'assets/audio/future.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Nobody knows the future.', exKo: '아무도 미래를 모른다.'},
      {w: 'century', pos: 'n.', ko: '세기, 100년', ic: '💯', audio: 'assets/audio/century.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'This house is almost a century old.', exKo: '이 집은 거의 100년이 되었다.'},
      {w: 'ancient', pos: 'adj.', ko: '고대의, 아주 오래된', ic: '🏺', audio: 'assets/audio/ancient.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'We saw ancient pots in the museum.', exKo: '우리는 박물관에서 고대 항아리를 보았다.'},
      {w: 'machine', pos: 'n.', ko: '기계', ic: '⚙️', audio: 'assets/audio/machine.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'A time machine is just a dream.', exKo: '타임머신은 그저 꿈일 뿐이다.'},
      {w: 'attic', pos: 'n.', ko: '다락방', ic: '🏚️', ex: 'We found old boxes in the attic.', exKo: '우리는 다락방에서 오래된 상자들을 찾았다.'},
      {w: 'strange', pos: 'adj.', ko: '이상한', ic: '🌀', audio: 'assets/audio/strange.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'I heard something strange.', exKo: '나는 이상한 무언가를 들었다.'},
      {w: 'flash', pos: 'n.', ko: '번쩍임, 섬광', ic: '📸', audio: 'assets/audio/flash.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'There was a bright flash.', exKo: '밝은 섬광이 일었다.'},
      {w: 'disappear', pos: 'v.', ko: '사라지다', ic: '💨', audio: 'assets/audio/disappear.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The light disappeared.', exKo: '빛이 사라졌다.'},
      {w: 'calendar', pos: 'n.', ko: '달력', ic: '📆', ex: 'The calendar said 1970.', exKo: '달력에는 1970년이라고 쓰여 있었다.'},
      {w: 'memory', pos: 'n.', ko: '기억, 추억', ic: '💭', audio: 'assets/audio/memory.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'It is my best memory.', exKo: '그것은 내 최고의 추억이다.'},
      {w: 'photo', pos: 'n.', ko: '사진', ic: '🖼️', audio: 'assets/audio/photo.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Grandma kept the photo for years.', exKo: '할머니는 그 사진을 수년간 간직하셨다.'},
      {w: 'wonder', pos: 'v.', ko: '궁금해하다', ic: '🤔', audio: 'assets/audio/wonder.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'I wonder who she is.', exKo: '나는 그녀가 누구인지 궁금하다.'},
      {w: 'exactly', pos: 'adv.', ko: '정확히, 꼭', ic: '🎯', audio: 'assets/audio/exactly.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'She looked exactly like me.', exKo: '그녀는 나와 꼭 닮아 보였다.'},
      {w: 'history', pos: 'n.', ko: '역사', ic: '📜', audio: 'assets/audio/history.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'History is full of stories.', exKo: '역사는 이야기로 가득하다.'},
      {w: 'invent', pos: 'v.', ko: '발명하다', ic: '💡', ex: 'Smartphones weren’t invented then.', exKo: '그때는 스마트폰이 발명되지 않았다.'},
      {w: 'secret', pos: 'n.', ko: '비밀', ic: '🤫', audio: 'assets/audio/secret.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'It is our little secret.', exKo: '그건 우리의 작은 비밀이다.'},
      {w: 'mysterious', pos: 'adj.', ko: '신비한, 이상한', ic: '🔮', audio: 'assets/audio/mysterious.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'She found a mysterious camera.', exKo: '그녀는 신비한 카메라를 찾았다.'},
      {w: 'return', pos: 'v.', ko: '돌아오다', ic: '↩️', audio: 'assets/audio/return.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'He returned home before sunset.', exKo: '그는 해 지기 전에 집에 돌아왔다.'},
      {w: 'experience', pos: 'n./v.', ko: '경험; 경험하다', ic: '🧭', audio: 'assets/audio/experience.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'It was an amazing experience.', exKo: '그것은 놀라운 경험이었다.'}
    ],
    phrases: [
      {w: 'travel back in time', ko: '과거로 시간 여행을 하다', ex: 'I want to travel back in time.', exKo: '나는 과거로 시간 여행을 하고 싶다.'},
      {w: 'look like', ko: '~처럼 보이다, 닮다', ex: 'You look like your grandma.', exKo: '너는 할머니를 닮았다.'},
      {w: 'for a long time', ko: '오랫동안', ex: 'She has lived here for a long time.', exKo: '그녀는 오랫동안 여기서 살았다.'},
      {w: 'can’t wait to', ko: '빨리 ~하고 싶다', ex: 'I can’t wait to see the museum.', exKo: '빨리 박물관을 보고 싶다.'},
      {w: 'at that moment', ko: '그 순간', ex: 'At that moment, the light disappeared.', exKo: '그 순간 빛이 사라졌다.'},
      {w: 'once upon a time', ko: '옛날 옛적에', ex: 'Once upon a time, there was a girl.', exKo: '옛날 옛적에 한 소녀가 있었다.'}
    ],
    pairs: [
      {a: 'past', b: 'future', rel: '반대말'},
      {a: 'appear', b: 'disappear', rel: '반대말'},
      {a: 'ancient', b: 'modern', rel: '반대말'},
      {a: 'mystery', b: 'mysterious', rel: '명사 / 형용사'}
    ],
    wrap: {en: 'If I travel back in time, I want to see ______ in the past.', ko: '오늘 배운 낱말을 넣어 가 보고 싶은 과거 쓰기'}
  },

  talk: {
    hook: {en: 'Have you ever seen a movie about time travel?', ko: '시간 여행 영화를 본 적이 있나요?', note: '본 영화 제목과 줄거리를 짧게 나눈다. 질문 자체가 Have you ever ~? 이므로 Listen & Talk 1로 바로 이어진다.'},
    speakers: {Seoyeon: {voice: 0, pitch: 1.1}, Andy: {voice: 1, pitch: .95}, Kate: {voice: 0, pitch: 1.15}, Hojun: {voice: 1, pitch: .9}, 'Mr. Choi': {voice: 2, pitch: .9}, Bora: {voice: 0, pitch: 1.05}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '경험 묻고 답하기',
        key: {q: ['Have you ever + 과거분사 ~?', 'Have you been to ~?'], a: ['Yes, I have. / I’ve ~ before.', 'No, I haven’t.', 'No, I’ve never ~.']},
        note: 'Have you ever + 과거분사? 에는 Yes, I have. / No, I haven’t. 로 짧게 답한 뒤 경험을 덧붙인다. 3차시 현재완료와 바로 이어진다.',
        dialogs: [
          { title: 'Dialogue A', setting: '쉬는 시간, 역사 교과서를 펴 놓고', lines: [
            {s: 'Andy', en: 'Seoyeon, {{have you ever been to}} Gyeongju?', ko: '서연아, 경주에 가 본 적 있어?'},
            {s: 'Seoyeon', en: '{{Yes, I have}}. I went there last spring.', ko: '응, 가 봤어. 지난봄에 갔어.'},
            {s: 'Andy', en: 'What did you see?', ko: '뭘 봤어?'},
            {s: 'Seoyeon', en: 'I saw Cheomseongdae. It’s an ancient tower for watching the stars.', ko: '첨성대를 봤어. 별을 관측하던 아주 오래된 탑이야.'},
            {s: 'Andy', en: 'Cool. {{I’ve never}} seen it.', ko: '멋지다. 난 한 번도 못 봤어.'},
            {s: 'Seoyeon', en: 'It’s like traveling back in time. You should go!', ko: '시간 여행을 하는 것 같아. 꼭 가 봐!'}
          ]},
          { title: 'Dialogue B', setting: '방과 후, 영화관 앞', lines: [
            {s: 'A', en: '{{Have you ever}} watched a black-and-white movie?', ko: '흑백 영화 본 적 있어?'},
            {s: 'B', en: '{{No, I haven’t}}. Is it interesting?', ko: '아니, 없어. 재미있어?'},
            {s: 'A', en: 'Yes. It feels like something special from the past.', ko: '응. 과거에서 온 특별한 무언가 같은 느낌이야.'},
            {s: 'B', en: 'Then let’s watch one together.', ko: '그럼 같이 한 편 보자.'}
          ]}
        ],
        check: [
          {q: 'When did Seoyeon go to Gyeongju?', a: 'Last spring.'},
          {q: 'What is Cheomseongdae?', a: 'An ancient tower for watching the stars.'},
          {q: 'Has B watched a black-and-white movie?', a: 'No, B hasn’t.'}
        ],
        drill: {frame: ['A: Have you ever ____?', 'B: Yes, I have. / No, I haven’t.'], opts: ['been to Jeju', 'seen a ghost', 'ridden a horse', 'eaten bibimbap', 'climbed a mountain', 'met a famous person']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '기대 표현하기',
        key: {q: ['Are you excited about ~?', 'What are you looking forward to?'], a: ['I can’t wait to ~.', 'I’m looking forward to -ing / 명사.', 'I’m so excited about ~.']},
        note: 'can’t wait to + 동사원형, look forward to + -ing/명사. to의 쓰임이 서로 다르다는 점을 짚어 준다.',
        dialogs: [
          { title: 'Dialogue A', setting: '현장 체험학습 전날, 교실', lines: [
            {s: 'Kate', en: 'Hojun, {{are you excited about}} the field trip tomorrow?', ko: '호준아, 내일 현장 체험학습 기대돼?'},
            {s: 'Hojun', en: 'Yes! {{I can’t wait to}} see the history museum.', ko: '응! 역사 박물관 빨리 보고 싶어.'},
            {s: 'Kate', en: 'Me too. I heard there’s a VR room.', ko: '나도. VR 방이 있다고 들었어.'},
            {s: 'Hojun', en: 'Really? We can see the past in 3D!', ko: '정말? 과거를 3D로 볼 수 있겠다!'},
            {s: 'Kate', en: '{{I’m looking forward to}} walking in an old palace.', ko: '옛 궁궐을 걸어 보는 게 기대돼.'},
            {s: 'Hojun', en: 'It will be like time travel.', ko: '시간 여행 같겠다.'}
          ]},
          { title: 'Dialogue B', setting: '겨울 방학 전, 복도', lines: [
            {s: 'A', en: '{{What are you looking forward to}} this winter?', ko: '이번 겨울에 뭐가 기대돼?'},
            {s: 'B', en: '{{I’m so excited about}} my trip to Rome.', ko: '로마 여행이 정말 기대돼.'},
            {s: 'A', en: 'Wow, you can see ancient buildings there.', ko: '와, 거기서 고대 건물들을 볼 수 있겠다.'},
            {s: 'B', en: 'Yes. I can’t wait to visit the Colosseum.', ko: '응. 콜로세움에 빨리 가 보고 싶어.'}
          ]}
        ],
        check: [
          {q: 'What can’t Hojun wait to see?', a: 'The history museum.'},
          {q: 'What is Kate looking forward to?', a: 'Walking in an old palace.'},
          {q: 'Where is B going this winter?', a: 'To Rome.'}
        ],
        drill: {frame: ['A: What are you looking forward to?', 'B: I can’t wait to ____.'], opts: ['see my friends', 'go on vacation', 'visit the museum', 'eat Grandma’s food', 'watch the new movie', 'graduate']}
      }
    ],
    interviewEx: 'Jiwon has been to Gyeongju. She can’t wait to visit Rome someday.',
    watch: {
      label: 'Let’s Watch', title: 'The Time Capsule', setting: '졸업을 앞둔 날, 학교 운동장. 최 선생님과 보라가 10년 전 묻은 타임캡슐을 꺼낸다.',
      lines: [
        {s: 'Mr. Choi', en: 'Bora, this time capsule has been under the ground for ten years.', ko: '보라야, 이 타임캡슐은 10년 동안 땅속에 있었단다.'},
        {s: 'Bora', en: 'Wow! Have you ever opened one before?', ko: '와! 선생님은 전에 열어 보신 적 있어요?'},
        {s: 'Mr. Choi', en: 'No, I haven’t. This is my first time.', ko: '아니, 없어. 이번이 처음이야.'},
        {s: 'Bora', en: 'I can’t wait to see what’s inside. Maybe something old and funny!', ko: '안에 뭐가 있는지 빨리 보고 싶어요. 오래되고 재미있는 무언가일지도요!'},
        {s: 'Mr. Choi', en: 'Look. Here’s a letter from a student. “Hello, future me!”', ko: '보렴. 학생이 쓴 편지가 있구나. “안녕, 미래의 나!”'},
        {s: 'Bora', en: 'That’s amazing. Let’s make a new one for students in the future.', ko: '정말 신기해요. 미래의 학생들을 위해 새로 하나 만들어요.'}
      ],
      check: [
        {q: 'How long has the capsule been under the ground?', a: 'For ten years.'},
        {q: 'Has Mr. Choi opened a time capsule before?', a: 'No, he hasn’t.'},
        {q: 'What is inside the capsule?', a: 'A letter from a student (“Hello, future me!”).'}
      ]
    },
    wrap: {en: 'Ask your partner about an experience, and tell them what you are looking forward to.', ko: '경험 하나를 묻고 답한 뒤, 기대하는 일 하나를 말하기'}
  },

  grammar: {
    cover: 'have + p.p.',
    hook: {en: 'Grandma {{has lived}} here for 50 years.  /  “I {{want you to}} come back someday.”', ko: '두 문장에서 색칠될 부분은 각각 어떤 뜻을 더해 줄까?', answer: 'has lived → 과거부터 지금까지 계속 살아왔다(현재완료) / want you to come → 네가 오기를 원한다(오는 사람은 you)', note: '교과서 언어 형식(I’ve never seen such a huge thing. / I don’t want you to do anything foolish.)과 같은 짜임이다.'},
    points: [
      { id: 'g1', name: '현재완료', short: '현재완료', form: 'have / has + 과거분사', meaning: '(지금까지) ~해 왔다 / ~한 적 있다 / ~했다',
        notice: [
          {en: 'I {{have been}} to Gyeongju twice.', ko: '나는 경주에 두 번 가 본 적이 있다. (경험)'},
          {en: 'She {{has lived}} in this house for 50 years.', ko: '그녀는 50년 동안 이 집에 살아 왔다. (계속)'},
          {en: 'I {{have just finished}} my homework.', ko: '나는 막 숙제를 끝냈다. (완료)'}
        ],
        rule: [
          {k: '경험', v: 'ever · never · before · once/twice와 함께', ex: 'Have you ever seen a ghost?'},
          {k: '계속', v: 'for + 기간 / since + 시작 시점', ex: 'I have known her since 2020.'},
          {k: '주의', v: 'yesterday, last year, ago 같은 과거 시점과는 쓰지 않는다', ex: 'I saw it yesterday. (○) / have seen it yesterday (✗)'}
        ],
        compare: {
          title: '과거시제일까, 현재완료일까?', note: '과거시제는 과거의 한 시점에서 끝난 일, 현재완료는 지금과 이어진 일. last year·ago가 보이면 과거시제.',
          head: ['과거시제 (그때 끝난 일)', '현재완료 (지금까지 이어진 일)', '함께 쓰는 말'],
          cols: [['I lived in Busan in 2020.', 'I lost my key yesterday.', 'She went to Rome last year.'], ['I have lived in Seoul since 2021.', 'I have lost my key. (지금도 없음)', 'She has been to Rome twice.'], ['for · since', 'already · just · yet', 'ever · never · before']]
        },
        check: [
          {q: 'I have ____ this movie before. (see)', a: 'seen'},
          {q: 'She ____ lived here since 2010. (have)', a: 'has'},
          {q: 'We have known each other ____ five years. (for / since)', a: 'for'},
          {q: 'Have you ever ____ to Japan? (be)', a: 'been'},
          {q: 'I ____ my phone last night. (lose)', a: 'lost'}
        ],
        trap: {bad: 'I have visited the museum last week.', good: 'I visited the museum last week.', why: 'last week처럼 끝난 과거 시점이 있으면 현재완료를 쓰지 않는다.'},
        scramble: [
          {ko: '나는 타임머신을 본 적이 없다.', en: 'I have never seen a time machine.'},
          {ko: '할머니는 이 사진을 오랫동안 간직해 오셨다.', en: 'Grandma has kept this photo for a long time.'},
          {ko: '너는 고대 도시에 가 본 적이 있니?', en: 'Have you ever been to an ancient city?'}
        ]
      },
      { id: 'g2', name: 'want + 목적어 + to부정사', short: 'want A to ~', form: 'want / ask / tell + 목적어 + to + 동사원형', meaning: '(목적어)가 ~하기를 원하다 / ~하라고 부탁하다·말하다',
        notice: [
          {en: 'I {{want you to come}} back someday.', ko: '나는 네가 언젠가 다시 오기를 원해.'},
          {en: 'Grandma {{wants Minseo to keep}} the photo.', ko: '할머니는 민서가 그 사진을 간직하기를 원하신다.'},
          {en: 'The note {{told her not to press}} the button twice.', ko: '쪽지는 그녀에게 단추를 두 번 누르지 말라고 했다.'}
        ],
        rule: [
          {k: '행동하는 사람', v: '목적어가 to부정사의 행동을 한다 (I want you to come → 오는 사람은 you)', ex: 'Mom wants me to clean my room.'},
          {k: '같은 짜임', v: 'ask(부탁하다), tell(말하다), expect(기대하다), allow(허락하다)', ex: 'She asked me to help her.'},
          {k: '부정', v: 'to 앞에 not: 동사 + 목적어 + not to ~', ex: 'I don’t want you to do anything foolish.'}
        ],
        compare: {
          title: 'want to vs want + 목적어 + to', note: '행동할 사람이 나인지 다른 사람인지에 따라 목적어를 넣는다.',
          head: ['want to ~ (내가)', 'want + 목적어 + to ~ (남이)'],
          cols: [['I want to visit 1970.', 'I want to see Grandma.'], ['I want you to visit 1970.', 'I want Grandma to see this.']]
        },
        check: [
          {q: 'I want ____ to come back. (너가)', a: 'you'},
          {q: 'Grandma wants Minseo ____ the photo. (keep)', a: 'to keep'},
          {q: 'The note told her ____ press the button twice. (부정)', a: 'not to'},
          {q: 'She asked me ____ her cat. (find)', a: 'to find'},
          {q: 'Mom told us ____ home before dinner. (come)', a: 'to come'}
        ],
        trap: {bad: 'I want that you come back.', good: 'I want you to come back.', why: 'want는 that절이 아니라 목적어 + to부정사를 쓴다.'},
        scramble: [
          {ko: '나는 네가 언젠가 다시 오기를 원한다.', en: 'I want you to come back someday.'},
          {ko: '할머니는 민서에게 사진을 간직하라고 하셨다.', en: 'Grandma told Minseo to keep the photo.'},
          {ko: '나는 네가 어리석은 일을 하지 않기를 바란다.', en: 'I don’t want you to do anything foolish.'}
        ]
      }
    ],
    wrap: {en: 'I have never ______. I want my friend to ______.', ko: '현재완료 한 문장, want + 목적어 + to부정사 한 문장으로 시간 여행 상상 쓰기'},
    wrapEx: 'I have never seen a dinosaur. I want my friend to travel back in time with me.'
  },

  reading: {
    title: 'The Camera in the Attic', kind: '단편 이야기 (판타지)', cover: '1970', coverKo: '다락방의 카메라', cover2: 'Memory', coverKo2: '50년 동안 간직한 사진',
    before: [
      {q: 'Look at the title. What might happen with the camera?', a: '자유롭게 예측 (시간 여행, 비밀 등)'},
      {q: 'If you went back 50 years, what would be different?', a: '스마트폰이 없다, 흑백 TV 등'}
    ],
    gloss: {
      countryside: '시골', 'dusty': '먼지투성이의', 'press': '누르다', 'twice': '두 번', 'black-and-white': '흑백의',
      'dirt road': '흙길', 'name tag': '이름표', gonggi: '공기놀이', 'sweet potato': '고구마', 'giggled': '킥킥 웃었다', 'wink': '윙크하다'
    },
    paras: [
      {who: 'Part 1', en: 'Minseo has always loved old things. Last summer, she visited her grandma’s house in the countryside. Grandma has lived there for more than fifty years, and the house is full of stories.',
       ko: '민서는 언제나 오래된 물건을 좋아했다. 지난여름, 민서는 시골에 있는 할머니 댁을 찾아갔다. 할머니는 그곳에서 50년 넘게 사셨고, 집은 이야기로 가득하다.',
       check: {q: 'How long has Grandma lived in the house?', a: 'For more than fifty years.'}, think: '여러분 집에서 가장 이야기가 많은 물건은?',
       bg: {src: 'm2/donga/l8/img/r-p0.jpg', credit: 'GOC53 · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/30659367@N00/3187771189', about: '시골의 오래된 집'}},
      {who: 'Part 1', en: 'One rainy afternoon, Minseo climbed up to the dusty attic. In an old box, she found something strange: a camera with a small note. It said, “Never press the button twice.” She smiled and pressed it twice.',
       ko: '비 오는 어느 오후, 민서는 먼지투성이 다락방에 올라갔다. 오래된 상자 안에서 이상한 것을 발견했다. 작은 쪽지가 붙은 카메라였다. 쪽지에는 “절대 단추를 두 번 누르지 마시오.”라고 쓰여 있었다. 민서는 씩 웃으며 두 번 눌렀다.',
       check: {q: 'What did the note say?', a: '“Never press the button twice.”'}, think: '여러분이라면 단추를 눌렀을까?'},
      {who: 'Part 1', en: 'There was a bright flash. When Minseo opened her eyes, everything looked different. The road was a dirt road, and a black-and-white TV was playing in a small shop. A calendar on the wall said 1970.',
       ko: '밝은 섬광이 번쩍였다. 민서가 눈을 떴을 때 모든 것이 달라 보였다. 길은 흙길이었고, 작은 가게에서는 흑백 TV가 나오고 있었다. 벽에 걸린 달력에는 1970년이라고 쓰여 있었다.',
       check: {q: 'What year did the calendar say?', a: '1970.'}, think: '1970년에 도착했다는 단서 세 가지는?',
       bg: {src: 'm2/donga/l8/img/r-p2.jpg', credit: 'dave.see · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/9639178@N08/12924564704', about: '오래된 필름 카메라'}},
      {who: 'Part 2', en: 'A girl about Minseo’s age ran up to her. “Have you seen my cat?” she asked. Minseo looked at the girl’s name tag and almost screamed. It said “Lee Young-ja.” That was Grandma’s name!',
       ko: '민서 또래의 한 소녀가 민서에게 달려왔다. “우리 고양이 봤니?” 소녀가 물었다. 민서는 소녀의 이름표를 보고 하마터면 소리를 지를 뻔했다. 이름표에는 ‘이영자’라고 쓰여 있었다. 그건 할머니의 이름이었다!',
       check: {q: 'Whose name was on the girl’s name tag?', a: 'Grandma’s name (Lee Young-ja).'}, think: '어린 할머니를 만난다면 무엇을 묻고 싶나요?'},
      {who: 'Part 2', en: 'The two girls found the cat together and spent the whole day playing. They played gonggi, shared a sweet potato, and talked about their dreams. Young-ja said, “I’ve never met anyone like you. You’re from somewhere special, aren’t you? I want you to come back someday.”',
       ko: '두 소녀는 함께 고양이를 찾고 하루 종일 놀았다. 공기놀이를 하고, 고구마를 나눠 먹고, 꿈에 대해 이야기했다. 영자가 말했다. “너 같은 애는 처음 만나 봐. 너 특별한 곳에서 왔지, 그렇지? 언젠가 꼭 다시 와 줬으면 좋겠어.”',
       check: {q: 'What did the girls do together?', a: 'They played gonggi, shared a sweet potato, and talked about their dreams.'}, think: '1970년 아이들의 놀이와 지금의 놀이를 비교하면?',
       bg: {src: 'm2/donga/l8/img/r-p4.jpg', credit: 'hoyasmeg · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/62126383@N00/371341012', about: '함께 노는 아이들'}},
      {who: 'Part 3', en: 'Before sunset, Minseo took a photo of the two of them. Then she pressed the button once. Flash! She was back in the attic, and she heard Grandma calling her for dinner.',
       ko: '해가 지기 전, 민서는 둘의 사진을 찍었다. 그리고 단추를 한 번 눌렀다. 번쩍! 민서는 다락방으로 돌아와 있었고, 할머니가 저녁 먹으라고 부르는 소리가 들렸다.',
       check: {q: 'How did Minseo return?', a: 'She pressed the button once.'}, think: '돌아온 민서의 기분은 어땠을까?',
       bg: {src: 'm2/donga/l8/img/r-p5.jpg', credit: 'simpleinsomnia · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/95329455@N02/17421842695', about: '빛바랜 옛 가족사진'}},
      {who: 'Part 3', en: 'After dinner, Grandma showed her an old photo. Two girls were smiling, and one of them looked exactly like Minseo. “I have kept this photo for fifty years,” Grandma said. “I’ve always wondered who my friend was. Now I want you to keep it.” Minseo just smiled. Some secrets are better kept.',
       ko: '저녁을 먹고 나서 할머니가 오래된 사진 한 장을 보여 주셨다. 두 소녀가 웃고 있었고, 그중 한 명은 민서와 꼭 닮아 있었다. “이 사진을 50년 동안 간직해 왔단다.” 할머니가 말씀하셨다. “그 친구가 누구였는지 늘 궁금했어. 이제 이 사진은 네가 간직했으면 좋겠구나.” 민서는 그저 미소 지었다. 어떤 비밀은 지키는 편이 낫다.',
       check: {q: 'How long has Grandma kept the photo?', a: 'For fifty years.'}, think: '민서는 왜 비밀을 말하지 않았을까?'}
    ],
    split: 3,
    next: '1970년에서 민서는\n누구를 만났을까?',
    recap: {q: '민서는 어떻게 1970년에 갔을까?', items: [{k: 'FOUND', v: 'something strange: a camera with a note'}, {k: 'DID', v: 'pressed the button twice'}, {k: 'SAW', v: 'a dirt road, a black-and-white TV, a 1970 calendar'}]},
    tf: [
      {p: 0, s: 'Grandma has lived in her house for more than fifty years.', a: true},
      {p: 1, s: 'The note said, “Press the button twice.”', a: false, why: '두 번 누르지 말라고 했다.'},
      {p: 2, s: 'Minseo saw a black-and-white TV in a shop.', a: true},
      {p: 3, s: 'The girl was looking for her dog.', a: false, why: '고양이(cat)를 찾고 있었다.'},
      {p: 5, s: 'Minseo pressed the button once to come back.', a: true},
      {p: 6, s: 'Minseo told Grandma her secret.', a: false, why: '그저 미소 지었다.'}
    ],
    key: [
      {en: 'Minseo {{has always loved}} old things.', note: '현재완료 (계속): 지금까지 늘 좋아해 왔다', g: 'g1'},
      {en: 'Grandma {{has lived}} there {{for}} more than fifty years.', note: '현재완료 + for + 기간', g: 'g1'},
      {en: '“I {{want you to come}} back someday.”', note: 'want + 목적어 + to부정사', g: 'g2'},
      {en: '“Now I {{want you to keep}} it.”', note: 'want + 목적어 + to부정사', g: 'g2'},
      {en: '“{{Have you seen}} my cat?”', note: '현재완료 의문문 (경험·완료)', g: 'g1'},
      {en: '“{{I’ve never met}} anyone like you.”', note: '현재완료 (경험): never', g: 'g1'},
      {en: '“I {{have kept}} this photo for fifty years.”', note: '현재완료 (계속): 50년 동안 간직해 왔다', g: 'g1'}
    ],
    summary: {text: 'Minseo found something {{strange}} in the attic: a camera. She pressed the button {{twice}} and traveled back to {{1970}}. She met a girl named Young-ja, her {{grandma}}. Back home, Grandma showed her a {{photo}} which she has kept for fifty years. Minseo kept it a {{secret}}.'},
    order: ['Minseo found a camera in the attic.', 'She pressed the button twice.', 'She met a girl named Young-ja.', 'She pressed the button once and came back.'],
    chart: {title: '1970 AND NOW', ko: '1970년과 지금 비교하기', cols: ['1970', 'Now'], note: '이야기 속 단서와 학생들이 아는 것을 함께 채운다. 표를 바탕으로 “I have never ~” 문장을 만들게 한다.', rows: [
      {name: 'Roads', cells: ['dirt roads', 'paved roads']},
      {name: 'TV', cells: ['black-and-white TV', 'smart TVs and phones']},
      {name: 'Games', cells: ['gonggi, playing outside', 'online games']}
    ]},
    wrap: {en: 'If I could travel in time, I would go to ______. I have never ______. I want ______ to ______ with me.', ko: '관통 질문으로 돌아가기: 가고 싶은 시대와 하고 싶은 일을 세 문장으로 쓰기'}
  },

  quiz: [
    ['“다락방”을 뜻하는 낱말은?', ['attic', 'flash', 'century', 'calendar'], 0, 'attic: 다락방'],
    ['“disappear”의 반대말은?', ['return', 'appear', 'wonder', 'invent'], 1, 'disappear ↔ appear'],
    ['“ancient”의 반대말은?', ['strange', 'special', 'modern', 'exactly'], 2, 'ancient ↔ modern'],
    ['“You look ___ your grandma.” (닮다)', ['at', 'for', 'after', 'like'], 3, 'look like: ~을 닮다'],
    ['“I can’t ___ to see the museum.” (빨리 ~하고 싶다)', ['go', 'stop', 'wait', 'have'], 2, 'can’t wait to ~'],
    ['경험을 묻는 표현은?', ['Have you ever been to Jeju?', 'Did you go to Jeju yesterday?', 'Are you going to Jeju?', 'Do you want to go to Jeju?'], 0, 'Have you ever ~?'],
    ['“Have you ever ridden a horse?”에 알맞은 대답은?', ['Yes, I did.', 'No, I haven’t.', 'Yes, I am.', 'No, I don’t.'], 1, 'Have you ~? → Yes, I have. / No, I haven’t.'],
    ['Let’s Watch에서 타임캡슐이 땅속에 있었던 기간은?', ['1년', '5년', '10년', '50년'], 2, 'for ten years'],
    ['빈칸에 알맞은 것은? “She has lived here ___ 2010.”', ['for', 'since', 'ago', 'during'], 1, 'since + 시작 시점'],
    ['빈칸에 알맞은 것은? “I have ___ this movie twice.”', ['see', 'saw', 'seeing', 'seen'], 3, 'have + 과거분사'],
    ['어법상 틀린 문장은?', ['I have just finished it.', 'Have you ever been there?', 'I have met him yesterday.', 'She has lived here for years.'], 2, 'yesterday와 현재완료는 함께 쓰지 않는다.'],
    ['빈칸에 알맞은 것은? “I want you ___ back someday.”', ['come', 'coming', 'to come', 'came'], 2, 'want + 목적어 + to부정사'],
    ['민서가 다락방에서 찾은 것은?', ['카메라', '오래된 편지', '흑백 TV', '고양이 인형'], 0, 'a camera with a small note'],
    ['1970년에서 민서가 만난 소녀는?', ['민서의 엄마', '민서의 이모', '민서의 선생님', '민서의 할머니'], 3, '이름표에 할머니의 이름 ‘이영자’'],
    ['할머니가 사진을 간직해 온 기간은?', ['10년', '20년', '30년', '50년'], 3, 'I have kept this photo for fifty years.']
  ]
};

/* ── 보강: 원리 중심 문법 · 모션 그래픽 · 낱말 만들기 · 발음 기호 ── */
(function (L) {
  const ipa = {past: '/pæst/', future: '/ˈfjuːtʃər/', century: '/ˈsentʃəri/', ancient: '/ˈeɪnʃənt/', machine: '/məˈʃiːn/', attic: '/ˈætɪk/', strange: '/streɪndʒ/', flash: '/flæʃ/', disappear: '/ˌdɪsəˈpɪr/', calendar: '/ˈkælɪndər/', memory: '/ˈmeməri/', photo: '/ˈfoʊtoʊ/', wonder: '/ˈwʌndər/', exactly: '/ɪɡˈzæktli/', history: '/ˈhɪstri/', invent: '/ɪnˈvent/', secret: '/ˈsiːkrət/', mysterious: '/mɪˈstɪriəs/', return: '/rɪˈtɜːrn/', experience: '/ɪkˈspɪriəns/'};
  L.vocab.words.forEach(w => { if (ipa[w.w]) w.ipa = ipa[w.w]; });
  L.vocab.morph = [
    {w: 'disappear', ko: '사라지다', parts: [{t: 'dis', k: 'pre', m: '반대'}, {t: 'appear', k: 'root', m: '나타나다'}], family: ['dislike', 'disagree', 'appearance'], note: 'dis- = 반대. 나타나다 ↔ 사라지다.'},
    {w: 'mysterious', ko: '신비로운', parts: [{t: 'myster(y)', k: 'root', m: '수수께끼'}, {t: 'ious', k: 'suf', m: '~이 가득한'}], family: ['mystery', 'curious', 'famous'], note: 'y로 끝나는 명사 + -ous → -ious (mystery → mysterious).'},
    {w: 'return', ko: '돌아오다', parts: [{t: 're', k: 'pre', m: '다시, 되돌려'}, {t: 'turn', k: 'root', m: '돌다'}], family: ['recycle', 'replay', 'review'], note: '다시(re) 돌다(turn) → 돌아오다.'}
  ];
  const [g1, g2] = L.grammar.points;
  g1.principle = {
    q: '과거의 일인데 왜 have(현재형)를 쓸까?',
    pic: [{en: 'past', ko: '과거의 일'}, {en: '———→', ko: '지금까지 이어짐', arrow: ''}, {en: 'now', ko: '지금 기준', hot: true}],
    core: '현재완료(have + p.p.)는 “지금”에 서서 과거를 돌아본다. 과거의 일이 지금까지 이어지거나, 지금 그 경험·결과를 “가지고(have)” 있을 때 쓴다.',
    why: ['경험: ever, never, before / 계속: for, since / 완료: already, just, yet.', 'yesterday, last year, ago처럼 끝난 과거 시점과는 함께 쓰지 않는다.', '의문문: Have you ever ~? — Yes, I have. / No, I haven’t.']
  };
  g1.anim = [{title: '과거 + 지금 → 현재완료', states: [
    {t: 'Minseo/S | loved/V#v | old things/O | as a child | . | / | She | still | loves | them | .', note: '어릴 때부터 + 지금도', ko: '민서는 어릴 때 옛날 물건을 좋아했다. 지금도 좋아한다.'},
    {t: 'Minseo/S | has always loved/X#v | old things/O | .', note: '과거부터 지금까지 → has + p.p.', ko: '민서는 늘 옛날 물건을 좋아해 왔다.'}]}];
  g1.contrast = {title: '과거 vs 현재완료', pairs: [
    {a: 'I {{saw}} that movie last week.', ka: '나는 지난주에 그 영화를 봤다. (끝난 과거 시점)', b: 'I {{have seen}} that movie twice.', kb: '나는 그 영화를 두 번 본 적이 있다. (지금까지의 경험)'}],
    point: '끝난 때(last week)가 있으면 과거, 지금까지의 경험·계속이면 have + p.p.'};
  g2.principle = {
    q: 'want 뒤에 왜 사람(목적어)이 먼저 올까?',
    pic: [{en: 'I want', ko: '바라는 사람 (나)'}, {en: 'you', ko: '행동할 사람', hot: true}, {en: 'to apologize', ko: '바라는 행동'}],
    core: 'want to ~는 “내가 하고 싶다”, want + 사람 + to ~는 “그 사람이 하기를 바란다”이다. 행동할 사람이 바뀌면 그 사람을 want와 to 사이에 끼워 넣는다.',
    why: ['목적어 = to부정사의 행동을 하는 사람 (I want you to go → 가는 사람은 you).', 'ask, tell, expect, allow도 같은 짜임.', 'want that ~ 처럼 that절을 쓰지 않는다.']
  };
  g2.anim = [{title: '내가 하고 싶다 → 네가 해 주길 바란다', states: [
    {t: 'I/S | want/V | to come/X#tv | back/M | .', note: '내가 하고 싶은 일', ko: '나는 돌아오고 싶다.'},
    {t: 'I/S | want/V | you/O#you | to come/X#tv | back/M | .', note: '행동할 사람(you)을 want와 to 사이에', ko: '나는 네가 돌아오기를 바란다.'}]},
    {title: '명령문을 전할 때', states: [
    {t: 'The note/S | said/V | , | “ | Don’t press/V#b | the button twice/O#c | . | ”', note: '쪽지에 쓰인 말 그대로', ko: '쪽지에는 “단추를 두 번 누르지 마시오.”라고 쓰여 있었다.'},
    {t: 'The note/S | told/V | her/O | not to press/X#b | the button twice/O#c | .', note: 'tell + 목적어 + not to부정사', ko: '쪽지는 그녀에게 단추를 두 번 누르지 말라고 했다.'}]}];
  g2.contrast = {title: 'want to vs want + 목적어 + to', pairs: [
    {a: 'I want {{to keep}} the photo.', ka: '나는 그 사진을 간직하고 싶다. (내가 간직한다)', b: 'I want {{you to keep}} the photo.', kb: '나는 네가 그 사진을 간직하기를 원한다. (네가 간직한다)'}],
    point: '행동할 사람이 다르면 want + 그 사람 + to부정사.'};
})(window.LESSON);
