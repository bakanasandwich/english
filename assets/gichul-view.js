/* 기출 탭: 단원(window.LESSON)과 연결한 실제 기출 문항(window.GICHUL)을 차시별로 보여 줍니다.
   문항 원문은 싣지 않습니다(학력평가 자료는 EBSi 외 재배포 금지, 수능은 한국교육과정평가원 저작물).
   소재 요약·단원과의 연결·짧은 인용·핵심 어휘만 싣고, 원문은 공식 PDF 링크로 엽니다. */
(() => {
  const E = window.EN, esc = E.esc, L = window.LESSON, G = window.GICHUL || {items: [], practice: []}, X = window.EXAMS || {};
  const $ = s => document.querySelector(s);
  const TABS = [
    {k: 'all', name: '전체'}, {k: 'vocab', name: '1차시 어휘'}, {k: 'talk', name: '2차시 대화문 · 듣기'},
    {k: 'grammar', name: '3차시 문법 · 어법'}, {k: 'read', name: '4·5차시 본문 · 독해'}, {k: 'practice', name: '기출 유형으로 다시 풀기'}
  ];
  const PC = {vocab: 'var(--word)', talk: 'var(--talk)', grammar: 'var(--gram)', read: 'var(--read)'};
  const PN = {vocab: '어휘', talk: '대화문', grammar: '문법', read: '본문'};
  const gname = k => { const p = ((L.grammar || {}).points || []).find(p => p.id === k); return p ? p.short || p.name : ''; };
  const kindCls = e => (X[e] || {}).kind === '수능' ? 'k-csat' : 'k-' + ((X[e] || {}).kind || '').replace('월', '');
  let tab = (location.hash.slice(1) && TABS.some(t => t.k === location.hash.slice(1))) ? location.hash.slice(1) : 'all';

  document.title = `기출 · Lesson ${L.no} ${L.title} · ${SITE.name}`;
  $('#eyebrow').textContent = `Lesson ${L.no} · ${L.title}`;
  const exams = [...new Set(G.items.map(i => i.e))].sort();
  $('#intro').innerHTML = `${esc(G.intro || '')}<br><span class="muted">대상 시험: ${exams.map(e => esc((X[e] || {}).short || e)).join(' · ')} · 문항 ${G.items.length}개</span>`;

  function card(it) {
    const x = X[it.e] || {}, url = (x.links || {})[it.p === 'talk' && it.no <= 17 ? 'scr' : 'mun'];
    return `<article class="card gq" data-p="${it.p}">
      <header><span class="exam ${kindCls(it.e)}">${esc(x.short || it.e)}</span><b class="no">${it.no}번</b><span class="ty">${esc(it.type)}${it.pts === 3 ? ' · 3점' : ''}</span>
        <span class="per" style="--c:${PC[it.p]}">${PN[it.p]}${it.g ? ' · ' + esc(gname(it.g)) : ''}</span></header>
      <div class="body">
        <p class="topic"><b>소재</b>${esc(it.topic)}</p>
        <p class="why"><b>단원 연결</b>${esc(it.why)}</p>
        ${it.quote ? `<blockquote class="en">${esc(it.quote)} ${E.sayBtn(it.quote.replace(/[①②③④⑤]/g, ''))}</blockquote>` : ''}
        ${(it.words || []).length ? `<div class="words">${it.words.map(([w, m]) => `<span><b class="en">${esc(w)}</b> ${esc(m)}</span>`).join('')}</div>` : ''}
        <details class="key"><summary>정답${it.key ? '과 핵심' : ''} 보기</summary><p><b class="ans">정답 ${'①②③④⑤'[it.ans - 1] || '-'}</b>${it.key ? ' · ' + esc(it.key) : ''}</p></details>
      </div>
      <footer>${url ? `<a class="btn" href="${esc(url)}" target="_blank" rel="noopener">${it.no <= 17 ? '듣기 대본' : '문제지'} PDF</a>` : ''}${it.no <= 17 && (x.links || {}).mun ? `<a class="btn" href="${esc(x.links.mun)}" target="_blank" rel="noopener">문제지 PDF</a>` : ''}${(x.links || {}).hsj ? `<a class="btn" href="${esc(x.links.hsj)}" target="_blank" rel="noopener">정답·해설 PDF</a>` : ''}
        <span class="src">${esc(x.label || '')} ${it.no}번</span></footer></article>`;
  }
  function practice(q, i) {
    const C = '①②③④⑤';
    return `<article class="card gp" data-i="${i}"><header><span class="per" style="--c:${PC[q.p]}">${PN[q.p]}</span><b>${i + 1}. ${esc(q.stem)}</b><span class="ty">${esc(q.type)} 유형</span></header>
      <div class="body">${q.text ? `<div class="ptext en">${esc(q.text).replace(/\{\{(.+?)\}\}/g, '<u>$1</u>').replace(/\n/g, '<br>')}</div>` : ''}
        ${q.choices ? `<div class="opts">${q.choices.map((c, k) => `<label><input type="radio" name="p${i}" value="${k + 1}"> <span class="en">${C[k]} ${esc(c)}</span></label>`).join('')}</div>`
          : `<div class="opts inline">${[1, 2, 3, 4, 5].map(k => `<label><input type="radio" name="p${i}" value="${k}"> ${C[k - 1]}</label>`).join('')}</div>`}
        <div class="pact"><button type="button" class="btn" data-check="${i}">채점하기</button><span class="res" aria-live="polite"></span></div>
        <div class="exp" hidden><b>정답 ${C[q.ans - 1]}</b> ${esc(q.exp)}</div></div></article>`;
  }
  function render() {
    $('#tabs').innerHTML = TABS.map(t => `<button type="button" role="tab" aria-selected="${t.k === tab}" data-t="${t.k}">${t.name} <small>${t.k === 'all' ? G.items.length : t.k === 'practice' ? (G.practice || []).length : G.items.filter(i => i.p === t.k).length}</small></button>`).join('');
    const list = tab === 'practice' ? null : G.items.filter(i => tab === 'all' || i.p === tab);
    let h = '';
    if (tab === 'all' && G.freq) h += `<section class="card freq"><h2>이 단원 문법, 기출에 얼마나 나왔을까?</h2>${G.freq.map(f => `<div class="fr"><b>${esc(f.name)}</b><div class="bar"><i style="width:${Math.round(f.n / f.of * 100)}%"></i></div><span>최근 ${f.of}회 어법 문항 중 <b>${f.n}회</b></span><small>${esc(f.note || '')}</small></div>`).join('')}</section>`;
    if (list) {
      const groups = tab === 'all' ? ['vocab', 'talk', 'grammar', 'read'] : [tab];
      groups.forEach(g => {
        const its = list.filter(i => i.p === g); if (!its.length) return;
        h += `<h2 class="grp" style="--c:${PC[g]}">${({vocab: '1차시 어휘 — 단원 낱말이 나온 기출', talk: '2차시 대화문 — 같은 의사소통 기능의 듣기 문항', grammar: '3차시 문법 — 같은 문법을 묻는 어법·빈칸 문항', read: '4·5차시 본문 — 소재·주제가 이어지는 독해 문항'})[g]}</h2><div class="glist">${its.map(card).join('')}</div>`;
      });
    } else {
      h += `<p class="muted">실제 기출과 같은 유형으로, 이 단원의 낱말·문법·본문 내용을 넣어 새로 만든 문항입니다.</p><div class="glist one">${(G.practice || []).map(practice).join('')}</div>`;
    }
    $('#list').innerHTML = h || '<p class="muted">연결된 문항이 없습니다.</p>';
  }
  $('#tabs').addEventListener('click', e => { const b = e.target.closest('[data-t]'); if (!b) return; tab = b.dataset.t; history.replaceState(null, '', '#' + tab); render(); });
  $('#list').addEventListener('click', e => {
    const b = e.target.closest('[data-check]'); if (!b) return;
    const i = +b.dataset.check, q = G.practice[i], box = b.closest('.gp');
    const v = box.querySelector(`input[name="p${i}"]:checked`);
    const res = box.querySelector('.res');
    if (!v) { res.textContent = '답을 고르세요.'; return; }
    const ok = +v.value === q.ans;
    res.textContent = ok ? '정답!' : '다시 생각해 보세요.'; res.className = 'res ' + (ok ? 'ok' : 'no');
    box.querySelector('.exp').hidden = false;
  });
  render();
})();
