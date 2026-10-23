/* 중2 영어(동아·윤정미) Lesson 2 · How Teens Talk Now
   교과서 대조(2026-10): 의사소통 기능(되묻기 · 철자 묻고 답하기), 언어 형식(간접의문문 know who you are ~ · want + 목적어 + to부정사),
   읽기 주제(Text Better, Communicate Better! — 문자 메시지로 더 잘 소통하는 요령), 단원 어휘를 교과서 본문 어휘와 맞췄다.
   대화문·읽기 글은 저작권 때문에 교과서 원문을 싣지 않고, 같은 주제·같은 언어 형식·교과서 어휘로 새로 쓴 글이다. */
window.LESSON = {
  book: 'm2-donga', no: 2,
  title: 'How Teens Talk Now', ko: '요즘 십대는 어떻게 말할까',
  bigQ: {en: 'How can we communicate better online?', ko: '온라인에서 어떻게 더 잘 소통할 수 있을까?'},
  align: {
    tb: {reading: 'Text Better, Communicate Better!', funcs: ['되묻기', '철자 묻고 답하기'], forms: ['간접의문문 (know who you are talking to)', 'want + 목적어 + to부정사'],
      note: '교과서 읽기는 문자 메시지를 보낼 때의 요령 세 가지(받는 사람 생각하기, 이모지 해석 차이, 민감한 일은 전화하기)를 예시와 함께 소개하는 글. 여기 본문은 단체 채팅방에서의 요령 세 가지로 새로 쓴 글이다.'},
    std: {vocab: ['9영01-01', '9영02-01'], talk: ['9영01-01', '9영02-10'], grammar: ['9영02-03'], read1: ['9영01-06', '9영01-07'], read2: ['9영02-11', '9영02-09']},
    forms: ['Reports of Questions and Statements', 'To-Infinitive']
  },
  goals: {
    vocab: ['소통·메시지와 관련된 낱말 20개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 나의 메시지 습관을 한 문장으로 말할 수 있다.'],
    talk: ['잘 못 들었을 때 다시 말해 달라고 할 수 있다. (Can you please say that again?)', '철자를 묻고 답할 수 있다. (How do you spell it? — It’s ~.)'],
    grammar: ['간접의문문(의문사 + 주어 + 동사)을 문장 속에 넣어 쓸 수 있다.', 'want / ask / tell + 목적어 + to부정사로 남에게 바라는 일을 말할 수 있다.'],
    read1: ['단체 채팅방 요령을 읽고 오해가 생긴 까닭을 파악할 수 있다.'],
    read2: ['세 가지 요령을 정리하고, 우리 반 채팅방 약속을 영어로 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'How many messages do you send in a day?', ko: '하루에 메시지를 몇 개나 보내나요?', note: '숫자를 어림해 보게 하고, 메시지 때문에 오해가 생긴 경험을 하나 들어 본다.'},
    words: [
      {w: 'communicate', pos: 'v.', ko: '의사소통하다', ic: '💬', audio: 'assets/audio/communicate.mp3', audioCredit: 'Neskaya · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'We communicate by text.', exKo: '우리는 문자로 소통한다.'},
      {w: 'communication', pos: 'n.', ko: '의사소통', ic: '📡', ex: 'Texting is a main way of communication.', exKo: '문자는 주된 소통 방법이다.'},
      {w: 'text', pos: 'v. / n.', ko: '문자를 보내다; 문자', ic: '📱', audio: 'assets/audio/text.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'I texted my friend.', exKo: '나는 친구에게 문자를 보냈다.'},
      {w: 'message', pos: 'n.', ko: '메시지', ic: '✉️', audio: 'assets/audio/message.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'She got a long message.', exKo: '그녀는 긴 메시지를 받았다.'},
      {w: 'emoji', pos: 'n.', ko: '이모지 (그림 문자)', ic: '😊', ex: 'He uses a lot of emojis.', exKo: '그는 이모지를 많이 쓴다.'},
      {w: 'expression', pos: 'n.', ko: '표현; 표정', ic: '😮', audio: 'assets/audio/expression.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Be careful with such expressions.', exKo: '그런 표현은 조심해라.'},
      {w: 'facial', pos: 'adj.', ko: '얼굴의', ic: '🙂', ex: 'We use facial expressions.', exKo: '우리는 표정을 사용한다.'},
      {w: 'meaning', pos: 'n.', ko: '의미', ic: '🔤', audio: 'assets/audio/meaning.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'What is the meaning of “BRB”?', exKo: '“BRB”의 의미는 뭐니?'},
      {w: 'differently', pos: 'adv.', ko: '다르게', ic: '🔀', audio: 'assets/audio/differently.mp3', audioCredit: 'Neskaya · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'People read emojis differently.', exKo: '사람들은 이모지를 다르게 읽는다.'},
      {w: 'correctly', pos: 'adv.', ko: '정확하게, 올바르게', ic: '✔️', ex: 'Did he understand it correctly?', exKo: '그가 그것을 정확히 이해했을까?'},
      {w: 'misunderstanding', pos: 'n.', ko: '오해', ic: '❓', audio: 'assets/audio/misunderstanding.mp3', audioCredit: 'Neskaya · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Texts can cause misunderstandings.', exKo: '문자는 오해를 일으킬 수 있다.'},
      {w: 'sensitive', pos: 'adj.', ko: '민감한', ic: '🫧', audio: 'assets/audio/sensitive.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Don’t text about sensitive issues.', exKo: '민감한 일은 문자로 하지 마라.'},
      {w: 'casual', pos: 'adj.', ko: '격식 없는, 가벼운', ic: '👕', ex: 'Texting is OK for casual talk.', exKo: '문자는 가벼운 대화에는 괜찮다.'},
      {w: 'apologize', pos: 'v.', ko: '사과하다', ic: '🙇', audio: 'assets/audio/apologize.mp3', audioCredit: 'தகவலுழவன் · Public domain (Wikimedia Commons, US)', ex: 'I want you to apologize to me.', exKo: '나는 네가 나에게 사과하기를 원해.'},
      {w: 'explain', pos: 'v.', ko: '설명하다', ic: '🗣️', audio: 'assets/audio/explain.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Let me explain the situation.', exKo: '상황을 설명할게.'},
      {w: 'situation', pos: 'n.', ko: '상황', ic: '🎭', audio: 'assets/audio/situation.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'It depends on the situation.', exKo: '그것은 상황에 따라 다르다.'},
      {w: 'tip', pos: 'n.', ko: '조언, 요령', ic: '💡', audio: 'assets/audio/tip.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Here are some useful tips.', exKo: '여기 유용한 요령이 있다.'},
      {w: 'useful', pos: 'adj.', ko: '유용한', ic: '🧰', audio: 'assets/audio/useful.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'This app is very useful.', exKo: '이 앱은 아주 유용하다.'},
      {w: 'especially', pos: 'adv.', ko: '특히', ic: '⭐', ex: 'Teens text a lot, especially at night.', exKo: '십대는 특히 밤에 문자를 많이 보낸다.'},
      {w: 'guess', pos: 'v.', ko: '추측하다', ic: '🤔', audio: 'assets/audio/guess.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'I guess he didn’t like it.', exKo: '그가 마음에 안 들어 한 것 같다.'}
    ],
    phrases: [
      {w: 'Can you please say that again?', ko: '다시 말해 줄 수 있니?', ex: 'Sorry? Can you please say that again?', exKo: '뭐라고? 다시 말해 줄래?'},
      {w: 'How do you spell it?', ko: '철자가 어떻게 되니?', ex: 'Olivia? How do you spell it?', exKo: '올리비아? 철자가 어떻게 돼?'},
      {w: 'talk behind one’s back', ko: '~의 험담을 하다', ex: 'Did you talk behind my back?', exKo: '너 내 험담 했어?'},
      {w: 'pick up the phone', ko: '전화를 하다 / 받다', ex: 'Sometimes you need to pick up the phone.', exKo: '때로는 전화를 해야 한다.'},
      {w: 'in addition', ko: '게다가', ex: 'In addition, emojis can mean different things.', exKo: '게다가 이모지는 다른 뜻일 수 있다.'},
      {w: 'these days', ko: '요즘', ex: 'These days, teens text more than they call.', exKo: '요즘 십대는 전화보다 문자를 더 많이 한다.'}
    ],
    pairs: [
      {a: 'communicate', b: 'communication', rel: '동사 / 명사'},
      {a: 'understanding', b: 'misunderstanding', rel: '이해 / 오해 (mis- = 잘못)'},
      {a: 'correct', b: 'correctly', rel: '형용사 / 부사'},
      {a: 'casual', b: 'formal', rel: '반대말'}
    ],
    wrap: {en: 'When I text ______, I ______. I want my friends to ______.', ko: '오늘 배운 낱말로 나의 메시지 습관과 친구에게 바라는 점 쓰기'}
  },

  talk: {
    hook: {en: 'What do you say when you don’t hear someone well?', ko: '상대의 말을 잘 못 들었을 때 뭐라고 하나요?', note: '“뭐라고?”, “다시 말해 줘” 같은 말을 모은다. 영어로 공손하게 되묻고 철자를 확인하는 표현으로 이어진다.'},
    speakers: {Olivia: {voice: 0, pitch: 1.1}, Clerk: {voice: 2, pitch: .95}, Junho: {voice: 1, pitch: 1}, Mia: {voice: 0, pitch: 1.15}, 'Ms. Han': {voice: 2, pitch: 1.05}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '되묻기',
        key: {q: ['Excuse me?', 'Can you please say that again?', 'What did you say?'], a: ['I said ~.', 'Sure. ~.', 'Oh, sorry. ~.']},
        note: '잘 못 들었을 때 Excuse me? / Sorry? 하고 끝을 올려 말하거나, Can you please say that again?으로 공손하게 다시 말해 달라고 한다.',
        dialogs: [
          { title: 'Dialogue A', setting: '공항 근처 호텔 안내 데스크, 전화', lines: [
            {s: 'Olivia', en: 'Hi. I’m looking for a hotel near the airport. I have an early flight tomorrow.', ko: '안녕하세요. 공항 근처 호텔을 찾고 있어요. 내일 아침 일찍 비행기가 있어서요.'},
            {s: 'Clerk', en: 'The closest one is the Skyview Inn.', ko: '가장 가까운 곳은 스카이뷰 인이에요.'},
            {s: 'Olivia', en: '{{Excuse me}}? {{Can you please say that again}}?', ko: '네? 다시 말씀해 주시겠어요?'},
            {s: 'Clerk', en: '{{Sure}}. It’s the Skyview Inn. It’s five minutes from the airport.', ko: '물론이죠. 스카이뷰 인이요. 공항에서 5분 거리예요.'}
          ]},
          { title: 'Dialogue B', setting: '쉬는 시간, 교실', lines: [
            {s: 'A', en: 'Let’s meet at the new café at four. It’s called “Moonbeam.”', ko: '4시에 새 카페에서 만나자. 이름이 ‘문빔’이야.'},
            {s: 'B', en: 'Sorry? {{What did you say}}?', ko: '뭐라고? 뭐라고 했어?'},
            {s: 'A', en: '{{I said}} “Moonbeam.” It’s next to the library.', ko: '‘문빔’이라고 했어. 도서관 옆에 있어.'},
            {s: 'B', en: 'Oh, I know where it is. See you there!', ko: '아, 어딘지 알아. 거기서 보자!'}
          ]}
        ],
        check: [
          {q: 'Why does Olivia need a hotel near the airport?', a: 'She has an early flight tomorrow.'},
          {q: 'How far is the Skyview Inn from the airport?', a: 'Five minutes.'},
          {q: 'Where is the café?', a: 'Next to the library.'}
        ],
        drill: {frame: ['A: The meeting is at three thirty.', 'B: ____'], opts: ['Excuse me?', 'Sorry?', 'Can you please say that again?', 'What did you say?', 'Pardon?', 'Can you repeat that?']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '철자 묻고 답하기',
        key: {q: ['How do you spell it?', 'Can you please spell it for me?'], a: ['It’s O-L-I-V-I-A.', 'Sure. It’s ~.']},
        note: '이름·장소·음식 이름처럼 낯선 말은 How do you spell it?으로 철자를 묻는다. 답할 때는 알파벳을 한 글자씩 끊어 말한다.',
        dialogs: [
          { title: 'Dialogue A', setting: '호텔 안내 데스크, 전화 (Dialogue A에 이어서)', lines: [
            {s: 'Clerk', en: 'May I have your name, please?', ko: '성함을 알려 주시겠어요?'},
            {s: 'Olivia', en: 'It’s Olivia Brown.', ko: '올리비아 브라운이에요.'},
            {s: 'Clerk', en: '{{How do you spell}} your first name?', ko: '이름 철자가 어떻게 되나요?'},
            {s: 'Olivia', en: '{{It’s O-L-I-V-I-A}}.', ko: 'O-L-I-V-I-A예요.'}
          ]},
          { title: 'Dialogue B', setting: '저녁, 한식당', lines: [
            {s: 'Junho', en: 'Mia, what do you think about this dish? Do you like it?', ko: '미아, 이 음식 어때? 마음에 들어?'},
            {s: 'Mia', en: 'It’s delicious! But what’s the name again?', ko: '맛있어! 그런데 이름이 뭐였지?'},
            {s: 'Junho', en: 'It’s japchae.', ko: '잡채야.'},
            {s: 'Mia', en: 'Jap... {{Can you please spell it for me}}? I want to tell my mom.', ko: '잡… 철자 좀 알려 줄래? 엄마한테 말하고 싶어서.'},
            {s: 'Junho', en: '{{Sure}}. J-A-P-C-H-A-E.', ko: '물론이지. J-A-P-C-H-A-E.'}
          ]}
        ],
        check: [
          {q: 'What is Olivia’s family name?', a: 'Brown.'},
          {q: 'What dish is Mia eating?', a: 'Japchae.'},
          {q: 'Why does Mia want to know the spelling?', a: 'She wants to tell her mom.'}
        ],
        drill: {frame: ['A: What’s your name?', 'B: It’s ____.', 'A: How do you spell it?'], opts: ['Olivia', 'Junho', 'Seoyeon', 'Daniel', 'Haneul', 'Grace']}
      }
    ],
    interviewEx: 'My partner’s name is Seoyeon. She spelled it S-E-O-Y-E-O-N.',
    watch: {
      label: 'Let’s Watch', title: 'The Group Chat Mix-Up', setting: '방과 후, 교실. 미아와 준호가 반 단체 채팅방 메시지 때문에 이야기한다.',
      lines: [
        {s: 'Mia', en: 'Junho, did you see Ms. Han’s message? She wants us to bring our P.E. clothes.', ko: '준호, 한 선생님 메시지 봤어? 체육복을 가져오래.'},
        {s: 'Junho', en: 'Excuse me? Can you please say that again?', ko: '뭐라고? 다시 말해 줄래?'},
        {s: 'Mia', en: 'Ms. Han wants us to bring our P.E. clothes tomorrow.', ko: '한 선생님이 내일 체육복을 가져오래.'},
        {s: 'Junho', en: 'Oh no, I didn’t read it. There are too many messages in our group chat.', ko: '아, 못 읽었어. 우리 단체방에 메시지가 너무 많아서.'},
        {s: 'Mia', en: 'Let’s ask everyone to keep the chat for important things only.', ko: '다들 단체방에는 중요한 것만 올려 달라고 부탁하자.'}
      ],
      check: [
        {q: 'What does Ms. Han want the students to bring?', a: 'Their P.E. clothes.'},
        {q: 'Why didn’t Junho read the message?', a: 'There are too many messages in the group chat.'},
        {q: 'What will Mia ask everyone to do?', a: 'Keep the chat for important things only.'}
      ]
    },
    wrap: {en: 'Spell your full name and a favorite food for your partner. Ask them to repeat if you don’t hear well.', ko: '짝에게 이름과 좋아하는 음식의 철자를 불러 주고, 잘 못 들으면 되묻기'}
  },

  grammar: {
    cover: 'who you are · want you to',
    hook: {en: 'You need to know {{who you are}} talking to.  /  I {{want you to}} apologize to me.', ko: '첫 문장의 who you are는 질문일까? 둘째 문장에서 사과하는 사람은 누구일까?', answer: 'who you are talking to → 문장 속에 들어간 질문(간접의문문, 주어 + 동사 순서) / want you to apologize → 사과하는 사람은 you', note: '교과서 언어 형식(You need to know who you are talking to. / I want you to apologize to me.)과 같은 짜임이다.'},
    points: [
      { id: 'g1', name: '간접의문문', short: '간접의문문', form: '동사 + 의문사 + 주어 + 동사 / if(whether) + 주어 + 동사', meaning: '(문장 속에 들어간) 누가·무엇을·어떻게 ~하는지',
        notice: [
          {en: 'Think about {{who will read}} your message.', ko: '누가 네 메시지를 읽을지 생각해라.'},
          {en: 'I don’t know {{what this emoji means}}.', ko: '나는 이 이모지가 무슨 뜻인지 모르겠다.'},
          {en: 'Do you know {{how you can communicate}} better?', ko: '어떻게 하면 더 잘 소통할 수 있는지 아니?'}
        ],
        rule: [
          {k: '어순', v: '의문사 + 주어 + 동사 (do / does / did는 빼고 시제는 동사에)', ex: 'Where does she live? → I know where she lives.'},
          {k: '의문사가 없으면', v: 'if / whether + 주어 + 동사 (~인지 아닌지)', ex: 'I wonder if he got my message.'},
          {k: '의문사가 주어면', v: '그대로: 의문사 + 동사', ex: 'Who sent this? → I don’t know who sent this.'}
        ],
        compare: {
          title: '직접 질문 → 문장 속 질문', note: '질문이 다른 문장 속에 들어가면 평서문 어순(주어 + 동사)으로 돌아간다.',
          head: ['직접 질문', '간접의문문'],
          cols: [['Who are you talking to?', 'What does it mean?', 'Did he read it?'], ['… who you are talking to', '… what it means', '… if he read it']]
        },
        check: [
          {q: 'I don’t know what this word ____. (mean)', a: 'means'},
          {q: 'Tell me where you ____ now. (be)', a: 'are'},
          {q: 'Do you know how ____ spell it? (그는 철자를 어떻게 쓰는지)', a: 'he can'},
          {q: 'I wonder ____ she got my text. (~인지)', a: 'if'},
          {q: 'Think about who ____ your message. (will read)', a: 'will read'}
        ],
        trap: {bad: 'I don’t know what does this emoji mean.', good: 'I don’t know what this emoji means.', why: '간접의문문은 의문사 + 주어 + 동사. does를 빼고 동사에 -s.'},
        scramble: [
          {ko: '나는 이 이모지가 무슨 뜻인지 모른다.', en: 'I don’t know what this emoji means.'},
          {ko: '누가 네 메시지를 읽을지 생각해라.', en: 'Think about who will read your message.'},
          {ko: '그가 내 문자를 받았는지 궁금하다.', en: 'I wonder if he got my text.'}
        ]
      },
      { id: 'g2', name: 'want + 목적어 + to부정사', short: 'want A to ~', form: 'want / ask / tell / expect + 목적어 + to + 동사원형', meaning: '(목적어)가 ~하기를 원하다 / ~하라고 부탁하다·말하다',
        notice: [
          {en: 'I {{want you to}} apologize to me.', ko: '나는 네가 나에게 사과하기를 원한다.'},
          {en: 'Ms. Han {{wants us to}} bring our P.E. clothes.', ko: '한 선생님은 우리가 체육복을 가져오기를 원하신다.'},
          {en: 'Let’s {{ask everyone to}} keep the chat short.', ko: '모두에게 채팅을 짧게 해 달라고 부탁하자.'}
        ],
        rule: [
          {k: '행동하는 사람', v: '목적어가 to부정사의 행동을 한다 (I want you to go → 가는 사람은 you)', ex: 'Mom wants me to clean my room.'},
          {k: '같은 짜임', v: 'ask(부탁하다), tell(말하다), expect(기대하다), allow(허락하다)', ex: 'He told me to call him.'},
          {k: '부정', v: 'to 앞에 not: want + 목적어 + not to ~', ex: 'I want you not to text me at night.'}
        ],
        check: [
          {q: 'I want ____ to call me. (그녀가)', a: 'her'},
          {q: 'The teacher told us ____ our phones. (turn off)', a: 'to turn off'},
          {q: 'Can you ask him ____ me back? (call)', a: 'to call'},
          {q: 'My mom wants me ____ text late at night. (부정)', a: 'not to'},
          {q: 'I want you ____ the situation. (explain)', a: 'to explain'}
        ],
        trap: {bad: 'I want that you apologize.', good: 'I want you to apologize.', why: 'want는 that절이 아니라 목적어 + to부정사를 쓴다.'},
        scramble: [
          {ko: '나는 네가 나에게 사과하기를 원한다.', en: 'I want you to apologize to me.'},
          {ko: '선생님은 우리에게 휴대폰을 끄라고 말씀하셨다.', en: 'The teacher told us to turn off our phones.'},
          {ko: '모두에게 채팅을 짧게 해 달라고 부탁하자.', en: 'Let’s ask everyone to keep the chat short.'}
        ]
      }
    ],
    wrap: {en: 'I don’t know why ______. I want my friends to ______.', ko: '메시지를 주고받다 궁금했던 점(간접의문문)과 친구들에게 바라는 점(want + 목적어 + to) 쓰기'},
    wrapEx: 'I don’t know why my friend didn’t answer. I want my friends to reply when they are free.'
  },

  reading: {
    title: 'Group Chat Smarter!', kind: '청소년 잡지 요령 기사', cover: 'Chat', coverKo: '단체 채팅방 요령', cover2: 'Smarter', coverKo2: '더 잘 소통하기',
    before: [
      {q: 'Look at the title. What will the tips be about?', a: '단체 채팅방에서 더 잘 소통하는 법'},
      {q: 'What problems can happen in a group chat?', a: '오해, 너무 많은 메시지, 늦은 밤 알림 등'}
    ],
    gloss: {'group chat': '단체 채팅방', 'joke': '농담', 'all caps': '모두 대문자', 'shouting': '소리치는 것', 'notification': '알림', 'midnight': '자정', 'reply': '답장(하다)', 'mute': '알림을 끄다'},
    paras: [
      {who: '', en: 'These days, many teens talk in group chats more than they talk face to face. Group chats are fun and useful, but misunderstandings can easily happen. Do you want to know how you can chat smarter? Here are three tips.',
       ko: '요즘 많은 십대가 얼굴을 마주하고 이야기하는 것보다 단체 채팅방에서 더 많이 이야기한다. 단체방은 재미있고 유용하지만 오해가 쉽게 생길 수 있다. 어떻게 하면 더 똑똑하게 채팅할 수 있는지 알고 싶나요? 세 가지 요령을 소개한다.',
       check: {q: 'What can easily happen in group chats?', a: 'Misunderstandings.'}, think: '단체방에서 오해가 생기는 까닭은?'},
      {who: 'Tip 1', en: 'Think about who will read your message. Minho posted a joke about his friend Dana in the class chat. He thought it was funny, but Dana felt hurt. Everyone in the class read it, and some of them didn’t know it was a joke.',
       ko: '누가 내 메시지를 읽을지 생각하라. 민호는 반 단체방에 친구 다나에 대한 농담을 올렸다. 민호는 재미있다고 생각했지만 다나는 상처받았다. 반 친구 모두가 그 글을 읽었고, 그중 몇몇은 그것이 농담인지 몰랐다.',
       check: {q: 'How did Dana feel?', a: 'She felt hurt.'}, think: '둘만의 농담을 단체방에 올리면 왜 문제가 될까?'},
      {who: 'Tip 1', en: 'A joke between two friends can be different in a group of thirty. Before you press SEND, ask yourself, “Who is in this chat? How will they feel?”',
       ko: '두 친구 사이의 농담이 서른 명이 있는 방에서는 다르게 받아들여질 수 있다. ‘보내기’를 누르기 전에 스스로에게 물어보라. “이 방에는 누가 있지? 그들은 어떤 기분일까?”',
       check: {q: 'What should you ask yourself before you press SEND?', a: '“Who is in this chat? How will they feel?”'}, think: '내가 정한다면 어떤 질문을 더 넣을까?'},
      {who: 'Tip 2', en: 'Remember that people can’t see your face. When we talk, we use facial expressions and our tone of voice. In a chat, we have only words and emojis. “OK.” can sound angry, and ALL CAPS can look like shouting. So read your message again, and add a friendly emoji if you need to.',
       ko: '사람들이 내 얼굴을 볼 수 없다는 것을 기억하라. 말할 때 우리는 표정과 목소리를 쓴다. 채팅에서는 글자와 이모지밖에 없다. “OK.”는 화난 것처럼 들릴 수 있고, 모두 대문자로 쓰면 소리치는 것처럼 보일 수 있다. 그러니 메시지를 다시 읽고, 필요하면 다정한 이모지를 붙여라.',
       check: {q: 'What can ALL CAPS look like?', a: 'Shouting.'}, think: '같은 말도 어떻게 쓰느냐에 따라 느낌이 달라지는 예는?'},
      {who: 'Tip 3', en: 'Think about when you send messages. Late at night, notifications can wake people up. Mia’s friends were chatting at midnight, and her phone kept buzzing. The next morning, she asked everyone to stop chatting after 10 p.m. Now her class has a rule: “Mute the chat at night.”',
       ko: '언제 메시지를 보내는지 생각하라. 늦은 밤에는 알림이 사람들을 깨울 수 있다. 미아의 친구들이 자정에 채팅을 하고 있었고, 미아의 휴대폰은 계속 울렸다. 다음 날 아침 미아는 모두에게 밤 10시 이후에는 채팅을 멈춰 달라고 부탁했다. 이제 미아네 반에는 규칙이 있다. “밤에는 채팅 알림을 끄세요.”',
       check: {q: 'What did Mia ask everyone to do?', a: 'Stop chatting after 10 p.m.'}, think: '우리 반 채팅방에 필요한 규칙은?'},
      {who: '', en: 'Group chats can bring people closer. But sometimes, it’s better to talk in person. Do you need to talk about a sensitive issue? Then don’t post it in the group. Talk to the person face to face, or pick up the phone.',
       ko: '단체 채팅방은 사람들을 더 가깝게 해 줄 수 있다. 하지만 때로는 직접 이야기하는 것이 더 낫다. 민감한 문제로 이야기해야 하나요? 그렇다면 단체방에 올리지 마라. 그 사람과 얼굴을 보고 이야기하거나 전화를 하라.',
       check: {q: 'What should you do about a sensitive issue?', a: 'Talk to the person face to face, or pick up the phone.'}, think: '문자보다 직접 말하는 게 나은 상황은?'}
    ],
    split: 3,
    next: '얼굴이 보이지 않는 채팅에서\n또 무엇을 조심해야 할까?',
    recap: {q: '첫 번째 요령과 민호의 이야기는?', items: [{k: 'TIP 1', v: 'think about who will read your message'}, {k: 'MINHO', v: 'a joke about Dana in the class chat · Dana felt hurt'}]},
    tf: [
      {p: 0, s: 'Misunderstandings rarely happen in group chats.', a: false, why: 'misunderstandings can easily happen'},
      {p: 1, s: 'Dana thought Minho’s joke was funny.', a: false, why: 'Dana felt hurt.'},
      {p: 3, s: 'In a chat, people can see our facial expressions.', a: false, why: 'people can’t see your face'},
      {p: 3, s: '“OK.” can sound angry in a chat.', a: true},
      {p: 4, s: 'Mia asked her friends to stop chatting after 10 p.m.', a: true},
      {p: 5, s: 'It’s good to post sensitive issues in the group chat.', a: false, why: 'Then don’t post it in the group.'}
    ],
    key: [
      {en: 'Do you want to know {{how you can chat}} smarter?', note: '간접의문문 how + 주어 + 동사', g: 'g1'},
      {en: 'Think about {{who will read}} your message.', note: '간접의문문 (의문사가 주어)', g: 'g1'},
      {en: 'Some of them didn’t know {{(that) it was}} a joke.', note: 'know + (that) 주어 + 동사', g: 'g1'},
      {en: 'Think about {{when you send}} messages.', note: '간접의문문 when + 주어 + 동사', g: 'g1'},
      {en: 'She {{asked everyone to stop}} chatting after 10 p.m.', note: 'ask + 목적어 + to부정사', g: 'g2'},
      {en: 'Ms. Han {{wants us to bring}} our P.E. clothes.', note: 'want + 목적어 + to부정사 (Let’s Watch)', g: 'g2'}
    ],
    summary: {text: 'In group chats, {{misunderstandings}} can easily happen. First, think about who will read your {{message}}. Second, remember that people can’t see your {{facial}} expressions, so add a friendly {{emoji}} if you need to. Third, think about when you send messages. For {{sensitive}} issues, talk face to face or pick up the {{phone}}.'},
    order: ['Mia’s friends were chatting at midnight.', 'Her phone kept buzzing.', 'She asked everyone to stop chatting after 10 p.m.', 'Her class made a rule.'],
    chart: {title: 'THREE TIPS', ko: '세 가지 요령 정리하기', cols: ['Tip', 'Example'], note: '표를 보고 “You need to think about who/when ~.” 문장으로 요령을 다시 말하게 한다.', rows: [
      {name: 'Tip 1', cells: ['Think about who will read it.', 'Minho’s joke hurt Dana.']},
      {name: 'Tip 2', cells: ['People can’t see your face.', '“OK.” can sound angry.']},
      {name: 'Tip 3', cells: ['Think about when you send it.', 'Mia’s phone buzzed at midnight.']}
    ]},
    wrap: {en: 'Our chat rule: ______. I want everyone to ______.', ko: '관통 질문으로 돌아가기: 우리 반 단체 채팅방 약속 쓰기'}
  },

  quiz: [
    ['“오해”를 뜻하는 낱말은?', ['meaning', 'misunderstanding', 'expression', 'situation'], 1, 'misunderstanding: 오해'],
    ['“casual”의 반대말은?', ['sensitive', 'useful', 'formal', 'facial'], 2, 'casual ↔ formal'],
    ['“Did you talk ___ my back?”', ['behind', 'on', 'at', 'from'], 0, 'talk behind one’s back: 험담하다'],
    ['잘 못 들었을 때 하는 말은?', ['How do you spell it?', 'Can you please say that again?', 'What do you think?', 'Nice to meet you.'], 1, '되묻기'],
    ['철자를 묻는 표현은?', ['How do you spell it?', 'What does it mean?', 'Excuse me?', 'Where is it?'], 0, 'How do you spell it?'],
    ['“How do you spell your name?”에 알맞은 대답은?', ['It’s Olivia.', 'It’s O-L-I-V-I-A.', 'I’m fine.', 'Sure, I can.'], 1, '알파벳을 한 글자씩'],
    ['Let’s Watch에서 한 선생님이 가져오라고 한 것은?', ['교과서', '체육복', '휴대폰', '도시락'], 1, 'She wants us to bring our P.E. clothes.'],
    ['빈칸에 알맞은 것은? “I don’t know what this emoji ___.”', ['mean', 'means', 'does mean', 'to mean'], 1, '간접의문문: 의문사 + 주어 + 동사'],
    ['빈칸에 알맞은 것은? “I want you ___ to me.”', ['apologize', 'apologizing', 'to apologize', 'apologized'], 2, 'want + 목적어 + to부정사'],
    ['어법상 틀린 문장은?', ['I know where she lives.', 'I want you to call me.', 'Do you know what does it mean?', 'Tell me who sent it.'], 2, 'Do you know what it means?'],
    ['빈칸에 알맞은 것은? “I wonder ___ he got my text.”', ['if', 'what', 'who', 'that'], 0, '의문사가 없는 간접의문문: if + 주어 + 동사'],
    ['민호의 농담이 문제가 된 까닭은?', ['너무 길어서', '반 친구 모두가 읽어서', '이모지가 없어서', '밤늦게 보내서'], 1, 'Everyone in the class read it.'],
    ['채팅에서 모두 대문자로 쓰면 어떻게 보일 수 있나?', ['친절해 보인다', '소리치는 것처럼 보인다', '빠르게 보인다', '재미있어 보인다'], 1, 'ALL CAPS can look like shouting.'],
    ['미아네 반의 새 규칙은?', ['이모지 쓰지 않기', '밤에는 채팅 알림 끄기', '농담 금지', '전화만 하기'], 1, '“Mute the chat at night.”'],
    ['글의 요지로 알맞은 것은?', ['단체방을 없애자', '받는 사람·표현·시간을 생각하며 채팅하자', '이모지를 많이 쓰자', '문자보다 편지가 낫다'], 1, 'three tips for chatting smarter']
  ]
};

/* ── 보강: 원리 중심 문법 · 모션 그래픽 · 낱말 만들기 · 발음 기호 ── */
(function (L) {
  const ipa = {communicate: '/kəˈmjuːnɪkeɪt/', communication: '/kəˌmjuːnɪˈkeɪʃn/', text: '/tekst/', message: '/ˈmesɪdʒ/', emoji: '/ɪˈmoʊdʒi/', expression: '/ɪkˈspreʃn/', facial: '/ˈfeɪʃl/', meaning: '/ˈmiːnɪŋ/', differently: '/ˈdɪfrəntli/', correctly: '/kəˈrektli/', misunderstanding: '/ˌmɪsʌndərˈstændɪŋ/', sensitive: '/ˈsensətɪv/', casual: '/ˈkæʒuəl/', apologize: '/əˈpɑːlədʒaɪz/', explain: '/ɪkˈspleɪn/', situation: '/ˌsɪtʃuˈeɪʃn/', tip: '/tɪp/', useful: '/ˈjuːsfl/', especially: '/ɪˈspeʃəli/', guess: '/ɡes/'};
  L.vocab.words.forEach(w => { if (ipa[w.w]) w.ipa = ipa[w.w]; });
  L.vocab.morph = [
    {w: 'misunderstanding', ko: '오해', parts: [{t: 'mis', k: 'pre', m: '잘못'}, {t: 'understand', k: 'root', m: '이해하다'}, {t: 'ing', k: 'suf', m: '~하는 것 (명사)'}], family: ['understanding', 'mistake', 'misuse'], note: '잘못(mis) 이해하는 것(understanding) → 오해.'},
    {w: 'communication', ko: '의사소통', parts: [{t: 'communicat(e)', k: 'root', m: '함께 나누다'}, {t: 'ion', k: 'suf', m: '~것 (명사)'}], family: ['communicate', 'community', 'common'], note: 'commun- = 함께, 공통의. 생각을 함께 나누는 것 → 소통.'},
    {w: 'useful', ko: '유용한', parts: [{t: 'use', k: 'root', m: '쓰임'}, {t: 'ful', k: 'suf', m: '~이 가득한'}], family: ['useless', 'helpful', 'careful'], note: '쓰임(use)이 가득한 → 유용한. useless = 쓸모없는.'}
  ];
  const [g1, g2] = L.grammar.points;
  g1.principle = {
    q: '질문이 문장 속으로 들어가면 왜 어순이 바뀔까?',
    pic: [{en: 'Who are you talking to?', ko: '혼자 서는 질문 (뒤집힌 어순)'}, {en: 'who you are talking to', ko: '문장 속 명사 덩어리 (평서문 어순)', hot: true}],
    core: '질문이 다른 문장 속에 들어가면 더 이상 묻는 문장이 아니라 “~인지”라는 명사 덩어리(목적어)가 된다. 그래서 의문문 어순을 풀고 평범한 “주어 + 동사” 순서로 돌아간다.',
    why: ['의문사 + 주어 + 동사 (do/does/did는 빼고 시제는 동사에).', '의문사가 없으면 if/whether + 주어 + 동사 (~인지 아닌지).', '의문사가 주어면 그대로: Who called? → I wonder who called.']
  };
  g1.anim = [{title: '직접 질문 → 문장 속 질문', states: [
    {t: 'What/X#why | does/D | this emoji/S#he | mean/V#k | ?', note: '혼자 서는 질문: 조동사 + 주어 + 동사', ko: '이 이모지는 무슨 뜻이니?'},
    {t: 'Do you know | what/X#why | this emoji/S#he | means/V#k | ?', note: 'does가 빠지고 -s는 동사로, 주어 + 동사 순서', ko: '이 이모지가 무슨 뜻인지 아니?'}]},
    {title: '의문사가 없을 때 — if', states: [
    {t: 'Did/D | he/S#t | read/V#is | my message/O#f | ?', note: 'Yes/No 질문', ko: '그가 내 메시지를 읽었니?'},
    {t: 'I wonder | if/X | he/S#t | read/V#is | my message/O#f | .', note: 'if + 주어 + 동사', ko: '그가 내 메시지를 읽었는지 궁금하다.'}]}];
  g1.contrast = {title: '어순 비교', pairs: [
    {a: 'Where {{does she live}}?', ka: '그녀는 어디에 사니? (직접 질문)', b: 'I don’t know where {{she lives}}.', kb: '나는 그녀가 어디 사는지 모른다. (does가 빠지고 lives)'}],
    point: '문장 속 질문은 “의문사 + 주어 + 동사”.'};
  g2.principle = {
    q: 'want 뒤에 왜 사람(목적어)이 먼저 올까?',
    pic: [{en: 'I want', ko: '바라는 사람 (나)'}, {en: 'you', ko: '행동할 사람', hot: true}, {en: 'to apologize', ko: '바라는 행동'}],
    core: 'want to ~는 “내가 하고 싶다”, want + 사람 + to ~는 “그 사람이 하기를 바란다”이다. 행동할 사람이 바뀌면 그 사람을 want와 to 사이에 끼워 넣는다.',
    why: ['목적어 = to부정사의 행동을 하는 사람 (I want you to go → 가는 사람은 you).', 'ask, tell, expect, allow도 같은 짜임.', 'want that ~ 처럼 that절을 쓰지 않는다.']
  };
  g2.anim = [{title: '내가 하고 싶다 → 네가 해 주길 바란다', states: [
    {t: 'I/S | want/V | to call/X#tv | Nari/O | .', note: '내가 하고 싶은 일', ko: '나는 나리에게 전화하고 싶다.'},
    {t: 'I/S | want/V | you/O#you | to call/X#tv | Nari/O | .', note: '행동할 사람(you)을 want와 to 사이에', ko: '나는 네가 나리에게 전화하기를 바란다.'}]},
    {title: '명령문을 전할 때', states: [
    {t: 'Ms. Han/S | said/V | , | “ | Bring/V#b | your P.E. clothes/O#c | . | ”', note: '선생님이 한 말 그대로', ko: '한 선생님이 “체육복을 가져오렴.”이라고 말씀하셨다.'},
    {t: 'Ms. Han/S | told/V | us/O | to bring/X#b | our P.E. clothes/O#c | .', note: 'tell + 목적어 + to부정사', ko: '한 선생님이 우리에게 체육복을 가져오라고 말씀하셨다.'}]}];
  g2.contrast = {title: 'want to vs want + 목적어 + to', pairs: [
    {a: 'I want {{to text}} him.', ka: '나는 그에게 문자를 보내고 싶다. (내가 보낸다)', b: 'I want {{him to text}} me.', kb: '나는 그가 나에게 문자를 보내기를 원한다. (그가 보낸다)'}],
    point: '행동할 사람이 다르면 want + 그 사람 + to부정사.'};
})(window.LESSON);
