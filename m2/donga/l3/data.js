/* 중2 영어(동아·윤정미) Lesson 3 · What a Great Idea!
   교과서 대조(2026-10): 의사소통 기능(확신 여부 묻고 답하기 · 정보 묻기), 언어 형식(수동태 be + p.p. (by ~) · have to / had to),
   읽기 주제(Necessity Is the Mother of Invention — 필요 때문에 생겨난 발명품 이야기), 단원 어휘를 교과서 본문 어휘와 맞췄다.
   대화문·읽기 글은 저작권 때문에 교과서 원문을 싣지 않고, 같은 주제·같은 언어 형식·교과서 어휘로 새로 쓴 글이다. */
window.LESSON = {
  book: 'm2-donga', no: 3,
  title: 'What a Great Idea!', ko: '정말 멋진 생각이야!',
  bigQ: {en: 'How do problems lead to great ideas?', ko: '문제는 어떻게 멋진 아이디어로 이어질까?'},
  align: {
    tb: {reading: 'Necessity Is the Mother of Invention', funcs: ['확신 여부 묻고 답하기', '정보 묻기'], forms: ['수동태 (was invented by ~)', 'have to / had to'],
      note: '교과서 읽기는 필요 때문에 생겨난 발명품 세 가지(자전거, 수정액, 웹캠)의 탄생 이야기. 여기 본문은 다른 세 발명품(귀마개, 접착 메모지, 자동차 와이퍼)으로 새로 쓴 글이다.'},
    std: {vocab: ['9영01-01', '9영02-01'], talk: ['9영01-02', '9영02-03'], grammar: ['9영02-03'], read1: ['9영01-04', '9영01-02'], read2: ['9영02-05', '9영02-07']},
    forms: ['Passive Voice', 'Modals']
  },
  goals: {
    vocab: ['발명과 관련된 낱말 20개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 생활 속 불편과 해결 방법을 한 문장으로 말할 수 있다.'],
    talk: ['상대가 확신하는지 묻고 답할 수 있다. (Are you sure? — Yes, I’m sure. / I’m not sure.)', '필요한 정보를 물을 수 있다. (What will the weather be like ~? / Can you tell me about ~?)'],
    grammar: ['수동태(be + p.p.)로 “~되다, ~받다”를 말할 수 있다.', 'have to / had to로 해야 하는(했던) 일을 말할 수 있다.'],
    read1: ['발명 이야기를 읽고 어떤 불편 때문에 발명품이 생겼는지 파악할 수 있다.'],
    read2: ['세 발명품의 문제·해결·결과를 비교하고, 생활 속 불편을 해결할 아이디어를 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'What is the most useful invention in your house?', ko: '우리 집에서 가장 쓸모 있는 발명품은 무엇인가요?', note: '냉장고, 전자레인지, 휴대폰 등을 모은다. 그 발명품이 없던 때 사람들은 어떻게 했을지 묻는다.'},
    words: [
      {w: 'invent', pos: 'v.', ko: '발명하다', ic: '💡', ex: 'Who invented the telephone?', exKo: '누가 전화기를 발명했니?'},
      {w: 'invention', pos: 'n.', ko: '발명(품)', ic: '⚙️', ex: 'The wheel is a great invention.', exKo: '바퀴는 위대한 발명품이다.'},
      {w: 'inventor', pos: 'n.', ko: '발명가', ic: '👩‍🔬', ex: 'She was a young inventor.', exKo: '그녀는 젊은 발명가였다.'},
      {w: 'necessity', pos: 'n.', ko: '필요(성)', ic: '🔑', ex: 'Necessity is the mother of invention.', exKo: '필요는 발명의 어머니다.'},
      {w: 'solution', pos: 'n.', ko: '해결책', ic: '🧩', ex: 'He needed a solution.', exKo: '그는 해결책이 필요했다.'},
      {w: 'patent', pos: 'n.', ko: '특허', ic: '📜', ex: 'She got a patent for her idea.', exKo: '그녀는 자기 아이디어로 특허를 받았다.'},
      {w: 'notice', pos: 'v.', ko: '알아차리다', ic: '👀', ex: 'Nobody noticed the mistake.', exKo: '아무도 실수를 알아차리지 못했다.'},
      {w: 'mistake', pos: 'n.', ko: '실수', ic: '❌', ex: 'Everyone makes mistakes.', exKo: '누구나 실수를 한다.'},
      {w: 'correct', pos: 'v.', ko: '바로잡다, 고치다', ic: '✏️', ex: 'He corrected the mistake.', exKo: '그는 실수를 고쳤다.'},
      {w: 'simply', pos: 'adv.', ko: '그냥, 간단히', ic: '👌', ex: 'Simply put it on your ears.', exKo: '그냥 귀에 끼우기만 하면 된다.'},
      {w: 'surprisingly', pos: 'adv.', ko: '놀랍게도', ic: '😮', ex: 'Surprisingly, it worked.', exKo: '놀랍게도 그것은 효과가 있었다.'},
      {w: 'disappointing', pos: 'adj.', ko: '실망스러운', ic: '😞', ex: 'The result was disappointing.', exKo: '결과는 실망스러웠다.'},
      {w: 'researcher', pos: 'n.', ko: '연구원', ic: '🔬', ex: 'The researcher made a weak glue.', exKo: '그 연구원은 약한 접착제를 만들었다.'},
      {w: 'glue', pos: 'n.', ko: '접착제, 풀', ic: '🧴', ex: 'This glue is not strong.', exKo: '이 접착제는 강하지 않다.'},
      {w: 'sticky', pos: 'adj.', ko: '끈적끈적한', ic: '🍯', ex: 'The back of the note is sticky.', exKo: '메모지 뒷면은 끈적끈적하다.'},
      {w: 'wire', pos: 'n.', ko: '철사', ic: '➰', ex: 'He bent a piece of wire.', exKo: '그는 철사 한 가닥을 구부렸다.'},
      {w: 'fur', pos: 'n.', ko: '털, 모피', ic: '🧸', ex: 'His grandma sewed fur onto it.', exKo: '그의 할머니가 거기에 털을 꿰매 붙였다.'},
      {w: 'wooden', pos: 'adj.', ko: '나무로 된', ic: '🪵', ex: 'The first wiper had a wooden arm.', exKo: '첫 와이퍼에는 나무 팔이 있었다.'},
      {w: 'wipe', pos: 'v.', ko: '닦다', ic: '🧽', ex: 'Wipe the snow off the window.', exKo: '창문의 눈을 닦아 내라.'},
      {w: 'fail', pos: 'v.', ko: '실패하다', ic: '📉', ex: 'Her first try failed.', exKo: '그녀의 첫 시도는 실패했다.'}
    ],
    phrases: [
      {w: 'Are you sure?', ko: '확실하니?', ex: 'The Reds will win. — Are you sure?', exKo: '레즈가 이길 거야. — 확실해?'},
      {w: 'What will the weather be like?', ko: '날씨가 어떨까?', ex: 'What will the weather be like tomorrow?', exKo: '내일 날씨는 어떨까?'},
      {w: 'as a result', ko: '그 결과', ex: 'As a result, people loved it.', exKo: '그 결과 사람들은 그것을 아주 좋아했다.'},
      {w: 'have to', ko: '~해야 한다 (과거 had to)', ex: 'People had to open the window.', exKo: '사람들은 창문을 열어야 했다.'},
      {w: 'fall out', ko: '빠지다, 떨어져 나오다', ex: 'The bookmarks kept falling out.', exKo: '책갈피가 자꾸 빠졌다.'},
      {w: 'in those days', ko: '그 당시에는', ex: 'In those days, cars had no wipers.', exKo: '그 당시 자동차에는 와이퍼가 없었다.'}
    ],
    pairs: [
      {a: 'invent', b: 'invention', rel: '동사 / 명사'},
      {a: 'invention', b: 'inventor', rel: '발명품 / 발명가'},
      {a: 'necessary', b: 'necessity', rel: '형용사 / 명사'},
      {a: 'disappointing', b: 'disappointed', rel: '실망스러운 / 실망한'}
    ],
    wrap: {en: 'I have to ______ every day. It’s not easy. An invention like ______ can help.', ko: '오늘 배운 낱말로 생활 속 불편과 필요한 발명품 쓰기'}
  },

  talk: {
    hook: {en: 'Are you always sure about what you say?', ko: '내가 하는 말을 늘 확신하나요?', note: '확실하지 않은데 말했다가 틀린 경험을 나눈다. 확신 여부를 묻고 답하는 표현과 정보를 묻는 표현으로 이어진다.'},
    speakers: {Tim: {voice: 1, pitch: 1}, Yuna: {voice: 0, pitch: 1.15}, Dad: {voice: 2, pitch: .9}, Ari: {voice: 0, pitch: 1.1}, 'Mr. Oh': {voice: 2, pitch: .95}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '확신 여부 묻고 답하기',
        key: {q: ['Are you sure?', 'Are you sure about that?'], a: ['Yes, I’m sure.', 'I’m not sure.', 'I’m pretty sure.']},
        note: 'Are you sure?는 상대 말이 맞는지 확인하는 말. 확신하면 Yes, I’m sure. 확신이 없으면 I’m not sure.',
        dialogs: [
          { title: 'Dialogue A', setting: '점심시간, 급식실', lines: [
            {s: 'Yuna', en: 'Tim, who invented the light bulb?', ko: '팀, 전구는 누가 발명했어?'},
            {s: 'Tim', en: 'Thomas Edison. Everyone knows that.', ko: '토머스 에디슨이지. 다 아는 거잖아.'},
            {s: 'Yuna', en: '{{Are you sure}}? I read that other inventors made light bulbs before him.', ko: '확실해? 그 사람보다 먼저 전구를 만든 발명가들이 있다고 읽었어.'},
            {s: 'Tim', en: 'Really? Well, then {{I’m not sure}}. Let’s look it up.', ko: '정말? 음, 그럼 잘 모르겠다. 찾아보자.'}
          ]},
          { title: 'Dialogue B', setting: '방과 후, 운동장', lines: [
            {s: 'A', en: 'Which team will win today, the Tigers or the Eagles?', ko: '오늘 어느 팀이 이길까, 타이거스 아니면 이글스?'},
            {s: 'B', en: 'The Tigers. They’re the better team.', ko: '타이거스. 더 잘하는 팀이잖아.'},
            {s: 'A', en: 'Are you sure? Their best player is hurt.', ko: '확실해? 그 팀 최고 선수가 다쳤어.'},
            {s: 'B', en: 'Oh, I didn’t know that. Now I’m not sure.', ko: '아, 몰랐어. 이제 잘 모르겠다.'}
          ]}
        ],
        check: [
          {q: 'Who does Tim think invented the light bulb?', a: 'Thomas Edison.'},
          {q: 'Is Tim sure in the end?', a: 'No, he isn’t.'},
          {q: 'Why is B not sure anymore?', a: 'The Tigers’ best player is hurt.'}
        ],
        drill: {frame: ['A: ____', 'B: Are you sure?', 'A: Yes, I’m sure. / I’m not sure.'], opts: ['It will rain today.', 'The test is on Monday.', 'Paper was invented in China.', 'The store opens at nine.', 'Sam is sick today.', 'This is the fastest way.']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '정보 묻기',
        key: {q: ['What will the weather be like tomorrow?', 'Can you tell me about ~?', 'Do you know when/where ~?'], a: ['It’ll be snowy and cold.', 'Sure. ~.', 'It’s ~.']},
        note: 'What will ~ be like?는 “~는 어떨까?”라는 뜻으로 날씨·상태를 묻는다. 정보를 공손하게 물을 때는 Can you tell me about ~?',
        dialogs: [
          { title: 'Dialogue A', setting: '저녁, 거실', lines: [
            {s: 'Ari', en: 'Dad, {{what will the weather be like}} tomorrow?', ko: '아빠, 내일 날씨는 어떨까요?'},
            {s: 'Dad', en: '{{It’ll be}} snowy and very cold.', ko: '눈이 오고 아주 추울 거래.'},
            {s: 'Ari', en: 'Oh no. My ears always get cold at the skating rink.', ko: '아, 안 돼. 스케이트장에서 늘 귀가 시려요.'},
            {s: 'Dad', en: 'Then you have to wear your earmuffs.', ko: '그럼 귀마개를 해야지.'}
          ]},
          { title: 'Dialogue B', setting: '과학관, 안내 데스크', lines: [
            {s: 'A', en: 'Excuse me. {{Can you tell me about}} the invention show?', ko: '실례합니다. 발명품 전시에 대해 알려 주시겠어요?'},
            {s: 'Mr. Oh', en: '{{Sure}}. It starts at two in Hall B. You can see one hundred inventions.', ko: '물론이죠. 2시에 B관에서 시작해요. 발명품 백 개를 볼 수 있어요.'},
            {s: 'A', en: 'Do you know how long it is?', ko: '얼마나 걸리는지 아세요?'},
            {s: 'Mr. Oh', en: 'It’s about an hour.', ko: '한 시간쯤 걸려요.'}
          ]}
        ],
        check: [
          {q: 'What will the weather be like tomorrow?', a: 'It’ll be snowy and very cold.'},
          {q: 'What does Ari have to wear?', a: 'Her earmuffs.'},
          {q: 'Where does the invention show start?', a: 'In Hall B (at two).'}
        ],
        drill: {frame: ['A: What will the weather be like ____?', 'B: It’ll be ...'], opts: ['tomorrow', 'this weekend', 'on Friday', 'in Busan', 'tonight', 'during the trip']}
      }
    ],
    interviewEx: 'Jiwoo said it will be sunny tomorrow. I asked, “Are you sure?” She said, “Yes, I’m sure.”',
    watch: {
      label: 'Let’s Watch', title: 'Who Invented It?', setting: '과학 동아리 퀴즈 시간. 오 선생님이 발명 퀴즈를 낸다.',
      lines: [
        {s: 'Mr. Oh', en: 'Here’s a quiz. Earmuffs were invented by a 15-year-old boy. True or false?', ko: '퀴즈 하나 낼게요. 귀마개는 15살 소년이 발명했다. 맞을까요, 틀릴까요?'},
        {s: 'Tim', en: 'False! A kid can’t invent things.', ko: '틀려요! 어린아이는 발명을 못 해요.'},
        {s: 'Yuna', en: 'Are you sure? I think it’s true.', ko: '확실해? 나는 맞는 것 같은데.'},
        {s: 'Mr. Oh', en: 'Yuna is right. His name was Chester Greenwood.', ko: '유나가 맞았어요. 그의 이름은 체스터 그린우드예요.'},
        {s: 'Tim', en: 'Wow. Can you tell me more about him?', ko: '와. 그 사람에 대해 더 알려 주실래요?'}
      ],
      check: [
        {q: 'Who invented earmuffs?', a: 'A 15-year-old boy (Chester Greenwood).'},
        {q: 'What did Tim say first?', a: 'False! (A kid can’t invent things.)'},
        {q: 'Who was right?', a: 'Yuna.'}
      ]
    },
    wrap: {en: 'Ask your partner about tomorrow’s weather or a fun fact. Check with “Are you sure?”', ko: '짝에게 내일 날씨나 재미있는 사실을 묻고, “Are you sure?”로 확인하기'}
  },

  grammar: {
    cover: 'be + p.p. · had to',
    hook: {en: 'Earmuffs {{were invented}} by a teenager.  /  Drivers {{had to}} open their windows.', ko: '귀마개는 스스로 무엇을 했을까, 아니면 무엇을 당했을까? had to는 어떤 뜻일까?', answer: 'were invented → 발명되었다(수동태: 주어가 동작을 받음) / had to → ~해야 했다(have to의 과거)', note: '교과서 언어 형식(Whiteout was invented by Bette Graham. / People had to retype the whole page.)과 같은 짜임이다.'},
    points: [
      { id: 'g1', name: '수동태', short: '수동태', form: 'be동사 + 과거분사 (+ by 행위자)', meaning: '~되다, ~받다',
        notice: [
          {en: 'Earmuffs {{were invented}} by a 15-year-old boy.', ko: '귀마개는 15살 소년에 의해 발명되었다.'},
          {en: 'The first wiper {{was made}} of wood and rubber.', ko: '첫 와이퍼는 나무와 고무로 만들어졌다.'},
          {en: 'Sticky notes {{are used}} all over the world.', ko: '접착 메모지는 전 세계에서 쓰인다.'}
        ],
        rule: [
          {k: '만드는 법', v: '능동태의 목적어 → 주어, 동사 → be + p.p., 능동태의 주어 → by + 목적격', ex: 'Mary Anderson invented the wiper. → The wiper was invented by Mary Anderson.'},
          {k: '시제', v: 'be동사로 나타낸다: is / are + p.p. (현재), was / were + p.p. (과거)', ex: 'Glue is made in this factory. / It was made in 1968.'},
          {k: 'by 생략', v: '행위자가 중요하지 않거나 누구인지 모르면 생략', ex: 'English is spoken in many countries.'}
        ],
        compare: {
          title: '능동태 vs 수동태', note: '누가 했는지가 중요하면 능동태, 무엇이 어떻게 되었는지가 중요하면 수동태.',
          head: ['능동태 (주어가 한다)', '수동태 (주어가 받는다)'],
          cols: [['Chester invented earmuffs.', 'People use sticky notes.'], ['Earmuffs were invented by Chester.', 'Sticky notes are used by people.']]
        },
        check: [
          {q: 'The wiper ____ by Mary Anderson. (invent, 과거)', a: 'was invented'},
          {q: 'Earmuffs ____ in winter. (wear, 현재)', a: 'are worn'},
          {q: 'The fur ____ onto the wire by his grandma. (sew, 과거)', a: 'was sewn'},
          {q: 'This glue ____ in 1968. (make, 과거)', a: 'was made'},
          {q: 'Sticky notes are used ____ millions of people. (전치사)', a: 'by'}
        ],
        trap: {bad: 'The wiper invented by Mary Anderson.', good: 'The wiper was invented by Mary Anderson.', why: '수동태는 be동사 + p.p. be동사를 빠뜨리면 “와이퍼가 발명했다”가 된다.'},
        scramble: [
          {ko: '귀마개는 한 소년에 의해 발명되었다.', en: 'Earmuffs were invented by a boy.'},
          {ko: '첫 와이퍼는 나무로 만들어졌다.', en: 'The first wiper was made of wood.'},
          {ko: '접착 메모지는 전 세계에서 쓰인다.', en: 'Sticky notes are used all over the world.'}
        ]
      },
      { id: 'g2', name: 'have to / had to', short: 'have to', form: 'have / has to + 동사원형 (과거 had to)', meaning: '~해야 한다 (~해야 했다)',
        notice: [
          {en: 'Drivers {{had to}} open their windows to clean the glass.', ko: '운전자들은 유리를 닦으려고 창문을 열어야 했다.'},
          {en: 'Chester {{had to}} stop skating because of his cold ears.', ko: '체스터는 시린 귀 때문에 스케이트를 멈춰야 했다.'},
          {en: 'You {{don’t have to}} use a clip anymore.', ko: '이제 클립을 쓸 필요가 없다.'}
        ],
        rule: [
          {k: '형태', v: '주어가 3인칭 단수면 has to, 과거는 모두 had to', ex: 'She has to wear a coat. / She had to wear a coat.'},
          {k: '부정', v: 'don’t / doesn’t have to = ~할 필요가 없다 (must not 금지와 다르다)', ex: 'You don’t have to pay. (내지 않아도 된다)'},
          {k: '의문', v: 'Do / Does + 주어 + have to ~?', ex: 'Do I have to come early? — Yes, you do.'}
        ],
        check: [
          {q: 'He ____ to stop skating yesterday. (have, 과거)', a: 'had'},
          {q: 'She ____ to wear earmuffs today. (have, 현재)', a: 'has'},
          {q: 'You ____ have to bring glue. (필요 없음)', a: 'don’t'},
          {q: 'Drivers had to ____ their windows. (open)', a: 'open'},
          {q: '____ we have to finish it today? (의문)', a: 'Do'}
        ],
        trap: {bad: 'She have to retype the page.', good: 'She has to retype the page. / She had to retype the page.', why: '3인칭 단수 현재는 has to, 과거는 had to.'},
        scramble: [
          {ko: '운전자들은 창문을 열어야 했다.', en: 'Drivers had to open their windows.'},
          {ko: '너는 클립을 쓸 필요가 없다.', en: 'You don’t have to use a clip.'},
          {ko: '그녀는 오늘 코트를 입어야 한다.', en: 'She has to wear a coat today.'}
        ]
      }
    ],
    wrap: {en: '______ was invented by ______. Before that, people had to ______.', ko: '좋아하는 발명품 하나를 수동태로 소개하고, 그 전에 사람들이 해야 했던 일 쓰기'},
    wrapEx: 'The washing machine was invented by an American inventor. Before that, people had to wash clothes by hand.'
  },

  reading: {
    title: 'Small Problems, Big Ideas', kind: '발명 이야기 칼럼', cover: 'Idea', coverKo: '필요가 낳은 발명품', cover2: 'Inventors', coverKo2: '불편을 해결한 사람들',
    before: [
      {q: 'Look at the title. What kind of problems led to inventions?', a: '생활 속 작은 불편'},
      {q: 'What small problem do you have every day?', a: '자꾸 잃어버리는 물건, 추위, 비 오는 날 등'}
    ],
    gloss: {'earmuffs': '귀마개', 'skating rink': '스케이트장', 'loop': '고리', 'hymn book': '찬송가 책', 'bookmark': '책갈피', 'windshield': '(자동차) 앞 유리', 'rubber': '고무', 'handle': '손잡이'},
    paras: [
      {who: '', en: 'Many great inventions came from small problems. People felt uncomfortable, so they looked for a solution. Here are three inventions. Each one was made to solve an everyday problem.',
       ko: '많은 위대한 발명품은 작은 문제에서 나왔다. 사람들은 불편함을 느꼈고, 그래서 해결책을 찾았다. 여기 세 가지 발명품이 있다. 각각은 일상의 문제를 해결하기 위해 만들어졌다.',
       check: {q: 'Where did many great inventions come from?', a: 'From small problems.'}, think: '“필요는 발명의 어머니”라는 말은 무슨 뜻일까?'},
      {who: 'Earmuffs', en: 'In 1873, Chester Greenwood was a 15-year-old boy in Maine, USA. He loved ice skating, but his ears always got very cold. He had to stop skating again and again. So he bent some wire into two loops, and his grandmother sewed fur onto them.',
       ko: '1873년, 체스터 그린우드는 미국 메인주에 사는 15살 소년이었다. 그는 스케이트를 아주 좋아했지만 귀가 늘 몹시 시렸다. 그는 스케이트를 자꾸 멈춰야 했다. 그래서 철사를 구부려 고리 두 개를 만들었고, 할머니가 거기에 털을 꿰매 붙였다.',
       check: {q: 'Why did Chester have to stop skating?', a: 'His ears always got very cold.'}, think: '체스터의 해결 방법에서 대단한 점은?'},
      {who: 'Earmuffs', en: 'Surprisingly, his earmuffs worked well. Soon, his friends wanted them, too. Chester got a patent for his earmuffs in 1877. His invention was used by many soldiers in World War I, and his town still celebrates him every December.',
       ko: '놀랍게도 그의 귀마개는 효과가 좋았다. 곧 친구들도 귀마개를 원했다. 체스터는 1877년에 귀마개로 특허를 받았다. 그의 발명품은 제1차 세계 대전 때 많은 군인이 사용했고, 그의 마을은 지금도 해마다 12월에 그를 기린다.',
       check: {q: 'When did Chester get a patent?', a: 'In 1877.'}, think: '어린 나이에 발명가가 될 수 있었던 까닭은?'},
      {who: 'Sticky Notes', en: 'In 1968, a researcher at a company made a very weak glue. It was sticky, but it didn’t stick hard. Nobody knew how to use it. The result was disappointing. Years later, Art Fry noticed a problem. Every Sunday, the paper bookmarks in his hymn book fell out.',
       ko: '1968년, 한 회사의 연구원이 아주 약한 접착제를 만들었다. 끈적끈적했지만 단단히 붙지는 않았다. 아무도 그것을 어디에 쓸지 몰랐다. 결과는 실망스러웠다. 몇 년 뒤 아트 프라이는 한 가지 문제를 알아차렸다. 일요일마다 찬송가 책의 종이 책갈피가 빠져 버렸다.',
       check: {q: 'What was wrong with the glue?', a: 'It was sticky, but it didn’t stick hard (very weak).'}, think: '실패한 발명품은 정말 쓸모가 없을까?'},
      {who: 'Sticky Notes', en: 'He simply put the weak glue on the back of his bookmarks. They stayed on the page, and they came off without tearing it! As a result, sticky notes were born. Today, billions of them are used every year.',
       ko: '그는 그냥 그 약한 접착제를 책갈피 뒷면에 발랐다. 책갈피는 책장에 붙어 있었고, 찢어지지 않고 떨어졌다! 그 결과 접착 메모지가 태어났다. 오늘날 해마다 수십억 장이 쓰인다.',
       check: {q: 'Where did Art Fry put the weak glue?', a: 'On the back of his bookmarks.'}, think: '다른 사람의 실패가 나의 해결책이 된 까닭은?'},
      {who: 'Windshield Wipers', en: 'In 1902, Mary Anderson took a trip to New York City in winter. It was snowing, and drivers had to open their windows to clean the glass. They were cold and wet. Back home, she designed a wiper with a wooden arm and a rubber blade. Drivers could move it with a handle inside the car. Her wiper was patented in 1903.',
       ko: '1902년 겨울, 메리 앤더슨은 뉴욕시로 여행을 갔다. 눈이 내리고 있었고, 운전자들은 유리를 닦으려고 창문을 열어야 했다. 그들은 춥고 젖어 있었다. 집에 돌아온 그녀는 나무 팔과 고무 날이 달린 와이퍼를 설계했다. 운전자는 차 안의 손잡이로 그것을 움직일 수 있었다. 그녀의 와이퍼는 1903년에 특허를 받았다.',
       check: {q: 'Why did drivers have to open their windows?', a: 'To clean the glass (because of the snow).'}, think: '메리 앤더슨의 와이퍼는 운전자의 어떤 불편을 없앴을까?'},
      {who: 'You', en: 'Cold ears, falling bookmarks, and snowy windows. These were small problems, but they led to great inventions. Now, can you think of a small problem in your life? It may be the start of your great idea!',
       ko: '시린 귀, 빠지는 책갈피, 눈 덮인 창문. 작은 문제들이었지만 위대한 발명으로 이어졌다. 자, 여러분 생활 속의 작은 문제를 떠올려 볼 수 있나요? 그것이 여러분의 멋진 아이디어의 시작일지도 모른다!',
       check: {q: 'What did the small problems lead to?', a: 'Great inventions.'}, think: '내 생활 속 작은 불편과 그 해결 아이디어는?'}
    ],
    split: 3,
    next: '실패한 접착제와\n눈 오는 날의 운전자들은?',
    recap: {q: '체스터는 어떤 문제를 어떻게 해결했을까?', items: [{k: 'PROBLEM', v: 'cold ears at the skating rink · had to stop skating'}, {k: 'SOLUTION', v: 'two wire loops + fur → earmuffs · patent in 1877'}]},
    tf: [
      {p: 1, s: 'Chester Greenwood was an adult inventor.', a: false, why: 'He was a 15-year-old boy.'},
      {p: 1, s: 'Chester’s grandmother sewed fur onto the loops.', a: true},
      {p: 3, s: 'The glue from 1968 was very strong.', a: false, why: 'It was a very weak glue.'},
      {p: 4, s: 'Art Fry’s bookmarks tore the pages.', a: false, why: 'They came off without tearing it.'},
      {p: 5, s: 'In 1902, drivers had to open their windows to clean the glass.', a: true},
      {p: 5, s: 'Mary Anderson’s wiper had a wooden arm.', a: true}
    ],
    key: [
      {en: 'Each one {{was made}} to solve an everyday problem.', note: '수동태 was + p.p.', g: 'g1'},
      {en: 'He {{had to}} stop skating again and again.', note: 'had to + 동사원형', g: 'g2'},
      {en: 'His invention {{was used}} by many soldiers in World War I.', note: '수동태 + by 행위자', g: 'g1'},
      {en: 'Today, billions of them {{are used}} every year.', note: '수동태 현재 are + p.p.', g: 'g1'},
      {en: 'Drivers {{had to}} open their windows to clean the glass.', note: 'had to + 동사원형', g: 'g2'},
      {en: 'Her wiper {{was patented}} in 1903.', note: '수동태 was + p.p.', g: 'g1'}
    ],
    summary: {text: 'Many {{inventions}} came from small problems. Chester had to stop skating because of his cold ears, so he made earmuffs. A weak {{glue}} became sticky notes when Art Fry {{noticed}} a problem with his bookmarks. Drivers had to open their windows in the snow, so Mary Anderson designed a wiper. It was {{patented}} in 1903. {{Necessity}} is the mother of {{invention}}.'},
    order: ['Mary Anderson visited New York City in winter.', 'She saw drivers opening their windows.', 'She designed a wiper with a handle.', 'Her wiper was patented in 1903.'],
    chart: {title: 'PROBLEM → INVENTION', ko: '세 발명품 비교하기', cols: ['Problem', 'Solution'], note: '표를 보고 “People had to ~. So ~ was invented.” 문장으로 말하게 한다.', rows: [
      {name: 'Earmuffs', cells: ['cold ears, had to stop skating', 'wire loops with fur (1873)']},
      {name: 'Sticky notes', cells: ['bookmarks fell out', 'weak glue on the back']},
      {name: 'Wipers', cells: ['had to open windows in snow', 'a wooden arm with a handle (1903)']}
    ]},
    wrap: {en: 'My problem: I have to ______. My invention: ______. It can be used ______.', ko: '관통 질문으로 돌아가기: 생활 속 불편과 그것을 해결할 나의 발명 아이디어 쓰기'}
  },

  quiz: [
    ['“특허”를 뜻하는 낱말은?', ['patent', 'solution', 'necessity', 'invention'], 0, 'patent: 특허'],
    ['“발명가”를 뜻하는 낱말은?', ['invent', 'invention', 'inventor', 'inventive'], 2, 'inventor: 발명가'],
    ['“As a ___, sticky notes were born.”', ['result', 'solution', 'mistake', 'patent'], 0, 'as a result: 그 결과'],
    ['확신하는지 묻는 표현은?', ['Are you sure?', 'What will it be like?', 'Can you tell me about it?', 'How do you spell it?'], 0, 'Are you sure?'],
    ['“Are you sure?”에 확신이 없을 때의 대답은?', ['Yes, I’m sure.', 'I’m pretty sure.', 'I’m not sure.', 'Sure, I can.'], 2, 'I’m not sure.'],
    ['날씨를 묻는 표현은?', ['What will the weather be like tomorrow?', 'Do you like the weather?', 'Are you sure?', 'How often does it snow?'], 0, 'What will the weather be like ~?'],
    ['Let’s Watch에서 정답을 맞힌 사람은?', ['팀', '유나', '오 선생님', '아무도 없음'], 1, 'Yuna is right.'],
    ['빈칸에 알맞은 것은? “Earmuffs ___ by a boy.”', ['invented', 'were invented', 'are invent', 'was invent'], 1, '수동태 과거 were + p.p.'],
    ['빈칸에 알맞은 것은? “Drivers ___ open their windows.”', ['had to', 'has to', 'have', 'must not'], 0, '과거의 의무: had to'],
    ['어법상 틀린 문장은?', ['It was made in 1968.', 'Sticky notes are used a lot.', 'The wiper invented by her.', 'You don’t have to pay.'], 2, 'The wiper was invented by her.'],
    ['“You don’t have to come.”의 뜻은?', ['너는 오면 안 된다', '너는 올 필요가 없다', '너는 와야 한다', '너는 왔다'], 1, 'don’t have to = ~할 필요가 없다'],
    ['체스터가 귀마개를 만든 까닭은?', ['돈을 벌려고', '스케이트를 탈 때 귀가 시려서', '할머니 선물로', '군인을 위해서'], 1, 'his ears always got very cold'],
    ['약한 접착제의 쓸모를 찾은 사람은?', ['체스터 그린우드', '메리 앤더슨', '아트 프라이', '할머니'], 2, 'Art Fry put the weak glue on his bookmarks.'],
    ['메리 앤더슨이 본 문제는?', ['운전자들이 눈을 닦으려 창문을 열어야 했다', '자동차가 너무 비쌌다', '책갈피가 빠졌다', '귀가 시렸다'], 0, 'drivers had to open their windows to clean the glass'],
    ['글의 요지로 알맞은 것은?', ['발명은 어른만 할 수 있다', '작은 불편이 멋진 발명의 시작이 된다', '실패한 발명은 버려야 한다', '특허는 받기 어렵다'], 1, 'It may be the start of your great idea!']
  ]
};

/* ── 보강: 원리 중심 문법 · 모션 그래픽 · 낱말 만들기 · 발음 기호 ── */
(function (L) {
  const ipa = {invent: '/ɪnˈvent/', invention: '/ɪnˈvenʃn/', inventor: '/ɪnˈventər/', necessity: '/nəˈsesəti/', solution: '/səˈluːʃn/', patent: '/ˈpætnt/', notice: '/ˈnoʊtɪs/', mistake: '/mɪˈsteɪk/', correct: '/kəˈrekt/', simply: '/ˈsɪmpli/', surprisingly: '/sərˈpraɪzɪŋli/', disappointing: '/ˌdɪsəˈpɔɪntɪŋ/', researcher: '/rɪˈsɜːrtʃər/', glue: '/ɡluː/', sticky: '/ˈstɪki/', wire: '/ˈwaɪər/', fur: '/fɜːr/', wooden: '/ˈwʊdn/', wipe: '/waɪp/', fail: '/feɪl/'};
  L.vocab.words.forEach(w => { if (ipa[w.w]) w.ipa = ipa[w.w]; });
  L.vocab.morph = [
    {w: 'inventor', ko: '발명가', parts: [{t: 'in', k: 'pre', m: '안으로, 위에'}, {t: 'vent', k: 'root', m: '오다'}, {t: 'or', k: 'suf', m: '~하는 사람'}], family: ['invent', 'invention', 'event'], note: '생각이 떠올라(in + vent = 오다) 무언가를 만드는 사람 → 발명가. -ion은 발명(품).'},
    {w: 'disappointing', ko: '실망스러운', parts: [{t: 'dis', k: 'pre', m: '반대, 떨어져'}, {t: 'appoint', k: 'root', m: '정하다, 약속하다'}, {t: 'ing', k: 'suf', m: '~하게 하는 (형용사)'}], family: ['disappointed', 'disappear', 'dislike'], note: '기대와 반대로 되어 실망하게 하는 → 실망스러운. 사람이 실망하면 disappointed.'},
    {w: 'researcher', ko: '연구원', parts: [{t: 're', k: 'pre', m: '다시'}, {t: 'search', k: 'root', m: '찾다'}, {t: 'er', k: 'suf', m: '~하는 사람'}], family: ['research', 'search', 'teacher'], note: '다시(re) 찾고(search) 또 찾는 사람 → 연구원.'}
  ];
  const [g1, g2] = L.grammar.points;
  g1.principle = {
    q: '수동태는 왜 쓸까?',
    pic: [{en: 'Earmuffs', ko: '관심의 중심 (받는 쪽)', hot: true}, {en: 'were invented', ko: 'be + p.p.'}, {en: '(by Chester)', ko: '하는 쪽 — 몰라도 됨'}],
    core: '능동태는 “누가 했나”, 수동태는 “무엇이 어떻게 되었나”에 초점을 둔다. 행위자가 중요하지 않거나 모를 때, 받는 쪽을 주어 자리로 끌어올린다.',
    why: ['능동의 목적어 → 수동의 주어, 동사 → be + p.p.', '행위자가 뻔하거나 중요하지 않으면 by ~를 생략한다.', '시제는 be동사로 나타낸다 (is made / was made / will be made).']
  };
  g1.anim = [{title: '능동태 → 수동태', states: [
    {t: 'Chester Greenwood/S#by | invented/V#v | earmuffs/O#vel | in 1873/M | .', note: '능동: 누가 했나', ko: '체스터 그린우드가 1873년에 귀마개를 발명했다.'},
    {t: 'Earmuffs/S#vel | were invented/X#v | by Chester Greenwood/M#by | in 1873/M | .', note: '목적어가 주어로, 동사는 be + p.p. (복수 → were)', ko: '귀마개는 1873년에 체스터 그린우드에 의해 발명되었다.'},
    {t: 'Earmuffs/S#vel | were invented/X#v | in 1873/M | .', note: '행위자가 중요하지 않으면 by ~ 생략', ko: '귀마개는 1873년에 발명되었다.'}]}];
  g1.contrast = {title: '능동 vs 수동 — 주어가 하나, 받나', pairs: [
    {a: 'Millions of people {{use}} sticky notes.', ka: '수백만 명이 접착 메모지를 쓴다. (주어가 한다)', b: 'Sticky notes {{are used}} by millions of people.', kb: '접착 메모지는 수백만 명에 의해 쓰인다. (주어가 받는다)'}],
    point: '주어가 동작을 받으면 be + p.p.'};
  g2.principle = {
    q: 'must와 have to는 어떻게 다를까?',
    pic: [{en: 'have to', ko: '상황 때문에 해야 하는 일', hot: true}, {en: 'had to', ko: '과거에 해야 했던 일'}, {en: 'don’t have to', ko: '할 필요가 없다'}],
    core: 'have to는 “상황이나 규칙 때문에 ~해야 한다”는 뜻이다. 일반동사 have를 쓰므로 주어·시제에 맞춰 has to, had to로 모양이 바뀌고, 부정·의문도 일반동사처럼 do를 쓴다.',
    why: ['must는 과거형이 없어서 과거의 의무는 had to로 말한다.', 'don’t have to(~할 필요 없다) ≠ must not(~하면 안 된다).', '의문문: Do I have to ~? / Did you have to ~?']
  };
  g2.anim = [{title: '현재의 의무 → 과거의 의무', states: [
    {t: 'Drivers/S | have to/X#ht | open/V#o | their windows/O | .', note: 'have to + 동사원형 (지금 해야 한다)', ko: '운전자들은 창문을 열어야 한다.'},
    {t: 'Drivers/S | had to/X#ht | open/V#o | their windows/O | in 1902/M | .', note: '과거는 had to', ko: '1902년에 운전자들은 창문을 열어야 했다.'},
    {t: 'Now/M | drivers/S | don’t have to/X#ht | open/V#o | their windows/O | .', note: '필요 없음: don’t have to', ko: '이제 운전자들은 창문을 열 필요가 없다.'}]}];
  g2.contrast = {title: 'don’t have to vs must not', pairs: [
    {a: 'You {{don’t have to}} bring glue.', ka: '풀을 가져올 필요가 없다. (가져와도 된다)', b: 'You {{must not}} bring glue.', kb: '풀을 가져오면 안 된다. (금지)'}],
    point: 'don’t have to = 필요 없다, must not = 하면 안 된다.'};
})(window.LESSON);
