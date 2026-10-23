/* 고1 공통영어1(동아·이병민) Lesson 2 · Journey Through the Pages
   단원명·본문 주제(소설의 첫 문장)는 교과서 목차 기준. 의사소통 기능·문법은 추정(estimate: true).
   대화문·읽기 글은 새로 쓴 글이며, 인용한 소설 첫 문장은 모두 저작권이 끝난 작품(퍼블릭 도메인)입니다. */
window.LESSON = {
  book: 'h1a-donga', no: 2, estimate: true,
  title: 'Journey Through the Pages', ko: '책장 사이로 떠나는 여행',
  bigQ: {en: 'Why do some first sentences stay with us forever?', ko: '어떤 첫 문장은 왜 평생 우리 곁에 남을까?'},
  goals: {
    vocab: ['책·이야기와 관련된 낱말 16개의 뜻과 발음(강세)을 익힌다.', '접두사·어근·접미사로 narrator, universal 같은 낱말을 분석할 수 있다.'],
    talk: ['책을 추천하고 그 까닭을 말할 수 있다.', '두 가지 중 무엇을 더 좋아하는지 묻고 답할 수 있다.'],
    grammar: ['분사구문이 “접속사와 같은 주어를 덜어 낸 것”이라는 원리로 문장을 만들고 해석할 수 있다.', '과거완료가 “과거보다 더 앞선 일”을 나타낸다는 원리로 사건의 순서를 표현할 수 있다.'],
    read1: ['유명한 소설 첫 문장 세 개가 독자를 사로잡는 방법을 파악할 수 있다.'],
    read2: ['좋은 첫 문장의 공통점을 정리하고, 나만의 이야기 첫 문장을 영어로 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'What is the first sentence of your favorite book or webtoon?', ko: '가장 좋아하는 책이나 웹툰의 첫 문장(첫 장면)은 무엇인가요?', note: '기억나지 않아도 된다. “첫 장면 때문에 계속 본 작품이 있나?”로 넓혀 묻는다. 오늘 단원의 관통 질문으로 이어진다.'},
    words: [
      {w: 'novel', pos: 'n.', ko: '소설', ic: '📕', img: {src: 'h1/donga1/l2/img/w-novel.jpg', credit: 'Horia Varlan · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/10361931@N06/4263328317'}, ipa: '/ˈnɑːvl/', ex: 'She has written three novels.', exKo: '그녀는 소설을 세 편 썼다.'},
      {w: 'author', pos: 'n.', ko: '작가, 저자', ic: '✍️', img: {src: 'h1/donga1/l2/img/w-author.jpg', credit: 're_birf · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/82675897@N00/68815967'}, ipa: '/ˈɔːθər/', ex: 'The author signed my copy of the book.', exKo: '작가가 내 책에 사인해 주었다.'},
      {w: 'narrator', pos: 'n.', ko: '서술자, 화자', ic: '🗣️', ipa: '/ˈnæreɪtər/', ex: 'The narrator is a twelve-year-old girl.', exKo: '서술자는 열두 살 소녀다.'},
      {w: 'plot', pos: 'n.', ko: '줄거리, 구성', ic: '🧩', ipa: '/plɑːt/', ex: 'The plot has a surprising twist.', exKo: '줄거리에 놀라운 반전이 있다.'},
      {w: 'character', pos: 'n.', ko: '등장인물; 성격', ic: '🎭', ipa: '/ˈkærəktər/', ex: 'The main character never gives up.', exKo: '주인공은 결코 포기하지 않는다.'},
      {w: 'curiosity', pos: 'n.', ko: '호기심', ic: '🔍', ipa: '/ˌkjʊriˈɑːsəti/', ex: 'A good opening sparks curiosity.', exKo: '좋은 첫 문장은 호기심을 불러일으킨다.'},
      {w: 'contrast', pos: 'n./v.', ko: '대조; 대조하다', ic: '◐', img: {src: 'h1/donga1/l2/img/w-contrast.jpg', credit: 'Thomas Leuthard · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/41346951@N05/9135577060'}, ipa: '/ˈkɑːntræst/', ex: 'The story is full of contrasts between rich and poor.', exKo: '그 이야기는 부자와 가난한 사람의 대조로 가득하다.'},
      {w: 'irony', pos: 'n.', ko: '반어, 아이러니', ic: '🙃', ipa: '/ˈaɪrəni/', ex: 'The irony is that the fire station burned down.', exKo: '아이러니하게도 소방서가 불에 타 버렸다.'},
      {w: 'vivid', pos: 'adj.', ko: '생생한, 선명한', ic: '🌈', img: {src: 'h1/donga1/l2/img/w-vivid.jpg', credit: 'Droid Gingerbread · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/63259711@N04/5956751147'}, ipa: '/ˈvɪvɪd/', ex: 'The writer gives a vivid description of the sea.', exKo: '작가는 바다를 생생하게 묘사한다.'},
      {w: 'publish', pos: 'v.', ko: '출판하다', ic: '🖨️', img: {src: 'h1/donga1/l2/img/w-publish.jpg', credit: 'Sigfrid Lundberg · CC BY-SA 2.0 (Flickr)', link: 'https://www.flickr.com/photos/36853098@N06/6061501777'}, ipa: '/ˈpʌblɪʃ/', ex: 'The novel was published in 1851.', exKo: '그 소설은 1851년에 출판되었다.'},
      {w: 'classic', pos: 'n./adj.', ko: '고전; 고전적인, 일류의', ic: '🏛️', img: {src: 'h1/donga1/l2/img/w-classic.jpg', credit: 'jafsegal (Thanks for the 4,5 million views) · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/67525885@N00/5438340959'}, ipa: '/ˈklæsɪk/', ex: 'Many classics are still read today.', exKo: '많은 고전이 오늘날에도 읽힌다.'},
      {w: 'universal', pos: 'adj.', ko: '보편적인, 모두에게 해당하는', ic: '🌍', ipa: '/ˌjuːnɪˈvɜːrsl/', ex: 'Love is a universal theme.', exKo: '사랑은 보편적인 주제다.'},
      {w: 'reveal', pos: 'v.', ko: '드러내다, 밝히다', ic: '🎁', ipa: '/rɪˈviːl/', ex: 'The last chapter reveals the truth.', exKo: '마지막 장이 진실을 드러낸다.'},
      {w: 'imagine', pos: 'v.', ko: '상상하다', ic: '💭', ipa: '/ɪˈmædʒɪn/', ex: 'Can you imagine life without books?', exKo: '책 없는 삶을 상상할 수 있니?'},
      {w: 'unforgettable', pos: 'adj.', ko: '잊을 수 없는', ic: '💫', ipa: '/ˌʌnfərˈɡetəbl/', ex: 'It was an unforgettable trip.', exKo: '잊을 수 없는 여행이었다.'},
      {w: 'recommend', pos: 'v.', ko: '추천하다', ic: '👍', ipa: '/ˌrekəˈmend/', ex: 'Can you recommend a good mystery novel?', exKo: '좋은 추리 소설 하나 추천해 줄래?'}
    ],
    morph: [
      {w: 'narrator', ko: '서술자', parts: [{t: 'narrat', k: 'root', m: '이야기하다 (narrate)'}, {t: 'or', k: 'suf', m: '~하는 사람'}], family: ['narrate', 'narrative', 'narration'], note: '-or/-er는 “~하는 사람”(actor, inventor, writer).'},
      {w: 'universal', ko: '보편적인', parts: [{t: 'uni', k: 'pre', m: '하나'}, {t: 'vers', k: 'root', m: '돌다, 향하다'}, {t: 'al', k: 'suf', m: '~의 (형용사)'}], family: ['universe', 'unique', 'uniform'], note: '“하나로 돌아가는 것” → 우주(universe) → 모두에게 해당하는(universal). uni- = 하나(unicycle, unite).'},
      {w: 'unforgettable', ko: '잊을 수 없는', parts: [{t: 'un', k: 'pre', m: '아닌'}, {t: 'forget', k: 'root', m: '잊다'}, {t: 'able', k: 'suf', m: '~할 수 있는'}], family: ['forgettable', 'unbelievable', 'unpredictable'], note: '자음을 하나 더 붙인다: forget → forgettable.'},
      {w: 'reveal', ko: '드러내다', parts: [{t: 're', k: 'pre', m: '반대로, 되돌려'}, {t: 'veal', k: 'root', m: '베일, 덮개 (veil)'}], family: ['revelation', 'veil'], note: '덮개(veil)를 거꾸로 걷어 내다 → 드러내다.'}
    ],
    phrases: [
      {w: 'grab one’s attention', ko: '~의 주의를 끌다', ex: 'The first line grabs the reader’s attention.', exKo: '첫 문장이 독자의 주의를 끈다.'},
      {w: 'set the tone', ko: '분위기를 정하다', ex: 'The opening scene sets the tone for the whole movie.', exKo: '첫 장면이 영화 전체의 분위기를 정한다.'},
      {w: 'be based on', ko: '~에 바탕을 두다', ex: 'The novel is based on a true story.', exKo: '그 소설은 실화를 바탕으로 한다.'},
      {w: 'can’t put ~ down', ko: '(책을) 손에서 놓을 수 없다', ex: 'I couldn’t put the book down until midnight.', exKo: '자정까지 그 책을 손에서 놓을 수 없었다.'},
      {w: 'from the very first page', ko: '맨 첫 장부터', ex: 'I loved the story from the very first page.', exKo: '나는 맨 첫 장부터 그 이야기가 좋았다.'},
      {w: 'leave ~ wanting more', ko: '~가 더 원하게 만들다', ex: 'A good ending leaves readers wanting more.', exKo: '좋은 결말은 독자가 더 원하게 만든다.'}
    ],
    pairs: [
      {a: 'author', b: 'reader', rel: '쓰는 사람 / 읽는 사람'},
      {a: 'reveal', b: 'hide', rel: '반대말'},
      {a: 'vivid', b: 'dull', rel: '반대말'},
      {a: 'fiction', b: 'non-fiction', rel: '지어낸 이야기 / 사실'},
      {a: 'narrate', b: 'narrator', rel: '동사 / 사람'}
    ],
    wrap: {en: 'A book I can’t forget is ______. It grabbed my attention because ______.', ko: '오늘 배운 낱말로 잊지 못할 책 한 권 소개하기'}
  },

  talk: {
    hook: {en: 'Do you choose a book by its cover, its title, or its first page?', ko: '책을 고를 때 표지, 제목, 첫 페이지 중 무엇을 보나요?', note: '손을 들어 세 가지 중 하나를 고르게 한다. 고른 까닭을 영어 한 문장(I choose ~ because ~)으로 말하게 하면 오늘의 추천·선호 표현과 이어진다.'},
    speakers: {Yerin: {voice: 0, pitch: 1.1}, Daniel: {voice: 1, pitch: 1}, 'Ms. Kang': {voice: 2, pitch: 1.05}, Leo: {voice: 1, pitch: .95}, Hana: {voice: 0, pitch: 1.15}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Speak 1', func: '책 추천하고 까닭 말하기',
        key: {q: ['Can you recommend a book?', 'What would you recommend for ~?'], a: ['I recommend ~ because ~.', 'You should read ~. It’s ~.', 'If you like ~, you’ll love ~.']},
        note: '추천에는 반드시 까닭을 붙이게 한다(because ~, It’s ~). If you like A, you’ll love B.는 상대의 취향과 이어 주는 추천이다.',
        dialogs: [
          { title: 'Dialogue A', setting: '학교 도서관, 방학 전날', lines: [
            {s: 'Daniel', en: 'Yerin, {{can you recommend a book}} for the vacation?', ko: '예린아, 방학 때 읽을 책 하나 추천해 줄래?'},
            {s: 'Yerin', en: 'Sure. What kind of stories do you like?', ko: '물론이지. 어떤 이야기를 좋아해?'},
            {s: 'Daniel', en: 'I like adventures, but I get bored easily.', ko: '모험 이야기를 좋아하는데 금방 지루해져.'},
            {s: 'Yerin', en: 'Then {{I recommend}} this one {{because}} the first chapter is full of action.', ko: '그럼 이 책을 추천해. 첫 장부터 사건이 가득하거든.'},
            {s: 'Daniel', en: 'Sounds good. Is it long?', ko: '좋다. 길어?'},
            {s: 'Yerin', en: 'A little, but trust me — you {{won’t be able to put it down}}.', ko: '조금. 그래도 믿어 봐. 손에서 놓지 못할 거야.'}
          ]},
          { title: 'Dialogue B', setting: '방과 후, 교실', lines: [
            {s: 'A', en: 'I just finished a mystery novel. {{If you like}} puzzles, {{you’ll love}} it.', ko: '방금 추리 소설을 다 읽었어. 퍼즐 좋아하면 이 책도 좋아할 거야.'},
            {s: 'B', en: 'Really? What’s it about?', ko: '정말? 무슨 내용이야?'},
            {s: 'A', en: 'A detective finds a letter that someone had hidden fifty years ago.', ko: '한 탐정이 누군가 50년 전에 숨겨 둔 편지를 찾는 이야기야.'},
            {s: 'B', en: 'Wow, that sounds interesting. Can I borrow it?', ko: '와, 재밌겠다. 빌려도 돼?'}
          ]}
        ],
        check: [
          {q: 'What kind of stories does Daniel like?', a: 'He likes adventures.'},
          {q: 'Why does Yerin recommend the book?', a: 'Because the first chapter is full of action.'},
          {q: 'What does the detective find in the mystery novel?', a: 'A letter that someone had hidden fifty years ago.'}
        ],
        drill: {frame: ['A: Can you recommend a ____?', 'B: Sure. I recommend this one because it’s ...'], opts: ['mystery novel', 'graphic novel', 'poetry book', 'science book', 'travel essay', 'biography']}
      },
      { id: 'lt2', label: 'Listen & Speak 2', func: '선호 묻고 답하기',
        key: {q: ['Which do you prefer, A or B?', 'Do you prefer A to B?'], a: ['I prefer A to B.', 'I’d rather ~ than ~.', 'I like A better because ~.']},
        note: 'prefer A to B(B보다 A를 더 좋아하다)의 to는 전치사다. would rather 뒤에는 동사원형.',
        dialogs: [
          { title: 'Dialogue A', setting: '독서 동아리 첫 모임', lines: [
            {s: 'Ms. Kang', en: 'Before we choose our first book, {{which do you prefer}}, paper books or e-books?', ko: '첫 책을 고르기 전에, 종이책과 전자책 중 무엇을 더 좋아하니?'},
            {s: 'Leo', en: '{{I prefer}} paper books {{to}} e-books. I like the smell of the pages.', ko: '저는 전자책보다 종이책이 좋아요. 책장 냄새가 좋거든요.'},
            {s: 'Hana', en: 'I {{like}} e-books {{better because}} I can read them on the bus.', ko: '저는 버스에서 읽을 수 있어서 전자책이 더 좋아요.'},
            {s: 'Ms. Kang', en: 'Both are fine. What matters is what you read, not how you read it.', ko: '둘 다 좋아. 중요한 건 어떻게 읽느냐가 아니라 무엇을 읽느냐란다.'}
          ]},
          { title: 'Dialogue B', setting: '주말 계획을 세우며', lines: [
            {s: 'A', en: 'Let’s see the movie version of the novel this weekend.', ko: '이번 주말에 그 소설을 영화로 만든 것 보자.'},
            {s: 'B', en: 'Hmm, {{I’d rather}} finish the book {{than}} watch the movie first.', ko: '음, 나는 영화를 먼저 보느니 책을 다 읽고 싶어.'},
            {s: 'A', en: 'Why? The movie is only two hours.', ko: '왜? 영화는 두 시간밖에 안 되는데.'},
            {s: 'B', en: 'When I read, I can imagine the characters myself.', ko: '책을 읽으면 등장인물을 내가 직접 상상할 수 있잖아.'}
          ]}
        ],
        check: [
          {q: 'Why does Leo prefer paper books?', a: 'Because he likes the smell of the pages.'},
          {q: 'Why does Hana like e-books better?', a: 'Because she can read them on the bus.'},
          {q: 'Why does B want to read the book first?', a: 'Because B can imagine the characters.'}
        ],
        drill: {frame: ['A: Which do you prefer, ____?', 'B: I prefer ... because ...'], opts: ['novels or comics', 'paper books or e-books', 'books or movies', 'reading alone or in a club', 'fiction or non-fiction', 'happy or sad endings']}
      }
    ],
    interviewEx: 'Jisoo prefers mystery novels to romance novels. She recommends “The Silent Key” because the ending is unforgettable.',
    watch: {
      label: 'Let’s Watch', title: 'The Book Swap', setting: '도서관의 책 바꾸기 행사. 학생들이 책 첫 문장만 보고 책을 고른다.',
      lines: [
        {s: 'Ms. Kang', en: 'Today you’ll choose a book by reading only its first sentence.', ko: '오늘은 첫 문장만 읽고 책을 고를 거예요.'},
        {s: 'Leo', en: 'Only one sentence? That’s not enough!', ko: '한 문장만요? 그건 부족해요!'},
        {s: 'Hana', en: 'Listen to this one: “Having lost everything, she finally felt free.”', ko: '이것 들어 봐. “모든 것을 잃고 나서야 그녀는 마침내 자유를 느꼈다.”'},
        {s: 'Leo', en: 'Wow. I want to know what she had lost. I’ll take it.', ko: '와. 그녀가 무엇을 잃었는지 알고 싶어. 이걸로 할래.'},
        {s: 'Ms. Kang', en: 'See? Sometimes one sentence is all it takes.', ko: '봤죠? 때로는 한 문장이면 충분하답니다.'}
      ],
      check: [
        {q: 'How do the students choose books today?', a: 'By reading only the first sentence.'},
        {q: 'Why does Leo take the book?', a: 'He wants to know what the woman had lost.'},
        {q: 'What is Ms. Kang’s message?', a: 'Sometimes one sentence is all it takes.'}
      ]
    },
    wrap: {en: 'Recommend a book to your partner and ask about their reading preferences.', ko: '짝에게 책을 추천하고 독서 취향 묻기'}
  },

  grammar: {
    cover: '-ing · had p.p.',
    hook: {en: '{{Having}} lost everything, she finally felt free.  /  I wanted to know what she {{had}} lost.', ko: '색칠된 부분은 각각 어떤 정보를 줄이거나 더해 줄까?', answer: 'Having lost = After she had lost (분사구문) / had lost = 그녀가 자유를 느끼기 전에 잃은 것 (과거완료)', note: '2차시 Let’s Watch의 문장이다. 첫 문장에 “누가” 잃었는지가 안 보인다는 점, 두 번째 문장에서 “잃은 일”이 “알고 싶었던 때”보다 먼저라는 점을 찾게 한다.'},
    points: [
      { id: 'g1', name: '분사구문', short: '분사구문', form: '(접속사 + 주어) + 동사 → 동사-ing / p.p. ~, 주어 + 동사', meaning: '~할 때, ~해서, ~하면서, ~한 채로',
        notice: [
          {en: '{{Opening}} the book, she found an old letter.', ko: '책을 펼쳤을 때 그녀는 오래된 편지를 발견했다.'},
          {en: '{{Written}} in 1813, the novel is still popular.', ko: '1813년에 쓰였지만, 그 소설은 여전히 인기가 있다.'},
          {en: 'He read the last page, {{smiling}} quietly.', ko: '그는 조용히 미소 지으며 마지막 장을 읽었다.'}
        ],
        principle: {
          q: '분사구문은 왜 주어도 접속사도 없을까?',
          pic: [{en: 'When she opened', ko: '접속사 + 주어 + 동사'}, {en: 'Opening', ko: '덜어 내고 -ing만', hot: true}, {en: 'she found …', ko: '주절 주어가 알려 줌'}],
          core: '두 절의 주어가 같으면, 뒤의 주어가 누구인지 알려 주므로 앞 절의 접속사와 주어를 덜어 내고 동사를 분사로 바꾼다.',
          why: ['주어가 같아서 반복할 필요가 없다 — 영어는 겹치는 정보를 줄이는 것을 좋아한다.', '주어가 “하는” 쪽이면 -ing(능동), “되는” 쪽이면 p.p.(수동)를 쓴다.', '접속사가 사라졌으므로 때·이유·동시 동작 중 무슨 뜻인지는 문맥으로 판단한다.'],
          note: '기출 어법에서는 분사구문 자리의 -ing(능동)와 문장의 진짜 동사 자리를 구별하게 한다(2026년 6월 고1 29번 ① connecting 맞음, ④ having → have).'
        },
        anim: [
          {title: '접속사와 주어를 덜어 내면', why: '같은 주어가 두 번 나올 때 앞쪽을 덜어 내는 과정.', states: [
            {t: 'When/M#when | she/S#she1 | opened/V#open | the book/O#book | , | she/S#she2 | found/V#found | an old letter/O#letter | .', note: '두 절의 주어가 같다 (she = she)', ko: '그녀가 책을 펼쳤을 때, 그녀는 오래된 편지를 발견했다.'},
            {t: 'When/D#when | she/D#she1 | opened/V#open | the book/O#book | , | she/S#she2 | found/V#found | an old letter/O#letter | .', note: '접속사와 겹치는 주어를 지운다', ko: '뒤의 she가 누구인지 알려 준다'},
            {t: 'Opening/X#open | the book/O#book | , | she/S#she2 | found/V#found | an old letter/O#letter | .', note: '동사를 -ing로! (그녀가 “펼치는” 쪽 → 능동)', ko: '책을 펼쳤을 때, 그녀는 오래된 편지를 발견했다.'}]},
          {title: '“되는” 쪽이면 p.p.로', states: [
            {t: 'Because/M#bc | it/S#it | was written/V#w | in 1813/M#y | , | the novel/S#novel | feels/V#f | old/C#old | .', note: '소설은 “쓰인” 쪽 (수동)', ko: '1813년에 쓰였기 때문에 그 소설은 오래된 느낌이 난다.'},
            {t: 'Written/X#w | in 1813/M#y | , | the novel/S#novel | feels/V#f | old/C#old | .', note: 'Being은 보통 생략 → p.p.로 시작', ko: '1813년에 쓰여서, 그 소설은 오래된 느낌이 난다.'}]}
        ],
        contrast: {title: '-ing일까 p.p.일까? — 주어가 하는가, 되는가', pairs: [
          {a: '{{Reading}} the first line, I laughed.', ka: '첫 문장을 읽고 나는 웃었다. (내가 읽는다 → 능동)', b: '{{Read}} aloud, the poem sounds beautiful.', kb: '소리 내어 읽으면 그 시는 아름답게 들린다. (시가 읽힌다 → 수동)'},
          {a: '{{Surprising}} everyone, the author appeared.', ka: '모두를 놀라게 하며 작가가 나타났다. (작가가 놀라게 함)', b: '{{Surprised}} by the ending, readers cried.', kb: '결말에 놀라서 독자들은 울었다. (독자가 놀람을 당함)'}],
          point: '분사구문의 주인(=주절의 주어)이 그 동작을 “하면” -ing, “당하면” p.p.'},
        rule: [
          {k: '때', v: 'When/While/After ~ → -ing', ex: 'Walking home, I met my teacher.'},
          {k: '이유', v: 'Because/As ~ → -ing / p.p.', ex: 'Feeling tired, I went to bed early.'},
          {k: '동시 동작', v: '주절 뒤 , -ing (~하면서)', ex: 'She sat on the bench, reading a novel.'},
          {k: '앞선 일', v: 'Having + p.p. (주절보다 먼저)', ex: 'Having finished the book, he wrote a review.'}
        ],
        check: [
          {q: '____ (look) out the window, I saw a rainbow.', a: 'Looking'},
          {q: '____ (write) in simple English, the book is easy to read.', a: 'Written'},
          {q: 'He walked into the room, ____ (hold) a letter.', a: 'holding'},
          {q: '____ (finish) the novel, she lent it to me.', a: 'Having finished'},
          {q: '____ (tire) after the long trip, we fell asleep.', a: 'Tired'}
        ],
        trap: {bad: 'Opened the book, she found a letter.', good: 'Opening the book, she found a letter.', why: '그녀가 책을 “여는” 쪽(능동)이므로 -ing. p.p.는 주어가 동작을 당할 때 쓴다.'},
        scramble: [
          {ko: '첫 문장을 읽고, 나는 그 책을 샀다.', en: 'Reading the first sentence, I bought the book.'},
          {ko: '100년 전에 쓰였지만, 그 이야기는 지금도 감동적이다.', en: 'Written 100 years ago, the story is still moving.'},
          {ko: '그녀는 창가에 앉아 시를 읽었다.', en: 'She sat by the window, reading poems.'}
        ]
      },
      { id: 'g2', name: '과거완료 (had + p.p.)', short: '과거완료', form: 'had + 과거분사(p.p.)', meaning: '(과거의 어느 때보다) 이미 ~했었다',
        notice: [
          {en: 'When I arrived, the movie {{had already started}}.', ko: '내가 도착했을 때 영화는 이미 시작되어 있었다.'},
          {en: 'She found a letter that someone {{had hidden}} fifty years before.', ko: '그녀는 누군가 50년 전에 숨겨 둔 편지를 발견했다.'},
          {en: 'I {{had never read}} a classic before I joined the club.', ko: '나는 동아리에 들어가기 전까지 고전을 읽어 본 적이 없었다.'}
        ],
        principle: {
          q: '과거 시제가 있는데 왜 had + p.p.가 또 필요할까?',
          pic: [{en: 'had p.p.', ko: '더 앞선 과거', hot: true}, {en: 'past', ko: '기준이 되는 과거'}, {en: 'now', ko: '지금'}],
          core: '과거완료는 기준점이 “지금”이 아니라 “과거의 어느 때”인 완료형이다. 과거보다 더 먼저 일어난 일을 표시한다.',
          why: ['현재완료(have p.p.)가 “지금까지”라면, 과거완료(had p.p.)는 “그때까지”다.', '이야기(소설)는 과거 시제로 진행되므로, 그보다 앞선 일을 말하려면 had p.p.가 꼭 필요하다.', '기준이 되는 과거 시점(When I arrived, before ~)이 문장 안에 있을 때 쓴다.']
        },
        anim: [
          {title: '두 사건을 한 문장에 — 무엇이 먼저였나?', states: [
            {t: 'The movie | started/V#st | . | / | Then | I | arrived/V#ar | at the theater | .', note: '① 영화 시작 → ② 내가 도착', ko: '영화가 시작했다. 그다음 내가 극장에 도착했다.'},
            {t: 'When/M | I | arrived/V#ar | at the theater | , | the movie | had already started/X#st | .', note: '먼저 일어난 일 → had + p.p.', ko: '내가 극장에 도착했을 때, 영화는 이미 시작되어 있었다.'}]},
          {title: '이야기 속 시간 거슬러 오르기', states: [
            {t: 'Sophie | visited/V#v | her hometown | . | / | She | left/V#l | it | ten years ago | .', note: '과거 두 사건', ko: '소피는 고향을 찾았다. 그녀는 10년 전에 그곳을 떠났다.'},
            {t: 'Sophie | visited/V#v | the town | she | had left/X#l | ten years before | .', note: '떠난 일이 방문보다 먼저 → had left', ko: '소피는 10년 전에 떠났던 마을을 찾았다.'}]}
        ],
        contrast: {title: '과거 vs 과거완료 — 순서가 달라진다', pairs: [
          {a: 'When I arrived, the movie {{started}}.', ka: '내가 도착하자 영화가 시작했다. (도착 → 시작)', b: 'When I arrived, the movie {{had started}}.', kb: '내가 도착했을 때 영화는 이미 시작했었다. (시작 → 도착)'},
          {a: 'I {{have read}} the book twice.', ka: '나는 그 책을 (지금까지) 두 번 읽었다. — 기준: 지금', b: 'I {{had read}} the book twice before I saw the movie.', kb: '영화를 보기 전에 그 책을 두 번 읽었었다. — 기준: 과거'}],
          point: 'had p.p.는 과거 사건들 사이의 “순서”를 알려 주는 표시다.'},
        rule: [
          {k: '완료', v: 'already, just (그때 이미)', ex: 'The train had already left when we got there.'},
          {k: '경험', v: 'never, before (그때까지)', ex: 'I had never seen snow until I was ten.'},
          {k: '계속', v: 'for, since (그때까지 계속)', ex: 'She had lived there for five years before she moved.'},
          {k: '대과거', v: '과거보다 앞선 일', ex: 'He lost the pen that I had given him.'}
        ],
        check: [
          {q: 'When we got to the station, the train ____ (leave).', a: 'had left'},
          {q: 'I ____ (never, read) a novel in English before last year.', a: 'had never read'},
          {q: 'She told me that she ____ (finish) the book.', a: 'had finished'},
          {q: 'I ____ (finish) the book yesterday.', a: 'finished'},
          {q: 'He found the key that he ____ (lose) a week before.', a: 'had lost'}
        ],
        trap: {bad: 'I had finished the book yesterday.', good: 'I finished the book yesterday.', why: '비교할 다른 과거 시점이 없으면 단순 과거로 충분하다. had p.p.는 “다른 과거보다 먼저”일 때만.'},
        scramble: [
          {ko: '내가 깨어났을 때 비는 이미 그쳐 있었다.', en: 'When I woke up, the rain had already stopped.'},
          {ko: '나는 그 전에 그런 결말을 읽어 본 적이 없었다.', en: 'I had never read such an ending before.'},
          {ko: '그녀는 누군가 숨겨 두었던 편지를 찾았다.', en: 'She found the letter that someone had hidden.'}
        ]
      }
    ],
    wrap: {en: '______ing ______, I ______. Before that day, I had never ______.', ko: '분사구문 한 문장, 과거완료 한 문장으로 책과 관련된 경험 쓰기'},
    wrapEx: 'Reading the first page, I knew I would love the book. Before that day, I had never read a novel in English.'
  },

  reading: {
    title: 'Doors Called First Lines', kind: '정보 에세이', cover: 'Once', coverKo: '첫 문장이라는 문', cover2: 'Begin', coverKo2: '이제 너의 첫 문장',
    before: [
      {q: 'What makes you keep reading a book after the first page?', a: '궁금증, 재미있는 인물, 생생한 장면, 놀라운 문장 등'},
      {q: 'Look at the title. Why would the writer call first lines “doors”?', a: '첫 문장이 이야기 세계로 들어가는 입구이기 때문'}
    ],
    gloss: {'universally acknowledged': '널리 인정된', fortune: '재산', 'in want of': '~이 필요한', ishmael: '이슈마엘(인물 이름)', sailor: '선원', 'best of times': '최고의 시절', 'worst of times': '최악의 시절', revolution: '혁명', tolstoy: '톨스토이', translated: '번역된', 'in its own way': '나름의 방식으로', promise: '약속', 'fill in': '채우다', draft: '초고'},
    paras: [
      {who: '', en: 'Imagine standing in front of a bookstore shelf. You pick up a novel, open it, and read one sentence. In that single moment, you decide whether to keep reading or put the book back. That is why many writers say the first line is like a door. If it is locked or boring, readers simply walk away.',
       ko: '서점 책장 앞에 서 있다고 상상해 보라. 소설 한 권을 집어 펼치고 한 문장을 읽는다. 그 한순간에 계속 읽을지, 책을 다시 꽂아 둘지 결정한다. 그래서 많은 작가들이 첫 문장은 문과 같다고 말한다. 문이 잠겨 있거나 지루하면 독자는 그냥 떠나 버린다.',
       check: {q: 'Why do writers compare the first line to a door?', a: 'Because readers decide whether to enter (keep reading) at the first line.'}, think: '나는 책의 첫 문장 때문에 책을 산 적이 있나?',
       bg: {src: 'h1/donga1/l2/img/r-p0.jpg', credit: 'david.orban · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/44124368329@N01/2734692330', about: '서점의 책장'}},
      {who: 'Jane Austen, 1813', en: '“It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.” Published more than two hundred years ago, this sentence still makes readers smile. It sounds serious, but it is full of irony. As we read on, we discover that it is not the rich men but the families around them who believe this “truth.”',
       ko: '“상당한 재산을 가진 독신 남자에게 아내가 필요하다는 것은 널리 인정된 진리다.” 이백여 년 전에 출판되었지만, 이 문장은 여전히 독자를 미소 짓게 한다. 진지하게 들리지만 아이러니로 가득하다. 계속 읽어 가다 보면, 이 “진리”를 믿는 것은 부자 남자들이 아니라 그 주변의 가족들이라는 것을 알게 된다.',
       check: {q: 'What makes Austen’s first line funny?', a: 'It sounds serious, but it is full of irony.'}, think: '진지한 척하는 문장이 왜 더 웃길까?',
       bg: {src: 'h1/donga1/l2/img/r-p1.jpg', credit: 'bjimmy934 · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/96828128@N02/48077547108', about: '오래된 영국 시골 저택'}},
      {who: 'Herman Melville, 1851', en: '“Call me Ishmael.” Only three words long, this may be one of the most famous openings ever written. The narrator speaks directly to us, as if we had just met him at a port. We do not know his real name, and he does not explain. Feeling curious, we follow him onto a ship and out to sea.',
       ko: '“나를 이슈마엘이라고 불러 달라.” 단 세 단어지만, 이것은 지금까지 쓰인 가장 유명한 첫 문장 중 하나일 것이다. 서술자는 마치 우리가 항구에서 방금 그를 만난 것처럼 우리에게 직접 말을 건다. 우리는 그의 진짜 이름을 모르고, 그는 설명하지 않는다. 호기심을 느끼며 우리는 그를 따라 배에 오르고 바다로 나간다.',
       check: {q: 'How does the narrator speak to the reader?', a: 'He speaks directly to the reader, as if they had just met.'}, think: '짧은 문장이 긴 문장보다 강할 때는 언제일까?',
       bg: {src: 'h1/donga1/l2/img/r-p2.jpg', credit: 'archer10 (Dennis) · CC BY-SA 2.0 (Flickr)', link: 'https://www.flickr.com/photos/22490717@N02/36331128535', about: '바다 위의 범선'}},
      {who: 'Charles Dickens, 1859', en: '“It was the best of times, it was the worst of times …” Dickens begins with a contrast. Set in London and Paris during the French Revolution, the story shows a world divided between hope and despair. By the time we reach the end of the long opening sentence, Dickens has already shown us the two sides of the world we are about to enter.',
       ko: '“최고의 시절이었고, 최악의 시절이었다…” 디킨스는 대조로 시작한다. 프랑스 혁명 시기의 런던과 파리를 배경으로, 이 이야기는 희망과 절망으로 나뉜 세계를 보여 준다. 긴 첫 문장의 끝에 다다를 무렵, 디킨스는 이미 우리가 들어갈 세계의 두 얼굴을 보여 준 셈이다.',
       check: {q: 'What technique does Dickens use in his first line?', a: 'Contrast (the best of times vs. the worst of times).'}, think: '반대되는 말을 나란히 두면 어떤 효과가 생길까?',
       bg: {src: 'h1/donga1/l2/img/r-p3.jpg', credit: 'roger4336 · CC BY-SA 2.0 (Flickr)', link: 'https://www.flickr.com/photos/24736216@N07/7988276139', about: '옛 파리의 거리 (그림엽서)'}},
      {who: 'Leo Tolstoy, 1878', en: '“Happy families are all alike; every unhappy family is unhappy in its own way.” Translated into dozens of languages, Tolstoy’s first line feels universal. Almost everyone has a family, so almost everyone stops to think: is it true? Before we have read a single page about the characters, we have already started to argue with the author.',
       ko: '“행복한 가정은 모두 비슷하고, 불행한 가정은 저마다 나름의 방식으로 불행하다.” 수십 개 언어로 번역된 톨스토이의 첫 문장은 보편적으로 느껴진다. 거의 모든 사람에게 가족이 있으므로, 거의 모든 사람이 멈춰서 생각한다. 이게 사실일까? 등장인물에 대해 한 쪽도 읽기 전에, 우리는 이미 작가와 논쟁을 시작한 것이다.',
       check: {q: 'Why does Tolstoy’s first line feel universal?', a: 'Because almost everyone has a family.'}, think: '이 문장에 동의하나, 반대하나?',
       bg: {src: 'h1/donga1/l2/img/r-p4.jpg', credit: 'Blue Mountains Library, Local Studies · CC BY-SA 2.0 (Flickr)', link: 'https://www.flickr.com/photos/26602074@N06/7892014724', about: '식탁에 둘러앉은 옛 가족 사진'}},
      {who: 'What They Share', en: 'These four openings are very different, but they share one thing: each makes a promise. Austen promises humor, Melville promises adventure, Dickens promises a world of contrasts, and Tolstoy promises a story about the family. A good first line does not tell us everything. It gives us just enough to make us ask a question.',
       ko: '이 네 개의 첫 문장은 매우 다르지만 한 가지를 공유한다. 각각 하나의 약속을 한다는 것이다. 오스틴은 유머를, 멜빌은 모험을, 디킨스는 대조의 세계를, 톨스토이는 가족에 관한 이야기를 약속한다. 좋은 첫 문장은 우리에게 모든 것을 말해 주지 않는다. 질문을 던지게 할 만큼만 준다.',
       check: {q: 'What do the four first lines have in common?', a: 'Each makes a promise to the reader.'}, think: '내가 좋아하는 책의 첫 문장은 무엇을 약속했나?',
       bg: {src: 'h1/donga1/l2/img/r-p5.jpg', credit: 'Honou · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/9186550@N08/2936937247', about: '펼쳐진 책'}},
      {who: 'Behind the Door', en: 'Writing such a sentence is rarely easy. Many writers confess that they rewrite their openings again and again, sometimes after they have finished the whole book. Knowing how the story ends, they go back to the beginning and choose the words that point toward it.',
       ko: '그런 문장을 쓰는 일은 좀처럼 쉽지 않다. 많은 작가들이 첫 문장을 몇 번이고 고쳐 쓴다고, 때로는 책 전체를 다 쓴 뒤에 고친다고 털어놓는다. 이야기가 어떻게 끝나는지 알고 나서, 그들은 처음으로 돌아가 그 끝을 가리키는 낱말들을 고른다.',
       check: {q: 'When do some writers rewrite their first lines?', a: 'Sometimes after they have finished the whole book.'}, think: '왜 끝을 알고 나서 처음을 고치면 더 좋을까?',
       bg: {src: 'h1/donga1/l2/img/r-p6.jpg', credit: 'shordzi · CC BY-SA 2.0 (Flickr)', link: 'https://www.flickr.com/photos/98391340@N00/3029763930', about: '타자기와 원고'}},
      {who: 'Your Turn', en: 'So the next time you open a book, pay attention to the very first sentence. Ask yourself what door it opens and what promise it makes. And someday, when you write your own story, remember that your first line is an invitation. Make it one that nobody can refuse.',
       ko: '그러니 다음에 책을 펼칠 때는 맨 첫 문장에 주목해 보라. 그것이 어떤 문을 열고 어떤 약속을 하는지 스스로 물어보라. 그리고 언젠가 너만의 이야기를 쓸 때, 첫 문장은 초대장이라는 것을 기억하라. 아무도 거절할 수 없는 초대장으로 만들어라.',
       check: {q: 'What does the writer compare our own first line to?', a: 'An invitation.'}, think: '내 인생을 소설로 쓴다면 첫 문장은?',
       bg: {src: 'h1/donga1/l2/img/r-p7.jpg', credit: 'Nguyen Nguyen · CC0 1.0 (stocksnap)', link: 'https://stocksnap.io/photo/notebook-pen-0AXTVI7JB2', about: '공책과 펜'}}
    ],
    coverImg: {src: 'h1/donga1/l2/img/r-cover.jpg', credit: 'Unhindered by Talent · CC BY-SA 2.0 (Flickr)', link: 'https://www.flickr.com/photos/26406919@N00/2097585335'},
    coverImg2: {src: 'h1/donga1/l2/img/r-cover2.jpg', credit: 'CarbonNYC [in SF!] · CC BY 2.0 (Flickr)', link: 'https://www.flickr.com/photos/15923063@N00/2965625438'},
    split: 4,
    next: '톨스토이의 첫 문장은\n무엇을 약속할까?',
    recap: {q: '세 작가는 첫 문장에서 어떤 방법을 썼나?', items: [{k: 'AUSTEN', v: 'irony — serious words, funny meaning'}, {k: 'MELVILLE', v: 'three words, speaking directly to the reader'}, {k: 'DICKENS', v: 'contrast — the best and the worst of times'}]},
    tf: [
      {p: 0, s: 'Readers often decide whether to keep reading after the first sentence.', a: true},
      {p: 1, s: 'Austen’s first line is completely serious.', a: false, why: '진지하게 들리지만 아이러니로 가득하다.'},
      {p: 2, s: 'Melville’s narrator tells us his real name.', a: false, why: '진짜 이름을 모르고, 그는 설명하지 않는다.'},
      {p: 3, s: 'Dickens’s story is set during the French Revolution.', a: true},
      {p: 4, s: 'Tolstoy’s first line makes readers think about families.', a: true},
      {p: 5, s: 'A good first line tells the reader everything.', a: false, why: '질문을 던지게 할 만큼만 준다.'},
      {p: 6, s: 'Some writers rewrite the first line after finishing the book.', a: true}
    ],
    key: [
      {en: '{{Published}} more than two hundred years ago, this sentence still makes readers smile.', note: '수동 분사구문 (= Although it was published …)', g: 'g1'},
      {en: '{{Feeling}} curious, we follow him onto a ship.', note: '능동 분사구문 (= Because we feel curious …)', g: 'g1'},
      {en: 'The narrator speaks to us, as if we {{had just met}} him at a port.', note: 'as if + 과거완료 (마치 ~했던 것처럼)', g: 'g2'},
      {en: 'Before we {{have read}} a single page, we {{have already started}} to argue.', note: '현재완료 (Lesson 1) — 기준이 지금이면 have p.p.', g: 'g2'},
      {en: '{{Translated}} into dozens of languages, Tolstoy’s first line feels universal.', note: '수동 분사구문 (번역된 → p.p.)', g: 'g1'},
      {en: '{{Knowing}} how the story ends, they go back to the beginning.', note: '능동 분사구문 (= Because they know …)', g: 'g1'}
    ],
    summary: {text: 'A first line works like a {{door}}. Austen uses {{irony}}, Melville speaks directly to the reader in just three words, Dickens begins with a {{contrast}}, and Tolstoy writes a line that feels {{universal}}. Each opening makes a {{promise}}, and many writers rewrite it after they {{have finished}} the whole book.'},
    order: ['A reader picks up a novel.', 'The reader reads the first sentence.', 'A question appears in the reader’s mind.', 'The reader decides to keep reading.'],
    chart: {title: 'FOUR OPENINGS', ko: '네 개의 첫 문장 정리', cols: ['Technique', 'Promise'], note: '표를 보고 “Written in ___, ___’s first line uses ~.” 분사구문 문장으로 말하게 한다.', rows: [
      {name: 'Austen', cells: ['irony', 'humor']},
      {name: 'Melville', cells: ['direct address', 'adventure']},
      {name: 'Dickens', cells: ['contrast', 'a divided world']},
      {name: 'Tolstoy', cells: ['universal truth', 'a family story']}
    ]},
    wrap: {en: 'The first line of my story: “______.” It promises ______.', ko: '관통 질문으로 돌아가기: 나만의 이야기 첫 문장과 그 문장이 하는 약속 쓰기'}
  },

  quiz: [
    ['“서술자”를 뜻하는 낱말은?', ['author', 'narrator', 'publisher', 'character'], 1, 'narrator: 서술자, 화자'],
    ['“반어, 아이러니”를 뜻하는 낱말은?', ['irony', 'contrast', 'plot', 'curiosity'], 0, 'irony'],
    ['universal의 uni-가 뜻하는 것은?', ['둘', '하나', '아닌', '다시'], 1, 'uni- = 하나 (unique, uniform)'],
    ['reveal의 반대말은?', ['show', 'hide', 'tell', 'open'], 1, 'reveal ↔ hide'],
    ['책을 추천하는 표현이 아닌 것은?', ['I recommend this book.', 'You should read this one.', 'If you like puzzles, you’ll love it.', 'I prefer e-books to paper books.'], 3, '④는 선호 표현'],
    ['빈칸에 알맞은 것은? “I prefer novels ___ comics.”', ['than', 'to', 'from', 'over than'], 1, 'prefer A to B'],
    ['빈칸에 알맞은 것은? “____ the book, she found a letter.”', ['Opened', 'Opening', 'To opening', 'Open'], 1, '그녀가 여는 쪽 → 능동 -ing'],
    ['빈칸에 알맞은 것은? “____ in 1851, the novel is a classic.”', ['Publishing', 'Published', 'Publish', 'Having publishing'], 1, '소설은 출판된 쪽 → p.p.'],
    ['어법상 틀린 문장은?', ['Feeling tired, I went home.', 'Written in English, it was hard.', 'Surprised by the news, he cried.', 'Opened the door, she smiled.'], 3, 'Opening the door (능동)'],
    ['빈칸에 알맞은 것은? “When I arrived, the bus ____ already ____.”', ['has / left', 'had / left', 'was / leave', 'have / leaving'], 1, '도착보다 먼저 → had left'],
    ['어법상 틀린 문장은?', ['I had never seen snow before then.', 'He lost the pen I had given him.', 'I had finished it yesterday.', 'The train had left when we came.'], 2, '비교할 과거가 없으면 단순 과거'],
    ['Austen의 첫 문장의 특징은?', ['대조', '아이러니', '세 단어', '보편적 진리'], 1, 'full of irony'],
    ['“Call me Ishmael.”에 대한 설명으로 맞는 것은?', ['서술자가 진짜 이름을 밝힌다', '독자에게 직접 말을 건다', '대조를 사용한다', '가족 이야기를 약속한다'], 1, 'speaks directly to us'],
    ['네 첫 문장의 공통점은?', ['모두 짧다', '모두 웃기다', '모두 약속을 한다', '모두 같은 해에 쓰였다'], 2, 'each makes a promise'],
    ['글쓴이가 첫 문장을 무엇에 비유했나?', ['열쇠와 지도', '문과 초대장', '창문과 거울', '다리와 길'], 1, 'door / invitation']
  ]
};
