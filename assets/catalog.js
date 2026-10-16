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
  { id: 'm2-donga', school: '중학교', grade: '2학년', book: '영어 2', publisher: '동아출판 (윤정미)', path: 'm2/donga',
    lessons: [
      {no: 1, ready: true, estimate: true, title: 'The Future Is in Our Hands', ko: '미래는 우리 손에', talk: ['걱정 표현하기', '제안하기'], grammar: ['to부정사 (목적)', '조건의 if'], read: '학급 프로젝트 보고서'},
      {no: 2, ready: true, estimate: true, title: 'How Teens Talk Now', ko: '요즘 십대는 어떻게 말할까', talk: ['의미 묻고 설명하기', '의견 묻고 답하기'], grammar: ['접속사 that', '수여동사'], read: '청소년 잡지 기사'},
      {no: 3, ready: true, estimate: true, title: 'What a Great Idea!', ko: '정말 멋진 생각이야!', talk: ['놀람 표현하기', '방법 묻고 설명하기'], grammar: ['감탄문', '주격 관계대명사'], read: '발명 이야기 칼럼'},
      {no: 4, ready: false, title: 'Are You Money Smart?'},
      {no: 5, ready: false, title: 'The City as a Canvas', grammar: ['목적격 관계대명사', 'used to']},
      {no: 6, ready: false, title: 'The Greatest Love for All', grammar: ['지각동사 + 목적어 + -ing/동사원형', 'so ~ that']},
      {no: 7, ready: false, title: 'Let\u2019s Enjoy Festivals', grammar: ['It ~ to부정사', 'call A B']},
      {no: 8, ready: false, title: 'Time Travel', grammar: ['현재완료', 'something + 형용사']}
    ]}
];
