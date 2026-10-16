/* 중1 영어(동아·윤정미) Lesson 1 · Happy Together
   단원명과 문법(be동사, 일반동사)은 교과서·문제집 목차 기준. 의사소통 기능은 추정(estimate: true).
   대화문·읽기 글은 교과서 원문이 아니라 단원 주제에 맞춰 새로 쓴 글입니다. */
window.LESSON = {
  book: 'm1-donga', no: 1, estimate: true,
  title: 'Happy Together', ko: '함께라서 행복해',
  bigQ: {en: 'How can we become good friends?', ko: '우리는 어떻게 좋은 친구가 될 수 있을까?'},
  goals: {
    vocab: ['학교·친구와 관련된 낱말 16개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 나를 한 문장으로 소개할 수 있다.'],
    talk: ['처음 만난 사람과 인사하고 자신과 친구를 소개할 수 있다.', '좋아하는 것을 묻고 답할 수 있다.'],
    grammar: ['be동사(am, are, is)를 주어에 맞게 쓸 수 있다.', '일반동사의 현재형(3인칭 단수 -s)을 바르게 쓸 수 있다.'],
    read1: ['새 친구들의 자기소개 글을 읽고 첫 두 친구에 대해 이해할 수 있다.'],
    read2: ['네 친구를 비교하고, 나를 소개하는 글을 영어로 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'How do you say hello to a new friend?', ko: '새 친구에게 어떻게 인사하나요?', note: '손을 흔들기, 이름 묻기 등 학생 답을 받는다. 영어 인사(Hi / Nice to meet you)로 이어진다.'},
    words: [
      {w: 'classmate', pos: 'n.', ko: '반 친구', ic: '🧑‍🤝‍🧑', ex: 'Minji is my classmate.', exKo: '민지는 우리 반 친구다.'},
      {w: 'friendly', pos: 'adj.', ko: '친절한, 다정한', ic: '😊', ex: 'My new teacher is friendly.', exKo: '새 선생님은 다정하시다.'},
      {w: 'favorite', pos: 'adj.', ko: '가장 좋아하는', ic: '❤️', ex: 'My favorite color is blue.', exKo: '내가 가장 좋아하는 색은 파랑이다.'},
      {w: 'club', pos: 'n.', ko: '동아리', ic: '🏷️', ex: 'I am in the music club.', exKo: '나는 음악 동아리에 있다.'},
      {w: 'hobby', pos: 'n.', ko: '취미', ic: '🎨', ex: 'My hobby is drawing.', exKo: '내 취미는 그림 그리기다.'},
      {w: 'shy', pos: 'adj.', ko: '수줍어하는', ic: '🙈', ex: 'He is a little shy.', exKo: '그는 조금 수줍어한다.'},
      {w: 'funny', pos: 'adj.', ko: '재미있는, 웃기는', ic: '😆', ex: 'Jun is very funny.', exKo: '준은 정말 웃기다.'},
      {w: 'together', pos: 'adv.', ko: '함께', ic: '🤝', ex: 'Let’s play together.', exKo: '함께 놀자.'},
      {w: 'grade', pos: 'n.', ko: '학년', ic: '🏫', ex: 'I am in the first grade.', exKo: '나는 1학년이다.'},
      {w: 'introduce', pos: 'v.', ko: '소개하다', ic: '🙋', ex: 'Let me introduce my friend.', exKo: '내 친구를 소개할게.'},
      {w: 'enjoy', pos: 'v.', ko: '즐기다', ic: '🎶', ex: 'She enjoys K-pop.', exKo: '그녀는 케이팝을 즐긴다.'},
      {w: 'easily', pos: 'adv.', ko: '쉽게', ic: '🪶', ex: 'He makes friends easily.', exKo: '그는 친구를 쉽게 사귄다.'},
      {w: 'animal', pos: 'n.', ko: '동물', ic: '🐶', ex: 'I love animals.', exKo: '나는 동물을 아주 좋아한다.'},
      {w: 'sport', pos: 'n.', ko: '운동, 스포츠', ic: '⚽', ex: 'Soccer is my favorite sport.', exKo: '축구는 내가 가장 좋아하는 운동이다.'},
      {w: 'weekend', pos: 'n.', ko: '주말', ic: '📅', ex: 'I play games on weekends.', exKo: '나는 주말에 게임을 한다.'},
      {w: 'different', pos: 'adj.', ko: '다른', ic: '🔀', ex: 'We are different, but we are friends.', exKo: '우리는 다르지만 친구다.'}
    ],
    phrases: [
      {w: 'Nice to meet you.', ko: '만나서 반가워.', ex: 'Hi, I’m Sora. Nice to meet you.', exKo: '안녕, 나는 소라야. 만나서 반가워.'},
      {w: 'be good at', ko: '~을 잘하다', ex: 'He is good at math.', exKo: '그는 수학을 잘한다.'},
      {w: 'get along with', ko: '~와 잘 지내다', ex: 'I get along with my brother.', exKo: '나는 남동생과 잘 지낸다.'},
      {w: 'make friends', ko: '친구를 사귀다', ex: 'It’s fun to make friends.', exKo: '친구를 사귀는 것은 재미있다.'},
      {w: 'a lot of', ko: '많은', ex: 'I have a lot of books.', exKo: '나는 책이 많다.'},
      {w: 'after school', ko: '방과 후에', ex: 'We play soccer after school.', exKo: '우리는 방과 후에 축구를 한다.'}
    ],
    pairs: [
      {a: 'shy', b: 'outgoing', rel: '반대말'},
      {a: 'different', b: 'same', rel: '반대말'},
      {a: 'funny', b: 'fun', rel: '웃기는 / 재미있는 일'},
      {a: 'friend', b: 'friendly', rel: '명사 / 형용사'}
    ],
    wrap: {en: 'I am ______. My favorite ______ is ______.', ko: '오늘 배운 낱말로 나를 소개하는 두 문장 쓰기'}
  },

  talk: {
    hook: {en: 'What do you want to know about your new classmates?', ko: '새 반 친구들에 대해 무엇이 궁금한가요?', note: '이름, 좋아하는 것, 취미 등 궁금한 것을 모은다. 그 질문을 영어로 바꾸는 것이 오늘의 목표라고 말한다.'},
    speakers: {Yuna: {voice: 0, pitch: 1.15}, Ben: {voice: 1, pitch: 1}, Jisu: {voice: 0, pitch: 1.1}, Max: {voice: 1, pitch: .95}, 'Ms. Park': {voice: 2, pitch: 1.05}, Sora: {voice: 0, pitch: 1.1}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '인사하고 소개하기',
        key: {q: ['Hi, I’m ~.', 'This is my friend, ~.', 'Where are you from?'], a: ['Nice to meet you.', 'Nice to meet you, too.', 'I’m from ~.']},
        note: '다른 사람을 소개할 때는 This is ~. (He is ~.가 아님) 인사에는 Nice to meet you, too.로 답한다.',
        dialogs: [
          { title: 'Dialogue A', setting: '입학 첫날, 교실', lines: [
            {s: 'Yuna', en: 'Hi, {{I’m}} Yuna. What’s your name?', ko: '안녕, 나는 유나야. 너는 이름이 뭐니?'},
            {s: 'Ben', en: 'Hi, Yuna. I’m Ben. {{Nice to meet you}}.', ko: '안녕, 유나야. 나는 벤이야. 만나서 반가워.'},
            {s: 'Yuna', en: '{{Nice to meet you, too}}. {{Where are you from}}?', ko: '나도 만나서 반가워. 너는 어디에서 왔어?'},
            {s: 'Ben', en: '{{I’m from}} Canada. My family lives in Seoul now.', ko: '나는 캐나다에서 왔어. 우리 가족은 지금 서울에 살아.'},
            {s: 'Yuna', en: 'Welcome to our class!', ko: '우리 반에 온 걸 환영해!'}
          ]},
          { title: 'Dialogue B', setting: '쉬는 시간, 복도', lines: [
            {s: 'A', en: 'Sora, {{this is my friend}}, Max.', ko: '소라야, 이쪽은 내 친구 맥스야.'},
            {s: 'B', en: 'Hi, Max. Nice to meet you.', ko: '안녕, 맥스. 만나서 반가워.'},
            {s: 'A', en: 'Max is in the soccer club. He is very good at soccer.', ko: '맥스는 축구 동아리에 있어. 축구를 아주 잘해.'},
            {s: 'B', en: 'Cool! I like soccer, too.', ko: '멋지다! 나도 축구 좋아해.'}
          ]}
        ],
        check: [
          {q: 'Where is Ben from?', a: 'He is from Canada.'},
          {q: 'Where does Ben’s family live now?', a: 'They live in Seoul.'},
          {q: 'What club is Max in?', a: 'He is in the soccer club.'}
        ],
        drill: {frame: ['A: Hi, I’m Yuna. Where are you from?', 'B: I’m from ____.'], opts: ['Korea', 'Canada', 'Japan', 'Vietnam', 'Australia', 'Busan']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '좋아하는 것 묻고 답하기',
        key: {q: ['What’s your favorite ~?', 'Do you like ~?'], a: ['My favorite ~ is ~.', 'Yes, I do. / No, I don’t.', 'I like ~ a lot.']},
        note: 'Do you like ~?에는 Yes, I do. / No, I don’t.로 답한다. 3차시 일반동사(do, does)와 이어진다.',
        dialogs: [
          { title: 'Dialogue A', setting: '점심시간, 급식실', lines: [
            {s: 'Jisu', en: 'Max, {{what’s your favorite}} food?', ko: '맥스, 네가 가장 좋아하는 음식은 뭐야?'},
            {s: 'Max', en: '{{My favorite}} food {{is}} tteokbokki.', ko: '내가 가장 좋아하는 음식은 떡볶이야.'},
            {s: 'Jisu', en: 'Really? {{Do you like}} spicy food?', ko: '정말? 매운 음식 좋아해?'},
            {s: 'Max', en: '{{Yes, I do}}. How about you?', ko: '응, 좋아해. 너는?'},
            {s: 'Jisu', en: 'I like gimbap a lot. It’s not spicy!', ko: '나는 김밥을 정말 좋아해. 맵지 않거든!'}
          ]},
          { title: 'Dialogue B', setting: '방과 후, 교문 앞', lines: [
            {s: 'A', en: 'Do you like animals?', ko: '동물 좋아해?'},
            {s: 'B', en: '{{No, I don’t}}. I’m a little scared of dogs.', ko: '아니, 안 좋아해. 개가 조금 무서워.'},
            {s: 'A', en: 'Oh, I see. What’s your favorite hobby?', ko: '아, 그렇구나. 가장 좋아하는 취미는 뭐야?'},
            {s: 'B', en: 'My favorite hobby is reading comics.', ko: '내가 가장 좋아하는 취미는 만화책 읽기야.'}
          ]}
        ],
        check: [
          {q: 'What is Max’s favorite food?', a: 'It’s tteokbokki.'},
          {q: 'Does Jisu like gimbap?', a: 'Yes, she does.'},
          {q: 'What is B’s favorite hobby?', a: 'Reading comics.'}
        ],
        drill: {frame: ['A: What’s your favorite ____?', 'B: My favorite one is ...'], opts: ['color', 'food', 'sport', 'subject', 'animal', 'season']}
      }
    ],
    interviewEx: 'Hana is from Busan. Her favorite food is pizza.',
    watch: {
      label: 'Let’s Watch', title: 'The Name Game', setting: '첫 주 영어 시간. 박 선생님이 이름 외우기 게임을 한다.',
      lines: [
        {s: 'Ms. Park', en: 'Let’s play the name game. Say your name and your favorite thing.', ko: '이름 게임을 해 보자. 이름과 가장 좋아하는 것을 말해 보렴.'},
        {s: 'Sora', en: 'I’m Sora, and I like pizza.', ko: '나는 소라이고, 피자를 좋아해요.'},
        {s: 'Ben', en: 'She is Sora, and she likes pizza. I’m Ben, and I like soccer.', ko: '얘는 소라이고 피자를 좋아해요. 나는 벤이고 축구를 좋아해요.'},
        {s: 'Jisu', en: 'She is Sora, and he is Ben. I’m Jisu, and I like cats.', ko: '얘는 소라, 쟤는 벤이에요. 나는 지수이고 고양이를 좋아해요.'},
        {s: 'Ms. Park', en: 'Great job! Now you know three new friends.', ko: '잘했어! 이제 새 친구 세 명을 알게 됐구나.'}
      ],
      check: [
        {q: 'What does Sora like?', a: 'She likes pizza.'},
        {q: 'What does Ben like?', a: 'He likes soccer.'},
        {q: 'What does Jisu like?', a: 'She likes cats.'}
      ]
    },
    wrap: {en: 'Introduce yourself to a new friend and ask about their favorite thing.', ko: '새 친구에게 자기소개를 하고 가장 좋아하는 것을 물어보기'}
  },

  grammar: {
    cover: 'am · is · -s',
    hook: {en: 'I {{am}} Yuna. She {{is}} my friend.  /  She {{likes}} pizza.', ko: '빈칸에 들어갈 말은 주어에 따라 어떻게 바뀔까?', answer: 'I → am, She → is / She → likes (3인칭 단수 + -s)', note: '주어 I, She를 손으로 짚으며 동사가 주어에 따라 모양이 바뀐다는 점을 찾게 한다.'},
    points: [
      { id: 'g1', name: 'be동사 (am / are / is)', short: 'be동사', form: 'I am / You·We·They are / He·She·It is', meaning: '~이다, ~(에) 있다',
        notice: [
          {en: 'I {{am}} a new student.', ko: '나는 새로 온 학생이다.'},
          {en: 'You {{are}} my best friend.', ko: '너는 나의 가장 친한 친구야.'},
          {en: 'Ben {{is}} from Canada.', ko: '벤은 캐나다에서 왔다.'}
        ],
        rule: [
          {k: '주어별', v: 'I → am / you, we, they → are / he, she, it → is', ex: 'They are classmates.'},
          {k: '부정문', v: 'be동사 + not', ex: 'I am not shy. / He isn’t tall.'},
          {k: '의문문', v: 'Be동사 + 주어 ~?', ex: 'Are you a new student? — Yes, I am.'}
        ],
        compare: {
          title: '주어에 맞는 be동사', note: '줄임말(I’m, You’re, He’s)도 함께 읽게 한다.',
          head: ['am', 'are', 'is'],
          cols: [['I am', 'I’m', '—'], ['You are', 'We are', 'They are'], ['He is', 'She is', 'It is']]
        },
        check: [
          {q: 'I ____ thirteen years old. (be)', a: 'am'},
          {q: 'My friends ____ funny. (be)', a: 'are'},
          {q: 'Mr. Kim ____ our teacher. (be)', a: 'is'},
          {q: 'She ____ not shy. (be)', a: 'is'},
          {q: '____ you in the art club? (be)', a: 'Are'}
        ],
        trap: {bad: 'He are my classmate.', good: 'He is my classmate.', why: '주어가 he, she, it이면 be동사는 is.'},
        scramble: [
          {ko: '나는 축구 동아리에 있다.', en: 'I am in the soccer club.'},
          {ko: '그들은 매우 친절하다.', en: 'They are very friendly.'},
          {ko: '너는 새로 온 학생이니?', en: 'Are you a new student?'}
        ]
      },
      { id: 'g2', name: '일반동사의 현재형', short: '일반동사', form: '주어 + 동사원형 / 3인칭 단수 + 동사-s', meaning: '~하다',
        notice: [
          {en: 'I {{like}} soccer.', ko: '나는 축구를 좋아한다.'},
          {en: 'Max {{likes}} soccer, too.', ko: '맥스도 축구를 좋아한다.'},
          {en: 'She {{doesn’t like}} spicy food.', ko: '그녀는 매운 음식을 좋아하지 않는다.'}
        ],
        rule: [
          {k: '3인칭 단수', v: '동사 + -s / -es (go → goes, watch → watches, study → studies)', ex: 'He watches TV.'},
          {k: '부정문', v: 'don’t / doesn’t + 동사원형', ex: 'He doesn’t play games.'},
          {k: '의문문', v: 'Do / Does + 주어 + 동사원형 ~?', ex: 'Does she like cats? — Yes, she does.'}
        ],
        check: [
          {q: 'My brother ____ comics. (read)', a: 'reads'},
          {q: 'She ____ to school by bus. (go)', a: 'goes'},
          {q: 'They ____ soccer after school. (play)', a: 'play'},
          {q: 'He ____ like carrots. (부정)', a: 'doesn’t'},
          {q: '____ your sister have a dog? (의문)', a: 'Does'}
        ],
        trap: {bad: 'She don’t likes cats.', good: 'She doesn’t like cats.', why: '3인칭 단수 부정은 doesn’t + 동사원형.'},
        scramble: [
          {ko: '그는 방과 후에 기타를 친다.', en: 'He plays the guitar after school.'},
          {ko: '그녀는 동물을 좋아하지 않는다.', en: 'She doesn’t like animals.'},
          {ko: '너는 주말에 운동하니?', en: 'Do you exercise on weekends?'}
        ]
      }
    ],
    wrap: {en: 'I am ______. My friend ______s ______.', ko: 'be동사 한 문장, 일반동사(3인칭 단수) 한 문장으로 나와 친구 소개하기'},
    wrapEx: 'I am a member of the art club. My friend Minho plays basketball.'
  },

  reading: {
    title: 'Meet My New Classmates', kind: '학급 소개 게시판', cover: 'Hello', coverKo: '새 친구를 만나요', cover2: 'Friends', coverKo2: '달라도 함께',
    before: [
      {q: 'Look at the title. What will the students write about?', a: '자기소개 (이름, 좋아하는 것, 취미)'},
      {q: 'What do you write when you introduce yourself?', a: '이름, 나이, 좋아하는 것, 잘하는 것'}
    ],
    gloss: {board: '게시판', member: '회원, 일원', 'K-pop': '케이팝', dance: '춤, 춤추다', puzzles: '퍼즐', 'quiet': '조용한', 'tell jokes': '농담하다', 'say hi': '인사하다'},
    paras: [
      {who: '', en: 'Welcome to Class 1-3! This is our class board. Our new classmates are here. Let’s read about them and say hi!',
       ko: '1학년 3반에 온 걸 환영해요! 여기는 우리 반 게시판이에요. 새 반 친구들이 여기 있어요. 친구들에 대해 읽고 인사해요!',
       check: {q: 'What class is this?', a: 'Class 1-3.'}, think: '우리 반 게시판에는 무엇을 붙이면 좋을까?'},
      {who: 'Hana', en: 'Hi, I’m Hana. I am a member of the dance club. I love K-pop, and I dance every day. My favorite singer is IU. I am friendly, so please talk to me!',
       ko: '안녕, 나는 하나야. 나는 댄스 동아리 회원이야. 케이팝을 좋아하고 날마다 춤을 춰. 가장 좋아하는 가수는 아이유야. 나는 다정하니까 나한테 말 걸어 줘!',
       check: {q: 'What club is Hana in?', a: 'She is in the dance club.'}, think: '하나와 친해지려면 무슨 이야기를 하면 좋을까?'},
      {who: 'Leo', en: 'Hello, I’m Leo. I am from Vietnam, and I speak Korean a little. I like math and puzzles. I am a little shy, but I want to make a lot of friends here.',
       ko: '안녕, 나는 레오야. 나는 베트남에서 왔고 한국어를 조금 해. 수학이랑 퍼즐을 좋아해. 조금 수줍어하지만 여기서 친구를 많이 사귀고 싶어.',
       check: {q: 'Where is Leo from?', a: 'He is from Vietnam.'}, think: '수줍어하는 친구에게 먼저 다가가는 방법은?'},
      {who: 'Jimin', en: 'Hi, everyone! My name is Jimin. I play basketball after school. I am not tall, but I am fast! I also tell funny jokes. My friends say I am the class clown.',
       ko: '안녕, 얘들아! 내 이름은 지민이야. 나는 방과 후에 농구를 해. 키는 크지 않지만 빨라! 웃긴 농담도 해. 친구들은 내가 반의 개그맨이래.',
       check: {q: 'What does Jimin do after school?', a: 'He plays basketball.'}, think: '지민이의 장점은 무엇일까?'},
      {who: 'Yerin', en: 'Hello, I’m Yerin. I am quiet, and I love animals. I have two cats, Nabi and Bori. On weekends, I draw pictures of them. Do you like cats? Then let’s be friends!',
       ko: '안녕, 나는 예린이야. 나는 조용하고 동물을 좋아해. 나비랑 보리라는 고양이 두 마리가 있어. 주말에는 고양이 그림을 그려. 고양이 좋아하니? 그럼 우리 친구 하자!',
       check: {q: 'How many cats does Yerin have?', a: 'She has two cats.'}, think: '예린이와 공통점이 있는 친구는?'},
      {who: 'Our Class', en: 'Hana is outgoing, and Yerin is quiet. Leo likes math, and Jimin likes sports. We are all different, but that’s okay. Together, we are Class 1-3!',
       ko: '하나는 외향적이고 예린이는 조용해. 레오는 수학을 좋아하고 지민이는 운동을 좋아해. 우리는 모두 다르지만 괜찮아. 함께라면 우리는 1학년 3반이야!',
       check: {q: 'Are the classmates all the same?', a: 'No, they are all different.'}, think: '서로 다른 친구들이 함께하면 좋은 점은?'}
    ],
    split: 3,
    next: '지민이와 예린이는\n어떤 친구일까?',
    recap: {q: '하나와 레오는 어떤 친구일까?', items: [{k: 'HANA', v: 'dance club · loves K-pop · friendly'}, {k: 'LEO', v: 'from Vietnam · likes math · a little shy'}]},
    tf: [
      {p: 1, s: 'Hana dances every day.', a: true},
      {p: 1, s: 'Hana’s favorite singer is BTS.', a: false, why: '아이유를 가장 좋아한다.'},
      {p: 2, s: 'Leo speaks Korean very well.', a: false, why: '한국어를 조금 한다.'},
      {p: 3, s: 'Jimin is tall and fast.', a: false, why: '키는 크지 않지만 빠르다.'},
      {p: 4, s: 'Yerin draws pictures of her cats.', a: true},
      {p: 5, s: 'The classmates are all different.', a: true}
    ],
    key: [
      {en: 'I {{am}} a member of the dance club.', note: 'I + am', g: 'g1'},
      {en: 'I love K-pop, and I {{dance}} every day.', note: 'I + 동사원형', g: 'g2'},
      {en: 'I {{am}} a little shy, but I want to make friends.', note: 'be동사 + 형용사', g: 'g1'},
      {en: 'Jimin {{plays}} basketball after school.', note: '3인칭 단수 + -s', g: 'g2'},
      {en: 'I {{am not}} tall, but I {{am}} fast!', note: 'be동사 부정문', g: 'g1'},
      {en: '{{Do}} you {{like}} cats?', note: 'Do + 주어 + 동사원형 ~?', g: 'g2'}
    ],
    summary: {text: 'Hana is in the {{dance}} club. Leo is from {{Vietnam}}, and he likes math. Jimin {{plays}} basketball and tells funny jokes. Yerin {{has}} two cats. They are all {{different}}, but together they are Class 1-3.'},
    order: ['Leo came from Vietnam.', 'He came to Class 1-3.', 'He wrote on the class board.', 'He wants to make a lot of friends.'],
    chart: {title: 'NEW CLASSMATES', ko: '네 친구 정리하기', cols: ['Likes', 'Personality'], note: '표를 보고 He/She + 동사-s 문장으로 친구를 소개하게 한다.', rows: [
      {name: 'Hana', cells: ['K-pop, dance', 'friendly']},
      {name: 'Leo', cells: ['math, puzzles', 'a little shy']},
      {name: 'Jimin', cells: ['basketball, jokes', 'fast, funny']},
      {name: 'Yerin', cells: ['animals, drawing', 'quiet']}
    ]},
    wrap: {en: 'Hi, I’m ______. I am ______. I like ______. Let’s be friends!', ko: '관통 질문으로 돌아가기: 게시판에 올릴 나의 자기소개 쓰기'}
  },

  quiz: [
    ['“반 친구”를 뜻하는 낱말은?', ['club', 'grade', 'hobby', 'classmate'], 3, 'classmate: 반 친구'],
    ['“shy”의 반대말은?', ['funny', 'outgoing', 'friendly', 'different'], 1, 'shy ↔ outgoing'],
    ['“He is good ___ math.”', ['at', 'in', 'on', 'for'], 0, 'be good at: ~을 잘하다'],
    ['“Nice to meet you.”에 알맞은 대답은?', ['Me, too.', 'I’m fine.', 'Nice to meet you, too.', 'Thank you very much.'], 2, 'Nice to meet you, too.'],
    ['친구를 소개하는 표현은?', ['I’m Ben.', 'This is Max.', 'Where are you from?', 'What’s your name?'], 1, 'This is ~.'],
    ['“Do you like animals?”에 알맞은 대답은?', ['Yes, I am.', 'No, I don’t.', 'Yes, I like.', 'No, I’m not.'], 1, 'Do you ~? → Yes, I do. / No, I don’t.'],
    ['Let’s Watch에서 지수가 좋아하는 것은?', ['cats', 'pizza', 'soccer', 'comics'], 0, 'I’m Jisu, and I like cats.'],
    ['빈칸에 알맞은 것은? “My friends ___ funny.”', ['am', 'is', 'are', 'be'], 2, '복수 주어 + are'],
    ['빈칸에 알맞은 것은? “She ___ to school by bus.”', ['go', 'goes', 'going', 'to go'], 1, '3인칭 단수 + goes'],
    ['어법상 틀린 문장은?', ['I am shy.', 'He plays soccer.', 'She don’t like cats.', 'They are my friends.'], 2, 'She doesn’t like cats.'],
    ['빈칸에 알맞은 것은? “___ your sister have a dog?”', ['Is', 'Do', 'Are', 'Does'], 3, '3인칭 단수 의문문: Does'],
    ['하나가 가장 좋아하는 가수는?', ['IU', 'BTS', 'Leo', 'Jimin'], 0, 'My favorite singer is IU.'],
    ['레오가 좋아하는 것은?', ['춤과 노래', '농구와 농담', '고양이와 그림', '수학과 퍼즐'], 3, 'I like math and puzzles.'],
    ['예린이가 주말에 하는 일은?', ['농구 연습하기', '춤 연습하기', '고양이 그림 그리기', '친구와 퍼즐 맞추기'], 2, 'I draw pictures of them.'],
    ['글의 요지로 알맞은 것은?', ['고양이를 키우면 좋다', '수줍음은 고쳐야 한다', '운동을 열심히 해야 한다', '달라도 함께할 수 있다'], 3, 'We are all different, but that’s okay.']
  ]
};
