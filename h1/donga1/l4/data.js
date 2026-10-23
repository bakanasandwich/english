/* 고1 공통영어1(동아·이병민) Lesson 4 · Everyday Decisions
   단원명·본문 주제(왜 우리는 그것을 살까 — 소비 심리)는 교과서 목차 기준. 의사소통 기능·문법은 추정(estimate: true).
   대화문·읽기 글은 교과서 원문이 아니라 단원 주제에 맞춰 새로 쓴 글이며, 가격 예시는 설명을 위해 지어낸 것입니다. */
window.LESSON = {
  book: 'h1a-donga', no: 4, estimate: true,
  title: 'Everyday Decisions', ko: '매일의 선택',
  bigQ: {en: 'Are we really in control of what we buy?', ko: '우리는 정말 스스로 사는 것을 결정하고 있을까?'},
  goals: {
    vocab: ['소비·선택과 관련된 낱말 16개의 뜻과 발음(강세)을 익힌다.', 'pur-, -ity, ir- 같은 조각으로 purchase, scarcity, irrational을 분석할 수 있다.'],
    talk: ['어떤 주제에 대한 의견을 묻고 까닭과 함께 답할 수 있다.', '상대의 의견에 동의하거나 정중하게 반대할 수 있다.'],
    grammar: ['사역·지각동사 문장에서 목적어가 뒤 동사의 “행동 주인”이라는 원리로 동사원형·to부정사·p.p.를 고를 수 있다.', 'It ~ that 강조구문이 “한 부분에 조명을 비추는” 구조임을 이해하고 가주어 구문과 구별할 수 있다.'],
    read1: ['가격표·크기·“품절 임박” 문구가 구매 결정에 영향을 주는 원리를 파악할 수 있다.'],
    read2: ['소비 심리의 원리를 정리하고, 현명한 구매 습관을 영어로 제안할 수 있다.']
  },

  vocab: {
    hook: {en: 'What was the last thing you bought that you didn’t really need?', ko: '꼭 필요하지 않았는데 산 마지막 물건은 무엇인가요?', note: '“1+1이어서”, “할인해서”, “다들 사서” 같은 까닭이 나오도록 유도한다. 그 까닭들이 오늘 본문의 원리(기준점·희소성·사회적 증거)와 그대로 이어진다.'},
    words: [
      {w: 'purchase', pos: 'v./n.', ko: '구매하다; 구매', ic: '🛒', ipa: '/ˈpɜːrtʃəs/', audio: 'assets/audio/purchase.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Think twice before you make a purchase.', exKo: '구매하기 전에 두 번 생각하라.'},
      {w: 'consumer', pos: 'n.', ko: '소비자', ic: '🧑‍💼', img: {src: 'h1/donga1/l4/img/w-consumer.jpg', credit: 'Walmart Corporate · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/50128414@N05/5684145463'}, ipa: '/kənˈsuːmər/', ex: 'Consumers often compare prices online.', exKo: '소비자들은 종종 온라인에서 가격을 비교한다.'},
      {w: 'discount', pos: 'n./v.', ko: '할인; 할인하다', ic: '🏷️', img: {src: 'h1/donga1/l4/img/w-discount.jpg', credit: 'Makarand Mane · CC0 1.0 (wordpress)', link: 'https://wordpress.org/photos/photo/706655fbb2/'}, ipa: '/ˈdɪskaʊnt/', audio: 'assets/audio/discount.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Students get a 20% discount.', exKo: '학생들은 20% 할인을 받는다.'},
      {w: 'bargain', pos: 'n.', ko: '싼 물건, 특가품', ic: '💰', ipa: '/ˈbɑːrɡən/', audio: 'assets/audio/bargain.mp3', audioCredit: 'TreeMama · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'This jacket was a real bargain.', exKo: '이 재킷은 정말 싸게 산 물건이었다.'},
      {w: 'compare', pos: 'v.', ko: '비교하다', ic: '⚖️', img: {src: 'h1/donga1/l4/img/w-compare.jpg', credit: 'winnifredxoxo · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/61056899@N06/5751301741'}, ipa: '/kəmˈper/', audio: 'assets/audio/compare.mp3', audioCredit: 'TreeMama · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Compare the prices before you buy.', exKo: '사기 전에 가격을 비교하라.'},
      {w: 'impulse', pos: 'n.', ko: '충동', ic: '⚡', ipa: '/ˈɪmpʌls/', audio: 'assets/audio/impulse.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'I bought the candy on impulse.', exKo: '나는 충동적으로 사탕을 샀다.'},
      {w: 'scarcity', pos: 'n.', ko: '부족, 희소성', ic: '⏳', ipa: '/ˈskersəti/', ex: 'Scarcity makes things seem more valuable.', exKo: '희소성은 물건을 더 가치 있어 보이게 한다.'},
      {w: 'influence', pos: 'v./n.', ko: '영향을 주다; 영향', ic: '🧲', ipa: '/ˈɪnfluəns/', audio: 'assets/audio/influence.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Advertisements influence our choices.', exKo: '광고는 우리의 선택에 영향을 준다.'},
      {w: 'persuade', pos: 'v.', ko: '설득하다', ic: '🗣️', ipa: '/pərˈsweɪd/', audio: 'assets/audio/persuade.mp3', audioCredit: 'Neskaya · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'She persuaded me to buy the bigger size.', exKo: '그녀는 내가 더 큰 사이즈를 사도록 설득했다.'},
      {w: 'rational', pos: 'adj.', ko: '이성적인, 합리적인', ic: '🧠', ipa: '/ˈræʃənl/', audio: 'assets/audio/rational.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'We like to think our choices are rational.', exKo: '우리는 우리의 선택이 합리적이라고 생각하고 싶어 한다.'},
      {w: 'emotional', pos: 'adj.', ko: '감정적인', ic: '💓', ipa: '/ɪˈmoʊʃənl/', ex: 'Many decisions are emotional.', exKo: '많은 결정은 감정적이다.'},
      {w: 'budget', pos: 'n.', ko: '예산', ic: '📒', img: {src: 'h1/donga1/l4/img/w-budget.jpg', credit: 'Daniel Deppe · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/30014084@N03/11854835806'}, ipa: '/ˈbʌdʒɪt/', audio: 'assets/audio/budget.mp3', audioCredit: 'Wikimedia Commons contributor · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'I have a budget of 30,000 won.', exKo: '내 예산은 3만 원이다.'},
      {w: 'afford', pos: 'v.', ko: '(~을 살) 여유가 있다', ic: '💳', ipa: '/əˈfɔːrd/', audio: 'assets/audio/afford.mp3', audioCredit: 'Dvortygirl · Public domain (Wikimedia Commons, US)', ex: 'I can’t afford a new phone.', exKo: '나는 새 휴대전화를 살 여유가 없다.'},
      {w: 'original', pos: 'adj.', ko: '원래의; 독창적인', ic: '🏁', ipa: '/əˈrɪdʒənl/', audio: 'assets/audio/original.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The original price was 100,000 won.', exKo: '원래 가격은 10만 원이었다.'},
      {w: 'tempt', pos: 'v.', ko: '유혹하다, 끌리게 하다', ic: '🍰', img: {src: 'h1/donga1/l4/img/w-tempt.jpg', credit: 'Ruth and Dave · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/95142644@N00/9580027312'}, ipa: '/tempt/', audio: 'assets/audio/tempt.mp3', audioCredit: 'Neskaya · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The smell of bread tempted me inside.', exKo: '빵 냄새가 나를 안으로 끌어들였다.'},
      {w: 'irrational', pos: 'adj.', ko: '비이성적인, 불합리한', ic: '🌀', ipa: '/ɪˈræʃənl/', ex: 'Buying three of the same shirt seems irrational.', exKo: '같은 셔츠를 세 벌 사는 것은 비합리적으로 보인다.'}
    ],
    morph: [
      {w: 'purchase', ko: '구매하다', parts: [{t: 'pur', k: 'pre', m: '~을 향해 (pro)'}, {t: 'chase', k: 'root', m: '쫓다'}], family: ['chase', 'purpose', 'pursue'], note: '원하는 물건을 “쫓아가서” 얻다 → 사다. pur- = pro(앞으로, ~을 위해).'},
      {w: 'scarcity', ko: '희소성', parts: [{t: 'scarc', k: 'root', m: '드문, 부족한 (scarce)'}, {t: 'ity', k: 'suf', m: '~함, ~성 (명사)'}], family: ['scarce', 'scarcely', 'reality'], note: '-ity는 형용사를 명사로 바꾼다(real → reality, able → ability, curious → curiosity).'},
      {w: 'irrational', ko: '비이성적인', parts: [{t: 'ir', k: 'pre', m: '아닌 (in-)'}, {t: 'ration', k: 'root', m: '이성, 계산'}, {t: 'al', k: 'suf', m: '~의 (형용사)'}], family: ['rational', 'irregular', 'irresponsible'], note: 'in-은 뒤 글자에 따라 모양이 바뀐다: r 앞 ir-(irregular), l 앞 il-(illegal), m·p 앞 im-(impossible).'},
      {w: 'affordable', ko: '가격이 알맞은', parts: [{t: 'afford', k: 'root', m: '여유가 있다'}, {t: 'able', k: 'suf', m: '~할 수 있는'}], family: ['unaffordable', 'affordability'], note: '살 여유가 될 수 있는 → (가격이) 감당할 만한.'}
    ],
    phrases: [
      {w: 'on impulse', ko: '충동적으로', ex: 'Don’t buy things on impulse.', exKo: '충동적으로 물건을 사지 마라.'},
      {w: 'be likely to', ko: '~할 가능성이 크다', ex: 'Shoppers are likely to choose the middle option.', exKo: '쇼핑객들은 중간 선택지를 고를 가능성이 크다.'},
      {w: 'run out', ko: '다 떨어지다, 매진되다', ex: 'The tickets might run out soon.', exKo: '표가 곧 매진될지도 모른다.'},
      {w: 'miss out on', ko: '(좋은 기회를) 놓치다', ex: 'Nobody wants to miss out on a good deal.', exKo: '아무도 좋은 거래를 놓치고 싶어 하지 않는다.'},
      {w: 'think twice', ko: '다시 한번 생각하다', ex: 'Think twice before you click “buy.”', exKo: '“구매”를 누르기 전에 다시 생각하라.'},
      {w: 'go with the crowd', ko: '대세를 따르다', ex: 'Sometimes we just go with the crowd.', exKo: '때때로 우리는 그냥 대세를 따른다.'}
    ],
    pairs: [
      {a: 'rational', b: 'irrational', rel: '반대말 (ir-)'},
      {a: 'rational', b: 'emotional', rel: '이성 / 감정'},
      {a: 'scarce', b: 'plentiful', rel: '반대말'},
      {a: 'buyer', b: 'seller', rel: '사는 사람 / 파는 사람'},
      {a: 'purchase', b: 'sell', rel: '반대 행동'}
    ],
    wrap: {en: 'I once bought ______ on impulse because ______.', ko: '오늘 배운 낱말로 충동구매 경험 한 문장 쓰기'}
  },

  talk: {
    hook: {en: 'Is “1+1” always a good deal?', ko: '“1+1”은 언제나 좋은 거래일까요?', note: '찬성·반대 손을 들게 한 뒤, 양쪽에서 까닭을 한 명씩 듣는다. 오늘 배울 의견 표현·동의/반대 표현의 실제 상황이다.'},
    speakers: {Jun: {voice: 1, pitch: 1}, Ella: {voice: 0, pitch: 1.1}, 'Ms. Han': {voice: 2, pitch: 1.05}, Kai: {voice: 1, pitch: .95}, Nari: {voice: 0, pitch: 1.15}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Speak 1', func: '의견 묻고 답하기',
        key: {q: ['What do you think about ~?', 'How do you feel about ~?', 'What’s your opinion on ~?'], a: ['In my opinion, ~.', 'I think ~ because ~.', 'Personally, I feel that ~.']},
        note: '의견에는 반드시 까닭(because ~)이나 예를 붙이게 한다. In my opinion은 문장 맨 앞에 쓴다.',
        dialogs: [
          { title: 'Dialogue A', setting: '편의점 앞, 방과 후', lines: [
            {s: 'Ella', en: 'Jun, {{what do you think about}} these “1+1” deals?', ko: '준아, 이런 “1+1” 행사 어떻게 생각해?'},
            {s: 'Jun', en: '{{In my opinion}}, they’re great. You get two for the price of one.', ko: '내 생각엔 좋아. 하나 값에 두 개를 얻잖아.'},
            {s: 'Ella', en: 'But do you really need two bottles of juice?', ko: '그런데 정말 주스 두 병이 필요해?'},
            {s: 'Jun', en: 'Hmm, not really. {{I think}} I buy them {{because}} I don’t want to miss out.', ko: '음, 꼭 그렇진 않아. 놓치기 싫어서 사는 것 같아.'},
            {s: 'Ella', en: 'Right. The deal makes us buy more than we planned.', ko: '맞아. 그 행사가 우리가 계획한 것보다 더 사게 만들지.'}
          ]},
          { title: 'Dialogue B', setting: '경제 수업 시간', lines: [
            {s: 'Ms. Han', en: '{{How do you feel about}} paying with your phone instead of cash?', ko: '현금 대신 휴대전화로 결제하는 것에 대해 어떻게 생각하니?'},
            {s: 'Kai', en: '{{Personally, I feel that}} it’s too easy. I don’t notice how much I spend.', ko: '개인적으로 너무 쉬운 것 같아요. 얼마나 쓰는지 잘 모르겠어요.'},
            {s: 'Nari', en: 'I think it’s convenient, but I check my spending every week.', ko: '저는 편리하다고 생각하지만 매주 지출을 확인해요.'},
            {s: 'Ms. Han', en: 'Good point. It is the habit of checking that keeps you in control.', ko: '좋은 지적이야. 너를 통제하게 해 주는 건 바로 확인하는 습관이란다.'}
          ]}
        ],
        check: [
          {q: 'What does Jun think about “1+1” deals at first?', a: 'He thinks they are great.'},
          {q: 'Why does Jun buy them?', a: 'Because he doesn’t want to miss out.'},
          {q: 'How does Nari stay in control of her spending?', a: 'She checks her spending every week.'}
        ],
        drill: {frame: ['A: What do you think about ____?', 'B: In my opinion, ... because ...'], opts: ['online shopping', 'buying used items', 'limited editions', 'paying by phone', 'shopping with friends', 'school uniforms']}
      },
      { id: 'lt2', label: 'Listen & Speak 2', func: '동의·반대 표현하기',
        key: {q: ['Do you agree?', 'Don’t you think ~?'], a: ['I agree with you. / I couldn’t agree more.', 'I see your point, but ~.', 'I’m afraid I disagree. ~'], },
        note: '반대할 때는 상대 의견을 먼저 인정하고(I see your point) 내 까닭을 말하면 정중하다. I couldn’t agree more. = 완전히 동의해.',
        dialogs: [
          { title: 'Dialogue A', setting: '온라인 쇼핑몰 화면을 함께 보며', lines: [
            {s: 'A', en: 'Look, it says “Only 2 left!” We should buy it now.', ko: '봐, “2개 남음!”이래. 지금 사야 해.'},
            {s: 'B', en: '{{I see your point, but}} I think it’s just a trick to make us hurry.', ko: '무슨 말인지 알지만, 우리를 서두르게 하려는 속임수 같아.'},
            {s: 'A', en: 'Really? {{Don’t you think}} it might really sell out?', ko: '정말? 진짜 다 팔릴 수도 있다고 생각하지 않아?'},
            {s: 'B', en: 'Maybe, but let’s wait a day. If we still want it tomorrow, we can buy it.', ko: '그럴 수도 있지만 하루만 기다리자. 내일도 갖고 싶으면 사면 돼.'},
            {s: 'A', en: 'Okay. {{I agree with you}}. Waiting can’t hurt.', ko: '알았어. 네 말에 동의해. 기다려서 손해 볼 건 없지.'}
          ]},
          { title: 'Dialogue B', setting: '토론 동아리', lines: [
            {s: 'Nari', en: 'I believe advertisements should not be allowed on children’s channels.', ko: '저는 어린이 채널에 광고를 허용하면 안 된다고 생각해요.'},
            {s: 'Kai', en: '{{I couldn’t agree more}}. Kids can’t tell ads from programs.', ko: '완전히 동의해. 아이들은 광고와 프로그램을 구별하지 못해.'},
            {s: 'Jun', en: '{{I’m afraid I disagree}}. Ads help pay for free programs.', ko: '미안하지만 저는 반대예요. 광고가 무료 프로그램 비용을 대 주잖아요.'},
            {s: 'Nari', en: 'That’s true, but children need special protection.', ko: '그건 맞지만, 아이들은 특별한 보호가 필요해.'}
          ]}
        ],
        check: [
          {q: 'What does the online shop say?', a: '“Only 2 left!”'},
          {q: 'What does B suggest?', a: 'Waiting a day before buying it.'},
          {q: 'Why does Jun disagree with Nari?', a: 'Because ads help pay for free programs.'}
        ],
        drill: {frame: ['A: I think ____.', 'B: I agree with you. / I see your point, but ...'], opts: ['sales make us spend more', 'cash is better than cards', 'brands are worth the price', 'reviews are always helpful', 'we should wait a day before buying', 'ads should be banned for kids']}
      }
    ],
    interviewEx: 'Minji thinks “1+1” deals make people buy more than they need. Her partner agrees with her.',
    watch: {
      label: 'Let’s Watch', title: 'The Popcorn Choice', setting: '영화관 매점. 팝콘 크기는 세 가지다: 작은 것 3,000원, 중간 6,500원, 큰 것 7,000원.',
      lines: [
        {s: 'Ella', en: 'I only want a small one. It’s 3,000 won.', ko: '나는 작은 것만 먹고 싶어. 3,000원이야.'},
        {s: 'Jun', en: 'But look! The large one is only 500 won more than the medium.', ko: '그런데 봐! 큰 건 중간보다 겨우 500원 비싸.'},
        {s: 'Ella', en: 'You’re right. The large one looks like a bargain.', ko: '네 말이 맞아. 큰 게 싸게 느껴지네.'},
        {s: 'Jun', en: 'Wait. I think the medium size is there just to make us choose the large one.', ko: '잠깐. 중간 크기는 우리가 큰 걸 고르게 만들려고 있는 것 같아.'},
        {s: 'Ella', en: 'Wow, it is the medium size that changes our minds! I’ll stick with the small.', ko: '와, 우리 마음을 바꾸는 건 바로 중간 크기구나! 난 그냥 작은 걸로 할래.'}
      ],
      check: [
        {q: 'How much is the large popcorn?', a: '7,000 won.'},
        {q: 'Why does the large one look like a bargain?', a: 'Because it is only 500 won more than the medium.'},
        {q: 'What does Ella decide?', a: 'She sticks with the small one.'}
      ]
    },
    wrap: {en: 'Share your opinion about a shopping habit and respond to your partner’s opinion.', ko: '소비 습관에 대한 의견을 나누고 짝의 의견에 동의·반대하기'}
  },

  grammar: {
    cover: 'make O V · It ~ that',
    hook: {en: 'The deal {{makes}} us {{buy}} more.  /  {{It is}} the medium size {{that}} changes our minds.', ko: '첫 문장에서 “사는” 사람은 누구일까? 두 번째 문장은 무엇을 강조하고 있을까?', answer: 'makes us buy = 우리가 산다 (목적어가 행동의 주인) / It is ~ that = the medium size에 조명을 비추는 강조구문', note: '2차시 대화와 Let’s Watch의 문장이다. buy 앞에 to가 없다는 점, 두 번째 문장에서 It is와 that을 지우면 완전한 문장이 남는다는 점을 찾게 한다.'},
    points: [
      { id: 'g1', name: '사역동사·지각동사 (5형식)', short: '사역·지각동사', form: 'make/have/let + O + 동사원형 · see/hear/watch + O + 동사원형/-ing · get/help + O + (to) V', meaning: 'O가 ~하게 하다 / O가 ~하는 것을 보다·듣다',
        notice: [
          {en: 'The sign {{made}} me {{hurry}}.', ko: '그 문구가 나를 서두르게 했다.'},
          {en: 'My parents {{let}} me {{choose}} my own phone.', ko: '부모님은 내가 내 휴대전화를 고르게 해 주셨다.'},
          {en: 'I {{saw}} a man {{put}} three bags of chips in his cart.', ko: '나는 한 남자가 과자 세 봉지를 카트에 넣는 것을 보았다.'}
        ],
        principle: {
          q: '왜 make 뒤에는 to 없이 동사원형이 올까?',
          pic: [{en: 'makes', ko: '시키는 힘'}, {en: '[ us', ko: '행동의 주인'}, {en: 'buy ]', ko: '하는 행동', hot: true}],
          core: '5형식에서 목적어와 그 뒤 동사는 “작은 문장(주어 + 동사)”이다. us buy = 우리가 산다. 사역·지각동사는 그 작은 문장을 바로 붙여서 동사원형을 쓴다.',
          why: ['make·have·let은 “시키는” 힘이 직접적이어서 to 없이 바로 동사원형이 온다.', 'get·allow·cause·ask·tell은 “~하도록” 거리가 있어서 to부정사를 쓴다. help는 둘 다 된다.', '목적어가 행동을 “당하면” p.p.: I had my phone repaired. (휴대전화가 수리된다)'],
          note: '기출 지문에서 자주 보이는 구조: makes you see things differently (24.9 32번), can make others feel more comfortable (25.3 20번), will help them learn (25.3 38번).'
        },
        anim: [
          {title: '두 문장을 하나로: 시키는 동사 + 작은 문장', why: '두 번째 문장의 주어가 목적어 자리로 들어간다.', states: [
            {t: 'The sign/S#sign | says/V#v | “Only 2 left.” | / | We/S#we | hurry/V#hurry | .', note: '문구가 있다 → 우리가 서두른다', ko: '문구가 “2개 남음”이라고 한다. 우리는 서두른다.'},
            {t: 'The sign/S#sign | makes/X#v | us/O#we | hurry/V#hurry | .', note: '시킨 쪽이 주어, 행동의 주인(us)이 목적어, 행동은 동사원형', ko: '그 문구가 우리를 서두르게 한다.'}]},
          {title: '목적어가 “당하면” p.p.', states: [
            {t: 'I/S | had/V#v | the shop/O#shop | repair/V#rep | my phone/O#phone | .', note: '가게가 수리한다 → 동사원형', ko: '나는 가게에 휴대전화를 수리하게 했다.'},
            {t: 'I/S | had/V#v | my phone/O#phone | repaired/X#rep | .', note: '휴대전화는 수리“되는” 쪽 → p.p.', ko: '나는 휴대전화를 수리받았다.'}]}
        ],
        contrast: {title: 'to가 붙나, 안 붙나', pairs: [
          {a: 'The ad {{made}} me {{buy}} it.', ka: '그 광고가 나를 사게 만들었다. (사역 make → 동사원형)', b: 'The ad {{got}} me {{to buy}} it.', kb: '그 광고가 나를 사게 했다. (get → to부정사)'},
          {a: 'I {{heard}} the cashier {{call}} my name.', ka: '점원이 내 이름을 부르는 것을 들었다. (전체 동작)', b: 'I {{heard}} the cashier {{calling}} my name.', kb: '점원이 내 이름을 부르고 있는 것을 들었다. (진행 중인 동작)'}],
          point: '사역(make, have, let)·지각동사 → 동사원형(지각은 -ing도 가능). get, allow, cause, ask → to부정사.'},
        rule: [
          {k: '사역', v: 'make / have / let + O + 동사원형', ex: 'The coupon made me spend more.'},
          {k: '지각', v: 'see / hear / watch / feel + O + 동사원형 / -ing', ex: 'I saw her compare the prices.'},
          {k: 'to부정사', v: 'get / allow / cause / ask + O + to V', ex: 'The sale got me to buy two.'},
          {k: '수동 관계', v: 'have / get + O + p.p.', ex: 'I had my bike fixed.'}
        ],
        check: [
          {q: 'The smell of bread made me ____ (go) into the bakery.', a: 'go'},
          {q: 'My mom let me ____ (buy) a new bag.', a: 'buy'},
          {q: 'The salesperson got me ____ (try) on the jacket.', a: 'to try'},
          {q: 'I had my hair ____ (cut) yesterday.', a: 'cut'},
          {q: 'I saw him ____ (take / taking) the last item.', a: 'take / taking'}
        ],
        trap: {bad: 'The low price made me to buy three shirts.', good: 'The low price made me buy three shirts.', why: '사역동사 make 뒤 목적어의 행동은 동사원형. to를 쓰면 틀린다.'},
        scramble: [
          {ko: '그 할인이 나를 충동적으로 사게 만들었다.', en: 'The discount made me buy on impulse.'},
          {ko: '부모님은 내가 용돈을 직접 관리하게 해 주신다.', en: 'My parents let me manage my own allowance.'},
          {ko: '나는 노트북을 수리받았다.', en: 'I had my laptop repaired.'}
        ]
      },
      { id: 'g2', name: 'It ~ that 강조구문', short: 'It ~ that 강조', form: 'It is/was + 강조할 말 + that + 나머지', meaning: '~한 것은 바로 …이다',
        notice: [
          {en: '{{It is}} the medium size {{that}} changes our minds.', ko: '우리 마음을 바꾸는 것은 바로 중간 크기다.'},
          {en: '{{It was}} in 2020 {{that}} I started paying by phone.', ko: '내가 휴대전화로 결제하기 시작한 것은 바로 2020년이었다.'},
          {en: '{{It is}} not the store but you {{that}} makes the final decision.', ko: '최종 결정을 하는 것은 가게가 아니라 바로 너다.'}
        ],
        principle: {
          q: '그냥 말해도 되는데 왜 It is와 that으로 감쌀까?',
          pic: [{en: 'It is', ko: '조명 켜기'}, {en: 'the medium size', ko: '조명 받는 말', hot: true}, {en: 'that changes our minds', ko: '나머지 문장'}],
          core: '강조하고 싶은 부분을 It is와 that 사이로 꺼내 조명을 비춘다. It is와 that을 지우면 원래의 완전한 문장이 남는다.',
          why: ['주어·목적어·부사구(때·장소)를 강조할 수 있다. 동사는 강조할 수 없다(동사는 do/does/did로 강조).', 'that 대신 사람이면 who, 사물이면 which를 쓰기도 한다. what은 쓸 수 없다.', '가주어 It ~ that과 구별: 가주어는 It과 that을 지우면 문장이 안 된다(It is true that ~).'],
          note: '기출: 2024년 6월 고1 29번 ③ it was in farming villages what → that (장소 부사구 강조). 2025학년도 수능 29번 ④ It is the older parts of our brain that ~ (맞음).'
        },
        anim: [
          {title: '한 부분에 조명을 비추면', why: '강조할 말이 문장 앞으로 꺼내지고 It is ~ that이 둘러싼다.', states: [
            {t: 'The medium size/S#ms | changes/V#v | our minds/O#om | .', note: '평범한 문장', ko: '중간 크기가 우리 마음을 바꾼다.'},
            {t: 'It is/X#it | the medium size/S#ms | that/X#that | changes/V#v | our minds/O#om | .', note: 'It is ~ that으로 감싸 주어를 강조', ko: '우리 마음을 바꾸는 것은 바로 중간 크기다.'}]},
          {title: '부사구도 강조할 수 있다 (24.6 고1 29번)', states: [
            {t: 'Epidemic diseases/S#ed | first took root/V#v | in farming villages/M#fv | .', note: '장소를 나타내는 부사구', ko: '전염병은 농경 마을에서 처음 뿌리를 내렸다.'},
            {t: 'It was/X#it | in farming villages/M#fv | that/X#that | epidemic diseases/S#ed | first took root/V#v | .', note: '부사구 강조 → what(✗) 아니라 that', ko: '전염병이 처음 뿌리를 내린 것은 바로 농경 마을에서였다.'}]}
        ],
        contrast: {title: '강조구문 vs 가주어 구문 — It과 that을 지워 보라', pairs: [
          {a: '{{It is}} the card {{that}} makes spending easy.', ka: '소비를 쉽게 만드는 것은 바로 카드다. → 지우면 The card makes spending easy. (완전 → 강조구문)', b: '{{It is}} true {{that}} cards make spending easy.', kb: '카드가 소비를 쉽게 만든다는 것은 사실이다. → 지우면 true cards make… (불완전 → 가주어)'},
          {a: '{{It was}} yesterday {{that}} I bought the shoes.', ka: '내가 그 신발을 산 것은 바로 어제였다. (부사 강조)', b: '{{It was}} lucky {{that}} I bought the shoes.', kb: '내가 그 신발을 산 것은 운이 좋았다. (가주어)'}],
          point: 'It과 that을 지웠을 때 완전한 문장이 남으면 강조구문, 남지 않으면 가주어 구문.'},
        rule: [
          {k: '주어 강조', v: 'It is + 주어 + that + 동사 ~', ex: 'It is Jun that likes discounts.'},
          {k: '목적어 강조', v: 'It is + 목적어 + that + 주어 + 동사', ex: 'It was the jacket that I bought.'},
          {k: '부사(구) 강조', v: 'It is + 때·장소 + that + 완전한 문장', ex: 'It was online that I found it.'},
          {k: '사람·사물', v: 'that 대신 who(사람), which(사물)도 가능', ex: 'It was my sister who told me.'}
        ],
        check: [
          {q: 'It was at the mall ____ I lost my wallet. (that / what)', a: 'that'},
          {q: 'It is my brother ____ always buys snacks. (who / which)', a: 'who'},
          {q: 'It is the price ____ matters most to me. (that / what)', a: 'that'},
          {q: 'It ____ last Saturday that the sale started. (is / was)', a: 'was'},
          {q: 'It is important ____ we compare prices. (강조구문 / 가주어?)', a: '가주어'}
        ],
        trap: {bad: 'It was in this store what I bought my first phone.', good: 'It was in this store that I bought my first phone.', why: '강조구문의 연결어는 that(사람 who, 사물 which). what은 “~하는 것”이라 쓸 수 없다.'},
        scramble: [
          {ko: '우리를 서두르게 만드는 것은 바로 그 문구다.', en: 'It is the sign that makes us hurry.'},
          {ko: '내가 그 가방을 산 것은 바로 지난주였다.', en: 'It was last week that I bought the bag.'},
          {ko: '최종 결정을 하는 사람은 바로 너다.', en: 'It is you who makes the final decision.'}
        ]
      }
    ],
    wrap: {en: '______ makes me ______. It is ______ that ______.', ko: '사역동사 한 문장, 강조구문 한 문장으로 나의 소비 습관 쓰기'},
    wrapEx: 'Free delivery makes me buy more than I need. It is the “Only 1 left” sign that makes me hurry.'
  },

  reading: {
    title: 'Why You Buy What You Buy', kind: '소비 심리 기사', cover: 'Buy', coverKo: '정말 내가 고른 걸까', cover2: 'Choose', coverKo2: '선택은 결국 나의 몫',
    before: [
      {q: 'Why do stores put candy and snacks next to the cash register?', a: '계산을 기다리는 동안 충동적으로 사게 하려고'},
      {q: 'Have you ever bought something because it was “on sale”?', a: '할인이라는 말이 구매 결정을 바꾼 경험'}
    ],
    gloss: {crossed: '줄이 그어진', anchor: '닻; 기준점', decoy: '미끼', 'sold out': '매진된', 'best seller': '베스트셀러', reviews: '후기', 'invisible': '보이지 않는', painless: '고통 없는', 'cooling-off': '마음을 가라앉히는', designed: '설계된', 'social proof': '사회적 증거', 'register': '계산대'},
    paras: [
      {who: '', en: 'Most of us believe that we make rational choices when we shop. We compare prices, think about what we need, and decide. But stores and shopping apps are carefully designed. Prices, labels, and even the order of products are planned to make us buy more. Let’s look at a few of their tricks.',
       ko: '우리 대부분은 쇼핑할 때 합리적인 선택을 한다고 믿는다. 가격을 비교하고, 무엇이 필요한지 생각하고, 결정한다. 하지만 가게와 쇼핑 앱은 세심하게 설계되어 있다. 가격, 표시, 심지어 상품의 순서까지 우리가 더 사게 만들도록 계획된다. 그 요령 몇 가지를 살펴보자.',
       check: {q: 'What are prices and labels planned to do?', a: 'To make us buy more.'}, think: '쇼핑 앱에서 “우리를 더 사게 만드는” 장치를 본 적이 있나?',
       bg: {src: 'h1/donga1/l4/img/r-p0.jpg', credit: 'Fresh Materials · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/183107169@N08/48750264268', about: '마트의 진열대'}},
      {who: 'The Anchor', en: 'Imagine a jacket with a price tag that says 100,000 won. The price is crossed out, and a new price is written below: 60,000 won. Suddenly, 60,000 won feels cheap. The first number works like an anchor that holds our minds in place. Without it, we might have thought that 60,000 won was expensive.',
       ko: '10만 원이라고 적힌 가격표가 붙은 재킷을 상상해 보라. 그 가격에 줄이 그어져 있고 그 아래 새 가격이 적혀 있다. 6만 원. 갑자기 6만 원이 싸게 느껴진다. 첫 숫자가 우리 마음을 한자리에 붙잡아 두는 닻처럼 작용한다. 그것이 없었다면 우리는 6만 원이 비싸다고 생각했을지도 모른다.',
       check: {q: 'Why does 60,000 won feel cheap?', a: 'Because the first number (100,000 won) works like an anchor.'}, think: '원래 가격이 진짜인지 어떻게 알 수 있을까?',
       bg: {src: 'h1/donga1/l4/img/r-p1.jpg', credit: 'sylvar · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/44124401501@N01/3186783884', about: '할인 가격표'}},
      {who: 'The Decoy', en: 'At a movie theater, popcorn comes in three sizes: small for 3,000 won, medium for 6,500 won, and large for 7,000 won. Hardly anyone buys the medium. So why is it there? It is the medium size that makes the large one look like a bargain. The medium is a decoy. Its only job is to push you toward the bigger choice.',
       ko: '영화관에서 팝콘은 세 가지 크기로 나온다. 작은 것 3,000원, 중간 6,500원, 큰 것 7,000원. 중간을 사는 사람은 거의 없다. 그렇다면 그것은 왜 있을까? 큰 것을 싼 물건처럼 보이게 만드는 것이 바로 중간 크기다. 중간은 미끼다. 그것의 유일한 역할은 당신을 더 큰 선택 쪽으로 미는 것이다.',
       check: {q: 'What is the job of the medium size?', a: 'To make the large one look like a bargain (to push you toward the bigger choice).'}, think: '내가 미끼 때문에 더 큰 것을 고른 적이 있나?',
       bg: {src: 'h1/donga1/l4/img/r-p2.jpg', credit: 'veggiefrog · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/72139255@N00/2145862702', about: '팝콘'}},
      {who: 'Only 2 Left!', en: '“Only 2 left!” “Sale ends in 10 minutes!” Messages like these make us hurry. When something seems scarce, we feel that it must be valuable, and we hate to miss out. Scarcity turns a calm shopper into an anxious one. Many people have bought items they did not need simply because a timer was counting down.',
       ko: '“2개 남음!” “10분 후 할인 종료!” 이런 문구는 우리를 서두르게 만든다. 무언가가 드물어 보이면 우리는 그것이 틀림없이 가치 있다고 느끼고, 놓치기를 싫어한다. 희소성은 차분한 쇼핑객을 불안한 쇼핑객으로 바꾼다. 많은 사람들이 단지 타이머가 줄어들고 있었다는 이유로 필요 없는 물건을 사 왔다.',
       check: {q: 'How do we feel when something seems scarce?', a: 'We feel that it must be valuable, and we hate to miss out.'}, think: '타이머가 있는 할인 화면을 보면 내 기분은 어떤가?',
       bg: {src: 'h1/donga1/l4/img/r-p3.jpg', credit: 'graymalkn · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/22244945@N00/3278869535', about: '모래시계'}},
      {who: 'Everyone Is Buying It', en: '“Best seller.” “Over 10,000 sold.” When we see labels like these, we assume that so many people cannot be wrong. Watching others choose something makes us feel safe choosing it, too. Psychologists call this social proof. It is useful when we know nothing about a product, but it can also lead us to follow the crowd without thinking.',
       ko: '“베스트셀러.” “1만 개 이상 판매.” 이런 표시를 보면 우리는 그렇게 많은 사람이 틀릴 리 없다고 여긴다. 다른 사람들이 무언가를 고르는 것을 보면 우리도 그것을 고르는 것이 안전하다고 느낀다. 심리학자들은 이것을 사회적 증거라고 부른다. 그것은 상품에 대해 아무것도 모를 때는 유용하지만, 생각 없이 대세를 따르게 만들기도 한다.',
       check: {q: 'What do psychologists call this?', a: 'Social proof.'}, think: '후기 숫자가 많으면 무조건 믿을 만할까?',
       bg: {src: 'h1/donga1/l4/img/r-p4.jpg', credit: 'CC0 1.0 (rawpixel)', link: 'https://www.rawpixel.com/image/8809318/photo-image-light-people-public-domain', about: '붐비는 쇼핑 거리'}},
      {who: 'Invisible Money', en: 'Finally, think about how you pay. When you hand over cash, you see your money leave your wallet. With a card or a phone, the money becomes invisible, and paying feels almost painless. It is this lack of pain that makes it easy to spend more than we planned.',
       ko: '마지막으로, 당신이 어떻게 돈을 내는지 생각해 보라. 현금을 건넬 때는 돈이 지갑을 떠나는 것을 본다. 카드나 휴대전화로는 돈이 보이지 않게 되고, 결제는 거의 아프지 않게 느껴진다. 계획보다 더 많이 쓰기 쉽게 만드는 것은 바로 이 고통의 부재다.',
       check: {q: 'Why is it easy to spend more with a card or phone?', a: 'Because the money becomes invisible and paying feels painless.'}, think: '나는 현금과 카드 중 어느 쪽으로 더 많이 쓸까?',
       bg: {src: 'h1/donga1/l4/img/r-p5.jpg', credit: 'Aranami · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/51526368@N03/19791072086', about: '카드 결제 단말기'}},
      {who: 'Stay in Control', en: 'None of these tricks are illegal, and some of them even help us choose quickly. But knowing them lets us slow down. Before you buy, ask yourself, “Would I want this at this price if there were no crossed-out number?” Or give yourself a 24-hour cooling-off period. If you still want it tomorrow, it is probably a real need.',
       ko: '이 요령들 중 어느 것도 불법은 아니며, 어떤 것들은 빨리 고르는 데 도움이 되기도 한다. 하지만 그것들을 알면 속도를 늦출 수 있다. 사기 전에 스스로 물어보라. “줄 그어진 숫자가 없어도 이 가격에 이걸 원할까?” 아니면 스스로에게 24시간의 마음 가라앉히기 시간을 주어라. 내일도 여전히 원한다면, 그것은 아마 진짜 필요일 것이다.',
       check: {q: 'What question should you ask yourself before you buy?', a: '“Would I want this at this price if there were no crossed-out number?”'}, think: '24시간 규칙을 지킨다면 내 소비는 어떻게 달라질까?',
       bg: {src: 'h1/donga1/l4/img/r-p6.jpg', credit: 'alexkerhead · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/26354629@N02/3571836813', about: '벽시계'}},
      {who: 'Your Choice', en: 'Every day, we make hundreds of small decisions, and many of them involve money. Stores will always try to influence us. That is their job. But in the end, it is not the store but you that makes the final decision. A smart consumer is not someone who never buys. It is someone who knows why they buy.',
       ko: '매일 우리는 수백 가지의 작은 결정을 내리고, 그중 많은 것이 돈과 관련된다. 가게는 언제나 우리에게 영향을 주려 할 것이다. 그것이 그들의 일이다. 하지만 결국 최종 결정을 내리는 것은 가게가 아니라 바로 당신이다. 현명한 소비자는 절대 사지 않는 사람이 아니다. 자신이 왜 사는지 아는 사람이다.',
       check: {q: 'What is a smart consumer according to the writer?', a: 'Someone who knows why they buy.'}, think: '나는 어떤 소비자가 되고 싶은가?',
       bg: {src: 'h1/donga1/l4/img/r-p7.jpg', credit: 'zoetnet · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/13286453@N00/4857778452', about: '쇼핑백을 멘 사람'}}
    ],
    coverImg: {src: 'h1/donga1/l4/img/r-cover.jpg', credit: 'Simon Shek · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/41202510@N00/313608149'},
    coverImg2: {src: 'h1/donga1/l4/img/r-cover2.jpg', credit: 'robinsonsmay · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/25103209@N06/3017565988'},
    split: 4,
    next: '“2개 남음” 말고\n또 어떤 장치가 있을까?',
    recap: {q: '가게는 어떤 요령으로 우리를 더 사게 할까?', items: [{k: 'ANCHOR', v: 'a crossed-out price makes the new price feel cheap'}, {k: 'DECOY', v: 'the medium size makes the large one look like a bargain'}, {k: 'SCARCITY', v: '“Only 2 left!” makes us hurry'}]},
    tf: [
      {p: 0, s: 'The writer says most stores are not carefully designed.', a: false, why: '세심하게 설계되어 있다.'},
      {p: 1, s: 'A crossed-out price can make a new price feel cheap.', a: true},
      {p: 2, s: 'Most people buy the medium popcorn.', a: false, why: '중간을 사는 사람은 거의 없다.'},
      {p: 3, s: 'Scarcity can make shoppers anxious.', a: true},
      {p: 4, s: 'Social proof is always harmful.', a: false, why: '상품을 모를 때는 유용하다.'},
      {p: 5, s: 'Paying by card can feel almost painless.', a: true},
      {p: 6, s: 'All of these tricks are illegal.', a: false, why: '어느 것도 불법이 아니다.'},
      {p: 7, s: 'A smart consumer never buys anything.', a: false, why: '왜 사는지 아는 사람이다.'}
    ],
    key: [
      {en: 'Prices, labels, and even the order of products are planned to {{make us buy}} more.', note: '사역동사 make + O + 동사원형', g: 'g1'},
      {en: '{{It is}} the medium size {{that}} makes the large one look like a bargain.', note: '강조구문 + make O 동사원형', g: 'g2'},
      {en: 'Messages like these {{make us hurry}}.', note: 'make + us + hurry', g: 'g1'},
      {en: '{{Watching others choose}} something makes us feel safe.', note: '지각동사 watch + O + 동사원형 (동명사 주어)', g: 'g1'},
      {en: '{{It is}} this lack of pain {{that}} makes it easy to spend more.', note: '강조구문 (주어 강조)', g: 'g2'},
      {en: '{{It is}} not the store but you {{that}} makes the final decision.', note: '강조구문 + not A but B', g: 'g2'}
    ],
    summary: {text: 'Stores use tricks to {{influence}} our choices. A crossed-out price works like an {{anchor}}, a medium size can be a {{decoy}}, and “Only 2 left!” uses {{scarcity}} to make us hurry. Labels like “Best seller” use social proof, and cards make money {{invisible}}. A smart consumer knows {{why}} they buy.'},
    order: ['A shopper sees a crossed-out price.', 'The new price feels cheap.', 'A timer says the sale ends soon.', 'The shopper buys the jacket on impulse.'],
    chart: {title: 'SHOPPING TRICKS', ko: '소비 심리 요령 정리', cols: ['Example', 'Effect'], note: '표를 보고 “___ makes us ___.” 사역동사 문장과 “It is ___ that ___.” 강조구문으로 말하게 한다.', rows: [
      {name: 'Anchor', cells: ['crossed-out price', 'new price feels cheap']},
      {name: 'Decoy', cells: ['medium popcorn', 'large looks like a bargain']},
      {name: 'Scarcity', cells: ['“Only 2 left!”', 'we hurry']},
      {name: 'Social proof', cells: ['“Best seller”', 'we follow the crowd']}
    ]},
    wrap: {en: 'Before I buy something, I will ______. It is ______ that makes me buy on impulse.', ko: '관통 질문으로 돌아가기: 현명한 구매 습관과 나의 충동구매 원인 쓰기'}
  },

  quiz: [
    ['“구매하다”를 뜻하는 낱말은?', ['compare', 'purchase', 'persuade', 'afford'], 1, 'purchase'],
    ['“희소성”을 뜻하는 낱말은?', ['scarcity', 'impulse', 'budget', 'bargain'], 0, 'scarcity'],
    ['irrational의 ir-가 뜻하는 것은?', ['다시', '아닌', '안으로', '함께'], 1, 'ir- = in- = 아닌'],
    ['“I can’t ____ a new phone.” (살 여유가 없다)', ['afford', 'compare', 'tempt', 'influence'], 0, 'afford'],
    ['의견을 묻는 표현은?', ['I couldn’t agree more.', 'What do you think about it?', 'I see your point, but…', 'I’m afraid I disagree.'], 1, 'What do you think about ~?'],
    ['정중하게 반대하는 표현은?', ['I agree with you.', 'I couldn’t agree more.', 'I see your point, but I think…', 'In my opinion, yes.'], 2, '인정 + 반대'],
    ['빈칸에 알맞은 것은? “The sale made me ____ two pairs.”', ['to buy', 'buying', 'buy', 'bought'], 2, '사역 make + O + 동사원형'],
    ['빈칸에 알맞은 것은? “The clerk got me ____ the shoes on.”', ['try', 'to try', 'tried', 'tries'], 1, 'get + O + to V'],
    ['빈칸에 알맞은 것은? “I had my phone ____.”', ['repair', 'repaired', 'to repair', 'repairing'], 1, '휴대전화는 수리되는 쪽 → p.p.'],
    ['빈칸에 알맞은 것은? “It was at this store ____ I met him.”', ['what', 'which', 'that', 'where it'], 2, '강조구문 It ~ that'],
    ['강조구문이 아닌 것은?', ['It is Jun that likes sales.', 'It was online that I bought it.', 'It is true that ads work.', 'It was the price that mattered.'], 2, '가주어 구문'],
    ['줄 그어진 원래 가격이 하는 역할은?', ['미끼', '닻(기준점)', '사회적 증거', '희소성'], 1, 'anchor'],
    ['중간 크기 팝콘이 있는 까닭은?', ['가장 많이 팔려서', '큰 것을 싸게 보이게 하려고', '작은 것이 없어서', '가격이 가장 싸서'], 1, 'decoy'],
    ['카드 결제가 더 쓰게 만드는 까닭은?', ['포인트를 줘서', '돈이 보이지 않아 고통이 적어서', '할인을 해 줘서', '빨라서'], 1, 'invisible, painless'],
    ['글쓴이가 말하는 현명한 소비자는?', ['절대 사지 않는 사람', '가장 싸게 사는 사람', '왜 사는지 아는 사람', '후기를 많이 쓰는 사람'], 2, 'someone who knows why they buy']
  ]
};
