/* 중3 영어(동아·윤정미) Lesson 6 · Lessons from the Past — 가안
   2022 개정 중3 교과서 목차 공개 전, 중3 문법 순서에 맞춰 만든 가안 단원입니다.
   폼페이와 조선왕조실록 관련 사실은 널리 알려진 내용이며, 대화·인물은 새로 지은 것입니다. */
window.LESSON = {
  book: 'm3-donga', no: 6, estimate: true,
  title: 'Lessons from the Past', ko: '과거에서 배우는 것',
  bigQ: {en: 'Why do we keep records of the past?', ko: '우리는 왜 과거를 기록하고 지킬까?'},
  goals: {
    vocab: ['역사·기록과 관련된 낱말 20개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 내가 아는 역사 이야기를 한 문장으로 소개할 수 있다.'],
    talk: ['어떤 일에 대해 들어 보았는지 묻고 답할 수 있다.', '설명을 요청하고 답할 수 있다.'],
    grammar: ['과거완료(had + p.p.)로 과거의 어느 때보다 먼저 일어난 일을 말할 수 있다.', '분사구문(-ing ~, 주어 + 동사)으로 두 동작을 간결하게 이어 쓸 수 있다.'],
    read1: ['글의 주제를 파악하고, 화산재 속에 멈춘 도시 폼페이 이야기를 이해할 수 있다.'],
    read2: ['조선왕조실록을 지킨 사람들의 이야기를 이해하고, 내가 남기고 싶은 기록을 영어로 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'If you could save one thing for people 500 years from now, what would it be?', ko: '500년 뒤 사람들을 위해 한 가지를 남길 수 있다면 무엇을 남길래요?', note: '타임캡슐 이야기로 시작한다. 고른 물건이 ‘우리 시대를 어떻게 보여 주는지’ 한 마디씩 덧붙이게 한다.'},
    words: [
      {w: 'ancient', pos: 'adj.', ko: '고대의', ic: '🏺', audio: 'assets/audio/ancient.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Pompeii was an ancient city.', exKo: '폼페이는 고대 도시였다.'},
      {w: 'record', pos: 'n./v.', ko: '기록; 기록하다', ic: '📜', ex: 'They recorded everything the king did.', exKo: '그들은 왕이 한 모든 일을 기록했다.'},
      {w: 'history', pos: 'n.', ko: '역사', ic: '📚', audio: 'assets/audio/history.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'We can learn from history.', exKo: '우리는 역사에서 배울 수 있다.'},
      {w: 'volcano', pos: 'n.', ko: '화산', ic: '🌋', audio: 'assets/audio/volcano.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The volcano erupted suddenly.', exKo: '화산이 갑자기 폭발했다.'},
      {w: 'erupt', pos: 'v.', ko: '(화산이) 분출하다', ic: '💥', audio: 'assets/audio/erupt.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Mount Vesuvius erupted in AD 79.', exKo: '베수비오산은 서기 79년에 분출했다.'},
      {w: 'ash', pos: 'n.', ko: '재', ic: '🌫️', audio: 'assets/audio/ash.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The city was covered with ash.', exKo: '도시는 재로 덮였다.'},
      {w: 'bury', pos: 'v.', ko: '묻다', ic: '⛏️', audio: 'assets/audio/bury.mp3', audioCredit: 'Wikimedia Commons contributor · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The town was buried for centuries.', exKo: '그 마을은 수세기 동안 묻혀 있었다.'},
      {w: 'discover', pos: 'v.', ko: '발견하다', ic: '🔍', audio: 'assets/audio/discover.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'People discovered the city again.', exKo: '사람들은 그 도시를 다시 발견했다.'},
      {w: 'remain', pos: 'v.', ko: '남아 있다', ic: '🧱', audio: 'assets/audio/remain.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Only one copy remained.', exKo: '단 한 부만 남았다.'},
      {w: 'destroy', pos: 'v.', ko: '파괴하다', ic: '🔥', audio: 'assets/audio/destroy.mp3', audioCredit: 'Dvortygirl · Public domain (Wikimedia Commons, US)', ex: 'The war destroyed many books.', exKo: '전쟁은 많은 책을 파괴했다.'},
      {w: 'protect', pos: 'v.', ko: '보호하다', ic: '🛡️', audio: 'assets/audio/protect.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'They protected the books.', exKo: '그들은 그 책들을 보호했다.'},
      {w: 'cave', pos: 'n.', ko: '동굴', ic: '🕳️', ex: 'They hid the books in a cave.', exKo: '그들은 책을 동굴에 숨겼다.'},
      {w: 'invasion', pos: 'n.', ko: '침략', ic: '⚔️', ex: 'The invasion began in 1592.', exKo: '침략은 1592년에 시작되었다.'},
      {w: 'scholar', pos: 'n.', ko: '학자, 선비', ic: '🎓', ex: 'Two scholars saved the records.', exKo: '두 선비가 그 기록을 지켰다.'},
      {w: 'copy', pos: 'n.', ko: '사본, (책의) 부', ic: '📑', ex: 'They made four copies.', exKo: '그들은 네 부를 만들었다.'},
      {w: 'heritage', pos: 'n.', ko: '유산', ic: '🏯', audio: 'assets/audio/heritage.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The records are world heritage.', exKo: '그 기록은 세계 유산이다.'},
      {w: 'daily', pos: 'adj.', ko: '일상의, 매일의', ic: '📅', audio: 'assets/audio/daily.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'We can see their daily life.', exKo: '우리는 그들의 일상을 볼 수 있다.'},
      {w: 'detail', pos: 'n.', ko: '세부 사항', ic: '🔎', audio: 'assets/audio/detail.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'The records are full of details.', exKo: '그 기록은 세부 사항으로 가득하다.'},
      {w: 'disaster', pos: 'n.', ko: '재난', ic: '⚠️', audio: 'assets/audio/disaster.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Records help us prepare for disasters.', exKo: '기록은 재난에 대비하도록 돕는다.'},
      {w: 'mistake', pos: 'n.', ko: '실수', ic: '❌', audio: 'assets/audio/mistake.mp3', audioCredit: 'Dvortygirl · CC BY-SA 3.0 (Wikimedia Commons, US)', ex: 'Don’t repeat the same mistake.', exKo: '같은 실수를 되풀이하지 마라.'}
    ],
    phrases: [
      {w: 'be covered with', ko: '~로 덮이다', ex: 'The town was covered with ash.', exKo: '마을은 재로 덮였다.'},
      {w: 'thanks to', ko: '~ 덕분에', ex: 'Thanks to them, the records remain.', exKo: '그들 덕분에 기록이 남아 있다.'},
      {w: 'pass down', ko: '물려주다', ex: 'Stories are passed down.', exKo: '이야기는 전해 내려온다.'},
      {w: 'learn from', ko: '~에서 배우다', ex: 'Learn from your mistakes.', exKo: '실수에서 배워라.'},
      {w: 'at that time', ko: '그 당시에', ex: 'At that time, there were no computers.', exKo: '그 당시에는 컴퓨터가 없었다.'},
      {w: 'risk one’s life', ko: '목숨을 걸다', ex: 'They risked their lives.', exKo: '그들은 목숨을 걸었다.'}
    ],
    pairs: [
      {a: 'ancient', b: 'modern', rel: '반대말'},
      {a: 'destroy', b: 'protect', rel: '반대 개념'},
      {a: 'discover', b: 'discovery', rel: '동사 / 명사'},
      {a: 'history', b: 'historical', rel: '명사 / 형용사'}
    ],
    wrap: {en: 'One piece of history I want to protect is ______ because ______.', ko: '오늘 배운 낱말로 지키고 싶은 역사 한 가지 소개하기'}
  },

  talk: {
    hook: {en: 'Have you heard about Pompeii?', ko: '폼페이에 대해 들어 본 적 있나요?', note: '들어 본 학생에게 아는 것을 한 마디씩 말하게 한다. 모르는 학생이 많으면 화산 사진 한 장만 보여 주고 상상하게 한다.'},
    speakers: {Yuna: {voice: 0, pitch: 1.15}, Ben: {voice: 1, pitch: .95}, Curator: {voice: 0, pitch: .9}, Jiwoo: {voice: 1, pitch: 1}, Kate: {voice: 0, pitch: 1.1}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '들어 보았는지 묻고 답하기',
        key: {q: ['Have you heard about ~?', 'Do you know about ~?'], a: ['Yes, I’ve heard about it.', 'No, I haven’t. What is it?', 'I’ve read about it in ~.']},
        note: 'Have you heard about ~?은 현재완료(경험). 답할 때 들은 곳(in a book, on TV)을 덧붙이게 한다.',
        dialogs: [
          { title: 'Dialogue A', setting: '역사 수업 전, 교실', lines: [
            {s: 'Yuna', en: 'Ben, {{have you heard about}} Pompeii?', ko: '벤, 폼페이에 대해 들어 봤어?'},
            {s: 'Ben', en: '{{Yes, I’ve heard about it}}. It was buried by a volcano, right?', ko: '응, 들어 봤어. 화산에 묻혔지, 그렇지?'},
            {s: 'Yuna', en: 'Right. When people found it, the city had been under ash for centuries.', ko: '맞아. 사람들이 발견했을 때, 그 도시는 수백 년 동안 재 아래 있었대.'},
            {s: 'Ben', en: 'Wow. {{I’ve read about it in}} a comic book.', ko: '와. 만화책에서 읽은 적 있어.'},
            {s: 'Yuna', en: 'We’ll learn more about it today.', ko: '오늘 더 배울 거야.'}
          ]},
          { title: 'Dialogue B', setting: '도서관', lines: [
            {s: 'A', en: '{{Do you know about}} the Annals of the Joseon Dynasty?', ko: '조선왕조실록에 대해 알아?'},
            {s: 'B', en: '{{No, I haven’t}} heard of it. {{What is it?}}', ko: '아니, 들어 본 적 없어. 그게 뭐야?'},
            {s: 'A', en: 'It’s a record of 472 years of Joseon history.', ko: '472년 동안의 조선 역사를 담은 기록이야.'},
            {s: 'B', en: 'That’s a really long history!', ko: '정말 긴 역사구나!'}
          ]}
        ],
        check: [
          {q: 'What buried Pompeii?', a: 'A volcano.'},
          {q: 'Where did Ben read about Pompeii?', a: 'In a comic book.'},
          {q: 'How many years of history do the Annals record?', a: '472 years.'}
        ],
        drill: {frame: ['A: Have you heard about ____?', 'B: Yes, I’ve heard about it.'], opts: ['Pompeii', 'the Annals', 'Hangeul Day', 'the Great Wall', 'Jang Yeong-sil', 'the Rosetta Stone']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '설명 요청하기',
        key: {q: ['What do you mean by ~?', 'Can you explain ~?'], a: ['I mean ~.', 'It means ~.', 'Let me explain.']},
        note: '모르는 낱말이 나올 때 그냥 넘기지 말고 What do you mean by ~?로 묻는 습관을 기르게 한다.',
        dialogs: [
          { title: 'Dialogue A', setting: '박물관 견학, 전시실 앞', lines: [
            {s: 'Jiwoo', en: 'The guide said the Annals are “world heritage.” {{What do you mean by}} heritage?', ko: '해설사님이 실록이 ‘세계 유산’이라고 했잖아. 유산이 무슨 뜻이야?'},
            {s: 'Kate', en: '{{It means}} something important from the past that we pass down.', ko: '우리가 물려주는 과거의 소중한 것을 뜻해.'},
            {s: 'Jiwoo', en: 'I see. {{Can you explain}} why it’s so important?', ko: '그렇구나. 그게 왜 그렇게 중요한지 설명해 줄래?'},
            {s: 'Kate', en: '{{Let me explain}}. It shows the daily life of people long ago.', ko: '설명해 줄게. 오래전 사람들의 일상을 보여 주거든.'},
            {s: 'Jiwoo', en: 'That’s cool. It’s like a diary of a whole country!', ko: '멋지다. 한 나라 전체의 일기 같네!'}
          ]},
          { title: 'Dialogue B', setting: '수업 시간', lines: [
            {s: 'A', en: 'History repeats itself.', ko: '역사는 되풀이돼.'},
            {s: 'B', en: '{{What do you mean by}} that?', ko: '그게 무슨 뜻이야?'},
            {s: 'A', en: '{{I mean}} people make the same mistakes again.', ko: '사람들이 같은 실수를 다시 한다는 뜻이야.'},
            {s: 'B', en: 'So we should learn from the past.', ko: '그러니까 과거에서 배워야 하는구나.'}
          ]}
        ],
        check: [
          {q: 'What does “heritage” mean?', a: 'Something important from the past that we pass down.'},
          {q: 'What does Jiwoo compare the Annals to?', a: 'A diary of a whole country.'},
          {q: 'What does “History repeats itself” mean?', a: 'People make the same mistakes again.'}
        ],
        drill: {frame: ['A: What do you mean by ____?', 'B: It means ____.'], opts: ['heritage', 'ancient', 'erupt', 'scholar', 'invasion', '“history repeats itself”']}
      }
    ],
    interviewEx: 'Taemin has heard about Pompeii. He read about it in a science magazine.',
    watch: {
      label: 'Let’s Watch', title: 'A Night at the Museum', setting: '박물관 폐관 직전. 큐레이터와 유나가 오래된 빵 모형 앞에 서 있다.',
      lines: [
        {s: 'Yuna', en: 'Is this really bread? It looks like a stone.', ko: '이게 정말 빵이에요? 돌처럼 보여요.'},
        {s: 'Curator', en: 'It’s a model of bread from Pompeii. When the volcano erupted, someone had just put it in the oven.', ko: '폼페이 빵의 모형이란다. 화산이 분출했을 때, 누군가가 막 그것을 오븐에 넣었었지.'},
        {s: 'Yuna', en: 'What do you mean? They never ate it?', ko: '무슨 뜻이에요? 그 빵을 먹지 못한 거예요?'},
        {s: 'Curator', en: 'Right. The ash covered everything in a few hours.', ko: '그래. 몇 시간 만에 재가 모든 것을 덮었거든.'},
        {s: 'Yuna', en: 'Looking at this bread, I feel sad for them.', ko: '이 빵을 보니까 그 사람들이 안타까워요.'},
        {s: 'Curator', en: 'That’s why we learn history. It reminds us of real people.', ko: '그래서 우리가 역사를 배우는 거야. 실제 사람들을 떠올리게 해 주니까.'}
      ],
      check: [
        {q: 'What does the model show?', a: 'Bread from Pompeii.'},
        {q: 'What had someone done before the volcano erupted?', a: 'Someone had just put the bread in the oven.'},
        {q: 'How does Yuna feel?', a: 'She feels sad for them.'}
      ]
    },
    wrap: {en: 'Ask if your partner has heard about a historical event, and ask them to explain one word.', ko: '역사적 사건을 들어 보았는지 묻고, 모르는 낱말의 설명 요청하기'}
  },

  grammar: {
    cover: 'had + p.p.',
    hook: {en: 'When the volcano erupted, someone {{had}} just {{put}} bread in the oven.  /  {{Looking}} at this bread, I feel sad.', ko: '빵을 넣은 것과 화산 분출, 어느 쪽이 먼저일까?', answer: '빵을 넣은 일이 먼저 — 과거보다 더 이전의 일은 had + p.p.(과거완료). 두 번째 문장은 When I look at ~을 줄인 분사구문', note: '칠판에 시간선을 그리고 ‘빵을 넣음 → 화산 분출 → 지금’ 순서로 점을 찍게 한다.'},
    points: [
      { id: 'g1', name: '과거완료 had + p.p.', short: '과거완료', form: 'had + 과거분사', meaning: '(과거의 어느 때보다) 이미 ~했었다',
        notice: [
          {en: 'When people found the city, it {{had been}} under ash for centuries.', ko: '사람들이 그 도시를 발견했을 때, 그것은 수백 년 동안 재 아래 있었다.'},
          {en: 'Someone {{had}} just {{put}} bread in the oven.', ko: '누군가 막 빵을 오븐에 넣었었다.'},
          {en: 'The war {{had destroyed}} three copies before it ended.', ko: '전쟁이 끝나기 전에 이미 세 부가 파괴되었었다.'}
        ],
        rule: [
          {k: '뜻', v: '과거의 기준 시점보다 더 먼저 일어난 일 (대과거)', ex: 'When I arrived, the bus had left.'},
          {k: '기준', v: '보통 when / before / after / by the time + 과거절과 함께', ex: 'Before he came, I had finished.'},
          {k: '부정', v: 'had not(hadn’t) + p.p.', ex: 'I hadn’t heard of it before.'}
        ],
        compare: {
          title: '과거 vs 과거완료', note: '시간선 위에 두 사건을 놓고 ‘먼저 일어난 쪽’에만 had를 붙인다고 정리한다.',
          head: ['', '먼저 일어난 일', '나중에 일어난 일'],
          cols: [['시제', '예문 ①', '예문 ②'], ['had + p.p.', 'The bus had left', 'I had read the book'], ['과거형', 'when I arrived.', 'before I saw the movie.']]
        },
        check: [
          {q: 'When I got home, my mom ____ already ____ dinner. (cook)', a: 'had, cooked'},
          {q: 'The city ____ ____ for centuries before people found it. (be buried, 과거완료)', a: 'had been buried'},
          {q: 'I ____ never ____ the Annals before this class. (hear of)', a: 'had, heard of'},
          {q: 'By the time we arrived, the show ____ ____. (start)', a: 'had started'},
          {q: 'She lost the book that she ____ ____. (borrow)', a: 'had borrowed'}
        ],
        trap: {bad: 'When I arrived, the train has left.', good: 'When I arrived, the train had left.', why: '과거(arrived)보다 먼저 일어난 일은 현재완료가 아니라 과거완료로 쓴다.'},
        scramble: [
          {ko: '내가 도착했을 때 영화는 이미 시작했었다.', en: 'When I arrived, the movie had already started.'},
          {ko: '그는 전에 그 박물관에 가 본 적이 없었다.', en: 'He had never visited the museum before.'},
          {ko: '그들은 전쟁 전에 네 부를 만들었었다.', en: 'They had made four copies before the war.'}
        ]
      },
      { id: 'g2', name: '분사구문', short: '분사구문', form: '-ing ~, 주어 + 동사', meaning: '~하면서 / ~할 때 / ~해서',
        notice: [
          {en: '{{Looking}} at this bread, I feel sad for them.', ko: '이 빵을 보니까 그 사람들이 안타깝다.'},
          {en: '{{Hearing}} the news, the scholars moved the books.', ko: '그 소식을 듣고, 선비들은 책을 옮겼다.'},
          {en: '{{Walking}} through the city, we saw old paintings.', ko: '도시를 걸으면서 우리는 오래된 그림들을 보았다.'}
        ],
        rule: [
          {k: '만드는 법', v: '① 접속사 빼기 ② 같은 주어 빼기 ③ 동사를 -ing로', ex: 'When I looked at it → Looking at it'},
          {k: '뜻', v: '때(~할 때), 이유(~해서), 동시동작(~하면서)', ex: 'Feeling tired, I went to bed. (이유)'},
          {k: '부정', v: 'Not + -ing', ex: 'Not knowing the answer, I kept quiet.'}
        ],
        check: [
          {q: '____ the door, she saw a cat. (open)', a: 'Opening'},
          {q: '____ tired, I went to bed early. (feel)', a: 'Feeling'},
          {q: 'When he heard the news, he cried. → ____ the news, he cried.', a: 'Hearing'},
          {q: '____ ____ what to do, I asked my teacher. (not, know)', a: 'Not knowing'},
          {q: '____ to music, she did her homework. (listen)', a: 'Listening'}
        ],
        trap: {bad: 'Looking at the bread, it made me sad.', good: 'Looking at the bread, I felt sad.', why: '분사구문의 숨은 주어와 주절의 주어가 같아야 한다. 빵이 빵을 본 것이 아니다.'},
        scramble: [
          {ko: '그 소식을 듣고, 그들은 책을 옮겼다.', en: 'Hearing the news, they moved the books.'},
          {ko: '박물관을 걸으면서 나는 많은 사진을 찍었다.', en: 'Walking through the museum, I took many pictures.'},
          {ko: '피곤해서 나는 일찍 잤다.', en: 'Feeling tired, I went to bed early.'}
        ]
      }
    ],
    wrap: {en: 'Before I came to this class, I had never ______. Learning about ______, I felt ______.', ko: '과거완료 한 문장, 분사구문 한 문장으로 오늘 배운 역사 정리하기'},
    wrapEx: 'Before I came to this class, I had never heard of the Annals. Learning about the two scholars, I felt proud of them.'
  },

  reading: {
    title: 'Stories That Survived', kind: '역사 이야기', cover: 'Pompeii', coverKo: '하루 만에 멈춘 도시', cover2: 'Annals', coverKo2: '동굴로 옮긴 472년의 기록',
    before: [
      {q: 'Look at the title. What does “survive” mean?', a: '살아남다, 남아 있다'},
      {q: 'What can we learn from very old cities or books?', a: '옛 사람들의 생활, 실수, 지혜 등'}
    ],
    gloss: {'Mount Vesuvius': '베수비오산', 'AD 79': '서기 79년', 'the 18th century': '18세기', 'frozen in time': '시간이 멈춘 듯한', 'the Annals of the Joseon Dynasty': '조선왕조실록', 'archive': '기록 보관소', 'Jeonju': '전주', 'Naejangsan': '내장산', 'UNESCO Memory of the World': '유네스코 세계기록유산', 'Imjin War': '임진왜란'},
    paras: [
      {who: '', en: 'History is not just a list of dates. It is the story of real people. Some of these stories almost disappeared. Today, let’s look at two stories that survived, and what they teach us.',
       ko: '역사는 단지 날짜의 목록이 아닙니다. 그것은 실제 사람들의 이야기입니다. 이 이야기 중 일부는 거의 사라질 뻔했죠. 오늘은 살아남은 두 이야기와 그것이 우리에게 가르쳐 주는 것을 살펴봅시다.',
       check: {q: 'What is history, according to the writer?', a: 'The story of real people.'}, think: '역사를 ‘날짜’가 아니라 ‘사람’으로 보면 무엇이 달라질까?'},
      {who: 'A City Frozen in Time', en: 'In AD 79, Mount Vesuvius erupted near the Roman city of Pompeii. People had lived there peacefully for hundreds of years. But in less than two days, the whole city was buried under thick ash.',
       ko: '서기 79년, 로마의 도시 폼페이 근처에서 베수비오산이 분출했습니다. 사람들은 수백 년 동안 그곳에서 평화롭게 살아왔었죠. 하지만 이틀도 채 되지 않아 도시 전체가 두꺼운 재 아래 묻혔습니다.',
       check: {q: 'What happened to Pompeii in AD 79?', a: 'It was buried under thick ash after Mount Vesuvius erupted.'}, think: '평화롭던 도시가 순식간에 사라졌다는 것은 어떤 느낌일까?'},
      {who: 'A City Frozen in Time', en: 'The city stayed under the ash for about 1,700 years. When people discovered it in the 18th century, they were amazed. The ash had protected streets, wall paintings, and even bread in an oven. Walking through Pompeii today, you can see the daily life of ancient Romans.',
       ko: '도시는 약 1,700년 동안 재 아래 있었습니다. 18세기에 사람들이 그것을 발견했을 때 그들은 깜짝 놀랐죠. 재가 거리와 벽화, 심지어 오븐 속 빵까지 보호해 왔던 것입니다. 오늘날 폼페이를 걸으면, 고대 로마인들의 일상을 볼 수 있습니다.',
       check: {q: 'What had the ash protected?', a: 'Streets, wall paintings, and even bread in an oven.'}, think: '재난이 역사를 ‘보존’했다는 것은 아이러니일까?'},
      {who: 'Saving the Annals', en: 'The Annals of the Joseon Dynasty record 472 years of history, day by day. The kings of Joseon knew how important the records were. So they made four copies and kept them in four different archives.',
       ko: '조선왕조실록은 472년의 역사를 하루하루 기록하고 있습니다. 조선의 왕들은 그 기록이 얼마나 중요한지 알았죠. 그래서 네 부를 만들어 서로 다른 네 곳의 보관소에 두었습니다.',
       check: {q: 'Why did they keep the copies in four different places?', a: 'Because the records were important. (If one was lost, others would remain.)'}, think: '왜 한곳이 아니라 네 곳에 나누어 두었을까?'},
      {who: 'Saving the Annals', en: 'In 1592, the Imjin War broke out. Hearing that enemies were coming, two scholars in Jeonju, An Ui and Son Hong-rok, moved the books to a cave in Naejangsan. When the war ended, the other three copies had been destroyed. Only the Jeonju copy remained.',
       ko: '1592년 임진왜란이 일어났습니다. 적이 온다는 소식을 듣고 전주의 두 선비 안의와 손홍록은 책을 내장산의 동굴로 옮겼습니다. 전쟁이 끝났을 때 나머지 세 부는 이미 불타 없어진 뒤였습니다. 오직 전주의 사본만 남았죠.',
       check: {q: 'Where did the two scholars move the books?', a: 'To a cave in Naejangsan.'}, think: '목숨을 걸고 책을 지킨 까닭은 무엇이었을까?'},
      {who: 'Saving the Annals', en: 'The two scholars guarded the books for more than a year. Thanks to them, we can still read the whole story of Joseon. In 1997, the Annals became part of the UNESCO Memory of the World.',
       ko: '두 선비는 1년이 넘도록 책을 지켰습니다. 그들 덕분에 우리는 지금도 조선의 이야기 전체를 읽을 수 있죠. 1997년, 실록은 유네스코 세계기록유산이 되었습니다.',
       check: {q: 'When did the Annals become part of the UNESCO Memory of the World?', a: 'In 1997.'}, think: '오늘날 우리가 지켜야 할 기록은 무엇일까?'},
      {who: 'Our Lesson', en: 'Pompeii was saved by accident, and the Annals were saved by people. Both stories tell us that the past is easy to lose. What records of today will you protect for the future?',
       ko: '폼페이는 우연히 지켜졌고, 실록은 사람들에 의해 지켜졌습니다. 두 이야기 모두 과거는 잃기 쉽다는 것을 알려 주죠. 여러분은 미래를 위해 오늘의 어떤 기록을 지키겠어요?',
       check: {q: 'How were the Annals saved?', a: 'By people.'}, think: '내가 미래에 남기고 싶은 기록은?'}
    ],
    split: 3,
    next: '불타 버린 책들 사이에서\n한 부는 어떻게 살아남았을까?',
    recap: {q: '폼페이는 어떻게 남았을까?', items: [{k: 'AD 79', v: 'Vesuvius erupted'}, {k: '1,700 YEARS', v: 'under the ash'}, {k: '18TH CENTURY', v: 'discovered again'}]},
    tf: [
      {p: 1, s: 'Mount Vesuvius erupted in AD 79.', a: true},
      {p: 2, s: 'The ash destroyed all the wall paintings.', a: false, why: '재가 벽화를 보호했다.'},
      {p: 3, s: 'The Annals record 472 years of history.', a: true},
      {p: 3, s: 'Joseon kept all the records in one archive.', a: false, why: '네 곳에 나누어 두었다.'},
      {p: 4, s: 'The scholars moved the books to a cave.', a: true},
      {p: 5, s: 'The Annals became UNESCO heritage in 1592.', a: false, why: '1997년이다.'}
    ],
    key: [
      {en: 'People {{had lived}} there peacefully for hundreds of years.', note: '과거완료 (분출 이전부터 계속)', g: 'g1'},
      {en: 'The ash {{had protected}} streets, wall paintings, and even bread.', note: '과거완료 (발견 이전)', g: 'g1'},
      {en: '{{Walking}} through Pompeii today, you can see the daily life of ancient Romans.', note: '분사구문 (때)', g: 'g2'},
      {en: '{{Hearing}} that enemies were coming, two scholars moved the books.', note: '분사구문 (때·이유)', g: 'g2'},
      {en: 'When the war ended, the other three copies {{had been destroyed}}.', note: '과거완료 수동태', g: 'g1'},
      {en: '{{Thanks to}} them, we can still read the whole story of Joseon.', note: 'thanks to: ~ 덕분에', g: ''}
    ],
    summary: {text: 'In AD 79, Pompeii was {{buried}} under ash. The ash had {{protected}} the city, so we can see ancient daily life. During the Imjin War, two {{scholars}} moved the Annals to a {{cave}}. Only the Jeonju {{copy}} remained. Both stories show that the past is easy to {{lose}}.'},
    order: ['Joseon made four copies of the Annals.', 'The Imjin War broke out.', 'Two scholars moved the books to a cave.', 'The Annals became UNESCO heritage.'],
    chart: {title: 'TWO STORIES', ko: '두 이야기 비교하기', cols: ['What happened', 'How it survived'], note: '‘우연히(by accident)’와 ‘사람에 의해(by people)’의 대비를 칠판에 크게 쓴다.', rows: [
      {name: 'Pompeii', cells: ['buried by a volcano in AD 79', 'by accident — the ash protected it']},
      {name: 'The Annals', cells: ['three copies destroyed in 1592', 'by people — two scholars hid it']}
    ]},
    wrap: {en: 'Before this lesson, I had never ______. Thinking about the future, I want to protect ______ because ______.', ko: '관통 질문으로 돌아가기: 미래를 위해 지키고 싶은 오늘의 기록 쓰기'}
  },

  quiz: [
    ['“고대의”를 뜻하는 낱말은?', ['daily', 'ancient', 'modern', 'historical'], 1, 'ancient: 고대의'],
    ['“destroy”와 반대 개념인 낱말은?', ['bury', 'erupt', 'disappear', 'protect'], 3, 'destroy ↔ protect'],
    ['“The town was covered ___ ash.”', ['with', 'at', 'from', 'about'], 0, 'be covered with'],
    ['들어 보았는지 묻는 표현은?', ['What do you mean?', 'Let me explain.', 'Have you heard about it?', 'It means a lot to all of us.'], 2, 'Have you heard about ~?'],
    ['설명을 요청하는 표현은?', ['I mean it.', 'I’ve read about it.', 'Can you explain that?', 'Yes, I’ve heard about it.'], 2, 'Can you explain ~? / What do you mean by ~?'],
    ['Let’s Watch에서 화산이 분출할 때 누군가 막 한 일은?', ['빵을 오븐에 넣었다', '벽에 그림을 그렸다', '도시를 떠났다', '박물관에 빵을 기증했다'], 0, 'someone had just put it in the oven'],
    ['빈칸에 알맞은 것은? “When I arrived, the bus ___.”', ['leaves', 'has left', 'is leaving', 'had left'], 3, '과거보다 먼저: had + p.p.'],
    ['빈칸에 알맞은 것은? “___ the news, he cried.”', ['Hear', 'Hearing', 'Heard', 'To be heard'], 1, '분사구문: -ing'],
    ['어법상 틀린 문장은?', ['I had never seen it.', 'Feeling tired, I slept.', 'When I came, she has gone.', 'Not knowing the answer, I asked.'], 2, 'she had gone'],
    ['밑줄 친 분사구문 Looking at the bread의 뜻으로 알맞은 것은?', ['빵을 볼 때', '빵을 굽기 위해', '빵이 보였지만', '빵을 보지 않았다면'], 0, 'When I looked at the bread'],
    ['폼페이를 묻은 것은?', ['홍수', '지진', '화산재', '모래 폭풍'], 2, 'buried under thick ash'],
    ['폼페이가 다시 발견된 때는?', ['서기 79년', '18세기', '1592년', '1997년, 유네스코 지정 직후'], 1, 'in the 18th century'],
    ['조선은 실록을 몇 부 만들었나?', ['네 부', '한 부', '두 부', '열 부가 넘게'], 0, 'four copies'],
    ['임진왜란 뒤 남은 실록은?', ['한양 사본', '충주 사본', '성주 사본', '전주 사본'], 3, 'Only the Jeonju copy remained.'],
    ['두 이야기의 공통된 교훈은?', ['화산은 위험하다', '과거는 잃기 쉽다', '동굴은 안전하다', '왕의 명령은 꼭 따라야 한다'], 1, 'the past is easy to lose']
  ]
};
