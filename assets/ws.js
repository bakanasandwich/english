/* 학습지: 단원 자료(window.LESSON)로 A4 학습지를 만듭니다.
   [정답 보기]를 켜고 인쇄하면 교사용 정답지가 됩니다. 주소 끝 #3 → 3쪽으로 */
(() => {
  const L = window.LESSON, E = window.EN, esc = E.esc;
  const B = (window.CATALOG || []).find(b => b.id === L.book) || {};
  const plain = s => String(s).replace(/\{\{(.+?)\}\}/g, '$1');
  const blank = s => esc(s).replace(/\{\{(.+?)\}\}/g, (m, a) => `<span class="blank"><i>${a}</i></span>`);
  const bl = a => `<span class="blank"><i>${esc(a)}</i></span>`;
  const line = a => `<div class="line">${a ? `<span class="ans-only en">${esc(a)}</span>` : ''}</div>`;
  const book = `중${(B.grade || '2')[0]} 영어 · ${(B.publisher || '').replace(/\s*\(.*\)/, '')}`;
  // 섞되 매번 같은 순서(인쇄할 때마다 바뀌지 않게)
  const seeded = (arr, seed) => { const a = arr.slice(); let s = seed; for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor(s / 233280 * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pages = [];
  const page = (o) => pages.push(o);
  const sec = (n, title, body, small) => `<section class="sec"><h2><span class="n">${n}</span>${esc(title)}${small ? `<small>${esc(small)}</small>` : ''}</h2>${body}</section>`;
  const PC = {vocab: '#2a56c6', talk: '#2e8a50', grammar: '#7d45b8', read: '#c06a1a'};

  /* 1쪽 · 어휘 */
  const V = L.vocab;
  const half = Math.ceil(V.words.length / 2);
  const wtable = ws => `<table class="t"><tr><th>낱말</th><th style="width:15%">품사</th><th>뜻</th></tr>${ws.map(w => `<tr><td class="w en">${esc(w.w)}</td><td style="text-align:center;color:var(--muted)">${esc(w.pos)}</td><td><span class="ans-only">${esc(w.ko)}</span></td></tr>`).join('')}</table>`;
  const phr = seeded(V.phrases.map((p, i) => ({...p, i})), 7);
  const letters = 'ⓐⓑⓒⓓⓔⓕⓖⓗ';
  const sentPick = V.words.filter((w, i) => i % 3 === 0).slice(0, 6);
  const wordBox = seeded(sentPick.map(w => w.w), 3);
  page({k: 'vocab', period: '1차시 어휘', title: 'Words', sub: '낱말과 덩어리 표현', goal: L.goals.vocab[0], sim: 'words', body:
    sec(1, '낱말의 뜻 쓰기', `<div class="cols2">${wtable(V.words.slice(0, half))}${wtable(V.words.slice(half))}</div>`, '발음을 들으며 뜻을 써 보세요') +
    sec(2, '덩어리 표현 연결하기', `<div class="cols2"><ol class="q en">${V.phrases.map(p => `<li>${esc(p.w)} ( <span class="blank" style="min-width:8mm"><i>${letters[phr.findIndex(x => x.w === p.w)]}</i></span> )</li>`).join('')}</ol>
      <div class="box" style="font-size:9.5pt">${phr.map((p, k) => `<div>${letters[k]} ${esc(p.ko)}</div>`).join('')}</div></div>`) +
    sec(3, '알맞은 낱말 넣기', `<div class="chips en" style="margin-bottom:6px">${wordBox.map(w => `<span>${esc(w)}</span>`).join('')}</div><ol class="q en">${sentPick.map(w => {
      const re = new RegExp(`\\b(${w.w}\\w*)`, 'i'); const m = w.ex.match(re);
      return `<li>${esc(w.ex.replace(re, '\u0000')).replace('\u0000', bl(m ? m[1] : w.w))}<span class="k">${esc(w.exKo)}</span></li>`; }).join('')}</ol>`, '필요하면 모양을 바꿔 쓰기')});

  /* 2쪽 · 대화문 */
  const T = L.talk, s1 = T.sets[0], s2 = T.sets[1];
  const keyBox = s => `<div><h3>${esc(s.label)} · ${esc(s.func)}</h3><p style="font-size:8.5pt;color:var(--muted);margin:0">묻기</p>${s.key.q.map(q => `<p class="en">${esc(q)}</p>`).join('')}<p style="font-size:8.5pt;color:var(--muted);margin:4px 0 0">답하기</p>${s.key.a.map(q => `<p class="en">${esc(q)}</p>`).join('')}</div>`;
  const dlg = d => `<div class="dlg en">${d.lines.map(l => `<b>${esc(l.s)}</b><span>${blank(l.en)}</span>`).join('')}</div>`;
  page({k: 'talk', period: '2차시 대화문', title: 'Listen & Talk', sub: `${s1.func} · ${s2.func}`, goal: L.goals.talk.join(' '), sim: 'talk', body:
    sec(1, '핵심 표현', `<div class="kq">${keyBox(s1)}${keyBox(s2)}</div>`) +
    sec(2, `${s1.label} · 듣고 빈칸 채우기`, `<div class="box">${dlg(s1.dialogs[0])}</div>`, s1.dialogs[0].setting) +
    sec(3, `${s2.label} · 듣고 빈칸 채우기`, `<div class="box">${dlg(s2.dialogs[0])}</div>`, s2.dialogs[0].setting) +
    sec(4, '내용 확인', `<ol class="q en">${s1.check.slice(0, 2).concat(s2.check.slice(0, 1)).map(c => `<li>${esc(c.q)}${line(c.a)}</li>`).join('')}</ol>`, '완전한 영어 문장으로')});

  /* 3쪽 · Let's Watch + 말하기 */
  const W = T.watch, dB = s1.dialogs[1], ordB = seeded(dB.lines.map((l, i) => ({...l, i})), 11);
  page({k: 'talk', period: '2차시 대화문', title: 'Let’s Watch · Speaking', sub: W.title, goal: '대화를 보고 내용을 이해하고, 배운 표현으로 친구와 묻고 답할 수 있다.', sim: 'talk', body:
    sec(1, `${W.label} · ${W.title}`, `<p style="margin:0 0 6px;font-size:9.5pt;color:var(--muted)">${esc(W.setting)}</p><ol class="q en">${W.check.map(c => `<li>${esc(c.q)}${line(c.a)}</li>`).join('')}</ol>`) +
    sec(2, '대화 순서 맞히기', `<p style="margin:0 0 6px;font-size:9.5pt">${esc(s1.label)} ${esc(dB.title)}의 순서를 ( ) 안에 번호로 쓰세요.</p><ol class="q en" style="list-style:none;padding:0">${ordB.map(l => `<li>( <span class="blank" style="min-width:8mm"><i>${l.i + 1}</i></span> ) <b>${esc(l.s)}</b>: ${esc(plain(l.en))}</li>`).join('')}</ol>`) +
    sec(3, '친구 인터뷰', `<table class="t en"><tr><th style="width:18%">Name</th><th>What are you interested in?</th><th>What are you going to do this weekend?</th></tr>${[1, 2, 3].map(() => '<tr><td style="height:11mm"></td><td></td><td></td></tr>').join('')}</table>
      <p style="margin:8px 0 2px;font-size:9.5pt">가장 기억에 남는 친구를 소개하는 문장 쓰기</p>${line('Jisu is interested in cooking. She is going to bake bread this weekend.')}${line()}`)});

  /* 4쪽 · 문법 규칙 */
  const G = L.grammar.points;
  const gsec = (g, n) => sec(n, g.name, `<div class="rule"><div class="f en">${bl(g.form)} <span style="font-weight:400;font-size:10pt">= ${bl(g.meaning)}</span></div>${g.rule.map(r => `<p><b style="color:var(--pc)">${esc(r.k)}</b> <span class="en">${esc(r.v)}</span> — <span class="en" style="color:var(--muted)">${esc(r.ex)}</span></p>`).join('')}</div>
    <ol class="q en">${g.check.map(c => `<li>${esc(c.q).replace('____', bl(c.a))}</li>`).join('')}</ol>`, '괄호 속 동사를 알맞은 형태로');
  const cmp = (G.find(g => g.compare) || {}).compare;
  page({k: 'grammar', period: '3차시 문법', title: 'Grammar', sub: G.map(g => g.short).join(' · '), goal: L.goals.grammar.join(' '), sim: 'grammar', body:
    G.map((g, i) => gsec(g, i + 1)).join('') +
    (cmp ? sec(G.length + 1, '알맞은 칸에 동사 쓰기', `<div class="chips en" style="margin-bottom:6px">${seeded(cmp.cols.flat(), 5).map(v => `<span>${esc(v)}</span>`).join('')}</div>
      <table class="t en"><tr>${cmp.head.map(h => `<th>${esc(h)}</th>`).join('')}</tr><tr>${cmp.cols.map(c => `<td style="height:16mm;vertical-align:top"><span class="ans-only">${c.map(esc).join(', ')}</span></td>`).join('')}</tr></table>`) : '')});

  /* 5쪽 · 문법 쓰기 */
  const scr = G.flatMap(g => g.scramble);
  page({k: 'grammar', period: '3차시 문법', title: 'Grammar in Use', sub: '배열하기 · 고쳐 쓰기 · 나의 문장', goal: '배운 형태를 넣어 정확한 문장을 쓸 수 있다.', sim: 'grammar', body:
    sec(1, '우리말에 맞게 배열하기', `<ol class="q">${scr.map((s, i) => `<li>${esc(s.ko)}<div class="chips en" style="margin:3px 0">${seeded(s.en.replace(/[.?!]$/, '').split(' '), i + 2).map(w => `<span>${esc(w)}</span>`).join('')}</div>${line(s.en)}</li>`).join('')}</ol>`) +
    sec(2, '틀린 부분을 바르게 고쳐 쓰기', `<ol class="q en">${G.map(g => `<li>${esc(g.trap.bad)}${line(g.trap.good)}</li>`).join('')}</ol>`) +
    sec(3, '나를 소개하는 문장', `<p style="margin:0;font-size:9.5pt" class="en">${esc(L.grammar.wrap.en)}</p>${line('I want to learn Spanish. I enjoy watching movies.')}${line()}`)});

  /* 6·7쪽 · 본문 */
  const R = L.reading, cut = R.split;
  const passage = (ps, from) => `<div class="passage en">${ps.map((p, k) => `<p><sup>${from + k + 1}</sup>${p.who ? `<span class="who">${esc(p.who)}</span>` : ''}${esc(p.en)}</p>`).join('')}</div>`;
  const glossbar = ps => { const ks = Object.keys(R.gloss).filter(k => ps.some(p => new RegExp(`\\b${k}`, 'i').test(p.en))); return ks.length ? `<div class="glossbar">${ks.map(k => `<span><b class="en">${esc(k)}</b> ${esc(R.gloss[k])}</span>`).join('')}</div>` : ''; };
  const tfTable = items => `<table class="t tf en"><tr><th>문장</th><th>T / F</th></tr>${items.map(t => `<tr><td>${esc(t.s)}${t.why ? ` <span class="ans-only" style="font-size:8.5pt">(${esc(t.why)})</span>` : ''}</td><td><span class="ans-only">${t.a ? 'T' : 'F'}</span></td></tr>`).join('')}</table>`;
  const p1 = R.paras.slice(0, cut), p2 = R.paras.slice(cut);
  const tfOf = ps => R.tf.filter(t => ps.some(p => p.who && t.s.startsWith(p.who.split(',')[0])));
  const ord = R.order ? seeded(R.order.map((o, i) => ({o, i})), 13) : [];
  page({k: 'read', period: '4차시 본문 ①', title: R.title, sub: R.kind, goal: L.goals.read1.join(' '), sim: 'read', body:
    sec(1, '읽기 전에', `<ol class="q en">${R.before.map(b => `<li>${esc(b.q)}${line()}</li>`).join('')}</ol>`) +
    sec(2, '읽기', glossbar(p1) + passage(p1, 0)) +
    sec(3, '내용 확인', `<ol class="q en">${p1.map(p => `<li>${esc(p.check.q)}${line(p.check.a)}</li>`).join('')}</ol>`) +
    (ord.length ? sec(4, '일어난 순서대로 번호 쓰기', `<ol class="q en" style="list-style:none;padding:0">${ord.map(x => `<li>( <span class="blank" style="min-width:8mm"><i>${x.i + 1}</i></span> ) ${esc(x.o)}</li>`).join('')}</ol>`) : '')});
  page({k: 'read', period: '5차시 본문 ②', title: R.title, sub: '읽기 이어서', goal: L.goals.read2[0], sim: 'read', body:
    sec(1, '읽기', glossbar(p2) + passage(p2, cut)) +
    sec(2, '내용 확인', `<ol class="q en">${p2.filter((p, i) => i === 0 || i === p2.length - 1).map(p => `<li>${esc(p.check.q)}${line(p.check.a)}</li>`).join('')}</ol>`) +
    sec(3, '맞으면 T, 틀리면 F', tfTable(R.tf))});

  /* 8쪽 · 본문 정리 */
  page({k: 'read', period: '5차시 본문 ②', title: 'After Reading', sub: '핵심 문장 · 비교 · 요약 · 나의 불꽃', goal: L.goals.read2.slice(1).join(' ') || L.goals.read2[0], sim: 'read', body:
    sec(1, '핵심 문장 완성하기', `<ol class="q en">${(R.key || []).map(k => `<li>${blank(k.en)} <span class="k">${esc(k.note)}</span></li>`).join('')}</ol>`) +
    (R.people ? sec(2, '세 사람 비교하기', `<table class="t en"><tr><th style="width:14%"></th><th>Before</th><th>Action</th><th>Now</th></tr>${R.people.map(p => `<tr><td class="w">${esc(p.name)}</td><td><span class="ans-only">${esc(p.before)}</span></td><td style="height:9mm"><span class="ans-only">${esc(p.action)}</span></td><td><span class="ans-only">${esc(p.now)}</span></td></tr>`).join('')}</table>`) : '') +
    sec(3, '요약문 완성하기', `<div class="box en" style="line-height:2">${blank(R.summary.text)}</div>`) +
    sec(4, L.bigQ.en, `<p style="margin:0;font-size:9.5pt">${esc(R.wrap.ko)}</p><p class="en" style="margin:2px 0;font-size:9.5pt;color:var(--muted)">${esc(R.wrap.en)}</p>${line()}${line()}${line()}`)});

  /* ── 그리기 ── */
  const sims = 'sim.html';
  document.title = `학습지 · Lesson ${L.no} ${L.title} · ${SITE.name}`;
  const root = document.body.dataset.root || '';
  document.body.insertAdjacentHTML('afterbegin', `<div class="toolbar"><b>${esc(book)} · Lesson ${L.no} ${esc(L.title)} 학습지</b>
    <span class="jump">${pages.map((p, i) => `<a href="#p${i + 1}">${i + 1}</a>`).join('')}</span>
    <a href="${root}index.html#${L.book}-${L.no}">목록</a><a href="${sims}">연습실</a><button type="button" id="ans">정답 보기</button><button type="button" id="pr">인쇄하기</button></div>` +
    pages.map((p, i) => `<article class="sheet" id="p${i + 1}" style="--pc:${PC[p.k]}">
      <header class="sh-head"><div class="crumb">${esc(book)} · Lesson ${L.no} ${esc(L.title)} · ${esc(p.period)}</div><h1 class="en">${esc(p.title)}<small>${esc(p.sub)}</small></h1><div class="who">학번 <span></span> 이름 <span></span></div></header>
      <div class="goal"><b>학습 목표</b><span>${esc(p.goal)}</span></div>${p.body}
      <div class="memo"><div class="qrbox" style="margin-top:auto"><div class="qr" data-href="${sims}#${p.sim}"></div><div><b>연습실에서 이어 하기</b>휴대폰 카메라로 찍으면 이 차시 연습 화면이 열려요. 발음 듣기, 역할 연기, 문장 만들기를 할 수 있어요.</div></div></div>
      <footer class="pfoot"><span>${esc(SITE.name)}${SITE.author ? ' · ' + esc(SITE.author) : ''}</span><span>${i + 1} / ${pages.length}</span></footer></article>`).join(''));
  // 남는 자리에 메모 줄 넣기
  document.querySelectorAll('.memo').forEach(m => { const q = m.querySelector('.qrbox'); const free = m.clientHeight - q.offsetHeight; if (free > 60) { const d = document.createElement('div'); d.style.cssText = 'flex:1;display:flex;flex-direction:column;margin-bottom:8px'; d.innerHTML = '<div class="lab" style="font-size:8.5pt;color:var(--muted);font-weight:700">메모</div><div class="lines"></div>'; m.insertBefore(d, q); } });
  document.querySelectorAll('.qr').forEach(q => { try { const url = new URL(q.dataset.href, location.href).href; const c = qrcode(0, 'M'); c.addData(url); c.make(); q.innerHTML = c.createSvgTag({cellSize: 3, margin: 0, scalable: true}); } catch (e) { q.textContent = 'QR'; } });
  const ab = document.getElementById('ans');
  ab.onclick = () => { const on = document.body.classList.toggle('show-ans'); ab.classList.toggle('on', on); ab.textContent = on ? '정답 숨기기' : '정답 보기'; };
  document.getElementById('pr').onclick = () => print();
  window.WS = {pages: pages.length};
})();
