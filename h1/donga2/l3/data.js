/* 고1 공통영어2(동아·이병민) Lesson 3 · Into the Smart Future
   교과서 대조(2026-10): 읽기 주제(Social Media Algorithms: A Double-edged Sword — 알고리즘의 장단점)를 교과서에 맞췄다.
   의사소통 기능·언어 형식은 교과서 자료를 구하지 못해 단원 주제에 맞춘 추정(estimate: true).
   대화문·읽기 글은 저작권 때문에 교과서 원문을 싣지 않고, 같은 주제로 새로 쓴 글이다. */
window.LESSON = {
  book: 'h1b-donga', no: 3, estimate: true,
  title: 'Into the Smart Future', ko: '스마트한 미래로',
  bigQ: {en: 'How can we make smart technology work for us, not against us?', ko: '스마트 기술이 우리에게 해가 아니라 도움이 되게 하려면 어떻게 해야 할까?'},
  align: {
    tb: {reading: 'Social Media Algorithms: A Double-edged Sword', note: '교과서 읽기는 소셜 미디어 알고리즘의 장점(검색 시간 절약, 관계 유지)과 단점(중독, 필터 버블 등)을 다루는 글. 여기 본문은 같은 주제로 새로 쓴 논설문이다. 의사소통 기능·언어 형식은 교과서 자료가 없어 추정이다.'},
    std: {vocab: ['10공영2-01-05', '10공영2-02-06'], talk: ['10공영2-01-03', '10공영2-02-04'], grammar: ['10공영2-02-04'], read1: ['10공영2-01-02', '10공영2-01-06'], read2: ['10공영2-01-08', '10공영2-02-04']},
    forms: ['Modals', 'Inversion']
  },
  goals: {
    vocab: ['알고리즘·소셜 미디어와 관련된 낱말 16개의 뜻과 발음(강세)을 익힌다.', 'pre-, -ize, -ive 같은 조각으로 predict, personalize, addictive를 분석할 수 있다.'],
    talk: ['미래에 일어날 가능성을 말할 수 있다.', '어떤 일에 대한 확신 정도를 표현할 수 있다.'],
    grammar: ['조동사 + have p.p.가 “지금의 판단 + 과거의 일”이라는 원리로 추측·후회를 표현할 수 있다.', '부정어·부사구를 앞으로 보내면 의문문 어순이 된다는 원리로 도치 문장을 이해하고 쓸 수 있다.'],
    read1: ['알고리즘이 작동하는 방식과 그 편리함을 파악할 수 있다.'],
    read2: ['알고리즘의 위험(끝없는 스크롤, 필터 버블, 개인 정보)과 대처법을 정리하고 나의 다짐을 영어로 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'How many times did you use AI today without noticing it?', ko: '오늘 알아차리지 못한 채 인공지능을 몇 번이나 썼을까요?', note: '추천 영상, 자동 완성, 번역, 길 찾기, 얼굴 인식 잠금 등을 하나씩 짚어 주면 학생들이 놀란다. “이 모든 게 30년 전에는 없었다”로 본문 도입과 이어진다.'},
    words: [
      {w: 'artificial', pos: 'adj.', ko: '인공의, 인위적인', ic: '🤖', ipa: '/ˌɑːrtɪˈfɪʃl/', audio: 'assets/audio/artificial.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Artificial intelligence is changing our lives.', exKo: '인공지능이 우리의 삶을 바꾸고 있다.'},
      {w: 'intelligence', pos: 'n.', ko: '지능', ic: '🧠', ipa: '/ɪnˈtelɪdʒəns/', audio: 'assets/audio/intelligence.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Some animals show great intelligence.', exKo: '어떤 동물들은 뛰어난 지능을 보인다.'},
      {w: 'algorithm', pos: 'n.', ko: '알고리즘(문제 해결 절차)', ic: '🔢', img: {src: 'h1/donga2/l3/img/w-algorithm.jpg', credit: 'CC0 1.0 (rawpixel)', link: 'https://www.rawpixel.com/image/5916657/image-public-domain-computer-free'}, ipa: '/ˈælɡərɪðəm/', audio: 'assets/audio/algorithm.mp3', audioCredit: 'Dcoetzee · CC0 (Wikimedia Commons, US)', ex: 'The algorithm chooses which videos you see.', exKo: '알고리즘이 네가 볼 영상을 고른다.'},
      {w: 'predict', pos: 'v.', ko: '예측하다', ic: '🔮', ipa: '/prɪˈdɪkt/', audio: 'assets/audio/predict.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'It is hard to predict the future.', exKo: '미래를 예측하기는 어렵다.'},
      {w: 'recommend', pos: 'v.', ko: '추천하다', ic: '👍', ipa: '/ˌrekəˈmend/', audio: 'assets/audio/recommend.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The app recommends videos based on what I watched.', exKo: '그 앱은 내가 본 것을 바탕으로 영상을 추천한다.'},
      {w: 'content', pos: 'n.', ko: '(온라인) 콘텐츠, 내용', ic: '🎞️', ipa: '/ˈkɑːntent/', audio: 'assets/audio/content.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Algorithms decide which content we see first.', exKo: '알고리즘은 우리가 어떤 콘텐츠를 먼저 볼지 정한다.'},
      {w: 'privacy', pos: 'n.', ko: '사생활, 개인 정보', ic: '🔒', img: {src: 'h1/donga2/l3/img/w-privacy.jpg', credit: 'stebulus · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/69017177@N00/297522471'}, ipa: '/ˈpraɪvəsi/', ex: 'We should protect our privacy online.', exKo: '우리는 온라인에서 개인 정보를 지켜야 한다.'},
      {w: 'bias', pos: 'n.', ko: '편향, 편견', ic: '⚖️', ipa: '/ˈbaɪəs/', audio: 'assets/audio/bias.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Data can contain human bias.', exKo: '데이터에는 인간의 편향이 담길 수 있다.'},
      {w: 'reliable', pos: 'adj.', ko: '믿을 만한', ic: '✅', ipa: '/rɪˈlaɪəbl/', audio: 'assets/audio/reliable.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Is this information reliable?', exKo: '이 정보는 믿을 만한가?'},
      {w: 'previous', pos: 'adj.', ko: '이전의', ic: '⏪', ipa: '/ˈpriːviəs/', ex: 'It looks at your previous activity.', exKo: '그것은 너의 이전 활동 기록을 살펴본다.'},
      {w: 'addictive', pos: 'adj.', ko: '중독성 있는', ic: '🌀', ipa: '/əˈdɪktɪv/', ex: 'Short videos can be addictive.', exKo: '짧은 영상은 중독성이 있을 수 있다.'},
      {w: 'convenient', pos: 'adj.', ko: '편리한', ic: '🛋️', ipa: '/kənˈviːniənt/', audio: 'assets/audio/convenient.mp3', audioCredit: 'Dvortygirl · Public domain (Wikimedia Commons, US)', ex: 'Online banking is very convenient.', exKo: '인터넷 뱅킹은 매우 편리하다.'},
      {w: 'personalize', pos: 'v.', ko: '개인 맞춤으로 하다', ic: '🎯', ipa: '/ˈpɜːrsənəlaɪz/', ex: 'The app personalizes your feed.', exKo: '그 앱은 너의 피드를 개인 맞춤으로 만든다.'},
      {w: 'accurate', pos: 'adj.', ko: '정확한', ic: '🎯', ipa: '/ˈækjərət/', audio: 'assets/audio/accurate.mp3', audioCredit: 'Neskaya · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The translation was not accurate.', exKo: '그 번역은 정확하지 않았다.'},
      {w: 'diverse', pos: 'adj.', ko: '다양한', ic: '🌈', img: {src: 'h1/donga2/l3/img/w-diverse.jpg', credit: 'Untitled blue · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/61728987@N00/22800371'}, ipa: '/daɪˈvɜːrs/', audio: 'assets/audio/diverse.mp3', audioCredit: 'Dvortygirl · GFDL (Wikimedia Commons, US)', ex: 'Follow people with diverse opinions.', exKo: '다양한 의견을 가진 사람들을 팔로우하라.'},
      {w: 'responsibility', pos: 'n.', ko: '책임', ic: '🤲', ipa: '/rɪˌspɑːnsəˈbɪləti/', audio: 'assets/audio/responsibility.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Who has responsibility for an AI’s mistake?', exKo: 'AI의 실수에 대한 책임은 누구에게 있을까?'}
    ],
    morph: [
      {w: 'predict', ko: '예측하다', parts: [{t: 'pre', k: 'pre', m: '미리'}, {t: 'dict', k: 'root', m: '말하다'}], family: ['dictionary', 'predictable', 'contradict'], note: '“미리 말하다” → 예측하다. dict = 말하다(dictionary: 말 모음).'},
      {w: 'unreliable', ko: '믿을 수 없는', parts: [{t: 'un', k: 'pre', m: '아닌'}, {t: 'reli', k: 'root', m: '의지하다 (rely)'}, {t: 'able', k: 'suf', m: '~할 수 있는'}], family: ['rely', 'reliable', 'reliance'], note: 'y로 끝나는 동사 + able → y를 i로(rely → reliable).'},
      {w: 'personalize', ko: '개인 맞춤으로 하다', parts: [{t: 'person', k: 'root', m: '사람'}, {t: 'al', k: 'suf', m: '~의 (형용사)'}, {t: 'ize', k: 'suf', m: '~하게 만들다 (동사)'}], family: ['personal', 'realize', 'organize'], note: '사람(person) → 개인의(personal) → 개인에게 맞추다(personalize). -ize는 동사를 만든다.'},
      {w: 'addictive', ko: '중독성 있는', parts: [{t: 'addict', k: 'root', m: '빠지게 하다'}, {t: 'ive', k: 'suf', m: '~하는 성질의 (형용사)'}], family: ['addiction', 'addicted', 'active'], note: '-ive = ~하는 성질이 있는. addiction 중독, be addicted to ~에 중독되다.'}
    ],
    phrases: [
      {w: 'rely on', ko: '~에 의존하다', ex: 'Many students rely on AI for homework.', exKo: '많은 학생들이 숙제에 AI를 의존한다.'},
      {w: 'keep an eye on', ko: '~을 지켜보다', ex: 'We should keep an eye on how AI is used.', exKo: '우리는 AI가 어떻게 쓰이는지 지켜봐야 한다.'},
      {w: 'take over', ko: '(일을) 넘겨받다, 장악하다', ex: 'Machines may take over boring tasks.', exKo: '기계가 지루한 일을 넘겨받을지도 모른다.'},
      {w: 'be likely to', ko: '~할 가능성이 크다', ex: 'Self-driving cars are likely to become common.', exKo: '자율 주행차는 흔해질 가능성이 크다.'},
      {w: 'double-check', ko: '다시 확인하다', ex: 'Always double-check what AI tells you.', exKo: 'AI가 알려 주는 것을 늘 다시 확인해라.'},
      {w: 'in the long run', ko: '장기적으로는', ex: 'In the long run, AI will create new jobs.', exKo: '장기적으로 AI는 새로운 일자리를 만들 것이다.'}
    ],
    pairs: [
      {a: 'artificial', b: 'natural', rel: '반대말'},
      {a: 'accurate', b: 'inaccurate', rel: '반대말 (in-)'},
      {a: 'reliable', b: 'unreliable', rel: '반대말 (un-)'},
      {a: 'diverse', b: 'similar', rel: '반대말'},
      {a: 'convenience', b: 'risk', rel: '편리함 / 위험'}
    ],
    wrap: {en: 'One way AI makes my life convenient is ______. One risk is ______.', ko: '오늘 배운 낱말로 AI의 편리함과 위험을 한 문장씩 쓰기'}
  },

  talk: {
    hook: {en: 'In 20 years, which job do you think a robot will do?', ko: '20년 뒤에는 어떤 일을 로봇이 하고 있을까요?', note: '배달, 운전, 요리, 의사 등 학생 답을 모으고 “확신해?”라고 되묻는다. 오늘의 가능성·확신 표현이 바로 그 대답에 필요한 말이다.'},
    speakers: {Jiho: {voice: 1, pitch: 1}, Rina: {voice: 0, pitch: 1.1}, 'Dr. Lim': {voice: 2, pitch: .95}, Ava: {voice: 0, pitch: 1.15}, Ben: {voice: 1, pitch: .95}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Speak 1', func: '가능성 말하기',
        key: {q: ['Do you think ~ will happen?', 'Is it possible that ~?'], a: ['It’s possible that ~.', '~ is likely to ~.', 'There’s a good chance that ~.']},
        note: 'be likely to + 동사원형, It’s possible that + 문장. 가능성이 낮을 때는 It’s unlikely that ~ / There’s little chance that ~.',
        dialogs: [
          { title: 'Dialogue A', setting: '과학 박람회의 자율 주행 셔틀 앞', lines: [
            {s: 'Rina', en: 'Jiho, {{do you think}} self-driving cars {{will}} replace taxis?', ko: '지호야, 자율 주행차가 택시를 대신할 거라고 생각해?'},
            {s: 'Jiho', en: 'Well, {{it’s possible that}} they will in big cities.', ko: '음, 대도시에서는 그럴 가능성도 있어.'},
            {s: 'Rina', en: 'Really? But they still make mistakes in heavy rain.', ko: '정말? 그런데 폭우 속에서는 아직 실수를 하잖아.'},
            {s: 'Jiho', en: 'True. But they {{are likely to}} get much better in ten years.', ko: '맞아. 하지만 10년 안에 훨씬 나아질 가능성이 커.'},
            {s: 'Rina', en: 'Then {{there’s a good chance that}} I’ll never need a driver’s license!', ko: '그럼 나는 운전면허가 필요 없을 가능성이 크겠네!'}
          ]},
          { title: 'Dialogue B', setting: '진로 수업', lines: [
            {s: 'A', en: 'Is it possible that AI will replace doctors?', ko: 'AI가 의사를 대신할 수도 있을까?'},
            {s: 'B', en: 'I think {{it’s unlikely that}} it will replace them completely.', ko: '완전히 대신할 가능성은 낮다고 생각해.'},
            {s: 'A', en: 'Why?', ko: '왜?'},
            {s: 'B', en: 'Patients need someone who listens and cares. AI is likely to help doctors, not replace them.', ko: '환자에게는 들어 주고 돌봐 주는 사람이 필요하거든. AI는 의사를 대신하기보다 도울 가능성이 커.'}
          ]}
        ],
        check: [
          {q: 'Where does Jiho think self-driving cars might replace taxis?', a: 'In big cities.'},
          {q: 'What is still a problem for self-driving cars?', a: 'They make mistakes in heavy rain.'},
          {q: 'What does B think AI will do for doctors?', a: 'AI is likely to help doctors, not replace them.'}
        ],
        drill: {frame: ['A: Do you think ____?', 'B: It’s possible that … / It’s unlikely that …'], opts: ['robots will cook for us', 'AI will write novels', 'cars will fly', 'we will live on Mars', 'AI will teach classes', 'phones will disappear']}
      },
      { id: 'lt2', label: 'Listen & Speak 2', func: '확신 정도 표현하기',
        key: {q: ['Are you sure (that) ~?', 'How sure are you?'], a: ['I’m sure that ~. / I’m certain that ~.', 'I’m not sure whether ~.', 'I doubt that ~.']},
        note: '확신의 정도: I’m certain > I’m sure > I think > I’m not sure whether > I doubt. 2과 whether 명사절과 이어진다.',
        dialogs: [
          { title: 'Dialogue A', setting: '숙제를 하며', lines: [
            {s: 'Ava', en: 'The AI chatbot says the Great Wall can be seen from the Moon with the naked eye.', ko: 'AI 챗봇이 만리장성은 달에서 맨눈으로 보인대.'},
            {s: 'Ben', en: '{{Are you sure that}} it’s true?', ko: '그게 사실이라고 확신해?'},
            {s: 'Ava', en: 'Hmm, {{I’m not sure whether}} it’s right. It sounded very confident.', ko: '음, 맞는지 잘 모르겠어. 아주 자신 있게 말하던데.'},
            {s: 'Ben', en: '{{I doubt that}} it is. Astronauts have said they couldn’t see it. Let’s check a reliable source.', ko: '그렇지 않을 것 같아. 우주 비행사들이 안 보였다고 했거든. 믿을 만한 자료를 확인해 보자.'},
            {s: 'Ava', en: 'Good idea. I should have checked before writing it down.', ko: '좋은 생각이야. 받아 적기 전에 확인했어야 했는데.'}
          ]},
          { title: 'Dialogue B', setting: 'AI 동아리 회의', lines: [
            {s: 'Dr. Lim', en: 'How sure are you that our app will recognize every student’s voice?', ko: '우리 앱이 모든 학생의 목소리를 알아들을 거라고 얼마나 확신하니?'},
            {s: 'Jiho', en: '{{I’m certain that}} it works for most voices.', ko: '대부분의 목소리에서는 작동한다고 확신해요.'},
            {s: 'Rina', en: 'But we only tested it with ten students. {{I’m not sure whether}} it understands different accents.', ko: '그런데 열 명으로만 시험했어요. 다양한 억양을 알아듣는지는 잘 모르겠어요.'},
            {s: 'Dr. Lim', en: 'Good point. Let’s test it with more people before we use it.', ko: '좋은 지적이야. 쓰기 전에 더 많은 사람으로 시험해 보자.'}
          ]}
        ],
        check: [
          {q: 'What did the AI chatbot say?', a: 'The Great Wall can be seen from the Moon with the naked eye.'},
          {q: 'Why does Ben doubt it?', a: 'Because astronauts have said they couldn’t see it.'},
          {q: 'Why is Rina not sure about the app?', a: 'Because they only tested it with ten students.'}
        ],
        drill: {frame: ['A: Are you sure that ____?', 'B: I’m sure that … / I doubt that …'], opts: ['AI is always right', 'robots have feelings', 'our data is safe', 'this news is true', 'machines can be creative', 'phones listen to us']}
      }
    ],
    interviewEx: 'Minseo thinks it is likely that AI will help doctors. She is not sure whether it will ever replace them.',
    watch: {
      label: 'Let’s Watch', title: 'The Smart Speaker Mix-up', setting: '아침. 스마트 스피커가 엉뚱한 일을 했다.',
      lines: [
        {s: 'Ben', en: 'Why is the heater on? It’s so hot in here!', ko: '왜 난방이 켜져 있지? 여기 너무 더워!'},
        {s: 'Ava', en: 'The smart speaker must have misunderstood me. I said “Turn on the heater” in my sleep… no, wait.', ko: '스마트 스피커가 내 말을 잘못 알아들은 게 틀림없어. 내가 잠결에 “난방 켜”라고… 아니, 잠깐.'},
        {s: 'Ben', en: 'You were watching a movie last night. Maybe someone in the movie said it!', ko: '어젯밤 영화 봤잖아. 영화 속 누군가가 그 말을 했나 봐!'},
        {s: 'Ava', en: 'Ha! Never have I seen a speaker obey a movie character.', ko: '하! 스피커가 영화 속 인물 말을 듣는 건 처음 봐.'},
        {s: 'Ben', en: 'Smart doesn’t always mean right. We should have set a voice password.', ko: '스마트하다고 늘 맞는 건 아니야. 음성 비밀번호를 설정했어야 했어.'}
      ],
      check: [
        {q: 'What problem do Ben and Ava have?', a: 'The heater is on and the room is too hot.'},
        {q: 'What probably turned on the heater?', a: 'Someone in the movie said “Turn on the heater.”'},
        {q: 'What does Ben think they should have done?', a: 'They should have set a voice password.'}
      ]
    },
    wrap: {en: 'Predict a future change and say how sure you are about it.', ko: '미래의 변화를 예측하고 확신 정도를 말하기'}
  },

  grammar: {
    cover: 'must have p.p. · Never have I',
    hook: {en: 'The speaker {{must have misunderstood}} me.  /  {{Never have I}} seen a speaker obey a movie character.', ko: '첫 문장은 지금 일일까, 지난 일일까? 두 번째 문장에서 have와 I의 순서가 왜 바뀌었을까?', answer: 'must have misunderstood = 과거의 일에 대한 지금의 확신 / Never를 앞으로 보내면 의문문 어순(have + I)으로 도치', note: '2차시 Let’s Watch의 문장이다. 두 번째 문장을 I have never seen ~과 나란히 써서 무엇이 움직였는지 찾게 한다.'},
    points: [
      { id: 'g1', name: '조동사 + have p.p.', short: '조동사 + have p.p.', form: 'must / may(might) / can’t / should / could + have + p.p.', meaning: '~했음이 틀림없다 / ~했을지도 모른다 / ~했을 리 없다 / ~했어야 했는데 / ~할 수도 있었는데',
        notice: [
          {en: 'The speaker {{must have misunderstood}} me.', ko: '그 스피커가 내 말을 잘못 알아들은 게 틀림없다.'},
          {en: 'I {{should have checked}} before writing it down.', ko: '받아 적기 전에 확인했어야 했는데.'},
          {en: 'The AI {{might have made}} a mistake.', ko: 'AI가 실수를 했을지도 모른다.'}
        ],
        principle: {
          q: '과거 이야기인데 왜 조동사 뒤에 have p.p.를 붙일까?',
          pic: [{en: 'must', ko: '지금의 판단 (확신)'}, {en: '+', ko: '', arrow: ''}, {en: 'have p.p.', ko: '판단의 대상 = 과거의 일', hot: true}],
          core: '조동사(must, may, should …)는 “지금 말하는 사람의 판단”을 나타낸다. 그 판단의 대상이 과거의 일이면, 조동사 뒤에 과거형을 쓸 수 없으므로 have p.p.로 시간을 뒤로 보낸다.',
          why: ['조동사 뒤에는 동사원형만 올 수 있다 → 과거를 나타내려면 have + p.p.를 쓴다.', '추측의 세기: must have(틀림없이) > may/might have(아마도) > can’t have(~했을 리 없다).', 'should have p.p.와 could have p.p.는 “실제로는 하지 않은 일”에 대한 후회·아쉬움이다.']
        },
        anim: [
          {title: '지금의 확신 + 과거의 일', why: 'I’m sure + 과거 문장이 must have p.p. 한 덩어리가 된다.', states: [
            {t: 'I’m sure/M#sure | the speaker/S#sp | misunderstood/V#mis | me/O#me | .', note: '확신(지금) + 과거의 일', ko: '나는 그 스피커가 내 말을 잘못 알아들었다고 확신한다.'},
            {t: 'The speaker/S#sp | must have/X#sure | misunderstood/V#mis | me/O#me | .', note: 'I’m sure → must, 과거 → have p.p.', ko: '그 스피커가 내 말을 잘못 알아들은 게 틀림없다.'}]},
          {title: '하지 않은 일에 대한 후회', states: [
            {t: 'I | didn’t check/V#chk | the facts | . | / | It | was | a mistake | .', note: '과거에 하지 않았고, 그건 실수였다', ko: '나는 사실을 확인하지 않았다. 그건 실수였다.'},
            {t: 'I | should have checked/X#chk | the facts | .', note: 'should have p.p. = ~했어야 했는데 (안 했다)', ko: '나는 사실을 확인했어야 했다.'}]}
        ],
        contrast: {title: '모양이 비슷하지만 뜻이 다른 쌍', pairs: [
          {a: 'He {{must have left}} early.', ka: '그는 일찍 떠난 게 틀림없다. (과거에 대한 확신)', b: 'He {{had to leave}} early.', kb: '그는 일찍 떠나야 했다. (과거의 의무)'},
          {a: 'You {{should have asked}} me.', ka: '너는 나에게 물어봤어야 했다. (안 물어봄 → 아쉬움)', b: 'You {{should ask}} me.', kb: '너는 나에게 물어봐야 한다. (지금·앞으로의 충고)'}],
          point: '조동사 + have p.p.는 언제나 “지나간 일”에 대한 지금의 판단이다.'},
        rule: [
          {k: '확신', v: 'must have p.p. (~했음이 틀림없다)', ex: 'It must have rained last night.'},
          {k: '추측', v: 'may / might have p.p. (~했을지도 모른다)', ex: 'She might have forgotten.'},
          {k: '불가능', v: 'can’t / couldn’t have p.p. (~했을 리 없다)', ex: 'He can’t have said that.'},
          {k: '후회·아쉬움', v: 'should have p.p. / could have p.p.', ex: 'We could have won the game.'}
        ],
        check: [
          {q: 'The ground is wet. It ____ (must, rain) last night.', a: 'must have rained'},
          {q: 'I failed the test. I ____ (should, study) harder.', a: 'should have studied'},
          {q: 'She looks tired. She ____ (may, stay up) late.', a: 'may have stayed up'},
          {q: 'He was with me all day. He ____ (can’t, break) the window.', a: 'can’t have broken'},
          {q: 'We ____ (could, win), but we didn’t try hard.', a: 'could have won'}
        ],
        trap: {bad: 'The AI must made a mistake yesterday.', good: 'The AI must have made a mistake yesterday.', why: '조동사 뒤에는 과거형이 올 수 없다. 과거의 일 → must have + p.p.'},
        scramble: [
          {ko: '그 앱이 내 목소리를 잘못 알아들었음이 틀림없다.', en: 'The app must have misheard my voice.'},
          {ko: '우리는 더 많은 사람으로 시험했어야 했다.', en: 'We should have tested it with more people.'},
          {ko: '그 정보는 틀렸을지도 모른다.', en: 'The information might have been wrong.'}
        ]
      },
      { id: 'g2', name: '도치 (부정어·부사구 강조)', short: '도치', form: 'Never / Not only / Only + 부사구 / Little + 조동사(do·have·be) + 주어 + 동사', meaning: '(강조) 결코 ~않다 / ~할 뿐만 아니라 / 오직 ~해야만',
        notice: [
          {en: '{{Never have I}} seen a speaker obey a movie character.', ko: '스피커가 영화 속 인물의 말을 듣는 것을 결코 본 적이 없다.'},
          {en: '{{Not only does AI}} recommend songs, but it also predicts what we will buy.', ko: 'AI는 노래를 추천할 뿐 아니라 우리가 무엇을 살지도 예측한다.'},
          {en: '{{Only by checking}} the facts {{can we}} use AI wisely.', ko: '사실을 확인해야만 우리는 AI를 현명하게 쓸 수 있다.'}
        ],
        principle: {
          q: '평서문인데 왜 의문문처럼 조동사가 주어 앞에 올까?',
          pic: [{en: 'Never', ko: '강조할 말을 맨 앞으로', hot: true}, {en: 'have I', ko: '조동사 + 주어 (의문문 어순)'}, {en: 'seen …', ko: '나머지'}],
          core: '부정어(never, not only, little, rarely)나 only + 부사구를 강조하려고 문장 맨 앞으로 보내면, 그 뒤는 의문문 어순(조동사 + 주어)으로 바뀐다. 듣는 사람에게 “여기 주목!” 하고 신호를 보내는 장치다.',
          why: ['조동사(have, can, will)나 be동사가 있으면 그것을 주어 앞으로 보낸다.', '일반동사만 있으면 do/does/did를 만들어 주어 앞에 두고, 동사는 원형으로 바꾼다.', '장소·방향 부사구 도치(Here comes the bus. / Gone are the days)는 동사 자체가 앞으로 나온다.'],
          note: '기출 지문: at no point will the buyer see ~ (2024학년도 수능 30번), Gone are the days when ~ (2025년 3월 고1 30번).'
        },
        anim: [
          {title: '부정어를 앞으로 보내면', why: 'never가 앞으로 나가면 have가 주어 앞으로 따라 나간다.', states: [
            {t: 'I/S#i | have/V#have | never/M#never | seen/V#seen | such a smart robot/O#obj | .', note: '평서문', ko: '나는 그렇게 똑똑한 로봇을 본 적이 없다.'},
            {t: 'Never/X#never | have/V#have | I/S#i | seen/V#seen | such a smart robot/O#obj | .', note: 'Never를 앞으로 → have + I (의문문 어순)', ko: '그렇게 똑똑한 로봇은 결코 본 적이 없다.'}]},
          {title: '일반동사면 do가 나타난다', states: [
            {t: 'AI/S#ai | not only/M#no | recommends/V#rec | songs/O#songs | …', note: '평서문 (일반동사 recommends)', ko: 'AI는 노래를 추천할 뿐만 아니라…'},
            {t: 'Not only/X#no | does/X#does | AI/S#ai | recommend/V#rec | songs/O#songs | …', note: 'does가 나타나 주어 앞으로, 동사는 원형(recommend)', ko: 'AI는 노래를 추천할 뿐만 아니라…'}]}
        ],
        contrast: {title: '도치 문장 vs 보통 문장', pairs: [
          {a: 'I {{realized}} the danger only then.', ka: '나는 그제야 위험을 깨달았다. (보통 어순)', b: 'Only then {{did I realize}} the danger.', kb: '그제야 비로소 나는 위험을 깨달았다. (Only + 부사 앞으로 → did + I + 원형)'},
          {a: 'People {{knew}} little about AI in 1990.', ka: '1990년에 사람들은 AI에 대해 거의 알지 못했다.', b: 'Little {{did people know}} how AI would change their lives.', kb: '사람들은 AI가 삶을 얼마나 바꿀지 거의 알지 못했다. (Little 앞으로 → 도치)'}],
          point: '부정어·only 부사구가 맨 앞에 오면 조동사(do/have/can) + 주어 순서로 바뀐다.'},
        rule: [
          {k: '부정어', v: 'Never / Rarely / Little + 조동사 + S + V', ex: 'Rarely do machines make that mistake.'},
          {k: 'Not only', v: 'Not only + 조동사 + S + V, but (also) ~', ex: 'Not only is it fast, but it is also cheap.'},
          {k: 'Only + 부사구', v: 'Only + 때·방법 + 조동사 + S + V', ex: 'Only after the update did it work.'},
          {k: 'So / Neither', v: 'So + 조동사 + S (나도 그래) / Neither + 조동사 + S', ex: 'I love robots. — So do I.'}
        ],
        check: [
          {q: 'Never ____ (I, have) seen such a fast robot.', a: 'have I'},
          {q: 'Not only ____ (it, does) translate, but it also speaks.', a: 'does it'},
          {q: 'Only then ____ (I, did) understand the problem.', a: 'did I'},
          {q: 'Little ____ (she, did) know about the danger.', a: 'did she'},
          {q: 'I can’t use the app. — Neither ____ I. (can / do)', a: 'can'}
        ],
        trap: {bad: 'Not only AI recommends songs, but it also writes them.', good: 'Not only does AI recommend songs, but it also writes them.', why: 'Not only가 문장 맨 앞에 오면 도치 — 일반동사는 does + 주어 + 동사원형.'},
        scramble: [
          {ko: '나는 이렇게 똑똑한 기계를 결코 본 적이 없다.', en: 'Never have I seen such a smart machine.'},
          {ko: '사실을 확인해야만 우리는 안전할 수 있다.', en: 'Only by checking the facts can we be safe.'},
          {ko: '그것은 빠를 뿐만 아니라 정확하다.', en: 'Not only is it fast, but it is also accurate.'}
        ]
      }
    ],
    wrap: {en: 'Yesterday, I should have ______. Never have I ______.', ko: '조동사 + have p.p. 한 문장, 도치 한 문장으로 기술에 관한 경험 쓰기'},
    wrapEx: 'Yesterday, I should have double-checked the translation. Never have I seen such a funny mistake.'
  },

  reading: {
    title: 'The Algorithm Knows You — Too Well?', kind: '논설문', cover: 'Feed', coverKo: '알고리즘이 고른 화면', cover2: 'Choice', coverKo2: '결정은 사람의 몫',
    before: [
      {q: 'Why do you think your video app shows you the videos it shows?', a: '내가 전에 본 영상, 누른 좋아요, 검색 기록 때문'},
      {q: 'Have you ever watched videos for much longer than you planned?', a: '추천 영상을 계속 누르다가 시간 가는 줄 몰랐던 경험'}
    ],
    gloss: {'feed': '(SNS의) 게시물 목록', 'recommendation': '추천', 'previous activity': '이전 활동 기록', 'endless scroll': '끝없는 스크롤', 'filter bubble': '필터 버블(비슷한 정보에만 갇힘)', 'echo chamber': '반향실(같은 의견만 되울림)', 'personal data': '개인 정보', 'search engine': '검색 엔진'},
    paras: [
      {who: '', en: 'Every time you open a social media app, an algorithm decides what you will see first. It looks at your previous activity — the videos you watched, the posts you liked, and even how long you stopped on each picture. Then it fills your feed with content you are likely to enjoy. Like a sword with two edges, this smart system can help us, but it can also hurt us.',
       ko: '소셜 미디어 앱을 열 때마다 알고리즘이 무엇을 먼저 보여 줄지 정한다. 알고리즘은 이전 활동 기록, 곧 당신이 본 영상, 좋아요를 누른 게시물, 심지어 사진마다 얼마나 오래 멈췄는지까지 살펴본다. 그런 다음 당신이 즐길 만한 콘텐츠로 피드를 채운다. 양날의 칼처럼 이 똑똑한 시스템은 우리를 도울 수도 있지만 해칠 수도 있다.',
       check: {q: 'What does the algorithm look at?', a: 'Our previous activity (videos we watched, posts we liked, how long we stopped).'}, think: '내 피드에는 어떤 콘텐츠가 가장 많이 나오나?',
       bg: {src: 'h1/donga2/l3/img/r-p0.jpg', credit: 'MyStockPhotos · CC0 1.0 (Flickr)', link: 'https://www.flickr.com/photos/136375272@N05/46908269482', about: 'SNS 피드를 넘기는 손'}},
      {who: 'A Helpful Guide', en: 'There is far more content online than anyone could ever read. Without algorithms, we would have to search through it all by ourselves. Not only do they save our time, but they also introduce us to songs, books, and creators we might never have found on our own.',
       ko: '온라인에는 누구도 다 읽을 수 없을 만큼 훨씬 많은 콘텐츠가 있다. 알고리즘이 없다면 우리는 그 모든 것을 혼자 뒤져야 할 것이다. 알고리즘은 시간을 절약해 줄 뿐만 아니라, 우리가 혼자서는 결코 찾지 못했을지도 모르는 노래, 책, 창작자를 소개해 준다.',
       check: {q: 'What two benefits of algorithms does the writer mention?', a: 'They save time and introduce us to new songs, books, and creators.'}, think: '추천 덕분에 좋아하게 된 노래나 채널이 있나?',
       bg: {src: 'h1/donga2/l3/img/r-p1.jpg', credit: 'Incase. · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/62021300@N00/6685431805', about: '음악 작업 중인 사람'}},
      {who: 'Staying Connected', en: 'Algorithms also help us stay close to the people we care about. They put a friend’s birthday post or a cousin’s new baby photo at the top of our feed. Thanks to them, we may have heard news from old friends that we would otherwise have missed.',
       ko: '알고리즘은 우리가 아끼는 사람들과 가깝게 지내도록 돕기도 한다. 친구의 생일 게시물이나 사촌의 아기 사진을 피드 맨 위에 올려 준다. 알고리즘 덕분에, 그렇지 않았다면 놓쳤을 옛 친구들의 소식을 우리는 들을 수 있었을 것이다.',
       check: {q: 'How do algorithms help us stay connected?', a: 'They put posts from friends and family at the top of our feed.'}, think: '알고리즘 덕분에 알게 된 소식이 있나?',
       bg: {src: 'h1/donga2/l3/img/r-p2.jpg', credit: 'Hamed Saber · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/44124425616@N01/564819621', about: '함께 찍은 단체 사진'}},
      {who: 'The Endless Scroll', en: 'However, the same system is designed to keep us watching. Each video is followed by another one that is just as interesting. Many users say they opened an app for “just five minutes” and looked up an hour later. They should have stopped earlier, but the feed never ends.',
       ko: '하지만 같은 시스템이 우리가 계속 보도록 설계되어 있다. 영상 하나가 끝나면 그만큼 흥미로운 영상이 또 이어진다. 많은 사용자가 “딱 5분만” 하려고 앱을 열었다가 고개를 들어 보니 한 시간이 지나 있었다고 말한다. 더 일찍 멈췄어야 했지만, 피드는 결코 끝나지 않는다.',
       check: {q: 'What is the system designed to do?', a: 'To keep us watching.'}, think: '나도 “5분만” 하다가 오래 본 적이 있나?'},
      {who: 'The Filter Bubble', en: 'Algorithms show us more of what we already like. Over time, we see fewer and fewer different opinions. This is called a filter bubble. Inside it, we may believe that everyone thinks the way we do. Rarely do we notice that the bubble is there at all.',
       ko: '알고리즘은 우리가 이미 좋아하는 것을 더 많이 보여 준다. 시간이 지날수록 우리는 다른 의견을 점점 덜 보게 된다. 이것을 필터 버블이라고 부른다. 그 안에서 우리는 모든 사람이 나처럼 생각한다고 믿게 될지도 모른다. 우리는 거품이 거기 있다는 것조차 좀처럼 알아차리지 못한다.',
       check: {q: 'What is a filter bubble?', a: 'A situation where we see fewer and fewer different opinions because algorithms show more of what we already like.'}, think: '내 피드에서 반대 의견을 본 적이 있나?',
       bg: {src: 'h1/donga2/l3/img/r-p4.jpg', credit: 'brenkee · CC0 1.0 (Flickr)', link: 'https://www.flickr.com/photos/55128416@N05/19581533373', about: '비눗방울'}},
      {who: 'Your Data', en: 'To make good guesses, algorithms need a great deal of personal data. Every click, search, and pause is recorded. Most users have agreed to share this information, but few of them have read what they agreed to. They might have shared more than they wanted to.',
       ko: '좋은 짐작을 하려면 알고리즘에는 엄청난 양의 개인 정보가 필요하다. 모든 클릭, 검색, 멈춤이 기록된다. 대부분의 사용자는 이 정보를 공유하는 데 동의했지만, 무엇에 동의했는지 읽어 본 사람은 거의 없다. 그들은 원했던 것보다 더 많이 공유했을지도 모른다.',
       check: {q: 'What do algorithms need to make good guesses?', a: 'A great deal of personal data.'}, think: '앱 가입할 때 약관을 읽어 본 적이 있나?',
       bg: {src: 'h1/donga2/l3/img/r-p5.jpg', credit: 'stockcatalog · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/151691693@N02/26406047157', about: '잠금 표시가 뜬 휴대전화'}},
      {who: 'Taking Control', en: 'So how can we use algorithms without being used by them? Set a time limit before you open an app. Follow people with views different from yours. Search for information yourself instead of waiting for it to appear. Only when we make these choices can we stay in control.',
       ko: '그렇다면 알고리즘에 이용당하지 않고 알고리즘을 이용하려면 어떻게 해야 할까? 앱을 열기 전에 시간제한을 정하라. 나와 생각이 다른 사람들도 팔로우하라. 정보가 나타나기를 기다리지 말고 스스로 찾아보라. 이런 선택을 할 때에만 우리는 주도권을 지킬 수 있다.',
       check: {q: 'What can we do to stay in control?', a: 'Set a time limit, follow people with different views, and search for information ourselves.'}, think: '셋 중 내가 오늘 바로 할 수 있는 것은?',
       bg: {src: 'h1/donga2/l3/img/r-p6.jpg', credit: 'Semtrio · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/163837264@N07/43309471604', about: '모래시계'}},
      {who: 'Our Choice', en: 'An algorithm is a tool, not a master. It knows what we clicked yesterday, but it does not know who we want to become tomorrow. That decision is still ours.',
       ko: '알고리즘은 도구이지 주인이 아니다. 그것은 우리가 어제 무엇을 눌렀는지는 알지만, 우리가 내일 어떤 사람이 되고 싶은지는 모른다. 그 결정은 여전히 우리의 몫이다.',
       check: {q: 'What does the algorithm not know?', a: 'Who we want to become tomorrow.'}, think: '알고리즘이 모르는 나에 대해 한 문장으로 쓴다면?',
       bg: {src: 'h1/donga2/l3/img/r-p7.jpg', credit: 'CC0 1.0 (rawpixel)', link: 'https://www.rawpixel.com/image/5943429/free-public-domain-cc0-photo', about: '두 갈래 길'}}
    ],
    split: 4,
    next: '편리한 알고리즘에는\n어떤 위험이 숨어 있을까?',
    recap: {q: '알고리즘은 우리를 어떻게 도울까?', items: [{k: 'HOW IT WORKS', v: 'looks at our previous activity · fills our feed'}, {k: 'HELPFUL GUIDE', v: 'saves time · introduces new songs, books, and creators'}, {k: 'CONNECTED', v: 'friends’ and family’s posts at the top'}]},
    tf: [
      {p: 0, s: 'The algorithm looks at how long we stop on each picture.', a: true},
      {p: 1, s: 'Without algorithms, searching would be easier.', a: false, why: '혼자 다 뒤져야 할 것이다.'},
      {p: 2, s: 'Algorithms can help us hear news from old friends.', a: true},
      {p: 3, s: 'The feed is designed to keep us watching.', a: true},
      {p: 4, s: 'Inside a filter bubble, we see many different opinions.', a: false, why: '다른 의견을 점점 덜 본다.'},
      {p: 5, s: 'Most users have read what they agreed to.', a: false, why: '읽어 본 사람은 거의 없다.'},
      {p: 7, s: 'The writer thinks algorithms should make our decisions.', a: false, why: '결정은 여전히 우리의 몫이다.'}
    ],
    key: [
      {en: '{{Not only do they}} save our time, but they also introduce us to new songs.', note: 'Not only 도치 (do + 주어 + 동사원형)', g: 'g2'},
      {en: '… creators we {{might never have found}} on our own.', note: '조동사 + have p.p. (~했을지도 모른다)', g: 'g1'},
      {en: 'We {{may have heard}} news that we {{would otherwise have missed}}.', note: 'may have p.p. / would have p.p.', g: 'g1'},
      {en: 'They {{should have stopped}} earlier, but the feed never ends.', note: 'should have p.p. (했어야 했는데 안 함)', g: 'g1'},
      {en: '{{Rarely do we notice}} that the bubble is there at all.', note: 'Rarely 도치', g: 'g2'},
      {en: '{{Only when we make}} these choices {{can we}} stay in control.', note: 'Only + 부사절 도치 (can + 주어)', g: 'g2'}
    ],
    summary: {text: 'Social media {{algorithms}} decide what we see by looking at our previous activity. Not only do they save time, but they also help us stay {{connected}}. However, they are designed to keep us {{watching}}, they can trap us in a filter {{bubble}}, and they collect our personal {{data}}. Only when we set limits and search for ourselves can we stay in {{control}}.'},
    order: ['You open an app for “just five minutes.”', 'The algorithm shows one interesting video after another.', 'You look up an hour later.', 'You realize you should have stopped earlier.'],
    chart: {title: 'A DOUBLE-EDGED SWORD', ko: '알고리즘의 양날 정리', cols: ['Helpful edge', 'Harmful edge'], note: '표를 보고 “Not only do algorithms ~, but they also ~.” 도치 문장과 “We should have ~.” 문장으로 말하게 한다.', rows: [
      {name: 'Time', cells: ['saves search time', 'endless scroll wastes time']},
      {name: 'Content', cells: ['new songs and creators', 'filter bubble']},
      {name: 'People', cells: ['news from friends', 'only similar opinions']},
      {name: 'Data', cells: ['better guesses', 'privacy risk']}
    ]},
    wrap: {en: 'To use algorithms wisely, I will ______. Only when ______ can we ______.', ko: '관통 질문으로 돌아가기: 알고리즘을 현명하게 쓰기 위한 나의 다짐 쓰기'}
  },

  quiz: [
    ['“예측하다”를 뜻하는 낱말은?', ['replace', 'predict', 'protect', 'produce'], 1, 'predict'],
    ['“편향, 편견”을 뜻하는 낱말은?', ['bias', 'content', 'privacy', 'feed'], 0, 'bias'],
    ['predict의 pre-가 뜻하는 것은?', ['스스로', '미리', '다시', '아닌'], 1, 'pre- = 미리'],
    ['reliable의 반대말은?', ['unreliable', 'irreliable', 'disreliable', 'nonreliable'], 0, 'un- + reliable'],
    ['가능성을 말하는 표현은?', ['I doubt that.', 'It’s likely to rain.', 'I’m certain.', 'Are you sure?'], 1, 'be likely to'],
    ['확신이 가장 약한 표현은?', ['I’m certain that ~', 'I’m sure that ~', 'I think ~', 'I doubt that ~'], 3, 'I doubt that ~'],
    ['빈칸에 알맞은 것은? “The road is wet. It must ____ last night.”', ['rain', 'rained', 'have rained', 'be raining'], 2, 'must have p.p.'],
    ['“I should have checked.”의 뜻은?', ['확인했다', '확인해야 한다', '확인했어야 했는데 (안 했다)', '확인할 것이다'], 2, 'should have p.p. = 후회'],
    ['어법상 틀린 문장은?', ['He must have left.', 'She may have forgotten.', 'The AI must made a mistake.', 'We could have won.'], 2, 'must have made'],
    ['빈칸에 알맞은 것은? “Never ____ such a smart robot.”', ['I have seen', 'have I seen', 'I seen have', 'seen I have'], 1, 'Never + have + I'],
    ['빈칸에 알맞은 것은? “Not only ____ fast, but it is also cheap.”', ['it is', 'is it', 'does it', 'it does'], 1, 'be동사 도치: is it'],
    ['알고리즘의 장점으로 글에 나온 것은?', ['개인 정보를 지켜 준다', '혼자서는 찾지 못했을 콘텐츠를 소개해 준다', '다른 의견을 많이 보여 준다', '사용 시간을 줄여 준다'], 1, 'introduce us to songs, books, and creators we might never have found'],
    ['필터 버블이란?', ['좋아하는 것만 보다가 다른 의견을 점점 덜 보게 되는 것', '광고가 너무 많은 것', '친구 소식을 놓치는 것', '영상이 끝나지 않는 것'], 0, 'we see fewer and fewer different opinions'],
    ['주도권을 지키는 방법이 아닌 것은?', ['앱을 열기 전에 시간제한 정하기', '생각이 다른 사람도 팔로우하기', '정보를 스스로 찾아보기', '추천 영상만 계속 보기'], 3, 'Set a time limit … Follow people with views different from yours … Search for information yourself'],
    ['글쓴이의 주장으로 알맞은 것은?', ['알고리즘을 쓰지 말아야 한다', '알고리즘은 도구일 뿐, 결정은 우리의 몫이다', '알고리즘은 늘 옳다', '개인 정보는 모두 공개해야 한다'], 1, 'An algorithm is a tool, not a master … That decision is still ours.']
  ]
};
