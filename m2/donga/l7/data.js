/* 중2 영어(동아·윤정미) Lesson 7 · Let's Enjoy Festivals
   교과서 대조(2026-10): 의사소통 기능(선호 묻고 답하기 · 이유 묻고 답하기), 언어 형식(가주어 It ~ to / that · call A B),
   읽기 주제(Seasonal Festivals Around the World — 계절마다 열리는 세계의 축제), 단원 어휘를 교과서 본문 어휘와 맞췄다.
   대화문·읽기 글은 저작권 때문에 교과서 원문을 싣지 않고, 같은 주제·같은 언어 형식으로 새로 쓴 글이다.
   읽기 글의 축제(홀리, 라 토마티나, 보령 머드 축제)는 널리 알려진 사실을 바탕으로 했습니다. */
window.LESSON = {
  book: 'm2-donga', no: 7,
  title: 'Let’s Enjoy Festivals', ko: '축제를 즐겨요',
  bigQ: {en: 'Why do people around the world love festivals?', ko: '세계 사람들은 왜 축제를 사랑할까?'},
  align: {
    tb: {reading: 'Seasonal Festivals Around the World', funcs: ['선호 묻고 답하기', '이유 묻고 답하기'], forms: ['가주어 it (It is important to remember ~)', 'call A B (They call it the Midsummer festival.)'],
      note: '교과서 읽기는 계절마다 열리는 세계의 축제 네 가지(스페인 파야스, 멕시코 망자의 날, 스웨덴 하지 축제, 알래스카 퍼 론디)를 소개하는 글. 여기 본문은 다른 세 축제(인도 홀리, 스페인 라 토마티나, 보령 머드 축제)로 같은 짜임·같은 언어 형식으로 새로 쓴 글이다.'},
    std: {vocab: ['9영01-01', '9영02-01'], talk: ['9영01-02', '9영02-06'], grammar: ['9영02-03'], read1: ['9영01-02', '9영01-03'], read2: ['9영01-09', '9영02-03']},
    forms: ['Anticipatory It', 'Sentence Patterns']
  },
  goals: {
    vocab: ['축제·문화와 관련된 낱말 20개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 내가 아는 축제를 한 문장으로 소개할 수 있다.'],
    talk: ['둘 중 더 좋아하는 것을 묻고 답할 수 있다. (Which do you like more, A or B?)', '이유를 묻고 답할 수 있다. (Why do you like ~? — Because ~.)'],
    grammar: ['가주어 It과 진주어 to부정사로 의견을 말할 수 있다.', 'call A B로 ‘A를 B라고 부르다’를 표현할 수 있다.'],
    read1: ['글의 주제를 예측하고, 첫 번째 축제를 정확히 이해할 수 있다.'],
    read2: ['세 축제를 비교하고 글의 요지를 요약할 수 있다.', '우리 학교 축제를 기획하는 글을 영어로 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'What festival have you been to?', ko: '가 본 축제가 있나요?', note: '지역 축제, 학교 축제, 불꽃 축제 등. 무엇을 했고 무엇이 가장 재미있었는지 묻는다. 축제에서 하는 활동이 오늘 낱말로 이어진다.'},
    words: [
      {w: 'festival', pos: 'n.', ko: '축제', ic: '🎉', audio: 'assets/audio/festival.mp3', audioCredit: 'Dvortygirl · GFDL (Wikimedia Commons, US)', ex: 'Our town has a festival every fall.', exKo: '우리 마을은 가을마다 축제를 연다.'},
      {w: 'celebrate', pos: 'v.', ko: '기념하다, 축하하다', ic: '🥳', audio: 'assets/audio/celebrate.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'People celebrate the new year.', exKo: '사람들은 새해를 기념한다.'},
      {w: 'tradition', pos: 'n.', ko: '전통', ic: '🏮', audio: 'assets/audio/tradition.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'It is an old tradition.', exKo: '그것은 오래된 전통이다.'},
      {w: 'culture', pos: 'n.', ko: '문화', ic: '🌏', audio: 'assets/audio/culture.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Festivals show a country’s culture.', exKo: '축제는 한 나라의 문화를 보여 준다.'},
      {w: 'crowd', pos: 'n.', ko: '군중, 사람들', ic: '👥', audio: 'assets/audio/crowd.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'A huge crowd filled the street.', exKo: '엄청난 인파가 거리를 메웠다.'},
      {w: 'throw', pos: 'v.', ko: '던지다', ic: '🤾', audio: 'assets/audio/throw.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'They throw water at each other.', exKo: '그들은 서로에게 물을 던진다.'},
      {w: 'mud', pos: 'n.', ko: '진흙', ic: '🟤', audio: 'assets/audio/mud.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The kids played in the mud.', exKo: '아이들은 진흙 속에서 놀았다.'},
      {w: 'parade', pos: 'n.', ko: '행진, 퍼레이드', ic: '🎺', audio: 'assets/audio/parade.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'We watched the parade downtown.', exKo: '우리는 시내에서 퍼레이드를 보았다.'},
      {w: 'costume', pos: 'n.', ko: '의상', ic: '🎭', audio: 'assets/audio/costume.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'She wore a colorful costume.', exKo: '그녀는 화려한 의상을 입었다.'},
      {w: 'firework', pos: 'n.', ko: '불꽃놀이', ic: '🎆', ex: 'The fireworks lit up the sky.', exKo: '불꽃이 하늘을 밝혔다.'},
      {w: 'messy', pos: 'adj.', ko: '지저분한, 엉망인', ic: '🫠', ex: 'The festival is fun but messy.', exKo: '그 축제는 재미있지만 지저분하다.'},
      {w: 'event', pos: 'n.', ko: '행사', ic: '📅', audio: 'assets/audio/event.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The main event starts at noon.', exKo: '본 행사는 정오에 시작한다.'},
      {w: 'hold', pos: 'v.', ko: '(행사를) 열다', ic: '🎪', audio: 'assets/audio/hold.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The town holds the festival in July.', exKo: '그 도시는 7월에 축제를 연다.'},
      {w: 'unique', pos: 'adj.', ko: '독특한', ic: '🦄', audio: 'assets/audio/unique.mp3', audioCredit: 'Neskaya · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Each festival is unique.', exKo: '축제마다 독특하다.'},
      {w: 'seasonal', pos: 'adj.', ko: '계절의, 계절마다 있는', ic: '🍂', ex: 'There are many seasonal festivals.', exKo: '계절마다 열리는 축제가 많다.'},
      {w: 'statue', pos: 'n.', ko: '조각상', ic: '🗽', ex: 'They make giant wooden statues.', exKo: '그들은 거대한 나무 조각상을 만든다.'},
      {w: 'symbolize', pos: 'v.', ko: '상징하다', ic: '🔣', ex: 'The colors symbolize spring.', exKo: '그 색들은 봄을 상징한다.'},
      {w: 'decorate', pos: 'v.', ko: '장식하다', ic: '🎀', ex: 'People decorate the streets with flowers.', exKo: '사람들은 꽃으로 거리를 장식한다.'},
      {w: 'participate', pos: 'v.', ko: '참가하다', ic: '🙋', ex: 'Thousands of people participate in the fight.', exKo: '수천 명이 그 싸움에 참가한다.'},
      {w: 'traditional', pos: 'adj.', ko: '전통적인', ic: '🏮', ex: 'They enjoy traditional dances.', exKo: '그들은 전통 춤을 즐긴다.'}
    ],
    phrases: [
      {w: 'take place', ko: '(행사가) 열리다', ex: 'The festival takes place in August.', exKo: '그 축제는 8월에 열린다.'},
      {w: 'get together', ko: '모이다', ex: 'Families get together on holidays.', exKo: '가족들은 명절에 모인다.'},
      {w: 'be covered with', ko: '~으로 뒤덮이다', ex: 'Everyone was covered with mud.', exKo: '모두가 진흙으로 뒤덮였다.'},
      {w: 'from all over the world', ko: '전 세계에서', ex: 'Visitors come from all over the world.', exKo: '방문객들이 전 세계에서 온다.'},
      {w: 'look forward to', ko: '~을 고대하다', ex: 'I’m looking forward to the festival.', exKo: '나는 축제를 손꼽아 기다리고 있다.'},
      {w: 'call A B', ko: 'A를 B라고 부르다', ex: 'People call Holi the Festival of Colors.', exKo: '사람들은 홀리를 색의 축제라고 부른다.'}
    ],
    pairs: [
      {a: 'messy', b: 'clean', rel: '반대말'},
      {a: 'symbol', b: 'symbolize', rel: '명사 / 동사'},
      {a: 'take place', b: 'be held', rel: '비슷한 말'},
      {a: 'celebrate', b: 'celebration', rel: '동사 / 명사'}
    ],
    wrap: {en: 'My favorite festival is ______. People ______ there.', ko: '오늘 배운 낱말을 넣어 좋아하는 축제 소개하기'}
  },

  talk: {
    hook: {en: 'Which do you like more, summer festivals or winter festivals?', ko: '여름 축제와 겨울 축제 중 어느 쪽을 더 좋아하나요?', note: '손을 들어 고르게 한 뒤 몇 명에게 그 까닭을 묻는다. 선호와 이유를 묻고 답하는 표현으로 이어진다.'},
    speakers: {Daniel: {voice: 1, pitch: 1}, Yuna: {voice: 0, pitch: 1.15}, Priya: {voice: 0, pitch: 1.05}, Marco: {voice: 1, pitch: .95}, Teacher: {voice: 2, pitch: 1.05}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '선호 묻고 답하기',
        key: {q: ['Which do you like more(better), A or B?', 'Which of the two do you like better?'], a: ['I like A more.', 'I like A much better.', 'I prefer B.']},
        note: 'Which do you like more, A or B?로 둘 중 더 좋아하는 것을 묻는다. 대답은 I like A more(better). much를 넣으면 “훨씬”.',
        dialogs: [
          { title: 'Dialogue A', setting: '축제장 먹거리 장터', lines: [
            {s: 'Daniel', en: 'They have tteokbokki and gimbap here. {{Which of the two do you like better}}?', ko: '여기 떡볶이랑 김밥이 있어. 둘 중 어느 게 더 좋아?'},
            {s: 'Yuna', en: '{{I like tteokbokki much better}}. I love spicy food.', ko: '떡볶이가 훨씬 좋아. 매운 음식을 정말 좋아하거든.'},
            {s: 'Daniel', en: 'Then let’s order tteokbokki. It looks delicious.', ko: '그럼 떡볶이 시키자. 맛있어 보인다.'},
            {s: 'Yuna', en: 'OK. I’m so hungry!', ko: '좋아. 정말 배고파!'}
          ]},
          { title: 'Dialogue B', setting: '축제 기념품 가게', lines: [
            {s: 'A', en: 'Let’s get a souvenir. {{Which do you like more}}, the T-shirt {{or}} the cap?', ko: '기념품 하나 사자. 티셔츠랑 모자 중 뭐가 더 좋아?'},
            {s: 'B', en: '{{I like the T-shirt more}}.', ko: '티셔츠가 더 좋아.'},
            {s: 'A', en: 'Really? The cap looks cooler to me.', ko: '정말? 나는 모자가 더 멋져 보여.'},
            {s: 'B', en: 'Then let’s get one of each!', ko: '그럼 하나씩 사자!'}
          ]}
        ],
        check: [
          {q: 'Which does Yuna like better, tteokbokki or gimbap?', a: 'Tteokbokki.'},
          {q: 'What will they order?', a: 'Tteokbokki.'},
          {q: 'Which does B like more, the T-shirt or the cap?', a: 'The T-shirt.'}
        ],
        drill: {frame: ['A: Which do you like more, ____?', 'B: I like ... more.'], opts: ['summer or winter', 'parades or fireworks', 'Holi or La Tomatina', 'pizza or chicken', 'music or dance', 'spring or fall']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '이유 묻고 답하기',
        key: {q: ['Why do you like ~?', 'Why?', 'What’s the reason?'], a: ['Because ~.', 'I love ~.', 'It’s because ~.']},
        note: 'Why?로 이유를 묻고 Because + 주어 + 동사로 답한다. Because 없이 이유 문장만 말해도 된다.',
        dialogs: [
          { title: 'Dialogue A', setting: '방과 후, 교실', lines: [
            {s: 'Priya', en: 'Which do you like more, winter or summer?', ko: '겨울이랑 여름 중 뭐가 더 좋아?'},
            {s: 'Marco', en: 'I like winter more.', ko: '나는 겨울이 더 좋아.'},
            {s: 'Priya', en: '{{Why do you like}} winter more?', ko: '왜 겨울이 더 좋아?'},
            {s: 'Marco', en: '{{Because}} I love winter festivals. You can ski and build snowmen.', ko: '겨울 축제를 정말 좋아하거든. 스키도 타고 눈사람도 만들 수 있잖아.'}
          ]},
          { title: 'Dialogue B', setting: '축제 사진 전시 앞', lines: [
            {s: 'A', en: 'Look at these pictures! Which do you like more, the red one or the blue one?', ko: '이 사진들 봐! 빨간 것과 파란 것 중 어느 게 더 좋아?'},
            {s: 'B', en: 'The blue one.', ko: '파란 거.'},
            {s: 'A', en: '{{Why}}?', ko: '왜?'},
            {s: 'B', en: '{{It’s because}} the lanterns look like stars in the sky.', ko: '등불이 하늘의 별처럼 보여서.'}
          ]}
        ],
        check: [
          {q: 'Which does Marco like more?', a: 'Winter.'},
          {q: 'Why does Marco like winter more?', a: 'Because he loves winter festivals (He can ski and build snowmen).'},
          {q: 'Why does B like the blue picture?', a: 'The lanterns look like stars in the sky.'}
        ],
        drill: {frame: ['A: Why do you like ____?', 'B: Because ...'], opts: ['Holi', 'the Mud Festival', 'fireworks', 'parades', 'winter', 'La Tomatina']}
      }
    ],
    interviewEx: 'Hana knows about Songkran. She would love to go to the Mud Festival.',
    watch: {
      label: 'Let’s Watch', title: 'Planning Our School Festival', setting: '학생회실. 축제 준비 위원 다니엘과 유나가 올해 축제의 이름과 행사를 정한다.',
      lines: [
        {s: 'Daniel', en: 'Our school festival is in three weeks. Do you know about the festival in Boryeong?', ko: '학교 축제가 3주 뒤야. 보령의 축제 알아?'},
        {s: 'Yuna', en: 'The Mud Festival? Yes, I know about it. Why?', ko: '머드 축제? 응, 알아. 왜?'},
        {s: 'Daniel', en: 'We can’t use mud, but it’s fun to have a messy game. How about a water balloon game?', ko: '진흙은 못 쓰지만 지저분한 게임이 하나 있으면 재미있잖아. 물풍선 게임은 어때?'},
        {s: 'Yuna', en: 'Great! And what should we call our festival?', ko: '좋아! 그리고 우리 축제를 뭐라고 부를까?'},
        {s: 'Daniel', en: 'Let’s call it “Splash Day.”', ko: '“스플래시 데이”라고 부르자.'},
        {s: 'Yuna', en: 'Perfect. Would you like to make the poster with me?', ko: '완벽해. 나랑 포스터 만들래?'},
        {s: 'Daniel', en: 'I’d love to!', ko: '좋아!'}
      ],
      check: [
        {q: 'When is their school festival?', a: 'In three weeks.'},
        {q: 'What game does Daniel suggest?', a: 'A water balloon game.'},
        {q: 'What will they call their festival?', a: '“Splash Day.”'}
      ]
    },
    wrap: {en: 'Tell your partner about a festival, then invite them to go with you.', ko: '축제 하나를 아는지 묻고 소개한 뒤, 짝을 초대하고 답하기'}
  },

  grammar: {
    cover: 'It ~ to · call',
    hook: {en: '{{It}} is fun {{to throw}} colors.  /  People {{call}} Holi the Festival of Colors.', ko: '빈칸에 들어갈 말은 각각 어떤 일을 할까?', answer: 'It은 뒤의 to throw colors를 대신하는 가짜 주어, call A B는 ‘A를 B라고 부르다’', note: '“무엇이 재미있다고?”라고 물어 진짜 주어가 to throw colors임을 찾게 한다.'},
    points: [
      { id: 'g1', name: '가주어 It ~ 진주어 to부정사', short: 'It ~ to부정사', form: 'It is + 형용사 + (for 사람) + to + 동사원형', meaning: '~하는 것은 …하다',
        notice: [
          {en: '{{It}} is fun {{to throw}} colored powder.', ko: '색 가루를 던지는 것은 재미있다.'},
          {en: '{{It}} is important {{to wear}} goggles.', ko: '고글을 쓰는 것은 중요하다.'},
          {en: '{{It}} is easy {{for}} us {{to make}} friends there.', ko: '거기서 우리가 친구를 사귀는 것은 쉽다.'}
        ],
        rule: [
          {k: '원래 문장', v: 'To + 동사원형 ~ is …', ex: 'To wear goggles is important.'},
          {k: '가주어', v: '긴 주어를 뒤로 보내고 It을 앞에', ex: 'It is important to wear goggles.'},
          {k: '의미상 주어', v: 'for + 사람 (to부정사의 행동을 하는 사람)', ex: 'It is hard for me to wake up early.'}
        ],
        check: [
          {q: '____ is exciting to watch the parade. (가주어)', a: 'It'},
          {q: 'It is fun ____ costumes. (wear)', a: 'to wear'},
          {q: 'It is dangerous ____ throw stones. (to부정사)', a: 'to'},
          {q: 'It is easy ____ kids to join. (의미상 주어)', a: 'for'},
          {q: 'It ____ important to protect your eyes. (be, 현재)', a: 'is'}
        ],
        trap: {bad: 'It is fun throw tomatoes.', good: 'It is fun to throw tomatoes.', why: '진주어 자리에는 to + 동사원형을 쓴다.'},
        scramble: [
          {ko: '불꽃놀이를 보는 것은 신난다.', en: 'It is exciting to watch fireworks.'},
          {ko: '다른 문화를 배우는 것은 흥미롭다.', en: 'It is interesting to learn about other cultures.'},
          {ko: '우리에게 일찍 일어나는 것은 어렵다.', en: 'It is hard for us to get up early.'}
        ]
      },
      { id: 'g2', name: 'call A B', short: 'call A B', form: 'call + A(목적어) + B(이름·명사)', meaning: 'A를 B라고 부르다',
        notice: [
          {en: 'People {{call}} Holi {{the Festival of Colors}}.', ko: '사람들은 홀리를 색의 축제라고 부른다.'},
          {en: 'My friends {{call}} me {{Sunny}}.', ko: '친구들은 나를 써니라고 부른다.'},
          {en: 'We {{call}} this day {{Chuseok}}.', ko: '우리는 이날을 추석이라고 부른다.'}
        ],
        rule: [
          {k: '순서', v: 'call + 누구/무엇 + 이름', ex: 'They call the dog Max.'},
          {k: '같은 모양', v: 'name A B (A를 B라고 이름 짓다)', ex: 'They named the baby Hana.'},
          {k: '수동', v: 'A is called B (A는 B라고 불린다)', ex: 'This festival is called La Tomatina.'}
        ],
        check: [
          {q: 'We ____ our cat Coco. (부르다)', a: 'call'},
          {q: 'People call ____ the King of Pop. (he)', a: 'him'},
          {q: 'This festival ____ called Songkran. (be)', a: 'is'},
          {q: 'They named ____ dog Max. (their)', a: 'their'},
          {q: 'What do you call this food ____ English?', a: 'in'}
        ],
        trap: {bad: 'People call it as the Festival of Colors.', good: 'People call it the Festival of Colors.', why: 'call A B에서 B 앞에 as를 쓰지 않는다.'},
        scramble: [
          {ko: '우리는 그 축제를 스플래시 데이라고 부른다.', en: 'We call the festival Splash Day.'},
          {ko: '사람들은 그를 축제왕이라고 부른다.', en: 'People call him the Festival King.'},
          {ko: '이 행사는 라 토마티나라고 불린다.', en: 'This event is called La Tomatina.'}
        ]
      }
    ],
    wrap: {en: 'It is fun to ______. We call our class ______.', ko: 'It ~ to부정사 한 문장, call A B 한 문장으로 우리 반 소개하기'},
    wrapEx: 'It is fun to dance at the festival. We call our class the Happy Team.'
  },

  reading: {
    title: 'Messy, Colorful, Wonderful', kind: '세계 축제 소개 기사', cover: 'Festa', coverKo: '세계의 축제', cover2: 'Together', coverKo2: '함께 즐기는 축제',
    before: [
      {q: 'Look at the title. What kind of festivals will you read about?', a: '지저분하고 화려하지만 멋진 축제'},
      {q: 'Why do people enjoy messy festivals?', a: '자유롭게 예측한 뒤 글과 비교'}
    ],
    gloss: {
      'India': '인도', 'good over evil': '선이 악을 이김', 'Buñol': '부뇰 (스페인 마을)', 'squeeze': '짓누르다', 'firefighters': '소방관',
      'tidal flats': '갯벌', 'Boryeong': '보령 (충남)', 'slide': '미끄럼틀', 'goggles': '고글', 'rules': '규칙', 'barriers': '벽, 장벽'
    },
    paras: [
      {who: '', en: 'Some festivals are quiet and beautiful. Others are loud, messy, and full of color. Today, let’s travel to three festivals where it is okay to get dirty.',
       ko: '어떤 축제는 조용하고 아름답습니다. 또 어떤 축제는 시끄럽고 지저분하고 색으로 가득하죠. 오늘은 더러워져도 괜찮은 세 축제로 여행을 떠나 봅시다.',
       check: {q: 'What kind of festivals will we visit?', a: 'Festivals where it is okay to get dirty.'}, think: '여러분은 조용한 축제와 시끄러운 축제 중 어느 쪽이 좋은가요?'},
      {who: 'Holi · India', en: 'Holi takes place in India every spring. People call it the Festival of Colors. On the main day, crowds fill the streets and throw colored powder at each other. Friends, family, and even strangers join in.',
       ko: '홀리는 해마다 봄에 인도에서 열립니다. 사람들은 홀리를 색의 축제라고 부릅니다. 축제의 본날, 사람들이 거리를 가득 메우고 서로에게 색 가루를 던집니다. 친구, 가족, 심지어 낯선 사람들도 함께하죠.',
       check: {q: 'What do people call Holi?', a: 'The Festival of Colors.'}, think: '낯선 사람과 색 가루를 주고받으면 어떤 느낌일까?'},
      {who: 'Holi · India', en: 'Holi celebrates the end of winter and the victory of good over evil. During Holi, it is common to say sorry and forgive old fights. When everyone is covered with color, it is hard to tell who is rich or poor.',
       ko: '홀리는 겨울의 끝과 선이 악을 이긴 것을 기념합니다. 홀리 동안에는 미안하다고 말하고 지난 다툼을 용서하는 것이 흔합니다. 모두가 색으로 뒤덮이면 누가 부자이고 가난한지 구별하기 어렵습니다.',
       check: {q: 'What does Holi celebrate?', a: 'The end of winter and the victory of good over evil.'}, think: '색으로 뒤덮이면 왜 차이를 구별하기 어려울까?'},
      {who: 'La Tomatina · Spain', en: 'On the last Wednesday of August, the small town of Buñol in Spain turns red. Thousands of people throw tomatoes at each other for one hour. People call this event La Tomatina. It started in 1945, and now visitors come from all over the world.',
       ko: '8월 마지막 수요일, 스페인의 작은 마을 부뇰은 빨갛게 변합니다. 수천 명이 한 시간 동안 서로에게 토마토를 던집니다. 사람들은 이 행사를 라 토마티나라고 부르죠. 1945년에 시작되었고, 지금은 전 세계에서 방문객이 옵니다.',
       check: {q: 'When does La Tomatina take place?', a: 'On the last Wednesday of August.'}, think: '토마토를 던지는 축제에 찬성하나요, 반대하나요?'},
      {who: 'La Tomatina · Spain', en: 'There are some rules. It is important to squeeze the tomatoes before you throw them, so nobody gets hurt. After the fight, firefighters wash the streets with water.',
       ko: '몇 가지 규칙이 있습니다. 아무도 다치지 않도록 토마토를 던지기 전에 짓누르는 것이 중요합니다. 싸움이 끝나면 소방관들이 물로 거리를 씻어 냅니다.',
       check: {q: 'Why should people squeeze the tomatoes?', a: 'So nobody gets hurt.'}, think: '축제에 규칙이 필요한 까닭은?'},
      {who: 'Mud Festival · Korea', en: 'Korea has a messy festival, too. Every July, the Boryeong Mud Festival takes place on Daecheon Beach. The mud comes from the tidal flats near Boryeong. Visitors slide down mud slides and paint each other with mud. Some people say the mud is good for your skin.',
       ko: '한국에도 지저분한 축제가 있습니다. 해마다 7월이면 대천해수욕장에서 보령 머드 축제가 열립니다. 진흙은 보령 근처의 갯벌에서 옵니다. 방문객들은 진흙 미끄럼틀을 타고 서로에게 진흙을 칠합니다. 진흙이 피부에 좋다고 말하는 사람들도 있습니다.',
       check: {q: 'Where does the mud come from?', a: 'From the tidal flats near Boryeong.'}, think: '외국인 친구에게 이 축제를 어떻게 소개할까?'},
      {who: 'Your Turn', en: 'Colors, tomatoes, and mud are all different. But these festivals have one thing in common. For one day, people forget their worries and the barriers between them. It is easy to become friends when everyone is a little messy.',
       ko: '색, 토마토, 진흙은 모두 다릅니다. 하지만 이 축제들에는 공통점이 하나 있습니다. 하루 동안 사람들은 걱정과 서로 사이의 벽을 잊습니다. 모두가 조금씩 엉망일 때 친구가 되기는 쉽습니다.',
       check: {q: 'What do the three festivals have in common?', a: 'People forget their worries and the barriers between them.'}, think: '우리 학교 축제에서 벽을 허물 수 있는 활동은?'}
    ],
    split: 3,
    next: '토마토와 진흙으로\n어떤 축제를 할까?',
    recap: {q: '홀리는 어떤 축제일까?', items: [{k: 'WHERE · WHEN', v: 'India, every spring'}, {k: 'WHAT', v: 'people throw colored powder'}, {k: 'MEANING', v: 'the end of winter, good over evil'}]},
    tf: [
      {p: 1, s: 'Only family members join Holi.', a: false, why: '낯선 사람들도 함께한다.'},
      {p: 2, s: 'During Holi, people often forgive old fights.', a: true},
      {p: 3, s: 'La Tomatina takes place in Buñol, Spain.', a: true},
      {p: 4, s: 'People throw hard tomatoes at La Tomatina.', a: false, why: '던지기 전에 짓눌러야 한다.'},
      {p: 5, s: 'The Boryeong Mud Festival takes place in July.', a: true},
      {p: 6, s: 'The writer says festivals build barriers between people.', a: false, why: '사람 사이의 벽을 잊게 한다.'}
    ],
    key: [
      {en: 'People {{call}} it {{the Festival of Colors}}.', note: 'call A B: A를 B라고 부르다', g: 'g2'},
      {en: '{{It}} is common {{to say}} sorry and forgive old fights.', note: '가주어 It ~ 진주어 to부정사', g: 'g1'},
      {en: '{{It}} is hard {{to tell}} who is rich or poor.', note: 'It ~ to부정사 (tell: 구별하다)', g: 'g1'},
      {en: 'People {{call}} this event {{La Tomatina}}.', note: 'call + 목적어 + 이름', g: 'g2'},
      {en: '{{It}} is important {{to squeeze}} the tomatoes.', note: 'It is + 형용사 + to부정사', g: 'g1'},
      {en: '{{It}} is easy {{to become}} friends.', note: 'It ~ to부정사 (글의 결론)', g: 'g1'}
    ],
    summary: {text: 'People call Holi the Festival of {{Colors}}, and they throw colored {{powder}}. At La Tomatina in Spain, people throw {{tomatoes}}, but it is important to {{squeeze}} them first. At the Boryeong Mud Festival, visitors play with {{mud}}. At these festivals, it is easy to become {{friends}}.'},
    order: ['Crowds fill the streets.', 'They throw colored powder.', 'Everyone is covered with color.', 'It is hard to tell who is rich or poor.'],
    chart: {title: 'THREE FESTIVALS', ko: '세 축제 비교하기', cols: ['Where · When', 'What people do', 'Special point'], note: '세 축제의 공통점(벽을 허묾)을 찾아 관통 질문에 답하게 한다.', rows: [
      {name: 'Holi', cells: ['India · spring', 'throw colored powder', 'forgive old fights']},
      {name: 'La Tomatina', cells: ['Buñol, Spain · August', 'throw tomatoes for an hour', 'squeeze them first']},
      {name: 'Mud Festival', cells: ['Boryeong · July', 'slide and paint with mud', 'mud from tidal flats']}
    ]},
    wrap: {en: 'We call our festival ______. It is fun to ______. Would you like to ______?', ko: '관통 질문으로 돌아가기: 우리 학교 축제를 기획해 세 문장으로 소개하기'}
  },

  quiz: [
    ['“전통”을 뜻하는 낱말은?', ['culture', 'costume', 'tradition', 'celebrate'], 2, 'tradition: 전통'],
    ['“messy”의 반대말은?', ['clean', 'unique', 'colorful', 'exciting'], 0, 'messy ↔ clean'],
    ['“The festival ___ place in July.” (열린다)', ['gets', 'takes', 'holds', 'makes'], 1, 'take place: 열리다'],
    ['“I’m looking forward ___ the festival.”', ['in', 'at', 'to', 'for'], 2, 'look forward to'],
    ['“상징하다”를 뜻하는 낱말은?', ['decorate', 'symbolize', 'celebrate', 'participate'], 1, 'symbolize: 상징하다'],
    ['선호를 묻는 표현은?', ['Why do you like it?', 'Which do you like more, summer or winter?', 'Do you know about Holi?', 'Would you like to go?'], 1, 'Which do you like more, A or B?'],
    ['“Why do you like winter more?”에 알맞은 대답은?', ['I like winter more.', 'Because I love skiing.', 'Yes, I do.', 'It’s in December.'], 1, 'Because ~.'],
    ['Let’s Watch에서 정한 축제 이름은?', ['Mud Day', 'Splash Day', 'Color Day', 'Tomato Day'], 1, 'Let’s call it “Splash Day.”'],
    ['빈칸에 알맞은 것은? “It is hard ___ me to get up early.”', ['of', 'for', 'to', 'with'], 1, '의미상 주어 for + 사람'],
    ['빈칸에 알맞은 것은? “___ is fun to watch the parade.”', ['It', 'This', 'That', 'There'], 0, '가주어 It'],
    ['어법상 틀린 문장은?', ['They call him Max.', 'It is fun to dance.', 'We call it Splash Day.', 'People call it as Holi.'], 3, 'call A B에는 as를 쓰지 않는다.'],
    ['같은 뜻의 문장은? “To wear goggles is important.”', ['It is important wearing goggles.', 'It is important to wear goggles.', 'It is important that wear goggles.', 'Wear goggles it is important.'], 1, '가주어 It ~ 진주어 to부정사'],
    ['홀리가 열리는 나라와 계절은?', ['인도 · 봄', '인도 · 가을', '스페인 · 여름', '한국 · 여름'], 0, 'Holi takes place in India every spring.'],
    ['라 토마티나에서 토마토를 짓눌러 던지는 까닭은?', ['더 멀리 날아가서', '색이 더 진해서', '아무도 다치지 않게', '토마토를 아끼려고'], 2, 'so nobody gets hurt'],
    ['세 축제의 공통점으로 글쓴이가 말한 것은?', ['모두 여름에 열린다', '모두 음식을 던진다', '모두 유럽에서 열린다', '사람 사이의 벽을 잊게 한다'], 3, 'people forget their worries and the barriers between them']
  ]
};

/* ── 보강: 원리 중심 문법 · 모션 그래픽 · 낱말 만들기 · 발음 기호 ── */
(function (L) {
  const ipa = {festival: '/ˈfestɪvl/', celebrate: '/ˈselɪbreɪt/', tradition: '/trəˈdɪʃn/', culture: '/ˈkʌltʃər/', crowd: '/kraʊd/', throw: '/θroʊ/', mud: '/mʌd/', parade: '/pəˈreɪd/', costume: '/ˈkɑːstuːm/', firework: '/ˈfaɪərwɜːrk/', messy: '/ˈmesi/', event: '/ɪˈvent/', hold: '/hoʊld/', unique: '/juˈniːk/', seasonal: '/ˈsiːzənl/', statue: '/ˈstætʃuː/', symbolize: '/ˈsɪmbəlaɪz/', decorate: '/ˈdekəreɪt/', participate: '/pɑːrˈtɪsɪpeɪt/', traditional: '/trəˈdɪʃənl/'};
  L.vocab.words.forEach(w => { if (ipa[w.w]) w.ipa = ipa[w.w]; });
  L.vocab.morph = [
    {w: 'firework', ko: '불꽃놀이', parts: [{t: 'fire', k: 'root', m: '불'}, {t: 'work', k: 'root', m: '작품, 일'}], family: ['homework', 'artwork', 'teamwork'], note: '불로 만든 작품 → 불꽃놀이. 보통 복수형 fireworks로 쓴다.'},
    {w: 'celebration', ko: '축하, 기념행사', parts: [{t: 'celebrat(e)', k: 'root', m: '축하하다'}, {t: 'ion', k: 'suf', m: '~것 (명사)'}], family: ['celebrate', 'tradition', 'invitation'], note: '동사 + -ion = 명사 (celebrate → celebration, invite → invitation).'},
    {w: 'unique', ko: '독특한, 유일한', parts: [{t: 'uni', k: 'pre', m: '하나'}, {t: 'que', k: 'suf', m: '~한 (형용사)'}], family: ['uniform', 'unicycle', 'unite'], note: 'uni- = 하나. 하나뿐인 → 독특한.'}
  ];
  const [g1, g2] = L.grammar.points;
  g1.principle = {
    q: '주어가 길 때 왜 It을 앞에 세울까?',
    pic: [{en: 'It', ko: '임시 주어 (자리만 맡음)', hot: true}, {en: 'is fun', ko: '짧은 정보'}, {en: 'to throw tomatoes', ko: '진짜 주어 (긴 정보)'}],
    core: '영어는 문장 앞을 가볍게, 뒤를 무겁게 두는 것을 좋아한다. 긴 to부정사 주어를 뒤로 보내고, 빈 주어 자리에 뜻이 없는 It을 세운다.',
    why: ['It은 “그것”으로 해석하지 않는다 — 자리만 맡은 가짜 주어.', 'to부정사의 행동 주체를 말하려면 for + 사람을 to 앞에 둔다 (It is fun for kids to ~).', 'To throw tomatoes is fun.도 맞지만, 머리가 무거워 잘 쓰지 않는다.']
  };
  g1.anim = [{title: '긴 주어를 뒤로 보내고 It을 세우면', states: [
    {t: 'To throw tomatoes/S#tt | is/V#is | fun/C#fun | .', note: '긴 주어가 앞에 (머리가 무겁다)', ko: '토마토를 던지는 것은 재미있다.'},
    {t: 'It/X | is/V#is | fun/C#fun | to throw tomatoes/S#tt | .', note: '진짜 주어는 뒤로, 빈자리에 It', ko: '토마토를 던지는 것은 재미있다.'}]}];
  g1.contrast = {title: '가주어 It vs 대명사 It', pairs: [
    {a: '{{It}} is important to protect your eyes.', ka: '눈을 보호하는 것이 중요하다. (가주어: It = to protect ~)', b: '{{It}} is a big festival.', kb: '그것은 큰 축제다. (대명사: It = 앞에 나온 축제)'}],
    point: '뒤에 to부정사가 따라오면 가주어 It.'};
  g2.principle = {
    q: 'call A B에는 왜 목적어 뒤에 명사가 또 올까?',
    pic: [{en: 'People call', ko: '부르다'}, {en: 'Holi', ko: '대상 (A)'}, {en: 'the Festival of Colors', ko: 'A의 이름·별명 (B)', hot: true}],
    core: 'call A B에서 B는 A가 무엇인지 설명하는 이름이다 (A = B). 목적어 A 혼자로는 뜻이 끝나지 않아서, A를 설명하는 B가 뒤따라온다.',
    why: ['A와 B 사이에는 “A는 B다”라는 관계가 있다 (Holi = the Festival of Colors).', 'name, make, keep도 같은 구조: name the dog Max, make me happy.', '수동태: Holi is called the Festival of Colors.']
  };
  g2.anim = [{title: 'A = B 관계가 문장 속으로', states: [
    {t: 'Holi/S#h | is/V#is | the Festival of Colors/C#fc | .', note: 'A는 B다', ko: '홀리는 색의 축제다.'},
    {t: 'People/S | call/V | Holi/O#h | the Festival of Colors/C#fc | .', note: 'call + A + B (A를 B라고 부르다)', ko: '사람들은 홀리를 색의 축제라고 부른다.'},
    {t: 'Holi/S#h | is called/X#is | the Festival of Colors/C#fc | .', note: '수동태: A is called B', ko: '홀리는 색의 축제라고 불린다.'}]}];
  g2.contrast = {title: 'call A B vs give A B', pairs: [
    {a: 'They {{call}} the town Buñol “Tomato City.”', ka: '그들은 부뇰 마을을 “토마토 도시”라고 부른다. (A = B)', b: 'They {{gave}} the visitors tomatoes.', kb: '그들은 방문객들에게 토마토를 주었다. (A ≠ B, 수여동사)'}],
    point: 'A와 B가 같은 대상이면 call A B, 다른 대상이면 “주다” 류.'};
})(window.LESSON);
