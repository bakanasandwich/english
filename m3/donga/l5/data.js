/* 중3 영어(동아·윤정미) Lesson 5 · When Art Meets Technology — 가안
   2022 개정 중3 교과서 목차 공개 전, 중3 문법 순서에 맞춰 만든 가안 단원입니다.
   백남준 관련 사실은 널리 알려진 내용이며, 나머지 인물·이야기는 새로 지은 것입니다. */
window.LESSON = {
  book: 'm3-donga', no: 5, estimate: true,
  title: 'When Art Meets Technology', ko: '예술이 기술을 만날 때',
  bigQ: {en: 'How is technology changing art?', ko: '기술은 예술을 어떻게 바꾸고 있을까?'},
  align: {
    tb: {note: '2022 개정 중3 영어 교과서(동아·윤정미)는 2026년 8월 검정을 거쳐 2027학년도부터 쓰인다. 아직 목차·본문이 공개되지 않아 단원명·의사소통 기능·언어 형식은 중1·중2 교과서의 흐름과 교육과정 [별표 4] 중학교 권장 언어 형식을 바탕으로 추정했다. 교과서가 공개되면 다시 대조한다.'},
    std: {vocab: ['9영01-01', '9영02-01'], talk: ['9영01-02', '9영02-04'], grammar: ['9영02-06'], read1: ['9영01-08', '9영01-10'], read2: ['9영02-09']},
    forms: ['Unreal Conditionals']
  },
  goals: {
    vocab: ['예술·기술과 관련된 낱말 20개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 내가 만들고 싶은 작품을 한 문장으로 소개할 수 있다.'],
    talk: ['작품에 대한 의견을 묻고 답할 수 있다.', '바라는 일을 표현할 수 있다.'],
    grammar: ['가정법 과거(If + 주어 + 과거동사, 주어 + would + 동사원형)로 현재 사실과 반대되는 상황을 말할 수 있다.', 'I wish + 주어 + 과거동사로 이룰 수 없는 소망을 말할 수 있다.'],
    read1: ['글의 주제를 파악하고, TV로 예술을 만든 백남준의 이야기를 이해할 수 있다.'],
    read2: ['기술을 만난 예술의 세 가지 모습을 비교하고, 내가 만들고 싶은 작품을 영어로 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'Can a TV be a work of art?', ko: 'TV도 예술 작품이 될 수 있을까?', note: '수업 전 다다익선 사진을 보여 주지 않고 먼저 묻는다. ‘된다/안 된다’ 손을 들게 한 뒤 본문 시간에 다시 묻는다.'},
    words: [
      {w: 'artwork', pos: 'n.', ko: '예술 작품', ic: '🖼️', ex: 'This artwork is made of light.', exKo: '이 작품은 빛으로 만들어졌다.'},
      {w: 'technology', pos: 'n.', ko: '기술', ic: '💻', ex: 'Technology changes the way we live.', exKo: '기술은 우리가 사는 방식을 바꾼다.'},
      {w: 'screen', pos: 'n.', ko: '화면', ic: '📺', audio: 'assets/audio/screen.mp3', audioCredit: 'Jelkner · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The screen showed bright colors.', exKo: '화면에 밝은 색들이 나타났다.'},
      {w: 'exhibition', pos: 'n.', ko: '전시회', ic: '🏛️', audio: 'assets/audio/exhibition.mp3', audioCredit: 'Neskaya · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'We went to a digital art exhibition.', exKo: '우리는 디지털 아트 전시회에 갔다.'},
      {w: 'creative', pos: 'adj.', ko: '창의적인', ic: '💡', ex: 'She has a creative mind.', exKo: '그녀는 창의적인 생각을 가졌다.'},
      {w: 'imagine', pos: 'v.', ko: '상상하다', ic: '🌈', audio: 'assets/audio/imagine.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Imagine a painting that moves.', exKo: '움직이는 그림을 상상해 봐라.'},
      {w: 'pioneer', pos: 'n.', ko: '개척자', ic: '🧭', audio: 'assets/audio/pioneer.mp3', audioCredit: 'Neskaya · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'He was a pioneer of video art.', exKo: '그는 비디오 아트의 개척자였다.'},
      {w: 'project', pos: 'v.', ko: '(빛·영상을) 비추다', ic: '📽️', audio: 'assets/audio/project.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'They projected images on the wall.', exKo: '그들은 벽에 영상을 비추었다.'},
      {w: 'virtual', pos: 'adj.', ko: '가상의', ic: '🥽', ex: 'We visited a virtual museum.', exKo: '우리는 가상 박물관을 방문했다.'},
      {w: 'sculpture', pos: 'n.', ko: '조각품', ic: '🗿', audio: 'assets/audio/sculpture.mp3', audioCredit: 'Sylvanmoon · CC BY-SA 4.0 (Wikimedia Commons, US)', ex: 'The sculpture was made of old TVs.', exKo: '그 조각품은 오래된 TV로 만들어졌다.'},
      {w: 'audience', pos: 'n.', ko: '관객', ic: '👀', audio: 'assets/audio/audience.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The audience walked into the art.', exKo: '관객이 작품 속으로 걸어 들어갔다.'},
      {w: 'interactive', pos: 'adj.', ko: '상호 작용하는', ic: '👆', ex: 'The art is interactive. It reacts to your touch.', exKo: '그 작품은 상호 작용형이다. 손길에 반응한다.'},
      {w: 'tool', pos: 'n.', ko: '도구', ic: '🖌️', ex: 'A tablet can be an art tool.', exKo: '태블릿도 미술 도구가 될 수 있다.'},
      {w: 'possible', pos: 'adj.', ko: '가능한', ic: '✅', audio: 'assets/audio/possible.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Technology makes new art possible.', exKo: '기술은 새로운 예술을 가능하게 한다.'},
      {w: 'unique', pos: 'adj.', ko: '독특한', ic: '🦄', audio: 'assets/audio/unique.mp3', audioCredit: 'Neskaya · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Each piece is unique.', exKo: '각 작품은 독특하다.'},
      {w: 'express', pos: 'v.', ko: '표현하다', ic: '🎭', audio: 'assets/audio/express.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Art helps us express feelings.', exKo: '예술은 감정을 표현하도록 돕는다.'},
      {w: 'century', pos: 'n.', ko: '세기, 100년', ic: '⏳', audio: 'assets/audio/century.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Art changed a lot in the 20th century.', exKo: '예술은 20세기에 많이 변했다.'},
      {w: 'sound', pos: 'n.', ko: '소리', ic: '🔊', audio: 'assets/audio/sound.mp3', audioCredit: 'Dvortygirl · Public domain (Wikimedia Commons, US)', ex: 'The room was full of light and sound.', exKo: '방은 빛과 소리로 가득했다.'},
      {w: 'familiar', pos: 'adj.', ko: '익숙한', ic: '🏠', audio: 'assets/audio/familiar.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'He used familiar objects in his art.', exKo: '그는 작품에 익숙한 물건들을 사용했다.'},
      {w: 'robot', pos: 'n.', ko: '로봇', ic: '🤖', audio: 'assets/audio/robot.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'He made a robot out of TVs.', exKo: '그는 TV로 로봇을 만들었다.'}
    ],
    phrases: [
      {w: 'be made of', ko: '~로 만들어지다', ex: 'The tower is made of TVs.', exKo: '그 탑은 TV로 만들어졌다.'},
      {w: 'turn A into B', ko: 'A를 B로 바꾸다', ex: 'He turned TVs into art.', exKo: '그는 TV를 예술로 바꾸었다.'},
      {w: 'come to life', ko: '살아 움직이다', ex: 'The painting came to life.', exKo: '그림이 살아 움직였다.'},
      {w: 'in the future', ko: '미래에', ex: 'What will art look like in the future?', exKo: '미래에 예술은 어떤 모습일까?'},
      {w: 'look forward to', ko: '~을 고대하다', ex: 'I look forward to the exhibition.', exKo: '나는 그 전시회를 고대한다.'},
      {w: 'be amazed at', ko: '~에 놀라다', ex: 'We were amazed at the colors.', exKo: '우리는 그 색깔에 놀랐다.'}
    ],
    pairs: [
      {a: 'create', b: 'creative', rel: '동사 / 형용사'},
      {a: 'imagine', b: 'imagination', rel: '동사 / 명사'},
      {a: 'possible', b: 'impossible', rel: '반대말'},
      {a: 'real', b: 'virtual', rel: '반대 개념'}
    ],
    wrap: {en: 'If I made an artwork, it would be made of ______. People could ______.', ko: '오늘 배운 낱말로 내가 만들고 싶은 작품 소개하기'}
  },

  talk: {
    hook: {en: 'What do you think of this picture?', ko: '이 그림 어떻게 생각해요?', note: '디지털 그림 한 장(교사 준비)을 보여 주고 “좋다/별로다”가 아니라 까닭까지 말하게 한다.'},
    speakers: {Mina: {voice: 0, pitch: 1.15}, Leo: {voice: 1, pitch: .95}, Guide: {voice: 0, pitch: 1}, Jun: {voice: 1, pitch: 1}, Sora: {voice: 0, pitch: 1.1}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '의견 묻고 답하기',
        key: {q: ['What do you think of ~?', 'How do you like ~?'], a: ['I think it’s ~.', 'In my opinion, ~.', 'It looks ~ to me.']},
        note: 'What do you think of ~?에 대한 답은 형용사 + 까닭(because ~)을 붙이도록 지도.',
        dialogs: [
          { title: 'Dialogue A', setting: '디지털 아트 전시장 입구', lines: [
            {s: 'Mina', en: 'Leo, {{what do you think of}} this room?', ko: '레오, 이 방 어떻게 생각해?'},
            {s: 'Leo', en: '{{I think it’s}} amazing. The flowers move when I walk!', ko: '굉장한 것 같아. 내가 걸으면 꽃들이 움직여!'},
            {s: 'Mina', en: 'Right. It’s interactive art.', ko: '맞아. 상호 작용하는 예술이야.'},
            {s: 'Leo', en: '{{In my opinion}}, this is more fun than a normal painting.', ko: '내 생각엔 보통 그림보다 더 재미있어.'},
            {s: 'Mina', en: 'Really? I still like old paintings, too.', ko: '정말? 난 아직 옛날 그림도 좋아.'}
          ]},
          { title: 'Dialogue B', setting: '미술 시간', lines: [
            {s: 'A', en: '{{How do you like}} my drawing?', ko: '내 그림 어때?'},
            {s: 'B', en: '{{It looks}} very creative {{to me}}. Did you use a tablet?', ko: '정말 창의적으로 보여. 태블릿 썼어?'},
            {s: 'A', en: 'Yes. I used a drawing app.', ko: '응. 그림 앱을 썼어.'},
            {s: 'B', en: 'Cool. Can you show me how?', ko: '멋지다. 어떻게 하는지 보여 줄래?'}
          ]}
        ],
        check: [
          {q: 'What happens when Leo walks?', a: 'The flowers move.'},
          {q: 'What kind of art is it?', a: 'Interactive art.'},
          {q: 'What did A use to draw?', a: 'A drawing app on a tablet.'}
        ],
        drill: {frame: ['A: What do you think of ____?', 'B: I think it’s ____.'], opts: ['this painting', 'the robot', 'this room', 'video art', 'the music', 'virtual museums']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '바람 표현하기',
        key: {q: ['What do you want to ~?'], a: ['I hope (that) ~.', 'I’d love to ~.', 'I’m looking forward to ~.']},
        note: 'I hope는 이룰 수 있는 바람, I wish는 이루기 어려운 소망(가정법)으로 문법과 연결해 비교.',
        dialogs: [
          { title: 'Dialogue A', setting: '방과 후, 미술실', lines: [
            {s: 'Jun', en: 'Sora, are you going to the media art festival?', ko: '소라야, 미디어 아트 축제에 갈 거야?'},
            {s: 'Sora', en: 'Yes! {{I’m looking forward to}} the light show.', ko: '응! 빛 쇼가 정말 기대돼.'},
            {s: 'Jun', en: 'Me, too. {{I hope}} it doesn’t rain.', ko: '나도. 비가 안 오면 좋겠다.'},
            {s: 'Sora', en: 'Someday {{I’d love to}} make my own light show.', ko: '언젠가 나만의 빛 쇼를 만들고 싶어.'},
            {s: 'Jun', en: 'I wish I were as creative as you!', ko: '나도 너만큼 창의적이면 좋을 텐데!'}
          ]},
          { title: 'Dialogue B', setting: '교실', lines: [
            {s: 'A', en: 'What do you want to do in the future?', ko: '너는 미래에 뭘 하고 싶어?'},
            {s: 'B', en: '{{I’d love to}} design robots that paint.', ko: '그림 그리는 로봇을 설계하고 싶어.'},
            {s: 'A', en: 'That sounds great. {{I hope}} your dream comes true.', ko: '멋지다. 네 꿈이 이루어지면 좋겠어.'},
            {s: 'B', en: 'Thanks!', ko: '고마워!'}
          ]}
        ],
        check: [
          {q: 'What is Sora looking forward to?', a: 'The light show.'},
          {q: 'What does Jun hope?', a: 'He hopes it doesn’t rain.'},
          {q: 'What does B want to design?', a: 'Robots that paint.'}
        ],
        drill: {frame: ['A: What do you want to do?', 'B: I’d love to ____.'], opts: ['make a light show', 'visit a virtual museum', 'design robots', 'draw with a tablet', 'make a video', 'see Paik’s works']}
      }
    ],
    interviewEx: 'Minseo thinks digital art is exciting. She’d love to visit a virtual museum.',
    watch: {
      label: 'Let’s Watch', title: 'The Museum Robot', setting: '미래의 미술관. 안내 로봇 Guide가 관람객 Mina를 맞는다.',
      lines: [
        {s: 'Guide', en: 'Welcome! What do you think of our museum?', ko: '환영합니다! 저희 미술관 어떻게 생각하세요?'},
        {s: 'Mina', en: 'It’s amazing. The paintings are moving!', ko: '굉장해요. 그림들이 움직여요!'},
        {s: 'Guide', en: 'Touch this one. You can change its colors.', ko: '이것을 만져 보세요. 색을 바꿀 수 있어요.'},
        {s: 'Mina', en: 'Wow! If I had this at home, I would play with it all day.', ko: '와! 이게 집에 있다면 하루 종일 가지고 놀 텐데.'},
        {s: 'Guide', en: 'I wish I could paint like a human, too.', ko: '저도 사람처럼 그림을 그릴 수 있으면 좋을 텐데요.'},
        {s: 'Mina', en: 'Maybe you can learn. Art is for everyone!', ko: '배울 수 있을지도 몰라요. 예술은 모두를 위한 거니까요!'}
      ],
      check: [
        {q: 'What can Mina change by touching the painting?', a: 'Its colors.'},
        {q: 'What would Mina do if she had it at home?', a: 'She would play with it all day.'},
        {q: 'What does the robot wish?', a: 'It wishes it could paint like a human.'}
      ]
    },
    wrap: {en: 'Ask your partner’s opinion about a work of art, then share what you’d love to make.', ko: '작품에 대한 의견을 묻고 답한 뒤, 만들고 싶은 작품 말하기'}
  },

  grammar: {
    cover: 'If I were ~',
    hook: {en: 'If I {{had}} this at home, I {{would}} play with it all day.  /  I wish I {{could}} paint like a human.', ko: '지금 정말 집에 이 작품이 있는 걸까?', answer: '아니다. 현재 사실과 반대되는 상상이라 현재인데도 과거형(had, could)을 쓴다 — 가정법 과거', note: '“If I have it…”과 “If I had it…”의 차이를 물어 ‘있을 수도 있는 일’과 ‘사실이 아닌 상상’을 구별하게 한다.'},
    points: [
      { id: 'g1', name: '가정법 과거', short: '가정법 과거', form: 'If + 주어 + 과거동사(were), 주어 + would/could + 동사원형', meaning: '(지금) ~라면 …할 텐데',
        notice: [
          {en: 'If I {{had}} a robot, I {{would}} teach it to paint.', ko: '내가 로봇이 있다면 그림 그리는 법을 가르칠 텐데.'},
          {en: 'If I {{were}} an artist, I {{would}} use light.', ko: '내가 예술가라면 빛을 사용할 텐데.'},
          {en: 'If he {{lived}} today, he {{could}} use AI.', ko: '그가 오늘날 살아 있다면 AI를 쓸 수 있을 텐데.'}
        ],
        rule: [
          {k: '뜻', v: '현재 사실과 반대이거나 일어날 가능성이 낮은 일을 상상', ex: 'If I were you, I would go.'},
          {k: '형태', v: 'If절은 과거형, 주절은 would/could/might + 동사원형', ex: 'If I knew, I could help.'},
          {k: 'be동사', v: '주어에 관계없이 주로 were', ex: 'If she were here, she would love it.'}
        ],
        compare: {
          title: '조건문 vs 가정법 과거', note: '가능성이 있는 일은 현재형, 사실이 아닌 상상은 과거형으로 ‘한 칸 뒤로’ 간다고 설명.',
          head: ['', '조건문 (가능)', '가정법 과거 (상상)'],
          cols: [['형태', '뜻', '예문'], ['If + 현재, will + 동사원형', '~하면 …할 것이다', 'If it rains, I will stay home.'], ['If + 과거, would + 동사원형', '~라면 …할 텐데', 'If I were a bird, I would fly.']]
        },
        check: [
          {q: 'If I ____ rich, I would buy the painting. (be)', a: 'were'},
          {q: 'If I had time, I ____ ____ the museum. (visit)', a: 'would visit'},
          {q: 'If she ____ how to draw, she could make a comic. (know)', a: 'knew'},
          {q: 'If we ____ a robot, it could clean the room. (have)', a: 'had'},
          {q: 'If I were you, I ____ try it. (would / will)', a: 'would'}
        ],
        trap: {bad: 'If I am a bird, I would fly to you.', good: 'If I were a bird, I would fly to you.', why: '현재 사실과 반대되는 상상이므로 If절에 과거형(were)을 쓴다.'},
        scramble: [
          {ko: '내가 예술가라면 빛으로 그림을 그릴 텐데.', en: 'If I were an artist, I would paint with light.'},
          {ko: '내가 태블릿이 있다면 만화를 그릴 텐데.', en: 'If I had a tablet, I would draw comics.'},
          {ko: '그가 여기 있다면 우리를 도울 수 있을 텐데.', en: 'If he were here, he could help us.'}
        ]
      },
      { id: 'g2', name: 'I wish + 가정법 과거', short: 'I wish', form: 'I wish + 주어 + 과거동사(were / could)', meaning: '~라면 좋을 텐데',
        notice: [
          {en: 'I wish I {{could}} paint like a human.', ko: '사람처럼 그림을 그릴 수 있으면 좋을 텐데.'},
          {en: 'I wish I {{were}} as creative as you.', ko: '내가 너만큼 창의적이면 좋을 텐데.'},
          {en: 'I wish I {{had}} more time.', ko: '시간이 더 있으면 좋을 텐데.'}
        ],
        rule: [
          {k: '뜻', v: '현재 이룰 수 없거나 사실과 다른 소망', ex: 'I wish I were taller. (실제로는 키가 작다)'},
          {k: '형태', v: 'I wish + 주어 + 과거동사 / were / could', ex: 'I wish I could fly.'},
          {k: 'hope와 비교', v: 'I hope + 현재(가능한 일) ↔ I wish + 과거(어려운 일)', ex: 'I hope it’s sunny. / I wish it were sunny.'}
        ],
        check: [
          {q: 'I wish I ____ a robot. (have)', a: 'had'},
          {q: 'I wish I ____ an artist. (be)', a: 'were'},
          {q: 'I wish I ____ draw well. (can)', a: 'could'},
          {q: 'I ____ you have fun at the show. (hope / wish)', a: 'hope'},
          {q: 'I wish it ____ Saturday today. (be)', a: 'were'}
        ],
        trap: {bad: 'I wish I can go to the exhibition.', good: 'I wish I could go to the exhibition.', why: 'I wish 뒤에는 과거형(could)을 써서 현재와 반대되는 소망을 나타낸다.'},
        scramble: [
          {ko: '내가 그 전시회에 갈 수 있으면 좋을 텐데.', en: 'I wish I could go to the exhibition.'},
          {ko: '내 방이 미술관이면 좋을 텐데.', en: 'I wish my room were a museum.'},
          {ko: '나에게 그림 그리는 로봇이 있으면 좋을 텐데.', en: 'I wish I had a painting robot.'}
        ]
      }
    ],
    wrap: {en: 'If I were an artist, I would ______. I wish I could ______.', ko: '가정법 과거와 I wish로 내가 만들고 싶은 작품 상상하기'},
    wrapEx: 'If I were an artist, I would make a garden of light. I wish I could show it to everyone in my town.'
  },

  reading: {
    title: 'Art in a New Light', kind: '정보문', cover: 'Paik', coverKo: 'TV를 예술로 바꾼 사람', cover2: 'Light', coverKo2: '걸어 들어가는 예술',
    before: [
      {q: 'Look at the title. What does “a new light” mean here?', a: '새로운 시각, 실제 빛 두 가지 뜻'},
      {q: 'Have you ever seen art made with technology?', a: '미디어 아트, 디지털 전시 등 자유롭게'}
    ],
    gloss: {'Nam June Paik': '백남준', 'video art': '비디오 아트', 'monitors': '모니터', 'Seoul Olympics': '서울 올림픽', 'brushes': '붓', 'paint': '물감', 'immersive': '몰입형의', 'pixels': '화소', 'stylus': '터치펜', 'canvas': '캔버스', 'replace': '대신하다'},
    paras: [
      {who: '', en: 'For thousands of years, artists used brushes, paint, and stone. Today, some artists use screens, light, and computers. What would happen if art and technology worked together? Let’s look at how technology is changing art.',
       ko: '수천 년 동안 예술가들은 붓과 물감, 돌을 사용했습니다. 오늘날 어떤 예술가들은 화면과 빛, 컴퓨터를 사용하죠. 예술과 기술이 함께 일한다면 무슨 일이 생길까요? 기술이 예술을 어떻게 바꾸고 있는지 살펴봅시다.',
       check: {q: 'What do some artists use today?', a: 'Screens, light, and computers.'}, think: '예술가의 도구는 앞으로 또 어떻게 바뀔까?'},
      {who: 'The Father of Video Art', en: 'Nam June Paik was born in Seoul in 1932. When TVs became popular, most people just watched them. But Paik had a different idea. He turned TVs into art. That is why people call him “the father of video art.”',
       ko: '백남준은 1932년 서울에서 태어났습니다. TV가 널리 퍼졌을 때 대부분의 사람은 그저 TV를 보기만 했죠. 하지만 백남준은 다른 생각을 했습니다. 그는 TV를 예술로 바꾸었습니다. 그래서 사람들은 그를 ‘비디오 아트의 아버지’라고 부릅니다.',
       check: {q: 'What did Paik turn TVs into?', a: 'Art.'}, think: '다른 사람이 보지 못한 것을 본다는 건 어떤 뜻일까?'},
      {who: 'The Father of Video Art', en: 'One of his most famous works is The More, the Better. He made it for the 1988 Seoul Olympics. It is a tall tower made of more than 1,000 TV monitors. If you stood in front of it, you would feel the light and sound all around you.',
       ko: '그의 가장 유명한 작품 중 하나는 〈다다익선〉입니다. 그는 1988년 서울 올림픽을 위해 그것을 만들었죠. 그것은 1,000대가 넘는 TV 모니터로 만들어진 높은 탑입니다. 그 앞에 서 본다면 빛과 소리가 온몸을 감싸는 것을 느낄 거예요.',
       check: {q: 'What is The More, the Better made of?', a: 'More than 1,000 TV monitors.'}, think: '수많은 TV를 쌓은 까닭은 무엇이었을까?'},
      {who: 'Walking into Art', en: 'Today, you don’t just look at art. You can walk into it. In digital art exhibitions, images are projected on the walls and the floor. Flowers bloom where you step, and waves follow you. The audience becomes part of the artwork.',
       ko: '오늘날 여러분은 예술을 보기만 하지 않습니다. 그 안으로 걸어 들어갈 수 있죠. 디지털 아트 전시에서는 벽과 바닥에 영상이 비춰집니다. 발을 딛는 곳마다 꽃이 피고, 파도가 여러분을 따라오죠. 관객이 작품의 일부가 되는 것입니다.',
       check: {q: 'Where are images projected?', a: 'On the walls and the floor.'}, think: '관객이 작품의 일부가 된다는 것은 어떤 의미일까?'},
      {who: 'Art in Your Hands', en: 'Hana, a fifteen-year-old student, draws comics on a tablet. “I wish I had more paper,” she used to say. Now she can draw anytime, anywhere. “If I didn’t have my tablet, I would miss my comics more than my phone,” she laughs.',
       ko: '열다섯 살 학생 하나는 태블릿으로 만화를 그립니다. “종이가 더 있으면 좋을 텐데.” 그녀는 이렇게 말하곤 했죠. 이제 그녀는 언제 어디서나 그릴 수 있습니다. “태블릿이 없다면 휴대전화보다 만화를 더 그리워할 거예요.” 그녀가 웃으며 말합니다.',
       check: {q: 'What does Hana draw on a tablet?', a: 'Comics.'}, think: '기술 덕분에 누구나 예술가가 될 수 있을까?'},
      {who: 'Art in Your Hands', en: 'Some people worry that technology will replace artists. But a tablet is just a tool, like a brush. The idea still comes from a person. As Paik showed, what matters most is a creative mind.',
       ko: '어떤 사람들은 기술이 예술가를 대신할까 봐 걱정합니다. 하지만 태블릿은 붓과 같은 도구일 뿐입니다. 아이디어는 여전히 사람에게서 나옵니다. 백남준이 보여 주었듯이, 가장 중요한 것은 창의적인 마음입니다.',
       check: {q: 'According to the writer, what matters most?', a: 'A creative mind.'}, think: '기술이 예술가를 대신할 수 있다고 생각하나요?'},
      {who: 'Your Turn', en: 'Imagine you were an artist today. What tools would you use? What would you make? Maybe your idea will be the next new light in art.',
       ko: '여러분이 오늘날의 예술가라고 상상해 보세요. 어떤 도구를 쓰겠어요? 무엇을 만들겠어요? 어쩌면 여러분의 아이디어가 예술의 다음 새로운 빛이 될지도 모릅니다.',
       check: {q: 'What does the writer ask us to imagine?', a: 'That we were an artist today.'}, think: '내가 만들 작품의 도구와 재료는?'}
    ],
    split: 3,
    next: '예술 작품 속으로\n걸어 들어갈 수 있을까?',
    recap: {q: '백남준이 한 일은?', items: [{k: 'MOST PEOPLE', v: 'just watched TVs'}, {k: 'PAIK', v: 'turned TVs into art'}, {k: '1988', v: 'The More, the Better'}]},
    tf: [
      {p: 1, s: 'Nam June Paik was born in Seoul.', a: true},
      {p: 2, s: 'The More, the Better is made of about 100 TVs.', a: false, why: '1,000대가 넘는다.'},
      {p: 3, s: 'In digital exhibitions, images are only on the walls.', a: false, why: '벽과 바닥에 비춘다.'},
      {p: 4, s: 'Hana draws comics on paper.', a: false, why: '태블릿으로 그린다.'},
      {p: 5, s: 'The writer thinks a tablet is just a tool.', a: true},
      {p: 3, s: 'The audience becomes part of the artwork.', a: true}
    ],
    key: [
      {en: 'What {{would}} happen if art and technology {{worked}} together?', note: '가정법 과거', g: 'g1'},
      {en: 'He {{turned}} TVs {{into}} art.', note: 'turn A into B', g: ''},
      {en: 'If you {{stood}} in front of it, you {{would feel}} the light.', note: '가정법 과거', g: 'g1'},
      {en: '“I wish I {{had}} more paper.”', note: 'I wish + 과거형', g: 'g2'},
      {en: 'If I {{didn’t have}} my tablet, I {{would miss}} my comics.', note: '가정법 과거 (부정)', g: 'g1'},
      {en: 'What matters most is {{a creative mind}}.', note: '관계대명사 what 주어', g: ''}
    ],
    summary: {text: 'Nam June Paik turned {{TVs}} into art and made a tower of more than 1,000 {{monitors}}. Today, in digital exhibitions, the {{audience}} can walk into art. Students like Hana draw on {{tablets}}. Technology is a {{tool}}, but a creative {{mind}} matters most.'},
    order: ['TVs became popular.', 'Paik turned TVs into art.', 'He made The More, the Better.', 'People call him the father of video art.'],
    chart: {title: 'ART + TECHNOLOGY', ko: '기술을 만난 예술 비교하기', cols: ['Technology', 'What changed'], note: '세 사례 모두 ‘관객/창작자의 경험’이 바뀌었다는 점으로 정리한다.', rows: [
      {name: 'Paik', cells: ['TV monitors', 'TVs became art']},
      {name: 'Digital exhibitions', cells: ['projected images', 'the audience walks into art']},
      {name: 'Hana', cells: ['a tablet', 'drawing anytime, anywhere']}
    ]},
    wrap: {en: 'If I were an artist today, I would use ______ to make ______. I wish ______.', ko: '관통 질문으로 돌아가기: 기술로 만들고 싶은 나의 작품 쓰기'}
  },

  quiz: [
    ['“전시회”를 뜻하는 낱말은?', ['tool', 'screen', 'exhibition', 'imagination'], 2, 'exhibition: 전시회'],
    ['“real”과 반대 개념인 낱말은?', ['virtual', 'unique', 'possible', 'familiar'], 0, 'real ↔ virtual'],
    ['“He turned TVs ___ art.”', ['on', 'off', 'from', 'into'], 3, 'turn A into B'],
    ['의견을 묻는 표현은?', ['I hope so.', 'What do you think of it?', 'I’d love to see it again.', 'Thanks a lot.'], 1, 'What do you think of ~?'],
    ['바람을 표현하는 말이 아닌 것은?', ['I hope it’s sunny.', 'I’d love to go.', 'I’m looking forward to it.', 'It looks old to me.'], 3, 'It looks ~ to me.는 의견 표현'],
    ['Let’s Watch에서 로봇이 바라는 것은?', ['박물관을 떠나는 것', '색을 바꾸는 것', '사람처럼 그림 그리기', '관객에게 길을 안내하는 것'], 2, '“I wish I could paint like a human.”'],
    ['빈칸에 알맞은 것은? “If I ___ a bird, I would fly.”', ['were', 'am', 'will be', 'have been'], 0, '가정법 과거: be동사는 were'],
    ['빈칸에 알맞은 것은? “If I had time, I ___ visit you.”', ['will', 'can', 'have to', 'would'], 3, '주절: would + 동사원형'],
    ['빈칸에 알맞은 것은? “I wish I ___ draw well.”', ['can', 'could', 'will', 'have to'], 1, 'I wish + could'],
    ['어법상 틀린 문장은?', ['I wish I were tall.', 'If I knew, I’d tell you.', 'I hope you have a good time.', 'I wish I can fly.'], 3, 'I wish I could fly.'],
    ['백남준이 태어난 곳은?', ['서울', '도쿄', '뉴욕', '베를린'], 0, 'born in Seoul in 1932'],
    ['〈다다익선〉을 만든 계기는?', ['학교 축제', '1988 서울 올림픽', 'TV 회사 광고', '미술관 개관 10주년'], 1, 'for the 1988 Seoul Olympics'],
    ['디지털 아트 전시에서 관객이 하는 일은?', ['멀리서 그림을 본다', '작품을 직접 그린다', '작품의 일부가 된다', '사진만 찍고 지나간다'], 2, 'The audience becomes part of the artwork.'],
    ['하나가 만화를 그리는 도구는?', ['종이', '붓', '태블릿', '휴대전화 카메라'], 2, 'on a tablet'],
    ['글쓴이가 가장 중요하다고 한 것은?', ['창의적인 마음', '좋은 기계', '비싼 미술 도구', '많은 TV 모니터와 조명'], 0, 'a creative mind matters most']
  ]
};

/* ── 보강: 원리 중심 문법 · 모션 그래픽 · 낱말 만들기 · 발음 기호 ── */
(function (L) {
  const ipa = {artwork: '/ˈɑːrtwɜːrk/', technology: '/tekˈnɑːlədʒi/', screen: '/skriːn/', exhibition: '/ˌeksɪˈbɪʃn/', creative: '/kriˈeɪtɪv/', imagine: '/ɪˈmædʒɪn/', pioneer: '/ˌpaɪəˈnɪr/', project: '/ˈprɑːdʒekt/', virtual: '/ˈvɜːrtʃuəl/', sculpture: '/ˈskʌlptʃər/', audience: '/ˈɔːdiəns/', interactive: '/ˌɪntərˈæktɪv/', tool: '/tuːl/', possible: '/ˈpɑːsəbl/', unique: '/juˈniːk/', express: '/ɪkˈspres/', century: '/ˈsentʃəri/', sound: '/saʊnd/', familiar: '/fəˈmɪliər/', robot: '/ˈroʊbɑːt/'};
  L.vocab.words.forEach(w => { if (ipa[w.w]) w.ipa = ipa[w.w]; });
  L.vocab.morph = [
    {w: 'interactive', ko: '상호작용하는', parts: [{t: 'inter', k: 'pre', m: '서로, 사이에'}, {t: 'act', k: 'root', m: '행동하다'}, {t: 'ive', k: 'suf', m: '~하는 (형용사)'}], family: ['international', 'internet', 'active'], note: '서로(inter) 주고받으며 움직이는 → 관객과 작품이 반응을 주고받는.'},
    {w: 'exhibition', ko: '전시회', parts: [{t: 'ex', k: 'pre', m: '밖으로'}, {t: 'hibit', k: 'root', m: '가지다, 보이다'}, {t: 'ion', k: 'suf', m: '~것 (명사)'}], family: ['exhibit', 'exit', 'export'], note: '밖으로 내어 보여 주는 것 → 전시회.'},
    {w: 'technology', ko: '기술', parts: [{t: 'techno', k: 'root', m: '기술, 솜씨'}, {t: 'logy', k: 'suf', m: '학문'}], family: ['biology', 'ecology', 'technique'], note: '-logy = ~학 (bio 생명 + logy = 생물학).'}
  ];
  const [g1, g2] = L.grammar.points;
  g1.principle = {
    q: '지금 일인데 왜 과거형을 쓸까?',
    pic: [{en: 'reality', ko: '사실: 나는 로봇이 없다'}, {en: 'If I had…', ko: '시제를 한 칸 뒤로 = 현실과 거리 두기', hot: true}],
    core: '가정법 과거는 지금 사실이 아닌 일을 상상할 때, 동사를 일부러 한 시제 뒤로(과거로) 보내 “현실과 떨어진 이야기”임을 표시한다. 시간은 과거가 아니라 현재다.',
    why: ['If + 주어 + 과거동사, 주어 + would/could + 동사원형.', 'be동사는 주어와 상관없이 were를 쓰는 것이 원칙 (If I were ~).', '단순 조건(If it rains, I will ~)은 실제로 일어날 수 있는 일.']
  };
  g1.anim = [{title: '사실 → 가정법 과거', states: [
    {t: 'I/S | don’t have/V#h | a robot/O#r | , | so | I/S#i2 | can’t teach/V#t | it to paint/O#p | .', note: '현재 사실', ko: '나는 로봇이 없어서 그림 그리기를 가르칠 수 없다.'},
    {t: 'If/X | I/S | had/X#h | a robot/O#r | , | I/S#i2 | would teach/X#t | it to paint/O#p | .', note: '현재 → 과거로 한 칸 (현실과 거리)', ko: '내가 로봇이 있다면 그림 그리기를 가르칠 텐데.'}]}];
  g1.contrast = {title: '조건 vs 가정법 과거', pairs: [
    {a: 'If it {{is}} sunny tomorrow, I {{will}} go out.', ka: '내일 맑으면 나갈 것이다. (일어날 수 있는 일)', b: 'If I {{were}} a bird, I {{would}} fly to you.', kb: '내가 새라면 너에게 날아갈 텐데. (지금 사실이 아님)'}],
    point: '일어날 수 있으면 현재형 + will, 사실과 반대면 과거형 + would.'};
  g2.principle = {
    q: 'I wish 뒤에도 왜 과거형이 올까?',
    pic: [{en: 'I can’t paint like a human.', ko: '현실'}, {en: 'I wish I could…', ko: '현실과 반대인 바람', hot: true}],
    core: 'I wish는 이루기 어려운 현재의 바람을 말한다. 그 바람이 현실과 반대이므로, 가정법과 같은 원리로 동사를 과거형으로 한 칸 뒤로 보낸다.',
    why: ['I wish + 주어 + 과거동사(were / could / had).', '현실은 그 반대: I wish I were tall. = I’m sorry I’m not tall.', 'I hope는 실제로 이뤄질 수 있는 바람 (I hope you win).']
  };
  g2.anim = [{title: '현실 → I wish', states: [
    {t: 'I/S | can’t/D | paint/V#p | like a human/M#h | .', note: '현실: 할 수 없다', ko: '나는 사람처럼 그림을 그릴 수 없다.'},
    {t: 'I wish/X | I/S | could/X | paint/V#p | like a human/M#h | .', note: '반대의 바람 → can을 과거형 could로', ko: '사람처럼 그림을 그릴 수 있으면 좋을 텐데.'}]}];
  g2.contrast = {title: 'I wish vs I hope', pairs: [
    {a: 'I {{wish}} I {{were}} taller.', ka: '내가 키가 더 크면 좋을 텐데. (이루기 어려움, 과거형)', b: 'I {{hope}} I {{pass}} the test.', kb: '시험에 합격하기를 바란다. (이뤄질 수 있음, 현재형)'}],
    point: 'I wish + 과거형 = 현실과 반대, I hope + 현재형 = 가능한 바람.'};
})(window.LESSON);
