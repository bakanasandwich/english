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
  const bookShort = `중${(B.grade || '2')[0]} 영어 · ${(B.publisher || '').replace(/\s*\(.*\)/, '')}`;
  const meta = `${bookShort} · Lesson ${L.no} ${L.title} · ${P.n}차시 ${P.name}`;
  document.title = `${P.name} · Lesson ${L.no} ${L.title} · ${SITE.name}`;
  const listHref = `${root}index.html#${L.book}-${L.no}`;

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
    note('학습 목표', '목표를 함께 읽고, 단원 전체를 꿰는 질문(Big Question)을 소개한다. 단원 마지막 본문 차시에서 이 질문에 영어로 답한다.'));
  const coverSlide = (label, bigWord) => add(`<div class="cover"><div class="big" style="font-size:${bigWord.length > 9 ? 120 : bigWord.length > 5 ? 160 : 220}px">${esc(bigWord)}</div>${tag(`Lesson ${L.no} · ${P.n}차시 ${P.name}`)}<h1 class="en">${esc(L.title)}</h1>
    <div class="sub">${esc(L.ko)} · ${esc(label)}</div><div class="road">${roadmap()}</div></div>`,
    note('차시 안내', `이 단원은 어휘 → 대화문 → 문법 → 본문 순서로 진행한다. 오늘은 ${P.n}차시 ${P.name}.`));
  const hookSlide = (h, lbl) => add(`${tag(lbl || 'Warm-up')}<h2>생각 열기</h2><div class="qbox"><div class="q"><b>Q.</b>${esc(h.en)} ${say(h.en)}</div><div class="k">${esc(h.ko)}</div></div>`,
    note('도입 발문', h.note));
  const wrapSlide = w => add(`${tag('Wrap-up')}<h2>정리하기</h2><div class="qbox"><div class="q">${esc(w.en)}</div><div class="k">${esc(w.ko)}</div></div>
    <ul class="b" style="margin-top:34px;font-size:27px"><li class="f">짝에게 읽어 주고, 짝의 문장에서 오늘 배운 표현을 찾아 주기</li><li class="f">연습실에서 오늘 차시 연습 이어 하기</li></ul>`,
    note('정리', '학생 두세 명의 문장을 읽게 하고, 틀린 부분은 다시 말해 주기(recast)로 고쳐 준다.'));

  /* ═════ 1차시 · 어휘 ═════ */
  function buildVocab() {
    const V = L.vocab;
    coverSlide('Words', 'Aa');
    goalsSlide(L.goals.vocab);
    hookSlide(V.hook);
    const ws = V.words;
    for (let i = 0; i < ws.length; i += 4) {
      const g = ws.slice(i, i + 4), part = `${i / 4 + 1} / ${Math.ceil(ws.length / 4)}`;
      add(`${tag(`New Words ${part}`)}<h2>듣고 따라 읽기</h2><div class="wgrid">${g.map(w => `<div class="wcard"><div class="ic" aria-hidden="true">${w.ic || ''}</div>
        <div class="w en">${esc(w.w)} <small>${esc(w.pos)}</small></div>${say(w.w)}<div class="m f">${esc(w.ko)}</div></div>`).join('')}</div>`,
        note('낱말 익히기', '① 스피커 단추로 발음 듣기 → ② 두 번 따라 읽기 → ③ 뜻을 먼저 추측하게 한 뒤 넘겨서 확인.', `<p class="tr">${g.map(w => `<b>${esc(w.w)}</b> ${esc(w.ko)}`).join(' · ')}</p>`));
      add(`${tag(`In Sentences ${part}`)}<h2>문장 속에서 만나기</h2><div class="sents">${g.map((w, k) => {
        const re = new RegExp(`\\b(${w.w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\w*)`, 'i');
        const s = w.ex.replace(re, '{{$1}}');
        return `<div class="row"><span class="n">${k + 1}</span><div class="en">${blank(s)}<span class="k">${esc(w.exKo)}</span></div>${say(w.ex)}</div>`; }).join('')}</div>`,
        note('문장 속 낱말', '한국어 해석을 보고 빈칸 낱말을 말하게 한다. 넘길 때마다 빈칸이 하나씩 채워진다.'));
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
      add(`${tag(`Grammar ${gi + 1} · ${g.name}`)}<h2>${esc(g.name)}</h2><div class="formula en" style="font-size:${g.form.length > 34 ? 32 : g.form.length > 24 ? 38 : 46}px"><em>${esc(g.form)}</em><small>= ${esc(g.meaning)}</small></div>
        <div class="rules">${g.rule.map(r => `<div class="rule f"><b>${esc(r.k)}</b><div class="en">${esc(r.v)}<span class="ex">${esc(r.ex)}</span></div></div>`).join('')}</div>`,
        note('규칙 정리', '자리(목적어·보어·주어)를 기준으로 정리한다. 각 줄의 예문을 함께 읽는다.'));
      add(`${tag(`Grammar ${gi + 1} · Check`)}<h2>알맞은 형태로 바꾸기</h2><div class="sents">${g.check.map((c, k) => `<div class="row"><span class="n">${k + 1}</span><div class="en">${esc(c.q).replace('____', `<span class="bl f"><i>${esc(c.a)}</i></span>`)}</div></div>`).join('')}</div>`,
        note('확인 문제', '괄호 속 동사를 바꾸게 한다. 틀린 학생에게는 앞의 동사(want/enjoy 등)를 다시 보게 한다.'));
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
      note('표지', kind === 'read1' ? '제목과 큰 낱말만 보여 주고 “무엇에 관한 글일까?”를 묻는다.' : '지난 시간 다인의 이야기를 떠올리며 시작한다.'));
  }
  function paraSlide(p, i) {
    const len = p.en.split(' ').length;
    add(`<div class="para"><div><div class="who">${esc(p.who ? p.who.toUpperCase() : 'INTRO')} ${say(p.en, '문단 듣기')}</div><div class="txt${len > 52 ? ' sm' : ''} en">${gloss(p.en)}</div></div>
      <div class="side"><p class="f"><b>CHECK</b>${esc(p.check.q)}</p><p class="f ans">${esc(p.check.a)}</p><p class="f"><b>THINK</b>${esc(p.think)}</p></div></div>`,
      note(`문단 ${i + 1}`, '① 스피커로 듣기 → ② 점선 낱말을 눌러 뜻 확인 → ③ CHECK 질문에 답할 근거 문장 찾기 → ④ THINK는 짝과 이야기.', `<p class="tr">${esc(p.ko)}</p>`));
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
    mine.forEach(x => paraSlide(x.p, x.i));
    const tfs = R.tf.filter(t => t.p != null ? (part === 1 ? t.p < cut : t.p >= cut) : mine.some(x => x.p.who && t.s.startsWith(x.p.who.split(',')[0])));
    if (tfs.length) add(`<div class="center"><div class="eyebrow">TRUE OR FALSE</div><div class="tf">${tfs.map(t => `<div class="en"><span>${esc(t.s)}${t.why ? `<small class="f">${esc(t.why)}</small>` : ''}</span><em class="f ${t.a ? 't' : 'x'}">${t.a ? 'TRUE' : 'FALSE'}</em></div>`).join('')}</div></div>`,
      note('맞는지 틀린지', 'F인 문장은 본문 근거를 찾아 바르게 고쳐 말하게 한다.'));
    if (part === 1 && R.order) add(`<div class="center"><div class="eyebrow">IN ORDER</div><h2 style="font-size:46px;margin-top:14px">일어난 순서대로</h2><div class="order">${R.order.map((o, k) => `<div class="f en"><span>${k + 1}</span>${esc(o)}</div>`).join('')}</div></div>`,
      note('순서', '카드를 섞어 나눠 주고 순서대로 놓게 한 뒤 확인해도 좋다.'));
    if (part === 1) add(`<div class="center"><div class="eyebrow">NEXT</div><h2 style="margin-top:20px">${esc(R.next || '다음 이야기는 어떻게 이어질까?').replace(/\n/g, '<br>')}</h2></div>`, note('다음 시간', '다음 차시 예고.'));
    if (part === 2) {
      (R.key || []).forEach((k, i) => add(`<div class="center"><div class="eyebrow">KEY SENTENCE ${i + 1}</div><div class="keyline en" style="margin-top:28px">${mark(k.en)}</div><div class="keynote f">${esc(k.note)}</div> <div style="margin-top:24px">${say(k.en)}</div></div>`,
        note('핵심 문장', '색칠되는 부분이 3차시 문법과 어떻게 이어지는지 묻는다.' + (k.g ? ` (문법 ${k.g === 'g1' ? '1 · to부정사' : '2 · 동명사'})` : ''))));
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
  document.body.insertAdjacentHTML('afterbegin', `<div class="viewport"><div class="stage" id="stage">${S.map((s, i) => `<section class="s ${s.cls}" data-i="${i}" aria-label="${i + 1}번째 장">${s.html}${dark ? '' : `<div class="meta"><span>${esc(meta)}</span><span class="pg">${i + 1} / ${total}</span></div>`}</section>`).join('')}</div></div>
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
    const fs = frags[i]; step = st === 'all' ? fs.length : Math.max(0, Math.min(fs.length, st || 0));
    fs.forEach((f, k) => f.classList.toggle('shown', k < step));
    document.getElementById('pgn').textContent = `${i + 1} / ${total}`;
    document.getElementById('prog').style.width = `${(i + 1) / total * 100}%`;
    notes.innerHTML = (S[i].note || '<p>메모 없음</p>') + `<p style="margin-top:14px;color:#8a8577;font-size:13px">${i + 1} / ${total}</p>`;
    history.replaceState(null, '', '#' + (i + 1));
  }
  function next() { const fs = frags[cur]; if (step < fs.length) { fs[step++].classList.add('shown'); } else if (cur < total - 1) show(cur + 1, 0); }
  function prev() { if (step > 0) { frags[cur][--step].classList.remove('shown'); } else if (cur > 0) show(cur - 1, 'all'); }

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
