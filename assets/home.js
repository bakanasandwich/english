/* 메인 화면: 목차(catalog.js)를 단원 → 차시 → 자료로 보여 줍니다 */
(() => {
  const E = window.EN, esc = E.esc, $ = s => document.querySelector(s);
  const books = window.CATALOG;
  let cur = (E.store.get('book') && books.find(b => b.id === E.store.get('book'))) ? E.store.get('book') : books[0].id;
  const h = location.hash.slice(1); const hb = books.find(b => h.startsWith(b.id)); if (hb) cur = hb.id;
  const PER = window.PERIODS;
  const desc = {vocab: l => '낱말 익히기 · 문장 속 낱말 · 덩어리 표현 · 철자', talk: l => (l.talk || []).join(' · ') + ' · Let’s Watch', grammar: l => (l.grammar || []).join(' · '), read1: l => `${l.read || ''} · 읽기 전 · 앞부분 읽기`, read2: l => '뒷부분 읽기 · 핵심 문장 · 요약 · 나의 생각 쓰기'};
  const labTab = {vocab: 'words', talk: 'talk', grammar: 'grammar', read1: 'read', read2: 'read'};
  function render() {
    E.store.set('book', cur);
    const B = books.find(b => b.id === cur);
    $('#books').innerHTML = books.map(b => `<button type="button" class="btn" aria-pressed="${b.id === cur}" data-b="${b.id}">${esc(b.school)} ${esc(b.grade)} · ${esc(b.book)} <span class="muted" style="font-weight:400">${esc(b.publisher)}</span></button>`).join('') +
      ['중학교 1학년', '중학교 3학년', '고등학교 공통영어'].map(t => `<span class="btn" style="opacity:.5;cursor:default" title="준비 중">${t} · 준비 중</span>`).join('');
    $('#books').querySelectorAll('[data-b]').forEach(b => b.onclick = () => { cur = b.dataset.b; render(); });
    $('#units').innerHTML = B.lessons.map(l => {
      const base = `${B.path}/l${l.no}/`;
      if (!l.ready) return `<section class="card unit soon" id="${B.id}-${l.no}"><header><span class="no">L${l.no}</span><h2>Lesson ${l.no}${l.title ? ' · ' + esc(l.title) : ''}<small>${l.grammar ? esc(l.grammar.join(' · ')) + ' · ' : ''}만드는 중</small></h2><div class="meta"></div></header></section>`;
      return `<section class="card unit" id="${B.id}-${l.no}"><header><span class="no">L${l.no}</span><h2 class="en">${esc(l.title)}<small>${esc(l.ko)}${l.estimate ? ' · 의사소통 기능·문법 일부 추정 (교과서 구성표 확인 전)' : ''}</small></h2>
        <div class="meta">${(l.talk || []).map(t => `<span class="chip">${esc(t)}</span>`).join('')}${(l.grammar || []).map(t => `<span class="chip">${esc(t)}</span>`).join('')}</div></header>
        <div class="rows">${PER.map(p => `<div class="row"><div class="k"><i style="background:${p.color}"></i>${p.n}차시 ${esc(p.name)}</div><div class="t"><b class="en">${esc(p.en)}</b><span>${esc(desc[p.key](l))}</span></div>
          <div class="go"><a class="btn primary" href="${base}${p.deck}">슬라이드</a><a class="btn" href="${base}sim.html#${labTab[p.key]}">연습실</a></div></div>`).join('')}
          <div class="row unitwide"><div class="k"><i style="background:var(--quiz)"></i>단원 자료</div><div class="t"><b>학습지 · 게임 · 골든벨</b><span>A4 학습지 8쪽(정답지 겸용) · 모둠 대결 게임 3종 · 골든벨</span></div>
          <div class="go"><a class="btn" href="${base}worksheet.html">학습지</a><a class="btn" href="${base}game.html">게임</a><a class="btn" href="quiz/bell.html?b=${B.id}&n=${l.no}">골든벨</a></div></div></div></section>`;
    }).join('');
    if (h) { const el = document.getElementById(h); if (el) el.scrollIntoView(); }
  }
  render();
})();
