/* 고1 공통영어2(동아·이병민) Lesson 2 · Beyond Borders
   단원명·본문 성격(여름 해외 경험 이야기)은 교과서 목차 기준. 의사소통 기능·문법은 추정(estimate: true).
   대화문·읽기 글은 교과서 원문이 아니라 단원 주제에 맞춰 새로 쓴 글입니다(인물·캠프는 가상). */
window.LESSON = {
  book: 'h1b-donga', no: 2, estimate: true,
  title: 'Beyond Borders', ko: '경계를 넘어',
  bigQ: {en: 'What do we need to connect with people from other cultures?', ko: '다른 문화의 사람들과 이어지려면 무엇이 필요할까?'},
  goals: {
    vocab: ['문화·여행·소통과 관련된 낱말 16개의 뜻과 발음(강세)을 익힌다.', 'inter-, mis-, trans- 같은 조각으로 international, misunderstand, translate를 분석할 수 있다.'],
    talk: ['계획을 묻고 답할 수 있다.', '앞으로의 일에 대한 기대를 표현할 수 있다.'],
    grammar: ['관계부사가 “전치사 + 관계대명사”를 한 단어로 줄인 것이라는 원리로 where/when/why/how를 쓸 수 있다.', '질문을 문장 속에 넣으면 평서문 어순이 된다는 원리로 whether/if·의문사 명사절을 만들 수 있다.'],
    read1: ['낯선 문화 속에서 글쓴이가 겪은 오해와 배움을 파악할 수 있다.'],
    read2: ['문화 차이를 넘어 소통하는 데 필요한 태도를 정리하고 나의 생각을 영어로 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'Have you ever had a misunderstanding because of a gesture?', ko: '몸짓 때문에 오해가 생긴 적이 있나요?', note: '손가락으로 OK 표시, 엄지 들기 등 나라마다 뜻이 다른 몸짓 예를 하나 보여 준다. “말이 안 통할 때 우리는 무엇으로 소통할까?”로 이어진다.'},
    words: [
      {w: 'border', pos: 'n.', ko: '국경, 경계', ic: '🛂', ipa: '/ˈbɔːrdər/', ex: 'We crossed the border by train.', exKo: '우리는 기차로 국경을 넘었다.'},
      {w: 'volunteer', pos: 'n./v.', ko: '자원봉사자; 자원하다', ic: '🙋', ipa: '/ˌvɑːlənˈtɪr/', ex: 'She volunteers at an animal shelter.', exKo: '그녀는 동물 보호소에서 자원봉사를 한다.'},
      {w: 'local', pos: 'adj./n.', ko: '지역의, 현지의; 현지인', ic: '🏘️', ipa: '/ˈloʊkl/', ex: 'We ate at a local restaurant.', exKo: '우리는 현지 식당에서 먹었다.'},
      {w: 'custom', pos: 'n.', ko: '관습, 풍습', ic: '🎎', ipa: '/ˈkʌstəm/', ex: 'It is a custom to take off your shoes inside.', exKo: '실내에서 신발을 벗는 것이 관습이다.'},
      {w: 'gesture', pos: 'n.', ko: '몸짓, 제스처', ic: '👋', ipa: '/ˈdʒestʃər/', ex: 'The same gesture can mean different things.', exKo: '같은 몸짓도 다른 뜻일 수 있다.'},
      {w: 'communicate', pos: 'v.', ko: '의사소통하다', ic: '💬', ipa: '/kəˈmjuːnɪkeɪt/', ex: 'We communicated with smiles and drawings.', exKo: '우리는 미소와 그림으로 의사소통했다.'},
      {w: 'misunderstand', pos: 'v.', ko: '오해하다', ic: '❓', ipa: '/ˌmɪsʌndərˈstænd/', ex: 'I misunderstood what she meant.', exKo: '나는 그녀가 한 말의 뜻을 오해했다.'},
      {w: 'polite', pos: 'adj.', ko: '예의 바른, 공손한', ic: '🙇', ipa: '/pəˈlaɪt/', ex: 'It is polite to use both hands.', exKo: '두 손을 쓰는 것이 예의 바르다.'},
      {w: 'translate', pos: 'v.', ko: '번역하다, 통역하다', ic: '🔤', ipa: '/trænzˈleɪt/', ex: 'Can you translate this sign for me?', exKo: '이 표지판 좀 번역해 줄래?'},
      {w: 'accent', pos: 'n.', ko: '억양, 말씨', ic: '🗣️', ipa: '/ˈæksent/', ex: 'He speaks English with a Spanish accent.', exKo: '그는 스페인어 억양으로 영어를 말한다.'},
      {w: 'diverse', pos: 'adj.', ko: '다양한', ic: '🌐', ipa: '/daɪˈvɜːrs/', ex: 'The camp had a diverse group of teens.', exKo: '그 캠프에는 다양한 십대들이 있었다.'},
      {w: 'adapt', pos: 'v.', ko: '적응하다', ic: '🦎', ipa: '/əˈdæpt/', ex: 'It took me a week to adapt to the heat.', exKo: '더위에 적응하는 데 일주일이 걸렸다.'},
      {w: 'unfamiliar', pos: 'adj.', ko: '낯선, 익숙하지 않은', ic: '🧭', ipa: '/ˌʌnfəˈmɪliər/', ex: 'Everything felt unfamiliar at first.', exKo: '처음엔 모든 것이 낯설었다.'},
      {w: 'generous', pos: 'adj.', ko: '너그러운, 후한', ic: '🎁', ipa: '/ˈdʒenərəs/', ex: 'My host family was very generous.', exKo: '내 홈스테이 가족은 매우 너그러웠다.'},
      {w: 'farewell', pos: 'n.', ko: '작별 (인사)', ic: '👋', ipa: '/ˌferˈwel/', ex: 'We had a farewell party on the last night.', exKo: '우리는 마지막 밤에 작별 파티를 했다.'},
      {w: 'international', pos: 'adj.', ko: '국제적인', ic: '🗺️', ipa: '/ˌɪntərˈnæʃnəl/', ex: 'I joined an international youth camp.', exKo: '나는 국제 청소년 캠프에 참가했다.'}
    ],
    morph: [
      {w: 'international', ko: '국제적인', parts: [{t: 'inter', k: 'pre', m: '~ 사이의'}, {t: 'nation', k: 'root', m: '국가'}, {t: 'al', k: 'suf', m: '~의 (형용사)'}], family: ['internet', 'interview', 'interact'], note: 'inter- = 사이(internet: 네트워크 사이, interact: 서로 작용하다).'},
      {w: 'misunderstand', ko: '오해하다', parts: [{t: 'mis', k: 'pre', m: '잘못'}, {t: 'understand', k: 'root', m: '이해하다'}], family: ['mistake', 'misuse', 'mislead'], note: 'mis- = 잘못(mistake: 잘못 잡다 → 실수).'},
      {w: 'translate', ko: '번역하다', parts: [{t: 'trans', k: 'pre', m: '건너서, 가로질러'}, {t: 'late', k: 'root', m: '나르다 (lat-)'}], family: ['transport', 'transfer', 'transform'], note: '말을 다른 언어 쪽으로 “건너 나르다” → 번역하다. trans- = 건너(transport: 건너 나르다).'},
      {w: 'unfamiliar', ko: '낯선', parts: [{t: 'un', k: 'pre', m: '아닌'}, {t: 'famili', k: 'root', m: '가족, 집안 (family)'}, {t: 'ar', k: 'suf', m: '~의 (형용사)'}], family: ['familiar', 'family', 'familiarity'], note: '가족처럼 잘 아는(familiar)의 반대 → 낯선.'}
    ],
    phrases: [
      {w: 'get used to', ko: '~에 익숙해지다', ex: 'I got used to the spicy food.', exKo: '나는 매운 음식에 익숙해졌다.'},
      {w: 'step out of one’s comfort zone', ko: '익숙한 범위를 벗어나다', ex: 'Traveling alone helped me step out of my comfort zone.', exKo: '혼자 여행한 것이 익숙한 범위를 벗어나는 데 도움이 되었다.'},
      {w: 'make oneself understood', ko: '자기 뜻을 전달하다', ex: 'I made myself understood with gestures.', exKo: '나는 몸짓으로 내 뜻을 전달했다.'},
      {w: 'keep in touch', ko: '연락하며 지내다', ex: 'Let’s keep in touch after the camp.', exKo: '캠프가 끝나도 연락하며 지내자.'},
      {w: 'have something in common', ko: '공통점이 있다', ex: 'We had more in common than I expected.', exKo: '우리는 생각보다 공통점이 많았다.'},
      {w: 'look forward to -ing', ko: '~하기를 고대하다', ex: 'I’m looking forward to meeting new friends.', exKo: '새 친구들을 만나기를 고대하고 있다.'}
    ],
    pairs: [
      {a: 'familiar', b: 'unfamiliar', rel: '반대말 (un-)'},
      {a: 'polite', b: 'rude', rel: '반대말'},
      {a: 'local', b: 'foreign', rel: '현지의 / 외국의'},
      {a: 'welcome', b: 'farewell', rel: '맞이 / 작별'},
      {a: 'understand', b: 'misunderstand', rel: '바르게 / 잘못 (mis-)'}
    ],
    wrap: {en: 'A custom I would like to learn about is ______ because ______.', ko: '오늘 배운 낱말로 알고 싶은 다른 나라의 관습 한 문장 쓰기'}
  },

  talk: {
    hook: {en: 'If you could spend a summer anywhere in the world, where would you go?', ko: '세계 어디서든 여름을 보낼 수 있다면 어디로 가고 싶나요?', note: '나라와 까닭을 짧게 말하게 한다. 1과 가정법(If you could ~, would ~?)을 다시 쓰는 기회이기도 하다.'},
    speakers: {Yuna: {voice: 0, pitch: 1.1}, Hyun: {voice: 1, pitch: 1}, Linh: {voice: 0, pitch: 1.2}, 'Mr. Park': {voice: 2, pitch: .95}, Omar: {voice: 1, pitch: .95}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Speak 1', func: '계획 묻고 답하기',
        key: {q: ['What are you planning to do ~?', 'Do you have any plans for ~?', 'What are you going to do ~?'], a: ['I’m planning to ~.', 'I’m going to ~.', 'I’m thinking of ~ing.']},
        note: 'be planning to / be going to + 동사원형, be thinking of + -ing. 계획 뒤에는 까닭이나 세부 사항(where, with whom)을 덧붙이게 한다.',
        dialogs: [
          { title: 'Dialogue A', setting: '방학 전날, 교실', lines: [
            {s: 'Hyun', en: 'Yuna, {{do you have any plans for}} the summer vacation?', ko: '유나야, 여름 방학에 무슨 계획 있어?'},
            {s: 'Yuna', en: 'Yes. {{I’m planning to}} join an international youth camp in Vietnam.', ko: '응. 베트남에서 열리는 국제 청소년 캠프에 참가할 계획이야.'},
            {s: 'Hyun', en: 'Wow! {{What are you going to do}} there?', ko: '와! 거기서 뭐 할 건데?'},
            {s: 'Yuna', en: 'We’re going to paint a school in a small town.', ko: '작은 마을의 학교에 페인트칠을 할 거야.'},
            {s: 'Hyun', en: 'That sounds meaningful. Are you nervous?', ko: '의미 있겠다. 긴장돼?'},
            {s: 'Yuna', en: 'A little. I don’t know whether I can communicate with everyone.', ko: '조금. 모두와 소통할 수 있을지 모르겠어.'}
          ]},
          { title: 'Dialogue B', setting: '여행사 상담 창구', lines: [
            {s: 'A', en: 'Hi. {{I’m thinking of}} {{traveling}} to Mongolia next month.', ko: '안녕하세요. 다음 달에 몽골 여행을 생각하고 있어요.'},
            {s: 'B', en: 'Great choice. {{What are you planning to}} see?', ko: '좋은 선택이에요. 무엇을 보실 계획인가요?'},
            {s: 'A', en: 'I want to stay in a ger and see the stars in the desert.', ko: '게르에 묵으면서 사막에서 별을 보고 싶어요.'},
            {s: 'B', en: 'Then I recommend the three-day tour. It’s the best time of year to go.', ko: '그럼 3일짜리 여행을 추천해요. 지금이 1년 중 가기 가장 좋은 때예요.'}
          ]}
        ],
        check: [
          {q: 'What is Yuna planning to do this summer?', a: 'She is planning to join an international youth camp in Vietnam.'},
          {q: 'What will the campers do?', a: 'They will paint a school in a small town.'},
          {q: 'What does A want to do in Mongolia?', a: 'Stay in a ger and see the stars in the desert.'}
        ],
        drill: {frame: ['A: What are you planning to do this summer?', 'B: I’m planning to ____.'], opts: ['volunteer abroad', 'learn a new language', 'visit my grandparents', 'join a youth camp', 'travel by train', 'read ten books']}
      },
      { id: 'lt2', label: 'Listen & Speak 2', func: '기대 표현하기',
        key: {q: ['Are you excited about ~?', 'How do you feel about ~?'], a: ['I’m looking forward to ~ing.', 'I can’t wait to ~.', 'I’m really excited about ~.']},
        note: 'look forward to 뒤의 to는 전치사 → 동명사(-ing). can’t wait to 뒤는 동사원형. 혼동하기 쉬우니 짝 활동에서 반복한다.',
        dialogs: [
          { title: 'Dialogue A', setting: '캠프 첫날 밤, 숙소 마당', lines: [
            {s: 'Linh', en: 'Welcome to Vietnam, Yuna! {{Are you excited about}} tomorrow?', ko: '베트남에 온 걸 환영해, 유나! 내일이 기대돼?'},
            {s: 'Yuna', en: 'Yes! {{I’m looking forward to}} {{meeting}} the children at the school.', ko: '응! 학교 아이들을 만나는 게 정말 기대돼.'},
            {s: 'Linh', en: 'They’re looking forward to meeting you, too. They want to learn some Korean words.', ko: '아이들도 너를 만나길 기대하고 있어. 한국어 몇 마디 배우고 싶대.'},
            {s: 'Yuna', en: 'Really? {{I can’t wait to}} teach them. Can you teach me some Vietnamese, too?', ko: '정말? 빨리 가르쳐 주고 싶다. 너도 나에게 베트남어 좀 가르쳐 줄래?'},
            {s: 'Linh', en: 'Of course. Let’s start with “Cảm ơn.” It means “Thank you.”', ko: '물론이지. “깜언”부터 시작하자. “고마워”라는 뜻이야.'}
          ]},
          { title: 'Dialogue B', setting: '교환 학생 환영회', lines: [
            {s: 'Mr. Park', en: 'Omar, how do you feel about your first week in Korea?', ko: '오마르, 한국에서의 첫 주는 어때?'},
            {s: 'Omar', en: 'Everything is new. {{I’m really excited about}} the school festival.', ko: '모든 게 새로워요. 학교 축제가 정말 기대돼요.'},
            {s: 'Mr. Park', en: 'You’ll love it. Our class is going to cook tteokbokki.', ko: '마음에 들 거야. 우리 반은 떡볶이를 만들 거란다.'},
            {s: 'Omar', en: 'I can’t wait to try it — if it’s not too spicy!', ko: '빨리 먹어 보고 싶어요 — 너무 맵지만 않다면요!'}
          ]}
        ],
        check: [
          {q: 'What is Yuna looking forward to?', a: 'Meeting the children at the school.'},
          {q: 'What does “Cảm ơn” mean?', a: 'It means “Thank you.”'},
          {q: 'What is Omar excited about?', a: 'The school festival.'}
        ],
        drill: {frame: ['A: Are you excited about the trip?', 'B: Yes! I’m looking forward to ____.'], opts: ['trying local food', 'making new friends', 'seeing the ocean', 'learning a new language', 'staying with a host family', 'visiting old temples']}
      }
    ],
    interviewEx: 'Hana is planning to visit Japan this winter. She is looking forward to trying local food in Osaka.',
    watch: {
      label: 'Let’s Watch', title: 'Two Hands', setting: '캠프 마을 시장. 유나가 과일 가게 할머니에게 돈을 건넨다.',
      lines: [
        {s: 'Yuna', en: 'Here you are. (hands the money with one hand)', ko: '여기 있어요. (한 손으로 돈을 건넨다)'},
        {s: 'Linh', en: 'Yuna, try using both hands. It’s more polite here, especially with older people.', ko: '유나야, 두 손으로 해 봐. 여기서는 그게 더 예의 바른 거야. 특히 어르신께는.'},
        {s: 'Yuna', en: 'Oh! We do the same thing in Korea. I just forgot.', ko: '아! 한국에서도 똑같이 해. 그냥 깜빡했어.'},
        {s: 'Linh', en: 'Really? I didn’t know whether Koreans had that custom too.', ko: '정말? 한국 사람들도 그런 관습이 있는지 몰랐어.'},
        {s: 'Yuna', en: 'See? Maybe we have more in common than we think.', ko: '봐, 우린 생각보다 공통점이 많은지도 몰라.'}
      ],
      check: [
        {q: 'What does Linh suggest?', a: 'Using both hands when handing money.'},
        {q: 'Why is it more polite?', a: 'Because it shows respect, especially to older people.'},
        {q: 'What does Yuna realize?', a: 'Korea and Vietnam have the same custom.'}
      ]
    },
    wrap: {en: 'Talk about a plan for the future and what you are looking forward to.', ko: '앞으로의 계획과 기대되는 일을 짝과 이야기하기'}
  },

  grammar: {
    cover: 'where · whether',
    hook: {en: 'This is the school {{where}} 120 children study.  /  I don’t know {{whether}} I can communicate with everyone.', ko: '첫 문장의 where는 무엇을 대신할까? 두 번째 문장에서 can과 I의 순서는 왜 의문문과 다를까?', answer: 'where = at which (장소 + 전치사 + 관계대명사) / whether I can = 질문(Can I ~?)이 문장 속에 들어가면 평서문 어순', note: '2차시 대화와 본문의 문장이다. 두 번째 문장을 Can I communicate?와 나란히 써서 어순 차이를 먼저 보게 한다.'},
    points: [
      { id: 'g1', name: '관계부사 · 전치사 + 관계대명사', short: '관계부사', form: '장소 + where / 때 + when / the reason + why / (the way) how = 전치사 + which', meaning: '~하는 (장소·때·이유·방법)',
        notice: [
          {en: 'This is the school {{where}} 120 children study.', ko: '이곳이 120명의 아이들이 공부하는 학교다.'},
          {en: 'I remember the night {{when}} we sat by the river.', ko: '나는 우리가 강가에 앉아 있던 밤을 기억한다.'},
          {en: 'That is the reason {{why}} I cried.', ko: '그것이 내가 운 이유다.'}
        ],
        principle: {
          q: '관계대명사도 있는데 관계부사는 왜 필요할까?',
          pic: [{en: 'at which', ko: '전치사 + 관계대명사'}, {en: '=', ko: '', arrow: ''}, {en: 'where', ko: '한 단어로 줄임', hot: true}],
          core: '관계부사는 “전치사 + which”를 한 단어로 줄인 말이다. 전치사가 이미 그 안에 들어 있으므로 뒤에는 빠진 것 없는 완전한 문장이 온다.',
          why: ['관계대명사(which, that) 뒤 → 주어나 목적어가 빠진 불완전한 문장.', '관계부사(where, when, why) 뒤 → 완전한 문장. 이것이 어법 문제의 핵심 단서다.', 'the way와 how는 함께 쓰지 않는다(the way I learned / how I learned).'],
          note: '기출: 2024년 9월 고1 29번 ⑤ structures …, which decision making is less centralized → in which(where) / 2024학년도 수능 29번 ② gestures which they have some difficulty → with which.'
        },
        anim: [
          {title: '두 문장 → 전치사 + which → where', why: '같은 장소가 두 번 나올 때 한 문장으로 합치는 과정.', states: [
            {t: 'This is | the school/C#school | . | / | 120 children/S#ch | study/V#st | at the school/M#at | .', note: '같은 학교가 두 번 나온다', ko: '이곳은 학교다. 120명의 아이들이 그 학교에서 공부한다.'},
            {t: 'This is | the school/C#school | at which/X#at | 120 children/S#ch | study/V#st | .', note: 'at the school → at which로 바꿔 앞으로', ko: '이곳은 120명의 아이들이 공부하는 학교다.'},
            {t: 'This is | the school/C#school | where/X#at | 120 children/S#ch | study/V#st | .', note: 'at which = where (뒤는 완전한 문장)', ko: '이곳은 120명의 아이들이 공부하는 학교다.'}]},
          {title: '관계대명사 vs 관계부사 — 뒤를 보라', states: [
            {t: 'This is | the school/C | which/X#rel | I | visited/V | (목적어 빈자리)/D#gap | .', note: 'which 뒤: visited의 목적어가 빠짐 → 불완전', ko: '이곳은 내가 방문한 학교다.'},
            {t: 'This is | the school/C | where/X#rel | I | learned/V | Vietnamese/O | .', note: 'where 뒤: 빠진 것 없음 → 완전', ko: '이곳은 내가 베트남어를 배운 학교다.'}]}
        ],
        contrast: {title: 'which? where? — 뒤 문장이 완전한가', pairs: [
          {a: 'The town {{which}} I visited was small.', ka: '내가 방문한 마을은 작았다. (visited의 목적어가 빠짐 → which)', b: 'The town {{where}} I stayed was small.', kb: '내가 머문 마을은 작았다. (stay는 목적어가 필요 없음 → 완전 → where)'},
          {a: 'I’ll never forget the day {{when}} I arrived.', ka: '내가 도착한 날을 절대 잊지 못할 것이다. (= on which)', b: 'I’ll never forget the day {{that}} changed my life.', kb: '내 삶을 바꾼 날을 잊지 못할 것이다. (changed의 주어가 빠짐 → that/which)'}],
          point: '선행사가 장소·때라고 무조건 where·when이 아니다. 뒤 문장이 완전하면 관계부사, 불완전하면 관계대명사.'},
        rule: [
          {k: '장소', v: 'the place / the town + where (= in/at which)', ex: 'This is the café where we first met.'},
          {k: '때', v: 'the day / the year + when (= on/in which)', ex: 'Summer is the season when we travel.'},
          {k: '이유', v: 'the reason + why (= for which)', ex: 'Tell me the reason why you left.'},
          {k: '방법', v: 'the way / how (둘 중 하나만)', ex: 'This is how I learned Vietnamese.'}
        ],
        check: [
          {q: 'This is the village ____ I stayed for two weeks. (which / where)', a: 'where'},
          {q: 'This is the village ____ I visited last summer. (which / where)', a: 'which'},
          {q: 'I remember the moment ____ she smiled at me. (when / which)', a: 'when'},
          {q: 'That’s the reason ____ I want to learn Vietnamese. (why / how)', a: 'why'},
          {q: 'The house in ____ we lived had a garden. (which / where)', a: 'which'}
        ],
        trap: {bad: 'This is the way how I made friends there.', good: 'This is the way I made friends there. / This is how I made friends there.', why: 'the way와 how는 함께 쓰지 않는다. 둘 중 하나만 쓴다.'},
        scramble: [
          {ko: '이곳이 우리가 벽에 페인트칠을 한 학교다.', en: 'This is the school where we painted the walls.'},
          {ko: '나는 우리가 처음 만난 날을 기억한다.', en: 'I remember the day when we first met.'},
          {ko: '그것이 내가 그 캠프를 사랑하는 이유다.', en: 'That is the reason why I love the camp.'}
        ]
      },
      { id: 'g2', name: '명사절 whether / if · 간접의문문', short: 'whether · if', form: '주어 + 동사 + whether/if + 주어 + 동사 / 의문사 + 주어 + 동사', meaning: '~인지 (아닌지) / 무엇이·어디서 ~인지',
        notice: [
          {en: 'I didn’t know {{whether}} I could communicate with everyone.', ko: '나는 모두와 소통할 수 있을지 알지 못했다.'},
          {en: 'Linh asked me {{if}} I liked spicy food.', ko: '린은 내게 매운 음식을 좋아하는지 물었다.'},
          {en: 'Do you know {{where the bus stop is}}?', ko: '버스 정류장이 어디인지 아세요?'}
        ],
        principle: {
          q: '질문을 문장 속에 넣으면 왜 어순이 바뀔까?',
          pic: [{en: 'Can I …?', ko: '질문 (동사가 앞)'}, {en: 'whether I can …', ko: '문장 속 명사 (주어 + 동사)', hot: true}],
          core: '질문이 다른 문장의 목적어(명사)가 되면 더 이상 “묻는 문장”이 아니므로 평서문 어순(주어 + 동사)으로 돌아간다. 예/아니오 질문은 whether/if를, 의문사 질문은 그 의문사를 연결어로 쓴다.',
          why: ['물음표는 큰 문장 전체에 붙는다. 안에 든 명사절은 평범한 어순이다.', 'whether는 주어·목적어·보어·전치사 뒤 어디에나 쓰지만, if는 주로 목적어 자리에만 쓴다.', 'whether or not / whether A or B처럼 or와 잘 어울린다.'],
          note: '기출: 2024년 9월 고1 29번 ③ The choice of whether the structure is ~ (전치사 뒤 whether, 맞는 선택지). 듣기: “Chloe wants to know if she can stay in another room.” (25.6 15번)'
        },
        anim: [
          {title: '질문을 문장 속에 넣으면', why: '동사가 주어 뒤로 돌아가고 whether가 앞에 붙는다.', states: [
            {t: 'Can/V#can | I/S#i | communicate/V#com | with everyone | ?', note: '예/아니오 질문: 동사가 주어 앞', ko: '내가 모두와 소통할 수 있을까?'},
            {t: 'I/S#me | don’t know/V#know | whether/X#wh | I/S#i | can/V#can | communicate/V#com | with everyone | .', note: 'whether + 주어 + 동사 (평서문 어순)', ko: '나는 내가 모두와 소통할 수 있을지 모르겠다.'}]},
          {title: '의문사 질문은 의문사가 연결어', states: [
            {t: 'Where/X#where | is/V#is | the bus stop/S#bs | ?', note: '의문사 + 동사 + 주어', ko: '버스 정류장은 어디인가요?'},
            {t: 'Do you know/V#dk | where/X#where | the bus stop/S#bs | is/V#is | ?', note: '의문사 + 주어 + 동사 (is가 뒤로)', ko: '버스 정류장이 어디인지 아세요?'}]}
        ],
        contrast: {title: 'whether? if? that? — 확실한가, 모르는가', pairs: [
          {a: 'I know {{that}} she speaks Korean.', ka: '나는 그녀가 한국어를 한다는 것을 안다. (확실한 사실 → that)', b: 'I wonder {{whether}} she speaks Korean.', kb: '나는 그녀가 한국어를 하는지 궁금하다. (모름 → whether/if)'},
          {a: '{{Whether}} we win or lose doesn’t matter.', ka: '우리가 이기든 지든 상관없다. (주어 자리 → whether만)', b: 'I’m not sure {{if}} it will rain.', kb: '비가 올지 잘 모르겠다. (목적어 자리 → if 가능)'}],
          point: '사실이면 that, “~인지 아닌지”면 whether/if. 주어 자리·전치사 뒤에는 whether.'},
        rule: [
          {k: 'whether/if', v: 'know / wonder / ask + whether(if) + S + V', ex: 'She asked if I was tired.'},
          {k: '의문사', v: 'know / tell me + 의문사 + S + V', ex: 'Tell me what you need.'},
          {k: 'whether만', v: '주어 자리 · 전치사 뒤 · whether or not', ex: 'The question of whether we should go is still open.'},
          {k: '생각 동사', v: 'Do you think + 의문사? → 의문사 + do you think + S + V', ex: 'Where do you think he is?'}
        ],
        check: [
          {q: 'I wonder ____ she will come to the party. (that / whether)', a: 'whether'},
          {q: 'Can you tell me where ____? (is the station / the station is)', a: 'the station is'},
          {q: 'He asked me ____ I had been to Vietnam. (if / that)', a: 'if'},
          {q: '____ we travel by bus or by train doesn’t matter. (Whether / If)', a: 'Whether'},
          {q: 'I know ____ he is from Canada. (that / whether)', a: 'that'}
        ],
        trap: {bad: 'Do you know where is the bus stop?', good: 'Do you know where the bus stop is?', why: '질문이 문장 속으로 들어가면 평서문 어순(주어 + 동사).'},
        scramble: [
          {ko: '나는 그 아이들이 나를 좋아할지 궁금했다.', en: 'I wondered whether the children would like me.'},
          {ko: '시장이 어디에 있는지 말해 줄래?', en: 'Can you tell me where the market is?'},
          {ko: '그녀는 내가 매운 음식을 먹을 수 있는지 물었다.', en: 'She asked if I could eat spicy food.'}
        ]
      }
    ],
    wrap: {en: 'This is the place where ______. I still wonder whether ______.', ko: '관계부사 한 문장, whether 명사절 한 문장으로 기억에 남는 장소 소개하기'},
    wrapEx: 'This is the town where I learned my first Vietnamese words. I still wonder whether the children remember my name.'
  },

  reading: {
    title: 'The Summer I Crossed a Border', kind: '체험 수기', cover: 'Border', coverKo: '국경을 넘던 여름', cover2: 'Together', coverKo2: '지도에 없는 것',
    before: [
      {q: 'What would be the hardest part of living in another country for two weeks?', a: '언어, 음식, 날씨, 관습 등'},
      {q: 'What can you do when you don’t speak the same language as someone?', a: '몸짓, 그림, 미소, 번역 앱 등'}
    ],
    gloss: {'central Vietnam': '베트남 중부', 'youth camp': '청소년 캠프', 'palm': '손바닥', beckoned: '손짓해 불렀다', 'tones': '성조', giggled: '킥킥 웃었다', 'homestay': '홈스테이(현지 가정 숙박)', 'bowl': '그릇', 'humid': '습한', 'phrasebook': '여행 회화 책', 'lanterns': '등불, 초롱', 'souvenir': '기념품'},
    paras: [
      {who: '', en: 'Last summer, I spent two weeks in a small town in central Vietnam, where I joined an international youth camp. Twenty teenagers from eight countries came together to paint an old elementary school. Before I left, I kept asking myself one question: would I be able to connect with people whose language I couldn’t speak?',
       ko: '지난여름, 나는 베트남 중부의 작은 마을에서 2주를 보냈고, 그곳에서 국제 청소년 캠프에 참가했다. 8개국에서 온 스무 명의 십대들이 낡은 초등학교에 페인트칠을 하려고 모였다. 떠나기 전, 나는 스스로에게 한 가지 질문을 계속 던졌다. 말을 할 줄 모르는 사람들과 내가 이어질 수 있을까?',
       check: {q: 'What did the campers do?', a: 'They painted an old elementary school.'}, think: '나라면 떠나기 전에 무엇이 가장 걱정될까?',
       bg: {src: 'h1/donga2/l2/img/r-p0.jpg', about: '베트남 시골 마을 풍경'}},
      {who: 'Day 1', en: 'On the first day, I made a mistake. I wanted a little girl to come closer, so I beckoned to her with my palm facing up, the way people often do in some countries. Her smile disappeared. Linh, a local volunteer, quietly explained that in Vietnam this gesture is used to call animals. People beckon with the palm facing down.',
       ko: '첫날 나는 실수를 했다. 어린 여자아이가 가까이 오기를 바라서, 몇몇 나라에서 흔히 하듯 손바닥을 위로 향하게 하고 손짓해 불렀다. 아이의 미소가 사라졌다. 현지 자원봉사자인 린이 조용히 설명해 주었다. 베트남에서 이 몸짓은 동물을 부를 때 쓰인다고. 사람을 부를 때는 손바닥을 아래로 향하게 해서 손짓한다고.',
       check: {q: 'Why did the girl’s smile disappear?', a: 'Because the gesture is used to call animals in Vietnam.'}, think: '몸짓 하나가 왜 이렇게 큰 차이를 만들까?',
       bg: {src: 'h1/donga2/l2/img/r-p1.jpg', about: '손'}},
      {who: 'Learning to Listen', en: 'I felt terrible, but Linh smiled. “Everyone makes that mistake,” she said. “What matters is whether you learn from it.” From then on, I watched carefully how local people greeted each other, ate, and gave things. Even when I didn’t understand the words, I could understand a lot by paying attention.',
       ko: '나는 마음이 아팠지만 린은 웃었다. “다들 그 실수를 해.” 그녀가 말했다. “중요한 건 네가 거기서 배우느냐야.” 그때부터 나는 현지 사람들이 어떻게 인사하고, 먹고, 물건을 주고받는지 주의 깊게 보았다. 말을 이해하지 못할 때조차, 주의를 기울이면 많은 것을 이해할 수 있었다.',
       check: {q: 'What did Linh say matters?', a: 'Whether you learn from the mistake.'}, think: '말보다 행동을 보고 배운 경험이 있나?',
       bg: {src: 'h1/donga2/l2/img/r-p2.jpg', about: '시장의 사람들'}},
      {who: 'Six Tones', en: 'Vietnamese has six tones, so the same sound can have several meanings. When I tried to say “Cảm ơn” to the children, they giggled at my accent. Instead of feeling embarrassed, I laughed with them, and they began correcting me one by one. By the end of the first week, the children were teaching me more than I was teaching them.',
       ko: '베트남어에는 성조가 여섯 개 있어서, 같은 소리도 여러 뜻을 가질 수 있다. 아이들에게 “깜언(고마워)”이라고 말하려 하자 아이들은 내 억양에 킥킥 웃었다. 창피해하는 대신 나는 아이들과 함께 웃었고, 아이들은 한 명씩 내 발음을 고쳐 주기 시작했다. 첫 주가 끝날 무렵, 아이들이 나에게 가르쳐 주는 것이 내가 가르쳐 주는 것보다 많았다.',
       check: {q: 'How many tones does Vietnamese have?', a: 'Six tones.'}, think: '실수를 웃음으로 바꾸면 어떤 일이 생길까?',
       bg: {src: 'h1/donga2/l2/img/r-p3.jpg', about: '웃고 있는 아이들'}},
      {who: 'The School', en: 'The school where we worked had cracked walls and only a few fans. The air was so hot and humid that the paint dried almost as soon as it touched the wall. We started at six in the morning, when it was still cool. Slowly, the gray walls turned blue, yellow, and green, and the children painted their handprints near the door.',
       ko: '우리가 일한 학교는 벽에 금이 가 있었고 선풍기도 몇 대뿐이었다. 공기가 너무 덥고 습해서 페인트가 벽에 닿자마자 거의 말라 버렸다. 우리는 아직 선선한 아침 6시에 일을 시작했다. 천천히 회색 벽이 파랑, 노랑, 초록으로 변했고, 아이들은 문 가까이에 손바닥 도장을 찍었다.',
       check: {q: 'Why did the campers start work at six in the morning?', a: 'Because it was still cool then.'}, think: '아이들이 손바닥 도장을 찍은 까닭은 무엇일까?',
       bg: {src: 'h1/donga2/l2/img/r-p4.jpg', about: '알록달록한 벽'}},
      {who: 'Dinner at the Homestay', en: 'I stayed with a family who did not speak English. At dinner, the grandmother kept putting food into my bowl. At first, I wondered whether I was supposed to finish everything. Later, Linh told me that this is a way of showing care. I learned to say “No, thank you” in Vietnamese, but I never refused her fish soup.',
       ko: '나는 영어를 하지 못하는 가족의 집에 머물렀다. 저녁 식사 때 할머니는 계속 내 그릇에 음식을 덜어 주셨다. 처음에는 내가 전부 다 먹어야 하는지 궁금했다. 나중에 린이 이것이 마음을 표현하는 방법이라고 알려 주었다. 나는 베트남어로 “괜찮아요, 고맙습니다”라고 말하는 법을 배웠지만, 할머니의 생선국만은 한 번도 거절하지 않았다.',
       check: {q: 'What does putting food into a guest’s bowl show?', a: 'It is a way of showing care.'}, think: '우리 집에서는 손님에게 어떻게 마음을 표현하나?',
       bg: {src: 'h1/donga2/l2/img/r-p5.jpg', about: '쌀국수 한 그릇'}},
      {who: 'The Last Night', en: 'On the last night, all the campers sat by the river, where people were floating paper lanterns. Omar from Egypt, Lucía from Mexico, Linh, and I wrote our wishes on our lanterns in four different languages. We could not read each other’s words, but we didn’t need to. We all knew what they meant.',
       ko: '마지막 밤, 모든 캠프 참가자들이 강가에 앉았고, 그곳에서는 사람들이 종이 등불을 띄우고 있었다. 이집트에서 온 오마르, 멕시코에서 온 루시아, 린, 그리고 나는 각자의 등불에 네 가지 다른 언어로 소원을 적었다. 우리는 서로의 글을 읽을 수 없었지만, 그럴 필요가 없었다. 우리 모두 그것이 무슨 뜻인지 알았다.',
       check: {q: 'What did the campers do on the last night?', a: 'They wrote their wishes on paper lanterns and floated them on the river.'}, think: '읽을 수 없는데도 뜻을 안다는 것은 어떤 의미일까?',
       bg: {src: 'h1/donga2/l2/img/r-p6.jpg', about: '강 위에 뜬 종이 등불'}},
      {who: 'Beyond Borders', en: 'Before the camp, I thought the biggest border between people was language. Now I know that borders are easier to cross than they look on a map. What really matters is not whether we speak the same language, but whether we are willing to listen, to laugh at our mistakes, and to learn from each other.',
       ko: '캠프 전에 나는 사람 사이의 가장 큰 경계가 언어라고 생각했다. 이제 나는 경계가 지도에서 보이는 것보다 넘기 쉽다는 것을 안다. 정말 중요한 것은 우리가 같은 언어를 쓰느냐가 아니라, 기꺼이 귀 기울이고, 자신의 실수에 웃고, 서로에게서 배우려 하느냐다.',
       check: {q: 'What does the writer think really matters now?', a: 'Whether we are willing to listen, laugh at our mistakes, and learn from each other.'}, think: '나와 다른 사람에게 다가가기 위해 나는 무엇을 할 수 있을까?',
       bg: {src: 'h1/donga2/l2/img/r-p7.jpg', about: '세계 지도'}}
    ],
    coverImg: {src: 'h1/donga2/l2/img/r-cover.jpg'},
    coverImg2: {src: 'h1/donga2/l2/img/r-cover2.jpg'},
    split: 4,
    next: '유나는 아이들의 학교를\n어떻게 바꾸었을까?',
    recap: {q: '유나는 첫 주에 무엇을 배웠나?', items: [{k: 'GESTURE', v: 'palm up = calling animals → beckon with the palm down'}, {k: 'LISTENING', v: '“What matters is whether you learn from it.”'}, {k: 'TONES', v: 'six tones — the children corrected her accent'}]},
    tf: [
      {p: 0, s: 'The camp had teenagers from eight countries.', a: true},
      {p: 1, s: 'In Vietnam, people beckon with the palm facing up.', a: false, why: '손바닥을 아래로 향하게 한다.'},
      {p: 3, s: 'Yuna felt embarrassed and stopped speaking Vietnamese.', a: false, why: '아이들과 함께 웃었고 아이들이 고쳐 주었다.'},
      {p: 4, s: 'The campers started work early because it was cool.', a: true},
      {p: 5, s: 'The host grandmother spoke English well.', a: false, why: '그 가족은 영어를 하지 못했다.'},
      {p: 6, s: 'The campers wrote their wishes in the same language.', a: false, why: '네 가지 다른 언어로 썼다.'},
      {p: 7, s: 'Yuna now thinks language is the biggest border.', a: false, why: '귀 기울이고 배우려는 태도가 중요하다고 생각한다.'}
    ],
    key: [
      {en: 'I spent two weeks in a small town in central Vietnam, {{where}} I joined an international youth camp.', note: '관계부사 where (계속적 용법: 그리고 그곳에서)', g: 'g1'},
      {en: '“What matters is {{whether}} you learn from it.”', note: 'whether 명사절 = 보어', g: 'g2'},
      {en: 'I watched carefully {{how}} local people greeted each other.', note: 'how + 주어 + 동사 (간접의문문 / 방법)', g: 'g2'},
      {en: 'The school {{where}} we worked had cracked walls.', note: '관계부사 where + 완전한 문장', g: 'g1'},
      {en: 'We started at six in the morning, {{when}} it was still cool.', note: '관계부사 when (계속적 용법)', g: 'g1'},
      {en: 'At first, I wondered {{whether}} I was supposed to finish everything.', note: 'wonder + whether + 주어 + 동사', g: 'g2'}
    ],
    summary: {text: 'Yuna joined an {{international}} youth camp in Vietnam. She made a mistake with a {{gesture}}, but she learned by paying attention. The children laughed at her {{accent}} and taught her Vietnamese. On the last night, the campers wrote wishes on {{lanterns}}. Yuna realized that what matters is {{whether}} we are willing to listen and learn.'},
    order: ['Yuna arrived at the camp in Vietnam.', 'She beckoned to a girl with her palm up.', 'Linh explained the local custom.', 'Yuna began watching local people carefully.'],
    chart: {title: 'WHAT YUNA LEARNED', ko: '유나가 배운 것 정리', cols: ['Situation', 'Lesson'], note: '표를 보고 “This is the place where ~.” “I learned whether/how ~.” 문장으로 말하게 한다.', rows: [
      {name: 'Gesture', cells: ['beckoning a girl', 'customs differ — watch and learn']},
      {name: 'Language', cells: ['children laughed at her accent', 'laugh at your mistakes']},
      {name: 'Food', cells: ['grandma filled her bowl', 'food is a way of showing care']},
      {name: 'Lanterns', cells: ['wishes in four languages', 'meaning goes beyond words']}
    ]},
    wrap: {en: 'To connect with people from other cultures, we need ______. What matters is whether ______.', ko: '관통 질문으로 돌아가기: 다른 문화와 이어지는 데 필요한 것 쓰기'}
  },

  quiz: [
    ['“관습, 풍습”을 뜻하는 낱말은?', ['border', 'custom', 'accent', 'gesture'], 1, 'custom'],
    ['“낯선”을 뜻하는 낱말은?', ['generous', 'diverse', 'unfamiliar', 'polite'], 2, 'unfamiliar'],
    ['translate의 trans-가 뜻하는 것은?', ['사이', '건너서', '잘못', '다시'], 1, 'trans- = 건너서'],
    ['polite의 반대말은?', ['rude', 'kind', 'local', 'shy'], 0, 'polite ↔ rude'],
    ['계획을 묻는 표현은?', ['I can’t wait to go.', 'What are you planning to do?', 'I’m looking forward to it.', 'That sounds meaningful.'], 1, 'What are you planning to do ~?'],
    ['빈칸에 알맞은 것은? “I’m looking forward to ____ you.”', ['meet', 'meeting', 'met', 'be met'], 1, 'look forward to + -ing'],
    ['빈칸에 알맞은 것은? “This is the town ____ I stayed.”', ['which', 'where', 'what', 'who'], 1, 'stay 뒤 완전 → where'],
    ['빈칸에 알맞은 것은? “This is the town ____ I visited.”', ['where', 'when', 'which', 'why'], 2, 'visited의 목적어가 빠짐 → which'],
    ['어법상 틀린 문장은?', ['This is how I learned it.', 'This is the way I learned it.', 'This is the way how I learned it.', 'I know why she left.'], 2, 'the way how ✗'],
    ['빈칸에 알맞은 것은? “I wonder ____ she will come.”', ['that', 'whether', 'what', 'which'], 1, '~인지 → whether'],
    ['어법상 맞는 문장은?', ['Do you know where is the bank?', 'Do you know where the bank is?', 'Do you know is where the bank?', 'Do you know where does the bank is?'], 1, '간접의문문: 의문사 + 주어 + 동사'],
    ['유나가 첫날 한 실수는?', ['한 손으로 돈을 건넸다', '손바닥을 위로 하고 손짓했다', '음식을 남겼다', '늦게 도착했다'], 1, 'palm facing up'],
    ['아이들이 유나에게 해 준 것은?', ['페인트를 사 줬다', '발음을 고쳐 줬다', '편지를 써 줬다', '등불을 만들어 줬다'], 1, 'correcting me one by one'],
    ['할머니가 그릇에 음식을 덜어 준 것의 의미는?', ['다 먹으라는 명령', '마음을 표현하는 방법', '음식이 남아서', '손님을 시험하려고'], 1, 'a way of showing care'],
    ['글쓴이가 깨달은 것은?', ['언어가 가장 큰 경계다', '여행은 위험하다', '귀 기울이고 배우려는 태도가 중요하다', '혼자 여행해야 한다'], 2, 'whether we are willing to listen …']
  ]
};
