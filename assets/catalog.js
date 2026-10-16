/* 사이트 전체 목차와 설정.
   새 단원을 만들면 lessons의 ready를 true로 바꾸면 메인 화면에 링크가 생깁니다. */
window.SITE = {
  name: '중·고 영어 수업실',
  author: '',                       // 제작자 이름 (모든 페이지 아래에 표시, 비우면 표시 안 함)
  copyright: '',                    // 저작권 문구 (비우면 표시 안 함)
  curriculum: '2022 개정 교육과정',
  note: '교과서 원문은 싣지 않았습니다. 단원 주제·의사소통 기능·언어 형식에 맞춰 새로 쓴 대화문과 읽기 글입니다.'
};

/* 차시 순서: 어휘 → 대화문 → 문법 → 본문(2차시) */
window.PERIODS = [
  {key: 'vocab',   n: 1, name: '어휘',   en: 'Words',      color: 'var(--word)', deck: 'slides1.html', lab: 'words'},
  {key: 'talk',    n: 2, name: '대화문', en: 'Listen & Talk · Let’s Watch', color: 'var(--talk)', deck: 'slides2.html', lab: 'talk'},
  {key: 'grammar', n: 3, name: '문법',   en: 'Grammar',    color: 'var(--gram)', deck: 'slides3.html', lab: 'grammar'},
  {key: 'read1',   n: 4, name: '본문 ①', en: 'Reading 1',  color: 'var(--read)', deck: 'slides4.html', lab: 'read'},
  {key: 'read2',   n: 5, name: '본문 ②', en: 'Reading 2',  color: 'var(--read)', deck: 'slides5.html', lab: 'read'}
];

window.CATALOG = [
  { id: 'm1-donga', school: '중학교', grade: '1학년', book: '영어 1', publisher: '동아출판 (윤정미)', path: 'm1/donga',
    lessons: [
      {no: 1, ready: true, estimate: true, title: 'Happy Together', ko: '함께라서 행복해', talk: ['인사하고 소개하기', '좋아하는 것 묻고 답하기'], grammar: ['be동사', '일반동사'], read: '학급 소개 게시판'},
      {no: 2, ready: true, estimate: true, title: 'Eat, Play, and Live Well!', ko: '잘 먹고, 잘 놀고, 잘 살자!', talk: ['몸 상태 묻고 답하기', '할 수 있는 일 묻고 답하기'], grammar: ['현재진행형', 'can · will'], read: '건강 챌린지 일기'},
      {no: 3, ready: true, estimate: true, title: 'Let\u2019s Be Positive', ko: '긍정적으로 생각하자', talk: ['지난 일 묻고 답하기', '칭찬하고 격려하기'], grammar: ['과거시제', '명령문'], read: '짧은 이야기'},
      {no: 4, ready: true, estimate: true, title: 'The Joy of Traveling', ko: '여행의 즐거움', talk: ['계획 묻고 답하기', '추천하고 까닭 말하기'], grammar: ['동명사', 'be going to'], read: '여행 블로그'},
      {no: 5, ready: true, estimate: true, title: 'Think like Sherlock Holmes!', ko: '셜록 홈스처럼 생각해!', talk: ['추측하여 말하기', '까닭 묻고 답하기'], grammar: ['감각동사', '비교급'], read: '짧은 추리 이야기'},
      {no: 6, ready: true, estimate: true, title: 'Good for the Earth, Good for Us', ko: '지구에 좋은 것이 우리에게도 좋다', talk: ['도움 요청하고 답하기', '금지·주의 표현하기'], grammar: ['should · must', '접속사 when'], read: '학교 소식지 기사'},
      {no: 7, ready: true, estimate: true, title: 'Find Your Dream', ko: '나의 꿈을 찾아서', talk: ['장래 희망 묻고 답하기', '잘하는 것 묻고 답하기'], grammar: ['to부정사', 'because'], read: '학교 신문 기사'},
      {no: 8, ready: true, estimate: true, title: 'Be Smart Online', ko: '온라인에서 똑똑하게', talk: ['허락 구하고 답하기', '동의하고 반대하기'], grammar: ['최상급', 'if (조건)'], read: '정보 안내문'}
    ]},
  { id: 'm2-donga', school: '중학교', grade: '2학년', book: '영어 2', publisher: '동아출판 (윤정미)', path: 'm2/donga',
    lessons: [
      {no: 1, ready: true, estimate: true, title: 'The Future Is in Our Hands', ko: '미래는 우리 손에', talk: ['걱정 표현하기', '제안하기'], grammar: ['to부정사 (목적)', '조건의 if'], read: '학급 프로젝트 보고서'},
      {no: 2, ready: true, estimate: true, title: 'How Teens Talk Now', ko: '요즘 십대는 어떻게 말할까', talk: ['의미 묻고 설명하기', '의견 묻고 답하기'], grammar: ['접속사 that', '수여동사'], read: '청소년 잡지 기사'},
      {no: 3, ready: true, estimate: true, title: 'What a Great Idea!', ko: '정말 멋진 생각이야!', talk: ['놀람 표현하기', '방법 묻고 설명하기'], grammar: ['감탄문', '주격 관계대명사'], read: '발명 이야기 칼럼'},
      {no: 4, ready: true, estimate: true, title: 'Are You Money Smart?', ko: '나는 돈을 현명하게 쓸까?', talk: ['충고 구하고 하기', '선호 묻고 답하기'], grammar: ['to부정사 (형용사적 용법)', '비교 표현'], read: '돈 관리 상담 칼럼'},
      {no: 5, ready: true, estimate: true, title: 'The City as a Canvas', ko: '도시라는 캔버스', talk: ['감상 묻고 답하기', '길 묻고 안내하기'], grammar: ['목적격 관계대명사', 'used to'], read: '여행 잡지 특집 기사'},
      {no: 6, ready: true, estimate: true, title: 'The Greatest Love for All', ko: '모두를 위한 가장 큰 사랑', talk: ['감사 표현하기', '위로·격려하기'], grammar: ['지각동사 + 목적어 + 동사원형/-ing', 'so ~ that'], read: '단편 이야기'},
      {no: 7, ready: true, estimate: true, title: 'Let\u2019s Enjoy Festivals', ko: '축제를 즐겨요', talk: ['알고 있는지 묻기', '초대하고 답하기'], grammar: ['It ~ to부정사', 'call A B'], read: '세계 축제 소개 기사'},
      {no: 8, ready: true, estimate: true, title: 'Time Travel', ko: '시간 여행', talk: ['경험 묻고 답하기', '기대 표현하기'], grammar: ['현재완료', 'something + 형용사'], read: '단편 이야기 (판타지)'}
    ]},
  { id: 'm3-donga', school: '중학교', grade: '3학년', book: '영어 3 (가안)', publisher: '동아출판 (윤정미)', path: 'm3/donga', draft: true,
    lessons: [
      {no: 1, ready: true, estimate: true, title: 'Be Yourself', ko: '나답게 살기', talk: ['의견 표현하기', '확신 정도 표현하기'], grammar: ['관계대명사 what', '현재완료진행'], read: '청소년 에세이 모음'},
      {no: 2, ready: true, estimate: true, title: 'Science Is All Around', ko: '과학은 어디에나 있다', talk: ['궁금증 표현하기', '설명 요청하고 설명하기'], grammar: ['수동태', 'so that'], read: '과학 잡지 기사'},
      {no: 3, ready: false, title: 'Heroes Among Us', grammar: ['분사', 'too ~ to / enough to']},
      {no: 4, ready: false, title: 'The Power of Words', grammar: ['간접의문문', '관계부사']},
      {no: 5, ready: false, title: 'When Art Meets Technology', grammar: ['가정법 과거', 'I wish + 가정법']},
      {no: 6, ready: false, title: 'Lessons from the Past', grammar: ['과거완료', '분사구문']},
      {no: 7, ready: false, title: 'A Greener Tomorrow', grammar: ['양보의 접속사 although', 'the 비교급, the 비교급']},
      {no: 8, ready: false, title: 'Dream Big, Start Small', grammar: ['관계대명사의 계속적 용법', 'not only A but also B']}
    ]}
];
