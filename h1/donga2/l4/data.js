/* 고1 공통영어2(동아·이병민) Lesson 4 · Explore the World of Art
   교과서 대조(2026-10): 읽기 주제(Rediscovering Art Through Science — 과학으로 그림 속 숨은 층을 찾다)를 교과서에 맞췄다.
   의사소통 기능·언어 형식은 교과서 자료를 구하지 못해 단원 주제에 맞춘 추정(estimate: true).
   대화문·읽기 글은 교과서 원문이 아니라 단원 주제에 맞춰 새로 쓴 글이며, 다룬 그림은 모두 저작권이 끝난 작품입니다. */
window.LESSON = {
  book: 'h1b-donga', no: 4, estimate: true,
  title: 'Explore the World of Art', ko: '예술의 세계를 탐험하라',
  bigQ: {en: 'What can science help us see in a work of art?', ko: '과학은 예술 작품에서 무엇을 보게 해 줄까?'},
  align: {
    tb: {reading: 'Rediscovering Art Through Science', note: '교과서 읽기는 과학 기술로 그림의 숨은 층과 원래 모습을 찾아낸 사례(다빈치의 그림 등)를 소개하는 강연문. 여기 본문은 다른 작품들(페르메이르 두 점, 반 고흐, 렘브란트)로 같은 주제를 새로 쓴 글이다. 의사소통 기능·언어 형식은 교과서 자료가 없어 추정이다.'},
    std: {vocab: ['10공영2-01-05', '10공영2-02-06'], talk: ['10공영2-01-03', '10공영2-02-01'], grammar: ['10공영2-02-01'], read1: ['10공영2-01-01', '10공영2-01-06'], read2: ['10공영2-01-04', '10공영2-02-05']},
    forms: ['Relative Clauses', 'Adverbial Participles']
  },
  goals: {
    vocab: ['미술·과학 분석과 관련된 낱말 16개의 뜻과 발음(강세)을 익힌다.', 're-, ex-, ob- 같은 조각으로 reveal, restore, express, observe를 분석할 수 있다.'],
    talk: ['작품에 대한 감상을 묻고 답할 수 있다.', '그림 속 모습을 위치와 모양을 써서 묘사할 수 있다.'],
    grammar: ['복합관계사가 “관계사 + ever = 어떤 ~이든(no matter wh-)”이라는 원리로 whatever, however 문장을 쓸 수 있다.', 'with + 명사 + 분사가 “명사가 ~한 채로”를 나타낸다는 원리로 -ing와 p.p.를 고를 수 있다.'],
    read1: ['과학 도구로 그림 속을 보는 방법과 페르메이르의 두 그림에서 찾은 것을 파악할 수 있다.'],
    read2: ['네 작품의 발견을 비교하고, 과학이 예술 감상에 주는 의미에 대한 나의 생각을 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'How long do you usually look at a painting in a museum?', ko: '미술관에서 보통 그림 한 점을 얼마나 오래 보나요?', note: '“3초”, “사진만 찍고 지나감” 같은 솔직한 답이 나온다. 오늘 1분 동안 그림 하나만 보는 활동을 예고한다.'},
    words: [
      {w: 'masterpiece', pos: 'n.', ko: '걸작', ic: '🖼️', ipa: '/ˈmæstərpiːs/', audio: 'assets/audio/masterpiece.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The Starry Night is a masterpiece.', exKo: '「별이 빛나는 밤」은 걸작이다.'},
      {w: 'exhibition', pos: 'n.', ko: '전시회', ic: '🏛️', ipa: '/ˌeksɪˈbɪʃn/', audio: 'assets/audio/exhibition.mp3', audioCredit: 'Neskaya · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'We went to a photo exhibition.', exKo: '우리는 사진 전시회에 갔다.'},
      {w: 'portrait', pos: 'n.', ko: '초상화', ic: '🧑‍🎨', ipa: '/ˈpɔːrtrət/', audio: 'assets/audio/portrait.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'She painted a portrait of her mother.', exKo: '그녀는 어머니의 초상화를 그렸다.'},
      {w: 'layer', pos: 'n.', ko: '층, 겹', ic: '🧅', img: {src: 'h1/donga2/l4/img/w-layer.jpg', credit: 'Horia Varlan · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/10361931@N06/4321874812'}, ipa: '/ˈleɪər/', audio: 'assets/audio/layer.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The painting has many layers.', exKo: '그 그림에는 여러 층이 있다.'},
      {w: 'brushstroke', pos: 'n.', ko: '붓질, 붓 자국', ic: '🖌️', ipa: '/ˈbrʌʃstroʊk/', ex: 'You can see thick brushstrokes in his paintings.', exKo: '그의 그림에서는 두꺼운 붓 자국을 볼 수 있다.'},
      {w: 'canvas', pos: 'n.', ko: '캔버스, 화폭', ic: '⬜', ipa: '/ˈkænvəs/', audio: 'assets/audio/canvas.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The painter stretched a new canvas.', exKo: '화가는 새 캔버스를 팽팽히 당겨 맸다.'},
      {w: 'surface', pos: 'n.', ko: '표면', ic: '🟫', ipa: '/ˈsɜːrfɪs/', audio: 'assets/audio/surface.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Under the surface, there is another picture.', exKo: '표면 아래에 또 다른 그림이 있다.'},
      {w: 'reveal', pos: 'v.', ko: '드러내다, 밝히다', ic: '🔦', ipa: '/rɪˈviːl/', audio: 'assets/audio/reveal.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The X-ray revealed a hidden face.', exKo: 'X선 사진이 숨은 얼굴을 드러냈다.'},
      {w: 'interpret', pos: 'v.', ko: '해석하다', ic: '🔍', ipa: '/ɪnˈtɜːrprɪt/', audio: 'assets/audio/interpret.mp3', audioCredit: 'Neskaya · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'People interpret the painting differently.', exKo: '사람들은 그 그림을 다르게 해석한다.'},
      {w: 'express', pos: 'v.', ko: '표현하다', ic: '💬', ipa: '/ɪkˈspres/', audio: 'assets/audio/express.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Artists express their feelings through color.', exKo: '예술가들은 색으로 감정을 표현한다.'},
      {w: 'restore', pos: 'v.', ko: '복원하다', ic: '🖌️', ipa: '/rɪˈstɔːr/', ex: 'Experts restored the old painting.', exKo: '전문가들이 그 오래된 그림을 복원했다.'},
      {w: 'beneath', pos: 'prep.', ko: '~의 아래에', ic: '⬇️', ipa: '/bɪˈniːθ/', audio: 'assets/audio/beneath.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Scientists looked beneath the paint.', exKo: '과학자들이 물감 아래를 들여다보았다.'},
      {w: 'analyze', pos: 'v.', ko: '분석하다', ic: '🔬', ipa: '/ˈænəlaɪz/', audio: 'assets/audio/analyze.mp3', audioCredit: 'தகவலுழவன் · Public domain (Wikimedia Commons, US)', ex: 'An engineer analyzed the painting.', exKo: '한 엔지니어가 그 그림을 분석했다.'},
      {w: 'detail', pos: 'n.', ko: '세부, 세부 사항', ic: '🔎', ipa: '/ˈdiːteɪl/', audio: 'assets/audio/detail.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Look at the small details in the corner.', exKo: '구석의 작은 세부를 봐.'},
      {w: 'observe', pos: 'v.', ko: '관찰하다', ic: '👁️', ipa: '/əbˈzɜːrv/', audio: 'assets/audio/observe.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Observe the painting for one full minute.', exKo: '그 그림을 꼬박 1분 동안 관찰해라.'},
      {w: 'original', pos: 'adj.', ko: '원래의, 독창적인', ic: '🧾', ipa: '/əˈrɪdʒənl/', audio: 'assets/audio/original.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The original painting was different.', exKo: '원래 그림은 달랐다.'},
    ],
    morph: [
      {w: 'express', ko: '표현하다', parts: [{t: 'ex', k: 'pre', m: '밖으로'}, {t: 'press', k: 'root', m: '누르다'}], family: ['expression', 'expressive', 'impression ↔'], note: '마음속 것을 “밖으로 눌러 짜내다” → 표현하다. impression(안으로)과 짝지어 기억!'},
      {w: 'observe', ko: '관찰하다', parts: [{t: 'ob', k: 'pre', m: '~을 향해'}, {t: 'serve', k: 'root', m: '지키다, 살피다'}], family: ['observation', 'observatory', 'preserve'], note: '대상을 향해 지켜보다 → 관찰하다. observatory = 천문대.'},
      {w: 'masterpiece', ko: '걸작', parts: [{t: 'master', k: 'root', m: '대가, 장인'}, {t: 'piece', k: 'suf', m: '작품, 조각'}], family: ['mastermind', 'masterful'], note: '원래 장인이 되기 위해 내던 “대가의 작품”이라는 뜻. 두 낱말이 붙은 합성어.'},
      {w: 'reveal', ko: '드러내다', parts: [{t: 're', k: 'pre', m: '반대로, 되돌려'}, {t: 'veal', k: 'root', m: '베일(veil)을 씌우다'}], family: ['veil', 'revelation', 'unveil'], note: '씌운 베일(veil)을 거꾸로 걷다 → 드러내다. unveil도 같은 뜻.'},
      {w: 'restore', ko: '복원하다', parts: [{t: 're', k: 'pre', m: '다시'}, {t: 'store', k: 'root', m: '세우다, 갖추다'}], family: ['restoration', 'restorer', 'store'], note: '다시(re) 원래대로 세우다 → 복원하다. restorer = 복원 전문가.'}
    ],
    phrases: [
      {w: 'take a closer look', ko: '더 자세히 보다', ex: 'Take a closer look at her eyes.', exKo: '그녀의 눈을 더 자세히 봐.'},
      {w: 'in the background', ko: '배경에', ex: 'A mountain stands in the background.', exKo: '배경에 산이 서 있다.'},
      {w: 'in the foreground', ko: '전경(앞쪽)에', ex: 'Three boats are in the foreground.', exKo: '앞쪽에 배 세 척이 있다.'},
      {w: 'catch one’s eye', ko: '~의 눈길을 끌다', ex: 'The bright yellow moon caught my eye.', exKo: '밝은 노란 달이 내 눈길을 끌었다.'},
      {w: 'stand out', ko: '눈에 띄다', ex: 'The red coat stands out against the snow.', exKo: '빨간 코트가 눈을 배경으로 눈에 띈다.'},
      {w: 'leave ~ to the imagination', ko: '~을 상상에 맡기다', ex: 'The painter leaves the ending to the imagination.', exKo: '화가는 결말을 상상에 맡긴다.'}
    ],
    pairs: [
      {a: 'impress', b: 'express', rel: '안으로 / 밖으로 누르다'},
      {a: 'abstract', b: 'realistic', rel: '추상적 / 사실적'},
      {a: 'foreground', b: 'background', rel: '앞 / 뒤'},
      {a: 'portrait', b: 'landscape', rel: '사람 / 풍경'},
      {a: 'glance', b: 'observe', rel: '흘끗 보다 / 관찰하다'}
    ],
    wrap: {en: 'A work of art that impressed me is ______. What caught my eye was ______.', ko: '오늘 배운 낱말로 인상 깊었던 작품 한 문장 쓰기'}
  },

  talk: {
    hook: {en: 'What would you hang on the wall of your room — a painting, a photo, or a poster?', ko: '내 방 벽에 무엇을 걸고 싶나요? 그림, 사진, 포스터?', note: '고른 것과 까닭을 말하게 한다. “그 그림은 어떤 느낌을 주니?”로 감상 표현을 예고한다.'},
    speakers: {Yejin: {voice: 0, pitch: 1.1}, Noah: {voice: 1, pitch: 1}, 'Ms. Seo': {voice: 2, pitch: 1.05}, Kevin: {voice: 1, pitch: .95}, Lily: {voice: 0, pitch: 1.15}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Speak 1', func: '감상 묻고 답하기',
        key: {q: ['What do you think of ~?', 'How do you like ~?', 'How does it make you feel?'], a: ['I think it’s ~.', 'It makes me feel ~.', 'I’m impressed by ~.']},
        note: 'make + 목적어 + 동사원형(공통영어1 4과)과 이어진다: It makes me feel calm. 감상에는 근거(the colors, the brushstrokes)를 붙이게 한다.',
        dialogs: [
          { title: 'Dialogue A', setting: '미술관, 「별이 빛나는 밤」 복제화 앞', lines: [
            {s: 'Noah', en: 'Yejin, {{what do you think of}} this painting?', ko: '예진아, 이 그림 어떻게 생각해?'},
            {s: 'Yejin', en: '{{I think it’s}} amazing. The sky looks like it’s moving.', ko: '굉장한 것 같아. 하늘이 움직이는 것처럼 보여.'},
            {s: 'Noah', en: '{{How does it make you feel}}?', ko: '어떤 기분이 들어?'},
            {s: 'Yejin', en: '{{It makes me feel}} excited and a little lonely at the same time.', ko: '신나면서도 동시에 조금 외로운 기분이 들어.'},
            {s: 'Noah', en: 'Interesting. {{I’m impressed by}} the thick brushstrokes. You can almost touch them.', ko: '재밌다. 나는 두꺼운 붓 자국이 인상적이야. 거의 만질 수 있을 것 같아.'}
          ]},
          { title: 'Dialogue B', setting: '학교 미술 전시회', lines: [
            {s: 'A', en: '{{How do you like}} my painting?', ko: '내 그림 어때?'},
            {s: 'B', en: 'I love it. The colors are so warm.', ko: '정말 좋아. 색이 아주 따뜻해.'},
            {s: 'A', en: 'Thanks. I painted it with my eyes half closed to feel the light.', ko: '고마워. 빛을 느끼려고 눈을 반쯤 감은 채로 그렸어.'},
            {s: 'B', en: 'That’s why it looks so dreamy. It makes me want to go outside.', ko: '그래서 이렇게 꿈결 같아 보이는구나. 밖에 나가고 싶어져.'}
          ]}
        ],
        check: [
          {q: 'What does the sky look like to Yejin?', a: 'It looks like it’s moving.'},
          {q: 'What is Noah impressed by?', a: 'The thick brushstrokes.'},
          {q: 'How did A paint the picture?', a: 'With A’s eyes half closed.'}
        ],
        drill: {frame: ['A: What do you think of this painting?', 'B: It makes me feel ____.'], opts: ['calm', 'lonely', 'excited', 'nostalgic', 'curious', 'uneasy']}
      },
      { id: 'lt2', label: 'Listen & Speak 2', func: '그림 묘사하기',
        key: {q: ['What can you see in the picture?', 'What is in the background?'], a: ['In the foreground, there is ~.', 'On the left / right, ~.', '~ looks like ~.']},
        note: '위치 표현(in the foreground / background, on the left, in the middle, in the corner)과 looks like + 명사 / looks + 형용사를 구별한다.',
        dialogs: [
          { title: 'Dialogue A', setting: '미술 시간, 「가나가와 해변의 큰 파도」를 보며', lines: [
            {s: 'Ms. Seo', en: 'Kevin, {{what can you see in the picture}}?', ko: '케빈, 그림에서 무엇이 보이니?'},
            {s: 'Kevin', en: '{{In the foreground}}, {{there is}} a huge wave with white foam.', ko: '앞쪽에 하얀 거품이 이는 거대한 파도가 있어요.'},
            {s: 'Ms. Seo', en: 'Good. And {{what is in the background}}?', ko: '좋아. 그럼 배경에는 무엇이 있니?'},
            {s: 'Kevin', en: 'A small mountain. It {{looks like}} it’s about to be swallowed by the wave.', ko: '작은 산이요. 파도에 막 삼켜질 것처럼 보여요.'},
            {s: 'Lily', en: 'And {{on the left}}, there are three long boats. The people are bending down.', ko: '그리고 왼쪽에 기다란 배 세 척이 있어요. 사람들이 몸을 숙이고 있어요.'}
          ]},
          { title: 'Dialogue B', setting: '그림 맞히기 게임', lines: [
            {s: 'A', en: 'I’m thinking of a portrait. A girl is looking over her shoulder.', ko: '나는 초상화 하나를 생각하고 있어. 한 소녀가 어깨 너머로 보고 있어.'},
            {s: 'B', en: 'What is she wearing?', ko: '그녀는 무엇을 입고 있어?'},
            {s: 'A', en: 'A blue and yellow turban, with a pearl earring shining in the dark.', ko: '파란색과 노란색 터번을 쓰고 있고, 진주 귀걸이가 어둠 속에서 빛나고 있어.'},
            {s: 'B', en: 'I know! It’s “Girl with a Pearl Earring.”', ko: '알겠다! 「진주 귀걸이를 한 소녀」야.'}
          ]}
        ],
        check: [
          {q: 'What is in the foreground of the picture?', a: 'A huge wave with white foam.'},
          {q: 'What does the mountain look like?', a: 'It looks like it’s about to be swallowed by the wave.'},
          {q: 'What is the girl wearing in the portrait?', a: 'A blue and yellow turban and a pearl earring.'}
        ],
        drill: {frame: ['A: What can you see in the picture?', 'B: In the ____, there is …'], opts: ['foreground', 'background', 'middle', 'top left corner', 'bottom right corner', 'center']}
      }
    ],
    interviewEx: 'Dohyun likes “The Starry Night.” It makes him feel calm. In the foreground, there is a dark tree that looks like a flame.',
    watch: {
      label: 'Let’s Watch', title: 'One Minute, One Painting', setting: '미술관 견학. 서 선생님이 그림 하나를 1분 동안만 보라고 한다.',
      lines: [
        {s: 'Ms. Seo', en: 'For one minute, just look at this painting. Don’t take any photos.', ko: '1분 동안 이 그림만 보세요. 사진은 찍지 말고요.'},
        {s: 'Kevin', en: 'One minute? That’s forever!', ko: '1분이요? 그건 영원이에요!'},
        {s: 'Lily', en: '(after a while) Wait… there’s a tiny dog in the corner, with its tail wagging.', ko: '(잠시 후) 잠깐… 구석에 꼬리를 흔드는 작은 개가 있어.'},
        {s: 'Kevin', en: 'Whoa, I didn’t see that before. And the man is smiling, not frowning.', ko: '우와, 아까는 못 봤어. 그리고 남자가 찡그린 게 아니라 웃고 있어.'},
        {s: 'Ms. Seo', en: 'See? However quickly you walk through a museum, the paintings wait for you to slow down.', ko: '봤죠? 여러분이 미술관을 아무리 빨리 지나가도, 그림은 여러분이 속도를 늦추기를 기다리고 있어요.'}
      ],
      check: [
        {q: 'What does Ms. Seo ask the students to do?', a: 'To look at one painting for one minute without taking photos.'},
        {q: 'What does Lily find?', a: 'A tiny dog in the corner, with its tail wagging.'},
        {q: 'What is Ms. Seo’s message?', a: 'Paintings wait for us to slow down.'}
      ]
    },
    wrap: {en: 'Describe a painting to your partner and share how it makes you feel.', ko: '짝에게 그림 하나를 묘사하고 감상 나누기'}
  },

  grammar: {
    cover: 'whatever · with + N + -ing',
    hook: {en: '{{However}} quickly you walk through a museum, the paintings wait.  /  There’s a tiny dog {{with its tail wagging}}.', ko: '첫 문장의 However는 “하지만”일까? 두 번째 문장에서 꼬리는 무엇을 하고 있을까?', answer: 'However quickly = 아무리 빨리 ~해도 (복합관계부사) / with its tail wagging = 꼬리가 흔들리는 채로 (with + 명사 + -ing)', note: '2차시 Let’s Watch의 문장이다. However 뒤에 바로 형용사·부사가 붙으면 “하지만”이 아니라는 점을 짚는다.'},
    points: [
      { id: 'g1', name: '복합관계사 (whatever · however …)', short: '복합관계사', form: 'whatever / whoever / whichever / whenever / wherever / however + 형용사·부사', meaning: '무엇이든 / 누구든 / 언제든 / 어디서든 / 아무리 ~해도',
        notice: [
          {en: '{{Whatever}} you see first, look again.', ko: '처음에 무엇을 보든, 다시 봐라.'},
          {en: '{{However}} quickly you walk, the paintings wait for you.', ko: '아무리 빨리 걸어도 그림은 너를 기다린다.'},
          {en: '{{Wherever}} you see art, stop for a minute.', ko: '어디서 예술을 보든 1분만 멈춰라.'}
        ],
        principle: {
          q: 'what에 -ever를 붙이면 왜 뜻이 넓어질까?',
          pic: [{en: 'what', ko: '~하는 것 (하나)'}, {en: '+ ever', ko: '언제라도, 어떤 경우든'}, {en: 'whatever', ko: '무엇이든 (전부)', hot: true}],
          core: '-ever는 “어떤 경우든”이라는 뜻을 더한다. 그래서 복합관계사는 하나를 가리키지 않고 “어떤 ~이든 상관없이(no matter wh-)”로 범위를 활짝 연다.',
          why: ['명사 자리: whatever/whoever = anything that / anyone who (~하는 것은 무엇이든, ~하는 사람은 누구든).', '부사 자리: whatever/whoever/wherever/whenever = no matter what/who/where/when (~하더라도).', 'however + 형용사·부사 + 주어 + 동사 = no matter how (아무리 ~해도). 뒤에 바로 형용사·부사가 붙는 것이 단서.'],
          note: '기출 지문: Whatever its immediate effect …(24.6 29번), express whatever is in your head(25.6 22번), whichever place has a direct bus(2026 수능 12번), No matter how much we plan(2026 수능 35번).'
        },
        anim: [
          {title: 'no matter how → however', why: '두 단어(no matter how)가 한 단어(however)로 바뀌는 장면.', states: [
            {t: 'No matter how/X#nmh | quickly/M#q | you/S | walk/V | , | the paintings/S#p | wait/V#w | .', note: '아무리 빨리 걸어도', ko: '네가 아무리 빨리 걸어도 그림은 기다린다.'},
            {t: 'However/X#nmh | quickly/M#q | you/S | walk/V | , | the paintings/S#p | wait/V#w | .', note: 'no matter how = however (+ 형용사·부사)', ko: '같은 뜻, 더 짧게'}]},
          {title: 'anything that → whatever', states: [
            {t: 'Write down/V#wd | anything that/X#wh | catches/V#c | your eye/O#eye | .', note: '~하는 것은 무엇이든', ko: '눈길을 끄는 것은 무엇이든 적어라.'},
            {t: 'Write down/V#wd | whatever/X#wh | catches/V#c | your eye/O#eye | .', note: 'anything that = whatever (명사절)', ko: '눈길을 끄는 것은 무엇이든 적어라.'}]}
        ],
        contrast: {title: 'However: “하지만”일까, “아무리 ~해도”일까', pairs: [
          {a: '{{However}}, the painting was small.', ka: '하지만 그 그림은 작았다. (접속부사, 뒤에 콤마)', b: '{{However}} small it is, the painting is powerful.', kb: '아무리 작아도 그 그림은 강렬하다. (복합관계부사, 뒤에 형용사)'},
          {a: '{{What}} you see is important.', ka: '네가 보는 것이 중요하다. (그 하나)', b: '{{Whatever}} you see is important.', kb: '네가 보는 것은 무엇이든 중요하다. (전부)'}],
          point: 'however 바로 뒤에 형용사·부사가 오면 “아무리 ~해도”. -ever가 붙으면 범위가 “무엇이든·누구든”으로 넓어진다.'},
        rule: [
          {k: 'whatever', v: '~하는 것은 무엇이든 / 무엇을 ~하더라도', ex: 'Whatever you feel is okay.'},
          {k: 'whoever', v: '~하는 사람은 누구든 / 누가 ~하더라도', ex: 'Whoever visits the museum will love it.'},
          {k: 'wherever · whenever', v: '어디서 ~하든 / 언제 ~하든', ex: 'Whenever I see this painting, I smile.'},
          {k: 'however', v: 'however + 형용사·부사 + S + V (아무리 ~해도)', ex: 'However hard it is, keep looking.'}
        ],
        check: [
          {q: '____ you choose, I will respect your choice. (Whatever / What)', a: 'Whatever'},
          {q: '____ tired you are, you should see this exhibition. (However / Whatever)', a: 'However'},
          {q: '____ wants to join the art club can sign up. (Whoever / Whatever)', a: 'Whoever'},
          {q: 'I visit the gallery ____ I have free time. (whenever / whatever)', a: 'whenever'},
          {q: '____ you go, you can find art. (Wherever / However)', a: 'Wherever'}
        ],
        trap: {bad: 'However you are tired, keep looking at the painting.', good: 'However tired you are, keep looking at the painting.', why: '“아무리 ~해도”의 however는 바로 뒤에 형용사·부사가 붙는다(however + tired + you are).'},
        scramble: [
          {ko: '처음에 무엇을 보든 다시 봐라.', en: 'Whatever you see first, look again.'},
          {ko: '아무리 작아도 그 그림은 강렬하다.', en: 'However small it is, the painting is powerful.'},
          {ko: '이 그림을 볼 때마다 나는 차분해진다.', en: 'Whenever I see this painting, I feel calm.'}
        ]
      },
      { id: 'g2', name: 'with + 명사 + 분사 (부대상황)', short: 'with + N + 분사', form: 'with + 명사 + -ing (명사가 ~하는 채로) / with + 명사 + p.p. (명사가 ~된 채로)', meaning: '~가 …한 채로, ~가 …하면서',
        notice: [
          {en: 'There’s a tiny dog {{with its tail wagging}}.', ko: '꼬리를 흔드는 작은 개가 있다.'},
          {en: 'She painted {{with her eyes half closed}}.', ko: '그녀는 눈을 반쯤 감은 채로 그림을 그렸다.'},
          {en: 'The girl looks back, {{with her lips slightly parted}}.', ko: '소녀는 입술을 살짝 벌린 채로 뒤돌아본다.'}
        ],
        principle: {
          q: '왜 어떤 때는 -ing, 어떤 때는 p.p.일까?',
          pic: [{en: 'with', ko: '~한 채로'}, {en: 'its tail', ko: '명사 = 동작의 주인', hot: true}, {en: 'wagging / closed', ko: '하는가(-ing)? 되는가(p.p.)?'}],
          core: 'with 뒤의 명사와 분사는 “작은 문장(주어 + 동사)”이다. 명사가 그 동작을 직접 하면 -ing, 명사가 그 동작을 당하면 p.p.를 쓴다.',
          why: ['its tail wagging = 꼬리가 흔들린다(꼬리가 흔드는 동작의 주인) → -ing.', 'her eyes closed = 눈이 감겨 있다(사람이 눈을 감는다, 눈은 감김을 당한다) → p.p.', '공통영어1 2과 분사구문과 같은 원리 — 분사의 주인이 하면 -ing, 당하면 p.p.'],
          note: '기출 지문: with your palms facing up (25.3 20번, 손바닥이 위를 향한 채로), human beings with the tears wiped off (25.3 41번, 눈물이 닦인 채로).'
        },
        anim: [
          {title: '두 문장 → with + 명사 + 분사', why: '두 번째 문장의 주어와 동사가 with 뒤로 들어가며 분사로 바뀐다.', states: [
            {t: 'A dog/S#dog | sits/V#sits | in the corner/M#c | . | / | Its tail/S#tail | is wagging/V#wag | .', note: '개가 앉아 있다 + 꼬리가 흔들린다', ko: '개 한 마리가 구석에 앉아 있다. 꼬리가 흔들리고 있다.'},
            {t: 'A dog/S#dog | sits/V#sits | in the corner/M#c | , | with/X | its tail/S#tail | wagging/X#wag | .', note: '꼬리가 “흔드는” 쪽 → -ing', ko: '개 한 마리가 꼬리를 흔들며 구석에 앉아 있다.'}]},
          {title: '“당하는” 쪽이면 p.p.', states: [
            {t: 'She | painted/V#p | . | / | Her eyes/S#eyes | were half closed/V#cl | .', note: '눈은 감겨 있었다 (수동)', ko: '그녀는 그림을 그렸다. 그녀의 눈은 반쯤 감겨 있었다.'},
            {t: 'She | painted/V#p | with/X | her eyes/S#eyes | half closed/X#cl | .', note: '눈이 “감긴” 쪽 → p.p.', ko: '그녀는 눈을 반쯤 감은 채로 그림을 그렸다.'}]}
        ],
        contrast: {title: '-ing? p.p.? — with 뒤 명사가 하는가, 당하는가', pairs: [
          {a: 'He stood {{with his hair blowing}} in the wind.', ka: '그는 머리카락을 바람에 날리며 서 있었다. (머리카락이 날린다 → -ing)', b: 'He stood {{with his arms folded}}.', kb: '그는 팔짱을 낀 채 서 있었다. (팔이 접힌다 → p.p.)'},
          {a: 'She listened {{with her eyes shining}}.', ka: '그녀는 눈을 반짝이며 들었다. (눈이 반짝인다)', b: 'She listened {{with her eyes closed}}.', kb: '그녀는 눈을 감은 채로 들었다. (눈이 감긴다)'}],
          point: 'with + 명사 + 분사: 명사가 동작을 하면 -ing, 당하면 p.p.'},
        rule: [
          {k: '능동', v: 'with + 명사 + -ing (명사가 ~하면서)', ex: 'with the stars swirling'},
          {k: '수동', v: 'with + 명사 + p.p. (명사가 ~된 채로)', ex: 'with her legs crossed'},
          {k: '형용사·부사구', v: 'with + 명사 + 형용사 / 전치사구', ex: 'with her mouth open / with a book in her hand'},
          {k: '자주 쓰는 표현', v: 'with one’s eyes closed / arms folded / legs crossed', ex: 'Don’t talk with your mouth full.'}
        ],
        check: [
          {q: 'She smiled with her eyes ____. (shine)', a: 'shining'},
          {q: 'He sat with his legs ____. (cross)', a: 'crossed'},
          {q: 'The boat moved with its sails ____ in the wind. (flap)', a: 'flapping'},
          {q: 'Don’t sleep with the window ____. (open / opened)', a: 'open'},
          {q: 'She listened to the guide with her arms ____. (fold)', a: 'folded'}
        ],
        trap: {bad: 'She painted with her eyes closing.', good: 'She painted with her eyes closed.', why: '눈은 “감기는” 쪽(사람이 눈을 감는다) → p.p. closed. closing이면 눈이 스스로 감고 있다는 뜻이 된다.'},
        scramble: [
          {ko: '소녀는 진주 귀걸이를 반짝이며 뒤돌아본다.', en: 'The girl looks back with her pearl earring shining.'},
          {ko: '그는 팔짱을 낀 채 그림을 바라보았다.', en: 'He looked at the painting with his arms folded.'},
          {ko: '하늘에는 별들이 소용돌이치고 있다.', en: 'The sky is full of light, with the stars swirling.'}
        ]
      }
    ],
    wrap: {en: 'Whenever I see ______, I feel ______. In the picture, ______ with ______ing.', ko: '복합관계사 한 문장, with + 명사 + 분사 한 문장으로 좋아하는 그림 묘사하기'},
    wrapEx: 'Whenever I see “The Great Wave,” I feel nervous. In the picture, three boats move forward with the huge wave curling over them.'
  },

  reading: {
    title: 'What Science Sees in Art', kind: '강연문', cover: 'Layers', coverKo: '그림 속에 숨은 층', cover2: 'Reveal', coverKo2: '과학이 다시 보게 한 그림',
    before: [
      {q: 'Can a painting hide something under its surface?', a: '덧칠된 그림, 처음 스케치, 지워진 물건 등'},
      {q: 'How can scientists look under the paint without damaging it?', a: 'X선, 적외선 카메라, 현미경 같은 기술로'}
    ],
    gloss: {'X-ray': '엑스선', 'infrared': '적외선', 'sketch': '밑그림', 'curtain': '커튼', 'Cupid': '큐피드(사랑의 신)', 'restorer': '복원 전문가', 'peasant': '농민', 'strip': '길쭉한 조각'},
    paras: [
      {who: '', en: 'When we look at a painting, we see colors, shapes, and light. But what we see is only the top layer. Under the surface, many famous works hide changes, sketches, and even other paintings. Today, science lets us look beneath the paint without touching it. Whatever we find there, it helps us see the work in a new light.',
       ko: '그림을 볼 때 우리는 색, 모양, 빛을 본다. 하지만 우리가 보는 것은 맨 위의 층일 뿐이다. 표면 아래에 많은 유명한 작품들이 수정한 흔적, 밑그림, 심지어 다른 그림까지 숨기고 있다. 오늘날 과학은 그림에 손대지 않고 물감 아래를 볼 수 있게 해 준다. 거기서 무엇을 찾든, 그것은 작품을 새로운 시각으로 보게 해 준다.',
       check: {q: 'What do we usually see when we look at a painting?', a: 'Only the top layer (colors, shapes, and light).'}, think: '내가 아는 그림 아래에는 무엇이 숨어 있을까?'},
      {who: 'Tools of Science', en: 'X-rays pass through paint, but some old paints block them, so hidden shapes appear on the X-ray image. Infrared cameras can show the artist’s first sketch under the colors. With these tools pointed at a canvas, experts can watch a painting being made, step by step.',
       ko: 'X선은 물감을 통과하지만 어떤 옛 물감은 X선을 막기 때문에 숨은 형태가 X선 사진에 나타난다. 적외선 카메라는 색 아래에 있는 화가의 첫 밑그림을 보여 줄 수 있다. 이런 도구를 캔버스에 겨누면 전문가들은 그림이 한 단계씩 그려지는 과정을 지켜볼 수 있다.',
       check: {q: 'What can infrared cameras show?', a: 'The artist’s first sketch under the colors.'}, think: '과학 도구로 그림을 보면 무엇이 좋을까?'},
      {who: 'Girl with a Pearl Earring, about 1665', en: 'Johannes Vermeer’s girl seems to float in a dark, empty space. In 2018, however, scientists studied the painting with microscopes and special cameras. They found that there was once a green curtain behind her. The paint has changed over time, so the curtain has almost disappeared. They even found tiny eyelashes that no one could see before.',
       ko: '요하네스 페르메이르의 소녀는 어둡고 텅 빈 공간에 떠 있는 것처럼 보인다. 그러나 2018년, 과학자들이 현미경과 특수 카메라로 이 그림을 연구했다. 그들은 소녀 뒤에 원래 초록색 커튼이 있었다는 것을 알아냈다. 시간이 지나면서 물감이 변해 커튼은 거의 사라졌다. 그들은 전에는 아무도 볼 수 없었던 작은 속눈썹까지 찾아냈다.',
       check: {q: 'What was once behind the girl?', a: 'A green curtain.'}, think: '텅 빈 배경과 커튼이 있는 배경은 느낌이 어떻게 다를까?',
       art: {src: 'h1/donga2/l4/img/r-p4.jpg', title: 'Johannes Vermeer, Girl with a Pearl Earring (c. 1665)', credit: 'Public domain · Wikimedia Commons'}},
      {who: 'Girl Reading a Letter, about 1657', en: 'In another Vermeer painting, a young woman reads a letter by an open window, with the light falling on her face. In 1979, an X-ray showed a large picture of Cupid on the wall behind her. Someone had painted over it after Vermeer died. Restorers carefully removed the top layer, and in 2021 Cupid appeared again. Now the letter seems to be a love letter.',
       ko: '페르메이르의 또 다른 그림에서는 한 젊은 여성이 얼굴에 빛을 받으며 열린 창가에서 편지를 읽는다. 1979년, X선 촬영으로 그녀 뒤의 벽에 큐피드를 그린 커다란 그림이 있다는 것이 드러났다. 페르메이르가 죽은 뒤 누군가 그 위를 덧칠했던 것이다. 복원 전문가들이 맨 위층을 조심스럽게 걷어 냈고, 2021년 큐피드가 다시 나타났다. 이제 그 편지는 연애편지처럼 보인다.',
       check: {q: 'What did the X-ray show in 1979?', a: 'A large picture of Cupid on the wall behind the woman.'}, think: '큐피드가 다시 나타나자 그림의 뜻은 어떻게 바뀌었을까?'},
      {who: 'Patch of Grass, 1887', en: 'Vincent van Gogh was often too poor to buy new canvases, so he painted over his old ones. In 2008, scientists used very powerful X-rays to study his painting Patch of Grass. Under the green grass, they discovered the face of a peasant woman. However hard he tried to cover it, science found her.',
       ko: '빈센트 반 고흐는 새 캔버스를 살 수 없을 만큼 가난한 때가 많아서 옛 그림 위에 다시 그렸다. 2008년, 과학자들은 아주 강력한 X선으로 그의 그림 「풀밭」을 연구했다. 초록 풀 아래에서 그들은 한 농민 여성의 얼굴을 발견했다. 그가 아무리 애써 덮었어도, 과학은 그녀를 찾아냈다.',
       check: {q: 'Why did Van Gogh paint over his old canvases?', a: 'He was often too poor to buy new canvases.'}, think: '반 고흐가 덮어 버린 그림은 어떤 그림이었을까?'},
      {who: 'The Night Watch, 1642', en: 'Rembrandt’s The Night Watch is a huge group portrait. In 1715, it was cut on all four sides so that it could fit on a wall. For three hundred years, the missing parts were lost. In 2021, researchers used a small copy from the 17th century and artificial intelligence to recreate the lost strips. For a while, visitors could see the painting as Rembrandt had planned it.',
       ko: '렘브란트의 「야경」은 거대한 단체 초상화다. 1715년, 이 그림은 벽에 맞추려고 네 면이 모두 잘렸다. 300년 동안 잘린 부분은 사라진 상태였다. 2021년, 연구자들은 17세기의 작은 모사본과 인공지능을 이용해 잃어버린 조각들을 다시 만들어 냈다. 한동안 관람객들은 렘브란트가 계획했던 모습 그대로 그림을 볼 수 있었다.',
       check: {q: 'Why was The Night Watch cut in 1715?', a: 'So that it could fit on a wall.'}, think: '잘린 그림을 되살리는 데 AI를 쓰는 것을 어떻게 생각하나?',
       art: {src: 'h1/donga2/l4/img/r-p6.jpg', title: 'Rembrandt, The Night Watch (1642)', credit: 'archer10 (Dennis) · CC BY-SA 2.0 (Flickr)'}},
      {who: 'Does Science Spoil Art?', en: 'Some people worry that science takes the magic out of art. But knowing how a painting was made does not make it less beautiful. Instead, it shows us the artist’s choices: what they changed, what they hid, and what they kept. Wherever we look, the painting tells a longer story.',
       ko: '어떤 사람들은 과학이 예술에서 마법을 빼앗을까 봐 걱정한다. 하지만 그림이 어떻게 그려졌는지 안다고 해서 덜 아름다워지는 것은 아니다. 오히려 그것은 화가의 선택, 곧 무엇을 바꾸고, 무엇을 숨기고, 무엇을 남겼는지를 보여 준다. 어디를 보든 그림은 더 긴 이야기를 들려준다.',
       check: {q: 'What does science show us about artists?', a: 'Their choices — what they changed, hid, and kept.'}, think: '과학은 예술을 망칠까, 더 풍부하게 할까?'},
      {who: 'A New Way of Looking', en: 'Next time you stand in front of a painting, look closely, with your mind open to what might be underneath. Science and art may seem far apart, but together they help us see more than our eyes alone can.',
       ko: '다음에 그림 앞에 서게 되면, 그 아래에 무엇이 있을지 마음을 열고 자세히 보라. 과학과 예술은 서로 멀리 떨어져 있는 것처럼 보일지 모르지만, 함께하면 우리 눈만으로 볼 수 있는 것보다 더 많이 보게 해 준다.',
       check: {q: 'What do science and art help us do together?', a: 'See more than our eyes alone can.'}, think: '과학과 예술이 만나는 또 다른 예는?',
       bg: {src: 'h1/donga2/l4/img/r-p7.jpg', credit: 'Go-tea 郭天 · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/131814204@N04/51556283581', about: '벽화 같은 그림 앞에 선 관람객'}}
    ],
    split: 4,
    next: '반 고흐와 렘브란트의 그림에서는\n무엇이 발견되었을까?',
    recap: {q: '과학은 페르메이르의 그림에서 무엇을 찾았나?', items: [{k: 'TOOLS', v: 'X-rays, infrared cameras, microscopes'}, {k: 'PEARL EARRING', v: 'a green curtain behind the girl · tiny eyelashes'}, {k: 'READING A LETTER', v: 'a hidden Cupid, painted over after Vermeer died'}]},
    tf: [
      {p: 0, s: 'What we see on a painting is only the top layer.', a: true},
      {p: 1, s: 'Infrared cameras can show the artist’s first sketch.', a: true},
      {p: 2, s: 'The girl with the pearl earring was always in an empty space.', a: false, why: '원래 뒤에 초록색 커튼이 있었다.'},
      {p: 3, s: 'Vermeer himself painted over Cupid.', a: false, why: '페르메이르가 죽은 뒤 누군가 덧칠했다.'},
      {p: 4, s: 'A woman’s face was found under Patch of Grass.', a: true},
      {p: 5, s: 'The Night Watch was cut to fit on a wall.', a: true},
      {p: 6, s: 'The writer thinks science makes art less beautiful.', a: false, why: '덜 아름다워지지 않고 화가의 선택을 보여 준다.'}
    ],
    key: [
      {en: '{{Whatever}} we find there, it helps us see the work in a new light.', note: '복합관계대명사 whatever (무엇을 ~하든)', g: 'g1'},
      {en: '{{With these tools pointed}} at a canvas, experts can watch a painting being made.', note: 'with + 명사 + p.p. (도구가 겨누어진 채로)', g: 'g2'},
      {en: 'A young woman reads a letter, {{with the light falling}} on her face.', note: 'with + 명사 + -ing (빛이 비치며)', g: 'g2'},
      {en: '{{However hard}} he tried to cover it, science found her.', note: 'however + 부사 (아무리 ~해도)', g: 'g1'},
      {en: '{{Wherever}} we look, the painting tells a longer story.', note: '복합관계부사 wherever (어디를 ~하든)', g: 'g1'},
      {en: 'Look closely, {{with your mind open}} to what might be underneath.', note: 'with + 명사 + 형용사 (마음을 연 채로)', g: 'g2'}
    ],
    summary: {text: 'What we see on a painting is only the top {{layer}}. With X-rays and infrared cameras, scientists can look {{beneath}} the paint. They found a green curtain behind Vermeer’s girl, a hidden Cupid that {{restorers}} brought back, and a woman’s face under Van Gogh’s grass. AI even helped {{recreate}} the lost parts of The Night Watch. Science does not spoil art; it {{reveals}} the artist’s choices.'},
    order: ['Someone painted over Cupid after Vermeer died.', 'An X-ray showed the hidden Cupid in 1979.', 'Restorers removed the top layer.', 'Cupid appeared again in 2021.'],
    chart: {title: 'WHAT SCIENCE FOUND', ko: '네 작품에서 과학이 찾은 것', cols: ['Tool', 'Discovery'], note: '표를 보고 “With ~ pointed at the painting, scientists found ~.” 문장과 “Whatever ~, …” 문장으로 말하게 한다.', rows: [
      {name: 'Pearl Earring', cells: ['microscopes, special cameras (2018)', 'a green curtain, tiny eyelashes']},
      {name: 'Reading a Letter', cells: ['X-ray (1979), restoration (2021)', 'a hidden Cupid']},
      {name: 'Patch of Grass', cells: ['powerful X-rays (2008)', 'a peasant woman’s face']},
      {name: 'The Night Watch', cells: ['an old copy + AI (2021)', 'the lost strips']}
    ]},
    wrap: {en: 'Whatever is hidden in ______, I would like to ______. With ______, we can ______.', ko: '관통 질문으로 돌아가기: 과학으로 다시 보고 싶은 작품과 그 까닭 쓰기'}
  },

  quiz: [
    ['“걸작”을 뜻하는 낱말은?', ['portrait', 'masterpiece', 'canvas', 'texture'], 1, 'masterpiece'],
    ['“해석하다”를 뜻하는 낱말은?', ['inspire', 'observe', 'interpret', 'express'], 2, 'interpret'],
    ['express의 ex-가 뜻하는 것은?', ['안으로', '밖으로', '다시', '함께'], 1, 'ex- = 밖으로 (impress는 안으로)'],
    ['foreground의 반대말은?', ['background', 'underground', 'playground', 'campground'], 0, 'foreground ↔ background'],
    ['감상을 묻는 표현은?', ['What can you see?', 'What do you think of this painting?', 'In the foreground, there is a tree.', 'On the left, there are boats.'], 1, 'What do you think of ~?'],
    ['그림을 묘사하는 표현은?', ['How do you like it?', 'It makes me feel calm.', 'In the background, there is a mountain.', 'I’m impressed by it.'], 2, '위치 + there is ~'],
    ['빈칸에 알맞은 것은? “____ you choose, I’ll respect it.”', ['What', 'Whatever', 'However', 'Wherever'], 1, 'Whatever = 무엇을 ~하든'],
    ['빈칸에 알맞은 것은? “____ tired you are, finish the drawing.”', ['However', 'Whatever', 'Whenever', 'What'], 0, 'however + 형용사'],
    ['“However, the painting was small.”의 However는?', ['아무리 ~해도', '하지만', '무엇이든', '언제든'], 1, '콤마가 붙은 접속부사 = 하지만'],
    ['빈칸에 알맞은 것은? “She painted with her eyes ____.”', ['closing', 'closed', 'close', 'to close'], 1, '눈은 감기는 쪽 → p.p.'],
    ['빈칸에 알맞은 것은? “The dog sat with its tail ____.”', ['wagged', 'wagging', 'wag', 'to wag'], 1, '꼬리가 흔드는 쪽 → -ing'],
    ['2018년 연구로 「진주 귀걸이를 한 소녀」에서 밝혀진 것은?', ['소녀 뒤에 원래 초록색 커튼이 있었다', '귀걸이가 진짜 진주였다', '소녀의 이름', '다른 그림 위에 그렸다'], 0, 'there was once a green curtain behind her'],
    ['「편지를 읽는 여인」의 큐피드에 대해 맞는 것은?', ['페르메이르가 직접 지웠다', '페르메이르가 죽은 뒤 누군가 덧칠했다', '2021년에 새로 그려 넣었다', 'X선으로도 보이지 않았다'], 1, 'Someone had painted over it after Vermeer died.'],
    ['반 고흐가 옛 그림 위에 다시 그린 까닭은?', ['더 유명해지려고', '새 캔버스를 살 돈이 없어서', '그림이 마음에 들지 않아서', '선생님이 시켜서'], 1, 'too poor to buy new canvases'],
    ['글쓴이의 주장으로 알맞은 것은?', ['과학은 예술의 마법을 빼앗는다', '과학과 예술이 함께하면 더 많이 볼 수 있다', '그림은 손대지 말고 봐야 한다', 'AI가 화가를 대신할 것이다'], 1, 'together they help us see more than our eyes alone can']
  ]
};
