/* 수업 슬라이드 엔진
   페이지: <body data-deck="vocab|talk|grammar|read1|read2" data-root="../../../">
   단원 자료(window.LESSON)에서 슬라이드를 만들어 보여 줍니다.
   → / 스페이스 / 클릭: 다음 단계  ← : 이전 단계   N: 교사 메모   O: 전체 보기   F: 전체 화면   P: 인쇄
   주소 끝 #5 → 5장부터 */
(() => {
  const L = window.LESSON, E = window.EN, esc = E.esc;
  const kind = document.body.dataset.deck, root = document.body.dataset.root || '';
  const P = (window.PERIODS || []).find(p => p.key === kind) || {n: '', name: '', en: ''};
  const B = (window.CATALOG || []).find(b => b.id === L.book) || {};
  const dark = kind.startsWith('read');
  document.body.classList.add(dark ? 'deck-dark' : 'deck-light');
  const PC = {vocab: '#2a56c6', talk: '#2e8a50', grammar: '#7d45b8', read1: '#c06a1a', read2: '#c06a1a'}[kind];
  document.documentElement.style.setProperty('--pc', PC);
  const hs = (B.school || '').startsWith('고');
  const bookShort = hs ? `${B.book} · ${(B.publisher || '').replace(/\s*\(.*\)/, '')}` : `중${(B.grade || '2')[0]} 영어 · ${(B.publisher || '').replace(/\s*\(.*\)/, '')}`;
  const meta = `${bookShort} · Lesson ${L.no} ${L.title} · ${P.n}차시 ${P.name}`;
  document.title = `${P.name} · Lesson ${L.no} ${L.title} · ${SITE.name}`;
  const listHref = `${root}index.html#${L.book}-${L.no}`;
  const asset = p => /^(https?:|data:|\/)/.test(p) ? p : root + p;   // 그림·녹음 경로는 사이트 루트 기준

  /* ── 글 도구 ── */
  // {{정답}} → 빈칸(넘기면 정답)
  const blank = s => esc(s).replace(/\{\{(.+?)\}\}/g, (m, a) => `<span class="bl f"><i>${a}</i></span>`);
  // {{표현}} → 넘기면 색이 칠해지는 강조
  const mark = s => esc(s).replace(/\{\{(.+?)\}\}/g, (m, a) => `<span class="mk f">${a}</span>`);
  const plain = s => String(s).replace(/\{\{(.+?)\}\}/g, '$1');
  const say = (t, label) => E.sayBtn(plain(t), label);
  // 본문 낱말 풀이: gloss 목록의 낱말에 점선 밑줄
  const glossKeys = Object.keys((L.reading || {}).gloss || {}).sort((a, b) => b.length - a.length);
  const gloss = s => {
    let h = esc(s);
    glossKeys.forEach(k => {
      const re = new RegExp(`(^|[^A-Za-z>])(${k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})(?=[^A-Za-z]|$)`, 'i');
      h = h.replace(re, (m, pre, w) => `${pre}<span class="gl" data-g="${esc(L.reading.gloss[k])}">${w}</span>`);
    });
    return h;
  };
  const note = (title, ...ps) => `<h4>${esc(title)}</h4>` + ps.filter(Boolean).map(p => p.startsWith('<') ? p : `<p>${p}</p>`).join('');
  const roadmap = () => (window.PERIODS || []).filter(p => p.key !== 'read2').map(p => `<span class="${(p.key === kind || (kind === 'read2' && p.key === 'read1')) ? 'now' : ''}">${p.key === 'read1' ? '본문' : p.name}</span>`).join('<i>→</i>');

  const S = [];   // {html, note, cls}
  const add = (html, n, cls) => S.push({html, note: n || '', cls: cls || ''});
  const tag = t => `<div class="tag">${esc(t)}</div>`;
  const goalsSlide = list => add(`${tag('학습 목표')}<h2>오늘은 이것을 할 수 있어요</h2>
    <ul class="b">${list.map(g => `<li>${esc(g)}</li>`).join('')}</ul>
    <div class="qbox" style="margin-top:40px"><div class="q"><b>Big Question</b>${esc(L.bigQ.en)}</div><div class="k">${esc(L.bigQ.ko)}</div></div>`,
    note('학습 목표', '목표를 함께 읽고, 단원 전체를 꿰는 질문(Big Question)을 소개한다. 단원 마지막 본문 차시에서 이 질문에 영어로 답한다.', stdNote(kind)));
  /* 교과서·교육과정 대조: L.align = {tb: {reading, funcs, forms, note}, std: {vocab|talk|grammar|read1|read2: ['9영01-02', …]}, forms: ['Pronouns', …]}
     성취기준·언어 형식 원문은 assets/curriculum.js(window.CURRICULUM)에서 가져온다 */
  const CUR = window.CURRICULUM || {std: {}, forms: {}};
  const stdNote = k => { const c = ((L.align || {}).std || {})[k] || []; return c.length ? `<h4>관련 성취기준</h4><p class="tr">${c.map(x => `<b>[${esc(x)}]</b> ${esc(CUR.std[x] || '')}`).join('<br>')}</p>` : ''; };
  function alignSlide() {
    const A = L.align; if (!A) return;
    const T = A.tb || {}, all = [...new Set(Object.values(A.std || {}).flat())];
    const formRows = (A.forms || []).map(f => { const key = Object.keys(CUR.forms).find(k => k.replace(/^\d+\.\s*/, '') === f) || f; const ex = (CUR.forms[key] || []).filter(e => e[1] === (hs ? '고' : '중')).slice(0, 2).map(e => e[0]); return `<li><b>${esc(f)}</b>${ex.length ? ` <span class="en">— ${esc(ex.join(' / '))}</span>` : ''}</li>`; }).join('');
    add(`${tag('교과서 · 교육과정')}<h2>이 단원이 맞춘 기준</h2>
      <div class="align"><div><h3>${esc(B.publisher || '교과서')} 단원 구성</h3><ul class="b">
        ${T.funcs ? `<li><b>의사소통 기능</b> ${esc(T.funcs.join(' · '))}</li>` : ''}${T.forms ? `<li><b>언어 형식</b> ${esc(T.forms.join(' · '))}</li>` : ''}${T.reading ? `<li><b>읽기</b> <span class="en">${esc(T.reading)}</span></li>` : ''}</ul>
        ${T.note ? `<p class="k">${esc(T.note)}</p>` : ''}</div>
      <div><h3>2022 개정 교육과정</h3><ul class="b">${all.map(x => `<li><b>[${esc(x)}]</b> ${esc(CUR.std[x] || '')}</li>`).join('')}</ul>
        ${formRows ? `<h3>[별표 4] 언어 형식</h3><ul class="b">${formRows}</ul>` : ''}</div></div>`,
      note('교과서·교육과정 대조', '단원 구성은 교과서 목차(의사소통 기능·언어 형식·읽기 제목)와 대조했다. 대화문·본문은 저작권 때문에 교과서 원문을 싣지 않고, 같은 주제·같은 언어 형식·교과서 어휘로 새로 쓴 글이다.', CUR.source ? `<p>교육과정 출처: ${esc(CUR.source)}</p>` : ''));
  }
  const coverSlide = (label, bigWord) => add(`<div class="cover"><div class="big" style="font-size:${bigWord.length > 9 ? 120 : bigWord.length > 5 ? 160 : 220}px">${esc(bigWord)}</div>${tag(`Lesson ${L.no} · ${P.n}차시 ${P.name}`)}<h1 class="en">${esc(L.title)}</h1>
    <div class="sub">${esc(L.ko)} · ${esc(label)}</div><div class="road">${roadmap()}</div></div>`,
    note('차시 안내', `이 단원은 어휘 → 대화문 → 문법 → 본문 순서로 진행한다. 오늘은 ${P.n}차시 ${P.name}.`));
  const hookSlide = (h, lbl) => add(`${tag(lbl || 'Warm-up')}<h2>생각 열기</h2><div class="qbox"><div class="q"><b>Q.</b>${esc(h.en)} ${say(h.en)}</div><div class="k">${esc(h.ko)}</div></div>`,
    note('도입 발문', h.note));
  const wrapSlide = w => add(`${tag('Wrap-up')}<h2>정리하기</h2><div class="qbox"><div class="q">${esc(w.en)}</div><div class="k">${esc(w.ko)}</div></div>
    <ul class="b" style="margin-top:34px;font-size:27px"><li class="f">짝에게 읽어 주고, 짝의 문장에서 오늘 배운 표현을 찾아 주기</li><li class="f">연습실에서 오늘 차시 연습 이어 하기</li></ul>`,
    note('정리', '학생 두세 명의 문장을 읽게 하고, 틀린 부분은 다시 말해 주기(recast)로 고쳐 준다.'));

  /* ── 모션 그래픽 ──
     넘길 때마다 슬라이드에 st1, st2 … 클래스가 쌓인다(.f 단계 수만큼). 모션 요소는 이 단계에 맞춰 움직인다.
     ticks(n): 단계를 만들기 위한 보이지 않는 조각 */
  const ticks = n => Array.from({length: n}, () => '<i class="f tick" aria-hidden="true"></i>').join('');
  // 낱말 만들기: 어근이 먼저 보이고, 접두사·접미사가 차례로 날아와 붙은 뒤 하나의 낱말로 합쳐진다
  // m = {w, ko, parts: [{t, k: 'pre'|'root'|'suf', m}], family: [...], note}
  const KIND = {pre: '접두사', root: '어근', suf: '접미사'};
  function morphSlide(m, i, n) {
    let at = 0;
    const order = m.parts.map((p, k) => ({p, k})).sort((a, b) => (a.p.k === 'root' ? -1 : 0) - (b.p.k === 'root' ? -1 : 0));
    const when = {}; order.forEach((o, j) => { when[o.k] = o.p.k === 'root' && j === 0 ? 0 : ++at; });
    const merge = at + 1, steps = merge + (m.family && m.family.length ? 1 : 0);
    add(`${tag(`Word Building ${n > 1 ? `${i + 1} / ${n}` : ''}`)}<h2>낱말을 쪼개 보면</h2>
      <div class="morph" data-merge="${merge}">
        <div class="mo-row">${m.parts.map((p, k) => `<div class="mo-part ${p.k}" data-at="${when[k]}" style="--from:${p.k === 'pre' ? -220 : p.k === 'suf' ? 220 : 0}px"><b class="en">${esc(p.t)}</b><small>${KIND[p.k] || ''}</small><span>${esc(p.m || '')}</span></div>`).join('')}</div>
        <div class="mo-word" data-at="${merge}"><b class="en">${esc(m.w)}</b>${say(m.w)}<span>${esc(m.ko)}</span></div>
        ${m.family && m.family.length ? `<div class="mo-fam" data-at="${merge + 1}"><em>같은 뿌리</em>${m.family.map(f => `<span class="en">${esc(f)}</span>`).join('')}</div>` : ''}
      </div>${ticks(steps)}`,
      note('낱말 만들기', '어근의 뜻을 먼저 확인하고, 붙는 조각마다 뜻이 어떻게 바뀌는지 예측하게 한 뒤 넘긴다.', m.note ? `<p>${esc(m.note)}</p>` : '', `<p class="tr">${m.parts.map(p => `<b>${esc(p.t)}</b> ${esc(p.m || '')}`).join(' + ')} = <b>${esc(m.w)}</b> ${esc(m.ko)}</p>`));
  }
  /* 문장 변형: 같은 낱말 조각이 자리를 옮겨 다니는 모습을 보여 준다(FLIP)
     a = {title, states: [{t: 'The chef/S | cooks/V | the pasta/O | .', note, ko}], why}
     조각 끝의 /S /V /O /C /M 은 문장 성분 색, /X 는 새로 생긴 말, /D 는 사라질 말 */
  const ROLE = {S: '주어', V: '동사', O: '목적어', C: '보어', M: '수식어', X: '새로 붙는 말'};
  const parseState = st => {
    const seen = {};
    return st.t.split(/\s*\|\s*/).filter(Boolean).map(raw => {
      if (raw === '/') return {br: true};
      const m = raw.match(/^(.*?)(?:\/([SVOCMXD]))?(?:#(\w+))?$/);
      const text = m[1], role = m[2] || '', base = (m[3] || text.toLowerCase().replace(/[^a-z0-9가-힣' ]/g, '').trim() || text);
      seen[base] = (seen[base] || 0) + 1;
      return {text, role, key: base + (seen[base] > 1 ? '~' + seen[base] : '')};
    });
  };
  function transformSlide(a, label) {
    const states = a.states.map(s => ({...s, toks: parseState(s)}));
    const roles = [...new Set(states.flatMap(s => s.toks.map(t => t.role)).filter(r => r && r !== 'D'))];
    add(`${tag(label || 'Grammar in Motion')}<h2>${esc(a.title || '문장이 바뀌는 모습')}</h2>
      <div class="tfm"><div class="tfm-line en" aria-live="polite"></div><div class="tfm-note"></div>
      ${roles.length ? `<div class="tfm-legend">${roles.map(r => `<span class="r-${r}">${ROLE[r]}</span>`).join('')}</div>` : ''}</div>${ticks(states.length - 1)}`,
      note('움직이는 문법', '넘길 때마다 낱말 조각이 자리를 옮긴다. 움직이기 전에 “무엇이 어디로 갈까?”를 먼저 묻는다.', a.why ? `<p>${esc(a.why)}</p>` : '',
        `<p class="tr">${states.map((s, k) => `${k + 1}. ${esc(s.toks.filter(t => !t.br).map(t => t.text).join(' '))}${s.note ? ` — ${esc(s.note)}` : ''}`).join('<br>')}</p>`));
    S[S.length - 1].tfm = states;
  }
  function drawTransform(sec, states, step, animate) {
    const line = sec.querySelector('.tfm-line'), noteEl = sec.querySelector('.tfm-note');
    const st = states[Math.min(step, states.length - 1)];
    const before = {}, gone = [];
    const scale = sec.getBoundingClientRect().width / sec.offsetWidth || 1;
    if (animate) {
      const lr = line.getBoundingClientRect(), keep = new Set(st.toks.map(t => t.key));
      line.querySelectorAll('[data-k]').forEach(el => {
        const r = el.getBoundingClientRect(); before[el.dataset.k] = r;
        if (!keep.has(el.dataset.k)) gone.push({html: el.outerHTML, x: (r.left - lr.left) / scale, y: (r.top - lr.top) / scale});
      });
    }
    line.innerHTML = st.toks.map(t => t.br ? '<span class="tfm-br"></span>' : `<span class="tok r-${t.role || 'n'}" data-k="${esc(t.key)}">${esc(t.text)}</span>`).join('');
    noteEl.innerHTML = `${st.note ? `<b>${esc(st.note)}</b>` : ''}${st.ko ? `<span>${esc(st.ko)}</span>` : ''}`;
    if (!animate || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gone.forEach(g => {
      line.insertAdjacentHTML('beforeend', g.html); const el = line.lastElementChild;
      el.removeAttribute('data-k'); el.classList.add('ghost'); el.style.left = g.x + 'px'; el.style.top = g.y + 'px';
      el.animate([{opacity: 1, transform: 'none'}, {opacity: 0, transform: 'translateY(40px) scale(.8)'}], {duration: 500, easing: 'ease-in', fill: 'forwards'}).onfinish = () => el.remove();
    });
    line.querySelectorAll('[data-k]').forEach(el => {
      const b = before[el.dataset.k], r = el.getBoundingClientRect();
      if (b) {
        const dx = (b.left - r.left) / scale, dy = (b.top - r.top) / scale;
        if (Math.abs(dx) + Math.abs(dy) < 1) return;
        el.animate([{transform: `translate(${dx}px,${dy}px)`}, {transform: 'none'}], {duration: 700, easing: 'cubic-bezier(.2,.8,.2,1)'});
      } else {
        el.animate([{opacity: 0, transform: 'translateY(-36px) scale(1.3)'}, {opacity: 1, transform: 'none'}], {duration: 600, delay: 250, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'backwards'});
      }
    });
  }

  /* 낱말 카드: 그림(사진 또는 그림 문자) · 발음 기호 · 기계 음성 · 원어민 녹음 */
  const PERSON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="4"/><path d="M2 21c0-4 3-6 7-6s7 2 7 6"/><path d="M18 8a4 4 0 0 1 0 6"/><path d="M20.5 5.5a8 8 0 0 1 0 11"/></svg>';
  const recBtn = w => w.audio ? `<button type="button" class="say rec" data-audio="${esc(asset(w.audio))}" aria-label="원어민 녹음 듣기: ${esc(w.w)}" title="원어민 녹음">${PERSON}</button>` : '';
  const pic = w => w.img ? `<div class="ph"><img src="${esc(asset(w.img.src))}" alt="${esc(w.img.alt || w.w)}" loading="lazy"></div>` : `<div class="ic" aria-hidden="true">${w.ic || ''}</div>`;
  const wordCard = w => `<div class="wcard${w.img ? ' has-ph' : ''}">${pic(w)}<div class="w en">${esc(w.w)} <small>${esc(w.pos)}</small></div><div class="btns">${say(w.w)}${recBtn(w)}</div>
    ${w.ipa ? `<div class="ipa en">${esc(w.ipa)}</div>` : ''}<div class="m f">${esc(w.ko)}</div></div>`;
  const dictLinks = w => `${esc(w)}: <a href="https://dictionary.cambridge.org/dictionary/english/${encodeURIComponent(w.toLowerCase())}" target="_blank" rel="noopener">Cambridge 사전</a> · <a href="https://youglish.com/pronounce/${encodeURIComponent(w)}/english" target="_blank" rel="noopener">YouGlish(실제 영상 속 발음)</a> · <a href="https://en.dict.naver.com/#/search?query=${encodeURIComponent(w)}" target="_blank" rel="noopener">네이버 사전</a>`;
  const audioCredits = ws => { const c = ws.filter(w => w.audioCredit); return c.length ? `<p style="font-size:12px;color:#8a8577">원어민 녹음: ${c.map(w => `${esc(w.w)} — ${esc(w.audioCredit)}`).join(' · ')}</p>` : ''; };
  const credits = imgs => { const c = imgs.filter(i => i && i.credit); return c.length ? `<p style="font-size:12px;color:#8a8577">그림 출처: ${c.map(i => i.link ? `<a href="${esc(i.link)}" target="_blank" rel="noopener">${esc(i.credit)}</a>` : esc(i.credit)).join(' · ')}</p>` : ''; };

  /* ═════ 1차시 · 어휘 ═════ */
  function buildVocab() {
    const V = L.vocab;
    coverSlide('Words', 'Aa');
    goalsSlide(L.goals.vocab);
    alignSlide();
    hookSlide(V.hook);
    const ws = V.words;
    for (let i = 0; i < ws.length; i += 4) {
      const g = ws.slice(i, i + 4), part = `${i / 4 + 1} / ${Math.ceil(ws.length / 4)}`;
      add(`${tag(`New Words ${part}`)}<h2>듣고 따라 읽기</h2><div class="wgrid">${g.map(wordCard).join('')}</div>`,
        note('낱말 익히기', '① 그림을 보고 뜻 짐작하기 → ② 스피커(기계 음성)·사람 단추(원어민 녹음)로 발음 듣기 → ③ 두 번 따라 읽기 → ④ 넘겨서 뜻 확인. 발음 기호의 강세(ˈ)를 손뼉으로 짚어 준다.',
          `<p class="tr">${g.map(w => `<b>${esc(w.w)}</b> ${esc(w.ipa || '')} ${esc(w.ko)}`).join('<br>')}</p>`, `<p>${g.map(w => dictLinks(w.w)).join('<br>')}</p>`, credits(g.map(w => w.img)), audioCredits(g)));
      add(`${tag(`In Sentences ${part}`)}<h2>문장 속에서 만나기</h2><div class="sents">${g.map((w, k) => {
        const re = new RegExp(`\\b(${w.w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\w*)`, 'i');
        const s = w.ex.replace(re, '{{$1}}');
        return `<div class="row"><span class="n">${k + 1}</span><div class="en">${blank(s)}<span class="k">${esc(w.exKo)}</span></div>${say(w.ex)}</div>`; }).join('')}</div>`,
        note('문장 속 낱말', '한국어 해석을 보고 빈칸 낱말을 말하게 한다. 넘길 때마다 빈칸이 하나씩 채워진다.'));
    }
    if (V.morph && V.morph.length) {
      add(`${tag('Word Building')}<h2>조각을 알면 낱말이 보여요</h2><div class="cols three">${[['접두사', 'pre', '낱말 앞에 붙어 뜻을 바꾼다'], ['어근', 'root', '낱말의 중심 뜻'], ['접미사', 'suf', '뒤에 붙어 품사·뜻을 바꾼다']].map(([k, c, d], j) => `<div class="panel mo-key ${c}${j ? ' f' : ''}"><h3>${k}</h3><p>${d}</p></div>`).join('')}</div>`,
        note('낱말 만들기', '영어 낱말의 상당수는 조각(접두사·어근·접미사)의 조합이다. 조각의 뜻을 알면 처음 보는 낱말도 짐작할 수 있다.'));
      V.morph.forEach((m, i) => morphSlide(m, i, V.morph.length));
    }
    const ph = V.phrases;
    for (let i = 0; i < ph.length; i += 3) {
      add(`${tag('Useful Phrases')}<h2>덩어리 표현</h2><div class="sents">${ph.slice(i, i + 3).map((p, k) => `<div class="row"><span class="n">${i + k + 1}</span>
        <div><b class="en" style="font-size:36px">${esc(p.w)}</b> <span class="ans f">${esc(p.ko)}</span><span class="k en">${esc(p.ex)} — ${esc(p.exKo)}</span></div>${say(p.ex)}</div>`).join('')}</div>`,
        note('덩어리 표현', '표현을 낱말 하나하나가 아니라 한 덩어리로 익히게 한다. 예문을 다 같이 읽은 뒤, 표현을 넣어 자기 문장 하나 말하기.'));
    }
    if (V.pairs && V.pairs.length) add(`${tag('Word Partners')}<h2>짝을 이루는 말</h2><div class="relgrid">${V.pairs.map(p => `<div class="en">${esc(p.a)}</div><div class="r">${esc(p.rel)}</div><div class="en bb f">${esc(p.b)}</div>`).join('')}</div>`,
      note('짝을 이루는 말', '왼쪽 낱말을 보고 오른쪽을 먼저 말하게 한다.', V.pairs.filter(p => p.note).map(p => `${esc(p.note)}`).join(' ')));
    const pick = ws.filter((w, i) => i % 3 === 1).slice(0, 6);
    add(`${tag('Quick Check')}<h2>뜻을 보고 영어로</h2><div class="sents" style="display:grid;grid-template-columns:1fr 1fr;gap:22px 40px">${pick.map((w, k) => `<div class="row" style="grid-template-columns:44px 1fr"><span class="n">${k + 1}</span><div>${esc(w.ko)} → <span class="ans en f">${esc(w.w)}</span></div></div>`).join('')}</div>`,
      note('빠른 확인', '모둠별로 화이트보드에 써서 동시에 들게 하면 전원이 참여한다.'));
    const sp = ws.filter((w, i) => i % 3 === 2).slice(0, 6).map(w => {
      const chars = [...w.w]; const hide = chars.map((c, i) => /[a-z]/i.test(c) && i % 2 === 1);
      return `<div><b class="en">${chars.map((c, i) => hide[i] ? `<span class="bl f"><i>${c}</i></span>` : esc(c)).join('')}</b><span>${esc(w.ko)}</span></div>`; });
    add(`${tag('Spelling')}<h2>빠진 글자 채우기</h2><div class="spell">${sp.join('')}</div>`, note('철자', '빈칸이 하나씩 채워진다. 소리 내어 철자를 불러 보게 한다.'));
    wrapSlide(V.wrap);
  }

  /* ═════ 2차시 · 대화문 ═════ */
  const SPK = (L.talk && L.talk.speakers) || {};
  const COLORS = ['#2a56c6', '#c8402b', '#2e8a50', '#7d45b8', '#c06a1a'];
  const colorOf = (() => { const m = {}; let i = 0; return n => m[n] || (m[n] = COLORS[i++ % COLORS.length]); })();
  function chatSlide(tg, title, setting, lines, n) {
    const tight = lines.length > 6 ? ' tight' : '';
    add(`${tag(tg)}<h2 style="margin-bottom:18px">${esc(title)}</h2><div class="chatbar"><button type="button" class="play" data-playall>${E.ICON.say} 전체 듣기</button><span>${esc(setting || '')}</span></div>
      <div class="chat${tight}">${lines.map((l, i) => `<div class="line" data-i="${i}"><span class="who" style="--c:${colorOf(l.s)}" data-say="${esc(plain(l.en))}" data-voice="${(SPK[l.s] || {}).voice || 0}">${esc(l.s)}</span><div class="en">${blank(l.en)}</div></div>`).join('')}</div>`,
      n || note('대화 듣기', '① 빈칸을 가린 채 전체 듣기 → ② 빈칸 표현 추측 → ③ 넘기며 확인 → ④ 역할을 나눠 읽기. 이름표를 누르면 그 줄만 들린다.',
        `<p class="tr">${lines.map(l => `<b>${esc(l.s)}</b> ${esc(l.ko)}`).join('<br>')}</p>`), 'chat-slide');
    S[S.length - 1].lines = lines;
  }
  function checkSlide(tg, items, n) {
    add(`${tag(tg)}<h2>내용 확인</h2><div class="sents">${items.map((c, k) => `<div class="row"><span class="n">Q${k + 1}</span><div class="en">${esc(c.q)}<span class="k ans f" style="font-size:26px;color:var(--hot)">${esc(c.a)}</span></div>${say(c.q)}</div>`).join('')}</div>`,
      n || note('내용 확인', '답을 대화에서 찾아 그대로 읽게 하지 말고, 완전한 문장으로 말하게 한다.'));
  }
  function buildTalk() {
    const T = L.talk;
    coverSlide('Listen & Talk · Let’s Watch', 'Hi!');
    goalsSlide(L.goals.talk);
    hookSlide(T.hook);
    T.sets.forEach(set => {
      add(`${tag(set.label)}<h2>${esc(set.func)}</h2><div class="cols">
        <div class="panel"><h3>묻기</h3>${set.key.q.map((q, i) => `<div class="ex en${i ? ' f' : ''}">${esc(q)} ${say(q)}</div>`).join('')}</div>
        <div class="panel"><h3>답하기</h3>${set.key.a.map((a, i) => `<div class="ex en${i ? ' f' : ''}">${esc(a)} ${say(a.replace(/~/g, 'something').replace('-ing', 'doing'))}</div>`).join('')}</div></div>`,
        note('핵심 표현', set.note));
      set.dialogs.forEach(d => chatSlide(`${set.label} · ${d.title}`, set.func, d.setting, d.lines));
      checkSlide(set.label, set.check);
      if (set.drill) add(`${tag(`${set.label} · Practice`)}<h2>바꿔 말하기</h2><div class="drill en" data-drill>${set.drill.frame.map(f => `<div>${esc(f).replace('____', '<span class="slot">____</span>')}</div>`).join('')}</div>
        <div class="drill-opts">${set.drill.opts.map(o => `<button type="button" data-opt="${esc(o)}">${esc(o)}</button>`).join('')}</div>`,
        note('바꿔 말하기', '낱말을 누르면 빈칸이 바뀌고 문장 전체가 들린다. 짝과 A/B 역할을 바꿔 가며 세 번씩 묻고 답한다.'));
    });
    const W = T.watch;
    add(`${tag(W.label)}<h2 class="en">${esc(W.title)}</h2><div class="qbox" style="border-style:dashed"><div class="k" style="font-size:28px;color:var(--ink)">${esc(W.setting)}</div></div>
      <h3 style="margin-top:34px">보면서 답을 찾아요</h3><ul class="b" style="font-size:28px">${W.check.map(c => `<li class="en">${esc(c.q)}</li>`).join('')}</ul>`,
      note('Let’s Watch', '질문을 먼저 읽고 들으면 집중이 쉽다. 첫 번째는 그냥 듣고, 두 번째는 대화 화면을 보며 듣는다.'));
    chatSlide(W.label, W.title, '', W.lines);
    checkSlide(W.label, W.check);
    wrapSlide(T.wrap);
  }

  /* 원리: 규칙을 외우기 전에 “왜 이런 모양이 생겼는가”를 먼저 이해한다
     g.principle = {q: 질문, core: 한 문장 원리, why: [근거…], pic: {from, to, label}} */
  function principleSlide(g, gi) {
    const P = g.principle;
    add(`${tag(`Grammar ${gi + 1} · Principle`)}<h2>${esc(P.q || '왜 이런 모양일까?')}</h2>
      ${P.pic ? `<div class="pdiag">${P.pic.map((x, k) => `<div class="pbox${x.hot ? ' hot' : ''}"><b class="en">${esc(x.en)}</b><span>${esc(x.ko || '')}</span></div>${k < P.pic.length - 1 ? `<i>${esc(x.arrow || '→')}</i>` : ''}`).join('')}</div>` : ''}
      <div class="pcore f"><em>원리</em>${esc(P.core)}</div>
      ${(P.why || []).length ? `<ul class="b pwhy">${P.why.map(w => `<li class="f">${esc(w)}</li>`).join('')}</ul>` : ''}`,
      note('원리 이해', '공식을 보여 주기 전에 원리를 먼저 묻는다. 학생이 Notice에서 찾은 공통점을 원리 문장과 연결한다.', P.note ? `<p>${esc(P.note)}</p>` : ''));
  }
  // 뜻 비교: 모양이 조금 다르면 뜻이 어떻게 달라지는지 짝지어 본다
  function contrastSlide(c, gi) {
    add(`${tag(`Grammar ${gi + 1} · Contrast`)}<h2>${esc(c.title || '모양이 다르면 뜻도 다르다')}</h2>
      <div class="cpairs">${c.pairs.map(p => `<div class="cpair"><div><div class="en">${mark(p.a)}</div><span class="k f">${esc(p.ka)}</span></div><i>vs</i><div><div class="en">${mark(p.b)}</div><span class="k f">${esc(p.kb)}</span></div></div>`).join('')}</div>
      ${c.point ? `<div class="pcore f" style="margin-top:22px"><em>정리</em>${esc(c.point)}</div>` : ''}`,
      note('뜻 비교', '두 문장의 뜻 차이를 먼저 말해 보게 한 뒤 넘긴다. 차이를 만든 낱말(색칠)에 주목하게 한다.'));
  }

  /* ═════ 3차시 · 문법 ═════ */
  function buildGrammar() {
    const G = L.grammar;
    coverSlide('Grammar', G.cover || 'Gr');
    goalsSlide(L.goals.grammar);
    add(`${tag('Warm-up')}<h2>생각 열기</h2><div class="qbox">${G.hook.en.split(/\s+\/\s+/).map(h => `<div class="q en" style="margin:6px 0">${esc(h).replace(/\{\{(.+?)\}\}|___/g, '<span class="bl"><i></i></span>')}</div>`).join('')}<div class="k">${esc(G.hook.ko)}</div></div>`,
      note('도입 발문', G.hook.note));
    G.points.forEach((g, gi) => {
      add(`${tag(`Grammar ${gi + 1} · Notice`)}<h2>무엇이 보이나요?</h2><div class="sents">${g.notice.map((n, k) => `<div class="row"><span class="n">${k + 1}</span><div class="en">${mark(n.en)}<span class="k">${esc(n.ko)}</span></div>${say(n.en)}</div>`).join('')}</div>
        <div class="qbox f" style="margin-top:26px;padding:18px 28px"><div class="q" style="font-size:30px"><b>Q.</b>색칠된 부분은 어떤 모양이고, 무슨 뜻일까?</div></div>`,
        note('규칙 발견', '규칙을 먼저 말해 주지 않는다. 예문을 읽고 학생이 공통점을 찾게 한 뒤 다음 장에서 정리한다.'));
      if (g.principle) principleSlide(g, gi);
      [].concat(g.anim || []).forEach(a => transformSlide(a, `Grammar ${gi + 1} · In Motion`));
      if (g.contrast) contrastSlide(g.contrast, gi);
      add(`${tag(`Grammar ${gi + 1} · ${g.name}`)}<h2>${esc(g.name)}</h2><div class="formula en" style="font-size:${g.form.length > 34 ? 32 : g.form.length > 24 ? 38 : 46}px"><em>${esc(g.form)}</em><small>= ${esc(g.meaning)}</small></div>
        <div class="rules">${g.rule.map(r => `<div class="rule f"><b>${esc(r.k)}</b><div class="en">${esc(r.v)}<span class="ex">${esc(r.ex)}</span></div></div>`).join('')}</div>`,
        note('규칙 정리', '자리(목적어·보어·주어)를 기준으로 정리한다. 각 줄의 예문을 함께 읽는다.'));
      add(`${tag(`Grammar ${gi + 1} · Check`)}<h2>알맞은 형태로 바꾸기</h2><div class="sents">${g.check.map((c, k) => `<div class="row"><span class="n">${k + 1}</span><div class="en">${esc(c.q).replace('____', `<span class="bl f"><i>${esc(c.a)}</i></span>`)}</div></div>`).join('')}</div>`,
        note('확인 문제', '괄호 속 낱말을 알맞은 형태로 바꾸게 한다. 틀린 학생에게는 원리 장면(왜 이런 모양인가)을 다시 떠올리게 한다.'));
      if (g.compare) add(`${tag(`Grammar ${gi + 1} · Compare`)}<h2>${esc(g.compare.title || '어떻게 구별할까?')}</h2><table class="cmp en"><tr>${g.compare.head.map(h => `<th>${esc(h)}</th>`).join('')}</tr>
        ${g.compare.cols[0].map((_, r) => `<tr>${g.compare.cols.map(c => `<td class="f">${esc(c[r] || '')}</td>`).join('')}</tr>`).join('')}</table>`,
        note('비교', g.compare.note || '열마다 공통점을 찾게 한 뒤 예문을 만들어 보게 한다.'));
      add(`${tag(`Grammar ${gi + 1} · Watch out`)}<h2>이렇게 쓰면 틀려요</h2><div class="trap en"><div class="x"><b>✗</b>${esc(g.trap.bad)}</div><div class="o f"><b>✓</b>${esc(g.trap.good)}</div><div class="why f">${esc(g.trap.why)}</div></div>`,
        note('자주 하는 실수', '틀린 문장을 먼저 보여 주고 어디가 틀렸는지 찾게 한다.'));
      add(`${tag(`Grammar ${gi + 1} · Make it`)}<h2>문장 만들기</h2><div class="scr">${g.scramble.map((s, k) => {
        const words = E.shuffle(s.en.replace(/[.?!]$/, '').split(' ')); return `<div><div class="k">${k + 1}. ${esc(s.ko)}</div><div class="chips en">${words.map(w => `<span>${esc(w)}</span>`).join('')}</div><div class="a en ans f">${esc(s.en)}</div></div>`; }).join('')}</div>`,
        note('배열', '낱말 조각을 순서대로 말해 보게 한 뒤 넘겨서 확인한다. 연습실 ‘문장 만들기’에서 개인 연습으로 이어진다.'));
    });
    if (/\{\{/.test(G.hook.en)) add(`${tag('Warm-up 다시 보기')}<h2>처음 질문의 답</h2><div class="qbox">${G.hook.en.split(/\s+\/\s+/).map(h => `<div class="q en" style="margin:8px 0">${blank(h)}</div>`).join('')}${G.hook.answer ? `<div class="k f">${esc(G.hook.answer)}</div>` : ''}</div>`,
      note('처음 질문으로', '도입에서 미뤄 둔 답을 확인한다.'));
    wrapSlide(G.wrap);
  }

  /* ═════ 4·5차시 · 본문 ═════ */
  function dcover(word, sub) {
    add(`<div class="dcover"><div class="ghost" aria-hidden="true">${esc(word[0] || '')}</div><div class="eyebrow tline">${esc(meta)}</div>
      <div class="word">${esc(word)}</div><div class="sub">${esc(L.reading.title)} · ${esc(sub)}</div></div>`,
      note('표지', kind === 'read1' ? '제목과 큰 낱말, 사진만 보여 주고 “무엇에 관한 글일까?”를 묻는다.' : '지난 시간에 읽은 내용을 떠올리며 시작한다.'), L.reading.coverImg ? 'has-bg' : '');
    S[S.length - 1].bg = kind === 'read2' ? (L.reading.coverImg2 || L.reading.coverImg) : L.reading.coverImg;
  }
  function paraSlide(p, i) {
    const len = p.en.split(' ').length;
    add(`<div class="para"><div><div class="who">${esc(p.who ? p.who.toUpperCase() : 'INTRO')} ${say(p.en, '문단 듣기')}</div><div class="txt${len > 52 ? ' sm' : ''} en">${gloss(p.en)}</div></div>
      <div class="side"><p class="f"><b>CHECK</b>${esc(p.check.q)}</p><p class="f ans">${esc(p.check.a)}</p><p class="f"><b>THINK</b>${esc(p.think)}</p></div></div>`,
      note(`문단 ${i + 1}`, '① 스피커로 듣기 → ② 점선 낱말을 눌러 뜻 확인 → ③ CHECK 질문에 답할 근거 문장 찾기 → ④ THINK는 짝과 이야기.', `<p class="tr">${esc(p.ko)}</p>`, p.bg && p.bg.about ? `<p><b>배경 사진</b> ${esc(p.bg.about)}</p>` : ''), p.bg ? 'has-bg' : '');
    S[S.length - 1].bg = p.bg;
  }
  // 작품 감상: 작품을 크게 보여 주고 1분 “천천히 보기” 타이머를 켠다
  function artSlide(a) {
    add(`<div class="artview"><img src="${esc(asset(a.src))}" alt="${esc(a.title)}"><div class="artcap"><b>${esc(a.title)}</b>${a.credit ? `<span>${esc(a.credit)}</span>` : ''}
      <button type="button" class="timer" data-timer="60" aria-label="1분 천천히 보기 타이머">1:00</button></div></div>`,
      note('천천히 보기 (1분)', '설명을 읽기 전에 1분 동안 작품만 본다. 타이머를 누르면 1분이 줄어든다. 끝나면 “무엇이 먼저 보였나? 왜 그렇게 생각하나?”를 묻는다.'), 'art-slide');
  }
  function buildRead(part) {
    const R = L.reading, cut = R.split, ps = R.paras.map((p, i) => ({p, i}));
    const mine = part === 1 ? ps.slice(0, cut) : ps.slice(cut);
    if (part === 1) {
      dcover(R.cover, R.coverKo);
      add(`<div class="center"><span class="mark">“</span><h2>${esc(L.bigQ.en)}</h2><div class="eyebrow" style="margin-top:18px;letter-spacing:.04em;font-size:24px;font-weight:500;color:#d8d0c2">${esc(L.bigQ.ko)}</div>
        <div class="lad">${R.before.map(b => `<p class="f"><b>BEFORE</b>${esc(b.q)}</p>`).join('')}</div></div>`,
        note('관통 발문', '이 단원 전체를 꿰는 질문. 5차시 마지막에 영어 세 문장으로 답한다.', `<p>${R.before.map(b => `${esc(b.q)} → ${esc(b.a)}`).join('<br>')}</p>`));
    } else {
      dcover(R.cover2 || 'Explore', R.coverKo2 || '계속 탐색하기');
      const rc = R.recap || {q: '지난 시간에 읽은 내용은?', items: []};
      add(`<div class="center"><div class="eyebrow">LAST TIME</div><h2 style="margin-top:20px">${esc(rc.q)}</h2>
        <div class="lad">${rc.items.map(it => `<p class="f"><b>${esc(it.k)}</b>${esc(it.v)}</p>`).join('')}</div></div>`,
        note('지난 시간', '지난 시간에 읽은 내용을 학생이 영어로 말하게 한다.'));
    }
    const words = Object.keys(R.gloss).filter(k => mine.some(x => new RegExp(`\\b${k}`, 'i').test(x.p.en)));
    if (words.length) add(`<div class="center"><div class="eyebrow">KEY WORDS</div><div class="kw">${words.slice(0, 9).map(k => `<div><b class="en">${esc(k)}</b><span class="f">${esc(R.gloss[k])}</span></div>`).join('')}</div></div>`,
      note('미리 보는 낱말', '뜻을 가린 채 발음해 보고, 넘기며 뜻을 확인한다. 본문에서는 점선 낱말을 누르면 뜻이 뜬다.'));
    mine.forEach(x => { if (x.p.art) artSlide(x.p.art); paraSlide(x.p, x.i); });
    const tfs = R.tf.filter(t => t.p != null ? (part === 1 ? t.p < cut : t.p >= cut) : mine.some(x => x.p.who && t.s.startsWith(x.p.who.split(',')[0])));
    if (tfs.length) add(`<div class="center"><div class="eyebrow">TRUE OR FALSE</div><div class="tf">${tfs.map(t => `<div class="en"><span>${esc(t.s)}${t.why ? `<small class="f">${esc(t.why)}</small>` : ''}</span><em class="f ${t.a ? 't' : 'x'}">${t.a ? 'TRUE' : 'FALSE'}</em></div>`).join('')}</div></div>`,
      note('맞는지 틀린지', 'F인 문장은 본문 근거를 찾아 바르게 고쳐 말하게 한다.'));
    if (part === 1 && R.order) add(`<div class="center"><div class="eyebrow">IN ORDER</div><h2 style="font-size:46px;margin-top:14px">일어난 순서대로</h2><div class="order">${R.order.map((o, k) => `<div class="f en"><span>${k + 1}</span>${esc(o)}</div>`).join('')}</div></div>`,
      note('순서', '카드를 섞어 나눠 주고 순서대로 놓게 한 뒤 확인해도 좋다.'));
    if (part === 1) add(`<div class="center"><div class="eyebrow">NEXT</div><h2 style="margin-top:20px">${esc(R.next || '다음 이야기는 어떻게 이어질까?').replace(/\n/g, '<br>')}</h2></div>`, note('다음 시간', '다음 차시 예고.'));
    if (part === 2) {
      (R.key || []).forEach((k, i) => add(`<div class="center"><div class="eyebrow">KEY SENTENCE ${i + 1}</div><div class="keyline en" style="margin-top:28px">${mark(k.en)}</div><div class="keynote f">${esc(k.note)}</div> <div style="margin-top:24px">${say(k.en)}</div></div>`,
        note('핵심 문장', '색칠되는 부분이 3차시 문법과 어떻게 이어지는지 묻는다.' + (k.g ? ` (문법 ${k.g === 'g1' ? 1 : 2} · ${((L.grammar.points.find(p => p.id === k.g) || {}).name) || ''})` : ''))));
      if (R.chart) add(`<div class="center"><div class="eyebrow">${esc(R.chart.title)}</div><div class="trio" style="grid-template-columns:repeat(${R.chart.rows.length},1fr)">${R.chart.rows.map(r => `<div><h3 class="en">${esc(r.name)}</h3>${r.cells.map((c, k) => `<p class="f en"><b>${esc(R.chart.cols[k].toUpperCase())}</b>${esc(c)}</p>`).join('')}</div>`).join('')}</div></div>`,
        note('비교하기', R.chart.note || '공통점과 차이점을 찾게 한다.'));
      add(`<div class="center"><div class="eyebrow">SUMMARY</div><div class="sumtext en" style="margin-top:28px">${blank(R.summary.text)}</div></div>`, note('요약', '빈칸을 먼저 짝과 채운 뒤 하나씩 확인한다.'));
      add(`<div class="center"><span class="mark">“</span><h2>${esc(L.bigQ.en)}</h2><div class="write en">${esc(R.wrap.en).replace(/______/g, '<span class="bl" style="min-width:6em"><i></i></span>')}</div><div class="eyebrow" style="margin-top:26px;letter-spacing:.04em;font-size:22px;font-weight:500;color:#d8d0c2">${esc(R.wrap.ko)}</div></div>`,
        note('관통 질문으로 돌아가기', '1차시부터 배운 낱말, 대화 표현, 문법을 써서 세 문장으로 답하게 한다. 두세 명이 발표한다.'));
    }
  }

  ({vocab: buildVocab, talk: buildTalk, grammar: buildGrammar, read1: () => buildRead(1), read2: () => buildRead(2)})[kind]();

  /* ── 화면 만들기 ── */
  const total = S.length;
  document.body.insertAdjacentHTML('afterbegin', `<div class="viewport"><div class="stage" id="stage">${S.map((s, i) => `<section class="s ${s.cls}" data-i="${i}" aria-label="${i + 1}번째 장"${s.bg ? ` style="--bgimg:url('${esc(asset(s.bg.src))}');--bgpos:${esc(s.bg.pos || 'center')}"` : ''}>${s.bg ? `<div class="bgimg" aria-hidden="true"></div>${s.bg.credit ? `<div class="credit">사진: ${esc(s.bg.credit)}</div>` : ''}` : ''}${s.html}${dark ? '' : `<div class="meta"><span>${esc(meta)}</span><span class="pg">${i + 1} / ${total}</span></div>`}</section>`).join('')}</div></div>
    <aside class="notes" id="notes" aria-live="polite"></aside><div class="overview" id="ov" aria-label="전체 보기"></div>` +
    (dark ? `<div class="dchrome"><a class="home" href="${listHref}">← 목록</a><div class="right"><button type="button" id="bN">발문 메모 (N)</button><button type="button" id="bF">전체 화면 (F)</button></div><div class="pgn" id="pgn"></div></div><div class="dprogress" id="prog"></div>`
      : `<div class="progress" id="prog"></div><nav class="bar"><a href="${listHref}">← 목록</a><span class="t">${esc(meta)}</span>
        <button type="button" id="bP" aria-label="이전">◀</button><span class="pg" id="pgn"></span><button type="button" id="bX" aria-label="다음">▶</button>
        <button type="button" class="opt" id="bO">전체 보기 (O)</button><button type="button" id="bN">메모 (N)</button><button type="button" class="opt" id="bF">전체 화면 (F)</button><button type="button" class="opt" id="bR">인쇄</button></nav>`));
  const stage = document.getElementById('stage'), secs = [...stage.children], notes = document.getElementById('notes'), ov = document.getElementById('ov');
  const frags = secs.map(s => [...s.querySelectorAll('.f')]);
  let cur = 0, step = 0;

  function fit() {
    const W = innerWidth, H = innerHeight - (dark ? 0 : 56), k = Math.min(W / 1280, H / 720) * (dark ? 1 : .97);
    stage.style.transform = `scale(${k})`;
  }
  function show(i, st) {
    i = Math.max(0, Math.min(total - 1, i));
    if (i !== cur) { E.stop(); stopAll(); }
    cur = i; secs.forEach((s, k) => s.classList.toggle('on', k === i));
    autofit(secs[i]);
    const fs = frags[i]; step = st === 'all' ? fs.length : Math.max(0, Math.min(fs.length, st || 0));
    fs.forEach((f, k) => f.classList.toggle('shown', k < step));
    stepped(i, false);
    document.getElementById('pgn').textContent = `${i + 1} / ${total}`;
    document.getElementById('prog').style.width = `${(i + 1) / total * 100}%`;
    notes.innerHTML = (S[i].note || '<p>메모 없음</p>') + `<p style="margin-top:14px;color:#8a8577;font-size:13px">${i + 1} / ${total}</p>`;
    history.replaceState(null, '', '#' + (i + 1));
  }
  /* 내용이 아래 쪽 번호 줄을 넘으면 글자를 조금씩 줄인다 (밝은 슬라이드) */
  function autofit(sec) {
    if (dark || sec.dataset.fit) return; sec.dataset.fit = '1';
    const meta = sec.querySelector('.meta'); if (!meta) return;
    const targets = [...sec.querySelectorAll('.chat,.sents,.rules,.scr,.cols,.drill,.wgrid,.trap,.cmp,.spell,.relgrid')];
    if (!targets.length) return;
    const over = () => { const mt = meta.getBoundingClientRect().top; let mx = 0; [...sec.children].forEach(c => { if (c !== meta && !c.classList.contains('cover')) mx = Math.max(mx, c.getBoundingClientRect().bottom); }); return mx > mt - 6; };
    let k = 1; while (over() && k > .62) { k -= .05; targets.forEach(t => { t.style.zoom = k; }); }
  }
  function next() { const fs = frags[cur]; if (step < fs.length) { fs[step++].classList.add('shown'); stepped(cur, true); } else if (cur < total - 1) show(cur + 1, 0); }
  function prev() { if (step > 0) { frags[cur][--step].classList.remove('shown'); stepped(cur, true); } else if (cur > 0) show(cur - 1, 'all'); }
  /* 단계 표시: st1…stN 클래스(모션 그래픽이 이 단계를 보고 움직인다) */
  function stepped(i, animate) {
    const sec = secs[i];
    for (let k = 1; k <= Math.max(frags[i].length, 1); k++) sec.classList.toggle('st' + k, k <= step);
    if (S[i].tfm) drawTransform(sec, S[i].tfm, step, animate);
  }
  S.forEach((s, i) => { if (s.tfm) drawTransform(secs[i], s.tfm, 0, false); });

  /* 대화 전체 듣기 */
  let playing = null;
  function stopAll() { if (playing) { playing.cancel(); playing = null; } document.querySelectorAll('.play.playing').forEach(b => b.classList.remove('playing')); document.querySelectorAll('.line.cur').forEach(l => l.classList.remove('cur')); }
  stage.addEventListener('click', e => {
    const pa = e.target.closest('[data-playall]');
    if (pa) { e.stopPropagation(); if (pa.classList.contains('playing')) { stopAll(); return; } stopAll();
      const sec = pa.closest('.s'), lines = S[+sec.dataset.i].lines || [], rows = [...sec.querySelectorAll('.line')];
      pa.classList.add('playing');
      playing = E.sequence(lines.map((l, i) => ({text: plain(l.en), voice: (SPK[l.s] || {}).voice || i % 2, pitch: (SPK[l.s] || {}).pitch, before: () => rows.forEach((r, k) => r.classList.toggle('cur', k === i))})), () => stopAll());
      return; }
    const tm = e.target.closest('[data-timer]');
    if (tm) { e.stopPropagation(); if (tm._t) { clearInterval(tm._t); tm._t = null; tm.classList.remove('run'); return; }
      let n = +tm.dataset.timer; tm.classList.add('run');
      tm._t = setInterval(() => { n--; tm.textContent = `${Math.floor(n / 60)}:${String(n % 60).padStart(2, '0')}`; if (n <= 0) { clearInterval(tm._t); tm._t = null; tm.classList.remove('run'); tm.textContent = '끝!'; } }, 1000); return; }
    const au = e.target.closest('[data-audio]');
    if (au) { e.stopPropagation(); E.stop(); const a = new Audio(au.dataset.audio); au.classList.add('playing'); a.onended = a.onerror = () => au.classList.remove('playing'); a.play().catch(() => { au.classList.remove('playing'); E.toast('녹음을 불러오지 못했어요. 인터넷 연결을 확인해 주세요.'); }); return; }
    const op = e.target.closest('[data-opt]');
    if (op) { e.stopPropagation(); const sec = op.closest('.s'); sec.querySelectorAll('[data-opt]').forEach(b => b.classList.toggle('on', b === op));
      sec.querySelectorAll('.slot').forEach(s => s.textContent = op.dataset.opt);
      E.sequence([...sec.querySelectorAll('[data-drill]>div')].map((d, i) => ({text: d.textContent.replace(/^[AB]:\s*/, ''), voice: i}))); return; }
    const g = e.target.closest('.gl');
    if (g) { e.stopPropagation(); const was = g.classList.contains('open'); stage.querySelectorAll('.gl.open').forEach(x => x.classList.remove('open')); if (!was) { g.classList.add('open'); E.say(g.textContent); } return; }
    if (e.target.closest('button,a,input,[data-say]')) return;
    stage.querySelectorAll('.gl.open').forEach(x => x.classList.remove('open'));
    if (dark) { const r = stage.getBoundingClientRect(); if (e.clientX < r.left + r.width * .25) { prev(); return; } }
    next();
  });
  document.addEventListener('click', e => { if (dark && !e.target.closest('.stage,.dchrome,.notes,.overview') && e.target.closest('.viewport')) { e.clientX < innerWidth * .25 ? prev() : next(); } });

  function toggleNotes() { notes.classList.toggle('on'); }
  function full() { if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen && document.documentElement.requestFullscreen().catch(() => {}); }
  function overview() {
    if (ov.classList.toggle('on')) {
      ov.innerHTML = secs.map((s, i) => `<div class="ov${i === cur ? ' cur' : ''}" data-go="${i}"><div class="mini">${s.outerHTML.replace(' on"', '"')}</div><span class="n">${i + 1}</span></div>`).join('');
      const w = ov.querySelector('.ov').offsetWidth; ov.querySelectorAll('.mini').forEach(m => m.style.transform = `scale(${w / 1280})`);
      ov.querySelector('.cur').scrollIntoView({block: 'center'});
    }
  }
  ov.addEventListener('click', e => { const o = e.target.closest('[data-go]'); if (o) { ov.classList.remove('on'); show(+o.dataset.go, 0); } });
  const on = (id, f) => { const b = document.getElementById(id); if (b) b.onclick = e => { e.stopPropagation(); f(); }; };
  on('bN', toggleNotes); on('bF', full); on('bO', overview); on('bP', prev); on('bX', next); on('bR', () => print());
  addEventListener('keydown', e => {
    if (e.target.closest('input,textarea') || e.metaKey || e.ctrlKey || e.altKey) return;
    const k = e.key;
    if (k === 'ArrowRight' || k === ' ' || k === 'PageDown' || k === 'Enter') { e.preventDefault(); if (!ov.classList.contains('on')) next(); }
    else if (k === 'ArrowLeft' || k === 'PageUp' || k === 'Backspace') { e.preventDefault(); prev(); }
    else if (k === 'Home') show(0, 0); else if (k === 'End') show(total - 1, 'all');
    else if (k === 'n' || k === 'N') toggleNotes(); else if (k === 'f' || k === 'F') full();
    else if (k === 'o' || k === 'O' || k === 'Escape') { if (k !== 'Escape' || ov.classList.contains('on')) overview(); }
    else if (k === 'p' || k === 'P') print();
  });
  // 손가락 밀기
  let sx = null; stage.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, {passive: true});
  stage.addEventListener('touchend', e => { if (sx == null) return; const dx = e.changedTouches[0].clientX - sx; sx = null; if (Math.abs(dx) > 60) { dx < 0 ? next() : prev(); } }, {passive: true});
  addEventListener('resize', fit); fit();
  addEventListener('beforeprint', () => secs.forEach(s => s.classList.add('on'))); addEventListener('afterprint', () => show(cur, step));
  const h = parseInt(location.hash.slice(1), 10); show(h ? h - 1 : 0, 0);
  window.DECK = {total, show, next, prev, slides: S};
})();
