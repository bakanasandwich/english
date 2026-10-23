/* 중1 영어(동아·윤정미) Lesson 3 · Let's Be Positive
   단원명과 문법(과거시제, 명령문)은 교과서·문제집 목차 기준. 의사소통 기능은 추정(estimate: true).
   대화문·읽기 글은 교과서 원문이 아니라 단원 주제에 맞춰 새로 쓴 글입니다. */
window.LESSON = {
  book: 'm1-donga', no: 3, estimate: true,
  title: 'Let’s Be Positive', ko: '긍정적으로 생각하자',
  bigQ: {en: 'How can we turn a bad day into a good one?', ko: '나쁜 하루를 어떻게 좋은 하루로 바꿀 수 있을까?'},
  goals: {
    vocab: ['감정·태도와 관련된 낱말 16개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 오늘의 기분을 한 문장으로 말할 수 있다.'],
    talk: ['지난 일이 어땠는지 묻고 답할 수 있다.', '칭찬하고 격려할 수 있다.'],
    grammar: ['과거시제(규칙·불규칙)로 지난 일을 말할 수 있다.', '명령문으로 조언하거나 부탁할 수 있다.'],
    read1: ['이야기의 앞부분을 읽고 준호의 나쁜 아침을 시간 순서대로 이해할 수 있다.'],
    read2: ['준호의 마음 변화를 파악하고, 나에게 주는 긍정 메시지를 영어로 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'What do you do when you have a bad day?', ko: '기분이 안 좋은 날 여러분은 무엇을 하나요?', note: '음악 듣기, 자기, 친구와 이야기하기 등. 나쁜 기분을 바꾸는 방법을 모아 두면 읽기 글의 조언과 비교할 수 있다.'},
    words: [
      {w: 'positive', pos: 'adj.', ko: '긍정적인', ic: '🌞', audio: 'assets/audio/positive.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Try to be positive.', exKo: '긍정적이 되도록 노력해라.'},
      {w: 'negative', pos: 'adj.', ko: '부정적인', ic: '🌧️', audio: 'assets/audio/negative.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Don’t say negative things.', exKo: '부정적인 말을 하지 마라.'},
      {w: 'upset', pos: 'adj.', ko: '속상한, 화난', ic: '😣', ex: 'I was upset about the test.', exKo: '나는 시험 때문에 속상했다.'},
      {w: 'terrible', pos: 'adj.', ko: '끔찍한, 최악의', ic: '😫', audio: 'assets/audio/terrible.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'It was a terrible morning.', exKo: '최악의 아침이었다.'},
      {w: 'smile', pos: 'v./n.', ko: '미소 짓다; 미소', ic: '🙂', audio: 'assets/audio/smile.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Smile at your friends.', exKo: '친구들에게 미소 지어라.'},
      {w: 'miss', pos: 'v.', ko: '놓치다', ic: '🚌', audio: 'assets/audio/miss.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'I missed the bus.', exKo: '나는 버스를 놓쳤다.'},
      {w: 'drop', pos: 'v.', ko: '떨어뜨리다', ic: '⬇️', audio: 'assets/audio/drop.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'He dropped his phone.', exKo: '그는 휴대폰을 떨어뜨렸다.'},
      {w: 'wet', pos: 'adj.', ko: '젖은', ic: '💦', audio: 'assets/audio/wet.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'My shoes got wet in the rain.', exKo: '내 신발이 비에 젖었다.'},
      {w: 'mistake', pos: 'n.', ko: '실수', ic: '❌', audio: 'assets/audio/mistake.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Everyone makes mistakes.', exKo: '누구나 실수를 한다.'},
      {w: 'lucky', pos: 'adj.', ko: '운이 좋은', ic: '🍀', audio: 'assets/audio/lucky.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'I was lucky today.', exKo: '나는 오늘 운이 좋았다.'},
      {w: 'thankful', pos: 'adj.', ko: '고마워하는', ic: '🙏', ex: 'I am thankful for my family.', exKo: '나는 가족에게 고맙다.'},
      {w: 'try', pos: 'v.', ko: '노력하다, 해 보다', ic: '💪', audio: 'assets/audio/try.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Try again tomorrow.', exKo: '내일 다시 해 봐.'},
      {w: 'diary', pos: 'n.', ko: '일기', ic: '📔', audio: 'assets/audio/diary.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'I write in my diary every night.', exKo: '나는 매일 밤 일기를 쓴다.'},
      {w: 'advice', pos: 'n.', ko: '조언', ic: '🗣️', audio: 'assets/audio/advice.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Grandma gave me good advice.', exKo: '할머니가 좋은 조언을 해 주셨다.'},
      {w: 'proud', pos: 'adj.', ko: '자랑스러운', ic: '🏅', audio: 'assets/audio/proud.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'I am proud of you.', exKo: '나는 네가 자랑스럽다.'},
      {w: 'change', pos: 'v./n.', ko: '바꾸다; 변화', ic: '🔄', audio: 'assets/audio/change.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'A smile can change your day.', exKo: '미소 하나가 하루를 바꿀 수 있다.'}
    ],
    phrases: [
      {w: 'give up', ko: '포기하다', ex: 'Don’t give up.', exKo: '포기하지 마.'},
      {w: 'cheer up', ko: '기운을 내다', ex: 'Cheer up! It’s okay.', exKo: '기운 내! 괜찮아.'},
      {w: 'look on the bright side', ko: '좋은 면을 보다', ex: 'Always look on the bright side.', exKo: '언제나 좋은 면을 봐.'},
      {w: 'be good for', ko: '~에 좋다', ex: 'Laughing is good for you.', exKo: '웃음은 너에게 좋다.'},
      {w: 'do one’s best', ko: '최선을 다하다', ex: 'I did my best.', exKo: '나는 최선을 다했다.'},
      {w: 'feel better', ko: '기분이 나아지다', ex: 'I felt better after the walk.', exKo: '산책 후에 기분이 나아졌다.'}
    ],
    pairs: [
      {a: 'positive', b: 'negative', rel: '반대말'},
      {a: 'lucky', b: 'unlucky', rel: '반대말'},
      {a: 'terrible', b: 'wonderful', rel: '반대말'},
      {a: 'thank', b: 'thankful', rel: '동사 / 형용사'}
    ],
    wrap: {en: 'Today, I feel ______. One good thing today is ______.', ko: '오늘 배운 낱말로 오늘의 기분과 좋은 일 하나 쓰기'}
  },

  talk: {
    hook: {en: 'How was your weekend?', ko: '주말은 어땠나요?', note: '좋았다 / 그저 그랬다 / 별로였다 중 하나를 손짓으로 표시하게 하고, 한 일을 묻는다. How was ~? 질문을 미리 들려준다.'},
    speakers: {Junho: {voice: 1, pitch: .95}, Ara: {voice: 0, pitch: 1.15}, Coach: {voice: 2, pitch: .9}, Eunji: {voice: 0, pitch: 1.1}, Grandma: {voice: 2, pitch: 1.1}, Kevin: {voice: 1, pitch: 1}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '지난 일 묻고 답하기',
        key: {q: ['How was ~?', 'What did you do ~?'], a: ['It was great / okay / terrible.', 'I ~ed (과거시제).', 'That sounds fun! / That’s too bad.']},
        note: 'How was ~?에는 It was + 형용사. 무엇을 했는지는 과거시제로 답한다. 3차시 과거시제와 이어진다.',
        dialogs: [
          { title: 'Dialogue A', setting: '월요일 아침, 교실', lines: [
            {s: 'Ara', en: 'Junho, {{how was}} your weekend?', ko: '준호야, 주말 어땠어?'},
            {s: 'Junho', en: '{{It was terrible}}. I had a soccer game, and we lost.', ko: '최악이었어. 축구 시합이 있었는데 졌어.'},
            {s: 'Ara', en: '{{That’s too bad}}. Did you play well?', ko: '안됐다. 너는 잘했어?'},
            {s: 'Junho', en: 'I scored one goal.', ko: '한 골 넣었어.'},
            {s: 'Ara', en: 'Wow, that’s great! Look on the bright side.', ko: '와, 대단하다! 좋은 면을 봐.'}
          ]},
          { title: 'Dialogue B', setting: '점심시간', lines: [
            {s: 'A', en: '{{What did you do}} yesterday?', ko: '어제 뭐 했어?'},
            {s: 'B', en: 'I {{visited}} my grandma and {{baked}} cookies with her.', ko: '할머니 댁에 가서 할머니랑 쿠키를 구웠어.'},
            {s: 'A', en: '{{That sounds fun}}!', ko: '재미있었겠다!'},
            {s: 'B', en: 'It was. I brought some for you.', ko: '응. 너 주려고 좀 가져왔어.'}
          ]}
        ],
        check: [
          {q: 'How was Junho’s weekend?', a: 'It was terrible.'},
          {q: 'What did Junho do in the game?', a: 'He scored one goal.'},
          {q: 'What did B do yesterday?', a: 'B visited Grandma and baked cookies.'}
        ],
        drill: {frame: ['A: How was your weekend?', 'B: It was great. I ____.'], opts: ['watched a movie', 'played soccer', 'visited my grandma', 'cleaned my room', 'baked cookies', 'went camping']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '칭찬하고 격려하기',
        key: {q: ['Good job! / Well done!', 'You did a great job!'], a: ['Thanks. I did my best.', 'Don’t give up!', 'You can do it!']},
        note: '칭찬에는 Thanks.로 답하고, 실패한 친구에게는 Don’t give up! / You can do it! 으로 격려한다. 명령문의 쓰임과 이어진다.',
        dialogs: [
          { title: 'Dialogue A', setting: '방과 후, 체육관', lines: [
            {s: 'Coach', en: 'Eunji, you hit the ball well today. {{Good job}}!', ko: '은지야, 오늘 공 잘 쳤어. 잘했다!'},
            {s: 'Eunji', en: '{{Thanks. I did my best}}.', ko: '감사합니다. 최선을 다했어요.'},
            {s: 'Coach', en: 'But you missed some easy balls.', ko: '하지만 쉬운 공을 몇 개 놓쳤지.'},
            {s: 'Eunji', en: 'I know. I was so nervous.', ko: '알아요. 너무 긴장했어요.'},
            {s: 'Coach', en: '{{Don’t give up}}. Practice more, and you will be great.', ko: '포기하지 마. 더 연습하면 아주 잘할 거야.'}
          ]},
          { title: 'Dialogue B', setting: '수학 시간이 끝난 뒤', lines: [
            {s: 'A', en: 'I failed the math quiz again.', ko: '또 수학 쪽지 시험을 망쳤어.'},
            {s: 'B', en: 'Cheer up! {{You can do it}}. Let’s study together.', ko: '힘내! 넌 할 수 있어. 같이 공부하자.'},
            {s: 'A', en: 'Really? Thank you!', ko: '정말? 고마워!'},
            {s: 'B', en: 'No problem. Meet me at the library after school.', ko: '천만에. 방과 후에 도서관에서 만나.'}
          ]}
        ],
        check: [
          {q: 'Why does the coach say “Good job”?', a: 'Because Eunji hit the ball well.'},
          {q: 'Why did Eunji miss some easy balls?', a: 'She was so nervous.'},
          {q: 'Where will A and B meet?', a: 'At the library (after school).'}
        ],
        drill: {frame: ['A: I ____.', 'B: Cheer up! You can do it.'], opts: ['lost the game', 'failed the test', 'made a mistake', 'missed the bus', 'forgot my lines', 'dropped my lunch']}
      }
    ],
    interviewEx: 'Seho’s weekend was great. He went camping. I said, “That sounds fun!”',
    watch: {
      label: 'Let’s Watch', title: 'The Happy Jar', setting: '저녁, 할머니 댁. 케빈이 시무룩한 얼굴로 들어온다.',
      lines: [
        {s: 'Grandma', en: 'Kevin, you look upset. How was school?', ko: '케빈, 속상해 보이는구나. 학교는 어땠니?'},
        {s: 'Kevin', en: 'Terrible. I forgot my homework, and the teacher was angry.', ko: '최악이었어요. 숙제를 잊어버려서 선생님이 화나셨어요.'},
        {s: 'Grandma', en: 'Oh, that’s too bad. Look at this jar. It’s my happy jar.', ko: '저런, 안됐구나. 이 병을 보렴. 할머니의 행복 병이란다.'},
        {s: 'Kevin', en: 'What’s inside?', ko: '안에 뭐가 있어요?'},
        {s: 'Grandma', en: 'Little notes. Every night, write one good thing and put it in the jar.', ko: '작은 쪽지들이지. 매일 밤 좋은 일 하나를 써서 병에 넣으렴.'},
        {s: 'Kevin', en: 'Hmm. Today my friend shared his snack with me. I’ll write that!', ko: '음. 오늘 친구가 간식을 나눠 줬어요. 그걸 쓸래요!'}
      ],
      check: [
        {q: 'Why is Kevin upset?', a: 'He forgot his homework, and the teacher was angry.'},
        {q: 'What is in the happy jar?', a: 'Little notes (about good things).'},
        {q: 'What will Kevin write?', a: 'His friend shared his snack with him.'}
      ]
    },
    wrap: {en: 'Tell your partner about your weekend, and cheer them up or praise them.', ko: '주말에 한 일을 과거시제로 말하고, 짝을 칭찬하거나 격려하기'}
  },

  grammar: {
    cover: '-ed · Do!',
    hook: {en: 'Yesterday, I {{missed}} the bus.  /  {{Smile}}, and {{don’t give}} up!', ko: '빈칸에 들어갈 말은 각각 어떤 일을 할까?', answer: 'missed는 지난 일(과거시제), Smile / Don’t give up은 주어 없이 동사로 시작하는 명령문', note: 'Yesterday가 과거의 단서, 두 번째 문장은 주어가 없다는 점을 찾게 한다.'},
    points: [
      { id: 'g1', name: '과거시제', short: '과거시제', form: '동사-ed / 불규칙 과거형', meaning: '~했다',
        notice: [
          {en: 'I {{missed}} the bus this morning.', ko: '나는 오늘 아침 버스를 놓쳤다.'},
          {en: 'He {{dropped}} his lunch box.', ko: '그는 도시락을 떨어뜨렸다.'},
          {en: 'We {{went}} to the park and {{had}} fun.', ko: '우리는 공원에 가서 즐겁게 놀았다.'}
        ],
        rule: [
          {k: '규칙', v: '+ -ed / e로 끝나면 + -d / 자음+y → ied / 단모음+단자음 → 자음 하나 더', ex: 'play → played, like → liked, study → studied, stop → stopped'},
          {k: '불규칙', v: 'go → went, have → had, eat → ate, see → saw, come → came', ex: 'I ate pizza.'},
          {k: '부정·의문', v: 'didn’t + 동사원형 / Did + 주어 + 동사원형 ~?', ex: 'Did you see it? — No, I didn’t.'}
        ],
        compare: {
          title: '과거형 만드는 법', note: '불규칙 동사는 자주 쓰는 것부터 소리 내어 외우게 한다(go-went, have-had, eat-ate).',
          head: ['규칙 (-ed)', '모양 바꾸기', '불규칙'],
          cols: [['play → played', 'walk → walked', 'like → liked'], ['study → studied', 'stop → stopped', 'drop → dropped'], ['go → went', 'eat → ate', 'see → saw']]
        },
        check: [
          {q: 'I ____ my homework yesterday. (finish)', a: 'finished'},
          {q: 'She ____ to school by bike. (go, 과거)', a: 'went'},
          {q: 'We ____ English last night. (study)', a: 'studied'},
          {q: 'He didn’t ____ breakfast. (eat)', a: 'eat'},
          {q: '____ you watch the game? (과거 의문)', a: 'Did'}
        ],
        trap: {bad: 'I didn’t went to school.', good: 'I didn’t go to school.', why: 'didn’t 뒤에는 동사원형을 쓴다.'},
        scramble: [
          {ko: '나는 오늘 아침 버스를 놓쳤다.', en: 'I missed the bus this morning.'},
          {ko: '우리는 어제 쿠키를 구웠다.', en: 'We baked cookies yesterday.'},
          {ko: '너는 숙제를 했니?', en: 'Did you do your homework?'}
        ]
      },
      { id: 'g2', name: '명령문', short: '명령문', form: '동사원형 ~. / Don’t + 동사원형 ~. / Let’s + 동사원형 ~.', meaning: '~해라 / ~하지 마라 / ~하자',
        notice: [
          {en: '{{Smile}} at people.', ko: '사람들에게 미소 지어라.'},
          {en: '{{Don’t give}} up!', ko: '포기하지 마!'},
          {en: '{{Let’s look}} on the bright side.', ko: '좋은 면을 보자.'}
        ],
        rule: [
          {k: '긍정', v: '주어 없이 동사원형으로 시작 (Please를 붙이면 공손)', ex: 'Please be quiet.'},
          {k: '부정', v: 'Don’t / Never + 동사원형', ex: 'Don’t be sad.'},
          {k: '제안', v: 'Let’s + 동사원형 (부정: Let’s not ~)', ex: 'Let’s go together.'}
        ],
        check: [
          {q: '____ quiet in the library. (be)', a: 'Be'},
          {q: '____ run in the hallway. (부정 명령)', a: 'Don’t'},
          {q: 'Let’s ____ a walk. (take)', a: 'take'},
          {q: 'Don’t ____ negative. (be)', a: 'be'},
          {q: 'Please ____ the window. (open)', a: 'open'}
        ],
        trap: {bad: 'Don’t sad. Be happy!', good: 'Don’t be sad. Be happy!', why: '형용사 앞에는 be동사가 필요하다: Don’t + be + 형용사.'},
        scramble: [
          {ko: '하루에 좋은 일 하나를 써라.', en: 'Write one good thing a day.'},
          {ko: '실수를 두려워하지 마라.', en: 'Don’t be afraid of mistakes.'},
          {ko: '함께 웃자.', en: 'Let’s smile together.'}
        ]
      }
    ],
    wrap: {en: 'Yesterday, I ______. Don’t ______. Let’s ______!', ko: '과거시제 한 문장과 명령문 두 문장으로 친구에게 긍정 메시지 쓰기'},
    wrapEx: 'Yesterday, I failed the quiz. Don’t worry about me. Let’s study together!'
  },

  reading: {
    title: 'Junho’s Terrible, Wonderful Day', kind: '짧은 이야기', cover: 'Smile', coverKo: '최악의 아침', cover2: 'Bright', coverKo2: '좋은 면을 보는 법',
    before: [
      {q: 'Look at the title. Can a day be terrible and wonderful?', a: '나쁜 일과 좋은 일이 함께 있는 하루'},
      {q: 'What happens on a terrible day?', a: '늦잠, 버스 놓치기, 비 맞기 등'}
    ],
    gloss: {'alarm': '알람', 'woke up': '잠에서 깼다', 'soaking': '흠뻑 젖은', 'umbrella': '우산', 'spilled': '쏟았다', 'notebook': '공책', 'grumpy': '심술 난, 기분 나쁜', 'list': '목록', 'shared': '나눠 주었다', 'rainbow': '무지개'},
    paras: [
      {who: '7:40 a.m.', en: 'Junho’s alarm didn’t ring. He woke up late, and he ran to the bus stop. But the bus left right in front of him. He missed it!',
       ko: '준호의 알람이 울리지 않았다. 준호는 늦게 일어나 버스 정류장으로 달려갔다. 그런데 버스가 바로 눈앞에서 떠났다. 버스를 놓친 것이다!',
       check: {q: 'Why did Junho wake up late?', a: 'His alarm didn’t ring.'}, think: '이럴 때 여러분은 어떤 말을 할까?'},
      {who: '8:10 a.m.', en: 'Then it started to rain. Junho had no umbrella, so he got soaking wet. At school, he spilled milk on his notebook. “What a terrible day!” he said.',
       ko: '그러다 비가 오기 시작했다. 준호는 우산이 없어서 흠뻑 젖었다. 학교에서는 공책에 우유를 쏟았다. “정말 최악의 날이야!” 준호가 말했다.',
       check: {q: 'What did Junho spill on his notebook?', a: 'Milk.'}, think: '준호의 기분은 어땠을까?'},
      {who: '12:30 p.m.', en: 'At lunch, Junho was grumpy. He didn’t talk to anyone. His friend Ara asked, “Are you okay?” “No,” he said. “Everything went wrong today.”',
       ko: '점심시간에 준호는 기분이 나빴다. 아무하고도 말하지 않았다. 친구 아라가 물었다. “괜찮아?” “아니.” 준호가 말했다. “오늘은 모든 게 잘못됐어.”',
       check: {q: 'What did Ara ask Junho?', a: '“Are you okay?”'}, think: '아라라면 준호에게 무슨 말을 해 줄까?'},
      {who: 'After School', en: 'Ara took out a pen. “Let’s make a list,” she said. “Write three good things about today. Don’t write any bad things.” Junho thought hard.',
       ko: '아라가 펜을 꺼냈다. “목록을 만들자.” 아라가 말했다. “오늘 있었던 좋은 일 세 가지를 써 봐. 나쁜 일은 쓰지 마.” 준호는 곰곰이 생각했다.',
       check: {q: 'What did Ara tell Junho to write?', a: 'Three good things about today.'}, think: '여러분의 오늘 좋은 일 세 가지는?'},
      {who: 'Junho’s List', en: '1. My teacher gave me a dry towel. 2. Ara shared her snack with me. 3. After the rain, I saw a big rainbow. Junho read his list and smiled. “I was lucky, too,” he said.',
       ko: '1. 선생님이 마른 수건을 주셨다. 2. 아라가 간식을 나눠 주었다. 3. 비가 그친 뒤 큰 무지개를 보았다. 준호는 목록을 읽고 미소 지었다. “나 운도 좋았네.” 준호가 말했다.',
       check: {q: 'What did Junho see after the rain?', a: 'A big rainbow.'}, think: '목록을 쓰고 준호의 기분은 왜 바뀌었을까?'},
      {who: 'That Night', en: 'That night, Junho wrote in his diary: “Today was terrible and wonderful. Bad things happen, but good things happen, too. Look for them, and smile!”',
       ko: '그날 밤 준호는 일기에 썼다. “오늘은 최악이면서 멋진 날이었다. 나쁜 일도 일어나지만 좋은 일도 일어난다. 좋은 일을 찾고, 미소 짓자!”',
       check: {q: 'What did Junho write in his diary?', a: 'Today was terrible and wonderful.'}, think: '여러분에게 주고 싶은 한 문장 명령문은?'}
    ],
    split: 3,
    next: '준호의 하루는\n어떻게 바뀌었을까?',
    recap: {q: '준호의 아침은 어땠을까?', items: [{k: '7:40', v: 'woke up late · missed the bus'}, {k: '8:10', v: 'got soaking wet · spilled milk'}, {k: '12:30', v: 'grumpy · didn’t talk to anyone'}]},
    tf: [
      {p: 0, s: 'Junho’s alarm rang on time.', a: false, why: '알람이 울리지 않았다.'},
      {p: 1, s: 'Junho had an umbrella.', a: false, why: '우산이 없어서 젖었다.'},
      {p: 2, s: 'Junho was grumpy at lunch.', a: true},
      {p: 3, s: 'Ara told Junho to write bad things.', a: false, why: '좋은 일 세 가지를 쓰라고 했다.'},
      {p: 4, s: 'Ara shared her snack with Junho.', a: true},
      {p: 5, s: 'Junho wrote in his diary that night.', a: true}
    ],
    key: [
      {en: 'He {{woke}} up late, and he {{ran}} to the bus stop.', note: '불규칙 과거: wake → woke, run → ran', g: 'g1'},
      {en: 'Junho’s alarm {{didn’t ring}}.', note: '과거 부정: didn’t + 동사원형', g: 'g1'},
      {en: 'He {{spilled}} milk on his notebook.', note: '규칙 과거: spill → spilled', g: 'g1'},
      {en: '“{{Let’s make}} a list.”', note: 'Let’s + 동사원형: ~하자', g: 'g2'},
      {en: '“{{Write}} three good things. {{Don’t write}} any bad things.”', note: '긍정 명령문 / 부정 명령문', g: 'g2'},
      {en: '{{Look}} for them, and {{smile}}!', note: '명령문 두 개를 and로 연결', g: 'g2'}
    ],
    summary: {text: 'Junho {{missed}} the bus, got wet in the rain, and spilled milk. He was {{grumpy}}. Ara told him to write three {{good}} things. A dry towel, a shared snack, and a {{rainbow}} made him {{smile}}. Bad things happen, but good things happen, {{too}}.'},
    order: ['Junho woke up late.', 'He missed the bus.', 'He got soaking wet.', 'He spilled milk on his notebook.'],
    chart: {title: 'JUNHO’S DAY', ko: '준호의 하루 정리하기', cols: ['What happened', 'How he felt'], note: '시간 순서대로 사건과 기분을 정리한 뒤, 기분을 바꾼 것이 ‘사건’이 아니라 ‘생각’이었다는 점을 짚는다.', rows: [
      {name: 'Morning', cells: ['missed the bus, got wet', 'terrible']},
      {name: 'Lunch', cells: ['didn’t talk to anyone', 'grumpy']},
      {name: 'After school', cells: ['wrote three good things', 'lucky, happy']}
    ]},
    wrap: {en: 'Yesterday, I ______. But ______ happened, too. ______, and smile!', ko: '관통 질문으로 돌아가기: 나의 나쁜 일·좋은 일과 나에게 주는 명령문 쓰기'}
  },

  quiz: [
    ['“긍정적인”을 뜻하는 낱말은?', ['upset', 'lucky', 'terrible', 'positive'], 3, 'positive: 긍정적인'],
    ['“positive”의 반대말은?', ['negative', 'thankful', 'wonderful', 'proud'], 0, 'positive ↔ negative'],
    ['“Don’t give ___!” (포기하지 마)', ['in', 'on', 'out', 'up'], 3, 'give up: 포기하다'],
    ['“I ___ the bus.” (놓쳤다)', ['missed', 'dropped', 'changed', 'smiled'], 0, 'miss: 놓치다'],
    ['“How was your weekend?”에 알맞은 대답은?', ['Yes, it was.', 'It was great.', 'I go camping.', 'Good job!'], 1, 'How was ~? → It was + 형용사'],
    ['격려하는 표현은?', ['That sounds fun.', 'How was it?', 'You can do it!', 'What did you do?'], 2, 'You can do it! / Don’t give up!'],
    ['Let’s Watch에서 할머니의 행복 병 안에 있는 것은?', ['사탕', '동전', '사진', '쪽지'], 3, 'Little notes.'],
    ['빈칸에 알맞은 것은? “We ___ English last night.”', ['study', 'studied', 'studyed', 'studies'], 1, 'study → studied'],
    ['빈칸에 알맞은 것은? “She ___ to the park yesterday.”', ['go', 'went', 'goes', 'going'], 1, 'go → went'],
    ['어법상 틀린 문장은?', ['Be quiet.', 'Let’s go.', 'Don’t sad.', 'Don’t run.'], 2, 'Don’t be sad.'],
    ['빈칸에 알맞은 것은? “I didn’t ___ breakfast.”', ['eat', 'ate', 'eats', 'eating'], 0, 'didn’t + 동사원형'],
    ['준호가 버스를 놓친 까닭은?', ['알람이 안 울려서', '비가 와서', '우유를 쏟아서', '친구를 오래 기다려서'], 0, 'His alarm didn’t ring.'],
    ['아라가 준호에게 쓰라고 한 것은?', ['반성문', '좋은 일 세 가지', '나쁜 일 세 가지', '내일 할 일'], 1, 'Write three good things.'],
    ['준호의 목록에 없는 것은?', ['무지개', '마른 수건', '나눠 준 간식', '새 우산'], 3, '새 우산은 목록에 없다.'],
    ['이야기의 교훈으로 알맞은 것은?', ['우산을 챙기자', '알람을 두 개 맞추자', '좋은 일을 찾아보자', '아침밥을 꼭 먹자'], 2, 'Look for them, and smile!']
  ]
};
