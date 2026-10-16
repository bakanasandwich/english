/* 연습실: 차시마다 하나의 탭 (주소 끝 #words #talk #grammar #read)
   단원 자료(window.LESSON)만 바꾸면 다른 단원에도 그대로 쓰입니다. */
(() => {
  const L = window.LESSON, E = window.EN, esc = E.esc, $ = s => document.querySelector(s);
  const main = $('#main'), side = $('#side');
  const plain = s => String(s).replace(/\{\{(.+?)\}\}/g, '$1');
  const TABS = [['words', '1차시 어휘'], ['talk', '2차시 대화문'], ['grammar', '3차시 문법'], ['read', '4·5차시 본문']];
  const SPK = (L.talk && L.talk.speakers) || {};
  const COLORS = ['#2a56c6', '#c8402b', '#2e8a50', '#7d45b8', '#c06a1a'];
  const cmap = {}; let ci = 0; const colorOf = n => cmap[n] || (cmap[n] = COLORS[ci++ % COLORS.length]);
  let tab = 'words', mode = {}, cleanup = null;

  $('#tabs').innerHTML = TABS.map(([k, t]) => `<button type="button" role="tab" data-tab="${k}">${t}</button>`).join('');
  $('#tabs').onclick = e => { const b = e.target.closest('[data-tab]'); if (b) go(b.dataset.tab); };
  addEventListener('DOMContentLoaded', () => { const r = $('#rate'); if (r) E.rateControl(r); });
  function go(t, m) {
    if (cleanup) { cleanup(); cleanup = null; } E.stop();
    tab = TABS.some(x => x[0] === t) ? t : 'words';
    if (m) mode[tab] = m;
    document.querySelectorAll('#tabs button').forEach(b => b.setAttribute('aria-selected', b.dataset.tab === tab));
    history.replaceState(null, '', '#' + tab);
    ({words: Words, talk: Talk, grammar: Grammar, read: Read})[tab]();
  }
  const modeBar = (list, cur, f) => `<div class="modes" role="group">${list.map(([k, t]) => `<button type="button" data-mode="${k}" aria-pressed="${k === cur}">${t}</button>`).join('')}</div>`;
  function bindModes(f) { main.querySelectorAll('[data-mode]').forEach(b => b.onclick = () => { mode[tab] = b.dataset.mode; f(); }); }
  const stats = arr => `<div class="stats">${arr.map(([v, k]) => `<div><b>${v}</b><span>${k}</span></div>`).join('')}</div>`;

  /* ═════ 1. 어휘 ═════ */
  const W = L.vocab.words.concat(L.vocab.phrases.map(p => ({...p, pos: 'phrase', ic: '🧩'})));
  const known = new Set(JSON.parse(E.store.get(`known-${L.book}-${L.no}`) || '[]'));
  const saveKnown = () => E.store.set(`known-${L.book}-${L.no}`, JSON.stringify([...known]));
  function Words() {
    const m = mode.words || 'card';
    const head = modeBar([['card', '낱말 카드'], ['listen', '듣고 뜻 고르기'], ['spell', '듣고 철자 쓰기']], m);
    const listSide = () => { side.innerHTML = `<h2>낱말 목록</h2><p class="help">카드에서 ‘알아요’를 누른 낱말에 ✓가 붙어요. 이 기기에 저장돼요.</p>
      ${stats([[`${[...known].filter(w => W.some(x => x.w === w)).length} / ${W.length}`, '아는 낱말'], [W.length - L.vocab.phrases.length, '낱말'], [L.vocab.phrases.length, '덩어리 표현'], ['', '']].slice(0, 3))}
      <div class="wlist">${W.map(w => `<div><i class="${known.has(w.w) ? 'ok' : ''}">${known.has(w.w) ? '✓' : '·'}</i>${E.sayBtn(w.w)}<span><b>${esc(w.w)}</b> <span class="muted">${esc(w.ko)}</span></span></div>`).join('')}</div>
      <div class="actions"><button type="button" class="btn" id="reset">기록 지우기</button></div>`;
      $('#reset').onclick = () => { known.clear(); saveKnown(); Words(); }; };
    if (m === 'card') {
      let deck = E.shuffle(W.filter(w => !known.has(w.w))); if (!deck.length) deck = E.shuffle(W);
      let i = 0;
      const draw = () => {
        const w = deck[i];
        main.innerHTML = head + `<div class="muted" style="font-size:14px">${i + 1} / ${deck.length} · 카드를 누르면 뒤집혀요</div>
          <div class="flash"><div class="fc" id="fc"><div class="face"><div class="ic">${w.ic || ''}</div><div class="w en">${esc(w.w)}</div><div class="pos">${esc(w.pos)}</div></div>
          <div class="face back"><div class="m">${esc(w.ko)}</div><div class="ex en">${esc(w.ex)}</div><div class="exk">${esc(w.exKo)}</div></div></div></div>
          <div class="actions" style="justify-content:center">${E.sayBtn(w.w)}<button type="button" class="btn big-btn" id="no">아직 몰라요</button><button type="button" class="btn primary big-btn" id="yes">알아요</button><button type="button" class="btn big-btn" id="ex">예문 듣기</button></div>`;
        bindModes(Words);
        $('#fc').onclick = () => $('#fc').classList.toggle('flip');
        $('#ex').onclick = () => E.say(w.ex);
        const nx = ok => { ok ? known.add(w.w) : known.delete(w.w); saveKnown(); i++; if (i >= deck.length) { main.innerHTML = head + `<div class="endcard"><div class="muted">한 바퀴 끝!</div><b>${[...known].length} / ${W.length}</b><div>아는 낱말</div><div class="actions" style="justify-content:center"><button class="btn primary big-btn" id="again">모르는 것만 다시</button></div></div>`; bindModes(Words); $('#again').onclick = Words; listSide(); return; } draw(); listSide(); };
        $('#yes').onclick = () => nx(true); $('#no').onclick = () => nx(false);
        setTimeout(() => E.say(w.w), 200);
      };
      draw(); listSide();
    } else if (m === 'listen' || m === 'spell') {
      const qs = E.shuffle(W).slice(0, 10); let i = 0, score = 0;
      const draw = () => {
        if (i >= qs.length) { main.innerHTML = head + `<div class="endcard"><div class="muted">10문제 끝!</div><b>${score} / 10</b><div class="actions" style="justify-content:center"><button class="btn primary big-btn" id="again">다시 하기</button></div></div>`; bindModes(Words); $('#again').onclick = Words; return; }
        const w = qs[i];
        if (m === 'listen') {
          const opts = E.shuffle([w].concat(E.shuffle(W.filter(x => x !== w)).slice(0, 3)));
          main.innerHTML = head + `<div class="muted" style="font-size:14px">${i + 1} / ${qs.length} · 점수 ${score}</div><div class="prompt">${E.sayBtn(w.w, '다시 듣기')}<div class="muted" style="margin-top:8px">들은 낱말의 뜻은?</div></div>
            <div class="choice">${opts.map(o => `<button type="button" data-k="${esc(o.w)}">${esc(o.ko)}</button>`).join('')}</div><div class="feedback" id="fb"></div>`;
          bindModes(Words);
          main.querySelectorAll('.choice button').forEach(b => b.onclick = () => {
            if (main.querySelector('.choice .right')) return;
            const ok = b.dataset.k === w.w; if (ok) score++;
            main.querySelectorAll('.choice button').forEach(x => { if (x.dataset.k === w.w) x.classList.add('right'); });
            if (!ok) b.classList.add('wrong');
            $('#fb').className = 'feedback ' + (ok ? 'ok' : 'no'); $('#fb').textContent = (ok ? '맞아요! ' : '아쉬워요. ') + `${w.w} = ${w.ko}`;
            setTimeout(() => { i++; draw(); }, ok ? 900 : 1800);
          });
        } else {
          main.innerHTML = head + `<div class="muted" style="font-size:14px">${i + 1} / ${qs.length} · 점수 ${score}</div><div class="prompt">${E.sayBtn(w.w, '다시 듣기')}<div class="k">${esc(w.ko)}</div><div class="muted">${w.w.length}글자${/ /.test(w.w) ? ' (띄어쓰기 포함)' : ''} · 첫 글자 ${esc(w.w[0])}</div></div>
            <form class="typein" id="tf"><input id="ti" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="철자 입력"><button class="btn primary big-btn">확인</button></form><div class="feedback" id="fb"></div>`;
          bindModes(Words); $('#ti').focus();
          let tries = 0;
          $('#tf').onsubmit = e => { e.preventDefault(); const v = E.norm($('#ti').value), ok = v === E.norm(w.w); tries++;
            $('#ti').className = ok ? 'right' : 'wrong';
            if (ok || tries >= 2) { if (ok && tries === 1) score++; $('#fb').className = 'feedback ' + (ok ? 'ok' : 'no'); $('#fb').textContent = ok ? '정확해요!' : `정답: ${w.w}`; setTimeout(() => { i++; draw(); }, ok ? 800 : 1800); }
            else { $('#fb').className = 'feedback no'; $('#fb').textContent = '한 번 더! 다시 들어 보세요.'; E.say(w.w, {rate: .7}); } };
        }
        setTimeout(() => E.say(w.w), 250);
      };
      draw();
      side.innerHTML = `<h2>${m === 'listen' ? '듣고 뜻 고르기' : '듣고 철자 쓰기'}</h2><p class="help">${m === 'listen' ? '스피커를 누르면 다시 들려요. 10문제를 풀어요.' : '두 번까지 쓸 수 있어요. 틀리면 천천히 다시 읽어 줘요.'}</p>
        <div class="wlist">${W.map(w => `<div>${E.sayBtn(w.w)}<span><b>${esc(w.w)}</b> <span class="muted">${esc(w.ko)}</span></span></div>`).join('')}</div>`;
    }
  }

  /* ═════ 2. 대화문 ═════ */
  const DLG = [];
  L.talk.sets.forEach(s => s.dialogs.forEach(d => DLG.push({label: `${s.label} · ${d.title}`, func: s.func, setting: d.setting, lines: d.lines})));
  DLG.push({label: `${L.talk.watch.label} · ${L.talk.watch.title}`, func: '', setting: L.talk.watch.setting, lines: L.talk.watch.lines});
  let dIdx = 0, seq = null;
  function Talk() {
    const m = mode.talk || 'listen', D = DLG[dIdx];
    const roles = [...new Set(D.lines.map(l => l.s))];
    const head = modeBar([['listen', '듣고 따라 하기'], ['role', '역할 연기'], ['fill', '핵심 표현 쓰기']], m) +
      `<select class="dsel" id="dsel" aria-label="대화 고르기">${DLG.map((d, i) => `<option value="${i}"${i === dIdx ? ' selected' : ''}>${esc(d.label)}${d.func ? ' — ' + esc(d.func) : ''}</option>`).join('')}</select><p class="dsetting">${esc(D.setting || '')}</p>`;
    const kx = (s, inputs) => esc(s).replace(/\{\{(.+?)\}\}/g, (x, a) => inputs ? `<input data-a="${esc(a)}" aria-label="빈칸" autocomplete="off" spellcheck="false">` : `<span class="kx">${a}</span>`);
    const lineHTML = (l, i, inputs) => `<div class="dl" data-i="${i}"><span class="who" style="background:${colorOf(l.s)}">${esc(l.s)}</span><span class="en">${kx(l.en, inputs)}<span class="ko">${esc(l.ko)}</span></span>${E.sayBtn(plain(l.en))}</div>`;
    const stopSeq = () => { if (seq) { seq.cancel(); seq = null; } main.querySelectorAll('.dl.cur').forEach(x => x.classList.remove('cur')); };
    cleanup = stopSeq;
    const playFrom = (lines, rows, onLine, done) => { stopSeq(); seq = E.sequence(lines.map((l, i) => ({text: plain(l.en), voice: (SPK[l.s] || {}).voice || 0, pitch: (SPK[l.s] || {}).pitch, before: () => { rows.forEach((r, k) => r.classList.toggle('cur', k === i)); onLine && onLine(i); }})), () => { rows.forEach(r => r.classList.remove('cur')); done && done(); }); };
    if (m === 'listen') {
      main.innerHTML = head + `<div class="dlines" id="dl">${D.lines.map((l, i) => lineHTML(l, i)).join('')}</div>
        <div class="actions"><button type="button" class="btn primary big-btn" id="all">▶ 전체 듣기</button><button type="button" class="btn" id="tk" aria-pressed="false">해석 숨기기</button><button type="button" class="btn" id="hk" aria-pressed="false">핵심 표현 가리기</button></div>`;
      const rows = [...main.querySelectorAll('.dl')];
      $('#all').onclick = () => playFrom(D.lines, rows);
      $('#tk').onclick = e => { const on = main.classList.toggle('hidek'); e.target.setAttribute('aria-pressed', on); };
      $('#hk').onclick = e => { const on = main.classList.toggle('hidekey'); e.target.setAttribute('aria-pressed', on); main.querySelectorAll('.kx').forEach(k => k.classList.remove('shown')); };
      main.querySelectorAll('.kx').forEach(k => k.onclick = () => k.classList.toggle('shown'));
    } else if (m === 'role') {
      const me = mode.role && roles.includes(mode.role) ? mode.role : roles[0];
      main.innerHTML = head + `<div class="modes">${roles.map(r => `<button type="button" data-role="${esc(r)}" aria-pressed="${r === me}">내 역할: ${esc(r)}</button>`).join('')}</div>
        <div class="dlines" id="dl">${D.lines.map((l, i) => l.s === me ? `<div class="dl me" data-i="${i}"><span class="who" style="background:${colorOf(l.s)}">${esc(l.s)} (나)</span><span class="en muted">내 차례 — 소리 내어 말해요<span class="ko">${esc(l.ko)}</span></span><span></span></div>` : lineHTML(l, i)).join('')}</div>
        <div class="myturn" id="mt" hidden></div>
        <div class="actions"><button type="button" class="btn primary big-btn" id="start">▶ 시작</button></div>`;
      main.querySelectorAll('[data-role]').forEach(b => b.onclick = () => { mode.role = b.dataset.role; Talk(); });
      const rows = [...main.querySelectorAll('.dl')]; let k = 0;
      const step = () => {
        if (k >= D.lines.length) { $('#mt').hidden = false; $('#mt').innerHTML = '<b>끝!</b>역할을 바꿔서 한 번 더 해 보세요.'; rows.forEach(r => r.classList.remove('cur')); $('#start').textContent = '↺ 처음부터'; $('#start').onclick = () => Talk(); return; }
        const l = D.lines[k]; rows.forEach((r, j) => r.classList.toggle('cur', j === k));
        if (l.s === me) {
          $('#mt').hidden = false; $('#mt').innerHTML = `<b>내 차례</b>${esc(l.ko)}<br><span class="muted">영어로 말한 뒤 ‘다음’을 누르면 정답 문장이 나오고 들려요.</span>`;
          $('#start').textContent = '다음 ▶'; $('#start').onclick = () => { rows[k].querySelector('.en').innerHTML = `${esc(plain(l.en))}<span class="ko">${esc(l.ko)}</span>`; rows[k].querySelector('.en').classList.remove('muted');
            E.say(plain(l.en), {voice: (SPK[l.s] || {}).voice, onend: () => { k++; step(); }}); $('#start').onclick = null; };
        } else { $('#mt').hidden = true; E.say(plain(l.en), {voice: (SPK[l.s] || {}).voice || 0, pitch: (SPK[l.s] || {}).pitch, onend: () => { k++; setTimeout(step, 200); }}); }
      };
      $('#start').onclick = () => { k = 0; step(); };
    } else {
      main.innerHTML = head + `<div class="dlines" id="dl">${D.lines.map((l, i) => lineHTML(l, i, true)).join('')}</div><div class="feedback" id="fb"></div>
        <div class="actions"><button type="button" class="btn primary big-btn" id="chk">채점하기</button><button type="button" class="btn" id="ans">정답 보기</button><button type="button" class="btn" id="all">▶ 전체 듣기</button></div>`;
      const ins = [...main.querySelectorAll('input[data-a]')];
      $('#chk').onclick = () => { let ok = 0; ins.forEach(i => { const r = E.norm(i.value) === E.norm(i.dataset.a); i.className = r ? 'right' : 'wrong'; if (r) ok++; }); $('#fb').className = 'feedback ' + (ok === ins.length ? 'ok' : 'no'); $('#fb').textContent = `${ok} / ${ins.length} 맞았어요` + (ok === ins.length ? ' — 완벽해요!' : ''); };
      $('#ans').onclick = () => ins.forEach(i => { i.value = i.dataset.a; i.className = ''; });
      const rows = [...main.querySelectorAll('.dl')]; $('#all').onclick = () => playFrom(D.lines, rows);
      if (!ins.length) $('#fb').textContent = '이 대화에는 빈칸이 없어요. 다른 대화를 골라 보세요.';
    }
    bindModes(Talk);
    $('#dsel').onchange = e => { dIdx = +e.target.value; Talk(); };
    const set = L.talk.sets.find(s => D.label.startsWith(s.label));
    side.innerHTML = set ? `<h2>${esc(set.label)} · ${esc(set.func)}</h2><p class="help">${esc(set.note)}</p>
      <h2 style="font-size:14px;color:var(--muted)">묻기</h2>${set.key.q.map(q => `<p class="en" style="margin:6px 0;display:flex;gap:8px;align-items:center">${E.sayBtn(q.replace(/~/g, 'something'))}${esc(q)}</p>`).join('')}
      <h2 style="font-size:14px;color:var(--muted);margin-top:14px">답하기</h2>${set.key.a.map(q => `<p class="en" style="margin:6px 0;display:flex;gap:8px;align-items:center">${E.sayBtn(q.replace(/~/g, 'something').replace('-ing', 'doing'))}${esc(q)}</p>`).join('')}`
      : `<h2>${esc(L.talk.watch.label)}</h2><p class="help">질문을 먼저 읽고 들어요.</p>${L.talk.watch.check.map((c, i) => `<details style="margin:8px 0"><summary class="en">${i + 1}. ${esc(c.q)}</summary><p class="en" style="color:var(--hot);margin:6px 0 0">${esc(c.a)}</p></details>`).join('')}`;
  }

  /* ═════ 3. 문법 ═════ */
  function Grammar() {
    const m = mode.grammar || 'build';
    const head = modeBar([['build', '문장 만들기'], ['sort', 'to? -ing?'], ['fix', '형태 바꾸기']], m);
    const G = L.grammar.points;
    side.innerHTML = G.map(g => `<h2>${esc(g.name)}</h2><p class="help"><b class="en">${esc(g.form)}</b> = ${esc(g.meaning)}</p>${g.rule.map(r => `<p style="margin:4px 0 10px;font-size:14px"><b style="color:var(--gram)">${esc(r.k)}</b> <span class="en">${esc(r.v)}</span><br><span class="muted en">${esc(r.ex)}</span></p>`).join('')}`).join('<hr style="border:0;border-top:1px solid var(--line);margin:16px 0">');
    if (m === 'build') {
      const items = E.shuffle(G.flatMap(g => g.scramble.map(s => ({...s, g: g.short}))).concat(E.shuffle(L.vocab.words.filter(w => /\b(to [a-z]+|[a-z]+ing)\b/.test(w.ex) && w.ex.split(' ').length >= 5)).slice(0, 4).map(w => ({ko: w.exKo, en: w.ex, g: '어휘 예문'}))));
      let i = 0, score = 0;
      const draw = () => {
        if (i >= items.length) { main.innerHTML = head + `<div class="endcard"><div class="muted">모두 끝!</div><b>${score} / ${items.length}</b><div class="muted">한 번에 맞힌 문장</div><div class="actions" style="justify-content:center"><button class="btn primary big-btn" id="again">다시 하기</button></div></div>`; bindModes(Grammar); $('#again').onclick = Grammar; return; }
        const it = items[i], words = it.en.replace(/[.?!]$/, '').split(' '), end = (it.en.match(/[.?!]$/) || [''])[0];
        let tries = 0;
        main.innerHTML = head + `<div class="muted" style="font-size:14px">${i + 1} / ${items.length} · ${esc(it.g)}</div><div class="ko-q">${esc(it.ko)}<small>낱말 조각을 순서대로 눌러 문장을 만들어요. 놓은 조각을 누르면 되돌아가요.</small></div>
          <div class="target" id="tg" aria-label="만든 문장"></div><div class="tiles" id="tl">${E.shuffle(words.map((w, k) => ({w, k}))).map(t => `<button type="button" class="tile en" data-w="${esc(t.w)}">${esc(t.w)}</button>`).join('')}</div>
          <div class="feedback" id="fb"></div><div class="actions"><button type="button" class="btn primary big-btn" id="chk">확인</button><button type="button" class="btn" id="skip">정답 보고 넘어가기</button></div>`;
        bindModes(Grammar);
        const tg = $('#tg'), tl = $('#tl');
        main.querySelectorAll('.tile').forEach(b => b.onclick = () => { (b.parentNode === tl ? tg : tl).appendChild(b); tg.className = 'target'; });
        $('#chk').onclick = () => {
          const got = [...tg.children].map(b => b.dataset.w).join(' ');
          const ok = got === words.join(' '); tries++;
          tg.className = 'target ' + (ok ? 'right' : 'wrong');
          if (ok) { if (tries === 1) score++; $('#fb').className = 'feedback ok'; $('#fb').textContent = '정확해요! ' + it.en; E.say(it.en, {onend: () => { i++; draw(); }}); }
          else { $('#fb').className = 'feedback no'; $('#fb').textContent = tl.children.length ? '아직 남은 조각이 있어요.' : '순서를 다시 살펴봐요. 동사 뒤의 모양(to / -ing)을 확인!'; }
        };
        $('#skip').onclick = () => { $('#fb').className = 'feedback no'; $('#fb').textContent = '정답: ' + it.en + end; setTimeout(() => { i++; draw(); }, 2200); };
      };
      draw();
    } else if (m === 'sort') {
      const cmp = (G.find(g => g.compare) || {}).compare;
      if (!cmp) { main.innerHTML = head + '<p class="muted">이 단원에는 분류 활동이 없어요.</p>'; bindModes(Grammar); return; }
      const items = E.shuffle(cmp.cols.flatMap((c, k) => c.map(v => ({v, k}))));
      let i = 0, score = 0;
      const draw = () => {
        if (i >= items.length) { main.innerHTML = head + `<div class="endcard"><b>${score} / ${items.length}</b><div class="actions" style="justify-content:center"><button class="btn primary big-btn" id="again">다시 하기</button></div></div>`; bindModes(Grammar); $('#again').onclick = Grammar; return; }
        const it = items[i];
        main.innerHTML = head + `<div class="muted" style="font-size:14px">${i + 1} / ${items.length} · 점수 ${score}</div><div class="verb en">${esc(it.v)}</div><p class="muted" style="text-align:center;margin:0">이 동사 뒤에는 무엇이 올까?</p>
          <div class="sort3">${cmp.head.map((h, k) => `<button type="button" data-k="${k}">${esc(h)}</button>`).join('')}</div><div class="feedback" id="fb" style="text-align:center"></div>`;
        bindModes(Grammar);
        main.querySelectorAll('.sort3 button').forEach(b => b.onclick = () => {
          if (main.querySelector('.sort3 .right')) return;
          const ok = +b.dataset.k === it.k; if (ok) score++;
          main.querySelectorAll('.sort3 button')[it.k].classList.add('right'); if (!ok) b.classList.add('wrong');
          $('#fb').className = 'feedback ' + (ok ? 'ok' : 'no'); $('#fb').textContent = ok ? '맞아요!' : `${it.v} → ${cmp.head[it.k]}`;
          setTimeout(() => { i++; draw(); }, ok ? 700 : 1600);
        });
      };
      draw();
    } else {
      const items = E.shuffle(G.flatMap(g => g.check.map(c => ({...c, g: g.short}))));
      main.innerHTML = head + `<p class="muted" style="margin-top:0">괄호 속 동사를 알맞은 형태로 바꿔 빈칸을 채워요.</p><div class="dlines">${items.map((c, i) => `<div class="dl" style="grid-template-columns:28px 1fr"><b class="muted">${i + 1}</b><span class="en">${esc(c.q).replace('____', `<input data-a="${esc(c.a)}" aria-label="빈칸 ${i + 1}" autocomplete="off" spellcheck="false">`)}</span></div>`).join('')}</div>
        <div class="feedback" id="fb"></div><div class="actions"><button type="button" class="btn primary big-btn" id="chk">채점하기</button><button type="button" class="btn" id="ans">정답 보기</button></div>`;
      bindModes(Grammar);
      const ins = [...main.querySelectorAll('input')];
      $('#chk').onclick = () => { let ok = 0; ins.forEach(i => { const r = E.norm(i.value) === E.norm(i.dataset.a); i.className = r ? 'right' : 'wrong'; if (r) ok++; }); $('#fb').className = 'feedback ' + (ok === ins.length ? 'ok' : 'no'); $('#fb').textContent = `${ok} / ${ins.length}`; };
      $('#ans').onclick = () => ins.forEach(i => { i.value = i.dataset.a; i.className = ''; });
    }
  }

  /* ═════ 4. 본문 ═════ */
  const R = L.reading;
  const gk = Object.keys(R.gloss).sort((a, b) => b.length - a.length);
  const glossify = s => { let h = esc(s); gk.forEach(k => { const re = new RegExp(`(^|[^A-Za-z>])(${k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})(?=[^A-Za-z]|$)`, 'i'); h = h.replace(re, (m, p, w) => `${p}<span class="gl" data-g="${esc(R.gloss[k])}">${w}</span>`); }); return h; };
  const sentences = t => t.match(/[^.!?]+[.!?]+["”’]?(\s|$)|[^.!?]+$/g).map(s => s.trim()).filter(Boolean);
  function Read() {
    const m = mode.read || 'along';
    const head = modeBar([['along', '들으며 읽기'], ['order', '문장 순서'], ['tf', 'T / F'], ['sum', '요약 빈칸']], m);
    side.innerHTML = `<h2>${esc(R.title)}</h2><p class="help">${esc(R.kind)} · 문장을 누르면 그 문장만 들려요. 점선 낱말 위에 손가락(마우스)을 올리면 뜻이 보여요.</p>
      <h2 style="font-size:14px;color:var(--muted)">낱말 풀이</h2><div class="wlist">${Object.entries(R.gloss).map(([k, v]) => `<div><span><b class="en">${esc(k)}</b> <span class="muted">${esc(v)}</span></span></div>`).join('')}</div>`;
    if (m === 'along') {
      let sid = 0;
      main.innerHTML = head + `<div class="reader" id="rd">${R.paras.map((p, pi) => `<p>${p.who ? `<span class="who">${esc(p.who)}</span>` : ''}${sentences(p.en).map(s => `<span class="sn en" data-s="${sid++}">${glossify(s)}</span> `).join('')}<span class="tr">${esc(p.ko)}</span></p>`).join('')}</div>
        <div class="actions"><button type="button" class="btn primary big-btn" id="all">▶ 처음부터 듣기</button><button type="button" class="btn" id="stop">■ 멈춤</button><button type="button" class="btn" id="tr" aria-pressed="false">해석 보기</button></div>`;
      bindModes(Read);
      const sn = [...main.querySelectorAll('.sn')];
      let sq = null; const stopS = () => { if (sq) sq.cancel(); sq = null; sn.forEach(x => x.classList.remove('cur')); }; cleanup = stopS;
      const playFrom = k => { stopS(); sq = E.sequence(sn.slice(k).map((s, j) => ({text: s.textContent, before: () => { sn.forEach(x => x.classList.remove('cur')); s.classList.add('cur'); s.scrollIntoView({block: 'nearest', behavior: 'smooth'}); }})), stopS); };
      sn.forEach((s, k) => s.onclick = e => { if (e.target.closest('.gl')) return; stopS(); s.classList.add('cur'); E.say(s.textContent, {onend: () => s.classList.remove('cur')}); });
      $('#all').onclick = () => playFrom(0); $('#stop').onclick = stopS;
      $('#tr').onclick = e => { const on = main.classList.toggle('showtr'); e.target.setAttribute('aria-pressed', on); };
      let box = null;
      main.querySelectorAll('.gl').forEach(g => { const showG = () => { box = box || document.body.appendChild(Object.assign(document.createElement('div'), {className: 'glbox'})); box.textContent = g.dataset.g; const r = g.getBoundingClientRect(); box.style.left = Math.min(innerWidth - 160, r.left) + 'px'; box.style.top = (r.top - 36) + 'px'; box.hidden = false; };
        g.onmouseenter = showG; g.onmouseleave = () => box && (box.hidden = true); g.onclick = e => { e.stopPropagation(); showG(); E.say(g.textContent); setTimeout(() => box && (box.hidden = true), 1600); }; });
    } else if (m === 'order') {
      const ps = R.paras.filter(p => sentences(p.en).length >= 3);
      let pi = 0;
      const draw = () => {
        const p = ps[pi], ss = sentences(p.en), sh = E.shuffle(ss.map((s, k) => ({s, k}))); let got = [];
        main.innerHTML = head + `<div class="muted" style="font-size:14px">${pi + 1} / ${ps.length} 문단${p.who ? ' · ' + esc(p.who) : ''} · 처음 문장부터 차례로 눌러요</div>
          <div class="target" id="tg" style="flex-direction:column;align-items:stretch;font-family:'Noto Serif KR',serif;font-size:17px"></div>
          <div class="olist" id="ol" style="margin-top:14px">${sh.map(x => `<button type="button" data-k="${x.k}" class="en"><b></b>${esc(x.s)}</button>`).join('')}</div><div class="feedback" id="fb"></div>
          <div class="actions"><button type="button" class="btn" id="undo">하나 되돌리기</button><button type="button" class="btn primary" id="nx" hidden>다음 문단 ▶</button></div>`;
        bindModes(Read);
        const tg = $('#tg');
        const paint = () => { tg.innerHTML = got.map(k => `<div class="en">${esc(ss[k])}</div>`).join(''); main.querySelectorAll('#ol button').forEach(b => { const ix = got.indexOf(+b.dataset.k); b.classList.toggle('done', ix >= 0); b.querySelector('b').textContent = ix >= 0 ? ix + 1 : ''; });
          if (got.length === ss.length) { const ok = got.every((k, i) => k === i); tg.className = 'target ' + (ok ? 'right' : 'wrong'); $('#fb').className = 'feedback ' + (ok ? 'ok' : 'no'); $('#fb').textContent = ok ? '맞아요! 연결어(But, Then, Now…)가 순서의 단서예요.' : '순서가 달라요. 되돌려서 다시 해 봐요.'; if (ok) { $('#nx').hidden = false; E.say(p.en); } } else { tg.className = 'target'; $('#fb').textContent = ''; } };
        main.querySelectorAll('#ol button').forEach(b => b.onclick = () => { if (got.includes(+b.dataset.k)) return; got.push(+b.dataset.k); paint(); });
        $('#undo').onclick = () => { got.pop(); paint(); };
        $('#nx').onclick = () => { pi = (pi + 1) % ps.length; draw(); };
      };
      draw();
    } else if (m === 'tf') {
      const items = E.shuffle(R.tf); let i = 0, score = 0;
      const draw = () => {
        if (i >= items.length) { main.innerHTML = head + `<div class="endcard"><b>${score} / ${items.length}</b><div class="actions" style="justify-content:center"><button class="btn primary big-btn" id="again">다시 하기</button></div></div>`; bindModes(Read); $('#again').onclick = Read; return; }
        const t = items[i];
        main.innerHTML = head + `<div class="muted" style="font-size:14px">${i + 1} / ${items.length} · 점수 ${score}</div><div class="tfq en">${esc(t.s)} ${E.sayBtn(t.s)}</div>
          <div class="tfbtn"><button type="button" data-v="1">TRUE</button><button type="button" data-v="0">FALSE</button></div><div class="feedback" id="fb"></div>`;
        bindModes(Read);
        main.querySelectorAll('.tfbtn button').forEach(b => b.onclick = () => {
          if (main.querySelector('.tfbtn .right')) return;
          const ok = (b.dataset.v === '1') === t.a; if (ok) score++;
          main.querySelector(`.tfbtn [data-v="${t.a ? 1 : 0}"]`).classList.add('right'); if (!ok) b.classList.add('wrong');
          $('#fb').className = 'feedback ' + (ok ? 'ok' : 'no'); $('#fb').textContent = (ok ? '맞아요! ' : '아쉬워요. ') + (t.why || '');
          setTimeout(() => { i++; draw(); }, t.why ? 2000 : 900);
        });
      };
      draw();
    } else {
      const parts = R.summary.text.split(/\{\{(.+?)\}\}/);
      const bank = E.shuffle(parts.filter((x, k) => k % 2));
      main.innerHTML = head + `<p class="muted" style="margin-top:0">글 전체를 요약한 문단이에요. 아래 낱말에서 골라 빈칸을 채워요.</p>
        <div class="chips" style="margin-bottom:14px">${bank.map(b => `<span class="chip en" style="font-size:15px;padding:4px 10px">${esc(b)}</span>`).join('')}</div>
        <div class="reader en">${parts.map((x, k) => k % 2 ? `<input data-a="${esc(x)}" aria-label="빈칸" style="font:inherit;width:7.5em;border:0;border-bottom:2px solid var(--read);background:transparent;color:var(--ink)" autocomplete="off" spellcheck="false">` : esc(x)).join('')}</div>
        <div class="feedback" id="fb"></div><div class="actions"><button type="button" class="btn primary big-btn" id="chk">채점하기</button><button type="button" class="btn" id="ans">정답 보기</button></div>`;
      bindModes(Read);
      const ins = [...main.querySelectorAll('input')];
      $('#chk').onclick = () => { let ok = 0; ins.forEach(i => { const r = E.norm(i.value) === E.norm(i.dataset.a); i.style.borderColor = r ? 'var(--ok)' : 'var(--hot)'; if (r) ok++; }); $('#fb').className = 'feedback ' + (ok === ins.length ? 'ok' : 'no'); $('#fb').textContent = `${ok} / ${ins.length}`; };
      $('#ans').onclick = () => ins.forEach(i => { i.value = i.dataset.a; });
    }
  }

  document.title = `연습실 · Lesson ${L.no} ${L.title} · ${SITE.name}`;
  $('#title').textContent = `${L.title} 연습실`;
  $('#eyebrow').innerHTML = `<span class="dot"></span>Lesson ${L.no} · ${esc(L.ko)} <span class="chip">${L.sample ? '시범 단원' : '교과서 단원'}</span>`;
  const h = location.hash.slice(1); go(h || 'words');
  addEventListener('hashchange', () => { const t = location.hash.slice(1); if (t && t !== tab) go(t); });
})();
