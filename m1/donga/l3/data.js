/* 중1 영어(동아·윤정미) Lesson 3 · Let’s Be Positive
   교과서 대조(2026-10): 의사소통 기능(감정이나 상태 말하기 · 공감·위로하기), 언어 형식(과거시제 · 명령문),
   읽기 주제(Different Attitudes, Different Results — 같은 대회를 준비하는 두 상황, 태도에 따라 달라지는 결과), 단원 어휘를 교과서 목차·단어 목록과 맞췄다.
   대화문·읽기 글은 저작권 때문에 교과서 원문을 싣지 않고, 같은 주제·같은 언어 형식·교과서 어휘로 새로 쓴 글이다. */
window.LESSON = {
  book: 'm1-donga', no: 3,
  title: 'Let’s Be Positive', ko: '긍정적으로 생각하자',
  bigQ: {en: 'How can a positive attitude change the result?', ko: '긍정적인 태도는 결과를 어떻게 바꿀까?'},
  align: {
    tb: {reading: 'Different Attitudes, Different Results', funcs: ['감정이나 상태 말하기', '공감·위로하기'], forms: ['과거시제', '명령문'],
      note: '교과서 읽기는 같은 춤 대회를 준비하는 한 팀의 두 가지 상황(포기한 경우 / 서로 응원한 경우)을 비교하는 글. 여기 본문은 로봇 대회로 바꿔 같은 짜임으로 새로 쓴 글이다.'},
    std: {vocab: ['9영01-01', '9영02-01'], talk: ['9영01-05', '9영02-02'], grammar: ['9영02-04'], read1: ['9영01-04', '9영01-05'], read2: ['9영01-03', '9영02-06']},
    forms: ['Tenses', 'Clause Types']
  },
  goals: {
    vocab: ['감정·태도와 관련된 낱말 20개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 오늘의 기분과 그 까닭을 한 문장으로 말할 수 있다.'],
    talk: ['자신의 감정이나 상태를 말할 수 있다. (I’m excited. / I’m nervous.)', '상대의 감정에 공감하고 위로할 수 있다. (I’m happy for you. / I’m sorry to hear that.)'],
    grammar: ['과거시제(규칙·불규칙 동사)로 지난 일을 말할 수 있다.', '명령문(동사원형 ~ / Don’t ~ / Let’s ~)으로 격려하고 제안할 수 있다.'],
    read1: ['두 상황을 비교하는 글을 읽고 첫 번째 상황에서 일이 어떻게 되었는지 파악할 수 있다.'],
    read2: ['두 상황의 태도와 결과를 비교하고, 긍정적인 태도에 대한 내 생각을 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'How do you feel before a big test?', ko: '중요한 시험 전에 기분이 어떤가요?', note: '긴장된다, 무섭다, 설렌다 등 답을 모은다. 감정을 나타내는 영어 낱말로 이어진다.'},
    words: [
      {w: 'attitude', pos: 'n.', ko: '태도', ic: '🧭', ex: 'She has a positive attitude.', exKo: '그녀는 긍정적인 태도를 가지고 있다.'},
      {w: 'positive', pos: 'adj.', ko: '긍정적인', ic: '👍', audio: 'assets/audio/positive.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Be positive, and try again.', exKo: '긍정적으로 생각하고 다시 해 봐.'},
      {w: 'result', pos: 'n.', ko: '결과', ic: '📊', audio: 'assets/audio/result.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The result was surprising.', exKo: '결과는 놀라웠다.'},
      {w: 'situation', pos: 'n.', ko: '상황', ic: '🎬', audio: 'assets/audio/situation.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Read the two situations.', exKo: '두 상황을 읽어 보아라.'},
      {w: 'contest', pos: 'n.', ko: '대회', ic: '🏁', audio: 'assets/audio/contest.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Our team entered the contest.', exKo: '우리 팀은 대회에 나갔다.'},
      {w: 'nervous', pos: 'adj.', ko: '긴장한', ic: '😬', audio: 'assets/audio/nervous.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'I was nervous before the test.', exKo: '나는 시험 전에 긴장했다.'},
      {w: 'upset', pos: 'adj.', ko: '속상한', ic: '😣', ex: 'He was upset about the score.', exKo: '그는 점수 때문에 속상했다.'},
      {w: 'angry', pos: 'adj.', ko: '화난', ic: '😠', audio: 'assets/audio/angry.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Don’t be angry at your friend.', exKo: '친구에게 화내지 마.'},
      {w: 'surprised', pos: 'adj.', ko: '놀란', ic: '😲', audio: 'assets/audio/surprised.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'We were surprised at the news.', exKo: '우리는 그 소식에 놀랐다.'},
      {w: 'terrible', pos: 'adj.', ko: '끔찍한, 형편없는', ic: '😖', audio: 'assets/audio/terrible.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'I had a terrible day.', exKo: '나는 끔찍한 하루를 보냈다.'},
      {w: 'lose', pos: 'v.', ko: '지다, 잃다 (과거 lost)', ic: '📉', ex: 'We lost the game yesterday.', exKo: '우리는 어제 경기에서 졌다.'},
      {w: 'quit', pos: 'v.', ko: '그만두다 (과거 quit)', ic: '🛑', audio: 'assets/audio/quit.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Don’t quit now.', exKo: '지금 그만두지 마.'},
      {w: 'support', pos: 'n.', ko: '지지, 응원', ic: '🤝', audio: 'assets/audio/support.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Thank you for your support.', exKo: '응원해 줘서 고마워.'},
      {w: 'cheer', pos: 'v.', ko: '응원하다', ic: '📣', audio: 'assets/audio/cheer.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'My friends cheered for me.', exKo: '친구들이 나를 응원했다.'},
      {w: 'fault', pos: 'n.', ko: '잘못, 책임', ic: '☝️', audio: 'assets/audio/fault.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'It was not your fault.', exKo: '그건 네 잘못이 아니었어.'},
      {w: 'waste', pos: 'n.', ko: '낭비', ic: '⏳', audio: 'assets/audio/waste.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'It’s a waste of time.', exKo: '그것은 시간 낭비야.'},
      {w: 'happen', pos: 'v.', ko: '일어나다, 생기다', ic: '❓', audio: 'assets/audio/happen.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'What happened next?', exKo: '다음에 무슨 일이 일어났니?'},
      {w: 'interested', pos: 'adj.', ko: '관심 있는', ic: '🤔', audio: 'assets/audio/interested.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'I’m interested in robots.', exKo: '나는 로봇에 관심이 있다.'},
      {w: 'empty', pos: 'adj.', ko: '텅 빈', ic: '🫙', audio: 'assets/audio/empty.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The room was empty.', exKo: '방은 텅 비어 있었다.'},
      {w: 'text', pos: 'v.', ko: '문자를 보내다', ic: '📱', audio: 'assets/audio/text.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'She texted me last night.', exKo: '그녀가 어젯밤 나에게 문자를 보냈다.'}
    ],
    phrases: [
      {w: 'be proud of', ko: '~을 자랑스러워하다', ex: 'I’m proud of our team.', exKo: '나는 우리 팀이 자랑스럽다.'},
      {w: 'Cheer up!', ko: '힘내!', ex: 'Cheer up! You can do it.', exKo: '힘내! 넌 할 수 있어.'},
      {w: 'make a mistake', ko: '실수하다', ex: 'Everyone makes mistakes.', exKo: '누구나 실수를 한다.'},
      {w: 'do one’s best', ko: '최선을 다하다', ex: 'We did our best.', exKo: '우리는 최선을 다했다.'},
      {w: 'give up', ko: '포기하다', ex: 'Don’t give up!', exKo: '포기하지 마!'},
      {w: 'I’m sorry to hear that.', ko: '그 말을 들으니 유감이야.', ex: 'You lost your bag? I’m sorry to hear that.', exKo: '가방을 잃어버렸다고? 정말 안됐다.'}
    ],
    pairs: [
      {a: 'positive', b: 'negative', rel: '반대말'},
      {a: 'win', b: 'lose', rel: '반대말 (과거 won / lost)'},
      {a: 'empty', b: 'full', rel: '반대말'},
      {a: 'interesting', b: 'interested', rel: '흥미로운 / 관심 있는'}
    ],
    wrap: {en: 'Today I feel ______ because ______.', ko: '오늘 배운 감정 낱말로 지금 기분과 그 까닭 쓰기'}
  },

  talk: {
    hook: {en: 'Your friend won a prize. Your friend lost a game. What do you say?', ko: '친구가 상을 받았을 때, 경기에서 졌을 때 어떤 말을 해 주나요?', note: '“축하해”, “괜찮아, 힘내” 같은 말을 모은 뒤, 영어로 공감하고 위로하는 표현을 배운다고 안내한다.'},
    speakers: {Minsu: {voice: 1, pitch: 1}, 'Ms. Kim': {voice: 2, pitch: 1.05}, Alex: {voice: 1, pitch: .95}, Sujin: {voice: 0, pitch: 1.15}, Ryan: {voice: 1, pitch: 1}, Coach: {voice: 2, pitch: .95}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '감정이나 상태 말하기',
        key: {q: ['How do you feel?', 'What’s wrong?', 'You look ~.'], a: ['I’m excited.', 'I’m nervous.', 'I’m upset. / I’m tired.']},
        note: 'I’m + 감정 형용사로 지금 기분을 말한다. 까닭을 붙일 때는 because 또는 문장을 하나 더 쓴다. (I’m nervous. I have a test today.)',
        dialogs: [
          { title: 'Dialogue A', setting: '아침, 교실', lines: [
            {s: 'Sujin', en: 'You look happy, Ryan. What’s up?', ko: '라이언, 기분 좋아 보인다. 무슨 일이야?'},
            {s: 'Ryan', en: 'I got a new bike yesterday. {{I’m so excited}}!', ko: '어제 새 자전거가 생겼어. 정말 신나!'},
            {s: 'Sujin', en: 'Cool! But {{I’m a little nervous}}. I have a speech contest today.', ko: '멋지다! 그런데 나는 조금 긴장돼. 오늘 말하기 대회가 있거든.'},
            {s: 'Ryan', en: 'Don’t worry. You practiced a lot.', ko: '걱정하지 마. 너 연습 많이 했잖아.'}
          ]},
          { title: 'Dialogue B', setting: '쉬는 시간, 복도', lines: [
            {s: 'A', en: 'You don’t look well. {{What’s wrong}}?', ko: '안 좋아 보이네. 무슨 일 있어?'},
            {s: 'B', en: '{{I’m upset}}. I lost my favorite pen.', ko: '속상해. 가장 좋아하는 펜을 잃어버렸어.'},
            {s: 'A', en: 'Where did you lose it?', ko: '어디서 잃어버렸어?'},
            {s: 'B', en: 'I don’t know. Maybe in the gym.', ko: '모르겠어. 아마 체육관에서.'}
          ]}
        ],
        check: [
          {q: 'Why is Ryan excited?', a: 'He got a new bike yesterday.'},
          {q: 'How does Sujin feel?', a: 'She is (a little) nervous.'},
          {q: 'Why is B upset?', a: 'B lost a favorite pen.'}
        ],
        drill: {frame: ['A: How do you feel today?', 'B: I’m ____.'], opts: ['excited', 'nervous', 'upset', 'tired', 'happy', 'surprised']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '공감·위로하기',
        key: {q: ['I won the contest!', 'I lost the game.'], a: ['I’m happy for you. / Congratulations!', 'I’m sorry to hear that.', 'Cheer up! / Don’t worry.']},
        note: '좋은 소식에는 I’m happy for you. / Congratulations!, 나쁜 소식에는 I’m sorry to hear that. 뒤에 Cheer up! / Don’t worry. 같은 명령문으로 격려한다.',
        dialogs: [
          { title: 'Dialogue A', setting: '방과 후, 과학실', lines: [
            {s: 'Minsu', en: 'Ms. Kim, our team won the robot contest!', ko: '김 선생님, 저희 팀이 로봇 대회에서 우승했어요!'},
            {s: 'Ms. Kim', en: 'Really? {{Congratulations}}! {{I’m really happy for you}}.', ko: '정말? 축하해! 정말 기쁘구나.'},
            {s: 'Minsu', en: 'Thanks. We practiced every day for a month.', ko: '감사합니다. 한 달 동안 매일 연습했어요.'},
            {s: 'Ms. Kim', en: 'Good for you. You should be proud of your team.', ko: '잘했어. 너희 팀을 자랑스러워해도 돼.'}
          ]},
          { title: 'Dialogue B', setting: '저녁, 축구 연습장', lines: [
            {s: 'Coach', en: 'You don’t look happy, Alex. What happened?', ko: '알렉스, 기분이 안 좋아 보이네. 무슨 일 있었니?'},
            {s: 'Alex', en: 'We lost the game. I missed an easy goal.', ko: '경기에서 졌어요. 제가 쉬운 골을 놓쳤어요.'},
            {s: 'Coach', en: '{{I’m sorry to hear that}}. But it wasn’t your fault.', ko: '안됐구나. 하지만 네 잘못이 아니었어.'},
            {s: 'Alex', en: 'Thanks, Coach.', ko: '고맙습니다, 코치님.'},
            {s: 'Coach', en: '{{Cheer up}}! {{Let’s}} practice again tomorrow.', ko: '힘내! 내일 다시 연습하자.'}
          ]}
        ],
        check: [
          {q: 'What did Minsu’s team win?', a: 'The robot contest.'},
          {q: 'What did Alex miss?', a: 'An easy goal.'},
          {q: 'What does the coach say about Alex’s mistake?', a: 'It wasn’t his fault.'}
        ],
        drill: {frame: ['A: I ____.', 'B: I’m happy for you! / I’m sorry to hear that.'], opts: ['won first prize', 'lost my phone', 'passed the test', 'have a cold', 'got a new puppy', 'missed the bus']}
      }
    ],
    interviewEx: 'Jiho lost his cap yesterday. I said, “I’m sorry to hear that. Cheer up!”',
    watch: {
      label: 'Let’s Watch', title: 'Bad Day, Good Friends', setting: '점심시간, 급식실. 수진이가 오늘 하루 있었던 일을 친구들에게 이야기한다.',
      lines: [
        {s: 'Sujin', en: 'I had a terrible morning. I woke up late and missed the bus.', ko: '아침이 정말 끔찍했어. 늦잠을 자서 버스를 놓쳤어.'},
        {s: 'Ryan', en: 'Oh, I’m sorry to hear that.', ko: '아, 정말 안됐다.'},
        {s: 'Sujin', en: 'But I won the speech contest after that!', ko: '그런데 그다음에 말하기 대회에서 우승했어!'},
        {s: 'Alex', en: 'Wow, congratulations! I’m so happy for you.', ko: '와, 축하해! 정말 기뻐.'},
        {s: 'Sujin', en: 'Thanks. A bad morning, but a great afternoon!', ko: '고마워. 아침은 나빴지만 오후는 최고야!'}
      ],
      check: [
        {q: 'Why did Sujin miss the bus?', a: 'She woke up late.'},
        {q: 'What did Sujin win?', a: 'The speech contest.'},
        {q: 'What did Alex say?', a: 'Congratulations! I’m so happy for you.'}
      ]
    },
    wrap: {en: 'Tell your partner one good thing and one bad thing from this week. Respond to each other.', ko: '이번 주에 있었던 좋은 일과 나쁜 일을 하나씩 말하고, 짝은 공감·위로의 말로 답하기'}
  },

  grammar: {
    cover: '-ed · Don’t',
    hook: {en: 'I {{saw}} him last night, and he {{was}} all right.  /  {{Don’t}} worry. {{Try}} again!', ko: '앞 문장과 뒤 문장의 동사는 각각 어떤 모양일까?', answer: 'saw, was → 지난 일(과거형) / Don’t worry, Try → 시키거나 격려하는 말(명령문, 동사원형으로 시작)', note: '교과서 언어 형식(I saw him last night, and he was all right. / Don’t worry.)과 같은 짜임이다.'},
    points: [
      { id: 'g1', name: '과거시제', short: '과거시제', form: '동사-ed (규칙) / 불규칙 과거형 / was · were', meaning: '~했다, ~였다',
        notice: [
          {en: 'We {{practiced}} every day.', ko: '우리는 날마다 연습했다.'},
          {en: 'I {{saw}} him last night, and he {{was}} fine.', ko: '나는 어젯밤 그를 봤고, 그는 괜찮았다.'},
          {en: 'We {{didn’t win}} any prizes.', ko: '우리는 아무 상도 받지 못했다.'}
        ],
        rule: [
          {k: '규칙 동사', v: '+ -ed (practice → practiced, stop → stopped, try → tried)', ex: 'They worked hard.'},
          {k: '불규칙 동사', v: 'go → went, see → saw, make → made, lose → lost, win → won, quit → quit', ex: 'We lost the game.'},
          {k: '부정·의문', v: 'didn’t + 동사원형 / Did + 주어 + 동사원형 ~?', ex: 'Did you win? — No, we didn’t.'}
        ],
        compare: {
          title: 'be동사의 과거형', note: '일반동사와 달리 be동사는 was / were로 바꾸고, 부정은 wasn’t / weren’t.',
          head: ['was', 'were'],
          cols: [['I was', 'He / She / It was', 'wasn’t'], ['You were', 'We / They were', 'weren’t']]
        },
        check: [
          {q: 'We ____ hard for the contest. (practice)', a: 'practiced'},
          {q: 'Jun ____ a big mistake. (make)', a: 'made'},
          {q: 'Our team ____ the game. (lose)', a: 'lost'},
          {q: 'They ____ win any prizes. (부정)', a: 'didn’t'},
          {q: 'I ____ nervous yesterday. (be)', a: 'was'}
        ],
        trap: {bad: 'We didn’t won the contest.', good: 'We didn’t win the contest.', why: 'didn’t 뒤에는 동사원형. 과거는 didn’t가 이미 나타낸다.'},
        scramble: [
          {ko: '우리는 한 달 동안 연습했다.', en: 'We practiced for a month.'},
          {ko: '그는 어제 아프지 않았다.', en: 'He was not sick yesterday.'},
          {ko: '너희 팀은 대회에서 이겼니?', en: 'Did your team win the contest?'}
        ]
      },
      { id: 'g2', name: '명령문', short: '명령문', form: '동사원형 ~. / Don’t + 동사원형 ~. / Let’s + 동사원형 ~.', meaning: '~해라 / ~하지 마라 / ~하자',
        notice: [
          {en: '{{Cheer}} up! You can do it.', ko: '힘내! 넌 할 수 있어.'},
          {en: '{{Don’t}} worry. Everyone makes mistakes.', ko: '걱정하지 마. 누구나 실수해.'},
          {en: '{{Let’s}} try one more time.', ko: '한 번만 더 해 보자.'}
        ],
        rule: [
          {k: '긍정', v: '주어 없이 동사원형으로 시작', ex: 'Listen to your teammates.'},
          {k: '부정', v: 'Don’t + 동사원형', ex: 'Don’t give up.'},
          {k: 'be동사', v: 'Be + 형용사 / Don’t be + 형용사', ex: 'Be positive! / Don’t be nervous.'}
        ],
        check: [
          {q: '____ positive! (be)', a: 'Be'},
          {q: '____ give up. (부정)', a: 'Don’t'},
          {q: '____ practice together. (~하자)', a: 'Let’s'},
          {q: 'Don’t ____ angry. (be)', a: 'be'},
          {q: '____ your best! (do)', a: 'Do'}
        ],
        trap: {bad: 'Don’t nervous.', good: 'Don’t be nervous.', why: '형용사(nervous) 앞에는 be가 필요하다. Don’t + be + 형용사.'},
        scramble: [
          {ko: '포기하지 마.', en: 'Don’t give up.'},
          {ko: '긍정적으로 생각해!', en: 'Be positive!'},
          {ko: '한 번 더 해 보자.', en: 'Let’s try one more time.'}
        ]
      }
    ],
    wrap: {en: 'Yesterday I ______. My friend said, “Don’t ______. ______!”', ko: '어제 있었던 일(과거시제)과 친구가 해 준 격려의 말(명령문) 쓰기'},
    wrapEx: 'Yesterday I lost my umbrella. My friend said, “Don’t be upset. Share mine!”'
  },

  reading: {
    title: 'Two Teams, Two Stories', kind: '두 상황 비교 이야기', cover: 'Attitude', coverKo: '태도가 결과를 바꾼다', cover2: 'Positive', coverKo2: '서로를 응원하면',
    before: [
      {q: 'Look at the title. What will the two stories compare?', a: '두 팀의 태도와 결과'},
      {q: 'What do you do when your team makes a mistake?', a: '격려한다 / 탓한다 / 다시 연습한다'}
    ],
    gloss: {'robot contest': '로봇 대회', 'enter': '참가하다', 'build': '만들다', 'fell over': '넘어졌다', 'blamed': '탓했다', 'stopped coming': '나오지 않았다', 'fixed': '고쳤다', 'finish line': '결승선'},
    paras: [
      {who: '', en: 'Every spring, Hanbit Middle School holds a robot contest. This year, Daeho, Mina, and Junseo made a team. “We’re terrible at robots,” said Junseo. “Let’s try anyway,” said Mina. Read two different stories about the same team.',
       ko: '해마다 봄에 한빛중학교는 로봇 대회를 연다. 올해 대호, 미나, 준서가 팀을 만들었다. “우리는 로봇을 정말 못하잖아.” 준서가 말했다. “그래도 해 보자.” 미나가 말했다. 같은 팀에 대한 서로 다른 두 이야기를 읽어 보자.',
       check: {q: 'Who made a team for the robot contest?', a: 'Daeho, Mina, and Junseo.'}, think: '“그래도 해 보자”는 어떤 태도일까?'},
      {who: 'Story 1', en: 'Two weeks before the contest, the robot fell over again and again. Junseo was upset. “It’s your fault,” he said to Daeho. Daeho got angry. Mina didn’t say anything. After that, the team practiced less and less.',
       ko: '대회 2주 전, 로봇이 계속 넘어졌다. 준서는 속상했다. “네 잘못이야.” 준서가 대호에게 말했다. 대호는 화가 났다. 미나는 아무 말도 하지 않았다. 그 뒤로 팀은 점점 연습을 덜 했다.',
       check: {q: 'What did Junseo say to Daeho?', a: '“It’s your fault.”'}, think: '준서의 말을 들은 대호의 기분은?'},
      {who: 'Story 1', en: 'One day before the contest, the practice room was empty. Daeho texted Mina, “I quit. It’s a waste of time.” The team didn’t go to the contest. They all felt terrible.',
       ko: '대회 하루 전, 연습실은 텅 비어 있었다. 대호가 미나에게 문자를 보냈다. “나 그만둘래. 시간 낭비야.” 팀은 대회에 나가지 않았다. 모두 기분이 끔찍했다.',
       check: {q: 'What did Daeho text Mina?', a: '“I quit. It’s a waste of time.”'}, think: '이 팀은 무엇이 잘못되었을까?'},
      {who: 'Story 2', en: 'Two weeks before the contest, the robot fell over again and again. Junseo was upset. “I’m sorry. It’s my mistake,” said Daeho. “Don’t worry,” said Junseo. “We all make mistakes.” Mina smiled. “Cheer up! Let’s fix it together.”',
       ko: '대회 2주 전, 로봇이 계속 넘어졌다. 준서는 속상했다. “미안해. 내 실수야.” 대호가 말했다. “걱정하지 마.” 준서가 말했다. “누구나 실수하잖아.” 미나가 웃었다. “힘내! 같이 고치자.”',
       check: {q: 'What did Mina say?', a: '“Cheer up! Let’s fix it together.”'}, think: '1번 이야기와 무엇이 달라졌을까?'},
      {who: 'Story 2', en: 'On contest day, the robot didn’t fall over. It walked to the finish line. The team didn’t win any prizes, but they cheered loudly. “We did our best,” said Mina. “I’m proud of us.”',
       ko: '대회 날, 로봇은 넘어지지 않았다. 결승선까지 걸어갔다. 팀은 아무 상도 받지 못했지만 크게 환호했다. “우리는 최선을 다했어.” 미나가 말했다. “난 우리가 자랑스러워.”',
       check: {q: 'Did the team win a prize?', a: 'No, they didn’t.'}, think: '상을 받지 못했는데 왜 기뻤을까?'},
      {who: 'You', en: 'The team was the same, and the robot was the same. Only their attitude was different. A positive attitude didn’t give them a prize, but it gave them a happy result. What attitude do you choose?',
       ko: '팀도 같았고 로봇도 같았다. 오직 태도만 달랐다. 긍정적인 태도가 그들에게 상을 주지는 않았지만 행복한 결과를 주었다. 여러분은 어떤 태도를 고르겠는가?',
       check: {q: 'What was different in the two stories?', a: 'Their attitude.'}, think: '나는 어려운 상황에서 어떤 말을 해 줄 수 있을까?'}
    ],
    split: 3,
    next: '같은 상황, 다른 말 한마디.\n두 번째 이야기는 어떻게 될까?',
    recap: {q: '첫 번째 이야기에서 팀은 어떻게 되었을까?', items: [{k: 'PROBLEM', v: 'the robot fell over again and again'}, {k: 'RESULT', v: '“It’s your fault.” → empty room → “I quit.” → no contest'}]},
    tf: [
      {p: 0, s: 'The school holds a robot contest every spring.', a: true},
      {p: 1, s: 'In Story 1, Junseo blamed Daeho.', a: true},
      {p: 2, s: 'In Story 1, the team went to the contest.', a: false, why: 'The team didn’t go to the contest.'},
      {p: 3, s: 'In Story 2, Daeho said sorry.', a: true},
      {p: 4, s: 'In Story 2, the team won first prize.', a: false, why: 'The team didn’t win any prizes.'},
      {p: 5, s: 'The robot was different in the two stories.', a: false, why: 'The robot was the same. Only their attitude was different.'}
    ],
    key: [
      {en: 'This year, Daeho, Mina, and Junseo {{made}} a team.', note: '불규칙 과거 make → made', g: 'g1'},
      {en: 'The robot {{fell}} over again and again.', note: '불규칙 과거 fall → fell', g: 'g1'},
      {en: 'The team {{didn’t go}} to the contest.', note: 'didn’t + 동사원형', g: 'g1'},
      {en: '“{{Don’t}} worry. We all make mistakes.”', note: 'Don’t + 동사원형', g: 'g2'},
      {en: '“{{Cheer}} up! {{Let’s}} fix it together.”', note: '동사원형 / Let’s + 동사원형', g: 'g2'},
      {en: 'The team {{didn’t win}} any prizes, but they {{cheered}} loudly.', note: 'didn’t + 원형 / 규칙 과거 -ed', g: 'g1'}
    ],
    summary: {text: 'In Story 1, the team blamed each other, and Daeho {{quit}}. In Story 2, they said “Don’t {{worry}}” and “Cheer up!” They didn’t win a {{prize}}, but they were {{proud}} of themselves. The same team got different {{results}} because of their {{attitude}}.'},
    order: ['The robot fell over again and again.', 'Daeho said, “It’s my mistake.”', 'Mina said, “Let’s fix it together.”', 'The robot walked to the finish line.'],
    chart: {title: 'TWO STORIES', ko: '두 이야기 비교하기', cols: ['Story 1', 'Story 2'], note: '같은 사건에 서로 다른 말을 한 결과를 과거시제로 말하게 한다.', rows: [
      {name: 'What they said', cells: ['“It’s your fault.”', '“Don’t worry. Cheer up!”']},
      {name: 'What they did', cells: ['practiced less, quit', 'fixed the robot together']},
      {name: 'Result', cells: ['no contest, felt terrible', 'no prize, felt proud']}
    ]},
    wrap: {en: 'When things go wrong, I will say, “______!” A positive attitude ______.', ko: '관통 질문으로 돌아가기: 긍정적인 태도에 대한 내 생각 쓰기'}
  },

  quiz: [
    ['“태도”를 뜻하는 낱말은?', ['result', 'attitude', 'situation', 'support'], 1, 'attitude: 태도'],
    ['“positive”의 반대말은?', ['nervous', 'negative', 'terrible', 'surprised'], 1, 'positive ↔ negative'],
    ['“I’m proud ___ our team.”', ['in', 'at', 'of', 'for'], 2, 'be proud of: ~을 자랑스러워하다'],
    ['나쁜 소식에 알맞은 응답은?', ['Congratulations!', 'I’m happy for you.', 'I’m sorry to hear that.', 'Good job!'], 2, '나쁜 소식 → I’m sorry to hear that.'],
    ['“I won the contest!”에 알맞은 응답은?', ['Cheer up!', 'I’m happy for you.', 'Don’t worry.', 'What’s wrong?'], 1, '좋은 소식 → I’m happy for you. / Congratulations!'],
    ['감정을 묻는 표현은?', ['How often do you jog?', 'How do you feel?', 'Where are you from?', 'What’s your favorite food?'], 1, 'How do you feel? / What’s wrong?'],
    ['Let’s Watch에서 수진이가 버스를 놓친 까닭은?', ['늦잠을 자서', '비가 와서', '대회 연습 때문에', '지갑을 잃어버려서'], 0, 'I woke up late and missed the bus.'],
    ['빈칸에 알맞은 것은? “We ___ the game yesterday.”', ['lose', 'losed', 'lost', 'losing'], 2, 'lose의 과거형: lost'],
    ['빈칸에 알맞은 것은? “___ give up!”', ['Not', 'Don’t', 'Doesn’t', 'No'], 1, '부정 명령문: Don’t + 동사원형'],
    ['어법상 틀린 문장은?', ['We practiced hard.', 'Don’t be nervous.', 'He didn’t won.', 'Let’s try again.'], 2, 'He didn’t win.'],
    ['빈칸에 알맞은 것은? “I ___ nervous yesterday.”', ['am', 'was', 'were', 'did'], 1, 'I + was'],
    ['1번 이야기에서 대호가 미나에게 보낸 문자는?', ['“Cheer up!”', '“I quit.”', '“I’m sorry.”', '“Let’s fix it.”'], 1, 'I quit. It’s a waste of time.'],
    ['2번 이야기에서 대호가 한 말은?', ['“It’s your fault.”', '“I’m sorry. It’s my mistake.”', '“I quit.”', '“We’re terrible.”'], 1, 'I’m sorry. It’s my mistake.'],
    ['2번 이야기의 결과로 알맞은 것은?', ['1등을 했다', '대회에 나가지 않았다', '상은 못 받았지만 자랑스러워했다', '로봇이 넘어졌다'], 2, 'didn’t win any prizes… I’m proud of us.'],
    ['글의 요지로 알맞은 것은?', ['로봇 만들기는 어렵다', '실수하면 그만두자', '태도가 달라지면 결과도 달라진다', '대회에서는 꼭 이겨야 한다'], 2, 'Only their attitude was different.']
  ]
};

/* ── 보강: 원리 중심 문법 · 모션 그래픽 · 낱말 만들기 · 발음 기호 ── */
(function (L) {
  const ipa = {attitude: '/ˈætɪtuːd/', positive: '/ˈpɑːzətɪv/', result: '/rɪˈzʌlt/', situation: '/ˌsɪtʃuˈeɪʃn/', contest: '/ˈkɑːntest/', nervous: '/ˈnɜːrvəs/', upset: '/ʌpˈset/', angry: '/ˈæŋɡri/', surprised: '/sərˈpraɪzd/', terrible: '/ˈterəbl/', lose: '/luːz/', quit: '/kwɪt/', support: '/səˈpɔːrt/', cheer: '/tʃɪr/', fault: '/fɔːlt/', waste: '/weɪst/', happen: '/ˈhæpən/', interested: '/ˈɪntrəstɪd/', empty: '/ˈempti/', text: '/tekst/'};
  L.vocab.words.forEach(w => { if (ipa[w.w]) w.ipa = ipa[w.w]; });
  L.vocab.morph = [
    {w: 'mistake', ko: '실수', parts: [{t: 'mis', k: 'pre', m: '잘못'}, {t: 'take', k: 'root', m: '잡다, 받아들이다'}], family: ['misunderstand', 'misuse'], note: '잘못(mis) 잡다(take) → 실수. make a mistake = 실수하다.'},
    {w: 'hopeless', ko: '희망이 없는', parts: [{t: 'hope', k: 'root', m: '희망'}, {t: 'less', k: 'suf', m: '~이 없는'}], family: ['hopeful', 'careless', 'useless'], note: '-less = 없는, -ful = 가득한. hopeless ↔ hopeful.'},
    {w: 'situation', ko: '상황', parts: [{t: 'situat(e)', k: 'root', m: '자리 잡다'}, {t: 'ion', k: 'suf', m: '~것 (명사)'}], family: ['site', 'location', 'action'], note: '어떤 자리에 놓인 것 → 상황. -ion은 명사를 만든다.'}
  ];
  const [g1, g2] = L.grammar.points;
  g1.principle = {
    q: '지나간 일은 왜 동사 모양이 바뀔까?',
    pic: [{en: 'now', ko: '지금: walk'}, {en: '← past', ko: '지나간 일: walked', hot: true}],
    core: '영어는 “언제” 일어난 일인지를 동사 모양으로 표시한다. 지나간 일이면 동사 끝에 -ed를 붙이거나 모양 자체가 바뀐다.',
    why: ['규칙 동사: -ed (walk → walked, stop → stopped, cry → cried).', '불규칙 동사는 따로 외운다 (go → went, have → had, make → made).', '부정문·의문문에서는 did가 과거를 맡고 동사는 원형으로 돌아온다.']
  };
  g1.anim = [{title: '의문문에서 과거는 did가 맡는다', states: [
    {t: 'Daeho/S | missed/V#v | the goal/O | .', note: '과거형 missed', ko: '대호는 골을 놓쳤다.'},
    {t: 'Did/X | Daeho/S | miss/V#v | the goal/O | ?', note: 'did가 과거를 가져가고 동사는 원형', ko: '대호는 골을 놓쳤니?'},
    {t: 'Daeho/S | didn’t/X | miss/V#v | the goal/O | .', note: '부정문도 didn’t + 원형', ko: '대호는 골을 놓치지 않았다.'}]}];
  g1.contrast = {title: '지금 vs 지나간 일', pairs: [
    {a: 'I {{go}} to school by bus.', ka: '나는 버스로 학교에 간다. (지금·습관)', b: 'I {{went}} to school by bus yesterday.', kb: '나는 어제 버스로 학교에 갔다. (지나간 일, 불규칙)'}],
    point: 'yesterday, last ~, ago 같은 말이 보이면 과거형.'};
  g2.principle = {
    q: '명령문에는 왜 주어가 없을까?',
    pic: [{en: '(You)', ko: '듣는 사람 = 너'}, {en: 'Smile!', ko: '동사원형으로 바로 시작', hot: true}],
    core: '명령문은 바로 앞에 있는 “너(you)”에게 하는 말이라, 주어를 말하지 않아도 누구인지 안다. 그래서 동사원형으로 바로 시작한다.',
    why: ['하지 말라고 할 때는 Don’t + 동사원형.', '함께 하자고 할 때는 Let’s + 동사원형.', 'please를 붙이면 더 부드러워진다 (Please sit down).']
  };
  g2.anim = [{title: '주어 you를 지우면 명령문', states: [
    {t: 'You/S#you | write/V#v | three good things/O | .', note: '“너는 ~를 쓴다”', ko: '너는 좋은 일 세 가지를 쓴다.'},
    {t: 'You/D#you | write/V#v | three good things/O | .', note: '듣는 사람이 분명하니 you를 지운다', ko: ''},
    {t: 'Write/V#v | three good things/O | .', note: '동사원형으로 시작하는 명령문', ko: '좋은 일 세 가지를 써 봐.'}]}];
  g2.contrast = {title: '명령 · 금지 · 제안', pairs: [
    {a: '{{Don’t}} give up.', ka: '포기하지 마. (금지: Don’t + 원형)', b: '{{Let’s}} make a list.', kb: '목록을 만들자. (제안: Let’s + 원형)'}],
    point: '명령은 동사원형, 금지는 Don’t + 원형, 제안은 Let’s + 원형.'};
})(window.LESSON);
