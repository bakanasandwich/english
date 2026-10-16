/* 골든벨 · 단원 퀴즈  주소: quiz/bell.html?b=책아이디&n=단원번호
   교사 진행: 칠판에 한 문제씩, 제한 시간 뒤 정답과 해설 / 개인 풀이: 혼자 풀고 점수 확인 */
(() => {
  const E = window.EN, esc = E.esc, $ = s => document.querySelector(s), app = $('#app');
  const q = new URLSearchParams(location.search);
  const B = (window.CATALOG || []).find(b => b.id === q.get('b')) || (window.CATALOG || [])[0];
  const n = parseInt(q.get('n'), 10) || 1;
  const lesson = B && B.lessons.find(l => l.no === n && l.ready);
  if (!lesson) { app.innerHTML = '<p class="muted">아직 준비되지 않은 단원이에요. <a href="../index.html">목록으로</a></p>'; return; }
  const s = document.createElement('script');
  s.src = `../${B.path}/l${n}/data.js`;   // 목차(catalog.js)에 있는 경로만 씀
  s.onload = start; s.onerror = () => { app.innerHTML = '<p class="muted">문항을 불러오지 못했어요.</p>'; };
  document.head.appendChild(s);
  const NUM = ['①', '②', '③', '④', '⑤'];

  function start() {
    const L = window.LESSON, Q = L.quiz;
    document.title = `골든벨 · Lesson ${L.no} ${L.title} · ${SITE.name}`;
    let secs = +(E.store.get('bell-secs') || 15);
    const menu = () => {
      app.innerHTML = `<div class="gmenu"><div class="eyebrow"><span class="dot"></span>Lesson ${L.no} · ${esc(L.ko)}</div><h1 class="page">골든벨 · ${Q.length}문항</h1>
        <p class="muted" style="margin:-8px 0 20px">어휘 → 대화문 → 문법 → 본문 순서로 나와요.</p>
        <div class="gcards" style="grid-template-columns:1fr 1fr;max-width:760px;margin:0 auto 18px">
          <button type="button" class="gcard" data-m="teach"><span class="gi">🔔</span><b>교사 진행 (칠판)</b><span>한 문제씩 띄우고 시간이 끝나면 정답·해설을 보여 줘요. 학생은 화이트보드에 번호를 써서 들어요.</span></button>
          <button type="button" class="gcard" data-m="solo"><span class="gi">✍️</span><b>개인 풀이</b><span>혼자 풀고 바로 채점해요. 끝나면 틀린 문제를 다시 볼 수 있어요.</span></button></div>
        <label class="muted">제한 시간 <select id="secs" class="dsel" style="width:auto;display:inline-block;margin:0 0 0 6px">${[10, 15, 20, 30].map(v => `<option${v === secs ? ' selected' : ''}>${v}</option>`).join('')}</select> 초</label></div>`;
      $('#secs').onchange = e => { secs = +e.target.value; E.store.set('bell-secs', secs); };
      app.querySelectorAll('[data-m]').forEach(b => b.onclick = () => b.dataset.m === 'teach' ? teach() : solo());
    };
    let timer = null; const stopT = () => { clearInterval(timer); timer = null; };
    const card = (i, extra) => { const [qq, opts] = Q[i]; return `<div class="bq"><div class="qn">문제 ${i + 1} / ${Q.length}${extra || ''}</div><h2>${esc(qq)}</h2>
      <div class="bopts">${opts.map((o, k) => `<button type="button" data-k="${k}"><i>${NUM[k]}</i><span class="en">${esc(o)}</span></button>`).join('')}</div><div id="exp"></div></div>`; };
    const showAns = (i, picked) => { const [, , a, ex] = Q[i];
      app.querySelectorAll('.bopts button').forEach((b, k) => { b.classList.toggle('right', k === a); b.classList.toggle('wrong', k === picked && k !== a); if (k !== a && k !== picked) b.classList.add('dim'); b.disabled = true; });
      $('#exp').innerHTML = `<div class="bexp"><b>정답 ${NUM[a]}</b>${esc(ex || '')}</div>`; };

    function teach() {
      let i = 0, alive = '';
      const draw = () => {
        stopT(); if (i >= Q.length) { app.innerHTML = `<div class="gend"><div class="muted">골든벨 끝!</div><b>🔔 ${alive ? esc(alive) + '명 생존' : '수고했어요'}</b><div class="actions" style="justify-content:center"><button class="btn primary big-btn" id="m">처음으로</button></div></div>`; $('#m').onclick = menu; return; }
        let left = secs;
        app.innerHTML = `<div class="bell"><div class="ghead"><button type="button" class="btn" id="back">← 처음</button><span class="spacer"></span><label class="survive">살아남은 학생 <input id="alive" inputmode="numeric" value="${esc(alive)}" aria-label="살아남은 학생 수"> 명</label></div>
          ${card(i, `<span class="clock" id="clk">${left}</span>`)}<div class="actions" style="justify-content:center"><button type="button" class="btn big-btn" id="pause">⏸ 멈춤</button><button type="button" class="btn big-btn" id="rev">정답 보기</button><button type="button" class="btn primary big-btn" id="nx">다음 문제 ▶</button></div></div>`;
        $('#back').onclick = () => { stopT(); menu(); };
        $('#alive').oninput = e => { alive = e.target.value.replace(/\D/g, '').slice(0, 3); };
        const reveal = () => { stopT(); showAns(i); $('#clk').textContent = '!'; };
        $('#rev').onclick = reveal; $('#nx').onclick = () => { i++; draw(); };
        let paused = false; $('#pause').onclick = () => { paused = !paused; $('#pause').textContent = paused ? '▶ 계속' : '⏸ 멈춤'; };
        app.querySelectorAll('.bopts button').forEach(b => b.onclick = () => {});
        timer = setInterval(() => { if (paused) return; left--; const c = $('#clk'); c.textContent = left; c.classList.toggle('hurry', left <= 3); if (left <= 0) reveal(); }, 1000);
      };
      draw();
    }
    function solo() {
      let i = 0, score = 0; const wrong = [];
      const draw = () => {
        if (i >= Q.length) {
          app.innerHTML = `<div class="gend"><div class="muted">${Q.length}문제 끝!</div><b>${score} / ${Q.length}</b>${wrong.length ? `<div class="bell" style="text-align:left;margin-top:20px">${wrong.map(w => `<div class="bexp" style="margin-bottom:8px"><span class="en">${w + 1}. ${esc(Q[w][0])}</span><br><b>${NUM[Q[w][2]]} ${esc(Q[w][1][Q[w][2]])}</b>${esc(Q[w][3] || '')}</div>`).join('')}</div>` : ''}
            <div class="actions" style="justify-content:center"><button class="btn primary big-btn" id="again">다시 풀기</button><button class="btn big-btn" id="m">처음으로</button></div></div>`;
          $('#again').onclick = solo; $('#m').onclick = menu; return; }
        app.innerHTML = `<div class="bell"><div class="ghead"><button type="button" class="btn" id="back">← 처음</button><span class="spacer"></span><b>점수 ${score}</b></div>${card(i)}<div class="actions" style="justify-content:center"><button type="button" class="btn primary big-btn" id="nx" hidden>다음 ▶</button></div></div>`;
        $('#back').onclick = menu;
        app.querySelectorAll('.bopts button').forEach(b => b.onclick = () => { const k = +b.dataset.k; if (k === Q[i][2]) score++; else wrong.push(i); showAns(i, k); $('#nx').hidden = false; $('#nx').focus(); });
        $('#nx').onclick = () => { i++; draw(); };
      };
      draw();
    }
    menu();
  }
})();
