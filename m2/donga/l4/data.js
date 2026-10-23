/* 중2 영어(동아·윤정미) Lesson 4 · Are You Money Smart?
   교과서 대조(2026-10): 의사소통 기능(물건 사기 — 찾는 물건 말하기 · 다른 물건 보여 달라고 하기 · 사겠다고 말하기), 언어 형식(주격 관계대명사 which/who · 조건의 if),
   읽기 주제(Be a Smart Shopper — 소비자의 결정에 영향을 주는 마케팅 전략), 단원 어휘를 교과서 본문 어휘와 맞췄다.
   대화문·읽기 글은 저작권 때문에 교과서 원문을 싣지 않고, 같은 주제·같은 언어 형식·교과서 어휘로 새로 쓴 글이다. */
window.LESSON = {
  book: 'm2-donga', no: 4,
  title: 'Are You Money Smart?', ko: '나는 돈을 현명하게 쓸까?',
  bigQ: {en: 'How can we make smart choices when we shop?', ko: '물건을 살 때 어떻게 현명하게 선택할 수 있을까?'},
  align: {
    tb: {reading: 'Be a Smart Shopper', funcs: ['물건 사기 1 (I’m looking for ~.)', '물건 사기 2 (Can you show me something else?)', '물건 사기 3 (I’ll take it.)'], forms: ['주격 관계대명사 which / who', '조건의 if'],
      note: '교과서 읽기는 소비자의 결정에 영향을 주는 마케팅 전략 세 가지(바이럴 마케팅, 헝거 마케팅, 앵커링 효과)를 사례로 설명하는 글. 여기 본문은 다른 세 전략(끝자리 9 가격, 미끼 상품, 계산대 앞 진열)으로 새로 쓴 글이다.'},
    std: {vocab: ['9영01-01', '9영02-01'], talk: ['9영01-02', '9영02-10'], grammar: ['9영02-05'], read1: ['9영01-04', '9영01-06'], read2: ['9영01-09', '9영02-06']},
    forms: ['Relative Clauses', 'Real Conditionals']
  },
  goals: {
    vocab: ['소비·마케팅과 관련된 낱말 20개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 나의 소비 습관을 한 문장으로 말할 수 있다.'],
    talk: ['가게에서 찾는 물건을 말하고(I’m looking for ~.), 다른 물건을 보여 달라고 하고(Can you show me something else?), 사겠다고 말할 수 있다(I’ll take it.).', '가격을 묻고 답할 수 있다. (How much is it? — It’s ~.)'],
    grammar: ['주격 관계대명사 which / who / that으로 명사를 뒤에서 꾸밀 수 있다.', '조건의 if절(현재형)과 주절(will)로 조건과 결과를 말할 수 있다.'],
    read1: ['마케팅 전략을 설명하는 글을 읽고 첫 번째 전략이 어떻게 소비자를 움직이는지 파악할 수 있다.'],
    read2: ['세 가지 전략을 비교하고, 현명한 소비자가 되기 위한 나의 규칙을 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'Why did you buy the last thing you bought?', ko: '가장 최근에 산 물건은 왜 샀나요?', note: '필요해서, 할인해서, 친구가 사서, 광고를 봐서 등 까닭을 모은다. 내 결정에 영향을 준 것이 무엇인지 생각해 보게 한다.'},
    words: [
      {w: 'marketing', pos: 'n.', ko: '마케팅, 판매 활동', ic: '📣', ex: 'Stores use smart marketing.', exKo: '가게들은 영리한 마케팅을 쓴다.'},
      {w: 'strategy', pos: 'n.', ko: '전략', ic: '♟️', ex: 'This is a popular strategy.', exKo: '이것은 인기 있는 전략이다.'},
      {w: 'influence', pos: 'v. / n.', ko: '영향을 주다; 영향', ic: '🧲', audio: 'assets/audio/influence.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Ads influence our decisions.', exKo: '광고는 우리의 결정에 영향을 준다.'},
      {w: 'decision', pos: 'n.', ko: '결정', ic: '⚖️', audio: 'assets/audio/decision.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'It was a quick decision.', exKo: '그것은 빠른 결정이었다.'},
      {w: 'product', pos: 'n.', ko: '제품, 상품', ic: '📦', audio: 'assets/audio/product.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'This product is very popular.', exKo: '이 제품은 아주 인기 있다.'},
      {w: 'customer', pos: 'n.', ko: '손님, 고객', ic: '🧑‍🤝‍🧑', ex: 'The store was full of customers.', exKo: '가게는 손님으로 가득했다.'},
      {w: 'salesperson', pos: 'n.', ko: '판매원', ic: '🧑‍💼', ex: 'The salesperson showed me a cap.', exKo: '판매원이 나에게 모자를 보여 주었다.'},
      {w: 'price', pos: 'n.', ko: '가격', ic: '🏷️', audio: 'assets/audio/price.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Check the price first.', exKo: '먼저 가격을 확인해라.'},
      {w: 'budget', pos: 'n.', ko: '예산', ic: '💰', audio: 'assets/audio/budget.mp3', audioCredit: 'Wikimedia Commons contributor · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'My budget is 20,000 won.', exKo: '내 예산은 2만 원이다.'},
      {w: 'discount', pos: 'n.', ko: '할인', ic: '🔻', audio: 'assets/audio/discount.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'There is a 30% discount today.', exKo: '오늘 30퍼센트 할인이 있다.'},
      {w: 'limited', pos: 'adj.', ko: '한정된, 제한된', ic: '⏳', audio: 'assets/audio/limited.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'It’s a limited sale.', exKo: '그것은 기간 한정 할인이다.'},
      {w: 'similar', pos: 'adj.', ko: '비슷한', ic: '🟰', audio: 'assets/audio/similar.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'These two bags look similar.', exKo: '이 두 가방은 비슷해 보인다.'},
      {w: 'compare', pos: 'v.', ko: '비교하다', ic: '🔍', audio: 'assets/audio/compare.mp3', audioCredit: 'TreeMama · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Compare the prices before you buy.', exKo: '사기 전에 가격을 비교해라.'},
      {w: 'choose', pos: 'v.', ko: '고르다 (과거 chose)', ic: '👆', audio: 'assets/audio/choose.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Most people choose the large size.', exKo: '대부분의 사람은 큰 사이즈를 고른다.'},
      {w: 'effect', pos: 'n.', ko: '효과', ic: '✨', audio: 'assets/audio/effect.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'This is called the decoy effect.', exKo: '이것은 미끼 효과라고 불린다.'},
      {w: 'realize', pos: 'v.', ko: '깨닫다', ic: '💡', audio: 'assets/audio/realize.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'I realized it was too expensive.', exKo: '나는 그것이 너무 비싸다는 것을 깨달았다.'},
      {w: 'spread', pos: 'v.', ko: '퍼지다 (과거 spread)', ic: '📶', audio: 'assets/audio/spread.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'News spreads quickly online.', exKo: '소식은 온라인에서 빠르게 퍼진다.'},
      {w: 'checkout', pos: 'n.', ko: '계산대', ic: '🛒', ex: 'There is candy near the checkout.', exKo: '계산대 근처에 사탕이 있다.'},
      {w: 'popular', pos: 'adj.', ko: '인기 있는', ic: '🔥', audio: 'assets/audio/popular.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'It’s the most popular size.', exKo: '그것이 가장 인기 있는 사이즈다.'},
      {w: 'naturally', pos: 'adv.', ko: '자연스럽게, 당연히', ic: '🌿', audio: 'assets/audio/naturally.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'People naturally look at the middle shelf.', exKo: '사람들은 자연스럽게 가운데 선반을 본다.'}
    ],
    phrases: [
      {w: 'I’m looking for ~.', ko: '~을 찾고 있어요.', ex: 'I’m looking for a gift for my sister.', exKo: '여동생 선물을 찾고 있어요.'},
      {w: 'Can you show me something else?', ko: '다른 것을 보여 주시겠어요?', ex: 'Well, can you show me something else?', exKo: '음, 다른 걸 보여 주시겠어요?'},
      {w: 'I’ll take it.', ko: '그걸로 살게요.', ex: 'It’s perfect. I’ll take it.', exKo: '딱 좋아요. 그걸로 살게요.'},
      {w: 'fall for', ko: '~에 속아 넘어가다', ex: 'Don’t fall for that trick.', exKo: '그 속임수에 넘어가지 마라.'},
      {w: 'Hold on!', ko: '잠깐만!', ex: 'Hold on! Check the price first.', exKo: '잠깐! 먼저 가격을 확인해.'},
      {w: 'on sale', ko: '할인 중인', ex: 'These shoes are on sale.', exKo: '이 신발은 할인 중이다.'}
    ],
    pairs: [
      {a: 'decide', b: 'decision', rel: '동사 / 명사'},
      {a: 'expensive', b: 'cheap', rel: '반대말'},
      {a: 'limit', b: 'limited', rel: '명사 / 형용사'},
      {a: 'natural', b: 'naturally', rel: '형용사 / 부사'}
    ],
    wrap: {en: 'When I shop, I ______. A smart shopper ______.', ko: '오늘 배운 낱말로 나의 소비 습관과 현명한 소비자의 모습 쓰기'}
  },

  talk: {
    hook: {en: 'What do you say in a store?', ko: '가게에서 물건을 살 때 어떤 말을 하나요?', note: '“이거 얼마예요?”, “다른 색 있어요?”, “이걸로 할게요.” 같은 말을 모은다. 물건을 사는 순서대로 영어 표현을 정리한다.'},
    speakers: {Junho: {voice: 1, pitch: 1}, Clerk: {voice: 2, pitch: 1.05}, Somi: {voice: 0, pitch: 1.15}, Ben: {voice: 1, pitch: .95}, Mom: {voice: 2, pitch: 1.1}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '물건 사기 1 · 2 (찾는 물건 말하기 · 다른 것 보여 달라고 하기)',
        key: {q: ['May I help you?', 'How about this one?'], a: ['I’m looking for ~.', 'Can you show me something else?', 'Do you have it in a different color?']},
        note: '찾는 물건은 I’m looking for ~.로 말한다. 마음에 들지 않으면 Can you show me something else?로 다른 것을 보여 달라고 한다.',
        dialogs: [
          { title: 'Dialogue A', setting: '토요일 오후, 문구점', lines: [
            {s: 'Clerk', en: 'Hello. May I help you?', ko: '안녕하세요. 도와드릴까요?'},
            {s: 'Junho', en: 'Yes, please. {{I’m looking for}} a birthday gift for my sister. She’s twelve.', ko: '네. 여동생 생일 선물을 찾고 있어요. 열두 살이에요.'},
            {s: 'Clerk', en: 'How about this pencil case?', ko: '이 필통은 어때요?'},
            {s: 'Junho', en: 'Hmm, she already has one. {{Can you show me something else}}?', ko: '음, 이미 하나 있어요. 다른 걸 보여 주시겠어요?'},
            {s: 'Clerk', en: 'Sure. How about these hairpins, then?', ko: '물론이죠. 그럼 이 머리핀들은 어때요?'}
          ]},
          { title: 'Dialogue B', setting: '운동화 가게', lines: [
            {s: 'A', en: 'I’m looking for running shoes.', ko: '운동화를 찾고 있어요.'},
            {s: 'B', en: 'These are very popular these days.', ko: '이게 요즘 아주 인기 있어요.'},
            {s: 'A', en: 'They look nice. {{Do you have them in a different color}}?', ko: '멋지네요. 다른 색깔도 있나요?'},
            {s: 'B', en: 'Yes. We have them in blue and black.', ko: '네. 파란색과 검은색이 있어요.'}
          ]}
        ],
        check: [
          {q: 'What is Junho looking for?', a: 'A birthday gift for his sister.'},
          {q: 'Why doesn’t Junho want the pencil case?', a: 'His sister already has one.'},
          {q: 'What colors do the shoes come in?', a: 'Blue and black.'}
        ],
        drill: {frame: ['A: May I help you?', 'B: Yes. I’m looking for ____.'], opts: ['a cap', 'a gift for my mom', 'a backpack', 'a phone case', 'running shoes', 'a notebook']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '물건 사기 3 (가격 묻기 · 사겠다고 말하기)',
        key: {q: ['How much is it? / How much are they?'], a: ['It’s ~ won.', 'They’re ~ dollars each.', 'I’ll take it. / I’ll take two of them.']},
        note: '한 개면 How much is it?, 여러 개면 How much are they?. 사기로 정했으면 I’ll take it(them).',
        dialogs: [
          { title: 'Dialogue A', setting: '문구점 (Dialogue A에 이어서)', lines: [
            {s: 'Junho', en: 'Oh, they’re so pretty! {{How much are they}}?', ko: '와, 정말 예쁘다! 얼마예요?'},
            {s: 'Clerk', en: '{{They’re}} 3,000 won each. If you buy two, you’ll get a discount.', ko: '하나에 3천 원이에요. 두 개 사시면 할인해 드려요.'},
            {s: 'Junho', en: 'Then {{I’ll take two of them}}.', ko: '그럼 두 개 살게요.'},
            {s: 'Clerk', en: 'That’s 5,000 won.', ko: '5천 원입니다.'}
          ]},
          { title: 'Dialogue B', setting: '전통 과자 가게', lines: [
            {s: 'Somi', en: 'I’m looking for traditional Korean cookies.', ko: '한국 전통 과자를 찾고 있어요.'},
            {s: 'Clerk', en: 'We have many kinds. Here, try one of these.', ko: '여러 가지가 있어요. 여기, 하나 드셔 보세요.'},
            {s: 'Somi', en: 'It’s sweet and delicious. {{How much is}} this box?', ko: '달고 맛있네요. 이 상자는 얼마예요?'},
            {s: 'Clerk', en: 'It’s 8,000 won. We’re having a sale today.', ko: '8천 원이에요. 오늘 할인 중이에요.'},
            {s: 'Somi', en: 'OK, {{I’ll take it}}.', ko: '좋아요, 그걸로 살게요.'}
          ]}
        ],
        check: [
          {q: 'How much is one hairpin?', a: '3,000 won.'},
          {q: 'How much does Junho pay for two hairpins?', a: '5,000 won.'},
          {q: 'How much is the box of cookies?', a: '8,000 won.'}
        ],
        drill: {frame: ['A: How much is ____?', 'B: It’s ____ won.', 'A: I’ll take it.'], opts: ['this cap', 'that bag', 'this notebook', 'the blue one', 'this T-shirt', 'that umbrella']}
      }
    ],
    interviewEx: 'Somi bought a box of cookies for 8,000 won. She said, “I’ll take it.”',
    watch: {
      label: 'Let’s Watch', title: 'Is It Really a Good Deal?', setting: '영화관 매점. 벤과 엄마가 팝콘 크기를 고른다.',
      lines: [
        {s: 'Ben', en: 'Mom, I want a small popcorn. It’s 3,000 won.', ko: '엄마, 작은 팝콘 먹을래요. 3천 원이에요.'},
        {s: 'Mom', en: 'Look. The medium one is 6,000 won, and the large one is 6,500 won.', ko: '봐. 중간 크기는 6천 원이고 큰 건 6천5백 원이야.'},
        {s: 'Ben', en: 'Wow, the large one is only 500 won more! I’ll take the large one.', ko: '와, 큰 게 겨우 5백 원 더 비싸요! 큰 걸로 할래요.'},
        {s: 'Mom', en: 'Hold on, Ben. Can you eat all of it?', ko: '잠깐, 벤. 그걸 다 먹을 수 있니?'},
        {s: 'Ben', en: 'Hmm, no. Maybe I’m falling for a strategy. I’ll take the small one.', ko: '음, 아니요. 전략에 넘어가는 건지도 몰라요. 작은 걸로 할게요.'}
      ],
      check: [
        {q: 'How much is the large popcorn?', a: '6,500 won.'},
        {q: 'Why did Ben want the large one?', a: 'It was only 500 won more than the medium one.'},
        {q: 'What did Ben choose in the end?', a: 'The small one.'}
      ]
    },
    wrap: {en: 'Role-play a shop: look for something, ask for something else, ask the price, and decide.', ko: '가게 역할극: 찾는 물건 말하기 → 다른 것 보여 달라고 하기 → 가격 묻기 → 사기'}
  },

  grammar: {
    cover: 'which · if',
    hook: {en: 'There are strategies {{which}} influence your decisions.  /  {{If}} a product becomes popular, people naturally want it.', ko: 'which는 어떤 말을 설명할까? If 덩어리는 무엇을 알려 줄까?', answer: 'which influence ~ → 앞의 strategies를 꾸밈(주격 관계대명사) / If ~ → 조건(만약 ~하면)', note: '교과서 언어 형식(There are marketing strategies which influence your decisions. / If a product becomes hot, people naturally want to have it.)과 같은 짜임이다.'},
    points: [
      { id: 'g1', name: '주격 관계대명사', short: '주격 관계대명사', form: '명사(사물) + which / that + 동사 / 명사(사람) + who / that + 동사', meaning: '~하는 (명사)',
        notice: [
          {en: 'There are strategies {{which}} influence your decisions.', ko: '여러분의 결정에 영향을 주는 전략들이 있다.'},
          {en: 'Customers {{who}} see “9,900 won” think it is cheap.', ko: '“9,900원”을 보는 손님들은 그것이 싸다고 생각한다.'},
          {en: 'Look at the candy {{that}} is near the checkout.', ko: '계산대 근처에 있는 사탕을 보아라.'}
        ],
        rule: [
          {k: '고르기', v: '꾸밈을 받는 명사가 사람이면 who, 사물·동물이면 which, 둘 다 that', ex: 'a salesperson who smiles / a product which sells well'},
          {k: '뒤에 오는 것', v: '주격 관계대명사 바로 뒤에는 동사 (관계대명사가 주어 노릇)', ex: 'the cap which is on sale'},
          {k: '동사 수', v: '관계대명사 뒤 동사는 앞 명사에 맞춘다', ex: 'a strategy which works / strategies which work'}
        ],
        compare: {
          title: 'who vs which', note: '앞 명사가 사람인지 사물인지 먼저 보게 한다. that은 둘 다 된다.',
          head: ['사람 + who', '사물 + which'],
          cols: [['the customer who buys it', 'a friend who saves money'], ['the shoes which are popular', 'a sale which ends today']]
        },
        check: [
          {q: 'I know a shop ____ sells cheap snacks. (사물)', a: 'which'},
          {q: 'The salesperson ____ helped me was kind. (사람)', a: 'who'},
          {q: 'Look at the shoes which ____ on sale. (be)', a: 'are'},
          {q: 'He is a shopper who always ____ prices. (compare)', a: 'compares'},
          {q: 'This is the box ____ costs 8,000 won. (사람·사물 모두)', a: 'that'}
        ],
        trap: {bad: 'I bought a cap who was on sale.', good: 'I bought a cap which was on sale.', why: '꾸밈을 받는 명사(cap)가 사물이면 which(또는 that).'},
        scramble: [
          {ko: '결정에 영향을 주는 전략들이 있다.', en: 'There are strategies which influence decisions.'},
          {ko: '나는 가격을 비교하는 친구가 있다.', en: 'I have a friend who compares prices.'},
          {ko: '계산대 근처에 있는 사탕을 보아라.', en: 'Look at the candy that is near the checkout.'}
        ]
      },
      { id: 'g2', name: '조건의 if', short: '조건의 if', form: 'If + 주어 + 현재형, 주어 + will + 동사원형', meaning: '만약 ~하면, …할 것이다',
        notice: [
          {en: '{{If}} a product becomes popular, people naturally want it.', ko: '어떤 제품이 인기를 얻으면, 사람들은 자연스럽게 그것을 원한다.'},
          {en: '{{If}} you buy two, you’ll get a discount.', ko: '두 개를 사면 할인을 받을 것이다.'},
          {en: 'You’ll save money {{if}} you make a list.', ko: '목록을 만들면 돈을 아낄 것이다.'}
        ],
        rule: [
          {k: '시제', v: 'if절은 미래의 일이어도 현재형 (If you buy ✔ / If you will buy ✘)', ex: 'If it rains tomorrow, I’ll stay home.'},
          {k: '자리', v: 'if절이 앞에 오면 쉼표(,)를 찍는다. 뒤에 오면 쉼표 없음', ex: 'I’ll buy it if it’s on sale.'},
          {k: '부정', v: 'If + 주어 + don’t / doesn’t ~', ex: 'If you don’t hurry, you’ll miss the sale.'}
        ],
        check: [
          {q: 'If you ____ a list, you won’t buy extra things. (make)', a: 'make'},
          {q: 'If it ____ on sale, I’ll buy it. (be)', a: 'is'},
          {q: 'If you buy two, you ____ a discount. (get, 미래)', a: 'will get'},
          {q: 'If you ____ compare prices, you may pay more. (부정)', a: 'don’t'},
          {q: 'She’ll be happy ____ you give her the hairpins. (조건)', a: 'if'}
        ],
        trap: {bad: 'If you will buy two, you will get a discount.', good: 'If you buy two, you will get a discount.', why: '조건을 나타내는 if절에서는 미래의 일도 현재형으로 쓴다.'},
        scramble: [
          {ko: '두 개를 사면 할인을 받을 것이다.', en: 'If you buy two, you will get a discount.'},
          {ko: '목록을 만들면 돈을 아낄 것이다.', en: 'You will save money if you make a list.'},
          {ko: '서두르지 않으면 할인을 놓칠 것이다.', en: 'If you don’t hurry, you will miss the sale.'}
        ]
      }
    ],
    wrap: {en: 'A smart shopper is someone who ______. If I ______, I will ______.', ko: '현명한 소비자를 관계대명사로 정의하고, 나의 소비 규칙을 if 조건문으로 쓰기'},
    wrapEx: 'A smart shopper is someone who compares prices. If I see a big sale, I will check my budget first.'
  },

  reading: {
    title: 'Don’t Fall for It!', kind: '소비자 교육 기사', cover: 'Smart', coverKo: '현명한 소비자 되기', cover2: 'Strategies', coverKo2: '마케팅 전략 알아보기',
    before: [
      {q: 'Look at the title. What shouldn’t we fall for?', a: '물건을 사게 만드는 마케팅 전략'},
      {q: 'Did you ever buy something you didn’t need?', a: '할인, 사은품, 광고 때문에 산 경험'}
    ],
    gloss: {'charm pricing': '매력 가격(끝자리 9 가격)', 'left digit': '맨 앞자리 숫자', 'decoy': '미끼', 'medium': '중간 크기', 'impulse buying': '충동구매', 'eye level': '눈높이', 'line': '줄', 'shopping list': '장보기 목록'},
    paras: [
      {who: '', en: 'Do you think you are a smart shopper? You may think you are, but hold on! Stores use many strategies which influence your decisions. If you learn about them, you will become a smarter shopper. Let’s look at three of them.',
       ko: '여러분은 자신이 현명한 소비자라고 생각하나요? 그렇다고 생각할지도 모르지만 잠깐! 가게들은 여러분의 결정에 영향을 주는 전략을 많이 쓴다. 그것을 알면 더 현명한 소비자가 될 것이다. 그중 세 가지를 살펴보자.',
       check: {q: 'What do stores use?', a: 'Many strategies which influence our decisions.'}, think: '가게가 쓰는 전략으로 떠오르는 것은?'},
      {who: 'Charm Pricing', en: 'Minji: This earphone case is only 9,900 won. That’s cheap! — Wait, Minji. It’s almost 10,000 won. Why does it look cheaper? We read prices from left to right. The first number is 9, not 10, so our brain thinks the price is much lower.',
       ko: '민지: 이 이어폰 케이스는 겨우 9,900원이야. 싸다! — 잠깐, 민지야. 그건 거의 1만 원이야. 왜 더 싸 보일까? 우리는 가격을 왼쪽에서 오른쪽으로 읽는다. 첫 숫자가 10이 아니라 9이므로, 우리 뇌는 가격이 훨씬 낮다고 생각한다.',
       check: {q: 'Why does 9,900 won look cheap?', a: 'The first number is 9, not 10.'}, think: '끝자리가 900인 가격을 본 적이 있나요?'},
      {who: 'Charm Pricing', en: 'This is called charm pricing. Customers who see 9,900 won often buy more quickly. So, if you see a price which ends in 9, round it up in your head. Then you will see the real price.',
       ko: '이것을 매력 가격이라고 부른다. 9,900원을 본 손님들은 더 빨리 사는 경우가 많다. 그러니 끝이 9로 끝나는 가격을 보면 머릿속에서 올려 생각해 보라. 그러면 진짜 가격이 보일 것이다.',
       check: {q: 'What should you do with a price which ends in 9?', a: 'Round it up in your head.'}, think: '9,900원은 머릿속에서 얼마로 생각하면 될까?'},
      {who: 'The Decoy', en: 'Ben: A small popcorn is 3,000 won, a medium is 6,000 won, and a large is 6,500 won. The large one is a great deal! — Hold on, Ben. Nobody really buys the medium one. It is a “decoy.” It is there only to make the large one look cheap. If you only want a snack, the small one is enough.',
       ko: '벤: 작은 팝콘은 3천 원, 중간은 6천 원, 큰 건 6천5백 원이야. 큰 게 정말 이득이다! — 잠깐, 벤. 사실 중간 크기는 아무도 사지 않는다. 그것은 ‘미끼’다. 큰 것을 싸 보이게 하려고 거기 있을 뿐이다. 간식만 원한다면 작은 것으로 충분하다.',
       check: {q: 'Why is the medium popcorn there?', a: 'To make the large one look cheap (it is a decoy).'}, think: '미끼 상품을 본 다른 예는?'},
      {who: 'At the Checkout', en: 'Somi: I’m waiting in line. Oh, these gummies look good. I’ll take one! — Stop, Somi! Stores put small, cheap things near the checkout. Customers who are waiting in line get bored, so they pick them up. This is called impulse buying.',
       ko: '소미: 줄을 서서 기다리는 중이야. 아, 이 젤리 맛있어 보인다. 하나 살래! — 멈춰, 소미야! 가게는 작고 싼 물건을 계산대 근처에 둔다. 줄을 서서 기다리는 손님들은 지루해서 그것을 집어 든다. 이것을 충동구매라고 부른다.',
       check: {q: 'Why do stores put small things near the checkout?', a: 'Customers who are waiting in line get bored and pick them up.'}, think: '계산대 앞에서 무엇을 산 적이 있나요?'},
      {who: '', en: 'Strategies like these are not always bad, but you need to know about them. Make a shopping list, check your budget, and ask yourself, “Do I really need this?” If you do, you won’t fall for them easily.',
       ko: '이런 전략이 늘 나쁜 것은 아니지만, 그것에 대해 알아야 한다. 장보기 목록을 만들고, 예산을 확인하고, 스스로에게 물어보라. “이게 정말 필요할까?” 그렇게 하면 전략에 쉽게 넘어가지 않을 것이다.',
       check: {q: 'What question should you ask yourself?', a: '“Do I really need this?”'}, think: '나만의 현명한 소비 규칙 한 가지는?'}
    ],
    split: 3,
    next: '팝콘 크기와 계산대 앞 젤리에는\n어떤 전략이 숨어 있을까?',
    recap: {q: '첫 번째 전략은 무엇이고, 어떻게 대처할까?', items: [{k: 'CHARM PRICING', v: '9,900 won looks much cheaper than 10,000 won'}, {k: 'TIP', v: 'round the price up in your head'}]},
    tf: [
      {p: 1, s: 'We read prices from right to left.', a: false, why: 'We read prices from left to right.'},
      {p: 2, s: 'Customers who see 9,900 won often buy more quickly.', a: true},
      {p: 4, s: 'Many people buy the medium popcorn.', a: false, why: 'Nobody really buys the medium one.'},
      {p: 4, s: 'The medium popcorn makes the large one look cheap.', a: true},
      {p: 5, s: 'Stores put expensive things near the checkout.', a: false, why: 'Stores put small, cheap things near the checkout.'},
      {p: 6, s: 'The writer says all strategies are bad.', a: false, why: 'Strategies like these are not always bad.'}
    ],
    key: [
      {en: 'Stores use many strategies {{which}} influence your decisions.', note: '사물 + which + 동사', g: 'g1'},
      {en: '{{If}} you learn about them, you {{will}} become a smarter shopper.', note: 'If + 현재형, will + 동사원형', g: 'g2'},
      {en: 'Customers {{who}} see 9,900 won often buy more quickly.', note: '사람 + who + 동사', g: 'g1'},
      {en: '{{If}} you see a price {{which}} ends in 9, round it up.', note: 'if 조건 + which 관계대명사', g: 'g2'},
      {en: 'Customers {{who}} are waiting in line get bored.', note: '사람 + who + 동사', g: 'g1'},
      {en: '{{If}} you do, you {{won’t}} fall for them easily.', note: 'If + 현재형, won’t + 동사원형', g: 'g2'}
    ],
    summary: {text: 'Stores use {{strategies}} which influence our decisions. A price which ends in 9 looks much {{cheaper}}. A medium popcorn can be a {{decoy}} which makes the large one look like a great deal. Small things near the {{checkout}} cause impulse buying. If you make a list and check your {{budget}}, you won’t fall for them easily.'},
    order: ['Somi waited in line.', 'She got bored.', 'She saw gummies near the checkout.', 'She almost bought them.'],
    chart: {title: 'THREE STRATEGIES', ko: '세 가지 전략 비교하기', cols: ['How it works', 'Smart tip'], note: '표를 보고 “It is a strategy which ~.”, “If you ~, you will ~.” 문장으로 말하게 한다.', rows: [
      {name: 'Charm pricing', cells: ['9,900 won looks much cheaper', 'round it up in your head']},
      {name: 'The decoy', cells: ['the medium makes the large look cheap', 'buy what you need']},
      {name: 'Checkout', cells: ['bored customers pick up small things', 'stick to your shopping list']}
    ]},
    wrap: {en: 'My rule: If I ______, I will ______. A smart shopper is someone who ______.', ko: '관통 질문으로 돌아가기: 현명한 소비자가 되기 위한 나의 규칙 쓰기'}
  },

  quiz: [
    ['“예산”을 뜻하는 낱말은?', ['budget', 'price', 'discount', 'product'], 0, 'budget: 예산'],
    ['“decide”의 명사형은?', ['decided', 'decision', 'deciding', 'decisive'], 1, 'decide → decision'],
    ['“Don’t fall ___ that trick.”', ['for', 'in', 'on', 'at'], 0, 'fall for: ~에 속아 넘어가다'],
    ['찾는 물건을 말하는 표현은?', ['I’ll take it.', 'I’m looking for a cap.', 'How much is it?', 'Hold on!'], 1, 'I’m looking for ~.'],
    ['다른 물건을 보여 달라는 표현은?', ['Can you show me something else?', 'I’ll take two of them.', 'How much are they?', 'May I help you?'], 0, 'Can you show me something else?'],
    ['“How much are they?”에 알맞은 대답은?', ['It’s blue.', 'They’re 3,000 won each.', 'I’ll take it.', 'Yes, they are.'], 1, '가격 대답'],
    ['Let’s Watch에서 벤이 결국 고른 팝콘은?', ['작은 것', '중간', '큰 것', '사지 않았다'], 0, 'I’ll take the small one.'],
    ['빈칸에 알맞은 것은? “I have a friend ___ compares prices.”', ['which', 'who', 'what', 'when'], 1, '사람 + who'],
    ['빈칸에 알맞은 것은? “If you ___ two, you’ll get a discount.”', ['buy', 'will buy', 'bought', 'buying'], 0, 'if 조건절은 현재형'],
    ['어법상 틀린 문장은?', ['It’s a cap which is on sale.', 'If it rains, I’ll stay home.', 'She is a girl which likes shopping.', 'I know a shop that sells gum.'], 2, 'She is a girl who likes shopping.'],
    ['빈칸에 알맞은 것은? “Look at the shoes which ___ popular.”', ['is', 'are', 'be', 'being'], 1, '앞 명사(shoes)가 복수 → are'],
    ['9,900원이 싸 보이는 까닭은?', ['품질이 낮아서', '첫 숫자가 9라서', '할인 중이라서', '작은 물건이라서'], 1, 'The first number is 9, not 10.'],
    ['중간 크기 팝콘의 역할은?', ['가장 잘 팔리는 상품', '큰 것을 싸 보이게 하는 미끼', '어린이용 상품', '할인 상품'], 1, 'It is there only to make the large one look cheap.'],
    ['계산대 근처에 작은 물건을 두는 까닭은?', ['손님이 기다리다 지루해서 집어 들기 때문에', '물건이 가벼워서', '계산이 빨라서', '창고가 없어서'], 0, 'Customers who are waiting in line get bored.'],
    ['글의 요지로 알맞은 것은?', ['쇼핑을 하지 말자', '마케팅 전략을 알면 더 현명한 소비자가 된다', '큰 것을 사는 게 이득이다', '9로 끝나는 가격은 싸다'], 1, 'If you learn about them, you will become a smarter shopper.']
  ]
};

/* ── 보강: 원리 중심 문법 · 모션 그래픽 · 낱말 만들기 · 발음 기호 ── */
(function (L) {
  const ipa = {marketing: '/ˈmɑːrkɪtɪŋ/', strategy: '/ˈstrætədʒi/', influence: '/ˈɪnfluəns/', decision: '/dɪˈsɪʒn/', product: '/ˈprɑːdʌkt/', customer: '/ˈkʌstəmər/', salesperson: '/ˈseɪlzpɜːrsn/', price: '/praɪs/', budget: '/ˈbʌdʒɪt/', discount: '/ˈdɪskaʊnt/', limited: '/ˈlɪmɪtɪd/', similar: '/ˈsɪmələr/', compare: '/kəmˈper/', choose: '/tʃuːz/', effect: '/ɪˈfekt/', realize: '/ˈriːəlaɪz/', spread: '/spred/', checkout: '/ˈtʃekaʊt/', popular: '/ˈpɑːpjələr/', naturally: '/ˈnætʃrəli/'};
  L.vocab.words.forEach(w => { if (ipa[w.w]) w.ipa = ipa[w.w]; });
  L.vocab.morph = [
    {w: 'discount', ko: '할인', parts: [{t: 'dis', k: 'pre', m: '떨어져, 빼고'}, {t: 'count', k: 'root', m: '세다, 계산'}], family: ['count', 'account', 'counter'], note: '가격에서 빼고(dis) 계산하다(count) → 할인.'},
    {w: 'salesperson', ko: '판매원', parts: [{t: 'sales', k: 'root', m: '판매'}, {t: 'person', k: 'root', m: '사람'}], family: ['sale', 'sell', 'chairperson'], note: '판매(sales)하는 사람(person). 남녀 구분 없이 쓰는 말.'},
    {w: 'decision', ko: '결정', parts: [{t: 'decid(e)', k: 'root', m: '결정하다'}, {t: 'sion', k: 'suf', m: '~것 (명사)'}], family: ['decide', 'conclusion', 'television'], note: 'decide의 de가 s로 바뀌며 -sion이 붙는다 → 결정.'}
  ];
  const [g1, g2] = L.grammar.points;
  g1.principle = {
    q: '관계대명사 who·which는 두 문장을 어떻게 하나로 묶을까?',
    pic: [{en: 'customers', ko: '꾸밈을 받는 명사'}, {en: 'who', ko: '앞 명사를 받아 주어 노릇', hot: true}, {en: 'see 9,900 won', ko: '설명'}],
    core: '주격 관계대명사는 앞 명사(선행사)를 다시 받아 뒤 문장의 주어 역할을 하면서, 그 문장을 명사를 꾸미는 설명으로 붙여 준다.',
    why: ['사람이면 who, 사물·동물이면 which, 둘 다 that도 가능.', '관계대명사가 주어이므로 바로 뒤에 동사가 온다.', '동사의 수는 선행사에 맞춘다 (a girl who loves / girls who love).']
  };
  g1.anim = [{title: '두 문장을 who로 묶기', states: [
    {t: 'Customers/S#girl | buy/V | quickly/M | . | / | They/S#she | see/V#v | 9,900 won/O#mk | .', note: '같은 사람들(customers = They)이 두 번', ko: '손님들은 빨리 산다. 그들은 9,900원을 본다.'},
    {t: 'Customers/S#girl | who/X#she | see/V#v | 9,900 won/O#mk | buy/V | quickly/M | .', note: 'They → who (주어 노릇) + 바로 동사', ko: '9,900원을 보는 손님들은 빨리 산다.'}]}];
  g1.contrast = {title: 'who? which?', pairs: [
    {a: 'He is a shopper {{who}} compares prices.', ka: '그는 가격을 비교하는 소비자다. (사람 → who)', b: 'It is a strategy {{which}} works well.', kb: '그것은 효과가 좋은 전략이다. (사물 → which)'}],
    point: '사람은 who, 사물은 which, 둘 다 that.'};
  g2.principle = {
    q: 'if절에서는 왜 미래인데 현재형을 쓸까?',
    pic: [{en: 'If you buy two,', ko: '조건 (현재형)', hot: true}, {en: 'you will get a discount.', ko: '결과 (will)'}],
    core: 'if절은 “그 일이 일어난다고 치면”이라는 조건이다. 조건은 사실처럼 두고 말하므로 현재형, 그 결과는 will로 말한다.',
    why: ['If + 주어 + 현재형, 주어 + will + 동사원형.', 'if절에는 will을 쓰지 않는다.', '결과 자리에 명령문·조동사(can, should)도 올 수 있다.']
  };
  g2.anim = [{title: '조건 + 결과', states: [
    {t: 'You/S | will make/V#u | a list/O#t | . | / | You/S#we | will save/V#s | money/O#p | .', note: '두 미래 문장', ko: '너는 목록을 만들 것이다. 너는 돈을 아낄 것이다.'},
    {t: 'If/X | you/S | make/X#u | a list/O#t | , | you/S#we | will save/V#s | money/O#p | .', note: 'if절은 현재형(make), 결과는 will', ko: '목록을 만들면 돈을 아낄 것이다.'}]}];
  g2.contrast = {title: 'if절의 시제', pairs: [
    {a: 'If it {{is}} on sale, I will buy it.', ka: '그것이 할인 중이면 살 것이다.', b: 'If it {{will be}} on sale, …', kb: '✗ 조건의 if절에는 will을 쓰지 않는다'}],
    point: '조건의 if절은 미래라도 현재형.'};
})(window.LESSON);
