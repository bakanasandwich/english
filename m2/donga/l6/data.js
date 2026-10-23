/* 중2 영어(동아·윤정미) Lesson 6 · The Greatest Love for All
   교과서 대조(2026-10): 의사소통 기능(종류 묻고 답하기 · 추천 요청하고 답하기), 언어 형식(지각동사 + 목적어 + -ing · so ~ that),
   읽기 주제(Dr. Schofield, a Foreigner Who Loved Korea — 한국 독립을 도운 외국인의 일생), 단원 어휘를 교과서 본문 어휘와 맞췄다.
   대화문·읽기 글은 저작권 때문에 교과서 원문을 싣지 않고, 같은 주제·같은 언어 형식으로 새로 쓴 글이다.
   읽기 글의 인물(호머 헐버트)은 널리 알려진 역사적 사실을 바탕으로 했다. */
window.LESSON = {
  book: 'm2-donga', no: 6,
  title: 'The Greatest Love for All', ko: '모두를 위한 가장 큰 사랑',
  bigQ: {en: 'What does it mean to love a country and its people?', ko: '한 나라와 그 사람들을 사랑한다는 것은 무엇일까?'},
  align: {
    tb: {reading: 'Dr. Schofield, a Foreigner Who Loved Korea', funcs: ['종류 묻고 답하기', '추천 요청하고 답하기'], forms: ['지각동사 + 목적어 + -ing (heard people shouting)', 'so ~ that (so hard that he was able to ~)'],
      note: '교과서 읽기는 3·1 운동을 세계에 알리고 평생 한국인을 도운 캐나다인 의사 스코필드 박사의 이야기. 여기 본문은 한글을 사랑하고 한국 독립을 도운 미국인 교사 호머 헐버트의 이야기로 새로 쓴 글이다.'},
    std: {vocab: ['9영01-01', '9영02-01'], talk: ['9영01-02', '9영02-06'], grammar: ['9영02-05'], read1: ['9영01-03', '9영01-04'], read2: ['9영01-09', '9영02-07']},
    forms: ['Causative Verbs / Sensory Perception Verbs', 'Subordinating Conjunctions']
  },
  goals: {
    vocab: ['역사·독립과 관련된 낱말 20개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 존경하는 인물을 한 문장으로 소개할 수 있다.'],
    talk: ['좋아하는 것의 종류를 묻고 답할 수 있다. (What kinds of ~ do you like?)', '추천을 요청하고 답할 수 있다. (Can you recommend ~? — I recommend ~.)'],
    grammar: ['지각동사(see, hear, watch) + 목적어 + 동사원형/-ing로 보고 들은 장면을 말할 수 있다.', 'so ~ that으로 원인과 결과를 한 문장에 말할 수 있다.'],
    read1: ['인물 이야기를 읽고 헐버트가 한국에서 한 일을 시간 순서로 파악할 수 있다.'],
    read2: ['헐버트의 일생을 요약하고, 그에게 감사의 편지를 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'Do you know any foreigners who loved Korea?', ko: '한국을 사랑한 외국인을 알고 있나요?', note: '역사 시간에 배운 인물이나 요즘 한국을 알리는 외국인을 떠올리게 한다. 오늘 낱말은 그런 인물을 소개할 때 쓰는 말이라고 안내한다.'},
    words: [
      {w: 'foreigner', pos: 'n.', ko: '외국인', ic: '🌍', ex: 'He was a foreigner who loved Korea.', exKo: '그는 한국을 사랑한 외국인이었다.'},
      {w: 'independence', pos: 'n.', ko: '독립', ic: '🇰🇷', ex: 'People shouted for independence.', exKo: '사람들은 독립을 외쳤다.'},
      {w: 'independent', pos: 'adj.', ko: '독립한', ic: '🕊️', ex: 'Every country has the right to be independent.', exKo: '모든 나라는 독립할 권리가 있다.'},
      {w: 'movement', pos: 'n.', ko: '운동, 움직임', ic: '✊', ex: 'He helped the independence movement.', exKo: '그는 독립운동을 도왔다.'},
      {w: 'right', pos: 'n.', ko: '권리', ic: '⚖️', ex: 'Everyone has the right to learn.', exKo: '모든 사람은 배울 권리가 있다.'},
      {w: 'gather', pos: 'v.', ko: '모이다', ic: '👥', ex: 'Many people gathered in the park.', exKo: '많은 사람이 공원에 모였다.'},
      {w: 'event', pos: 'n.', ko: '사건, 행사', ic: '📅', ex: 'It was an important event.', exKo: '그것은 중요한 사건이었다.'},
      {w: 'historic', pos: 'adj.', ko: '역사적인, 역사적으로 중요한', ic: '🏛️', ex: 'It was a historic day.', exKo: '역사적인 날이었다.'},
      {w: 'article', pos: 'n.', ko: '기사', ic: '📰', ex: 'He wrote an article for a newspaper.', exKo: '그는 신문에 기사를 썼다.'},
      {w: 'continue', pos: 'v.', ko: '계속하다', ic: '➡️', ex: 'He continued to help Korea.', exKo: '그는 계속 한국을 도왔다.'},
      {w: 'government', pos: 'n.', ko: '정부', ic: '🏢', ex: 'The government invited him.', exKo: '정부가 그를 초대했다.'},
      {w: 'invitation', pos: 'n.', ko: '초대', ic: '💌', ex: 'He came at the invitation of the president.', exKo: '그는 대통령의 초대로 왔다.'},
      {w: 'return', pos: 'v.', ko: '돌아오다', ic: '↩️', ex: 'He returned to Korea in 1949.', exKo: '그는 1949년에 한국에 돌아왔다.'},
      {w: 'alphabet', pos: 'n.', ko: '문자, 알파벳', ic: '🔤', ex: 'He loved the Korean alphabet.', exKo: '그는 한글을 사랑했다.'},
      {w: 'textbook', pos: 'n.', ko: '교과서', ic: '📘', ex: 'He wrote a textbook in Hangeul.', exKo: '그는 한글로 교과서를 썼다.'},
      {w: 'letter', pos: 'n.', ko: '편지, 글자', ic: '✉️', ex: 'He carried a secret letter.', exKo: '그는 비밀 편지를 가지고 갔다.'},
      {w: 'secret', pos: 'adj.', ko: '비밀의', ic: '🤫', ex: 'They had a secret meeting.', exKo: '그들은 비밀 모임을 가졌다.'},
      {w: 'honor', pos: 'n. / v.', ko: '명예; 기리다', ic: '🎖️', ex: 'Korea honored him with a medal.', exKo: '한국은 훈장으로 그를 기렸다.'},
      {w: 'bury', pos: 'v.', ko: '묻다, 매장하다', ic: '🪦', ex: 'He wanted to be buried in Korea.', exKo: '그는 한국에 묻히고 싶어 했다.'},
      {w: 'recommend', pos: 'v.', ko: '추천하다', ic: '👍', ex: 'Can you recommend a good book?', exKo: '좋은 책을 추천해 줄래?'}
    ],
    phrases: [
      {w: 'What kinds of ~ do you like?', ko: '어떤 종류의 ~을 좋아하니?', ex: 'What kinds of movies do you like?', exKo: '어떤 종류의 영화를 좋아해?'},
      {w: 'Can you recommend ~?', ko: '~을 추천해 줄래?', ex: 'Can you recommend a history book?', exKo: '역사책을 추천해 줄래?'},
      {w: 'be able to', ko: '~할 수 있다', ex: 'He was able to teach in Korean.', exKo: '그는 한국어로 가르칠 수 있었다.'},
      {w: 'for the rest of one’s life', ko: '남은 평생 동안', ex: 'He helped Koreans for the rest of his life.', exKo: '그는 남은 평생 동안 한국인을 도왔다.'},
      {w: 'right away', ko: '곧바로', ex: 'He began to learn Korean right away.', exKo: '그는 곧바로 한국어를 배우기 시작했다.'},
      {w: 'would rather A than B', ko: 'B보다는 차라리 A하겠다', ex: 'I would rather walk than take a taxi.', exKo: '택시를 타느니 차라리 걷겠다.'}
    ],
    pairs: [
      {a: 'independent', b: 'independence', rel: '형용사 / 명사'},
      {a: 'invite', b: 'invitation', rel: '동사 / 명사'},
      {a: 'history', b: 'historic', rel: '명사 / 형용사'},
      {a: 'foreign', b: 'foreigner', rel: '외국의 / 외국인'}
    ],
    wrap: {en: '______ was a person who ______. I respect him/her because ______.', ko: '오늘 배운 낱말로 존경하는 인물과 그 까닭 쓰기'}
  },

  talk: {
    hook: {en: 'What kinds of books or movies do you like?', ko: '어떤 종류의 책이나 영화를 좋아하나요?', note: '장르(액션, 역사, 판타지, 다큐멘터리 등)를 모은다. 친구에게 추천을 부탁하고 추천해 주는 표현으로 이어진다.'},
    speakers: {Yuri: {voice: 0, pitch: 1.15}, Sam: {voice: 1, pitch: 1}, Clerk: {voice: 2, pitch: 1.05}, Minho: {voice: 1, pitch: .95}, 'Ms. Seo': {voice: 2, pitch: 1.05}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '종류 묻고 답하기',
        key: {q: ['What kinds of ~ do you like?', 'What kind of ~ is it?'], a: ['I like ~.', 'I usually ~.', 'It’s a(n) ~.']},
        note: 'What kinds of + 복수 명사로 종류를 묻는다. 대답은 I like action movies.처럼 종류를 말하고 예를 하나 덧붙인다.',
        dialogs: [
          { title: 'Dialogue A', setting: '방과 후, 학교 도서관', lines: [
            {s: 'Sam', en: 'Yuri, {{what kinds of books do you like}}?', ko: '유리야, 어떤 종류의 책을 좋아해?'},
            {s: 'Yuri', en: '{{I like}} history books. I love stories about real people.', ko: '역사책을 좋아해. 실제 인물 이야기가 정말 좋아.'},
            {s: 'Sam', en: 'Really? I usually read comic books.', ko: '정말? 나는 보통 만화책을 읽어.'},
            {s: 'Yuri', en: 'There are history comic books, too. They’re fun!', ko: '역사 만화책도 있어. 재미있어!'}
          ]},
          { title: 'Dialogue B', setting: '편의점 음료 냉장고 앞', lines: [
            {s: 'A', en: 'What kinds of drinks do you usually have?', ko: '보통 어떤 종류의 음료를 마셔?'},
            {s: 'B', en: 'I usually drink milk, but today I want to try something else.', ko: '보통 우유를 마시는데 오늘은 다른 걸 마셔 보고 싶어.'},
            {s: 'A', en: 'What kind of drink is this one?', ko: '이건 어떤 종류의 음료야?'},
            {s: 'B', en: 'It’s a rice drink. It’s sweet and healthy.', ko: '쌀 음료야. 달고 건강해.'}
          ]}
        ],
        check: [
          {q: 'What kinds of books does Yuri like?', a: 'History books.'},
          {q: 'What does Sam usually read?', a: 'Comic books.'},
          {q: 'What kind of drink is it?', a: 'A rice drink.'}
        ],
        drill: {frame: ['A: What kinds of ____ do you like?', 'B: I like ...'], opts: ['movies', 'books', 'music', 'sports', 'food', 'games']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '추천 요청하고 답하기',
        key: {q: ['Can you recommend ~ for me?', 'What do you recommend?'], a: ['Sure. I recommend ~.', 'Try ~. It’s really good.', 'How about ~?']},
        note: 'recommend는 “추천하다”. 추천할 때는 I recommend ~. / I strongly recommend it.처럼 말하고 까닭을 붙인다.',
        dialogs: [
          { title: 'Dialogue A', setting: '서점, 역사책 코너', lines: [
            {s: 'Minho', en: 'Excuse me. {{Can you recommend}} a history book {{for me}}?', ko: '실례합니다. 역사책 한 권 추천해 주시겠어요?'},
            {s: 'Clerk', en: '{{Sure}}. What kinds of history books do you like?', ko: '물론이죠. 어떤 종류의 역사책을 좋아하세요?'},
            {s: 'Minho', en: 'I like stories about brave people.', ko: '용감한 사람들 이야기를 좋아해요.'},
            {s: 'Clerk', en: 'Then {{I recommend}} this one. It’s about foreigners who helped Korea.', ko: '그럼 이 책을 추천해요. 한국을 도운 외국인들에 관한 책이에요.'}
          ]},
          { title: 'Dialogue B', setting: '저녁, 영화관 앞', lines: [
            {s: 'A', en: 'What movie should we watch? {{What do you recommend}}?', ko: '무슨 영화 볼까? 뭘 추천해?'},
            {s: 'B', en: '{{Try}} “The Last Letter.” {{It’s really good}}.', ko: '‘마지막 편지’ 봐. 정말 좋아.'},
            {s: 'A', en: 'What kind of movie is it?', ko: '어떤 종류의 영화야?'},
            {s: 'B', en: 'It’s a history movie. I strongly recommend it.', ko: '역사 영화야. 강력하게 추천해.'}
          ]}
        ],
        check: [
          {q: 'What does Minho ask the clerk for?', a: 'A history book (recommendation).'},
          {q: 'What is the recommended book about?', a: 'Foreigners who helped Korea.'},
          {q: 'What kind of movie is “The Last Letter”?', a: 'A history movie.'}
        ],
        drill: {frame: ['A: Can you recommend ____ for me?', 'B: Sure. I recommend ...'], opts: ['a good book', 'an action movie', 'a song', 'a restaurant', 'a place to visit', 'a snack']}
      }
    ],
    interviewEx: 'Yuri likes history books. She recommended a book about Homer Hulbert.',
    watch: {
      label: 'Let’s Watch', title: 'A Visit to Yanghwajin', setting: '역사 체험 학습. 서 선생님이 양화진 외국인 선교사 묘원에서 학생들에게 설명한다.',
      lines: [
        {s: 'Ms. Seo', en: 'Many foreigners who helped Korea are buried here.', ko: '한국을 도운 많은 외국인이 여기 묻혀 있어요.'},
        {s: 'Minho', en: 'Can you recommend one person for our report?', ko: '보고서에 쓸 인물 한 명을 추천해 주시겠어요?'},
        {s: 'Ms. Seo', en: 'I recommend Homer Hulbert. He loved Hangeul so much that he wrote a textbook in it.', ko: '호머 헐버트를 추천해요. 한글을 너무 사랑해서 한글로 교과서를 썼어요.'},
        {s: 'Yuri', en: 'Look! There are flowers on his grave. I see people bowing to him.', ko: '봐요! 그분 묘에 꽃이 있어요. 사람들이 절하는 모습이 보여요.'},
        {s: 'Ms. Seo', en: 'Yes. Koreans still remember him.', ko: '그래요. 한국인들은 지금도 그를 기억해요.'}
      ],
      check: [
        {q: 'Who does Ms. Seo recommend?', a: 'Homer Hulbert.'},
        {q: 'What did Hulbert write?', a: 'A textbook in Hangeul.'},
        {q: 'What does Yuri see?', a: 'Flowers on his grave and people bowing to him.'}
      ]
    },
    wrap: {en: 'Ask your partner what kinds of books or movies they like, and recommend one.', ko: '짝이 좋아하는 책·영화의 종류를 묻고, 하나를 추천해 주기'}
  },

  grammar: {
    cover: 'see -ing · so ~ that',
    hook: {en: 'He {{heard}} students {{reading}} out loud.  /  He studied {{so}} hard {{that}} he could write a book in Hangeul.', ko: '첫 문장에서 읽고 있는 사람은 누구일까? 둘째 문장의 원인과 결과는?', answer: 'heard students reading → 학생들이 읽고 있었다(지각동사 + 목적어 + -ing) / so hard(원인) that he could write ~(결과)', note: '교과서 언어 형식(Dr. Schofield heard people shouting ~. / He studied so hard that he was able to teach in Korean.)과 같은 짜임이다.'},
    points: [
      { id: 'g1', name: '지각동사 + 목적어 + 동사원형/-ing', short: '지각동사', form: 'see / hear / watch / feel + 목적어 + 동사원형 / -ing', meaning: '~가 …하는(하고 있는) 것을 보다/듣다',
        notice: [
          {en: 'He {{heard}} the students {{reading}} out loud.', ko: '그는 학생들이 소리 내어 읽고 있는 것을 들었다.'},
          {en: 'He {{saw}} children {{struggling}} with Chinese characters.', ko: '그는 아이들이 한자로 힘겹게 공부하는 것을 보았다.'},
          {en: 'We {{watched}} people {{put}} flowers on his grave.', ko: '우리는 사람들이 그의 묘에 꽃을 놓는 것을 지켜보았다.'}
        ],
        rule: [
          {k: '동사원형', v: '동작 전체를 보거나 들었을 때', ex: 'I saw him cross the street.'},
          {k: '-ing', v: '진행 중인 순간을 보거나 들었을 때 (생생함)', ex: 'He heard people shouting for independence.'},
          {k: '주의', v: 'to부정사는 쓰지 않는다', ex: 'I heard her sing. (○) / to sing (✗)'}
        ],
        compare: {
          title: '어떤 모양이 올 수 있을까?', note: '지각동사 뒤에는 동사원형이나 -ing만 온다. want, ask, tell은 to부정사를 쓴다는 점과 대비한다.',
          head: ['지각동사 + 동사원형', '지각동사 + -ing', '✗ to부정사'],
          cols: [['I saw him leave.', 'I heard her laugh.', 'I felt the house shake.'], ['I saw him leaving.', 'I heard her laughing.', 'I felt the house shaking.'], ['I saw him to leave.', 'I heard her to laugh.', 'I felt the house to shake.']]
        },
        check: [
          {q: 'He heard people ____ for independence. (shout)', a: 'shout / shouting'},
          {q: 'We watched the students ____ the song. (sing)', a: 'sing / singing'},
          {q: 'She saw a man ____ a letter. (write)', a: 'write / writing'},
          {q: 'I felt the ground ____. (shake)', a: 'shake / shaking'},
          {q: 'Did you see them ____ the flag? (raise)', a: 'raise / raising'}
        ],
        trap: {bad: 'He heard people to shout.', good: 'He heard people shouting.', why: '지각동사 뒤 목적어 다음에는 to부정사를 쓰지 않는다.'},
        scramble: [
          {ko: '그는 사람들이 독립을 외치는 것을 들었다.', en: 'He heard people shouting for independence.'},
          {ko: '그는 아이들이 한글을 배우는 것을 보았다.', en: 'He saw children learning Hangeul.'},
          {ko: '우리는 사람들이 꽃을 놓는 것을 지켜보았다.', en: 'We watched people put flowers there.'}
        ]
      },
      { id: 'g2', name: 'so ~ that', short: 'so ~ that', form: 'so + 형용사/부사 + that + 주어 + 동사', meaning: '너무(매우) ~해서 …하다',
        notice: [
          {en: 'He studied {{so}} hard {{that}} he could write a book in Hangeul.', ko: '그는 아주 열심히 공부해서 한글로 책을 쓸 수 있었다.'},
          {en: 'Hangeul was {{so}} easy {{that}} anyone could learn it.', ko: '한글은 아주 쉬워서 누구나 배울 수 있었다.'},
          {en: 'He loved Korea {{so}} much {{that}} he wanted to be buried there.', ko: '그는 한국을 너무 사랑해서 그곳에 묻히고 싶어 했다.'}
        ],
        rule: [
          {k: '원인 → 결과', v: 'so 뒤 = 원인(정도), that 뒤 = 결과', ex: 'It was so cold that we stayed home.'},
          {k: '할 수 있었다/없었다', v: 'that + 주어 + could / couldn’t ~', ex: 'He was so busy that he couldn’t rest.'},
          {k: '바꿔 쓰기', v: 'so ~ that 주어 can’t = too ~ to', ex: 'He was too sick to travel.'}
        ],
        check: [
          {q: 'He studied ____ hard that he could teach in Korean. (so / very)', a: 'so'},
          {q: 'The news was so sad ____ everyone cried. (that / what)', a: 'that'},
          {q: 'He was so sick that he ____ go back. (can’t, 과거)', a: 'couldn’t'},
          {q: 'She spoke ____ clearly that we understood her. (so)', a: 'so'},
          {q: 'He was too old ____ travel alone. (so ~ that = too ~ ___)', a: 'to'}
        ],
        trap: {bad: 'He was very brave that he helped Korea.', good: 'He was so brave that he helped Korea.', why: 'that과 짝을 이루는 것은 very가 아니라 so이다.'},
        scramble: [
          {ko: '그는 아주 열심히 공부해서 한국어로 가르칠 수 있었다.', en: 'He studied so hard that he could teach in Korean.'},
          {ko: '한글은 아주 쉬워서 누구나 배울 수 있었다.', en: 'Hangeul was so easy that anyone could learn it.'},
          {ko: '그는 너무 아파서 여행할 수 없었다.', en: 'He was so sick that he couldn’t travel.'}
        ]
      }
    ],
    wrap: {en: 'I saw/heard ______ ______ing. I was so ______ that ______.', ko: '지각동사 한 문장, so ~ that 한 문장으로 감동받은 장면 쓰기'},
    wrapEx: 'I saw my grandpa raising the flag on March 1st. I was so moved that I raised one with him.'
  },

  reading: {
    title: 'Homer Hulbert, a Friend of Korea', kind: '인물 이야기', cover: 'Hangeul', coverKo: '한글을 사랑한 외국인', cover2: 'Friend', coverKo2: '한국의 친구, 헐버트',
    before: [
      {q: 'Look at the title. Who was Homer Hulbert?', a: '한국을 도운 외국인'},
      {q: 'How can a foreigner help another country?', a: '교육, 의료, 세계에 알리기 등'}
    ],
    gloss: {'Yugyeong Gongwon': '육영공원 (근대식 공립 학교)', 'Chinese characters': '한자', 'Samminpilji': '사민필지 (한글 세계 지리 교과서)', 'geography': '지리', 'Emperor Gojong': '고종 황제', 'The Hague': '헤이그', 'peace conference': '평화 회의', 'Westminster Abbey': '웨스트민스터 사원(영국)'},
    paras: [
      {who: '1886', en: 'Homer Hulbert was an American teacher. In 1886, he came to Korea to teach at Yugyeong Gongwon, one of the first modern schools in Korea. He wanted to teach in Korean, so he began to learn Korean right away. In class, he often heard his students reading difficult books out loud.',
       ko: '호머 헐버트는 미국인 교사였다. 1886년, 그는 한국 최초의 근대식 학교 중 하나인 육영공원에서 가르치려고 한국에 왔다. 그는 한국어로 가르치고 싶어서 곧바로 한국어를 배우기 시작했다. 수업 시간에 그는 학생들이 어려운 책을 소리 내어 읽는 것을 자주 들었다.',
       check: {q: 'Why did Hulbert come to Korea?', a: 'To teach at Yugyeong Gongwon.'}, think: '외국에서 가르치려면 무엇이 필요할까?'},
      {who: 'Hangeul', en: 'Hulbert saw many children struggling with difficult Chinese characters. Then he learned Hangeul. “It is simple, but it is amazing,” he thought. He studied so hard that he wrote a world geography textbook in Hangeul, Samminpilji, only five years later.',
       ko: '헐버트는 많은 아이들이 어려운 한자로 힘겹게 공부하는 것을 보았다. 그러다 그는 한글을 배웠다. “단순하지만 놀라운 글자다.” 그는 생각했다. 그는 아주 열심히 공부해서 겨우 5년 뒤에 한글로 세계 지리 교과서인 ‘사민필지’를 썼다.',
       check: {q: 'What did Hulbert write in Hangeul?', a: 'A world geography textbook (Samminpilji).'}, think: '헐버트는 왜 한글을 “놀랍다”고 생각했을까?'},
      {who: 'Hangeul', en: 'He believed that Hangeul was one of the best alphabets in the world. He wrote articles about it for foreign readers. He wanted everyone to know about this great Korean invention.',
       ko: '그는 한글이 세계에서 가장 훌륭한 문자 중 하나라고 믿었다. 그는 외국 독자들을 위해 한글에 관한 기사를 썼다. 그는 모든 사람이 이 위대한 한국의 발명품에 대해 알기를 원했다.',
       check: {q: 'What did Hulbert believe about Hangeul?', a: 'It was one of the best alphabets in the world.'}, think: '한글의 어떤 점을 외국인에게 소개하고 싶나요?'},
      {who: '1905–1907', en: 'Hulbert believed that every country has the right to be independent. When Japan took away Korea’s rights, he helped Emperor Gojong. He carried the emperor’s secret letter to the President of the United States. In 1907, he also helped Korean envoys go to a peace conference in The Hague.',
       ko: '헐버트는 모든 나라가 독립할 권리가 있다고 믿었다. 일본이 한국의 권리를 빼앗자 그는 고종 황제를 도왔다. 그는 황제의 비밀 편지를 미국 대통령에게 전했다. 1907년에는 한국의 특사들이 헤이그의 평화 회의에 가는 것도 도왔다.',
       check: {q: 'Whose secret letter did Hulbert carry?', a: 'Emperor Gojong’s.'}, think: '헐버트는 왜 남의 나라 독립을 도왔을까?'},
      {who: '1949', en: 'The Japanese police watched him so closely that he had to leave Korea. But he continued to write about Korea’s terrible situation. In 1949, after Korea became independent, he returned at the invitation of the Korean government. He was 86 years old.',
       ko: '일본 경찰이 그를 아주 철저히 감시해서 그는 한국을 떠나야 했다. 하지만 그는 한국의 비참한 상황에 대해 계속 글을 썼다. 한국이 독립한 뒤인 1949년, 그는 한국 정부의 초대로 돌아왔다. 그는 86세였다.',
       check: {q: 'Why did he have to leave Korea?', a: 'The Japanese police watched him so closely.'}, think: '86세에 한국으로 돌아온 그의 마음은 어땠을까?'},
      {who: 'Today', en: 'Only a week later, he became sick and died. He once said, “I would rather be buried in Korea than in Westminster Abbey.” His wish came true. Today, he lies in Yanghwajin, Seoul, and Korea honors him as a true friend.',
       ko: '겨우 일주일 뒤, 그는 병이 나서 세상을 떠났다. 그는 예전에 이렇게 말했다. “나는 웨스트민스터 사원보다 한국에 묻히겠다.” 그의 바람은 이루어졌다. 오늘날 그는 서울 양화진에 잠들어 있고, 한국은 그를 진정한 친구로 기린다.',
       check: {q: 'Where is Hulbert buried today?', a: 'In Yanghwajin, Seoul.'}, think: '“진정한 친구”란 어떤 사람일까?'}
    ],
    split: 3,
    next: '한국이 권리를 빼앗겼을 때\n헐버트는 무엇을 했을까?',
    recap: {q: '헐버트는 한국에서 어떤 일을 했을까?', items: [{k: '1886', v: 'came to teach · learned Korean right away'}, {k: 'HANGEUL', v: 'wrote Samminpilji · one of the best alphabets'}]},
    tf: [
      {p: 0, s: 'Hulbert was a Canadian doctor.', a: false, why: 'Homer Hulbert was an American teacher.'},
      {p: 1, s: 'Hulbert saw children struggling with Chinese characters.', a: true},
      {p: 1, s: 'He wrote Samminpilji twenty years after he came to Korea.', a: false, why: 'only five years later'},
      {p: 3, s: 'He carried Emperor Gojong’s secret letter.', a: true},
      {p: 4, s: 'He returned to Korea at the invitation of the government.', a: true},
      {p: 5, s: 'He wanted to be buried in his own country.', a: false, why: 'I would rather be buried in Korea than in Westminster Abbey.'}
    ],
    key: [
      {en: 'Hulbert {{saw}} many children {{struggling}} with Chinese characters.', note: 'see + 목적어 + -ing', g: 'g1'},
      {en: 'He studied {{so}} hard {{that}} he wrote a textbook in Hangeul.', note: 'so + 부사 + that + 결과', g: 'g2'},
      {en: 'He often {{heard}} his students {{reading}} difficult books out loud.', note: 'hear + 목적어 + -ing', g: 'g1'},
      {en: 'The Japanese police watched him {{so}} closely {{that}} he had to leave Korea.', note: 'so + 부사 + that + 결과', g: 'g2'},
      {en: 'In Yanghwajin, we {{saw}} people {{bowing}} to him.', note: 'see + 목적어 + -ing (Let’s Watch)', g: 'g1'},
      {en: 'He loved Korea {{so}} much {{that}} he wanted to be buried there.', note: 'so + 부사 + that + 결과', g: 'g2'}
    ],
    summary: {text: 'Homer Hulbert came to Korea in 1886 to teach. He saw children struggling with Chinese characters and studied Hangeul so hard that he wrote a {{textbook}} in it. He believed every country has the {{right}} to be {{independent}}, so he carried Emperor Gojong’s {{secret}} letter. In 1949, he {{returned}} at the {{invitation}} of the Korean government and was buried in Korea.'},
    order: ['Hulbert came to Korea to teach.', 'He wrote Samminpilji in Hangeul.', 'He carried the emperor’s secret letter.', 'He returned to Korea in 1949.'],
    chart: {title: 'HULBERT’S LIFE', ko: '헐버트의 일생 정리하기', cols: ['What he did', 'Why'], note: '표를 보고 He saw ~ing. / He was so ~ that ~. 문장으로 일생을 다시 말하게 한다.', rows: [
      {name: '1886', cells: ['came to teach, learned Korean', 'wanted to teach in Korean']},
      {name: '1891', cells: ['wrote a textbook in Hangeul', 'saw children struggling with Chinese characters']},
      {name: '1905–1907', cells: ['helped Emperor Gojong and the envoys', 'every country has the right to be independent']},
      {name: '1949', cells: ['returned and was buried in Korea', 'loved Korea so much']}
    ]},
    wrap: {en: 'Dear Mr. Hulbert, Thank you for ______. You loved Korea so much that ______.', ko: '관통 질문으로 돌아가기: 헐버트에게 감사 편지 쓰기'}
  },

  quiz: [
    ['“독립”을 뜻하는 낱말은?', ['independent', 'independence', 'movement', 'government'], 1, 'independence: 독립 (independent 독립한)'],
    ['“invite”의 명사형은?', ['invited', 'inviting', 'invitation', 'invitor'], 2, 'invite → invitation'],
    ['“He came at the ___ of the government.”', ['invitation', 'invite', 'movement', 'event'], 0, 'at the invitation of: ~의 초대로'],
    ['종류를 묻는 표현은?', ['What kinds of books do you like?', 'Can you recommend a book?', 'How long will it take?', 'Are you sure?'], 0, 'What kinds of ~ do you like?'],
    ['추천을 요청하는 표현은?', ['I recommend it.', 'Can you recommend a movie for me?', 'What kind of movie is it?', 'I like action movies.'], 1, 'Can you recommend ~?'],
    ['“Can you recommend a book?”에 알맞은 대답은?', ['I like books.', 'Sure. I recommend this one.', 'It’s a history book.', 'No, I don’t.'], 1, 'I recommend ~.'],
    ['Let’s Watch에서 서 선생님이 추천한 인물은?', ['스코필드', '호머 헐버트', '고종', '세종'], 1, 'I recommend Homer Hulbert.'],
    ['빈칸에 알맞은 것은? “He heard people ___ for independence.”', ['to shout', 'shouting', 'shouted', 'shouts'], 1, '지각동사 + 목적어 + -ing'],
    ['빈칸에 알맞은 것은? “He studied ___ hard that he could teach in Korean.”', ['very', 'so', 'too', 'such'], 1, 'so ~ that'],
    ['어법상 틀린 문장은?', ['I saw him leave.', 'I heard her singing.', 'He heard people to shout.', 'It was so cold that we stayed in.'], 2, 'He heard people shout / shouting.'],
    ['같은 뜻으로 바꿀 때 빈칸에 알맞은 것은? “He was so sick that he couldn’t travel. = He was too sick ___ travel.”', ['to', 'for', 'that', 'so'], 0, 'so ~ that can’t = too ~ to'],
    ['헐버트가 처음 한국에 온 목적은?', ['의사로 일하려고', '학교에서 가르치려고', '신문 기자로 일하려고', '여행하려고'], 1, 'he came to Korea to teach at Yugyeong Gongwon'],
    ['사민필지는 어떤 책인가?', ['한글로 쓴 세계 지리 교과서', '영어 사전', '한자 교과서', '역사 소설'], 0, 'a world geography textbook in Hangeul'],
    ['헐버트가 한국을 떠나야 했던 까닭은?', ['병이 나서', '일본 경찰이 철저히 감시해서', '가족이 불러서', '학교가 문을 닫아서'], 1, 'The Japanese police watched him so closely that he had to leave Korea.'],
    ['글의 요지로 알맞은 것은?', ['한글은 배우기 어렵다', '헐버트는 한국과 한글을 사랑한 진정한 친구였다', '외국인은 한국에 묻힐 수 없다', '교과서는 영어로 써야 한다'], 1, 'Korea honors him as a true friend.']
  ]
};

/* ── 보강: 원리 중심 문법 · 모션 그래픽 · 낱말 만들기 · 발음 기호 ── */
(function (L) {
  const ipa = {foreigner: '/ˈfɔːrənər/', independence: '/ˌɪndɪˈpendəns/', independent: '/ˌɪndɪˈpendənt/', movement: '/ˈmuːvmənt/', right: '/raɪt/', gather: '/ˈɡæðər/', event: '/ɪˈvent/', historic: '/hɪˈstɔːrɪk/', article: '/ˈɑːrtɪkl/', continue: '/kənˈtɪnjuː/', government: '/ˈɡʌvərnmənt/', invitation: '/ˌɪnvɪˈteɪʃn/', return: '/rɪˈtɜːrn/', alphabet: '/ˈælfəbet/', textbook: '/ˈtekstbʊk/', letter: '/ˈletər/', secret: '/ˈsiːkrət/', honor: '/ˈɑːnər/', bury: '/ˈberi/', recommend: '/ˌrekəˈmend/'};
  L.vocab.words.forEach(w => { if (ipa[w.w]) w.ipa = ipa[w.w]; });
  L.vocab.morph = [
    {w: 'independence', ko: '독립', parts: [{t: 'in', k: 'pre', m: '아닌'}, {t: 'depend', k: 'root', m: '의존하다, 기대다'}, {t: 'ence', k: 'suf', m: '~함 (명사)'}], family: ['depend', 'independent', 'dependence'], note: '남에게 기대지(depend) 않는(in) 상태 → 독립. 형용사는 independent.'},
    {w: 'foreigner', ko: '외국인', parts: [{t: 'foreign', k: 'root', m: '외국의'}, {t: 'er', k: 'suf', m: '~인 사람'}], family: ['foreign', 'stranger', 'villager'], note: '외국의(foreign) 사람(-er) → 외국인.'},
    {w: 'invitation', ko: '초대', parts: [{t: 'invit(e)', k: 'root', m: '초대하다'}, {t: 'ation', k: 'suf', m: '~하는 일 (명사)'}], family: ['invite', 'information', 'celebration'], note: '동사 + -ation = 명사 (invite → invitation).'}
  ];
  const [g1, g2] = L.grammar.points;
  g1.principle = {
    q: '지각동사 뒤의 동사는 왜 to 없이 원형이나 -ing일까?',
    pic: [{en: 'He heard', ko: '그가 들은 것'}, {en: 'people', ko: '행동의 주인', hot: true}, {en: 'shout / shouting', ko: '그 사람들의 행동'}],
    core: '지각동사(see, hear, watch, feel) 뒤의 “목적어 + 동사”는 작은 문장이다(someone walks). 직접 보고 들은 장면이라 to 없이 바로 붙인다. 동작 전체면 원형, 진행 중인 순간이면 -ing.',
    why: ['목적어가 그 동작의 주인이다 (He saw children learn Hangeul → children이 배운다).', '원형 = 처음부터 끝까지 본 동작, -ing = 진행 중인 장면.', 'to부정사는 쓰지 않는다 (saw her to make ✗).']
  };
  g1.anim = [{title: '두 문장 → 지각동사 + 목적어 + 동사', states: [
    {t: 'He/S | saw/V | the children/O#mom | . | / | They/S#she | were learning/V#mk | Hangeul/O#rb | .', note: '그가 본 것 + 아이들이 하던 일', ko: '그는 아이들을 보았다. 아이들은 한글을 배우고 있었다.'},
    {t: 'He/S | saw/V | the children/O#mom | learning/X#mk | Hangeul/O#rb | .', note: '목적어 + -ing (진행 중인 장면)', ko: '그는 아이들이 한글을 배우고 있는 것을 보았다.'}]}];
  g1.contrast = {title: '원형 vs -ing', pairs: [
    {a: 'He heard people {{shout}} “Hurray!”', ka: '그는 사람들이 “만세!”라고 외치는 것을 들었다. (동작 전체)', b: 'He heard people {{shouting}} in the street.', kb: '그는 사람들이 거리에서 외치고 있는 소리를 들었다. (진행 중)'}],
    point: '지각동사 + 목적어 + 동사원형/-ing. to는 쓰지 않는다.'};
  g2.principle = {
    q: 'so ~ that은 어떻게 원인과 결과를 이을까?',
    pic: [{en: 'so hard', ko: '정도가 아주 큼 (원인)', hot: true}, {en: 'that he wrote a textbook', ko: '그 결과'}],
    core: 'so + 형용사/부사로 정도가 아주 크다고 말한 뒤, that 뒤에 그 때문에 생긴 결과를 붙인다. “너무 ~해서 …하다”.',
    why: ['so + 형용사/부사 + that + 주어 + 동사.', '결과가 “할 수 없다”면 can’t/couldn’t를 쓴다.', 'too ~ to(너무 ~해서 …할 수 없다)로 바꿔 쓸 수 있다.']
  };
  g2.anim = [{title: '원인 + 결과를 so ~ that으로', states: [
    {t: 'He/S | studied | very hard/C#c | . | / | He/S#she | wrote/V#f | a textbook/M | .', note: '원인 + 결과', ko: '그는 아주 열심히 공부했다. 그는 교과서를 썼다.'},
    {t: 'He/S | studied | so hard/X#c | that/X | he/S#she | wrote/V#f | a textbook/M | .', note: 'so + 부사 + that + 결과', ko: '그는 아주 열심히 공부해서 교과서를 썼다.'}]}];
  g2.contrast = {title: 'so ~ that vs too ~ to', pairs: [
    {a: 'I was {{so}} sleepy {{that}} I couldn’t study.', ka: '나는 너무 졸려서 공부할 수 없었다.', b: 'I was {{too}} sleepy {{to}} study.', kb: '나는 너무 졸려서 공부할 수 없었다. (같은 뜻, 더 짧게)'}],
    point: 'so ~ that ... can’t = too ~ to.'};
})(window.LESSON);
