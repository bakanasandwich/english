/* 단원 게임 (전자칠판에서 두 모둠 대결)
   ① 낱말 짝 맞추기  ② 문장 퍼즐 레이스  ③ 스피드 낱말 퀴즈
   단원 자료(window.LESSON)로 문제를 만듭니다. */
(() => {
  const L = window.LESSON, E = window.EN, esc = E.esc, $ = s => document.querySelector(s);
  const plain = s => String(s).replace(/\{\{(.+?)\}\}/g, '$1');
  const app = $('#app');
  const team = {names: ['A팀', 'B팀'], score: [0, 0], turn: 0};
  let timer = null;
  const stopT = () => { clearInterval(timer); timer = null; };
  const scoreBar = () => `<div class="gscore">${team.names.map((n, i) => `<div class="team t${i}${team.turn === i ? ' turn' : ''}"><span contenteditable="true" spellcheck="false" data-tn="${i}" aria-label="모둠 이름">${esc(n)}</span><b>${team.score[i]}</b></div>`).join('<div class="vs">VS</div>')}</div>`;
  const bindNames = () => app.querySelectorAll('[data-tn]').forEach(s => s.onblur = () => { team.names[+s.dataset.tn] = s.textContent.trim().slice(0, 12) || team.names[+s.dataset.tn]; });
  const add = (i, n) => { team.score[i] += n; const el = app.querySelectorAll('.team b')[i]; if (el) { el.textContent = team.score[i]; el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop'); } };
  const setTurn = i => { team.turn = i; app.querySelectorAll('.team').forEach((t, k) => t.classList.toggle('turn', k === i)); };

  function menu() {
    stopT(); E.stop();
    app.innerHTML = `<div class="gmenu"><div class="eyebrow"><span class="dot"></span>Lesson ${L.no} · ${esc(L.ko)}</div><h1 class="page">${esc(L.title)} 게임</h1>
      <p class="muted" style="margin:-8px 0 20px">두 모둠이 번갈아 하는 칠판 게임이에요. 모둠 이름은 눌러서 바꿀 수 있어요.</p>${scoreBar()}
      <div class="gcards">
        <button type="button" class="gcard" data-g="memory"><span class="gi">🃏</span><b>낱말 짝 맞추기</b><span>영어 낱말과 우리말 뜻을 짝지어요. 맞히면 한 번 더!</span></button>
        <button type="button" class="gcard" data-g="puzzle"><span class="gi">🧩</span><b>문장 퍼즐 레이스</b><span>30초 안에 낱말 조각으로 문장을 완성해요. 빨리 맞힐수록 점수가 커요.</span></button>
        <button type="button" class="gcard" data-g="speed"><span class="gi">⚡</span><b>스피드 낱말 퀴즈</b><span>뜻을 보고 먼저 외친 모둠에게 선생님이 점수를 줘요.</span></button>
      </div><div class="actions" style="justify-content:center"><button type="button" class="btn" id="reset">점수 0으로</button></div></div>`;
    bindNames();
    app.querySelectorAll('[data-g]').forEach(b => b.onclick = () => ({memory, puzzle, speed})[b.dataset.g]());
    $('#reset').onclick = () => { team.score = [0, 0]; menu(); };
  }
  const head = (title, extra) => `<div class="ghead"><button type="button" class="btn" id="back">← 게임 고르기</button><b>${esc(title)}</b><span class="spacer"></span>${extra || ''}</div>${scoreBar()}`;
  const backBind = () => { $('#back').onclick = menu; bindNames(); };
  function finish(title) {
    stopT();
    const [a, b] = team.score, win = a === b ? '무승부!' : `${team.names[a > b ? 0 : 1]} 승리!`;
    app.innerHTML = head(title) + `<div class="gend"><div class="muted">게임 끝</div><b>${esc(win)}</b><div class="actions" style="justify-content:center"><button class="btn primary big-btn" id="again">다시 하기</button><button class="btn big-btn" id="menu2">다른 게임</button></div></div>`;
    backBind(); $('#menu2').onclick = menu; $('#again').onclick = () => ({'낱말 짝 맞추기': memory, '문장 퍼즐 레이스': puzzle, '스피드 낱말 퀴즈': speed})[title]();
  }

  /* ① 낱말 짝 맞추기 */
  function memory() {
    stopT();
    const ws = E.shuffle(L.vocab.words).slice(0, 8);
    const cards = E.shuffle(ws.flatMap((w, i) => [{id: i, t: w.w, en: true}, {id: i, t: w.ko, en: false}]));
    let open = [], lock = false, found = 0;
    app.innerHTML = head('낱말 짝 맞추기', `<span class="muted" id="msg"></span>`) + `<div class="mgrid">${cards.map((c, k) => `<button type="button" class="mc${c.en ? ' en' : ''}" data-k="${k}" aria-label="카드 ${k + 1}"><span class="fr">?</span><span class="bk">${esc(c.t)}</span></button>`).join('')}</div>`;
    backBind();
    const msg = t => { $('#msg').textContent = t; };
    msg(`${team.names[team.turn]} 차례`);
    app.querySelectorAll('.mc').forEach(b => b.onclick = () => {
      const c = cards[+b.dataset.k];
      if (lock || b.classList.contains('open') || b.classList.contains('done')) return;
      b.classList.add('open'); if (c.en) E.say(c.t);
      open.push(b);
      if (open.length < 2) return;
      lock = true;
      const [x, y] = open.map(o => cards[+o.dataset.k]);
      if (x.id === y.id) {
        setTimeout(() => { open.forEach(o => { o.classList.add('done', `d${team.turn}`); }); add(team.turn, 1); found++; open = []; lock = false; msg(`정답! ${team.names[team.turn]} 한 번 더`);
          if (found === ws.length) setTimeout(() => finish('낱말 짝 맞추기'), 700); }, 500);
      } else {
        setTimeout(() => { open.forEach(o => o.classList.remove('open')); open = []; lock = false; setTurn(1 - team.turn); msg(`${team.names[team.turn]} 차례`); }, 1100);
      }
    });
  }

  /* ② 문장 퍼즐 레이스 */
  function puzzle() {
    stopT();
    const pool = L.grammar.points.flatMap(g => g.scramble.map(s => ({ko: s.ko, en: s.en})))
      .concat(L.vocab.words.filter(w => w.ex.split(' ').length >= 5).map(w => ({ko: w.exKo, en: w.ex})));
    const qs = E.shuffle(pool).slice(0, 8); let i = 0;
    const draw = () => {
      if (i >= qs.length) { finish('문장 퍼즐 레이스'); return; }
      const q = qs[i], words = q.en.replace(/[.?!]$/, '').split(' ');
      let left = 30;
      app.innerHTML = head('문장 퍼즐 레이스', `<span class="clock" id="clk">30</span>`) + `<div class="muted" style="text-align:center">${i + 1} / ${qs.length} · <b id="who">${esc(team.names[team.turn])}</b> 도전</div>
        <div class="ko-q" style="text-align:center;font-size:24px;margin:10px 0 16px">${esc(q.ko)}</div><div class="target" id="tg"></div>
        <div class="tiles" id="tl" style="justify-content:center">${E.shuffle(words).map(w => `<button type="button" class="tile en" data-w="${esc(w)}">${esc(w)}</button>`).join('')}</div><div class="feedback" id="fb" style="text-align:center"></div>
        <div class="actions" style="justify-content:center"><button type="button" class="btn primary big-btn" id="chk">완성!</button><button type="button" class="btn big-btn" id="pass">넘기기</button></div>`;
      backBind();
      const tg = $('#tg'), tl = $('#tl');
      app.querySelectorAll('.tile').forEach(b => b.onclick = () => { (b.parentNode === tl ? tg : tl).appendChild(b); tg.className = 'target'; });
      const next = () => { stopT(); i++; setTurn(1 - team.turn); setTimeout(draw, 1600); };
      $('#chk').onclick = () => {
        const ok = [...tg.children].map(b => b.dataset.w).join(' ') === words.join(' ');
        tg.className = 'target ' + (ok ? 'right' : 'wrong');
        if (ok) { const pts = left >= 20 ? 3 : left >= 10 ? 2 : 1; add(team.turn, pts); $('#fb').className = 'feedback ok'; $('#fb').textContent = `+${pts}점! ${q.en}`; E.say(q.en); next(); }
        else { $('#fb').className = 'feedback no'; $('#fb').textContent = '아직이에요! 다시 살펴봐요.'; }
      };
      $('#pass').onclick = () => { $('#fb').className = 'feedback no'; $('#fb').textContent = `정답: ${q.en}`; next(); };
      timer = setInterval(() => { left--; const c = $('#clk'); if (c) { c.textContent = left; c.classList.toggle('hurry', left <= 10); } if (left <= 0) { $('#fb').className = 'feedback no'; $('#fb').textContent = `시간 끝! 정답: ${q.en}`; next(); } }, 1000);
    };
    draw();
  }

  /* ③ 스피드 낱말 퀴즈 */
  function speed() {
    stopT();
    const qs = E.shuffle(L.vocab.words.concat(L.vocab.phrases)).slice(0, 12); let i = 0;
    const draw = () => {
      if (i >= qs.length) { finish('스피드 낱말 퀴즈'); return; }
      const w = qs[i]; let left = 5;
      app.innerHTML = head('스피드 낱말 퀴즈', `<span class="clock" id="clk">5</span>`) + `<div class="muted" style="text-align:center">${i + 1} / ${qs.length} · 뜻을 보고 영어로 먼저 외치세요!</div>
        <div class="speedq">${esc(w.ko)}</div><div class="speeda en" id="sa" hidden>${esc(w.w)}</div>
        <div class="actions" style="justify-content:center"><button type="button" class="btn big-btn" id="show">정답 보기</button>${team.names.map((n, k) => `<button type="button" class="btn big-btn tb t${k}" data-pt="${k}">${esc(n)} +1</button>`).join('')}<button type="button" class="btn big-btn" id="nx">다음 ▶</button></div>`;
      backBind();
      const reveal = () => { stopT(); $('#sa').hidden = false; E.say(w.w); $('#clk').textContent = '!'; };
      $('#show').onclick = reveal;
      app.querySelectorAll('[data-pt]').forEach(b => b.onclick = () => { add(+b.dataset.pt, 1); reveal(); app.querySelectorAll('[data-pt]').forEach(x => x.disabled = true); });
      $('#nx').onclick = () => { stopT(); i++; draw(); };
      timer = setInterval(() => { left--; const c = $('#clk'); if (c) { c.textContent = left; c.classList.toggle('hurry', left <= 2); } if (left <= 0) reveal(); }, 1000);
    };
    draw();
  }

  document.title = `게임 · Lesson ${L.no} ${L.title} · ${SITE.name}`;
  menu();
})();
