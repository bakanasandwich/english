/* 중3 영어(동아·윤정미) Lesson 8 · Dream Big, Start Small — 가안
   2022 개정 중3 교과서 목차 공개 전, 중3 문법 순서에 맞춰 만든 가안 단원입니다.
   J. K. 롤링 관련 사실은 널리 알려진 내용이며, 나머지 인물·이야기는 새로 지은 것입니다. */
window.LESSON = {
  book: 'm3-donga', no: 8, estimate: true,
  title: 'Dream Big, Start Small', ko: '크게 꿈꾸고 작게 시작하라',
  bigQ: {en: 'How can we make our dreams come true?', ko: '우리는 어떻게 꿈을 이룰 수 있을까?'},
  align: {
    tb: {note: '2022 개정 중3 영어 교과서(동아·윤정미)는 2026년 8월 검정을 거쳐 2027학년도부터 쓰인다. 아직 목차·본문이 공개되지 않아 단원명·의사소통 기능·언어 형식은 중1·중2 교과서의 흐름과 교육과정 [별표 4] 중학교 권장 언어 형식을 바탕으로 추정했다. 교과서가 공개되면 다시 대조한다.'},
    std: {vocab: ['9영01-01', '9영02-01'], talk: ['9영01-05', '9영02-04'], grammar: ['9영02-04'], read1: ['9영01-05', '9영01-10'], read2: ['9영02-08']},
    forms: ['Relative Clauses', 'Coordinating Conjunctions']
  },
  goals: {
    vocab: ['꿈·도전과 관련된 낱말 20개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 나의 꿈을 한 문장으로 소개할 수 있다.'],
    talk: ['앞으로의 계획을 묻고 답할 수 있다.', '상대를 격려할 수 있다.'],
    grammar: ['관계대명사의 계속적 용법(, who / , which)으로 앞 말에 정보를 덧붙일 수 있다.', 'not only A but also B로 두 가지를 함께 강조할 수 있다.'],
    read1: ['글의 주제를 파악하고, 열두 번 거절당한 작가의 이야기를 이해할 수 있다.'],
    read2: ['작은 습관으로 꿈에 다가간 학생의 이야기를 이해하고, 미래의 나에게 보내는 편지를 영어로 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'What is one dream you have that seems too big?', ko: '너무 커 보여서 말하기 망설여지는 꿈이 있나요?', note: '중3 마지막 단원이다. 크게 말하기 어렵다면 종이에 쓰고 접어 두게 한 뒤, 단원 끝 편지 쓰기에서 다시 펼친다.'},
    words: [
      {w: 'dream', pos: 'n./v.', ko: '꿈; 꿈꾸다', ic: '🌠', audio: 'assets/audio/dream.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Never stop dreaming.', exKo: '꿈꾸기를 멈추지 마라.'},
      {w: 'goal', pos: 'n.', ko: '목표', ic: '🎯', audio: 'assets/audio/goal.mp3', audioCredit: 'Neskaya · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Set a small goal for today.', exKo: '오늘의 작은 목표를 세워라.'},
      {w: 'achieve', pos: 'v.', ko: '이루다, 성취하다', ic: '🏆', audio: 'assets/audio/achieve.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'She achieved her dream.', exKo: '그녀는 꿈을 이루었다.'},
      {w: 'fail', pos: 'v.', ko: '실패하다', ic: '📉', audio: 'assets/audio/fail.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'It’s okay to fail.', exKo: '실패해도 괜찮다.'},
      {w: 'failure', pos: 'n.', ko: '실패', ic: '🧩', ex: 'Failure teaches us a lot.', exKo: '실패는 우리에게 많은 것을 가르친다.'},
      {w: 'reject', pos: 'v.', ko: '거절하다', ic: '🚫', audio: 'assets/audio/reject.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Twelve publishers rejected her book.', exKo: '12곳의 출판사가 그녀의 책을 거절했다.'},
      {w: 'publisher', pos: 'n.', ko: '출판사', ic: '🏢', audio: 'assets/audio/publisher.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'A small publisher accepted it.', exKo: '작은 출판사가 그것을 받아들였다.'},
      {w: 'manuscript', pos: 'n.', ko: '원고', ic: '📄', audio: 'assets/audio/manuscript.mp3', audioCredit: 'Neskaya · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'She sent her manuscript again.', exKo: '그녀는 원고를 다시 보냈다.'},
      {w: 'patient', pos: 'adj.', ko: '참을성 있는', ic: '⏳', audio: 'assets/audio/patient.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Be patient with yourself.', exKo: '자신에게 참을성을 가져라.'},
      {w: 'step', pos: 'n.', ko: '단계, 걸음', ic: '👣', audio: 'assets/audio/step.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Take one step at a time.', exKo: '한 번에 한 걸음씩 내디뎌라.'},
      {w: 'progress', pos: 'n.', ko: '진전, 발전', ic: '📈', audio: 'assets/audio/progress.mp3', audioCredit: 'Association Shtooka, Judith Franck · CC BY 3.0 (Wikimedia Commons, UK)', ex: 'I made a lot of progress.', exKo: '나는 많은 발전을 했다.'},
      {w: 'practice', pos: 'v./n.', ko: '연습하다; 연습', ic: '🎹', audio: 'assets/audio/practice.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Practice a little every day.', exKo: '매일 조금씩 연습해라.'},
      {w: 'chef', pos: 'n.', ko: '요리사', ic: '👨‍🍳', ex: 'He wants to be a chef.', exKo: '그는 요리사가 되고 싶어 한다.'},
      {w: 'recipe', pos: 'n.', ko: '요리법', ic: '📒', audio: 'assets/audio/recipe.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'She wrote down every recipe.', exKo: '그녀는 모든 요리법을 적었다.'},
      {w: 'confident', pos: 'adj.', ko: '자신감 있는', ic: '😎', audio: 'assets/audio/confident.mp3', audioCredit: 'TreeMama · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'I feel more confident now.', exKo: '나는 이제 더 자신감이 생겼다.'},
      {w: 'future', pos: 'n.', ko: '미래', ic: '🔭', audio: 'assets/audio/future.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Write a letter to your future self.', exKo: '미래의 나에게 편지를 써라.'},
      {w: 'challenge', pos: 'n.', ko: '도전', ic: '🧗', audio: 'assets/audio/challenge.mp3', audioCredit: 'BirdHopper · CC BY-SA 4.0 (Wikimedia Commons, US)', ex: 'I like a good challenge.', exKo: '나는 멋진 도전을 좋아한다.'},
      {w: 'succeed', pos: 'v.', ko: '성공하다', ic: '🎉', audio: 'assets/audio/succeed.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'You will succeed someday.', exKo: '너는 언젠가 성공할 것이다.'},
      {w: 'plan', pos: 'n./v.', ko: '계획; 계획하다', ic: '🗓️', audio: 'assets/audio/plan.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'What’s your plan for next year?', exKo: '내년 계획이 뭐니?'},
      {w: 'graduate', pos: 'v.', ko: '졸업하다', ic: '🎓', ex: 'We will graduate soon.', exKo: '우리는 곧 졸업한다.'}
    ],
    phrases: [
      {w: 'come true', ko: '이루어지다', ex: 'My dream came true.', exKo: '나의 꿈이 이루어졌다.'},
      {w: 'give up', ko: '포기하다', ex: 'Don’t give up on your dream.', exKo: '꿈을 포기하지 마라.'},
      {w: 'keep -ing', ko: '계속 ~하다', ex: 'She kept writing.', exKo: '그녀는 계속 썼다.'},
      {w: 'step by step', ko: '한 걸음씩', ex: 'Learn step by step.', exKo: '한 걸음씩 배워라.'},
      {w: 'be proud of', ko: '~을 자랑스러워하다', ex: 'I’m proud of you.', exKo: '네가 자랑스럽다.'},
      {w: 'look back on', ko: '~을 되돌아보다', ex: 'Look back on this year.', exKo: '올해를 되돌아봐라.'}
    ],
    pairs: [
      {a: 'succeed', b: 'fail', rel: '반대말'},
      {a: 'fail', b: 'failure', rel: '동사 / 명사'},
      {a: 'achieve', b: 'achievement', rel: '동사 / 명사'},
      {a: 'patient', b: 'impatient', rel: '반대말'}
    ],
    wrap: {en: 'My dream is to ______. One small step I can take today is ______.', ko: '오늘 배운 낱말로 나의 꿈과 오늘의 작은 한 걸음 소개하기'}
  },

  talk: {
    hook: {en: 'What are you planning to do after graduation?', ko: '졸업 후에 무엇을 할 계획인가요?', note: '고등학교 진학·방학 계획 등 가까운 계획부터 묻는다. 먼 미래의 직업만 묻지 않는다.'},
    speakers: {Doyun: {voice: 1, pitch: 1}, Lily: {voice: 0, pitch: 1.15}, Coach: {voice: 1, pitch: .85}, Somin: {voice: 0, pitch: 1.1}, Eric: {voice: 1, pitch: .95}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '계획 묻고 답하기',
        key: {q: ['What are you planning to do ~?', 'What’s your plan for ~?'], a: ['I’m planning to ~.', 'I’m thinking of -ing ~.', 'I’m going to ~.']},
        note: 'planning to + 동사원형 / thinking of + -ing. 형태가 다른 것을 짚는다.',
        dialogs: [
          { title: 'Dialogue A', setting: '졸업을 앞둔 교실', lines: [
            {s: 'Lily', en: 'Doyun, {{what are you planning to do}} this winter?', ko: '도윤아, 이번 겨울에 뭐 할 계획이야?'},
            {s: 'Doyun', en: '{{I’m thinking of}} learning to cook.', ko: '요리를 배울까 생각 중이야.'},
            {s: 'Lily', en: 'Cooking? I didn’t know you liked it.', ko: '요리? 네가 요리를 좋아하는 줄 몰랐어.'},
            {s: 'Doyun', en: 'I want to be a chef. {{I’m planning to}} cook breakfast for my family every Sunday.', ko: '나 요리사가 되고 싶어. 매주 일요일에 가족 아침을 만들 계획이야.'},
            {s: 'Lily', en: 'That’s a great first step!', ko: '정말 멋진 첫걸음이다!'}
          ]},
          { title: 'Dialogue B', setting: '하굣길', lines: [
            {s: 'A', en: '{{What’s your plan for}} high school?', ko: '고등학교 가서 계획이 뭐야?'},
            {s: 'B', en: '{{I’m going to}} join the robot club.', ko: '로봇 동아리에 들어갈 거야.'},
            {s: 'A', en: 'Cool. You like not only science but also art.', ko: '멋지다. 너는 과학뿐만 아니라 미술도 좋아하잖아.'},
            {s: 'B', en: 'Right. I want to design robots that look beautiful.', ko: '맞아. 아름답게 생긴 로봇을 설계하고 싶어.'}
          ]}
        ],
        check: [
          {q: 'What is Doyun thinking of doing this winter?', a: 'Learning to cook.'},
          {q: 'What is Doyun planning to do every Sunday?', a: 'Cook breakfast for his family.'},
          {q: 'Which club is B going to join?', a: 'The robot club.'}
        ],
        drill: {frame: ['A: What are you planning to do ____?', 'B: I’m planning to ____.'], opts: ['learn to cook', 'read ten books', 'join a club', 'learn the guitar', 'volunteer', 'start a blog']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '격려하기',
        key: {q: ['I’m not sure I can ~.', 'I failed again.'], a: ['Don’t give up.', 'You can do it.', 'I’m sure you’ll ~.', 'Keep trying!']},
        note: '격려할 때 막연한 칭찬보다 구체적인 근거(You practiced so hard.)를 붙이면 더 힘이 된다고 안내.',
        dialogs: [
          { title: 'Dialogue A', setting: '수영장, 대회 하루 전', lines: [
            {s: 'Somin', en: 'Eric, {{I’m not sure I can}} finish the race tomorrow.', ko: '에릭, 내일 경기를 끝까지 할 수 있을지 모르겠어.'},
            {s: 'Eric', en: '{{Don’t give up}}. You practiced every morning.', ko: '포기하지 마. 너 매일 아침 연습했잖아.'},
            {s: 'Somin', en: 'But last time I came in last.', ko: '하지만 지난번엔 꼴찌였어.'},
            {s: 'Eric', en: 'That was three months ago. {{I’m sure you’ll}} do better this time.', ko: '그건 석 달 전이잖아. 이번엔 분명 더 잘할 거야.'},
            {s: 'Somin', en: 'Thanks, Eric. I feel more confident now.', ko: '고마워, 에릭. 이제 더 자신감이 생겨.'}
          ]},
          { title: 'Dialogue B', setting: '음악실', lines: [
            {s: 'A', en: '{{I failed}} the piano test {{again}}.', ko: '피아노 시험에 또 떨어졌어.'},
            {s: 'B', en: 'Oh, no. But {{keep trying}}! You’re getting better.', ko: '저런. 하지만 계속 해 봐! 점점 나아지고 있잖아.'},
            {s: 'A', en: 'Do you really think so?', ko: '정말 그렇게 생각해?'},
            {s: 'B', en: 'Of course. {{You can do it}}.', ko: '물론이지. 넌 할 수 있어.'}
          ]}
        ],
        check: [
          {q: 'What is Somin worried about?', a: 'Finishing the race tomorrow.'},
          {q: 'When did Somin practice?', a: 'Every morning.'},
          {q: 'What did A fail?', a: 'The piano test.'}
        ],
        drill: {frame: ['A: I’m not sure I can ____.', 'B: Don’t give up. You can do it.'], opts: ['finish the race', 'pass the test', 'make the team', 'give a speech', 'learn Spanish', 'win the contest']}
      }
    ],
    interviewEx: 'Seoyeon is planning to read one English book a month. I’m sure she’ll do it.',
    watch: {
      label: 'Let’s Watch', title: 'The Last Practice', setting: '농구 코트, 늦은 오후. 코치가 혼자 남아 슛을 연습하는 도윤을 발견한다.',
      lines: [
        {s: 'Coach', en: 'Doyun, you’re still here? Everyone went home.', ko: '도윤아, 아직 있었니? 다들 집에 갔는데.'},
        {s: 'Doyun', en: 'I missed every free throw in the game. I’m not sure I can play anymore.', ko: '경기에서 자유투를 다 놓쳤어요. 계속 뛸 수 있을지 모르겠어요.'},
        {s: 'Coach', en: 'Don’t give up. How many shots do you practice a day?', ko: '포기하지 마라. 하루에 슛을 몇 개 연습하니?'},
        {s: 'Doyun', en: 'About twenty.', ko: '스무 개쯤이요.'},
        {s: 'Coach', en: 'Try fifty, not only today but also every day. Small steps make big players.', ko: '쉰 개를 해 봐. 오늘뿐 아니라 매일. 작은 걸음이 큰 선수를 만든단다.'},
        {s: 'Doyun', en: 'Okay! Fifty shots, starting now.', ko: '알겠어요! 쉰 개, 지금부터 시작할게요.'}
      ],
      check: [
        {q: 'Why is Doyun upset?', a: 'He missed every free throw in the game.'},
        {q: 'How many shots does Doyun practice a day now?', a: 'About twenty.'},
        {q: 'What does the coach suggest?', a: 'Practicing fifty shots every day.'}
      ]
    },
    wrap: {en: 'Share your plan for next year with a partner, and encourage each other.', ko: '내년 계획을 나누고 서로 격려하는 대화 하기'}
  },

  grammar: {
    cover: ', which ~',
    hook: {en: 'She sent her book to publishers, {{which}} rejected it.  /  Practice {{not only}} today {{but also}} every day.', ko: '쉼표 뒤 which는 무엇을 가리킬까?', answer: 'publishers(출판사들) — 쉼표 + which는 앞 말에 정보를 덧붙이는 계속적 용법. not only A but also B는 A뿐만 아니라 B도', note: '쉼표가 있을 때와 없을 때 뜻 차이(모든 출판사 vs 일부 출판사)를 간단히 짚는다.'},
    points: [
      { id: 'g1', name: '관계대명사 계속적 용법', short: '계속적 용법', form: '명사, + who / which + 동사 ~', meaning: '그런데 그(것)는 ~ (앞 말에 정보 덧붙이기)',
        notice: [
          {en: 'I met Ms. Kim, {{who}} is a famous chef.', ko: '나는 김 선생님을 만났는데, 그분은 유명한 요리사다.'},
          {en: 'She wrote a book, {{which}} became very popular.', ko: '그녀는 책을 썼는데, 그것은 아주 인기를 얻었다.'},
          {en: 'He failed the test, {{which}} made him sad.', ko: '그는 시험에 떨어졌는데, 그 일이 그를 슬프게 했다.'}
        ],
        rule: [
          {k: '형태', v: '쉼표(,) + who(사람) / which(사물·앞 문장 전체)', ex: 'My uncle, who lives in Busan, is a chef.'},
          {k: '뜻', v: '= and / but + 대명사 (그리고 그는, 그런데 그것은)', ex: ', which = and it'},
          {k: '주의', v: '계속적 용법에는 that을 쓰지 않는다', ex: 'I read the book, which (that ✗) was great.'}
        ],
        compare: {
          title: '제한적 용법 vs 계속적 용법', note: '쉼표 하나로 ‘골라내기’와 ‘덧붙이기’가 갈린다는 점을 예문으로 비교.',
          head: ['', '쉼표 없음 (제한적)', '쉼표 있음 (계속적)'],
          cols: [['예문', '뜻', 'that 사용'], ['He has two sons who are doctors.', '의사인 아들이 둘 (다른 아들이 있을 수도)', '가능'], ['He has two sons, who are doctors.', '아들이 둘인데, 둘 다 의사', '불가']]
        },
        check: [
          {q: 'I have a friend, ____ lives in Canada. (사람)', a: 'who'},
          {q: 'She gave me a book, ____ was very interesting. (사물)', a: 'which'},
          {q: 'He passed the test, ____ surprised everyone. (앞 문장 전체)', a: 'which'},
          {q: 'I met Tom, ____ is my sister’s friend.', a: 'who'},
          {q: 'I read the letter, (which / that) made me cry.', a: 'which'}
        ],
        trap: {bad: 'I visited Jeonju, that is famous for bibimbap.', good: 'I visited Jeonju, which is famous for bibimbap.', why: '쉼표 뒤 계속적 용법에는 that을 쓸 수 없다.'},
        scramble: [
          {ko: '그녀는 책을 썼는데, 그것은 아주 유명해졌다.', en: 'She wrote a book, which became very famous.'},
          {ko: '나는 코치님을 만났는데, 그분은 나를 격려해 주셨다.', en: 'I met my coach, who encouraged me.'},
          {ko: '그는 매일 연습했는데, 그것이 그를 더 강하게 만들었다.', en: 'He practiced every day, which made him stronger.'}
        ]
      },
      { id: 'g2', name: 'not only A but also B', short: 'not only ~', form: 'not only A but also B (= B as well as A)', meaning: 'A뿐만 아니라 B도',
        notice: [
          {en: 'Practice {{not only}} today {{but also}} every day.', ko: '오늘뿐만 아니라 매일 연습해라.'},
          {en: 'You like {{not only}} science {{but also}} art.', ko: '너는 과학뿐만 아니라 미술도 좋아한다.'},
          {en: '{{Not only}} I {{but also}} my brother wants to be a chef.', ko: '나뿐만 아니라 내 남동생도 요리사가 되고 싶어 한다.'}
        ],
        rule: [
          {k: '형태', v: 'A와 B는 같은 형태(명사-명사, 형용사-형용사)', ex: 'She is not only smart but also kind.'},
          {k: '바꿔 쓰기', v: 'not only A but also B = B as well as A', ex: 'not only science but also art = art as well as science'},
          {k: '주어로 쓸 때', v: '동사는 B에 맞춘다', ex: 'Not only you but also he is ready.'}
        ],
        check: [
          {q: 'He is not only kind ____ ____ funny.', a: 'but also'},
          {q: 'She speaks not only English but also ____. (중국어)', a: 'Chinese'},
          {q: 'not only A but also B = B ____ ____ ____ A', a: 'as well as'},
          {q: 'Not only you but also Mina ____ invited. (be, 현재)', a: 'is'},
          {q: 'I want to be not only a chef but also a ____. (작가)', a: 'writer'}
        ],
        trap: {bad: 'She is not only smart but also kindness.', good: 'She is not only smart but also kind.', why: 'A와 B는 같은 품사(형용사-형용사)로 맞춘다.'},
        scramble: [
          {ko: '그녀는 노래뿐만 아니라 춤도 잘한다.', en: 'She is good at not only singing but also dancing.'},
          {ko: '꿈은 너뿐만 아니라 다른 사람도 바꿀 수 있다.', en: 'A dream can change not only you but also others.'},
          {ko: '그는 똑똑할 뿐만 아니라 참을성도 있다.', en: 'He is not only smart but also patient.'}
        ]
      }
    ],
    wrap: {en: 'My dream is to be ______, which ______. I want to be not only ______ but also ______.', ko: '계속적 용법 한 문장, not only A but also B 한 문장으로 나의 꿈 소개하기'},
    wrapEx: 'My dream is to be a game designer, which is a hard but exciting job. I want to be not only creative but also patient.'
  },

  reading: {
    title: 'One Step at a Time', kind: '수필', cover: 'Twelve', coverKo: '열두 번의 거절', cover2: 'Sunday', coverKo2: '일요일 아침의 작은 요리사',
    before: [
      {q: 'Look at the title. Why is “one step at a time” important?', a: '큰 목표도 작은 걸음에서 시작된다'},
      {q: 'Have you ever failed many times before you succeeded?', a: '자유롭게'}
    ],
    gloss: {'J. K. Rowling': 'J. K. 롤링', 'Harry Potter': '해리 포터', 'single mother': '한부모 엄마', 'café': '카페', 'typewriter': '타자기', 'sold': '팔렸다(sell의 과거분사)', 'copies': '(책의) 부', 'omelet': '오믈렛', 'burnt': '탄', 'notebook': '공책', 'dishes': '요리들'},
    paras: [
      {who: '', en: 'Everyone has a dream. Some dreams look so big that we don’t even try. But big dreams don’t come true in one day. They come true step by step. Here are two people who started small.',
       ko: '누구나 꿈이 있습니다. 어떤 꿈은 너무 커 보여서 시도조차 하지 않죠. 하지만 큰 꿈은 하루 만에 이루어지지 않습니다. 한 걸음씩 이루어지죠. 작게 시작한 두 사람을 소개합니다.',
       check: {q: 'How do big dreams come true?', a: 'Step by step.'}, think: '너무 커 보여서 시도하지 않은 일이 있나요?'},
      {who: 'Twelve Rejections', en: 'In the early 1990s, J. K. Rowling was a single mother with little money. She wrote her first Harry Potter book in cafés, often while her baby was sleeping. It took her years to finish the book, which she typed on an old typewriter.',
       ko: '1990년대 초, J. K. 롤링은 돈이 거의 없는 한부모 엄마였습니다. 그녀는 아기가 잠든 사이 카페에서 첫 해리 포터 책을 썼죠. 책을 끝내는 데 몇 년이 걸렸는데, 그 원고를 그녀는 낡은 타자기로 쳤습니다.',
       check: {q: 'Where did she write her first book?', a: 'In cafés.'}, think: '어려운 상황에서도 계속 쓸 수 있었던 힘은 무엇이었을까?'},
      {who: 'Twelve Rejections', en: 'She sent the manuscript to publishers. Not only the first publisher but also eleven more said no. That was twelve rejections. But she kept trying. Finally, a small publisher accepted it, and the book came out in 1997. Today, the series has sold hundreds of millions of copies.',
       ko: '그녀는 원고를 출판사들에 보냈습니다. 첫 출판사뿐 아니라 열한 곳이 더 거절했죠. 열두 번의 거절이었습니다. 하지만 그녀는 계속 도전했습니다. 마침내 한 작은 출판사가 원고를 받아들였고, 책은 1997년에 나왔습니다. 오늘날 그 시리즈는 수억 부가 팔렸습니다.',
       check: {q: 'How many publishers rejected her manuscript?', a: 'Twelve.'}, think: '열두 번 거절당한다면 나는 몇 번째에 포기했을까?'},
      {who: 'The Sunday Chef', en: 'Minjae, a fifteen-year-old student, wants to become a chef. Last year, he made a small promise: he would cook breakfast for his family every Sunday. His first omelet was burnt, which made everyone laugh.',
       ko: '열다섯 살 학생 민재는 요리사가 되고 싶어 합니다. 지난해 그는 작은 약속을 했죠. 매주 일요일 가족에게 아침을 만들어 주겠다고요. 그의 첫 오믈렛은 탔고, 그 일로 모두가 웃었습니다.',
       check: {q: 'What did Minjae promise?', a: 'To cook breakfast for his family every Sunday.'}, think: '첫 시도가 실패했을 때 웃을 수 있다는 건 어떤 의미일까?'},
      {who: 'The Sunday Chef', en: 'But Minjae kept cooking. He wrote every recipe in a notebook, which now has more than fifty dishes. His family enjoys not only the food but also the time together. “Sunday is my favorite day now,” says his little sister.',
       ko: '하지만 민재는 계속 요리했습니다. 그는 모든 요리법을 공책에 적었는데, 그 공책에는 이제 50가지가 넘는 요리가 있죠. 가족들은 음식뿐 아니라 함께하는 시간도 즐깁니다. “이제 일요일이 제일 좋아요.” 여동생이 말합니다.',
       check: {q: 'What does his family enjoy?', a: 'Not only the food but also the time together.'}, think: '꿈을 위한 작은 습관이 다른 사람까지 행복하게 할 수 있을까?'},
      {who: 'The Sunday Chef', en: 'Minjae is not a chef yet. But he is not the same boy who burnt the omelet. “I don’t know when my dream will come true,” he says. “But I know that I’m one step closer every Sunday.”',
       ko: '민재는 아직 요리사가 아닙니다. 하지만 그는 오믈렛을 태우던 그 소년이 아니죠. “제 꿈이 언제 이루어질지는 몰라요.” 그가 말합니다. “하지만 일요일마다 한 걸음씩 가까워지고 있다는 건 알아요.”',
       check: {q: 'What does Minjae know?', a: 'That he is one step closer every Sunday.'}, think: '나는 꿈에 한 걸음 가까워지기 위해 무엇을 반복할 수 있을까?'},
      {who: 'Your First Step', en: 'Rowling didn’t stop after twelve rejections, and Minjae didn’t stop after one burnt omelet. Your dream may look far away now. But remember: not only big moments but also small steps make a dream. What will your first step be?',
       ko: '롤링은 열두 번의 거절 뒤에도 멈추지 않았고, 민재는 탄 오믈렛 하나에 멈추지 않았습니다. 여러분의 꿈은 지금 멀어 보일지도 모릅니다. 하지만 기억하세요. 큰 순간뿐 아니라 작은 걸음도 꿈을 만든다는 것을요. 여러분의 첫걸음은 무엇인가요?',
       check: {q: 'What makes a dream, according to the writer?', a: 'Not only big moments but also small steps.'}, think: '나의 첫걸음은?'}
    ],
    split: 3,
    next: '타 버린 오믈렛 하나는\n어떻게 꿈의 시작이 되었을까?',
    recap: {q: '롤링이 걸어온 길은?', items: [{k: 'CAFÉS', v: 'wrote while her baby slept'}, {k: '12', v: 'publishers rejected it'}, {k: '1997', v: 'the book came out'}]},
    tf: [
      {p: 1, s: 'Rowling wrote her first book in cafés.', a: true},
      {p: 2, s: 'The first publisher accepted her book.', a: false, why: '열두 곳이 거절한 뒤 받아들여졌다.'},
      {p: 2, s: 'The first Harry Potter book came out in 1997.', a: true},
      {p: 3, s: 'Minjae’s first omelet was perfect.', a: false, why: '탔다.'},
      {p: 4, s: 'Minjae’s notebook has more than fifty dishes.', a: true},
      {p: 5, s: 'Minjae is already a chef.', a: false, why: '아직 요리사가 아니다.'}
    ],
    key: [
      {en: 'It took her years to finish the book, {{which}} she typed on an old typewriter.', note: '계속적 용법 which', g: 'g1'},
      {en: '{{Not only}} the first publisher {{but also}} eleven more said no.', note: 'not only A but also B (주어)', g: 'g2'},
      {en: 'His first omelet was burnt, {{which}} made everyone laugh.', note: '계속적 용법 which (앞 문장 전체)', g: 'g1'},
      {en: 'He wrote every recipe in a notebook, {{which}} now has more than fifty dishes.', note: '계속적 용법 which', g: 'g1'},
      {en: 'His family enjoys {{not only}} the food {{but also}} the time together.', note: 'not only A but also B', g: 'g2'},
      {en: 'I don’t know {{when my dream will come true}}.', note: '간접의문문 (Lesson 4 복습)', g: ''}
    ],
    summary: {text: 'J. K. Rowling wrote in {{cafés}}, and twelve publishers {{rejected}} her book. She kept trying, and it came out in {{1997}}. Minjae cooks {{breakfast}} every Sunday and writes recipes in a {{notebook}}. Not only big moments but also small {{steps}} make a dream.'},
    order: ['Minjae made a promise to cook every Sunday.', 'His first omelet was burnt.', 'He wrote every recipe in a notebook.', 'His notebook now has more than fifty dishes.'],
    chart: {title: 'TWO DREAMERS', ko: '두 사람 비교하기', cols: ['Failure', 'Small step'], note: '‘실패 → 멈추지 않음 → 반복’이라는 같은 흐름을 표로 확인한다.', rows: [
      {name: 'J. K. Rowling', cells: ['12 rejections', 'kept sending her manuscript']},
      {name: 'Minjae', cells: ['a burnt omelet', 'cooks every Sunday, writes recipes']}
    ]},
    wrap: {en: 'Dear future me, my dream is ______, which ______. I will take not only ______ but also ______. My first step is ______.', ko: '관통 질문으로 돌아가기: 미래의 나에게 보내는 짧은 편지 쓰기'}
  },

  quiz: [
    ['“거절하다”를 뜻하는 낱말은?', ['fail', 'achieve', 'succeed', 'reject'], 3, 'reject: 거절하다'],
    ['“succeed”의 반대말은?', ['plan', 'fail', 'achieve', 'practice'], 1, 'succeed ↔ fail'],
    ['“My dream came ___.” (이루어지다)', ['true', 'up', 'back', 'across'], 0, 'come true'],
    ['계획을 묻는 표현은?', ['Keep trying!', 'You can do it.', 'What are you planning to do?', 'I’m sure you’ll do much better next time.'], 2, 'What are you planning to do ~?'],
    ['격려하는 표현이 아닌 것은?', ['Keep trying!', 'You can do it.', 'I’m thinking of learning to cook.', 'Don’t give up. You practiced so hard.'], 2, 'I’m thinking of ~는 계획 표현'],
    ['Let’s Watch에서 코치가 제안한 것은?', ['매일 슛 50개', '하루 쉬기', '팀 옮기기', '경기 영상 다시 보기'], 0, 'Try fifty, not only today but also every day.'],
    ['빈칸에 알맞은 것은? “I met Ms. Kim, ___ is a chef.”', ['which', 'who', 'that', 'what'], 1, '사람 + 계속적 용법: , who'],
    ['빈칸에 알맞은 것은? “She is not only kind ___ funny.”', ['or', 'and', 'as well as', 'but also'], 3, 'not only A but also B'],
    ['어법상 틀린 문장은?', ['He is smart as well as kind.', 'I read the book, which was fun.', 'I visited Jeonju, that is famous.', 'Not only you but also he is ready.'], 2, '계속적 용법에는 that을 쓸 수 없다.'],
    ['밑줄 친 “, which”가 가리키는 것은? “He failed the test, which made him sad.”', ['he', 'sad', 'the test', '앞 문장 전체'], 3, 'which가 앞 문장 전체를 가리킴'],
    ['롤링이 첫 책을 쓴 곳은?', ['도서관', '카페', '출판사', '학교 교무실'], 1, 'in cafés'],
    ['롤링의 원고를 거절한 출판사 수는?', ['3곳', '7곳', '12곳', '20곳이 넘게'], 2, 'That was twelve rejections.'],
    ['민재가 매주 일요일에 하는 일은?', ['장보기', '요리 수업 듣기', '가족 아침 만들기', '요리 영상 올리기'], 2, 'cook breakfast for his family'],
    ['민재의 공책에 있는 것은?', ['요리법', '일기', '친구 이름', '실패한 요리 사진'], 0, 'He wrote every recipe in a notebook.'],
    ['글의 요지로 가장 알맞은 것은?', ['재능이 가장 중요하다', '작은 걸음이 꿈을 만든다', '실패하면 멈춰야 한다', '꿈은 하루 만에 이루어진다'], 1, 'small steps make a dream']
  ]
};

/* ── 보강: 원리 중심 문법 · 모션 그래픽 · 낱말 만들기 · 발음 기호 ── */
(function (L) {
  const ipa = {dream: '/driːm/', goal: '/ɡoʊl/', achieve: '/əˈtʃiːv/', fail: '/feɪl/', failure: '/ˈfeɪljər/', reject: '/rɪˈdʒekt/', publisher: '/ˈpʌblɪʃər/', manuscript: '/ˈmænjuskrɪpt/', patient: '/ˈpeɪʃnt/', step: '/step/', progress: '/ˈprɑːɡres/', practice: '/ˈpræktɪs/', chef: '/ʃef/', recipe: '/ˈresəpi/', confident: '/ˈkɑːnfɪdənt/', future: '/ˈfjuːtʃər/', challenge: '/ˈtʃælɪndʒ/', succeed: '/səkˈsiːd/', plan: '/plæn/', graduate: '/ˈɡrædʒueɪt/'};
  L.vocab.words.forEach(w => { if (ipa[w.w]) w.ipa = ipa[w.w]; });
  L.vocab.morph = [
    {w: 'manuscript', ko: '원고', parts: [{t: 'manu', k: 'root', m: '손'}, {t: 'script', k: 'root', m: '쓴 것'}], family: ['manual', 'describe', 'script'], note: '손(manu)으로 쓴 것(script) → 원고. manual = 손으로 하는.'},
    {w: 'reject', ko: '거절하다', parts: [{t: 're', k: 'pre', m: '뒤로, 되돌려'}, {t: 'ject', k: 'root', m: '던지다'}], family: ['project', 'inject', 'object'], note: '뒤로 던져 버리다 → 거절하다. pro(앞으로) + ject = 계획·투사.'},
    {w: 'failure', ko: '실패', parts: [{t: 'fail', k: 'root', m: '실패하다'}, {t: 'ure', k: 'suf', m: '~것 (명사)'}], family: ['pressure', 'departure', 'mixture'], note: '동사 + -ure = 명사 (press → pressure).'}
  ];
  const [g1, g2] = L.grammar.points;
  g1.principle = {
    q: '콤마 하나로 무엇이 달라질까?',
    pic: [{en: 'Ms. Kim,', ko: '이미 누구인지 정해진 사람'}, {en: 'who is a famous chef', ko: '덤으로 붙이는 정보', hot: true}],
    core: '계속적 용법은 앞의 명사가 이미 누구·무엇인지 분명할 때, 콤마 뒤에 정보를 “덧붙인다”. 고르기 위한 꾸밈(제한적 용법)이 아니라 “그런데 그 사람은 ~”처럼 이야기를 이어 간다.',
    why: ['명사, + who/which + 동사 = and he/she/it ~.', 'that은 계속적 용법에 쓰지 않는다.', 'which는 앞 문장 전체를 받기도 한다 (He failed, which made him sad).']
  };
  g1.anim = [{title: 'and she → , who', states: [
    {t: 'I/S | met/V | Ms. Kim/O#k | , | and she/D | is/V#is | a famous chef/C#c | .', note: 'and + 대명사로 정보를 덧붙임', ko: '나는 김 선생님을 만났다, 그리고 그분은 유명한 요리사다.'},
    {t: 'I/S | met/V | Ms. Kim/O#k | , | who/X | is/V#is | a famous chef/C#c | .', note: 'and she → , who', ko: '나는 김 선생님을 만났는데, 그분은 유명한 요리사다.'}]},
    {title: 'which가 앞 문장 전체를 받을 때', states: [
    {t: 'He/S | failed/V | the test/O | . | / | That/S#t | made/V#m | him sad/O#s | .', note: 'That = 시험에 떨어진 일 전체', ko: '그는 시험에 떨어졌다. 그 일이 그를 슬프게 했다.'},
    {t: 'He/S | failed/V | the test/O | , | which/X#t | made/V#m | him sad/O#s | .', note: ', which = 앞 문장 전체', ko: '그는 시험에 떨어졌는데, 그 일이 그를 슬프게 했다.'}]}];
  g1.contrast = {title: '제한적 vs 계속적', pairs: [
    {a: 'She has two sons {{who}} are chefs.', ka: '그녀에게는 요리사인 아들이 둘 있다. (다른 아들이 더 있을 수도)', b: 'She has two sons, {{who}} are chefs.', kb: '그녀에게는 아들이 둘 있는데, 둘 다 요리사다. (아들은 딱 둘)'}],
    point: '콤마가 없으면 골라내는 꾸밈, 있으면 덧붙이는 설명.'};
  g2.principle = {
    q: 'not only A but also B는 무엇을 강조할까?',
    pic: [{en: 'not only A', ko: '이미 아는 정보'}, {en: 'but also B', ko: '더해지는 새 정보 (강조)', hot: true}],
    core: 'A는 당연히 포함되고, 거기에 B까지 더해진다는 뜻으로 B에 무게를 둔다. A와 B는 같은 종류(명사-명사, 동사-동사)로 맞춘다.',
    why: ['= B as well as A (순서가 바뀜에 주의).', '주어로 쓰면 동사는 B에 맞춘다 (Not only I but also my brother wants ~).', 'A와 B의 품사·형태를 나란히 맞춘다 (병렬).']
  };
  g2.anim = [{title: 'not only A but also B ↔ B as well as A', states: [
    {t: 'You/S | like/V | not only/X | science/O#a | but also/X | art/O#b | .', note: 'A뿐만 아니라 B도', ko: '너는 과학뿐만 아니라 미술도 좋아한다.'},
    {t: 'You/S | like/V | art/O#b | as well as/X | science/O#a | .', note: 'B as well as A — 강조하는 B가 앞으로', ko: '같은 뜻'}]}];
  g2.contrast = {title: '주어로 쓸 때 동사 일치', pairs: [
    {a: 'Not only I but also {{my brother wants}} to be a chef.', ka: '나뿐만 아니라 내 동생도 요리사가 되고 싶어 한다. (B에 맞춤)', b: '{{My brother}} as well as I {{wants}} to be a chef.', kb: '같은 뜻 — 동사는 앞의 B(my brother)에 맞춤'}],
    point: '동사는 강조되는 B에 맞춘다.'};
})(window.LESSON);
