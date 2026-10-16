/* 중2 영어(동아·윤정미) Lesson 1 · 시범 단원 데이터
   교과서 원문이 아닌, 단원 목표에 맞춰 새로 쓴 대화문과 읽기 글입니다.
   이 파일 하나로 슬라이드·연습실·학습지·게임·골든벨이 모두 만들어집니다.
   문장 안의 {{ }} 부분은 핵심 표현(슬라이드·학습지에서 빈칸이 되는 곳)입니다. */
window.LESSON = {
  book: 'm2-donga', no: 1, sample: true,
  title: 'Find Your Spark', ko: '나만의 불꽃 찾기',
  bigQ: {en: 'What is your spark?', ko: '나를 설레게 하는 것은 무엇일까?'},
  goals: {
    vocab: ['관심사·도전과 관련된 낱말 20개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 나의 관심사를 한 문장으로 말할 수 있다.'],
    talk: ['관심 있는 것을 묻고 답할 수 있다.', '앞으로의 계획을 묻고 답할 수 있다.'],
    grammar: ['to부정사를 동사의 목적어·보어로 쓸 수 있다.', '동명사를 주어·목적어로 쓰고, to부정사와 구별할 수 있다.'],
    read1: ['글의 주제를 예측하고, 첫 번째 인물의 경험을 정확히 이해할 수 있다.'],
    read2: ['세 인물이 관심사를 찾은 과정을 비교하고, 글의 요지를 요약할 수 있다.', '나의 관심사와 계획을 영어로 쓸 수 있다.']
  },

  /* ───────── 1차시 · 어휘 ───────── */
  vocab: {
    hook: {en: 'What do you do when you have free time?', ko: '시간이 날 때 무엇을 하나요?', note: '짝과 30초 동안 답을 나눈 뒤 두세 명에게 묻는다. 학생 답에서 나온 낱말(hobby, practice 등)을 칠판 한쪽에 적어 두면 뒤 단어 학습과 연결된다.'},
    words: [
      {w: 'interest', pos: 'n.', ko: '관심, 흥미', ic: '💡', ex: 'I have a big interest in space.', exKo: '나는 우주에 관심이 많다.'},
      {w: 'hobby', pos: 'n.', ko: '취미', ic: '🎨', ex: 'My hobby is taking photos.', exKo: '내 취미는 사진 찍기이다.'},
      {w: 'join', pos: 'v.', ko: '가입하다, 함께하다', ic: '🤝', ex: 'I want to join the soccer club.', exKo: '나는 축구 동아리에 가입하고 싶다.'},
      {w: 'explore', pos: 'v.', ko: '탐험하다, 알아보다', ic: '🧭', ex: 'Let’s explore new hobbies together.', exKo: '함께 새로운 취미를 알아보자.'},
      {w: 'discover', pos: 'v.', ko: '발견하다, 알게 되다', ic: '🔍', ex: 'She discovered a love for science.', exKo: '그녀는 과학을 좋아한다는 것을 알게 되었다.'},
      {w: 'practice', pos: 'v./n.', ko: '연습하다; 연습', ic: '🎯', ex: 'I practice the guitar every day.', exKo: '나는 매일 기타를 연습한다.'},
      {w: 'improve', pos: 'v.', ko: '나아지다, 향상시키다', ic: '📈', ex: 'Reading every day will improve your English.', exKo: '매일 읽으면 영어 실력이 좋아질 것이다.'},
      {w: 'challenge', pos: 'n.', ko: '도전, 어려운 일', ic: '⛰️', ex: 'Speaking in front of the class is a challenge for me.', exKo: '반 앞에서 말하는 것은 나에게 도전이다.'},
      {w: 'nervous', pos: 'adj.', ko: '긴장한, 불안한', ic: '😬', ex: 'I was nervous before the test.', exKo: '나는 시험 전에 긴장했다.'},
      {w: 'confident', pos: 'adj.', ko: '자신감 있는', ic: '😎', ex: 'Practice made him more confident.', exKo: '연습 덕분에 그는 더 자신감이 생겼다.'},
      {w: 'skill', pos: 'n.', ko: '기술, 능력', ic: '🛠️', ex: 'Cooking is a useful skill.', exKo: '요리는 쓸모 있는 기술이다.'},
      {w: 'goal', pos: 'n.', ko: '목표', ic: '🏁', ex: 'My goal is to read ten books this year.', exKo: '내 목표는 올해 책 열 권을 읽는 것이다.'},
      {w: 'volunteer', pos: 'v./n.', ko: '자원봉사하다; 자원봉사자', ic: '🙋', ex: 'We volunteer at the library on Saturdays.', exKo: '우리는 토요일마다 도서관에서 자원봉사를 한다.'},
      {w: 'decide', pos: 'v.', ko: '결정하다', ic: '✅', ex: 'He decided to learn Chinese.', exKo: '그는 중국어를 배우기로 결정했다.'},
      {w: 'enjoy', pos: 'v.', ko: '즐기다', ic: '😊', ex: 'I enjoy playing board games.', exKo: '나는 보드게임 하는 것을 즐긴다.'},
      {w: 'record', pos: 'v.', ko: '기록하다, 녹음하다', ic: '📝', ex: 'I record my running time in a notebook.', exKo: '나는 공책에 달리기 기록을 적는다.'},
      {w: 'share', pos: 'v.', ko: '나누다, 공유하다', ic: '📤', ex: 'Please share your ideas with your group.', exKo: '모둠과 생각을 나눠 주세요.'},
      {w: 'advice', pos: 'n.', ko: '조언', ic: '🗣️', ex: 'Can you give me some advice?', exKo: '나에게 조언 좀 해 줄래?'},
      {w: 'mistake', pos: 'n.', ko: '실수', ic: '❌', ex: 'Everyone makes mistakes.', exKo: '누구나 실수를 한다.'},
      {w: 'local', pos: 'adj.', ko: '지역의, 현지의', ic: '📍', ex: 'We visited a local market.', exKo: '우리는 지역 시장을 방문했다.'}
    ],
    phrases: [
      {w: 'be interested in', ko: '~에 관심이 있다', ex: 'I’m interested in robots.', exKo: '나는 로봇에 관심이 있다.'},
      {w: 'be good at', ko: '~을 잘하다', ex: 'Mina is good at drawing.', exKo: '미나는 그림을 잘 그린다.'},
      {w: 'take part in', ko: '~에 참여하다', ex: 'We took part in the school festival.', exKo: '우리는 학교 축제에 참여했다.'},
      {w: 'give up', ko: '포기하다', ex: 'Don’t give up so easily.', exKo: '그렇게 쉽게 포기하지 마.'},
      {w: 'make a difference', ko: '변화를 가져오다, 차이를 만들다', ex: 'Small actions can make a difference.', exKo: '작은 행동이 변화를 만들 수 있다.'},
      {w: 'little by little', ko: '조금씩', ex: 'Little by little, my English improved.', exKo: '조금씩 내 영어 실력이 늘었다.'}
    ],
    pairs: [
      {a: 'nervous', b: 'confident', rel: '반대말'},
      {a: 'join', b: 'take part in', rel: '비슷한 말'},
      {a: 'discover', b: 'find', rel: '비슷한 말'},
      {a: 'volunteer', b: 'volunteer', rel: '동사 / 명사', note: 'I volunteer. / She is a volunteer.'}
    ],
    wrap: {en: 'I’m interested in ______. I want to improve my ______ skills.', ko: '오늘 배운 낱말 두 개 이상을 넣어 나를 소개하는 문장 쓰기'}
  },

  /* ───────── 2차시 · 대화문 ───────── */
  talk: {
    hook: {en: 'What club do you want to join this year?', ko: '올해 어떤 동아리에 들고 싶나요?', note: '동아리 이름은 한국어로 말해도 된다. 학생 답을 영어로 바꿔 주며 interested in, going to를 미리 들려준다.'},
    speakers: {Jiho: {voice: 1, pitch: .95}, Emma: {voice: 0, pitch: 1.1}, Yuna: {voice: 0, pitch: 1.15}, Leo: {voice: 1, pitch: .9}, Sora: {voice: 0, pitch: 1.1}, Minjun: {voice: 1, pitch: .95}, 'Ms. Park': {voice: 2, pitch: 1}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '관심 묻고 답하기',
        key: {q: ['What are you interested in?', 'Are you interested in ~?'], a: ['I’m interested in ~.', 'I’m into ~.', 'I have an interest in ~.']},
        note: '“interested in” 뒤에는 명사나 동명사(-ing)가 온다. I’m interested in play(✗) → playing(○). 3차시 동명사와 연결된다.',
        dialogs: [
          { title: 'Dialogue A', setting: '새 학기 첫 주, 복도에서', lines: [
            {s: 'Jiho', en: 'Hey, Emma. What club are you going to join this year?', ko: '안녕, 에마. 올해 어떤 동아리에 들 거야?'},
            {s: 'Emma', en: 'I’m thinking about the science club. I’m really {{interested in}} robots.', ko: '과학 동아리를 생각하고 있어. 난 로봇에 정말 관심이 있거든.'},
            {s: 'Jiho', en: 'Cool! I didn’t know that.', ko: '멋지다! 몰랐어.'},
            {s: 'Emma', en: 'How about you? {{What are you interested in}}?', ko: '너는? 너는 무엇에 관심이 있어?'},
            {s: 'Jiho', en: 'I’m {{interested in}} music. I want to learn the drums.', ko: '나는 음악에 관심이 있어. 드럼을 배우고 싶어.'},
            {s: 'Emma', en: 'That sounds fun. Good luck!', ko: '재밌겠다. 행운을 빌어!'}
          ]},
          { title: 'Dialogue B', setting: '쉬는 시간, 교실에서', lines: [
            {s: 'A', en: 'What are you {{into}} these days?', ko: '요즘 뭐에 빠져 있어?'},
            {s: 'B', en: 'I’m {{into}} baking. I bake cookies every weekend.', ko: '베이킹에 빠져 있어. 주말마다 쿠키를 구워.'},
            {s: 'A', en: 'Wow, can you bring some next time?', ko: '와, 다음에 좀 가져올 수 있어?'},
            {s: 'B', en: 'Sure! I’ll bring chocolate cookies.', ko: '물론이지! 초콜릿 쿠키를 가져올게.'}
          ]}
        ],
        check: [
          {q: 'What club is Emma thinking about?', a: 'The science club.'},
          {q: 'What does Jiho want to learn?', a: 'He wants to learn the drums.'},
          {q: 'What does B do every weekend?', a: 'B bakes cookies.'}
        ],
        drill: {frame: ['A: What are you interested in?', 'B: I’m interested in ____.'], opts: ['soccer', 'K-pop dance', 'animals', 'cooking', 'drawing comics', 'space']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '계획 묻고 답하기',
        key: {q: ['What are you going to do ~?', 'Do you have any plans for ~?'], a: ['I’m going to ~.', 'I’m planning to ~.', 'I’m thinking of -ing.']},
        note: 'be going to / be planning to 뒤에는 동사원형, thinking of 뒤에는 -ing. 3차시 to부정사·동명사의 예고편으로 쓴다.',
        dialogs: [
          { title: 'Dialogue A', setting: '금요일 방과 후, 교문 앞에서', lines: [
            {s: 'Yuna', en: '{{What are you going to do}} this weekend, Leo?', ko: '레오, 이번 주말에 뭐 할 거야?'},
            {s: 'Leo', en: 'I’m {{planning to}} visit the library. I need some books for my project.', ko: '도서관에 갈 계획이야. 과제에 필요한 책이 좀 있거든.'},
            {s: 'Yuna', en: 'What’s your project about?', ko: '무슨 과제인데?'},
            {s: 'Leo', en: 'It’s about animals in danger. What about you?', ko: '멸종 위기 동물에 관한 거야. 너는?'},
            {s: 'Yuna', en: 'I’m {{going to}} volunteer at the animal shelter with my sister.', ko: '언니랑 동물 보호소에서 자원봉사를 할 거야.'},
            {s: 'Leo', en: 'That’s great. Maybe I can join you next time.', ko: '멋지다. 다음엔 나도 같이 갈 수 있겠다.'}
          ]},
          { title: 'Dialogue B', setting: '방학식 날, 운동장에서', lines: [
            {s: 'A', en: '{{Do you have any plans for}} the vacation?', ko: '방학 계획 있어?'},
            {s: 'B', en: 'Yes. I’m {{going to}} learn how to swim.', ko: '응. 수영을 배울 거야.'},
            {s: 'A', en: 'That’s a good idea. Practice makes perfect!', ko: '좋은 생각이야. 연습하면 완벽해지지!'}
          ]}
        ],
        check: [
          {q: 'Why is Leo going to visit the library?', a: 'He needs some books for his project.'},
          {q: 'What is Yuna going to do this weekend?', a: 'She is going to volunteer at the animal shelter.'},
          {q: 'What is B going to learn?', a: 'B is going to learn how to swim.'}
        ],
        drill: {frame: ['A: What are you going to do this weekend?', 'B: I’m going to ____.'], opts: ['go hiking', 'visit my grandma', 'clean my room', 'watch a movie', 'practice the piano', 'bake bread']}
      }
    ],
    watch: {
      label: 'Let’s Watch', title: 'Club Fair Day', setting: '동아리 박람회 날, 체육관. 소라와 민준이 부스를 돌아보다가 미술 동아리 박 선생님을 만난다.',
      lines: [
        {s: 'Minjun', en: 'Wow, there are so many clubs! Which one are you going to join, Sora?', ko: '와, 동아리가 정말 많다! 소라야, 너는 어디 들 거야?'},
        {s: 'Sora', en: 'I don’t know yet. I’m interested in drawing, but I’m not good at it.', ko: '아직 모르겠어. 그림 그리기에 관심은 있는데 잘하진 못해.'},
        {s: 'Ms. Park', en: 'Hi! Are you interested in the art club?', ko: '안녕! 미술 동아리에 관심 있니?'},
        {s: 'Sora', en: 'Yes, but I’m a little nervous. My drawings are not very good.', ko: '네, 그런데 좀 긴장돼요. 제 그림이 그렇게 잘 그린 게 아니라서요.'},
        {s: 'Ms. Park', en: 'Don’t worry. You can improve with practice. That’s what a club is for.', ko: '걱정 마. 연습하면 나아질 수 있어. 동아리가 그러라고 있는 거야.'},
        {s: 'Minjun', en: 'See? You should give it a try.', ko: '봐, 한번 해 봐.'},
        {s: 'Sora', en: 'Okay. I’m going to sign up! What about you, Minjun?', ko: '좋아. 신청할래! 민준이 너는?'},
        {s: 'Minjun', en: 'I’m planning to join the dance club. Dancing is my favorite thing.', ko: '나는 댄스 동아리에 들 계획이야. 춤추는 게 제일 좋거든.'}
      ],
      check: [
        {q: 'Why is Sora nervous?', a: 'She thinks her drawings are not very good.'},
        {q: 'What does Ms. Park say?', a: 'Sora can improve with practice.'},
        {q: 'Which club is Minjun going to join?', a: 'The dance club.'}
      ]
    },
    wrap: {en: 'Ask three classmates: “What are you interested in?” and “What are you going to do this weekend?”', ko: '친구 세 명과 묻고 답한 뒤, 가장 기억에 남는 답을 한 문장으로 쓰기'}
  },

  /* ───────── 3차시 · 문법 ───────── */
  grammar: {
    hook: {en: 'I want ___ the drums.  /  I enjoy ___ the drums.', ko: '두 빈칸에 들어갈 말이 같을까?', note: '학생 예상을 받은 뒤 답을 미루고 “동사마다 뒤에 오는 모양이 다르다”는 것을 오늘 확인하자고 말한다. 정답: to play / playing.'},
    points: [
      { id: 'g1', name: 'to부정사의 명사적 용법', short: 'to부정사', form: 'to + 동사원형', meaning: '~하는 것, ~하기',
        notice: [
          {en: 'I want {{to learn}} the drums.', ko: '나는 드럼 배우는 것을 원한다.'},
          {en: 'He decided {{to join}} the science club.', ko: '그는 과학 동아리에 들기로 결정했다.'},
          {en: 'My goal is {{to read}} ten books.', ko: '내 목표는 책 열 권을 읽는 것이다.'}
        ],
        rule: [
          {k: '목적어', v: 'want · hope · plan · decide · need · learn + to V', ex: 'I hope to see you again.'},
          {k: '보어', v: '주어 + be동사 + to V', ex: 'My dream is to be a vet.'},
          {k: '주어', v: 'To V ~ is ... (주로 It is ... to V로 바꿔 씀)', ex: 'It is fun to learn new things.'}
        ],
        check: [
          {q: 'I need ____ some books. (buy)', a: 'to buy'},
          {q: 'She hopes ____ a singer. (become)', a: 'to become'},
          {q: 'We decided ____ the river. (clean)', a: 'to clean'},
          {q: 'My plan is ____ every day. (exercise)', a: 'to exercise'},
          {q: 'It is important ____ enough sleep. (get)', a: 'to get'}
        ],
        trap: {bad: 'I want go to the concert.', good: 'I want to go to the concert.', why: 'want 뒤에 동사가 오면 반드시 to를 붙인다.'},
        scramble: [
          {ko: '나는 기타 치는 법을 배우고 싶다.', en: 'I want to learn the guitar.'},
          {ko: '그녀는 동물 보호소에서 일하기로 결심했다.', en: 'She decided to work at an animal shelter.'},
          {ko: '내 목표는 더 자신감을 갖는 것이다.', en: 'My goal is to be more confident.'}
        ]
      },
      { id: 'g2', name: '동명사', short: '동명사', form: '동사원형 + -ing', meaning: '~하는 것, ~하기',
        notice: [
          {en: 'I enjoy {{playing}} board games.', ko: '나는 보드게임 하는 것을 즐긴다.'},
          {en: 'He kept {{practicing}} every night.', ko: '그는 매일 밤 계속 연습했다.'},
          {en: '{{Drawing}} comics is my hobby.', ko: '만화 그리기는 내 취미이다.'}
        ],
        rule: [
          {k: '목적어', v: 'enjoy · finish · keep · give up · practice · mind + V-ing', ex: 'I finished doing my homework.'},
          {k: '주어', v: 'V-ing ~ + 단수 동사', ex: 'Protecting nature is important.'},
          {k: '전치사 뒤', v: 'in · at · of · about + V-ing', ex: 'I’m interested in taking photos.'}
        ],
        compare: {
          head: ['뒤에 to부정사만', '뒤에 동명사만', '둘 다 가능'],
          cols: [['want', 'hope', 'plan', 'decide', 'need'], ['enjoy', 'finish', 'keep', 'give up', 'practice'], ['like', 'love', 'start', 'begin', 'hate']]
        },
        check: [
          {q: 'I enjoy ____ in the rain. (walk)', a: 'walking'},
          {q: 'Don’t give up ____ your dream. (follow)', a: 'following'},
          {q: '____ vegetables is good for you. (eat)', a: 'Eating'},
          {q: 'He is good at ____ songs. (write)', a: 'writing'},
          {q: 'They finished ____ the room. (clean)', a: 'cleaning'}
        ],
        trap: {bad: 'I enjoy to dance with my friends.', good: 'I enjoy dancing with my friends.', why: 'enjoy는 목적어로 동명사만 쓴다.'},
        scramble: [
          {ko: '나는 매일 아침 달리는 것을 즐긴다.', en: 'I enjoy running every morning.'},
          {ko: '외국어를 배우는 것은 재미있다.', en: 'Learning a new language is fun.'},
          {ko: '그는 비디오 게임 하는 것을 그만두었다.', en: 'He gave up playing video games.'}
        ]
      }
    ],
    wrap: {en: 'I want to ______. I enjoy ______.', ko: 'to부정사 한 문장, 동명사 한 문장으로 나를 소개하기'}
  },

  /* ───────── 4·5차시 · 본문 ───────── */
  reading: {
    title: 'Find Your Spark', kind: '학교 신문 인터뷰 기사', cover: 'Spark', coverKo: '나를 설레게 하는 것',
    before: [
      {q: 'Look at the title. What is a “spark” here?', a: '나를 들뜨고 설레게 하는 관심사, 열정'},
      {q: 'How can you find something you love?', a: '자유롭게 예측한 뒤 글을 읽으며 확인'}
    ],
    gloss: {
      spark: '(열정의) 불꽃', stage: '무대', lines: '대사', mirror: '거울', 'lead role': '주인공 역할',
      'try out for': '~에 지원하다, 오디션을 보다', 'clean-up': '청소 (활동)', guidebook: '안내서', 'worth it': '그만한 가치가 있는',
      comics: '만화', 'around the corner': '바로 가까이에', semester: '학기', excited: '신이 난, 들뜬'
    },
    paras: [
      {who: '', en: 'What makes you excited? For some people, it is music. For others, it is sports or science. We call this feeling a “spark.” Our school newspaper asked three students how they found their sparks.',
       ko: '무엇이 여러분을 들뜨게 하나요? 어떤 사람에게는 음악이고, 다른 사람에게는 운동이나 과학입니다. 우리는 이 느낌을 ‘불꽃’이라고 부릅니다. 우리 학교 신문은 세 학생에게 어떻게 자신의 불꽃을 찾았는지 물었습니다.',
       check: {q: 'What is a “spark” in this article?', a: 'A feeling of excitement about something you love.'}, think: '나를 들뜨게 하는 것 하나를 떠올려 보자.'},
      {who: 'Dain, 14', en: 'Last year, I joined the drama club because my friend asked me to. At first, I was so nervous on stage that I forgot my lines. But I didn’t give up. I kept practicing in front of a mirror every night.',
       ko: '작년에 저는 친구가 부탁해서 연극 동아리에 들어갔어요. 처음에는 무대에서 너무 긴장해서 대사를 잊어버렸어요. 하지만 포기하지 않았어요. 매일 밤 거울 앞에서 계속 연습했어요.',
       check: {q: 'Why did Dain join the drama club?', a: 'Because her friend asked her to.'}, think: '실수했을 때 다인처럼 계속할 수 있었던 경험이 있나요?'},
      {who: 'Dain, 14', en: 'Little by little, I became more confident. Now I enjoy acting, and I’m planning to try out for the lead role this fall. My advice? Don’t be afraid of making mistakes. They help you improve.',
       ko: '조금씩 저는 더 자신감이 생겼어요. 지금은 연기를 즐기고, 이번 가을에 주인공 역할 오디션을 볼 계획이에요. 제 조언이요? 실수하는 것을 두려워하지 마세요. 실수는 여러분이 나아지도록 도와줘요.',
       check: {q: 'What is Dain planning to do this fall?', a: 'She is planning to try out for the lead role.'}, think: '“Mistakes help you improve.”에 동의하나요? 그 까닭은?'},
      {who: 'Joon, 15', en: 'I have always been interested in nature, but I didn’t know how to start. Then I decided to volunteer at a river clean-up. There, I discovered that small actions can make a big difference.',
       ko: '저는 늘 자연에 관심이 있었지만 어떻게 시작해야 할지 몰랐어요. 그러다 강 청소 자원봉사를 하기로 했어요. 그곳에서 작은 행동이 큰 변화를 만들 수 있다는 것을 알게 되었어요.',
       check: {q: 'What did Joon decide to do?', a: 'He decided to volunteer at a river clean-up.'}, think: '우리 동네에서 할 수 있는 작은 행동은 무엇일까?'},
      {who: 'Joon, 15', en: 'Now I record the birds near the river and share my photos online. My goal is to make a guidebook of local birds. Protecting nature is not easy, but it is worth it.',
       ko: '지금 저는 강 근처의 새를 기록하고 사진을 온라인에 공유해요. 제 목표는 지역 새들의 안내서를 만드는 것이에요. 자연을 지키는 것은 쉽지 않지만 그만한 가치가 있어요.',
       check: {q: 'What is Joon’s goal?', a: 'To make a guidebook of local birds.'}, think: '준이 사진을 온라인에 공유하는 까닭은 무엇일까?'},
      {who: 'Mia, 14', en: 'I tried many things, like soccer, cooking, and coding. Nothing felt right. Then one day, I started drawing comics about my cat. Now drawing for hours never feels boring to me!',
       ko: '저는 축구, 요리, 코딩 같은 많은 것을 해 봤어요. 어느 것도 딱 맞는 느낌이 아니었어요. 그러다 어느 날 제 고양이에 관한 만화를 그리기 시작했어요. 이제 몇 시간 동안 그림을 그려도 전혀 지루하지 않아요!',
       check: {q: 'What does Mia draw comics about?', a: 'She draws comics about her cat.'}, think: '미아가 여러 가지를 해 본 것은 실패일까, 과정일까?'},
      {who: 'Mia, 14', en: 'I learned that finding your spark takes time. So keep exploring, and try something new this semester. Who knows? Your spark might be waiting for you just around the corner.',
       ko: '저는 자신의 불꽃을 찾는 데 시간이 걸린다는 것을 배웠어요. 그러니 계속 탐색하고, 이번 학기에는 새로운 것을 해 보세요. 누가 알아요? 여러분의 불꽃이 바로 가까이에서 기다리고 있을지도 몰라요.',
       check: {q: 'What is Mia’s advice?', a: 'Keep exploring and try something new.'}, think: '이번 학기에 새로 해 보고 싶은 것은?'}
    ],
    cover2: 'Explore', coverKo2: '계속 탐색하기',
    people: [
      {name: 'Dain', before: 'nervous on stage', action: 'kept practicing every night', now: 'enjoys acting'},
      {name: 'Joon', before: 'didn\u2019t know how to start', action: 'volunteered at a river clean-up', now: 'records and shares birds'},
      {name: 'Mia', before: 'nothing felt right', action: 'started drawing comics', now: 'never feels bored drawing'}
    ],
    split: 3,   /* 4차시: 앞의 3문단, 5차시: 나머지 */
    tf: [
      {s: 'Dain joined the drama club because she loved acting.', a: false, why: '친구가 부탁해서 들어갔다.'},
      {s: 'Dain practiced in front of a mirror every night.', a: true},
      {s: 'Joon volunteered at a river clean-up.', a: true},
      {s: 'Joon wants to make a guidebook of local plants.', a: false, why: 'plants가 아니라 birds.'},
      {s: 'Mia found her spark on her first try.', a: false, why: '여러 가지를 해 본 뒤에 찾았다.'},
      {s: 'Mia draws comics about her cat.', a: true}
    ],
    key: [
      {en: 'I was {{so}} nervous on stage {{that}} I forgot my lines.', note: 'so + 형용사 + that ~: 너무 …해서 ~하다', g: ''},
      {en: 'I {{kept practicing}} in front of a mirror every night.', note: 'keep + 동명사: 계속 ~하다', g: 'g2'},
      {en: 'I’m {{planning to try out}} for the lead role this fall.', note: 'plan + to부정사: ~할 계획이다', g: 'g1'},
      {en: 'My goal is {{to make}} a guidebook of local birds.', note: 'to부정사가 보어: ~하는 것', g: 'g1'},
      {en: '{{Protecting nature}} is not easy, but it is worth it.', note: '동명사 주어 + 단수 동사 is', g: 'g2'},
      {en: 'I learned that {{finding your spark}} takes time.', note: '동명사구 주어 + takes (단수)', g: 'g2'}
    ],
    summary: {text: 'Dain was {{nervous}} on stage, but she kept {{practicing}}. Joon decided to {{volunteer}} at a river clean-up, and now he records {{birds}}. Mia tried many things and finally started {{drawing}} comics. They all say: keep {{exploring}}!'},
    order: ['Dain joined the drama club.', 'Dain forgot her lines on stage.', 'Dain kept practicing every night.', 'Dain became more confident.'],
    wrap: {en: 'My spark is ______. I enjoy ______. This semester, I’m going to ______.', ko: '관통 질문으로 돌아가기: 나의 불꽃을 세 문장으로 쓰기'}
  },

  /* ───────── 골든벨 · 단원 퀴즈: [문제, [보기 4개], 정답 번호(0부터), 해설] ───────── */
  quiz: [
    ['“자신감 있는”을 뜻하는 낱말은?', ['nervous', 'confident', 'excited', 'interested'], 1, 'nervous(긴장한)의 반대말이 confident.'],
    ['빈칸에 알맞은 말은? “Don’t give ___. Try again!”', ['in', 'on', 'up', 'out'], 2, 'give up: 포기하다'],
    ['“discover”와 뜻이 가장 가까운 것은?', ['find', 'join', 'share', 'decide'], 0, 'discover = find out, 알게 되다'],
    ['“I ___ at the animal shelter every Saturday.” 빈칸에 알맞은 것은?', ['enjoy', 'record', 'improve', 'volunteer'], 3, 'volunteer: 자원봉사하다'],
    ['“Can you give me some ___? I don’t know what to do.”', ['goal', 'skill', 'hobby', 'advice'], 3, 'advice: 조언'],
    ['관심을 묻는 표현이 아닌 것은?', ['What are you into?', 'What are you good at?', 'Are you interested in art?', 'What are you interested in?'], 1, 'What are you good at?은 잘하는 것을 묻는 표현.'],
    ['“What are you going to do this weekend?”에 알맞은 대답은?', ['I did my homework.', 'I’m good at tennis.', 'I’m going to go hiking.', 'I’m interested in music.'], 2, '계획을 물으면 be going to로 답한다.'],
    ['Let’s Watch에서 소라가 가입하기로 한 동아리는?', ['art club', 'dance club', 'drama club', 'science club'], 0, '박 선생님의 격려로 미술 동아리에 신청했다.'],
    ['빈칸에 알맞은 것은? “I want ___ a vet.”', ['be', 'to be', 'being', 'to being'], 1, 'want + to부정사'],
    ['빈칸에 알맞은 것은? “She enjoys ___ comics.”', ['draw', 'drew', 'drawing', 'to draw'], 2, 'enjoy + 동명사'],
    ['어법상 틀린 문장은?', ['Reading is fun.', 'We finished to eat.', 'He kept running.', 'I decided to go.'], 1, 'finish는 동명사를 목적어로: finished eating'],
    ['“___ nature is not easy.” 빈칸에 알맞은 것은?', ['Protect', 'Protects', 'Protected', 'Protecting'], 3, '주어 자리의 동명사, 뒤의 is는 단수 동사.'],
    ['다인이 연극 동아리에 들어간 까닭은?', ['친구가 부탁해서', '연기를 좋아해서', '선생님이 권해서', '주인공을 하고 싶어서'], 0, 'because my friend asked me to'],
    ['준의 목표는?', ['강 청소하기', '새 사진 팔기', '지역 새 안내서 만들기', '자연 다큐멘터리 찍기'], 2, 'My goal is to make a guidebook of local birds.'],
    ['글 전체의 요지로 가장 알맞은 것은?', ['실수는 피해야 한다.', '동아리는 하나만 해야 한다.', '취미는 어릴 때 정해진다.', '계속 시도하면 관심사를 찾을 수 있다.'], 3, '세 인물 모두 포기하지 않고 시도하며 불꽃을 찾았다.']
  ]
};
