/* 중1 영어(동아·윤정미) Lesson 8 · Be Smart Online
   교과서 대조(2026-10): 의사소통 기능(의견 묻고 답하기 · 동의·비동의하기), 언어 형식(수여동사 give A B · 과거진행형 / start to),
   읽기 주제(Goldilocks Learns Her Lesson — 옛이야기를 바꿔 쓴 SNS 예절 이야기), 단원 어휘를 교과서 목차·단어 목록과 맞췄다.
   대화문·읽기 글은 저작권 때문에 교과서 원문을 싣지 않고, 같은 주제·같은 언어 형식·교과서 어휘로 새로 쓴 글이다. */
window.LESSON = {
  book: 'm1-donga', no: 8,
  title: 'Be Smart Online', ko: '온라인에서 똑똑하게',
  bigQ: {en: 'How can we be smart and kind online?', ko: '온라인에서 어떻게 똑똑하고 바르게 행동할 수 있을까?'},
  align: {
    tb: {reading: 'Goldilocks Learns Her Lesson', funcs: ['의견 묻고 답하기', '동의·비동의하기'], forms: ['수여동사 (give A B)', '과거진행형 · start to'],
      note: '교과서 읽기는 “골디락스와 곰 세 마리”를 바꿔 쓴 이야기로, ‘좋아요’를 얻으려고 남의 집 사진을 허락 없이 올린 아이가 교훈을 얻는다. 여기 본문은 “양치기 소년”을 바꿔 쓴 이야기로 같은 주제(온라인 게시물의 책임)를 다룬다.'},
    std: {vocab: ['9영01-01', '9영02-01'], talk: ['9영01-09', '9영02-06'], grammar: ['9영02-05'], read1: ['9영01-04', '9영01-05'], read2: ['9영01-07', '9영02-09']},
    forms: ['Sentence Patterns', 'Progressives', 'To-Infinitive']
  },
  goals: {
    vocab: ['온라인 생활과 관련된 낱말 20개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 나의 온라인 습관을 한 문장으로 말할 수 있다.'],
    talk: ['의견을 묻고 답할 수 있다. (What do you think about ~? — I think ~.)', '상대의 의견에 동의하거나 반대할 수 있다. (I agree. / I don’t think so.)'],
    grammar: ['수여동사(give, send, show, tell + 사람 + 물건)를 쓸 수 있다.', '과거진행형(was/were + -ing)으로 과거의 어느 순간 하고 있던 일을 말할 수 있다.'],
    read1: ['바꿔 쓴 옛이야기를 읽고 주인공이 왜 거짓 게시물을 올렸는지 파악할 수 있다.'],
    read2: ['이야기의 교훈을 찾고, 온라인에 글을 올리기 전 지킬 약속을 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'What do you post online? Why?', ko: '온라인에 무엇을 올리나요? 왜 올리나요?', note: '사진, 영상, 댓글 등을 모으고, ‘좋아요’를 받으면 기분이 어떤지 묻는다.'},
    words: [
      {w: 'post', pos: 'v. / n.', ko: '게시하다; 게시물', ic: '📤', ex: 'He posted a video online.', exKo: '그는 온라인에 영상을 올렸다.'},
      {w: 'social', pos: 'adj.', ko: '사회의, 사교의', ic: '🌐', ex: 'She uses social media every day.', exKo: '그녀는 날마다 소셜 미디어를 쓴다.'},
      {w: 'follower', pos: 'n.', ko: '팔로워, 따르는 사람', ic: '👥', ex: 'He has many followers.', exKo: '그는 팔로워가 많다.'},
      {w: 'selfie', pos: 'n.', ko: '셀카', ic: '🤳', ex: 'She took a selfie.', exKo: '그녀는 셀카를 찍었다.'},
      {w: 'shocking', pos: 'adj.', ko: '충격적인', ic: '😱', ex: 'The news was shocking.', exKo: '그 소식은 충격적이었다.'},
      {w: 'boring', pos: 'adj.', ko: '지루한', ic: '🥱', ex: 'His videos were boring.', exKo: '그의 영상은 지루했다.'},
      {w: 'personal', pos: 'adj.', ko: '개인의, 개인적인', ic: '🔐', ex: 'Don’t post personal information.', exKo: '개인 정보를 올리지 마라.'},
      {w: 'permission', pos: 'n.', ko: '허락', ic: '✅', ex: 'Ask for permission first.', exKo: '먼저 허락을 구해라.'},
      {w: 'forgive', pos: 'v.', ko: '용서하다', ic: '🤝', ex: 'Please forgive me.', exKo: '저를 용서해 주세요.'},
      {w: 'shout', pos: 'v.', ko: '소리치다', ic: '📢', ex: 'He shouted for help.', exKo: '그는 도와 달라고 소리쳤다.'},
      {w: 'knock', pos: 'v.', ko: '두드리다', ic: '🚪', ex: 'Someone knocked on the door.', exKo: '누군가 문을 두드렸다.'},
      {w: 'asleep', pos: 'adj.', ko: '잠든', ic: '😴', ex: 'The sheep were asleep.', exKo: '양들이 잠들어 있었다.'},
      {w: 'upstairs', pos: 'adv.', ko: '위층으로', ic: '⬆️', ex: 'She went upstairs.', exKo: '그녀는 위층으로 올라갔다.'},
      {w: 'noisy', pos: 'adj.', ko: '시끄러운', ic: '🔊', ex: 'The room was noisy.', exKo: '방이 시끄러웠다.'},
      {w: 'press', pos: 'v.', ko: '누르다', ic: '👆', ex: 'Think before you press the button.', exKo: '버튼을 누르기 전에 생각해라.'},
      {w: 'forever', pos: 'adv.', ko: '영원히', ic: '♾️', ex: 'Posts can stay online forever.', exKo: '게시물은 온라인에 영원히 남을 수 있다.'},
      {w: 'review', pos: 'n.', ko: '후기, 평가', ic: '⭐', ex: 'I read the reviews before I buy.', exKo: '나는 사기 전에 후기를 읽는다.'},
      {w: 'list', pos: 'n.', ko: '목록', ic: '📝', ex: 'Make a list of rules.', exKo: '규칙 목록을 만들어라.'},
      {w: 'unique', pos: 'adj.', ko: '독특한, 유일한', ic: '🦄', ex: 'Make a unique password.', exKo: '독특한 비밀번호를 만들어라.'},
      {w: 'smart', pos: 'adj.', ko: '똑똑한, 현명한', ic: '🧠', ex: 'Be a smart user.', exKo: '현명한 사용자가 되어라.'}
    ],
    phrases: [
      {w: 'What do you think about ~?', ko: '~에 대해 어떻게 생각하니?', ex: 'What do you think about this video?', exKo: '이 영상에 대해 어떻게 생각해?'},
      {w: 'I agree. / I don’t think so.', ko: '동의해. / 나는 그렇게 생각하지 않아.', ex: 'I agree. It’s really funny.', exKo: '동의해. 정말 웃겨.'},
      {w: 'break into', ko: '~에 침입하다', ex: 'Someone broke into the house.', exKo: '누군가 그 집에 침입했다.'},
      {w: 'in surprise', ko: '놀라서', ex: 'He jumped up in surprise.', exKo: '그는 놀라서 펄쩍 뛰었다.'},
      {w: 'get bored', ko: '지루해하다', ex: 'His followers got bored.', exKo: '그의 팔로워들은 지루해했다.'},
      {w: 'from now on', ko: '지금부터', ex: 'From now on, I’ll check the facts.', exKo: '지금부터 나는 사실을 확인할 것이다.'}
    ],
    pairs: [
      {a: 'boring', b: 'bored', rel: '지루하게 하는 / 지루해하는'},
      {a: 'shocking', b: 'shocked', rel: '충격적인 / 충격받은'},
      {a: 'asleep', b: 'awake', rel: '반대말'},
      {a: 'noisy', b: 'quiet', rel: '반대말'}
    ],
    wrap: {en: 'I post ______ online. Before I press POST, I ______.', ko: '오늘 배운 낱말로 나의 온라인 습관과 약속 쓰기'}
  },

  talk: {
    hook: {en: 'Do you believe everything online?', ko: '온라인에 있는 모든 것을 믿나요?', note: '가짜 뉴스나 과장된 광고를 본 경험을 나눈다. 서로의 의견을 묻고 동의·반대하는 표현으로 이어진다.'},
    speakers: {Jiwoo: {voice: 0, pitch: 1.15}, Ben: {voice: 1, pitch: 1}, Mom: {voice: 2, pitch: 1.1}, Sam: {voice: 1, pitch: .95}, 'Ms. Ahn': {voice: 2, pitch: 1.05}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '의견 묻고 답하기',
        key: {q: ['What do you think about ~?', 'What do you think of ~?', 'How do you like ~?'], a: ['I think (that) ~.', 'In my opinion, ~.', 'I like it. It’s ~.']},
        note: 'What do you think about + 명사(-ing)?로 의견을 묻는다. 대답은 I think (that) + 주어 + 동사. 그 까닭을 한 문장 더 붙이면 좋다.',
        dialogs: [
          { title: 'Dialogue A', setting: '방과 후, 휴대폰 가게', lines: [
            {s: 'Jiwoo', en: 'I need a new phone. {{What do you think about}} this one?', ko: '새 휴대폰이 필요해. 이건 어떻게 생각해?'},
            {s: 'Ben', en: '{{I think}} it’s great. The camera is really good.', ko: '좋은 것 같아. 카메라가 정말 좋아.'},
            {s: 'Jiwoo', en: 'But it’s expensive. Let’s read the reviews.', ko: '그런데 비싸. 후기를 읽어 보자.'},
            {s: 'Ben', en: 'Good idea. Most people gave it five stars.', ko: '좋은 생각이야. 대부분 별 다섯 개를 줬네.'}
          ]},
          { title: 'Dialogue B', setting: '저녁, 집 거실', lines: [
            {s: 'A', en: 'Mom, what do you think about this video? A cat is driving a car!', ko: '엄마, 이 영상 어떻게 생각해요? 고양이가 차를 운전해요!'},
            {s: 'B', en: '{{In my opinion}}, it’s not real. Someone made it with an app.', ko: '내 생각에 그건 진짜가 아니야. 누가 앱으로 만들었어.'},
            {s: 'A', en: 'Really? It has two million views.', ko: '정말요? 조회 수가 2백만이에요.'},
            {s: 'B', en: 'Many views don’t make it true.', ko: '조회 수가 많다고 사실이 되는 건 아니란다.'}
          ]}
        ],
        check: [
          {q: 'What does Ben think about the phone?', a: 'He thinks it’s great (the camera is really good).'},
          {q: 'How many stars did most people give the phone?', a: 'Five stars.'},
          {q: 'What does Mom think about the video?', a: 'She thinks it’s not real.'}
        ],
        drill: {frame: ['A: What do you think about ____?', 'B: I think it’s ...'], opts: ['online games', 'this selfie', 'cleaning robots', 'short videos', 'school uniforms', 'smart watches']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '동의·비동의하기',
        key: {q: ['I think ~.'], a: ['I think so, too. / I agree (with you).', 'I don’t think so. / I don’t agree.', 'You’re right.']},
        note: '반대할 때는 I don’t think so.로 부드럽게 말하고 이유를 덧붙인다. 상대 의견을 존중하는 태도가 중요하다.',
        dialogs: [
          { title: 'Dialogue A', setting: '점심시간, 교실', lines: [
            {s: 'Sam', en: 'I think cleaning robots are perfect for people like us.', ko: '청소 로봇은 우리 같은 사람한테 딱인 것 같아.'},
            {s: 'Jiwoo', en: '{{I agree}}. I don’t like cleaning my room.', ko: '동의해. 나는 방 청소하는 거 싫어.'},
            {s: 'Sam', en: 'I think robots will do all the housework soon.', ko: '로봇이 곧 집안일을 전부 할 것 같아.'},
            {s: 'Jiwoo', en: '{{I don’t think so}}. They can’t cook or fold clothes yet.', ko: '나는 그렇게 생각 안 해. 아직 요리나 빨래 개기는 못 하잖아.'}
          ]},
          { title: 'Dialogue B', setting: '디지털 시민 수업', lines: [
            {s: 'Ms. Ahn', en: 'Some people think that posting friends’ photos is OK. What do you think?', ko: '친구 사진을 올려도 괜찮다고 생각하는 사람들이 있어요. 여러분은 어떻게 생각해요?'},
            {s: 'Ben', en: '{{I don’t agree}}. We need permission first.', ko: '저는 동의하지 않아요. 먼저 허락을 받아야 해요.'},
            {s: 'Sam', en: '{{I think so, too}}. Photos are personal.', ko: '저도 그렇게 생각해요. 사진은 개인적인 거예요.'},
            {s: 'Ms. Ahn', en: '{{You’re right}}. Always ask first.', ko: '맞아요. 늘 먼저 물어보세요.'}
          ]}
        ],
        check: [
          {q: 'Does Jiwoo agree that robots will do all the housework soon?', a: 'No, she doesn’t.'},
          {q: 'Why does Jiwoo disagree?', a: 'Robots can’t cook or fold clothes yet.'},
          {q: 'What do we need before we post friends’ photos?', a: 'Permission.'}
        ],
        drill: {frame: ['A: I think ____.', 'B: I agree. / I don’t think so.'], opts: ['games are good for us', 'selfies are fun', 'online classes are easy', 'phones are bad for sleep', 'robots are smart', 'reviews are always true']}
      }
    ],
    interviewEx: 'Minji thinks short videos are fun. I don’t agree because they waste time.',
    watch: {
      label: 'Let’s Watch', title: 'Is It True?', setting: '방과 후, 학교 앞. 벤이 휴대폰으로 충격적인 게시물을 보여 준다.',
      lines: [
        {s: 'Ben', en: 'Look! This post says our school will close tomorrow.', ko: '봐! 이 게시물에 내일 우리 학교가 문을 닫는대.'},
        {s: 'Jiwoo', en: 'Really? What do you think about it?', ko: '정말? 너는 어떻게 생각해?'},
        {s: 'Ben', en: 'I think it’s true. Many people shared it.', ko: '사실인 것 같아. 많은 사람이 공유했어.'},
        {s: 'Jiwoo', en: 'I don’t think so. Let’s check the school website first.', ko: '나는 그렇게 생각 안 해. 먼저 학교 누리집을 확인해 보자.'},
        {s: 'Ben', en: 'You’re right. Oh, it was a fake post!', ko: '네 말이 맞아. 아, 가짜 게시물이었어!'}
      ],
      check: [
        {q: 'What did the post say?', a: 'Their school will close tomorrow.'},
        {q: 'Why did Ben believe it?', a: 'Many people shared it.'},
        {q: 'Was the post true?', a: 'No, it was a fake post.'}
      ]
    },
    wrap: {en: 'Share your opinion about one online habit. Your partner agrees or disagrees and gives a reason.', ko: '온라인 습관 하나에 대한 의견을 말하고, 짝은 동의·반대와 그 까닭을 말하기'}
  },

  grammar: {
    cover: 'give A B · was -ing',
    hook: {en: 'People didn’t {{give}} Leo many likes.  /  It {{was getting}} dark, and it {{started to}} snow.', ko: '첫 문장에서 give 뒤에 오는 두 말은 무엇일까? 둘째 문장의 was getting은 언제의 일일까?', answer: 'give + Leo(사람) + many likes(물건) / was getting → 과거의 그 순간 진행 중이던 일', note: '교과서 언어 형식(People didn’t give Goldilocks many likes. / It was getting dark, and it started to rain.)과 같은 짜임이다.'},
    points: [
      { id: 'g1', name: '수여동사 (give A B)', short: '수여동사', form: 'give / send / show / tell / buy + 사람(~에게) + 물건(~을)', meaning: '(사람)에게 (물건)을 ~해 주다',
        notice: [
          {en: 'People didn’t {{give Leo many likes}}.', ko: '사람들은 레오에게 ‘좋아요’를 많이 주지 않았다.'},
          {en: 'His followers {{sent him messages}}.', ko: '팔로워들이 그에게 메시지를 보냈다.'},
          {en: 'He {{showed the villagers the video}}.', ko: '그는 마을 사람들에게 그 영상을 보여 주었다.'}
        ],
        rule: [
          {k: '순서', v: '동사 + 사람 + 물건 (사람이 먼저!)', ex: 'She told me a secret.'},
          {k: '바꿔 쓰기', v: '동사 + 물건 + to + 사람 (give, send, show, tell)', ex: 'He gave the phone to me.'},
          {k: 'for를 쓰는 동사', v: 'buy, make, cook + 물건 + for + 사람', ex: 'Mom made a cake for me.'}
        ],
        compare: {
          title: '사람 먼저 / 물건 먼저', note: '물건을 먼저 쓰면 사람 앞에 to나 for를 붙인다.',
          head: ['동사 + 사람 + 물건', '동사 + 물건 + to/for + 사람'],
          cols: [['give him likes', 'show me the post', 'buy her a phone'], ['give likes to him', 'show the post to me', 'buy a phone for her']]
        },
        check: [
          {q: 'People gave ____ many likes. (he)', a: 'him'},
          {q: 'He showed ____ the video. (우리에게)', a: 'us'},
          {q: 'She sent a message ____ me. (전치사)', a: 'to'},
          {q: 'Dad bought a new phone ____ me. (전치사)', a: 'for'},
          {q: 'Can you tell ____ the truth? (나에게)', a: 'me'}
        ],
        trap: {bad: 'He gave many likes him.', good: 'He gave him many likes. / He gave many likes to him.', why: '물건을 먼저 쓰면 사람 앞에 to가 필요하다.'},
        scramble: [
          {ko: '사람들은 그에게 ‘좋아요’를 많이 주었다.', en: 'People gave him many likes.'},
          {ko: '그녀는 나에게 그 게시물을 보여 주었다.', en: 'She showed me the post.'},
          {ko: '팔로워들이 그에게 메시지를 보냈다.', en: 'His followers sent him messages.'}
        ]
      },
      { id: 'g2', name: '과거진행형 · start to', short: '과거진행형', form: 'was / were + 동사-ing / start + to부정사', meaning: '(그때) ~하고 있었다 / ~하기 시작하다',
        notice: [
          {en: 'Leo {{was watching}} the sheep on the hill.', ko: '레오는 언덕에서 양을 지켜보고 있었다.'},
          {en: 'It {{was getting}} dark, and it {{started to}} snow.', ko: '날이 어두워지고 있었고, 눈이 내리기 시작했다.'},
          {en: 'His posts {{were getting}} a lot of likes.', ko: '그의 게시물은 ‘좋아요’를 많이 받고 있었다.'}
        ],
        rule: [
          {k: '형태', v: 'I / he / she / it → was + -ing, you / we / they → were + -ing', ex: 'They were sleeping.'},
          {k: '뜻', v: '과거의 어느 한 순간에 진행 중이던 동작 (배경 장면)', ex: 'When the wolf came, the sheep were sleeping.'},
          {k: 'start to', v: 'start / begin + to부정사(또는 -ing) = ~하기 시작하다', ex: 'It started to rain. (= It started raining.)'}
        ],
        check: [
          {q: 'Leo ____ a video at that time. (make)', a: 'was making'},
          {q: 'The villagers ____ dinner. (eat)', a: 'were eating'},
          {q: 'It was getting dark, and it started ____. (snow)', a: 'to snow'},
          {q: 'The sheep ____ sleeping. (be, 복수)', a: 'were'},
          {q: 'He ____ watching the sheep. (be 부정)', a: 'wasn’t'}
        ],
        trap: {bad: 'The sheep was sleeping. (양 여러 마리)', good: 'The sheep were sleeping.', why: '주어가 복수면 were + -ing. (sheep은 단수·복수 모양이 같다)'},
        scramble: [
          {ko: '그는 그때 양을 지켜보고 있었다.', en: 'He was watching the sheep then.'},
          {ko: '날이 어두워지고 있었다.', en: 'It was getting dark.'},
          {ko: '눈이 내리기 시작했다.', en: 'It started to snow.'}
        ]
      }
    ],
    wrap: {en: 'Yesterday at 8 p.m., I was ______ing. My friend sent me ______.', ko: '어제 저녁 하고 있던 일(과거진행형)과 친구가 보내 준 것(수여동사) 쓰기'},
    wrapEx: 'Yesterday at 8 p.m., I was doing my homework. My friend sent me a funny video.'
  },

  reading: {
    title: 'The Boy Who Posted “Wolf!”', kind: '바꿔 쓴 옛이야기', cover: 'Wolf!', coverKo: '양치기 소년, 다시 쓰기', cover2: 'Think First', coverKo2: '누르기 전에 생각하기',
    before: [
      {q: 'Do you know the story “The Boy Who Cried Wolf”?', a: '거짓말을 하던 소년이 진짜 늑대가 왔을 때 아무도 믿어 주지 않았다'},
      {q: 'Look at the title. What is different in this story?', a: '소년이 소리치는 대신 온라인에 글을 올린다'}
    ],
    gloss: {'shepherd': '양치기', 'sheep': '양 (단수·복수 같음)', 'hill': '언덕', 'like': '‘좋아요’', 'villager': '마을 사람', 'fake': '가짜의', 'wolf': '늑대', 'screenshot': '화면 캡처'},
    paras: [
      {who: '', en: 'There was a shepherd boy in a small mountain village. His name was Leo. Every day, he watched the sheep on the hill and posted videos on social media. But the videos were boring, and people didn’t give him many likes.',
       ko: '작은 산골 마을에 양치기 소년이 있었다. 이름은 레오였다. 날마다 그는 언덕에서 양을 지켜보며 소셜 미디어에 영상을 올렸다. 하지만 영상은 지루했고, 사람들은 그에게 ‘좋아요’를 많이 주지 않았다.',
       check: {q: 'Why didn’t people give Leo many likes?', a: 'His videos were boring.'}, think: '‘좋아요’를 많이 받으려고 레오는 무엇을 할까?'},
      {who: '', en: '“How can I get more likes?” he thought. “I know! I’ll post something shocking.” He posted a video: “Help! A wolf is coming!” The villagers ran up the hill in surprise, but there was no wolf. Leo laughed. His followers gave him a lot of likes.',
       ko: '“어떻게 하면 ‘좋아요’를 더 받을까?” 그는 생각했다. “알았다! 충격적인 걸 올려야지.” 그는 영상을 올렸다. “도와줘요! 늑대가 와요!” 마을 사람들이 놀라서 언덕으로 뛰어 올라왔지만 늑대는 없었다. 레오는 웃었다. 팔로워들은 그에게 ‘좋아요’를 잔뜩 주었다.',
       check: {q: 'What did Leo post?', a: '“Help! A wolf is coming!”'}, think: '마을 사람들의 기분은 어땠을까?'},
      {who: '', en: 'Leo did it again and again. His posts were getting more and more likes, but the villagers stopped coming. “That boy is lying again,” they said.',
       ko: '레오는 그 일을 계속 되풀이했다. 그의 게시물은 ‘좋아요’를 점점 더 많이 받고 있었지만, 마을 사람들은 더 이상 오지 않았다. “저 아이가 또 거짓말을 하는군.” 그들이 말했다.',
       check: {q: 'Why did the villagers stop coming?', a: 'They thought Leo was lying again.'}, think: '‘좋아요’와 마을 사람들의 믿음 중 무엇이 더 중요할까?'},
      {who: '', en: 'One evening, Leo was watching the sheep. It was getting dark, and it started to snow. Suddenly, a real wolf came out of the forest! Leo posted, “A real wolf! Please help!” But nobody came. Some people even sent him messages: “Not again. So boring!”',
       ko: '어느 날 저녁, 레오는 양을 지켜보고 있었다. 날이 어두워지고 있었고, 눈이 내리기 시작했다. 갑자기 진짜 늑대가 숲에서 나왔다! 레오는 글을 올렸다. “진짜 늑대예요! 도와주세요!” 하지만 아무도 오지 않았다. 어떤 사람들은 심지어 그에게 메시지를 보냈다. “또야? 지루해!”',
       check: {q: 'What was Leo doing that evening?', a: 'He was watching the sheep.'}, think: '왜 아무도 레오를 믿지 않았을까?'},
      {who: '', en: 'The next morning, Leo knocked on every door in the village. “Please forgive me. I lost three sheep because of my fake posts.” He deleted all of them. But his friend Mina showed him her phone. “Look. People took screenshots. Your posts will stay online forever.”',
       ko: '다음 날 아침, 레오는 마을의 모든 집 문을 두드렸다. “용서해 주세요. 제 가짜 게시물 때문에 양을 세 마리 잃었어요.” 그는 게시물을 모두 지웠다. 하지만 친구 미나가 레오에게 휴대폰을 보여 주었다. “봐. 사람들이 화면을 캡처했어. 네 게시물은 온라인에 영원히 남을 거야.”',
       check: {q: 'What did Mina show Leo?', a: 'Her phone (screenshots of his posts).'}, think: '지운 게시물이 왜 영원히 남을까?'},
      {who: '', en: '“I didn’t think about that,” said Leo. “From now on, I’ll check the truth before I press POST.” What do you think about Leo’s promise? Do you agree with him?',
       ko: '“그건 생각 못 했어.” 레오가 말했다. “지금부터는 ‘게시’를 누르기 전에 사실인지 확인할 거야.” 레오의 약속에 대해 어떻게 생각하나요? 레오에게 동의하나요?',
       check: {q: 'What is Leo’s promise?', a: 'He will check the truth before he presses POST.'}, think: '내가 글을 올리기 전에 지킬 약속은?'}
    ],
    split: 3,
    next: '진짜 늑대가 나타나면\n누가 레오를 믿어 줄까?',
    recap: {q: '레오는 왜 거짓 게시물을 올렸을까?', items: [{k: 'BEFORE', v: 'boring videos · not many likes'}, {k: 'FAKE POSTS', v: '“A wolf is coming!” · many likes · villagers stopped coming'}]},
    tf: [
      {p: 0, s: 'Leo’s first videos got a lot of likes.', a: false, why: 'People didn’t give him many likes.'},
      {p: 1, s: 'There was a wolf the first time.', a: false, why: 'There was no wolf.'},
      {p: 2, s: 'The villagers stopped coming.', a: true},
      {p: 3, s: 'It started to snow that evening.', a: true},
      {p: 4, s: 'Leo lost three sheep.', a: true},
      {p: 4, s: 'Leo’s posts disappeared completely.', a: false, why: 'People took screenshots. Your posts will stay online forever.'}
    ],
    key: [
      {en: 'People didn’t {{give him many likes}}.', note: '수여동사 give + 사람 + 물건', g: 'g1'},
      {en: 'His followers {{gave him a lot of likes}}.', note: '수여동사 give + 사람 + 물건', g: 'g1'},
      {en: 'His posts {{were getting}} more and more likes.', note: '과거진행형 were + -ing', g: 'g2'},
      {en: 'It {{was getting}} dark, and it {{started to snow}}.', note: '과거진행형 / start + to부정사', g: 'g2'},
      {en: 'Some people even {{sent him messages}}.', note: '수여동사 send + 사람 + 물건', g: 'g1'},
      {en: 'His friend Mina {{showed him her phone}}.', note: '수여동사 show + 사람 + 물건', g: 'g1'}
    ],
    summary: {text: 'Leo’s videos were {{boring}}, so he posted a {{shocking}} fake video about a wolf. His followers gave him many likes, but the villagers stopped believing him. When a real wolf came, nobody helped. He asked the villagers to {{forgive}} him, but his posts will stay online {{forever}}. Now he checks the truth before he {{presses}} POST.'},
    order: ['Leo posted boring videos.', 'He posted a fake video about a wolf.', 'A real wolf came out of the forest.', 'Leo knocked on every door in the village.'],
    chart: {title: 'LEO’S LESSON', ko: '레오의 변화 정리하기', cols: ['What he did', 'What happened'], note: '표를 보고 과거진행형과 수여동사로 이야기를 다시 말하게 한다.', rows: [
      {name: 'At first', cells: ['posted boring videos', 'people didn’t give him many likes']},
      {name: 'Fake posts', cells: ['posted “A wolf is coming!”', 'many likes, but no trust']},
      {name: 'Real wolf', cells: ['posted “Please help!”', 'nobody came, lost three sheep']},
      {name: 'Now', cells: ['deleted the posts, said sorry', 'checks the truth before posting']}
    ]},
    wrap: {en: 'Before I press POST, I will ______. I think that ______.', ko: '관통 질문으로 돌아가기: 온라인에 글을 올리기 전 나의 약속 쓰기'}
  },

  quiz: [
    ['“허락”을 뜻하는 낱말은?', ['permission', 'review', 'follower', 'personal'], 0, 'permission: 허락'],
    ['“asleep”의 반대말은?', ['noisy', 'awake', 'boring', 'smart'], 1, 'asleep ↔ awake'],
    ['“He jumped up in ___.”', ['surprise', 'surprised', 'surprising', 'surprises'], 0, 'in surprise: 놀라서'],
    ['의견을 묻는 표현은?', ['What do you think about it?', 'May I use it?', 'How often do you use it?', 'Can you please use it?'], 0, 'What do you think about ~?'],
    ['동의하는 표현은?', ['I don’t think so.', 'I don’t agree.', 'I think so, too.', 'I’m sorry, but I can’t.'], 2, 'I think so, too. / I agree.'],
    ['반대하는 표현은?', ['You’re right.', 'I agree with you.', 'I don’t think so.', 'Me, too.'], 2, 'I don’t think so.'],
    ['Let’s Watch에서 두 사람이 확인한 곳은?', ['뉴스', '학교 누리집', '친구 게시물', '선생님'], 1, 'Let’s check the school website first.'],
    ['빈칸에 알맞은 것은? “People gave ___ many likes.”', ['he', 'his', 'him', 'he’s'], 2, '수여동사 + 사람(목적격) + 물건'],
    ['빈칸에 알맞은 것은? “It was ___ dark.”', ['get', 'gets', 'getting', 'got'], 2, '과거진행형 was + -ing'],
    ['어법상 틀린 문장은?', ['She showed me the post.', 'He gave the phone to me.', 'They was sleeping.', 'It started to snow.'], 2, 'They were sleeping.'],
    ['빈칸에 알맞은 것은? “Mom made a cake ___ me.”', ['to', 'for', 'of', 'with'], 1, 'make + 물건 + for + 사람'],
    ['레오가 처음에 ‘좋아요’를 많이 못 받은 까닭은?', ['영상이 지루해서', '늑대가 무서워서', '휴대폰이 없어서', '양이 없어서'], 0, 'the videos were boring'],
    ['진짜 늑대가 왔을 때 마을 사람들의 반응은?', ['모두 도우러 왔다', '아무도 오지 않았다', '경찰을 불렀다', '늑대를 쫓아냈다'], 1, 'But nobody came.'],
    ['레오의 게시물이 영원히 남는 까닭은?', ['지우지 않아서', '사람들이 화면을 캡처해서', '미나가 다시 올려서', '양이 공유해서'], 1, 'People took screenshots.'],
    ['글의 교훈으로 알맞은 것은?', ['‘좋아요’를 많이 받자', '글을 올리기 전에 사실을 확인하자', '양은 밤에 지키자', '휴대폰을 쓰지 말자'], 1, 'I’ll check the truth before I press POST.']
  ]
};

/* ── 보강: 원리 중심 문법 · 모션 그래픽 · 낱말 만들기 · 발음 기호 ── */
(function (L) {
  const ipa = {post: '/poʊst/', social: '/ˈsoʊʃl/', follower: '/ˈfɑːloʊər/', selfie: '/ˈselfi/', shocking: '/ˈʃɑːkɪŋ/', boring: '/ˈbɔːrɪŋ/', personal: '/ˈpɜːrsənl/', permission: '/pərˈmɪʃn/', forgive: '/fərˈɡɪv/', shout: '/ʃaʊt/', knock: '/nɑːk/', asleep: '/əˈsliːp/', upstairs: '/ˌʌpˈsterz/', noisy: '/ˈnɔɪzi/', press: '/pres/', forever: '/fərˈevər/', review: '/rɪˈvjuː/', list: '/lɪst/', unique: '/juˈniːk/', smart: '/smɑːrt/'};
  L.vocab.words.forEach(w => { if (ipa[w.w]) w.ipa = ipa[w.w]; });
  L.vocab.morph = [
    {w: 'follower', ko: '팔로워, 따르는 사람', parts: [{t: 'follow', k: 'root', m: '따르다'}, {t: 'er', k: 'suf', m: '~하는 사람'}], family: ['player', 'reader', 'writer'], note: '동사 + -er = 그 일을 하는 사람.'},
    {w: 'permission', ko: '허락', parts: [{t: 'permit', k: 'root', m: '허락하다'}, {t: 'sion', k: 'suf', m: '~것 (명사)'}], family: ['permit', 'decision', 'television'], note: '동사 permit의 t가 s로 바뀌며 -sion이 붙는다 → 허락.'},
    {w: 'upstairs', ko: '위층으로', parts: [{t: 'up', k: 'pre', m: '위로'}, {t: 'stairs', k: 'root', m: '계단'}], family: ['downstairs', 'staircase'], note: '계단(stairs) 위로(up) → 위층으로. 반대는 downstairs.'}
  ];
  const [g1, g2] = L.grammar.points;
  g1.principle = {
    q: '수여동사는 왜 목적어가 두 개일까?',
    pic: [{en: 'People gave', ko: '주다 류의 동사'}, {en: 'Leo', ko: '받는 사람 (~에게)', hot: true}, {en: 'many likes', ko: '주는 것 (…을)'}],
    core: 'give, send, show, tell 같은 “주는” 동사는 “누구에게”와 “무엇을”이 둘 다 필요하다. 그래서 동사 + 사람 + 물건 순서로 목적어 두 개를 쓴다.',
    why: ['순서: 동사 + 간접목적어(사람, ~에게) + 직접목적어(물건, …을).', '물건을 먼저 쓰면 사람 앞에 전치사를 넣는다: send a message to her mom.', 'give, send, show, tell → to / buy, make, cook → for.']
  };
  g1.anim = [{title: '사람과 물건의 자리 바꾸기', states: [
    {t: 'People/S | gave/V | Leo/O#mom | many likes/O#msg | .', note: '동사 + 사람 + 물건', ko: '사람들은 레오에게 ‘좋아요’를 많이 주었다.'},
    {t: 'People/S | gave/V | many likes/O#msg | to/X | Leo/O#mom | .', note: '물건이 앞으로 오면 사람 앞에 to', ko: '사람들은 ‘좋아요’를 레오에게 많이 주었다.'}]}];
  g1.contrast = {title: 'to? for?', pairs: [
    {a: 'He showed his drawing {{to}} me.', ka: '그는 나에게 그림을 보여 주었다. (show → to)', b: 'He made a card {{for}} me.', kb: '그는 나를 위해 카드를 만들었다. (make → for)'}],
    point: '전해 주는 동사는 to, 만들어 주는 동사는 for.'};
  g2.principle = {
    q: '과거진행형은 과거형과 무엇이 다를까?',
    pic: [{en: 'was watching', ko: '그 순간 이어지던 장면 (배경)', hot: true}, {en: 'came', ko: '그 사이에 툭 일어난 일'}],
    core: '과거진행형(was/were + -ing)은 과거의 어느 한 순간을 사진처럼 멈춰 “그때 하고 있던 중”인 장면을 보여 준다. 그 위에 갑자기 일어난 일은 과거형으로 쓴다.',
    why: ['be동사를 과거형(was/were)으로 바꾸면 진행형도 과거가 된다.', '이야기에서 배경(was getting dark)은 진행형, 사건(a wolf came)은 과거형.', 'start to + 동사원형 = ~하기 시작하다 (start -ing와 뜻이 같다).']
  };
  g2.anim = [{title: '현재진행 → 과거진행', states: [
    {t: 'Leo/S | is/X#be | watching/V#v | the sheep/O | now/M#t | .', note: '지금 하는 중', ko: '레오는 지금 양을 지켜보고 있다.'},
    {t: 'Leo/S | was/X#be | watching/V#v | the sheep/O | then/M#t | .', note: 'be동사만 과거로 → 그때 하는 중이었다', ko: '레오는 그때 양을 지켜보고 있었다.'}]},
    {title: '배경 장면 + 갑자기 일어난 일', states: [
    {t: 'Leo/S | was watching/V#bg | the sheep/O | . | / | A wolf/S#w | came/V#c | out/M | .', note: '두 문장', ko: '레오는 양을 지켜보고 있었다. 늑대가 나왔다.'},
    {t: 'Leo/S | was watching/V#bg | the sheep/O | when/X | a wolf/S#w | came/V#c | out/M | .', note: '진행 중(배경) + when + 과거(사건)', ko: '늑대가 나왔을 때 레오는 양을 지켜보고 있었다.'}]}];
  g2.contrast = {title: '과거형 vs 과거진행형', pairs: [
    {a: 'It {{snowed}} last night.', ka: '어젯밤 눈이 왔다. (끝난 일)', b: 'It {{was snowing}} at 9 p.m.', kb: '밤 9시에 눈이 내리고 있었다. (그 순간 진행 중)'}],
    point: '그 순간 이어지던 장면은 was/were + -ing, 툭 일어난 일은 과거형.'};
})(window.LESSON);
