/* 고1 공통영어2(동아·이병민) Lesson 1 · Love Yourself
   단원명은 교과서 목차 기준. 본문 주제(자기 연민)와 의사소통 기능·문법은 추정(estimate: true).
   대화문·읽기 글은 교과서 원문이 아니라 단원 주제에 맞춰 새로 쓴 글입니다. */
window.LESSON = {
  book: 'h1b-donga', no: 1, estimate: true,
  title: 'Love Yourself', ko: '너 자신을 사랑하라',
  bigQ: {en: 'How would you talk to yourself if you were your own best friend?', ko: '내가 나의 가장 친한 친구라면, 나에게 어떻게 말할까?'},
  goals: {
    vocab: ['마음·감정·자기 존중과 관련된 낱말 16개의 뜻과 발음(강세)을 익힌다.', 'com-, im-, -ful 같은 조각으로 compassion, imperfect, mindful을 분석할 수 있다.'],
    talk: ['힘들어하는 친구를 위로하고 격려할 수 있다.', '고민에 대해 조언을 구하고, If I were you ~ 등으로 조언할 수 있다.'],
    grammar: ['to부정사는 “앞으로 할 일”, 동명사는 “이미 하고 있거나 한 일”이라는 원리로 목적어 형태를 고를 수 있다.', '가정법이 “시제를 한 칸 과거로 밀어 현실과 거리를 두는 것”이라는 원리로 가정법 과거·과거완료를 쓸 수 있다.'],
    read1: ['자기 비판과 자기 연민의 차이를 파악할 수 있다.'],
    read2: ['자기 연민을 기르는 방법을 정리하고, 나에게 보내는 격려의 편지를 영어로 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'What do you say to yourself when you make a mistake?', ko: '실수했을 때 스스로에게 뭐라고 말하나요?', note: '“바보같이”, “또 망쳤네” 같은 말이 나온다. “친구가 같은 실수를 했다면 뭐라고 말해 줄까?”로 이어 묻고 두 답을 칠판 양쪽에 적는다 — 본문의 출발점.'},
    words: [
      {w: 'compassion', pos: 'n.', ko: '연민, 동정심', ic: '🤲', ipa: '/kəmˈpæʃn/', audio: 'assets/audio/compassion.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'She showed compassion for the injured dog.', exKo: '그녀는 다친 개에게 연민을 보였다.'},
      {w: 'critic', pos: 'n.', ko: '비판자, 비평가', ic: '🧐', ipa: '/ˈkrɪtɪk/', audio: 'assets/audio/critic.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'We are often our own harshest critics.', exKo: '우리는 종종 스스로에게 가장 가혹한 비판자다.'},
      {w: 'harsh', pos: 'adj.', ko: '가혹한, 혹독한', ic: '🥶', ipa: '/hɑːrʃ/', ex: 'Don’t be so harsh on yourself.', exKo: '너 자신에게 그렇게 가혹하게 굴지 마.'},
      {w: 'flaw', pos: 'n.', ko: '결점, 흠', ic: '🩹', img: {src: 'h1/donga2/l1/img/w-flaw.jpg', credit: 'mislav-m · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/29561334@N04/8627888136'}, ipa: '/flɔː/', audio: 'assets/audio/flaw.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Everyone has flaws.', exKo: '누구에게나 결점이 있다.'},
      {w: 'imperfect', pos: 'adj.', ko: '불완전한', ic: '🧩', ipa: '/ɪmˈpɜːrfɪkt/', audio: 'assets/audio/imperfect.mp3', audioCredit: 'Neskaya · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'We are all imperfect human beings.', exKo: '우리는 모두 불완전한 인간이다.'},
      {w: 'accept', pos: 'v.', ko: '받아들이다', ic: '🤝', ipa: '/əkˈsept/', audio: 'assets/audio/accept.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Try to accept yourself as you are.', exKo: '있는 그대로의 자신을 받아들이려고 노력해라.'},
      {w: 'self-esteem', pos: 'n.', ko: '자존감', ic: '🌱', ipa: '/ˌself ɪˈstiːm/', ex: 'Praise can build a child’s self-esteem.', exKo: '칭찬은 아이의 자존감을 키울 수 있다.'},
      {w: 'comfort', pos: 'v./n.', ko: '위로하다; 위안', ic: '🫂', img: {src: 'h1/donga2/l1/img/w-comfort.jpg', credit: 'katiesw1 · CC BY-SA 2.0 (Flickr)', link: 'https://www.flickr.com/photos/41517846@N08/4259167076'}, ipa: '/ˈkʌmfərt/', audio: 'assets/audio/comfort.mp3', audioCredit: 'Dvortygirl · GFDL (Wikimedia Commons, US)', ex: 'I tried to comfort my crying sister.', exKo: '나는 울고 있는 여동생을 위로하려고 했다.'},
      {w: 'reassure', pos: 'v.', ko: '안심시키다', ic: '😌', ipa: '/ˌriːəˈʃʊr/', ex: 'The doctor reassured me that it was nothing serious.', exKo: '의사는 심각한 것이 아니라며 나를 안심시켰다.'},
      {w: 'deserve', pos: 'v.', ko: '~을 받을 만하다', ic: '🏅', ipa: '/dɪˈzɜːrv/', audio: 'assets/audio/deserve.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'You deserve a break.', exKo: '너는 쉴 자격이 있어.'},
      {w: 'appreciate', pos: 'v.', ko: '고마워하다; 진가를 알다', ic: '🙏', img: {src: 'h1/donga2/l1/img/w-appreciate.jpg', credit: 'ralphhogaboom · CC BY-SA 2.0 (Flickr)', link: 'https://www.flickr.com/photos/59568944@N00/5871263299'}, ipa: '/əˈpriːʃieɪt/', audio: 'assets/audio/appreciate.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'I really appreciate your help.', exKo: '도와줘서 정말 고마워.'},
      {w: 'isolated', pos: 'adj.', ko: '고립된, 외로운', ic: '🏝️', img: {src: 'h1/donga2/l1/img/w-isolated.jpg', credit: 'sacks08 · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/29071316@N06/4752606716'}, ipa: '/ˈaɪsəleɪtɪd/', audio: 'assets/audio/isolated.mp3', audioCredit: 'Neskaya · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'He felt isolated after moving to a new school.', exKo: '그는 새 학교로 옮긴 뒤 고립감을 느꼈다.'},
      {w: 'mindful', pos: 'adj.', ko: '마음을 챙기는, 유념하는', ic: '🧘', img: {src: 'h1/donga2/l1/img/w-mindful.jpg', credit: 'alisonleighlilly · CC BY-SA 2.0 (Flickr)', link: 'https://www.flickr.com/photos/61475957@N02/5773273968'}, ipa: '/ˈmaɪndfl/', audio: 'assets/audio/mindful.mp3', audioCredit: 'Steve Shives · CC0 (Wikimedia Commons, US)', ex: 'Be mindful of how you feel right now.', exKo: '지금 네 기분이 어떤지 마음을 기울여 봐.'},
      {w: 'struggle', pos: 'v./n.', ko: '애쓰다, 힘겨워하다; 투쟁', ic: '🌊', img: {src: 'h1/donga2/l1/img/w-struggle.jpg', credit: 'mckaysavage · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/56796376@N00/497821701'}, ipa: '/ˈstrʌɡl/', audio: 'assets/audio/struggle.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Many students struggle with stress.', exKo: '많은 학생들이 스트레스로 힘겨워한다.'},
      {w: 'resilient', pos: 'adj.', ko: '회복력 있는, 잘 이겨 내는', ic: '🌿', ipa: '/rɪˈzɪliənt/', audio: 'assets/audio/resilient.mp3', audioCredit: 'Sylvanmoon · CC BY-SA 4.0 (Wikimedia Commons, US)', ex: 'Resilient people bounce back from failure.', exKo: '회복력 있는 사람들은 실패에서 다시 일어선다.'},
      {w: 'worth', pos: 'n./adj.', ko: '가치; ~의 가치가 있는', ic: '💎', ipa: '/wɜːrθ/', audio: 'assets/audio/worth.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Your worth does not depend on your grades.', exKo: '너의 가치는 성적에 달려 있지 않다.'}
    ],
    morph: [
      {w: 'compassion', ko: '연민', parts: [{t: 'com', k: 'pre', m: '함께'}, {t: 'pass', k: 'root', m: '고통을 느끼다 (passion)'}, {t: 'ion', k: 'suf', m: '~것 (명사)'}], family: ['passion', 'compassionate', 'sympathy'], note: '“함께 아파하는 것” → 연민. com-(함께)은 company, combine에도 있다.'},
      {w: 'imperfect', ko: '불완전한', parts: [{t: 'im', k: 'pre', m: '아닌 (in-)'}, {t: 'perfect', k: 'root', m: '완벽한'}], family: ['impossible', 'impatient', 'imperfection'], note: 'p·b·m 앞에서 in-은 im-이 된다(impossible, imbalance).'},
      {w: 'mindful', ko: '마음을 챙기는', parts: [{t: 'mind', k: 'root', m: '마음'}, {t: 'ful', k: 'suf', m: '~이 가득한'}], family: ['mindfulness', 'careful', 'harmful'], note: '-ful = 가득한(careful, helpful). 반대는 -less(careless, mindless).'},
      {w: 'resilient', ko: '회복력 있는', parts: [{t: 're', k: 'pre', m: '다시, 뒤로'}, {t: 'sil', k: 'root', m: '뛰다 (sal-)'}, {t: 'ient', k: 'suf', m: '~하는 (형용사)'}], family: ['resilience', 'salient (튀어나온, 두드러진)', 'bounce back'], note: '“다시 튀어 오르는” → 넘어져도 다시 일어서는. 공처럼 튀어 오르는 모습을 떠올리게 한다.'}
    ],
    phrases: [
      {w: 'be hard on oneself', ko: '자신에게 엄격하다', ex: 'Don’t be too hard on yourself.', exKo: '너 자신에게 너무 엄격하게 굴지 마.'},
      {w: 'cut ~ some slack', ko: '~에게 너그럽게 대하다', ex: 'Cut yourself some slack. You’re learning.', exKo: '너 자신에게 좀 너그러워져. 배우는 중이잖아.'},
      {w: 'bounce back', ko: '다시 회복하다', ex: 'She bounced back quickly after the loss.', exKo: '그녀는 패배 후 빨리 회복했다.'},
      {w: 'compare oneself with', ko: '자신을 ~와 비교하다', ex: 'Stop comparing yourself with others.', exKo: '다른 사람과 너 자신을 비교하는 것을 그만둬.'},
      {w: 'take care of', ko: '~을 돌보다', ex: 'Take care of your mind as well as your body.', exKo: '몸뿐만 아니라 마음도 돌봐라.'},
      {w: 'get through', ko: '(힘든 시기를) 이겨 내다', ex: 'We will get through this together.', exKo: '우리는 함께 이것을 이겨 낼 거야.'}
    ],
    pairs: [
      {a: 'critic', b: 'supporter', rel: '반대 역할'},
      {a: 'harsh', b: 'gentle', rel: '반대말'},
      {a: 'perfect', b: 'imperfect', rel: '반대말 (im-)'},
      {a: 'accept', b: 'reject', rel: '반대말'},
      {a: 'isolated', b: 'connected', rel: '반대말'}
    ],
    wrap: {en: 'One flaw I accept about myself is ______. I deserve ______.', ko: '오늘 배운 낱말로 나를 받아들이는 한 문장 쓰기'}
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
    title: 'Be Your Own Best Friend', kind: '심리 에세이', cover: 'Kind', coverKo: '나에게 친절하기', cover2: 'Enough', coverKo2: '지금의 나로 충분해',
    before: [
      {q: 'Is it easier to be kind to others or to yourself? Why?', a: '대부분 다른 사람에게 더 친절하다고 답한다.'},
      {q: 'What does “love yourself” mean to you?', a: '자신을 받아들이기, 돌보기, 비교하지 않기 등'}
    ],
    gloss: {'inner voice': '마음속 목소리', 'self-criticism': '자기 비판', 'self-compassion': '자기 연민(자신을 친절하게 대함)', 'common humanity': '보편적 인간성', 'highlight reel': '하이라이트 장면 모음', 'behind-the-scenes': '무대 뒤, 이면', 'third person': '3인칭', 'selfish': '이기적인', 'motivation': '동기', 'empty cup': '빈 컵'},
    paras: [
      {who: '', en: 'Imagine that your best friend fails an important test. What would you say? Probably something like, “It’s okay. You worked hard, and you’ll do better next time.” Now imagine that you failed the same test. What would your inner voice say? For many of us, it would sound much harsher: “You’re so stupid. You always mess up.”',
       ko: '가장 친한 친구가 중요한 시험에 떨어졌다고 상상해 보라. 뭐라고 말하겠는가? 아마 “괜찮아. 열심히 했잖아. 다음엔 더 잘할 거야.” 같은 말일 것이다. 이제 당신이 같은 시험에 떨어졌다고 상상해 보라. 마음속 목소리는 뭐라고 할까? 우리 중 많은 사람에게 그 목소리는 훨씬 가혹하게 들릴 것이다. “넌 정말 바보야. 넌 늘 망쳐.”',
       check: {q: 'How does our inner voice often sound?', a: 'Much harsher than what we say to our friends.'}, think: '나의 마음속 목소리는 어떤 말투인가?'},
      {who: 'The Inner Critic', en: 'Most of us would never talk to a friend the way we talk to ourselves. We believe that criticizing ourselves will push us to improve. If we were gentle, we think, we would become lazy. But constant self-criticism often has the opposite effect. It makes us afraid of failing, so we avoid trying new things at all.',
       ko: '우리 대부분은 스스로에게 말하는 방식으로 친구에게 말하지는 절대 않을 것이다. 우리는 자신을 비판하는 것이 나아지도록 밀어붙일 것이라고 믿는다. 너그러우면 게을러질 거라고 생각한다. 하지만 끊임없는 자기 비판은 흔히 반대 효과를 낳는다. 그것은 실패를 두렵게 만들어서, 우리는 새로운 일을 시도하는 것조차 피하게 된다.',
       check: {q: 'What effect does constant self-criticism often have?', a: 'It makes us afraid of failing, so we avoid trying new things.'}, think: '실패가 두려워서 시도하지 않은 일이 있나?',
       bg: {src: 'h1/donga2/l1/img/r-p1.jpg', credit: 'Alyssa L. Miller · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/34701044@N06/4000009470', about: '창가에 누워 있는 사람'}},
      {who: 'Self-Compassion', en: 'Psychologist Kristin Neff describes another way: self-compassion. It means treating yourself with the same kindness you would offer a good friend. It has three parts: being kind to yourself instead of judging, remembering that everyone struggles and makes mistakes, and noticing your feelings without being swallowed by them.',
       ko: '심리학자 크리스틴 네프는 또 다른 방법을 설명한다. 바로 자기 연민이다. 그것은 좋은 친구에게 베풀 친절과 똑같은 친절로 자신을 대하는 것을 뜻한다. 자기 연민에는 세 부분이 있다. 판단하는 대신 자신에게 친절하기, 누구나 힘겨워하고 실수한다는 것을 기억하기, 그리고 감정에 휩쓸리지 않고 그것을 알아차리기다.',
       check: {q: 'What are the three parts of self-compassion?', a: 'Being kind to yourself, remembering everyone struggles, and noticing your feelings without being swallowed by them.'}, think: '세 부분 중 나에게 가장 어려운 것은?',
       bg: {src: 'h1/donga2/l1/img/r-p2.jpg', credit: 'waithamai · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/59684476@N02/12306490696', about: '맞잡은 두 손 (연필 그림)'}},
      {who: 'Not Weak, Not Lazy', en: 'Some people worry that self-compassion is just an excuse. However, studies suggest the opposite. People who forgive themselves for a mistake are often more likely to learn from it and try again. When failure does not feel like a disaster, we can look at it honestly. Kindness, it turns out, is a better coach than cruelty.',
       ko: '어떤 사람들은 자기 연민이 그저 핑계일까 봐 걱정한다. 하지만 연구들은 그 반대를 보여 준다. 실수한 자신을 용서하는 사람들은 그 실수에서 배우고 다시 시도할 가능성이 더 큰 경우가 많다. 실패가 재앙처럼 느껴지지 않을 때, 우리는 그것을 정직하게 바라볼 수 있다. 알고 보니 친절이 가혹함보다 더 나은 코치인 것이다.',
       check: {q: 'What do studies suggest about people who forgive themselves?', a: 'They are often more likely to learn from mistakes and try again.'}, think: '나를 가장 잘 성장시킨 것은 칭찬이었나, 꾸중이었나?',
       bg: {src: 'h1/donga2/l1/img/r-p3.jpg', credit: 'comedy_nose · Public Domain Mark (Flickr)', link: 'https://www.flickr.com/photos/23408922@N07/9320845849', about: '육상 트랙의 출발선'}},
      {who: 'The Comparison Trap', en: 'Social media makes self-compassion even harder. We see our friends’ trips, awards, and perfect selfies, and we compare them with our ordinary days. But we are comparing our behind-the-scenes with everyone else’s highlight reel. If we saw their bad days too, we would realize that nobody’s life is perfect.',
       ko: 'SNS는 자기 연민을 더욱 어렵게 만든다. 우리는 친구들의 여행, 수상, 완벽한 셀카를 보고 그것을 우리의 평범한 날들과 비교한다. 하지만 우리는 우리의 무대 뒤를 다른 모든 사람의 하이라이트 장면과 비교하고 있는 것이다. 그들의 나쁜 날들도 본다면, 우리는 누구의 삶도 완벽하지 않다는 것을 깨달을 것이다.',
       check: {q: 'What are we comparing on social media?', a: 'Our behind-the-scenes with everyone else’s highlight reel.'}, think: 'SNS를 보고 기분이 나빠진 적이 있나?',
       bg: {src: 'h1/donga2/l1/img/r-p4.jpg', credit: 'freestocks.org · CC0 1.0 (Flickr)', link: 'https://www.flickr.com/photos/135396164@N05/25314591330', about: '휴대전화로 SNS를 보는 손'}},
      {who: 'Try This: Talk Like a Friend', en: 'Next time you make a mistake, try talking to yourself in the second or third person: “Minji, you’re nervous, and that’s okay.” Using your own name creates a little distance, so it feels as if a friend were speaking. It sounds strange at first, but many people find it surprisingly calming.',
       ko: '다음에 실수하면 2인칭이나 3인칭으로 자신에게 말해 보라. “민지야, 너 긴장했구나. 괜찮아.” 자기 이름을 부르면 약간의 거리가 생겨서, 마치 친구가 말하는 것처럼 느껴진다. 처음에는 이상하게 들리지만, 많은 사람들이 그것이 놀라울 만큼 마음을 진정시킨다고 느낀다.',
       check: {q: 'Why does using your own name help?', a: 'It creates distance, so it feels as if a friend were speaking.'}, think: '내 이름을 부르며 나에게 한 문장 말해 본다면?',
       bg: {src: 'h1/donga2/l1/img/r-p5.jpg', credit: 'IQRemix · CC BY-SA 2.0 (Flickr)', link: 'https://www.flickr.com/photos/46021126@N00/15678594478', about: '거울 속의 나'}},
      {who: 'Try This: A Letter to Yourself', en: 'Another way is to write a short letter to yourself, as if you were writing to a friend who is going through the same problem. What would you want them to remember? What would you tell them to stop doing? Keep the letter, and read it again on a hard day.',
       ko: '또 다른 방법은 같은 문제를 겪고 있는 친구에게 쓰듯이 자신에게 짧은 편지를 쓰는 것이다. 그 친구가 무엇을 기억하기를 바라는가? 무엇을 그만하라고 말해 주겠는가? 편지를 간직했다가 힘든 날 다시 읽어 보라.',
       check: {q: 'When should you read the letter again?', a: 'On a hard day.'}, think: '나에게 편지를 쓴다면 첫 문장은?',
       bg: {src: 'h1/donga2/l1/img/r-p6.jpg', credit: 'Cambridge Room at the Cambridge Public Library · Public Domain Mark (Flickr)', link: 'https://www.flickr.com/photos/140174526@N06/28158012095', about: '손글씨 편지'}},
      {who: 'Enough', en: 'Loving yourself is not selfish, and it does not mean thinking you are perfect. It means accepting that you are imperfect, like everyone else, and still deserving of kindness. After all, you will spend your whole life with yourself. You might as well be a good friend to that person.',
       ko: '자신을 사랑하는 것은 이기적인 것이 아니며, 자신이 완벽하다고 생각하는 것도 아니다. 그것은 다른 모든 사람처럼 자신이 불완전하다는 것을 받아들이면서도 여전히 친절을 받을 자격이 있다고 여기는 것이다. 어쨌든 당신은 평생을 당신 자신과 함께 보낼 것이다. 그 사람에게 좋은 친구가 되어 주는 편이 낫다.',
       check: {q: 'What does loving yourself mean according to the writer?', a: 'Accepting that you are imperfect and still deserving of kindness.'}, think: '“나에게 좋은 친구가 된다”는 것은 구체적으로 무엇일까?',
       bg: {src: 'h1/donga2/l1/img/r-p7.jpg', credit: 'Mount Rainier NPS · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/78037339@N03/14771720105', about: '산이 보이는 들판의 오솔길'}}
    ],
    coverImg: {src: 'h1/donga2/l1/img/r-cover.jpg', credit: 'Oneterry AKA Terry Kearney · CC0 1.0 (Flickr)', link: 'https://www.flickr.com/photos/24490288@N04/55067603243'},
    coverImg2: {src: 'h1/donga2/l1/img/r-cover2.jpg', credit: 'thejaan · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/88273881@N00/14844430632'},
    split: 4,
    next: '자기 연민은\n우리를 게으르게 만들까?',
    recap: {q: '자기 비판과 자기 연민은 어떻게 다를까?', items: [{k: 'SELF-CRITICISM', v: '“You’re so stupid.” → afraid of failing, avoid trying'}, {k: 'SELF-COMPASSION', v: 'kindness · common humanity · noticing feelings'}]},
    tf: [
      {p: 0, s: 'Our inner voice is usually kinder than what we say to friends.', a: false, why: '훨씬 가혹하게 들린다.'},
      {p: 1, s: 'Constant self-criticism can make us avoid new things.', a: true},
      {p: 2, s: 'Self-compassion has three parts.', a: true},
      {p: 3, s: 'Studies suggest self-compassion makes people lazy.', a: false, why: '배우고 다시 시도할 가능성이 크다.'},
      {p: 4, s: 'Social media shows us everyone’s bad days.', a: false, why: '하이라이트만 보여 준다.'},
      {p: 5, s: 'Talking to yourself using your name can feel calming.', a: true},
      {p: 7, s: 'Loving yourself means believing you are perfect.', a: false, why: '불완전함을 받아들이는 것이다.'}
    ],
    key: [
      {en: '{{If we were}} gentle, we think, we {{would become}} lazy.', note: '가정법 과거 (지금 사실의 반대)', g: 'g2'},
      {en: 'It makes us afraid of failing, so we {{avoid trying}} new things.', note: 'avoid + 동명사', g: 'g1'},
      {en: '{{If we saw}} their bad days too, we {{would realize}} that nobody’s life is perfect.', note: '가정법 과거', g: 'g2'},
      {en: 'Next time you make a mistake, {{try talking}} to yourself in the third person.', note: 'try + -ing (시험 삼아 해 보다)', g: 'g1'},
      {en: 'It feels {{as if}} a friend {{were}} speaking.', note: 'as if + 가정법 과거', g: 'g2'},
      {en: 'What would you tell them {{to stop doing}}?', note: 'tell + O + to V / stop + -ing', g: 'g1'}
    ],
    summary: {text: 'We are often our own harshest {{critics}}. Self-criticism makes us afraid of {{failing}}, but self-{{compassion}} means treating ourselves like a good friend. People who forgive themselves are more likely to try {{again}}. We can practice by talking to ourselves in the third person or writing a {{letter}} to ourselves.'},
    order: ['You make a mistake.', 'Your inner critic says harsh words.', 'You talk to yourself like a friend.', 'You feel calm enough to try again.'],
    chart: {title: 'CRITIC vs FRIEND', ko: '내 안의 두 목소리 비교', cols: ['Says', 'Result'], note: '표를 보고 “If I were my own friend, I would say ~.” 가정법 문장으로 말하게 한다.', rows: [
      {name: 'Inner critic', cells: ['“You always mess up.”', 'fear, avoiding new things']},
      {name: 'Inner friend', cells: ['“It’s okay. Try again.”', 'learning, trying again']}
    ]},
    wrap: {en: 'Dear me, ______. If I were your best friend, I would tell you ______.', ko: '관통 질문으로 돌아가기: 나에게 보내는 짧은 격려 편지 쓰기'}
  },

  quiz: [
    ['“연민, 동정심”을 뜻하는 낱말은?', ['compassion', 'critic', 'flaw', 'worth'], 0, 'compassion'],
    ['“회복력 있는”을 뜻하는 낱말은?', ['harsh', 'isolated', 'resilient', 'imperfect'], 2, 'resilient'],
    ['imperfect의 im-이 뜻하는 것은?', ['함께', '아닌', '다시', '안에'], 1, 'im- = in- = 아닌'],
    ['harsh의 반대말은?', ['gentle', 'strict', 'cold', 'loud'], 0, 'harsh ↔ gentle'],
    ['위로하는 말로 알맞지 않은 것은?', ['I’m sorry to hear that.', 'That must be hard.', 'You did your best.', 'You should have studied more.'], 3, '④는 비난에 가깝다'],
    ['조언하는 말은?', ['What should I do?', 'If I were you, I would rest.', 'Can you give me advice?', 'Do you have any tips?'], 1, '①③④는 조언을 구하는 말'],
    ['빈칸에 알맞은 것은? “I enjoy ____ letters.”', ['write', 'to write', 'writing', 'written'], 2, 'enjoy + -ing'],
    ['빈칸에 알맞은 것은? “Remember ____ the lights before you leave.”', ['turning off', 'to turn off', 'turn off', 'turned off'], 1, '앞으로 할 일 → to V'],
    ['“I stopped checking my phone.”의 뜻은?', ['휴대전화를 확인하려고 멈췄다', '휴대전화 확인하는 것을 그만두었다', '휴대전화를 확인해야 했다', '휴대전화를 확인할 것이다'], 1, 'stop + -ing = 하던 일을 멈추다'],
    ['빈칸에 알맞은 것은? “If I ____ you, I would talk to her.”', ['am', 'was being', 'were', 'have been'], 2, '가정법 과거 were'],
    ['빈칸에 알맞은 것은? “If I had known, I ____ you.”', ['will help', 'would help', 'would have helped', 'helped'], 2, '가정법 과거완료'],
    ['자기 비판이 낳는 결과로 글에 나온 것은?', ['더 열심히 한다', '실패가 두려워 시도를 피한다', '친구가 많아진다', '자존감이 높아진다'], 1, 'avoid trying new things'],
    ['자기 연민의 세 부분이 아닌 것은?', ['자신에게 친절하기', '누구나 실수함을 기억하기', '감정을 알아차리기', '다른 사람보다 앞서기'], 3, '세 부분: kindness, common humanity, mindfulness'],
    ['SNS 비교가 문제인 까닭은?', ['시간이 오래 걸려서', '남의 하이라이트와 내 일상을 비교해서', '친구가 줄어서', '사진이 흐려서'], 1, 'behind-the-scenes vs highlight reel'],
    ['글쓴이가 권하는 방법이 아닌 것은?', ['3인칭으로 자신에게 말하기', '자신에게 편지 쓰기', '실수를 더 엄하게 꾸짖기', '힘든 날 편지 다시 읽기'], 2, '가혹함보다 친절이 더 나은 코치']
  ]
};
