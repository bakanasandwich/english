/* 중2 영어(동아·윤정미) Lesson 4 · Are You Money Smart?
   단원명은 교과서 목차 기준. 대화문·읽기 글은 교과서 원문이 아니라 단원 주제에 맞춰 새로 쓴 글입니다.
   의사소통 기능과 문법은 교과서 구성표 확인 전 추정(estimate: true). */
window.LESSON = {
  book: 'm2-donga', no: 4, estimate: true,
  title: 'Are You Money Smart?', ko: '나는 돈을 현명하게 쓸까?',
  bigQ: {en: 'How can we use money wisely?', ko: '돈을 어떻게 현명하게 쓸 수 있을까?'},
  goals: {
    vocab: ['돈·소비와 관련된 낱말 20개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 나의 소비 습관을 한 문장으로 말할 수 있다.'],
    talk: ['충고를 구하고 충고할 수 있다.', '두 가지 중 더 좋아하는 것을 묻고 답할 수 있다.'],
    grammar: ['to부정사가 명사를 꾸미는 형용사적 용법을 쓸 수 있다.', '비교급과 as ~ as로 두 대상을 비교할 수 있다.'],
    read1: ['글의 형식(상담 칼럼)을 파악하고, 첫 번째 고민과 조언을 이해할 수 있다.'],
    read2: ['세 학생의 고민과 조언을 비교하고 글의 요지를 요약할 수 있다.', '나의 돈 관리 계획을 영어로 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'What did you buy last week?', ko: '지난주에 무엇을 샀나요?', note: '간식, 문구, 게임 아이템 등. 산 것을 ‘꼭 필요한 것’과 ‘갖고 싶었던 것’으로 나눠 보게 하면 need / want 구분으로 이어진다.'},
    words: [
      {w: 'allowance', pos: 'n.', ko: '용돈', ic: '💵', ex: 'I get my allowance every Monday.', exKo: '나는 월요일마다 용돈을 받는다.'},
      {w: 'spend', pos: 'v.', ko: '(돈·시간을) 쓰다', ic: '💸', ex: 'I spent all my money on snacks.', exKo: '나는 간식에 돈을 다 썼다.'},
      {w: 'save', pos: 'v.', ko: '저축하다, 모으다', ic: '🐷', ex: 'She saves 5,000 won a week.', exKo: '그녀는 일주일에 5천 원을 모은다.'},
      {w: 'budget', pos: 'n.', ko: '예산', ic: '📒', ex: 'Make a budget before you go shopping.', exKo: '쇼핑하러 가기 전에 예산을 짜라.'},
      {w: 'price', pos: 'n.', ko: '가격', ic: '🏷️', ex: 'Compare the prices first.', exKo: '먼저 가격을 비교해라.'},
      {w: 'expensive', pos: 'adj.', ko: '비싼', ic: '💎', ex: 'These sneakers are too expensive.', exKo: '이 운동화는 너무 비싸다.'},
      {w: 'cheap', pos: 'adj.', ko: '싼', ic: '🪙', ex: 'Cheap things can break easily.', exKo: '싼 물건은 쉽게 망가질 수 있다.'},
      {w: 'compare', pos: 'v.', ko: '비교하다', ic: '⚖️', ex: 'I compared two phones online.', exKo: '나는 온라인에서 두 휴대폰을 비교했다.'},
      {w: 'need', pos: 'n./v.', ko: '필요(한 것); 필요하다', ic: '✅', ex: 'Food is a need, not a want.', exKo: '음식은 원하는 것이 아니라 필요한 것이다.'},
      {w: 'want', pos: 'n./v.', ko: '원하는 것; 원하다', ic: '🎁', ex: 'A new game is a want.', exKo: '새 게임은 원하는 것이다.'},
      {w: 'goal', pos: 'n.', ko: '목표', ic: '🎯', ex: 'My saving goal is 100,000 won.', exKo: '내 저축 목표는 10만 원이다.'},
      {w: 'wisely', pos: 'adv.', ko: '현명하게', ic: '🦉', ex: 'Use your money wisely.', exKo: '돈을 현명하게 써라.'},
      {w: 'regret', pos: 'v./n.', ko: '후회하다; 후회', ic: '😞', ex: 'I regret buying that shirt.', exKo: '나는 그 셔츠를 산 것을 후회한다.'},
      {w: 'discount', pos: 'n.', ko: '할인', ic: '🔖', ex: 'There’s a 20% discount today.', exKo: '오늘 20퍼센트 할인이 있다.'},
      {w: 'account', pos: 'n.', ko: '계좌', ic: '🏦', ex: 'I opened a bank account.', exKo: '나는 은행 계좌를 만들었다.'},
      {w: 'receipt', pos: 'n.', ko: '영수증', ic: '🧾', ex: 'Keep the receipt.', exKo: '영수증을 보관해라.'},
      {w: 'list', pos: 'n.', ko: '목록', ic: '📝', ex: 'Write a shopping list.', exKo: '쇼핑 목록을 써라.'},
      {w: 'impulse', pos: 'n.', ko: '충동', ic: '⚡', ex: 'Don’t buy things on impulse.', exKo: '충동적으로 물건을 사지 마라.'},
      {w: 'advice', pos: 'n.', ko: '조언', ic: '🗣️', ex: 'Thanks for your advice.', exKo: '조언 고마워.'},
      {w: 'habit', pos: 'n.', ko: '습관', ic: '🔁', ex: 'Saving is a good habit.', exKo: '저축은 좋은 습관이다.'}
    ],
    phrases: [
      {w: 'spend A on B', ko: 'B에 A(돈·시간)를 쓰다', ex: 'He spends a lot of money on games.', exKo: '그는 게임에 돈을 많이 쓴다.'},
      {w: 'run out of', ko: '~이 다 떨어지다', ex: 'I ran out of money on Wednesday.', exKo: '나는 수요일에 돈이 다 떨어졌다.'},
      {w: 'keep track of', ko: '~을 기록하다, 놓치지 않다', ex: 'Keep track of what you spend.', exKo: '쓴 돈을 기록해라.'},
      {w: 'put aside', ko: '(돈을) 따로 떼어 두다', ex: 'Put aside some money each week.', exKo: '매주 돈을 조금씩 떼어 두어라.'},
      {w: 'on sale', ko: '할인 중인', ex: 'These pens are on sale.', exKo: '이 펜들은 할인 중이다.'},
      {w: 'at least', ko: '적어도', ex: 'Wait at least one day before you buy.', exKo: '사기 전에 적어도 하루는 기다려라.'}
    ],
    pairs: [
      {a: 'expensive', b: 'cheap', rel: '반대말'},
      {a: 'spend', b: 'save', rel: '반대말'},
      {a: 'need', b: 'want', rel: '구별하기', note: 'need: 꼭 필요한 것 / want: 갖고 싶은 것'},
      {a: 'wise', b: 'wisely', rel: '형용사 / 부사'}
    ],
    wrap: {en: 'I spend most of my allowance on ______. My saving goal is ______.', ko: '오늘 배운 낱말을 넣어 나의 소비 습관과 저축 목표 쓰기'}
  },

  talk: {
    hook: {en: 'Have you ever regretted buying something?', ko: '무언가를 사고 후회한 적이 있나요?', note: '후회한 물건과 까닭을 짝과 나누게 한다. “그때 누군가 조언해 줬다면?”으로 What should I do?를 이끈다.'},
    speakers: {Minjae: {voice: 1, pitch: .95}, Olivia: {voice: 0, pitch: 1.1}, Yena: {voice: 0, pitch: 1.15}, Chris: {voice: 1, pitch: .9}, Mom: {voice: 2, pitch: 1.05}, Seho: {voice: 1, pitch: 1}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '충고 구하고 하기',
        key: {q: ['What should I do?', 'Can you give me some advice?'], a: ['You should ~.', 'Why don’t you ~?', 'You’d better ~.']},
        note: 'should, had better 뒤에는 동사원형. You’d better는 강한 충고라 친구 사이에서 조심해서 쓴다.',
        dialogs: [
          { title: 'Dialogue A', setting: '수요일 쉬는 시간, 매점 앞', lines: [
            {s: 'Minjae', en: 'Olivia, I already ran out of money. {{What should I do}}?', ko: '올리비아, 벌써 돈이 다 떨어졌어. 어떻게 해야 하지?'},
            {s: 'Olivia', en: 'Again? What did you spend it on?', ko: '또? 뭐에 썼는데?'},
            {s: 'Minjae', en: 'Mostly snacks and game items.', ko: '주로 간식이랑 게임 아이템.'},
            {s: 'Olivia', en: '{{You should}} keep track of your spending.', ko: '쓴 돈을 기록해 봐.'},
            {s: 'Minjae', en: 'That’s a good idea. Anything else?', ko: '좋은 생각이다. 또 다른 건?'},
            {s: 'Olivia', en: '{{Why don’t you}} make a budget for each week?', ko: '주마다 예산을 짜 보는 게 어때?'}
          ]},
          { title: 'Dialogue B', setting: '저녁, 거실', lines: [
            {s: 'A', en: 'Mom, {{can you give me some advice}}? I want to buy a new phone case.', ko: '엄마, 조언 좀 해 주실래요? 새 휴대폰 케이스를 사고 싶어요.'},
            {s: 'B', en: '{{You’d better}} compare prices online first.', ko: '먼저 온라인에서 가격을 비교해 보는 게 좋겠어.'},
            {s: 'A', en: 'Okay. I’ll look for one on sale.', ko: '알겠어요. 할인하는 걸 찾아볼게요.'},
            {s: 'B', en: 'Good. And keep the receipt.', ko: '좋아. 그리고 영수증은 보관하렴.'}
          ]}
        ],
        check: [
          {q: 'What is Minjae’s problem?', a: 'He already ran out of money.'},
          {q: 'What did Minjae spend his money on?', a: 'Mostly snacks and game items.'},
          {q: 'What advice does Mom give?', a: 'Compare prices online first (and keep the receipt).'}
        ],
        drill: {frame: ['A: I always run out of money. What should I do?', 'B: You should ____.'], opts: ['make a budget', 'write a list', 'save a little each week', 'buy fewer snacks', 'compare prices', 'wait a day']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '선호 묻고 답하기',
        key: {q: ['Which do you prefer, A or B?', 'Do you prefer A or B?'], a: ['I prefer A (to B).', 'I like A better.', 'A is better because ~.']},
        note: 'prefer A to B: B보다 A를 더 좋아하다. 까닭을 because로 덧붙이면 더 좋은 답이 된다. 비교급과 이어진다.',
        dialogs: [
          { title: 'Dialogue A', setting: '주말, 신발 가게', lines: [
            {s: 'Chris', en: 'Yena, {{which do you prefer}}, the white sneakers or the black ones?', ko: '예나야, 흰 운동화랑 검은 운동화 중에 뭐가 더 좋아?'},
            {s: 'Yena', en: '{{I prefer}} the black ones.', ko: '검은 게 더 좋아.'},
            {s: 'Chris', en: 'Why? The white ones are cheaper.', ko: '왜? 흰 게 더 싼데.'},
            {s: 'Yena', en: 'Black shoes don’t get dirty as quickly as white ones.', ko: '검은 신발은 흰 신발만큼 빨리 더러워지지 않잖아.'},
            {s: 'Chris', en: 'Good point. They’re only 3,000 won more expensive.', ko: '일리 있네. 3천 원밖에 더 비싸지 않아.'},
            {s: 'Yena', en: 'Then I think they’re the smarter choice.', ko: '그럼 그게 더 현명한 선택인 것 같아.'}
          ]},
          { title: 'Dialogue B', setting: '방과 후, 분식집', lines: [
            {s: 'A', en: '{{Do you prefer}} tteokbokki {{or}} gimbap?', ko: '떡볶이가 좋아, 김밥이 좋아?'},
            {s: 'B', en: '{{I like}} gimbap {{better}}. It’s cheaper and healthier.', ko: '김밥이 더 좋아. 더 싸고 건강에 좋아.'},
            {s: 'A', en: 'Let’s share both, then!', ko: '그럼 둘 다 나눠 먹자!'},
            {s: 'B', en: 'Deal!', ko: '좋아!'}
          ]}
        ],
        check: [
          {q: 'Which sneakers does Yena prefer?', a: 'The black ones.'},
          {q: 'Why does she prefer them?', a: 'They don’t get dirty as quickly as white ones.'},
          {q: 'Why does B like gimbap better?', a: 'Because it’s cheaper and healthier.'}
        ],
        drill: {frame: ['A: Which do you prefer, ____?', 'B: I prefer the first one.'], opts: ['saving or spending', 'cash or a card', 'new or used books', 'online or offline shopping', 'snacks or fruit', 'buses or bikes']}
      }
    ],
    interviewEx: 'Doyun always runs out of money, so I told him to make a budget. He prefers cash to a card.',
    watch: {
      label: 'Let’s Watch', title: 'The 24-Hour Rule', setting: '저녁, 세호가 휴대폰 쇼핑 앱을 보고 있다. 엄마가 다가온다.',
      lines: [
        {s: 'Seho', en: 'Mom, look! This headset is on sale. I want to buy it right now.', ko: '엄마, 보세요! 이 헤드셋 할인해요. 지금 바로 사고 싶어요.'},
        {s: 'Mom', en: 'Do you need it, or do you just want it?', ko: '그게 필요한 거니, 아니면 그냥 갖고 싶은 거니?'},
        {s: 'Seho', en: 'Hmm. My old one still works.', ko: '음. 예전 것도 아직 되긴 해요.'},
        {s: 'Mom', en: 'Then why don’t you try the 24-hour rule?', ko: '그럼 24시간 규칙을 써 보는 건 어때?'},
        {s: 'Seho', en: 'What’s that?', ko: '그게 뭐예요?'},
        {s: 'Mom', en: 'You wait at least one day before you buy something. If you still want it tomorrow, you can buy it.', ko: '무언가를 사기 전에 적어도 하루를 기다리는 거야. 내일도 여전히 갖고 싶으면 사도 돼.'},
        {s: 'Seho', en: 'Okay. I’ll put it on my list and decide tomorrow.', ko: '알겠어요. 목록에 적어 두고 내일 정할게요.'}
      ],
      check: [
        {q: 'What does Seho want to buy?', a: 'A headset (on sale).'},
        {q: 'What is the 24-hour rule?', a: 'Wait at least one day before you buy something.'},
        {q: 'What will Seho do?', a: 'He will put it on his list and decide tomorrow.'}
      ]
    },
    wrap: {en: 'Ask your partner for money advice, and ask which they prefer: saving or spending.', ko: '돈 관리 조언을 구하고, 저축과 소비 중 무엇을 더 좋아하는지 묻고 답한 뒤 두 문장으로 쓰기'}
  },

  grammar: {
    cover: 'to · -er than',
    hook: {en: 'I have no money {{to spend}}.  /  Gimbap is {{cheaper than}} pizza.', ko: '빈칸에 들어갈 말은 각각 어떤 뜻을 더해 줄까?', answer: 'to spend는 money를 꾸며 ‘쓸 돈’, cheaper than은 ‘~보다 더 싼’(비교)', note: '첫 문장은 “어떤 돈?”이라고 묻고, 두 번째 문장은 “무엇과 비교?”라고 물어 학생이 뜻을 찾게 한다.'},
    points: [
      { id: 'g1', name: 'to부정사의 형용사적 용법', short: 'to부정사 (형용사)', form: '명사 + to + 동사원형', meaning: '~할 (명사)',
        notice: [
          {en: 'I have some money {{to spend}}.', ko: '나는 쓸 돈이 조금 있다.'},
          {en: 'We need a plan {{to save}} money.', ko: '우리는 돈을 모을 계획이 필요하다.'},
          {en: 'There is nothing {{to buy}} here.', ko: '여기에는 살 것이 없다.'}
        ],
        rule: [
          {k: '자리', v: '꾸미는 명사 바로 뒤', ex: 'I need a pen to write with.'},
          {k: '-thing', v: 'something / nothing + to V', ex: 'Do you want something to drink?'},
          {k: '구별', v: '‘~하기 위해’(목적)와 다르게 앞 명사를 꾸민다', ex: 'a book to read (읽을 책)'}
        ],
        check: [
          {q: 'I don’t have time ____ shopping. (go)', a: 'to go'},
          {q: 'She made a list ____ at the store. (use)', a: 'to use'},
          {q: 'Is there anything ____? (eat)', a: 'to eat'},
          {q: 'He has a lot of homework ____. (do)', a: 'to do'},
          {q: 'We found a good way ____ money. (save)', a: 'to save'}
        ],
        trap: {bad: 'I want to drink something cold to.', good: 'I want something cold to drink.', why: '꾸미는 to부정사는 명사(something cold) 바로 뒤에 온다.'},
        scramble: [
          {ko: '나는 이번 주에 쓸 돈이 없다.', en: 'I have no money to spend this week.'},
          {ko: '그녀는 저축할 좋은 방법을 찾았다.', en: 'She found a good way to save.'},
          {ko: '먹을 것 좀 줄래?', en: 'Can you give me something to eat?'}
        ]
      },
      { id: 'g2', name: '비교 표현', short: '비교급 · as ~ as', form: '비교급 + than / as + 원급 + as', meaning: '~보다 더 … / ~만큼 …한',
        notice: [
          {en: 'The black shoes are {{more expensive than}} the white ones.', ko: '검은 신발이 흰 신발보다 더 비싸다.'},
          {en: 'Gimbap is {{cheaper than}} pizza.', ko: '김밥은 피자보다 싸다.'},
          {en: 'This bag is {{as useful as}} that one.', ko: '이 가방은 저것만큼 쓸모 있다.'}
        ],
        rule: [
          {k: '짧은 말', v: '형용사 + -er + than', ex: 'cheap → cheaper than'},
          {k: '긴 말', v: 'more + 형용사 + than', ex: 'expensive → more expensive than'},
          {k: '같을 때', v: 'as + 원급 + as / 부정: not as ~ as', ex: 'It is not as cheap as I thought.'}
        ],
        compare: {
          title: '비교급 만드는 법', note: '불규칙(good-better, bad-worse)은 따로 외우게 한다. 자음+y는 y를 i로 바꾸고 -er.',
          head: ['-er / -r', '자음 하나 더 + -er · y → ier', 'more + 원급 · 불규칙'],
          cols: [['cheap → cheaper', 'small → smaller', 'nice → nicer'], ['big → bigger', 'hot → hotter', 'easy → easier'], ['useful → more useful', 'expensive → more expensive', 'good → better']]
        },
        check: [
          {q: 'This pen is ____ than that one. (cheap)', a: 'cheaper'},
          {q: 'My room is ____ than yours. (small)', a: 'smaller'},
          {q: 'Saving is ____ ____ than spending. (important)', a: 'more important'},
          {q: 'My bag is as ____ as yours. (big)', a: 'big'},
          {q: 'This plan is ____ than the old one. (good)', a: 'better'}
        ],
        trap: {bad: 'This phone is more cheaper than that one.', good: 'This phone is cheaper than that one.', why: '-er 비교급 앞에 more를 또 쓰지 않는다.'},
        scramble: [
          {ko: '중고책은 새 책보다 싸다.', en: 'Used books are cheaper than new books.'},
          {ko: '저축은 소비보다 더 어렵다.', en: 'Saving is more difficult than spending.'},
          {ko: '이 가방은 저것만큼 비싸다.', en: 'This bag is as expensive as that one.'}
        ]
      }
    ],
    wrap: {en: 'I need a plan to ______. ______ is cheaper than ______.', ko: 'to부정사(형용사) 한 문장, 비교 표현 한 문장으로 나의 돈 관리 쓰기'},
    wrapEx: 'I need a plan to save 50,000 won. Bringing a water bottle is cheaper than buying drinks.'
  },

  reading: {
    title: 'Ask Money Mentor', kind: '청소년 돈 관리 상담 칼럼', cover: '₩', coverKo: '내 돈의 주인 되기', cover2: 'Wise', coverKo2: '현명한 소비 습관',
    before: [
      {q: 'Look at the title. What does a “mentor” do?', a: '조언하고 이끌어 주는 사람'},
      {q: 'What money problems do teens have?', a: '용돈이 금방 떨어진다, 비싼 물건, 충동구매 등'}
    ],
    gloss: {
      mentor: '조언자, 멘토', 'by Wednesday': '수요일까지는', 'every penny': '한 푼까지 모두', jar: '병, 단지', 'divide': '나누다',
      sneakers: '운동화', 'cost': '(값이) ~이다', 'checkout': '계산(하기)', 'shopping cart': '장바구니', boss: '주인, 상사', 'the rest': '나머지'
    },
    paras: [
      {who: '', en: 'Do you often have no money to spend by Wednesday? Do you buy things and regret it later? You are not alone. This week, Money Mentor answers questions from three teens.',
       ko: '수요일쯤이면 쓸 돈이 하나도 없는 일이 잦나요? 물건을 사고 나중에 후회하나요? 여러분만 그런 게 아니에요. 이번 주 ‘머니 멘토’가 세 십대의 질문에 답합니다.',
       check: {q: 'Who answers the questions?', a: 'Money Mentor.'}, think: '여러분의 돈 고민은 무엇인가요?'},
      {who: 'Q. from Jiwoo, 14', en: '“I get 20,000 won a week, but it disappears in three days. I don’t even know where it goes. What should I do?”',
       ko: '“저는 일주일에 2만 원을 받는데 사흘이면 사라져요. 어디에 쓰는지도 모르겠어요. 어떻게 해야 할까요?”',
       check: {q: 'What is Jiwoo’s problem?', a: 'Her money disappears in three days.'}, think: '지우에게 가장 먼저 필요한 것은?'},
      {who: 'A. Money Mentor', en: 'First, keep track of every penny for a week. Then, make a budget with three jars: one for needs, one for wants, and one to save. If you divide your money first, it will last longer than before.',
       ko: '먼저 일주일 동안 쓴 돈을 한 푼도 빠짐없이 기록하세요. 그다음 병 세 개로 예산을 짜세요. 하나는 필요한 것, 하나는 원하는 것, 하나는 저축할 돈이에요. 돈을 먼저 나눠 두면 전보다 더 오래갈 거예요.',
       check: {q: 'What are the three jars for?', a: 'Needs, wants, and saving.'}, think: '세 병에 돈을 어떻게 나누면 좋을까?'},
      {who: 'Q. from Daniel, 15', en: '“I want sneakers which cost 120,000 won. They’re much more expensive than my old ones. My parents said no. Is there any way to buy them?”',
       ko: '“12만 원짜리 운동화를 갖고 싶어요. 예전 운동화보다 훨씬 비싸요. 부모님은 안 된다고 하셨어요. 그걸 살 방법이 있을까요?”',
       check: {q: 'How much do the sneakers cost?', a: '120,000 won.'}, think: '여러분이라면 부모님을 어떻게 설득할까?'},
      {who: 'A. Money Mentor', en: 'Set a saving goal. If you put aside 10,000 won every week, you will have enough in three months. Also, wait for a sale. The same shoes are often cheaper in spring than in winter.',
       ko: '저축 목표를 세우세요. 매주 1만 원씩 떼어 두면 석 달이면 충분히 모일 거예요. 또 할인을 기다리세요. 같은 신발도 겨울보다 봄에 더 싼 경우가 많아요.',
       check: {q: 'How long will Daniel need to save?', a: 'About three months.'}, think: '목표를 위해 기다려 본 경험이 있나요?'},
      {who: 'Q. from Hayun, 13', en: '“When I shop online, I buy things on impulse. Later, I find nothing to use in the box. How can I stop?”',
       ko: '“온라인 쇼핑을 하면 충동적으로 사요. 나중에 상자를 열어 보면 쓸 게 하나도 없어요. 어떻게 하면 멈출 수 있을까요?”',
       check: {q: 'What is Hayun’s problem?', a: 'She buys things on impulse online.'}, think: '온라인 쇼핑이 충동구매를 부르는 까닭은?'},
      {who: 'A. Money Mentor', en: 'Try the 24-hour rule. Put things in your shopping cart and wait a day before checkout. Ask yourself, “Is this a need or a want?” Remember, money smart people are not the ones with the most money. They are the boss of their money.',
       ko: '24시간 규칙을 써 보세요. 물건을 장바구니에 담고 계산하기 전에 하루를 기다리세요. 스스로 물어보세요. “이건 필요한 걸까, 원하는 걸까?” 기억하세요. 돈에 현명한 사람은 돈이 가장 많은 사람이 아니라 자기 돈의 주인인 사람이에요.',
       check: {q: 'What should Hayun ask herself?', a: '“Is this a need or a want?”'}, think: '“돈의 주인”이 된다는 것은 무슨 뜻일까?'}
    ],
    split: 3,
    next: '비싼 운동화와 충동구매,\n멘토는 어떻게 답했을까?',
    recap: {q: '지우의 고민과 멘토의 조언은?', items: [{k: 'PROBLEM', v: 'Her money disappears in three days.'}, {k: 'ADVICE 1', v: 'Keep track of every penny.'}, {k: 'ADVICE 2', v: 'Make a budget with three jars.'}]},
    tf: [
      {p: 1, s: 'Jiwoo gets 20,000 won a week.', a: true},
      {p: 2, s: 'Money Mentor tells Jiwoo to use two jars.', a: false, why: '병 세 개(필요·원함·저축).'},
      {p: 3, s: 'Daniel’s parents said yes to the sneakers.', a: false, why: '부모님은 안 된다고 하셨다.'},
      {p: 4, s: 'Shoes are often cheaper in spring than in winter.', a: true},
      {p: 5, s: 'Hayun buys things on impulse online.', a: true},
      {p: 6, s: 'Money smart people have the most money.', a: false, why: '돈이 가장 많은 사람이 아니라 돈의 주인인 사람.'}
    ],
    key: [
      {en: 'Do you often have no money {{to spend}} by Wednesday?', note: '명사 + to부정사: ~할 (돈)', g: 'g1'},
      {en: 'Make a budget with three jars: one for needs, one for wants, and one {{to save}}.', note: 'one(병) + to save: 저축할 (병)', g: 'g1'},
      {en: 'It will last {{longer than}} before.', note: '비교급 + than', g: 'g2'},
      {en: 'They’re much {{more expensive than}} my old ones.', note: 'much + 비교급: 훨씬 더', g: 'g2'},
      {en: 'Is there any way {{to buy}} them?', note: 'way + to부정사: ~할 방법', g: 'g1'},
      {en: 'I find nothing {{to use}} in the box.', note: 'nothing + to부정사: ~할 것이 없다', g: 'g1'}
    ],
    summary: {text: 'Jiwoo should keep {{track}} of her spending and make a {{budget}} with three jars. Daniel should set a saving {{goal}} and wait for a {{sale}}. Hayun should try the {{24-hour}} rule. Money smart people are the {{boss}} of their money.'},
    order: ['Jiwoo gets her allowance.', 'Her money disappears in three days.', 'She keeps track of her spending.', 'She makes a budget with three jars.'],
    chart: {title: 'THREE QUESTIONS', ko: '세 고민과 조언 정리하기', cols: ['Problem', 'Advice', 'Key word'], note: '세 조언 모두 ‘사기 전에 멈추고 생각하기’라는 공통점을 찾게 한다.', rows: [
      {name: 'Jiwoo', cells: ['money disappears fast', 'track spending · three jars', 'budget']},
      {name: 'Daniel', cells: ['wants expensive sneakers', 'save 10,000 won a week · wait for a sale', 'goal']},
      {name: 'Hayun', cells: ['buys on impulse online', 'wait 24 hours · need or want?', 'rule']}
    ]},
    wrap: {en: 'I need a plan to ______. Before I buy something, I will ______. ______ is better than ______.', ko: '관통 질문으로 돌아가기: 나의 돈 관리 계획을 세 문장으로 쓰기'}
  },

  quiz: [
    ['“용돈”을 뜻하는 낱말은?', ['budget', 'receipt', 'account', 'allowance'], 3, 'allowance: 용돈'],
    ['“expensive”의 반대말은?', ['cheap', 'useful', 'wisely', 'popular'], 0, 'expensive(비싼) ↔ cheap(싼)'],
    ['빈칸에 알맞은 것은? “I ran ___ of money.”', ['up', 'out', 'off', 'into'], 1, 'run out of: 다 떨어지다'],
    ['“Keep ___ of what you spend.” (기록하다)', ['list', 'goal', 'track', 'habit'], 2, 'keep track of: 기록하다'],
    ['“Is it a need or a ___?” (원하는 것)', ['save', 'price', 'impulse', 'want'], 3, 'need ↔ want'],
    ['충고를 구하는 표현은?', ['You should go.', 'What should I do?', 'I prefer this one.', 'Why don’t you wait?'], 1, 'What should I do? / Can you give me some advice?'],
    ['“Which do you prefer, cash or a card?”에 알맞은 대답은?', ['I prefer cash.', 'Yes, I do.', 'You should save.', 'It costs 5,000 won.'], 0, 'I prefer A (to B).'],
    ['Let’s Watch에서 엄마가 알려 준 규칙은?', ['할인 규칙', '목록 규칙', '영수증 규칙', '24시간 규칙'], 3, 'the 24-hour rule'],
    ['빈칸에 알맞은 것은? “I have nothing ___.”', ['eat', 'ate', 'to eat', 'eating'], 2, 'nothing + to부정사: 먹을 것'],
    ['빈칸에 알맞은 것은? “Gimbap is ___ than pizza.”', ['cheap', 'cheaper', 'cheapest', 'more cheap'], 1, 'cheap → cheaper than'],
    ['어법상 틀린 문장은?', ['It is as big as mine.', 'I need a pen to use.', 'Saving is more important.', 'This is more cheaper.'], 3, 'more cheaper → cheaper'],
    ['“good”의 비교급은?', ['gooder', 'better', 'more good', 'best'], 1, 'good – better – best'],
    ['멘토가 지우에게 권한 병의 개수는?', ['한 개', '두 개', '세 개', '네 개'], 2, 'needs, wants, save'],
    ['글쓴이가 말하는 ‘돈에 현명한 사람’은?', ['돈이 많은 사람', '할인만 사는 사람', '자기 돈의 주인인 사람', '용돈을 많이 받는 사람'], 2, 'They are the boss of their money.'],
    ['다니엘이 매주 떼어 둘 돈은?', ['1만 원', '2만 원', '3만 원', '12만 원'], 0, 'put aside 10,000 won every week']
  ]
};
