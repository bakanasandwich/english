/* 중2 영어(동아·윤정미) Lesson 6 · The Greatest Love for All
   단원명과 문법(지각동사 + 목적어 + -ing/동사원형, so ~ that)은 교과서 목차·문제집 목차 기준.
   의사소통 기능은 추정(estimate: true). 대화문·읽기 글(단편 이야기)은 교과서 원문이 아니라 새로 쓴 글입니다. */
window.LESSON = {
  book: 'm2-donga', no: 6, estimate: true,
  title: 'The Greatest Love for All', ko: '모두를 위한 가장 큰 사랑',
  bigQ: {en: 'How do the people around us show love?', ko: '우리 곁의 사람들은 사랑을 어떻게 보여 줄까?'},
  goals: {
    vocab: ['가족·감정과 관련된 낱말 20개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 고마운 사람을 한 문장으로 소개할 수 있다.'],
    talk: ['감사를 표현하고 그에 답할 수 있다.', '상대의 기분을 묻고 위로·격려할 수 있다.'],
    grammar: ['지각동사 + 목적어 + 동사원형/-ing로 보고 들은 것을 말할 수 있다.', 'so ~ that으로 원인과 결과를 말할 수 있다.'],
    read1: ['이야기의 배경과 인물을 파악하고, 주인공이 밤에 보고 들은 것을 이해할 수 있다.'],
    read2: ['주인공의 마음 변화를 파악하고, 고마운 사람에게 전하는 글을 영어로 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'Who makes your breakfast or lunch?', ko: '여러분의 아침이나 도시락은 누가 챙겨 주나요?', note: '당연하게 여겼던 일상의 돌봄을 떠올리게 한다. 오늘 낱말 care, thankful, tired와 이어진다.'},
    words: [
      {w: 'care', pos: 'n./v.', ko: '돌봄; 돌보다', ic: '🤲', ex: 'Thank you for your care.', exKo: '돌봐 주셔서 고맙습니다.'},
      {w: 'nurse', pos: 'n.', ko: '간호사', ic: '🩺', ex: 'My aunt is a nurse at a hospital.', exKo: '우리 이모는 병원 간호사다.'},
      {w: 'shift', pos: 'n.', ko: '교대 근무', ic: '🕘', ex: 'She works the night shift.', exKo: '그녀는 야간 근무를 한다.'},
      {w: 'tired', pos: 'adj.', ko: '피곤한', ic: '😪', ex: 'Dad looked tired after work.', exKo: '아빠는 퇴근 후 피곤해 보였다.'},
      {w: 'quietly', pos: 'adv.', ko: '조용히', ic: '🤫', ex: 'She closed the door quietly.', exKo: '그녀는 문을 조용히 닫았다.'},
      {w: 'notice', pos: 'v.', ko: '알아차리다', ic: '👀', ex: 'I noticed her red eyes.', exKo: '나는 그녀의 빨개진 눈을 알아차렸다.'},
      {w: 'thankful', pos: 'adj.', ko: '고마워하는', ic: '🙏', ex: 'I’m thankful for my family.', exKo: '나는 가족에게 고맙다.'},
      {w: 'proud', pos: 'adj.', ko: '자랑스러운', ic: '🏅', ex: 'I’m proud of my mom.', exKo: '나는 엄마가 자랑스럽다.'},
      {w: 'touched', pos: 'adj.', ko: '감동한', ic: '🥹', ex: 'I was touched by her letter.', exKo: '나는 그녀의 편지에 감동했다.'},
      {w: 'hug', pos: 'n./v.', ko: '포옹; 안다', ic: '🤗', ex: 'Give me a hug.', exKo: '나를 안아 줘.'},
      {w: 'lunch box', pos: 'n.', ko: '도시락', ic: '🍱', ex: 'Mom packed my lunch box.', exKo: '엄마가 내 도시락을 쌌다.'},
      {w: 'sacrifice', pos: 'n./v.', ko: '희생; 희생하다', ic: '💝', ex: 'Parents make many sacrifices.', exKo: '부모는 많은 희생을 한다.'},
      {w: 'secret', pos: 'n.', ko: '비밀', ic: '🤐', ex: 'Can you keep a secret?', exKo: '비밀 지킬 수 있어?'},
      {w: 'whisper', pos: 'v.', ko: '속삭이다', ic: '🗣️', ex: 'She whispered, “Good night.”', exKo: '그녀는 “잘 자.”라고 속삭였다.'},
      {w: 'snowy', pos: 'adj.', ko: '눈이 내리는', ic: '❄️', ex: 'It was a cold, snowy night.', exKo: '춥고 눈 내리는 밤이었다.'},
      {w: 'wake', pos: 'v.', ko: '깨다, 깨우다', ic: '⏰', ex: 'A sound woke me up.', exKo: '어떤 소리에 나는 잠이 깼다.'},
      {w: 'note', pos: 'n.', ko: '쪽지, 메모', ic: '📝', ex: 'I left a note on the table.', exKo: '나는 식탁에 쪽지를 남겼다.'},
      {w: 'cheer', pos: 'v.', ko: '기운을 북돋우다', ic: '📣', ex: 'Her smile cheered me up.', exKo: '그녀의 미소가 나를 기운 나게 했다.'},
      {w: 'appreciate', pos: 'v.', ko: '고마워하다', ic: '💐', ex: 'I really appreciate your help.', exKo: '도와줘서 정말 고마워.'},
      {w: 'greatest', pos: 'adj.', ko: '가장 큰, 가장 위대한', ic: '🌟', ex: 'It was the greatest gift.', exKo: '그것은 가장 큰 선물이었다.'}
    ],
    phrases: [
      {w: 'take care of', ko: '~을 돌보다', ex: 'Grandma takes care of my sister.', exKo: '할머니가 내 여동생을 돌보신다.'},
      {w: 'fall asleep', ko: '잠들다', ex: 'He fell asleep on the sofa.', exKo: '그는 소파에서 잠들었다.'},
      {w: 'be proud of', ko: '~을 자랑스러워하다', ex: 'We are proud of you.', exKo: '우리는 네가 자랑스럽다.'},
      {w: 'for a while', ko: '잠시 동안', ex: 'I stood there for a while.', exKo: '나는 잠시 거기 서 있었다.'},
      {w: 'cheer up', ko: '기운 내다', ex: 'Cheer up! You can do it.', exKo: '기운 내! 넌 할 수 있어.'},
      {w: 'thanks to', ko: '~ 덕분에', ex: 'Thanks to you, I’m happy.', exKo: '네 덕분에 나는 행복해.'}
    ],
    pairs: [
      {a: 'quietly', b: 'loudly', rel: '반대말'},
      {a: 'thankful', b: 'grateful', rel: '비슷한 말'},
      {a: 'appreciate', b: 'thank', rel: '비슷한 말'},
      {a: 'great', b: 'greatest', rel: '원급 / 최상급'}
    ],
    wrap: {en: 'I’m thankful for ______ because ______.', ko: '오늘 배운 낱말을 넣어 고마운 사람 한 명 소개하기'}
  },

  talk: {
    hook: {en: 'When was the last time you said “thank you” to your family?', ko: '가족에게 마지막으로 “고마워”라고 말한 때는 언제인가요?', note: '쉽게 떠오르지 않는다는 반응이 많다. 그 반응 자체를 오늘 이야기의 출발점으로 삼는다.'},
    speakers: {Sujin: {voice: 0, pitch: 1.1}, Dad: {voice: 1, pitch: .85}, Ethan: {voice: 1, pitch: .95}, Lily: {voice: 0, pitch: 1.15}, Grandpa: {voice: 2, pitch: .8}, Ryan: {voice: 1, pitch: 1}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '감사 표현하고 답하기',
        key: {q: ['Thank you for -ing / 명사.', 'I really appreciate ~.'], a: ['You’re welcome.', 'My pleasure.', 'No problem. / Anytime.']},
        note: 'Thank you for 뒤에는 명사나 -ing. 감사를 받으면 You’re welcome. / My pleasure. 로 답한다.',
        dialogs: [
          { title: 'Dialogue A', setting: '토요일 아침, 부엌', lines: [
            {s: 'Sujin', en: 'Dad, {{thank you for}} making pancakes!', ko: '아빠, 팬케이크 만들어 주셔서 고마워요!'},
            {s: 'Dad', en: '{{My pleasure}}. I heard you talking about pancakes yesterday.', ko: '천만에. 어제 네가 팬케이크 얘기하는 걸 들었거든.'},
            {s: 'Sujin', en: 'Really? You remembered that?', ko: '정말요? 그걸 기억하셨어요?'},
            {s: 'Dad', en: 'Of course. Eat them while they’re warm.', ko: '당연하지. 따뜻할 때 먹으렴.'},
            {s: 'Sujin', en: 'They’re so delicious that I want more!', ko: '너무 맛있어서 더 먹고 싶어요!'},
            {s: 'Dad', en: 'Ha-ha. There’s plenty.', ko: '하하. 많이 있어.'}
          ]},
          { title: 'Dialogue B', setting: '교실, 시험 전날', lines: [
            {s: 'A', en: 'Here are my notes for the science test.', ko: '과학 시험 정리 노트 여기 있어.'},
            {s: 'B', en: 'Wow, {{I really appreciate}} it.', ko: '와, 정말 고마워.'},
            {s: 'A', en: '{{No problem}}. Good luck tomorrow!', ko: '괜찮아. 내일 잘 봐!'},
            {s: 'B', en: 'You too. I’ll buy you a snack after the test.', ko: '너도. 시험 끝나고 간식 살게.'}
          ]}
        ],
        check: [
          {q: 'What did Dad make?', a: 'Pancakes.'},
          {q: 'How did Dad know Sujin wanted pancakes?', a: 'He heard her talking about pancakes yesterday.'},
          {q: 'What will B do after the test?', a: 'B will buy A a snack.'}
        ],
        drill: {frame: ['A: Thank you for ____.', 'B: My pleasure.'], opts: ['helping me', 'the gift', 'your advice', 'waiting for me', 'the lunch box', 'listening to me']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '기분 묻고 위로·격려하기',
        key: {q: ['You look down. What’s wrong?', 'Is everything okay?'], a: ['I’m sorry to hear that.', 'Cheer up!', 'Don’t worry. Everything will be fine.']},
        note: '좋지 않은 소식을 들으면 I’m sorry to hear that. 다음에 격려(Cheer up! / You can do it.)를 덧붙인다.',
        dialogs: [
          { title: 'Dialogue A', setting: '방과 후, 운동장 벤치', lines: [
            {s: 'Lily', en: 'Ethan, {{you look down}}. {{What’s wrong}}?', ko: '이선, 기운 없어 보여. 무슨 일이야?'},
            {s: 'Ethan', en: 'My grandpa is in the hospital.', ko: '할아버지가 병원에 계셔.'},
            {s: 'Lily', en: 'Oh, {{I’m sorry to hear that}}. Is he okay?', ko: '아, 안타깝다. 괜찮으셔?'},
            {s: 'Ethan', en: 'He’s getting better, but I’m still worried.', ko: '나아지고 계신데, 그래도 걱정돼.'},
            {s: 'Lily', en: '{{Cheer up}}. Why don’t you make him a card?', ko: '힘내. 할아버지께 카드를 만들어 드리는 건 어때?'},
            {s: 'Ethan', en: 'That’s a great idea. Thanks, Lily.', ko: '좋은 생각이다. 고마워, 릴리.'}
          ]},
          { title: 'Dialogue B', setting: '저녁, 전화 통화', lines: [
            {s: 'A', en: '{{Is everything okay}}? You sound tired.', ko: '괜찮아? 목소리가 피곤하게 들려.'},
            {s: 'B', en: 'I didn’t do well in the contest.', ko: '대회에서 잘 못했어.'},
            {s: 'A', en: '{{Don’t worry}}. You practiced so hard that I’m proud of you.', ko: '걱정 마. 네가 정말 열심히 연습해서 난 네가 자랑스러워.'},
            {s: 'B', en: 'Thanks. That really cheers me up.', ko: '고마워. 정말 힘이 된다.'}
          ]}
        ],
        check: [
          {q: 'Why does Ethan look down?', a: 'Because his grandpa is in the hospital.'},
          {q: 'What does Lily suggest?', a: 'She suggests making a card for his grandpa.'},
          {q: 'Why is A proud of B?', a: 'Because B practiced very hard.'}
        ],
        drill: {frame: ['A: You look down. What’s wrong?', 'B: ____.', 'A: I’m sorry to hear that. Cheer up!'], opts: ['I lost my phone', 'My dog is sick', 'I failed the test', 'I had a fight with my friend', 'I missed the bus', 'My team lost']}
      }
    ],
    interviewEx: 'I thanked my mom for making breakfast. She said, “My pleasure.”',
    watch: {
      label: 'Let’s Watch', title: 'A Card for Grandpa', setting: '병원 병실. 이선과 릴리가 직접 만든 카드를 들고 할아버지를 찾아간다.',
      lines: [
        {s: 'Ethan', en: 'Grandpa, we made this card for you.', ko: '할아버지, 저희가 할아버지께 드리려고 이 카드를 만들었어요.'},
        {s: 'Grandpa', en: 'For me? Thank you for coming, kids.', ko: '나한테? 와 줘서 고맙구나, 얘들아.'},
        {s: 'Lily', en: 'My pleasure. Ethan was so worried that he couldn’t sleep.', ko: '천만에요. 이선이 너무 걱정해서 잠도 못 잤어요.'},
        {s: 'Grandpa', en: 'Oh, my boy. I heard you singing outside the door. Was that you?', ko: '아이고, 우리 손자. 문밖에서 네가 노래하는 걸 들었는데. 너였니?'},
        {s: 'Ethan', en: 'Yes. It’s the song you used to sing for me.', ko: '네. 할아버지가 예전에 불러 주시던 노래예요.'},
        {s: 'Grandpa', en: 'I’m so touched that I can’t say anything. Come here. Give me a hug.', ko: '너무 감동해서 아무 말도 못 하겠구나. 이리 오렴. 안아 주자.'}
      ],
      check: [
        {q: 'What did Ethan and Lily bring?', a: 'A card (for Grandpa).'},
        {q: 'What did Grandpa hear outside the door?', a: 'He heard Ethan singing.'},
        {q: 'How does Grandpa feel?', a: 'He is so touched that he can’t say anything.'}
      ]
    },
    wrap: {en: 'Thank your partner for something, then cheer them up about a worry.', ko: '짝에게 고마운 일 하나를 말하고, 짝의 걱정 하나를 듣고 격려해 주기'}
  },

  grammar: {
    cover: 'see · so ~ that',
    hook: {en: 'I {{saw}} Mom {{cooking}} at night.  /  She was {{so}} tired {{that}} she fell asleep.', ko: '빈칸에 들어갈 말은 각각 어떤 뜻을 더해 줄까?', answer: 'see + 사람 + -ing는 ‘~가 …하고 있는 것을 보다’, so ~ that은 ‘너무 ~해서 …하다’', note: '첫 문장에서 누가 cooking을 하는지(Mom) 묻는다. 두 번째 문장은 원인(tired)과 결과(fell asleep)를 찾게 한다.'},
    points: [
      { id: 'g1', name: '지각동사 + 목적어 + 동사원형/-ing', short: '지각동사', form: 'see / hear / watch / feel + 목적어 + 동사원형 / -ing', meaning: '~가 …하는(하고 있는) 것을 보다/듣다',
        notice: [
          {en: 'I {{heard}} Mom {{open}} the door.', ko: '나는 엄마가 문을 여는 소리를 들었다.'},
          {en: 'I {{saw}} her {{making}} my lunch box.', ko: '나는 그녀가 내 도시락을 싸고 있는 것을 보았다.'},
          {en: 'She {{felt}} someone {{touch}} her shoulder.', ko: '그녀는 누군가 어깨를 건드리는 것을 느꼈다.'}
        ],
        rule: [
          {k: '동사원형', v: '동작 전체를 보거나 들었을 때', ex: 'I saw him cross the street.'},
          {k: '-ing', v: '진행 중인 순간을 보거나 들었을 때 (생생함)', ex: 'I saw him crossing the street.'},
          {k: '주의', v: 'to부정사는 쓰지 않는다', ex: 'I heard her sing. (○) / to sing (✗)'}
        ],
        compare: {
          title: '어떤 모양이 올 수 있을까?', note: '지각동사 뒤에는 동사원형이나 -ing만 온다. want, ask, tell 같은 동사는 to부정사를 쓴다는 점과 대비한다.',
          head: ['지각동사 + 동사원형', '지각동사 + -ing', '✗ to부정사'],
          cols: [['I saw him leave.', 'I heard her laugh.', 'I felt the house shake.'], ['I saw him leaving.', 'I heard her laughing.', 'I felt the house shaking.'], ['I saw him to leave.', 'I heard her to laugh.', 'I felt the house to shake.']]
        },
        check: [
          {q: 'I heard my sister ____ a song. (sing)', a: 'sing / singing'},
          {q: 'We watched the children ____ in the snow. (play)', a: 'play / playing'},
          {q: 'She saw a cat ____ the street. (cross)', a: 'cross / crossing'},
          {q: 'I felt something ____ my hand. (touch)', a: 'touch / touching'},
          {q: 'Did you hear Dad ____ in? (come)', a: 'come / coming'}
        ],
        trap: {bad: 'I saw my mom to make dinner.', good: 'I saw my mom making dinner.', why: '지각동사 뒤 목적어 다음에는 to부정사를 쓰지 않는다.'},
        scramble: [
          {ko: '나는 아빠가 콧노래를 부르는 것을 들었다.', en: 'I heard Dad humming a song.'},
          {ko: '그는 엄마가 문을 닫는 것을 보았다.', en: 'He saw his mom close the door.'},
          {ko: '우리는 눈이 내리는 것을 지켜보았다.', en: 'We watched the snow falling.'}
        ]
      },
      { id: 'g2', name: 'so ~ that', short: 'so ~ that', form: 'so + 형용사/부사 + that + 주어 + 동사', meaning: '너무 ~해서 …하다',
        notice: [
          {en: 'She was {{so}} tired {{that}} she fell asleep.', ko: '그녀는 너무 피곤해서 잠이 들었다.'},
          {en: 'The pancakes were {{so}} good {{that}} I ate five.', ko: '팬케이크가 너무 맛있어서 나는 다섯 개를 먹었다.'},
          {en: 'He spoke {{so}} quietly {{that}} I couldn’t hear him.', ko: '그는 너무 조용히 말해서 나는 들을 수 없었다.'}
        ],
        rule: [
          {k: '원인 → 결과', v: 'so 뒤 = 원인, that 뒤 = 결과', ex: 'It was so cold that we stayed home.'},
          {k: '부정 결과', v: 'that + 주어 + can’t/couldn’t ~', ex: 'I was so busy that I couldn’t call you.'},
          {k: '바꿔 쓰기', v: 'so ~ that 주어 can’t = too ~ to', ex: 'He was too tired to walk.'}
        ],
        check: [
          {q: 'It was ____ cold that the river froze. (so / very)', a: 'so'},
          {q: 'I was so happy ____ I cried. (that / what)', a: 'that'},
          {q: 'The box was so heavy that I ____ lift it. (can’t, 과거)', a: 'couldn’t'},
          {q: 'She ran ____ fast that she won the race. (so)', a: 'so'},
          {q: 'He is too young ____ drive. (so ~ that = too ~ ___)', a: 'to'}
        ],
        trap: {bad: 'I was very tired that I went to bed early.', good: 'I was so tired that I went to bed early.', why: 'that과 짝을 이루는 것은 very가 아니라 so이다.'},
        scramble: [
          {ko: '그 이야기는 너무 슬퍼서 나는 울었다.', en: 'The story was so sad that I cried.'},
          {ko: '엄마는 너무 바빠서 점심을 먹지 못했다.', en: 'Mom was so busy that she couldn’t eat lunch.'},
          {ko: '나는 너무 감동해서 아무 말도 할 수 없었다.', en: 'I was so touched that I couldn’t say anything.'}
        ]
      }
    ],
    wrap: {en: 'I saw ______ ______. I was so ______ that ______.', ko: '지각동사 한 문장, so ~ that 한 문장으로 고마웠던 순간 쓰기'},
    wrapEx: 'I saw my dad cleaning my shoes. I was so touched that I hugged him.'
  },

  reading: {
    title: 'The Night Shift', kind: '단편 이야기', cover: 'Love', coverKo: '눈 내리던 밤', cover2: 'Thanks', coverKo2: '가장 큰 사랑에 답하기',
    before: [
      {q: 'Look at the title. What is a “night shift”?', a: '밤에 하는 교대 근무'},
      {q: 'Who in your family works hard for you?', a: '자유롭게 말한 뒤 이야기와 비교'}
    ],
    gloss: {
      'night shift': '야간 근무', hallway: '복도', 'tiptoed': '발끝으로 살금살금 걸었다', 'rice balls': '주먹밥', 'uniform': '유니폼, 근무복',
      'wiped': '닦았다', 'blanket': '담요', 'scrambled eggs': '스크램블드에그', 'ordinary': '평범한', 'shine': '빛나다'
    },
    paras: [
      {who: 'Part 1', en: 'My name is Jiho, and my mom is a nurse. She works the night shift three times a week. On those nights, she leaves after dinner and comes home before sunrise. I used to think that was normal. I never thought about how tired she was.',
       ko: '내 이름은 지호이고, 엄마는 간호사다. 엄마는 일주일에 세 번 야간 근무를 한다. 그런 날이면 저녁을 먹고 나가서 해가 뜨기 전에 집에 온다. 나는 그게 당연하다고 생각했다. 엄마가 얼마나 피곤한지 한 번도 생각해 본 적이 없었다.',
       check: {q: 'How often does Jiho’s mom work the night shift?', a: 'Three times a week.'}, think: '‘당연하다’고 여겼던 가족의 수고는?'},
      {who: 'Part 1', en: 'One snowy night, a sound woke me up. It was 5 a.m. I heard someone walk quietly down the hallway. I tiptoed to the kitchen door and looked inside.',
       ko: '눈 내리던 어느 밤, 어떤 소리에 잠이 깼다. 새벽 5시였다. 누군가 복도를 조용히 걸어가는 소리가 들렸다. 나는 부엌 문까지 살금살금 가서 안을 들여다보았다.',
       check: {q: 'What did Jiho hear at 5 a.m.?', a: 'He heard someone walk quietly down the hallway.'}, think: '지호는 누구라고 생각했을까?'},
      {who: 'Part 1', en: 'I saw Mom standing at the counter in her uniform. She was making rice balls for my lunch box. Her eyes were so tired that they looked red. Still, she was humming a song.',
       ko: '엄마가 근무복을 입은 채 조리대 앞에 서 있는 것이 보였다. 엄마는 내 도시락에 넣을 주먹밥을 만들고 있었다. 눈이 너무 피곤해서 빨개 보였다. 그런데도 엄마는 콧노래를 부르고 있었다.',
       check: {q: 'What was Mom making?', a: 'Rice balls for Jiho’s lunch box.'}, think: '피곤한데도 콧노래를 부른 까닭은?'},
      {who: 'Part 2', en: 'I stood there for a while. Every morning, I found my lunch box on the table, but I never asked who made it, or when. My chest felt so heavy that I couldn’t move.',
       ko: '나는 잠시 그대로 서 있었다. 매일 아침 식탁 위에서 도시락을 발견했지만, 누가 언제 만들었는지 한 번도 묻지 않았다. 가슴이 너무 무거워서 움직일 수가 없었다.',
       check: {q: 'Why couldn’t Jiho move?', a: 'His chest felt so heavy (he felt sorry and touched).'}, think: '지호의 마음을 한 낱말로 표현하면?'},
      {who: 'Part 2', en: 'Mom finished the rice balls and sat down on the sofa. A minute later, I heard her breathing slowly. She was so tired that she fell asleep in her uniform. I put a blanket over her.',
       ko: '엄마는 주먹밥을 다 만들고 소파에 앉았다. 1분 뒤, 엄마가 천천히 숨 쉬는 소리가 들렸다. 엄마는 너무 피곤해서 근무복을 입은 채 잠들었다. 나는 엄마에게 담요를 덮어 주었다.',
       check: {q: 'What did Jiho do for his mom?', a: 'He put a blanket over her.'}, think: '지호가 할 수 있는 다른 일은?'},
      {who: 'Part 3', en: 'That morning, I made scrambled eggs for the first time. They were not perfect, but I put them on a plate with a note: “Mom, thank you for everything. Please eat this when you wake up.”',
       ko: '그날 아침 나는 처음으로 스크램블드에그를 만들었다. 완벽하지는 않았지만 접시에 담고 쪽지를 남겼다. “엄마, 모든 것에 감사해요. 일어나시면 이거 드세요.”',
       check: {q: 'What did Jiho write on the note?', a: '“Mom, thank you for everything. Please eat this when you wake up.”'}, think: '여러분이라면 쪽지에 무엇을 쓸까?'},
      {who: 'Part 3', en: 'After school, I saw a new note on my desk. “Best eggs ever! I love you.” I learned something that day. The greatest love is often quiet. It hides in ordinary things, like a lunch box on the table.',
       ko: '학교에서 돌아오니 책상 위에 새 쪽지가 있었다. “최고의 달걀이었어! 사랑해.” 그날 나는 무언가를 배웠다. 가장 큰 사랑은 흔히 조용하다는 것. 그것은 식탁 위 도시락 같은 평범한 것 속에 숨어 있다.',
       check: {q: 'What did Jiho learn?', a: 'The greatest love is often quiet and hides in ordinary things.'}, think: '여러분 곁의 ‘조용한 사랑’은 무엇인가요?'}
    ],
    split: 3,
    next: '부엌에서 엄마를 본 지호는\n무엇을 했을까?',
    recap: {q: '지호는 새벽에 무엇을 보고 들었을까?', items: [{k: 'HEARD', v: 'someone walk quietly down the hallway'}, {k: 'SAW', v: 'Mom making rice balls in her uniform'}, {k: 'NOTICED', v: 'her eyes were so tired that they looked red'}]},
    tf: [
      {p: 0, s: 'Jiho’s mom works the night shift every day.', a: false, why: '일주일에 세 번.'},
      {p: 1, s: 'Jiho woke up at 5 a.m.', a: true},
      {p: 2, s: 'Mom was making rice balls for Jiho’s lunch.', a: true},
      {p: 4, s: 'Mom changed her clothes before she slept.', a: false, why: '근무복을 입은 채 잠들었다.'},
      {p: 5, s: 'Jiho made scrambled eggs for the first time.', a: true},
      {p: 6, s: 'Mom didn’t like the eggs.', a: false, why: '“Best eggs ever!”'}
    ],
    key: [
      {en: 'I {{heard someone walk}} quietly down the hallway.', note: 'hear + 목적어 + 동사원형', g: 'g1'},
      {en: 'I {{saw Mom standing}} at the counter in her uniform.', note: 'see + 목적어 + -ing (진행 중인 순간)', g: 'g1'},
      {en: 'Her eyes were {{so tired that}} they looked red.', note: 'so + 형용사 + that: 너무 ~해서 …하다', g: 'g2'},
      {en: 'My chest felt {{so heavy that}} I couldn’t move.', note: 'so ~ that + 주어 + couldn’t', g: 'g2'},
      {en: 'I {{heard her breathing}} slowly.', note: 'hear + 목적어 + -ing', g: 'g1'},
      {en: 'The greatest love {{is often quiet}}.', note: '이야기의 주제문', g: ''}
    ],
    summary: {text: 'One snowy night, Jiho {{heard}} someone walk quietly and {{saw}} his mom making rice balls. She was so {{tired}} that she fell asleep. Jiho put a {{blanket}} over her and made scrambled eggs with a {{note}}. He learned that the greatest love is often {{quiet}}.'},
    order: ['A sound woke Jiho up.', 'He saw Mom making rice balls.', 'Mom fell asleep on the sofa.', 'Jiho made scrambled eggs and left a note.'],
    chart: {title: 'JIHO’S CHANGE', ko: '지호의 마음 변화 정리하기', cols: ['Before', 'That night', 'After'], note: '지호가 ‘당연하다’에서 ‘고맙다’로 바뀐 계기를 찾게 한다.', rows: [
      {name: 'Thought', cells: ['it was normal', 'Mom was so tired', 'love is often quiet']},
      {name: 'Feeling', cells: ['nothing special', 'sorry and touched', 'thankful']},
      {name: 'Action', cells: ['never asked', 'put a blanket over her', 'made eggs and wrote a note']}
    ]},
    wrap: {en: 'I saw ______ ______ for me. I was so ______ that ______. Thank you for ______.', ko: '관통 질문으로 돌아가기: 고마운 사람에게 세 문장 감사 쪽지 쓰기'}
  },

  quiz: [
    ['“알아차리다”를 뜻하는 낱말은?', ['note', 'cheer', 'notice', 'whisper'], 2, 'notice: 알아차리다'],
    ['“thankful”과 뜻이 비슷한 말은?', ['proud', 'tired', 'touched', 'grateful'], 3, 'thankful = grateful'],
    ['“He ___ asleep on the sofa.” (잠들었다)', ['fell', 'took', 'woke', 'cared'], 0, 'fall asleep: 잠들다'],
    ['“quietly”의 반대말은?', ['slowly', 'loudly', 'kindly', 'happily'], 1, 'quietly ↔ loudly'],
    ['“Grandma takes care ___ my sister.”', ['to', 'for', 'with', 'of'], 3, 'take care of'],
    ['감사에 대한 대답으로 알맞은 것은?', ['Cheer up!', 'My pleasure.', 'What’s wrong?', 'I’m sorry to hear that.'], 1, 'You’re welcome. / My pleasure.'],
    ['위로하는 표현은?', ['Thank you so much.', 'I really appreciate it.', 'I’m sorry to hear that.', 'Thank you for helping me.'], 2, 'I’m sorry to hear that.'],
    ['빈칸에 알맞지 않은 것은? “I heard her ___.”', ['sing', 'singing', 'to sing', 'laugh'], 2, '지각동사 + 목적어 + 동사원형/-ing'],
    ['Let’s Watch에서 할아버지가 문밖에서 들은 것은?', ['이선의 노래', '릴리의 웃음', '간호사의 발소리', '라디오 소리'], 0, 'I heard you singing outside the door.'],
    ['빈칸에 알맞은 것은? “It was ___ cold that we stayed home.”', ['so', 'too', 'very', 'such'], 0, 'so ~ that'],
    ['어법상 틀린 문장은?', ['I saw him run.', 'I felt it shaking.', 'I watched them dance.', 'I saw my mom to cook.'], 3, 'to cook → cook / cooking'],
    ['같은 뜻이 되도록 할 때 빈칸에 알맞은 것은? “He was so tired that he couldn’t walk.” = “He was ___ tired to walk.”', ['so', 'too', 'very', 'such'], 1, 'so ~ that 주어 can’t = too ~ to'],
    ['지호의 엄마의 직업은?', ['교사', '요리사', '간호사', '의사'], 2, 'my mom is a nurse'],
    ['엄마가 잠든 뒤 지호가 한 일은?', ['담요를 덮었다', '도시락을 먹었다', '엄마를 깨웠다', '아빠에게 전화했다'], 0, 'I put a blanket over her.'],
    ['이야기의 주제로 알맞은 것은?', ['요리는 어렵다', '야간 근무는 힘들다', '도시락은 꼭 챙겨야 한다', '큰 사랑은 평범한 것 속에 있다'], 3, 'It hides in ordinary things.']
  ]
};
