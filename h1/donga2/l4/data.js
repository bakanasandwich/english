/* 고1 공통영어2(동아·이병민) Lesson 4 · Explore the World of Art
   단원명은 교과서 목차 기준. 본문 주제(그림을 천천히 보는 법)와 의사소통 기능·문법은 추정(estimate: true).
   대화문·읽기 글은 교과서 원문이 아니라 단원 주제에 맞춰 새로 쓴 글이며, 다룬 그림은 모두 저작권이 끝난 작품입니다. */
window.LESSON = {
  book: 'h1b-donga', no: 4, estimate: true,
  title: 'Explore the World of Art', ko: '예술의 세계를 탐험하라',
  bigQ: {en: 'What happens when we really look at a work of art?', ko: '예술 작품을 정말로 “보면” 무슨 일이 일어날까?'},
  goals: {
    vocab: ['미술·감상과 관련된 낱말 16개의 뜻과 발음(강세)을 익힌다.', 'im-, ex-, ob- 같은 조각으로 impression, express, observe를 분석할 수 있다.'],
    talk: ['작품에 대한 감상을 묻고 답할 수 있다.', '그림 속 모습을 위치와 모양을 써서 묘사할 수 있다.'],
    grammar: ['복합관계사가 “관계사 + ever = 어떤 ~이든(no matter wh-)”이라는 원리로 whatever, however 문장을 쓸 수 있다.', 'with + 명사 + 분사가 “명사가 ~한 채로”를 나타낸다는 원리로 -ing와 p.p.를 고를 수 있다.'],
    read1: ['천천히 보기(slow looking)가 무엇인지 알고, 두 작품을 관찰한 내용을 파악할 수 있다.'],
    read2: ['작품을 감상하는 질문을 정리하고, 한 작품을 골라 영어로 묘사하고 해석할 수 있다.']
  },

  vocab: {
    hook: {en: 'How long do you usually look at a painting in a museum?', ko: '미술관에서 보통 그림 한 점을 얼마나 오래 보나요?', note: '“3초”, “사진만 찍고 지나감” 같은 솔직한 답이 나온다. 오늘 1분 동안 그림 하나만 보는 활동을 예고한다.'},
    words: [
      {w: 'masterpiece', pos: 'n.', ko: '걸작', ic: '🖼️', ipa: '/ˈmæstərpiːs/', audio: 'assets/audio/masterpiece.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The Starry Night is a masterpiece.', exKo: '「별이 빛나는 밤」은 걸작이다.'},
      {w: 'exhibition', pos: 'n.', ko: '전시회', ic: '🏛️', ipa: '/ˌeksɪˈbɪʃn/', audio: 'assets/audio/exhibition.mp3', audioCredit: 'Neskaya · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'We went to a photo exhibition.', exKo: '우리는 사진 전시회에 갔다.'},
      {w: 'portrait', pos: 'n.', ko: '초상화', ic: '🧑‍🎨', ipa: '/ˈpɔːrtrət/', audio: 'assets/audio/portrait.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'She painted a portrait of her mother.', exKo: '그녀는 어머니의 초상화를 그렸다.'},
      {w: 'landscape', pos: 'n.', ko: '풍경(화)', ic: '🏞️', ipa: '/ˈlændskeɪp/', ex: 'He loves painting landscapes.', exKo: '그는 풍경화 그리기를 좋아한다.'},
      {w: 'brushstroke', pos: 'n.', ko: '붓질, 붓 자국', ic: '🖌️', ipa: '/ˈbrʌʃstroʊk/', ex: 'You can see thick brushstrokes in his paintings.', exKo: '그의 그림에서는 두꺼운 붓 자국을 볼 수 있다.'},
      {w: 'canvas', pos: 'n.', ko: '캔버스, 화폭', ic: '⬜', ipa: '/ˈkænvəs/', audio: 'assets/audio/canvas.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The painter stretched a new canvas.', exKo: '화가는 새 캔버스를 팽팽히 당겨 맸다.'},
      {w: 'texture', pos: 'n.', ko: '질감', ic: '🧶', ipa: '/ˈtekstʃər/', audio: 'assets/audio/texture.mp3', audioCredit: 'Wikimedia Commons contributor · GFDL (Wikimedia Commons, US)', ex: 'The paint gives the picture a rough texture.', exKo: '물감이 그림에 거친 질감을 준다.'},
      {w: 'perspective', pos: 'n.', ko: '원근법; 관점', ic: '📐', ipa: '/pərˈspektɪv/', audio: 'assets/audio/perspective.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The painting has a strange perspective.', exKo: '그 그림은 원근법이 독특하다.'},
      {w: 'interpret', pos: 'v.', ko: '해석하다', ic: '🔍', ipa: '/ɪnˈtɜːrprɪt/', audio: 'assets/audio/interpret.mp3', audioCredit: 'Neskaya · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'People interpret the painting differently.', exKo: '사람들은 그 그림을 다르게 해석한다.'},
      {w: 'express', pos: 'v.', ko: '표현하다', ic: '💬', ipa: '/ɪkˈspres/', audio: 'assets/audio/express.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Artists express their feelings through color.', exKo: '예술가들은 색으로 감정을 표현한다.'},
      {w: 'impression', pos: 'n.', ko: '인상, 느낌', ic: '✨', ipa: '/ɪmˈpreʃn/', audio: 'assets/audio/impression.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'What was your first impression of the picture?', exKo: '그 그림에 대한 첫인상은 어땠니?'},
      {w: 'inspire', pos: 'v.', ko: '영감을 주다', ic: '🌟', ipa: '/ɪnˈspaɪər/', ex: 'Nature inspired many of his works.', exKo: '자연이 그의 많은 작품에 영감을 주었다.'},
      {w: 'abstract', pos: 'adj.', ko: '추상적인', ic: '🔷', ipa: '/ˈæbstrækt/', ex: 'Abstract art does not show real objects.', exKo: '추상 미술은 실제 사물을 보여 주지 않는다.'},
      {w: 'detail', pos: 'n.', ko: '세부, 세부 사항', ic: '🔎', ipa: '/ˈdiːteɪl/', audio: 'assets/audio/detail.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Look at the small details in the corner.', exKo: '구석의 작은 세부를 봐.'},
      {w: 'observe', pos: 'v.', ko: '관찰하다', ic: '👁️', ipa: '/əbˈzɜːrv/', audio: 'assets/audio/observe.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Observe the painting for one full minute.', exKo: '그 그림을 꼬박 1분 동안 관찰해라.'},
      {w: 'swirl', pos: 'v./n.', ko: '소용돌이치다; 소용돌이', ic: '🌀', ipa: '/swɜːrl/', ex: 'The stars swirl across the night sky.', exKo: '별들이 밤하늘을 가로질러 소용돌이친다.'}
    ],
    morph: [
      {w: 'impression', ko: '인상', parts: [{t: 'im', k: 'pre', m: '안으로'}, {t: 'press', k: 'root', m: '누르다'}, {t: 'ion', k: 'suf', m: '~것 (명사)'}], family: ['impress', 'impressive', 'Impressionism'], note: '마음 “안으로 눌러 찍힌 것” → 인상. 모네 등의 인상주의(Impressionism)도 같은 낱말.'},
      {w: 'express', ko: '표현하다', parts: [{t: 'ex', k: 'pre', m: '밖으로'}, {t: 'press', k: 'root', m: '누르다'}], family: ['expression', 'expressive', 'impression ↔'], note: '마음속 것을 “밖으로 눌러 짜내다” → 표현하다. impression(안으로)과 짝지어 기억!'},
      {w: 'observe', ko: '관찰하다', parts: [{t: 'ob', k: 'pre', m: '~을 향해'}, {t: 'serve', k: 'root', m: '지키다, 살피다'}], family: ['observation', 'observatory', 'preserve'], note: '대상을 향해 지켜보다 → 관찰하다. observatory = 천문대.'},
      {w: 'masterpiece', ko: '걸작', parts: [{t: 'master', k: 'root', m: '대가, 장인'}, {t: 'piece', k: 'suf', m: '작품, 조각'}], family: ['mastermind', 'masterful'], note: '원래 장인이 되기 위해 내던 “대가의 작품”이라는 뜻. 두 낱말이 붙은 합성어.'}
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
    title: 'The Art of Slow Looking', kind: '감상 에세이', cover: 'Look', coverKo: '천천히 보는 기술', cover2: 'Wonder', coverKo2: '그림이 말을 걸 때',
    before: [
      {q: 'When you visit a museum, do you read the label first or look at the work first?', a: '대부분 설명을 먼저 읽거나 사진부터 찍는다.'},
      {q: 'Do you know any of these paintings: The Starry Night, The Great Wave, Girl with a Pearl Earring?', a: '본 적은 있지만 자세히 본 적은 없다는 답이 많다.'}
    ],
    gloss: {'on average': '평균적으로', 'slow looking': '천천히 보기', asylum: '요양원', 'cypress': '사이프러스(측백나무과 나무)', woodblock: '목판', 'Mount Fuji': '후지산', foam: '거품', 'claw': '갈고리 발톱', turban: '터번', 'pearl': '진주', 'parted': '살짝 벌어진', 'label': '작품 설명표'},
    paras: [
      {who: '', en: 'In one study at a large art museum in New York, visitors spent less than half a minute, on average, in front of each work. Many people walk quickly from room to room, taking photos and reading labels. But whatever you see in a second, you will see much more in a minute. Some teachers call this “slow looking.”',
       ko: '뉴욕의 한 대형 미술관에서 이루어진 연구에서, 관람객들은 작품 하나 앞에서 평균 30초도 머물지 않았다. 많은 사람들이 사진을 찍고 설명표를 읽으며 이 방 저 방을 빠르게 걸어 다닌다. 하지만 1초 동안 무엇을 보든, 1분이면 훨씬 더 많은 것을 보게 될 것이다. 어떤 선생님들은 이것을 “천천히 보기”라고 부른다.',
       check: {q: 'How long did visitors spend in front of each work on average?', a: 'Less than half a minute.'}, think: '나는 미술관에서 작품 하나를 얼마나 오래 보았나?',
       bg: {src: 'h1/donga2/l4/img/r-p0.jpg', about: '미술관 전시실'}},
      {who: 'How to Look Slowly', en: 'Slow looking is simple. Choose one work, and look at it for at least one minute before reading anything about it. First, notice whatever catches your eye. Then move your eyes slowly from corner to corner. Finally, ask yourself, “What is happening here? What makes me say that?” You will be surprised by how much appears.',
       ko: '천천히 보기는 간단하다. 작품 하나를 골라, 그것에 대해 아무것도 읽기 전에 적어도 1분 동안 바라본다. 먼저 눈길을 끄는 것은 무엇이든 알아차린다. 그다음 눈을 천천히 이쪽 구석에서 저쪽 구석으로 옮긴다. 마지막으로 스스로 묻는다. “여기서 무슨 일이 일어나고 있지? 왜 그렇게 생각하지?” 얼마나 많은 것이 나타나는지에 놀랄 것이다.',
       check: {q: 'What should you do before reading anything about the work?', a: 'Look at it for at least one minute.'}, think: '“왜 그렇게 생각하지?”라는 질문이 왜 중요할까?',
       bg: {src: 'h1/donga2/l4/img/r-p1.jpg', about: '그림을 바라보는 관람객'}},
      {who: 'The Starry Night, 1889', en: 'Try it with Vincent van Gogh’s The Starry Night. At first glance, you see a night sky. Look longer, and the sky begins to move, with the stars swirling like waves. A dark cypress tree rises in the foreground like a flame. Below, a small village sleeps quietly. Van Gogh painted this view from his window at an asylum in southern France.',
       ko: '빈센트 반 고흐의 「별이 빛나는 밤」으로 해 보자. 처음 흘끗 보면 밤하늘이 보인다. 더 오래 보면 하늘이 움직이기 시작하고, 별들이 파도처럼 소용돌이친다. 어두운 사이프러스 나무가 앞쪽에서 불꽃처럼 솟아오른다. 그 아래에는 작은 마을이 조용히 잠들어 있다. 반 고흐는 남프랑스의 한 요양원 창문에서 보이는 이 풍경을 그렸다.',
       check: {q: 'What does the cypress tree look like?', a: 'It looks like a flame.'}, think: '반 고흐는 왜 하늘을 움직이는 것처럼 그렸을까?',
       art: {src: 'h1/donga2/l4/img/r-p2.jpg', title: 'Vincent van Gogh, The Starry Night (1889)', credit: 'Public domain · Wikimedia Commons'},
       bg: {src: 'h1/donga2/l4/img/r-p2.jpg', about: '반 고흐 「별이 빛나는 밤」(1889)', pos: 'center'}},
      {who: 'The Great Wave, about 1831', en: 'Now look at Katsushika Hokusai’s woodblock print The Great Wave off Kanagawa. A giant wave rises on the left, with its white foam reaching out like claws. Three long boats are caught beneath it, with the rowers bending low. In the background, Mount Fuji looks tiny. However huge the mountain is in real life, here it seems smaller than a single wave.',
       ko: '이제 가쓰시카 호쿠사이의 목판화 「가나가와 해변의 큰 파도」를 보자. 왼쪽에서 거대한 파도가 솟아오르고, 하얀 거품이 갈고리 발톱처럼 뻗어 나온다. 기다란 배 세 척이 그 아래 붙잡혀 있고, 노 젓는 사람들은 몸을 낮게 숙이고 있다. 배경에는 후지산이 아주 작아 보인다. 실제로는 그 산이 아무리 거대해도, 여기서는 파도 하나보다 작아 보인다.',
       check: {q: 'How does Mount Fuji look in the print?', a: 'It looks tiny, smaller than a single wave.'}, think: '산을 작게 그린 까닭은 무엇일까?',
       art: {src: 'h1/donga2/l4/img/r-p3.jpg', title: 'Katsushika Hokusai, The Great Wave off Kanagawa (c. 1831)', credit: 'Public domain · Wikimedia Commons'},
       bg: {src: 'h1/donga2/l4/img/r-p3.jpg', about: '호쿠사이 「가나가와 해변의 큰 파도」(1831년경)', pos: 'center'}},
      {who: 'Girl with a Pearl Earring, about 1665', en: 'Johannes Vermeer’s Girl with a Pearl Earring shows a young woman against a dark background. She looks over her shoulder at us, with her lips slightly parted, as if she were about to speak. A single drop of light shines on the pearl. Nobody knows for sure who she was. Whoever she was, she seems to be waiting for us to answer.',
       ko: '요하네스 페르메이르의 「진주 귀걸이를 한 소녀」는 어두운 배경 앞의 젊은 여성을 보여 준다. 그녀는 마치 막 말을 하려는 듯 입술을 살짝 벌린 채 어깨 너머로 우리를 바라본다. 빛 한 방울이 진주 위에서 빛난다. 그녀가 누구였는지는 아무도 확실히 모른다. 그녀가 누구였든, 그녀는 우리가 대답하기를 기다리고 있는 것 같다.',
       check: {q: 'Do we know who the girl was?', a: 'No, nobody knows for sure.'}, think: '그녀는 무슨 말을 하려던 걸까?',
       art: {src: 'h1/donga2/l4/img/r-p4.jpg', title: 'Johannes Vermeer, Girl with a Pearl Earring (c. 1665)', credit: 'Public domain · Wikimedia Commons'},
       bg: {src: 'h1/donga2/l4/img/r-p4.jpg', about: '페르메이르 「진주 귀걸이를 한 소녀」(1665년경)', pos: 'center 30%'}},
      {who: 'Questions, Not Answers', en: 'You do not need to be an expert to look closely. Good questions are more useful than facts: What do I notice first? What colors are used, and how do they make me feel? What is outside the frame? Whatever answers you find, they belong to you. Experts may know the history, but only you know what you see.',
       ko: '자세히 보는 데 전문가일 필요는 없다. 좋은 질문이 사실보다 더 쓸모 있다. 나는 무엇을 먼저 알아차리는가? 어떤 색이 쓰였고, 그 색은 나를 어떤 기분이 들게 하는가? 화폭 밖에는 무엇이 있을까? 어떤 답을 찾든 그것은 당신의 것이다. 전문가는 역사를 알지 모르지만, 당신이 무엇을 보는지는 당신만 안다.',
       check: {q: 'What is more useful than facts?', a: 'Good questions.'}, think: '그림을 볼 때 나만의 질문 하나를 만든다면?',
       bg: {src: 'h1/donga2/l4/img/r-p5.jpg', about: '빈 액자'}},
      {who: 'No Wrong Answers', en: 'Two people can look at the same painting and feel completely different things. One may find The Starry Night joyful; another may find it lonely. Neither is wrong. However you interpret a work, you are taking part in a conversation that began when the artist first touched the canvas, with the brush shaking slightly in their hand.',
       ko: '두 사람이 같은 그림을 보고 완전히 다른 것을 느낄 수 있다. 어떤 사람은 「별이 빛나는 밤」을 즐겁다고 느끼고, 다른 사람은 외롭다고 느낄 수 있다. 어느 쪽도 틀리지 않다. 당신이 작품을 어떻게 해석하든, 당신은 화가가 붓을 손에 살짝 떨며 처음 캔버스에 댔을 때 시작된 대화에 참여하고 있는 것이다.',
       check: {q: 'Is there one correct way to feel about a painting?', a: 'No. Different feelings are not wrong.'}, think: '친구와 같은 그림을 다르게 느낀 적이 있나?',
       bg: {src: 'h1/donga2/l4/img/r-p6.jpg', about: '물감과 붓'}},
      {who: 'Your Minute', en: 'The next time you visit a museum — or even scroll past a painting on your phone — give it one minute. Stop, breathe, and look. Whenever you do, you may discover a tiny dog in the corner, a light in someone’s eyes, or a feeling you did not know you had. Art is not only on the wall. It happens in the looking.',
       ko: '다음에 미술관을 방문할 때 — 혹은 휴대전화에서 그림을 스쳐 지나갈 때조차 — 그것에 1분을 주어라. 멈추고, 숨 쉬고, 보라. 그럴 때마다 당신은 구석의 작은 개, 누군가의 눈 속 빛, 또는 자신에게 있는 줄 몰랐던 감정을 발견할지도 모른다. 예술은 벽에만 있는 것이 아니다. 예술은 바라보는 행위 속에서 일어난다.',
       check: {q: 'Where does art happen, according to the writer?', a: 'In the looking.'}, think: '이번 주에 1분 동안 볼 작품을 하나 고른다면?',
       bg: {src: 'h1/donga2/l4/img/r-p7.jpg', about: '미술관 벤치에 앉은 사람'}}
    ],
    coverImg: {src: 'h1/donga2/l4/img/r-cover.jpg'},
    coverImg2: {src: 'h1/donga2/l4/img/r-cover2.jpg'},
    split: 4,
    next: '「진주 귀걸이를 한 소녀」는\n무엇을 말하려는 걸까?',
    recap: {q: '천천히 보면 무엇이 보였나?', items: [{k: 'STARRY NIGHT', v: 'the sky moves, with the stars swirling like waves'}, {k: 'GREAT WAVE', v: 'a giant wave with foam like claws; Mount Fuji looks tiny'}]},
    tf: [
      {p: 0, s: 'Visitors spent several minutes in front of each work.', a: false, why: '평균 30초도 머물지 않았다.'},
      {p: 1, s: 'In slow looking, you read the label first.', a: false, why: '아무것도 읽기 전에 1분 동안 본다.'},
      {p: 2, s: 'Van Gogh painted the view from a window.', a: true},
      {p: 3, s: 'Mount Fuji looks huge in The Great Wave.', a: false, why: '아주 작아 보인다.'},
      {p: 4, s: 'We know exactly who the girl with the pearl earring was.', a: false, why: '아무도 확실히 모른다.'},
      {p: 5, s: 'You must be an expert to look closely at art.', a: false, why: '전문가일 필요는 없다.'},
      {p: 6, s: 'Two people can feel differently about the same painting.', a: true}
    ],
    key: [
      {en: 'But {{whatever}} you see in a second, you will see much more in a minute.', note: '복합관계대명사 whatever (무엇을 ~하든)', g: 'g1'},
      {en: 'Look longer, and the sky begins to move, {{with the stars swirling}} like waves.', note: 'with + 명사 + -ing (별들이 소용돌이치며)', g: 'g2'},
      {en: 'Three long boats are caught beneath it, {{with the rowers bending}} low.', note: 'with + 명사 + -ing', g: 'g2'},
      {en: '{{However huge}} the mountain is in real life, here it seems smaller than a single wave.', note: 'however + 형용사 (아무리 ~해도)', g: 'g1'},
      {en: 'She looks over her shoulder at us, {{with her lips slightly parted}}.', note: 'with + 명사 + p.p. (입술이 벌어진 채로)', g: 'g2'},
      {en: '{{Whoever}} she was, she seems to be waiting for us to answer.', note: '복합관계대명사 whoever (누구였든)', g: 'g1'}
    ],
    summary: {text: 'Most visitors look at each work for less than half a minute. {{Slow}} looking means observing one work for at least one minute. In The Starry Night, the sky moves, with the stars {{swirling}}. In The Great Wave, Mount Fuji looks {{tiny}}. Vermeer’s girl looks at us with her lips slightly {{parted}}. However you {{interpret}} a work, your answer belongs to you.'},
    order: ['Choose one work of art.', 'Look at it for at least one minute.', 'Move your eyes slowly from corner to corner.', 'Ask yourself what is happening and why you think so.'],
    chart: {title: 'THREE WORKS', ko: '세 작품 관찰 정리', cols: ['What I notice', 'How it feels'], note: '표를 보고 “In the picture, ___ with ___ing.” 문장과 “Whenever I see ___, I feel ___.” 문장으로 말하게 한다.', rows: [
      {name: 'The Starry Night', cells: ['swirling stars, flame-like tree', 'moving, joyful or lonely']},
      {name: 'The Great Wave', cells: ['claw-like foam, tiny Mount Fuji', 'tense, powerful']},
      {name: 'Girl with a Pearl Earring', cells: ['parted lips, shining pearl', 'mysterious, waiting']}
    ]},
    wrap: {en: 'Whenever I look at ______, I notice ______. It makes me feel ______.', ko: '관통 질문으로 돌아가기: 한 작품을 골라 1분 동안 보고 묘사·해석하기'}
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
    ['연구에서 관람객이 작품 하나를 본 평균 시간은?', ['5분 이상', '약 2분', '30초 미만', '10분'], 2, 'less than half a minute'],
    ['「별이 빛나는 밤」에서 사이프러스 나무는 무엇처럼 보이나?', ['파도', '불꽃', '진주', '산'], 1, 'like a flame'],
    ['「가나가와 해변의 큰 파도」에서 후지산은?', ['아주 크게 그려졌다', '아주 작아 보인다', '그려지지 않았다', '왼쪽에 있다'], 1, 'Mount Fuji looks tiny'],
    ['글쓴이의 주장으로 알맞은 것은?', ['그림은 전문가만 이해할 수 있다', '천천히 바라보면 예술이 일어난다', '설명표를 먼저 읽어야 한다', '그림에는 정답이 있다'], 1, 'It happens in the looking.']
  ]
};
