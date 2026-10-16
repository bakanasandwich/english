/* 중2 영어(동아·윤정미) Lesson 1 · The Future Is in Our Hands
   단원명은 교과서 목차 기준. 대화문·읽기 글은 교과서 원문이 아니라 단원 주제에 맞춰 새로 쓴 글입니다.
   의사소통 기능과 문법은 교과서 구성표 확인 전 추정(estimate: true).
   문장 속 {{ }}는 핵심 표현(슬라이드·학습지에서 빈칸)입니다. */
window.LESSON = {
  book: 'm2-donga', no: 1, estimate: true,
  title: 'The Future Is in Our Hands', ko: '미래는 우리 손에',
  bigQ: {en: 'What can we do for our planet today?', ko: '오늘 우리가 지구를 위해 할 수 있는 일은?'},
  goals: {
    vocab: ['환경·기후와 관련된 낱말 20개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 환경 문제를 한 문장으로 말할 수 있다.'],
    talk: ['걱정을 표현하고 그에 답할 수 있다.', '함께 할 일을 제안하고 답할 수 있다.'],
    grammar: ['목적을 나타내는 to부정사(~하기 위해)를 쓸 수 있다.', '조건을 나타내는 접속사 if를 써서 결과를 말할 수 있다.'],
    read1: ['글의 주제를 예측하고, 첫 번째 모둠의 활동을 정확히 이해할 수 있다.'],
    read2: ['세 모둠의 문제·행동·결과를 비교하고 글의 요지를 요약할 수 있다.', '지구를 위한 나의 실천을 영어로 쓸 수 있다.']
  },

  /* ───────── 1차시 · 어휘 ───────── */
  vocab: {
    hook: {en: 'What do you throw away every day?', ko: '여러분은 매일 무엇을 버리나요?', note: '30초 동안 짝과 오늘 버린 것을 떠올려 말하게 한다(우유팩, 비닐, 남은 음식…). 나온 낱말을 칠판에 모아 두면 waste, plastic, recycle과 연결된다.'},
    words: [
      {w: 'environment', pos: 'n.', ko: '환경', ic: '🌍', ex: 'We should protect the environment.', exKo: '우리는 환경을 보호해야 한다.'},
      {w: 'planet', pos: 'n.', ko: '행성; 지구', ic: '🪐', ex: 'There is no other planet like Earth.', exKo: '지구 같은 행성은 또 없다.'},
      {w: 'climate', pos: 'n.', ko: '기후', ic: '🌡️', ex: 'The climate is getting warmer.', exKo: '기후가 점점 따뜻해지고 있다.'},
      {w: 'pollution', pos: 'n.', ko: '오염', ic: '🏭', ex: 'Air pollution is bad for our health.', exKo: '대기 오염은 건강에 해롭다.'},
      {w: 'waste', pos: 'n./v.', ko: '쓰레기; 낭비하다', ic: '🗑️', ex: 'Don’t waste water when you brush your teeth.', exKo: '양치할 때 물을 낭비하지 마라.'},
      {w: 'plastic', pos: 'n./adj.', ko: '플라스틱; 플라스틱의', ic: '🧴', ex: 'Plastic takes hundreds of years to break down.', exKo: '플라스틱은 분해되는 데 수백 년이 걸린다.'},
      {w: 'recycle', pos: 'v.', ko: '재활용하다', ic: '♻️', ex: 'We recycle cans and paper at school.', exKo: '우리는 학교에서 캔과 종이를 재활용한다.'},
      {w: 'reduce', pos: 'v.', ko: '줄이다', ic: '📉', ex: 'Let’s reduce food waste.', exKo: '음식물 쓰레기를 줄이자.'},
      {w: 'reuse', pos: 'v.', ko: '다시 쓰다', ic: '🔁', ex: 'You can reuse this bottle many times.', exKo: '이 병은 여러 번 다시 쓸 수 있다.'},
      {w: 'save', pos: 'v.', ko: '아끼다; 구하다', ic: '💡', ex: 'Turn off the lights to save energy.', exKo: '에너지를 아끼기 위해 불을 꺼라.'},
      {w: 'energy', pos: 'n.', ko: '에너지', ic: '⚡', ex: 'Solar energy comes from the sun.', exKo: '태양 에너지는 해에서 온다.'},
      {w: 'protect', pos: 'v.', ko: '보호하다', ic: '🛡️', ex: 'Trees protect the soil from rain.', exKo: '나무는 비로부터 흙을 보호한다.'},
      {w: 'worried', pos: 'adj.', ko: '걱정하는', ic: '😟', ex: 'I’m worried about the polar bears.', exKo: '나는 북극곰이 걱정된다.'},
      {w: 'campaign', pos: 'n.', ko: '캠페인, (사회) 운동', ic: '📣', ex: 'Our class started a no-plastic campaign.', exKo: '우리 반은 플라스틱 안 쓰기 캠페인을 시작했다.'},
      {w: 'solution', pos: 'n.', ko: '해결책', ic: '🧩', ex: 'We need a solution to this problem.', exKo: '우리는 이 문제의 해결책이 필요하다.'},
      {w: 'leftover', pos: 'n./adj.', ko: '남은 음식; 남은', ic: '🍱', ex: 'We used leftover rice to make fried rice.', exKo: '우리는 남은 밥으로 볶음밥을 만들었다.'},
      {w: 'collect', pos: 'v.', ko: '모으다', ic: '🧺', ex: 'We collected trash on the beach.', exKo: '우리는 해변에서 쓰레기를 모았다.'},
      {w: 'local', pos: 'adj.', ko: '지역의', ic: '📍', ex: 'Buy fruit from local farms.', exKo: '지역 농장의 과일을 사라.'},
      {w: 'result', pos: 'n.', ko: '결과', ic: '📊', ex: 'The result surprised everyone.', exKo: '그 결과는 모두를 놀라게 했다.'},
      {w: 'possible', pos: 'adj.', ko: '가능한', ic: '✨', ex: 'Is it possible to live without plastic?', exKo: '플라스틱 없이 사는 것이 가능할까?'}
    ],
    phrases: [
      {w: 'throw away', ko: '버리다', ex: 'Don’t throw away old clothes.', exKo: '헌 옷을 버리지 마라.'},
      {w: 'turn off', ko: '(전기·물 등을) 끄다', ex: 'Turn off the tap while you wash your hands.', exKo: '손을 씻는 동안 수도꼭지를 잠가라.'},
      {w: 'be worried about', ko: '~을 걱정하다', ex: 'She is worried about the air.', exKo: '그녀는 공기를 걱정한다.'},
      {w: 'pick up', ko: '줍다', ex: 'We picked up cans in the park.', exKo: '우리는 공원에서 캔을 주웠다.'},
      {w: 'make a difference', ko: '변화를 가져오다', ex: 'Small actions can make a difference.', exKo: '작은 행동이 변화를 만들 수 있다.'},
      {w: 'in the end', ko: '결국, 마침내', ex: 'In the end, we saved a lot of paper.', exKo: '결국 우리는 종이를 많이 아꼈다.'}
    ],
    pairs: [
      {a: 'reduce', b: 'increase', rel: '반대말'},
      {a: 'save', b: 'waste', rel: '반대말'},
      {a: 'collect', b: 'gather', rel: '비슷한 말'},
      {a: 'recycle', b: 'recycling', rel: '동사 / 명사', note: 'We recycle. / Recycling is easy.'}
    ],
    wrap: {en: 'I’m worried about ______. I can ______ to save the planet.', ko: '오늘 배운 낱말 두 개 이상을 넣어 환경을 위한 나의 다짐 쓰기'}
  },

  /* ───────── 2차시 · 대화문 ───────── */
  talk: {
    hook: {en: 'What environmental problem worries you the most?', ko: '가장 걱정되는 환경 문제는 무엇인가요?', note: '미세먼지, 폭염, 바다 쓰레기 등 학생 경험에서 끌어낸다. 답을 영어로 바꿔 주며 I’m worried about ~ 을 미리 들려준다.'},
    speakers: {Hana: {voice: 0, pitch: 1.1}, Ben: {voice: 1, pitch: .95}, Mina: {voice: 0, pitch: 1.15}, Tom: {voice: 1, pitch: .9}, Jisu: {voice: 0, pitch: 1.1}, Alex: {voice: 1, pitch: .95}, 'Mr. Lee': {voice: 2, pitch: .9}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '걱정 표현하고 답하기',
        key: {q: ['What are you worried about?', 'You look worried. What’s wrong?'], a: ['I’m worried about ~.', 'I’m concerned about ~.', 'Don’t worry. / I’m sure ~.']},
        note: 'worried about 뒤에는 명사나 -ing가 온다. 걱정을 들은 사람은 Don’t worry. / I’m sure ~ 로 안심시키거나 해결책을 말한다.',
        dialogs: [
          { title: 'Dialogue A', setting: '아침 등굣길, 하늘이 뿌옇다', lines: [
            {s: 'Ben', en: 'Hana, why are you wearing a mask today?', ko: '하나야, 오늘 왜 마스크를 쓰고 있어?'},
            {s: 'Hana', en: 'The fine dust is really bad. {{I’m worried about}} my health.', ko: '미세먼지가 정말 심해. 건강이 걱정돼.'},
            {s: 'Ben', en: 'Me too. The sky looks gray these days.', ko: '나도. 요즘 하늘이 회색으로 보여.'},
            {s: 'Hana', en: 'I read that cars make a lot of air pollution.', ko: '자동차가 대기 오염을 많이 만든다고 읽었어.'},
            {s: 'Ben', en: 'Then let’s walk to school more often.', ko: '그럼 학교에 더 자주 걸어가자.'},
            {s: 'Hana', en: 'Good idea. {{I’m sure}} it will help a little.', ko: '좋은 생각이야. 조금은 도움이 될 거라고 확신해.'}
          ]},
          { title: 'Dialogue B', setting: '과학 시간이 끝난 뒤', lines: [
            {s: 'A', en: 'You look {{worried}}. What’s wrong?', ko: '걱정스러워 보여. 무슨 일 있어?'},
            {s: 'B', en: 'I’m {{concerned about}} the sea animals. There’s so much plastic in the ocean.', ko: '바다 동물들이 걱정돼. 바다에 플라스틱이 너무 많아.'},
            {s: 'A', en: '{{Don’t worry}} too much. We can start by using fewer straws.', ko: '너무 걱정하지 마. 빨대를 덜 쓰는 것부터 시작할 수 있어.'},
            {s: 'B', en: 'You’re right. Small things matter.', ko: '네 말이 맞아. 작은 일이 중요하지.'}
          ]}
        ],
        check: [
          {q: 'Why is Hana wearing a mask?', a: 'Because the fine dust is really bad.'},
          {q: 'What does Ben suggest?', a: 'He suggests walking to school more often.'},
          {q: 'What is B worried about?', a: 'B is worried about the sea animals.'}
        ],
        drill: {frame: ['A: What are you worried about?', 'B: I’m worried about ____.'], opts: ['the polar bears', 'fine dust', 'food waste', 'hot summers', 'plastic in the sea', 'forest fires']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '제안하고 답하기',
        key: {q: ['Why don’t we ~?', 'How about -ing?', 'Let’s ~.'], a: ['That’s a good idea.', 'Sounds great!', 'Sorry, but I can’t.']},
        note: 'Why don’t we 뒤에는 동사원형, How about 뒤에는 -ing. 거절할 때는 Sorry, but ~ 뒤에 까닭을 붙이면 자연스럽다.',
        dialogs: [
          { title: 'Dialogue A', setting: '점심시간, 급식실', lines: [
            {s: 'Mina', en: 'Look at all the food in the trash can, Tom.', ko: '톰, 쓰레기통에 있는 음식 좀 봐.'},
            {s: 'Tom', en: 'Wow, that’s a lot of waste.', ko: '와, 엄청난 낭비다.'},
            {s: 'Mina', en: '{{Why don’t we}} start a clean-plate campaign?', ko: '우리 빈 그릇 캠페인을 시작하는 게 어때?'},
            {s: 'Tom', en: '{{That’s a good idea}}. How can we do it?', ko: '좋은 생각이야. 어떻게 하지?'},
            {s: 'Mina', en: '{{How about}} making posters for the cafeteria?', ko: '급식실에 붙일 포스터를 만드는 건 어때?'},
            {s: 'Tom', en: 'Great. Let’s start this afternoon.', ko: '좋아. 오늘 오후에 시작하자.'}
          ]},
          { title: 'Dialogue B', setting: '토요일 아침, 전화 통화', lines: [
            {s: 'A', en: '{{Let’s}} pick up trash at the park tomorrow.', ko: '내일 공원에서 쓰레기를 줍자.'},
            {s: 'B', en: '{{Sorry, but I can’t}}. I have a piano lesson.', ko: '미안하지만 못 해. 피아노 수업이 있어.'},
            {s: 'A', en: 'Then how about next Sunday?', ko: '그럼 다음 일요일은 어때?'},
            {s: 'B', en: 'Sounds great!', ko: '좋아!'}
          ]}
        ],
        check: [
          {q: 'What does Mina want to start?', a: 'She wants to start a clean-plate campaign.'},
          {q: 'How will they tell others about the campaign?', a: 'They will make posters for the cafeteria.'},
          {q: 'Why can’t B go to the park tomorrow?', a: 'Because B has a piano lesson.'}
        ],
        drill: {frame: ['A: Why don’t we ____?', 'B: That’s a good idea.'], opts: ['plant trees', 'use our own cups', 'walk to school', 'turn off the lights', 'recycle cans', 'save water']}
      }
    ],
    interviewEx: 'Minho is worried about fine dust. He suggests walking to school.',
    watch: {
      label: 'Let’s Watch', title: 'The Classroom Energy Team', setting: '쉬는 시간, 텅 빈 교실에 불과 에어컨이 켜져 있다. 지수와 알렉스가 담임 이 선생님과 이야기한다.',
      lines: [
        {s: 'Jisu', en: 'Look, Alex. Nobody is here, but all the lights are on.', ko: '봐, 알렉스. 아무도 없는데 불이 다 켜져 있어.'},
        {s: 'Alex', en: 'The air conditioner is on, too. What a waste!', ko: '에어컨도 켜져 있어. 이런 낭비가!'},
        {s: 'Mr. Lee', en: 'You’re right. Our class used a lot of electricity last month.', ko: '맞아. 우리 반은 지난달에 전기를 많이 썼단다.'},
        {s: 'Jisu', en: 'I’m worried about it. Why don’t we make an energy team?', ko: '걱정돼요. 우리 에너지 지킴이 팀을 만드는 게 어때요?'},
        {s: 'Mr. Lee', en: 'Good idea. What will the team do?', ko: '좋은 생각이구나. 팀은 무엇을 할 거니?'},
        {s: 'Alex', en: 'We’ll check the lights at every break to save energy.', ko: '에너지를 아끼기 위해 쉬는 시간마다 불을 확인할 거예요.'},
        {s: 'Jisu', en: 'If we turn off the lights, we’ll save a lot of electricity.', ko: '불을 끄면 전기를 많이 아낄 수 있을 거예요.'},
        {s: 'Mr. Lee', en: 'Great. Let’s check the result next month.', ko: '좋아. 다음 달에 결과를 확인해 보자.'}
      ],
      check: [
        {q: 'What problem do Jisu and Alex find?', a: 'All the lights are on, but nobody is in the classroom.'},
        {q: 'What does Jisu suggest?', a: 'She suggests making an energy team.'},
        {q: 'When will they check the result?', a: 'Next month.'}
      ]
    },
    wrap: {en: 'Tell your partner one environmental worry and one suggestion.', ko: '걱정 하나와 제안 하나를 넣어 짝과 대화한 뒤, 대화를 두 문장으로 쓰기'}
  },

  /* ───────── 3차시 · 문법 ───────── */
  grammar: {
    cover: 'to / if',
    hook: {en: 'I turned off the light {{to save}} energy.  /  {{If}} we save energy, the planet will be happier.', ko: '빈칸에 들어갈 말은 무엇이고, 문장에 어떤 뜻을 더해 줄까?', answer: 'to + 동사원형은 ‘~하기 위해’(목적), if는 ‘만약 ~하면’(조건)', note: '답을 바로 주지 않고, 두 문장이 각각 ‘왜’와 ‘어떤 조건에서’를 말한다는 점을 학생이 찾게 한다.'},
    points: [
      { id: 'g1', name: 'to부정사의 부사적 용법 (목적)', short: 'to부정사 (목적)', form: 'to + 동사원형', meaning: '~하기 위해',
        notice: [
          {en: 'I walk to school {{to reduce}} pollution.', ko: '나는 오염을 줄이기 위해 학교에 걸어간다.'},
          {en: 'We made posters {{to start}} a campaign.', ko: '우리는 캠페인을 시작하기 위해 포스터를 만들었다.'},
          {en: 'She went to the market {{to buy}} local fruit.', ko: '그녀는 지역 과일을 사기 위해 시장에 갔다.'}
        ],
        rule: [
          {k: '자리', v: '문장 뒤에 붙어 ‘왜’ 했는지 말한다', ex: 'I got up early to catch the bus.'},
          {k: '같은 뜻', v: 'in order to + 동사원형', ex: 'He saved money in order to buy a bike.'},
          {k: '묻고 답하기', v: 'Why did you ~? — To + 동사원형.', ex: 'Why did you go there? — To pick up trash.'}
        ],
        check: [
          {q: 'I use a tumbler ____ plastic cups. (reduce)', a: 'to reduce'},
          {q: 'We went to the beach ____ trash. (collect)', a: 'to collect'},
          {q: 'He turned off the TV ____ energy. (save)', a: 'to save'},
          {q: 'They planted trees ____ the river. (protect)', a: 'to protect'},
          {q: 'She studies hard ____ a scientist. (become)', a: 'to become'}
        ],
        trap: {bad: 'I went to the library for borrow a book.', good: 'I went to the library to borrow a book.', why: '목적을 말할 때 동사 앞에는 for가 아니라 to를 쓴다.'},
        scramble: [
          {ko: '나는 물을 아끼기 위해 샤워를 짧게 한다.', en: 'I take short showers to save water.'},
          {ko: '우리는 쓰레기를 줍기 위해 공원에 갔다.', en: 'We went to the park to pick up trash.'},
          {ko: '그는 비닐을 줄이기 위해 장바구니를 가져온다.', en: 'He brings a shopping bag to reduce plastic.'}
        ]
      },
      { id: 'g2', name: '조건의 접속사 if', short: 'if (조건)', form: 'If + 주어 + 현재시제, 주어 + will ~', meaning: '만약 ~하면 …할 것이다',
        notice: [
          {en: '{{If}} we {{use}} less plastic, the sea {{will be}} cleaner.', ko: '우리가 플라스틱을 덜 쓰면 바다는 더 깨끗해질 것이다.'},
          {en: '{{If}} you {{turn off}} the lights, you {{will save}} energy.', ko: '불을 끄면 에너지를 아낄 것이다.'},
          {en: 'We will plant trees {{if}} it {{is}} sunny tomorrow.', ko: '내일 날씨가 맑으면 우리는 나무를 심을 것이다.'}
        ],
        rule: [
          {k: '모양', v: 'if절은 미래 일이라도 현재시제', ex: 'If it rains tomorrow, we will stay inside.'},
          {k: '자리', v: 'if절이 앞이면 쉼표(,) / 뒤면 쉼표 없음', ex: 'We will stay inside if it rains.'},
          {k: '명령문', v: 'If ~, 명령문: ~하면 …해라', ex: 'If you see trash, pick it up.'}
        ],
        compare: {
          title: '어느 쪽이 맞을까?', note: 'if절 안에서는 will을 쓰지 않는다는 점을 가장 많이 틀린다. 오른쪽 열이 왜 틀렸는지 말해 보게 한다.',
          head: ['if절 (현재시제)', '주절 (will + 동사원형)', '틀린 모양'],
          cols: [['If it rains,', 'If you recycle,', 'If we walk,', 'If she reuses it,'], ['we will stay home.', 'you will save trees.', 'we will be healthy.', 'she will save money.'], ['If it will rain', 'If you will recycle', 'If we will walk', 'If she will reuse']]
        },
        check: [
          {q: 'If you ____ the tap, you will save water. (turn off)', a: 'turn off'},
          {q: 'If it ____ sunny tomorrow, we will clean the beach. (be)', a: 'is'},
          {q: 'If we recycle more, there ____ less trash. (be)', a: 'will be'},
          {q: 'If he ____ by bike, he will not pollute the air. (go)', a: 'goes'},
          {q: 'If you see a plastic bag on the street, ____ it up. (pick)', a: 'pick'}
        ],
        trap: {bad: 'If it will rain tomorrow, we will stay home.', good: 'If it rains tomorrow, we will stay home.', why: '조건을 나타내는 if절에서는 미래의 일도 현재시제로 쓴다.'},
        scramble: [
          {ko: '버스를 타면 너는 공기를 지킬 것이다.', en: 'If you take the bus, you will protect the air.'},
          {ko: '우리가 종이를 재활용하면 나무를 구할 것이다.', en: 'If we recycle paper, we will save trees.'},
          {ko: '쓰레기를 보면 주워라.', en: 'If you see trash, pick it up.'}
        ]
      }
    ],
    wrap: {en: 'I ______ to save the planet. If we ______, ______.', ko: 'to부정사(목적) 한 문장, if 조건문 한 문장으로 나의 실천 쓰기'},
    wrapEx: 'I carry a tumbler to reduce plastic. If we use fewer cups, the sea will be cleaner.'
  },

  /* ───────── 4·5차시 · 본문 ───────── */
  reading: {
    title: 'Small Hands, Big Changes', kind: '학급 프로젝트 보고서', cover: 'Hands', coverKo: '우리 손으로 바꾸는 것', cover2: 'Change', coverKo2: '작은 행동, 큰 변화',
    before: [
      {q: 'Look at the title. What do “small hands” mean?', a: '어른이 아닌 학생들, 작은 힘'},
      {q: 'What can students do to help the planet?', a: '자유롭게 예측한 뒤 글에서 확인'}
    ],
    gloss: {
      project: '과제, 프로젝트', cafeteria: '급식실', 'clean-plate': '음식을 남기지 않는', survey: '설문 조사', portions: '(음식의) 1인분 양',
      tumbler: '텀블러', disposable: '일회용의', plogging: '조깅하며 쓰레기 줍기', jogging: '조깅', habits: '습관', shocked: '충격을 받은'
    },
    paras: [
      {who: '', en: 'This spring, our class had a project called “Small Hands, Big Changes.” Each group chose one problem at our school and tried to solve it for a month. Here are the stories of three groups.',
       ko: '올봄 우리 반은 ‘작은 손, 큰 변화’라는 프로젝트를 했습니다. 모둠마다 학교의 문제 하나를 골라 한 달 동안 해결해 보려고 했습니다. 세 모둠의 이야기를 소개합니다.',
       check: {q: 'How long did each group work on its problem?', a: 'For a month.'}, think: '우리 학교에서 고치고 싶은 문제 하나는?'},
      {who: 'Group 1 · Food Waste', en: 'Our group was shocked by the cafeteria trash cans. They were full of rice and vegetables. To find out why, we did a survey. Many students said, “The portions are too big.”',
       ko: '우리 모둠은 급식실 쓰레기통을 보고 깜짝 놀랐습니다. 밥과 채소로 가득했거든요. 그 까닭을 알아내기 위해 우리는 설문 조사를 했습니다. 많은 학생이 “양이 너무 많아요.”라고 답했습니다.',
       check: {q: 'Why did Group 1 do a survey?', a: 'To find out why students left so much food.'}, think: '여러분이 급식을 남기는 까닭은?'},
      {who: 'Group 1 · Food Waste', en: 'So we started a clean-plate campaign. Students could ask for smaller portions, and we put up posters with a simple message: “If you take only what you need, you will waste less.” In the end, food waste dropped by 30 percent.',
       ko: '그래서 우리는 빈 그릇 캠페인을 시작했습니다. 학생들은 더 적은 양을 요청할 수 있었고, 우리는 간단한 문구를 담은 포스터를 붙였습니다. “필요한 만큼만 담으면 덜 버리게 될 거예요.” 결국 음식물 쓰레기가 30퍼센트 줄었습니다.',
       check: {q: 'How much did food waste drop?', a: 'By 30 percent.'}, think: '포스터 문구가 효과적이었던 까닭은?'},
      {who: 'Group 2 · Plastic', en: 'We counted the plastic cups in our classroom trash. There were more than 200 in just one week! To reduce them, we asked everyone to bring a tumbler. We also kept a few extra cups in a box for students who forgot.',
       ko: '우리는 교실 쓰레기 속 플라스틱 컵을 세어 보았습니다. 겨우 일주일 만에 200개가 넘었어요! 그것을 줄이기 위해 모두에게 텀블러를 가져오자고 부탁했습니다. 잊은 학생을 위해 상자에 여분의 컵 몇 개도 마련해 두었습니다.',
       check: {q: 'How many plastic cups did Group 2 find in one week?', a: 'More than 200.'}, think: '여분의 컵을 둔 것은 왜 좋은 생각일까?'},
      {who: 'Group 2 · Plastic', en: 'At first, only a few students joined. But when the class saw the empty trash can, more students brought tumblers. By the end of the month, we used almost no disposable cups.',
       ko: '처음에는 몇 명만 참여했습니다. 하지만 텅 빈 쓰레기통을 보자 더 많은 학생이 텀블러를 가져왔습니다. 그달 말쯤에는 일회용 컵을 거의 쓰지 않았습니다.',
       check: {q: 'What made more students bring tumblers?', a: 'Seeing the empty trash can.'}, think: '눈에 보이는 결과는 사람들을 어떻게 바꿀까?'},
      {who: 'Group 3 · Trash Outside', en: 'Our group loves running, so we tried plogging. Plogging means jogging and picking up trash at the same time. Every Saturday, we met at the park to jog and clean. We collected 15 bags of trash in a month.',
       ko: '우리 모둠은 달리기를 좋아해서 플로깅을 해 보았습니다. 플로깅은 조깅을 하면서 동시에 쓰레기를 줍는 것입니다. 토요일마다 우리는 달리고 청소하기 위해 공원에서 만났습니다. 한 달 동안 쓰레기 15봉투를 모았습니다.',
       check: {q: 'What is plogging?', a: 'Jogging and picking up trash at the same time.'}, think: '좋아하는 일과 환경 실천을 합친 다른 예는?'},
      {who: 'Group 3 · Trash Outside', en: 'Our project is over, but our new habits are not. We learned that the future is not far away. It is in our hands, and it starts with small changes today.',
       ko: '프로젝트는 끝났지만 우리의 새 습관은 끝나지 않았습니다. 우리는 미래가 멀리 있지 않다는 것을 배웠습니다. 미래는 우리 손안에 있고, 오늘의 작은 변화에서 시작됩니다.',
       check: {q: 'Where is the future, according to the writer?', a: 'In our hands.'}, think: '“Our new habits are not over.”는 무슨 뜻일까?'}
    ],
    split: 3,
    next: '플라스틱 컵과 공원 쓰레기는\n어떻게 줄었을까?',
    recap: {q: '1모둠은 무엇을 바꿨을까?', items: [{k: 'PROBLEM', v: 'too much food waste'}, {k: 'ACTION', v: 'a survey and a clean-plate campaign'}, {k: 'RESULT', v: 'food waste dropped by 30%'}]},
    tf: [
      {p: 1, s: 'The cafeteria trash cans were full of rice and vegetables.', a: true},
      {p: 2, s: 'Group 1 made the portions bigger.', a: false, why: '더 적은 양을 요청할 수 있게 했다.'},
      {p: 3, s: 'Group 2 found more than 200 plastic cups in a week.', a: true},
      {p: 4, s: 'All the students brought tumblers from the first day.', a: false, why: '처음에는 몇 명만 참여했다.'},
      {p: 5, s: 'Group 3 met at the park every Sunday.', a: false, why: 'Sunday가 아니라 Saturday.'},
      {p: 6, s: 'The writer thinks the future starts with small changes.', a: true}
    ],
    key: [
      {en: '{{To find out}} why, we did a survey.', note: 'to부정사 (목적): ~하기 위해', g: 'g1'},
      {en: '{{If}} you {{take}} only what you need, you {{will waste}} less.', note: 'if + 현재시제, 주어 + will ~', g: 'g2'},
      {en: '{{To reduce}} them, we asked everyone to bring a tumbler.', note: 'to부정사 (목적)가 문장 앞에', g: 'g1'},
      {en: 'We met at the park {{to jog and clean}}.', note: 'to + 동사원형 두 개를 and로 연결', g: 'g1'},
      {en: 'Plogging means {{jogging and picking up}} trash.', note: 'mean + 동명사: ~하는 것을 뜻하다', g: ''},
      {en: 'The future {{is in our hands}}.', note: '미래는 우리 손에 달려 있다 (단원 제목)', g: ''}
    ],
    summary: {text: 'Group 1 did a {{survey}} and started a clean-plate {{campaign}}, so food waste {{dropped}}. Group 2 asked everyone to bring a {{tumbler}} to reduce plastic cups. Group 3 tried {{plogging}} and collected 15 bags of trash. The future is in our {{hands}}.'},
    order: ['Group 1 saw full trash cans.', 'They did a survey.', 'They started a clean-plate campaign.', 'Food waste dropped by 30 percent.'],
    chart: {title: 'THREE GROUPS', ko: '세 모둠 비교하기', cols: ['Problem', 'Action', 'Result'], note: '세 모둠 모두 ‘숫자’로 결과를 확인했다는 공통점을 찾게 한다.', rows: [
      {name: 'Group 1', cells: ['food waste', 'survey · clean-plate campaign', 'dropped by 30%']},
      {name: 'Group 2', cells: ['plastic cups', 'bring a tumbler', 'almost no disposable cups']},
      {name: 'Group 3', cells: ['trash in the park', 'plogging every Saturday', '15 bags of trash']}
    ]},
    wrap: {en: 'I’m worried about ______. To help, I will ______. If we ______, ______.', ko: '관통 질문으로 돌아가기: 지구를 위한 나의 실천을 세 문장으로 쓰기'}
  },

  /* ───────── 골든벨: [문제, [보기 4개], 정답 번호(0부터), 해설] ───────── */
  quiz: [
    ['“줄이다”를 뜻하는 낱말은?', ['save', 'reuse', 'reduce', 'collect'], 2, 'reduce: 줄이다 / reuse: 다시 쓰다'],
    ['빈칸에 알맞은 것은? “Please turn ___ the lights.”', ['up', 'off', 'into', 'away'], 1, 'turn off: 끄다'],
    ['“pollution”의 뜻은?', ['오염', '해결책', '재활용', '기후 변화'], 0, 'pollution: 오염'],
    ['“save”와 뜻이 반대인 것은?', ['keep', 'reuse', 'protect', 'waste'], 3, 'save(아끼다) ↔ waste(낭비하다)'],
    ['“We used ___ rice to make fried rice.”', ['leftover', 'local', 'possible', 'worried'], 0, 'leftover: 남은'],
    ['걱정을 나타내는 표현은?', ['Sounds great!', 'Why don’t we go?', 'I’m worried about it.', 'That’s a good idea.'], 2, 'I’m worried about ~: ~이 걱정된다'],
    ['제안하는 표현이 아닌 것은?', ['Let’s walk.', 'How about walking?', 'Why don’t we walk?', 'I’m sure you can walk.'], 3, 'I’m sure ~는 확신·안심을 나타낸다.'],
    ['Let’s Watch에서 지수가 제안한 것은?', ['포스터 만들기', '에너지 지킴이 팀', '에어컨 새로 사기', '창문 열어 두기'], 1, 'Why don’t we make an energy team?'],
    ['빈칸에 알맞은 것은? “If it ___ tomorrow, we will stay home.”', ['rain', 'rains', 'rained', 'will rain'], 1, '조건의 if절은 미래라도 현재시제'],
    ['빈칸에 알맞은 것은? “I walk to school ___ pollution.”', ['reduce', 'reducing', 'to reduce', 'for reduce'], 2, '목적(~하기 위해): to + 동사원형'],
    ['어법상 틀린 문장은?', ['If you see trash, pick it up.', 'He saves money to buy a bike.', 'We went out to pick up trash.', 'If we will recycle, it will help.'], 3, 'If we recycle로 고쳐야 한다.'],
    ['“Why did you go to the park?”에 알맞은 대답은?', ['Yes, I did.', 'Because of trash.', 'To pick up trash.', 'I picked trash up.'], 2, 'Why ~? — To + 동사원형(목적)'],
    ['1모둠이 설문 조사를 한 까닭은?', ['급식 메뉴를 바꾸려고', '음식을 남기는 까닭을 알려고', '포스터 문구를 정하려고', '급식실 청소를 하려고'], 1, 'To find out why, we did a survey.'],
    ['2모둠이 일회용 컵을 줄이기 위해 한 일은?', ['텀블러 가져오기', '플라스틱 컵 팔기', '쓰레기통 치우기', '정수기 없애기'], 0, 'we asked everyone to bring a tumbler'],
    ['플로깅(plogging)이란?', ['공원에서 나무 심기', '자전거로 학교 가기', '쓰레기를 모아 팔기', '조깅하며 쓰레기 줍기'], 3, 'jogging and picking up trash at the same time']
  ]
};
