/* 중2 영어(동아·윤정미) Lesson 1 · The Future Is in Our Hands
   교과서 대조(2026-10): 의사소통 기능(희망 표현하기 · 안심시키기), 언어 형식(to부정사 형용사적 용법 · make + 목적어 + 형용사),
   읽기 주제(Live Freely and Happily Ever After! — 십대가 NGO 활동으로 동물을 자연으로 돌려보내는 블로그), 단원 어휘를 교과서 본문 어휘와 맞췄다.
   대화문·읽기 글은 저작권 때문에 교과서 원문을 싣지 않고, 같은 주제·같은 언어 형식·교과서 어휘로 새로 쓴 글이다. */
window.LESSON = {
  book: 'm2-donga', no: 1,
  title: 'The Future Is in Our Hands', ko: '미래는 우리 손에',
  bigQ: {en: 'What can teens do to make the world better?', ko: '십대는 세상을 더 낫게 만들기 위해 무엇을 할 수 있을까?'},
  align: {
    tb: {reading: 'Live Freely and Happily Ever After!', funcs: ['희망 표현하기', '안심시키기'], forms: ['to부정사 형용사적 용법 (chances to see)', 'make + 목적어 + 형용사'],
      note: '교과서 읽기는 제주에 사는 십대가 돌고래 보호 NGO에 가입해 해변 청소, 훈련 보조를 하고 수족관 돌고래를 바다로 돌려보내는 과정을 쓴 블로그. 여기 본문은 야생동물 구조 NGO가 다친 수리부엉이를 숲으로 돌려보내는 이야기로 새로 쓴 블로그다.'},
    std: {vocab: ['9영01-01', '9영02-01'], talk: ['9영01-05', '9영02-11'], grammar: ['9영02-02'], read1: ['9영01-04', '9영01-05'], read2: ['9영01-10', '9영02-04']},
    forms: ['To-Infinitive', 'Sentence Patterns']
  },
  goals: {
    vocab: ['봉사·동물 보호와 관련된 낱말 20개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 십대가 할 수 있는 봉사 활동을 한 문장으로 말할 수 있다.'],
    talk: ['상대가 잘되기를 바라는 마음을 표현할 수 있다. (I hope you ~.)', '걱정하는 상대를 안심시킬 수 있다. (Don’t worry. You’ll be all right.)'],
    grammar: ['명사 뒤의 to부정사로 “~할 (명사)”를 나타낼 수 있다.', 'make + 목적어 + 형용사로 “~를 …하게 만들다”를 말할 수 있다.'],
    read1: ['봉사 블로그를 읽고 글쓴이가 NGO에 가입한 까닭과 한 일을 파악할 수 있다.'],
    read2: ['동물이 자연으로 돌아가기까지의 과정을 정리하고, 내가 해 보고 싶은 봉사 계획을 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'Can teens change the world?', ko: '십대가 세상을 바꿀 수 있을까요?', note: '십대가 할 수 있는 일(봉사, 캠페인, 기부 등)을 모은다. 오늘 낱말은 그런 활동에 쓰는 말이라고 소개한다.'},
    words: [
      {w: 'NGO', pos: 'n.', ko: '비정부 기구 (시민 단체)', ic: '🤝', ex: 'She works with an NGO for animals.', exKo: '그녀는 동물을 위한 비정부 기구와 함께 일한다.'},
      {w: 'social', pos: 'adj.', ko: '사회의', ic: '🏙️', ex: 'We talked about social issues.', exKo: '우리는 사회 문제에 대해 이야기했다.'},
      {w: 'issue', pos: 'n.', ko: '문제, 쟁점', ic: '❗', ex: 'Plastic waste is a big issue.', exKo: '플라스틱 쓰레기는 큰 문제다.'},
      {w: 'volunteer', pos: 'n. / v.', ko: '자원봉사자; 자원봉사하다', ic: '🙋', ex: 'I volunteer at the center on Saturdays.', exKo: '나는 토요일마다 센터에서 봉사한다.'},
      {w: 'danger', pos: 'n.', ko: '위험', ic: '⚠️', ex: 'Many wild animals are in danger.', exKo: '많은 야생 동물이 위험에 처해 있다.'},
      {w: 'endangered', pos: 'adj.', ko: '멸종 위기에 처한', ic: '🦉', ex: 'This owl is an endangered animal.', exKo: '이 부엉이는 멸종 위기 동물이다.'},
      {w: 'protect', pos: 'v.', ko: '보호하다', ic: '🛡️', ex: 'We must protect wild birds.', exKo: '우리는 야생 조류를 보호해야 한다.'},
      {w: 'injured', pos: 'adj.', ko: '다친', ic: '🩹', ex: 'They found an injured owl.', exKo: '그들은 다친 부엉이를 발견했다.'},
      {w: 'various', pos: 'adj.', ko: '다양한', ic: '🎨', ex: 'The NGO does various activities.', exKo: '그 단체는 다양한 활동을 한다.'},
      {w: 'activity', pos: 'n.', ko: '활동', ic: '🏃', ex: 'Cleaning the forest is a fun activity.', exKo: '숲 청소는 즐거운 활동이다.'},
      {w: 'project', pos: 'n.', ko: '프로젝트, 계획', ic: '📁', ex: 'Our latest project is to free the owl.', exKo: '우리의 최근 프로젝트는 부엉이를 풀어 주는 것이다.'},
      {w: 'training', pos: 'n.', ko: '훈련', ic: '🎯', ex: 'The owl had flying training.', exKo: '부엉이는 비행 훈련을 받았다.'},
      {w: 'skill', pos: 'n.', ko: '기술, 능력', ic: '🛠️', ex: 'It needs hunting skills.', exKo: '그것은 사냥 기술이 필요하다.'},
      {w: 'survive', pos: 'v.', ko: '살아남다', ic: '🌱', ex: 'Animals need skills to survive.', exKo: '동물은 살아남을 기술이 필요하다.'},
      {w: 'wild', pos: 'n. / adj.', ko: '야생; 야생의', ic: '🌲', ex: 'It will live in the wild.', exKo: '그것은 야생에서 살 것이다.'},
      {w: 'chance', pos: 'n.', ko: '기회', ic: '🍀', ex: 'I had a chance to help.', exKo: '나는 도울 기회가 있었다.'},
      {w: 'errand', pos: 'n.', ko: '심부름', ic: '📦', ex: 'I ran some errands for the staff.', exKo: '나는 직원들을 위해 심부름을 했다.'},
      {w: 'ceremony', pos: 'n.', ko: '의식, 식', ic: '🎗️', ex: 'There was a small ceremony.', exKo: '작은 행사가 있었다.'},
      {w: 'emotional', pos: 'adj.', ko: '감정적인, 감동적인', ic: '🥹', ex: 'The ceremony made us emotional.', exKo: '그 행사는 우리를 뭉클하게 했다.'},
      {w: 'freely', pos: 'adv.', ko: '자유롭게', ic: '🕊️', ex: 'Fly freely, little owl!', exKo: '자유롭게 날아라, 작은 부엉이야!'}
    ],
    phrases: [
      {w: 'take part in', ko: '~에 참여하다', ex: 'I took part in a cleanup.', exKo: '나는 청소 활동에 참여했다.'},
      {w: 'run errands', ko: '심부름을 하다', ex: 'I ran errands at the center.', exKo: '나는 센터에서 심부름을 했다.'},
      {w: 'grow up', ko: '자라다', ex: 'I grew up near a forest.', exKo: '나는 숲 근처에서 자랐다.'},
      {w: 'at the same time', ko: '동시에', ex: 'I was sad and happy at the same time.', exKo: '나는 슬프면서 동시에 기뻤다.'},
      {w: 'I hope (that) ~.', ko: '~하기를 바라.', ex: 'I hope you have fun.', exKo: '즐거운 시간 보내길 바라.'},
      {w: 'You’ll be all right.', ko: '괜찮을 거야.', ex: 'Don’t worry. You’ll be all right.', exKo: '걱정 마. 괜찮을 거야.'}
    ],
    pairs: [
      {a: 'danger', b: 'endangered', rel: '위험 / 멸종 위기의'},
      {a: 'free', b: 'freely', rel: '형용사 / 부사'},
      {a: 'emotion', b: 'emotional', rel: '명사 / 형용사'},
      {a: 'survive', b: 'survival', rel: '동사 / 명사'}
    ],
    wrap: {en: 'Teens can ______. I want to take part in ______.', ko: '오늘 배운 낱말로 십대가 할 수 있는 봉사 활동 쓰기'}
  },

  talk: {
    hook: {en: 'What do you say to a friend before a big day?', ko: '중요한 날을 앞둔 친구에게 어떤 말을 해 주나요?', note: '“잘될 거야”, “걱정 마” 같은 말을 모은다. 희망을 표현하고 안심시키는 영어 표현으로 이어진다.'},
    speakers: {Inho: {voice: 1, pitch: 1}, Sujin: {voice: 0, pitch: 1.15}, Chris: {voice: 1, pitch: .95}, 'Ms. Park': {voice: 2, pitch: 1.05}, Dad: {voice: 2, pitch: .9}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '희망 표현하기',
        key: {q: ['I’m going to ~.', 'I have ~ tomorrow.'], a: ['I hope you have a great time.', 'I hope you do your best.', 'I hope it goes well.']},
        note: 'I hope (that) + 주어 + 동사로 상대가 잘되기를 바란다. hope 뒤에는 주로 현재형이나 will을 쓴다.',
        dialogs: [
          { title: 'Dialogue A', setting: '금요일 방과 후, 교문 앞', lines: [
            {s: 'Sujin', en: 'I hear you’re going to volunteer at the animal center this weekend.', ko: '이번 주말에 동물 센터에서 봉사한다며.'},
            {s: 'Inho', en: 'Yes. It’s my first time. I’m so excited.', ko: '응. 처음이야. 정말 신나.'},
            {s: 'Sujin', en: '{{I hope you have}} a great time there.', ko: '거기서 즐거운 시간 보내길 바라.'},
            {s: 'Inho', en: 'Thanks. {{I hope}} I can help the animals a lot.', ko: '고마워. 동물들을 많이 도울 수 있으면 좋겠어.'}
          ]},
          { title: 'Dialogue B', setting: '토요일 아침, 공원 입구', lines: [
            {s: 'A', en: 'Today I’m running a 10K race for the first time.', ko: '오늘 처음으로 10킬로미터 달리기를 해.'},
            {s: 'B', en: 'Wow! {{I hope you do your best}}.', ko: '와! 최선을 다하길 바라.'},
            {s: 'A', en: 'The money from the race will go to an NGO for kids.', ko: '이 대회 참가비는 어린이를 위한 NGO에 기부돼.'},
            {s: 'B', en: 'That’s great. {{I hope it goes well}}!', ko: '멋지다. 잘되길 바라!'}
          ]}
        ],
        check: [
          {q: 'Where will Inho volunteer this weekend?', a: 'At the animal center.'},
          {q: 'What does Sujin hope?', a: 'She hopes Inho has a great time there.'},
          {q: 'Where will the money from the race go?', a: 'To an NGO for kids.'}
        ],
        drill: {frame: ['A: I have a ____ tomorrow.', 'B: I hope you do your best!'], opts: ['math test', 'soccer game', 'piano contest', 'speech', 'job interview', 'dance show']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '안심시키기',
        key: {q: ['I’m worried about ~.', 'I’m a little nervous.'], a: ['Don’t worry. You’ll do all right.', 'You’ll be fine.', 'Everything will be OK.']},
        note: '걱정하는 상대에게 Don’t worry.로 먼저 말하고, You’ll be all right. / You’ll do well.처럼 will로 앞일을 안심시킨다.',
        dialogs: [
          { title: 'Dialogue A', setting: '새 학기 첫날, 교무실 앞', lines: [
            {s: 'Ms. Park', en: 'How’s it going, Chris?', ko: '크리스, 잘 지내니?'},
            {s: 'Chris', en: 'Good, but {{I’m a little nervous}}. I don’t know anyone here.', ko: '좋아요, 그런데 조금 긴장돼요. 여기 아는 사람이 없어요.'},
            {s: 'Ms. Park', en: '{{Don’t worry. You’ll be all right}}. I hope you make lots of friends soon.', ko: '걱정 마. 괜찮을 거야. 곧 친구를 많이 사귀길 바란다.'},
            {s: 'Chris', en: 'Thank you, Ms. Park.', ko: '감사합니다, 박 선생님.'}
          ]},
          { title: 'Dialogue B', setting: '공항, 반려견 이동장 앞', lines: [
            {s: 'Inho', en: 'Dad, {{I’m worried about}} Bori. It’s his first time on an airplane.', ko: '아빠, 보리가 걱정돼요. 비행기를 처음 타잖아요.'},
            {s: 'Dad', en: '{{Don’t worry}}. It’s a short flight.', ko: '걱정 마. 짧은 비행이야.'},
            {s: 'Inho', en: 'But he’ll be alone in the dark.', ko: '그래도 어두운 데 혼자 있잖아요.'},
            {s: 'Dad', en: 'His favorite blanket is with him. {{He’ll be fine}}.', ko: '보리가 제일 좋아하는 담요가 같이 있어. 괜찮을 거야.'}
          ]}
        ],
        check: [
          {q: 'Why is Chris nervous?', a: 'He doesn’t know anyone (at the new school).'},
          {q: 'What does Ms. Park hope?', a: 'She hopes Chris makes lots of friends soon.'},
          {q: 'Why is Inho worried about Bori?', a: 'It’s Bori’s first time on an airplane.'}
        ],
        drill: {frame: ['A: I’m worried about ____.', 'B: Don’t worry. You’ll be all right.'], opts: ['my test', 'the race', 'my speech', 'my new school', 'the interview', 'my first lesson']}
      }
    ],
    interviewEx: 'Minji is worried about her piano contest. I said, “Don’t worry. I hope you do your best!”',
    watch: {
      label: 'Let’s Watch', title: 'My First Day as a Volunteer', setting: '야생동물 구조 센터. 인호가 첫 봉사 날 직원 박 선생님을 만난다.',
      lines: [
        {s: 'Ms. Park', en: 'Welcome, Inho! Today you’ll help us feed the birds.', ko: '환영해요, 인호! 오늘은 새들 먹이 주는 일을 도와줄 거예요.'},
        {s: 'Inho', en: 'I’m a little worried. I don’t have any experience.', ko: '조금 걱정돼요. 경험이 전혀 없어서요.'},
        {s: 'Ms. Park', en: 'Don’t worry. You’ll do all right. I’ll show you everything.', ko: '걱정 마요. 잘할 거예요. 제가 다 알려 줄게요.'},
        {s: 'Inho', en: 'Thank you. I hope the injured owl gets better soon.', ko: '감사해요. 다친 부엉이가 빨리 나으면 좋겠어요.'},
        {s: 'Ms. Park', en: 'Me, too. She is getting stronger every day.', ko: '저도요. 날마다 튼튼해지고 있어요.'}
      ],
      check: [
        {q: 'What will Inho do today?', a: 'He will help feed the birds.'},
        {q: 'Why is Inho worried?', a: 'He doesn’t have any experience.'},
        {q: 'What does Inho hope?', a: 'He hopes the injured owl gets better soon.'}
      ]
    },
    wrap: {en: 'Tell your partner about a worry. Your partner reassures you and gives a wish with “I hope ~.”', ko: '걱정거리를 말하고, 짝은 안심시키며 “I hope ~.”로 바람을 말해 주기'}
  },

  grammar: {
    cover: 'to ~ · make A B',
    hook: {en: 'I had many chances {{to see}} owls.  /  The ceremony {{made}} us {{emotional}}.', ko: 'to see는 어떤 말을 꾸밀까? made 뒤의 us와 emotional은 어떤 관계일까?', answer: 'to see → chances를 꾸밈(볼 기회) / made us emotional → 우리가(us) 뭉클해지게(emotional) 만들었다', note: '교과서 언어 형식(I had many chances to see dolphins. / The ceremony made us emotional.)과 같은 짜임이다.'},
    points: [
      { id: 'g1', name: 'to부정사 (형용사적 용법)', short: 'to부정사 (형용사적)', form: '명사 + to + 동사원형', meaning: '~할 (명사), ~하는 (명사)',
        notice: [
          {en: 'I had many chances {{to see}} wild birds.', ko: '나는 야생 조류를 볼 기회가 많았다.'},
          {en: 'Owls need skills {{to survive}} in the wild.', ko: '부엉이는 야생에서 살아남을 기술이 필요하다.'},
          {en: 'It is a great way {{to learn}} about social issues.', ko: '그것은 사회 문제에 대해 배우는 좋은 방법이다.'}
        ],
        rule: [
          {k: '자리', v: '꾸미는 명사 바로 뒤에 to + 동사원형', ex: 'something to eat, time to go, a way to help'},
          {k: '전치사', v: '“명사 + 전치사”가 필요한 동사는 전치사를 남긴다', ex: 'a friend to talk with / a chair to sit on'},
          {k: '-thing', v: '-thing + 형용사 + to부정사', ex: 'something important to do'}
        ],
        compare: {
          title: '같은 to부정사, 다른 역할', note: '명사 뒤 → 형용사(~할), 동사 뒤 → 명사(~하는 것), 완전한 문장 뒤 → 부사(~하기 위해).',
          head: ['명사적', '형용사적', '부사적 (목적)'],
          cols: [['I want to help.', '(돕기를 원한다)'], ['I had a chance to help.', '(도울 기회)'], ['I went there to help.', '(돕기 위해 갔다)']]
        },
        check: [
          {q: 'I had a chance ____ the owl. (feed)', a: 'to feed'},
          {q: 'Animals need skills ____ in the wild. (survive)', a: 'to survive'},
          {q: 'It’s a good way ____ the world better. (make)', a: 'to make'},
          {q: 'I need a friend to talk ____. (전치사)', a: 'with'},
          {q: 'There are many things ____ for animals. (do)', a: 'to do'}
        ],
        trap: {bad: 'I had a chance seeing owls.', good: 'I had a chance to see owls.', why: '명사(chance)를 꾸밀 때는 to + 동사원형.'},
        scramble: [
          {ko: '나는 부엉이를 볼 기회가 있었다.', en: 'I had a chance to see owls.'},
          {ko: '동물들은 살아남을 기술이 필요하다.', en: 'Animals need skills to survive.'},
          {ko: '그것은 배우는 좋은 방법이다.', en: 'It is a good way to learn.'}
        ]
      },
      { id: 'g2', name: 'make + 목적어 + 형용사', short: 'make A + 형용사', form: 'make / keep / find + 목적어 + 형용사', meaning: '~를 …하게 만들다',
        notice: [
          {en: 'The ceremony {{made us emotional}}.', ko: '그 행사는 우리를 뭉클하게 했다.'},
          {en: 'The experience {{made me excited}}.', ko: '그 경험은 나를 신나게 했다.'},
          {en: 'Plastic waste {{makes the sea dirty}}.', ko: '플라스틱 쓰레기는 바다를 더럽게 만든다.'}
        ],
        rule: [
          {k: '관계', v: '목적어와 형용사 사이에 “A는 B다”가 성립한다 (us = emotional)', ex: 'The news made her sad. (she was sad)'},
          {k: '형용사', v: '목적어 뒤에는 부사가 아니라 형용사 (made us happily ✗)', ex: 'Music makes me happy.'},
          {k: '같은 짜임', v: 'keep + 목적어 + 형용사 (~를 …하게 유지하다)', ex: 'Keep the beach clean.'}
        ],
        check: [
          {q: 'The news made me ____. (sad)', a: 'sad'},
          {q: 'The volunteers keep the forest ____. (clean)', a: 'clean'},
          {q: 'The owl made the children ____. (happy)', a: 'happy'},
          {q: 'Fishing nets make the sea ____. (dangerous)', a: 'dangerous'},
          {q: 'The ceremony made ____ emotional. (we)', a: 'us'}
        ],
        trap: {bad: 'The ceremony made us emotionally.', good: 'The ceremony made us emotional.', why: 'make + 목적어 뒤에는 형용사. 목적어의 상태를 말해 주기 때문.'},
        scramble: [
          {ko: '그 행사는 우리를 뭉클하게 했다.', en: 'The ceremony made us emotional.'},
          {ko: '그 경험은 나를 신나게 했다.', en: 'The experience made me excited.'},
          {ko: '숲을 깨끗하게 유지해라.', en: 'Keep the forest clean.'}
        ]
      }
    ],
    wrap: {en: 'I had a chance to ______. It made me ______.', ko: '봉사나 특별한 경험에서 얻은 기회(to부정사)와 그 경험이 준 감정(make + 목적어 + 형용사) 쓰기'},
    wrapEx: 'I had a chance to plant trees with my club. It made me proud.'
  },

  reading: {
    title: 'Fly Freely, Little Owl!', kind: '십대 봉사 블로그', cover: 'Wings', coverKo: '날개를 되찾은 부엉이', cover2: 'Freely', coverKo2: '숲으로 돌아가다',
    before: [
      {q: 'Look at the title. What will happen to the owl?', a: '자유롭게 날아간다 (자연으로 돌아간다)'},
      {q: 'How can teens work with NGOs?', a: '봉사, 캠페인, 모금, 청소 활동 등'}
    ],
    gloss: {'wildlife rescue center': '야생동물 구조 센터', 'Eurasian eagle-owl': '수리부엉이', 'wing': '날개', 'glass wall': '유리벽', 'cage': '우리', 'mouse': '쥐', 'release': '풀어 줌, 방사', 'staff': '직원'},
    paras: [
      {who: 'Mar 3', en: 'I grew up near a mountain, so I had many chances to see wild birds. Then I learned that many of them are in danger. Some, like the Eurasian eagle-owl, are even endangered. I wanted to do something, so I joined an NGO, Wings for Wildlife. It does various activities to protect wild animals.',
       ko: '나는 산 근처에서 자라서 야생 조류를 볼 기회가 많았다. 그러다 그중 많은 새가 위험에 처해 있다는 것을 알게 되었다. 수리부엉이처럼 멸종 위기에 처한 새도 있다. 무언가 하고 싶어서 나는 ‘야생을 위한 날개’라는 NGO에 가입했다. 이 단체는 야생 동물을 보호하기 위해 다양한 활동을 한다.',
       check: {q: 'Why did the writer join the NGO?', a: 'He learned that many wild birds are in danger and wanted to do something.'}, think: '내가 사는 곳 근처의 위험에 처한 동물은?'},
      {who: 'Mar 18', en: 'Today I visited the wildlife rescue center for the first time. There was an injured owl. She hit a glass wall and hurt her wing. The staff named her Bam. I just ran some errands, but seeing Bam made me sad and hopeful at the same time.',
       ko: '오늘 처음으로 야생동물 구조 센터에 갔다. 다친 부엉이가 한 마리 있었다. 유리벽에 부딪혀 날개를 다쳤다. 직원들은 그 부엉이에게 ‘밤’이라는 이름을 지어 주었다. 나는 심부름만 몇 가지 했지만, 밤을 보니 슬프면서 동시에 희망이 생겼다.',
       check: {q: 'How did Bam get hurt?', a: 'She hit a glass wall (and hurt her wing).'}, think: '유리벽 때문에 새가 다치지 않게 하려면?'},
      {who: 'Apr 9', en: 'Bam is getting better. The latest project of our center is to return her to the forest. But first, she needs some skills to survive in the wild. Today she had flying training in a big cage. When she flew from one end to the other, everyone cheered.',
       ko: '밤이 나아지고 있다. 우리 센터의 최근 프로젝트는 밤을 숲으로 돌려보내는 것이다. 하지만 먼저 밤은 야생에서 살아남을 기술이 필요하다. 오늘 밤은 커다란 우리에서 비행 훈련을 했다. 한쪽 끝에서 다른 쪽 끝까지 날았을 때 모두 환호했다.',
       check: {q: 'What is the latest project of the center?', a: 'To return Bam to the forest.'}, think: '야생에서 살아남으려면 어떤 기술이 필요할까?'},
      {who: 'May 2', en: 'Today Bam learned to catch food on her own. At first, she missed again and again. But she didn’t give up, and finally she caught a mouse! The staff said, “She is ready.” Hearing that made me excited.',
       ko: '오늘 밤은 혼자 먹이를 잡는 법을 배웠다. 처음에는 계속 놓쳤다. 하지만 포기하지 않았고 마침내 쥐 한 마리를 잡았다! 직원들이 말했다. “이제 준비됐어요.” 그 말을 들으니 나는 신이 났다.',
       check: {q: 'What did Bam finally catch?', a: 'A mouse.'}, think: '밤이 포기하지 않은 모습에서 무엇을 배울 수 있을까?'},
      {who: 'May 20', en: 'Today Bam went back to the forest. There was a small release ceremony, and all the members were there. The ceremony made us quite emotional. When she flew away, I cried a little. I can’t see Bam anymore, but now the whole forest is her home. “Fly freely, little owl!” I shouted.',
       ko: '오늘 밤이 숲으로 돌아갔다. 작은 방사 행사가 있었고 회원 모두가 그 자리에 있었다. 그 행사는 우리를 꽤 뭉클하게 했다. 밤이 날아갈 때 나는 조금 울었다. 이제 밤을 볼 수 없지만, 이제 숲 전체가 밤의 집이다. “자유롭게 날아라, 작은 부엉이야!” 나는 외쳤다.',
       check: {q: 'How did the members feel at the ceremony?', a: 'They felt quite emotional.'}, think: '헤어지는데도 기쁜 까닭은?'},
      {who: 'You', en: 'You can take part in NGO activities as a teenager. It is a great way to learn about social issues and to make the world better. The future is in our hands. What do you want to do?',
       ko: '여러분도 십대로서 NGO 활동에 참여할 수 있다. 그것은 사회 문제에 대해 배우고 세상을 더 낫게 만드는 좋은 방법이다. 미래는 우리 손에 있다. 여러분은 무엇을 하고 싶나요?',
       check: {q: 'What is a great way to learn about social issues?', a: 'Taking part in NGO activities.'}, think: '내가 참여하고 싶은 활동은?'}
    ],
    split: 3,
    next: '밤은 야생에서 살아남을\n준비가 되었을까?',
    recap: {q: '글쓴이는 왜 NGO에 가입했고, 밤은 어떻게 다쳤을까?', items: [{k: 'WHY JOIN', v: 'many wild birds are in danger · wanted to do something'}, {k: 'BAM', v: 'hit a glass wall · hurt her wing · flying training'}]},
    tf: [
      {p: 0, s: 'The writer grew up near the sea.', a: false, why: 'I grew up near a mountain.'},
      {p: 1, s: 'The writer did a lot of important work on the first day.', a: false, why: 'I just ran some errands.'},
      {p: 2, s: 'Bam had flying training in a big cage.', a: true},
      {p: 3, s: 'Bam caught a mouse on her first try.', a: false, why: 'At first, she missed again and again.'},
      {p: 4, s: 'The writer cried a little at the ceremony.', a: true},
      {p: 5, s: 'Teens can take part in NGO activities.', a: true}
    ],
    key: [
      {en: 'I had many chances {{to see}} wild birds.', note: '명사 + to부정사 (볼 기회)', g: 'g1'},
      {en: 'Seeing Bam {{made me sad and hopeful}} at the same time.', note: 'make + 목적어 + 형용사', g: 'g2'},
      {en: 'She needs some skills {{to survive}} in the wild.', note: '명사 + to부정사 (살아남을 기술)', g: 'g1'},
      {en: 'Hearing that {{made me excited}}.', note: 'make + 목적어 + 형용사', g: 'g2'},
      {en: 'The ceremony {{made us quite emotional}}.', note: 'make + 목적어 + 형용사', g: 'g2'},
      {en: 'It is a great way {{to learn}} about social issues.', note: '명사 + to부정사 (배우는 방법)', g: 'g1'}
    ],
    summary: {text: 'The writer joined an {{NGO}} to protect wild animals. At the rescue center, he met Bam, an {{injured}} owl. Bam needed skills to {{survive}} in the wild, so she had flying {{training}}. At the release {{ceremony}}, everyone felt {{emotional}}, and Bam flew freely into the forest.'},
    order: ['Bam hit a glass wall.', 'She had flying training.', 'She caught a mouse on her own.', 'She went back to the forest.'],
    chart: {title: 'BAM’S JOURNEY', ko: '밤이 숲으로 돌아가기까지', cols: ['What happened', 'How the writer felt'], note: '표를 보고 It made me + 형용사. 문장으로 말하게 한다.', rows: [
      {name: 'Mar 18', cells: ['met injured Bam', 'sad and hopeful']},
      {name: 'Apr 9', cells: ['flying training', 'everyone cheered']},
      {name: 'May 2', cells: ['caught a mouse', 'excited']},
      {name: 'May 20', cells: ['release ceremony', 'emotional, happy']}
    ]},
    wrap: {en: 'I want to ______. It’s a great way to ______.', ko: '관통 질문으로 돌아가기: 내가 해 보고 싶은 봉사 활동과 그 의미 쓰기'}
  },

  quiz: [
    ['“멸종 위기에 처한”을 뜻하는 낱말은?', ['injured', 'endangered', 'various', 'emotional'], 1, 'endangered: 멸종 위기에 처한'],
    ['“심부름”을 뜻하는 낱말은?', ['errand', 'issue', 'project', 'ceremony'], 0, 'errand: 심부름 (run errands 심부름을 하다)'],
    ['“I took part ___ a cleanup.”', ['on', 'in', 'at', 'for'], 1, 'take part in: ~에 참여하다'],
    ['희망을 표현하는 말은?', ['I hope you have fun.', 'Don’t worry.', 'May I go?', 'How often do you go?'], 0, 'I hope ~.'],
    ['걱정하는 친구를 안심시키는 말은?', ['I’m worried.', 'You’ll be all right.', 'I hope so.', 'What’s wrong?'], 1, 'Don’t worry. You’ll be all right.'],
    ['“I’m worried about my test.”에 알맞은 응답은?', ['I’m happy for you.', 'Don’t worry. You’ll do well.', 'Congratulations!', 'Yes, I do.'], 1, '안심시키기'],
    ['Let’s Watch에서 인호가 걱정한 까닭은?', ['새가 무서워서', '경험이 없어서', '늦어서', '아파서'], 1, 'I don’t have any experience.'],
    ['빈칸에 알맞은 것은? “I had a chance ___ owls.”', ['see', 'seeing', 'to see', 'saw'], 2, '명사 + to부정사'],
    ['빈칸에 알맞은 것은? “The ceremony made us ___.”', ['emotion', 'emotional', 'emotionally', 'to emotional'], 1, 'make + 목적어 + 형용사'],
    ['어법상 틀린 문장은?', ['Music makes me happy.', 'I need a chair to sit on.', 'The news made her sadly.', 'Keep the beach clean.'], 2, 'The news made her sad.'],
    ['밑줄 친 to부정사의 쓰임이 다른 것은?', ['skills to survive', 'a way to learn', 'chances to see', 'I want to help'], 3, 'want to help는 목적어(명사적), 나머지는 명사를 꾸미는 형용사적'],
    ['밤이 다친 까닭은?', ['덫에 걸려서', '유리벽에 부딪혀서', '다른 새와 싸워서', '먹이를 못 찾아서'], 1, 'She hit a glass wall and hurt her wing.'],
    ['센터의 최근 프로젝트는?', ['새 건물 짓기', '밤을 숲으로 돌려보내기', '쥐 잡기', '유리벽 청소하기'], 1, 'to return her to the forest'],
    ['방사 행사에서 글쓴이가 한 일은?', ['밤에게 먹이를 주었다', '조금 울고 소리쳤다', '사진만 찍었다', '집에 일찍 갔다'], 1, 'I cried a little… I shouted.'],
    ['글의 요지로 알맞은 것은?', ['부엉이는 위험하다', '십대도 NGO 활동으로 세상을 바꿀 수 있다', '유리벽을 없애자', '야생 동물은 우리에서 살아야 한다'], 1, 'It is a great way to learn about social issues and to make the world better.']
  ]
};

/* ── 보강: 원리 중심 문법 · 모션 그래픽 · 낱말 만들기 · 발음 기호 ── */
(function (L) {
  const ipa = {NGO: '/ˌen dʒiː ˈoʊ/', social: '/ˈsoʊʃl/', issue: '/ˈɪʃuː/', volunteer: '/ˌvɑːlənˈtɪr/', danger: '/ˈdeɪndʒər/', endangered: '/ɪnˈdeɪndʒərd/', protect: '/prəˈtekt/', injured: '/ˈɪndʒərd/', various: '/ˈveriəs/', activity: '/ækˈtɪvəti/', project: '/ˈprɑːdʒekt/', training: '/ˈtreɪnɪŋ/', skill: '/skɪl/', survive: '/sərˈvaɪv/', wild: '/waɪld/', chance: '/tʃæns/', errand: '/ˈerənd/', ceremony: '/ˈserəmoʊni/', emotional: '/ɪˈmoʊʃənl/', freely: '/ˈfriːli/'};
  L.vocab.words.forEach(w => { if (ipa[w.w]) w.ipa = ipa[w.w]; });
  L.vocab.morph = [
    {w: 'endangered', ko: '멸종 위기에 처한', parts: [{t: 'en', k: 'pre', m: '~에 넣다, ~하게 하다'}, {t: 'danger', k: 'root', m: '위험'}, {t: 'ed', k: 'suf', m: '~된 (형용사)'}], family: ['danger', 'dangerous', 'encourage'], note: '위험(danger) 속에 놓인(en-) 상태(-ed) → 멸종 위기에 처한.'},
    {w: 'survive', ko: '살아남다', parts: [{t: 'sur', k: 'pre', m: '넘어서'}, {t: 'vive', k: 'root', m: '살다'}], family: ['survival', 'vivid', 'revive'], note: '(위험을) 넘어서(sur) 살다(vive) → 살아남다. 명사는 survival.'},
    {w: 'emotional', ko: '감정적인, 뭉클한', parts: [{t: 'emotion', k: 'root', m: '감정'}, {t: 'al', k: 'suf', m: '~의, ~한 (형용사)'}], family: ['natural', 'national', 'personal'], note: '명사 + -al = 형용사 (nation → national).'}
  ];
  const [g1, g2] = L.grammar.points;
  g1.principle = {
    q: 'to부정사는 어떻게 명사를 꾸밀까?',
    pic: [{en: 'chances', ko: '명사'}, {en: 'to see', ko: '앞으로 볼 (to = 앞으로)', hot: true}],
    core: '명사 뒤에 to + 동사원형을 붙이면 “~할 (명사)”라는 뜻으로 그 명사를 꾸민다. to가 “앞으로 할 일”을 가리키기 때문이다.',
    why: ['명사 + to + 동사원형 = ~할 명사 (something to eat = 먹을 것).', '형용사와 달리 명사 뒤에서 꾸민다.', '동사 뒤에 전치사가 필요하면 그대로 둔다 (a friend to talk with).']
  };
  g1.anim = [{title: '명사 뒤에 to부정사를 붙이면', states: [
    {t: 'I/S | had | many chances/O#m | . | / | I/S#i2 | could see/V#sp | owls | .', note: '두 문장', ko: '나는 기회가 많았다. 나는 부엉이를 볼 수 있었다.'},
    {t: 'I/S | had | many chances/O#m | to see/X#sp | owls | .', note: '명사 + to + 동사원형 = ~할 명사', ko: '나는 부엉이를 볼 기회가 많았다.'}]}];
  g1.contrast = {title: '명사를 꾸미는 to부정사', pairs: [
    {a: 'I need {{something to eat}}.', ka: '나는 먹을 것이 필요하다.', b: 'I need {{a friend to talk with}}.', kb: '나는 이야기 나눌 친구가 필요하다. (talk with a friend → with 남음)'}],
    point: '명사 + to + 동사원형 = ~할 (명사). 전치사가 필요하면 끝에 남긴다.'};
  g2.principle = {
    q: 'make 뒤에 왜 목적어와 형용사가 나란히 올까?',
    pic: [{en: 'The ceremony made', ko: '만들었다'}, {en: 'us', ko: '누구를 (목적어)'}, {en: 'emotional', ko: '어떤 상태로 (형용사)', hot: true}],
    core: 'make A B(형용사)는 “A를 B인 상태로 만들다”이다. 목적어 하나만으로는 뜻이 끝나지 않아서, 그 목적어가 어떤 상태가 되었는지를 형용사가 채워 준다. 목적어와 형용사 사이에는 “A는 B다”가 숨어 있다.',
    why: ['us = emotional처럼 목적어와 형용사가 짝을 이룬다.', '상태를 말하므로 부사(emotionally)가 아니라 형용사.', 'keep, find, leave도 같은 짜임 (Keep the forest clean).']
  };
  g2.anim = [{title: '두 문장 → make + 목적어 + 형용사', states: [
    {t: 'We/S#us | became/V | emotional/C#c | . | / | The ceremony/S#cer | caused/V | it | .', note: '결과(우리가 뭉클해짐) + 원인(행사)', ko: '우리는 뭉클해졌다. 그 행사가 그렇게 했다.'},
    {t: 'The ceremony/S#cer | made/X | us/O#us | emotional/C#c | .', note: '원인이 주어로, 결과가 목적어 + 형용사로', ko: '그 행사는 우리를 뭉클하게 했다.'}]}];
  g2.contrast = {title: '형용사? 부사?', pairs: [
    {a: 'The news made her {{sad}}.', ka: '그 소식은 그녀를 슬프게 했다. (목적어의 상태 → 형용사)', b: 'She told the news {{sadly}}.', kb: '그녀는 그 소식을 슬프게 전했다. (동작을 꾸밈 → 부사)'}],
    point: 'make + 목적어 뒤에는 목적어의 상태를 말하는 형용사.'};
})(window.LESSON);
