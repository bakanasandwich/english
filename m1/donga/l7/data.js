/* 중1 영어(동아·윤정미) Lesson 7 · Find Your Dream
   교과서 대조(2026-10): 의사소통 기능(관심 묻고 답하기 · 장래 희망 묻고 답하기), 언어 형식(to부정사 부사적 용법(목적) · 접속사 when),
   읽기 주제(Let’s Make a Movie! — 영화를 만드는 여러 직업인의 소개), 단원 어휘를 교과서 목차·단어 목록과 맞췄다.
   대화문·읽기 글은 저작권 때문에 교과서 원문을 싣지 않고, 같은 주제·같은 언어 형식·교과서 어휘로 새로 쓴 글이다. */
window.LESSON = {
  book: 'm1-donga', no: 7,
  title: 'Find Your Dream', ko: '나의 꿈을 찾아서',
  bigQ: {en: 'What do you need to find your dream job?', ko: '꿈의 직업을 찾으려면 무엇이 필요할까?'},
  align: {
    tb: {reading: 'Let’s Make a Movie!', funcs: ['관심 묻고 답하기', '장래 희망 묻고 답하기'], forms: ['to부정사 부사적 용법 (~하기 위해)', '접속사 when'],
      note: '교과서 읽기는 한 영화를 만드는 감독·장소 섭외 담당·촬영 감독·동물 조련사·편집자·음향 효과 담당이 자기 일을 소개하는 글. 여기 본문은 학교 밴드의 뮤직비디오 촬영장으로 바꿔 새로 쓴 글이다.'},
    std: {vocab: ['9영01-01', '9영02-01'], talk: ['9영01-02', '9영02-04'], grammar: ['9영02-05'], read1: ['9영01-02', '9영01-03'], read2: ['9영01-10', '9영02-04']},
    forms: ['To-Infinitive', 'Subordinating Conjunctions']
  },
  goals: {
    vocab: ['직업·영상 제작과 관련된 낱말 20개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 관심 있는 직업을 한 문장으로 소개할 수 있다.'],
    talk: ['관심 있는 것을 묻고 답할 수 있다. (What are you interested in? — I’m interested in ~.)', '장래 희망을 묻고 답할 수 있다. (What do you want to be? — I want to be ~.)'],
    grammar: ['to부정사(~하기 위해)로 행동의 목적을 말할 수 있다.', '접속사 when으로 “~할 때”를 나타내는 두 문장을 이을 수 있다.'],
    read1: ['촬영장 사람들의 소개 글을 읽고 각 직업이 하는 일을 파악할 수 있다.'],
    read2: ['여러 직업을 비교하고, 내가 해 보고 싶은 일과 그 까닭을 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'Who makes a movie? Only actors?', ko: '영화는 누가 만들까요? 배우만 있을까요?', note: '감독, 카메라 기사, 작가 등 답을 모은다. 영화 끝에 나오는 수많은 이름(엔딩 크레디트)을 떠올리게 한다.'},
    words: [
      {w: 'director', pos: 'n.', ko: '감독', ic: '🎬', audio: 'assets/audio/director.mp3', audioCredit: 'Ocelots33 · CC BY-SA 4.0 (Wikimedia Commons, US)', ex: 'The director said, “Action!”', exKo: '감독이 “액션!” 하고 외쳤다.'},
      {w: 'editor', pos: 'n.', ko: '편집자', ic: '✂️', audio: 'assets/audio/editor.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The editor cuts the long scenes.', exKo: '편집자가 긴 장면을 잘라 낸다.'},
      {w: 'location', pos: 'n.', ko: '장소, (촬영) 현장', ic: '📍', audio: 'assets/audio/location.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'We need a good location.', exKo: '우리는 좋은 장소가 필요하다.'},
      {w: 'manager', pos: 'n.', ko: '관리자, 담당자', ic: '📋', audio: 'assets/audio/manager.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'She is a location manager.', exKo: '그녀는 촬영지 섭외 담당자다.'},
      {w: 'photography', pos: 'n.', ko: '사진 촬영(술)', ic: '📷', audio: 'assets/audio/photography.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'He is the director of photography.', exKo: '그는 촬영 감독이다.'},
      {w: 'photographer', pos: 'n.', ko: '사진작가', ic: '🧑‍🎤', ex: 'I want to be a photographer.', exKo: '나는 사진작가가 되고 싶다.'},
      {w: 'wrangler', pos: 'n.', ko: '(촬영용) 동물 조련사', ic: '🐕', ex: 'The wrangler trains the dog.', exKo: '조련사가 개를 훈련시킨다.'},
      {w: 'shoot', pos: 'v.', ko: '촬영하다', ic: '🎥', audio: 'assets/audio/shoot.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'We shoot the video at the park.', exKo: '우리는 공원에서 영상을 촬영한다.'},
      {w: 'capture', pos: 'v.', ko: '담아내다, 포착하다', ic: '🖼️', audio: 'assets/audio/capture.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'I want to capture this moment.', exKo: '나는 이 순간을 담고 싶다.'},
      {w: 'moment', pos: 'n.', ko: '순간', ic: '⏱️', audio: 'assets/audio/moment.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'It was a happy moment.', exKo: '그것은 행복한 순간이었다.'},
      {w: 'delete', pos: 'v.', ko: '지우다, 삭제하다', ic: '🗑️', audio: 'assets/audio/delete.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Delete the bad scenes.', exKo: '안 좋은 장면을 지워라.'},
      {w: 'record', pos: 'v.', ko: '녹음하다, 녹화하다', ic: '🎙️', ex: 'We recorded the song in a studio.', exKo: '우리는 스튜디오에서 노래를 녹음했다.'},
      {w: 'studio', pos: 'n.', ko: '스튜디오, 작업실', ic: '🎛️', ex: 'He makes sounds in his studio.', exKo: '그는 작업실에서 소리를 만든다.'},
      {w: 'effect', pos: 'n.', ko: '효과', ic: '💥', audio: 'assets/audio/effect.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Sound effects make a movie real.', exKo: '음향 효과는 영화를 진짜처럼 만든다.'},
      {w: 'wave', pos: 'n.', ko: '파도, 물결', ic: '🌊', audio: 'assets/audio/wave.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Listen to the sound of the waves.', exKo: '파도 소리를 들어 봐.'},
      {w: 'signal', pos: 'n.', ko: '신호', ic: '✋', audio: 'assets/audio/signal.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'She uses hand signals.', exKo: '그녀는 손 신호를 쓴다.'},
      {w: 'calm', pos: 'v. / adj.', ko: '진정시키다; 차분한', ic: '😌', audio: 'assets/audio/calm.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'He calms the cat with a toy.', exKo: '그는 장난감으로 고양이를 진정시킨다.'},
      {w: 'skill', pos: 'n.', ko: '기술, 능력', ic: '🛠️', audio: 'assets/audio/skill.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Editing needs a lot of skill.', exKo: '편집에는 기술이 많이 필요하다.'},
      {w: 'storytelling', pos: 'n.', ko: '이야기하기, 스토리텔링', ic: '📖', audio: 'assets/audio/storytelling.mp3', audioCredit: 'Steve Shives · CC0 (Wikimedia Commons, US)', ex: 'Storytelling skills are important.', exKo: '이야기를 풀어 가는 능력이 중요하다.'},
      {w: 'interview', pos: 'n. / v.', ko: '인터뷰(하다)', ic: '🎤', audio: 'assets/audio/interview.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'We interviewed the director.', exKo: '우리는 감독을 인터뷰했다.'}
    ],
    phrases: [
      {w: 'be interested in', ko: '~에 관심이 있다', ex: 'I’m interested in cooking.', exKo: '나는 요리에 관심이 있다.'},
      {w: 'want to be', ko: '~이 되고 싶다', ex: 'I want to be a director.', exKo: '나는 감독이 되고 싶다.'},
      {w: 'be in charge of', ko: '~을 맡다, 책임지다', ex: 'He is in charge of the cameras.', exKo: '그는 카메라를 맡고 있다.'},
      {w: 'take care of', ko: '~을 돌보다', ex: 'She takes care of the cat.', exKo: '그녀는 고양이를 돌본다.'},
      {w: 'be good at', ko: '~을 잘하다', ex: 'He is good at drawing.', exKo: '그는 그림을 잘 그린다.'},
      {w: 'in the future', ko: '미래에', ex: 'What do you want to do in the future?', exKo: '너는 미래에 무엇을 하고 싶니?'}
    ],
    pairs: [
      {a: 'direct', b: 'director', rel: '동사 / 사람 (-or)'},
      {a: 'edit', b: 'editor', rel: '동사 / 사람 (-or)'},
      {a: 'photograph', b: 'photographer', rel: '사진 / 사람 (-er)'},
      {a: 'photographer', b: 'photography', rel: '사람 / 분야'}
    ],
    wrap: {en: 'I’m interested in ______. I want to be a ______.', ko: '오늘 배운 낱말로 관심 분야와 장래 희망 쓰기'}
  },

  talk: {
    hook: {en: 'What do you like to do in your free time?', ko: '여가 시간에 무엇을 즐겨 하나요?', note: '좋아하는 활동을 모은 뒤, 그 활동과 이어지는 직업을 함께 떠올려 본다. (그림 → 웹툰 작가, 요리 → 요리사)'},
    speakers: {Hojin: {voice: 1, pitch: 1}, Mina: {voice: 0, pitch: 1.15}, Jacob: {voice: 1, pitch: .95}, Sera: {voice: 0, pitch: 1.1}, 'Mr. Kang': {voice: 2, pitch: .95}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '관심 묻고 답하기',
        key: {q: ['What are you interested in?', 'Are you interested in ~?'], a: ['I’m interested in ~.', 'Yes, I’m really interested in ~.', 'Not really. I’m more interested in ~.']},
        note: 'be interested in 뒤에는 명사나 동명사(-ing). I’m interested in cook ✗ → I’m interested in cooking ✔.',
        dialogs: [
          { title: 'Dialogue A', setting: '방과 후, 컴퓨터실', lines: [
            {s: 'Mina', en: 'What are you doing, Hojin?', ko: '호진아, 뭐 하고 있어?'},
            {s: 'Hojin', en: 'I’m editing a video of our band. I want to delete some boring scenes.', ko: '우리 밴드 영상을 편집하고 있어. 지루한 장면 몇 개를 지우고 싶어서.'},
            {s: 'Mina', en: 'Wow, you’re good! {{Are you interested in}} editing?', ko: '와, 잘한다! 편집에 관심 있어?'},
            {s: 'Hojin', en: 'Yes, {{I’m really interested in}} making videos.', ko: '응, 나는 영상 만드는 데 정말 관심이 많아.'}
          ]},
          { title: 'Dialogue B', setting: '점심시간, 운동장 벤치', lines: [
            {s: 'A', en: '{{What are you interested in}}, Jacob?', ko: '제이콥, 너는 무엇에 관심 있어?'},
            {s: 'B', en: '{{I’m interested in}} animals. I take care of my neighbor’s dog every weekend.', ko: '나는 동물에 관심 있어. 주말마다 이웃집 개를 돌봐.'},
            {s: 'A', en: 'That’s cool. Is he a good dog?', ko: '멋지다. 착한 개야?'},
            {s: 'B', en: 'Yes. When I give him a hand signal, he sits down.', ko: '응. 내가 손 신호를 주면 앉아.'}
          ]}
        ],
        check: [
          {q: 'What is Hojin doing?', a: 'He is editing a video of his band.'},
          {q: 'What is Hojin interested in?', a: 'Making videos.'},
          {q: 'What does Jacob do every weekend?', a: 'He takes care of his neighbor’s dog.'}
        ],
        drill: {frame: ['A: What are you interested in?', 'B: I’m interested in ____.'], opts: ['music', 'drawing', 'cooking', 'robots', 'animals', 'taking pictures']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '장래 희망 묻고 답하기',
        key: {q: ['What do you want to be in the future?', 'What’s your dream job?'], a: ['I want to be a(n) ~.', 'My dream is to be a(n) ~.', 'I’m not sure yet.']},
        note: 'want to be + 직업 명사. 직업 앞에는 a / an을 쓴다 (an editor, a photographer).',
        dialogs: [
          { title: 'Dialogue A', setting: '진로 수업, 교실', lines: [
            {s: 'Mr. Kang', en: 'Sera, {{what do you want to be in the future}}?', ko: '세라야, 너는 나중에 무엇이 되고 싶니?'},
            {s: 'Sera', en: '{{I want to be}} a photographer.', ko: '저는 사진작가가 되고 싶어요.'},
            {s: 'Mr. Kang', en: 'Why?', ko: '왜?'},
            {s: 'Sera', en: 'I love to capture happy moments. When I take pictures, I feel free.', ko: '행복한 순간을 담는 게 정말 좋아요. 사진을 찍을 때 자유로운 기분이 들어요.'}
          ]},
          { title: 'Dialogue B', setting: '쉬는 시간, 복도', lines: [
            {s: 'A', en: '{{What’s your dream job}}?', ko: '네 꿈의 직업은 뭐야?'},
            {s: 'B', en: '{{I’m not sure yet}}. I like many things.', ko: '아직 잘 모르겠어. 좋아하는 게 많아서.'},
            {s: 'A', en: 'Why don’t you go to the job fair? You can meet people from many jobs.', ko: '직업 박람회에 가 보는 게 어때? 여러 직업의 사람들을 만날 수 있어.'},
            {s: 'B', en: 'Good idea. I’ll go there to get some ideas.', ko: '좋은 생각이야. 아이디어를 얻으러 거기 가 볼게.'}
          ]}
        ],
        check: [
          {q: 'What does Sera want to be?', a: 'A photographer.'},
          {q: 'How does Sera feel when she takes pictures?', a: 'She feels free.'},
          {q: 'Why will B go to the job fair?', a: 'To get some ideas.'}
        ],
        drill: {frame: ['A: What do you want to be in the future?', 'B: I want to be ____.'], opts: ['a director', 'an editor', 'a chef', 'a vet', 'a photographer', 'an engineer']}
      }
    ],
    interviewEx: 'Jun is interested in robots. He wants to be an engineer in the future.',
    watch: {
      label: 'Let’s Watch', title: 'Job Fair Day', setting: '학교 직업 박람회. 학생들이 부스를 돌며 직업인을 인터뷰한다.',
      lines: [
        {s: 'Mina', en: 'Excuse me. Can I interview you? What do you do?', ko: '실례합니다. 인터뷰해도 될까요? 무슨 일을 하세요?'},
        {s: 'Mr. Kang', en: 'I’m a sound effects artist. I make sounds for movies in my studio.', ko: '나는 음향 효과 전문가야. 작업실에서 영화에 쓸 소리를 만들지.'},
        {s: 'Mina', en: 'What do you use to make the sounds?', ko: '소리를 만들 때 무엇을 쓰세요?'},
        {s: 'Mr. Kang', en: 'Many things! I shake rice in a box to make the sound of rain.', ko: '여러 가지! 빗소리를 내려고 상자에 쌀을 넣고 흔들어.'},
        {s: 'Mina', en: 'Amazing! I’m interested in music, so I want to try it.', ko: '놀라워요! 저는 음악에 관심이 있어서 해 보고 싶어요.'}
      ],
      check: [
        {q: 'What is Mr. Kang’s job?', a: 'He is a sound effects artist.'},
        {q: 'How does he make the sound of rain?', a: 'He shakes rice in a box.'},
        {q: 'Why does Mina want to try it?', a: 'She is interested in music.'}
      ]
    },
    wrap: {en: 'Interview your partner about their interests and dream job.', ko: '짝의 관심 분야와 꿈의 직업을 인터뷰하기'}
  },

  grammar: {
    cover: 'to ~ · when',
    hook: {en: 'A lot of people are working hard {{to create}} this video.  /  {{When}} the cat gets excited, I use a toy.', ko: 'to create와 When이 이끄는 덩어리는 문장에 각각 어떤 정보를 더할까?', answer: 'to create → “만들기 위해서”(목적) / When ~ → “~할 때”(때)', note: '교과서 언어 형식(A lot of people are working hard to create this movie. / Max gets too excited when a lot of people are around.)과 같은 짜임이다.'},
    points: [
      { id: 'g1', name: 'to부정사 (부사적 용법: 목적)', short: 'to부정사 (목적)', form: '문장 + to + 동사원형', meaning: '~하기 위해서, ~하려고',
        notice: [
          {en: 'People are working hard {{to create}} this video.', ko: '사람들이 이 영상을 만들기 위해 열심히 일하고 있다.'},
          {en: 'He uses a drone {{to capture}} the whole stage.', ko: '그는 무대 전체를 담기 위해 드론을 쓴다.'},
          {en: 'I read a lot {{to learn}} storytelling.', ko: '나는 이야기하는 법을 배우려고 책을 많이 읽는다.'}
        ],
        rule: [
          {k: '뜻', v: '동작 뒤에 to + 동사원형 → 그 동작을 하는 목적 (~하려고)', ex: 'She went to the studio to record a song.'},
          {k: '자리', v: '문장 끝 또는 맨 앞 (맨 앞이면 쉼표)', ex: 'To make a good video, we need a plan.'},
          {k: '질문', v: 'Why ~? — To + 동사원형 ~.로 짧게 답할 수 있다', ex: 'Why did you go there? — To meet the director.'}
        ],
        compare: {
          title: '같은 to부정사, 다른 역할', note: '동사 바로 뒤 목적어 자리면 “~하는 것”, 완전한 문장 뒤면 “~하기 위해”.',
          head: ['~하는 것 (명사적)', '~하기 위해 (부사적)'],
          cols: [['I want to shoot a video.', '(want의 목적어)'], ['I went to the park to shoot a video.', '(가게 된 목적)']]
        },
        check: [
          {q: 'She uses hand signals ____ the cat. (calm)', a: 'to calm'},
          {q: 'He went to the studio ____ sounds. (record)', a: 'to record'},
          {q: 'We use drones ____ the stage. (capture)', a: 'to capture'},
          {q: '____ a better story, I delete some scenes. (create)', a: 'To create'},
          {q: 'Why did you visit the fair? — ____ people. (meet)', a: 'To meet'}
        ],
        trap: {bad: 'I went to the studio for record a song.', good: 'I went to the studio to record a song.', why: '“~하기 위해”는 to + 동사원형. for 뒤에는 명사가 온다.'},
        scramble: [
          {ko: '그는 무대를 담기 위해 드론을 쓴다.', en: 'He uses a drone to capture the stage.'},
          {ko: '나는 노래를 녹음하려고 스튜디오에 갔다.', en: 'I went to the studio to record a song.'},
          {ko: '좋은 이야기를 만들기 위해 나는 장면을 지운다.', en: 'To make a good story, I delete scenes.'}
        ]
      },
      { id: 'g2', name: '접속사 when', short: '접속사 when', form: 'When + 주어 + 동사, 주어 + 동사 / 주어 + 동사 + when + 주어 + 동사', meaning: '~할 때',
        notice: [
          {en: 'Coco gets too excited {{when}} a lot of people are around.', ko: '코코는 사람이 많을 때 너무 흥분한다.'},
          {en: '{{When}} I take pictures, I feel free.', ko: '사진을 찍을 때 나는 자유로운 기분이 든다.'},
          {en: '{{When}} the shooting is over, my work begins.', ko: '촬영이 끝나면 내 일이 시작된다.'}
        ],
        rule: [
          {k: '역할', v: 'when + 주어 + 동사 = “~할 때” (때를 알려 주는 문장 덩어리)', ex: 'I was sleeping when you called.'},
          {k: '자리', v: '앞에 오면 쉼표(,)를 찍는다', ex: 'When I am nervous, I take a deep breath.'},
          {k: '구별', v: '의문사 When(언제)?과 다르다: 문장 두 개를 잇는지 본다', ex: 'When is the shooting? (언제) / When it rains, we stop. (~할 때)'}
        ],
        check: [
          {q: '____ the music starts, the band plays. (~할 때)', a: 'When'},
          {q: 'The cat gets scared when it ____ loud sounds. (hear)', a: 'hears'},
          {q: 'When I ____ young, I wanted to be a singer. (be)', a: 'was'},
          {q: 'I feel happy ____ I capture a good moment. (~할 때)', a: 'when'},
          {q: 'When the shooting is over(,) my work ____. (begin)', a: 'begins'}
        ],
        trap: {bad: 'When I take pictures I feel free.', good: 'When I take pictures, I feel free.', why: 'when 덩어리가 문장 앞에 오면 쉼표로 나눈다.'},
        scramble: [
          {ko: '사진을 찍을 때 나는 행복하다.', en: 'When I take pictures, I am happy.'},
          {ko: '촬영이 끝나면 내 일이 시작된다.', en: 'When the shooting is over, my work begins.'},
          {ko: '그 고양이는 사람이 많을 때 긴장한다.', en: 'The cat gets nervous when many people are around.'}
        ]
      }
    ],
    wrap: {en: 'I want to be a ______. I will ______ to ______. When I ______, I feel ______.', ko: '꿈의 직업을 위해 할 일(to부정사)과 그 일을 할 때의 기분(when) 쓰기'},
    wrapEx: 'I want to be an editor. I will watch many movies to learn storytelling. When I edit videos, I feel excited.'
  },

  reading: {
    title: 'Behind the Music Video', kind: '촬영장 인터뷰 기사', cover: 'Action!', coverKo: '뮤직비디오 촬영 현장', cover2: 'Jobs', coverKo2: '카메라 뒤의 사람들',
    before: [
      {q: 'Look at the title. Who will we meet?', a: '뮤직비디오를 만드는 여러 사람'},
      {q: 'What jobs do we need to make a video?', a: '감독, 촬영, 편집, 음향, 장소 섭외 등'}
    ],
    gloss: {'music video': '뮤직비디오', 'rooftop': '옥상', 'permission': '허락', 'drone': '드론', 'treat': '간식', 'hand signal': '손 신호', 'paper bag': '종이봉투', 'footsteps': '발소리'},
    paras: [
      {who: 'Director', en: 'Hi, I’m Yuna Seo, the director of “My Cat, My Star.” It’s a music video about a girl and her cat. Many people are working hard to make this video. Do you want to meet them?',
       ko: '안녕하세요, 저는 “나의 고양이, 나의 스타”의 감독 서유나예요. 한 소녀와 고양이에 관한 뮤직비디오예요. 많은 사람이 이 영상을 만들기 위해 열심히 일하고 있어요. 그들을 만나 볼래요?',
       check: {q: 'What is the music video about?', a: 'A girl and her cat.'}, think: '뮤직비디오 한 편에 몇 명이 필요할까?'},
      {who: 'Location Manager', en: 'I’m Daniel, the location manager. My job is to find perfect places for shooting. For this video, I found a rooftop garden. I visited the owner three times to get permission. It wasn’t easy, but the view is amazing!',
       ko: '저는 장소 섭외 담당 대니얼이에요. 제 일은 촬영하기에 완벽한 장소를 찾는 거예요. 이번 영상을 위해 옥상 정원을 찾았어요. 허락을 받으려고 주인을 세 번 찾아갔어요. 쉽지 않았지만 경치가 놀라워요!',
       check: {q: 'Why did Daniel visit the owner three times?', a: 'To get permission.'}, think: '장소 섭외 담당에게 필요한 능력은?'},
      {who: 'Director of Photography', en: 'I’m Sora, the director of photography. I’m in charge of all the cameras. Today, the girl is going to dance with her cat on the rooftop. To capture the whole scene from the sky, I’m going to use a drone.',
       ko: '저는 촬영 감독 소라예요. 카메라를 모두 맡고 있어요. 오늘 소녀가 옥상에서 고양이와 춤을 출 거예요. 하늘에서 장면 전체를 담기 위해 드론을 쓸 거예요.',
       check: {q: 'Why will Sora use a drone?', a: 'To capture the whole scene from the sky.'}, think: '드론으로 찍으면 무엇이 달라 보일까?'},
      {who: 'Animal Wrangler', en: 'I’m Minjae, the animal wrangler. I take care of Momo, the cat. Momo is a great actor, but she gets nervous when the drone flies near her. So I use hand signals and treats to calm her.',
       ko: '저는 동물 조련사 민재예요. 고양이 모모를 돌보고 있어요. 모모는 훌륭한 배우지만 드론이 가까이 날면 긴장해요. 그래서 손 신호와 간식으로 모모를 진정시켜요.',
       check: {q: 'When does Momo get nervous?', a: 'When the drone flies near her.'}, think: '동물 배우를 돌보는 일에서 중요한 것은?'},
      {who: 'Sound Effects Artist', en: 'I’m Leo. I make sound effects in my studio. When recording on location is not easy, I create the sounds. Listen. Do you hear the cat’s footsteps on the roof? I made that sound with a paper bag and my fingers!',
       ko: '저는 레오예요. 작업실에서 음향 효과를 만들어요. 현장에서 녹음하기 어려울 때 제가 소리를 만들어요. 들어 보세요. 지붕 위 고양이 발소리가 들리나요? 종이봉투와 손가락으로 만든 소리예요!',
       check: {q: 'What did Leo use to make the footsteps?', a: 'A paper bag and his fingers.'}, think: '생활 속 물건으로 만들 수 있는 소리는?'},
      {who: 'Editor', en: 'I’m Grace, the editor. My work begins when the shooting is over. To make a better story, I change the order of scenes or delete some of them. Storytelling skills are important for my job, so I watch a lot of movies. Which job do you want to try?',
       ko: '저는 편집자 그레이스예요. 제 일은 촬영이 끝나면 시작돼요. 더 좋은 이야기를 만들기 위해 장면 순서를 바꾸거나 일부를 지워요. 이야기를 풀어 가는 능력이 제 일에 중요해서 영화를 많이 봐요. 여러분은 어떤 일을 해 보고 싶나요?',
       check: {q: 'When does Grace’s work begin?', a: 'When the shooting is over.'}, think: '내가 해 보고 싶은 일은? 왜?'}
    ],
    split: 3,
    next: '고양이 모모는 누가 돌볼까?\n촬영이 끝난 뒤에는 누가 일할까?',
    recap: {q: '대니얼과 소라는 무슨 일을 할까?', items: [{k: 'DANIEL', v: 'location manager · found a rooftop garden · got permission'}, {k: 'SORA', v: 'director of photography · cameras · a drone to capture the scene'}]},
    tf: [
      {p: 0, s: 'The music video is about a boy and his dog.', a: false, why: 'It’s a music video about a girl and her cat.'},
      {p: 1, s: 'Daniel found a rooftop garden.', a: true},
      {p: 2, s: 'Sora is in charge of all the cameras.', a: true},
      {p: 3, s: 'Momo gets nervous when the drone flies near her.', a: true},
      {p: 4, s: 'Leo recorded real cat footsteps on the roof.', a: false, why: 'I made that sound with a paper bag and my fingers!'},
      {p: 5, s: 'Grace’s work begins before the shooting.', a: false, why: 'My work begins when the shooting is over.'}
    ],
    key: [
      {en: 'Many people are working hard {{to make}} this video.', note: 'to부정사 (목적)', g: 'g1'},
      {en: 'I visited the owner three times {{to get}} permission.', note: 'to부정사 (목적)', g: 'g1'},
      {en: '{{To capture}} the whole scene from the sky, I’m going to use a drone.', note: '문장 앞 to부정사 (목적)', g: 'g1'},
      {en: 'She gets nervous {{when}} the drone flies near her.', note: 'when + 주어 + 동사', g: 'g2'},
      {en: 'I use hand signals and treats {{to calm}} her.', note: 'to부정사 (목적)', g: 'g1'},
      {en: 'My work begins {{when}} the shooting is over.', note: 'when + 주어 + 동사', g: 'g2'}
    ],
    summary: {text: 'Many people work together to make a music video. The location {{manager}} finds places for shooting. The director of {{photography}} uses a drone to {{capture}} the scene. The wrangler uses hand {{signals}} to calm the cat. The sound artist makes {{effects}}, and the {{editor}} changes the order of scenes.'},
    order: ['Daniel found a rooftop garden.', 'He got permission from the owner.', 'Sora shot the dance with a drone.', 'Grace edited the scenes.'],
    chart: {title: 'BEHIND THE CAMERA', ko: '직업과 하는 일 정리하기', cols: ['Job', 'What they do'], note: '표를 보고 He/She ~s to ~. 문장으로 말하게 한다. (Sora uses a drone to capture the scene.)', rows: [
      {name: 'Daniel', cells: ['location manager', 'finds perfect places for shooting']},
      {name: 'Sora', cells: ['director of photography', 'uses a drone to capture the scene']},
      {name: 'Minjae', cells: ['animal wrangler', 'uses signals and treats to calm Momo']},
      {name: 'Leo', cells: ['sound effects artist', 'makes sounds in his studio']},
      {name: 'Grace', cells: ['editor', 'changes or deletes scenes']}
    ]},
    wrap: {en: 'I want to be a ______. I will ______ to ______.', ko: '관통 질문으로 돌아가기: 해 보고 싶은 직업과 그 꿈을 위해 할 일 쓰기'}
  },

  quiz: [
    ['“편집자”를 뜻하는 낱말은?', ['director', 'editor', 'manager', 'wrangler'], 1, 'editor: 편집자'],
    ['“사진작가”를 뜻하는 낱말은?', ['photography', 'photo', 'photographer', 'photograph'], 2, 'photographer: 사람 / photography: 분야'],
    ['“He is in charge ___ the cameras.”', ['in', 'of', 'at', 'for'], 1, 'be in charge of: ~을 맡다'],
    ['관심을 묻는 표현은?', ['What are you interested in?', 'What do you do?', 'How often do you shoot?', 'Where are you from?'], 0, 'What are you interested in?'],
    ['“What do you want to be in the future?”에 알맞은 대답은?', ['I’m interested in it.', 'I want to be a director.', 'I like it a lot.', 'Yes, I do.'], 1, 'I want to be ~.'],
    ['“I’m interested in ___ pictures.”', ['take', 'taking', 'to take', 'took'], 1, 'be interested in + 동명사'],
    ['Let’s Watch에서 빗소리를 만드는 방법은?', ['물을 붓는다', '상자에 쌀을 넣고 흔든다', '종이를 찢는다', '손뼉을 친다'], 1, 'I shake rice in a box to make the sound of rain.'],
    ['빈칸에 알맞은 것은? “I went to the studio ___ a song.”', ['record', 'to record', 'recording', 'for record'], 1, '목적: to + 동사원형'],
    ['빈칸에 알맞은 것은? “___ I take pictures, I feel free.”', ['What', 'When', 'Why', 'To'], 1, 'When + 주어 + 동사, ~'],
    ['어법상 틀린 문장은?', ['I use a drone to capture it.', 'When it rains, we stop.', 'She went there for meet him.', 'I read a lot to learn.'], 2, 'She went there to meet him.'],
    ['밑줄 친 to의 쓰임이 다른 것은?', ['I want to be an editor.', 'He went out to buy milk.', 'She uses treats to calm the cat.', 'I came here to see you.'], 0, '첫째는 want의 목적어(~하는 것), 나머지는 목적(~하려고)'],
    ['대니얼이 주인을 세 번 찾아간 까닭은?', ['인터뷰하려고', '허락을 받으려고', '드론을 빌리려고', '고양이를 찾으려고'], 1, 'to get permission'],
    ['모모가 긴장하는 때는?', ['밥을 먹을 때', '드론이 가까이 날 때', '음악이 나올 때', '사람이 없을 때'], 1, 'when the drone flies near her'],
    ['그레이스가 영화를 많이 보는 까닭은?', ['쉬려고', '이야기를 풀어 가는 능력이 중요해서', '배우가 되고 싶어서', '소리를 만들려고'], 1, 'Storytelling skills are important for my job.'],
    ['글의 요지로 알맞은 것은?', ['감독이 가장 중요하다', '영상 하나를 여러 직업인이 함께 만든다', '고양이는 배우가 될 수 없다', '드론은 위험하다'], 1, 'Many people are working hard to make this video.']
  ]
};

/* ── 보강: 원리 중심 문법 · 모션 그래픽 · 낱말 만들기 · 발음 기호 ── */
(function (L) {
  const ipa = {director: '/dəˈrektər/', editor: '/ˈedɪtər/', location: '/loʊˈkeɪʃn/', manager: '/ˈmænɪdʒər/', photography: '/fəˈtɑːɡrəfi/', photographer: '/fəˈtɑːɡrəfər/', wrangler: '/ˈræŋɡlər/', shoot: '/ʃuːt/', capture: '/ˈkæptʃər/', moment: '/ˈmoʊmənt/', delete: '/dɪˈliːt/', record: '/rɪˈkɔːrd/', studio: '/ˈstuːdioʊ/', effect: '/ɪˈfekt/', wave: '/weɪv/', signal: '/ˈsɪɡnəl/', calm: '/kɑːm/', skill: '/skɪl/', storytelling: '/ˈstɔːritelɪŋ/', interview: '/ˈɪntərvjuː/'};
  L.vocab.words.forEach(w => { if (ipa[w.w]) w.ipa = ipa[w.w]; });
  L.vocab.morph = [
    {w: 'photographer', ko: '사진작가', parts: [{t: 'photo', k: 'root', m: '빛'}, {t: 'graph', k: 'root', m: '그리다, 쓰다'}, {t: 'er', k: 'suf', m: '~하는 사람'}], family: ['photography', 'autograph', 'telegraph'], note: '빛(photo)으로 그림을 그리는(graph) 사람 → 사진작가. -y를 붙이면 분야(photography).'},
    {w: 'director', ko: '감독', parts: [{t: 'direct', k: 'root', m: '지시하다, 이끌다'}, {t: 'or', k: 'suf', m: '~하는 사람'}], family: ['editor', 'actor', 'visitor'], note: '동사 + -or / -er = 그 일을 하는 사람 (edit → editor).'},
    {w: 'storytelling', ko: '이야기하기', parts: [{t: 'story', k: 'root', m: '이야기'}, {t: 'tell', k: 'root', m: '말하다'}, {t: 'ing', k: 'suf', m: '~하기 (명사)'}], family: ['storyteller', 'fortune-telling'], note: '이야기(story)를 말하는(tell) 일(-ing) → 스토리텔링.'}
  ];
  const [g1, g2] = L.grammar.points;
  g1.principle = {
    q: '“~하기 위해”는 왜 to로 표현할까?',
    pic: [{en: 'I use a drone', ko: '한 일'}, {en: 'to →', ko: '~쪽으로 (목표)', hot: true}, {en: 'capture the stage', ko: '이루려는 목적'}],
    core: 'to의 기본 뜻은 “~쪽으로 향해”다. 행동 뒤에 to + 동사원형을 붙이면 그 행동이 향하는 목표, 곧 “~하기 위해”라는 목적이 된다.',
    why: ['문장이 이미 완전한데 뒤에 to + 동사원형이 붙으면 대부분 목적(~하려고).', '더 분명하게 말하려면 in order to를 쓴다.', '“왜?”에 대한 답으로 To + 동사원형 ~.만 말할 수도 있다 (Why? — To save energy.)']
  };
  g1.anim = [{title: '두 문장을 to로 잇기: 목적', states: [
    {t: 'Sora/S | uses/V | a drone/O | . | / | She/S#we2 | wants to/V#w | capture/V#r | the stage/O#fw | .', note: '① 한 일 ② 바란 것', ko: '소라는 드론을 쓴다. 소라는 무대를 담고 싶어 한다.'},
    {t: 'Sora/S | uses/V | a drone/O | to/X#w | capture/V#r | the stage/O#fw | .', note: '완전한 문장 + to + 동사원형 = ~하기 위해', ko: '소라는 무대를 담기 위해 드론을 쓴다.'}]}];
  g1.contrast = {title: 'to부정사: 목적어? 목적?', pairs: [
    {a: 'I want {{to record}} a song.', ka: '나는 노래를 녹음하고 싶다. (want의 목적어 = 하고 싶은 것)', b: 'I went to the studio {{to record}} a song.', kb: '나는 노래를 녹음하려고 스튜디오에 갔다. (완전한 문장 뒤 → 목적)'}],
    point: '앞 문장이 이미 완전하면 to부정사는 “~하기 위해”(목적).'};
  g2.principle = {
    q: 'when은 두 문장을 어떻게 이어 줄까?',
    pic: [{en: 'When the drone flies near her,', ko: '때를 알려 주는 절'}, {en: 'Momo gets nervous.', ko: '중심 문장', hot: true}],
    core: '접속사 when은 “~할 때”라는 때의 정보를 담은 문장을 중심 문장에 붙여 준다. when절은 앞에 와도, 뒤에 와도 된다.',
    why: ['when절이 앞에 오면 그 끝에 콤마(,)를 찍는다.', 'when절 안에서는 미래의 일도 현재형으로 쓴다 (When it rains, we will stay inside).', '의문사 when(언제?)과 모양은 같지만 역할이 다르다.']
  };
  g2.anim = [{title: '두 문장을 when으로 잇기', states: [
    {t: 'The drone/S | flies/V | near Momo/M | . | / | Momo/S#we | gets/V#v | nervous/C#w | .', note: '두 사건', ko: '드론이 모모 가까이 난다. 모모는 긴장한다.'},
    {t: 'When/X | the drone/S | flies/V | near Momo/M | , | Momo/S#we | gets/V#v | nervous/C#w | .', note: 'when + 문장 + 콤마 + 중심 문장', ko: '드론이 가까이 날 때 모모는 긴장한다.'}]}];
  g2.contrast = {title: '접속사 when vs 의문사 when', pairs: [
    {a: '{{When}} I take pictures, I feel free.', ka: '사진을 찍을 때 나는 자유롭다. (접속사: ~할 때)', b: '{{When}} do you take pictures?', kb: '너는 언제 사진을 찍니? (의문사: 언제?)'}],
    point: '뒤에 콤마와 또 다른 문장이 이어지면 접속사 when.'};
})(window.LESSON);
