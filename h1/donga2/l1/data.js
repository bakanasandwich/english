/* 고1 공통영어2(동아·이병민) Lesson 1 · Love Yourself
   교과서 대조(2026-10): 읽기 주제(Are You a Good Eater? — 나쁜 식습관 유형과 고치는 법)를 교과서에 맞췄다.
   의사소통 기능·언어 형식은 교과서 자료를 구하지 못해 단원 주제에 맞춘 추정(estimate: true).
   대화문·읽기 글은 저작권 때문에 교과서 원문을 싣지 않고, 같은 주제로 새로 쓴 글이다. */
window.LESSON = {
  book: 'h1b-donga', no: 1, estimate: true,
  title: 'Love Yourself', ko: '너 자신을 사랑하라',
  bigQ: {en: 'How can we take care of ourselves, starting with how we eat?', ko: '먹는 습관부터 시작해서, 우리는 어떻게 자신을 돌볼 수 있을까?'},
  align: {
    tb: {reading: 'Are You a Good Eater?', note: '교과서 읽기는 스트레스성 폭식, 빨리 먹기, 생각 없이 먹기 등 나쁜 식습관 유형과 고치는 법을 소개하는 글. 여기 본문은 같은 주제로 네 가지 유형(스트레스 간식형, 끼니 거르는 형, 화면 보며 먹는 형, 편식형)을 새로 쓴 글이다. 의사소통 기능·언어 형식은 교과서 자료가 없어 추정이다.'},
    std: {vocab: ['10공영2-01-05', '10공영2-02-06'], talk: ['10공영2-01-03', '10공영2-02-08'], grammar: ['10공영2-02-04'], read1: ['10공영2-01-01', '10공영2-01-02'], read2: ['10공영2-01-06', '10공영2-02-05']},
    forms: ['To-Infinitive', 'Gerunds', 'Unreal Conditionals']
  },
  goals: {
    vocab: ['식습관·건강과 관련된 낱말 16개의 뜻과 발음(강세)을 익힌다.', 'over-, -ful, nutri- 같은 조각으로 overeat, mindful, nutrient를 분석할 수 있다.'],
    talk: ['힘들어하는 친구를 위로하고 격려할 수 있다.', '고민에 대해 조언을 구하고, If I were you ~ 등으로 조언할 수 있다.'],
    grammar: ['to부정사는 “앞으로 할 일”, 동명사는 “이미 하고 있거나 한 일”이라는 원리로 목적어 형태를 고를 수 있다.', '가정법이 “시제를 한 칸 과거로 밀어 현실과 거리를 두는 것”이라는 원리로 가정법 과거·과거완료를 쓸 수 있다.'],
    read1: ['나쁜 식습관 유형의 문제와 해결책을 파악할 수 있다.'],
    read2: ['네 가지 유형을 비교하고, 나의 식습관을 돌아보는 글을 가정법을 넣어 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'What do you eat when you are stressed?', ko: '스트레스를 받으면 무엇을 먹나요?', note: '떡볶이, 라면, 초콜릿 등 답이 나온다. “그 음식을 먹고 나면 기분이 정말 나아지나?”로 이어 묻는다.'},
    words: [
      {w: 'habit', pos: 'n.', ko: '습관', ic: '🔁', ipa: '/ˈhæbɪt/', audio: 'assets/audio/habit.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Skipping breakfast is a bad habit.', exKo: '아침을 거르는 것은 나쁜 습관이다.'},
      {w: 'appetite', pos: 'n.', ko: '식욕', ic: '🍽️', ipa: '/ˈæpɪtaɪt/', audio: 'assets/audio/appetite.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Stress can change your appetite.', exKo: '스트레스는 식욕을 바꿀 수 있다.'},
      {w: 'crave', pos: 'v.', ko: '몹시 원하다, 갈망하다', ic: '🤤', ipa: '/kreɪv/', audio: 'assets/audio/crave.mp3', audioCredit: 'Mx. Granger · CC0 (Wikimedia Commons, US)', ex: 'I crave something spicy before exams.', exKo: '나는 시험 전에 매운 것이 몹시 당긴다.'},
      {w: 'skip', pos: 'v.', ko: '거르다, 건너뛰다', ic: '⏭️', ipa: '/skɪp/', ex: 'Don’t skip breakfast.', exKo: '아침을 거르지 마라.'},
      {w: 'nutrient', pos: 'n.', ko: '영양소', ic: '🥦', img: {src: 'h1/donga2/l1/img/w-nutrient.jpg', credit: 'Trace Nietert · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/53553325@N06/8543057650'}, ipa: '/ˈnuːtriənt/', ex: 'Vegetables are full of nutrients.', exKo: '채소에는 영양소가 가득하다.'},
      {w: 'balanced', pos: 'adj.', ko: '균형 잡힌', ic: '⚖️', ipa: '/ˈbælənst/', ex: 'Eat a balanced meal every day.', exKo: '날마다 균형 잡힌 식사를 하라.'},
      {w: 'portion', pos: 'n.', ko: '(음식의) 1인분, 몫', ic: '🥣', img: {src: 'h1/donga2/l1/img/w-portion.jpg', credit: 'Nicola since 1972 · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/15216811@N06/5398771984'}, ipa: '/ˈpɔːrʃn/', audio: 'assets/audio/portion.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Put a small portion on your plate.', exKo: '접시에 적은 양을 덜어라.'},
      {w: 'digest', pos: 'v.', ko: '소화하다', ic: '🫄', ipa: '/daɪˈdʒest/', ex: 'Chew slowly to digest your food better.', exKo: '음식을 더 잘 소화하려면 천천히 씹어라.'},
      {w: 'overeat', pos: 'v.', ko: '과식하다', ic: '🍔', ipa: '/ˌoʊvərˈiːt/', ex: 'People often overeat when they are tired.', exKo: '사람들은 피곤할 때 자주 과식한다.'},
      {w: 'mindful', pos: 'adj.', ko: '마음을 챙기는, 알아차리는', ic: '🧘', ipa: '/ˈmaɪndfl/', audio: 'assets/audio/mindful.mp3', audioCredit: 'Steve Shives · CC0 (Wikimedia Commons, US)', ex: 'Be mindful of what you eat.', exKo: '무엇을 먹는지 의식하라.'},
      {w: 'satisfy', pos: 'v.', ko: '만족시키다, 채우다', ic: '😌', ipa: '/ˈsætɪsfaɪ/', ex: 'Chips never satisfy my hunger.', exKo: '감자칩은 결코 내 배고픔을 채워 주지 않는다.'},
      {w: 'guilt', pos: 'n.', ko: '죄책감', ic: '😔', ipa: '/ɡɪlt/', ex: 'He felt guilt after eating the whole cake.', exKo: '그는 케이크를 다 먹고 죄책감을 느꼈다.'},
      {w: 'relieve', pos: 'v.', ko: '(고통·스트레스를) 덜다', ic: '🌬️', ipa: '/rɪˈliːv/', audio: 'assets/audio/relieve.mp3', audioCredit: 'TreeMama · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'A short walk can relieve stress.', exKo: '짧은 산책은 스트레스를 덜어 줄 수 있다.'},
      {w: 'aware', pos: 'adj.', ko: '알고 있는, 인식하는', ic: '💡', ipa: '/əˈwer/', ex: 'Many people aren’t aware of their eating habits.', exKo: '많은 사람이 자신의 식습관을 알아차리지 못한다.'},
      {w: 'picky', pos: 'adj.', ko: '까다로운, 편식하는', ic: '🙅', ipa: '/ˈpɪki/', ex: 'My little brother is a picky eater.', exKo: '내 남동생은 편식을 한다.'},
      {w: 'flavor', pos: 'n.', ko: '맛, 풍미', ic: '🌶️', img: {src: 'h1/donga2/l1/img/w-flavor.jpg', credit: 'dynamosquito · CC BY-SA 2.0 (Flickr)', link: 'https://www.flickr.com/photos/25182210@N07/3985621955'}, ipa: '/ˈfleɪvər/', ex: 'This soup has a strong flavor.', exKo: '이 수프는 맛이 강하다.'}
    ],
    morph: [
      {w: 'overeat', ko: '과식하다', parts: [{t: 'over', k: 'pre', m: '지나치게'}, {t: 'eat', k: 'root', m: '먹다'}], family: ['oversleep', 'overwork', 'overuse'], note: 'over- = 지나치게, 넘어서 (oversleep 늦잠 자다).'},
      {w: 'mindful', ko: '마음을 챙기는', parts: [{t: 'mind', k: 'root', m: '마음'}, {t: 'ful', k: 'suf', m: '~이 가득한'}], family: ['mindfulness', 'mindless', 'careful'], note: '-ful = 가득한, -less = 없는. mindless eating = 생각 없이 먹기.'},
      {w: 'nutrient', ko: '영양소', parts: [{t: 'nutri', k: 'root', m: '먹이다, 기르다'}, {t: 'ent', k: 'suf', m: '~하는 것 (명사)'}], family: ['nutrition', 'nutritious', 'nurse'], note: 'nutri- = 먹여 기르다. nutrition 영양, nutritious 영양가 높은.'},
      {w: 'balanced', ko: '균형 잡힌', parts: [{t: 'balance', k: 'root', m: '균형'}, {t: 'd', k: 'suf', m: '~된 (형용사)'}], family: ['balance', 'unbalanced', 'imbalance'], note: '명사·동사 + -ed가 “~된” 상태의 형용사가 된다. un-이 붙으면 반대.'}
    ],
    phrases: [
      {w: 'turn to', ko: '~에 의지하다, ~을 찾다', ex: 'Many people turn to food when stressed.', exKo: '많은 사람이 스트레스를 받으면 음식을 찾는다.'},
      {w: 'be aware of', ko: '~을 알다, 의식하다', ex: 'Be aware of how much you eat.', exKo: '얼마나 먹는지 의식하라.'},
      {w: 'in a hurry', ko: '서둘러, 급히', ex: 'Don’t eat in a hurry.', exKo: '급히 먹지 마라.'},
      {w: 'have a sweet tooth', ko: '단것을 좋아하다', ex: 'I have a sweet tooth.', exKo: '나는 단것을 좋아한다.'},
      {w: 'be hard on oneself', ko: '자신에게 엄격하다', ex: 'Don’t be too hard on yourself.', exKo: '너 자신에게 너무 엄격하게 굴지 마.'},
      {w: 'take care of', ko: '~을 돌보다', ex: 'Take care of your body like a friend.', exKo: '친구를 대하듯 네 몸을 돌봐라.'}
    ],
    pairs: [
      {a: 'balanced', b: 'unbalanced', rel: '반대말 (un-)'},
      {a: 'mindful', b: 'mindless', rel: '반대말 (-ful / -less)'},
      {a: 'nutrient', b: 'nutritious', rel: '명사 / 형용사'},
      {a: 'eat', b: 'overeat', rel: '먹다 / 과식하다 (over-)'}
    ],
    wrap: {en: 'One eating habit I want to change is ______. Instead, I will try to ______.', ko: '오늘 배운 낱말로 바꾸고 싶은 식습관 한 가지 쓰기'}
  },

  talk: {
    hook: {en: 'When you feel down, what helps you feel better?', ko: '기분이 가라앉을 때 무엇이 도움이 되나요?', note: '음악, 친구와의 대화, 산책 등을 모은다. “친구가 힘들어할 때 뭐라고 말해 주나?”로 위로·격려 표현을 예고한다.'},
    speakers: {Ara: {voice: 0, pitch: 1.1}, Sam: {voice: 1, pitch: 1}, 'Ms. Yoon': {voice: 2, pitch: 1.05}, Dylan: {voice: 1, pitch: .95}, Mia: {voice: 0, pitch: 1.15}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Speak 1', func: '위로·격려하기',
        key: {q: ['What’s wrong? You look down.', 'Is everything okay?'], a: ['I’m sorry to hear that.', 'That must be hard.', 'Don’t be too hard on yourself. You did your best.']},
        note: '위로는 먼저 공감(I’m sorry to hear that / That must be hard), 그다음 격려(You did your best / You’ll do better next time) 순서로.',
        dialogs: [
          { title: 'Dialogue A', setting: '시험 결과가 나온 날, 복도', lines: [
            {s: 'Sam', en: 'Ara, {{what’s wrong}}? {{You look down}}.', ko: '아라야, 무슨 일이야? 기분이 안 좋아 보여.'},
            {s: 'Ara', en: 'I got my math test back. I studied so hard, but I failed.', ko: '수학 시험지를 돌려받았어. 정말 열심히 공부했는데 낙제했어.'},
            {s: 'Sam', en: '{{I’m sorry to hear that}}. {{That must be hard}}.', ko: '안됐다. 정말 속상하겠다.'},
            {s: 'Ara', en: 'I keep telling myself I’m just not smart enough.', ko: '나는 그냥 머리가 안 좋다고 계속 스스로에게 말하게 돼.'},
            {s: 'Sam', en: '{{Don’t be too hard on yourself}}. One test doesn’t decide who you are.', ko: '너 자신에게 너무 가혹하게 굴지 마. 시험 하나가 네가 누구인지 정하진 않아.'},
            {s: 'Ara', en: 'Thanks, Sam. I needed to hear that.', ko: '고마워, 샘. 그 말이 필요했어.'}
          ]},
          { title: 'Dialogue B', setting: '농구 경기가 끝난 뒤', lines: [
            {s: 'A', en: 'I missed the last shot. We lost because of me.', ko: '내가 마지막 슛을 놓쳤어. 나 때문에 졌어.'},
            {s: 'B', en: 'Hey, {{you did your best}}. Nobody wins every game.', ko: '야, 넌 최선을 다했어. 매 경기 이기는 사람은 없어.'},
            {s: 'A', en: 'But everyone was counting on me.', ko: '그래도 다들 나를 믿고 있었잖아.'},
            {s: 'B', en: 'And they still are. {{Cheer up}}! We’ll practice together this weekend.', ko: '지금도 그래. 힘내! 이번 주말에 같이 연습하자.'}
          ]}
        ],
        check: [
          {q: 'Why is Ara upset?', a: 'Because she failed her math test.'},
          {q: 'What does Ara keep telling herself?', a: 'That she is not smart enough.'},
          {q: 'What does B suggest at the end?', a: 'Practicing together this weekend.'}
        ],
        drill: {frame: ['A: I ____.', 'B: I’m sorry to hear that. Don’t be too hard on yourself.'], opts: ['failed my test', 'lost the game', 'forgot my lines', 'had a fight with my friend', 'didn’t get the part', 'missed the bus']}
      },
      { id: 'lt2', label: 'Listen & Speak 2', func: '조언 구하고 하기',
        key: {q: ['What should I do?', 'Can you give me some advice?', 'Do you have any tips?'], a: ['You should ~.', 'If I were you, I would ~.', 'Why don’t you ~?']},
        note: 'If I were you, I would ~.는 3차시 가정법 과거와 이어진다. 주어가 I여도 were를 쓴다.',
        dialogs: [
          { title: 'Dialogue A', setting: '상담실', lines: [
            {s: 'Dylan', en: 'Ms. Yoon, I always compare myself with my friends on social media. {{What should I do}}?', ko: '윤 선생님, 저는 늘 SNS에서 친구들과 저를 비교해요. 어떻게 해야 할까요?'},
            {s: 'Ms. Yoon', en: 'Remember that people only post their best moments.', ko: '사람들은 가장 좋은 순간만 올린다는 걸 기억하렴.'},
            {s: 'Dylan', en: 'I know, but I still feel small. {{Can you give me some advice}}?', ko: '알지만 그래도 작아지는 기분이에요. 조언 좀 해 주시겠어요?'},
            {s: 'Ms. Yoon', en: '{{If I were you, I would}} stop checking the app before bed.', ko: '내가 너라면 자기 전에는 그 앱을 그만 보겠어.'},
            {s: 'Dylan', en: 'That makes sense. I’ll try it tonight.', ko: '맞는 말씀이에요. 오늘 밤부터 해 볼게요.'}
          ]},
          { title: 'Dialogue B', setting: '방과 후, 운동장 벤치', lines: [
            {s: 'Mia', en: 'I’m so stressed about the speech contest. {{Do you have any tips}}?', ko: '말하기 대회 때문에 너무 스트레스 받아. 팁 있어?'},
            {s: 'Sam', en: '{{Why don’t you}} practice in front of a mirror?', ko: '거울 앞에서 연습해 보는 게 어때?'},
            {s: 'Mia', en: 'I tried that, but I kept noticing my mistakes.', ko: '해 봤는데 계속 내 실수만 눈에 띄더라.'},
            {s: 'Sam', en: 'Then {{you should}} record yourself and listen to the good parts first.', ko: '그럼 녹음해서 잘한 부분부터 들어 봐.'}
          ]}
        ],
        check: [
          {q: 'What is Dylan’s problem?', a: 'He always compares himself with his friends on social media.'},
          {q: 'What does Ms. Yoon advise?', a: 'To stop checking the app before bed.'},
          {q: 'What does Sam finally suggest to Mia?', a: 'Recording herself and listening to the good parts first.'}
        ],
        drill: {frame: ['A: I ____. What should I do?', 'B: If I were you, I would ...'], opts: ['can’t sleep well', 'feel nervous before exams', 'compare myself with others', 'have too much homework', 'feel lonely at my new school', 'get angry easily']}
      }
    ],
    interviewEx: 'Jae worries about his grades. I told him, “If I were you, I would focus on what you learned, not just the score.”',
    watch: {
      label: 'Let’s Watch', title: 'The Letter in the Locker', setting: '사물함에서 쪽지를 발견한 미아. 보낸 사람은 뜻밖에도…',
      lines: [
        {s: 'Mia', en: 'There’s a letter in my locker. “Dear Mia, I know you’re trying so hard.”', ko: '사물함에 편지가 있어. “미아에게, 네가 정말 열심히 하고 있다는 거 알아.”'},
        {s: 'Ara', en: 'Who wrote it?', ko: '누가 썼어?'},
        {s: 'Mia', en: 'Wait… this is my handwriting. Oh! I remember writing it in Ms. Yoon’s class last month.', ko: '잠깐… 이거 내 글씨야. 아! 지난달 윤 선생님 수업 시간에 쓴 게 기억나.'},
        {s: 'Ara', en: 'She told us to write a letter to our future selves.', ko: '선생님이 미래의 나에게 편지를 쓰라고 하셨지.'},
        {s: 'Mia', en: '“You don’t have to be perfect to be loved.” I really needed to read this today.', ko: '“사랑받기 위해 완벽할 필요는 없어.” 오늘 이걸 정말 읽어야 했어.'}
      ],
      check: [
        {q: 'Who wrote the letter?', a: 'Mia wrote it to herself.'},
        {q: 'When did Mia write the letter?', a: 'In Ms. Yoon’s class last month.'},
        {q: 'What does the letter say?', a: '“You don’t have to be perfect to be loved.”'}
      ]
    },
    wrap: {en: 'Comfort your partner and give advice about a worry.', ko: '짝의 고민을 듣고 위로하고 조언하기'}
  },

  grammar: {
    cover: 'to-v / -ing · If I were',
    hook: {en: 'I remember {{writing}} it last month.  /  {{If I were}} you, I {{would}} stop checking the app.', ko: '첫 문장에서 편지를 쓴 일은 과거일까 미래일까? 두 번째 문장에서 I 뒤에 왜 were를 썼을까?', answer: 'remember writing = 이미 한 일을 기억하다 / If I were you = 지금 사실과 반대(나는 네가 아니다) → 시제를 과거로', note: '2차시 대화와 Let’s Watch의 문장이다. “remember to write와는 뜻이 어떻게 다를까?”를 함께 물어 둔다.'},
    points: [
      { id: 'g1', name: 'to부정사·동명사 목적어', short: 'to-v / -ing', form: '동사 + to V (앞으로 할 일) / 동사 + -ing (하고 있는·한 일)', meaning: 'remember to V: ~할 것을 기억하다 / remember -ing: ~한 것을 기억하다',
        notice: [
          {en: 'I decided {{to stop}} comparing myself with others.', ko: '나는 다른 사람과 나를 비교하는 것을 그만두기로 결심했다.'},
          {en: 'Remember {{to be}} kind to yourself.', ko: '너 자신에게 친절할 것을 기억해라.'},
          {en: 'I remember {{writing}} the letter.', ko: '나는 그 편지를 쓴 것을 기억한다.'}
        ],
        principle: {
          q: '같은 remember인데 왜 to와 -ing의 뜻이 다를까?',
          pic: [{en: '-ing', ko: '이미 한 일 · 하고 있는 일', hot: true}, {en: 'NOW', ko: '지금'}, {en: 'to V', ko: '앞으로 할 일', hot: true}],
          core: 'to부정사의 to는 “~쪽으로”라는 방향 — 아직 하지 않은 미래의 일을 가리킨다. 동명사(-ing)는 이미 하고 있거나 한 일 — 현실의 경험을 가리킨다.',
          why: ['want, hope, decide, plan, promise처럼 “앞을 보는” 동사는 to부정사를 좋아한다.', 'enjoy, finish, avoid, mind, give up처럼 “이미 하고 있는 일”을 다루는 동사는 동명사를 좋아한다.', 'remember, forget, regret, stop, try는 둘 다 쓰지만 뜻이 달라진다 — 시간의 방향을 보면 구별된다.']
        },
        anim: [
          {title: 'remember: 할 일? 한 일?', why: '목적어 형태만 바뀌어도 시간의 방향이 바뀐다.', states: [
            {t: 'Remember/V#rem | to lock/X#lock | the door/O#door | .', note: 'to V = 앞으로 할 일 → 문 잠그는 것 잊지 마!', ko: '문 잠글 것을 기억해.'},
            {t: 'I | remember/V#rem | locking/X#lock | the door/O#door | .', note: '-ing = 이미 한 일 → 문을 잠갔던 기억이 있다', ko: '나는 문을 잠근 것을 기억한다.'}]},
          {title: 'stop: 멈추고 하다? 하던 걸 멈추다?', states: [
            {t: 'She | stopped/V#stop | to check/X#check | her phone/O#ph | .', note: 'stop + to V = ~하려고 (하던 일을) 멈추다', ko: '그녀는 휴대전화를 확인하려고 멈췄다.'},
            {t: 'She | stopped/V#stop | checking/X#check | her phone/O#ph | .', note: 'stop + -ing = 하던 일을 그만두다', ko: '그녀는 휴대전화 확인하는 것을 그만두었다.'}]}
        ],
        contrast: {title: '뜻이 달라지는 동사들', pairs: [
          {a: 'I forgot {{to call}} her.', ka: '그녀에게 전화할 것을 잊었다. (전화 안 함)', b: 'I’ll never forget {{calling}} her.', kb: '그녀에게 전화했던 것을 절대 잊지 못할 것이다. (전화함)'},
          {a: 'Try {{to sleep}} early.', ka: '일찍 자려고 노력해 봐. (노력)', b: 'Try {{writing}} a letter to yourself.', kb: '너 자신에게 편지를 (시험 삼아) 써 봐. (시도)'}],
          point: 'to V는 아직 하지 않은 일, -ing는 이미 했거나 하고 있는 일.'},
        rule: [
          {k: 'to V만', v: 'want, hope, decide, plan, promise, expect, refuse', ex: 'I decided to forgive myself.'},
          {k: '-ing만', v: 'enjoy, finish, avoid, mind, give up, keep, practice', ex: 'Keep trying. Don’t give up practicing.'},
          {k: '뜻이 달라짐', v: 'remember / forget / regret / stop / try', ex: 'I regret saying that. (말한 것을 후회)'},
          {k: '뜻 같음', v: 'like, love, begin, start, continue', ex: 'It began to rain. = It began raining.'}
        ],
        check: [
          {q: 'I enjoy ____ (write) in my diary.', a: 'writing'},
          {q: 'She promised ____ (be) kinder to herself.', a: 'to be'},
          {q: 'Don’t forget ____ (take) a break. (앞으로 할 일)', a: 'to take'},
          {q: 'I regret ____ (say) such harsh words. (이미 한 일)', a: 'saying'},
          {q: 'He gave up ____ (compare) himself with others.', a: 'comparing'}
        ],
        trap: {bad: 'I finally decided stopping blaming myself.', good: 'I finally decided to stop blaming myself.', why: 'decide는 앞으로 할 일을 정하는 동사 → to부정사. stop 뒤의 blaming(하던 일)은 동명사로 맞다.'},
        scramble: [
          {ko: '나는 거울 앞에서 연습하는 것을 그만두었다.', en: 'I stopped practicing in front of the mirror.'},
          {ko: '자신에게 친절할 것을 기억해라.', en: 'Remember to be kind to yourself.'},
          {ko: '나는 그 편지를 쓴 것을 기억한다.', en: 'I remember writing the letter.'}
        ]
      },
      { id: 'g2', name: '가정법 과거·과거완료', short: '가정법', form: 'If + 주어 + 과거형(were), 주어 + would + 동사원형 / If + 주어 + had p.p., 주어 + would have p.p.', meaning: '(지금) ~라면 …할 텐데 / (그때) ~했다면 …했을 텐데',
        notice: [
          {en: '{{If I were}} you, I {{would}} stop checking the app.', ko: '내가 너라면 그 앱을 그만 볼 텐데.'},
          {en: '{{If I had known}} you were sad, I {{would have called}} you.', ko: '네가 슬펐다는 걸 알았다면 너에게 전화했을 텐데.'},
          {en: 'I {{wish}} I {{were}} more patient with myself.', ko: '내가 나 자신에게 더 너그러우면 좋을 텐데.'}
        ],
        principle: {
          q: '지금 이야기인데 왜 과거형(were)을 쓸까?',
          pic: [{en: 'real', ko: '현실'}, {en: '← one step back', ko: '시제를 한 칸 과거로', arrow: ''}, {en: 'unreal', ko: '상상 (현실과 거리)', hot: true}],
          core: '가정법은 시제를 한 칸 과거로 밀어서 “이건 현실이 아니야”라는 거리를 표시한다. 시간의 거리가 곧 현실과의 거리다.',
          why: ['지금 사실과 반대 → 현재를 한 칸 밀어 과거형(가정법 과거): If I were you …', '과거 사실과 반대 → 과거를 한 칸 밀어 과거완료(가정법 과거완료): If I had known …', 'be동사는 주어와 상관없이 were를 쓰는 것이 원칙이다 — “현실의 문법”에서 벗어났다는 표시.'],
          note: '기출 듣기: “How would you feel if you were her?” (2024학년도 수능 2번). 어법: “Imagine if we ① had to consider every single muscle …” (2025학년도 수능 29번, 맞는 선택지).'
        },
        anim: [
          {title: '현실 → 상상: 시제를 한 칸 과거로', why: '현재 시제가 과거형으로 밀려나는 모습.', states: [
            {t: 'I/S | am not/V#be | you/C#you | , | so | I | can’t tell/V#tell | her/O#her | .', note: '현실: 나는 네가 아니다', ko: '나는 네가 아니라서 그녀에게 말할 수 없다.'},
            {t: 'If/X | I/S | were/X#be | you/C#you | , | I | would tell/X#tell | her/O#her | .', note: '상상: am → were, can’t → would (한 칸 과거로)', ko: '내가 너라면 그녀에게 말할 텐데.'}]},
          {title: '과거 사실의 반대: had p.p. + would have p.p.', states: [
            {t: 'I | didn’t know/V#know | you were sad | , | so | I | didn’t call/V#call | you | .', note: '과거의 현실', ko: '네가 슬펐다는 걸 몰라서 전화하지 않았다.'},
            {t: 'If/X | I | had known/X#know | you were sad | , | I | would have called/X#call | you | .', note: '과거를 한 칸 더 과거로: didn’t know → had known', ko: '네가 슬펐다는 걸 알았다면 전화했을 텐데.'}]}
        ],
        contrast: {title: '조건문 vs 가정법 — 가능성이 있나?', pairs: [
          {a: 'If it {{rains}} tomorrow, we {{will}} stay home.', ka: '내일 비가 오면 집에 있을 거야. (실제로 일어날 수 있음 → 조건문)', b: 'If I {{were}} a bird, I {{would}} fly to you.', kb: '내가 새라면 너에게 날아갈 텐데. (불가능 → 가정법)'},
          {a: 'If I {{were}} you, I {{would}} apologize.', ka: '(지금) 내가 너라면 사과할 텐데.', b: 'If I {{had been}} you, I {{would have apologized}}.', kb: '(그때) 내가 너였다면 사과했을 텐데.'}],
          point: '일어날 수 있으면 조건문(현재형), 현실과 반대면 가정법(한 칸 과거).'},
        rule: [
          {k: '가정법 과거', v: 'If + S + 과거형(were), S + would/could + V', ex: 'If I had more time, I would sleep more.'},
          {k: '가정법 과거완료', v: 'If + S + had p.p., S + would/could have p.p.', ex: 'If I had practiced, I could have won.'},
          {k: 'I wish', v: 'I wish + 과거형(지금) / had p.p.(그때)', ex: 'I wish I had told her the truth.'},
          {k: 'as if', v: 'as if + 과거형 / had p.p.', ex: 'He talks as if he knew everything.'}
        ],
        check: [
          {q: 'If I ____ (be) you, I would talk to the teacher.', a: 'were'},
          {q: 'If I had more time, I ____ (will) read more books.', a: 'would'},
          {q: 'If she ____ (study) harder, she would have passed.', a: 'had studied'},
          {q: 'I wish I ____ (can) sing like you.', a: 'could'},
          {q: 'If it ____ (rain) tomorrow, we will stay home. (조건문)', a: 'rains'}
        ],
        trap: {bad: 'If I was you, I will apologize.', good: 'If I were you, I would apologize.', why: '현실과 반대인 가정 → if절은 과거형(be동사는 were), 주절은 would + 동사원형.'},
        scramble: [
          {ko: '내가 너라면 나 자신에게 더 친절할 텐데.', en: 'If I were you, I would be kinder to myself.'},
          {ko: '그때 알았다면 너를 도왔을 텐데.', en: 'If I had known, I would have helped you.'},
          {ko: '내가 더 용감하면 좋을 텐데.', en: 'I wish I were braver.'}
        ]
      }
    ],
    wrap: {en: 'I want to stop ______. If I were my own best friend, I would ______.', ko: '동명사·to부정사 한 문장, 가정법 한 문장으로 나에게 하는 다짐 쓰기'},
    wrapEx: 'I want to stop comparing myself with others. If I were my own best friend, I would tell myself, “You are doing fine.”'
  },

  reading: {
    title: 'Be Kind to Yourself at the Table', kind: '건강 잡지 기사', cover: 'Eat', coverKo: '나를 돌보는 식습관', cover2: 'Kind', coverKo2: '식탁에서 나에게 친절하기',
    before: [
      {q: 'Is the way you eat as important as what you eat?', a: '천천히·제때·집중해서 먹는 것도 중요하다는 답을 이끌어 낸다.'},
      {q: 'Do you have any eating habits you want to change?', a: '야식, 아침 거르기, 휴대전화 보며 먹기, 편식 등'}
    ],
    gloss: {'stress snacker': '스트레스 간식형', 'meal skipper': '끼니 거르는 형', 'screen eater': '화면 보며 먹는 형', 'picky eater': '편식하는 사람', 'fuel': '연료', 'scroll': '(화면을) 넘기다', 'texture': '식감', 'willpower': '의지력'},
    paras: [
      {who: '', en: 'Loving yourself is not only about kind words. It is also about how you treat your body every day, and that starts at the table. Many of us have eating habits that we are not even aware of. Read about four common types of eaters, and see if you recognize yourself.',
       ko: '자신을 사랑하는 것은 친절한 말에만 관한 것이 아니다. 날마다 자기 몸을 어떻게 대하느냐에 관한 것이기도 하며, 그것은 식탁에서 시작된다. 우리 중 많은 사람이 스스로 알아차리지도 못하는 식습관을 가지고 있다. 흔한 네 가지 유형의 식습관에 대해 읽고, 자신의 모습이 보이는지 살펴보라.',
       check: {q: 'Where does loving yourself start, according to the writer?', a: 'At the table (with how you treat your body).'}, think: '내가 알아차리지 못한 식습관이 있을까?',
       bg: {src: 'h1/donga2/l1/img/r-p0.jpg', credit: 'futureshape · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/55231259@N00/6818430659', about: '식탁 위에 차려진 음식'}},
      {who: 'The Stress Snacker', en: 'You have three tests this week, and you feel you aren’t ready. Suddenly, you crave something salty or spicy. Stress snackers turn to food to feel better for a moment. The problem is that the snack never solves the stress. When the bag is empty, the tests are still there, and now guilt has joined them.',
       ko: '이번 주에 시험이 세 개 있는데 준비가 안 된 것 같다. 갑자기 짜거나 매운 것이 몹시 당긴다. 스트레스 간식형은 잠깐 기분이 나아지려고 음식을 찾는다. 문제는 간식이 결코 스트레스를 해결해 주지 않는다는 것이다. 봉지가 비고 나면 시험은 여전히 그대로이고, 이제 죄책감까지 더해진다.',
       check: {q: 'What is the problem with stress snacking?', a: 'The snack never solves the stress, and guilt joins it.'}, think: '스트레스를 받을 때 나는 무엇을 먹나?'},
      {who: 'The Stress Snacker', en: 'Before you open a snack, try to name your feeling: “I’m worried, not hungry.” Then do something else for five minutes. Take a short walk, or remember to drink a glass of water. If you gave your body a break instead of a snack, you would find that the craving often goes away.',
       ko: '간식을 뜯기 전에 자기 감정에 이름을 붙여 보라. “나는 배고픈 게 아니라 걱정되는 거야.” 그런 다음 5분 동안 다른 일을 해 보라. 짧게 걸어 보거나, 물 한 잔 마시는 것을 기억하라. 간식 대신 몸에 휴식을 준다면, 당기던 마음이 흔히 사라진다는 것을 알게 될 것이다.',
       check: {q: 'What should you do before you open a snack?', a: 'Try to name your feeling.'}, think: '5분 동안 할 수 있는 다른 일은?'},
      {who: 'The Meal Skipper', en: 'Some students skip breakfast to sleep ten more minutes. It seems like a smart choice, but your brain runs on fuel. Without breakfast, it is hard to focus in the morning, and you are more likely to overeat at lunch. If you ate even a banana or a cup of yogurt, your morning would feel very different.',
       ko: '어떤 학생들은 10분 더 자려고 아침을 거른다. 현명한 선택처럼 보이지만 뇌는 연료로 움직인다. 아침을 먹지 않으면 오전에 집중하기 어렵고, 점심에 과식할 가능성이 더 크다. 바나나 하나나 요구르트 한 컵이라도 먹는다면 아침이 아주 다르게 느껴질 것이다.',
       check: {q: 'What happens if you skip breakfast?', a: 'It is hard to focus, and you are more likely to overeat at lunch.'}, think: '아침으로 간단히 먹을 수 있는 것은?',
       bg: {src: 'h1/donga2/l1/img/r-p3.jpg', credit: 'ralph and jenny · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/92269745@N00/4436764804', about: '바나나를 올린 아침 시리얼'}},
      {who: 'The Screen Eater', en: 'Do you keep scrolling through videos while you eat? Screen eaters often finish a whole bag of chips without noticing it, as if their hands had a mind of their own. Because they are not paying attention, the food doesn’t satisfy them. Next time, put your phone away and notice the flavor and texture of each bite.',
       ko: '먹는 동안 영상을 계속 넘기고 있나요? 화면 보며 먹는 형은 마치 손이 스스로 생각을 가진 것처럼, 알아차리지 못한 채 감자칩 한 봉지를 다 먹어 버리곤 한다. 주의를 기울이지 않기 때문에 음식이 만족감을 주지 못한다. 다음에는 휴대전화를 치우고 한 입 한 입의 맛과 식감을 느껴 보라.',
       check: {q: 'Why doesn’t the food satisfy screen eaters?', a: 'Because they are not paying attention.'}, think: '휴대전화 없이 밥을 먹으면 무엇이 달라질까?'},
      {who: 'The Picky Eater', en: 'Picky eaters stick to the foods they already know and avoid trying new ones. As a result, they can miss important nutrients. The good news is that taste can change throughout our lives. Many people start to enjoy a vegetable after tasting it several times. Decide to try one new food a week, even just one bite.',
       ko: '편식하는 사람은 이미 아는 음식만 고집하고 새로운 음식은 먹어 보기를 피한다. 그 결과 중요한 영양소를 놓칠 수 있다. 좋은 소식은 입맛이 평생에 걸쳐 바뀔 수 있다는 것이다. 많은 사람이 어떤 채소를 여러 번 맛본 뒤에 즐기기 시작한다. 일주일에 새로운 음식 하나를, 한 입만이라도 먹어 보기로 결심하라.',
       check: {q: 'What is the good news for picky eaters?', a: 'Taste can change throughout our lives.'}, think: '내가 다시 도전해 볼 음식은?'},
      {who: 'Not a Test', en: 'Did you see yourself in one of these types? Don’t be too hard on yourself. Nobody eats perfectly every day, and changing a habit is not a test of willpower. If you had a bad food day yesterday, simply start again at the next meal.',
       ko: '이 유형 중 하나에서 자신의 모습을 보았나요? 자신에게 너무 엄격하게 굴지 마라. 날마다 완벽하게 먹는 사람은 아무도 없고, 습관을 바꾸는 것은 의지력 시험이 아니다. 어제 식습관이 엉망이었다면 그냥 다음 끼니에 다시 시작하면 된다.',
       check: {q: 'What should you do after a bad food day?', a: 'Simply start again at the next meal.'}, think: '실수했을 때 나에게 해 줄 말은?'},
      {who: 'Enough', en: 'Your body is with you every day of your life. It deserves balanced meals, regular rest, and a little patience. Treat it the way you would treat a good friend. After all, loving yourself also means feeding yourself well.',
       ko: '여러분의 몸은 평생 날마다 여러분과 함께한다. 몸은 균형 잡힌 식사, 규칙적인 휴식, 그리고 약간의 인내를 받을 자격이 있다. 좋은 친구를 대하듯 몸을 대하라. 결국 자신을 사랑한다는 것은 자신을 잘 먹이는 것이기도 하다.',
       check: {q: 'What does the body deserve?', a: 'Balanced meals, regular rest, and a little patience.'}, think: '내 몸에게 해 주고 싶은 작은 약속은?',
       bg: {src: 'h1/donga2/l1/img/r-p7.jpg', credit: 'avlxyz · CC BY-SA 2.0 (Flickr)', link: 'https://www.flickr.com/photos/10559879@N00/2695730538', about: '채소가 가득한 샐러드 한 그릇'}}
    ],
    coverImg2: {src: 'h1/donga2/l1/img/r-cover2.jpg', credit: 'matryosha · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/49570108@N07/5580664501'},
    split: 4,
    next: '아침을 거르는 사람과\n화면 보며 먹는 사람은?',
    recap: {q: '스트레스 간식형의 문제와 해결책은?', items: [{k: 'PROBLEM', v: 'crave salty or spicy food · the snack never solves the stress · guilt'}, {k: 'TRY', v: 'name your feeling · do something else for five minutes'}]},
    tf: [
      {p: 0, s: 'Many people are not aware of their eating habits.', a: true},
      {p: 1, s: 'Stress snacking solves the stress.', a: false, why: '간식은 스트레스를 해결해 주지 않는다.'},
      {p: 2, s: 'You should name your feeling before you open a snack.', a: true},
      {p: 3, s: 'Skipping breakfast helps you focus in the morning.', a: false, why: '아침을 거르면 집중하기 어렵다.'},
      {p: 4, s: 'Screen eaters often notice exactly how much they eat.', a: false, why: '알아차리지 못한 채 다 먹어 버린다.'},
      {p: 5, s: 'Our taste can change throughout our lives.', a: true},
      {p: 6, s: 'Changing a habit is a test of willpower.', a: false, why: '의지력 시험이 아니다.'}
    ],
    key: [
      {en: 'Before you open a snack, {{try to name}} your feeling.', note: 'try + to부정사 (애써 ~하려고 하다)', g: 'g1'},
      {en: 'Take a short walk, or {{remember to drink}} a glass of water.', note: 'remember + to부정사 (앞으로 할 일)', g: 'g1'},
      {en: '{{If you gave}} your body a break, you {{would find}} that the craving goes away.', note: '가정법 과거', g: 'g2'},
      {en: 'Do you {{keep scrolling}} through videos while you eat?', note: 'keep + 동명사', g: 'g1'},
      {en: '… {{as if}} their hands {{had}} a mind of their own.', note: 'as if + 가정법 과거', g: 'g2'},
      {en: 'Picky eaters {{avoid trying}} new ones.', note: 'avoid + 동명사', g: 'g1'}
    ],
    summary: {text: 'Loving yourself also means caring about how you eat. Stress snackers should name their feelings instead of reaching for a {{snack}}. Meal skippers are more likely to {{overeat}} at lunch. Screen eaters should put their phones away and be {{mindful}} of each bite. Picky eaters can miss {{nutrients}}, but taste can {{change}}. Most of all, don’t be too {{hard}} on yourself.'},
    order: ['You skip breakfast to sleep more.', 'It is hard to focus in the morning.', 'You overeat at lunch.', 'You decide to eat a banana tomorrow.'],
    chart: {title: 'FOUR EATERS', ko: '네 가지 식습관 비교', cols: ['Problem', 'Try this'], note: '표를 보고 “If you ~, you would ~.” 가정법 문장으로 조언하게 한다.', rows: [
      {name: 'Stress snacker', cells: ['the snack never solves the stress', 'name your feeling, walk for 5 minutes']},
      {name: 'Meal skipper', cells: ['hard to focus, overeat at lunch', 'eat a banana or yogurt']},
      {name: 'Screen eater', cells: ['eats without noticing', 'put the phone away']},
      {name: 'Picky eater', cells: ['misses nutrients', 'try one new food a week']}
    ]},
    wrap: {en: 'I am a ______ eater. If I ______, I would ______. From now on, I will try to ______.', ko: '관통 질문으로 돌아가기: 나의 식습관을 돌아보고 몸에게 하는 약속 쓰기'}
  },

  quiz: [
    ['“식욕”을 뜻하는 낱말은?', ['habit', 'appetite', 'portion', 'flavor'], 1, 'appetite'],
    ['“과식하다”를 뜻하는 낱말은?', ['skip', 'digest', 'overeat', 'crave'], 2, 'overeat (over- = 지나치게)'],
    ['mindful의 반대말은?', ['careful', 'mindless', 'helpful', 'balanced'], 1, '-ful ↔ -less'],
    ['“단것을 좋아하다”를 뜻하는 표현은?', ['turn to', 'be aware of', 'have a sweet tooth', 'in a hurry'], 2, 'have a sweet tooth'],
    ['위로하는 말로 알맞지 않은 것은?', ['I’m sorry to hear that.', 'That must be hard.', 'You did your best.', 'You should have studied more.'], 3, '④는 비난에 가깝다'],
    ['조언하는 말은?', ['What should I do?', 'If I were you, I would rest.', 'Can you give me advice?', 'Do you have any tips?'], 1, '①③④는 조언을 구하는 말'],
    ['빈칸에 알맞은 것은? “I enjoy ____ letters.”', ['write', 'to write', 'writing', 'written'], 2, 'enjoy + -ing'],
    ['빈칸에 알맞은 것은? “Remember ____ the lights before you leave.”', ['turning off', 'to turn off', 'turn off', 'turned off'], 1, '앞으로 할 일 → to V'],
    ['“I stopped checking my phone.”의 뜻은?', ['휴대전화를 확인하려고 멈췄다', '휴대전화 확인하는 것을 그만두었다', '휴대전화를 확인해야 했다', '휴대전화를 확인할 것이다'], 1, 'stop + -ing = 하던 일을 멈추다'],
    ['빈칸에 알맞은 것은? “If I ____ you, I would talk to her.”', ['am', 'was being', 'were', 'have been'], 2, '가정법 과거 were'],
    ['빈칸에 알맞은 것은? “If I had known, I ____ you.”', ['will help', 'would help', 'would have helped', 'helped'], 2, '가정법 과거완료'],
    ['스트레스 간식형에게 글쓴이가 권하는 것은?', ['간식을 반만 먹기', '감정에 이름 붙이고 5분 동안 다른 일 하기', '매운 음식 먹기', '시험공부 그만하기'], 1, 'try to name your feeling … do something else for five minutes'],
    ['아침을 거를 때 생기는 일로 글에 나온 것은?', ['점심에 과식하기 쉽다', '잠을 더 잘 잔다', '키가 큰다', '집중이 잘된다'], 0, 'you are more likely to overeat at lunch'],
    ['화면 보며 먹는 사람이 만족하지 못하는 까닭은?', ['음식이 맛없어서', '주의를 기울이지 않아서', '양이 적어서', '너무 빨리 배불러서'], 1, 'Because they are not paying attention'],
    ['글의 요지로 알맞은 것은?', ['완벽하게 먹어야 한다', '편식은 고칠 수 없다', '식습관을 돌보는 것도 자신을 사랑하는 일이다', '간식은 모두 나쁘다'], 2, 'loving yourself also means feeding yourself well']
  ]
};
