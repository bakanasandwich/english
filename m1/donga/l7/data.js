/* 중1 영어(동아·윤정미) Lesson 7 · Find Your Dream
   단원명은 교과서·문제집 목차 기준. 의사소통 기능과 문법은 추정(estimate: true).
   대화문·읽기 글은 교과서 원문이 아니라 단원 주제에 맞춰 새로 쓴 글입니다. */
window.LESSON = {
  book: 'm1-donga', no: 7, estimate: true,
  title: 'Find Your Dream', ko: '나의 꿈을 찾아서',
  bigQ: {en: 'How can I find my dream?', ko: '나는 어떻게 꿈을 찾을 수 있을까?'},
  goals: {
    vocab: ['직업·꿈과 관련된 낱말 16개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 나의 꿈을 한 문장으로 말할 수 있다.'],
    talk: ['장래 희망을 묻고 답할 수 있다.', '잘하는 것을 묻고 답할 수 있다.'],
    grammar: ['to부정사(want/hope/plan to)로 하고 싶은 일을 말할 수 있다.', '접속사 because로 까닭을 말할 수 있다.'],
    read1: ['진로의 날 행사 기사를 읽고 첫 번째 직업인의 이야기를 이해할 수 있다.'],
    read2: ['세 직업인이 꿈을 찾은 방법을 비교하고, 나의 꿈을 영어로 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'When you were little, what did you want to be?', ko: '어렸을 때 무엇이 되고 싶었나요?', note: '지금의 꿈과 비교하게 한다. 꿈이 바뀌어도 괜찮다는 점을 자연스럽게 이끈다.'},
    words: [
      {w: 'dream', pos: 'n./v.', ko: '꿈; 꿈꾸다', ic: '💭', audio: 'assets/audio/dream.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'My dream is to be a pilot.', exKo: '내 꿈은 조종사가 되는 것이다.'},
      {w: 'future', pos: 'n.', ko: '미래', ic: '🔭', audio: 'assets/audio/future.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'What do you want to be in the future?', exKo: '미래에 무엇이 되고 싶니?'},
      {w: 'job', pos: 'n.', ko: '직업, 일', ic: '💼', audio: 'assets/audio/job.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'She loves her job.', exKo: '그녀는 자기 일을 사랑한다.'},
      {w: 'vet', pos: 'n.', ko: '수의사', ic: '🐾', ex: 'A vet helps sick animals.', exKo: '수의사는 아픈 동물을 돕는다.'},
      {w: 'chef', pos: 'n.', ko: '요리사', ic: '👨‍🍳', ex: 'The chef made great pasta.', exKo: '그 요리사는 훌륭한 파스타를 만들었다.'},
      {w: 'pilot', pos: 'n.', ko: '조종사', ic: '🧑‍✈️', audio: 'assets/audio/pilot.mp3', audioCredit: 'Neskaya · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The pilot flies a plane.', exKo: '조종사는 비행기를 조종한다.'},
      {w: 'designer', pos: 'n.', ko: '디자이너', ic: '🎨', ex: 'He is a game designer.', exKo: '그는 게임 디자이너다.'},
      {w: 'scientist', pos: 'n.', ko: '과학자', ic: '🔬', ex: 'Scientists ask many questions.', exKo: '과학자는 많은 질문을 한다.'},
      {w: 'interest', pos: 'n.', ko: '관심, 흥미', ic: '💡', audio: 'assets/audio/interest.mp3', audioCredit: 'Dvortygirl · Public domain (Wikimedia Commons, US)', ex: 'Follow your interests.', exKo: '네 관심을 따라가라.'},
      {w: 'skill', pos: 'n.', ko: '기술, 능력', ic: '🛠️', audio: 'assets/audio/skill.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Cooking is a useful skill.', exKo: '요리는 쓸모 있는 기술이다.'},
      {w: 'practice', pos: 'v./n.', ko: '연습하다; 연습', ic: '🎯', audio: 'assets/audio/practice.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'She practiced every day.', exKo: '그녀는 매일 연습했다.'},
      {w: 'become', pos: 'v.', ko: '~이 되다', ic: '🦋', audio: 'assets/audio/become.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'He became a doctor.', exKo: '그는 의사가 되었다.'},
      {w: 'hope', pos: 'v.', ko: '바라다, 희망하다', ic: '🌈', audio: 'assets/audio/hope.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'I hope to travel the world.', exKo: '나는 세계를 여행하기를 바란다.'},
      {w: 'decide', pos: 'v.', ko: '결정하다', ic: '✅', audio: 'assets/audio/decide.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'I decided to learn coding.', exKo: '나는 코딩을 배우기로 결정했다.'},
      {w: 'volunteer', pos: 'v.', ko: '자원봉사하다', ic: '🙋', audio: 'assets/audio/volunteer.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'She volunteered at an animal shelter.', exKo: '그녀는 동물 보호소에서 자원봉사를 했다.'},
      {w: 'career', pos: 'n.', ko: '진로, 직업', ic: '🧭', audio: 'assets/audio/career.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Today is Career Day.', exKo: '오늘은 진로의 날이다.'}
    ],
    phrases: [
      {w: 'want to be', ko: '~이 되고 싶다', ex: 'I want to be a chef.', exKo: '나는 요리사가 되고 싶다.'},
      {w: 'be good at', ko: '~을 잘하다', ex: 'He is good at drawing.', exKo: '그는 그림을 잘 그린다.'},
      {w: 'be interested in', ko: '~에 관심이 있다', ex: 'She is interested in space.', exKo: '그녀는 우주에 관심이 있다.'},
      {w: 'grow up', ko: '자라다, 어른이 되다', ex: 'When I grow up, I want to help people.', exKo: '자라면 나는 사람들을 돕고 싶다.'},
      {w: 'give up', ko: '포기하다', ex: 'Don’t give up on your dream.', exKo: '꿈을 포기하지 마.'},
      {w: 'find out', ko: '알아내다', ex: 'I want to find out more about jobs.', exKo: '나는 직업에 대해 더 알아내고 싶다.'}
    ],
    pairs: [
      {a: 'science', b: 'scientist', rel: '분야 / 사람'},
      {a: 'design', b: 'designer', rel: '일 / 사람'},
      {a: 'cook', b: 'chef', rel: '요리하다 / 요리사'},
      {a: 'future', b: 'past', rel: '반대말'}
    ],
    wrap: {en: 'I am interested in ______. In the future, I want to be ______.', ko: '오늘 배운 낱말로 나의 관심과 꿈 쓰기'}
  },

  talk: {
    hook: {en: 'What job do you think is the most interesting?', ko: '가장 흥미로운 직업은 무엇이라고 생각하나요?', note: '직업 이름을 영어로 모아 칠판에 적는다. 모르는 직업 이름은 함께 찾아본다.'},
    speakers: {Haru: {voice: 1, pitch: .95}, Nari: {voice: 0, pitch: 1.15}, 'Ms. Lim': {voice: 2, pitch: 1.05}, Chris: {voice: 1, pitch: 1}, Yena: {voice: 0, pitch: 1.1}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '장래 희망 묻고 답하기',
        key: {q: ['What do you want to be?', 'What is your dream?'], a: ['I want to be a(n) ~.', 'My dream is to be ~.', 'I’m not sure yet.']},
        note: 'want to be + 직업. 직업 앞에 a / an을 붙인다(an artist). 3차시 to부정사와 이어진다.',
        dialogs: [
          { title: 'Dialogue A', setting: '진로 시간, 교실', lines: [
            {s: 'Nari', en: 'Haru, {{what do you want to be}} in the future?', ko: '하루야, 너는 미래에 뭐가 되고 싶어?'},
            {s: 'Haru', en: '{{I want to be}} a vet.', ko: '나는 수의사가 되고 싶어.'},
            {s: 'Nari', en: 'A vet? Why?', ko: '수의사? 왜?'},
            {s: 'Haru', en: 'Because I love animals. I have two dogs.', ko: '동물을 좋아하거든. 개를 두 마리 키워.'},
            {s: 'Nari', en: 'That’s a great dream!', ko: '멋진 꿈이다!'}
          ]},
          { title: 'Dialogue B', setting: '점심시간', lines: [
            {s: 'A', en: '{{What is your dream}}?', ko: '네 꿈은 뭐야?'},
            {s: 'B', en: '{{I’m not sure yet}}. How about you?', ko: '아직 잘 모르겠어. 너는?'},
            {s: 'A', en: '{{My dream is to be}} a chef. I love cooking.', ko: '내 꿈은 요리사야. 요리하는 걸 좋아해.'},
            {s: 'B', en: 'Cool. Can you cook for me someday?', ko: '멋지다. 언젠가 나한테 요리해 줄래?'}
          ]}
        ],
        check: [
          {q: 'What does Haru want to be?', a: 'He wants to be a vet.'},
          {q: 'Why does Haru want to be a vet?', a: 'Because he loves animals.'},
          {q: 'What is A’s dream?', a: 'To be a chef.'}
        ],
        drill: {frame: ['A: What do you want to be?', 'B: I want to be ____.'], opts: ['a vet', 'a pilot', 'a chef', 'a scientist', 'a game designer', 'an artist']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '잘하는 것 묻고 답하기',
        key: {q: ['What are you good at?', 'Are you good at ~?'], a: ['I’m good at ~.', 'Yes, I am. / No, I’m not.', 'I’m not good at ~, but ~.']},
        note: 'be good at 뒤에는 명사나 -ing(동명사). I’m good at draw(✗) → drawing(○).',
        dialogs: [
          { title: 'Dialogue A', setting: '진로 상담실', lines: [
            {s: 'Ms. Lim', en: 'Chris, {{what are you good at}}?', ko: '크리스, 너는 무엇을 잘하니?'},
            {s: 'Chris', en: '{{I’m good at}} drawing and making stories.', ko: '그림 그리기랑 이야기 만들기를 잘해요.'},
            {s: 'Ms. Lim', en: 'How about becoming a webtoon artist?', ko: '웹툰 작가가 되는 건 어떠니?'},
            {s: 'Chris', en: 'Wow, I like that idea! I read webtoons every day.', ko: '와, 그 생각 좋아요! 저 매일 웹툰 읽어요.'},
            {s: 'Ms. Lim', en: 'Then practice drawing a little every day.', ko: '그럼 매일 조금씩 그림을 연습하렴.'}
          ]},
          { title: 'Dialogue B', setting: '체육 시간', lines: [
            {s: 'A', en: '{{Are you good at}} sports?', ko: '너 운동 잘해?'},
            {s: 'B', en: '{{No, I’m not}}. {{I’m not good at}} running, but I’m good at math.', ko: '아니. 달리기는 못하지만 수학은 잘해.'},
            {s: 'A', en: 'Everyone is good at different things.', ko: '사람마다 잘하는 게 달라.'},
            {s: 'B', en: 'That’s right!', ko: '맞아!'}
          ]}
        ],
        check: [
          {q: 'What is Chris good at?', a: 'Drawing and making stories.'},
          {q: 'What job does Ms. Lim suggest?', a: 'A webtoon artist.'},
          {q: 'What is B good at?', a: 'Math.'}
        ],
        drill: {frame: ['A: What are you good at?', 'B: I’m good at ____.'], opts: ['drawing', 'singing', 'cooking', 'math', 'swimming', 'making friends']}
      }
    ],
    interviewEx: 'Dohyun wants to be a pilot. He is good at science.',
    watch: {
      label: 'Let’s Watch', title: 'The Dream Map', setting: '진로 수업. 예나가 ‘꿈 지도’를 그리다가 고민에 빠진다.',
      lines: [
        {s: 'Yena', en: 'Ms. Lim, I don’t know my dream. Everyone has one but me.', ko: '임 선생님, 제 꿈을 모르겠어요. 저 빼고 다 있어요.'},
        {s: 'Ms. Lim', en: 'That’s okay. Let’s make a dream map. What do you like to do?', ko: '괜찮아. 꿈 지도를 만들어 보자. 무엇을 하는 걸 좋아하니?'},
        {s: 'Yena', en: 'I like to take pictures of the sky.', ko: '하늘 사진 찍는 걸 좋아해요.'},
        {s: 'Ms. Lim', en: 'Good. And what are you good at?', ko: '좋아. 그리고 무엇을 잘하니?'},
        {s: 'Yena', en: 'I’m good at science. I want to know why the sky changes color.', ko: '과학을 잘해요. 하늘 색이 왜 바뀌는지 알고 싶어요.'},
        {s: 'Ms. Lim', en: 'Maybe you can be a weather scientist!', ko: '어쩌면 기상학자가 될 수도 있겠구나!'}
      ],
      check: [
        {q: 'What does Yena like to do?', a: 'She likes to take pictures of the sky.'},
        {q: 'What is Yena good at?', a: 'Science.'},
        {q: 'What job does Ms. Lim suggest?', a: 'A weather scientist.'}
      ]
    },
    wrap: {en: 'Tell your partner your dream and what you are good at.', ko: '나의 꿈과 잘하는 것을 짝과 묻고 답하기'}
  },

  grammar: {
    cover: 'to · because',
    hook: {en: 'I want {{to be}} a vet {{because}} I love animals.', ko: '빈칸에 들어갈 말은 각각 어떤 일을 할까?', answer: 'to be는 ‘~이 되는 것’(want의 목적어), because는 까닭(~하기 때문에)', note: '“무엇을 원해?”와 “왜?”를 차례로 물어 두 빈칸의 역할을 찾게 한다.'},
    points: [
      { id: 'g1', name: 'to부정사 (명사적 용법)', short: 'to부정사', form: 'want / hope / plan / decide + to + 동사원형', meaning: '~하기를 (원하다·바라다·계획하다)',
        notice: [
          {en: 'I want {{to be}} a pilot.', ko: '나는 조종사가 되고 싶다.'},
          {en: 'She hopes {{to travel}} to space.', ko: '그녀는 우주로 여행하기를 바란다.'},
          {en: 'My dream is {{to help}} sick animals.', ko: '내 꿈은 아픈 동물을 돕는 것이다.'}
        ],
        rule: [
          {k: '목적어', v: 'want · hope · plan · decide · need + to V', ex: 'He decided to learn coding.'},
          {k: '보어', v: 'My dream / goal is + to V', ex: 'My goal is to win the contest.'},
          {k: '부정', v: 'not + to V', ex: 'I decided not to give up.'}
        ],
        check: [
          {q: 'I want ____ a chef. (be)', a: 'to be'},
          {q: 'She hopes ____ a scientist. (become)', a: 'to become'},
          {q: 'My dream is ____ the world. (travel)', a: 'to travel'},
          {q: 'He decided ____ Chinese. (learn)', a: 'to learn'},
          {q: 'We plan ____ at the shelter. (volunteer)', a: 'to volunteer'}
        ],
        trap: {bad: 'I want be a designer.', good: 'I want to be a designer.', why: 'want 뒤에 동사가 오면 to를 꼭 쓴다.'},
        scramble: [
          {ko: '나는 수의사가 되고 싶다.', en: 'I want to be a vet.'},
          {ko: '그녀는 매일 그림을 연습하기로 결정했다.', en: 'She decided to practice drawing every day.'},
          {ko: '내 꿈은 사람들을 돕는 것이다.', en: 'My dream is to help people.'}
        ]
      },
      { id: 'g2', name: '접속사 because', short: 'because', form: '문장 + because + 주어 + 동사', meaning: '~하기 때문에',
        notice: [
          {en: 'I want to be a vet {{because}} I love animals.', ko: '나는 동물을 좋아하기 때문에 수의사가 되고 싶다.'},
          {en: '{{Because}} she is good at math, she wants to be a scientist.', ko: '수학을 잘하기 때문에 그녀는 과학자가 되고 싶어 한다.'},
          {en: 'He practices every day {{because}} he has a dream.', ko: '그는 꿈이 있기 때문에 매일 연습한다.'}
        ],
        rule: [
          {k: '뒤', v: 'because + 주어 + 동사 (문장)', ex: 'I’m happy because I passed the test.'},
          {k: '구별', v: 'because of + 명사', ex: 'I stayed home because of the rain.'},
          {k: 'Why?', v: 'Why ~? — Because ~.', ex: 'Why do you like it? — Because it’s fun.'}
        ],
        check: [
          {q: 'I like cooking ____ it’s fun. (because)', a: 'because'},
          {q: 'He stayed home ____ ____ the rain. (because of)', a: 'because of'},
          {q: 'Why do you want to be a pilot? — ____ I love planes.', a: 'Because'},
          {q: 'She is tired because she ____ late. (sleep, 과거)', a: 'slept'},
          {q: 'I practice every day because I ____ to win. (want)', a: 'want'}
        ],
        trap: {bad: 'I want to be a chef because of I love cooking.', good: 'I want to be a chef because I love cooking.', why: '뒤에 문장(주어 + 동사)이 오면 because, 명사가 오면 because of.'},
        scramble: [
          {ko: '나는 춤을 좋아하기 때문에 댄서가 되고 싶다.', en: 'I want to be a dancer because I love dancing.'},
          {ko: '그는 비 때문에 늦었다.', en: 'He was late because of the rain.'},
          {ko: '그녀는 꿈이 있어서 행복하다.', en: 'She is happy because she has a dream.'}
        ]
      }
    ],
    wrap: {en: 'I want to be ______ because ______.', ko: 'to부정사와 because를 넣어 나의 꿈과 까닭 쓰기'},
    wrapEx: 'I want to be a game designer because I love making stories.'
  },

  reading: {
    title: 'Career Day at Hanbit Middle School', kind: '학교 신문 기사', cover: 'Dream', coverKo: '꿈을 만난 날', cover2: 'Path', coverKo2: '꿈으로 가는 길',
    before: [
      {q: 'Look at the title. What happens on Career Day?', a: '여러 직업의 사람들이 와서 이야기한다'},
      {q: 'Who do you want to meet on Career Day?', a: '자유롭게 말한 뒤 글과 비교'}
    ],
    gloss: {'guests': '손님, 초대 손님', 'drone': '드론', 'bakery': '빵집', 'zookeeper': '사육사', 'flour': '밀가루', 'failed': '실패했다', 'recipe': '조리법', 'pandas': '판다', 'patient': '참을성 있는', 'path': '길'},
    paras: [
      {who: '', en: 'Last Friday was Career Day at our school. Three guests came and talked about their jobs. Every student listened carefully because they wanted to find their dreams, too.',
       ko: '지난 금요일은 우리 학교 진로의 날이었습니다. 세 명의 손님이 와서 자신의 직업에 대해 이야기했습니다. 학생들도 자기 꿈을 찾고 싶었기 때문에 모두 주의 깊게 들었습니다.',
       check: {q: 'How many guests came?', a: 'Three guests.'}, think: '진로의 날에 묻고 싶은 질문은?'},
      {who: 'Ms. Kang, Drone Pilot', en: 'Ms. Kang flies drones for TV shows. “When I was your age, I loved making paper planes,” she said. “I always wanted to see the world from the sky.” She practiced flying drones for three years.',
       ko: '강 씨는 TV 프로그램을 위해 드론을 조종합니다. “여러분 나이 때 저는 종이비행기 만들기를 아주 좋아했어요.” 그녀가 말했습니다. “늘 하늘에서 세상을 보고 싶었죠.” 그녀는 3년 동안 드론 조종을 연습했습니다.',
       check: {q: 'What did Ms. Kang love when she was young?', a: 'Making paper planes.'}, think: '어릴 때 좋아한 것이 직업과 이어진 예는?'},
      {who: 'Mr. Oh, Baker', en: 'Mr. Oh has a small bakery. He decided to become a baker because his grandma’s bread made people happy. “At first, I failed many times,” he said. “But I didn’t give up. Now my bread is famous in town.”',
       ko: '오 씨는 작은 빵집을 운영합니다. 할머니의 빵이 사람들을 행복하게 했기 때문에 그는 제빵사가 되기로 결심했습니다. “처음에는 여러 번 실패했어요.” 그가 말했습니다. “하지만 포기하지 않았어요. 이제 제 빵은 마을에서 유명해요.”',
       check: {q: 'Why did Mr. Oh decide to become a baker?', a: 'Because his grandma’s bread made people happy.'}, think: '실패를 이겨 낸 경험이 있나요?'},
      {who: 'Ms. Wang, Zookeeper', en: 'Ms. Wang takes care of pandas at a zoo. She volunteered at an animal shelter in middle school. “That experience changed my life,” she said. “I wanted to help animals every day.”',
       ko: '왕 씨는 동물원에서 판다를 돌봅니다. 그녀는 중학생 때 동물 보호소에서 자원봉사를 했습니다. “그 경험이 제 인생을 바꿨어요.” 그녀가 말했습니다. “매일 동물을 돕고 싶었거든요.”',
       check: {q: 'What did Ms. Wang do in middle school?', a: 'She volunteered at an animal shelter.'}, think: '경험이 꿈을 만드는 까닭은?'},
      {who: 'Ms. Wang, Zookeeper', en: 'A student asked, “What do you need to be a zookeeper?” Ms. Wang smiled. “You need to be patient and kind. Pandas are slow, so you must wait a lot!” Everyone laughed.',
       ko: '한 학생이 물었습니다. “사육사가 되려면 무엇이 필요해요?” 왕 씨가 미소 지었습니다. “참을성 있고 친절해야 해요. 판다는 느려서 많이 기다려야 하거든요!” 모두가 웃었습니다.',
       check: {q: 'What do you need to be a zookeeper?', a: 'You need to be patient and kind.'}, think: '여러분의 꿈에 필요한 성격은?'},
      {who: 'Our Lesson', en: 'The three guests had different jobs, but they gave us the same advice: “Find what you love, and try many things. Don’t be afraid to fail.” What is your dream? It’s okay to keep looking.',
       ko: '세 손님은 직업이 서로 달랐지만 우리에게 같은 조언을 해 주었습니다. “좋아하는 것을 찾고 여러 가지를 해 보세요. 실패를 두려워하지 마세요.” 여러분의 꿈은 무엇인가요? 계속 찾아도 괜찮아요.',
       check: {q: 'What was the guests’ advice?', a: 'Find what you love, try many things, and don’t be afraid to fail.'}, think: '이번 학기에 새로 해 보고 싶은 것은?'}
    ],
    split: 3,
    next: '사육사는 어떻게\n꿈을 찾았을까?',
    recap: {q: '두 손님의 꿈 이야기는?', items: [{k: 'MS. KANG', v: 'loved paper planes → drone pilot'}, {k: 'MR. OH', v: 'grandma’s bread → baker, didn’t give up'}]},
    tf: [
      {p: 0, s: 'Career Day was last Monday.', a: false, why: '지난 금요일.'},
      {p: 1, s: 'Ms. Kang loved making paper planes.', a: true},
      {p: 2, s: 'Mr. Oh never failed.', a: false, why: '처음에 여러 번 실패했다.'},
      {p: 3, s: 'Ms. Wang volunteered at an animal shelter.', a: true},
      {p: 4, s: 'Pandas are fast, so zookeepers don’t wait.', a: false, why: '판다는 느려서 많이 기다려야 한다.'},
      {p: 5, s: 'The guests said, “Don’t be afraid to fail.”', a: true}
    ],
    key: [
      {en: 'They {{wanted to find}} their dreams, too.', note: 'want + to부정사', g: 'g1'},
      {en: 'I always {{wanted to see}} the world from the sky.', note: 'want + to부정사', g: 'g1'},
      {en: 'He {{decided to become}} a baker {{because}} his grandma’s bread made people happy.', note: 'decide + to부정사 / because + 문장', g: 'g1'},
      {en: 'I {{wanted to help}} animals every day.', note: 'want + to부정사', g: 'g1'},
      {en: 'Pandas are slow, {{so}} you must wait a lot!', note: 'so: 그래서 (결과) ↔ because: 왜냐하면 (원인)', g: 'g2'},
      {en: 'Don’t be afraid {{to fail}}.', note: 'be afraid + to부정사', g: 'g1'}
    ],
    summary: {text: 'On Career Day, three guests talked about their {{jobs}}. Ms. Kang became a drone {{pilot}} because she loved paper planes. Mr. Oh became a baker and didn’t give {{up}}. Ms. Wang wanted to {{help}} animals. They said, “Find what you {{love}}, and try many things.”'},
    order: ['Ms. Kang made paper planes.', 'She wanted to see the world from the sky.', 'She practiced flying drones.', 'She became a drone pilot.'],
    chart: {title: 'THREE GUESTS', ko: '세 손님 비교하기', cols: ['Job', 'How they found it'], note: '“좋아한 것 / 가족 / 경험”이 꿈을 찾는 세 가지 길이었다는 점을 정리한다.', rows: [
      {name: 'Ms. Kang', cells: ['drone pilot', 'loved paper planes']},
      {name: 'Mr. Oh', cells: ['baker', 'grandma’s bread']},
      {name: 'Ms. Wang', cells: ['zookeeper', 'volunteered at a shelter']}
    ]},
    wrap: {en: 'I love ______. I want to ______ because ______. To find my dream, I will ______.', ko: '관통 질문으로 돌아가기: 나의 꿈을 찾는 계획 쓰기'}
  },

  quiz: [
    ['“수의사”를 뜻하는 낱말은?', ['vet', 'chef', 'pilot', 'designer'], 0, 'vet: 수의사'],
    ['“design – designer”와 관계가 같은 것은?', ['art – arter', 'cook – cooks', 'science – scientist', 'pilot – piloter'], 2, '분야 → 사람: science → scientist'],
    ['“He is good ___ drawing.”', ['in', 'on', 'at', 'for'], 2, 'be good at'],
    ['“Don\u2019t give ___ on your dream.”', ['in', 'up', 'off', 'out'], 1, 'give up: 포기하다'],
    ['장래 희망을 묻는 표현은?', ['What did you eat?', 'What do you do now?', 'What are you good at?', 'What do you want to be?'], 3, 'What do you want to be?'],
    ['“Are you good at sports?”에 알맞은 대답은?', ['No, I\u2019m not.', 'No, I don\u2019t.', 'Yes, I do.', 'Yes, I can.'], 0, 'Are you ~? → Yes, I am. / No, I\u2019m not.'],
    ['Let\u2019s Watch에서 임 선생님이 예나에게 추천한 직업은?', ['사진작가', '하늘 화가', '비행기 조종사', '기상학자'], 3, 'a weather scientist'],
    ['빈칸에 알맞은 것은? “I want ___ a pilot.”', ['be', 'being', 'to be', 'am'], 2, 'want + to부정사'],
    ['빈칸에 알맞은 것은? “He stayed home ___ the rain.”', ['so', 'because of', 'and', 'because'], 1, '명사 앞: because of'],
    ['어법상 틀린 문장은?', ['I hope to win.', 'My dream is to fly.', 'He decided to stay.', 'She wants be a vet.'], 3, 'She wants to be a vet.'],
    ['“Why do you like cats?”에 알맞은 대답은?', ['Yes, I like cats.', 'Because they are cute.', 'I like dogs more.', 'So they are very cute.'], 1, 'Why ~? — Because ~.'],
    ['강 씨가 어렸을 때 좋아한 것은?', ['드론 날리기', '빵 굽기 놀이', '종이비행기 만들기', '동물 돌보기 놀이'], 2, 'I loved making paper planes.'],
    ['오 씨가 제빵사가 되기로 한 까닭은?', ['할머니의 빵 때문에', '빵이 아주 싸서', '동물을 좋아해서', '하늘을 보고 싶어서'], 0, 'his grandma\u2019s bread made people happy'],
    ['왕 씨가 중학생 때 한 일은?', ['드론 연습하기', '동물 보호소 봉사', '빵집 아르바이트', '판다 그림 그리기'], 1, 'She volunteered at an animal shelter.'],
    ['세 손님의 공통된 조언은?', ['한 가지만 하라', '빨리 꿈을 정하라', '돈을 많이 벌어라', '실패를 두려워 마라'], 3, 'Don\u2019t be afraid to fail.']
  ]
};
