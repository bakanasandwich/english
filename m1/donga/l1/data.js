/* 중1 영어(동아·윤정미) Lesson 1 · Happy Together
   교과서 대조(2026-10): 의사소통 기능(인사하고 답하기 · 좋아하는 것 묻고 답하기), 언어 형식(be동사 · 일반동사 현재형),
   읽기 주제(Who Is in Your Heart? — 내 마음속 소중한 존재), 단원 어휘를 교과서 목차·단어 목록과 맞췄다.
   대화문·읽기 글은 저작권 때문에 교과서 원문을 싣지 않고, 같은 주제·같은 언어 형식·교과서 어휘로 새로 쓴 글이다. */
window.LESSON = {
  book: 'm1-donga', no: 1,
  title: 'Happy Together', ko: '함께라서 행복해',
  bigQ: {en: 'Who is special to you, and why?', ko: '나에게 소중한 존재는 누구이고, 왜 소중할까?'},
  align: {
    tb: {reading: 'Who Is in Your Heart?', funcs: ['인사하고 답하기', '좋아하는 것 묻고 답하기'], forms: ['be동사', '일반동사 현재형 (3인칭 단수 -s)'],
      note: '교과서 읽기는 세 사람이 마음속 소중한 존재(친구, 안내견, 이웃)를 소개하는 글. 여기 본문은 같은 짜임으로 새로 쓴 글이다.'},
    std: {vocab: ['9영01-01', '9영02-01'], talk: ['9영01-02', '9영02-11'], grammar: ['9영02-03'], read1: ['9영01-02', '9영01-03'], read2: ['9영01-05', '9영02-08']},
    forms: ['Tenses']
  },
  goals: {
    vocab: ['사람·학교생활과 관련된 낱말 20개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 나에게 소중한 사람을 한 문장으로 소개할 수 있다.'],
    talk: ['안부를 묻고 답할 수 있다. (How’s it going? — Pretty good.)', '좋아하는 것을 묻고 답할 수 있다. (What’s your favorite ~? — It’s ~.)'],
    grammar: ['be동사(am, are, is)를 주어에 맞게 쓸 수 있다.', '일반동사의 현재형(3인칭 단수 -s)을 바르게 쓸 수 있다.'],
    read1: ['소중한 존재를 소개하는 글을 읽고 누가 왜 소중한지 파악할 수 있다.'],
    read2: ['세 사람의 소중한 존재를 비교하고, 나에게 소중한 사람을 소개하는 글을 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'Who makes you happy every day?', ko: '날마다 나를 행복하게 해 주는 사람(동물)은 누구인가요?', note: '가족, 친구, 반려동물, 이웃 등 답을 모은다. 오늘 낱말로 그 존재를 소개하는 것이 목표라고 말한다.'},
    words: [
      {w: 'subject', pos: 'n.', ko: '과목', ic: '📚', ex: 'Science is my favorite subject.', exKo: '과학은 내가 가장 좋아하는 과목이다.'},
      {w: 'person', pos: 'n.', ko: '사람', ic: '🧍', ex: 'She is a kind person.', exKo: '그녀는 친절한 사람이다.'},
      {w: 'each', pos: 'det.', ko: '각각의', ic: '☝️', ex: 'Each student has a locker.', exKo: '학생마다 사물함이 하나씩 있다.'},
      {w: 'band', pos: 'n.', ko: '밴드, 악단', ic: '🎸', ex: 'We are in the school band.', exKo: '우리는 학교 밴드 단원이다.'},
      {w: 'practice', pos: 'v.', ko: '연습하다', ic: '🔁', ex: 'We practice every Friday.', exKo: '우리는 금요일마다 연습한다.'},
      {w: 'keyboard', pos: 'n.', ko: '건반 악기, 키보드', ic: '🎹', ex: 'I play the keyboard in the band.', exKo: '나는 밴드에서 키보드를 연주한다.'},
      {w: 'pop', pos: 'n.', ko: '대중음악, 팝', ic: '🎤', ex: 'She sings pop songs very well.', exKo: '그녀는 팝송을 아주 잘 부른다.'},
      {w: 'laugh', pos: 'v.', ko: '웃다', ic: '😂', ex: 'We laugh a lot together.', exKo: '우리는 함께 많이 웃는다.'},
      {w: 'special', pos: 'adj.', ko: '특별한, 소중한', ic: '🌟', ex: 'My grandma is special to me.', exKo: '할머니는 나에게 소중한 분이다.'},
      {w: 'guide', pos: 'n.', ko: '안내인, 안내하는 것', ic: '🦮', ex: 'The dog is his guide.', exKo: '그 개는 그의 안내자이다.'},
      {w: 'hearing', pos: 'n.', ko: '청각, 듣기', ic: '👂', ex: 'He has poor hearing.', exKo: '그는 청력이 좋지 않다.'},
      {w: 'even', pos: 'adv.', ko: '~도, 심지어', ic: '❗', ex: 'She even comes to school with me.', exKo: '그녀는 심지어 나와 학교에도 같이 간다.'},
      {w: 'gym', pos: 'n.', ko: '체육관', ic: '🏀', ex: 'We play basketball in the gym.', exKo: '우리는 체육관에서 농구를 한다.'},
      {w: 'match', pos: 'n.', ko: '경기, 시합', ic: '🏆', ex: 'We have a big match today.', exKo: '오늘 우리는 큰 시합이 있다.'},
      {w: 'neighbor', pos: 'n.', ko: '이웃', ic: '🏘️', ex: 'Mr. Oh is my neighbor.', exKo: '오 할아버지는 우리 이웃이다.'},
      {w: 'nod', pos: 'v.', ko: '(고개를) 끄덕이다', ic: '🙂', ex: 'He just nods and smiles.', exKo: '그는 그냥 고개를 끄덕이고 미소 짓는다.'},
      {w: 'tulip', pos: 'n.', ko: '튤립', ic: '🌷', ex: 'Tulips are my favorite flower.', exKo: '튤립은 내가 가장 좋아하는 꽃이다.'},
      {w: 'memo', pos: 'n.', ko: '메모', ic: '📝', ex: 'She leaves a memo on my door.', exKo: '그녀는 우리 집 문에 메모를 남긴다.'},
      {w: 'magic', pos: 'n.', ko: '마법', ic: '🪄', ex: 'I feel better, like magic.', exKo: '마법처럼 기분이 나아진다.'},
      {w: 'wide', pos: 'adj.', ko: '넓은', ic: '↔️', ex: 'The park has a wide field.', exKo: '그 공원에는 넓은 들판이 있다.'}
    ],
    phrases: [
      {w: 'all the time', ko: '늘, 항상', ex: 'We laugh all the time.', exKo: '우리는 늘 웃는다.'},
      {w: 'by one’s side', ko: '~의 곁에', ex: 'My dog is always by my side.', exKo: '우리 개는 늘 내 곁에 있다.'},
      {w: 'How’s it going?', ko: '잘 지내?', ex: 'Hi, Jun. How’s it going?', exKo: '안녕, 준. 잘 지내?'},
      {w: 'be good at', ko: '~을 잘하다', ex: 'She is good at singing.', exKo: '그녀는 노래를 잘한다.'},
      {w: 'feel at home', ko: '편안하게 느끼다', ex: 'I feel at home with my neighbor.', exKo: '나는 이웃과 있으면 편안하다.'},
      {w: 'have fun', ko: '즐겁게 지내다', ex: 'We have fun together.', exKo: '우리는 함께 즐겁게 지낸다.'}
    ],
    pairs: [
      {a: 'laugh', b: 'cry', rel: '반대말'},
      {a: 'wide', b: 'narrow', rel: '반대말'},
      {a: 'hear', b: 'hearing', rel: '동사 / 명사'},
      {a: 'neighbor', b: 'neighborhood', rel: '이웃 / 동네'}
    ],
    wrap: {en: '______ is special to me. He/She ______ all the time.', ko: '오늘 배운 낱말로 나에게 소중한 존재를 소개하는 두 문장 쓰기'}
  },

  talk: {
    hook: {en: 'How do you greet your friends in the morning?', ko: '아침에 친구에게 어떻게 인사하나요?', note: '“안녕, 잘 지냈어?”처럼 안부를 묻는 말을 모은 뒤, 영어로는 How’s it going?이라고 묻는다는 것을 소개한다.'},
    speakers: {Yuna: {voice: 0, pitch: 1.15}, Ben: {voice: 1, pitch: 1}, Jisu: {voice: 0, pitch: 1.1}, Max: {voice: 1, pitch: .95}, 'Mr. Choi': {voice: 2, pitch: .95}, Sora: {voice: 0, pitch: 1.1}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '인사하고 답하기',
        key: {q: ['How’s it going?', 'How are you doing?', 'What’s up?'], a: ['Pretty good. / Not bad.', 'Great, thanks. And you?', 'Not much.']},
        note: 'How’s it going?은 친한 사이의 안부 인사. 대답은 Pretty good. / Not bad. / So-so. 끝에 thanks, 그리고 And you? / How about you?로 되묻는다.',
        dialogs: [
          { title: 'Dialogue A', setting: '월요일 아침, 교문 앞', lines: [
            {s: 'Yuna', en: 'Hi, Ben. {{How’s it going}}?', ko: '안녕, 벤. 잘 지내?'},
            {s: 'Ben', en: '{{Pretty good}}, thanks. {{How about you}}?', ko: '꽤 좋아, 고마워. 너는?'},
            {s: 'Yuna', en: '{{Not bad}}. Is that a new keyboard?', ko: '나쁘지 않아. 그거 새 키보드야?'},
            {s: 'Ben', en: 'Yes. I practice with the school band after school.', ko: '응. 방과 후에 학교 밴드랑 연습해.'},
            {s: 'Yuna', en: 'Cool! See you later.', ko: '멋지다! 나중에 봐.'}
          ]},
          { title: 'Dialogue B', setting: '토요일 오후, 동네 꽃가게 앞', lines: [
            {s: 'A', en: 'Good afternoon, Mr. Choi. {{How are you doing}}?', ko: '안녕하세요, 최 아저씨. 잘 지내세요?'},
            {s: 'B', en: '{{Great, thanks}}. And you, Sora?', ko: '아주 좋아, 고맙구나. 소라는?'},
            {s: 'A', en: 'I’m good. Wow, these tulips are beautiful.', ko: '저도 좋아요. 와, 이 튤립 정말 예뻐요.'},
            {s: 'B', en: 'They are for my neighbor. She loves tulips.', ko: '이웃에게 줄 거야. 그분이 튤립을 아주 좋아하거든.'}
          ]}
        ],
        check: [
          {q: 'How is Ben doing?', a: 'Pretty good.'},
          {q: 'When does Ben practice with the band?', a: 'After school.'},
          {q: 'Who are the tulips for?', a: 'Mr. Choi’s neighbor.'}
        ],
        drill: {frame: ['A: Hi! How’s it going?', 'B: ____, thanks. And you?'], opts: ['Pretty good', 'Not bad', 'Great', 'So-so', 'Very good', 'Fine']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '좋아하는 것 묻고 답하기',
        key: {q: ['What’s your favorite ~?', 'What ~ do you like best?'], a: ['It’s ~.', 'My favorite ~ is ~.', 'I like ~ best.']},
        note: 'What’s your favorite subject?에는 It’s science.처럼 It’s로 짧게 답할 수 있다. 상대에게 How about you?로 되묻는다.',
        dialogs: [
          { title: 'Dialogue A', setting: '점심시간, 급식실', lines: [
            {s: 'Jisu', en: 'Max, {{what’s your favorite subject}}?', ko: '맥스, 가장 좋아하는 과목이 뭐야?'},
            {s: 'Max', en: '{{It’s}} P.E. I love playing basketball in the gym.', ko: '체육이야. 체육관에서 농구하는 걸 아주 좋아해.'},
            {s: 'Jisu', en: 'Really? We have a match on Friday.', ko: '정말? 우리 금요일에 시합 있잖아.'},
            {s: 'Max', en: 'I know! {{How about you}}? What’s your favorite subject?', ko: '알아! 너는? 가장 좋아하는 과목이 뭐야?'},
            {s: 'Jisu', en: '{{My favorite subject is}} music. I sing pop songs all the time.', ko: '내가 가장 좋아하는 과목은 음악이야. 나는 늘 팝송을 불러.'}
          ]},
          { title: 'Dialogue B', setting: '방과 후, 버스 정류장', lines: [
            {s: 'A', en: 'What’s your favorite animal?', ko: '가장 좋아하는 동물은 뭐야?'},
            {s: 'B', en: 'It’s dogs. My dog is always by my side.', ko: '개야. 우리 개는 늘 내 곁에 있어.'},
            {s: 'A', en: 'That’s sweet. What’s your dog’s name?', ko: '다정하다. 개 이름이 뭐야?'},
            {s: 'B', en: 'Her name is Coco. She is very special to me.', ko: '코코야. 나한테 아주 소중해.'}
          ]}
        ],
        check: [
          {q: 'What is Max’s favorite subject?', a: 'It’s P.E.'},
          {q: 'When is the basketball match?', a: 'On Friday.'},
          {q: 'What is Jisu’s favorite subject?', a: 'It’s music.'}
        ],
        drill: {frame: ['A: What’s your favorite ____?', 'B: It’s ...'], opts: ['subject', 'sport', 'flower', 'singer', 'animal', 'season']}
      }
    ],
    interviewEx: 'Hana’s favorite subject is art. She draws pictures all the time.',
    watch: {
      label: 'Let’s Watch', title: 'My Special Person', setting: '첫 주 영어 시간. 최 선생님이 “나에게 소중한 사람”을 한 사람씩 말하게 한다.',
      lines: [
        {s: 'Mr. Choi', en: 'Good morning, everyone! How’s it going?', ko: '좋은 아침이에요, 여러분! 잘 지내죠?'},
        {s: 'Sora', en: 'Pretty good! My special person is my grandma. She bakes cookies for me.', ko: '좋아요! 저에게 소중한 사람은 할머니예요. 저에게 쿠키를 구워 주세요.'},
        {s: 'Ben', en: 'My special person is my brother. He plays soccer with me every weekend.', ko: '저에게 소중한 사람은 형이에요. 주말마다 저와 축구를 해요.'},
        {s: 'Jisu', en: 'My special friend is my cat, Nabi. She sleeps by my side all the time.', ko: '저에게 소중한 친구는 고양이 나비예요. 늘 제 곁에서 자요.'},
        {s: 'Mr. Choi', en: 'Wonderful! Each person is special in a different way.', ko: '멋져요! 사람마다 다른 방식으로 소중하네요.'}
      ],
      check: [
        {q: 'What does Sora’s grandma do for her?', a: 'She bakes cookies for her.'},
        {q: 'When does Ben play soccer with his brother?', a: 'Every weekend.'},
        {q: 'Who is Nabi?', a: 'Jisu’s cat.'}
      ]
    },
    wrap: {en: 'Greet your partner and ask about their favorite subject, sport, or person.', ko: '짝과 안부 인사를 나누고 가장 좋아하는 과목·운동·사람을 묻고 답하기'}
  },

  grammar: {
    cover: 'am · is · -s',
    hook: {en: 'I {{am}} Daeun, and my best friend {{is}} Sohee.  /  I play the keyboard, and Sohee {{sings}}.', ko: '빈칸에 들어갈 말은 주어에 따라 어떻게 바뀔까?', answer: 'I → am, my best friend → is / Sohee → sings (3인칭 단수 + -s)', note: '주어를 손으로 짚으며 동사가 주어에 따라 모양이 바뀐다는 점을 찾게 한다. 교과서 언어 형식과 같은 짜임(“A, and B”)의 문장이다.'},
    points: [
      { id: 'g1', name: 'be동사 (am / are / is)', short: 'be동사', form: 'I am / You·We·They are / He·She·It is', meaning: '~이다, ~(에) 있다',
        notice: [
          {en: 'I {{am}} Daeun, and my best friend {{is}} Sohee.', ko: '나는 다은이고, 내 가장 친한 친구는 소희이다.'},
          {en: 'We {{are}} in the school band.', ko: '우리는 학교 밴드에 있다.'},
          {en: 'Coco {{is}} always by my side.', ko: '코코는 늘 내 곁에 있다.'}
        ],
        rule: [
          {k: '주어별', v: 'I → am / you, we, they → are / he, she, it → is', ex: 'They are my neighbors.'},
          {k: '부정문', v: 'be동사 + not', ex: 'We are not great players. / He isn’t tall.'},
          {k: '의문문', v: 'Be동사 + 주어 ~?', ex: 'Is she a good student? — Yes, she is.'}
        ],
        compare: {
          title: '주어에 맞는 be동사', note: '줄임말(I’m, You’re, He’s, isn’t, aren’t)도 함께 읽게 한다.',
          head: ['am', 'are', 'is'],
          cols: [['I am', 'I’m', '—'], ['You are', 'We are', 'They are'], ['He is', 'She is', 'It is']]
        },
        check: [
          {q: 'I ____ a member of the band. (be)', a: 'am'},
          {q: 'My neighbors ____ very kind. (be)', a: 'are'},
          {q: 'Coco ____ my hearing dog. (be)', a: 'is'},
          {q: 'We ____ not good players. (be)', a: 'are'},
          {q: '____ she your best friend? (be)', a: 'Is'}
        ],
        trap: {bad: 'My best friend are Sohee.', good: 'My best friend is Sohee.', why: '주어(my best friend)가 한 사람이면 be동사는 is.'},
        scramble: [
          {ko: '나는 학교 밴드의 단원이다.', en: 'I am a member of the school band.'},
          {ko: '우리 이웃들은 매우 친절하다.', en: 'Our neighbors are very kind.'},
          {ko: '그녀는 너의 가장 친한 친구니?', en: 'Is she your best friend?'}
        ]
      },
      { id: 'g2', name: '일반동사의 현재형', short: '일반동사', form: '주어 + 동사원형 / 3인칭 단수 + 동사-s', meaning: '~하다',
        notice: [
          {en: 'I {{play}} the keyboard, and Sohee {{sings}}.', ko: '나는 키보드를 연주하고, 소희는 노래한다.'},
          {en: 'Coco {{goes}} to the gym with me.', ko: '코코는 나와 함께 체육관에 간다.'},
          {en: 'Mr. Oh {{doesn’t talk}} much.', ko: '오 할아버지는 말을 많이 하지 않으신다.'}
        ],
        rule: [
          {k: '3인칭 단수', v: '동사 + -s / -es (go → goes, watch → watches, study → studies, have → has)', ex: 'She watches the door for me.'},
          {k: '부정문', v: 'don’t / doesn’t + 동사원형', ex: 'He doesn’t talk much.'},
          {k: '의문문', v: 'Do / Does + 주어 + 동사원형 ~?', ex: 'Does she sing pop songs? — Yes, she does.'}
        ],
        check: [
          {q: 'Sohee ____ pop songs. (sing)', a: 'sings'},
          {q: 'Coco ____ to the gym with Ryan. (go)', a: 'goes'},
          {q: 'We ____ every Friday. (practice)', a: 'practice'},
          {q: 'Mr. Oh ____ talk much. (부정)', a: 'doesn’t'},
          {q: '____ your dog sleep by your side? (의문)', a: 'Does'}
        ],
        trap: {bad: 'She don’t talks much.', good: 'She doesn’t talk much.', why: '3인칭 단수 부정은 doesn’t + 동사원형.'},
        scramble: [
          {ko: '그녀는 나에게 메모를 남긴다.', en: 'She leaves a memo for me.'},
          {ko: '그는 말을 많이 하지 않는다.', en: 'He doesn’t talk much.'},
          {ko: '너는 방과 후에 연습하니?', en: 'Do you practice after school?'}
        ]
      }
    ],
    wrap: {en: 'I am ______, and my ______ is ______. I ______, and he/she ______s.', ko: '교과서 언어 형식처럼 “A, and B” 두 문장으로 나와 소중한 사람 소개하기'},
    wrapEx: 'I am Minho, and my best friend is Jun. I play soccer, and Jun plays basketball.'
  },

  reading: {
    title: 'Close to My Heart', kind: '학급 문집 글', cover: 'Heart', coverKo: '마음속 소중한 존재', cover2: 'Together', coverKo2: '함께라서 행복해',
    before: [
      {q: 'Look at the title. What will the students write about?', a: '자기에게 소중한 사람·동물'},
      {q: 'Who is close to your heart?', a: '가족, 친구, 반려동물, 이웃 등'}
    ],
    gloss: {'school band': '학교 밴드', 'not great': '잘하지 못하는', 'hearing dog': '청각 장애인 안내견', doorbell: '초인종', 'bark': '짖다', 'cheer': '응원하다', 'bench': '벤치', 'tea': '차'},
    paras: [
      {who: '', en: 'Who is close to your heart? Three students in Class 1-2 write about a special someone. Let’s read their stories.',
       ko: '여러분의 마음 가까이에는 누가 있나요? 1학년 2반 학생 세 명이 소중한 존재에 대해 글을 썼어요. 이야기를 읽어 봐요.',
       check: {q: 'How many students write about a special someone?', a: 'Three students.'}, think: '나라면 누구에 대해 쓸까?'},
      {who: 'Daeun', en: 'I am Daeun, and my best friend is Sohee. We are in the school band. I play the keyboard, and Sohee sings pop songs. We practice every Friday. We are not great, but we laugh all the time. With Sohee, every day is fun.',
       ko: '나는 다은이고, 내 가장 친한 친구는 소희야. 우리는 학교 밴드에 있어. 나는 키보드를 치고, 소희는 팝송을 불러. 우리는 금요일마다 연습해. 잘하지는 못하지만 늘 웃어. 소희와 함께라면 날마다 즐거워.',
       check: {q: 'What does Sohee do in the band?', a: 'She sings pop songs.'}, think: '다은이에게 소희는 왜 소중할까?'},
      {who: 'Ryan', en: 'I’m Ryan. I have poor hearing. Coco is my hearing dog and my best friend. When the doorbell rings, she touches my leg. When my phone rings, she brings it to me. Coco is my ears.',
       ko: '나는 라이언이야. 나는 청력이 좋지 않아. 코코는 내 청각 안내견이자 가장 친한 친구야. 초인종이 울리면 코코가 내 다리를 건드려. 전화가 울리면 전화를 나에게 가져다줘. 코코는 내 귀야.',
       check: {q: 'What does Coco do when the doorbell rings?', a: 'She touches Ryan’s leg.'}, think: '“Coco is my ears.”는 무슨 뜻일까?'},
      {who: 'Ryan', en: 'Coco is by my side all the time. She even comes to the gym for my basketball matches. She doesn’t bark. She just watches me and wags her tail. With Coco, I feel brave.',
       ko: '코코는 늘 내 곁에 있어. 심지어 내 농구 시합을 보러 체육관에도 와. 코코는 짖지 않아. 그냥 나를 지켜보며 꼬리를 흔들지. 코코와 함께라면 나는 용감해져.',
       check: {q: 'Where does Coco go with Ryan?', a: 'To the gym (for his basketball matches).'}, think: '라이언은 왜 코코와 있으면 용감해질까?'},
      {who: 'Mina', en: 'I’m Mina. Mr. Oh, my neighbor, is a dear friend to me. He grows tulips in a wide garden. He doesn’t talk much. He just nods and smiles. Sometimes I’m sad, and he leaves a memo on my door: “Tea time?” We drink tea on his bench, and I feel better, like magic.',
       ko: '나는 미나야. 우리 이웃 오 할아버지는 나에게 소중한 친구야. 할아버지는 넓은 정원에서 튤립을 키우셔. 말씀은 많이 안 하셔. 그냥 고개를 끄덕이고 웃으셔. 내가 가끔 슬플 때면 할아버지가 우리 집 문에 메모를 남기셔. “차 한잔할까?” 할아버지 벤치에서 차를 마시면 마법처럼 기분이 나아져.',
       check: {q: 'What does Mr. Oh grow?', a: 'He grows tulips.'}, think: '말이 없는 오 할아버지가 미나를 위로하는 방법은?'},
      {who: 'Our Class', en: 'A friend, a dog, and a neighbor. Each one is different, but each one is special. Who is close to your heart? Tell them “Thank you” today!',
       ko: '친구, 개, 그리고 이웃. 저마다 다르지만 저마다 소중해요. 여러분의 마음 가까이에는 누가 있나요? 오늘 그 존재에게 “고마워”라고 말해 보세요!',
       check: {q: 'What does the writer want us to do today?', a: 'Say “Thank you” to a special someone.'}, think: '오늘 “고마워”라고 말하고 싶은 사람은?'}
    ],
    split: 3,
    next: '라이언과 코코, 그리고 미나와\n오 할아버지는 어떤 사이일까?',
    recap: {q: '다은이와 라이언에게 소중한 존재는?', items: [{k: 'DAEUN', v: 'best friend Sohee · school band · laugh all the time'}, {k: 'RYAN', v: 'hearing dog Coco · “Coco is my ears.”'}]},
    tf: [
      {p: 1, s: 'Daeun plays the keyboard in the band.', a: true},
      {p: 1, s: 'Daeun and Sohee are great players.', a: false, why: 'We are not great, but we laugh all the time.'},
      {p: 2, s: 'Coco brings Ryan’s phone to him.', a: true},
      {p: 3, s: 'Coco barks at the basketball matches.', a: false, why: 'She doesn’t bark.'},
      {p: 4, s: 'Mr. Oh talks a lot.', a: false, why: 'He doesn’t talk much.'},
      {p: 4, s: 'Mina and Mr. Oh drink tea together.', a: true}
    ],
    key: [
      {en: 'I {{am}} Daeun, and my best friend {{is}} Sohee.', note: 'I + am / 3인칭 단수 + is', g: 'g1'},
      {en: 'I play the keyboard, and Sohee {{sings}} pop songs.', note: '3인칭 단수 + -s', g: 'g2'},
      {en: 'We {{are not}} great, but we laugh all the time.', note: 'be동사 부정문', g: 'g1'},
      {en: 'She even {{comes}} to the gym for my matches.', note: '3인칭 단수 + -s', g: 'g2'},
      {en: 'He {{doesn’t talk}} much.', note: 'doesn’t + 동사원형', g: 'g2'},
      {en: 'Mr. Oh, my neighbor, {{is}} a dear friend to me.', note: '주어(Mr. Oh) + is', g: 'g1'}
    ],
    summary: {text: 'Daeun and Sohee are in the school {{band}}. Coco is Ryan’s {{hearing}} dog, and she is by his {{side}} all the time. Mr. Oh, Mina’s {{neighbor}}, {{doesn’t}} talk much, but he makes her feel better. Each one is different, but each one is {{special}}.'},
    order: ['Mina feels sad.', 'Mr. Oh leaves a memo on her door.', 'They drink tea on his bench.', 'Mina feels better, like magic.'],
    chart: {title: 'CLOSE TO MY HEART', ko: '세 사람의 소중한 존재 정리하기', cols: ['Special someone', 'What they do together'], note: '표를 보고 He/She + 동사-s 문장으로 말하게 한다. (Sohee sings pop songs. Coco comes to the gym.)', rows: [
      {name: 'Daeun', cells: ['Sohee (best friend)', 'play in the band, laugh']},
      {name: 'Ryan', cells: ['Coco (hearing dog)', 'go to the gym, watch matches']},
      {name: 'Mina', cells: ['Mr. Oh (neighbor)', 'drink tea, read memos']}
    ]},
    wrap: {en: '______ is close to my heart. He/She ______. With ______, I feel ______.', ko: '관통 질문으로 돌아가기: 나에게 소중한 존재를 소개하는 글 쓰기'}
  },

  quiz: [
    ['“이웃”을 뜻하는 낱말은?', ['band', 'guide', 'person', 'neighbor'], 3, 'neighbor: 이웃'],
    ['“laugh”의 반대말은?', ['nod', 'cry', 'sing', 'smile'], 1, 'laugh ↔ cry'],
    ['“My dog is always by my ___.”', ['side', 'hand', 'home', 'time'], 0, 'by one’s side: ~의 곁에'],
    ['“How’s it going?”에 알맞은 대답은?', ['It’s science.', 'Pretty good.', 'Nice to meet you.', 'I’m from Korea.'], 1, 'How’s it going? — Pretty good. / Not bad.'],
    ['좋아하는 것을 묻는 표현은?', ['How’s it going?', 'Where are you from?', 'What’s your favorite subject?', 'What do you do?'], 2, 'What’s your favorite ~?'],
    ['“What’s your favorite subject?”에 알맞은 대답은?', ['It’s music.', 'Yes, I do.', 'Not bad.', 'I’m fine.'], 0, 'It’s ~. / My favorite subject is ~.'],
    ['Let’s Watch에서 지수에게 소중한 존재는?', ['her grandma', 'her brother', 'her cat', 'her teacher'], 2, 'My special friend is my cat, Nabi.'],
    ['빈칸에 알맞은 것은? “My neighbors ___ very kind.”', ['am', 'is', 'are', 'be'], 2, '복수 주어 + are'],
    ['빈칸에 알맞은 것은? “Sohee ___ pop songs.”', ['sing', 'sings', 'singing', 'to sing'], 1, '3인칭 단수 + sings'],
    ['어법상 틀린 문장은?', ['We are in the band.', 'Coco goes to the gym.', 'He don’t talk much.', 'I am Daeun.'], 2, 'He doesn’t talk much.'],
    ['빈칸에 알맞은 것은? “___ your dog sleep by your side?”', ['Is', 'Do', 'Are', 'Does'], 3, '3인칭 단수 의문문: Does'],
    ['다은이가 밴드에서 하는 일은?', ['노래하기', '키보드 연주하기', '드럼 치기', '춤추기'], 1, 'I play the keyboard.'],
    ['코코가 초인종이 울릴 때 하는 일은?', ['짖는다', '문을 연다', '라이언의 다리를 건드린다', '전화를 가져온다'], 2, 'When the doorbell rings, she touches my leg.'],
    ['오 할아버지가 미나를 위로하는 방법은?', ['노래를 불러 준다', '튤립을 선물한다', '메모를 남기고 차를 함께 마신다', '농구 시합을 보러 간다'], 2, 'He leaves a memo… We drink tea on his bench.'],
    ['글의 요지로 알맞은 것은?', ['개는 훌륭한 친구다', '밴드 활동은 즐겁다', '이웃과 차를 마시자', '저마다 다르지만 모두 소중하다'], 3, 'Each one is different, but each one is special.']
  ]
};

/* ── 보강: 원리 중심 문법 · 모션 그래픽 · 낱말 만들기 · 발음 기호 ── */
(function (L) {
  const ipa = {subject: '/ˈsʌbdʒɪkt/', person: '/ˈpɜːrsn/', each: '/iːtʃ/', band: '/bænd/', practice: '/ˈpræktɪs/', keyboard: '/ˈkiːbɔːrd/', pop: '/pɑːp/', laugh: '/læf/', special: '/ˈspeʃl/', guide: '/ɡaɪd/', hearing: '/ˈhɪrɪŋ/', even: '/ˈiːvn/', gym: '/dʒɪm/', match: '/mætʃ/', neighbor: '/ˈneɪbər/', nod: '/nɑːd/', tulip: '/ˈtuːlɪp/', memo: '/ˈmemoʊ/', magic: '/ˈmædʒɪk/', wide: '/waɪd/'};
  L.vocab.words.forEach(w => { if (ipa[w.w]) w.ipa = ipa[w.w]; });
  L.vocab.morph = [
    {w: 'keyboard', ko: '건반 악기, 키보드', parts: [{t: 'key', k: 'root', m: '건반, 열쇠'}, {t: 'board', k: 'root', m: '판'}], family: ['blackboard', 'skateboard', 'keyhole'], note: '건반(key)이 줄지어 있는 판(board). 두 낱말이 합쳐진 합성어.'},
    {w: 'hearing', ko: '청각, 듣기', parts: [{t: 'hear', k: 'root', m: '듣다'}, {t: 'ing', k: 'suf', m: '~하는 것 (명사)'}], family: ['reading', 'meeting', 'painting'], note: '동사 + -ing가 “~하는 것, ~하는 능력”이라는 명사가 된다.'},
    {w: 'neighborhood', ko: '동네, 이웃', parts: [{t: 'neighbor', k: 'root', m: '이웃 사람'}, {t: 'hood', k: 'suf', m: '~의 무리·상태'}], family: ['childhood', 'brotherhood'], note: '이웃(neighbor)들이 모인 곳 → 동네.'}
  ];
  const [g1, g2] = L.grammar.points;
  g1.principle = {
    q: '왜 주어마다 be동사 모양이 달라질까?',
    pic: [{en: 'I → am', ko: '나'}, {en: 'you · we · they → are', ko: '너 · 우리 · 그들', arrow: '·'}, {en: 'he · she · it → is', ko: '그 밖의 하나', hot: true}],
    core: 'be동사는 주어와 짝을 맞춘다. 주어를 먼저 보면 am, are, is 중 무엇을 쓸지 저절로 정해진다.',
    why: ['영어는 동사 모양으로 “누가” 하는지를 한 번 더 표시한다.', '부정문은 be동사 바로 뒤에 not을 붙인다 (I am not tall).', '의문문은 be동사를 주어 앞으로 보낸다 (Are you in the band?).']
  };
  g1.anim = [{title: '평서문 → 의문문: be동사가 앞으로', states: [
    {t: 'You/S | are/V | a new student/C | .', note: '평서문', ko: '너는 새로 온 학생이다.'},
    {t: 'Are/V | you/S | a new student/C | ?', note: 'be동사가 주어 앞으로!', ko: '너는 새로 온 학생이니?'}]}];
  g1.contrast = {title: '한 명일까, 여럿일까', pairs: [
    {a: 'He {{is}} my classmate.', ka: '그는 우리 반 친구다. (한 명 → is)', b: 'They {{are}} my classmates.', kb: '그들은 우리 반 친구들이다. (여럿 → are)'}],
    point: '주어가 한 명(그 밖의 하나)이면 is, 여럿이면 are.'};
  g2.principle = {
    q: '왜 he·she 뒤에서만 동사에 -s가 붙을까?',
    pic: [{en: 'I / You like', ko: '나 · 너'}, {en: 'She likes', ko: '그 밖의 한 사람 → -s', hot: true}],
    core: '주어가 3인칭 단수(he, she, it, 한 사람·한 물건)이고 지금의 일이면 동사에 -s를 붙여 표시한다.',
    why: ['I(말하는 사람)와 you(듣는 사람)는 -s를 붙이지 않는다.', '부정문·의문문에서는 -s가 does로 옮겨 가고, 동사는 원래 모양으로 돌아온다.', '-s 붙이는 법: 대부분 -s / -s·-sh·-ch·-x·-o로 끝나면 -es / 자음 + y → -ies.']
  };
  g2.anim = [{title: '의문문에서 -s는 어디로 갈까?', states: [
    {t: 'She/S | likes/V#v | cats/O | .', note: '3인칭 단수 + likes', ko: '그녀는 고양이를 좋아한다.'},
    {t: 'Does/X | she/S | like/V#v | cats/O | ?', note: '-s는 does가 가져가고 동사는 원형!', ko: '그녀는 고양이를 좋아하니?'}]},
    {title: '부정문도 마찬가지', states: [
    {t: 'He/S | plays/V#v | games/O | .', note: '긍정', ko: '그는 게임을 한다.'},
    {t: 'He/S | doesn’t/X | play/V#v | games/O | .', note: 'doesn’t + 동사원형', ko: '그는 게임을 하지 않는다.'}]}];
  g2.contrast = {title: '-s가 있고 없고', pairs: [
    {a: 'They {{play}} soccer after school.', ka: '그들은 방과 후에 축구를 한다. (여럿 → play)', b: 'Jimin {{plays}} soccer after school.', kb: '지민이는 방과 후에 축구를 한다. (한 사람 → plays)'}],
    point: '주어가 3인칭 단수일 때만 동사에 -s.'};
})(window.LESSON);
