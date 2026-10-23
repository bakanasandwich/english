/* 고1 공통영어2(동아·이병민) Lesson 3 · Into the Smart Future
   단원명은 교과서 목차 기준. 본문 주제(인공지능과 함께 사는 미래)와 의사소통 기능·문법은 추정(estimate: true).
   대화문·읽기 글은 교과서 원문이 아니라 단원 주제에 맞춰 새로 쓴 글입니다. */
window.LESSON = {
  book: 'h1b-donga', no: 3, estimate: true,
  title: 'Into the Smart Future', ko: '스마트한 미래로',
  bigQ: {en: 'How can we make smart technology work for us, not against us?', ko: '스마트 기술이 우리에게 해가 아니라 도움이 되게 하려면 어떻게 해야 할까?'},
  goals: {
    vocab: ['인공지능·기술과 관련된 낱말 16개의 뜻과 발음(강세)을 익힌다.', 'pre-, auto-, nov- 같은 조각으로 predict, automatic, innovation을 분석할 수 있다.'],
    talk: ['미래에 일어날 가능성을 말할 수 있다.', '어떤 일에 대한 확신 정도를 표현할 수 있다.'],
    grammar: ['조동사 + have p.p.가 “지금의 판단 + 과거의 일”이라는 원리로 추측·후회를 표현할 수 있다.', '부정어·부사구를 앞으로 보내면 의문문 어순이 된다는 원리로 도치 문장을 이해하고 쓸 수 있다.'],
    read1: ['인공지능이 일상을 바꾸는 모습과 그 편리함을 파악할 수 있다.'],
    read2: ['인공지능의 위험과 우리가 갖춰야 할 태도를 정리하고 나의 생각을 영어로 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'How many times did you use AI today without noticing it?', ko: '오늘 알아차리지 못한 채 인공지능을 몇 번이나 썼을까요?', note: '추천 영상, 자동 완성, 번역, 길 찾기, 얼굴 인식 잠금 등을 하나씩 짚어 주면 학생들이 놀란다. “이 모든 게 30년 전에는 없었다”로 본문 도입과 이어진다.'},
    words: [
      {w: 'artificial', pos: 'adj.', ko: '인공의, 인위적인', ic: '🤖', ipa: '/ˌɑːrtɪˈfɪʃl/', ex: 'Artificial intelligence is changing our lives.', exKo: '인공지능이 우리의 삶을 바꾸고 있다.'},
      {w: 'intelligence', pos: 'n.', ko: '지능', ic: '🧠', ipa: '/ɪnˈtelɪdʒəns/', ex: 'Some animals show great intelligence.', exKo: '어떤 동물들은 뛰어난 지능을 보인다.'},
      {w: 'algorithm', pos: 'n.', ko: '알고리즘(문제 해결 절차)', ic: '🔢', ipa: '/ˈælɡərɪðəm/', ex: 'The algorithm chooses which videos you see.', exKo: '알고리즘이 네가 볼 영상을 고른다.'},
      {w: 'predict', pos: 'v.', ko: '예측하다', ic: '🔮', ipa: '/prɪˈdɪkt/', ex: 'It is hard to predict the future.', exKo: '미래를 예측하기는 어렵다.'},
      {w: 'automatic', pos: 'adj.', ko: '자동의', ic: '⚙️', ipa: '/ˌɔːtəˈmætɪk/', ex: 'The doors are automatic.', exKo: '그 문들은 자동이다.'},
      {w: 'device', pos: 'n.', ko: '장치, 기기', ic: '📱', ipa: '/dɪˈvaɪs/', ex: 'How many devices do you use every day?', exKo: '너는 매일 몇 개의 기기를 쓰니?'},
      {w: 'privacy', pos: 'n.', ko: '사생활, 개인 정보', ic: '🔒', ipa: '/ˈpraɪvəsi/', ex: 'We should protect our privacy online.', exKo: '우리는 온라인에서 개인 정보를 지켜야 한다.'},
      {w: 'bias', pos: 'n.', ko: '편향, 편견', ic: '⚖️', ipa: '/ˈbaɪəs/', ex: 'Data can contain human bias.', exKo: '데이터에는 인간의 편향이 담길 수 있다.'},
      {w: 'reliable', pos: 'adj.', ko: '믿을 만한', ic: '✅', ipa: '/rɪˈlaɪəbl/', ex: 'Is this information reliable?', exKo: '이 정보는 믿을 만한가?'},
      {w: 'replace', pos: 'v.', ko: '대신하다, 교체하다', ic: '🔄', ipa: '/rɪˈpleɪs/', ex: 'Will robots replace teachers?', exKo: '로봇이 선생님을 대신할까?'},
      {w: 'innovation', pos: 'n.', ko: '혁신', ic: '💡', ipa: '/ˌɪnəˈveɪʃn/', ex: 'The smartphone was a great innovation.', exKo: '스마트폰은 위대한 혁신이었다.'},
      {w: 'convenient', pos: 'adj.', ko: '편리한', ic: '🛋️', ipa: '/kənˈviːniənt/', ex: 'Online banking is very convenient.', exKo: '인터넷 뱅킹은 매우 편리하다.'},
      {w: 'ethical', pos: 'adj.', ko: '윤리적인', ic: '🧭', ipa: '/ˈeθɪkl/', ex: 'Using AI raises ethical questions.', exKo: 'AI 사용은 윤리적 질문을 불러일으킨다.'},
      {w: 'accurate', pos: 'adj.', ko: '정확한', ic: '🎯', ipa: '/ˈækjərət/', ex: 'The translation was not accurate.', exKo: '그 번역은 정확하지 않았다.'},
      {w: 'efficient', pos: 'adj.', ko: '효율적인', ic: '⚡', ipa: '/ɪˈfɪʃnt/', ex: 'Smart lights make energy use more efficient.', exKo: '스마트 조명은 에너지 사용을 더 효율적으로 만든다.'},
      {w: 'responsibility', pos: 'n.', ko: '책임', ic: '🤲', ipa: '/rɪˌspɑːnsəˈbɪləti/', ex: 'Who has responsibility for an AI’s mistake?', exKo: 'AI의 실수에 대한 책임은 누구에게 있을까?'}
    ],
    morph: [
      {w: 'predict', ko: '예측하다', parts: [{t: 'pre', k: 'pre', m: '미리'}, {t: 'dict', k: 'root', m: '말하다'}], family: ['dictionary', 'predictable', 'contradict'], note: '“미리 말하다” → 예측하다. dict = 말하다(dictionary: 말 모음).'},
      {w: 'automatic', ko: '자동의', parts: [{t: 'auto', k: 'pre', m: '스스로'}, {t: 'mat', k: 'root', m: '움직이다, 생각하다'}, {t: 'ic', k: 'suf', m: '~의 (형용사)'}], family: ['automobile', 'autograph', 'autonomous'], note: 'auto- = 스스로(automobile: 스스로 움직이는 것 → 자동차).'},
      {w: 'innovation', ko: '혁신', parts: [{t: 'in', k: 'pre', m: '안으로'}, {t: 'nov', k: 'root', m: '새로운'}, {t: 'ation', k: 'suf', m: '~것 (명사)'}], family: ['novel (새로운; 소설)', 'renovate', 'novice'], note: 'nov = 새로운. 공통영어1 2과의 novel(소설)도 원래 “새로운 이야기”라는 뜻이었다.'},
      {w: 'unreliable', ko: '믿을 수 없는', parts: [{t: 'un', k: 'pre', m: '아닌'}, {t: 'reli', k: 'root', m: '의지하다 (rely)'}, {t: 'able', k: 'suf', m: '~할 수 있는'}], family: ['rely', 'reliable', 'reliance'], note: 'y로 끝나는 동사 + able → y를 i로(rely → reliable).'}
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
      {a: 'manual', b: 'automatic', rel: '수동 / 자동'},
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
    title: 'Living with Smart Machines', kind: '논설문', cover: 'Smart', coverKo: '똑똑한 기계와의 동거', cover2: 'Human', coverKo2: '결정은 사람의 몫',
    before: [
      {q: 'What is one thing AI does for you every day?', a: '영상 추천, 번역, 길 찾기, 자동 완성 등'},
      {q: 'Can AI make mistakes? Give an example.', a: '틀린 정보를 자신 있게 말하기, 음성 인식 오류 등'}
    ],
    gloss: {'great-grandparents': '증조부모', 'recommendation': '추천', 'self-driving': '자율 주행의', 'thermostat': '온도 조절기', 'tutor': '개인 교사', 'confidently': '자신 있게', 'fact-check': '사실을 확인하다', 'training data': '학습 데이터', 'unfair': '불공정한', 'automated': '자동화된', 'creativity': '창의성', 'passengers': '승객'},
    paras: [
      {who: '', en: 'Imagine showing your phone to your great-grandparents. You talk to it, and it answers. It translates languages, recognizes faces, and tells you which way to walk. They could never have imagined such a device. Yet for us, it is simply part of everyday life. Artificial intelligence, or AI, has quietly moved into our homes, schools, and pockets.',
       ko: '증조부모님께 당신의 휴대전화를 보여 드린다고 상상해 보라. 당신이 말을 걸면 그것이 대답한다. 언어를 번역하고, 얼굴을 알아보고, 어느 쪽으로 걸어가야 하는지 알려 준다. 그분들은 그런 기기를 결코 상상하지 못하셨을 것이다. 하지만 우리에게 그것은 그저 일상의 일부다. 인공지능, 즉 AI는 조용히 우리의 집과 학교와 주머니 속으로 들어왔다.',
       check: {q: 'What can the phone do?', a: 'It answers, translates languages, recognizes faces, and gives directions.'}, think: '30년 뒤 나의 손주는 지금의 나를 어떻게 볼까?',
       bg: {src: 'h1/donga2/l3/img/r-p0.jpg', about: '스마트폰을 든 손'}},
      {who: 'Smart Suggestions', en: 'Every time you open a video app, an algorithm decides what to show you. Not only does it recommend songs and videos, but it also predicts what you might want to buy next. These recommendations are convenient. They save time and introduce us to new things. However, they also shape what we see, often without our noticing.',
       ko: '영상 앱을 열 때마다 알고리즘이 무엇을 보여 줄지 결정한다. 그것은 노래와 영상을 추천할 뿐만 아니라, 당신이 다음에 무엇을 사고 싶어 할지도 예측한다. 이런 추천은 편리하다. 시간을 아껴 주고 새로운 것을 소개해 준다. 하지만 그것은 또한 우리가 보는 것을 만들어 내며, 우리는 종종 그것을 알아차리지 못한다.',
       check: {q: 'What does the algorithm predict?', a: 'What you might want to buy next.'}, think: '추천 영상만 보면 어떤 일이 생길까?',
       bg: {src: 'h1/donga2/l3/img/r-p1.jpg', about: '노트북 화면'}},
      {who: 'Smart Homes, Smart Cars', en: 'In smart homes, lights turn off by themselves when you leave a room, and thermostats learn when you usually wake up. Self-driving cars are being tested on real roads in several countries. Little did people know thirty years ago how quickly machines would learn to do these things.',
       ko: '스마트 홈에서는 방을 나가면 불이 저절로 꺼지고, 온도 조절기는 당신이 보통 언제 일어나는지 학습한다. 자율 주행차는 여러 나라의 실제 도로에서 시험되고 있다. 30년 전 사람들은 기계가 이런 일을 얼마나 빨리 배우게 될지 거의 알지 못했다.',
       check: {q: 'What does a smart thermostat learn?', a: 'When you usually wake up.'}, think: '스마트 홈에서 살고 싶은가? 왜 그런가?',
       bg: {src: 'h1/donga2/l3/img/r-p2.jpg', about: '도로 위의 자동차'}},
      {who: 'A Tutor in Your Pocket', en: 'AI is also changing how we learn. A student who is stuck on a math problem can ask an AI tutor for a hint at midnight. A student who has just moved from another country can use AI to translate class notes. For many learners, AI has opened doors that would have been closed before.',
       ko: 'AI는 우리가 배우는 방식도 바꾸고 있다. 수학 문제에서 막힌 학생은 한밤중에도 AI 튜터에게 힌트를 요청할 수 있다. 다른 나라에서 막 이사 온 학생은 AI로 수업 필기를 번역할 수 있다. 많은 학습자에게 AI는 전에는 닫혀 있었을 문을 열어 주었다.',
       check: {q: 'How can AI help a student who has just moved from another country?', a: 'It can translate class notes.'}, think: '나는 공부할 때 AI를 어떻게 쓰고 있나?',
       bg: {src: 'h1/donga2/l3/img/r-p3.jpg', about: '책상에서 공부하는 학생'}},
      {who: 'Confidently Wrong', en: 'But AI is not always right. Some AI chatbots give wrong answers in a very confident tone, and many users believe them. A student who copies such an answer without checking might get a poor grade — or worse, spread false information. Looking back, that student should have fact-checked the answer with a reliable source.',
       ko: '하지만 AI가 늘 옳은 것은 아니다. 어떤 AI 챗봇은 아주 자신 있는 말투로 틀린 답을 하고, 많은 사용자가 그것을 믿는다. 그런 답을 확인 없이 베끼는 학생은 나쁜 점수를 받거나, 더 나쁘게는 거짓 정보를 퍼뜨릴 수도 있다. 돌이켜 보면, 그 학생은 믿을 만한 자료로 그 답을 확인했어야 했다.',
       check: {q: 'What should the student have done?', a: 'The student should have fact-checked the answer with a reliable source.'}, think: '자신 있게 말하는 정보는 왜 더 믿기 쉬울까?',
       bg: {src: 'h1/donga2/l3/img/r-p4.jpg', about: '물음표'}},
      {who: 'Hidden Bias', en: 'AI learns from huge amounts of data created by humans. If that data contains unfair ideas about certain groups of people, the AI may learn and repeat them. Some systems that judged job applications, for example, have been criticized for treating some applicants unfairly. The machines did not intend to be unfair; they simply copied patterns from the past.',
       ko: 'AI는 인간이 만든 방대한 데이터로 학습한다. 그 데이터에 특정 집단에 대한 불공정한 생각이 담겨 있다면, AI는 그것을 배우고 되풀이할 수 있다. 예를 들어 입사 지원서를 평가하던 일부 시스템은 일부 지원자를 불공정하게 대한다는 비판을 받았다. 기계가 불공정하려고 한 것은 아니었다. 그저 과거의 패턴을 따라 했을 뿐이다.',
       check: {q: 'Why can AI be unfair?', a: 'Because it learns from human data that may contain unfair ideas.'}, think: '기계의 불공정함은 누구의 책임일까?',
       bg: {src: 'h1/donga2/l3/img/r-p5.jpg', about: '서버실의 데이터 장비'}},
      {who: 'Working Together', en: 'Will AI take over our jobs? Some tasks, especially repetitive ones, are likely to be automated. But new jobs will also appear, and many jobs will change rather than disappear. Only by learning to work with AI can we stay ahead. Skills that machines find difficult — creativity, empathy, and asking good questions — will become even more valuable.',
       ko: 'AI가 우리의 일자리를 빼앗을까? 일부 업무, 특히 반복적인 일은 자동화될 가능성이 크다. 하지만 새로운 일자리도 생겨날 것이고, 많은 일자리가 사라지기보다는 변할 것이다. AI와 함께 일하는 법을 배워야만 우리는 앞서 나갈 수 있다. 기계가 어려워하는 능력, 즉 창의성, 공감, 좋은 질문을 던지는 능력은 더욱 가치 있어질 것이다.',
       check: {q: 'What skills will become more valuable?', a: 'Creativity, empathy, and asking good questions.'}, think: 'AI가 대신할 수 없는 나만의 능력은 무엇일까?',
       bg: {src: 'h1/donga2/l3/img/r-p6.jpg', about: '로봇 팔'}},
      {who: 'Our Choice', en: 'The future is not something that simply happens to us. People design AI, choose the data it learns from, and decide how it is used. Smart machines can make our lives easier, safer, and more efficient, but only if we stay curious, careful, and responsible. The smartest part of a smart future should still be us.',
       ko: '미래는 그저 우리에게 일어나는 무언가가 아니다. 사람이 AI를 설계하고, 그것이 학습할 데이터를 고르고, 그것이 어떻게 쓰일지 결정한다. 똑똑한 기계는 우리의 삶을 더 쉽고 안전하고 효율적으로 만들 수 있다. 하지만 그것은 우리가 호기심을 갖고, 신중하고, 책임감을 가질 때에만 가능하다. 스마트한 미래에서 가장 똑똑한 부분은 여전히 우리여야 한다.',
       check: {q: 'Who decides how AI is used?', a: 'People do.'}, think: '“가장 똑똑한 부분은 우리여야 한다”는 말은 무슨 뜻일까?',
       bg: {src: 'h1/donga2/l3/img/r-p7.jpg', about: '도시의 야경'}}
    ],
    coverImg: {src: 'h1/donga2/l3/img/r-cover.jpg'},
    coverImg2: {src: 'h1/donga2/l3/img/r-cover2.jpg'},
    split: 4,
    next: 'AI가 늘 옳을까?\n우리는 무엇을 조심해야 할까?',
    recap: {q: 'AI는 우리의 삶을 어떻게 바꾸었나?', items: [{k: 'SUGGESTIONS', v: 'recommends songs and predicts what we will buy'}, {k: 'HOMES & CARS', v: 'smart lights, learning thermostats, self-driving cars'}, {k: 'LEARNING', v: 'AI tutors and translation for students'}]},
    tf: [
      {p: 0, s: 'Our great-grandparents used AI every day.', a: false, why: '그런 기기를 상상하지 못했다.'},
      {p: 1, s: 'Algorithms only recommend songs.', a: false, why: '살 물건도 예측한다.'},
      {p: 2, s: 'Self-driving cars are being tested on real roads.', a: true},
      {p: 3, s: 'AI can help students who have just moved from another country.', a: true},
      {p: 4, s: 'AI chatbots always give correct answers.', a: false, why: '자신 있는 말투로 틀린 답을 하기도 한다.'},
      {p: 5, s: 'AI can repeat unfair ideas found in its data.', a: true},
      {p: 6, s: 'The writer thinks all jobs will disappear.', a: false, why: '많은 일자리는 사라지기보다 변할 것이다.'},
      {p: 7, s: 'The writer believes people decide how AI is used.', a: true}
    ],
    key: [
      {en: 'They {{could never have imagined}} such a device.', note: 'could have p.p. (~할 수 있었을 것이다) + never', g: 'g1'},
      {en: '{{Not only does it}} recommend songs and videos, but it also predicts …', note: 'Not only 도치 (does + 주어 + 동사원형)', g: 'g2'},
      {en: '{{Little did people know}} thirty years ago how quickly machines would learn.', note: 'Little 도치', g: 'g2'},
      {en: 'AI has opened doors that {{would have been}} closed before.', note: '조동사 + have p.p. (가정의 결과)', g: 'g1'},
      {en: 'That student {{should have fact-checked}} the answer.', note: 'should have p.p. (했어야 했는데 안 함)', g: 'g1'},
      {en: '{{Only by learning}} to work with AI {{can we}} stay ahead.', note: 'Only + 부사구 도치 (can + 주어)', g: 'g2'}
    ],
    summary: {text: 'AI has moved into our everyday lives. Not only does it {{recommend}} songs, but it also predicts what we will buy. It helps students learn, but it can be confidently {{wrong}}, so we should always {{fact-check}} its answers. AI can also repeat human {{bias}} from its data. Only by staying curious and {{responsible}} can we make smart machines work for us.'},
    order: ['A student asks an AI chatbot a question.', 'The chatbot gives a confident but wrong answer.', 'The student copies the answer without checking.', 'The student realizes he should have fact-checked.'],
    chart: {title: 'AI: BENEFITS & RISKS', ko: 'AI의 편리함과 위험 정리', cols: ['Benefit', 'Risk'], note: '표를 보고 “Not only does AI ~, but it also ~.” 도치 문장과 “We should have ~.” 문장으로 말하게 한다.', rows: [
      {name: 'Recommendations', cells: ['save time', 'shape what we see']},
      {name: 'AI tutors', cells: ['help at any time', 'confidently wrong answers']},
      {name: 'Data', cells: ['learns quickly', 'repeats human bias']},
      {name: 'Automation', cells: ['efficient work', 'some jobs change']}
    ]},
    wrap: {en: 'To make AI work for us, we should ______. Only by ______ can we ______.', ko: '관통 질문으로 돌아가기: AI를 현명하게 쓰기 위한 나의 제안 쓰기'}
  },

  quiz: [
    ['“예측하다”를 뜻하는 낱말은?', ['replace', 'predict', 'protect', 'produce'], 1, 'predict'],
    ['“편향, 편견”을 뜻하는 낱말은?', ['bias', 'device', 'privacy', 'innovation'], 0, 'bias'],
    ['predict의 pre-가 뜻하는 것은?', ['스스로', '미리', '다시', '아닌'], 1, 'pre- = 미리'],
    ['reliable의 반대말은?', ['unreliable', 'irreliable', 'disreliable', 'nonreliable'], 0, 'un- + reliable'],
    ['가능성을 말하는 표현은?', ['I doubt that.', 'It’s likely to rain.', 'I’m certain.', 'Are you sure?'], 1, 'be likely to'],
    ['확신이 가장 약한 표현은?', ['I’m certain that ~', 'I’m sure that ~', 'I think ~', 'I doubt that ~'], 3, 'I doubt that ~'],
    ['빈칸에 알맞은 것은? “The road is wet. It must ____ last night.”', ['rain', 'rained', 'have rained', 'be raining'], 2, 'must have p.p.'],
    ['“I should have checked.”의 뜻은?', ['확인했다', '확인해야 한다', '확인했어야 했는데 (안 했다)', '확인할 것이다'], 2, 'should have p.p. = 후회'],
    ['어법상 틀린 문장은?', ['He must have left.', 'She may have forgotten.', 'The AI must made a mistake.', 'We could have won.'], 2, 'must have made'],
    ['빈칸에 알맞은 것은? “Never ____ such a smart robot.”', ['I have seen', 'have I seen', 'I seen have', 'seen I have'], 1, 'Never + have + I'],
    ['빈칸에 알맞은 것은? “Not only ____ fast, but it is also cheap.”', ['it is', 'is it', 'does it', 'it does'], 1, 'be동사 도치: is it'],
    ['AI 추천의 위험으로 글에 나온 것은?', ['너무 비싸다', '우리가 보는 것을 만들어 낸다', '느리다', '소리가 크다'], 1, 'shape what we see'],
    ['AI가 불공정할 수 있는 까닭은?', ['기계가 나빠서', '사람이 만든 데이터의 편향을 배워서', '전기가 부족해서', '규칙이 없어서'], 1, 'learns from human data'],
    ['더 가치 있어질 능력이 아닌 것은?', ['창의성', '공감', '좋은 질문하기', '반복 작업'], 3, '반복 작업은 자동화될 가능성이 크다'],
    ['글쓴이의 주장으로 알맞은 것은?', ['AI를 쓰지 말아야 한다', '사람이 AI를 책임 있게 설계하고 써야 한다', 'AI가 모든 결정을 해야 한다', '미래는 예측할 수 없다'], 1, 'People design AI … decide how it is used']
  ]
};
