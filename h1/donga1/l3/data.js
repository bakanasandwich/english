/* 고1 공통영어1(동아·이병민) Lesson 3 · Small Things Matter
   단원명·본문 주제(희망 재활용, wishful recycling)는 교과서 목차 기준. 의사소통 기능·문법은 추정(estimate: true).
   대화문·읽기 글은 교과서 원문이 아니라 단원 주제에 맞춰 새로 쓴 글입니다. */
window.LESSON = {
  book: 'h1a-donga', no: 3, estimate: true,
  title: 'Small Things Matter', ko: '작은 것이 중요하다',
  bigQ: {en: 'Can a small habit really change the planet?', ko: '작은 습관 하나가 정말 지구를 바꿀 수 있을까?'},
  goals: {
    vocab: ['재활용·환경과 관련된 낱말 16개의 뜻과 발음(강세)을 익힌다.', 're-, dis-, -able 같은 조각으로 recycle, disposable 같은 낱말을 분석할 수 있다.'],
    talk: ['걱정되는 일을 표현하고 그 까닭을 말할 수 있다.', '문제에 대한 해결책을 제안하고 그 제안에 답할 수 있다.'],
    grammar: ['수동태가 “동작을 당하는 쪽을 주어로 세운 문장”이라는 원리로 능동·수동을 판단할 수 있다.', '문장의 진짜 주어를 찾아 동사의 수를 맞추고, 한 문장에 동사가 반드시 하나 있어야 함을 설명할 수 있다.'],
    read1: ['희망 재활용(wishcycling)이 무엇이며 왜 문제가 되는지 파악할 수 있다.'],
    read2: ['올바른 분리배출 방법을 정리하고, 내가 바꿀 작은 습관을 영어로 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'What did you throw away today? Where did it go?', ko: '오늘 무엇을 버렸나요? 그것은 어디로 갔을까요?', note: '우유갑, 컵라면 용기, 휴대전화 비닐 등 구체적으로 말하게 한다. “그건 재활용될까?”라고 다시 물으면 학생들의 의견이 갈린다 — 본문의 문제의식으로 이어진다.'},
    words: [
      {w: 'recycle', pos: 'v.', ko: '재활용하다', ic: '♻️', ipa: '/ˌriːˈsaɪkl/', ex: 'Glass bottles can be recycled again and again.', exKo: '유리병은 몇 번이고 재활용될 수 있다.'},
      {w: 'contaminate', pos: 'v.', ko: '오염시키다', ic: '🧫', ipa: '/kənˈtæmɪneɪt/', ex: 'Food waste can contaminate a whole bin of paper.', exKo: '음식물 쓰레기는 종이 한 통 전체를 오염시킬 수 있다.'},
      {w: 'sort', pos: 'v.', ko: '분류하다', ic: '🗂️', img: {src: 'h1/donga1/l3/img/w-sort.jpg', credit: 'Steven-L-Johnson · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/31295868@N06/14152612952'}, ipa: '/sɔːrt/', ex: 'Workers sort the waste by hand.', exKo: '작업자들이 손으로 쓰레기를 분류한다.'},
      {w: 'container', pos: 'n.', ko: '용기, 그릇', ic: '🥡', ipa: '/kənˈteɪnər/', ex: 'Rinse the container before you recycle it.', exKo: '재활용하기 전에 용기를 헹궈라.'},
      {w: 'rinse', pos: 'v.', ko: '헹구다', ic: '🚰', ipa: '/rɪns/', ex: 'Rinse the bottle with a little water.', exKo: '물을 조금 넣어 병을 헹궈라.'},
      {w: 'landfill', pos: 'n.', ko: '쓰레기 매립지', ic: '🏔️', img: {src: 'h1/donga1/l3/img/w-landfill.jpg', credit: 'Redwin Law · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/91959510@N00/484219968'}, ipa: '/ˈlændfɪl/', ex: 'Most of the trash ends up in a landfill.', exKo: '쓰레기 대부분은 결국 매립지로 간다.'},
      {w: 'intention', pos: 'n.', ko: '의도', ic: '💡', ipa: '/ɪnˈtenʃn/', ex: 'He had good intentions, but the result was bad.', exKo: '그는 좋은 의도를 가졌지만 결과는 나빴다.'},
      {w: 'material', pos: 'n.', ko: '재료, 물질', ic: '🧱', ipa: '/məˈtɪriəl/', ex: 'This bag is made of recycled materials.', exKo: '이 가방은 재활용된 재료로 만들어졌다.'},
      {w: 'dispose', pos: 'v.', ko: '처리하다, 버리다 (of)', ic: '🗑️', ipa: '/dɪˈspoʊz/', ex: 'Dispose of batteries at a special collection point.', exKo: '배터리는 전용 수거함에 버려라.'},
      {w: 'separate', pos: 'v./adj.', ko: '분리하다; 분리된', ic: '✂️', ipa: '/ˈsepəreɪt/', ex: 'Separate the label from the bottle.', exKo: '병에서 라벨을 떼어 내라.'},
      {w: 'coating', pos: 'n.', ko: '코팅, 덧칠', ic: '🫧', ipa: '/ˈkoʊtɪŋ/', ex: 'Paper cups have a thin plastic coating.', exKo: '종이컵에는 얇은 플라스틱 코팅이 되어 있다.'},
      {w: 'facility', pos: 'n.', ko: '시설', ic: '🏭', ipa: '/fəˈsɪləti/', ex: 'The recycling facility handles tons of waste a day.', exKo: '재활용 시설은 하루에 수 톤의 쓰레기를 처리한다.'},
      {w: 'harmful', pos: 'adj.', ko: '해로운', ic: '☠️', ipa: '/ˈhɑːrmfl/', ex: 'Some chemicals are harmful to animals.', exKo: '어떤 화학 물질은 동물에게 해롭다.'},
      {w: 'disposable', pos: 'adj.', ko: '일회용의', ic: '🥤', img: {src: 'h1/donga1/l3/img/w-disposable.jpg', credit: 'CompleteMerchandise · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/95247477@N06/9503540990'}, ipa: '/dɪˈspoʊzəbl/', ex: 'Try to use fewer disposable cups.', exKo: '일회용 컵을 덜 쓰도록 노력해라.'},
      {w: 'reduce', pos: 'v.', ko: '줄이다', ic: '📉', ipa: '/rɪˈduːs/', ex: 'We need to reduce plastic waste.', exKo: '우리는 플라스틱 쓰레기를 줄여야 한다.'},
      {w: 'habit', pos: 'n.', ko: '습관', ic: '🔁', ipa: '/ˈhæbɪt/', ex: 'Small habits can make a big difference.', exKo: '작은 습관이 큰 차이를 만들 수 있다.'}
    ],
    morph: [
      {w: 'recycle', ko: '재활용하다', parts: [{t: 're', k: 'pre', m: '다시'}, {t: 'cycle', k: 'root', m: '순환, 돌다'}], family: ['reuse', 'rewrite', 'bicycle'], note: 're- = 다시(reuse, return). cycle = 고리, 순환(bi + cycle = 바퀴 둘).'},
      {w: 'disposable', ko: '일회용의', parts: [{t: 'dis', k: 'pre', m: '떨어져, 멀리'}, {t: 'pos', k: 'root', m: '놓다, 두다'}, {t: 'able', k: 'suf', m: '~할 수 있는'}], family: ['dispose', 'disposal', 'position'], note: '멀리 놓아 버릴 수 있는 → 쓰고 버리는(일회용의). pos = 놓다(position, deposit).'},
      {w: 'reusable', ko: '다시 쓸 수 있는', parts: [{t: 're', k: 'pre', m: '다시'}, {t: 'us', k: 'root', m: '쓰다 (use)'}, {t: 'able', k: 'suf', m: '~할 수 있는'}], family: ['useful', 'useless', 'disposable ↔'], note: 'disposable(일회용의)의 반대 개념. e로 끝나는 동사 + able → e를 뺀다(use → usable).'},
      {w: 'environmental', ko: '환경의', parts: [{t: 'environ', k: 'root', m: '둘러싸다'}, {t: 'ment', k: 'suf', m: '~것 (명사)'}, {t: 'al', k: 'suf', m: '~의 (형용사)'}], family: ['environment', 'environmentally', 'environmentalist'], note: '우리를 둘러싼 것 → 환경(environment) → 환경의(environmental). 접미사가 겹겹이 붙으며 품사가 바뀐다.'}
    ],
    phrases: [
      {w: 'end up in', ko: '결국 ~에 이르다', ex: 'Much of our plastic ends up in the ocean.', exKo: '우리 플라스틱의 상당 부분이 결국 바다로 간다.'},
      {w: 'when in doubt', ko: '확실하지 않을 때는', ex: 'When in doubt, throw it out.', exKo: '확실하지 않을 때는 일반 쓰레기로 버려라.'},
      {w: 'with good intentions', ko: '좋은 의도로', ex: 'People often wishcycle with good intentions.', exKo: '사람들은 종종 좋은 의도로 희망 재활용을 한다.'},
      {w: 'get rid of', ko: '~을 없애다, 처분하다', ex: 'How can we get rid of old batteries safely?', exKo: '헌 배터리를 어떻게 안전하게 처분할 수 있을까?'},
      {w: 'be made of', ko: '~로 만들어지다', ex: 'This cup is made of paper and plastic.', exKo: '이 컵은 종이와 플라스틱으로 만들어졌다.'},
      {w: 'make a difference', ko: '차이를 만들다', ex: 'Rinsing one bottle can make a difference.', exKo: '병 하나를 헹구는 것이 차이를 만들 수 있다.'}
    ],
    pairs: [
      {a: 'disposable', b: 'reusable', rel: '반대 개념'},
      {a: 'reduce', b: 'increase', rel: '반대말'},
      {a: 'harmful', b: 'harmless', rel: '반대말 (-ful ↔ -less)'},
      {a: 'separate', b: 'mix', rel: '반대 행동'},
      {a: 'recycle', b: 'recycling', rel: '동사 / 명사'}
    ],
    wrap: {en: 'One habit I can change is ______. It can reduce ______.', ko: '오늘 배운 낱말로 내가 바꿀 수 있는 습관 한 문장 쓰기'}
  },

  talk: {
    hook: {en: 'What environmental problem worries you the most?', ko: '어떤 환경 문제가 가장 걱정되나요?', note: '미세먼지, 플라스틱, 기후 변화 등을 칠판에 모은다. “그럼 우리가 할 수 있는 일은?”으로 해결책 제안 표현을 예고한다.'},
    speakers: {Minho: {voice: 1, pitch: 1}, Grace: {voice: 0, pitch: 1.1}, 'Mr. Choi': {voice: 2, pitch: .95}, Suji: {voice: 0, pitch: 1.15}, Tom: {voice: 1, pitch: .95}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Speak 1', func: '걱정 표현하기',
        key: {q: ['What’s wrong? You look worried.', 'What are you worried about?'], a: ['I’m worried about ~.', 'I’m concerned that ~.', 'I can’t stop thinking about ~.']},
        note: 'worried about + 명사(구), concerned that + 문장. 걱정 표현 뒤에는 그 까닭을 한 문장 덧붙이게 한다.',
        dialogs: [
          { title: 'Dialogue A', setting: '학교 매점 앞 분리수거함', lines: [
            {s: 'Grace', en: 'Minho, {{what’s wrong}}? {{You look worried}}.', ko: '민호야, 무슨 일이야? 걱정 있어 보여.'},
            {s: 'Minho', en: 'Look at this recycling bin. {{I’m worried about}} all this food waste in it.', ko: '이 재활용함 좀 봐. 안에 든 음식물 쓰레기가 걱정돼.'},
            {s: 'Grace', en: 'Why? At least people are trying to recycle.', ko: '왜? 그래도 사람들이 재활용하려고 하잖아.'},
            {s: 'Minho', en: '{{I’m concerned that}} the whole bin will be thrown away because of it.', ko: '그것 때문에 통 전체가 버려질까 봐 걱정이야.'},
            {s: 'Grace', en: 'Really? I didn’t know one dirty cup could matter so much.', ko: '정말? 더러운 컵 하나가 그렇게 중요한 줄 몰랐어.'}
          ]},
          { title: 'Dialogue B', setting: '저녁 식사 후, 집', lines: [
            {s: 'A', en: 'Mom, {{what are you worried about}}? You’ve been reading the news for an hour.', ko: '엄마, 뭐가 걱정이세요? 한 시간째 뉴스를 보고 계시네요.'},
            {s: 'B', en: 'This article says plastic is found even in the deepest part of the ocean.', ko: '이 기사에서 플라스틱이 바다의 가장 깊은 곳에서도 발견된대.'},
            {s: 'A', en: 'Wow, that’s terrible.', ko: '와, 끔찍하네요.'},
            {s: 'B', en: '{{I can’t stop thinking about}} how much plastic we use every day.', ko: '우리가 매일 플라스틱을 얼마나 많이 쓰는지 계속 생각나.'}
          ]}
        ],
        check: [
          {q: 'What is Minho worried about?', a: 'He is worried about the food waste in the recycling bin.'},
          {q: 'Why is food waste a problem?', a: 'Because the whole bin can be thrown away because of it.'},
          {q: 'What does the article say?', a: 'Plastic is found even in the deepest part of the ocean.'}
        ],
        drill: {frame: ['A: What are you worried about?', 'B: I’m worried about ____.'], opts: ['plastic in the ocean', 'fine dust', 'food waste', 'rising sea levels', 'disposable cups', 'my exam results']}
      },
      { id: 'lt2', label: 'Listen & Speak 2', func: '해결책 제안하고 답하기',
        key: {q: ['Why don’t we ~?', 'How about ~ing?', 'I suggest (that) we ~.'], a: ['That’s a good idea.', 'Sounds great. Let’s do it.', 'I’m not sure. How about ~ instead?']},
        note: 'How about 뒤에는 -ing(동명사), Why don’t we 뒤에는 동사원형, suggest that 뒤에는 (should) 동사원형.',
        dialogs: [
          { title: 'Dialogue A', setting: '환경 동아리 회의', lines: [
            {s: 'Mr. Choi', en: 'Our school recycling bins are full of the wrong things. Any ideas?', ko: '우리 학교 재활용함에 엉뚱한 것들이 가득해. 아이디어 있니?'},
            {s: 'Suji', en: '{{Why don’t we}} put a poster above each bin?', ko: '통마다 위에 포스터를 붙이는 게 어때요?'},
            {s: 'Tom', en: '{{That’s a good idea}}. We could show pictures of what goes in each bin.', ko: '좋은 생각이야. 통마다 무엇이 들어가는지 사진으로 보여 줄 수 있겠다.'},
            {s: 'Suji', en: 'And {{how about}} {{running}} a “Rinse It First” campaign at lunchtime?', ko: '그리고 점심시간에 “먼저 헹구자” 캠페인을 하는 건 어때요?'},
            {s: 'Mr. Choi', en: '{{Sounds great}}. Let’s start next Monday.', ko: '좋다. 다음 주 월요일부터 시작하자.'}
          ]},
          { title: 'Dialogue B', setting: '카페에서', lines: [
            {s: 'A', en: 'I buy a coffee every morning, so I throw away a lot of cups.', ko: '나는 매일 아침 커피를 사서 컵을 많이 버려.'},
            {s: 'B', en: '{{I suggest that}} you bring your own tumbler.', ko: '텀블러를 가지고 다니는 걸 제안할게.'},
            {s: 'A', en: '{{I’m not sure}}. It’s heavy to carry around.', ko: '글쎄. 들고 다니기 무거운데.'},
            {s: 'B', en: 'Then {{how about}} a foldable cup {{instead}}? It fits in your pocket.', ko: '그럼 대신 접는 컵은 어때? 주머니에 들어가.'}
          ]}
        ],
        check: [
          {q: 'What is Suji’s first idea?', a: 'To put a poster above each bin.'},
          {q: 'When will the campaign start?', a: 'Next Monday.'},
          {q: 'Why doesn’t A want to carry a tumbler?', a: 'Because it is heavy to carry around.'}
        ],
        drill: {frame: ['A: How can we reduce waste at school?', 'B: Why don’t we ____?'], opts: ['bring our own tumblers', 'make recycling posters', 'stop using straws', 'start a swap market', 'rinse our milk cartons', 'use both sides of paper']}
      }
    ],
    interviewEx: 'Jiwoo is worried about disposable cups. She suggests that our class bring tumblers on Fridays.',
    watch: {
      label: 'Let’s Watch', title: 'The Pizza Box Mystery', setting: '분리수거 당번인 두 학생이 기름 묻은 피자 상자를 발견한다.',
      lines: [
        {s: 'Tom', en: 'It’s a paper box, so it goes in the paper bin, right?', ko: '종이 상자니까 종이 통에 넣으면 되지?'},
        {s: 'Suji', en: 'Wait. The bottom is covered with oil and cheese.', ko: '잠깐. 바닥에 기름이랑 치즈가 잔뜩 묻어 있어.'},
        {s: 'Tom', en: 'So what? Paper is paper.', ko: '그래서? 종이는 종이잖아.'},
        {s: 'Suji', en: 'Oily paper can’t be recycled. It can ruin the clean paper, too.', ko: '기름 묻은 종이는 재활용될 수 없어. 깨끗한 종이까지 망칠 수 있어.'},
        {s: 'Tom', en: 'Then why don’t we tear off the clean top and recycle just that part?', ko: '그럼 깨끗한 윗부분만 뜯어서 그 부분만 재활용하는 게 어때?'},
        {s: 'Suji', en: 'Perfect! Small things really matter.', ko: '완벽해! 작은 것이 정말 중요하구나.'}
      ],
      check: [
        {q: 'What is wrong with the pizza box?', a: 'The bottom is covered with oil and cheese.'},
        {q: 'Why can’t oily paper go in the paper bin?', a: 'It can’t be recycled, and it can ruin the clean paper.'},
        {q: 'What does Tom suggest?', a: 'Tearing off the clean top and recycling just that part.'}
      ]
    },
    wrap: {en: 'Tell your partner about an environmental worry and suggest a solution.', ko: '짝에게 환경 걱정을 말하고 해결책 제안하기'}
  },

  grammar: {
    cover: 'be p.p. · S-V',
    hook: {en: 'Oily paper can’t {{be recycled}}.  /  One dirty cup in a bin of clean cans {{ruins}} the whole bin.', ko: '첫 문장의 주어는 동작을 “하는” 쪽일까, “당하는” 쪽일까? 두 번째 문장의 동사는 왜 ruins일까?', answer: 'be recycled = 수동태 (종이가 재활용을 “당한다”) / ruins = 진짜 주어 One dirty cup(단수)에 맞춘 동사', note: '두 번째 문장에서 cans가 동사 바로 앞에 있어서 ruin으로 고르기 쉽다. “누가 망치는가?”를 물어 진짜 주어를 찾게 한다.'},
    points: [
      { id: 'g1', name: '수동태 (be + p.p.)', short: '수동태', form: '주어(당하는 쪽) + be + p.p. (+ by 행위자)', meaning: '~되다, ~당하다',
        notice: [
          {en: 'The waste {{is sorted}} by hand at the facility.', ko: '쓰레기는 시설에서 손으로 분류된다.'},
          {en: 'Most plastic {{has never been recycled}}.', ko: '대부분의 플라스틱은 한 번도 재활용된 적이 없다.'},
          {en: 'Batteries {{should be taken}} to a special bin.', ko: '배터리는 전용 수거함으로 가져가야 한다.'}
        ],
        principle: {
          q: '왜 굳이 문장을 “거꾸로” 쓸까?',
          pic: [{en: 'Workers', ko: '하는 쪽'}, {en: 'sort', ko: '동작'}, {en: 'the waste', ko: '당하는 쪽 → 주어로!', hot: true}],
          core: '수동태는 동작을 당하는 쪽에 초점을 맞추기 위해 그것을 주어 자리에 세운 문장이다. 누가 했는지 모르거나 중요하지 않을 때 쓴다.',
          why: ['재활용 이야기에서 중요한 것은 “누가” 분류했는지보다 “쓰레기가” 어떻게 되는지다.', '목적어가 주어로 올라갔으므로 수동태 동사 뒤에는 목적어가 없다 — 어법 판단의 단서.', '동사 모양: be + p.p. (조동사 뒤에는 be + p.p., 완료형은 have been + p.p.)'],
          note: '기출 어법 단서: 동사 뒤에 목적어가 없고 주어가 동작을 당하면 수동 (2025년 9월 고1 29번 ② If putting → (they are) put).'
        },
        anim: [
          {title: '능동태 → 수동태', why: '목적어가 주어 자리로 올라가고, 원래 주어는 by 뒤로 내려간다.', states: [
            {t: 'Workers/S#workers | sort/V#v | the waste/O#waste | by hand/M#hand | .', note: '능동: 하는 쪽(Workers)이 주어', ko: '작업자들이 손으로 쓰레기를 분류한다.'},
            {t: 'The waste/S#waste | is sorted/X#v | by hand/M#hand | (by workers)/M#workers | .', note: '수동: 당하는 쪽(the waste)이 주어로!', ko: '쓰레기는 (작업자들에 의해) 손으로 분류된다.'}]},
          {title: '조동사가 있을 때: 조동사 + be + p.p.', states: [
            {t: 'We/S#we | can/V#can | recycle/V#rec | these bottles/O#bottles | .', note: '능동', ko: '우리는 이 병들을 재활용할 수 있다.'},
            {t: 'These bottles/S#bottles | can/V#can | be/X | recycled/X#rec | .', note: '조동사는 그대로, 뒤에 be + p.p.', ko: '이 병들은 재활용될 수 있다.'}]}
        ],
        contrast: {title: '하는가, 당하는가 — 동사 뒤를 보라', pairs: [
          {a: 'The company {{collects}} used bottles.', ka: '회사가 헌 병을 수거한다. (뒤에 목적어 있음 → 능동)', b: 'Used bottles {{are collected}} every Monday.', kb: '헌 병은 월요일마다 수거된다. (뒤에 목적어 없음 → 수동)'},
          {a: 'The facility {{has processed}} tons of waste.', ka: '그 시설은 수 톤의 쓰레기를 처리해 왔다.', b: 'Tons of waste {{have been processed}}.', kb: '수 톤의 쓰레기가 처리되어 왔다. (완료 수동 have been p.p.)'}],
          point: '주어가 동작을 하면 능동, 당하면 수동. 동사 뒤에 목적어가 없으면 수동일 가능성이 크다.'},
        rule: [
          {k: '현재·과거', v: 'am/is/are + p.p. / was/were + p.p.', ex: 'The box was thrown away.'},
          {k: '조동사', v: 'can/should/must + be + p.p.', ex: 'Food must be removed first.'},
          {k: '완료', v: 'have/has + been + p.p.', ex: 'The rules have been changed.'},
          {k: '진행', v: 'be + being + p.p.', ex: 'A new facility is being built.'}
        ],
        check: [
          {q: 'Paper cups ____ (make) of paper and plastic.', a: 'are made'},
          {q: 'The bins ____ (empty) every morning.', a: 'are emptied'},
          {q: 'Batteries should ____ (take) to a special bin.', a: 'be taken'},
          {q: 'Workers ____ (remove) plastic bags from the machines yesterday.', a: 'removed'},
          {q: 'A lot of waste ____ (has, send) to landfills so far.', a: 'has been sent'}
        ],
        trap: {bad: 'Plastic bags cannot recycle at this facility.', good: 'Plastic bags cannot be recycled at this facility.', why: '봉지는 재활용을 “당하는” 쪽이다. 동사 뒤에 목적어도 없다 → be + p.p.'},
        scramble: [
          {ko: '이 병들은 재활용될 수 있다.', en: 'These bottles can be recycled.'},
          {ko: '용기는 버리기 전에 헹궈져야 한다.', en: 'Containers should be rinsed before they are thrown away.'},
          {ko: '많은 쓰레기가 매립지로 보내졌다.', en: 'A lot of waste was sent to landfills.'}
        ]
      },
      { id: 'g2', name: '주어·동사 수일치와 문장의 동사', short: '수일치', form: '[진짜 주어 + (수식어구)] + 동사 (진짜 주어의 수에 맞춤)', meaning: '동사는 바로 앞 명사가 아니라 진짜 주어에 맞춘다',
        notice: [
          {en: 'One dirty cup in a bin of clean cans {{ruins}} the whole bin.', ko: '깨끗한 캔 통 속의 더러운 컵 하나가 통 전체를 망친다.'},
          {en: 'The items that people throw in the bin {{are}} often wrong.', ko: '사람들이 통에 던져 넣는 물건들은 종종 잘못되어 있다.'},
          {en: 'Sorting plastic bags by hand {{takes}} hours.', ko: '비닐봉지를 손으로 분류하는 데는 몇 시간이 걸린다.'}
        ],
        principle: {
          q: '동사 바로 앞에 복수 명사가 있는데 왜 단수 동사일까?',
          pic: [{en: 'One cup', ko: '진짜 주어', hot: true}, {en: '( in a bin of clean cans )', ko: '꾸며 주는 말 — 괄호!', arrow: '→'}, {en: 'ruins', ko: '주어에 맞춘 동사'}],
          core: '동사는 문장의 진짜 주어(핵심 명사)와 짝을 맞춘다. 주어 뒤에 붙은 전치사구·관계절·분사구는 괄호로 묶고 건너뛴다.',
          why: ['주어가 길어질수록 동사 바로 앞의 명사에 속기 쉽다 — 그래서 어법 문제에 자주 나온다.', '동명사·to부정사·명사절 주어는 하나의 일로 보아 단수 취급한다.', '한 문장(절)에는 반드시 시제가 있는 동사가 하나 있어야 한다. -ing나 to부정사만으로는 동사가 될 수 없다.'],
          note: '기출: 2026년 3월 고1 29번 ② The files, folders, and icons … helps → help / 2026학년도 수능 29번 ② The package … being → is.'
        },
        anim: [
          {title: '꾸며 주는 말을 괄호로 묶으면', why: '수식어구를 걷어 내면 진짜 주어와 동사가 붙는다.', states: [
            {t: 'One dirty cup/S#cup | in a bin of clean cans/M#mod | ruins/V#v | the whole bin/O#bin | .', note: '동사 바로 앞의 cans에 속지 말 것', ko: '깨끗한 캔 통 속의 더러운 컵 하나가 통 전체를 망친다.'},
            {t: 'One dirty cup/S#cup | ruins/V#v | the whole bin/O#bin | .', note: '수식어구를 걷어 내면: cup(단수) → ruins', ko: '진짜 주어 + 동사가 붙었다'},
            {t: 'Dirty cups/S#cup | in a bin of clean cans/M#mod | ruin/V#v | the whole bin/O#bin | .', note: '주어가 복수면 동사도 복수(ruin)', ko: '더러운 컵들이 통 전체를 망친다.'}]},
          {title: '문장에는 진짜 동사가 꼭 하나 (2026학년도 수능 29번)', states: [
            {t: 'The package of tools/S#pkg | used by any group of foragers/M#used | being/D#v | far too complex/C#c | .', note: 'being은 동사가 아니다 → 이 문장엔 동사가 없다!', ko: ''},
            {t: 'The package of tools/S#pkg | used by any group of foragers/M#used | is/X#v | far too complex/C#c | .', note: '진짜 주어 package(단수) → is', ko: '채집인 무리가 쓰는 도구 꾸러미는 너무나 복잡하다.'}]}
        ],
        contrast: {title: '헷갈리는 주어들', pairs: [
          {a: 'The number of plastic bottles {{is}} rising.', ka: '플라스틱 병의 수가 늘고 있다. (주어 the number → 단수)', b: 'A number of plastic bottles {{are}} found in the sea.', kb: '많은 플라스틱 병이 바다에서 발견된다. (a number of = 많은 → 복수)'},
          {a: 'Each of the bins {{has}} a label.', ka: '통 각각에 라벨이 있다. (each → 단수)', b: 'Most of the waste {{is}} burned. / Most of the cans {{are}} recycled.', kb: '대부분의 쓰레기는 태워진다. / 대부분의 캔은 재활용된다. (most of 뒤 명사에 맞춤)'}],
          point: '주어의 “핵심”을 찾아라. 부분 표현(most of, some of, half of)은 뒤의 명사에 맞춘다.'},
        rule: [
          {k: '전치사구', v: 'S [of / in / with ~] V', ex: 'The color of the bottles is green.'},
          {k: '관계절·분사구', v: 'S [that ~ / -ing ~ / p.p. ~] V', ex: 'Items thrown in the wrong bin are burned.'},
          {k: '동명사·명사절', v: '-ing ~ / What ~ / That ~ + 단수 동사', ex: 'Rinsing bottles takes only a minute.'},
          {k: '문장의 동사', v: '한 절에 시제 있는 동사 하나 (-ing, to-v는 동사 아님)', ex: 'Experts have deep knowledge. (✗ having)'}
        ],
        check: [
          {q: 'The bottles in the box ____ (be) clean.', a: 'are'},
          {q: 'Recycling plastic bags ____ (be) difficult.', a: 'is'},
          {q: 'The workers who sort the waste ____ (wear) gloves.', a: 'wear'},
          {q: 'One of the bins ____ (be) full.', a: 'is'},
          {q: 'The rules for separating waste ____ (differ) from city to city.', a: 'differ'}
        ],
        trap: {bad: 'The labels on the bottle needs to be removed.', good: 'The labels on the bottle need to be removed.', why: '진짜 주어는 labels(복수). on the bottle은 괄호로 묶고 건너뛴다.'},
        scramble: [
          {ko: '분리수거함 속의 음식물 쓰레기가 문제다.', en: 'Food waste in the recycling bins is the problem.'},
          {ko: '병을 헹구는 데는 1분밖에 걸리지 않는다.', en: 'Rinsing a bottle takes only a minute.'},
          {ko: '잘못된 통에 버려진 물건들은 태워진다.', en: 'Items thrown in the wrong bin are burned.'}
        ]
      }
    ],
    wrap: {en: '______ should be ______ before ______. ______ in the bins ______ a problem.', ko: '수동태 한 문장, 긴 주어 + 수일치 한 문장으로 분리배출 규칙 쓰기'},
    wrapEx: 'Milk cartons should be rinsed before they are recycled. Food waste in the paper bins is a big problem.'
  },

  reading: {
    title: 'Wishful Recycling', kind: '칼럼', cover: 'Wish', coverKo: '버리면서 비는 소원', cover2: 'Small', coverKo2: '작은 것이 중요하다',
    before: [
      {q: 'Have you ever put something in the recycling bin without being sure it was recyclable?', a: '많은 학생이 “그렇다”고 답한다 — 그것이 오늘 글의 주제.'},
      {q: 'Look at the title. What could “wishful recycling” mean?', a: '재활용되기를 “바라며” 아무것이나 재활용함에 넣는 것'}
    ],
    gloss: {wishcycling: '희망 재활용', batch: '한 묶음, 한 회분', greasy: '기름이 묻은', lining: '안감, 내부 코팅', jam: '(기계를) 막다', tangle: '엉키다', conveyor: '컨베이어(운반 벨트)', 'sorting center': '선별장', burned: '태워진', rinsed: '헹궈진', slogan: '구호', 'mixed': '섞인'},
    paras: [
      {who: '', en: 'You finish your iced coffee and look at the empty cup. It is made of plastic, so you drop it into the recycling bin — ice, straw, and all. You feel good. You have done something for the planet. But have you? The answer may surprise you.',
       ko: '아이스커피를 다 마시고 빈 컵을 본다. 플라스틱으로 만들어졌으니 재활용함에 넣는다. 얼음, 빨대 할 것 없이 통째로. 기분이 좋다. 지구를 위해 뭔가를 했다. 그런데 정말 그럴까? 답은 놀라울 수도 있다.',
       check: {q: 'What does the person put in the recycling bin?', a: 'An iced coffee cup with ice and a straw.'}, think: '나도 이렇게 버린 적이 있나?',
       bg: {src: 'h1/donga1/l3/img/r-p0.jpg', credit: 'PattayaPatrol · CC BY-SA 2.0 (Flickr)', link: 'https://www.flickr.com/photos/194424926@N05/54562185444', about: '플라스틱 컵에 담긴 아이스커피'}},
      {who: 'What Is Wishcycling?', en: 'Putting something in the recycling bin and simply hoping that it will be recycled is called “wishcycling.” It is usually done with good intentions. People think, “It might be recyclable, so why not?” Unfortunately, good intentions are not enough. Items that cannot be recycled cause serious problems for the whole system.',
       ko: '무언가를 재활용함에 넣고 그것이 재활용되기를 그저 바라는 것을 “희망 재활용(wishcycling)”이라고 한다. 이것은 대개 좋은 의도로 행해진다. 사람들은 “재활용될지도 모르는데 넣으면 어때?”라고 생각한다. 안타깝게도 좋은 의도만으로는 충분하지 않다. 재활용될 수 없는 물건들은 시스템 전체에 심각한 문제를 일으킨다.',
       check: {q: 'What is wishcycling?', a: 'Putting something in the recycling bin and hoping it will be recycled.'}, think: '좋은 의도가 나쁜 결과를 낳는 다른 예는?',
       bg: {src: 'h1/donga1/l3/img/r-p1.jpg', credit: 'Bombardier · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/42345348@N00/9355920', about: '재활용 수거함'}},
      {who: 'One Small Mistake', en: 'Recyclables are collected in large batches. If food or liquid is left in containers, it can contaminate the paper and cardboard around it. One greasy pizza box in a bin of clean paper ruins much more than itself. When a batch is too contaminated, the whole load is often sent to a landfill or burned instead of being recycled.',
       ko: '재활용품은 큰 묶음으로 수거된다. 용기 안에 음식이나 액체가 남아 있으면 주변의 종이와 골판지를 오염시킬 수 있다. 깨끗한 종이 통 속 기름 묻은 피자 상자 하나는 자기 자신보다 훨씬 많은 것을 망친다. 한 묶음이 너무 오염되면 짐 전체가 재활용되는 대신 매립지로 보내지거나 태워지는 경우가 많다.',
       check: {q: 'What can happen to a contaminated batch?', a: 'It can be sent to a landfill or burned.'}, think: '피자 상자 하나가 왜 그렇게 큰 문제일까?',
       bg: {src: 'h1/donga1/l3/img/r-p2.jpg', credit: 'merfam · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/74288833@N00/9540989122', about: '기름 묻은 피자 상자'}},
      {who: 'Tricky Items', en: 'Some items look recyclable but are not. Many paper cups, for example, have a thin plastic lining that is hard to separate from the paper. Plastic bags, which seem harmless, tangle around the machines at sorting centers. Tiny items such as bottle caps or straws fall through the machines and are lost. Batteries are even more dangerous because they can start fires.',
       ko: '어떤 물건들은 재활용될 것처럼 보이지만 그렇지 않다. 예를 들어 많은 종이컵에는 종이와 분리하기 어려운 얇은 플라스틱 코팅이 있다. 무해해 보이는 비닐봉지는 선별장의 기계에 엉킨다. 병뚜껑이나 빨대 같은 작은 물건은 기계 사이로 빠져 사라진다. 배터리는 불을 낼 수 있어서 더욱 위험하다.',
       check: {q: 'Why are paper cups hard to recycle?', a: 'Because they have a thin plastic lining that is hard to separate.'}, think: '이 중 내가 가장 자주 잘못 버리는 것은?',
       bg: {src: 'h1/donga1/l3/img/r-p3.jpg', credit: 'skinnydiver · CC BY-SA 2.0 (Flickr)', link: 'https://www.flickr.com/photos/53197929@N00/5410911300', about: '종이컵 더미'}},
      {who: 'Inside a Sorting Center', en: 'At a sorting center, mixed recyclables travel along fast conveyor belts. Machines and workers separate them by material. Every time a plastic bag jams a machine, the line has to be stopped, and workers must climb in to cut the bags out by hand. The time spent on wrong items is time that cannot be spent on real recycling.',
       ko: '선별장에서는 섞인 재활용품이 빠른 컨베이어 벨트를 따라 이동한다. 기계와 작업자들이 그것들을 재질별로 분리한다. 비닐봉지가 기계를 막을 때마다 라인을 멈춰야 하고, 작업자들은 안으로 들어가 봉지를 손으로 잘라 내야 한다. 잘못된 물건에 쓰인 시간은 진짜 재활용에 쓰일 수 없는 시간이다.',
       check: {q: 'What happens when a plastic bag jams a machine?', a: 'The line has to be stopped, and workers cut the bags out by hand.'}, think: '선별장 작업자에게 우리는 무엇을 도울 수 있을까?',
       bg: {src: 'h1/donga1/l3/img/r-p4.jpg', credit: 'CDEGlobal · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/38623163@N07/7788487174', about: '재활용 선별장의 컨베이어 벨트'}},
      {who: 'Empty, Rinse, Separate', en: 'In Korea, people are encouraged to follow four simple steps: empty, rinse, separate, and do not mix. Containers are emptied and rinsed with a little water. Labels and caps that are made of different materials are separated from bottles. Each material goes into its own bin. These steps take less than a minute, but they decide whether an item gets a second life.',
       ko: '한국에서는 사람들에게 네 가지 간단한 단계를 따르도록 권한다. 비우고, 헹구고, 분리하고, 섞지 않는 것이다. 용기는 비우고 물을 조금 넣어 헹군다. 다른 재질로 만들어진 라벨과 뚜껑은 병에서 분리한다. 각 재질은 자기 통으로 들어간다. 이 단계들은 1분도 걸리지 않지만, 물건이 두 번째 삶을 얻을지 결정한다.',
       check: {q: 'What are the four steps?', a: 'Empty, rinse, separate, and do not mix.'}, think: '네 단계 중 가장 자주 빠뜨리는 것은?',
       bg: {src: 'h1/donga1/l3/img/r-p5.jpg', credit: 'nist6ss · CC BY-SA 2.0 (Flickr)', link: 'https://www.flickr.com/photos/53771866@N05/6350418468', about: '플라스틱 병들'}},
      {who: 'When in Doubt', en: 'What should you do when you are not sure? Many experts give the same advice: “When in doubt, throw it out.” It sounds strange, but one item in the trash does far less harm than one item that contaminates a whole batch. Better still, check your local rules, which are often posted online or near the bins.',
       ko: '확실하지 않을 때는 어떻게 해야 할까? 많은 전문가들이 같은 조언을 한다. “확실하지 않으면 일반 쓰레기로 버려라.” 이상하게 들리지만, 쓰레기통 속 물건 하나는 한 묶음 전체를 오염시키는 물건 하나보다 훨씬 피해가 적다. 더 좋은 방법은 지역 규칙을 확인하는 것이다. 규칙은 흔히 온라인이나 수거함 근처에 게시되어 있다.',
       check: {q: 'What do experts advise when you are not sure?', a: '“When in doubt, throw it out.”'}, think: '이 조언에 동의하나? 왜 그런가?',
       bg: {src: 'h1/donga1/l3/img/r-p6.jpg', credit: 'Alabama Extension · CC0 1.0 (Flickr)', link: 'https://www.flickr.com/photos/184594136@N08/52325019478', about: '“플라스틱만” 안내 표지판'}},
      {who: 'Small Things Matter', en: 'Of course, the best waste is the waste that is never made. Reducing and reusing come before recycling. But when something must be thrown away, the small things matter: a rinsed cup, a removed label, a bag that goes in the right place. A planet is not saved by one big act. It is saved by millions of small ones, done right.',
       ko: '물론 가장 좋은 쓰레기는 아예 만들어지지 않는 쓰레기다. 줄이기와 다시 쓰기가 재활용보다 먼저다. 하지만 무언가를 버려야 할 때는 작은 것들이 중요하다. 헹군 컵 하나, 떼어 낸 라벨 하나, 제자리에 들어간 봉지 하나. 지구는 하나의 큰 행동으로 구해지지 않는다. 제대로 된 수백만 개의 작은 행동으로 구해진다.',
       check: {q: 'What comes before recycling?', a: 'Reducing and reusing.'}, think: '내가 이번 주에 바꿀 작은 습관 하나는?'}
    ],
    coverImg: {src: 'h1/donga1/l3/img/r-cover.jpg', credit: 'Wesley Fryer · CC BY-SA 2.0 (Flickr)', link: 'https://www.flickr.com/photos/31442459@N00/3306387682'},
    coverImg2: {src: 'h1/donga1/l3/img/r-cover2.jpg', credit: 'Reciclado Creativo - The Reuse Factory · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/99012508@N06/9357572424'},
    split: 4,
    next: '재활용하기 어려운 물건에는\n또 무엇이 있을까?',
    recap: {q: '희망 재활용이란 무엇이고 왜 문제일까?', items: [{k: 'WISHCYCLING', v: 'putting items in the bin and hoping they will be recycled'}, {k: 'PROBLEM', v: 'one contaminated item → a whole batch sent to a landfill'}]},
    tf: [
      {p: 0, s: 'The person rinses the cup before recycling it.', a: false, why: '얼음과 빨대까지 통째로 넣는다.'},
      {p: 1, s: 'Wishcycling is usually done with bad intentions.', a: false, why: '대개 좋은 의도로 행해진다.'},
      {p: 2, s: 'A contaminated batch may be burned.', a: true},
      {p: 3, s: 'Plastic bags can damage sorting machines.', a: true},
      {p: 4, s: 'Workers cut plastic bags out of the machines by hand.', a: true},
      {p: 5, s: 'The four steps take more than ten minutes.', a: false, why: '1분도 걸리지 않는다.'},
      {p: 6, s: 'Experts say you should recycle anything you are not sure about.', a: false, why: '확실하지 않으면 일반 쓰레기로 버리라고 한다.'},
      {p: 7, s: 'The writer thinks reducing waste is more important than recycling.', a: true}
    ],
    key: [
      {en: 'Putting something in the bin and simply hoping it will be recycled {{is called}} “wishcycling.”', note: '동명사 주어(단수) + 수동태 is called', g: 'g2'},
      {en: 'One greasy pizza box in a bin of clean paper {{ruins}} much more than itself.', note: '진짜 주어 box(단수) → ruins', g: 'g2'},
      {en: 'The whole load {{is often sent}} to a landfill or burned.', note: '수동태 (보내진다, 태워진다)', g: 'g1'},
      {en: 'The line {{has to be stopped}}.', note: '조동사 has to + be + p.p.', g: 'g1'},
      {en: 'Labels and caps that are made of different materials {{are separated}} from bottles.', note: '긴 주어(복수) + 수동태', g: 'g2'},
      {en: 'A planet {{is not saved}} by one big act.', note: '수동태 + by 행위자', g: 'g1'}
    ],
    summary: {text: '“Wishcycling” means putting items in the bin and hoping they will {{be recycled}}. One contaminated item can {{ruin}} a whole batch, which is then sent to a {{landfill}}. Paper cups, plastic bags, and batteries are {{tricky}} items. Following four steps — empty, {{rinse}}, separate, and do not mix — helps, and reducing waste comes first.'},
    order: ['A dirty container is put in the recycling bin.', 'It contaminates the paper around it.', 'The batch becomes too dirty to recycle.', 'The whole load is sent to a landfill.'],
    chart: {title: 'TRICKY ITEMS', ko: '재활용이 어려운 물건 정리', cols: ['Why it is tricky', 'What to do'], note: '표를 보고 “___ cannot be recycled because ~.” “___ should be ~.” 수동태 문장으로 말하게 한다.', rows: [
      {name: 'Paper cups', cells: ['plastic lining', 'check local rules']},
      {name: 'Plastic bags', cells: ['tangle machines', 'keep out of the bin']},
      {name: 'Pizza boxes', cells: ['grease', 'recycle only clean parts']},
      {name: 'Batteries', cells: ['can start fires', 'special collection bin']}
    ]},
    wrap: {en: 'The small habit I will change: ______. It matters because ______.', ko: '관통 질문으로 돌아가기: 내가 바꿀 작은 습관과 그 까닭 쓰기'}
  },

  quiz: [
    ['“오염시키다”를 뜻하는 낱말은?', ['recycle', 'contaminate', 'separate', 'reduce'], 1, 'contaminate'],
    ['“쓰레기 매립지”를 뜻하는 낱말은?', ['facility', 'container', 'landfill', 'material'], 2, 'landfill'],
    ['disposable의 반대 개념은?', ['recyclable', 'reusable', 'harmful', 'separate'], 1, 'disposable(일회용) ↔ reusable(다시 쓸 수 있는)'],
    ['recycle의 re-가 뜻하는 것은?', ['아닌', '다시', '멀리', '하나'], 1, 're- = 다시'],
    ['걱정을 표현하는 말이 아닌 것은?', ['I’m worried about it.', 'I’m concerned that it will rain.', 'I can’t stop thinking about it.', 'Why don’t we rinse it?'], 3, '④는 제안'],
    ['빈칸에 알맞은 것은? “How about ____ a poster?”', ['make', 'to make', 'making', 'made'], 2, 'How about + -ing'],
    ['빈칸에 알맞은 것은? “These bottles can ____.”', ['recycle', 'be recycled', 'recycled', 'be recycling'], 1, '조동사 + be + p.p.'],
    ['빈칸에 알맞은 것은? “Workers ____ the waste by hand.”', ['sort', 'are sorted', 'is sorting', 'be sorted'], 0, '작업자가 하는 쪽 → 능동'],
    ['어법상 틀린 문장은?', ['The bins are emptied daily.', 'Batteries should be taken away.', 'Plastic bags cannot recycle here.', 'The rules have been changed.'], 2, 'cannot be recycled'],
    ['빈칸에 알맞은 것은? “The labels on the bottle ____ removed.”', ['need to be', 'needs to be', 'needing', 'to need'], 0, '진짜 주어 labels(복수)'],
    ['어법상 틀린 문장은?', ['Rinsing bottles takes time.', 'One of the bins is full.', 'The cans in the box is clean.', 'The number of bins is small.'], 2, 'The cans … are clean'],
    ['wishcycling에 대한 설명으로 맞는 것은?', ['나쁜 의도로 한다', '재활용되기를 바라며 아무것이나 넣는다', '쓰레기를 줄이는 운동이다', '재활용품을 파는 것이다'], 1, 'hoping that it will be recycled'],
    ['비닐봉지가 문제가 되는 까닭은?', ['불을 낸다', '기계에 엉킨다', '너무 무겁다', '물에 녹는다'], 1, 'tangle around the machines'],
    ['한국의 분리배출 네 단계가 아닌 것은?', ['비우기', '헹구기', '섞기', '분리하기'], 2, 'do not mix'],
    ['글쓴이의 주장으로 알맞은 것은?', ['모든 것을 재활용함에 넣어야 한다', '작은 행동을 제대로 하는 것이 중요하다', '재활용은 소용없다', '쓰레기는 태워야 한다'], 1, 'millions of small ones, done right']
  ]
};
