/* 중3 영어(동아·윤정미) Lesson 4 · The Power of Words — 가안
   2022 개정 중3 교과서 목차 공개 전, 중3 문법 순서에 맞춰 만든 가안 단원입니다.
   읽기 글의 마틴 루서 킹 연설 관련 사실은 널리 알려진 내용이며, 나머지 이야기는 새로 지은 것입니다. */
window.LESSON = {
  book: 'm3-donga', no: 4, estimate: true,
  title: 'The Power of Words', ko: '말의 힘',
  bigQ: {en: 'How can words change people?', ko: '말은 어떻게 사람을 바꿀 수 있을까?'},
  goals: {
    vocab: ['말·소통과 관련된 낱말 20개의 뜻을 알고 정확히 발음할 수 있다.', '낱말을 넣어 기억에 남는 말을 한 문장으로 소개할 수 있다.'],
    talk: ['기억하는지 묻고 답할 수 있다.', '사과하고 사과에 답할 수 있다.'],
    grammar: ['간접의문문(의문사 + 주어 + 동사)을 문장 안에 넣어 쓸 수 있다.', '관계부사 where, when, why로 장소·때·까닭을 설명할 수 있다.'],
    read1: ['글의 주제를 파악하고, 한 학생의 삶을 바꾼 쪽지 이야기를 이해할 수 있다.'],
    read2: ['말이 사람을 바꾼 세 가지 사례를 비교하고, 누군가에게 힘이 되는 말을 영어로 쓸 수 있다.']
  },

  vocab: {
    hook: {en: 'What is the best thing someone has ever said to you?', ko: '누군가에게 들은 가장 좋은 말은 무엇인가요?', note: '말하기 부끄러워하면 포스트잇에 써서 붙이게 한다. 반대로 상처가 된 말은 묻지 않고, ‘말의 힘’이라는 주제로 잇는다.'},
    words: [
      {w: 'speech', pos: 'n.', ko: '연설', ic: '🎤', ex: 'She gave a speech at graduation.', exKo: '그녀는 졸업식에서 연설을 했다.'},
      {w: 'encourage', pos: 'v.', ko: '격려하다', ic: '📣', ex: 'My coach always encourages me.', exKo: '코치님은 늘 나를 격려하신다.'},
      {w: 'hurt', pos: 'v./adj.', ko: '상처 주다; 다친', ic: '💔', ex: 'Words can hurt people.', exKo: '말은 사람에게 상처를 줄 수 있다.'},
      {w: 'note', pos: 'n.', ko: '쪽지', ic: '📝', ex: 'She found a note in her book.', exKo: '그녀는 책에서 쪽지를 발견했다.'},
      {w: 'crowd', pos: 'n.', ko: '군중', ic: '👥', ex: 'A huge crowd listened to the speech.', exKo: '엄청난 군중이 그 연설을 들었다.'},
      {w: 'equal', pos: 'adj.', ko: '평등한, 동등한', ic: '⚖️', ex: 'All people are equal.', exKo: '모든 사람은 평등하다.'},
      {w: 'freedom', pos: 'n.', ko: '자유', ic: '🕊️', ex: 'They fought for freedom.', exKo: '그들은 자유를 위해 싸웠다.'},
      {w: 'inspire', pos: 'v.', ko: '영감을 주다', ic: '✨', ex: 'His words inspired millions.', exKo: '그의 말은 수백만 명에게 영감을 주었다.'},
      {w: 'remember', pos: 'v.', ko: '기억하다', ic: '🧠', ex: 'I still remember her words.', exKo: '나는 아직도 그녀의 말을 기억한다.'},
      {w: 'apologize', pos: 'v.', ko: '사과하다', ic: '🙇', ex: 'I apologized to my friend.', exKo: '나는 친구에게 사과했다.'},
      {w: 'compliment', pos: 'n.', ko: '칭찬', ic: '🌷', ex: 'Thanks for the compliment.', exKo: '칭찬 고마워.'},
      {w: 'rude', pos: 'adj.', ko: '무례한', ic: '😤', ex: 'Don’t be rude to others.', exKo: '다른 사람에게 무례하게 굴지 마라.'},
      {w: 'respect', pos: 'n./v.', ko: '존중; 존중하다', ic: '🤝', ex: 'Speak with respect.', exKo: '존중하며 말해라.'},
      {w: 'silence', pos: 'n.', ko: '침묵', ic: '🤫', ex: 'There was a long silence.', exKo: '긴 침묵이 흘렀다.'},
      {w: 'courage', pos: 'n.', ko: '용기', ic: '🦁', ex: 'Her words gave me courage.', exKo: '그녀의 말이 나에게 용기를 주었다.'},
      {w: 'dream', pos: 'n.', ko: '꿈', ic: '💭', ex: 'He shared his dream with the crowd.', exKo: '그는 군중과 자신의 꿈을 나누었다.'},
      {w: 'wall', pos: 'n.', ko: '벽', ic: '🧱', ex: 'We covered the wall with notes.', exKo: '우리는 벽을 쪽지로 덮었다.'},
      {w: 'anonymous', pos: 'adj.', ko: '익명의', ic: '🎭', ex: 'The notes were anonymous.', exKo: '그 쪽지들은 익명이었다.'},
      {w: 'impact', pos: 'n.', ko: '영향', ic: '💥', ex: 'Words have a big impact.', exKo: '말은 큰 영향을 미친다.'},
      {w: 'promise', pos: 'v./n.', ko: '약속하다; 약속', ic: '🤙', ex: 'I promise to be kind.', exKo: '나는 친절하겠다고 약속한다.'}
    ],
    phrases: [
      {w: 'give a speech', ko: '연설하다', ex: 'He gave a speech in 1963.', exKo: '그는 1963년에 연설을 했다.'},
      {w: 'mean a lot', ko: '큰 의미가 있다', ex: 'Your words mean a lot to me.', exKo: '네 말은 나에게 큰 의미가 있다.'},
      {w: 'make fun of', ko: '~을 놀리다', ex: 'Don’t make fun of others.', exKo: '다른 사람을 놀리지 마라.'},
      {w: 'cheer up', ko: '기운을 북돋우다', ex: 'Her note cheered me up.', exKo: '그녀의 쪽지가 나를 기운 나게 했다.'},
      {w: 'stand up for', ko: '~을 옹호하다, 편들다', ex: 'Stand up for your friends.', exKo: '친구들의 편에 서라.'},
      {w: 'take back', ko: '(말을) 취소하다', ex: 'You can’t take back your words.', exKo: '한 말은 되돌릴 수 없다.'}
    ],
    pairs: [
      {a: 'polite', b: 'rude', rel: '반대말'},
      {a: 'encourage', b: 'discourage', rel: '반대말'},
      {a: 'equal', b: 'equality', rel: '형용사 / 명사'},
      {a: 'free', b: 'freedom', rel: '형용사 / 명사'}
    ],
    wrap: {en: 'The words that encouraged me were “______.” They meant a lot because ______.', ko: '오늘 배운 낱말로 나에게 힘이 된 말 소개하기'}
  },

  talk: {
    hook: {en: 'Do you remember your first day of middle school?', ko: '중학교 첫날을 기억하나요?', note: '그날 들은 말이나 기억나는 장면을 짧게 나눈다. Do you remember ~?로 이어진다.'},
    speakers: {Yerin: {voice: 0, pitch: 1.15}, Owen: {voice: 1, pitch: .95}, Grandpa: {voice: 2, pitch: .8}, Seho: {voice: 1, pitch: 1}, Ara: {voice: 0, pitch: 1.1}, A: {voice: 0, pitch: 1}, B: {voice: 1, pitch: 1}},
    sets: [
      { id: 'lt1', label: 'Listen & Talk 1', func: '기억 여부 묻고 답하기',
        key: {q: ['Do you remember ~?', 'Do you remember what / when ~?'], a: ['Of course I remember.', 'I remember -ing ~.', 'Sorry, I don’t remember.']},
        note: 'remember -ing: (과거에) ~한 것을 기억하다 / remember to: (앞으로) ~할 것을 기억하다. Do you remember what he said?는 간접의문문.',
        dialogs: [
          { title: 'Dialogue A', setting: '졸업 앨범을 보며, 교실', lines: [
            {s: 'Yerin', en: 'Owen, {{do you remember}} Ms. Han from sixth grade?', ko: '오웬, 6학년 때 한 선생님 기억나?'},
            {s: 'Owen', en: '{{Of course I remember}}. She was so kind.', ko: '물론 기억하지. 정말 친절하셨잖아.'},
            {s: 'Yerin', en: '{{Do you remember what}} she said to me?', ko: '선생님이 나한테 하신 말 기억나?'},
            {s: 'Owen', en: 'Hmm, not really. What did she say?', ko: '음, 잘 모르겠어. 뭐라고 하셨는데?'},
            {s: 'Yerin', en: '“Your voice matters.” {{I remember}} hearing it on the day when I gave my first speech.', ko: '“네 목소리는 중요해.” 내가 처음 발표했던 날 그 말을 들은 게 기억나.'}
          ]},
          { title: 'Dialogue B', setting: '하굣길', lines: [
            {s: 'A', en: '{{Do you remember when}} the test is?', ko: '시험이 언제인지 기억나?'},
            {s: 'B', en: '{{Sorry, I don’t remember}}. Let’s check the notice.', ko: '미안, 기억 안 나. 공지 확인해 보자.'},
            {s: 'A', en: 'It says next Friday.', ko: '다음 주 금요일이래.'},
            {s: 'B', en: 'I’ll remember to study this time!', ko: '이번엔 꼭 공부할 걸 기억할게!'}
          ]}
        ],
        check: [
          {q: 'What did Ms. Han say to Yerin?', a: '“Your voice matters.”'},
          {q: 'When did Yerin hear it?', a: 'On the day when she gave her first speech.'},
          {q: 'When is the test?', a: 'Next Friday.'}
        ],
        drill: {frame: ['A: Do you remember ____?', 'B: Of course I remember.'], opts: ['our first day', 'the school trip', 'her name', 'what he said', 'where we met', 'when the test is']}
      },
      { id: 'lt2', label: 'Listen & Talk 2', func: '사과하고 답하기',
        key: {q: ['I’m sorry for / about ~.', 'I apologize for ~.'], a: ['That’s okay.', 'Don’t worry about it.', 'Apology accepted.']},
        note: 'I’m sorry for + 명사/-ing. 사과를 받을 때 That’s okay. / Don’t worry about it.',
        dialogs: [
          { title: 'Dialogue A', setting: '쉬는 시간, 복도 끝', lines: [
            {s: 'Seho', en: 'Ara, {{I’m sorry for}} what I said yesterday.', ko: '아라야, 어제 내가 한 말 미안해.'},
            {s: 'Ara', en: 'You mean the joke about my drawing?', ko: '내 그림에 대한 농담 말하는 거야?'},
            {s: 'Seho', en: 'Yes. It was rude. I didn’t think about how you would feel.', ko: '응. 무례했어. 네가 어떻게 느낄지 생각을 못 했어.'},
            {s: 'Ara', en: 'Thanks for saying that. {{Apology accepted}}.', ko: '그렇게 말해 줘서 고마워. 사과 받을게.'},
            {s: 'Seho', en: 'Actually, I think your drawings are really good.', ko: '사실 네 그림 정말 잘 그린다고 생각해.'}
          ]},
          { title: 'Dialogue B', setting: '동아리실', lines: [
            {s: 'A', en: '{{I apologize for}} being late.', ko: '늦어서 죄송합니다.'},
            {s: 'B', en: '{{Don’t worry about it}}. We just started.', ko: '괜찮아. 방금 시작했어.'},
            {s: 'A', en: 'Can you tell me where we are?', ko: '어디까지 했는지 알려 줄래?'},
            {s: 'B', en: 'Sure. We’re on page 12.', ko: '물론이지. 12쪽이야.'}
          ]}
        ],
        check: [
          {q: 'Why is Seho sorry?', a: 'For the rude joke about Ara’s drawing.'},
          {q: 'What does Seho really think about Ara’s drawings?', a: 'He thinks they are really good.'},
          {q: 'What page are they on?', a: 'Page 12.'}
        ],
        drill: {frame: ['A: I’m sorry for ____.', 'B: That’s okay.'], opts: ['being late', 'what I said', 'breaking your pen', 'forgetting your birthday', 'not calling you', 'the mistake']}
      }
    ],
    interviewEx: 'Hyejin remembers the day when her grandpa said, “I’m proud of you.”',
    watch: {
      label: 'Let’s Watch', title: 'Grandpa’s Letter', setting: '저녁, 할아버지 댁 서재. 세호가 오래된 편지 상자를 발견한다.',
      lines: [
        {s: 'Seho', en: 'Grandpa, what are these old letters?', ko: '할아버지, 이 오래된 편지들은 뭐예요?'},
        {s: 'Grandpa', en: 'They’re from my teacher. Do you know why I kept them for fifty years?', ko: '내 선생님께서 보내신 거란다. 왜 50년 동안 간직했는지 아니?'},
        {s: 'Seho', en: 'No. Why?', ko: '아니요. 왜요?'},
        {s: 'Grandpa', en: 'When I wanted to quit school, she wrote, “Don’t give up. I believe in you.”', ko: '내가 학교를 그만두고 싶었을 때, 선생님이 “포기하지 마라. 나는 너를 믿는다.”라고 쓰셨지.'},
        {s: 'Seho', en: 'Wow. That’s the reason why you became a teacher, too?', ko: '와. 그게 할아버지도 선생님이 되신 까닭이에요?'},
        {s: 'Grandpa', en: 'Exactly. A few words can change a whole life.', ko: '바로 그거야. 몇 마디 말이 한 사람의 삶 전체를 바꿀 수 있단다.'}
      ],
      check: [
        {q: 'Who wrote the letters?', a: 'Grandpa’s teacher.'},
        {q: 'What did the teacher write?', a: '“Don’t give up. I believe in you.”'},
        {q: 'What did Grandpa become?', a: 'A teacher.'}
      ]
    },
    wrap: {en: 'Ask your partner if they remember an important day, and practice apologizing politely.', ko: '기억에 남는 날을 묻고 답한 뒤, 정중하게 사과하고 답하는 대화 해 보기'}
  },

  grammar: {
    cover: 'Do you know why ~?',
    hook: {en: 'Do you know {{why}} he kept the letters?  /  This is the place {{where}} he gave his speech.', ko: '빈칸에 들어갈 말은 각각 어떤 일을 할까?', answer: '첫 문장은 간접의문문(why + 주어 + 동사), 두 번째는 장소(the place)를 꾸미는 관계부사 where', note: '“Why did he keep the letters?”가 문장 안에 들어가면 어순이 어떻게 바뀌는지 비교하게 한다.'},
    points: [
      { id: 'g1', name: '간접의문문', short: '간접의문문', form: '의문사 + 주어 + 동사 / if(whether) + 주어 + 동사', meaning: '(문장 속에 들어간) 질문',
        notice: [
          {en: 'Do you know {{why he kept}} the letters?', ko: '그가 왜 그 편지들을 간직했는지 아니?'},
          {en: 'I wonder {{what she said}}.', ko: '나는 그녀가 무슨 말을 했는지 궁금하다.'},
          {en: 'Can you tell me {{if the test is}} on Friday?', ko: '시험이 금요일인지 말해 줄래?'}
        ],
        rule: [
          {k: '어순', v: '의문사 + 주어 + 동사 (do/does/did 없이)', ex: 'Where does he live? → Do you know where he lives?'},
          {k: '의문사 없을 때', v: 'if / whether + 주어 + 동사', ex: 'Is it true? → I wonder if it is true.'},
          {k: '생각 동사', v: 'think, believe, guess는 의문사가 맨 앞', ex: 'What do you think he said?'}
        ],
        compare: {
          title: '직접의문문 → 간접의문문', note: '“의문사 다음엔 주어부터!”를 구호처럼 반복하게 한다. do/does/did가 사라지고 동사 시제가 살아난다.',
          head: ['직접의문문', '간접의문문', '바뀐 점'],
          cols: [['Where is the library?', 'What did he say?', 'Is she busy?'], ['Do you know where the library is?', 'I wonder what he said.', 'I wonder if she is busy.'], ['is가 주어 뒤로', 'did 사라지고 said', 'if + 주어 + 동사']]
        },
        check: [
          {q: 'Do you know where ____ ____? (he, live)', a: 'he lives'},
          {q: 'I wonder ____ she is angry. (왜)', a: 'why'},
          {q: 'Tell me what ____ ____. (you, want)', a: 'you want'},
          {q: 'I don’t know ____ he will come. (~인지)', a: 'if'},
          {q: 'Can you tell me when the speech ____? (start, 현재)', a: 'starts'}
        ],
        trap: {bad: 'Do you know where does she live?', good: 'Do you know where she lives?', why: '간접의문문에서는 does를 빼고 ‘주어 + 동사’ 순서로 쓴다.'},
        scramble: [
          {ko: '나는 그가 왜 늦었는지 모른다.', en: 'I don’t know why he was late.'},
          {ko: '그 연설이 언제 시작하는지 아니?', en: 'Do you know when the speech starts?'},
          {ko: '그것이 사실인지 궁금하다.', en: 'I wonder if it is true.'}
        ]
      },
      { id: 'g2', name: '관계부사 where · when · why', short: '관계부사', form: '장소 + where / 때 + when / the reason + why + 주어 + 동사', meaning: '~하는 (장소·때·까닭)',
        notice: [
          {en: 'This is the place {{where}} he gave his speech.', ko: '이곳이 그가 연설을 한 장소이다.'},
          {en: 'I remember the day {{when}} I gave my first speech.', ko: '나는 내가 처음 발표한 날을 기억한다.'},
          {en: 'That’s the reason {{why}} I became a teacher.', ko: '그것이 내가 교사가 된 까닭이다.'}
        ],
        rule: [
          {k: 'where', v: '장소 명사 (the place, the city, the room) + where', ex: 'the city where I was born'},
          {k: 'when', v: '때 명사 (the day, the year, the time) + when', ex: 'the year when we met'},
          {k: 'why · how', v: 'the reason why ~ / how ~ (the way how ✗)', ex: 'This is how I study. (= the way I study)'}
        ],
        check: [
          {q: 'This is the room ____ we practice. (장소)', a: 'where'},
          {q: 'I can’t forget the day ____ we won. (때)', a: 'when'},
          {q: 'Tell me the reason ____ you were late. (까닭)', a: 'why'},
          {q: 'This is ____ I solved the problem. (방법)', a: 'how'},
          {q: 'Seoul is the city ____ I was born.', a: 'where'}
        ],
        trap: {bad: 'This is the way how I make friends.', good: 'This is how I make friends. / This is the way I make friends.', why: 'the way와 how는 함께 쓰지 않는다.'},
        scramble: [
          {ko: '이곳이 우리가 처음 만난 장소이다.', en: 'This is the place where we first met.'},
          {ko: '나는 그가 나를 격려해 준 날을 기억한다.', en: 'I remember the day when he encouraged me.'},
          {ko: '그것이 내가 매일 연습하는 까닭이다.', en: 'That is the reason why I practice every day.'}
        ]
      }
    ],
    wrap: {en: 'I wonder why ______. I remember the day when ______.', ko: '간접의문문 한 문장, 관계부사 한 문장으로 기억에 남는 말 쓰기'},
    wrapEx: 'I wonder why kind words stay in our hearts so long. I remember the day when my friend said, “You can do it.”'
  },

  reading: {
    title: 'Words That Changed Lives', kind: '칼럼', cover: 'Words', coverKo: '쪽지 한 장의 힘', cover2: 'Dream', coverKo2: '수십만 명을 움직인 말',
    before: [
      {q: 'Look at the title. How can words change lives?', a: '용기를 주거나 생각을 바꾸게 한다'},
      {q: 'Do you know any famous speeches?', a: '자유롭게 말한 뒤 글과 비교'}
    ],
    gloss: {'sticky note': '붙임쪽지', 'locker': '사물함', 'Martin Luther King Jr.': '마틴 루서 킹 주니어', 'Lincoln Memorial': '링컨 기념관', 'civil rights': '시민권, 민권', 'judged': '판단되는', 'skin': '피부', 'character': '인격, 성품', 'hallway': '복도', 'post-its': '붙임쪽지들', 'echo': '울려 퍼지다'},
    paras: [
      {who: '', en: 'Sticks and stones can break bones, but can words hurt? Many people believe that words are even stronger than stones. They can hurt, but they can also heal. Here are three stories about the power of words.',
       ko: '막대기와 돌은 뼈를 부러뜨릴 수 있지만, 말도 상처를 줄 수 있을까요? 많은 사람이 말은 돌보다 더 강하다고 믿습니다. 말은 상처를 줄 수도 있지만 치유할 수도 있죠. 말의 힘에 관한 세 가지 이야기를 소개합니다.',
       check: {q: 'What can words do besides hurting?', a: 'They can heal.'}, think: '말로 상처받거나 위로받은 경험이 있나요?'},
      {who: 'A Note in the Locker', en: 'Daeun was a quiet student who rarely spoke in class. One day, she found a sticky note in her locker. It said, “Your idea in science class was amazing. I wish you would speak more.” She didn’t know who wrote it.',
       ko: '다은이는 수업 시간에 거의 말을 하지 않는 조용한 학생이었습니다. 어느 날 사물함에서 붙임쪽지 하나를 발견했어요. “과학 시간에 네 생각은 정말 멋졌어. 네가 더 많이 말하면 좋겠어.” 다은이는 누가 썼는지 몰랐습니다.',
       check: {q: 'What did the note say?', a: '“Your idea in science class was amazing. I wish you would speak more.”'}, think: '이런 쪽지를 받는다면 기분이 어떨까?'},
      {who: 'A Note in the Locker', en: 'Daeun kept the note in her pencil case. Whenever she felt nervous, she read it again. A year later, she became the class president. “I still don’t know who wrote that note,” she says. “But it was the moment when I started to believe in myself.”',
       ko: '다은이는 그 쪽지를 필통에 넣어 두었습니다. 긴장될 때마다 다시 읽었죠. 1년 뒤, 그녀는 반장이 되었습니다. “아직도 누가 그 쪽지를 썼는지 몰라요.” 다은이가 말합니다. “하지만 그때가 제가 저 자신을 믿기 시작한 순간이었어요.”',
       check: {q: 'What did Daeun do whenever she felt nervous?', a: 'She read the note again.'}, think: '익명의 쪽지가 더 힘이 될 수 있는 까닭은?'},
      {who: 'A Dream for a Nation', en: 'On August 28, 1963, about 250,000 people gathered at the Lincoln Memorial in Washington, D.C. They wanted equal rights for Black Americans. There, Martin Luther King Jr. gave a speech that people still remember today: “I Have a Dream.”',
       ko: '1963년 8월 28일, 약 25만 명이 워싱턴 D.C.의 링컨 기념관 앞에 모였습니다. 그들은 흑인 미국인들의 평등한 권리를 원했죠. 그곳에서 마틴 루서 킹 주니어는 사람들이 오늘날까지 기억하는 연설을 했습니다. “나에게는 꿈이 있습니다.”',
       check: {q: 'How many people gathered at the Lincoln Memorial?', a: 'About 250,000 people.'}, think: '수많은 사람이 한곳에 모인 까닭은?'},
      {who: 'A Dream for a Nation', en: 'He dreamed of a day when his children would be judged by their character, not by the color of their skin. His words gave courage to millions. The next year, a new law against unfair treatment was passed. Words had started to change a country.',
       ko: '그는 자기 아이들이 피부색이 아니라 인격으로 평가받는 날을 꿈꾸었습니다. 그의 말은 수백만 명에게 용기를 주었죠. 이듬해, 부당한 대우를 금지하는 새 법이 통과되었습니다. 말이 한 나라를 바꾸기 시작한 것입니다.',
       check: {q: 'What did he dream of?', a: 'A day when his children would be judged by their character, not by the color of their skin.'}, think: '여러분이 꿈꾸는 ‘공정한 날’은 어떤 모습인가요?'},
      {who: 'The Kindness Wall', en: 'At one middle school, students were tired of mean comments online. So they made a “kindness wall” in the hallway where anyone could post anonymous compliments. In a month, the wall was covered with more than 1,000 notes.',
       ko: '한 중학교의 학생들은 온라인의 못된 댓글에 지쳐 있었습니다. 그래서 복도에 누구나 익명으로 칭찬을 붙일 수 있는 ‘친절의 벽’을 만들었죠. 한 달 만에 벽은 1,000장이 넘는 쪽지로 덮였습니다.',
       check: {q: 'What could students post on the wall?', a: 'Anonymous compliments.'}, think: '우리 학교에도 친절의 벽을 만든다면 무엇을 쓸까?'},
      {who: 'Your Words', en: 'Do you know how powerful your words are? A short note, a famous speech, a sticky note on a wall — they all changed someone. You can’t take back your words, so choose them carefully. Today, whose day will you change?',
       ko: '여러분의 말이 얼마나 강력한지 알고 있나요? 짧은 쪽지, 유명한 연설, 벽에 붙인 쪽지 한 장. 그 모두가 누군가를 바꾸었습니다. 한 말은 되돌릴 수 없으니 신중하게 고르세요. 오늘 여러분은 누구의 하루를 바꿀 건가요?',
       check: {q: 'Why should we choose our words carefully?', a: 'Because we can’t take back our words.'}, think: '오늘 누구에게 어떤 말을 건넬까?'}
    ],
    split: 3,
    next: '말 한마디가 한 나라를\n바꿀 수 있을까?',
    recap: {q: '다은이를 바꾼 것은?', items: [{k: 'BEFORE', v: 'a quiet student who rarely spoke'}, {k: 'THE NOTE', v: '“Your idea was amazing.”'}, {k: 'AFTER', v: 'became the class president'}]},
    tf: [
      {p: 1, s: 'Daeun knew who wrote the note.', a: false, why: '누가 썼는지 몰랐다.'},
      {p: 2, s: 'Daeun became the class president a year later.', a: true},
      {p: 3, s: 'The speech was given in 1963.', a: true},
      {p: 4, s: 'King wanted people to be judged by their skin color.', a: false, why: '피부색이 아니라 인격으로.'},
      {p: 5, s: 'The kindness wall was in the cafeteria.', a: false, why: '복도에 있었다.'},
      {p: 6, s: 'The writer says we can take back our words.', a: false, why: '되돌릴 수 없다.'}
    ],
    key: [
      {en: 'She didn’t know {{who wrote it}}.', note: '간접의문문: 의문사(주어) + 동사', g: 'g1'},
      {en: 'It was the moment {{when}} I started to believe in myself.', note: '관계부사 when (때)', g: 'g2'},
      {en: 'He dreamed of a day {{when}} his children would be judged by their character.', note: '관계부사 when', g: 'g2'},
      {en: 'They made a “kindness wall” in the hallway {{where}} anyone could post compliments.', note: '관계부사 where (장소)', g: 'g2'},
      {en: 'Do you know {{how powerful your words are}}?', note: '간접의문문: how + 형용사 + 주어 + 동사', g: 'g1'},
      {en: 'You can’t {{take back}} your words.', note: 'take back: 취소하다', g: ''}
    ],
    summary: {text: 'An anonymous {{note}} helped Daeun believe in herself. Martin Luther King Jr.’s {{speech}} gave courage to millions and helped change a {{country}}. Students made a kindness {{wall}} full of compliments. Words can {{hurt}}, but they can also heal, so choose them {{carefully}}.'},
    order: ['Daeun found a note in her locker.', 'She kept it in her pencil case.', 'She read it when she felt nervous.', 'She became the class president.'],
    chart: {title: 'THREE STORIES', ko: '세 이야기 비교하기', cols: ['Words', 'Change'], note: '말의 ‘크기’(쪽지 한 장 ↔ 연설)는 달라도 모두 누군가를 바꿨다는 점을 짚는다.', rows: [
      {name: 'The note', cells: ['“Your idea was amazing.”', 'Daeun believed in herself']},
      {name: 'The speech', cells: ['“I Have a Dream.”', 'courage for millions, a new law']},
      {name: 'The wall', cells: ['1,000+ compliments', 'a kinder school']}
    ]},
    wrap: {en: 'Do you know how much ______? I remember the day when ______. Today, I will say “______” to ______.', ko: '관통 질문으로 돌아가기: 누군가에게 건넬 힘이 되는 말 쓰기'}
  },

  quiz: [
    ['“격려하다”를 뜻하는 낱말은?', ['inspire', 'promise', 'apologize', 'encourage'], 3, 'encourage: 격려하다'],
    ['“rude”의 반대말은?', ['polite', 'equal', 'quiet', 'strong'], 0, 'rude ↔ polite'],
    ['“Don’t make fun ___ others.” (놀리다)', ['at', 'of', 'to', 'with'], 1, 'make fun of'],
    ['“You can’t take ___ your words.” (취소하다)', ['over', 'back', 'away', 'down'], 1, 'take back'],
    ['기억 여부를 묻는 표현은?', ['I’m sorry for that.', 'Apology accepted.', 'That’s okay with me.', 'Do you remember it?'], 3, 'Do you remember ~?'],
    ['사과에 대한 대답으로 알맞은 것은?', ['I remember.', 'I apologize.', 'Don’t worry about it.', 'Do you remember my name?'], 2, 'That’s okay. / Don’t worry about it.'],
    ['Let’s Watch에서 할아버지의 선생님이 쓴 말은?', ['“너를 믿는다.”', '“공부를 열심히 해라.”', '“선생님이 되어라.”', '“편지를 간직해라.”'], 0, '“Don’t give up. I believe in you.”'],
    ['빈칸에 알맞은 것은? “Do you know where ___?”', ['he lives', 'does he live', 'lives he', 'he live'], 0, '의문사 + 주어 + 동사'],
    ['빈칸에 알맞은 것은? “I wonder ___ it is true.”', ['that', 'what', 'if', 'where'], 2, '의문사가 없는 질문: if / whether'],
    ['빈칸에 알맞은 것은? “This is the place ___ we met.”', ['when', 'why', 'which', 'where'], 3, '장소 + where'],
    ['어법상 틀린 문장은?', ['I know why he left.', 'This is how I study.', 'Tell me what you want to do.', 'This is the way how I swim.'], 3, 'the way와 how는 함께 쓰지 않는다.'],
    ['다은이가 쪽지를 넣어 둔 곳은?', ['필통', '사물함', '일기장', '교과서'], 0, 'in her pencil case'],
    ['킹 목사의 연설이 열린 곳은?', ['백악관', '링컨 기념관', '뉴욕 센트럴 파크', '학교 강당'], 1, 'at the Lincoln Memorial'],
    ['‘친절의 벽’에 붙인 것은?', ['규칙', '반 친구들 사진', '익명의 칭찬', '못된 댓글'], 2, 'anonymous compliments'],
    ['글의 요지로 가장 알맞은 것은?', ['연설을 잘해야 한다', '쪽지는 익명이어야 한다', '온라인에는 댓글을 쓰지 말아야 한다', '말은 사람을 바꿀 힘이 있다'], 3, 'they all changed someone']
  ]
};
