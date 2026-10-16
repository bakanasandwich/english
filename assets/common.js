/* 공통 도구: 소리 내어 읽기(TTS), 위 막대·아래 글, 작은 함수들 */
(() => {
  const ok = 'speechSynthesis' in window;
  let voices = [];
  const load = () => { voices = ok ? speechSynthesis.getVoices().filter(v => /^en(-|_)/i.test(v.lang)) : []; };
  if (ok) { load(); speechSynthesis.addEventListener && speechSynthesis.addEventListener('voiceschanged', load); }
  const pref = [/en-US/i, /en-GB/i, /en/i];
  const nice = /Google|Samantha|Aria|Jenny|Guy|Microsoft|Daniel|Karen|Alex|Ava|Allison/i;
  function voiceFor(idx) {
    if (!voices.length) return null;
    const us = voices.filter(v => pref[0].test(v.lang));
    const pool = (us.length ? us : voices).slice().sort((a, b) => (nice.test(b.name) ? 1 : 0) - (nice.test(a.name) ? 1 : 0));
    return pool[(idx || 0) % pool.length];
  }
  let current = null;
  /* say(글, {rate, voice: 화자 번호, pitch, el: 재생 중 표시할 요소, onend}) */
  function say(text, o = {}) {
    if (!ok) { toast('이 브라우저는 소리 내어 읽기를 지원하지 않아요.'); return false; }
    stop();
    const u = new SpeechSynthesisUtterance(String(text).replace(/_{2,}/g, 'blank'));
    u.lang = 'en-US'; u.rate = o.rate || +(localStorage_get('tts-rate') || .92); u.pitch = o.pitch || 1;
    const v = voiceFor(o.voice); if (v) u.voice = v;
    if (o.el) o.el.classList.add('playing');
    current = {u, el: o.el};
    u.onend = u.onerror = () => { if (o.el) o.el.classList.remove('playing'); if (current && current.u === u) current = null; o.onend && o.onend(); };
    speechSynthesis.speak(u);
    return true;
  }
  function stop() { if (!ok) return; if (current && current.el) current.el.classList.remove('playing'); current = null; speechSynthesis.cancel(); }
  /* 여러 문장을 차례로: lines = [{text, voice, el}] */
  function sequence(lines, done) {
    let i = 0, cancelled = false;
    const next = () => { if (cancelled) return; if (i >= lines.length) { done && done(); return; } const l = lines[i++]; l.before && l.before(); say(l.text, {voice: l.voice, pitch: l.pitch, el: l.el, onend: () => { l.after && l.after(); setTimeout(next, 250); }}); };
    next();
    return {cancel() { cancelled = true; stop(); }};
  }
  function localStorage_get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function localStorage_set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  const ICON = {
    say: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M19 5a10 10 0 0 1 0 14"/></svg>'
  };
  const sayBtn = (text, label) => `<button type="button" class="say" data-say="${esc(text)}" aria-label="${esc(label || '듣기: ' + text)}">${ICON.say}</button>`;
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-say]'); if (!b) return;
    e.stopPropagation(); e.preventDefault();
    if (b.classList.contains('playing')) { stop(); return; }
    say(b.dataset.say, {el: b, voice: +(b.dataset.voice || 0)});
  }, true);

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c])); }
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const norm = s => String(s).toLowerCase().replace(/[’']/g, "'").replace(/[^a-z0-9' ]+/g, ' ').replace(/\s+/g, ' ').trim();

  let tt;
  function toast(msg) {
    let t = document.getElementById('toast');
    if (!t) { t = document.createElement('div'); t.id = 'toast'; t.setAttribute('role', 'status'); t.style.cssText = 'position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:9999;background:#141c25;color:#fff;padding:10px 16px;border-radius:10px;font:500 14px/1.4 var(--sans,sans-serif);box-shadow:0 6px 20px rgba(0,0,0,.25);max-width:calc(100vw - 32px)'; document.body.appendChild(t); }
    t.textContent = msg; t.hidden = false; clearTimeout(tt); tt = setTimeout(() => { t.hidden = true; }, 2600);
  }

  /* 단원 정보: 페이지의 data-root(사이트 루트까지 상대 경로)와 LESSON */
  function lessonMeta() {
    const L = window.LESSON || {}, B = (window.CATALOG || []).find(b => b.id === L.book) || {};
    return {L, B, short: `${B.grade ? '중' + B.grade[0] : ''} 영어 (${(B.publisher || '').split(' ')[0]}) · Lesson ${L.no || ''}`};
  }

  /* 위 막대: <header class="topbar" data-topbar="이름|이름"> */
  function topbar() {
    const bar = document.querySelector('[data-topbar]'); if (!bar) return;
    const root = document.body.dataset.root || '';
    const crumbs = (bar.dataset.topbar || '').split('|').filter(Boolean);
    bar.innerHTML = `<a class="brand" href="${root}index.html"><span class="logo">En</span><span>${esc(SITE.name)}</span></a>` +
      crumbs.map(c => `<span class="crumb">${esc(c)}</span>`).join('') + '<span class="spacer"></span>' + (bar.dataset.extra || '');
  }
  function footer() {
    const f = document.querySelector('[data-footer]'); if (!f || !window.SITE) return;
    const bits = [SITE.name, SITE.curriculum + ' 기준'];
    if (SITE.author) bits.push('제작 ' + SITE.author);
    f.innerHTML = bits.map(esc).join(' · ') + (SITE.note ? `<br>${esc(SITE.note)}` : '') + (SITE.copyright ? `<br>${esc(SITE.copyright)}` : '');
  }
  window.addEventListener('DOMContentLoaded', () => { topbar(); footer(); });

  /* 원어민 속도 조절: 0.7 ~ 1.1 */
  function rateControl(el) {
    const v = +(localStorage_get('tts-rate') || .92);
    el.innerHTML = `<label class="rate">읽기 속도 <input type="range" min=".6" max="1.1" step=".05" value="${v}" aria-label="읽기 속도"><b>${v.toFixed(2)}×</b></label>`;
    const r = el.querySelector('input'), o = el.querySelector('b');
    r.oninput = () => { o.textContent = (+r.value).toFixed(2) + '×'; localStorage_set('tts-rate', r.value); };
  }

  window.EN = {say, stop, sequence, sayBtn, ICON, esc, shuffle, norm, toast, lessonMeta, rateControl, ttsOk: ok, store: {get: localStorage_get, set: localStorage_set}};
})();
