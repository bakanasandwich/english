/* 중1 영어(동아·윤정미) Lesson 8 · Be Smart Online
   단원명은 교과서·문제집 목차 기준. 의사소통 기능과 문법은 추정(estimate: true).
   대화문·읽기 글은 교과서 원문이 아니라 단원 주제에 맞춰 새로 쓴 글입니다. */
window.LESSON = {
  book: 'm1-donga', no: 8, estimate: true,
  title: 'Be Smart Online', ko: '온라인에서 똑똑하게',
  bigQ: {en: 'How can we be safe and kind online?', ko: '온라인에서 어떻게 안전하고 친절할 수 있을까?'},
  goals: {
    vocab: ['인터넷·디지털 생활과 관련된 낱말 16개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 나의 온라인 습관을 한 문장으로 말할 수 있다.'],
    talk: ['허락을 구하고 답할 수 있다.', '의견에 동의하거나 반대할 수 있다.'],
    grammar: ['최상급으로 가장 ~한 것을 말할 수 있다.', '조건의 if로 ‘~하면’을 표현할 수 있다.'],
    read1: ['안전한 온라인 생활 팁 글의 앞부분을 읽고 비밀번호와 게시물에 관한 조언을 이해할 수 있다.'],
    read2: ['다섯 가지 팁을 정리하고, 나의 온라인 약속을 영어로 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'How many hours do you spend online a day?', ko: '하루에 몇 시간 온라인에 있나요?', note: '손가락으로 대략 시간을 표시하게 한다. 무엇을 하며 보내는지(게임, 영상, 채팅) 물어 오늘 낱말로 잇는다.'},
    words: [
      {w: 'online', pos: 'adj./adv.', ko: '온라인의; 온라인으로', ic: '🌐', audio: 'assets/audio/online.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'We chat online every day.', exKo: '우리는 매일 온라인으로 대화한다.'},
      {w: 'password', pos: 'n.', ko: '비밀번호', ic: '🔑', ex: 'Make a strong password.', exKo: '강한 비밀번호를 만들어라.'},
      {w: 'post', pos: 'v./n.', ko: '게시하다; 게시물', ic: '📝', audio: 'assets/audio/post.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Think before you post.', exKo: '게시하기 전에 생각해라.'},
      {w: 'comment', pos: 'n.', ko: '댓글', ic: '💬', ex: 'She left a kind comment.', exKo: '그녀는 친절한 댓글을 남겼다.'},
      {w: 'share', pos: 'v.', ko: '공유하다', ic: '📤', audio: 'assets/audio/share.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Don’t share your address.', exKo: '주소를 공유하지 마라.'},
      {w: 'safe', pos: 'adj.', ko: '안전한', ic: '🛡️', audio: 'assets/audio/safe.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Stay safe online.', exKo: '온라인에서 안전하게 지내라.'},
      {w: 'personal', pos: 'adj.', ko: '개인의', ic: '👤', audio: 'assets/audio/personal.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Keep personal information secret.', exKo: '개인 정보는 비밀로 해라.'},
      {w: 'information', pos: 'n.', ko: '정보', ic: 'ℹ️', audio: 'assets/audio/information.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Check the information first.', exKo: '먼저 정보를 확인해라.'},
      {w: 'fake', pos: 'adj.', ko: '가짜의', ic: '🎭', audio: 'assets/audio/fake.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'That is fake news.', exKo: '그건 가짜 뉴스다.'},
      {w: 'true', pos: 'adj.', ko: '사실인, 진짜의', ic: '✔️', audio: 'assets/audio/true.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Is the story true?', exKo: '그 이야기는 사실이니?'},
      {w: 'mean', pos: 'adj.', ko: '못된, 심술궂은', ic: '😠', audio: 'assets/audio/mean.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Don’t write mean words.', exKo: '못된 말을 쓰지 마라.'},
      {w: 'report', pos: 'v.', ko: '신고하다, 알리다', ic: '🚩', audio: 'assets/audio/report.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Report bad comments to an adult.', exKo: '나쁜 댓글은 어른에게 알려라.'},
      {w: 'screen', pos: 'n.', ko: '화면', ic: '📱', audio: 'assets/audio/screen.mp3', audioCredit: 'Jelkner · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Take a break from the screen.', exKo: '화면에서 잠시 쉬어라.'},
      {w: 'stranger', pos: 'n.', ko: '낯선 사람', ic: '🧍', audio: 'assets/audio/stranger.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Don’t meet strangers from online.', exKo: '온라인에서 만난 낯선 사람을 만나지 마라.'},
      {w: 'download', pos: 'v.', ko: '내려받다', ic: '⬇️', audio: 'assets/audio/download.mp3', audioCredit: 'EncycloPetey · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Don’t download strange files.', exKo: '이상한 파일을 내려받지 마라.'},
      {w: 'rule', pos: 'n.', ko: '규칙', ic: '📏', audio: 'assets/audio/rule.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Let’s make online rules.', exKo: '온라인 규칙을 만들자.'}
    ],
    phrases: [
      {w: 'think before you post', ko: '게시하기 전에 생각하다', ex: 'Always think before you post.', exKo: '늘 게시하기 전에 생각해라.'},
      {w: 'take a break', ko: '잠시 쉬다', ex: 'Take a break every hour.', exKo: '한 시간마다 잠시 쉬어라.'},
      {w: 'keep ~ secret', ko: '~을 비밀로 하다', ex: 'Keep your password secret.', exKo: '비밀번호를 비밀로 해라.'},
      {w: 'be careful with', ko: '~을 조심하다', ex: 'Be careful with links.', exKo: '링크를 조심해라.'},
      {w: 'make sure', ko: '확실히 하다, 꼭 ~하다', ex: 'Make sure the news is true.', exKo: '그 뉴스가 사실인지 꼭 확인해라.'},
      {w: 'ask for help', ko: '도움을 요청하다', ex: 'Ask for help from an adult.', exKo: '어른에게 도움을 요청해라.'}
    ],
    pairs: [
      {a: 'fake', b: 'real', rel: '반대말'},
      {a: 'safe', b: 'dangerous', rel: '반대말'},
      {a: 'mean', b: 'kind', rel: '반대말'},
      {a: 'download', b: 'upload', rel: '반대말'}
    ],
    wrap: {en: 'Online, I usually ______. I should keep my ______ secret.', ko: '오늘 배운 낱말로 나의 온라인 습관과 다짐 쓰기'}
  },

  talk: {
    hook: {en: 'Have you ever seen a mean comment online?', ko: '온라인에서 못된 댓글을 본 적이 있나요?', note: '구체적인 내용보다 그때의 기분을 묻는다. 학생 개인의 경험을 캐묻지 않도록 주의한다.'},
    speakers: {Sena: {voice: 0, pitch: 1.15}, Dad: {voice: 2, pitch: .85}, Leo: {voice: 1, pitch: 1}, Mira: {voice: 0, pitch: 1.1}, 'Mr. Han': {voice: 2, pitch: .95}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '허락 구하고 답하기',
        key: {q: ['Can I ~?', 'May I ~?', 'Is it okay if I ~?'], a: ['Sure. Go ahead.', 'Yes, you can.', 'Sorry, you can’t.']},
        note: 'May I ~?는 Can I ~?보다 공손하다. 허락하지 않을 때는 Sorry, you can’t. 뒤에 까닭을 말한다.',
        dialogs: [
          { title: 'Dialogue A', setting: '저녁, 거실', lines: [
            {s: 'Sena', en: 'Dad, {{can I}} download this game?', ko: '아빠, 이 게임 내려받아도 돼요?'},
            {s: 'Dad', en: 'Let me see. Hmm, it’s from a strange website.', ko: '어디 보자. 음, 이상한 사이트에서 온 거구나.'},
            {s: 'Sena', en: 'Is that bad?', ko: '그게 나빠요?'},
            {s: 'Dad', en: 'Yes. It can have a virus. {{Sorry, you can’t}}.', ko: '응. 바이러스가 있을 수 있어. 미안하지만 안 돼.'},
            {s: 'Sena', en: 'Okay. {{May I}} download it from the app store?', ko: '알겠어요. 앱 스토어에서 내려받아도 돼요?'},
            {s: 'Dad', en: '{{Sure. Go ahead}}.', ko: '물론이지. 그렇게 하렴.'}
          ]},
          { title: 'Dialogue B', setting: '교실, 사진 찍기 전', lines: [
            {s: 'A', en: '{{Is it okay if I}} post our class photo online?', ko: '우리 반 사진 온라인에 올려도 될까?'},
            {s: 'B', en: 'Let’s ask everyone first. Some people may not want it.', ko: '먼저 모두에게 물어보자. 원하지 않는 사람도 있을 수 있어.'},
            {s: 'A', en: 'Good point. I’ll ask them.', ko: '좋은 지적이야. 물어볼게.'},
            {s: 'B', en: 'Thanks!', ko: '고마워!'}
          ]}
        ],
        check: [
          {q: 'Why can’t Sena download the game at first?', a: 'It’s from a strange website, and it can have a virus.'},
          {q: 'Where can Sena download it?', a: 'From the app store.'},
          {q: 'What will A do before posting the photo?', a: 'A will ask everyone first.'}
        ],
        drill: {frame: ['A: Can I ____?', 'B: Sure. Go ahead.'], opts: ['use your phone', 'post this photo', 'watch one more video', 'download this app', 'use your computer', 'join the group chat']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '동의하고 반대하기',
        key: {q: ['I think ~. What do you think?', 'Do you agree?'], a: ['I agree (with you).', 'I don’t agree.', 'You’re right. / I don’t think so.']},
        note: '반대할 때도 I don’t agree. 뒤에 Because ~로 까닭을 말하면 예의 있게 들린다.',
        dialogs: [
          { title: 'Dialogue A', setting: '정보 시간, 토론 활동', lines: [
            {s: 'Mr. Han', en: 'Leo, I think phones are the most useful tool for students. {{What do you think}}?', ko: '레오, 나는 휴대폰이 학생들에게 가장 쓸모 있는 도구라고 생각해. 너는 어떻게 생각하니?'},
            {s: 'Leo', en: '{{I agree}}. We can find information quickly.', ko: '동의해요. 정보를 빨리 찾을 수 있잖아요.'},
            {s: 'Mira', en: '{{I don’t agree}}. Some students use them for games all day.', ko: '저는 동의하지 않아요. 하루 종일 게임만 하는 학생도 있어요.'},
            {s: 'Mr. Han', en: 'Good points. So how should we use them?', ko: '좋은 의견들이구나. 그럼 어떻게 써야 할까?'},
            {s: 'Mira', en: 'If we make rules, phones can be useful.', ko: '규칙을 만들면 휴대폰이 쓸모 있을 수 있어요.'}
          ]},
          { title: 'Dialogue B', setting: '쉬는 시간', lines: [
            {s: 'A', en: 'Online friends are the same as real friends. {{Do you agree}}?', ko: '온라인 친구는 진짜 친구랑 똑같아. 동의해?'},
            {s: 'B', en: '{{I don’t think so}}. We don’t really know them.', ko: '그렇게 생각 안 해. 우리는 그들을 잘 모르잖아.'},
            {s: 'A', en: 'Hmm, {{you’re right}}. We should be careful.', ko: '음, 네 말이 맞아. 조심해야겠다.'},
            {s: 'B', en: 'Yes. Never share personal information with them.', ko: '응. 개인 정보는 절대 공유하지 마.'}
          ]}
        ],
        check: [
          {q: 'Why does Leo agree?', a: 'Because students can find information quickly.'},
          {q: 'Why doesn’t Mira agree?', a: 'Some students use phones for games all day.'},
          {q: 'What should we never share with online friends?', a: 'Personal information.'}
        ],
        drill: {frame: ['A: I think ____. What do you think?', 'B: I agree. / I don’t agree.'], opts: ['games are fun', 'phones are useful', 'videos are too long', 'online classes are easy', 'emojis are cute', 'chatting is good']}
      }
    ],
    interviewEx: 'Minjun thinks phones are useful. I don’t agree because he plays games too much.',
    watch: {
      label: 'Let’s Watch', title: 'The Shocking News', setting: '점심시간. 미라가 휴대폰을 들고 놀란 얼굴로 레오에게 달려온다.',
      lines: [
        {s: 'Mira', en: 'Leo, look! This post says school is closed tomorrow!', ko: '레오, 봐! 이 게시물에 내일 학교가 쉰대!'},
        {s: 'Leo', en: 'Really? Who posted it?', ko: '정말? 누가 올렸어?'},
        {s: 'Mira', en: 'I don’t know. Can I share it with our class chat?', ko: '몰라. 우리 반 단톡방에 공유해도 될까?'},
        {s: 'Leo', en: 'Wait. If it’s fake, everyone will be confused. Let’s check the school website first.', ko: '잠깐. 만약 가짜면 모두가 혼란스러울 거야. 먼저 학교 홈페이지를 확인하자.'},
        {s: 'Mira', en: 'Oh, the website says nothing about it.', ko: '어, 홈페이지에는 아무 말도 없네.'},
        {s: 'Leo', en: 'See? It’s fake news. Checking is the smartest thing to do.', ko: '봤지? 가짜 뉴스야. 확인하는 게 가장 똑똑한 일이야.'}
      ],
      check: [
        {q: 'What did the post say?', a: 'School is closed tomorrow.'},
        {q: 'What did Leo want to check first?', a: 'The school website.'},
        {q: 'Was the news true?', a: 'No, it was fake news.'}
      ]
    },
    wrap: {en: 'Ask your partner for permission, then share an opinion and agree or disagree.', ko: '허락을 구하는 대화와 의견에 동의·반대하는 대화를 짝과 해 보기'}
  },

  grammar: {
    cover: 'the -est · if',
    hook: {en: 'This is {{the strongest}} password.  /  {{If}} you see a mean comment, tell an adult.', ko: '빈칸에 들어갈 말은 각각 어떤 뜻을 더해 줄까?', answer: 'the strongest는 ‘가장 강한’(최상급), If는 ‘만약 ~하면’(조건)', note: '비교급(stronger)과 최상급(the strongest)의 차이를 먼저 묻는다.'},
    points: [
      { id: 'g1', name: '최상급', short: '최상급', form: 'the + 형용사-est / the most + 형용사', meaning: '가장 ~한',
        notice: [
          {en: 'This is {{the strongest}} password.', ko: '이것이 가장 강한 비밀번호다.'},
          {en: 'Being kind is {{the most important}} rule.', ko: '친절하기가 가장 중요한 규칙이다.'},
          {en: 'Checking facts is {{the best}} way.', ko: '사실 확인이 가장 좋은 방법이다.'}
        ],
        rule: [
          {k: '짧은 말', v: 'the + -est (big → the biggest, easy → the easiest)', ex: 'It’s the easiest game.'},
          {k: '긴 말', v: 'the most + 형용사', ex: 'the most useful app'},
          {k: '불규칙', v: 'good → the best, bad → the worst', ex: 'That was the worst day.'}
        ],
        compare: {
          title: '원급 · 비교급 · 최상급', note: '세 단계를 소리 내어 읽게 한다. 최상급 앞의 the를 빠뜨리지 않게 한다.',
          head: ['원급', '비교급 (than)', '최상급 (the)'],
          cols: [['strong', 'easy', 'important'], ['stronger', 'easier', 'more important'], ['the strongest', 'the easiest', 'the most important']]
        },
        check: [
          {q: 'This is the ____ rule. (important)', a: 'most important'},
          {q: 'He is the ____ boy in our class. (tall)', a: 'tallest'},
          {q: 'This is the ____ way. (easy)', a: 'easiest'},
          {q: 'It was the ____ news of the year. (bad)', a: 'worst'},
          {q: 'She is ____ best player. (the)', a: 'the'}
        ],
        trap: {bad: 'This is the most strong password.', good: 'This is the strongest password.', why: '짧은 형용사는 the most가 아니라 the -est.'},
        scramble: [
          {ko: '친절하기가 가장 중요한 규칙이다.', en: 'Being kind is the most important rule.'},
          {ko: '이것이 가장 긴 비밀번호다.', en: 'This is the longest password.'},
          {ko: '확인하는 것이 가장 좋은 방법이다.', en: 'Checking is the best way.'}
        ]
      },
      { id: 'g2', name: '조건의 if', short: 'if (조건)', form: 'If + 주어 + 현재시제, 주어 + will / 명령문', meaning: '만약 ~하면',
        notice: [
          {en: '{{If}} you see a mean comment, tell an adult.', ko: '못된 댓글을 보면 어른에게 말해라.'},
          {en: '{{If}} you share your password, someone can use your account.', ko: '비밀번호를 공유하면 누군가 네 계정을 쓸 수 있다.'},
          {en: 'You will feel better {{if}} you take a break.', ko: '잠시 쉬면 기분이 나아질 것이다.'}
        ],
        rule: [
          {k: '자리', v: 'If절이 앞이면 쉼표(,) / 뒤면 쉼표 없음', ex: 'Ask for help if you are not sure.'},
          {k: '시제', v: 'If절은 미래 일이라도 현재시제', ex: 'If it rains tomorrow, I will stay home.'},
          {k: '결과', v: '주절: will + 동사원형 / can / 명령문', ex: 'If you’re tired, take a break.'}
        ],
        check: [
          {q: '____ you are not sure, ask an adult. (만약 ~하면)', a: 'If'},
          {q: 'If you post it, everyone ____ see it. (will)', a: 'will'},
          {q: 'If it ____ fake, don’t share it. (be)', a: 'is'},
          {q: 'If you ____ a break, you will feel better. (take)', a: 'take'},
          {q: 'You can’t log in if you ____ your password. (forget)', a: 'forget'}
        ],
        trap: {bad: 'If you will share it, it will spread fast.', good: 'If you share it, it will spread fast.', why: '조건의 If절에서는 will을 쓰지 않고 현재시제를 쓴다.'},
        scramble: [
          {ko: '확실하지 않으면 공유하지 마라.', en: 'If you are not sure, don’t share it.'},
          {ko: '잠시 쉬면 눈이 편해질 것이다.', en: 'If you take a break, your eyes will feel better.'},
          {ko: '못된 댓글을 보면 신고해라.', en: 'If you see a mean comment, report it.'}
        ]
      }
    ],
    wrap: {en: 'The most important online rule is ______. If ______, ______.', ko: '최상급 한 문장, if 조건문 한 문장으로 나의 온라인 약속 쓰기'},
    wrapEx: 'The most important online rule is being kind. If I see a mean comment, I will tell my teacher.'
  },

  reading: {
    title: 'Five Tips for a Smart Online Life', kind: '정보 안내문', cover: 'Click', coverKo: '누르기 전에 생각하기', cover2: 'Kind', coverKo2: '똑똑하고 친절한 온라인',
    before: [
      {q: 'Look at the title. What will the five tips be about?', a: '온라인에서 안전하고 똑똑하게 지내는 방법'},
      {q: 'What is one online rule you know?', a: '비밀번호 지키기, 낯선 사람 조심 등'}
    ],
    gloss: {'tips': '조언, 요령', 'birthday': '생일', 'symbols': '기호', 'forever': '영원히', 'screenshot': '화면 캡처', 'headline': '(기사) 제목', 'sources': '출처', 'behind': '~ 뒤에', 'eyes': '눈', 'blink': '눈을 깜빡이다'},
    paras: [
      {who: '', en: 'The internet is the biggest library in the world. We learn, play, and talk there every day. But it can also be dangerous. Here are five tips for a smart online life.',
       ko: '인터넷은 세상에서 가장 큰 도서관입니다. 우리는 날마다 그곳에서 배우고 놀고 이야기하죠. 하지만 위험할 수도 있습니다. 똑똑한 온라인 생활을 위한 다섯 가지 팁을 소개합니다.',
       check: {q: 'What is the internet compared to?', a: 'The biggest library in the world.'}, think: '인터넷이 도서관과 닮은 점과 다른 점은?'},
      {who: 'Tip 1 · Passwords', en: 'Make a strong password. Your birthday is the worst password because it’s easy to guess. Use letters, numbers, and symbols. And keep it secret, even from your best friend.',
       ko: '강한 비밀번호를 만드세요. 생일은 추측하기 쉬워서 최악의 비밀번호입니다. 글자, 숫자, 기호를 섞어 쓰세요. 그리고 가장 친한 친구에게도 비밀로 하세요.',
       check: {q: 'Why is your birthday the worst password?', a: 'Because it’s easy to guess.'}, think: '강한 비밀번호의 조건 세 가지는?'},
      {who: 'Tip 2 · Posts', en: 'Think before you post. If you post a photo, it can stay online forever. Someone can take a screenshot. So ask yourself, “Is it okay if my teacher or my grandma sees this?”',
       ko: '게시하기 전에 생각하세요. 사진을 올리면 그것은 온라인에 영원히 남을 수 있습니다. 누군가 화면을 캡처할 수도 있어요. 그러니 스스로 물어보세요. “선생님이나 할머니가 이걸 보셔도 괜찮을까?”',
       check: {q: 'What can happen if you post a photo?', a: 'It can stay online forever (someone can take a screenshot).'}, think: '올리기 전에 던질 다른 질문은?'},
      {who: 'Tip 3 · Facts', en: 'Not everything online is true. Fake news often has the most shocking headlines. If you are not sure, check other sources before you share it.',
       ko: '온라인의 모든 것이 사실은 아닙니다. 가짜 뉴스는 흔히 가장 충격적인 제목을 달고 있어요. 확실하지 않으면 공유하기 전에 다른 출처를 확인하세요.',
       check: {q: 'What should you do if you are not sure?', a: 'Check other sources before you share it.'}, think: '가짜 뉴스를 구별하는 방법은?'},
      {who: 'Tip 4 · Kindness', en: 'Remember there is a real person behind every screen. Don’t write mean comments. If someone is mean to you, don’t answer. Take a screenshot and tell an adult.',
       ko: '모든 화면 뒤에는 진짜 사람이 있다는 걸 기억하세요. 못된 댓글을 쓰지 마세요. 누군가 여러분에게 못되게 굴면 대꾸하지 마세요. 화면을 캡처하고 어른에게 알리세요.',
       check: {q: 'What should you do if someone is mean to you?', a: 'Don’t answer. Take a screenshot and tell an adult.'}, think: '친구가 그런 일을 겪는다면 어떻게 도울까?'},
      {who: 'Tip 5 · Breaks', en: 'Take a break. Your eyes get tired when you look at a screen for a long time. Every 30 minutes, look far away and blink. The most important tip? Be safe, be smart, and be kind!',
       ko: '쉬세요. 화면을 오래 보면 눈이 피곤해집니다. 30분마다 먼 곳을 보고 눈을 깜빡이세요. 가장 중요한 팁은? 안전하게, 똑똑하게, 그리고 친절하게!',
       check: {q: 'What should you do every 30 minutes?', a: 'Look far away and blink.'}, think: '다섯 팁 중 나에게 가장 필요한 것은?'}
    ],
    split: 3,
    next: '나머지 세 가지 팁은\n무엇일까?',
    recap: {q: '앞의 두 가지 팁은?', items: [{k: 'TIP 1', v: 'make a strong password and keep it secret'}, {k: 'TIP 2', v: 'think before you post'}]},
    tf: [
      {p: 0, s: 'The writer says the internet is never dangerous.', a: false, why: '위험할 수도 있다.'},
      {p: 1, s: 'Your birthday is a strong password.', a: false, why: '추측하기 쉬워 최악이다.'},
      {p: 2, s: 'A photo can stay online forever.', a: true},
      {p: 3, s: 'Fake news often has shocking headlines.', a: true},
      {p: 4, s: 'You should answer mean comments.', a: false, why: '대꾸하지 말고 어른에게 알린다.'},
      {p: 5, s: 'You should take a break every 30 minutes.', a: true}
    ],
    key: [
      {en: 'The internet is {{the biggest}} library in the world.', note: '최상급: the + -est', g: 'g1'},
      {en: 'Your birthday is {{the worst}} password.', note: '불규칙 최상급: bad → the worst', g: 'g1'},
      {en: '{{If}} you {{post}} a photo, it can stay online forever.', note: 'If + 현재시제', g: 'g2'},
      {en: 'Fake news often has {{the most shocking}} headlines.', note: 'the most + 긴 형용사', g: 'g1'},
      {en: '{{If}} someone is mean to you, {{don’t answer}}.', note: 'If절 + 명령문', g: 'g2'},
      {en: '{{The most important}} tip? Be safe, be smart, and be kind!', note: 'the most important', g: 'g1'}
    ],
    summary: {text: 'Make a strong {{password}} and keep it secret. Think before you {{post}}. If you are not sure, check other {{sources}}. Don’t write {{mean}} comments, and tell an adult about bad ones. Take a {{break}} every 30 minutes. Be safe, be smart, and be {{kind}}!'},
    order: ['Someone writes a mean comment.', 'You don’t answer it.', 'You take a screenshot.', 'You tell an adult.'],
    chart: {title: 'FIVE TIPS', ko: '다섯 가지 팁 정리하기', cols: ['Do', 'Don’t'], note: '각 팁을 Do / Don’t로 나누어 정리한 뒤 if 문장으로 말하게 한다.', rows: [
      {name: 'Password', cells: ['letters, numbers, symbols', 'use your birthday']},
      {name: 'Posts & facts', cells: ['think and check sources', 'share before checking']},
      {name: 'People & breaks', cells: ['be kind, take breaks', 'write mean comments']}
    ]},
    wrap: {en: 'The most important online rule for me is ______. If ______, I will ______.', ko: '관통 질문으로 돌아가기: 나의 온라인 약속 쓰기'}
  },

  quiz: [
    ['“비밀번호”를 뜻하는 낱말은?', ['post', 'screen', 'comment', 'password'], 3, 'password: 비밀번호'],
    ['“fake”의 반대말은?', ['real', 'mean', 'safe', 'online'], 0, 'fake ↔ real'],
    ['“Take a ___ every hour.” (잠시 쉬다)', ['rest', 'break', 'stop', 'time'], 1, 'take a break'],
    ['“Keep your password ___.” (비밀로)', ['safe', 'true', 'online', 'secret'], 3, 'keep ~ secret'],
    ['허락을 구하는 표현은?', ['I agree.', 'May I use it?', 'Go ahead.', 'You’re right.'], 1, 'May I ~? / Can I ~?'],
    ['반대 의견을 나타내는 표현은?', ['I agree.', 'Sure, go ahead.', 'I don’t think so.', 'You’re right about it.'], 2, 'I don’t agree. / I don’t think so.'],
    ['Let’s Watch에서 레오가 먼저 확인하자고 한 것은?', ['반 단톡방', '학교 홈페이지', '친구의 휴대폰', '선생님의 메일'], 1, 'Let’s check the school website first.'],
    ['빈칸에 알맞은 것은? “This is the ___ password.”', ['strong', 'stronger', 'most strong', 'strongest'], 3, 'the + 최상급'],
    ['“bad”의 최상급은?', ['the worst', 'the baddest', 'the most bad', 'the worse'], 0, 'bad – worse – the worst'],
    ['빈칸에 알맞은 것은? “If it ___ fake, don’t share it.”', ['be', 'is', 'will be', 'being'], 1, 'If절은 현재시제'],
    ['어법상 틀린 문장은?', ['It is the best way.', 'If you see it, tell me.', 'If it will rain, stay home.', 'This is the most useful app.'], 2, 'If it rains, stay home.으로 고쳐야 한다.'],
    ['생일이 최악의 비밀번호인 까닭은?', ['추측하기 쉬워서', '너무 길어서', '숫자가 없어서', '잊어버리기 쉬워서'], 0, 'it’s easy to guess'],
    ['가짜 뉴스의 특징으로 글에 나온 것은?', ['출처가 아주 많다', '글이 아주 짧다', '제목이 충격적이다', '사진이 꼭 들어 있다'], 2, 'the most shocking headlines'],
    ['못된 댓글을 받았을 때 하면 안 되는 것은?', ['대꾸하기', '어른에게 알리기', '화면 캡처하기', '대꾸하지 않기'], 0, 'don’t answer'],
    ['30분마다 하라고 한 것은?', ['비밀번호 바꾸기', '댓글 모두 확인하기', '먼 곳 보고 깜빡이기', '사진을 많이 올리기'], 2, 'look far away and blink']
  ]
};
