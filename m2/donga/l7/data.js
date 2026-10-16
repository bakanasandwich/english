/* 중2 영어(동아·윤정미) Lesson 7 · Let's Enjoy Festivals
   단원명과 문법(It ~ to부정사, call A B)은 교과서 목차·문제집 목차 기준.
   의사소통 기능은 추정(estimate: true). 대화문·읽기 글은 교과서 원문이 아니라 새로 쓴 글입니다.
   읽기 글의 축제(홀리, 라 토마티나, 보령 머드 축제)는 널리 알려진 사실을 바탕으로 했습니다. */
window.LESSON = {
  book: 'm2-donga', no: 7, estimate: true,
  title: 'Let’s Enjoy Festivals', ko: '축제를 즐겨요',
  bigQ: {en: 'Why do people around the world love festivals?', ko: '세계 사람들은 왜 축제를 사랑할까?'},
  goals: {
    vocab: ['축제·문화와 관련된 낱말 20개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 내가 아는 축제를 한 문장으로 소개할 수 있다.'],
    talk: ['어떤 것을 알고 있는지 묻고 답할 수 있다.', '초대하고 초대에 답할 수 있다.'],
    grammar: ['가주어 It과 진주어 to부정사로 의견을 말할 수 있다.', 'call A B로 ‘A를 B라고 부르다’를 표현할 수 있다.'],
    read1: ['글의 주제를 예측하고, 첫 번째 축제를 정확히 이해할 수 있다.'],
    read2: ['세 축제를 비교하고 글의 요지를 요약할 수 있다.', '우리 학교 축제를 기획하는 글을 영어로 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'What festival have you been to?', ko: '가 본 축제가 있나요?', note: '지역 축제, 학교 축제, 불꽃 축제 등. 무엇을 했고 무엇이 가장 재미있었는지 묻는다. 축제에서 하는 활동이 오늘 낱말로 이어진다.'},
    words: [
      {w: 'festival', pos: 'n.', ko: '축제', ic: '🎉', ex: 'Our town has a festival every fall.', exKo: '우리 마을은 가을마다 축제를 연다.'},
      {w: 'celebrate', pos: 'v.', ko: '기념하다, 축하하다', ic: '🥳', ex: 'People celebrate the new year.', exKo: '사람들은 새해를 기념한다.'},
      {w: 'tradition', pos: 'n.', ko: '전통', ic: '🏮', ex: 'It is an old tradition.', exKo: '그것은 오래된 전통이다.'},
      {w: 'culture', pos: 'n.', ko: '문화', ic: '🌏', ex: 'Festivals show a country’s culture.', exKo: '축제는 한 나라의 문화를 보여 준다.'},
      {w: 'crowd', pos: 'n.', ko: '군중, 사람들', ic: '👥', ex: 'A huge crowd filled the street.', exKo: '엄청난 인파가 거리를 메웠다.'},
      {w: 'throw', pos: 'v.', ko: '던지다', ic: '🤾', ex: 'They throw water at each other.', exKo: '그들은 서로에게 물을 던진다.'},
      {w: 'powder', pos: 'n.', ko: '가루', ic: '🌈', ex: 'The powder comes in many colors.', exKo: '그 가루는 여러 색으로 나온다.'},
      {w: 'mud', pos: 'n.', ko: '진흙', ic: '🟤', ex: 'The kids played in the mud.', exKo: '아이들은 진흙 속에서 놀았다.'},
      {w: 'parade', pos: 'n.', ko: '행진, 퍼레이드', ic: '🎺', ex: 'We watched the parade downtown.', exKo: '우리는 시내에서 퍼레이드를 보았다.'},
      {w: 'costume', pos: 'n.', ko: '의상', ic: '🎭', ex: 'She wore a colorful costume.', exKo: '그녀는 화려한 의상을 입었다.'},
      {w: 'firework', pos: 'n.', ko: '불꽃놀이', ic: '🎆', ex: 'The fireworks lit up the sky.', exKo: '불꽃이 하늘을 밝혔다.'},
      {w: 'spring', pos: 'n.', ko: '봄', ic: '🌸', ex: 'Holi welcomes spring.', exKo: '홀리는 봄을 맞이한다.'},
      {w: 'messy', pos: 'adj.', ko: '지저분한, 엉망인', ic: '🫠', ex: 'The festival is fun but messy.', exKo: '그 축제는 재미있지만 지저분하다.'},
      {w: 'stranger', pos: 'n.', ko: '낯선 사람', ic: '🧍', ex: 'Even strangers become friends there.', exKo: '그곳에서는 낯선 사람들도 친구가 된다.'},
      {w: 'skin', pos: 'n.', ko: '피부', ic: '🧴', ex: 'Some people say mud is good for your skin.', exKo: '진흙이 피부에 좋다고 말하는 사람들이 있다.'},
      {w: 'protect', pos: 'v.', ko: '보호하다', ic: '🥽', ex: 'Wear goggles to protect your eyes.', exKo: '눈을 보호하기 위해 고글을 써라.'},
      {w: 'invite', pos: 'v.', ko: '초대하다', ic: '💌', ex: 'I invited my friends to the festival.', exKo: '나는 친구들을 축제에 초대했다.'},
      {w: 'event', pos: 'n.', ko: '행사', ic: '📅', ex: 'The main event starts at noon.', exKo: '본 행사는 정오에 시작한다.'},
      {w: 'hold', pos: 'v.', ko: '(행사를) 열다', ic: '🎪', ex: 'The town holds the festival in July.', exKo: '그 도시는 7월에 축제를 연다.'},
      {w: 'unique', pos: 'adj.', ko: '독특한', ic: '🦄', ex: 'Each festival is unique.', exKo: '축제마다 독특하다.'}
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
      {a: 'stranger', b: 'friend', rel: '반대말'},
      {a: 'take place', b: 'be held', rel: '비슷한 말'},
      {a: 'celebrate', b: 'celebration', rel: '동사 / 명사'}
    ],
    wrap: {en: 'My favorite festival is ______. People ______ there.', ko: '오늘 배운 낱말을 넣어 좋아하는 축제 소개하기'}
  },

  talk: {
    hook: {en: 'If you could go to any festival in the world, where would you go?', ko: '세계 어떤 축제든 갈 수 있다면 어디에 가고 싶나요?', note: '학생들이 아는 세계 축제를 모아 본다(리우 카니발, 삿포로 눈 축제 등). 아는지 묻는 표현(Do you know about ~?)으로 연결한다.'},
    speakers: {Jinwoo: {voice: 1, pitch: .95}, Priya: {voice: 0, pitch: 1.1}, Clara: {voice: 0, pitch: 1.15}, Minsu: {voice: 1, pitch: .9}, Daniel: {voice: 1, pitch: 1}, Yuna: {voice: 0, pitch: 1.05}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '알고 있는지 묻고 답하기',
        key: {q: ['Do you know about ~?', 'Do you know what ~ is?'], a: ['Yes, I know (about) it.', 'No, I don’t. What is it?', 'I’ve heard of it, but ~.']},
        note: 'Do you know about ~?에 모르면 No, I don’t. What is it? 처럼 되묻게 하면 대화가 이어진다.',
        dialogs: [
          { title: 'Dialogue A', setting: '사회 시간이 끝난 뒤, 교실', lines: [
            {s: 'Priya', en: 'Jinwoo, {{do you know about}} Holi?', ko: '진우야, 홀리 알아?'},
            {s: 'Jinwoo', en: '{{No, I don’t. What is it}}?', ko: '아니, 몰라. 그게 뭐야?'},
            {s: 'Priya', en: 'It’s a spring festival in India. People throw colored powder at each other.', ko: '인도의 봄 축제야. 사람들이 서로에게 색 가루를 던져.'},
            {s: 'Jinwoo', en: 'That sounds fun! Have you ever joined it?', ko: '재미있겠다! 너 참여해 봤어?'},
            {s: 'Priya', en: 'Yes, with my cousins. It’s exciting to see everyone covered with colors.', ko: '응, 사촌들이랑. 모두가 색으로 뒤덮인 걸 보는 게 신나.'},
            {s: 'Jinwoo', en: 'I want to try it someday.', ko: '나도 언젠가 해 보고 싶다.'}
          ]},
          { title: 'Dialogue B', setting: '점심시간, 급식실', lines: [
            {s: 'A', en: '{{Do you know what}} La Tomatina {{is}}?', ko: '라 토마티나가 뭔지 알아?'},
            {s: 'B', en: '{{I’ve heard of it, but}} I don’t know much.', ko: '들어 보긴 했는데 잘은 몰라.'},
            {s: 'A', en: 'It’s a tomato fight in Spain!', ko: '스페인의 토마토 싸움이야!'},
            {s: 'B', en: 'Really? What a messy festival!', ko: '정말? 엄청 지저분한 축제네!'}
          ]}
        ],
        check: [
          {q: 'Where does Holi take place?', a: 'In India.'},
          {q: 'What do people throw at Holi?', a: 'Colored powder.'},
          {q: 'What is La Tomatina?', a: 'A tomato fight in Spain.'}
        ],
        drill: {frame: ['A: Do you know about ____?', 'B: No, I don’t. What is it?'], opts: ['Holi', 'Songkran', 'Chuseok', 'Halloween', 'Diwali', 'the Mud Festival']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '초대하고 답하기',
        key: {q: ['Would you like to ~?', 'Can you come to ~?', 'Why don’t you join us?'], a: ['I’d love to.', 'Sure, sounds great!', 'I’m sorry, but I can’t.']},
        note: 'Would you like to + 동사원형. 거절할 때는 I’m sorry, but I can’t. 뒤에 까닭을 붙이고, 가능하면 다른 때를 제안한다.',
        dialogs: [
          { title: 'Dialogue A', setting: '6월 말, 하굣길', lines: [
            {s: 'Minsu', en: 'Clara, {{would you like to}} go to the Boryeong Mud Festival with my family?', ko: '클라라, 우리 가족이랑 보령 머드 축제 갈래?'},
            {s: 'Clara', en: '{{I’d love to}}! When is it?', ko: '정말 가고 싶어! 언제야?'},
            {s: 'Minsu', en: 'It takes place in July. We’re going on the 20th.', ko: '7월에 열려. 우리는 20일에 가.'},
            {s: 'Clara', en: 'What should I bring?', ko: '뭘 가져가야 해?'},
            {s: 'Minsu', en: 'Old clothes and goggles. It’s easy to get mud in your eyes.', ko: '헌 옷이랑 고글. 눈에 진흙이 들어가기 쉽거든.'},
            {s: 'Clara', en: 'Got it. I’m looking forward to it!', ko: '알겠어. 정말 기대된다!'}
          ]},
          { title: 'Dialogue B', setting: '금요일 쉬는 시간', lines: [
            {s: 'A', en: '{{Can you come to}} our school festival on Saturday?', ko: '토요일 우리 학교 축제에 올 수 있어?'},
            {s: 'B', en: '{{I’m sorry, but I can’t}}. I have to visit my grandma.', ko: '미안하지만 못 가. 할머니 댁에 가야 해.'},
            {s: 'A', en: 'That’s okay. Maybe next year.', ko: '괜찮아. 내년에 오면 되지.'},
            {s: 'B', en: 'Please send me some photos!', ko: '사진 좀 보내 줘!'}
          ]}
        ],
        check: [
          {q: 'When does the Boryeong Mud Festival take place?', a: 'In July.'},
          {q: 'What should Clara bring?', a: 'Old clothes and goggles.'},
          {q: 'Why can’t B come to the school festival?', a: 'B has to visit B’s grandma.'}
        ],
        drill: {frame: ['A: Would you like to ____?', 'B: I’d love to.'], opts: ['see the fireworks', 'join the parade', 'come to my party', 'go to the festival', 'try street food', 'wear costumes']}
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
    ['“낯선 사람”을 뜻하는 낱말은?', ['crowd', 'visitor', 'resident', 'stranger'], 3, 'stranger: 낯선 사람'],
    ['알고 있는지 묻는 표현은?', ['I’d love to.', 'Can you come?', 'Do you know about Holi?', 'Would you like to go?'], 2, 'Do you know about ~?'],
    ['초대를 거절하는 표현은?', ['I’d love to.', 'Sounds great!', 'Sure, why not?', 'I’m sorry, but I can’t.'], 3, 'I’m sorry, but I can’t.'],
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
