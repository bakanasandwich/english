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
      {no: 1, ready: true, sample: true, title: 'Find Your Spark', ko: '나만의 불꽃 찾기', talk: ['관심 묻고 답하기', '계획 묻고 답하기'], grammar: ['to부정사 (명사적 용법)', '동명사'], read: '학교 신문 인터뷰 기사'},
      {no: 2, ready: false, title: ''},
      {no: 3, ready: false, title: ''},
      {no: 4, ready: false, title: ''},
      {no: 5, ready: false, title: ''},
      {no: 6, ready: false, title: ''},
      {no: 7, ready: false, title: ''},
      {no: 8, ready: false, title: ''}
    ]}
];
