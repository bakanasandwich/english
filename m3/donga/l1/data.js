/* 중3 영어(동아·윤정미) Lesson 1 · Be Yourself  — 가안
   2022 개정 중3 교과서(2027 적용)의 목차가 공개되기 전, 중3 문법 순서에 맞춰 만든 가안 단원입니다.
   단원명·의사소통 기능·대화문·읽기 글은 모두 새로 쓴 것이며, 교과서가 나오면 맞춰 바꿀 수 있습니다. */
window.LESSON = {
  book: 'm3-donga', no: 1, estimate: true,
  title: 'Be Yourself', ko: '나답게 살기',
  bigQ: {en: 'What makes you who you are?', ko: '무엇이 나를 나답게 만들까?'},
  align: {
    tb: {note: '2022 개정 중3 영어 교과서(동아·윤정미)는 2026년 8월 검정을 거쳐 2027학년도부터 쓰인다. 아직 목차·본문이 공개되지 않아 단원명·의사소통 기능·언어 형식은 중1·중2 교과서의 흐름과 교육과정 [별표 4] 중학교 권장 언어 형식을 바탕으로 추정했다. 교과서가 공개되면 다시 대조한다.'},
    std: {vocab: ['9영01-01', '9영02-01'], talk: ['9영01-05', '9영02-06'], grammar: ['9영02-02'], read1: ['9영01-03', '9영01-09'], read2: ['9영02-08']},
    forms: ['Relative Clauses', 'Perfectives']
  },
  goals: {
    vocab: ['정체성·개성과 관련된 낱말 20개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 나의 개성을 한 문장으로 표현할 수 있다.'],
    talk: ['자신의 의견을 분명하게 말할 수 있다.', '확신하는 정도를 표현할 수 있다.'],
    grammar: ['관계대명사 what(~하는 것)을 써서 문장을 만들 수 있다.', '현재완료진행형으로 과거부터 지금까지 계속되는 일을 말할 수 있다.'],
    read1: ['글의 주제를 예측하고, 첫 번째 인물이 자신을 찾은 과정을 이해할 수 있다.'],
    read2: ['세 인물의 공통점을 찾아 글의 요지를 요약하고, 나다움에 대한 글을 영어로 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'Have you ever done something just because everyone else did it?', ko: '다른 사람들이 다 해서 따라 한 적이 있나요?', note: '유행하는 옷, 줄임말, 앱 등. 따라 했을 때의 기분과 그만둔 경험을 나누게 한다. trend, follow, unique로 이어진다.'},
    words: [
      {w: 'identity', pos: 'n.', ko: '정체성', ic: '🪪', ex: 'Music is part of my identity.', exKo: '음악은 내 정체성의 일부다.'},
      {w: 'unique', pos: 'adj.', ko: '독특한, 유일한', ic: '🦄', audio: 'assets/audio/unique.mp3', audioCredit: 'Neskaya · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Everyone is unique.', exKo: '모든 사람은 독특하다.'},
      {w: 'trend', pos: 'n.', ko: '유행, 경향', ic: '📈', ex: 'She doesn’t follow every trend.', exKo: '그녀는 모든 유행을 따르지는 않는다.'},
      {w: 'compare', pos: 'v.', ko: '비교하다', ic: '⚖️', audio: 'assets/audio/compare.mp3', audioCredit: 'TreeMama · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Don’t compare yourself with others.', exKo: '자신을 남과 비교하지 마라.'},
      {w: 'confidence', pos: 'n.', ko: '자신감', ic: '😎', audio: 'assets/audio/confidence.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Practice gave him confidence.', exKo: '연습이 그에게 자신감을 주었다.'},
      {w: 'pressure', pos: 'n.', ko: '압박, 부담', ic: '🗜️', audio: 'assets/audio/pressure.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Teens feel a lot of pressure.', exKo: '십대는 많은 압박을 느낀다.'},
      {w: 'opinion', pos: 'n.', ko: '의견', ic: '🗣️', audio: 'assets/audio/opinion.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Everyone has a different opinion.', exKo: '모두가 다른 의견을 가지고 있다.'},
      {w: 'value', pos: 'v./n.', ko: '소중히 여기다; 가치', ic: '💎', audio: 'assets/audio/value.mp3', audioCredit: 'recorded by Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'I value honesty.', exKo: '나는 정직을 소중히 여긴다.'},
      {w: 'traditional', pos: 'adj.', ko: '전통적인', ic: '🏮', audio: 'assets/audio/traditional.mp3', audioCredit: 'Persent101 · GFDL (Wikimedia Commons, US)', ex: 'He plays a traditional instrument.', exKo: '그는 전통 악기를 연주한다.'},
      {w: 'instrument', pos: 'n.', ko: '악기', ic: '🎻', audio: 'assets/audio/instrument.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Which instrument can you play?', exKo: '너는 어떤 악기를 연주할 수 있니?'},
      {w: 'ignore', pos: 'v.', ko: '무시하다', ic: '🙉', audio: 'assets/audio/ignore.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'She ignored the mean comments.', exKo: '그녀는 못된 댓글들을 무시했다.'},
      {w: 'accept', pos: 'v.', ko: '받아들이다', ic: '🤲', audio: 'assets/audio/accept.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Accept who you are.', exKo: '있는 그대로의 자신을 받아들여라.'},
      {w: 'honest', pos: 'adj.', ko: '정직한, 솔직한', ic: '🫡', audio: 'assets/audio/honest.mp3', audioCredit: 'Dvortygirl · Public domain (Wikimedia Commons, US)', ex: 'Be honest with yourself.', exKo: '자신에게 솔직해라.'},
      {w: 'strength', pos: 'n.', ko: '강점, 힘', ic: '💪', audio: 'assets/audio/strength.mp3', audioCredit: 'Dvortygirl · Public domain (Wikimedia Commons, US)', ex: 'Patience is my strength.', exKo: '인내심이 나의 강점이다.'},
      {w: 'weakness', pos: 'n.', ko: '약점', ic: '🩹', audio: 'assets/audio/weakness.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Everyone has weaknesses.', exKo: '누구에게나 약점이 있다.'},
      {w: 'perfect', pos: 'adj.', ko: '완벽한', ic: '💯', ex: 'Nobody is perfect.', exKo: '완벽한 사람은 없다.'},
      {w: 'judge', pos: 'v.', ko: '판단하다, 평가하다', ic: '👨‍⚖️', audio: 'assets/audio/judge.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Don’t judge people by their looks.', exKo: '외모로 사람을 판단하지 마라.'},
      {w: 'courage', pos: 'n.', ko: '용기', ic: '🦁', audio: 'assets/audio/courage.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'It takes courage to be different.', exKo: '남과 다르려면 용기가 필요하다.'},
      {w: 'mirror', pos: 'n.', ko: '거울', ic: '🪞', audio: 'assets/audio/mirror.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'She smiled at the mirror.', exKo: '그녀는 거울을 보며 웃었다.'},
      {w: 'passion', pos: 'n.', ko: '열정', ic: '🔥', audio: 'assets/audio/passion.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Follow your passion.', exKo: '네 열정을 따라가라.'}
    ],
    phrases: [
      {w: 'fit in', ko: '어울리다, 맞추다', ex: 'He tried hard to fit in.', exKo: '그는 어울리려고 무척 애썼다.'},
      {w: 'stand out', ko: '눈에 띄다', ex: 'Her style stands out.', exKo: '그녀의 스타일은 눈에 띈다.'},
      {w: 'care about', ko: '~에 마음을 쓰다', ex: 'I care about what my friends think.', exKo: '나는 친구들이 어떻게 생각하는지 신경 쓴다.'},
      {w: 'be proud of', ko: '~을 자랑스러워하다', ex: 'Be proud of what you are.', exKo: '지금의 너를 자랑스러워해.'},
      {w: 'be afraid of', ko: '~을 두려워하다', ex: 'Don’t be afraid of being different.', exKo: '남과 다른 것을 두려워하지 마.'},
      {w: 'in the end', ko: '결국', ex: 'In the end, she found her own style.', exKo: '결국 그녀는 자기만의 스타일을 찾았다.'}
    ],
    pairs: [
      {a: 'strength', b: 'weakness', rel: '반대말'},
      {a: 'accept', b: 'reject', rel: '반대말'},
      {a: 'fit in', b: 'stand out', rel: '반대 방향'},
      {a: 'confident', b: 'confidence', rel: '형용사 / 명사'}
    ],
    wrap: {en: 'My strength is ______. I don’t need to be ______.', ko: '오늘 배운 낱말로 나의 강점과 다짐 쓰기'}
  },

  talk: {
    hook: {en: 'Do you care a lot about what other people think?', ko: '다른 사람의 생각에 많이 신경 쓰나요?', note: '1(전혀)~5(아주 많이)로 손을 들게 한다. 결과를 보고 “왜 신경 쓰게 될까?”를 묻는다.'},
    speakers: {Yuna: {voice: 0, pitch: 1.1}, Daniel: {voice: 1, pitch: .95}, Seojin: {voice: 0, pitch: 1.15}, Max: {voice: 1, pitch: 1}, 'Ms. Choi': {voice: 2, pitch: 1.05}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '의견 표현하기',
        key: {q: ['What’s your opinion on ~?', 'How do you feel about ~?'], a: ['In my opinion, ~.', 'I believe (that) ~.', 'As for me, ~.']},
        note: 'In my opinion / I believe / As for me로 시작하면 의견이 분명해진다. 근거를 because로 덧붙이게 한다.',
        dialogs: [
          { title: 'Dialogue A', setting: '방과 후, 교실', lines: [
            {s: 'Daniel', en: 'Yuna, {{what’s your opinion on}} school uniforms?', ko: '유나야, 교복에 대한 네 의견은 어때?'},
            {s: 'Yuna', en: '{{In my opinion}}, we should be free to wear our own clothes.', ko: '내 생각에는 우리 옷을 자유롭게 입을 수 있어야 해.'},
            {s: 'Daniel', en: 'Why do you think so?', ko: '왜 그렇게 생각해?'},
            {s: 'Yuna', en: '{{I believe}} clothes show who we are. What I wear says something about me.', ko: '옷은 우리가 누구인지 보여 준다고 믿어. 내가 입는 것은 나에 대해 무언가를 말해 주거든.'},
            {s: 'Daniel', en: 'I see. {{As for me}}, uniforms are easier. I don’t have to choose every morning.', ko: '그렇구나. 나는 교복이 더 편해. 매일 아침 고를 필요가 없잖아.'}
          ]},
          { title: 'Dialogue B', setting: '토론 수업', lines: [
            {s: 'A', en: '{{How do you feel about}} following trends?', ko: '유행을 따르는 것에 대해 어떻게 생각해?'},
            {s: 'B', en: 'I think it’s fine, but we shouldn’t follow every trend.', ko: '괜찮다고 생각하지만, 모든 유행을 따를 필요는 없어.'},
            {s: 'A', en: 'I agree. What I like is more important.', ko: '동의해. 내가 좋아하는 게 더 중요해.'},
            {s: 'B', en: 'Exactly.', ko: '바로 그거야.'}
          ]}
        ],
        check: [
          {q: 'What is Yuna’s opinion on school uniforms?', a: 'She thinks students should be free to wear their own clothes.'},
          {q: 'Why does Daniel like uniforms?', a: 'He doesn’t have to choose clothes every morning.'},
          {q: 'What does A think is more important?', a: 'What A likes.'}
        ],
        drill: {frame: ['A: What’s your opinion on ____?', 'B: In my opinion, ...'], opts: ['school uniforms', 'social media', 'following trends', 'online friends', 'homework', 'phone rules']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '확신 정도 표현하기',
        key: {q: ['Are you sure (that) ~?', 'Do you think ~?'], a: ['I’m sure (that) ~.', 'I’m not sure, but ~.', 'I doubt (that) ~.']},
        note: '확신할수록 I’m sure → I think → I’m not sure → I doubt. 정도를 손짓으로 함께 표현하면 기억하기 쉽다.',
        dialogs: [
          { title: 'Dialogue A', setting: '음악실 앞', lines: [
            {s: 'Seojin', en: 'Max, I’m going to play the gayageum at the school festival.', ko: '맥스, 나 학교 축제에서 가야금 연주할 거야.'},
            {s: 'Max', en: 'Wow. {{Are you sure}} people will like it? Everyone else is doing K-pop dance.', ko: '와. 사람들이 좋아할 거라고 확신해? 다른 애들은 다 케이팝 댄스를 하잖아.'},
            {s: 'Seojin', en: '{{I’m not sure, but}} I want to show what I love.', ko: '확실하진 않지만, 내가 좋아하는 걸 보여 주고 싶어.'},
            {s: 'Max', en: 'How long have you been playing it?', ko: '얼마나 오래 연주해 왔어?'},
            {s: 'Seojin', en: 'I’ve been playing it for five years.', ko: '5년 동안 연주해 왔어.'},
            {s: 'Max', en: 'Then {{I’m sure}} you’ll be great!', ko: '그럼 넌 분명 멋지게 할 거야!'}
          ]},
          { title: 'Dialogue B', setting: '쉬는 시간', lines: [
            {s: 'A', en: '{{Do you think}} I should dye my hair like everyone else?', ko: '다른 애들처럼 머리를 염색해야 할까?'},
            {s: 'B', en: '{{I doubt}} it will make you happier.', ko: '그게 너를 더 행복하게 할지 의문이야.'},
            {s: 'A', en: 'You’re right. I like my hair the way it is.', ko: '네 말이 맞아. 난 지금 내 머리가 좋아.'},
            {s: 'B', en: 'That’s what matters.', ko: '그게 중요한 거야.'}
          ]}
        ],
        check: [
          {q: 'What will Seojin play at the festival?', a: 'The gayageum.'},
          {q: 'How long has Seojin been playing it?', a: 'For five years.'},
          {q: 'Why does B doubt A should dye A’s hair?', a: 'B doubts it will make A happier.'}
        ],
        drill: {frame: ['A: Are you sure ____?', 'B: I’m sure. / I’m not sure. / I doubt it.'], opts: ['it will rain', 'she likes it', 'we can win', 'he is coming', 'this is true', 'it’s a good idea']}
      }
    ],
    interviewEx: 'In Jiwon’s opinion, trends are fun, but she is sure that her own style is more important.',
    watch: {
      label: 'Let’s Watch', title: 'The Talent Show', setting: '학교 장기 자랑 리허설. 무대 뒤에서 서진이 긴장한 채 최 선생님과 이야기한다.',
      lines: [
        {s: 'Seojin', en: 'Ms. Choi, I’m nervous. What if people laugh at me?', ko: '최 선생님, 긴장돼요. 사람들이 저를 비웃으면 어떡하죠?'},
        {s: 'Ms. Choi', en: 'You’ve been practicing for weeks. What you need now is confidence.', ko: '몇 주 동안 연습해 왔잖니. 지금 네게 필요한 건 자신감이야.'},
        {s: 'Seojin', en: 'But my performance is so different from the others.', ko: '하지만 제 공연은 다른 애들과 너무 달라요.'},
        {s: 'Ms. Choi', en: 'In my opinion, that’s your strength. Different is not wrong.', ko: '내 생각에는 그게 너의 강점이야. 다른 건 틀린 게 아니란다.'},
        {s: 'Seojin', en: 'You’re right. I’ll play what I love.', ko: '맞아요. 제가 좋아하는 걸 연주할게요.'},
        {s: 'Ms. Choi', en: 'I’m sure everyone will remember it.', ko: '모두가 분명 기억할 거야.'}
      ],
      check: [
        {q: 'Why is Seojin nervous?', a: 'She is afraid people will laugh at her.'},
        {q: 'What does Seojin need now, according to Ms. Choi?', a: 'Confidence.'},
        {q: 'What does Ms. Choi say about being different?', a: 'Different is not wrong (it’s Seojin’s strength).'}
      ]
    },
    wrap: {en: 'Share your opinion on a topic and say how sure you are.', ko: '주제 하나에 대한 의견을 말하고, 얼마나 확신하는지 함께 표현하기'}
  },

  grammar: {
    cover: 'what · have been -ing',
    hook: {en: '{{What}} I love is music.  /  I {{have been playing}} the gayageum for five years.', ko: '빈칸에 들어갈 말은 각각 어떤 뜻을 만들까?', answer: 'What I love는 ‘내가 사랑하는 것’(관계대명사 what), have been playing은 ‘5년 전부터 지금까지 계속 연주해 오고 있다’(현재완료진행)', note: '“무엇이 음악이라고?”, “지금도 연주할까?”를 물어 두 표현의 뜻을 스스로 찾게 한다.'},
    points: [
      { id: 'g1', name: '관계대명사 what', short: '관계대명사 what', form: 'what + 주어 + 동사 = the thing(s) that ~', meaning: '~하는 것',
        notice: [
          {en: '{{What}} I wear says something about me.', ko: '내가 입는 것은 나에 대해 무언가를 말해 준다. (주어)'},
          {en: 'I want to show {{what}} I love.', ko: '나는 내가 사랑하는 것을 보여 주고 싶다. (목적어)'},
          {en: 'That’s {{what}} matters.', ko: '그것이 중요한 것이다. (보어)'}
        ],
        rule: [
          {k: '의미', v: 'what = the thing(s) that / which (선행사를 포함)', ex: 'What she said is true. = The thing that she said is true.'},
          {k: '역할', v: 'what절은 문장에서 주어 · 목적어 · 보어', ex: 'This is what I need.'},
          {k: '구별', v: '선행사(명사)가 앞에 있으면 that / which', ex: 'the song that I like (○) / the song what I like (✗)'}
        ],
        compare: {
          title: 'what일까, that일까?', note: '빈칸 앞에 명사(선행사)가 있는지부터 확인하게 한다.',
          head: ['what (앞에 명사 없음)', 'that / which (앞에 명사 있음)', '같은 뜻'],
          cols: [['What I need is time.', 'I know what you mean.', 'Show me what you have.'], ['The thing that I need is time.', 'I know the word that you mean.', 'Show me the photo that you have.'], ['what = the thing that', '', '']]
        },
        check: [
          {q: '____ I want is a little more time. (what / that)', a: 'What'},
          {q: 'This is the song ____ I like. (what / that)', a: 'that'},
          {q: 'Don’t believe ____ you see online. (모든 것: what)', a: 'what'},
          {q: 'What he said ____ true. (be, 현재)', a: 'is'},
          {q: 'I can’t understand ____ she means. (what / which)', a: 'what'}
        ],
        trap: {bad: 'This is the bag what I bought yesterday.', good: 'This is the bag that I bought yesterday.', why: '앞에 선행사(the bag)가 있으면 what을 쓰지 않는다.'},
        scramble: [
          {ko: '내가 좋아하는 것은 그림 그리기이다.', en: 'What I like is drawing.'},
          {ko: '네가 생각하는 것을 나에게 말해 줘.', en: 'Tell me what you think.'},
          {ko: '그것이 내가 원했던 것이다.', en: 'That is what I wanted.'}
        ]
      },
      { id: 'g2', name: '현재완료진행형', short: '현재완료진행', form: 'have / has been + 동사-ing', meaning: '(과거부터 지금까지) 계속 ~해 오고 있다',
        notice: [
          {en: 'I {{have been playing}} the gayageum for five years.', ko: '나는 5년 동안 가야금을 연주해 오고 있다.'},
          {en: 'She {{has been practicing}} since March.', ko: '그녀는 3월부터 계속 연습해 오고 있다.'},
          {en: 'How long {{have}} you {{been learning}} English?', ko: '너는 얼마나 오랫동안 영어를 배워 오고 있니?'}
        ],
        rule: [
          {k: '뜻', v: '과거에 시작해 지금도 계속되는 동작 (지금도 하는 중)', ex: 'It has been raining all day.'},
          {k: 'for / since', v: 'for + 기간 / since + 시작 시점', ex: 'for two hours / since 2020'},
          {k: '현재완료와 차이', v: '진행 중인 ‘동작’을 강조 (know, like 같은 상태 동사는 현재완료)', ex: 'I have known her for years. (○) / have been knowing (✗)'}
        ],
        check: [
          {q: 'I have been ____ for an hour. (wait)', a: 'waiting'},
          {q: 'She ____ been dancing since 2020. (have)', a: 'has'},
          {q: 'They have been talking ____ two hours. (for / since)', a: 'for'},
          {q: 'He has been studying ____ this morning. (for / since)', a: 'since'},
          {q: 'How long have you been ____ the piano? (play)', a: 'playing'}
        ],
        trap: {bad: 'I have been knowing him since I was five.', good: 'I have known him since I was five.', why: 'know처럼 상태를 나타내는 동사는 진행형으로 쓰지 않는다.'},
        scramble: [
          {ko: '나는 3년 동안 그림을 그려 오고 있다.', en: 'I have been drawing for three years.'},
          {ko: '그는 아침부터 계속 노래를 부르고 있다.', en: 'He has been singing since this morning.'},
          {ko: '너는 얼마나 오랫동안 기다리고 있었니?', en: 'How long have you been waiting?'}
        ]
      }
    ],
    wrap: {en: 'What I love is ______. I have been ______ for ______.', ko: '관계대명사 what 한 문장, 현재완료진행 한 문장으로 나의 열정 쓰기'},
    wrapEx: 'What I love is baking. I have been baking bread for two years.'
  },

  reading: {
    title: 'The Courage to Be Yourself', kind: '청소년 에세이 모음', cover: 'Me', coverKo: '따라 하지 않을 용기', cover2: 'Unique', coverKo2: '다름은 틀림이 아니다',
    before: [
      {q: 'Look at the title. Why does it take courage to be yourself?', a: '남과 다르면 눈에 띄고 비판받을까 두렵기 때문'},
      {q: 'When do you feel most like yourself?', a: '자유롭게 말한 뒤 글과 비교'}
    ],
    gloss: {'filters': '(사진) 필터', 'likes': '‘좋아요’ 수', 'exhausted': '몹시 지친', 'old-fashioned': '구식의, 촌스러운', 'gayageum': '가야금', 'quietly': '조용히', 'introvert': '내향적인 사람', 'loud': '시끄러운', 'listener': '들어 주는 사람', 'version': '판, 모습', 'copy': '복사본, 흉내'},
    paras: [
      {who: '', en: 'In a world full of trends, it is easy to lose yourself. We compare our lives with what we see online, and we try hard to fit in. Three teens wrote about the moment they stopped copying others.',
       ko: '유행으로 가득한 세상에서는 자신을 잃기 쉽습니다. 우리는 온라인에서 보는 것과 우리 삶을 비교하고, 어울리려고 무척 애씁니다. 세 십대가 남을 따라 하기를 멈춘 순간에 대해 글을 썼습니다.',
       check: {q: 'What did the three teens write about?', a: 'The moment they stopped copying others.'}, think: '여러분은 무엇과 자신을 비교하나요?',
       bg: {src: 'm3/donga/l1/img/r-p0.jpg', credit: 'IQRemix · CC BY-SA 2.0 (Flickr)', link: 'https://www.flickr.com/photos/46021126@N00/15678594478', about: '거울에 비친 나'}},
      {who: 'Hayeon, 15', en: 'For two years, I had been posting photos with perfect filters. I checked the likes every hour, and I felt exhausted. One day, I looked in the mirror and didn’t recognize myself. What I saw was a copy of other people.',
       ko: '2년 동안 저는 완벽한 필터를 씌운 사진을 올렸어요. 매시간 ‘좋아요’를 확인했고, 몹시 지쳤어요. 어느 날 거울을 보았는데 제 자신을 알아볼 수 없었어요. 제가 본 것은 다른 사람들의 복사본이었어요.',
       check: {q: 'How did Hayeon feel when she checked the likes every hour?', a: 'She felt exhausted.'}, think: '‘좋아요’ 수는 정말 나의 가치를 보여 줄까?',
       bg: {src: 'm3/donga/l1/img/r-p1.jpg', credit: 'freestocks.org · CC0 1.0 (Flickr)', link: 'https://www.flickr.com/photos/135396164@N05/25314591330', about: '휴대전화 속 SNS'}},
      {who: 'Hayeon, 15', en: 'So I took a break from social media. I started to write a diary about what made me happy. Now I post less, but I smile more. I have been keeping my diary for six months, and it has become my favorite mirror.',
       ko: '그래서 저는 소셜 미디어를 잠시 쉬었어요. 저를 행복하게 하는 것에 대해 일기를 쓰기 시작했죠. 지금은 덜 올리지만 더 많이 웃어요. 6개월째 일기를 써 오고 있는데, 이제 일기가 제가 가장 좋아하는 거울이 되었어요.',
       check: {q: 'How long has Hayeon been keeping her diary?', a: 'For six months.'}, think: '일기가 ‘거울’이 될 수 있는 까닭은?',
       bg: {src: 'm3/donga/l1/img/r-p2.jpg', credit: 'Informedmag · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/146791570@N05/32889030796', about: '일기 쓰기'}},
      {who: 'Joon, 16', en: 'I have been playing the gayageum since I was nine. In middle school, some friends called it old-fashioned, so I stopped bringing it to school. I hid what I loved because I wanted to fit in.',
       ko: '저는 아홉 살 때부터 가야금을 연주해 오고 있어요. 중학교에서 몇몇 친구가 그것을 촌스럽다고 해서 학교에 가져가지 않았어요. 어울리고 싶어서 제가 사랑하는 것을 숨겼죠.',
       check: {q: 'Why did Joon stop bringing his gayageum to school?', a: 'Some friends called it old-fashioned (and he wanted to fit in).'}, think: '좋아하는 것을 숨긴 적이 있나요?',
       bg: {src: 'm3/donga/l1/img/r-p3.jpg', credit: 'Tonio Vega · CC BY-SA 2.0 (Flickr)', link: 'https://www.flickr.com/photos/71368551@N00/6013981041', about: '가야금 연주'}},
      {who: 'Joon, 16', en: 'Last year, I finally played a K-pop song on the gayageum at the school festival. The hall went silent, and then everyone cheered. What made me different became what made me special.',
       ko: '작년에 저는 마침내 학교 축제에서 가야금으로 케이팝 노래를 연주했어요. 강당이 조용해지더니 모두가 환호했어요. 저를 다르게 만든 것이 저를 특별하게 만든 것이 되었죠.',
       check: {q: 'What did Joon play at the festival?', a: 'A K-pop song on the gayageum.'}, think: '‘다름’이 ‘특별함’이 된 다른 예는?',
       bg: {src: 'm3/donga/l1/img/r-p4.jpg', credit: 'Anirudh Koul · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/84856173@N00/3735171010', about: '공연 무대'}},
      {who: 'Mina, 14', en: 'I am an introvert. I used to think that I had to be loud and funny to be liked. But my best friend told me, “What I like about you is that you really listen.” I don’t have to change. Being a good listener is my strength.',
       ko: '저는 내향적인 사람이에요. 사랑받으려면 시끄럽고 재미있어야 한다고 생각했어요. 그런데 가장 친한 친구가 말했어요. “내가 너를 좋아하는 점은 네가 진심으로 들어 준다는 거야.” 저는 바뀔 필요가 없어요. 잘 들어 주는 것이 제 강점이니까요.',
       check: {q: 'What is Mina’s strength?', a: 'Being a good listener.'}, think: '친구가 말해 준 나의 강점은?'},
      {who: 'Your Turn', en: 'Hayeon, Joon, and Mina found the same answer: you don’t have to be a copy of anyone. What the world needs is the real you. It takes courage, but it is worth it.',
       ko: '하연, 준, 미나는 같은 답을 찾았습니다. 누구의 복사본이 될 필요는 없다는 것이죠. 세상에 필요한 것은 진짜 여러분입니다. 용기가 필요하지만 그만한 가치가 있습니다.',
       check: {q: 'What does the world need, according to the writer?', a: 'The real you.'}, think: '‘진짜 나’를 한 문장으로 소개한다면?',
       bg: {src: 'm3/donga/l1/img/r-p6.jpg', credit: 'miss Murasaki · CC BY-SA 2.0 (Flickr)', link: 'https://www.flickr.com/photos/48329800@N02/19798884116', about: '홀로 피어난 꽃'}}
    ],
    split: 3,
    next: '좋아하는 것을 숨긴 준은\n어떻게 바뀌었을까?',
    recap: {q: '하연이는 어떻게 자신을 되찾았을까?', items: [{k: 'BEFORE', v: 'posted filtered photos, checked likes every hour'}, {k: 'TURNING POINT', v: 'didn’t recognize herself in the mirror'}, {k: 'NOW', v: 'has been keeping a diary for six months'}]},
    tf: [
      {p: 1, s: 'Hayeon felt happy when she checked the likes.', a: false, why: '몹시 지쳤다.'},
      {p: 2, s: 'Hayeon now posts more photos than before.', a: false, why: '덜 올리지만 더 많이 웃는다.'},
      {p: 3, s: 'Joon has been playing the gayageum since he was nine.', a: true},
      {p: 4, s: 'Everyone laughed at Joon’s performance.', a: false, why: '모두가 환호했다.'},
      {p: 5, s: 'Mina’s friend likes that Mina really listens.', a: true},
      {p: 6, s: 'The writer says we should copy popular people.', a: false, why: '누구의 복사본도 될 필요가 없다.'}
    ],
    key: [
      {en: 'We compare our lives with {{what we see online}}.', note: '관계대명사 what절 (전치사 with의 목적어)', g: 'g1'},
      {en: '{{What I saw}} was a copy of other people.', note: 'What절이 주어 → 단수 동사 was', g: 'g1'},
      {en: 'I {{have been keeping}} my diary for six months.', note: '현재완료진행 + for + 기간', g: 'g2'},
      {en: 'I {{have been playing}} the gayageum since I was nine.', note: '현재완료진행 + since + 시작 시점', g: 'g2'},
      {en: '{{What made me different}} became {{what made me special}}.', note: 'what절 주어 + what절 보어', g: 'g1'},
      {en: '{{What the world needs}} is the real you.', note: 'What절 주어 + is', g: 'g1'}
    ],
    summary: {text: 'Hayeon stopped checking {{likes}} and has been keeping a {{diary}}. Joon stopped hiding his gayageum and played it at the {{festival}}. Mina learned that being a good {{listener}} is her strength. You don’t have to be a {{copy}} of anyone. What the world needs is the {{real}} you.'},
    order: ['Joon started playing the gayageum at nine.', 'Friends called it old-fashioned.', 'He stopped bringing it to school.', 'He played a K-pop song at the festival.'],
    chart: {title: 'THREE VOICES', ko: '세 사람 비교하기', cols: ['Before', 'Turning point', 'Now'], note: '세 사람 모두 ‘남의 기준’에서 ‘나의 기준’으로 옮겨 갔다는 공통점을 찾게 한다.', rows: [
      {name: 'Hayeon', cells: ['perfect filters, checked likes', 'didn’t recognize herself', 'diary, smiles more']},
      {name: 'Joon', cells: ['hid his gayageum', 'played at the festival', 'different = special']},
      {name: 'Mina', cells: ['tried to be loud', 'friend’s words', 'proud listener']}
    ]},
    wrap: {en: 'What makes me who I am is ______. I have been ______ for ______. I don’t have to ______.', ko: '관통 질문으로 돌아가기: 나를 나답게 만드는 것 세 문장으로 쓰기'}
  },

  quiz: [
    ['“자신감”을 뜻하는 낱말은?', ['courage', 'passion', 'pressure', 'confidence'], 3, 'confidence: 자신감'],
    ['“strength”의 반대말은?', ['weakness', 'identity', 'opinion', 'mirror'], 0, 'strength ↔ weakness'],
    ['“He tried hard to fit ___.” (어울리다)', ['on', 'in', 'out', 'up'], 1, 'fit in'],
    ['“Her style stands ___.” (눈에 띄다)', ['in', 'up', 'out', 'for'], 2, 'stand out'],
    ['의견을 말하는 표현이 아닌 것은?', ['I believe ~.', 'As for me, ~.', 'In my opinion, ~.', 'How long have you ~?'], 3, 'How long have you ~?는 기간을 묻는 질문.'],
    ['확신이 가장 약한 표현은?', ['I doubt it.', 'I think so.', 'I’m sure.', 'I’m pretty sure.'], 0, 'I’m sure > I think > I doubt'],
    ['Let’s Watch에서 최 선생님이 말한 서진에게 지금 필요한 것은?', ['연습', '자신감', '새 악기', '친구의 도움'], 1, 'What you need now is confidence.'],
    ['빈칸에 알맞은 것은? “___ I want is more time.”', ['That', 'Which', 'What', 'It'], 2, '선행사가 없으므로 what'],
    ['빈칸에 알맞은 것은? “This is the song ___ I like.”', ['that', 'what', 'who', 'where'], 0, '선행사 the song + that'],
    ['빈칸에 알맞은 것은? “I have been ___ for an hour.”', ['wait', 'waited', 'waiting', 'to wait'], 2, 'have been + -ing'],
    ['빈칸에 알맞은 것은? “She has been dancing ___ 2020.”', ['for', 'since', 'ago', 'during'], 1, 'since + 시작 시점'],
    ['어법상 틀린 문장은?', ['What I need is time.', 'I have known him for years.', 'This is the bag what I bought.', 'She has been studying since 9.'], 2, 'the bag that I bought'],
    ['하연이 지금 매일 하는 일은?', ['사진 올리기', '일기 쓰기', '‘좋아요’ 확인하기', '필터 고르기'], 1, 'I have been keeping my diary for six months.'],
    ['준이 축제에서 한 일은?', ['케이팝 댄스 공연', '피아노 동요 연주', '친구들과 합창하기', '가야금 케이팝 연주'], 3, 'played a K-pop song on the gayageum'],
    ['글의 요지로 가장 알맞은 것은?', ['유행을 빨리 따르자', '소셜 미디어를 끊자', '내향적인 성격을 고치자', '남을 따라 할 필요 없다'], 3, 'you don’t have to be a copy of anyone']
  ]
};

/* ── 보강: 원리 중심 문법 · 모션 그래픽 · 낱말 만들기 · 발음 기호 ── */
(function (L) {
  const ipa = {identity: '/aɪˈdentəti/', unique: '/juˈniːk/', trend: '/trend/', compare: '/kəmˈper/', confidence: '/ˈkɑːnfɪdəns/', pressure: '/ˈpreʃər/', opinion: '/əˈpɪnjən/', value: '/ˈvæljuː/', traditional: '/trəˈdɪʃənl/', instrument: '/ˈɪnstrəmənt/', ignore: '/ɪɡˈnɔːr/', accept: '/əkˈsept/', honest: '/ˈɑːnɪst/', strength: '/streŋθ/', weakness: '/ˈwiːknəs/', perfect: '/ˈpɜːrfɪkt/', judge: '/dʒʌdʒ/', courage: '/ˈkɜːrɪdʒ/', mirror: '/ˈmɪrər/', passion: '/ˈpæʃn/'};
  L.vocab.words.forEach(w => { if (ipa[w.w]) w.ipa = ipa[w.w]; });
  L.vocab.morph = [
    {w: 'weakness', ko: '약점', parts: [{t: 'weak', k: 'root', m: '약한'}, {t: 'ness', k: 'suf', m: '~함 (명사)'}], family: ['kindness', 'happiness', 'darkness'], note: '형용사 + -ness = 그런 성질 (weak → weakness).'},
    {w: 'confidence', ko: '자신감', parts: [{t: 'con', k: 'pre', m: '완전히'}, {t: 'fid', k: 'root', m: '믿다'}, {t: 'ence', k: 'suf', m: '~함 (명사)'}], family: ['confident', 'confide'], note: '(자신을) 완전히 믿음 → 자신감. 형용사는 confident.'},
    {w: 'traditional', ko: '전통적인', parts: [{t: 'tradit(ion)', k: 'root', m: '전통 (넘겨준 것)'}, {t: 'al', k: 'suf', m: '~의 (형용사)'}], family: ['tradition', 'national', 'personal'], note: '명사 + -al = 형용사 (nation → national).'}
  ];
  const [g1, g2] = L.grammar.points;
  g1.principle = {
    q: 'what은 왜 앞에 꾸밀 명사가 없을까?',
    pic: [{en: 'the thing', ko: '명사'}, {en: 'that', ko: '관계대명사'}, {en: '= what', ko: '둘을 하나로 합친 말', hot: true}],
    core: 'what은 “the thing(s) that”을 한 단어로 줄인 말이다. 꾸밀 명사(the thing)를 이미 품고 있어서 앞에 명사가 오지 않고, what 덩어리 전체가 문장의 주어·목적어·보어가 된다.',
    why: ['what = the thing(s) that → “~하는 것”.', '앞에 명사가 있으면 which/that, 없으면 what.', 'what 뒤에는 목적어나 주어가 빠진 불완전한 문장이 온다 (what I love ___).']
  };
  g1.anim = [{title: 'the thing that → what', states: [
    {t: 'I/S | want to show/V | the thing/O#th | that/X#that | I love/M#il | .', note: '명사 + 관계대명사', ko: '나는 내가 사랑하는 것을 보여 주고 싶다.'},
    {t: 'I/S | want to show/V | what/X#th | I love/M#il | .', note: 'the thing + that = what (명사 포함)', ko: '같은 뜻 — what 덩어리가 목적어'},
    {t: 'What I love/S#th | is/V | music/C | .', note: 'what 덩어리는 주어도 된다', ko: '내가 사랑하는 것은 음악이다.'}]}];
  g1.contrast = {title: 'what vs that(which)', pairs: [
    {a: 'This is {{what}} I wanted.', ka: '이것이 내가 원했던 것이다. (앞에 명사 없음)', b: 'This is the bag {{that}} I wanted.', kb: '이것이 내가 원했던 가방이다. (앞에 명사 the bag)'}],
    point: '앞에 명사가 있으면 that/which, 없으면 what.'};
  g2.principle = {
    q: '현재완료진행형은 현재완료와 무엇이 다를까?',
    pic: [{en: 'five years ago', ko: '시작'}, {en: '~~~~→', ko: '쉬지 않고 계속', arrow: ''}, {en: 'now (still)', ko: '지금도 하는 중', hot: true}],
    core: 'have been + -ing는 현재완료(지금까지)와 진행형(하는 중)을 합친 것이다. 과거에 시작한 동작이 지금 이 순간에도 계속되고 있음을 생생하게 강조한다.',
    why: ['for + 기간 / since + 시작 시점과 자주 쓴다.', 'How long have you been -ing? = 얼마나 오래 ~해 오고 있니?', 'know, have(가지다), like처럼 상태를 나타내는 동사는 진행형으로 쓰지 않는다.']
  };
  g2.anim = [{title: '현재완료 + 진행형 = 현재완료진행', states: [
    {t: 'I/S | started/V#v | the gayageum/O#g | five years ago/M | . | / | I | am still playing | it | .', note: '과거에 시작 + 지금도 하는 중', ko: '나는 5년 전에 가야금을 시작했다. 지금도 하고 있다.'},
    {t: 'I/S | have been playing/X#v | the gayageum/O#g | for five years/M | .', note: 'have been + -ing + for 기간', ko: '나는 5년 동안 가야금을 연주해 오고 있다.'}]}];
  g2.contrast = {title: '현재완료 vs 현재완료진행', pairs: [
    {a: 'I {{have read}} the book.', ka: '나는 그 책을 (다) 읽었다. (완료·결과)', b: 'I {{have been reading}} the book.', kb: '나는 그 책을 계속 읽고 있다. (아직 진행 중)'}],
    point: '끝난 결과는 have + p.p., 지금도 계속 중이면 have been + -ing.'};
})(window.LESSON);
