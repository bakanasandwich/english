/* 중3 영어(동아·윤정미) Lesson 2 · Science Is All Around — 가안
   2022 개정 중3 교과서 목차 공개 전, 중3 문법 순서에 맞춰 만든 가안 단원입니다.
   읽기 글의 사실(벨크로·전자레인지·빵의 과학)은 널리 알려진 이야기를 바탕으로 새로 썼습니다. */
window.LESSON = {
  book: 'm3-donga', no: 2, estimate: true,
  title: 'Science Is All Around', ko: '과학은 어디에나 있다',
  bigQ: {en: 'What science is hidden in everyday things?', ko: '일상의 물건 속에는 어떤 과학이 숨어 있을까?'},
  goals: {
    vocab: ['과학·발명과 관련된 낱말 20개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 일상 속 과학 현상을 한 문장으로 설명할 수 있다.'],
    talk: ['궁금한 점을 표현할 수 있다.', '설명을 요청하고 설명할 수 있다.'],
    grammar: ['수동태(be + 과거분사)로 ‘~되다, ~받다’를 표현할 수 있다.', 'so that으로 목적(~하기 위해서, ~하도록)을 말할 수 있다.'],
    read1: ['글의 주제를 파악하고, 벨크로가 발명된 과정을 이해할 수 있다.'],
    read2: ['세 물건 속 과학을 정리하고 글의 요지를 요약하며, 일상 속 과학 질문을 영어로 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'Why do we put food in the fridge?', ko: '음식을 왜 냉장고에 넣을까요?', note: '“차가우면 세균이 덜 자란다” 같은 답을 이끈다. 당연해 보이는 일에도 과학적 까닭이 있다는 점으로 단원을 연다.'},
    words: [
      {w: 'scientist', pos: 'n.', ko: '과학자', ic: '🔬', ex: 'The scientist did an experiment.', exKo: '그 과학자는 실험을 했다.'},
      {w: 'experiment', pos: 'n.', ko: '실험', ic: '🧪', ex: 'We did an experiment in class.', exKo: '우리는 수업 시간에 실험을 했다.'},
      {w: 'invent', pos: 'v.', ko: '발명하다', ic: '💡', ex: 'Velcro was invented in Switzerland.', exKo: '벨크로는 스위스에서 발명되었다.'},
      {w: 'notice', pos: 'v.', ko: '알아차리다', ic: '👀', ex: 'He noticed something strange.', exKo: '그는 이상한 무언가를 알아차렸다.'},
      {w: 'microscope', pos: 'n.', ko: '현미경', ic: '🔍', ex: 'Look at it under a microscope.', exKo: '그것을 현미경으로 보아라.'},
      {w: 'hook', pos: 'n.', ko: '갈고리', ic: '🪝', ex: 'Tiny hooks hold the two sides together.', exKo: '작은 갈고리들이 두 면을 붙잡는다.'},
      {w: 'loop', pos: 'n.', ko: '고리', ic: '➰', ex: 'The hooks catch the loops.', exKo: '갈고리가 고리에 걸린다.'},
      {w: 'melt', pos: 'v.', ko: '녹다', ic: '🫠', ex: 'The chocolate melted in his pocket.', exKo: '초콜릿이 그의 주머니에서 녹았다.'},
      {w: 'wave', pos: 'n.', ko: '파동, 파장', ic: '〰️', ex: 'Microwaves are a kind of wave.', exKo: '마이크로파는 일종의 파동이다.'},
      {w: 'heat', pos: 'v./n.', ko: '데우다; 열', ic: '🔥', ex: 'Food is heated by microwaves.', exKo: '음식은 마이크로파에 의해 데워진다.'},
      {w: 'gas', pos: 'n.', ko: '기체', ic: '🫧', ex: 'Bubbles are filled with gas.', exKo: '거품은 기체로 채워져 있다.'},
      {w: 'yeast', pos: 'n.', ko: '효모', ic: '🍞', ex: 'Yeast makes bread rise.', exKo: '효모는 빵을 부풀게 한다.'},
      {w: 'rise', pos: 'v.', ko: '부풀다, 오르다', ic: '⬆️', ex: 'The dough rose in an hour.', exKo: '반죽이 한 시간 만에 부풀었다.'},
      {w: 'produce', pos: 'v.', ko: '만들어 내다', ic: '🏭', ex: 'Plants produce oxygen.', exKo: '식물은 산소를 만들어 낸다.'},
      {w: 'patent', pos: 'n.', ko: '특허', ic: '📜', ex: 'He got a patent for his idea.', exKo: '그는 자기 아이디어로 특허를 받았다.'},
      {w: 'accident', pos: 'n.', ko: '우연, 사고', ic: '🎲', ex: 'It was discovered by accident.', exKo: '그것은 우연히 발견되었다.'},
      {w: 'curious', pos: 'adj.', ko: '호기심이 많은', ic: '🧐', ex: 'Scientists are curious.', exKo: '과학자는 호기심이 많다.'},
      {w: 'explain', pos: 'v.', ko: '설명하다', ic: '🗣️', ex: 'Can you explain how it works?', exKo: '그게 어떻게 작동하는지 설명해 줄래?'},
      {w: 'ordinary', pos: 'adj.', ko: '평범한', ic: '🧺', ex: 'Science hides in ordinary things.', exKo: '과학은 평범한 물건 속에 숨어 있다.'},
      {w: 'principle', pos: 'n.', ko: '원리', ic: '⚙️', ex: 'The principle is simple.', exKo: '그 원리는 간단하다.'}
    ],
    phrases: [
      {w: 'by accident', ko: '우연히', ex: 'Penicillin was found by accident.', exKo: '페니실린은 우연히 발견되었다.'},
      {w: 'stick to', ko: '~에 달라붙다', ex: 'The seeds stuck to his coat.', exKo: '씨앗이 그의 외투에 달라붙었다.'},
      {w: 'be made from', ko: '~으로 만들어지다 (재료가 변함)', ex: 'Bread is made from flour.', exKo: '빵은 밀가루로 만들어진다.'},
      {w: 'figure out', ko: '알아내다, 이해하다', ex: 'He figured out how it worked.', exKo: '그는 그것이 어떻게 작동하는지 알아냈다.'},
      {w: 'turn into', ko: '~으로 바뀌다', ex: 'Water turns into ice at 0°C.', exKo: '물은 0도에서 얼음으로 바뀐다.'},
      {w: 'thanks to', ko: '~ 덕분에', ex: 'Thanks to science, life is easier.', exKo: '과학 덕분에 삶이 더 편하다.'}
    ],
    pairs: [
      {a: 'ordinary', b: 'special', rel: '반대말'},
      {a: 'melt', b: 'freeze', rel: '반대말'},
      {a: 'invent', b: 'invention', rel: '동사 / 명사'},
      {a: 'explain', b: 'explanation', rel: '동사 / 명사'}
    ],
    wrap: {en: 'I wonder why ______. Maybe it’s because ______.', ko: '오늘 배운 낱말로 일상 속 과학 궁금증 쓰기'}
  },

  talk: {
    hook: {en: 'What is something you always wondered about?', ko: '늘 궁금했던 것이 있나요?', note: '“하늘은 왜 파랄까?”, “고양이는 왜 상자를 좋아할까?” 등 엉뚱한 질문도 환영한다. 궁금증 표현(I wonder ~)으로 잇는다.'},
    speakers: {Jiho: {voice: 1, pitch: .95}, Amy: {voice: 0, pitch: 1.15}, 'Dr. Kim': {voice: 2, pitch: .9}, Sora: {voice: 0, pitch: 1.1}, Eric: {voice: 1, pitch: 1}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '궁금증 표현하기',
        key: {q: ['I wonder why / how ~.', 'I’m curious about ~.'], a: ['Me too. Let’s find out.', 'I heard (that) ~.', 'Let’s look it up.']},
        note: 'I wonder 뒤에는 why/how/if + 주어 + 동사 (간접의문문 순서). 4과 간접의문문의 예고편이 된다.',
        dialogs: [
          { title: 'Dialogue A', setting: '점심시간, 매점 앞', lines: [
            {s: 'Amy', en: 'Jiho, {{I wonder why}} popcorn pops.', ko: '지호야, 팝콘이 왜 터지는지 궁금해.'},
            {s: 'Jiho', en: '{{Me too. Let’s find out}}.', ko: '나도. 알아보자.'},
            {s: 'Amy', en: '{{I heard that}} there is a little water inside each kernel.', ko: '알갱이 하나하나에 물이 조금 들어 있다고 들었어.'},
            {s: 'Jiho', en: 'Oh, when it’s heated, the water turns into steam!', ko: '아, 데워지면 그 물이 수증기로 바뀌는구나!'},
            {s: 'Amy', en: 'Right. Then the kernel explodes. Pop!', ko: '맞아. 그러면 알갱이가 터지는 거야. 펑!'}
          ]},
          { title: 'Dialogue B', setting: '비 오는 날, 창가', lines: [
            {s: 'A', en: '{{I’m curious about}} rainbows. How are they made?', ko: '무지개가 궁금해. 어떻게 만들어지는 거야?'},
            {s: 'B', en: 'I’m not sure. {{Let’s look it up}}.', ko: '잘 모르겠어. 찾아보자.'},
            {s: 'A', en: 'It says sunlight is bent by raindrops.', ko: '햇빛이 빗방울에 의해 꺾인대.'},
            {s: 'B', en: 'So that’s why we see colors after rain!', ko: '그래서 비 온 뒤에 색이 보이는구나!'}
          ]}
        ],
        check: [
          {q: 'What does Amy wonder about?', a: 'Why popcorn pops.'},
          {q: 'What happens when the kernel is heated?', a: 'The water turns into steam, and the kernel explodes.'},
          {q: 'How are rainbows made?', a: 'Sunlight is bent by raindrops.'}
        ],
        drill: {frame: ['A: I wonder why ____.', 'B: Me too. Let’s find out.'], opts: ['the sky is blue', 'ice floats', 'cats purr', 'onions make us cry', 'leaves change color', 'we yawn']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '설명 요청하고 설명하기',
        key: {q: ['Could you explain ~?', 'What do you mean by ~?'], a: ['Sure. It means ~.', 'Let me explain. First, ~.', 'In other words, ~.']},
        note: '설명을 부탁할 때 Could you explain ~?가 공손하다. 설명할 때 In other words(다시 말해)로 쉽게 바꿔 말하게 한다.',
        dialogs: [
          { title: 'Dialogue A', setting: '과학관, 체험 부스', lines: [
            {s: 'Sora', en: 'Dr. Kim, {{could you explain}} how a microwave oven works?', ko: '김 박사님, 전자레인지가 어떻게 작동하는지 설명해 주실 수 있나요?'},
            {s: 'Dr. Kim', en: '{{Sure}}. Food is heated by microwaves. They make water in the food move very fast.', ko: '물론이지. 음식은 마이크로파로 데워진단다. 마이크로파가 음식 속 물을 아주 빠르게 움직이게 하지.'},
            {s: 'Sora', en: '{{What do you mean by}} “move fast”?', ko: '“빠르게 움직인다”는 게 무슨 뜻이에요?'},
            {s: 'Dr. Kim', en: 'The water shakes a lot. {{In other words}}, it rubs and makes heat.', ko: '물이 많이 흔들려. 다시 말해, 서로 비벼지면서 열을 만들어.'},
            {s: 'Sora', en: 'That’s like rubbing my hands in winter!', ko: '겨울에 손을 비비는 것과 비슷하네요!'}
          ]},
          { title: 'Dialogue B', setting: '과학 시간', lines: [
            {s: 'A', en: 'The teacher said, “Bread rises because of yeast.” What does that mean?', ko: '선생님이 “빵은 효모 때문에 부푼다”고 하셨어. 무슨 뜻이야?'},
            {s: 'B', en: '{{Let me explain}}. Yeast eats sugar and produces gas.', ko: '설명해 줄게. 효모가 설탕을 먹고 기체를 만들어.'},
            {s: 'A', en: 'And the gas makes bubbles?', ko: '그리고 그 기체가 거품을 만들어?'},
            {s: 'B', en: 'Exactly. The bubbles make the bread soft.', ko: '바로 그거야. 거품이 빵을 부드럽게 만들어.'}
          ]}
        ],
        check: [
          {q: 'How is food heated in a microwave oven?', a: 'By microwaves (they make the water move fast and make heat).'},
          {q: 'What does Sora compare it to?', a: 'Rubbing her hands in winter.'},
          {q: 'What does yeast produce?', a: 'Gas.'}
        ],
        drill: {frame: ['A: Could you explain ____?', 'B: Sure. Let me explain.'], opts: ['how a magnet works', 'why ice floats', 'how plants make food', 'what a virus is', 'how sound travels', 'why the moon changes']}
      }
    ],
    interviewEx: 'Minji wonders why onions make us cry. She asked me to explain how plants make food.',
    watch: {
      label: 'Let’s Watch', title: 'The Melted Chocolate', setting: '과학 동아리 시간. 에릭이 주머니에서 녹은 초콜릿을 꺼낸다.',
      lines: [
        {s: 'Eric', en: 'Oh no! My chocolate melted. It was in my pocket next to my phone.', ko: '아 이런! 초콜릿이 녹았어. 휴대폰 옆 주머니에 있었는데.'},
        {s: 'Sora', en: 'Funny. Something like that happened to a scientist, too.', ko: '재미있다. 비슷한 일이 한 과학자에게도 있었어.'},
        {s: 'Eric', en: 'Really? I’m curious. What happened?', ko: '정말? 궁금하다. 무슨 일이었는데?'},
        {s: 'Sora', en: 'In the 1940s, his candy bar melted near a machine that made microwaves.', ko: '1940년대에 그의 사탕 막대가 마이크로파를 만드는 기계 근처에서 녹았대.'},
        {s: 'Eric', en: 'And then?', ko: '그다음엔?'},
        {s: 'Sora', en: 'He tested it with popcorn. That’s how the microwave oven was invented!', ko: '그는 팝콘으로 시험해 봤대. 그렇게 전자레인지가 발명된 거야!'}
      ],
      check: [
        {q: 'Where was Eric’s chocolate?', a: 'In his pocket next to his phone.'},
        {q: 'What melted the scientist’s candy bar?', a: 'A machine that made microwaves.'},
        {q: 'What did the scientist test it with?', a: 'Popcorn.'}
      ]
    },
    wrap: {en: 'Tell your partner something you wonder about, and ask them to explain something.', ko: '궁금한 것을 말하고, 짝에게 무언가를 설명해 달라고 부탁하기'}
  },

  grammar: {
    cover: 'be + p.p.',
    hook: {en: 'Velcro {{was invented}} by a Swiss engineer.  /  He studied the seeds {{so that}} he could copy them.', ko: '빈칸에 들어갈 말은 각각 어떤 뜻을 만들까?', answer: 'was invented는 ‘발명되었다’(수동태), so that은 ‘~하기 위해서, ~하도록’(목적)', note: '첫 문장의 주어 Velcro가 스스로 발명하지 않았다는 점, 두 번째 문장에서 ‘왜 공부했는지’를 찾게 한다.'},
    points: [
      { id: 'g1', name: '수동태', short: '수동태', form: 'be동사 + 과거분사 (+ by 행위자)', meaning: '~되다, ~받다, ~해지다',
        notice: [
          {en: 'Velcro {{was invented}} in the 1940s.', ko: '벨크로는 1940년대에 발명되었다.'},
          {en: 'Food {{is heated}} by microwaves.', ko: '음식은 마이크로파에 의해 데워진다.'},
          {en: 'Bread {{is made}} from flour, water, and yeast.', ko: '빵은 밀가루, 물, 효모로 만들어진다.'}
        ],
        rule: [
          {k: '바꾸기', v: '능동: 주어 + 동사 + 목적어 → 수동: 목적어 + be + p.p. + by 주어', ex: 'He invented it. → It was invented by him.'},
          {k: '시제', v: 'be동사로 시제 표시: is/are(현재) · was/were(과거) · will be(미래)', ex: 'The bridge will be built next year.'},
          {k: 'by 생략', v: '행위자가 중요하지 않거나 일반 사람일 때', ex: 'English is spoken in many countries.'}
        ],
        compare: {
          title: '능동태 → 수동태', note: '목적어가 주어 자리로 가고, 동사는 be + p.p.로 바뀐다는 흐름을 화살표로 그려 준다.',
          head: ['능동태', '수동태', 'be동사 시제'],
          cols: [['George invented Velcro.', 'Yeast produces gas.', 'They will build a lab.'], ['Velcro was invented by George.', 'Gas is produced by yeast.', 'A lab will be built.'], ['was (과거)', 'is (현재)', 'will be (미래)']]
        },
        check: [
          {q: 'The light bulb ____ invented by Edison. (be, 과거)', a: 'was'},
          {q: 'This bread is ____ by my dad. (make)', a: 'made'},
          {q: 'Many apps ____ used by teens. (be, 현재)', a: 'are'},
          {q: 'The photo was taken ____ my sister.', a: 'by'},
          {q: 'The results will ____ shown tomorrow. (be)', a: 'be'}
        ],
        trap: {bad: 'The microwave oven was invent in 1945.', good: 'The microwave oven was invented in 1945.', why: '수동태는 be동사 뒤에 과거분사(p.p.)를 쓴다.'},
        scramble: [
          {ko: '그 실험은 학생들에 의해 행해졌다.', en: 'The experiment was done by the students.'},
          {ko: '음식은 마이크로파로 데워진다.', en: 'Food is heated by microwaves.'},
          {ko: '이 상자는 종이로 만들어졌다.', en: 'This box is made of paper.'}
        ]
      },
      { id: 'g2', name: 'so that', short: 'so that', form: '주어 + 동사 + so that + 주어 + can/could ~', meaning: '~하도록, ~하기 위해서',
        notice: [
          {en: 'He studied the seeds {{so that}} he {{could}} copy them.', ko: '그는 씨앗을 따라 만들 수 있도록 그것을 연구했다.'},
          {en: 'Put a lid on it {{so that}} the food {{doesn’t}} dry out.', ko: '음식이 마르지 않도록 뚜껑을 덮어라.'},
          {en: 'I set two alarms {{so that}} I {{can}} wake up early.', ko: '나는 일찍 일어날 수 있도록 알람을 두 개 맞춘다.'}
        ],
        rule: [
          {k: '쓰임', v: '목적: ~하도록 (뒤에 주어 + can/could/will 등)', ex: 'Speak loudly so that everyone can hear you.'},
          {k: '바꿔 쓰기', v: '주어가 같으면 to부정사 / in order to로', ex: 'I study hard so that I can pass. = I study hard to pass.'},
          {k: '구별', v: 'so ~ that (너무 ~해서 …하다)과 다르다', ex: 'It was so hot that we swam.'}
        ],
        check: [
          {q: 'Wear a mask so ____ you don’t get sick.', a: 'that'},
          {q: 'He ran fast so that he ____ catch the bus. (can, 과거)', a: 'could'},
          {q: 'Turn on the light so that we ____ see. (can)', a: 'can'},
          {q: 'I saved money so that I could ____ a microscope. (buy)', a: 'buy'},
          {q: 'She studies hard ____ pass the test. (to부정사로)', a: 'to'}
        ],
        trap: {bad: 'I left early so that I can not be late.', good: 'I left early so that I wouldn’t be late.', why: '과거 문장에서는 so that 뒤에도 과거형(could, wouldn’t)을 쓴다.'},
        scramble: [
          {ko: '모두가 볼 수 있도록 그것을 크게 써라.', en: 'Write it big so that everyone can see it.'},
          {ko: '그는 실험을 하기 위해 일찍 왔다.', en: 'He came early so that he could do the experiment.'},
          {ko: '빵이 부풀도록 효모를 넣어라.', en: 'Add yeast so that the bread can rise.'}
        ]
      }
    ],
    wrap: {en: '______ was invented by ______. People use it so that ______.', ko: '수동태 한 문장, so that 한 문장으로 일상 속 발명품 소개하기'},
    wrapEx: 'The telephone was invented by Bell. People use it so that they can talk from far away.'
  },

  reading: {
    title: 'The Secret Science of Ordinary Things', kind: '과학 잡지 기사', cover: 'Why?', coverKo: '평범한 물건의 비밀', cover2: 'How?', coverKo2: '부엌 속 과학',
    before: [
      {q: 'Look at the title. What “ordinary things” might be in the article?', a: '신발, 전자레인지, 빵 등 일상 물건'},
      {q: 'Do you know any inventions that came from nature?', a: '자유롭게 예측한 뒤 글과 비교'}
    ],
    gloss: {'burrs': '(식물의) 가시 씨앗', 'engineer': '기술자', 'fur': '털', 'fastener': '잠금장치', 'magnetron': '마그네트론 (마이크로파 발생 장치)', 'dough': '반죽', 'carbon dioxide': '이산화탄소', 'trapped': '갇힌', 'spongy': '스펀지 같은', 'curiosity': '호기심'},
    paras: [
      {who: '', en: 'Every day, we use things that seem very ordinary: shoes, a microwave oven, a slice of bread. But behind each one, there is a story of science. Let’s look at three of them.',
       ko: '우리는 날마다 아주 평범해 보이는 물건을 씁니다. 신발, 전자레인지, 빵 한 조각. 하지만 그 하나하나 뒤에는 과학 이야기가 있습니다. 그중 세 가지를 살펴봅시다.',
       check: {q: 'What is behind each ordinary thing?', a: 'A story of science.'}, think: '여러분 책상 위 물건 중 과학이 숨은 것은?'},
      {who: 'Velcro (1)', en: 'In 1941, a Swiss engineer named George de Mestral went hiking with his dog. When they came home, his pants and his dog’s fur were covered with burrs. He wondered why they stuck so well.',
       ko: '1941년, 스위스 기술자 조르주 드 메스트랄은 개와 함께 등산을 갔습니다. 집에 돌아왔을 때 그의 바지와 개의 털은 가시 씨앗으로 뒤덮여 있었죠. 그는 그것들이 왜 그렇게 잘 붙는지 궁금했습니다.',
       check: {q: 'What were his pants and his dog’s fur covered with?', a: 'Burrs.'}, think: '여러분이라면 그냥 떼어 냈을까, 궁금해했을까?'},
      {who: 'Velcro (2)', en: 'He looked at a burr under a microscope so that he could see the secret. It was covered with tiny hooks that caught on loops. After years of experiments, he made a fastener with hooks on one side and loops on the other. It was named Velcro.',
       ko: '그는 비밀을 볼 수 있도록 가시 씨앗을 현미경으로 들여다보았습니다. 씨앗은 고리에 걸리는 아주 작은 갈고리로 덮여 있었어요. 수년간의 실험 끝에, 그는 한쪽에는 갈고리, 다른 쪽에는 고리가 있는 잠금장치를 만들었습니다. 그것은 벨크로라고 이름 붙여졌습니다.',
       check: {q: 'What did he see under the microscope?', a: 'Tiny hooks that caught on loops.'}, think: '자연을 흉내 낸 다른 발명품은?'},
      {who: 'The Microwave Oven', en: 'The microwave oven was discovered by accident. In 1945, an engineer named Percy Spencer was working near a magnetron, a machine that makes microwaves. He noticed that the candy bar in his pocket had melted. He tested the machine with popcorn kernels, and they popped!',
       ko: '전자레인지는 우연히 발견되었습니다. 1945년, 퍼시 스펜서라는 기술자가 마이크로파를 만드는 기계인 마그네트론 근처에서 일하고 있었습니다. 그는 주머니 속 사탕 막대가 녹은 것을 알아차렸어요. 그가 팝콘 알갱이로 그 기계를 시험하자 팝콘이 터졌습니다!',
       check: {q: 'What did Percy Spencer notice?', a: 'The candy bar in his pocket had melted.'}, think: '‘우연’을 발견으로 바꾼 것은 무엇이었을까?'},
      {who: 'The Microwave Oven', en: 'How is food heated in a microwave oven? Microwaves make the water in food shake very fast. The water rubs against itself and produces heat. That’s why dry food doesn’t get hot as quickly as soup.',
       ko: '전자레인지에서 음식은 어떻게 데워질까요? 마이크로파는 음식 속 물을 아주 빠르게 흔듭니다. 물이 서로 비벼지면서 열을 만들어 내죠. 그래서 마른 음식은 수프만큼 빨리 뜨거워지지 않습니다.',
       check: {q: 'Why doesn’t dry food get hot quickly?', a: 'Because it has little water to shake and make heat.'}, think: '전자레인지에 금속을 넣으면 안 되는 까닭을 찾아보자.'},
      {who: 'Bread', en: 'Bread is made from flour, water, and yeast. Yeast is a tiny living thing. It eats the sugar in the dough and produces carbon dioxide. The gas is trapped in the dough, so the dough rises. That’s why bread is soft and spongy.',
       ko: '빵은 밀가루, 물, 효모로 만들어집니다. 효모는 아주 작은 생물이에요. 효모는 반죽 속 당을 먹고 이산화탄소를 만들어 냅니다. 그 기체가 반죽 속에 갇혀서 반죽이 부풀어 오르죠. 그래서 빵은 부드럽고 폭신합니다.',
       check: {q: 'What does yeast produce?', a: 'Carbon dioxide.'}, think: '빵을 잘라 단면을 보면 무엇이 보일까?'},
      {who: 'Your Turn', en: 'George and Percy were not looking for great inventions. They were simply curious about ordinary things. Science doesn’t only happen in labs. It begins when you ask, “Why?”',
       ko: '조르주와 퍼시는 위대한 발명을 찾고 있지 않았습니다. 그들은 그저 평범한 것에 호기심을 가졌을 뿐이죠. 과학은 실험실에서만 일어나지 않습니다. 여러분이 “왜?”라고 물을 때 시작됩니다.',
       check: {q: 'When does science begin, according to the writer?', a: 'When you ask, “Why?”'}, think: '오늘 하루 ‘왜?’라고 물을 만한 것 하나는?'}
    ],
    split: 3,
    next: '전자레인지와 빵 속에는\n어떤 과학이 있을까?',
    recap: {q: '벨크로는 어떻게 발명되었을까?', items: [{k: 'NOTICED', v: 'burrs stuck to his pants and dog'}, {k: 'STUDIED', v: 'under a microscope: tiny hooks and loops'}, {k: 'MADE', v: 'a fastener named Velcro'}]},
    tf: [
      {p: 1, s: 'George de Mestral went hiking with his cat.', a: false, why: '개와 함께 갔다.'},
      {p: 2, s: 'Burrs are covered with tiny hooks.', a: true},
      {p: 3, s: 'The microwave oven was invented on purpose.', a: false, why: '우연히 발견되었다.'},
      {p: 3, s: 'Percy Spencer tested the machine with popcorn.', a: true},
      {p: 5, s: 'Yeast produces carbon dioxide.', a: true},
      {p: 6, s: 'The writer says science only happens in labs.', a: false, why: '“왜?”라고 물을 때 시작된다.'}
    ],
    key: [
      {en: 'His pants and his dog’s fur {{were covered}} with burrs.', note: '수동태 be covered with: ~으로 뒤덮이다', g: 'g1'},
      {en: 'He looked at a burr under a microscope {{so that he could see}} the secret.', note: 'so that + 주어 + could (과거)', g: 'g2'},
      {en: 'It {{was named}} Velcro.', note: '수동태 (name A B → A is named B)', g: 'g1'},
      {en: 'The microwave oven {{was discovered}} by accident.', note: '수동태 과거', g: 'g1'},
      {en: 'How {{is}} food {{heated}} in a microwave oven?', note: '수동태 의문문: be + 주어 + p.p.', g: 'g1'},
      {en: 'Bread {{is made from}} flour, water, and yeast.', note: 'be made from: (재료가 변하는) ~으로 만들어지다', g: 'g1'}
    ],
    summary: {text: 'Velcro {{was invented}} after George saw tiny {{hooks}} on burrs under a microscope. The microwave oven was discovered by {{accident}} when a candy bar {{melted}}. Bread rises because yeast produces {{gas}}. Science begins when we are {{curious}} about ordinary things.'},
    order: ['George went hiking with his dog.', 'Burrs stuck to his pants.', 'He looked at a burr under a microscope.', 'He made a fastener named Velcro.'],
    chart: {title: 'THREE SECRETS', ko: '세 물건의 과학 정리하기', cols: ['How it started', 'The science'], note: '세 이야기 모두 ‘관찰 → 질문 → 실험’의 흐름이라는 공통점을 찾게 한다.', rows: [
      {name: 'Velcro', cells: ['burrs stuck to a dog', 'tiny hooks catch loops']},
      {name: 'Microwave', cells: ['a candy bar melted', 'water shakes and makes heat']},
      {name: 'Bread', cells: ['yeast in the dough', 'gas makes the dough rise']}
    ]},
    wrap: {en: 'I use ______ every day. It is made from ______. I wonder ______.', ko: '관통 질문으로 돌아가기: 일상 물건 하나의 과학을 조사할 질문 쓰기'}
  },

  quiz: [
    ['“현미경”을 뜻하는 낱말은?', ['microscope', 'microwave', 'magnet', 'machine'], 0, 'microscope: 현미경'],
    ['“ordinary”의 반대말은?', ['simple', 'special', 'curious', 'useful'], 1, 'ordinary ↔ special'],
    ['“It was found ___ accident.” (우연히)', ['in', 'on', 'by', 'at'], 2, 'by accident'],
    ['“Water turns ___ ice at 0°C.” (~으로 바뀌다)', ['to', 'on', 'out', 'into'], 3, 'turn into'],
    ['궁금증을 나타내는 표현은?', ['I wonder why.', 'Let me explain.', 'In other words.', 'That’s it.'], 0, 'I wonder ~ / I’m curious about ~'],
    ['설명을 요청하는 표현은?', ['Let me explain.', 'I heard that, too.', 'Could you explain it?', 'Let’s look it up online.'], 2, 'Could you explain ~?'],
    ['Let’s Watch에서 과학자가 시험해 본 음식은?', ['팝콘', '초콜릿', '달걀', '빵'], 0, 'He tested it with popcorn.'],
    ['빈칸에 알맞은 것은? “Velcro ___ invented in the 1940s.”', ['is', 'was', 'were', 'has'], 1, '과거 수동태: was + p.p.'],
    ['빈칸에 알맞은 것은? “Food is ___ by microwaves.”', ['heat', 'heats', 'heating', 'heated'], 3, 'be + p.p.'],
    ['빈칸에 알맞은 것은? “Speak loudly so ___ everyone can hear.”', ['as', 'that', 'what', 'which'], 1, 'so that: ~하도록'],
    ['어법상 틀린 문장은?', ['Bread is made from flour.', 'The test was done by us.', 'The oven was invent in 1945.', 'English is spoken in Canada.'], 2, 'was invented'],
    ['메스트랄이 가시 씨앗을 현미경으로 본 까닭은?', ['씨앗을 팔려고', '비밀을 보려고', '개를 치료하려고', '논문을 쓰려고'], 1, 'so that he could see the secret'],
    ['전자레인지가 음식을 데우는 원리는?', ['불꽃이 생겨서 데운다', '전기가 음식에 흐른다', '물이 흔들려 열이 난다', '공기가 뜨겁게 데워진다'], 2, 'Microwaves make the water shake.'],
    ['빵이 부풀어 오르는 까닭은?', ['밀가루를 많이 넣어서', '물이 펄펄 끓어서', '설탕이 반죽에서 녹아서', '효모가 기체를 만들어서'], 3, 'yeast produces carbon dioxide'],
    ['글의 요지로 알맞은 것은?', ['발명은 매우 어렵다', '실험실이 꼭 필요하다', '빵은 과학으로 만들어진다', '과학은 질문에서 시작된다'], 3, 'It begins when you ask, “Why?”']
  ]
};
