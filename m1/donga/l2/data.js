/* 중1 영어(동아·윤정미) Lesson 2 · Eat, Play, and Live Well!
   단원명과 문법(현재진행형, 조동사 can·will)은 교과서·문제집 목차 기준. 의사소통 기능은 추정(estimate: true).
   대화문·읽기 글은 교과서 원문이 아니라 단원 주제에 맞춰 새로 쓴 글입니다. */
window.LESSON = {
  book: 'm1-donga', no: 2, estimate: true,
  title: 'Eat, Play, and Live Well!', ko: '잘 먹고, 잘 놀고, 잘 살자!',
  bigQ: {en: 'What makes a healthy day?', ko: '건강한 하루는 무엇으로 만들어질까?'},
  goals: {
    vocab: ['음식·운동·건강과 관련된 낱말 16개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 나의 건강 습관을 한 문장으로 말할 수 있다.'],
    talk: ['몸 상태를 묻고 답할 수 있다.', '할 수 있는 일을 묻고 답할 수 있다.'],
    grammar: ['현재진행형으로 지금 하고 있는 일을 말할 수 있다.', '조동사 can과 will로 능력과 계획을 말할 수 있다.'],
    read1: ['건강 챌린지 일기의 앞부분을 읽고 아침 습관을 이해할 수 있다.'],
    read2: ['일주일 동안의 변화를 정리하고, 나의 건강 다짐을 영어로 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'What did you eat for breakfast today?', ko: '오늘 아침에 무엇을 먹었나요?', note: '먹지 않았다는 학생도 많다. 그 까닭(시간이 없어서, 배가 안 고파서)을 모아 두면 읽기 글과 연결된다.'},
    words: [
      {w: 'healthy', pos: 'adj.', ko: '건강한, 건강에 좋은', ic: '💪', audio: 'assets/audio/healthy.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Fruit is a healthy snack.', exKo: '과일은 건강에 좋은 간식이다.'},
      {w: 'breakfast', pos: 'n.', ko: '아침 식사', ic: '🥣', audio: 'assets/audio/breakfast.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'I eat breakfast at seven.', exKo: '나는 7시에 아침을 먹는다.'},
      {w: 'vegetable', pos: 'n.', ko: '채소', ic: '🥦', audio: 'assets/audio/vegetable.mp3', audioCredit: 'Wikimedia Commons contributor · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Eat more vegetables.', exKo: '채소를 더 먹어라.'},
      {w: 'exercise', pos: 'v./n.', ko: '운동하다; 운동', ic: '🏃', audio: 'assets/audio/exercise.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'I exercise three times a week.', exKo: '나는 일주일에 세 번 운동한다.'},
      {w: 'sleep', pos: 'v./n.', ko: '자다; 잠', ic: '😴', audio: 'assets/audio/sleep.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Teens need nine hours of sleep.', exKo: '십대는 9시간의 잠이 필요하다.'},
      {w: 'stretch', pos: 'v.', ko: '스트레칭하다', ic: '🤸', audio: 'assets/audio/stretch.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Stretch before you run.', exKo: '달리기 전에 스트레칭해라.'},
      {w: 'snack', pos: 'n.', ko: '간식', ic: '🍪', ex: 'Chips are my favorite snack.', exKo: '감자칩은 내가 좋아하는 간식이다.'},
      {w: 'tired', pos: 'adj.', ko: '피곤한', ic: '🥱', audio: 'assets/audio/tired.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'I feel tired in the morning.', exKo: '나는 아침에 피곤하다.'},
      {w: 'headache', pos: 'n.', ko: '두통', ic: '🤕', audio: 'assets/audio/headache.mp3', audioCredit: 'Dvortygirl · Public domain (Wikimedia Commons, US)', ex: 'I have a headache.', exKo: '나는 머리가 아프다.'},
      {w: 'cold', pos: 'n.', ko: '감기', ic: '🤧', audio: 'assets/audio/cold.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'She has a bad cold.', exKo: '그녀는 심한 감기에 걸렸다.'},
      {w: 'challenge', pos: 'n.', ko: '도전 (과제)', ic: '🏁', audio: 'assets/audio/challenge.mp3', audioCredit: 'BirdHopper · CC BY-SA 4.0 (Wikimedia Commons, US)', ex: 'Let’s take the 7-day challenge.', exKo: '7일 도전을 해 보자.'},
      {w: 'outside', pos: 'adv.', ko: '밖에서', ic: '🌳', audio: 'assets/audio/outside.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'We play outside after lunch.', exKo: '우리는 점심 후에 밖에서 논다.'},
      {w: 'energy', pos: 'n.', ko: '활력, 기운', ic: '⚡', audio: 'assets/audio/energy.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Breakfast gives you energy.', exKo: '아침 식사는 기운을 준다.'},
      {w: 'screen', pos: 'n.', ko: '화면', ic: '📱', audio: 'assets/audio/screen.mp3', audioCredit: 'Jelkner · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Turn off the screen before bed.', exKo: '자기 전에 화면을 꺼라.'},
      {w: 'habit', pos: 'n.', ko: '습관', ic: '🔁', audio: 'assets/audio/habit.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Walking is a good habit.', exKo: '걷기는 좋은 습관이다.'},
      {w: 'jump rope', pos: 'n./v.', ko: '줄넘기(하다)', ic: '🪢', ex: 'I can jump rope 100 times.', exKo: '나는 줄넘기를 100번 할 수 있다.'}
    ],
    phrases: [
      {w: 'eat well', ko: '잘 먹다', ex: 'Eat well and sleep well.', exKo: '잘 먹고 잘 자라.'},
      {w: 'go to bed', ko: '잠자리에 들다', ex: 'I go to bed at ten.', exKo: '나는 10시에 잔다.'},
      {w: 'get up', ko: '일어나다', ex: 'I get up at six thirty.', exKo: '나는 6시 반에 일어난다.'},
      {w: 'have a cold', ko: '감기에 걸리다', ex: 'I have a cold today.', exKo: '나는 오늘 감기에 걸렸다.'},
      {w: 'feel better', ko: '(몸이) 나아지다', ex: 'I hope you feel better.', exKo: '네가 나아지길 바라.'},
      {w: 'every day', ko: '매일', ex: 'I walk to school every day.', exKo: '나는 매일 학교에 걸어간다.'}
    ],
    pairs: [
      {a: 'healthy', b: 'unhealthy', rel: '반대말'},
      {a: 'get up', b: 'go to bed', rel: '반대말'},
      {a: 'inside', b: 'outside', rel: '반대말'},
      {a: 'sleep', b: 'sleepy', rel: '명사·동사 / 형용사'}
    ],
    wrap: {en: 'I eat ______ for breakfast. I exercise ______.', ko: '오늘 배운 낱말로 나의 건강 습관 두 문장 쓰기'}
  },

  talk: {
    hook: {en: 'How do you feel today?', ko: '오늘 몸 상태는 어떤가요?', note: '손가락 1~5로 오늘 컨디션을 표시하게 한다. 낮은 점수인 학생에게 까닭을 물으며 What’s wrong?을 미리 들려준다.'},
    speakers: {Mina: {voice: 0, pitch: 1.15}, Jake: {voice: 1, pitch: 1}, Nurse: {voice: 2, pitch: 1.05}, Sumi: {voice: 0, pitch: 1.1}, Tom: {voice: 1, pitch: .95}, Coach: {voice: 2, pitch: .9}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '몸 상태 묻고 답하기',
        key: {q: ['What’s wrong?', 'Are you okay?', 'How do you feel?'], a: ['I have a headache / a cold.', 'I feel tired.', 'I’m fine, thanks.']},
        note: '아픈 곳은 I have a + 증상(headache, cold, fever, stomachache). 들은 사람은 That’s too bad. / I hope you feel better.',
        dialogs: [
          { title: 'Dialogue A', setting: '1교시 전, 교실', lines: [
            {s: 'Jake', en: 'Mina, you look pale. {{What’s wrong}}?', ko: '미나야, 얼굴이 창백해. 무슨 일이야?'},
            {s: 'Mina', en: '{{I have a headache}}. I didn’t sleep well last night.', ko: '머리가 아파. 어젯밤에 잠을 잘 못 잤어.'},
            {s: 'Jake', en: 'That’s too bad. Did you eat breakfast?', ko: '안됐다. 아침은 먹었어?'},
            {s: 'Mina', en: 'No, I didn’t.', ko: '아니, 안 먹었어.'},
            {s: 'Jake', en: 'Here, have this banana. {{I hope you feel better}}.', ko: '자, 이 바나나 먹어. 나아지길 바라.'}
          ]},
          { title: 'Dialogue B', setting: '보건실', lines: [
            {s: 'Nurse', en: '{{How do you feel}}?', ko: '몸은 좀 어떠니?'},
            {s: 'B', en: '{{I feel tired}}, and I have a runny nose.', ko: '피곤하고 콧물이 나요.'},
            {s: 'Nurse', en: 'You have a cold. Drink warm water and get some rest.', ko: '감기에 걸렸구나. 따뜻한 물을 마시고 좀 쉬렴.'},
            {s: 'B', en: 'Okay. Thank you.', ko: '네. 감사합니다.'}
          ]}
        ],
        check: [
          {q: 'What’s wrong with Mina?', a: 'She has a headache.'},
          {q: 'Why does Mina have a headache?', a: 'She didn’t sleep well last night.'},
          {q: 'What does the nurse tell B to do?', a: 'Drink warm water and get some rest.'}
        ],
        drill: {frame: ['A: What’s wrong?', 'B: I have a ____.'], opts: ['headache', 'cold', 'fever', 'stomachache', 'toothache', 'sore throat']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '할 수 있는 일 묻고 답하기',
        key: {q: ['Can you ~?', 'How many times can you ~?'], a: ['Yes, I can.', 'No, I can’t.', 'I can ~ (+ 횟수/시간).']},
        note: 'Can you + 동사원형? 에는 Yes, I can. / No, I can’t. 횟수는 times, 시간은 minutes로 말한다.',
        dialogs: [
          { title: 'Dialogue A', setting: '체육 시간, 운동장', lines: [
            {s: 'Coach', en: 'Tom, {{can you}} jump rope?', ko: '톰, 줄넘기할 수 있니?'},
            {s: 'Tom', en: '{{Yes, I can}}.', ko: '네, 할 수 있어요.'},
            {s: 'Coach', en: '{{How many times can you}} jump without stopping?', ko: '멈추지 않고 몇 번 넘을 수 있니?'},
            {s: 'Tom', en: '{{I can}} jump about 80 times.', ko: '80번쯤 넘을 수 있어요.'},
            {s: 'Coach', en: 'Great! Let’s try for 100 next week.', ko: '좋아! 다음 주엔 100번에 도전해 보자.'}
          ]},
          { title: 'Dialogue B', setting: '수영장 앞', lines: [
            {s: 'A', en: 'Can you swim?', ko: '너 수영할 수 있어?'},
            {s: 'B', en: '{{No, I can’t}}. But I will take lessons this summer.', ko: '아니, 못 해. 그래도 이번 여름에 강습을 받을 거야.'},
            {s: 'A', en: 'Good for you! I can help you, too.', ko: '잘됐다! 나도 도와줄 수 있어.'},
            {s: 'B', en: 'Thanks!', ko: '고마워!'}
          ]}
        ],
        check: [
          {q: 'Can Tom jump rope?', a: 'Yes, he can.'},
          {q: 'How many times can Tom jump?', a: 'About 80 times.'},
          {q: 'What will B do this summer?', a: 'B will take swimming lessons.'}
        ],
        drill: {frame: ['A: Can you ____?', 'B: Yes, I can. / No, I can’t.'], opts: ['swim', 'ride a bike', 'cook ramen', 'do a push-up', 'jump rope', 'play badminton']}
      }
    ],
    interviewEx: 'Jiho has a cold today. He can jump rope 50 times.',
    watch: {
      label: 'Let’s Watch', title: 'The Healthy Lunch', setting: '점심시간, 급식실. 수미와 톰이 식판을 들고 자리에 앉는다.',
      lines: [
        {s: 'Sumi', en: 'Tom, what are you doing? You’re picking out the carrots!', ko: '톰, 뭐 하는 거야? 당근을 골라내고 있잖아!'},
        {s: 'Tom', en: 'I don’t like carrots. They taste strange.', ko: '나 당근 안 좋아해. 맛이 이상해.'},
        {s: 'Sumi', en: 'But carrots are good for your eyes. You can see better.', ko: '그래도 당근은 눈에 좋아. 더 잘 볼 수 있어.'},
        {s: 'Tom', en: 'Really? Hmm, okay. I will eat one.', ko: '정말? 음, 알았어. 하나 먹어 볼게.'},
        {s: 'Sumi', en: 'How is it?', ko: '어때?'},
        {s: 'Tom', en: 'Not bad! I will try two tomorrow.', ko: '나쁘지 않네! 내일은 두 개 먹어 볼게.'}
      ],
      check: [
        {q: 'What is Tom doing at first?', a: 'He is picking out the carrots.'},
        {q: 'Why are carrots good?', a: 'They are good for your eyes.'},
        {q: 'What will Tom do tomorrow?', a: 'He will try two carrots.'}
      ]
    },
    wrap: {en: 'Ask your partner how they feel and what exercise they can do.', ko: '짝의 몸 상태를 묻고, 할 수 있는 운동을 묻고 답하기'}
  },

  grammar: {
    cover: '-ing · can',
    hook: {en: 'Look! Tom {{is eating}} a carrot.  /  I {{can}} swim, and I {{will}} swim this summer.', ko: '빈칸에 들어갈 말은 각각 어떤 뜻을 더해 줄까?', answer: 'is eating은 ‘지금 ~하고 있다’, can은 능력(~할 수 있다), will은 미래·의지(~할 것이다)', note: 'Look!이라는 말이 ‘지금 이 순간’을 나타낸다는 단서임을 짚는다.'},
    points: [
      { id: 'g1', name: '현재진행형', short: '현재진행형', form: 'am / are / is + 동사-ing', meaning: '(지금) ~하고 있다',
        notice: [
          {en: 'I {{am drinking}} milk now.', ko: '나는 지금 우유를 마시고 있다.'},
          {en: 'They {{are playing}} soccer outside.', ko: '그들은 밖에서 축구를 하고 있다.'},
          {en: 'Look! Tom {{is eating}} a carrot.', ko: '봐! 톰이 당근을 먹고 있어.'}
        ],
        rule: [
          {k: '-ing 만들기', v: '대부분 + -ing / e로 끝나면 e 빼고 -ing / 단모음+단자음은 자음 하나 더', ex: 'eat → eating, make → making, run → running'},
          {k: '부정문', v: 'be동사 + not + 동사-ing', ex: 'He isn’t sleeping.'},
          {k: '의문문', v: 'Be동사 + 주어 + 동사-ing ~?', ex: 'Are you studying? — Yes, I am.'}
        ],
        compare: {
          title: '-ing 만드는 법', note: 'swimming, running처럼 자음을 한 번 더 쓰는 경우를 자주 틀린다.',
          head: ['+ ing', 'e 빼고 + ing', '자음 하나 더 + ing'],
          cols: [['eat → eating', 'play → playing', 'read → reading'], ['make → making', 'ride → riding', 'dance → dancing'], ['run → running', 'swim → swimming', 'sit → sitting']]
        },
        check: [
          {q: 'She is ____ a bike now. (ride)', a: 'riding'},
          {q: 'We are ____ in the pool. (swim)', a: 'swimming'},
          {q: 'He ____ sleeping. (be)', a: 'is'},
          {q: 'I am not ____ TV. (watch)', a: 'watching'},
          {q: '____ they playing outside? (be)', a: 'Are'}
        ],
        trap: {bad: 'She eating breakfast now.', good: 'She is eating breakfast now.', why: '현재진행형은 be동사 + -ing. be동사를 빼먹지 않는다.'},
        scramble: [
          {ko: '나는 지금 스트레칭을 하고 있다.', en: 'I am stretching now.'},
          {ko: '아이들이 밖에서 놀고 있다.', en: 'The children are playing outside.'},
          {ko: '너는 채소를 먹고 있니?', en: 'Are you eating vegetables?'}
        ]
      },
      { id: 'g2', name: '조동사 can · will', short: 'can · will', form: 'can / will + 동사원형', meaning: '~할 수 있다 / ~할 것이다',
        notice: [
          {en: 'I {{can}} jump rope 80 times.', ko: '나는 줄넘기를 80번 할 수 있다.'},
          {en: 'She {{can’t}} swim yet.', ko: '그녀는 아직 수영을 못 한다.'},
          {en: 'I {{will}} go to bed early tonight.', ko: '나는 오늘 밤 일찍 잘 것이다.'}
        ],
        rule: [
          {k: 'can', v: '능력·가능 (부정 can’t)', ex: 'He can run fast.'},
          {k: 'will', v: '미래·의지 (부정 won’t = will not)', ex: 'It will rain tomorrow.'},
          {k: '주의', v: '조동사 뒤에는 항상 동사원형, 주어가 3인칭이어도 -s 없음', ex: 'She can swim. (○) / She cans swims. (✗)'}
        ],
        check: [
          {q: 'He can ____ the piano. (play)', a: 'play'},
          {q: 'I ____ ride a bike. It’s hard for me. (can 부정)', a: 'can’t'},
          {q: 'We ____ visit Grandma tomorrow. (미래)', a: 'will'},
          {q: 'She will ____ breakfast every day. (eat)', a: 'eat'},
          {q: '____ you swim? — Yes, I can.', a: 'Can'}
        ],
        trap: {bad: 'She can swims very well.', good: 'She can swim very well.', why: '조동사 뒤에는 동사원형. -s를 붙이지 않는다.'},
        scramble: [
          {ko: '나는 줄넘기를 100번 할 수 있다.', en: 'I can jump rope 100 times.'},
          {ko: '나는 내일 일찍 일어날 것이다.', en: 'I will get up early tomorrow.'},
          {ko: '그는 아직 수영을 못 한다.', en: 'He can’t swim yet.'}
        ]
      }
    ],
    wrap: {en: 'Right now, I am ______. Tomorrow, I will ______.', ko: '현재진행형 한 문장, will 한 문장으로 나의 건강 다짐 쓰기'},
    wrapEx: 'Right now, I am drinking water. Tomorrow, I will eat breakfast.'
  },

  reading: {
    title: 'My 7-Day Healthy Challenge', kind: '건강 챌린지 일기', cover: '7 Days', coverKo: '건강한 일주일', cover2: 'Habits', coverKo2: '작은 습관이 만드는 하루',
    before: [
      {q: 'Look at the title. What is a “7-day challenge”?', a: '7일 동안 무언가를 해 보는 도전'},
      {q: 'What healthy things can you do for 7 days?', a: '아침 먹기, 운동, 일찍 자기 등'}
    ],
    gloss: {sleepy: '졸린', 'skip': '거르다', 'toast': '토스트', 'banana': '바나나', 'without': '~ 없이', 'phone': '휴대폰', 'stomach': '배, 위', 'growl': '꼬르륵 소리 나다', 'proud': '뿌듯한', 'difference': '차이'},
    paras: [
      {who: 'Day 1 · Monday', en: 'My health teacher gave us a challenge: eat breakfast, play outside, and sleep well for seven days. I often skip breakfast, and I go to bed late. Can I do it? I will try!',
       ko: '보건 선생님께서 우리에게 도전 과제를 주셨다. 7일 동안 아침 먹기, 밖에서 놀기, 잘 자기다. 나는 자주 아침을 거르고 늦게 잔다. 내가 할 수 있을까? 해 볼 거다!',
       check: {q: 'What are the three parts of the challenge?', a: 'Eat breakfast, play outside, and sleep well.'}, think: '세 가지 중 나에게 가장 어려운 것은?'},
      {who: 'Day 2 · Tuesday', en: 'It is 7 a.m. I am eating toast and a banana. My stomach is not growling in class now. I am not sleepy in first period, either. Breakfast really gives me energy!',
       ko: '아침 7시다. 나는 토스트와 바나나를 먹고 있다. 이제 수업 시간에 배가 꼬르륵거리지 않는다. 1교시에 졸리지도 않다. 아침 식사는 정말 기운을 준다!',
       check: {q: 'What is the writer eating?', a: 'Toast and a banana.'}, think: '아침을 먹으면 무엇이 달라질까?'},
      {who: 'Day 3 · Wednesday', en: 'After lunch, my friends and I are playing badminton outside. Before the challenge, I just sat and looked at my phone. Now I am running and laughing. I can hit the shuttlecock 20 times in a row!',
       ko: '점심을 먹고 나서 친구들과 나는 밖에서 배드민턴을 치고 있다. 도전 전에는 그냥 앉아서 휴대폰만 봤다. 지금은 뛰고 웃고 있다. 셔틀콕을 연달아 20번 칠 수 있다!',
       check: {q: 'What did the writer do after lunch before the challenge?', a: 'The writer just sat and looked at the phone.'}, think: '쉬는 시간에 할 수 있는 운동은?'},
      {who: 'Day 5 · Friday', en: 'Sleeping well is the hardest part. At night, I want to watch videos. So I put my phone outside my room at 10 p.m. Then I read a book and go to bed. I can fall asleep quickly now.',
       ko: '잘 자기가 가장 어렵다. 밤이면 동영상을 보고 싶다. 그래서 밤 10시에 휴대폰을 방 밖에 둔다. 그리고 책을 읽고 잠자리에 든다. 이제는 빨리 잠들 수 있다.',
       check: {q: 'What does the writer do with the phone at 10 p.m.?', a: 'The writer puts it outside the room.'}, think: '잠들기 전 휴대폰을 멀리 두면 좋은 까닭은?'},
      {who: 'Day 7 · Sunday', en: 'The challenge is over. I feel much better than last week. I am not tired in the morning, and I am smiling more. My mom says, “You look healthy!” I feel proud.',
       ko: '도전이 끝났다. 지난주보다 몸이 훨씬 좋다. 아침에 피곤하지 않고 더 많이 웃는다. 엄마는 “건강해 보이는구나!”라고 하신다. 뿌듯하다.',
       check: {q: 'How does the writer feel after the challenge?', a: 'Much better (and proud).'}, think: '여러분이라면 일주일 뒤 무엇이 달라질까?'},
      {who: 'Next Week', en: 'Small habits can make a big difference. Next week, I will add one more thing: drinking more water. Will you try the challenge with me?',
       ko: '작은 습관이 큰 차이를 만들 수 있다. 다음 주에는 하나를 더 할 거다. 물 더 많이 마시기. 나와 함께 도전해 볼래?',
       check: {q: 'What will the writer add next week?', a: 'Drinking more water.'}, think: '여러분이 도전 목록에 더하고 싶은 습관은?'}
    ],
    split: 3,
    next: '잘 자기는 어떻게 성공했을까?',
    recap: {q: '처음 사흘 동안 무엇이 바뀌었을까?', items: [{k: 'BREAKFAST', v: 'not sleepy, more energy'}, {k: 'PLAY', v: 'badminton outside after lunch'}]},
    tf: [
      {p: 0, s: 'The writer always eats breakfast.', a: false, why: '자주 아침을 거른다.'},
      {p: 1, s: 'The writer is eating toast and a banana.', a: true},
      {p: 2, s: 'The writer plays soccer after lunch.', a: false, why: '배드민턴을 친다.'},
      {p: 3, s: 'Sleeping well is the hardest part.', a: true},
      {p: 4, s: 'The writer feels tired in the morning now.', a: false, why: '아침에 피곤하지 않다.'},
      {p: 5, s: 'The writer will drink more water next week.', a: true}
    ],
    key: [
      {en: 'Can I do it? I {{will try}}!', note: 'will + 동사원형: 의지', g: 'g2'},
      {en: 'I {{am eating}} toast and a banana.', note: '현재진행형', g: 'g1'},
      {en: 'My friends and I {{are playing}} badminton outside.', note: '복수 주어 + are + -ing', g: 'g1'},
      {en: 'I {{can hit}} the shuttlecock 20 times in a row!', note: 'can + 동사원형: 능력', g: 'g2'},
      {en: 'I {{can fall}} asleep quickly now.', note: 'can + 동사원형', g: 'g2'},
      {en: 'Next week, I {{will add}} one more thing.', note: 'will + 동사원형: 계획', g: 'g2'}
    ],
    summary: {text: 'The writer took a 7-day {{challenge}}. Eating {{breakfast}} gave the writer energy. The writer played {{badminton}} outside after lunch. The writer put the {{phone}} outside the room at night. Now the writer feels much {{better}} and will drink more {{water}}.'},
    order: ['The teacher gave a challenge.', 'The writer ate breakfast.', 'The writer played badminton.', 'The writer felt much better.'],
    chart: {title: 'BEFORE AND AFTER', ko: '도전 전과 후 비교하기', cols: ['Before', 'After'], note: '표를 보고 Before는 과거, After는 현재(진행형)로 말하게 한다.', rows: [
      {name: 'Breakfast', cells: ['often skipped it', 'eats toast and a banana']},
      {name: 'Lunch break', cells: ['looked at the phone', 'plays badminton outside']},
      {name: 'Night', cells: ['went to bed late', 'puts the phone outside the room']}
    ]},
    wrap: {en: 'A healthy day for me is ______. I can ______. Starting tomorrow, I will ______.', ko: '관통 질문으로 돌아가기: 나의 건강한 하루 계획 세 문장 쓰기'}
  },

  quiz: [
    ['“채소”를 뜻하는 낱말은?', ['snack', 'energy', 'vegetable', 'breakfast'], 2, 'vegetable: 채소'],
    ['“healthy”의 반대말은?', ['tired', 'unhealthy', 'outside', 'sleepy'], 1, 'healthy ↔ unhealthy'],
    ['“I go to ___ at ten.” (잠자리에 들다)', ['bed', 'sleep', 'home', 'school'], 0, 'go to bed'],
    ['“두통”을 뜻하는 낱말은?', ['cold', 'fever', 'stretch', 'headache'], 3, 'headache: 두통'],
    ['몸 상태를 묻는 표현이 아닌 것은?', ['Are you okay?', 'What’s wrong?', 'How do you feel?', 'Can you swim?'], 3, 'Can you ~?는 능력을 묻는다.'],
    ['“Can you ride a bike?”에 알맞은 대답은?', ['Yes, I do.', 'Yes, I can.', 'No, I don’t.', 'No, I’m not.'], 1, 'Can you ~? → Yes, I can. / No, I can’t.'],
    ['Let’s Watch에서 톰이 골라내던 채소는?', ['당근', '양파', '오이', '브로콜리'], 0, 'You’re picking out the carrots!'],
    ['빈칸에 알맞은 것은? “We are ___ in the pool.”', ['swim', 'swims', 'swiming', 'swimming'], 3, 'swim → swimming'],
    ['빈칸에 알맞은 것은? “Look! Tom ___ a carrot.”', ['eat', 'eats', 'is eating', 'are eating'], 2, 'Look!: 지금 하고 있는 일 → is eating'],
    ['어법상 틀린 문장은?', ['I can swim.', 'She can dances.', 'He will go home.', 'They are running.'], 1, 'She can dance.'],
    ['빈칸에 알맞은 것은? “I ___ visit my grandma tomorrow.”', ['am', 'was', 'will', 'can’t'], 2, 'tomorrow → will'],
    ['글쓴이가 아침으로 먹은 것은?', ['우유와 시리얼', '토스트와 바나나', '밥과 김치찌개', '샌드위치와 주스'], 1, 'toast and a banana'],
    ['글쓴이가 점심 후에 하는 운동은?', ['축구', '줄넘기', '배드민턴', '농구'], 2, 'playing badminton outside'],
    ['잘 자기 위해 글쓴이가 한 일은?', ['물을 많이 마시기', '일찍 저녁 먹기', '자기 전 운동하기', '휴대폰 치워 두기'], 3, 'I put my phone outside my room.'],
    ['다음 주에 더할 습관은?', ['물 더 마시기', '책 더 읽기', '채소 먹기', '일찍 일어나기'], 0, 'drinking more water']
  ]
};
