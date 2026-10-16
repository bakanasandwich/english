/* 중2 영어(동아·윤정미) Lesson 2 · How Teens Talk Now
   단원명은 교과서 목차 기준. 대화문·읽기 글은 교과서 원문이 아니라 단원 주제에 맞춰 새로 쓴 글입니다.
   의사소통 기능과 문법은 교과서 구성표 확인 전 추정(estimate: true). */
window.LESSON = {
  book: 'm2-donga', no: 2, estimate: true,
  title: 'How Teens Talk Now', ko: '요즘 십대는 어떻게 말할까',
  bigQ: {en: 'How do we talk to each other these days?', ko: '요즘 우리는 서로 어떻게 이야기할까?'},
  goals: {
    vocab: ['소통·언어와 관련된 낱말 20개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 나의 대화 습관을 한 문장으로 말할 수 있다.'],
    talk: ['낯선 말의 뜻을 묻고 설명할 수 있다.', '어떤 것에 대한 의견을 묻고 답할 수 있다.'],
    grammar: ['접속사 that으로 생각·의견을 문장으로 말할 수 있다.', '수여동사를 써서 ‘누구에게 무엇을’ 주는지 말할 수 있다.'],
    read1: ['글의 주제를 예측하고, 줄임말과 이모티콘에 관한 내용을 이해할 수 있다.'],
    read2: ['세대 간 언어 차이와 해결 방법을 이해하고 글의 요지를 요약할 수 있다.', '나의 대화 습관에 대해 영어로 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'How many messages do you send in a day?', ko: '하루에 메시지를 몇 개나 보내나요?', note: '손가락으로 대략 개수를 표시하게 한 뒤, 가장 많이 쓰는 이모티콘이나 줄임말을 묻는다. 나온 예를 message, emoji, short form과 연결한다.'},
    words: [
      {w: 'communicate', pos: 'v.', ko: '의사소통하다', ic: '💬', ex: 'We communicate with emojis a lot.', exKo: '우리는 이모티콘으로 많이 소통한다.'},
      {w: 'message', pos: 'n.', ko: '메시지', ic: '📩', ex: 'I sent her a short message.', exKo: '나는 그녀에게 짧은 메시지를 보냈다.'},
      {w: 'emoji', pos: 'n.', ko: '이모지, 그림 문자', ic: '😂', ex: 'This emoji means “very funny.”', exKo: '이 이모지는 ‘정말 웃기다’는 뜻이다.'},
      {w: 'slang', pos: 'n.', ko: '속어, 은어', ic: '🗯️', ex: 'Teens often use new slang.', exKo: '십대들은 자주 새로운 은어를 쓴다.'},
      {w: 'meaning', pos: 'n.', ko: '의미, 뜻', ic: '❓', ex: 'Do you know the meaning of this word?', exKo: '이 낱말의 뜻을 아니?'},
      {w: 'express', pos: 'v.', ko: '표현하다', ic: '🎭', ex: 'Emojis help us express our feelings.', exKo: '이모지는 감정을 표현하도록 돕는다.'},
      {w: 'feeling', pos: 'n.', ko: '감정, 느낌', ic: '❤️', ex: 'It’s hard to show feelings in a text.', exKo: '문자로 감정을 보여 주기는 어렵다.'},
      {w: 'generation', pos: 'n.', ko: '세대', ic: '👨‍👩‍👧', ex: 'Each generation has its own words.', exKo: '세대마다 고유한 말이 있다.'},
      {w: 'common', pos: 'adj.', ko: '흔한, 공통의', ic: '🔄', ex: 'Short forms are common in chats.', exKo: '줄임말은 채팅에서 흔하다.'},
      {w: 'quickly', pos: 'adv.', ko: '빨리', ic: '⏩', ex: 'New words spread quickly online.', exKo: '새 낱말은 온라인에서 빠르게 퍼진다.'},
      {w: 'confused', pos: 'adj.', ko: '혼란스러운', ic: '😵', ex: 'My dad was confused by my message.', exKo: '아빠는 내 메시지를 보고 혼란스러워했다.'},
      {w: 'misunderstand', pos: 'v.', ko: '오해하다', ic: '🙅', ex: 'Please don’t misunderstand me.', exKo: '나를 오해하지 말아 줘.'},
      {w: 'polite', pos: 'adj.', ko: '예의 바른, 공손한', ic: '🙇', ex: 'Be polite when you write to a teacher.', exKo: '선생님께 글을 쓸 때는 공손하게 써라.'},
      {w: 'online', pos: 'adj./adv.', ko: '온라인의; 온라인으로', ic: '🌐', ex: 'We chat online every night.', exKo: '우리는 매일 밤 온라인으로 대화한다.'},
      {w: 'situation', pos: 'n.', ko: '상황', ic: '🧭', ex: 'Choose words for the situation.', exKo: '상황에 맞는 말을 골라라.'},
      {w: 'popular', pos: 'adj.', ko: '인기 있는', ic: '⭐', ex: 'This word is popular among teens.', exKo: '이 낱말은 십대 사이에서 인기 있다.'},
      {w: 'create', pos: 'v.', ko: '만들어 내다', ic: '🛠️', ex: 'Teens create new words all the time.', exKo: '십대들은 늘 새 낱말을 만들어 낸다.'},
      {w: 'language', pos: 'n.', ko: '언어, 말', ic: '🔤', ex: 'Language changes over time.', exKo: '언어는 시간이 지나며 변한다.'},
      {w: 'reply', pos: 'v./n.', ko: '답장하다; 답장', ic: '↩️', ex: 'She didn’t reply to my text.', exKo: '그녀는 내 문자에 답장하지 않았다.'},
      {w: 'opinion', pos: 'n.', ko: '의견', ic: '🗳️', ex: 'What’s your opinion?', exKo: '네 의견은 어때?'}
    ],
    phrases: [
      {w: 'stand for', ko: '~을 나타내다, 줄임말이다', ex: 'LOL stands for “laughing out loud.”', exKo: 'LOL은 ‘크게 웃다’를 나타낸다.'},
      {w: 'keep in touch', ko: '연락하며 지내다', ex: 'Let’s keep in touch after graduation.', exKo: '졸업 후에도 연락하며 지내자.'},
      {w: 'get used to', ko: '~에 익숙해지다', ex: 'Grandma got used to emojis.', exKo: '할머니는 이모지에 익숙해지셨다.'},
      {w: 'these days', ko: '요즘', ex: 'What words do you use these days?', exKo: '요즘 어떤 말을 쓰니?'},
      {w: 'come up with', ko: '(생각 등을) 떠올리다', ex: 'Who came up with this word?', exKo: '누가 이 말을 떠올렸을까?'},
      {w: 'face to face', ko: '얼굴을 마주하고', ex: 'Some talks are better face to face.', exKo: '어떤 대화는 얼굴을 보고 하는 게 낫다.'}
    ],
    pairs: [
      {a: 'polite', b: 'rude', rel: '반대말'},
      {a: 'reply', b: 'answer', rel: '비슷한 말'},
      {a: 'create', b: 'make', rel: '비슷한 말'},
      {a: 'communicate', b: 'communication', rel: '동사 / 명사', note: 'We communicate. / Communication is important.'}
    ],
    wrap: {en: 'I usually communicate with my friends by ______. My favorite emoji is ______.', ko: '오늘 배운 낱말을 넣어 나의 소통 습관 쓰기'}
  },

  talk: {
    hook: {en: 'Do your parents understand your messages?', ko: '부모님은 여러분의 메시지를 이해하시나요?', note: '부모님이 이해 못 한 줄임말이나 이모티콘 경험을 나누게 한다. What does ~ mean? 표현으로 자연스럽게 이어진다.'},
    speakers: {Yuri: {voice: 0, pitch: 1.1}, Sam: {voice: 1, pitch: .95}, Dad: {voice: 2, pitch: .85}, Nara: {voice: 0, pitch: 1.15}, Kevin: {voice: 1, pitch: .9}, 'Ms. Kim': {voice: 2, pitch: 1.05}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '의미 묻고 설명하기',
        key: {q: ['What does ~ mean?', 'What do you mean by ~?'], a: ['It means ~.', 'It stands for ~.', 'It’s a short form of ~.']},
        note: '모르는 말을 물을 때 What does ~ mean? (does + 동사원형 mean). 설명할 때 It means ~ / It stands for ~ 로 답한다.',
        dialogs: [
          { title: 'Dialogue A', setting: '저녁 식탁, 아빠가 휴대폰을 들고', lines: [
            {s: 'Dad', en: 'Yuri, your friend sent me “BRB.” {{What does}} it {{mean}}?', ko: '유리야, 네 친구가 나한테 “BRB”라고 보냈어. 무슨 뜻이니?'},
            {s: 'Yuri', en: 'Oh, it {{stands for}} “be right back.”', ko: '아, “곧 돌아올게”의 줄임말이에요.'},
            {s: 'Dad', en: 'I see. Why did she send it to me?', ko: '그렇구나. 왜 나한테 보냈을까?'},
            {s: 'Yuri', en: 'She used my phone yesterday. I think she sent it by mistake.', ko: '어제 제 휴대폰을 썼거든요. 실수로 보낸 것 같아요.'},
            {s: 'Dad', en: 'Ha! Then what does “TTYL” mean?', ko: '하! 그럼 “TTYL”은 무슨 뜻이니?'},
            {s: 'Yuri', en: 'It {{means}} “talk to you later.”', ko: '“나중에 이야기해”라는 뜻이에요.'}
          ]},
          { title: 'Dialogue B', setting: '쉬는 시간, 휴대폰 화면을 보며', lines: [
            {s: 'A', en: 'Look at this emoji. {{What do you mean by}} this?', ko: '이 이모지 봐. 이거 무슨 뜻이야?'},
            {s: 'B', en: 'The skull? {{It means}} “That’s so funny.”', ko: '해골? “정말 웃기다”라는 뜻이야.'},
            {s: 'A', en: 'Really? I thought you were angry.', ko: '정말? 난 네가 화난 줄 알았어.'},
            {s: 'B', en: 'No way! I was laughing a lot.', ko: '절대 아니야! 엄청 웃고 있었어.'}
          ]}
        ],
        check: [
          {q: 'What does “BRB” stand for?', a: 'It stands for “be right back.”'},
          {q: 'Why did Yuri’s friend send Dad a message?', a: 'She sent it by mistake.'},
          {q: 'What did A think about the skull emoji?', a: 'A thought B was angry.'}
        ],
        drill: {frame: ['A: What does “____” mean?', 'B: It means “I see.”'], opts: ['IC', 'OMG', 'IDK', 'TMI', 'BTW', 'ASAP']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '의견 묻고 답하기',
        key: {q: ['What do you think of ~?', 'How do you feel about ~?'], a: ['I think (that) ~.', 'In my opinion, ~.', 'I don’t think ~.']},
        note: 'What do you think of ~? 뒤에는 명사·-ing. 답할 때 I think (that) + 문장. 3차시 접속사 that과 이어진다.',
        dialogs: [
          { title: 'Dialogue A', setting: '방과 후, 동아리실', lines: [
            {s: 'Nara', en: 'Kevin, {{what do you think of}} using short forms in class chats?', ko: '케빈, 반 단톡방에서 줄임말 쓰는 거 어떻게 생각해?'},
            {s: 'Kevin', en: '{{I think}} they’re fast and fun.', ko: '빠르고 재미있다고 생각해.'},
            {s: 'Nara', en: 'But some students don’t understand them.', ko: '그런데 이해 못 하는 학생들도 있어.'},
            {s: 'Kevin', en: 'That’s true. {{In my opinion}}, we should use them only with close friends.', ko: '맞아. 내 생각엔 친한 친구하고만 쓰는 게 좋겠어.'},
            {s: 'Nara', en: 'I agree. Clear messages are better for everyone.', ko: '동의해. 분명한 메시지가 모두에게 더 좋아.'}
          ]},
          { title: 'Dialogue B', setting: '수업 중, 토론 활동', lines: [
            {s: 'A', en: '{{How do you feel about}} texting during dinner?', ko: '저녁 먹는 동안 문자 보내는 거 어떻게 생각해?'},
            {s: 'B', en: '{{I don’t think}} it’s a good idea. It’s not polite.', ko: '좋은 생각은 아닌 것 같아. 예의가 아니야.'},
            {s: 'A', en: 'What about a quick reply?', ko: '빠른 답장은?'},
            {s: 'B', en: 'Maybe that’s okay. But talking face to face is more important.', ko: '그건 괜찮을지도. 하지만 얼굴 보고 이야기하는 게 더 중요해.'}
          ]}
        ],
        check: [
          {q: 'What does Kevin think of short forms?', a: 'He thinks they’re fast and fun.'},
          {q: 'When does Kevin think students should use short forms?', a: 'Only with close friends.'},
          {q: 'Why doesn’t B like texting during dinner?', a: 'Because it’s not polite.'}
        ],
        drill: {frame: ['A: What do you think of ____?', 'B: I think it’s ____.'], opts: ['emojis', 'video calls', 'group chats', 'voice messages', 'new slang', 'handwritten letters']}
      }
    ],
    interviewEx: 'Jun doesn’t know what “TMI” means. He thinks emojis are useful.',
    watch: {
      label: 'Let’s Watch', title: 'Grandma’s First Emoji', setting: '주말, 할머니 댁. 나라와 케빈이 할머니께 메신저 쓰는 법을 알려 드린다.',
      lines: [
        {s: 'Ms. Kim', en: 'Nara, my friend sent me this little yellow face. What does it mean?', ko: '나라야, 친구가 이 작은 노란 얼굴을 보냈구나. 무슨 뜻이니?'},
        {s: 'Nara', en: 'It’s an emoji, Grandma. It means she’s happy.', ko: '이모지예요, 할머니. 친구분이 기쁘다는 뜻이에요.'},
        {s: 'Kevin', en: 'You can send her one, too. Just touch this button.', ko: '할머니도 하나 보내실 수 있어요. 이 단추만 누르세요.'},
        {s: 'Ms. Kim', en: 'Oh, there are so many faces! What do you think of this one?', ko: '어머, 얼굴이 정말 많구나! 이건 어떠니?'},
        {s: 'Nara', en: 'I think it’s perfect. It shows a big hug.', ko: '딱 좋은 것 같아요. 꼭 껴안는 모습이에요.'},
        {s: 'Ms. Kim', en: 'Then I’ll send my friend a big hug.', ko: '그럼 친구에게 크게 안아 주는 걸 보내야겠다.'},
        {s: 'Kevin', en: 'Great! Now you speak emoji, Grandma.', ko: '좋아요! 이제 할머니도 이모지로 말하시네요.'}
      ],
      check: [
        {q: 'What does the yellow face mean?', a: 'It means the friend is happy.'},
        {q: 'What does Kevin tell Grandma to do?', a: 'To touch the button and send an emoji.'},
        {q: 'What will Grandma send her friend?', a: 'A big hug (emoji).'}
      ]
    },
    wrap: {en: 'Ask your partner what a short form means, and share your opinion about it.', ko: '줄임말 하나의 뜻을 묻고, 그 말에 대한 의견을 주고받은 뒤 두 문장으로 쓰기'}
  },

  grammar: {
    cover: 'that · give A B',
    hook: {en: 'I {{think that}} emojis are fun.  /  My friend sent {{me a funny emoji}}.', ko: '두 문장에서 색칠될 부분은 각각 어떤 일을 할까?', answer: 'think 뒤 that은 생각의 내용(문장)을, send 뒤에는 ‘누구에게 + 무엇을’이 차례로 온다', note: '두 번째 문장에서 me와 a funny emoji의 순서를 바꾸면 어색하다는 점을 먼저 느끼게 한다.'},
    points: [
      { id: 'g1', name: '명사절을 이끄는 접속사 that', short: '접속사 that', form: '주어 + think/know/believe + (that) + 주어 + 동사', meaning: '~라고 (생각하다/알다)',
        notice: [
          {en: 'I {{think that}} short forms are useful.', ko: '나는 줄임말이 유용하다고 생각한다.'},
          {en: 'Many adults {{believe that}} teens talk too fast.', ko: '많은 어른들은 십대가 너무 빨리 말한다고 믿는다.'},
          {en: 'Did you {{know that}} LOL is over 30 years old?', ko: 'LOL이 30년도 넘었다는 걸 알았니?'}
        ],
        rule: [
          {k: '쓰임', v: 'think · know · believe · say · hope + that + 문장', ex: 'She says that the word is new.'},
          {k: '생략', v: '목적어 자리의 that은 흔히 생략', ex: 'I think (that) he is right.'},
          {k: '부정', v: '보통 I don’t think that ~ 으로 쓴다', ex: 'I don’t think that it’s polite.'}
        ],
        compare: {
          title: '같은 that일까?', note: '세 번째 열은 ‘저것’이라는 지시사 that. 뒤에 문장(주어+동사)이 오는지로 구별하게 한다.',
          head: ['접속사 that (뒤에 문장)', 'that 생략', '지시사 that (저것)'],
          cols: [['I think that it’s cool.', 'I know that she’s busy.', 'We hope that you like it.'], ['I think it’s cool.', 'I know she’s busy.', 'We hope you like it.'], ['That is my phone.', 'Look at that emoji.', 'I like that word.']]
        },
        check: [
          {q: 'I ____ that emojis help us. (think)', a: 'think'},
          {q: 'She knows ____ he is shy. (접속사)', a: 'that'},
          {q: 'We believe that language ____ over time. (change)', a: 'changes'},
          {q: 'I don’t think ____ it is rude. (접속사)', a: 'that'},
          {q: 'He said that he ____ my message. (get, 과거)', a: 'got'}
        ],
        trap: {bad: 'I think that is very funny this emoji.', good: 'I think that this emoji is very funny.', why: 'that 뒤에는 ‘주어 + 동사’ 순서의 완전한 문장이 온다.'},
        scramble: [
          {ko: '나는 이모지가 재미있다고 생각한다.', en: 'I think that emojis are fun.'},
          {ko: '그녀는 언어가 빨리 변한다는 것을 안다.', en: 'She knows that language changes quickly.'},
          {ko: '나는 그것이 예의 바르다고 생각하지 않는다.', en: 'I don’t think that it is polite.'}
        ]
      },
      { id: 'g2', name: '수여동사 (4형식)', short: '수여동사', form: '동사 + 사람(~에게) + 사물(…을)', meaning: '~에게 …을 주다/보내다',
        notice: [
          {en: 'Mom sent {{me}} {{a text}}.', ko: '엄마가 나에게 문자를 보냈다.'},
          {en: 'Can you show {{me}} {{the emoji}}?', ko: '나에게 그 이모지를 보여 줄래?'},
          {en: 'He gave {{his sister}} {{some advice}}.', ko: '그는 여동생에게 조언을 해 주었다.'}
        ],
        rule: [
          {k: '순서', v: '동사 + 사람 + 사물', ex: 'I told my friend the news.'},
          {k: '바꿔 쓰기', v: '동사 + 사물 + to + 사람 (give, send, show, tell)', ex: 'I sent a message to him.'},
          {k: 'for를 쓰는 동사', v: 'make · buy · cook + 사물 + for + 사람', ex: 'She made a card for me.'}
        ],
        check: [
          {q: 'Please send ____ the photo. (나에게)', a: 'me'},
          {q: 'He showed ____ his new phone. (우리에게)', a: 'us'},
          {q: 'I gave a sticker ____ my friend.', a: 'to'},
          {q: 'Dad bought a phone ____ me.', a: 'for'},
          {q: 'She told ____ a funny story. (him)', a: 'him'}
        ],
        trap: {bad: 'She sent to me a long message.', good: 'She sent me a long message.', why: '‘사람 + 사물’ 순서일 때는 사람 앞에 to를 쓰지 않는다.'},
        scramble: [
          {ko: '나는 할머니께 이모지를 보내 드렸다.', en: 'I sent my grandma an emoji.'},
          {ko: '그는 나에게 그 낱말의 뜻을 말해 주었다.', en: 'He told me the meaning of the word.'},
          {ko: '그녀는 우리에게 사진을 보여 주었다.', en: 'She showed us the picture.'}
        ]
      }
    ],
    wrap: {en: 'I think that ______. I want to send ______ ______.', ko: '접속사 that 한 문장, 수여동사 한 문장으로 소통에 대한 내 생각 쓰기'},
    wrapEx: 'I think that emojis make chats friendly. I want to send my friend a thank-you message.'
  },

  reading: {
    title: 'Do You Speak Teen?', kind: '청소년 잡지 기사', cover: 'LOL', coverKo: '십대의 말', cover2: 'Connect', coverKo2: '말은 달라도 마음은 같다',
    before: [
      {q: 'Look at the title. What is “Teen” here?', a: '십대가 쓰는 말(언어)'},
      {q: 'What words or emojis do you use most?', a: '자유롭게 말한 뒤 글과 비교'}
    ],
    gloss: {
      abbreviations: '줄임말', typing: '자판 입력', 'thumbs-up': '엄지척', tone: '말투, 어조', 'out of date': '구식인', spread: '퍼지다',
      'mean the same': '같은 뜻이다', groovy: '(옛 은어) 멋진', confusing: '혼란스럽게 하는', audience: '듣는(읽는) 사람', connect: '연결되다, 마음이 통하다'
    },
    paras: [
      {who: '', en: '“IDK, LOL 😂.” Does this message look strange to you? If it does, you don’t speak “Teen.” Today’s teens communicate in new ways, and many adults think that it’s a whole new language.',
       ko: '“IDK, LOL 😂.” 이 메시지가 이상해 보이나요? 그렇다면 여러분은 ‘십대 말’을 못 하는 거예요. 오늘날 십대는 새로운 방식으로 소통하고, 많은 어른들은 그것이 완전히 새로운 언어라고 생각합니다.',
       check: {q: 'What do many adults think about teen talk?', a: 'They think that it’s a whole new language.'}, think: '여러분은 ‘십대 말’을 쓰나요?'},
      {who: 'Short Forms', en: 'First, teens love abbreviations. IDK means “I don’t know,” and LOL stands for “laughing out loud.” They save time and typing. In a fast chat, a few letters can give your friend a quick answer.',
       ko: '먼저 십대는 줄임말을 좋아합니다. IDK는 ‘모르겠어’라는 뜻이고 LOL은 ‘크게 웃다’를 나타냅니다. 줄임말은 시간과 타자를 아껴 줍니다. 빠른 대화에서는 몇 글자만으로 친구에게 재빨리 답할 수 있어요.',
       check: {q: 'Why do teens like abbreviations?', a: 'They save time and typing.'}, think: '여러분이 가장 많이 쓰는 줄임말은?'},
      {who: 'Emojis', en: 'Second, emojis show feelings. A text like “OK.” can sound cold, but “OK 👍” sounds friendly. Emojis give a message its tone, just like our faces and voices do when we talk face to face.',
       ko: '둘째, 이모지는 감정을 보여 줍니다. “OK.” 같은 문자는 차갑게 들릴 수 있지만 “OK 👍”는 친근하게 들려요. 이모지는 메시지에 말투를 입혀 줍니다. 얼굴을 보고 이야기할 때 표정과 목소리가 그러는 것처럼요.',
       check: {q: 'How can emojis change a message?', a: 'They give a message its tone (they can make it sound friendly).'}, think: '이모지 없이 보내면 오해받을 만한 문장은?'},
      {who: 'New Words', en: 'Teens also create slang, and it changes quickly. Your parents probably said “cool,” and your grandparents said “groovy.” Words like these were once new, too. Some slang becomes common, but most of it goes out of date in a few years.',
       ko: '십대는 은어도 만들어 내고, 은어는 빨리 바뀝니다. 부모님은 아마 ‘cool’이라고 하셨을 테고 조부모님은 ‘groovy’라고 하셨겠죠. 이런 말도 한때는 새로운 말이었어요. 어떤 은어는 흔한 말이 되지만, 대부분은 몇 년 안에 구식이 됩니다.',
       check: {q: 'What happens to most slang?', a: 'It goes out of date in a few years.'}, think: '요즘 은어 중 10년 뒤에도 남을 것 같은 말은?'},
      {who: 'Problems', en: 'Sometimes the new language causes problems. One student sent her mom a skull emoji 💀 to say “That’s so funny.” Her mom thought that something terrible had happened and called her right away!',
       ko: '새로운 말이 문제를 일으키기도 합니다. 한 학생이 ‘정말 웃겨’라는 뜻으로 엄마에게 해골 이모지 💀를 보냈어요. 엄마는 무슨 끔찍한 일이 생긴 줄 알고 곧바로 전화를 걸었답니다!',
       check: {q: 'Why did the mom call her daughter right away?', a: 'She thought that something terrible had happened.'}, think: '이모지 때문에 오해가 생긴 경험이 있나요?'},
      {who: 'Tips', en: 'So how can we avoid confusing messages? Think about your audience. Short forms and slang are fine with friends, but clear and polite sentences are better for parents and teachers.',
       ko: '그럼 혼란스러운 메시지를 어떻게 피할 수 있을까요? 읽는 사람을 생각하세요. 친구와는 줄임말과 은어도 괜찮지만, 부모님과 선생님께는 분명하고 공손한 문장이 더 좋습니다.',
       check: {q: 'What kind of sentences are better for teachers?', a: 'Clear and polite sentences.'}, think: '선생님께 보내는 문자를 친구에게 보내는 문자와 어떻게 다르게 쓸까?'},
      {who: 'Tips', en: 'Language always changes, but our goal stays the same: we want to connect with each other. Next time, why don’t you teach your parents a new word? They may teach you one, too.',
       ko: '언어는 늘 변하지만 우리의 목표는 그대로입니다. 서로 마음을 잇고 싶다는 것이죠. 다음에는 부모님께 새 낱말 하나를 가르쳐 드리는 건 어떨까요? 부모님도 여러분에게 하나 가르쳐 주실지 몰라요.',
       check: {q: 'What goal stays the same?', a: 'We want to connect with each other.'}, think: '부모님 세대의 말 중 알고 싶은 것은?'}
    ],
    split: 3,
    next: '새로운 말은 어떤 문제를 만들고,\n어떻게 풀 수 있을까?',
    recap: {q: '십대 말의 두 가지 특징은?', items: [{k: 'SHORT FORMS', v: 'IDK, LOL — save time and typing'}, {k: 'EMOJIS', v: 'show feelings and tone'}]},
    tf: [
      {p: 1, s: 'LOL stands for “laughing out loud.”', a: true},
      {p: 2, s: 'A text with no emoji always sounds friendly.', a: false, why: '“OK.”처럼 차갑게 들릴 수 있다.'},
      {p: 3, s: 'Most slang stays popular for a long time.', a: false, why: '대부분은 몇 년 안에 구식이 된다.'},
      {p: 4, s: 'The mom thought something terrible had happened.', a: true},
      {p: 5, s: 'The writer says slang is fine with teachers.', a: false, why: '선생님께는 분명하고 공손한 문장이 좋다.'},
      {p: 6, s: 'The writer suggests teaching your parents a new word.', a: true}
    ],
    key: [
      {en: 'Many adults think {{that it’s a whole new language}}.', note: '접속사 that: 생각의 내용(문장)을 이끈다', g: 'g1'},
      {en: 'A few letters can give {{your friend}} {{a quick answer}}.', note: 'give + 사람 + 사물 (수여동사)', g: 'g2'},
      {en: 'Emojis give {{a message}} {{its tone}}.', note: 'give + ~에게 + …을', g: 'g2'},
      {en: 'One student sent {{her mom}} {{a skull emoji}}.', note: 'send + 사람 + 사물', g: 'g2'},
      {en: 'Her mom thought {{that something terrible had happened}}.', note: 'think that + 문장 (that절)', g: 'g1'},
      {en: 'Why don’t you teach {{your parents}} {{a new word}}?', note: 'Why don’t you ~? 제안 + 수여동사 teach', g: 'g2'}
    ],
    summary: {text: 'Teens use {{abbreviations}} to save time and {{emojis}} to show feelings. They also create {{slang}}, but it changes {{quickly}}. New words can cause {{misunderstandings}}, so think about your {{audience}}. In the end, we all want to connect.'},
    order: ['A student sent a skull emoji.', 'She meant “That’s so funny.”', 'Her mom was worried.', 'Her mom called her right away.'],
    chart: {title: 'TEEN TALK', ko: '십대 말의 특징 정리하기', cols: ['Example', 'Good point', 'Be careful'], note: '좋은 점과 주의할 점을 함께 보도록 한다. 세 가지 모두 ‘읽는 사람’에 따라 달라진다는 결론으로 잇는다.', rows: [
      {name: 'Short forms', cells: ['IDK, LOL', 'save time and typing', 'not everyone knows them']},
      {name: 'Emojis', cells: ['👍 😂 💀', 'show feelings and tone', 'meanings can differ']},
      {name: 'Slang', cells: ['cool, groovy', 'fun and creative', 'goes out of date']}
    ]},
    wrap: {en: 'These days, I talk to my friends by ______. I think that ______. I will send ______ a clear and polite message.', ko: '관통 질문으로 돌아가기: 나의 소통 방식과 다짐을 세 문장으로 쓰기'}
  },

  quiz: [
    ['“오해하다”를 뜻하는 낱말은?', ['reply', 'create', 'express', 'misunderstand'], 3, 'misunderstand: 오해하다'],
    ['빈칸에 알맞은 것은? “LOL ___ for laughing out loud.”', ['gets', 'means', 'stands', 'speaks'], 2, 'stand for: ~을 나타내다'],
    ['“polite”의 반대말은?', ['rude', 'kind', 'clear', 'common'], 0, 'polite(공손한) ↔ rude(무례한)'],
    ['“Each ___ has its own words.” (세대)', ['emoji', 'generation', 'language', 'situation'], 1, 'generation: 세대'],
    ['“얼굴을 마주하고”에 해당하는 표현은?', ['face to face', 'these days', 'keep in touch', 'come up with'], 0, 'face to face'],
    ['의미를 묻는 표현은?', ['How are you?', 'What do you think?', 'What does it mean?', 'Do you have a phone?'], 2, 'What does ~ mean?'],
    ['“What do you think of emojis?”에 알맞은 대답은?', ['It means fun.', 'Yes, I do.', 'I think they’re useful.', 'They stand for smiles.'], 2, '의견을 물으면 I think ~ 로 답한다.'],
    ['Let’s Watch에서 할머니가 친구에게 보내려는 것은?', ['사진', '노란 얼굴', '긴 편지', '껴안는 이모지'], 3, 'I’ll send my friend a big hug.'],
    ['빈칸에 알맞은 것은? “I think ___ emojis are fun.”', ['that', 'what', 'this', 'those'], 0, '생각의 내용을 이끄는 접속사 that'],
    ['빈칸에 알맞은 것은? “She sent ___ a message.”', ['I', 'me', 'my', 'to me'], 1, 'send + 사람(목적격) + 사물'],
    ['어법상 틀린 문장은?', ['He showed us a photo.', 'I know that you’re busy.', 'She made a card for me.', 'I sent to him a text.'], 3, 'I sent him a text. 또는 I sent a text to him.'],
    ['같은 뜻이 되도록 할 때 빈칸에 알맞은 것은? “I gave him a book.” = “I gave a book ___ him.”', ['at', 'to', 'of', 'for'], 1, 'give는 to를 쓴다.'],
    ['줄임말의 좋은 점으로 글에 나온 것은?', ['예의 바르다', '오래 쓰인다', '모두가 안다', '시간을 아낀다'], 3, 'They save time and typing.'],
    ['해골 이모지를 받은 엄마가 한 일은?', ['웃었다', '답장하지 않았다', '곧바로 전화했다', '같은 이모지를 보냈다'], 2, 'called her right away'],
    ['글쓴이가 말하는 바뀌지 않는 목표는?', ['빨리 답장하기', '서로 마음 잇기', '새 은어 만들기', '이모지 많이 쓰기'], 1, 'we want to connect with each other']
  ]
};
