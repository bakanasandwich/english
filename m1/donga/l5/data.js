/* 중1 영어(동아·윤정미) Lesson 5 · Think like Sherlock Holmes!
   교과서 대조(2026-10): 의사소통 기능(허락 구하고 답하기 · 금지하기), 언어 형식(비교급 · 최상급, There was/were),
   읽기 주제(Who Threw a Cake at the Monalisa? — 미술관 사건의 목격자 진술로 범인 찾기), 단원 어휘를 교과서 목차·단어 목록과 맞췄다.
   대화문·읽기 글은 저작권 때문에 교과서 원문을 싣지 않고, 같은 주제·같은 언어 형식·교과서 어휘로 새로 쓴 글이다. */
window.LESSON = {
  book: 'm1-donga', no: 5,
  title: 'Think like Sherlock Holmes!', ko: '셜록 홈스처럼 생각해!',
  bigQ: {en: 'How can we find the truth from clues?', ko: '단서로부터 어떻게 진실을 찾을 수 있을까?'},
  align: {
    tb: {reading: 'Who Threw a Cake at the Monalisa?', funcs: ['허락 구하고 답하기', '금지하기'], forms: ['비교급 (taller than)', '최상급 (the smallest)', 'There was / were'],
      note: '교과서 읽기는 미술관에서 그림에 케이크를 던진 사람을 목격자 네 명의 진술과 용의자 정보로 찾아내는 글. 여기 본문은 그림 도난 사건으로 바꿔 같은 짜임(진술 → 용의자 비교 → 추리)으로 새로 쓴 글이다.'},
    std: {vocab: ['9영01-01', '9영02-01'], talk: ['9영01-06', '9영02-11'], grammar: ['9영02-03'], read1: ['9영01-02', '9영01-04'], read2: ['9영02-05', '9영02-07']},
    forms: ['Comparatives', 'Superlatives', 'Nonreferential There', 'Modals']
  },
  goals: {
    vocab: ['사건·추리와 관련된 낱말 20개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 사건 현장을 한 문장으로 묘사할 수 있다.'],
    talk: ['허락을 구하고 답할 수 있다. (May I ~? — Yes, you may. / No, you may not.)', '금지하는 말을 할 수 있다. (You must not ~.)'],
    grammar: ['비교급(-er than, more ~ than)으로 두 대상을 비교할 수 있다.', '최상급(the -est, the most ~)으로 셋 이상 중에서 “가장”을 말할 수 있다.'],
    read1: ['목격자 진술을 읽고 범인에 대한 단서를 찾을 수 있다.'],
    read2: ['단서와 용의자 정보를 비교해 범인을 찾고, 그 까닭을 영어로 설명할 수 있다.']
  },

  vocab: {
    hook: {en: 'What does a detective need?', ko: '탐정에게는 무엇이 필요할까요?', note: '돋보기, 관찰력, 메모, 목격자 등 답을 모은다. 오늘 낱말은 사건 현장에서 쓰는 말이라고 소개한다.'},
    words: [
      {w: 'crime', pos: 'n.', ko: '범죄', ic: '🚨', audio: 'assets/audio/crime.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The police are looking into the crime.', exKo: '경찰이 그 범죄를 조사하고 있다.'},
      {w: 'criminal', pos: 'n.', ko: '범인, 범죄자', ic: '🦹', audio: 'assets/audio/criminal.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Who is the criminal?', exKo: '범인은 누구일까?'},
      {w: 'scene', pos: 'n.', ko: '현장, 장면', ic: '🎞️', ex: 'He went to the crime scene.', exKo: '그는 범죄 현장에 갔다.'},
      {w: 'steal', pos: 'v.', ko: '훔치다 (과거 stole)', ic: '🫳', ex: 'Someone stole a painting.', exKo: '누군가 그림을 훔쳐 갔다.'},
      {w: 'eyewitness', pos: 'n.', ko: '목격자', ic: '👀', ex: 'There were three eyewitnesses.', exKo: '목격자가 세 명 있었다.'},
      {w: 'suspect', pos: 'n.', ko: '용의자', ic: '🕵️', ex: 'Look at the four suspects.', exKo: '용의자 네 명을 보아라.'},
      {w: 'statement', pos: 'n.', ko: '진술', ic: '🗒️', audio: 'assets/audio/statement.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Read each statement carefully.', exKo: '각 진술을 꼼꼼히 읽어라.'},
      {w: 'guard', pos: 'n.', ko: '경비원', ic: '💂', audio: 'assets/audio/guard.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The guard locked the door.', exKo: '경비원이 문을 잠갔다.'},
      {w: 'janitor', pos: 'n.', ko: '건물 관리인', ic: '🧹', ex: 'The janitor was cleaning the floor.', exKo: '관리인이 바닥을 청소하고 있었다.'},
      {w: 'owner', pos: 'n.', ko: '주인', ic: '🏪', audio: 'assets/audio/owner.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'She is the owner of the café.', exKo: '그녀는 그 카페의 주인이다.'},
      {w: 'wig', pos: 'n.', ko: '가발', ic: '💇', audio: 'assets/audio/wig.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'His wig fell off.', exKo: '그의 가발이 벗겨졌다.'},
      {w: 'height', pos: 'n.', ko: '키, 높이', ic: '📏', audio: 'assets/audio/height.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'What is your height?', exKo: '너는 키가 몇이니?'},
      {w: 'language', pos: 'n.', ko: '언어', ic: '🗣️', audio: 'assets/audio/language.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'She speaks three languages.', exKo: '그녀는 세 언어를 한다.'},
      {w: 'explain', pos: 'v.', ko: '설명하다', ic: '💬', audio: 'assets/audio/explain.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Explain your reason.', exKo: '너의 이유를 설명해라.'},
      {w: 'reason', pos: 'n.', ko: '이유', ic: '❓', audio: 'assets/audio/reason.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'What is the reason?', exKo: '이유가 무엇이니?'},
      {w: 'rule', pos: 'n.', ko: '규칙', ic: '📜', audio: 'assets/audio/rule.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Follow the museum rules.', exKo: '박물관 규칙을 따라라.'},
      {w: 'flash', pos: 'n.', ko: '(카메라) 플래시', ic: '📸', audio: 'assets/audio/flash.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'You must not use a flash here.', exKo: '여기서는 플래시를 쓰면 안 된다.'},
      {w: 'expensive', pos: 'adj.', ko: '비싼', ic: '💎', audio: 'assets/audio/expensive.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'This painting is very expensive.', exKo: '이 그림은 아주 비싸다.'},
      {w: 'damage', pos: 'n. / v.', ko: '손상; 손상시키다', ic: '💥', ex: 'Flash can damage old paintings.', exKo: '플래시는 오래된 그림을 손상시킬 수 있다.'},
      {w: 'secret', pos: 'n.', ko: '비밀', ic: '🤫', audio: 'assets/audio/secret.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Can you keep a secret?', exKo: '비밀을 지킬 수 있니?'}
    ],
    phrases: [
      {w: 'run away', ko: '달아나다', ex: 'The man ran away.', exKo: '그 남자는 달아났다.'},
      {w: 'fall off', ko: '~에서 떨어지다', ex: 'Something fell off his head.', exKo: '그의 머리에서 무언가 떨어졌다.'},
      {w: 'run after', ko: '~을 뒤쫓다', ex: 'I ran after him.', exKo: '나는 그를 뒤쫓았다.'},
      {w: 'May I ~?', ko: '~해도 될까요?', ex: 'May I take a picture?', exKo: '사진을 찍어도 될까요?'},
      {w: 'You must not ~.', ko: '~하면 안 된다.', ex: 'You must not touch the paintings.', exKo: '그림을 만지면 안 된다.'},
      {w: 'in fact', ko: '사실은', ex: 'In fact, she was not old.', exKo: '사실 그녀는 나이 든 사람이 아니었다.'}
    ],
    pairs: [
      {a: 'crime', b: 'criminal', rel: '범죄 / 범인'},
      {a: 'expensive', b: 'cheap', rel: '반대말'},
      {a: 'high', b: 'height', rel: '형용사 / 명사'},
      {a: 'steal', b: 'stole', rel: '현재 / 과거'}
    ],
    wrap: {en: 'At the crime scene, there was ______. The ______ saw ______.', ko: '오늘 배운 낱말로 사건 현장을 묘사하는 두 문장 쓰기'}
  },

  talk: {
    hook: {en: 'What can’t you do in a museum?', ko: '박물관에서 하면 안 되는 일은 무엇인가요?', note: '만지기, 뛰기, 플래시 사진, 음식 먹기 등 답을 모은다. 허락을 구하고 금지하는 영어 표현으로 이어진다.'},
    speakers: {Kevin: {voice: 1, pitch: 1}, Mom: {voice: 2, pitch: 1.1}, Guard: {voice: 1, pitch: .9}, Yuri: {voice: 0, pitch: 1.15}, Keeper: {voice: 2, pitch: .95}, Guide: {voice: 0, pitch: 1.05}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '허락 구하고 답하기',
        key: {q: ['May I ~?', 'Can I ~?'], a: ['Yes, you may. / Sure. / Of course.', 'No, you may not. / I’m sorry, but you can’t.']},
        note: 'May I + 동사원형 ~?은 Can I ~?보다 공손하게 허락을 구하는 말. 거절할 때는 이유를 덧붙이면 좋다.',
        dialogs: [
          { title: 'Dialogue A', setting: '미술관 입구', lines: [
            {s: 'Kevin', en: 'Excuse me. {{May I}} take pictures in the museum?', ko: '실례합니다. 미술관 안에서 사진을 찍어도 될까요?'},
            {s: 'Guard', en: '{{Yes, you may}}, but you must not use a flash.', ko: '네, 찍어도 돼요. 하지만 플래시를 쓰면 안 돼요.'},
            {s: 'Kevin', en: 'Why not?', ko: '왜 안 되나요?'},
            {s: 'Guard', en: 'A flash can damage old paintings.', ko: '플래시는 오래된 그림을 손상시킬 수 있거든요.'}
          ]},
          { title: 'Dialogue B', setting: '미술관 카페 앞', lines: [
            {s: 'A', en: 'May I bring my juice inside?', ko: '주스를 안으로 가져가도 될까요?'},
            {s: 'B', en: '{{No, you may not}}. Only bottled water is OK.', ko: '아니요, 안 돼요. 병에 든 물만 괜찮아요.'},
            {s: 'A', en: 'I see. Then may I leave it here?', ko: '알겠어요. 그럼 여기에 두고 가도 될까요?'},
            {s: 'B', en: '{{Sure}}. Put it on that table.', ko: '물론이죠. 저 탁자 위에 두세요.'}
          ]}
        ],
        check: [
          {q: 'Can Kevin take pictures in the museum?', a: 'Yes, but he must not use a flash.'},
          {q: 'Why must Kevin not use a flash?', a: 'A flash can damage old paintings.'},
          {q: 'What drink is OK inside?', a: 'Only bottled water.'}
        ],
        drill: {frame: ['A: May I ____?', 'B: Yes, you may. / No, you may not.'], opts: ['take a picture', 'sit here', 'use your pen', 'go to the restroom', 'open the window', 'eat here']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '금지하기',
        key: {q: ['You must not ~.', 'Don’t ~.'], a: ['Oh, I’m sorry.', 'OK. I won’t.', 'I didn’t know that.']},
        note: 'must not(mustn’t) + 동사원형은 강한 금지. 표지판·규칙을 말할 때 자주 쓴다. 대답은 I’m sorry. / I didn’t know that.',
        dialogs: [
          { title: 'Dialogue A', setting: '동물원 원숭이 우리 앞', lines: [
            {s: 'Yuri', en: 'Look at the monkeys! I’ll give them some cookies.', ko: '원숭이 좀 봐! 쿠키를 좀 줘야지.'},
            {s: 'Keeper', en: 'Wait! {{You must not}} feed the animals.', ko: '잠깐! 동물에게 먹이를 주면 안 돼요.'},
            {s: 'Yuri', en: '{{Oh, I’m sorry. I didn’t know that}}.', ko: '아, 죄송해요. 몰랐어요.'},
            {s: 'Keeper', en: 'People food can make them sick. Look at that sign.', ko: '사람 음식은 동물들을 아프게 할 수 있어요. 저 표지판을 보세요.'}
          ]},
          { title: 'Dialogue B', setting: '토요일 오후, 집 거실', lines: [
            {s: 'Mom', en: 'Kevin, you must not play games before dinner.', ko: '케빈, 저녁 먹기 전에 게임하면 안 돼.'},
            {s: 'Kevin', en: 'May I play after dinner, then?', ko: '그럼 저녁 먹고 해도 돼요?'},
            {s: 'Mom', en: 'Yes, you may. But only for thirty minutes.', ko: '그래, 해도 돼. 하지만 30분만.'},
            {s: 'Kevin', en: '{{OK. I won’t}} play long.', ko: '알았어요. 오래 안 할게요.'}
          ]}
        ],
        check: [
          {q: 'What must Yuri not do?', a: 'She must not feed the animals.'},
          {q: 'Why can people food be bad for animals?', a: 'It can make them sick.'},
          {q: 'How long can Kevin play games after dinner?', a: 'Only for thirty minutes.'}
        ],
        drill: {frame: ['A: You must not ____ here.', 'B: Oh, I’m sorry.'], opts: ['run', 'eat snacks', 'touch the paintings', 'use a flash', 'feed the animals', 'talk loudly']}
      }
    ],
    interviewEx: 'In my house, you must not eat in your room. You may watch TV after homework.',
    watch: {
      label: 'Let’s Watch', title: 'Museum Rules', setting: '미술관 견학. 안내원이 학생들에게 규칙을 설명한다.',
      lines: [
        {s: 'Guide', en: 'Welcome, everyone! Before the tour, here are the rules. You must not touch the paintings.', ko: '여러분, 환영해요! 관람 전에 규칙을 알려 줄게요. 그림을 만지면 안 돼요.'},
        {s: 'Yuri', en: 'May I take pictures?', ko: '사진 찍어도 돼요?'},
        {s: 'Guide', en: 'Yes, you may, but you must not use a flash.', ko: '네, 찍어도 돼요. 하지만 플래시를 쓰면 안 돼요.'},
        {s: 'Kevin', en: 'May I eat my sandwich in the hall?', ko: '복도에서 샌드위치를 먹어도 돼요?'},
        {s: 'Guide', en: 'No, you may not. You can eat in the café on the first floor.', ko: '아니요, 안 돼요. 1층 카페에서 먹을 수 있어요.'}
      ],
      check: [
        {q: 'What is the first rule?', a: 'You must not touch the paintings.'},
        {q: 'Can the students take pictures?', a: 'Yes, but they must not use a flash.'},
        {q: 'Where can Kevin eat his sandwich?', a: 'In the café on the first floor.'}
      ]
    },
    wrap: {en: 'Make three rules for our classroom with “You must not ~.” and ask for permission with “May I ~?”', ko: '“You must not ~.”로 우리 반 규칙 세 가지를 만들고, “May I ~?”로 허락 구하기'}
  },

  grammar: {
    cover: '-er · the -est',
    hook: {en: 'She was {{taller}} than me.  /  She bought {{the cheapest}} drink on the menu.', ko: 'taller와 the cheapest는 각각 몇 개를 비교하고 있을까?', answer: 'taller than → 두 사람(그녀와 나)을 비교 / the cheapest → 메뉴 전체(셋 이상) 중에서 “가장”', note: '교과서 언어 형식(He was taller than me. / He wanted the smallest cake.)과 같은 짜임이다. There was/were 문장은 본문 핵심 문장에서 함께 짚는다.'},
    points: [
      { id: 'g1', name: '비교급', short: '비교급', form: '형용사·부사-er + than / more + 형용사 + than', meaning: '…보다 더 ~한',
        notice: [
          {en: 'She was {{taller than}} me.', ko: '그녀는 나보다 키가 컸다.'},
          {en: 'She ran {{faster than}} the janitor.', ko: '그녀는 관리인보다 빨리 달렸다.'},
          {en: 'This painting is {{more expensive than}} that one.', ko: '이 그림은 저것보다 더 비싸다.'}
        ],
        rule: [
          {k: '-er', v: '대부분 + -er (tall → taller) / e로 끝나면 + -r (large → larger) / 단모음 + 단자음은 자음 하나 더 (big → bigger) / 자음 + y는 y → i + -er (heavy → heavier)', ex: 'The box was heavier than the bag.'},
          {k: 'more', v: '긴 형용사(2음절 이상 대부분)는 more + 원급', ex: 'more expensive, more famous'},
          {k: '불규칙', v: 'good → better, bad → worse, many/much → more', ex: 'His story was better than mine.'}
        ],
        compare: {
          title: '비교급 만드는 법', note: '짧은 말은 -er, 긴 말은 more. 불규칙은 따로 외운다.',
          head: ['-er', 'more ~', '불규칙'],
          cols: [['tall → taller', 'big → bigger', 'heavy → heavier'], ['expensive', 'famous', 'beautiful'], ['good → better', 'bad → worse', 'many → more']]
        },
        check: [
          {q: 'She was ____ than Mia. (tall)', a: 'taller'},
          {q: 'The thief was ____ than the janitor. (fast)', a: 'faster'},
          {q: 'This bag is ____ than that one. (big)', a: 'bigger'},
          {q: 'The ring is ____ than the watch. (expensive)', a: 'more expensive'},
          {q: 'Your idea is ____ than mine. (good)', a: 'better'}
        ],
        trap: {bad: 'She is more taller than me.', good: 'She is taller than me.', why: '-er과 more를 함께 쓰지 않는다.'},
        scramble: [
          {ko: '그녀는 나보다 키가 컸다.', en: 'She was taller than me.'},
          {ko: '그 남자는 나보다 빨리 달렸다.', en: 'The man ran faster than me.'},
          {ko: '이 그림은 저것보다 더 비싸다.', en: 'This painting is more expensive than that one.'}
        ]
      },
      { id: 'g2', name: '최상급', short: '최상급', form: 'the + 형용사·부사-est / the most + 형용사 (+ in / of ~)', meaning: '가장 ~한',
        notice: [
          {en: 'She ordered {{the cheapest}} drink on the menu.', ko: '그녀는 메뉴에서 가장 싼 음료를 주문했다.'},
          {en: 'She had {{the biggest}} bag in the room.', ko: '그녀는 그 방에서 가장 큰 가방을 가지고 있었다.'},
          {en: 'It was {{the most famous}} painting in the museum.', ko: '그것은 미술관에서 가장 유명한 그림이었다.'}
        ],
        rule: [
          {k: '-est', v: 'the + -est (tall → the tallest, big → the biggest, heavy → the heaviest)', ex: 'Ann is the tallest of the four.'},
          {k: 'most', v: '긴 형용사는 the most + 원급', ex: 'the most expensive ring'},
          {k: '범위', v: 'in + 장소·집단 / of + 복수 명사 (of the four, of all)', ex: 'the smallest in our class / the fastest of the three'}
        ],
        check: [
          {q: 'Ann is ____ of the four suspects. (tall)', a: 'the tallest'},
          {q: 'It was ____ cake in the bakery. (small)', a: 'the smallest'},
          {q: 'This is ____ room in the museum. (big)', a: 'the biggest'},
          {q: 'It is ____ painting in the world. (famous)', a: 'the most famous'},
          {q: 'He is the youngest ____ the three. (범위)', a: 'of'}
        ],
        trap: {bad: 'She is tallest girl in our class.', good: 'She is the tallest girl in our class.', why: '최상급 앞에는 the를 쓴다. (하나뿐인 “가장 ~한 것”)'},
        scramble: [
          {ko: '그녀는 가장 싼 음료를 주문했다.', en: 'She ordered the cheapest drink.'},
          {ko: '앤은 넷 중에서 가장 키가 크다.', en: 'Ann is the tallest of the four.'},
          {ko: '그것은 미술관에서 가장 유명한 그림이다.', en: 'It is the most famous painting in the museum.'}
        ]
      }
    ],
    wrap: {en: '______ is taller than ______. ______ is the ______est in our group.', ko: '모둠 친구들의 키·나이·좋아하는 것을 비교급 한 문장, 최상급 한 문장으로 쓰기'},
    wrapEx: 'Minho is taller than Jisu. Sora is the fastest runner in our group.'
  },

  reading: {
    title: 'The Case of the Missing Fox', kind: '추리 이야기 (목격자 진술)', cover: 'Clues', coverKo: '단서를 찾아라', cover2: 'Suspects', coverKo2: '범인은 누구일까?',
    before: [
      {q: 'Look at the title. What happened?', a: '“여우” 그림이 사라졌다'},
      {q: 'How do detectives find a criminal?', a: '목격자 진술과 단서를 비교한다'}
    ],
    gloss: {'Greenhill Art Museum': '그린힐 미술관', 'raincoat': '비옷', 'exit': '출구', 'trash can': '쓰레기통', 'receipt': '영수증', 'footprint': '발자국', 'blond': '금발의', 'gray': '회색의'},
    paras: [
      {who: '', en: 'Last Sunday, someone stole a painting from Greenhill Art Museum. It was The Little Fox, the smallest painting in the museum. There were three eyewitnesses. Read their statements, and find the criminal.',
       ko: '지난 일요일, 누군가 그린힐 미술관에서 그림을 훔쳐 갔다. 그것은 미술관에서 가장 작은 그림인 “작은 여우”였다. 목격자가 세 명 있었다. 그들의 진술을 읽고 범인을 찾아보자.',
       check: {q: 'What was The Little Fox?', a: 'The smallest painting in the museum.'}, think: '왜 가장 작은 그림을 훔쳤을까?',
       bg: {src: 'm1/donga/l5/img/r-p0.jpg', credit: 'Fargo-Moorhead CVB · CC BY-SA 2.0 (Flickr)', link: 'https://www.flickr.com/photos/28433241@N03/2654030038', about: '미술관 전시실'}},
      {who: 'Mia, a visitor', en: 'I was looking at The Little Fox. A woman in a red raincoat stood next to me. I’m 150 cm tall, and she was much taller than me. She had the biggest bag in the room. Then the lights went out for a moment. When they came on, the painting was gone!',
       ko: '나는 “작은 여우”를 보고 있었어요. 빨간 비옷을 입은 여자가 내 옆에 서 있었어요. 나는 키가 150cm인데, 그 여자는 나보다 훨씬 컸어요. 그 방에서 가장 큰 가방을 들고 있었어요. 그때 잠깐 불이 꺼졌어요. 불이 다시 켜졌을 때 그림이 사라졌어요!',
       check: {q: 'How tall was the woman?', a: 'Much taller than 150 cm (taller than Mia).'}, think: '미아의 진술에서 가장 중요한 단서는?',
       bg: {src: 'm1/donga/l5/img/r-p1.jpg', credit: 'bigredpenguin · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/27822647@N04/6951138519', about: '빨간 비옷'}},
      {who: 'Mr. Han, a janitor', en: 'I was cleaning the floor near the exit. A woman in a red raincoat ran past me. Something fell off her head. It was a wig! Under the wig, her hair was short and gray. I ran after her, but she was faster than me.',
       ko: '나는 출구 근처에서 바닥을 청소하고 있었어요. 빨간 비옷을 입은 여자가 내 옆을 달려 지나갔어요. 그 여자 머리에서 무언가 떨어졌어요. 가발이었어요! 가발 아래 머리는 짧은 회색이었어요. 뒤쫓아 갔지만 그 여자가 나보다 빨랐어요.',
       check: {q: 'What fell off the woman’s head?', a: 'A wig.'}, think: '가발이 떨어진 것은 어떤 사실을 알려 줄까?',
       bg: {src: 'm1/donga/l5/img/r-p2.jpg', credit: 'ell brown · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/39415781@N06/7599928388', about: '미술관 출구 복도'}},
      {who: 'Ms. Dubois, a café owner', en: 'There is a receipt from my café in the trash can? Ah, I remember. A woman came in at noon. I spoke to her in English, but she answered in French. She ordered the cheapest drink on the menu. Oh, and she had green eyes.',
       ko: '쓰레기통에 우리 카페 영수증이 있었다고요? 아, 기억나요. 정오에 한 여자가 들어왔어요. 내가 영어로 말했는데 그 여자는 프랑스어로 대답했어요. 메뉴에서 가장 싼 음료를 시켰어요. 아, 그리고 눈이 초록색이었어요.',
       check: {q: 'What language did the woman speak?', a: 'French.'}, think: '카페 주인의 진술에서 단서 두 가지는?',
       bg: {src: 'm1/donga/l5/img/r-p3.jpg', credit: 'Infrogmation · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/29350288@N06/7324195646', about: '카페 계산대'}},
      {who: 'The Suspects', en: 'Now look at the four suspects. Chloe is 172 cm tall. Her hair is long and blond, and she speaks French. Dana is 145 cm tall, and she speaks French, too. Bella is 168 cm tall with short gray hair, but she speaks only Spanish. Ann is 170 cm tall with short gray hair. She speaks English and French, and she has green eyes.',
       ko: '이제 용의자 네 명을 보자. 클로이는 172cm이고 머리는 길고 금발이며 프랑스어를 한다. 다나는 145cm이고 역시 프랑스어를 한다. 벨라는 168cm에 짧은 회색 머리지만 스페인어만 한다. 앤은 170cm에 짧은 회색 머리다. 영어와 프랑스어를 하고 눈이 초록색이다.',
       check: {q: 'Who is the shortest of the four?', a: 'Dana (145 cm).'}, think: '진술과 맞지 않는 용의자를 하나씩 지워 보자.',
       bg: {src: 'm1/donga/l5/img/r-p4.jpg', credit: 'somegeekintn · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/66335021@N00/3709203268', about: '돋보기로 살펴보기'}},
      {who: 'You', en: 'Who stole The Little Fox? Dana was shorter than Mia, so she is not the criminal. Chloe has long hair, and Bella doesn’t speak French. The criminal is Ann! In fact, a good detective doesn’t guess. A good detective compares the clues.',
       ko: '누가 “작은 여우”를 훔쳤을까? 다나는 미아보다 키가 작았으니 범인이 아니다. 클로이는 머리가 길고, 벨라는 프랑스어를 못 한다. 범인은 앤이다! 사실 좋은 탐정은 짐작하지 않는다. 좋은 탐정은 단서를 비교한다.',
       check: {q: 'Why is Bella not the criminal?', a: 'She doesn’t speak French.'}, think: '좋은 탐정에게 필요한 태도는?',
       bg: {src: 'm1/donga/l5/img/r-p5.jpg', credit: 'Editor B · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/11018968@N00/135953989', about: '비어 있는 액자'}}
    ],
    split: 3,
    next: '카페 주인은 무엇을 기억할까?\n그리고 범인은 누구일까?',
    recap: {q: '두 목격자가 말한 단서는?', items: [{k: 'MIA', v: 'red raincoat · much taller than 150 cm · the biggest bag'}, {k: 'MR. HAN', v: 'wig fell off · short gray hair · faster than him'}]},
    tf: [
      {p: 0, s: 'The Little Fox was the biggest painting in the museum.', a: false, why: 'It was the smallest painting in the museum.'},
      {p: 1, s: 'The woman was taller than Mia.', a: true},
      {p: 2, s: 'The woman’s real hair was long and blond.', a: false, why: 'Under the wig, her hair was short and gray.'},
      {p: 2, s: 'Mr. Han caught the woman.', a: false, why: 'She was faster than me.'},
      {p: 3, s: 'The woman ordered the cheapest drink.', a: true},
      {p: 5, s: 'Ann is the criminal.', a: true}
    ],
    key: [
      {en: 'It was The Little Fox, {{the smallest}} painting in the museum.', note: '최상급 the + -est', g: 'g2'},
      {en: '{{There were}} three eyewitnesses.', note: 'There were + 복수 명사', g: 'g1'},
      {en: 'She was much {{taller than}} me.', note: '비교급 (much로 강조)', g: 'g1'},
      {en: 'She had {{the biggest}} bag in the room.', note: '최상급 (big → biggest)', g: 'g2'},
      {en: 'I ran after her, but she was {{faster than}} me.', note: '비교급 -er than', g: 'g1'},
      {en: 'She ordered {{the cheapest}} drink on the menu.', note: '최상급 the + -est', g: 'g2'}
    ],
    summary: {text: 'Someone stole the {{smallest}} painting in the museum. The woman was {{taller}} than Mia, and her {{wig}} fell off. She spoke French and ordered the {{cheapest}} drink. Only Ann matches all the clues, so she is the {{criminal}}. A good detective {{compares}} the clues.'},
    order: ['A woman stood next to Mia.', 'The lights went out for a moment.', 'Her wig fell off near the exit.', 'The detective compared the clues.'],
    chart: {title: 'SUSPECTS', ko: '용의자와 단서 비교하기', cols: ['Height · Hair', 'Language · Eyes'], note: '표를 보고 비교급으로 말하게 한다. (Dana is shorter than Mia. Chloe’s hair is longer than Ann’s.)', rows: [
      {name: 'Chloe', cells: ['172 cm · long blond', 'French · ?']},
      {name: 'Dana', cells: ['145 cm · short brown', 'French · ?']},
      {name: 'Bella', cells: ['168 cm · short gray', 'only Spanish · ?']},
      {name: 'Ann', cells: ['170 cm · short gray', 'English, French · green']}
    ]},
    wrap: {en: 'The criminal is ______ because she is ______er than ______ and ______.', ko: '관통 질문으로 돌아가기: 단서를 비교해 범인을 고른 까닭 쓰기'}
  },

  quiz: [
    ['“목격자”를 뜻하는 낱말은?', ['suspect', 'eyewitness', 'janitor', 'owner'], 1, 'eyewitness: 목격자'],
    ['“expensive”의 반대말은?', ['cheap', 'secret', 'famous', 'small'], 0, 'expensive ↔ cheap'],
    ['“Something fell ___ his head.”', ['on', 'off', 'in', 'up'], 1, 'fall off: ~에서 떨어지다'],
    ['허락을 구하는 표현은?', ['You must not run.', 'May I sit here?', 'Don’t touch it.', 'How often do you come?'], 1, 'May I ~?'],
    ['“May I eat here?”의 거절로 알맞은 것은?', ['Yes, you may.', 'Sure.', 'No, you may not.', 'Of course.'], 2, 'No, you may not.'],
    ['금지하는 표현은?', ['You must not feed the animals.', 'May I feed the animals?', 'I like animals.', 'Let’s feed the animals.'], 0, 'You must not ~.'],
    ['Let’s Watch에서 샌드위치를 먹을 수 있는 곳은?', ['복도', '1층 카페', '전시실', '정원'], 1, 'You can eat in the café on the first floor.'],
    ['빈칸에 알맞은 것은? “She was ___ than me.”', ['tall', 'taller', 'tallest', 'more tall'], 1, '비교급 tall → taller'],
    ['빈칸에 알맞은 것은? “It was ___ cake in the bakery.”', ['small', 'smaller', 'the smallest', 'most small'], 2, '최상급 the smallest'],
    ['어법상 틀린 문장은?', ['He is faster than me.', 'It is the biggest room.', 'She is more taller than him.', 'This is more expensive.'], 2, 'She is taller than him.'],
    ['빈칸에 알맞은 것은? “Ann is the tallest ___ the four.”', ['in', 'of', 'than', 'at'], 1, 'of + 복수 명사'],
    ['도난당한 그림의 특징은?', ['가장 비싼 그림', '가장 작은 그림', '가장 오래된 그림', '가장 큰 그림'], 1, 'the smallest painting in the museum'],
    ['관리인이 본 것은?', ['초록색 눈', '영수증', '떨어진 가발', '가장 큰 가방'], 2, 'Something fell off her head. It was a wig!'],
    ['벨라가 범인이 아닌 까닭은?', ['키가 작아서', '머리가 길어서', '프랑스어를 못 해서', '눈이 파래서'], 2, 'Bella doesn’t speak French.'],
    ['글의 요지로 알맞은 것은?', ['미술관은 위험하다', '좋은 탐정은 단서를 비교한다', '가발은 쓰면 안 된다', '그림은 비싸다'], 1, 'A good detective compares the clues.']
  ]
};

/* ── 보강: 원리 중심 문법 · 모션 그래픽 · 낱말 만들기 · 발음 기호 ── */
(function (L) {
  const ipa = {crime: '/kraɪm/', criminal: '/ˈkrɪmɪnl/', scene: '/siːn/', steal: '/stiːl/', eyewitness: '/ˈaɪwɪtnəs/', suspect: '/ˈsʌspekt/', statement: '/ˈsteɪtmənt/', guard: '/ɡɑːrd/', janitor: '/ˈdʒænɪtər/', owner: '/ˈoʊnər/', wig: '/wɪɡ/', height: '/haɪt/', language: '/ˈlæŋɡwɪdʒ/', explain: '/ɪkˈspleɪn/', reason: '/ˈriːzn/', rule: '/ruːl/', flash: '/flæʃ/', expensive: '/ɪkˈspensɪv/', damage: '/ˈdæmɪdʒ/', secret: '/ˈsiːkrət/'};
  L.vocab.words.forEach(w => { if (ipa[w.w]) w.ipa = ipa[w.w]; });
  L.vocab.morph = [
    {w: 'eyewitness', ko: '목격자', parts: [{t: 'eye', k: 'root', m: '눈'}, {t: 'witness', k: 'root', m: '증인'}], family: ['witness', 'eyebrow', 'eyesight'], note: '자기 눈(eye)으로 직접 본 증인(witness) → 목격자.'},
    {w: 'criminal', ko: '범인', parts: [{t: 'crim(e)', k: 'root', m: '범죄'}, {t: 'inal', k: 'suf', m: '~와 관련된 (사람)'}], family: ['crime', 'final', 'original'], note: '범죄(crime)와 관련된 사람 → 범인.'},
    {w: 'statement', ko: '진술', parts: [{t: 'state', k: 'root', m: '말하다, 진술하다'}, {t: 'ment', k: 'suf', m: '~한 것 (명사)'}], family: ['movement', 'payment', 'agreement'], note: '동사 + -ment = 명사 (move → movement).'}
  ];
  const [g1, g2] = L.grammar.points;
  g1.principle = {
    q: '두 개를 비교할 때 왜 -er을 붙일까?',
    pic: [{en: 'tall', ko: '키가 큰'}, {en: 'taller than', ko: '~보다 더 큰 (둘을 비교)', hot: true}],
    core: '비교급은 두 대상을 견주어 “더 ~한” 쪽을 가리킨다. 짧은 낱말은 -er, 긴 낱말은 앞에 more를 붙이고, 비교 대상은 than 뒤에 둔다.',
    why: ['1음절: tall → taller, big → bigger(자음 하나 더), easy → easier(y → i).', '2음절 이상 대부분: careful → more careful.', '불규칙: good → better, bad → worse, many/much → more.']
  };
  g1.anim = [{title: '두 문장을 than으로 비교하면', states: [
    {t: 'Ann/S | is | tall/C#c | . | / | Mia/S#l | is | short | .', note: '두 사람', ko: '앤은 키가 크다. 미아는 작다.'},
    {t: 'Ann/S | is | taller/X#c | than/X | Mia/S#l | .', note: 'tall → taller + than', ko: '앤은 미아보다 키가 크다.'}]}];
  g1.contrast = {title: '-er? more?', pairs: [
    {a: 'Dana is {{shorter}} than Mia.', ka: '다나는 미아보다 키가 작다. (짧은 낱말 + -er)', b: 'This painting is {{more expensive}} than that one.', kb: '이 그림은 저것보다 더 비싸다. (긴 낱말 → more)'}],
    point: '짧으면 -er, 길면 more. 둘을 비교할 때 than.'};
  g2.principle = {
    q: '셋 이상 중에서 “가장”을 말할 때 왜 the를 붙일까?',
    pic: [{en: 'big', ko: '큰'}, {en: 'bigger', ko: '둘 중 더 큰'}, {en: 'the biggest', ko: '모두 중 하나뿐인 가장 큰', hot: true}],
    core: '최상급은 여럿 가운데 “딱 하나”를 가리킨다. 하나로 정해지는 것이므로 앞에 the를 붙인다. 짧은 낱말은 -est, 긴 낱말은 most를 쓴다.',
    why: ['1음절: big → the biggest, safe → the safest.', '긴 낱말: the most shocking, the most important.', '불규칙: good → the best, bad → the worst.']
  };
  g2.anim = [{title: '원급 → 비교급 → 최상급', states: [
    {t: 'The Little Fox/S | is | a small painting/C#c | .', note: '원급', ko: '“작은 여우”는 작은 그림이다.'},
    {t: 'The Little Fox/S | is | smaller/X#c | than the other paintings | .', note: '비교급: 둘(또는 다른 것들)과 비교', ko: '“작은 여우”는 다른 그림들보다 작다.'},
    {t: 'The Little Fox/S | is | the smallest/X#c | painting | in the museum/M | .', note: '최상급: the + -est (미술관에서 하나뿐)', ko: '“작은 여우”는 미술관에서 가장 작은 그림이다.'}]}];
  g2.contrast = {title: '-est? most?', pairs: [
    {a: 'It was {{the worst}} day for the museum.', ka: '미술관에 최악의 날이었다. (불규칙: bad → worst)', b: 'It was {{the most famous}} painting in the room.', kb: '그것은 그 방에서 가장 유명한 그림이었다. (긴 낱말 → the most)'}],
    point: '짧으면 the -est, 길면 the most, 불규칙은 따로.'};
})(window.LESSON);
