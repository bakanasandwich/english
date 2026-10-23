/* 사이트 전체 목차와 설정.
   새 단원을 만들면 lessons의 ready를 true로 바꾸면 메인 화면에 링크가 생깁니다. */
window.SITE = {
  name: '중·고 영어 수업실',
  author: '',                       // 제작자 이름 (모든 페이지 아래에 표시, 비우면 표시 안 함)
  copyright: '',                    // 저작권 문구 (비우면 표시 안 함)
  curriculum: '2022 개정 교육과정',
  note: '교과서 원문은 싣지 않았습니다. 단원 주제·의사소통 기능·언어 형식에 맞춰 새로 쓴 대화문과 읽기 글입니다.'
};

/* 차시 순서: 어휘 → 대화문 → 문법 → 본문(2차시)  (고등학교는 단원별 기출 탭이 따로 있음) */
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
      {no: 3, ready: true, estimate: true, title: 'Heroes Among Us', ko: '우리 곁의 영웅', talk: ['소식 전하고 반응하기', '바람·희망 표현하기'], grammar: ['분사', 'too ~ to · enough to'], read: '지역 신문 특집 기사'},
      {no: 4, ready: true, estimate: true, title: 'The Power of Words', ko: '말의 힘', talk: ['기억 여부 묻고 답하기', '사과하고 답하기'], grammar: ['간접의문문', '관계부사'], read: '칼럼'},
      {no: 5, ready: true, estimate: true, title: 'When Art Meets Technology', ko: '예술이 기술을 만날 때', talk: ['의견 묻고 답하기', '바람 표현하기'], grammar: ['가정법 과거', 'I wish'], read: '정보문'},
      {no: 6, ready: true, estimate: true, title: 'Lessons from the Past', ko: '과거에서 배우는 것', talk: ['들어 보았는지 묻고 답하기', '설명 요청하기'], grammar: ['과거완료', '분사구문'], read: '역사 이야기'},
      {no: 7, ready: true, estimate: true, title: 'A Greener Tomorrow', ko: '더 푸른 내일', talk: ['걱정 묻고 표현하기', '제안하고 답하기'], grammar: ['although', 'the 비교급'], read: '정보문'},
      {no: 8, ready: true, estimate: true, title: 'Dream Big, Start Small', ko: '크게 꿈꾸고 작게 시작하라', talk: ['계획 묻고 답하기', '격려하기'], grammar: ['계속적 용법', 'not only ~'], read: '수필'}
    ]},
  { id: 'h1a-donga', school: '고등학교', grade: '1학년', book: '공통영어1', publisher: '동아출판 (이병민)', path: 'h1/donga1', hsEstimate: true,
    lessons: [
      {no: 1, ready: true, gichul: true, title: 'Life Is Experience', ko: '경험이 곧 삶이다', talk: ['경험 묻고 답하기', '감정 묻고 표현하기'], grammar: ['관계대명사 what', '현재완료'], read: '용기에 관한 세 사람의 이야기'},
      {no: 2, ready: true, gichul: true, title: 'Journey Through the Pages', ko: '책장 사이로 떠나는 여행', talk: ['책 추천하고 까닭 말하기', '선호 묻고 답하기'], grammar: ['분사구문', '과거완료'], read: '소설의 첫 문장에 관한 글'},
      {no: 3, ready: true, gichul: true, title: 'Small Things Matter', ko: '작은 것이 중요하다', talk: ['걱정 표현하기', '해결책 제안하기'], grammar: ['수동태', '주어·동사 수일치'], read: '분리배출에 관한 칼럼'},
      {no: 4, ready: true, gichul: true, title: 'Everyday Decisions', ko: '매일의 선택', talk: ['의견 묻고 답하기', '동의·반대 표현하기'], grammar: ['사역·지각동사', 'It ~ that 강조'], read: '소비 심리에 관한 기사'}
    ]},
  { id: 'h1b-donga', school: '고등학교', grade: '1학년', book: '공통영어2', publisher: '동아출판 (이병민)', path: 'h1/donga2', hsEstimate: true,
    lessons: [
      {no: 1, ready: true, gichul: true, title: 'Love Yourself', ko: '너 자신을 사랑하라', talk: ['위로·격려하기', '조언 구하고 하기'], grammar: ['to부정사·동명사 목적어', '가정법'], read: '자기 연민에 관한 글'},
      {no: 2, ready: true, gichul: true, title: 'Beyond Borders', ko: '경계를 넘어', talk: ['계획 묻고 답하기', '기대 표현하기'], grammar: ['관계부사', '명사절 whether·if'], read: '해외 봉사 여름 이야기'},
      {no: 3, ready: true, gichul: true, title: 'Into the Smart Future', ko: '스마트한 미래로', talk: ['가능성 말하기', '확신 정도 표현하기'], grammar: ['조동사 + have p.p.', '도치'], read: '인공지능과 미래 사회'},
      {no: 4, ready: true, gichul: true, title: 'Explore the World of Art', ko: '예술의 세계를 탐험하라', talk: ['감상 묻고 답하기', '묘사하기'], grammar: ['복합관계사', 'with + 명사 + 분사'], read: '미술 작품 감상 에세이'}
    ]}
];
