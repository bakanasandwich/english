/* 고1 공통영어1(동아·이병민) Lesson 1 · Life Is Experience
   단원명·본문 주제(용기 있었던 경험)는 교과서 목차 기준. 의사소통 기능·문법은 추정(estimate: true).
   대화문·읽기 글은 교과서 원문이 아니라 단원 주제에 맞춰 새로 쓴 글입니다. */
window.LESSON = {
  book: 'h1a-donga', no: 1, estimate: true,
  title: 'Life Is Experience', ko: '경험이 곧 삶이다',
  bigQ: {en: 'What does it really mean to be brave?', ko: '용기 있다는 것은 정말 무엇을 뜻할까?'},
  goals: {
    vocab: ['용기·감정·도전과 관련된 낱말 16개의 뜻과 발음(강세)을 익힌다.', '접두사·접미사로 낱말을 쪼개어 처음 보는 낱말의 뜻을 짐작할 수 있다.'],
    talk: ['Have you ever ~?로 경험을 묻고 현재완료로 답할 수 있다.', '어떤 순간의 감정을 묻고 구체적으로 표현할 수 있다.'],
    grammar: ['관계대명사 what이 “~하는 것”이 되는 원리를 설명하고 that/which와 구별할 수 있다.', '현재완료가 “과거의 일을 지금과 잇는” 시제라는 원리로 과거 시제와 구별할 수 있다.'],
    read1: ['세 사람의 용기 이야기 중 서연과 마커스의 이야기를 읽고 두려움과 행동을 파악할 수 있다.'],
    read2: ['세 이야기의 공통점을 정리하고, 나만의 용기 정의를 영어로 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'When was the last time you did something for the first time?', ko: '마지막으로 무언가를 처음 해 본 때는 언제인가요?', note: '처음 무대에 선 일, 처음 혼자 여행한 일 등 짧게 말하게 한다. “그때 기분은?”으로 감정 낱말(nervous, proud)을 끌어낸다.'},
    words: [
      {w: 'courage', pos: 'n.', ko: '용기', ic: '🦁', ipa: '/ˈkɜːrɪdʒ/', ex: 'It takes courage to say “I was wrong.”', exKo: '“내가 틀렸어”라고 말하는 데는 용기가 필요하다.'},
      {w: 'confront', pos: 'v.', ko: '맞서다, 직면하다', ic: '🥊', ipa: '/kənˈfrʌnt/', ex: 'She decided to confront her fear of heights.', exKo: '그녀는 높은 곳에 대한 두려움에 맞서기로 했다.'},
      {w: 'hesitate', pos: 'v.', ko: '망설이다', ic: '🤔', img: {src: 'h1/donga1/l1/img/w-hesitate.jpg', credit: 'cagrimmett · CC BY-SA 2.0 (Flickr)', link: 'https://www.flickr.com/photos/7723128@N04/6331956798'}, ipa: '/ˈhezɪteɪt/', ex: 'He hesitated before jumping into the pool.', exKo: '그는 수영장에 뛰어들기 전에 망설였다.'},
      {w: 'overcome', pos: 'v.', ko: '극복하다', ic: '🧗', img: {src: 'h1/donga1/l1/img/w-overcome.jpg', credit: 'Masa Sakano · CC BY-SA 2.0 (Flickr)', link: 'https://www.flickr.com/photos/42548354@N04/5120503129'}, ipa: '/ˌoʊvərˈkʌm/', ex: 'Many athletes overcome serious injuries.', exKo: '많은 운동선수들이 심각한 부상을 극복한다.'},
      {w: 'admit', pos: 'v.', ko: '인정하다, 시인하다', ic: '🙋', ipa: '/ədˈmɪt/', ex: 'It is hard to admit your mistakes.', exKo: '자신의 실수를 인정하기는 어렵다.'},
      {w: 'anxious', pos: 'adj.', ko: '불안해하는, 걱정하는', ic: '😰', ipa: '/ˈæŋkʃəs/', ex: 'I felt anxious before the interview.', exKo: '나는 면접 전에 불안했다.'},
      {w: 'embarrassed', pos: 'adj.', ko: '당황한, 창피한', ic: '😳', img: {src: 'h1/donga1/l1/img/w-embarrassed.jpg', credit: 'Hello Turkey Toe · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/7298413@N06/8782246559'}, ipa: '/ɪmˈbærəst/', ex: 'He was embarrassed when he fell on stage.', exKo: '그는 무대에서 넘어졌을 때 창피했다.'},
      {w: 'witness', pos: 'v./n.', ko: '목격하다; 목격자', ic: '👀', ipa: '/ˈwɪtnəs/', ex: 'Several students witnessed the accident.', exKo: '여러 학생이 그 사고를 목격했다.'},
      {w: 'determination', pos: 'n.', ko: '결심, 투지', ic: '🏃', img: {src: 'h1/donga1/l1/img/w-determination.jpg', credit: 'Peter Mooney · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/25874444@N00/15038969318'}, ipa: '/dɪˌtɜːrmɪˈneɪʃn/', ex: 'Her determination helped her finish the race.', exKo: '그녀의 투지가 경주를 끝까지 마치게 했다.'},
      {w: 'vulnerable', pos: 'adj.', ko: '상처받기 쉬운, 취약한', ic: '🥚', ipa: '/ˈvʌlnərəbl/', ex: 'Sharing your feelings can make you feel vulnerable.', exKo: '감정을 털어놓으면 상처받기 쉬운 기분이 들 수 있다.'},
      {w: 'ordinary', pos: 'adj.', ko: '평범한, 보통의', ic: '🙂', ipa: '/ˈɔːrdneri/', ex: 'Heroes are often ordinary people.', exKo: '영웅은 종종 평범한 사람들이다.'},
      {w: 'define', pos: 'v.', ko: '정의하다', ic: '📖', ipa: '/dɪˈfaɪn/', ex: 'How would you define success?', exKo: '너는 성공을 어떻게 정의하겠니?'},
      {w: 'regret', pos: 'v./n.', ko: '후회하다; 후회', ic: '😔', ipa: '/rɪˈɡret/', ex: 'I regret not speaking up earlier.', exKo: '나는 더 일찍 말하지 않은 것을 후회한다.'},
      {w: 'peer', pos: 'n.', ko: '또래, 동료', ic: '👥', img: {src: 'h1/donga1/l1/img/w-peer.jpg', credit: 'moodboardphotography · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/67835627@N05/7301106896'}, ipa: '/pɪr/', ex: 'Teens often care about what their peers think.', exKo: '십대들은 종종 또래가 어떻게 생각하는지 신경 쓴다.'},
      {w: 'reputation', pos: 'n.', ko: '평판, 명성', ic: '⭐', ipa: '/ˌrepjuˈteɪʃn/', ex: 'He was worried about his reputation.', exKo: '그는 자신의 평판을 걱정했다.'},
      {w: 'encourage', pos: 'v.', ko: '격려하다, 용기를 북돋우다', ic: '📣', ipa: '/ɪnˈkɜːrɪdʒ/', ex: 'My coach encouraged me to try again.', exKo: '코치님은 내가 다시 해 보도록 격려해 주셨다.'}
    ],
    morph: [
      {w: 'encourage', ko: '용기를 북돋우다', parts: [{t: 'en', k: 'pre', m: '~하게 만들다'}, {t: 'courage', k: 'root', m: '용기'}], family: ['discourage', 'courageous', 'encouragement'], note: 'en-은 “~ 안에 넣다, ~하게 만들다” (enable, enrich, endanger). dis-는 반대(discourage = 용기를 꺾다).'},
      {w: 'courageous', ko: '용기 있는', parts: [{t: 'courage', k: 'root', m: '용기'}, {t: 'ous', k: 'suf', m: '~이 많은 (형용사)'}], family: ['dangerous', 'famous', 'nervous'], note: '-ous는 명사에 붙어 “~이 가득한” 형용사를 만든다.'},
      {w: 'overcome', ko: '극복하다', parts: [{t: 'over', k: 'pre', m: '~ 위로, 넘어'}, {t: 'come', k: 'root', m: '오다'}], family: ['overlook', 'overflow', 'overtake'], note: '장애물 “위로 넘어오다” → 극복하다. 과거형은 overcame, 과거분사는 overcome.'},
      {w: 'vulnerable', ko: '상처받기 쉬운', parts: [{t: 'vulner', k: 'root', m: '상처 (라틴어 vulnus)'}, {t: 'able', k: 'suf', m: '~될 수 있는'}], family: ['invulnerable', 'vulnerability'], note: '-able = “~될 수 있는”(readable, breakable). 상처 입을 수 있는 → 취약한.'}
    ],
    phrases: [
      {w: 'stand up for', ko: '~을 옹호하다, 편들다', ex: 'You should stand up for what you believe.', exKo: '네가 믿는 것을 옹호해야 한다.'},
      {w: 'step out of one’s comfort zone', ko: '익숙한 범위를 벗어나다', ex: 'Joining the debate club meant stepping out of my comfort zone.', exKo: '토론 동아리에 가입하는 것은 익숙한 영역을 벗어나는 일이었다.'},
      {w: 'take a risk', ko: '위험을 무릅쓰다', ex: 'Sometimes you have to take a risk to grow.', exKo: '성장하려면 때로는 위험을 무릅써야 한다.'},
      {w: 'look back on', ko: '~을 돌아보다', ex: 'When I look back on that day, I feel proud.', exKo: '그날을 돌아보면 자랑스럽다.'},
      {w: 'deal with', ko: '~을 다루다, 처리하다', ex: 'Everyone deals with fear differently.', exKo: '누구나 두려움을 다르게 다룬다.'},
      {w: 'make a difference', ko: '변화를 가져오다, 영향을 주다', ex: 'One small act can make a difference.', exKo: '작은 행동 하나가 변화를 가져올 수 있다.'}
    ],
    pairs: [
      {a: 'courage', b: 'fear', rel: '반대 개념'},
      {a: 'encourage', b: 'discourage', rel: '반대말 (en- ↔ dis-)'},
      {a: 'ordinary', b: 'extraordinary', rel: '반대말 (extra- = 넘어선)'},
      {a: 'admit', b: 'deny', rel: '반대말'},
      {a: 'anxious', b: 'calm', rel: '반대말'}
    ],
    wrap: {en: 'The bravest thing I have ever done is ______.', ko: '오늘 배운 낱말로 내가 해 본 가장 용기 있는 일 한 문장 쓰기'}
  },

  talk: {
    hook: {en: 'Have you ever done something that scared you?', ko: '무섭지만 해 본 일이 있나요?', note: '번지점프 같은 큰일이 아니어도 된다. 발표, 처음 보는 친구에게 말 걸기 등 일상의 경험을 모은다. 오늘의 질문 표현 Have you ever ~?를 칠판에 쓴다.'},
    speakers: {Jiwoo: {voice: 0, pitch: 1.1}, Ethan: {voice: 1, pitch: 1}, Sora: {voice: 0, pitch: 1.15}, 'Mr. Lee': {voice: 2, pitch: .95}, Noah: {voice: 1, pitch: .95}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Speak 1', func: '경험 묻고 답하기',
        key: {q: ['Have you ever + p.p. ~?', 'What was it like?', 'When did you ~?'], a: ['Yes, I have. I ~ last year.', 'No, I haven’t. / I’ve never ~.', 'It was ~.']},
        note: '경험을 물을 때는 현재완료(Have you ever ~?), 구체적인 때(last year, when I was ten)를 말할 때는 과거 시제로 바꾼다. 3차시 현재완료와 이어진다.',
        dialogs: [
          { title: 'Dialogue A', setting: '동아리 홍보 기간, 복도 게시판 앞', lines: [
            {s: 'Jiwoo', en: 'Ethan, {{have you ever}} performed on stage?', ko: '이선, 무대에서 공연해 본 적 있어?'},
            {s: 'Ethan', en: '{{Yes, I have}}. I sang at the school festival last year.', ko: '응, 있어. 작년 학교 축제에서 노래했어.'},
            {s: 'Jiwoo', en: 'Really? {{What was it like}}?', ko: '정말? 어땠어?'},
            {s: 'Ethan', en: 'My hands were shaking, but it {{was}} amazing. Why do you ask?', ko: '손이 떨렸지만 굉장했어. 왜 물어?'},
            {s: 'Jiwoo', en: 'The drama club is looking for new members. {{I’ve never}} acted before, though.', ko: '연극 동아리가 새 회원을 찾고 있거든. 그런데 나는 연기를 해 본 적이 없어.'},
            {s: 'Ethan', en: 'Everyone starts somewhere. You should try it!', ko: '누구나 어딘가에서 시작하잖아. 해 봐!'}
          ]},
          { title: 'Dialogue B', setting: '체육 시간이 끝난 뒤', lines: [
            {s: 'A', en: 'Have you ever tried rock climbing?', ko: '암벽 등반 해 본 적 있어?'},
            {s: 'B', en: '{{No, I haven’t}}. I’m a little afraid of heights.', ko: '아니, 없어. 높은 곳이 좀 무서워.'},
            {s: 'A', en: 'I felt the same way at first. But the indoor wall is pretty safe.', ko: '나도 처음엔 그랬어. 그런데 실내 암벽은 꽤 안전해.'},
            {s: 'B', en: 'Hmm, {{when did you}} first try it?', ko: '음, 처음 해 본 게 언제였어?'},
            {s: 'A', en: 'Two years ago. Now it’s my favorite weekend activity.', ko: '2년 전에. 이제는 내가 주말에 제일 좋아하는 활동이야.'}
          ]}
        ],
        check: [
          {q: 'When did Ethan sing on stage?', a: 'He sang at the school festival last year.'},
          {q: 'Has Jiwoo ever acted before?', a: 'No, she hasn’t.'},
          {q: 'Why hasn’t B tried rock climbing?', a: 'Because B is a little afraid of heights.'}
        ],
        drill: {frame: ['A: Have you ever ____?', 'B: Yes, I have. / No, I haven’t.'], opts: ['given a speech', 'traveled alone', 'ridden a horse', 'cooked for your family', 'gone camping', 'met a famous person']}
      },
      { id: 'lt2', label: 'Listen & Speak 2', func: '감정 묻고 표현하기',
        key: {q: ['How did you feel when ~?', 'What was the scariest part?'], a: ['I was so nervous that ~.', 'I felt relieved / proud / embarrassed.', 'What scared me most was ~.']},
        note: 'What scared me most was ~.(관계대명사 what)는 감정을 구체적으로 말하는 데 쓰인다. 3차시 문법 1과 이어진다.',
        dialogs: [
          { title: 'Dialogue A', setting: '수영 대회 다음 날, 교실', lines: [
            {s: 'Sora', en: 'Noah, I heard you swam in the city competition. {{How did you feel when}} you stood on the starting block?', ko: '노아, 시 대회에서 수영했다며. 출발대에 섰을 때 기분이 어땠어?'},
            {s: 'Noah', en: '{{I was so nervous that}} I couldn’t hear anything.', ko: '너무 긴장해서 아무것도 안 들렸어.'},
            {s: 'Sora', en: 'Oh, no. {{What was the scariest part}}?', ko: '저런. 가장 무서웠던 부분은 뭐였어?'},
            {s: 'Noah', en: '{{What scared me most was}} the silence before the whistle.', ko: '가장 무서웠던 건 호루라기 전의 정적이었어.'},
            {s: 'Sora', en: 'And how did you feel after the race?', ko: '경기 후에는 기분이 어땠어?'},
            {s: 'Noah', en: 'I didn’t win, but {{I felt}} really proud of myself.', ko: '이기진 못했지만 정말 내 자신이 자랑스러웠어.'}
          ]},
          { title: 'Dialogue B', setting: '방과 후, 상담실 앞', lines: [
            {s: 'Mr. Lee', en: 'You look worried, Jiwoo. What’s wrong?', ko: '지우야, 걱정 있어 보이는구나. 무슨 일이니?'},
            {s: 'Jiwoo', en: 'I told my friend that I broke her earphones. She was upset.', ko: '친구한테 제가 이어폰을 망가뜨렸다고 말했어요. 친구가 속상해했어요.'},
            {s: 'Mr. Lee', en: 'How did you feel when you told her the truth?', ko: '사실을 말했을 때 기분이 어땠니?'},
            {s: 'Jiwoo', en: 'I was embarrassed, but {{I felt relieved}}, too.', ko: '창피했지만 마음이 놓이기도 했어요.'},
            {s: 'Mr. Lee', en: 'That took courage. I’m proud of you.', ko: '용기가 필요한 일이었지. 네가 자랑스럽구나.'}
          ]}
        ],
        check: [
          {q: 'How did Noah feel on the starting block?', a: 'He was so nervous that he couldn’t hear anything.'},
          {q: 'What scared Noah most?', a: 'The silence before the whistle.'},
          {q: 'Why did Jiwoo feel relieved?', a: 'Because she told her friend the truth.'}
        ],
        drill: {frame: ['A: How did you feel when you ____?', 'B: I felt ... / What scared me most was ...'], opts: ['gave your first speech', 'got lost in a new city', 'met your best friend', 'told the truth', 'finished the marathon', 'started high school']}
      }
    ],
    interviewEx: 'Minjun has given a speech in front of the whole school. What scared him most was forgetting his lines.',
    watch: {
      label: 'Let’s Watch', title: 'The Last Seat on the Bus', setting: '하교 버스 안. 짐이 많은 할머니가 타는데, 학생들은 모두 휴대전화만 보고 있다.',
      lines: [
        {s: 'Sora', en: 'Look, that woman is carrying so many bags.', ko: '저기 봐, 저분 짐을 엄청 많이 들고 계셔.'},
        {s: 'Noah', en: 'Someone will give her a seat. Don’t worry.', ko: '누군가 자리를 양보하겠지. 걱정 마.'},
        {s: 'Sora', en: 'Everyone is thinking the same thing. That’s why nobody moves.', ko: '다들 똑같이 생각해. 그래서 아무도 안 움직이는 거야.'},
        {s: 'Noah', en: 'You’re right. Excuse me, ma’am. Please take my seat.', ko: '네 말이 맞아. 저기요, 할머니. 제 자리에 앉으세요.'},
        {s: 'Sora', en: 'See? What you just did wasn’t hard, but it mattered.', ko: '봐, 네가 방금 한 일은 어렵지 않았지만 의미가 있었어.'}
      ],
      check: [
        {q: 'Why does nobody give the woman a seat at first?', a: 'Because everyone thinks someone else will do it.'},
        {q: 'What does Noah do?', a: 'He gives his seat to the woman.'},
        {q: 'What does Sora think about Noah’s action?', a: 'It wasn’t hard, but it mattered.'}
      ]
    },
    wrap: {en: 'Ask your partner about a brave experience and how they felt.', ko: '짝에게 용기 있었던 경험과 그때의 감정을 묻고 답하기'}
  },

  grammar: {
    cover: 'what · have p.p.',
    hook: {en: '{{What}} scared me most was the silence.  /  I {{have}} never {{acted}} before.', ko: '두 문장의 색칠된 부분은 각각 어떤 역할을 할까?', answer: 'What = “~하는 것” (선행사를 품은 관계대명사) / have acted = 과거부터 지금까지의 경험 (현재완료)', note: '두 문장 모두 2차시 대화에서 나온 문장이다. what 앞에 명사가 없다는 점, have + p.p. 모양을 먼저 찾게 한다.'},
    points: [
      { id: 'g1', name: '관계대명사 what', short: 'what', form: 'what + (주어) + 동사 = the thing(s) which ~', meaning: '~하는 것',
        notice: [
          {en: '{{What}} I need now is a little courage.', ko: '지금 내게 필요한 것은 약간의 용기다.'},
          {en: 'I can’t believe {{what}} he said.', ko: '나는 그가 한 말을 믿을 수 없다.'},
          {en: 'This is {{what}} makes a real hero.', ko: '이것이 진짜 영웅을 만드는 것이다.'}
        ],
        principle: {
          q: 'what 앞에는 왜 명사(선행사)가 없을까?',
          pic: [{en: 'the thing', ko: '선행사 (명사)'}, {en: 'which', ko: '관계대명사', arrow: '+'}, {en: 'what', ko: '둘을 한 단어에!', hot: true}],
          core: 'what은 선행사 the thing과 관계대명사 which를 한 단어에 담았다. 그래서 앞에 명사가 또 올 수 없다.',
          why: ['what절 전체가 하나의 명사(덩어리)가 되어 주어·목적어·보어 자리에 들어간다.', 'what 뒤 문장은 주어나 목적어 하나가 빠진 불완전한 문장이다.', '앞에 명사가 있으면 which/that, 없으면 what — 이것이 어법 문제의 핵심이다.'],
          note: '기출 어법 문항에서 가장 자주 나오는 함정: 선행사가 있는데 what을 쓴 경우(2025년 3월 고1 29번 ④ what → which).'
        },
        anim: [
          {title: 'the thing which → what', why: '두 단어가 한 단어로 합쳐지는 장면을 보여 준다.', states: [
            {t: 'I | can’t believe/V | the thing#thing | which#which | he | said | .', note: '선행사 + 관계대명사', ko: '나는 그가 말한 것을 믿을 수 없다.'},
            {t: 'I | can’t believe/V | what/X | he | said | .', note: 'the thing which → what 한 단어로!', ko: '같은 뜻, 더 짧게'},
            {t: 'I/S | can’t believe/V | what he said/O#whatclause | .', note: 'what절 전체가 목적어 덩어리', ko: '[what he said] = 그가 한 말'}]},
          {title: 'what절은 문장의 어디에든 들어간다', states: [
            {t: 'The silence/S | scared/V | me/O | most | .', note: '평범한 문장', ko: '정적이 나를 가장 무섭게 했다.'},
            {t: 'What scared me most/S#ws | was/V | the silence/C#silence | .', note: 'what절이 주어 자리에!', ko: '나를 가장 무섭게 한 것은 정적이었다.'}]}
        ],
        contrast: {title: 'what? that? which? — 앞에 명사가 있나 보자', pairs: [
          {a: 'This is {{what}} I wanted.', ka: '이것이 내가 원했던 것이다. (선행사 없음 → what)', b: 'This is the bag {{that}} I wanted.', kb: '이것이 내가 원했던 가방이다. (선행사 the bag → that)'},
          {a: 'I know {{that}} he is honest.', ka: '나는 그가 정직하다는 것을 안다. (that 뒤 완전한 문장 → 접속사)', b: 'I know {{what}} he wants.', kb: '나는 그가 원하는 것을 안다. (what 뒤 목적어 빠짐 → 관계대명사)'}],
          point: '앞에 명사가 있으면 that/which, 없으면 what. 뒤가 완전한 문장이면 접속사 that.'},
        rule: [
          {k: '주어 자리', v: 'What + 동사 ~ + 동사 (단수 취급)', ex: 'What matters most is your effort.'},
          {k: '목적어 자리', v: '동사 + what + 주어 + 동사', ex: 'Tell me what you saw.'},
          {k: '보어 자리', v: 'be동사 + what ~', ex: 'That’s what friends are for.'}
        ],
        check: [
          {q: '____ surprised me was his honesty. (what / that)', a: 'What'},
          {q: 'This is the movie ____ I told you about. (what / that)', a: 'that'},
          {q: 'Don’t believe everything ____ you read online. (what / that)', a: 'that'},
          {q: 'Courage is ____ we need right now. (what / which)', a: 'what'},
          {q: 'I didn’t understand ____ the teacher explained. (what / which)', a: 'what'}
        ],
        trap: {bad: 'She gave me the advice what I needed.', good: 'She gave me the advice that(which) I needed.', why: '선행사(the advice)가 있으면 what을 쓸 수 없다. what = the thing which.'},
        scramble: [
          {ko: '내가 가장 후회하는 것은 침묵한 것이다.', en: 'What I regret most is staying silent.'},
          {ko: '그것이 내가 하려고 했던 것이다.', en: 'That is what I was trying to do.'},
          {ko: '네가 본 것을 내게 말해 줘.', en: 'Tell me what you saw.'}
        ]
      },
      { id: 'g2', name: '현재완료 (have + p.p.)', short: '현재완료', form: 'have/has + 과거분사(p.p.)', meaning: '(과거부터 지금까지) ~해 왔다, ~한 적이 있다, ~해 버렸다',
        notice: [
          {en: 'I {{have never acted}} before.', ko: '나는 전에 연기해 본 적이 없다.'},
          {en: 'She {{has played}} the piano for ten years.', ko: '그녀는 10년 동안 피아노를 쳐 왔다.'},
          {en: 'I {{have lost}} my phone. I can’t call you.', ko: '나는 휴대전화를 잃어버렸다. (그래서 지금) 전화할 수 없다.'}
        ],
        principle: {
          q: '과거에 한 일인데 왜 have(현재형)를 쓸까?',
          pic: [{en: 'past', ko: '과거의 일'}, {en: '———→', ko: '이어짐', arrow: ''}, {en: 'now', ko: '지금 기준', hot: true}],
          core: '현재완료는 “지금” 서서 과거를 돌아보는 시제다. 과거의 일이 지금까지 이어지거나 지금에 영향을 줄 때 쓴다.',
          why: ['have는 “지금 가지고 있다” — 과거의 경험·결과를 지금 가지고 있다는 뜻이다.', '그래서 yesterday, last year, ago처럼 “끝난 과거의 한 시점”을 나타내는 말과는 함께 쓰지 않는다.', '대신 ever, never, for, since, already, yet처럼 “지금까지”를 나타내는 말과 잘 어울린다.']
        },
        anim: [
          {title: '두 문장을 하나로: 시작했고, 지금도 한다', states: [
            {t: 'I | started/V | swimming | two years ago | . | / | I | still | swim | .', note: '과거에 시작 + 지금도 계속', ko: '나는 2년 전에 수영을 시작했다. 나는 지금도 수영한다.'},
            {t: 'I/S | have swum/X | for two years/M | .', note: '과거 → 지금까지 이어지면 have + p.p.', ko: '나는 2년 동안 수영을 해 왔다.'}]},
          {title: '시간 표현이 시제를 정한다', states: [
            {t: 'I | have visited/V#visit | Jeju | twice/M | .', note: '경험: 지금까지 두 번', ko: '나는 제주에 두 번 가 본 적이 있다.'},
            {t: 'I | visited/V#visit | Jeju | last summer/M | .', note: '끝난 과거의 한 시점 → 과거 시제', ko: '나는 지난여름에 제주에 갔다.'}]}
        ],
        contrast: {title: '과거 vs 현재완료 — 지금은 어떤가?', pairs: [
          {a: 'I {{lost}} my phone.', ka: '휴대전화를 잃어버렸다. (지금은 찾았을 수도 있다)', b: 'I {{have lost}} my phone.', kb: '휴대전화를 잃어버렸다. (지금도 없다)'},
          {a: 'He {{lived}} in Busan for five years.', ka: '부산에 5년 살았다. (지금은 안 산다)', b: 'He {{has lived}} in Busan for five years.', kb: '부산에 5년째 살고 있다. (지금도 산다)'}],
          point: '과거 시제는 과거에서 끝난 일, 현재완료는 지금과 이어진 일.'},
        rule: [
          {k: '경험', v: 'ever, never, before, once, twice', ex: 'Have you ever tried surfing?'},
          {k: '계속', v: 'for + 기간, since + 시작점', ex: 'I have known her since 2020.'},
          {k: '완료·결과', v: 'already, yet, just / 지금의 결과', ex: 'I have just finished my homework.'}
        ],
        compare: {
          title: '함께 쓰는 시간 표현', note: '왼쪽 열 표현이 나오면 현재완료, 오른쪽 열이면 과거 시제. 어법 문제의 단서가 된다.',
          head: ['현재완료와 함께', '과거 시제와 함께'],
          cols: [['ever / never', 'for three years', 'since last May', 'already / yet'], ['yesterday', 'three years ago', 'last May', 'When did ~?']]
        },
        check: [
          {q: 'I ____ (know) her since we were kids.', a: 'have known'},
          {q: 'We ____ (visit) the museum last weekend.', a: 'visited'},
          {q: '____ you ever ____ (see) a shooting star?', a: 'Have / seen'},
          {q: 'She ____ (not finish) her report yet.', a: 'hasn’t finished'},
          {q: 'When ____ you ____ (start) learning English?', a: 'did / start'}
        ],
        trap: {bad: 'I have visited Jeju last year.', good: 'I visited Jeju last year.', why: 'last year처럼 끝난 과거의 한 시점이 있으면 현재완료를 쓸 수 없다.'},
        scramble: [
          {ko: '나는 이렇게 긴장해 본 적이 없다.', en: 'I have never been this nervous.'},
          {ko: '그는 작년부터 그 동아리 회원이다.', en: 'He has been a member of the club since last year.'},
          {ko: '너는 두려움에 맞서 본 적이 있니?', en: 'Have you ever confronted your fear?'}
        ]
      }
    ],
    wrap: {en: 'What I ______ most is ______. I have never ______.', ko: '관계대명사 what 한 문장, 현재완료 한 문장으로 나의 경험 말하기'},
    wrapEx: 'What I remember most is my first speech. I have never been so nervous.'
  },

  reading: {
    title: 'Small Acts of Courage', kind: '세 사람의 경험담', cover: 'Brave', coverKo: '용기는 어떤 모습일까', cover2: 'Ordinary', coverKo2: '평범한 순간의 용기',
    before: [
      {q: 'Who comes to mind when you hear the word “brave”?', a: '소방관, 영웅, 운동선수 등 — 대개 특별한 사람을 떠올린다.'},
      {q: 'Can a small action be brave? Give an example.', a: '사과하기, 친구 편들기, 처음 해 보는 일 등'}
    ],
    gloss: {firefighters: '소방관들', 'group chat': '단체 대화방', mocked: '조롱했다', screenshot: '화면 캡처', 'stomach': '배, 위', drowned: '물에 빠졌다', lifeguard: '안전 요원', 'shallow end': '얕은 쪽', 'class fund': '학급비', counted: '세었다', 'tempting': '솔깃한', 'common': '공통의', 'instead': '대신에', heartbeat: '심장 박동'},
    paras: [
      {who: '', en: 'When we hear the word “courage,” most of us picture firefighters running into burning buildings. But courage does not always look like that. We asked three high school students a simple question: “When were you bravest?” What they told us was surprising.',
       ko: '“용기”라는 말을 들으면 우리 대부분은 불타는 건물로 뛰어드는 소방관을 떠올린다. 하지만 용기가 늘 그런 모습인 것은 아니다. 우리는 고등학생 세 명에게 간단한 질문을 했다. “언제 가장 용기 있었나요?” 그들이 들려준 이야기는 놀라웠다.',
       check: {q: 'What question did the writer ask the students?', a: '“When were you bravest?”'}, think: '나라면 이 질문에 무엇이라고 답할까?',
       bg: {src: 'h1/donga1/l1/img/r-p0.jpg', credit: 'CC0 1.0 (rawpixel)', link: 'https://www.rawpixel.com/image/7426637/photo-image-public-domain-fire-person', about: '불 끄는 소방관 — “우리가 흔히 떠올리는 용기”'}},
      {who: 'Seo-yeon, 16', en: 'Last spring, someone in my class group chat posted a photo of a classmate and mocked her clothes. Within minutes, dozens of people had added laughing emojis. I wanted to say something, but I hesitated. What if they started making fun of me, too? My heartbeat was so loud that I could hear it.',
       ko: '지난봄, 우리 반 단체 대화방에 누군가 한 친구의 사진을 올리고 옷차림을 조롱했다. 몇 분 만에 수십 명이 웃는 이모티콘을 달았다. 나는 뭔가 말하고 싶었지만 망설였다. 그들이 나까지 놀리기 시작하면 어쩌지? 심장 소리가 너무 커서 내 귀에 들릴 정도였다.',
       check: {q: 'Why did Seo-yeon hesitate?', a: 'She was afraid that people would make fun of her, too.'}, think: '서연이는 왜 망설였을까? 그 기분을 이해할 수 있나?',
       bg: {src: 'h1/donga1/l1/img/r-p1.jpg', credit: 'Johan Larsson · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/38305415@N00/4368595436', about: '어두운 곳에서 휴대전화를 보는 손'}},
      {who: 'Seo-yeon, 16', en: 'Finally, I typed, “This isn’t funny. Please delete it.” Nobody replied, and I felt sick to my stomach. But the next morning, the photo was gone. A few classmates even sent me private messages saying, “Thank you. I wanted to say that, too.” I have never forgotten that moment.',
       ko: '마침내 나는 “이건 재밌지 않아. 지워 줘.”라고 썼다. 아무도 답하지 않았고 나는 속이 메스꺼웠다. 하지만 다음 날 아침, 사진은 사라져 있었다. 몇몇 친구들은 “고마워. 나도 그 말 하고 싶었어.”라는 개인 메시지까지 보내 왔다. 나는 그 순간을 한 번도 잊은 적이 없다.',
       check: {q: 'What happened the next morning?', a: 'The photo was gone, and some classmates thanked her.'}, think: '왜 다른 친구들은 먼저 말하지 못했을까?',
       bg: {src: 'h1/donga1/l1/img/r-p2.jpg', credit: 'classroomcamera · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/155535822@N07/39491320955', about: '아침 햇살이 드는 교실'}},
      {who: 'Marcus, 17', en: 'When I was eight, I almost drowned at a beach. Since then, I have been afraid of water. For years, I made excuses whenever my friends went swimming. Last summer, I decided to confront my fear. I signed up for swimming lessons — in a class full of seven-year-olds.',
       ko: '여덟 살 때 나는 바닷가에서 물에 빠져 죽을 뻔했다. 그 뒤로 나는 물을 무서워해 왔다. 몇 년 동안 친구들이 수영하러 갈 때마다 핑계를 댔다. 지난여름, 나는 두려움에 맞서기로 했다. 수영 강습에 등록했다 — 일곱 살 아이들로 가득한 반에.',
       check: {q: 'Why has Marcus been afraid of water?', a: 'Because he almost drowned at a beach when he was eight.'}, think: '마커스에게 더 힘들었던 것은 물일까, 창피함일까?',
       bg: {src: 'h1/donga1/l1/img/r-p3.jpg', credit: 'CC0 1.0 (rawpixel)', link: 'https://www.rawpixel.com/image/6033256/photo-image-public-domain-water-free', about: '텅 빈 실내 수영장'}},
      {who: 'Marcus, 17', en: 'At first, I was embarrassed. The kids splashed around happily while I stood frozen in the shallow end. But the lifeguard told me, “Being scared and doing it anyway — that’s what courage is.” Three months later, I swam across the pool. The kids cheered louder than anyone.',
       ko: '처음에 나는 창피했다. 아이들은 즐겁게 물장구를 쳤고 나는 얕은 쪽에서 얼어붙은 채 서 있었다. 하지만 안전 요원이 내게 말했다. “무서운데도 그냥 해 보는 것 — 그게 바로 용기야.” 석 달 뒤, 나는 수영장을 가로질러 헤엄쳤다. 아이들이 누구보다 크게 환호했다.',
       check: {q: 'What did the lifeguard say courage is?', a: 'Being scared and doing it anyway.'}, think: '안전 요원의 말에 동의하나? 왜 그런가?',
       bg: {src: 'h1/donga1/l1/img/r-p4.jpg', credit: 'U.S. Marine Corps · CC0 1.0 (rawpixel)', link: 'https://www.rawpixel.com/image/3577893/free-photo-image-2012-warrior-games-army-athlete', about: '물속에서 헤엄치는 사람'}},
      {who: 'Ji-ho, 16', en: 'I was in charge of our class fund for the school festival. One day, I counted the money and found that 30,000 won was missing. I had left the envelope on my desk during lunch. It was tempting to stay quiet and simply add my own money later.',
       ko: '나는 학교 축제를 위한 학급비를 맡고 있었다. 어느 날 돈을 세어 보니 3만 원이 비어 있었다. 점심시간에 봉투를 책상 위에 두고 갔던 것이다. 그냥 조용히 있다가 나중에 내 돈을 채워 넣고 싶은 유혹이 들었다.',
       check: {q: 'What did Ji-ho find when he counted the money?', a: '30,000 won was missing.'}, think: '지호의 실수는 무엇이었나? 나라면 어떻게 했을까?'},
      {who: 'Ji-ho, 16', en: 'Instead, I stood in front of the class and admitted my mistake. My face turned red, and my voice was shaking. To my surprise, nobody blamed me. My classmates helped me make a new rule: two people always keep the fund together. What I learned that day was that honesty builds trust.',
       ko: '대신 나는 반 친구들 앞에 서서 내 실수를 인정했다. 얼굴이 빨개지고 목소리가 떨렸다. 놀랍게도 아무도 나를 탓하지 않았다. 친구들은 새 규칙을 만드는 것을 도와주었다. 학급비는 언제나 두 사람이 함께 관리한다. 그날 내가 배운 것은 정직이 신뢰를 쌓는다는 것이었다.',
       check: {q: 'What new rule did the class make?', a: 'Two people always keep the fund together.'}, think: '지호가 실수를 인정했을 때 반 친구들은 왜 탓하지 않았을까?',
       bg: {src: 'h1/donga1/l1/img/r-p6.jpg', credit: 'Open Grid Scheduler / Grid Engine · CC0 1.0 (Flickr)', link: 'https://www.flickr.com/photos/29155878@N03/17990211551', about: '빈 칠판 — 친구들 앞에 서는 순간'}},
      {who: 'Our Thoughts', en: 'None of these students saved a life or won a medal. They were ordinary teenagers in ordinary situations. What they had in common was this: each of them felt afraid, and each of them acted anyway. Maybe courage is not the absence of fear. Maybe it is what you choose to do with it.',
       ko: '이 학생들 중 누구도 생명을 구하거나 메달을 따지 않았다. 그들은 평범한 상황 속의 평범한 십대였다. 그들의 공통점은 이것이었다. 모두 두려움을 느꼈고, 그럼에도 모두 행동했다. 어쩌면 용기는 두려움이 없는 상태가 아닐지 모른다. 어쩌면 그것은 두려움을 가지고 무엇을 하기로 선택하느냐일 것이다.',
       check: {q: 'What did the three students have in common?', a: 'They all felt afraid, but they acted anyway.'}, think: '“용기는 두려움이 없는 것이 아니다”라는 말에 동의하나?',
       bg: {src: 'h1/donga1/l1/img/r-p7.jpg', credit: 'Tomas Jasovsky · CC0 1.0 (stocksnap)', link: 'https://stocksnap.io/photo/people-girl-C7HDAZFNHM', about: '해 질 녘 걷는 사람의 실루엣'}}
    ],
    coverImg: {src: 'h1/donga1/l1/img/r-cover.jpg', credit: 'CC0 1.0 (rawpixel)', link: 'https://www.rawpixel.com/image/3290353/free-photo-image-alps-black-background-cc0'},
    coverImg2: {src: 'h1/donga1/l1/img/r-cover2.jpg', credit: 'Fibonacci Blue · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/44550450@N04/15784905538'},
    split: 4,
    next: '마커스는 수영장에서\n두려움을 이겨 냈을까?',
    recap: {q: '서연과 마커스는 무엇을 두려워했나?', items: [{k: 'SEO-YEON', v: 'being mocked by classmates → spoke up in the group chat'}, {k: 'MARCUS', v: 'water (almost drowned at eight) → signed up for swimming lessons'}]},
    tf: [
      {p: 0, s: 'The writer interviewed three firefighters.', a: false, why: '고등학생 세 명에게 물었다.'},
      {p: 1, s: 'Seo-yeon spoke up immediately without any fear.', a: false, why: '망설였고 심장이 크게 뛰었다.'},
      {p: 2, s: 'Some classmates privately thanked Seo-yeon.', a: true},
      {p: 3, s: 'Marcus took swimming lessons with young children.', a: true},
      {p: 4, s: 'Marcus swam across the pool on the first day.', a: false, why: '석 달 뒤에 헤엄쳐 건넜다.'},
      {p: 5, s: 'Ji-ho had left the class fund on his desk.', a: true},
      {p: 6, s: 'Ji-ho’s classmates blamed him for the mistake.', a: false, why: '아무도 탓하지 않았다.'},
      {p: 7, s: 'The writer thinks courage means having no fear.', a: false, why: '두려움을 가지고 무엇을 할지 선택하는 것이라고 본다.'}
    ],
    key: [
      {en: '{{What they told us}} was surprising.', note: 'What절 = 주어 (그들이 말해 준 것)', g: 'g1'},
      {en: 'I {{have never forgotten}} that moment.', note: '현재완료 · 경험 (지금까지 한 번도)', g: 'g2'},
      {en: 'Since then, I {{have been}} afraid of water.', note: '현재완료 · 계속 (since + 시작점)', g: 'g2'},
      {en: 'Being scared and doing it anyway — that’s {{what courage is}}.', note: 'what절 = 보어', g: 'g1'},
      {en: '{{What I learned that day}} was that honesty builds trust.', note: 'What절 주어 + 접속사 that절 보어', g: 'g1'},
      {en: 'Maybe it is {{what you choose to do with it}}.', note: 'what절 = 보어', g: 'g1'}
    ],
    summary: {text: 'Three students shared their stories of {{courage}}. Seo-yeon spoke up when a classmate was {{mocked}} online. Marcus, who had been afraid of water, decided to {{confront}} his fear. Ji-ho {{admitted}} his mistake in front of the class. All of them felt afraid but acted {{anyway}}.'},
    order: ['Marcus almost drowned at a beach.', 'He made excuses not to go swimming.', 'He signed up for swimming lessons.', 'He swam across the pool three months later.'],
    chart: {title: 'THREE STORIES', ko: '세 사람의 이야기 정리', cols: ['Fear', 'Action', 'Lesson'], note: '표를 보고 “What ___ feared was ~.” “___ has learned that ~.” 문장으로 말하게 한다.', rows: [
      {name: 'Seo-yeon', cells: ['being mocked', 'spoke up in the chat', 'others felt the same']},
      {name: 'Marcus', cells: ['water', 'took swimming lessons', 'courage = acting anyway']},
      {name: 'Ji-ho', cells: ['blame, shame', 'admitted his mistake', 'honesty builds trust']}
    ]},
    wrap: {en: 'For me, courage is ______. What I want to try is ______.', ko: '관통 질문으로 돌아가기: 나만의 용기 정의와 도전하고 싶은 일 쓰기'}
  },

  quiz: [
    ['“용기”를 뜻하는 낱말은?', ['regret', 'courage', 'witness', 'reputation'], 1, 'courage: 용기'],
    ['“망설이다”를 뜻하는 낱말은?', ['admit', 'define', 'hesitate', 'overcome'], 2, 'hesitate: 망설이다'],
    ['encourage의 반대말은?', ['discourage', 'courageous', 'uncourage', 'overcourage'], 0, 'en- ↔ dis-'],
    ['vulnerable을 쪼갰을 때 -able의 뜻은?', ['~이 많은', '~될 수 있는', '~하지 않는', '~하는 사람'], 1, 'vulner(상처) + able(~될 수 있는)'],
    ['“Have you ever ridden a horse?”에 알맞은 답은?', ['Yes, I did.', 'No, I haven’t.', 'Yes, I ride.', 'No, I don’t.'], 1, 'Have you ~? → Yes, I have. / No, I haven’t.'],
    ['감정을 묻는 표현은?', ['When did you go?', 'Have you been there?', 'How did you feel when you won?', 'What do you do?'], 2, 'How did you feel when ~?'],
    ['빈칸에 알맞은 것은? “____ I need is your help.”', ['What', 'That', 'Which', 'Who'], 0, '선행사 없음 → What'],
    ['빈칸에 알맞은 것은? “This is the book ____ I bought.”', ['what', 'that', 'who', 'where'], 1, '선행사 the book → that'],
    ['어법상 틀린 문장은?', ['What he said was true.', 'I know what you mean.', 'I lost the key what you gave me.', 'That’s what I want.'], 2, '선행사(the key)가 있으면 that/which'],
    ['빈칸에 알맞은 것은? “I ____ here since 2023.”', ['live', 'lived', 'have lived', 'am living'], 2, 'since + 시작점 → 현재완료'],
    ['어법상 틀린 문장은?', ['I have seen it twice.', 'She has just left.', 'We have met last week.', 'Have you ever tried it?'], 2, 'last week → 과거 시제 met'],
    ['서연이 단체 대화방에 쓴 말의 내용은?', ['사진을 지워 달라', '같이 놀자', '사진이 웃기다', '나도 놀려 달라'], 0, '“This isn’t funny. Please delete it.”'],
    ['마커스가 물을 무서워하게 된 까닭은?', ['수영을 못 배워서', '어릴 때 물에 빠질 뻔해서', '친구들이 놀려서', '안전 요원이 무서워서'], 1, 'I almost drowned at a beach.'],
    ['지호의 반이 새로 만든 규칙은?', ['학급비를 걷지 않는다', '선생님이 돈을 관리한다', '두 사람이 함께 관리한다', '돈은 은행에 맡긴다'], 2, 'two people always keep the fund together'],
    ['글쓴이가 말하는 용기로 알맞은 것은?', ['두려움이 전혀 없는 상태', '메달을 따는 것', '두려워도 행동하기로 선택하는 것', '남보다 강한 것'], 2, 'what you choose to do with it']
  ]
};
