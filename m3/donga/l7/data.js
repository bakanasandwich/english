/* 중3 영어(동아·윤정미) Lesson 7 · A Greener Tomorrow — 가안
   2022 개정 중3 교과서 목차 공개 전, 중3 문법 순서에 맞춰 만든 가안 단원입니다.
   가미카쓰 마을과 보얀 슬랫 관련 사실은 널리 알려진 내용이며, 나머지 인물·대화는 새로 지은 것입니다. */
window.LESSON = {
  book: 'm3-donga', no: 7, estimate: true,
  title: 'A Greener Tomorrow', ko: '더 푸른 내일',
  bigQ: {en: 'What can one person do for the planet?', ko: '한 사람이 지구를 위해 할 수 있는 일은 무엇일까?'},
  goals: {
    vocab: ['환경과 관련된 낱말 20개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 내가 실천할 환경 습관을 한 문장으로 소개할 수 있다.'],
    talk: ['걱정을 묻고 표현할 수 있다.', '해결 방법을 제안하고 답할 수 있다.'],
    grammar: ['although / though로 예상과 다른 내용을 이어 말할 수 있다.', 'the + 비교급, the + 비교급으로 함께 변하는 두 가지를 말할 수 있다.'],
    read1: ['글의 주제를 파악하고, 쓰레기를 거의 내놓지 않는 마을의 이야기를 이해할 수 있다.'],
    read2: ['바다 쓰레기를 치우려는 청년과 우리 반의 실천을 비교하고, 나의 환경 약속을 영어로 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'How much trash do you think you throw away in a day?', ko: '하루에 쓰레기를 얼마나 버린다고 생각하나요?', note: '어제 버린 것을 떠올려 손가락으로 세게 한다(컵, 포장지, 페트병…). 생각보다 많다는 데서 출발한다.'},
    words: [
      {w: 'environment', pos: 'n.', ko: '환경', ic: '🌍', ex: 'We should protect the environment.', exKo: '우리는 환경을 보호해야 한다.'},
      {w: 'trash', pos: 'n.', ko: '쓰레기', ic: '🗑️', ex: 'Don’t leave trash on the beach.', exKo: '해변에 쓰레기를 두고 가지 마라.'},
      {w: 'plastic', pos: 'n./adj.', ko: '플라스틱(의)', ic: '🥤', ex: 'Plastic takes a long time to break down.', exKo: '플라스틱은 분해되는 데 오랜 시간이 걸린다.'},
      {w: 'recycle', pos: 'v.', ko: '재활용하다', ic: '♻️', ex: 'We recycle cans and bottles.', exKo: '우리는 캔과 병을 재활용한다.'},
      {w: 'reduce', pos: 'v.', ko: '줄이다', ic: '📉', ex: 'Let’s reduce plastic waste.', exKo: '플라스틱 쓰레기를 줄이자.'},
      {w: 'reuse', pos: 'v.', ko: '재사용하다', ic: '🔁', ex: 'I reuse my shopping bags.', exKo: '나는 장바구니를 재사용한다.'},
      {w: 'waste', pos: 'n./v.', ko: '쓰레기; 낭비하다', ic: '🚮', ex: 'Don’t waste water.', exKo: '물을 낭비하지 마라.'},
      {w: 'ocean', pos: 'n.', ko: '대양, 바다', ic: '🌊', ex: 'Plastic ends up in the ocean.', exKo: '플라스틱은 결국 바다로 간다.'},
      {w: 'pollution', pos: 'n.', ko: '오염', ic: '🏭', ex: 'Air pollution is a big problem.', exKo: '대기 오염은 큰 문제다.'},
      {w: 'climate', pos: 'n.', ko: '기후', ic: '🌡️', ex: 'The climate is changing fast.', exKo: '기후가 빠르게 변하고 있다.'},
      {w: 'energy', pos: 'n.', ko: '에너지', ic: '⚡', ex: 'Turn off the lights to save energy.', exKo: '에너지를 아끼려면 불을 꺼라.'},
      {w: 'sort', pos: 'v.', ko: '분류하다', ic: '🗂️', ex: 'They sort trash into many groups.', exKo: '그들은 쓰레기를 여러 종류로 분류한다.'},
      {w: 'habit', pos: 'n.', ko: '습관', ic: '🔄', ex: 'Small habits can save the earth.', exKo: '작은 습관이 지구를 구할 수 있다.'},
      {w: 'disposable', pos: 'adj.', ko: '일회용의', ic: '🍴', ex: 'Avoid disposable cups.', exKo: '일회용 컵을 피해라.'},
      {w: 'container', pos: 'n.', ko: '용기, 그릇', ic: '🫙', ex: 'Bring your own container.', exKo: '자기 용기를 가져와라.'},
      {w: 'invent', pos: 'v.', ko: '발명하다', ic: '🛠️', ex: 'He invented a way to clean the sea.', exKo: '그는 바다를 청소하는 방법을 발명했다.'},
      {w: 'local', pos: 'adj.', ko: '지역의', ic: '🏘️', ex: 'Buy local food.', exKo: '지역 먹거리를 사라.'},
      {w: 'planet', pos: 'n.', ko: '행성; 지구', ic: '🪐', ex: 'We have only one planet.', exKo: '우리에게는 지구 하나뿐이다.'},
      {w: 'goal', pos: 'n.', ko: '목표', ic: '🎯', ex: 'Their goal is zero waste.', exKo: '그들의 목표는 쓰레기 제로다.'},
      {w: 'effort', pos: 'n.', ko: '노력', ic: '💪', ex: 'Every effort counts.', exKo: '모든 노력이 중요하다.'}
    ],
    phrases: [
      {w: 'throw away', ko: '버리다', ex: 'Don’t throw away old clothes.', exKo: '헌 옷을 버리지 마라.'},
      {w: 'break down', ko: '분해되다', ex: 'Plastic doesn’t break down easily.', exKo: '플라스틱은 쉽게 분해되지 않는다.'},
      {w: 'end up', ko: '결국 ~하게 되다', ex: 'Much plastic ends up in the sea.', exKo: '많은 플라스틱이 결국 바다로 간다.'},
      {w: 'turn off', ko: '끄다', ex: 'Turn off the TV.', exKo: 'TV를 꺼라.'},
      {w: 'make a difference', ko: '변화를 만들다', ex: 'You can make a difference.', exKo: '너는 변화를 만들 수 있다.'},
      {w: 'instead of', ko: '~ 대신에', ex: 'Use a cup instead of a paper cup.', exKo: '종이컵 대신 컵을 써라.'}
    ],
    pairs: [
      {a: 'reusable', b: 'disposable', rel: '반대말'},
      {a: 'pollute', b: 'pollution', rel: '동사 / 명사'},
      {a: 'reduce', b: 'increase', rel: '반대말'},
      {a: 'environment', b: 'environmental', rel: '명사 / 형용사'}
    ],
    wrap: {en: 'To protect the environment, I will ______ instead of ______.', ko: '오늘 배운 낱말로 나의 환경 습관 하나 소개하기'}
  },

  talk: {
    hook: {en: 'What worries you most about the earth?', ko: '지구에 관해 가장 걱정되는 것은 무엇인가요?', note: '미세먼지, 폭염, 바다 쓰레기 등 학생이 직접 겪은 것에서 고르게 한다.'},
    speakers: {Hayun: {voice: 0, pitch: 1.15}, Max: {voice: 1, pitch: .95}, Dad: {voice: 1, pitch: .85}, Sian: {voice: 0, pitch: 1.1}, Woojin: {voice: 1, pitch: 1}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '걱정 묻고 표현하기',
        key: {q: ['What are you worried about?', 'Is something wrong?'], a: ['I’m worried about ~.', 'I’m concerned that ~.', 'I’m afraid that ~.']},
        note: 'worried about + 명사(-ing) / concerned that + 주어 + 동사. 걱정에 답할 때 Don’t worry. 대신 해결책으로 이어지게 한다.',
        dialogs: [
          { title: 'Dialogue A', setting: '바닷가 봉사 활동 뒤', lines: [
            {s: 'Max', en: 'Hayun, you look serious. {{What are you worried about}}?', ko: '하윤아, 표정이 심각하네. 뭐가 걱정이야?'},
            {s: 'Hayun', en: '{{I’m worried about}} all this plastic on the beach.', ko: '해변에 있는 이 플라스틱들이 다 걱정돼.'},
            {s: 'Max', en: 'Me, too. We picked up so much today.', ko: '나도. 오늘 정말 많이 주웠잖아.'},
            {s: 'Hayun', en: '{{I’m concerned that}} the sea animals eat it.', ko: '바다 동물들이 그걸 먹을까 봐 걱정돼.'},
            {s: 'Max', en: 'Although we can’t clean the whole ocean, we can start here.', ko: '바다 전체를 청소할 수는 없지만, 여기서부터 시작할 수 있어.'}
          ]},
          { title: 'Dialogue B', setting: '여름, 교실', lines: [
            {s: 'A', en: '{{Is something wrong}}? You look tired.', ko: '무슨 일 있어? 피곤해 보여.'},
            {s: 'B', en: 'It’s too hot. {{I’m afraid that}} summers are getting hotter.', ko: '너무 더워. 여름이 점점 더 더워지는 것 같아 걱정이야.'},
            {s: 'A', en: 'Yeah. The climate is really changing.', ko: '맞아. 기후가 정말 변하고 있어.'},
            {s: 'B', en: 'The hotter it gets, the more energy we use.', ko: '더워질수록 우리는 에너지를 더 많이 써.'}
          ]}
        ],
        check: [
          {q: 'What is Hayun worried about?', a: 'All the plastic on the beach.'},
          {q: 'What is Hayun concerned about?', a: 'That sea animals eat the plastic.'},
          {q: 'What does B think about summers?', a: 'They are getting hotter.'}
        ],
        drill: {frame: ['A: What are you worried about?', 'B: I’m worried about ____.'], opts: ['plastic in the ocean', 'air pollution', 'hot summers', 'food waste', 'the climate', 'disappearing animals']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '제안하고 답하기',
        key: {q: ['Why don’t we ~?', 'How about -ing ~?', 'We’d better ~.'], a: ['That’s a good idea.', 'Sounds great.', 'I’m afraid I can’t.']},
        note: 'Why don’t we + 동사원형 / How about + -ing. 거절할 때도 까닭을 덧붙이게 한다.',
        dialogs: [
          { title: 'Dialogue A', setting: '학생회 회의', lines: [
            {s: 'Sian', en: 'Our school uses too many paper cups.', ko: '우리 학교는 종이컵을 너무 많이 써.'},
            {s: 'Woojin', en: '{{Why don’t we}} start a “bring your own cup” day?', ko: '‘내 컵 가져오기’ 날을 시작하는 게 어때?'},
            {s: 'Sian', en: '{{That’s a good idea}}. {{How about}} giving stickers to students who join?', ko: '좋은 생각이야. 참여하는 학생에게 스티커를 주는 건 어때?'},
            {s: 'Woojin', en: '{{Sounds great}}. The more students join, the fewer cups we throw away.', ko: '좋아. 참여하는 학생이 많을수록 버리는 컵은 줄어들 거야.'},
            {s: 'Sian', en: 'Let’s make a poster today.', ko: '오늘 포스터를 만들자.'}
          ]},
          { title: 'Dialogue B', setting: '주말, 집', lines: [
            {s: 'A', en: '{{How about}} going to the market with me? Bring a bag.', ko: '나랑 시장 갈래? 장바구니 챙겨.'},
            {s: 'B', en: '{{I’m afraid I can’t}}. I have to study.', ko: '미안하지만 못 가. 공부해야 해.'},
            {s: 'A', en: 'Okay. Then {{we’d better}} go next weekend.', ko: '알았어. 그럼 다음 주말에 가는 게 좋겠다.'},
            {s: 'B', en: 'Sure!', ko: '좋아!'}
          ]}
        ],
        check: [
          {q: 'What does Woojin suggest?', a: 'A “bring your own cup” day.'},
          {q: 'What will they give to students who join?', a: 'Stickers.'},
          {q: 'Why can’t B go to the market?', a: 'B has to study.'}
        ],
        drill: {frame: ['A: Why don’t we ____?', 'B: That’s a good idea.'], opts: ['use our own cups', 'pick up trash', 'turn off the lights', 'walk to school', 'plant trees', 'reuse paper']}
      }
    ],
    interviewEx: 'Jaeho is worried about plastic in the ocean. He suggests using our own bottles.',
    watch: {
      label: 'Let’s Watch', title: 'The Trash Challenge', setting: '저녁 식탁. 시안이 일주일 쓰레기 줄이기 도전을 제안한다.',
      lines: [
        {s: 'Sian', en: 'Dad, why don’t we try a one-week trash challenge?', ko: '아빠, 일주일 쓰레기 줄이기 도전 해 볼래요?'},
        {s: 'Dad', en: 'Although it sounds hard, I’ll try. What do we do?', ko: '어려워 보이지만 해 볼게. 뭘 하면 되니?'},
        {s: 'Sian', en: 'We put all our trash in one box and check it every day.', ko: '모든 쓰레기를 한 상자에 넣고 매일 확인하는 거예요.'},
        {s: 'Dad', en: 'Day one… wow, the box is already half full!', ko: '첫날… 와, 상자가 벌써 반이나 찼네!'},
        {s: 'Sian', en: 'Most of it is food packaging. The more we cook at home, the less trash we make.', ko: '대부분 음식 포장재예요. 집에서 요리할수록 쓰레기가 줄어들어요.'},
        {s: 'Dad', en: 'Then tomorrow, I’ll cook. You wash the dishes!', ko: '그럼 내일은 내가 요리하마. 설거지는 네가 하렴!'}
      ],
      check: [
        {q: 'What challenge does Sian suggest?', a: 'A one-week trash challenge.'},
        {q: 'What is most of the trash?', a: 'Food packaging.'},
        {q: 'What will Dad do tomorrow?', a: 'He will cook.'}
      ]
    },
    wrap: {en: 'Tell your partner what worries you about the environment, and suggest one thing you can do together.', ko: '환경 걱정을 말하고, 함께 할 수 있는 일 하나 제안하기'}
  },

  grammar: {
    cover: 'the more, the better',
    hook: {en: '{{Although}} it sounds hard, I’ll try.  /  The more we cook at home, {{the less}} trash we make.', ko: '두 문장에서 굵은 말은 각각 어떤 관계를 만들까?', answer: '첫 문장은 예상과 반대(어렵지만 해 본다) — although. 두 번째는 함께 변하는 관계(~할수록 더 …하다) — the 비교급, the 비교급', note: '“어렵다 → 그래서 안 한다”가 보통의 예상임을 먼저 확인한 뒤 although의 ‘반전’을 느끼게 한다.'},
    points: [
      { id: 'g1', name: '양보 접속사 although · though', short: 'although', form: 'Although / Though + 주어 + 동사, 주어 + 동사', meaning: '비록 ~이지만',
        notice: [
          {en: '{{Although}} it sounds hard, I’ll try.', ko: '어려워 보이지만 해 볼게.'},
          {en: '{{Although}} the town is small, it has a big goal.', ko: '그 마을은 작지만 큰 목표를 가지고 있다.'},
          {en: 'I took the bus, {{though}} I wanted to walk.', ko: '걷고 싶었지만 나는 버스를 탔다.'}
        ],
        rule: [
          {k: '뜻', v: '앞뒤 내용이 예상과 반대될 때 (~이지만)', ex: 'Although he was tired, he kept working.'},
          {k: '위치', v: '문장 앞(뒤에 쉼표) 또는 문장 뒤', ex: 'I’ll go although it’s raining.'},
          {k: 'but과 비교', v: 'although와 but은 함께 쓰지 않는다', ex: 'Although it’s cold, (but ✗) I’m going out.'}
        ],
        compare: {
          title: 'because vs although', note: '같은 앞 절에 because와 although를 바꿔 넣어 뒷 절이 어떻게 달라지는지 비교한다.',
          head: ['', 'because (까닭)', 'although (반전)'],
          cols: [['앞 절', '뒷 절', '관계'], ['Because it was raining,', 'I stayed home.', '예상대로'], ['Although it was raining,', 'I went out.', '예상과 반대']]
        },
        check: [
          {q: '____ it was cold, we swam in the sea. (비록 ~이지만)', a: 'Although'},
          {q: '____ he was sick, he stayed home. (because / although)', a: 'Because'},
          {q: 'I like this town, ____ it’s small. (though / so)', a: 'though'},
          {q: 'Although she was tired, she ____ her homework. (finish, 과거)', a: 'finished'},
          {q: '____ plastic is useful, it causes pollution.', a: 'Although'}
        ],
        trap: {bad: 'Although it was raining, but we played soccer.', good: 'Although it was raining, we played soccer.', why: 'although와 but은 한 문장에 함께 쓰지 않는다.'},
        scramble: [
          {ko: '비록 그 마을은 작지만 쓰레기를 거의 만들지 않는다.', en: 'Although the town is small, it makes almost no trash.'},
          {ko: '비가 오고 있었지만 우리는 해변을 청소했다.', en: 'Although it was raining, we cleaned the beach.'},
          {ko: '어려워 보이지만 나는 해 볼 것이다.', en: 'Although it looks hard, I will try.'}
        ]
      },
      { id: 'g2', name: 'the 비교급, the 비교급', short: 'the 비교급', form: 'The + 비교급 + 주어 + 동사, the + 비교급 + 주어 + 동사', meaning: '~할수록 더 …하다',
        notice: [
          {en: '{{The more}} we cook at home, {{the less}} trash we make.', ko: '집에서 요리를 많이 할수록 쓰레기를 덜 만든다.'},
          {en: '{{The hotter}} it gets, {{the more}} energy we use.', ko: '더워질수록 우리는 더 많은 에너지를 쓴다.'},
          {en: '{{The more}}, {{the better}}.', ko: '많을수록 더 좋다.'}
        ],
        rule: [
          {k: '형태', v: 'The + 비교급 (주어 + 동사), the + 비교급 (주어 + 동사)', ex: 'The older he got, the wiser he became.'},
          {k: '명사와 함께', v: 'the more + 명사 / the less + 명사', ex: 'The more trees we plant, the cleaner the air is.'},
          {k: '줄임', v: '뜻이 분명하면 주어·동사 생략', ex: 'The sooner, the better.'}
        ],
        check: [
          {q: 'The ____ you practice, the better you get. (much)', a: 'more'},
          {q: 'The hotter it is, the ____ water we drink. (much)', a: 'more'},
          {q: 'The ____ plastic we use, the cleaner the sea is. (little)', a: 'less'},
          {q: 'The higher we climb, the ____ it gets. (cold)', a: 'colder'},
          {q: 'The sooner, the ____. (good)', a: 'better'}
        ],
        trap: {bad: 'More you recycle, more you save.', good: 'The more you recycle, the more you save.', why: '두 비교급 앞에 모두 the를 붙인다.'},
        scramble: [
          {ko: '나무를 많이 심을수록 공기가 더 깨끗해진다.', en: 'The more trees we plant, the cleaner the air becomes.'},
          {ko: '플라스틱을 덜 쓸수록 바다는 더 건강해진다.', en: 'The less plastic we use, the healthier the ocean is.'},
          {ko: '빠를수록 더 좋다.', en: 'The sooner, the better.'}
        ]
      }
    ],
    wrap: {en: 'Although ______, I will ______. The more ______, the ______.', ko: 'although 한 문장, the 비교급 한 문장으로 나의 환경 약속 쓰기'},
    wrapEx: 'Although it is not easy, I will bring my own cup. The more students join, the fewer cups we will throw away.'
  },

  reading: {
    title: 'Small Steps, Big Changes', kind: '정보문', cover: 'Zero', coverKo: '쓰레기를 거의 버리지 않는 마을', cover2: 'Ocean', coverKo2: '바다를 청소하려는 청년',
    before: [
      {q: 'Look at the title. What small steps can change the world?', a: '분리배출, 텀블러 쓰기 등'},
      {q: 'Can a whole town make almost no trash?', a: '자유롭게 예측한 뒤 글과 비교'}
    ],
    gloss: {'Kamikatsu': '가미카쓰(일본의 마을)', 'zero waste': '쓰레기 제로', 'categories': '종류, 범주', 'garbage truck': '쓰레기 수거 차량', 'secondhand': '중고의', 'Boyan Slat': '보얀 슬랫', 'the Netherlands': '네덜란드', 'Pacific': '태평양', 'barrier': '장벽', 'skeptical': '회의적인'},
    paras: [
      {who: '', en: 'Every year, the world produces billions of tons of trash. A lot of it ends up in the ocean. Although this problem seems too big for one person, some people are making a difference. Here are their stories.',
       ko: '해마다 전 세계는 수십억 톤의 쓰레기를 만들어 냅니다. 그중 많은 양이 결국 바다로 가죠. 이 문제는 한 사람에게 너무 커 보이지만, 변화를 만들고 있는 사람들이 있습니다. 그들의 이야기를 소개합니다.',
       check: {q: 'Where does a lot of trash end up?', a: 'In the ocean.'}, think: '‘너무 큰 문제’ 앞에서 우리는 보통 어떻게 반응할까?'},
      {who: 'A Town with Almost No Trash', en: 'Kamikatsu is a small town in the mountains of Japan. In 2003, it became the first town in Japan to set a goal of “zero waste.” There is no garbage truck in the town. Instead, people bring their trash to a center.',
       ko: '가미카쓰는 일본 산속에 있는 작은 마을입니다. 2003년, 이 마을은 일본에서 처음으로 ‘쓰레기 제로’라는 목표를 세웠죠. 마을에는 쓰레기 수거 차량이 없습니다. 대신 사람들이 쓰레기를 센터로 직접 가져옵니다.',
       check: {q: 'What goal did Kamikatsu set in 2003?', a: 'Zero waste.'}, think: '쓰레기차가 없다면 우리 동네는 어떻게 될까?'},
      {who: 'A Town with Almost No Trash', en: 'At the center, they sort their trash into more than 40 categories. Although it takes time, people say they don’t mind. There is also a shop where people leave old things and take secondhand things for free. The more they reuse, the less they throw away.',
       ko: '센터에서 사람들은 쓰레기를 40개가 넘는 종류로 분류합니다. 시간이 걸리지만 사람들은 괜찮다고 말하죠. 또 사람들이 헌 물건을 두고 가고 중고 물건을 무료로 가져갈 수 있는 가게도 있습니다. 많이 재사용할수록 덜 버리게 되는 것입니다.',
       check: {q: 'How many categories do they sort their trash into?', a: 'More than 40.'}, think: '40가지 분류, 우리라면 할 수 있을까?'},
      {who: 'A Boy and the Ocean', en: 'When Boyan Slat was 16, he went diving in Greece. He saw more plastic bags than fish. “Why can’t we just clean it up?” he wondered. Many adults said it was impossible.',
       ko: '보얀 슬랫은 16살 때 그리스에서 잠수를 했습니다. 그는 물고기보다 비닐봉지를 더 많이 보았죠. “그냥 치우면 안 되나?” 그는 궁금했습니다. 많은 어른은 불가능하다고 말했습니다.',
       check: {q: 'What did Boyan see while diving?', a: 'More plastic bags than fish.'}, think: '어른들이 불가능하다고 할 때 나라면 어떻게 할까?'},
      {who: 'A Boy and the Ocean', en: 'Although many people were skeptical, Boyan didn’t give up. In 2013, at the age of 18, he started The Ocean Cleanup in the Netherlands. His team builds long barriers that collect plastic floating in the ocean. They are still testing and improving them today.',
       ko: '많은 사람이 회의적이었지만 보얀은 포기하지 않았습니다. 2013년, 18살의 나이에 그는 네덜란드에서 ‘오션 클린업’을 시작했죠. 그의 팀은 바다에 떠다니는 플라스틱을 모으는 긴 장벽을 만듭니다. 그들은 오늘도 그것을 시험하고 개선하고 있습니다.',
       check: {q: 'What does Boyan’s team build?', a: 'Long barriers that collect plastic floating in the ocean.'}, think: '‘아직 시험 중’이라는 말은 무엇을 알려 줄까?'},
      {who: 'Our Class', en: 'After reading these stories, our class tried a “no plastic week.” Although we forgot our cups on the first day, we got better. By Friday, our class trash bin was almost empty. The longer we kept trying, the easier it became.',
       ko: '이 이야기들을 읽은 뒤 우리 반은 ‘플라스틱 없는 주간’에 도전했습니다. 첫날에는 컵을 깜빡했지만 점점 나아졌죠. 금요일쯤에는 교실 쓰레기통이 거의 비어 있었습니다. 오래 시도할수록 더 쉬워졌습니다.',
       check: {q: 'What happened to the class trash bin by Friday?', a: 'It was almost empty.'}, think: '우리 반이라면 어떤 도전을 해 볼까?'},
      {who: 'Your Step', en: 'A town, a young man, and a class all started with one small step. You don’t have to save the whole planet today. Just start with one thing. The more people take small steps, the greener our tomorrow will be.',
       ko: '마을도, 한 청년도, 한 학급도 모두 작은 한 걸음에서 시작했습니다. 오늘 지구 전체를 구할 필요는 없어요. 한 가지만 시작해 보세요. 작은 걸음을 내딛는 사람이 많을수록 우리의 내일은 더 푸르러질 것입니다.',
       check: {q: 'What does the writer tell us to do?', a: 'Start with one small thing.'}, think: '내가 오늘 시작할 한 가지는?'}
    ],
    split: 3,
    next: '어른들이 불가능하다고 한 일에\n도전한 소년은?',
    recap: {q: '가미카쓰 마을의 방법은?', items: [{k: '2003', v: 'a goal of zero waste'}, {k: '40+', v: 'categories of trash'}, {k: 'REUSE', v: 'a free secondhand shop'}]},
    tf: [
      {p: 1, s: 'Kamikatsu has many garbage trucks.', a: false, why: '쓰레기 수거 차량이 없다.'},
      {p: 2, s: 'People in Kamikatsu sort trash into more than 40 categories.', a: true},
      {p: 3, s: 'Boyan saw more fish than plastic bags.', a: false, why: '비닐봉지를 더 많이 봤다.'},
      {p: 4, s: 'Boyan started The Ocean Cleanup at the age of 18.', a: true},
      {p: 5, s: 'The class remembered their cups on the first day.', a: false, why: '첫날에는 잊었다.'},
      {p: 6, s: 'The writer says we must save the whole planet today.', a: false, why: '한 가지부터 시작하라고 했다.'}
    ],
    key: [
      {en: '{{Although}} this problem seems too big for one person, some people are making a difference.', note: '양보 접속사 although', g: 'g1'},
      {en: 'There is a shop {{where}} people leave old things.', note: '관계부사 where (Lesson 4 복습)', g: ''},
      {en: '{{The more}} they reuse, {{the less}} they throw away.', note: 'the 비교급, the 비교급', g: 'g2'},
      {en: '{{Although}} many people were skeptical, Boyan didn’t give up.', note: '양보 접속사 although', g: 'g1'},
      {en: '{{The longer}} we kept trying, {{the easier}} it became.', note: 'the 비교급, the 비교급', g: 'g2'},
      {en: 'You don’t {{have to}} save the whole planet today.', note: 'don’t have to: ~할 필요 없다', g: ''}
    ],
    summary: {text: 'Kamikatsu set a goal of zero {{waste}} and sorts trash into more than 40 {{categories}}. Boyan Slat started a project to clean {{plastic}} from the ocean. Although our class {{forgot}} cups at first, the bin was almost {{empty}} by Friday. The more people take small {{steps}}, the greener our tomorrow will be.'},
    order: ['Boyan went diving in Greece.', 'He saw more plastic bags than fish.', 'Many adults said it was impossible.', 'He started The Ocean Cleanup.'],
    chart: {title: 'SMALL STEPS', ko: '세 가지 실천 비교하기', cols: ['Problem', 'Step'], note: '규모(마을 · 개인 · 학급)는 달라도 ‘한 가지부터 시작’했다는 공통점으로 모은다.', rows: [
      {name: 'Kamikatsu', cells: ['too much trash', 'sort into 40+ categories, reuse']},
      {name: 'Boyan Slat', cells: ['plastic in the ocean', 'build barriers to collect it']},
      {name: 'Our class', cells: ['plastic cups', 'a no plastic week']}
    ]},
    wrap: {en: 'Although ______, I will start ______. The more ______, the greener ______.', ko: '관통 질문으로 돌아가기: 한 사람으로서 지구를 위해 할 일 쓰기'}
  },

  quiz: [
    ['“재활용하다”를 뜻하는 낱말은?', ['recycle', 'reduce', 'reuse', 'replace'], 0, 'recycle: 재활용하다'],
    ['“disposable”의 반대말은?', ['local', 'plastic', 'reusable', 'environmental'], 2, 'disposable ↔ reusable'],
    ['“Plastic doesn’t break ___ easily.” (분해되다)', ['in', 'up', 'through', 'down'], 3, 'break down'],
    ['걱정을 표현하는 말은?', ['Sounds great.', 'I’m worried about it.', 'That’s a good idea.', 'How about going there?'], 1, 'I’m worried about ~.'],
    ['제안하는 표현이 아닌 것은?', ['Why don’t we go?', 'How about walking?', 'We’d better leave right now before it rains.', 'I’m afraid that it’s too hot.'], 3, 'I’m afraid that ~은 걱정 표현'],
    ['Let’s Watch에서 쓰레기의 대부분은?', ['병', '종이', '음식 포장재', '못 쓰게 된 헌 옷과 신발'], 2, 'Most of it is food packaging.'],
    ['빈칸에 알맞은 것은? “___ it was cold, we swam.”', ['If', 'So', 'Although', 'As soon as'], 2, '예상과 반대: Although'],
    ['빈칸에 알맞은 것은? “The more you read, ___ you know.”', ['the more', 'more', 'most', 'the most'], 0, 'the 비교급, the 비교급'],
    ['어법상 틀린 문장은?', ['The sooner, the better.', 'Though it’s small, I like it.', 'The older he got, the wiser he was.', 'Although it rained, but we played.'], 3, 'although와 but은 함께 쓰지 않는다.'],
    ['우리말과 뜻이 같은 것은? “많이 연습할수록 더 잘하게 된다.”', ['If you practice, you get good.', 'The more you practice, the better you get.', 'You practice more than you get.', 'Although you practice a lot, you never get any better.'], 1, 'The more ~, the better ~'],
    ['가미카쓰 마을에 없는 것은?', ['센터', '중고 가게', '쓰레기 수거 차량', '쓰레기 분류 규칙과 안내문'], 2, 'There is no garbage truck.'],
    ['보얀 슬랫이 잠수한 곳은?', ['그리스', '일본', '네덜란드', '태평양 한가운데'], 0, 'in Greece'],
    ['보얀이 오션 클린업을 시작한 나이는?', ['18살', '16살', '20살', '30살이 넘어서'], 0, 'at the age of 18'],
    ['우리 반이 도전한 것은?', ['해변 청소', '나무 심기', '학교 쓰레기 분류 대회 열기', '플라스틱 없는 주간'], 3, 'a “no plastic week”'],
    ['글의 요지로 가장 알맞은 것은?', ['쓰레기차를 늘려야 한다', '바다 청소는 불가능하다', '작은 실천이 큰 변화를 만든다', '플라스틱은 쓸모가 없다고 한다'], 2, 'started with one small step']
  ]
};
