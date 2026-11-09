const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const mk = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h != null) e.textContent = h; return e };
const W = 640, H = 360, PX = 130, LANE = [170, 232, 294], INK = '#18262B', RED = '#C9342B', GOLD = '#F2B535', BLUE = '#2D6A9F', GRN = '#4E8F5F', PUR = '#7A4E9C', BRN = '#B4572F';
const KEY = 'ktct-run-v1', RM = matchMedia('(prefers-reduced-motion:reduce)').matches;
function charSVG(o) {
  const K = '#18262B', GOLD = '#F2B535', RED = '#C9342B';
  const S = `stroke="${K}" stroke-width="3.2" stroke-linejoin="round" stroke-linecap="round"`;
  const sk = o.skin, hr = o.hair || '#222', cl = o.coat, pn = o.pants || '#2B2B2B', br = o.brow || hr, bd = o.beard, sh = o.shirt || '#FBFAF3';
  let s = '<svg xmlns="http://www.w3.org/2000/svg" width="240" height="360" viewBox="0 0 100 150">';
  const a = x => { s += x };
  const hs = o.hs;
  if (hs === 'long') a(`<path d="M19 56C14 16 86 16 81 56L87 108Q72 118 62 102L38 102Q28 118 13 108Z" fill="${hr}" ${S}/>`);
  if (hs === 'wig') a(`<circle cx="20" cy="60" r="13" fill="${hr}" ${S}/><circle cx="80" cy="60" r="13" fill="${hr}" ${S}/><circle cx="22" cy="80" r="11" fill="${hr}" ${S}/><circle cx="78" cy="80" r="11" fill="${hr}" ${S}/>`);
  if (hs === 'wild') a(`<path d="M9 66C-2 34 20 8 50 8S102 34 91 66C98 88 84 96 74 90L26 90C16 96 2 88 9 66Z" fill="${hr}" ${S}/>`);
  a(`<rect x="35" y="116" width="12" height="25" rx="5" fill="${pn}" ${S}/><rect x="53" y="116" width="12" height="25" rx="5" fill="${pn}" ${S}/>`);
  a(`<ellipse cx="38" cy="142" rx="10" ry="5" fill="#2B2B2B" ${S}/><ellipse cx="62" cy="142" rx="10" ry="5" fill="#2B2B2B" ${S}/>`);
  a(`<rect x="14" y="88" width="15" height="31" rx="7.5" fill="${cl}" ${S}/><rect x="71" y="88" width="15" height="31" rx="7.5" fill="${cl}" ${S}/>`);
  a(`<circle cx="21.5" cy="122" r="6" fill="${sk}" ${S}/><circle cx="78.5" cy="122" r="6" fill="${sk}" ${S}/>`);
  a(`<path d="M26 126Q22 92 36 86L64 86Q78 92 74 126Z" fill="${cl}" ${S}/>`);
  a(`<path d="M31 94Q29 110 31 122" stroke="#fff" stroke-opacity=".28" stroke-width="3.5" fill="none" stroke-linecap="round"/>`);
  a(`<path d="M41 86L59 86L50 106Z" fill="${sh}" ${S}/>`);
  if (o.jabot) a(`<path d="M41 86L59 86L58 104L50 112L42 104Z" fill="#fff" ${S}/><path d="M45 96L50 104L55 96" fill="none" stroke="${K}" stroke-width="2"/>`);
  if (o.tie) a(`<path d="M47.5 90L52.5 90L54.5 108L50 115L45.5 108Z" fill="${o.tie}" ${S}/>`);
  if (o.scarf) a(`<path d="M38 85Q50 95 62 85L64 93Q50 102 36 93Z" fill="${RED}" ${S}/><path d="M46 97L40 111L47 112L51 99Z" fill="${RED}" ${S}/>`);
  if (o.mand) a(`<rect x="42" y="82" width="16" height="9" rx="3" fill="${sh}" ${S}/>${[98, 108, 118].map(y => `<circle cx="50" cy="${y}" r="2" fill="#E8D3A0" stroke="${K}" stroke-width="1.5"/>`).join('')}`);
  if (o.pocket) a(`<rect x="57" y="104" width="10" height="9" rx="2" fill="none" stroke="${K}" stroke-width="2"/>`);
  if (o.buttons) a([108, 118].map(y => `<circle cx="45" cy="${y}" r="2.2" fill="${GOLD}" stroke="${K}" stroke-width="1.4"/><circle cx="55" cy="${y}" r="2.2" fill="${GOLD}" stroke="${K}" stroke-width="1.4"/>`).join(''));
  if (o.star) a(`<polygon points="64,98 66.2,103 71.6,103.5 67.5,107 68.8,112.3 64,109.5 59.2,112.3 60.5,107 56.4,103.5 61.8,103" fill="${GOLD}" stroke="${K}" stroke-width="1.8" stroke-linejoin="round"/>`);
  if (o.pack) a(`<path d="M32 88L38 86L40 124L34 122Z" fill="#7A5230" ${S}/><path d="M68 88L62 86L60 124L66 122Z" fill="#7A5230" ${S}/>`);
  a(`<rect x="43" y="76" width="14" height="14" rx="4" fill="${sk}" ${S}/>`);
  a(`<circle cx="20" cy="57" r="6" fill="${sk}" ${S}/><circle cx="80" cy="57" r="6" fill="${sk}" ${S}/>`);
  a(`<ellipse cx="50" cy="52" rx="30" ry="28" fill="${sk}" ${S}/>`);
  a(`<ellipse cx="33" cy="63" rx="5.5" ry="3.2" fill="#E8776F" fill-opacity=".35"/><ellipse cx="67" cy="63" rx="5.5" ry="3.2" fill="#E8776F" fill-opacity=".35"/>`);
  if (bd) {
    const bt = o.bt;
    if (bt === 'full') { const by = 97 + (o.bl || 0) * 2.2; a(`<path d="M22 61Q17 ${by} 50 ${by + 1}Q83 ${by} 78 61Q74 77 50 75Q26 77 22 61Z" fill="${bd}" ${S}/><path d="M34 84Q40 ${by - 6} 44 ${by - 4}" stroke="#fff" stroke-opacity=".35" stroke-width="3" fill="none" stroke-linecap="round"/>`) }
    if (bt === 'goatee') a(`<path d="M44 72Q50 71 56 72L50 85Z" fill="${bd}" ${S}/>`);
    if (bt === 'thin') a(`<path d="M45.5 73L54.5 73L52.5 98L50 107L47.5 98Z" fill="${bd}" ${S}/>`);
    const th = bt === 'thin';
    a(`<path d="M${th ? 38 : 33} 67Q42 ${th ? 61 : 59} 50 66Q58 ${th ? 61 : 59} ${th ? 62 : 67} 67Q58 ${th ? 70 : 73} 50 69Q42 ${th ? 70 : 73} ${th ? 38 : 33} 67Z" fill="${bd}" ${S}/>`);
  } else a(`<path d="M41 68Q50 77 59 68" fill="none" stroke="${K}" stroke-width="3" stroke-linecap="round"/>`);
  a(`<path d="M47 59Q50 63.5 53 59" fill="none" stroke="${K}" stroke-width="2.4" stroke-linecap="round"/>`);
  for (const x of [38, 62]) {
    a(`<ellipse cx="${x}" cy="50" rx="6.6" ry="8" fill="#fff" stroke="${K}" stroke-width="2.6"/><circle cx="${x + (x < 50 ? 1 : -1)}" cy="52" r="4.6" fill="${K}"/><circle cx="${x + (x < 50 ? 2.8 : .8)}" cy="49.4" r="1.7" fill="#fff"/>`);
    a(`<path d="M${x - 9} 38Q${x} ${x < 50 ? 31 : 31} ${x + 9} 38" fill="none" stroke="${br}" stroke-width="4.6" stroke-linecap="round" transform="rotate(${x < 50 ? -4 : 4} ${x} 38)"/>`);
  }
  if (o.glasses) a(`<circle cx="38" cy="51" r="11" fill="#fff" fill-opacity=".3" stroke="${K}" stroke-width="2.8"/><circle cx="62" cy="51" r="11" fill="#fff" fill-opacity=".3" stroke="${K}" stroke-width="2.8"/><path d="M49 50Q50 47.5 51 50" fill="none" stroke="${K}" stroke-width="2.6"/>`);
  if (hs === 'short') a(`<path d="M20 52C14 12 86 12 80 52C77 40 68 31 52 31C38 31 28 40 20 52Z" fill="${hr}" ${S}/><path d="M32 22Q42 16 54 18" stroke="#fff" stroke-opacity=".3" stroke-width="3.5" fill="none" stroke-linecap="round"/>`);
  if (hs === 'long') a(`<path d="M19 52C13 10 87 10 81 52C77 38 66 28 50 28C36 28 26 38 19 52Z" fill="${hr}" ${S}/>${o.bow ? `<path d="M72 24L60 15L60 33Z" fill="${RED}" ${S}/><path d="M72 24L85 15L85 33Z" fill="${RED}" ${S}/><circle cx="72" cy="24" r="4" fill="${RED}" ${S}/>` : ''}`);
  if (hs === 'bald') a(`<path d="M21 54Q19 43 25 38Q24 47 26 57Z" fill="${hr}" ${S}/><path d="M79 54Q81 43 75 38Q76 47 74 57Z" fill="${hr}" ${S}/><ellipse cx="42" cy="27" rx="10" ry="4" fill="#fff" fill-opacity=".4"/>`);
  if (hs === 'wig') a(`<path d="M17 50C8 10 92 10 83 50C72 32 28 32 17 50Z" fill="${hr}" ${S}/><circle cx="19" cy="48" r="8" fill="${hr}" ${S}/><circle cx="81" cy="48" r="8" fill="${hr}" ${S}/><path d="M34 22Q50 14 66 22" stroke="#C9C9C9" stroke-width="2.5" fill="none"/>`);
  if (hs === 'wild') a(`<path d="M15 50C4 8 96 8 85 50C81 36 70 26 50 26C30 26 19 36 15 50Z" fill="${hr}" ${S}/><path d="M26 26Q34 14 44 22Q52 12 62 22Q72 14 76 28" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="3.5" stroke-linecap="round"/>`);
  if (o.sideburn) a(`<path d="M21 50L25 50L25 63L21 59Z" fill="${hr}" ${S}/><path d="M79 50L75 50L75 63L79 59Z" fill="${hr}" ${S}/>`);
  return s + '</svg>';
}

const CH = [{ "coat": "#2D6A9F", "shirt": "#FBFAF3", "skin": "#E8BE95", "hair": "#1F1F1F", "hs": "short", "star": 1, "scarf": 1, "pants": "#2B3A55" }, { "coat": "#C9342B", "shirt": "#FBFAF3", "skin": "#E8BE95", "hair": "#3A2416", "hs": "long", "star": 1, "bow": 1, "pants": "#2B3A55" }];
const LK = [{ "coat": "#3E5C8A", "shirt": "#fff", "jabot": 1, "buttons": 1, "skin": "#F2CFAE", "hair": "#F4F4F4", "hs": "wig", "brow": "#BBB", "pants": "#E8E4D8" }, { "coat": "#2C2F3A", "shirt": "#fff", "tie": "#1B1B1B", "skin": "#F2CFAE", "hair": "#D8D8D8", "hs": "wild", "beard": "#CFCFCF", "bt": "full", "bl": 5, "brow": "#9A9A9A" }, { "coat": "#5A4636", "shirt": "#fff", "tie": "#C9342B", "skin": "#F2CFAE", "hair": "#7A5230", "hs": "short", "beard": "#8A6238", "bt": "full", "bl": 0 }, { "coat": "#34423C", "shirt": "#fff", "tie": "#C9342B", "skin": "#F2CFAE", "hair": "#8A5A33", "hs": "bald", "beard": "#8A5A33", "bt": "goatee", "brow": "#6B4A2B" }, { "coat": "#3F6B4A", "shirt": "#fff", "tie": "#E8E4D8", "skin": "#F2CFAE", "hair": "#3A2A1E", "hs": "short", "sideburn": 1 }, { "coat": "#F2F2EA", "shirt": "#CFDCE8", "skin": "#E8BE95", "hair": "#9A9A9A", "hs": "short", "glasses": 1, "pocket": 1, "pants": "#3A3A3A" }, { "coat": "#6E5436", "shirt": "#8A6A44", "mand": 1, "skin": "#E8BE95", "hair": "#C8C8C8", "hs": "short", "beard": "#D0D0D0", "bt": "thin", "pants": "#4A3A28", "brow": "#AAA" }];
const uri = o => o._u || (o._u = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(charSVG(o)));
const img = o => { let i = o._i; if (!i) { i = o._i = new Image(); i.src = uri(o) } return i };
function sprite(c, x, y, o, bob = 0, tilt = 0, sc = 1) {
  const i = img(o); if (!i.complete || !i.naturalWidth) return;
  const h = 58 * sc, w = h / 1.5; c.save(); c.translate(x, y);
  c.fillStyle = 'rgba(24,38,43,.25)'; c.beginPath(); c.ellipse(0, 0, w * .42, h * .07, 0, 0, 7); c.fill();
  c.translate(0, bob); c.rotate(tilt * .035); c.drawImage(i, -w / 2, -h * .97, w, h); c.restore();
}

/* ---------- 7 chặng, mỗi chặng một nhà tư tưởng ---------- */
let LV = []; // được nạp từ lessons.json + data/*.md + quizData.js (xem loadSeed)
/* ---------- Kho dữ liệu: nạp, lưu, chỉnh sửa ---------- */
const QN = 5, DKEY = 'ktct-data-v1';
let SEED = []; // dữ liệu gốc đọc từ file, dùng cho nút "Đặt lại"
const clone = o => JSON.parse(JSON.stringify(o));
const SC = { books: 'Thư viện', stalls: 'Chợ', chim: 'Xưởng sợi', tower: 'Tháp', houses: 'Phố nhà', flags: 'Cờ hội', waves: 'Bến cảng' };
const COL = [['Xanh dương', BLUE], ['Đỏ', RED], ['Xanh lá', GRN], ['Tím', PUR], ['Nâu', BRN], ['Vàng', GOLD]];
const sg = f => SEED.find(x => x.far === f) || SEED[0] || {};
const validDB = d => Array.isArray(d) && d.length > 0 && d.every(l => l && l.t && l.w && Array.isArray(l.p) && l.p.length && Array.isArray(l.q) && l.q.length && l.q.every(q => Array.isArray(q) && q[0] && Array.isArray(q[1]) && q[1].length === 3 && [0, 1, 2].includes(q[2])));
function applyDB(d) { LV = d.map((l, i) => { const f = SC[l.far] ? l.far : 'books'; return Object.assign({ sn: l.w, r: '', c: BLUE, sky: sg(f).sky, gr: sg(f).gr }, l, { far: f, k: i, look: LK[(l.lk | 0) % LK.length] }) }) }
let DB = null; // dữ liệu đang dùng: bản đã sửa trong trình duyệt (localStorage) hoặc bản gốc từ file
const commit = () => { try { localStorage.setItem(DKEY, JSON.stringify(DB)) } catch (e) { } applyDB(DB); refresh(); renderLab() };
function refresh() {
  $('#nlv').textContent = LV.length; const c = $('#cast'); c.textContent = '';
  LV.forEach((L, i) => { const f = mk('figure'), im = new Image(); im.src = uri(L.look); im.alt = L.w; im.style.animationDelay = (i * .15) + 's'; f.append(im, mk('figcaption', null, L.sn)); c.append(f) });
  if (scr === 'levels') renderLevels();
}
const shuf = a => { for (let i = a.length - 1; i > 0; i--) { const j = 0 | Math.random() * (i + 1);[a[i], a[j]] = [a[j], a[i]] } return a };
/* mỗi lượt chơi rút ngẫu nhiên QN câu từ kho và xáo đáp án */
const pickQ = L => shuf(L.q.slice()).slice(0, QN).map(([x, o, c, e]) => { const ix = shuf([0, 1, 2]); return [x, ix.map(i => o[i]), ix.indexOf(c), e || ''] });

let sel = 0, qi = -1;
const inp = (v, t = 'input') => { const e = mk(t); e.value = v || ''; return e };
const fld = (l, el) => { const b = mk('label', 'fl'); b.append(mk('span', null, l), el); return b };
function qForm(l) {
  const q = qi >= 0 ? l.q[qi] : ['', ['', '', ''], 0, ''], f = mk('div', 'qf2');
  const t = inp(q[0], 'textarea'); t.rows = 2;
  const os = [0, 1, 2].map(j => inp(q[1][j])), rs = [0, 1, 2].map(j => { const r = mk('input'); r.type = 'radio'; r.name = 'ans'; r.checked = q[2] === j; return r }), ex = inp(q[3]);
  f.append(mk('h3', null, qi >= 0 ? 'Sửa câu ' + (qi + 1) : 'Thêm câu hỏi'), fld('Câu hỏi', t));
  [0, 1, 2].forEach(j => { const r = mk('div', 'orow'); r.append(rs[j], mk('b', null, LET[j]), os[j]); f.append(r) });
  f.append(fld('Giải thích (hiện sau khi trả lời)', ex));
  const sv = mk('button', 'btn', qi >= 0 ? 'Lưu câu hỏi' : 'Thêm vào kho');
  sv.onclick = () => {
    const a = os.map(o => o.value.trim()), c = rs.findIndex(r => r.checked);
    if (!t.value.trim() || a.some(x => !x) || c < 0) return alert('Cần nhập câu hỏi, đủ 3 đáp án và chọn đáp án đúng.');
    const nq = [t.value.trim(), a, c, ex.value.trim()]; if (qi >= 0) l.q[qi] = nq; else l.q.push(nq); qi = -1; commit()
  };
  const rw = mk('div', 'row'); rw.append(sv);
  if (qi >= 0) { const cn = mk('button', 'btn alt', 'Hủy'); cn.onclick = () => { qi = -1; renderLab() }; rw.append(cn) }
  f.append(rw); return f;
}
function bulk(l) {
  const w = mk('div'), t = inp('', 'textarea'); t.rows = 4; t.placeholder = 'Câu hỏi | Đáp án A | Đáp án B | Đáp án C | A, B hoặc C là đúng | Giải thích (tùy chọn)';
  const b = mk('button', 'btn alt', 'Thêm hàng loạt');
  b.onclick = () => {
    let n = 0, all = 0; t.value.split('\n').forEach(s => {
      if (!s.trim()) return; all++; const p = s.split('|').map(x => x.trim()), c = p[4] && p[4].length === 1 ? 'ABC'.indexOf(p[4].toUpperCase()) : -1;
      if (p[0] && p[1] && p[2] && p[3] && c >= 0) { l.q.push([p[0], [p[1], p[2], p[3]], c, p[5] || '']); n++ }
    });
    alert('Đã thêm ' + n + '/' + all + ' dòng.' + (n < all ? ' Các dòng lỗi cần đủ 5 phần ngăn bằng dấu |.' : '')); if (n) commit()
  };
  w.append(mk('h3', null, 'Thêm nhiều câu một lúc'), mk('p', null, 'Mỗi dòng một câu, các phần ngăn cách bằng dấu |'), t, mk('p'), b); return w;
}
function renderLab() {
  const lc = $('#lc'), le = $('#le'); lc.textContent = ''; le.textContent = '';
  lc.append(mk('b', null, 'Các chặng'));
  DB.forEach((l, i) => { const b = mk('button', 'btn' + (i === sel ? '' : ' alt'), (i + 1) + '. ' + l.t + ' (' + l.q.length + ' câu)'); b.onclick = () => { sel = i; qi = -1; renderLab() }; lc.append(b) });
  const nb = mk('button', 'btn alt', '+ Thêm chặng mới');
  nb.onclick = () => { DB.push({ t: 'Chặng mới', w: 'Nhân vật mới', sn: 'Mới', r: 'Vai trò của nhân vật', c: BLUE, far: 'books', lk: 0, p: ['Xin chào, hãy sửa lời kể này.'], q: [['Câu hỏi mẫu: 1 + 1 bằng mấy?', ['1', '2', '3'], 1, 'Hãy sửa hoặc xóa câu này.']] }); sel = DB.length - 1; qi = -1; commit() };
  const ul = mk('label', 'fl'), uc = mk('input'); uc.type = 'checkbox'; uc.checked = !!prog.unlock;
  uc.onchange = () => { prog.unlock = uc.checked; save() }; ul.append(uc, ' Mở khóa mọi chặng (để thử)');
  lc.append(nb, ul);
  const L = DB[sel], F = { t: inp(L.t), w: inp(L.w), sn: inp(L.sn), r: inp(L.r), p: inp(L.p.join('\n'), 'textarea') }; F.p.rows = 6;
  const sc = mk('select'), co = mk('select'), lk = mk('select');
  Object.entries(SC).forEach(([k, v]) => sc.add(new Option(v, k))); COL.forEach(([n, h]) => co.add(new Option(n, h))); LK.forEach((_, i) => lk.add(new Option('Kiểu ' + (i + 1), i)));
  sc.value = L.far; co.value = L.c; lk.value = L.lk | 0;
  const pv = new Image(); pv.width = 48; pv.alt = ''; pv.src = uri(LK[(L.lk | 0) % LK.length]); lk.onchange = () => { pv.src = uri(LK[+lk.value]) };
  le.append(mk('h3', null, 'Thông tin chặng ' + (sel + 1)), fld('Chủ đề chặng', F.t), fld('Nhân vật gác cổng', F.w), fld('Tên ngắn (hiện ở màn mở đầu)', F.sn), fld('Vai trò / mô tả nhân vật', F.r), fld('Lời kể (mỗi dòng là một lượt thoại)', F.p), fld('Cảnh nền', sc), fld('Màu chủ đạo', co), fld('Hình nhân vật', lk), pv);
  const sv = mk('button', 'btn', 'Lưu thông tin chặng');
  sv.onclick = () => {
    const p = F.p.value.split(/\n+/).map(x => x.trim()).filter(Boolean);
    if (!F.t.value.trim() || !F.w.value.trim() || !p.length) return alert('Cần có chủ đề, tên nhân vật và ít nhất một lượt thoại.');
    Object.assign(L, { t: F.t.value.trim(), w: F.w.value.trim(), sn: F.sn.value.trim() || F.w.value.trim(), r: F.r.value.trim(), p, far: sc.value || L.far, c: co.value || L.c, lk: +lk.value || 0, sky: sg(sc.value).sky, gr: sg(sc.value).gr }); commit()
  };
  const dv = mk('button', 'btn alt', 'Xóa chặng'); dv.disabled = DB.length < 2;
  dv.onclick = () => { if (!confirm('Xóa chặng "' + L.t + '"?')) return; DB.splice(sel, 1); prog.done.splice(sel, 1); prog.st.splice(sel, 1); save(); sel = 0; qi = -1; commit() };
  const rw = mk('div', 'row'); rw.append(sv, dv); le.append(rw, mk('h3', null, 'Kho câu hỏi (' + L.q.length + ')'));
  if (L.q.length < QN) le.append(mk('p', null, 'Nên có ít nhất ' + QN + ' câu. Kho càng nhiều câu, mỗi lượt chơi càng khác nhau.'));
  L.q.forEach((q, i) => {
    const r = mk('div', 'qr'), e = mk('button', 'btn alt', 'Sửa'), d = mk('button', 'btn alt', 'Xóa');
    r.append(mk('span', null, (i + 1) + '. ' + q[0] + '  → ' + LET[q[2]]));
    e.onclick = () => { qi = i; renderLab(); $('.qf2').scrollIntoView({ block: 'center' }) }; d.disabled = L.q.length < 2; d.onclick = () => { L.q.splice(i, 1); qi = -1; commit() };
    r.append(e, d); le.append(r)
  });
  le.append(qForm(L), bulk(L));
}
$('#lr').onclick = () => { if (!SEED.length) return alert('Chưa tải được dữ liệu gốc từ file.'); if (!confirm('Xóa mọi chỉnh sửa và quay về dữ liệu có sẵn?')) return; try { localStorage.removeItem(DKEY) } catch (e) { } DB = clone(SEED); sel = 0; qi = -1; commit() };
$('#lb').onclick = () => show('title');
$$('.dbtn').forEach(b => b.onclick = () => { sel = Math.min(sel, DB.length - 1); qi = -1; renderLab(); show('lab') });
const LET = 'ABC';

/* ---------- Nạp dữ liệu từ file ---------- */
/* lessons.json: thông tin chặng | data/lesson-N.md: lời kể (mỗi đoạn cách nhau một dòng trống) | quizData.js: câu hỏi */
async function loadSeed() {
  const get = (u, f) => fetch(u).then(r => { if (!r.ok) throw new Error(u + ' (' + r.status + ')'); return r[f]() });
  const meta = await get('lessons.json', 'json');
  const texts = await Promise.all(meta.map(m => get(m.file, 'text')));
  return meta.map((m, i) => ({
    t: m.title, w: m.character, sn: m.shortName || m.character, r: m.role || '', c: m.color, sky: m.sky, gr: m.ground, far: m.scene, lk: m.look | 0,
    p: texts[i].split(/\n\s*\n/).map(s => s.trim()).filter(Boolean),
    q: (quizData[m.id] || []).map(x => [x.question, x.options.slice(), x.answer, x.explanation || ''])
  }));
}
/* ưu tiên: dữ liệu đã sửa trong trình duyệt > dữ liệu từ file */
async function boot() {
  let err = null;
  try { SEED = await loadSeed() } catch (e) { err = e }
  try { const o = JSON.parse(localStorage.getItem(DKEY)); if (validDB(o)) DB = o } catch (e) { }
  if (!DB && !err && validDB(SEED)) DB = clone(SEED);
  if (!DB) {
    const m = mk('p', null, 'Không tải được dữ liệu' + (err ? ' (' + err.message + ')' : '') + '. Hãy mở trang qua máy chủ (GitHub Pages, Live Server) thay vì mở trực tiếp file index.html.');
    $('.start').prepend(m); return;
  }
  applyDB(DB); refresh();
  $('#go').disabled = false; $$('.dbtn').forEach(b => b.disabled = false);
}

/* ---------- Trạng thái ---------- */
let prog = { done: [], st: [], coins: 0, hero: 0 }, scr = 'title', G = null, t = 0, last = 0;
try { const o = JSON.parse(localStorage.getItem(KEY)); if (o) prog = Object.assign(prog, o) } catch (e) { }
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(prog)) } catch (e) { } };
const PT = [];

/* ---------- Tạo một lượt chạy ---------- */
function newRun(li) {
  const L = LV[li], Q = pickQ(L), O = [], gt = []; let p = 560;
  const pat = () => {
    if (Math.random() < .35) { const l = 0 | Math.random() * 3; for (let k = 0; k < 5; k++)O.push({ k: 'c', x: p + k * 38, l }) }
    else {
      const a = 0 | Math.random() * 3; let b = -1;
      if (Math.random() < .4) { do b = 0 | Math.random() * 3; while (b === a) }
      O.push({ k: 'o', x: p, l: a }); if (b >= 0) O.push({ k: 'o', x: p, l: b });
      const free = [0, 1, 2].find(l => l !== a && l !== b);
      for (let k = 0; k < 3; k++)O.push({ k: 'c', x: p - 30 + k * 40, l: free });
    }
    p += 250 + Math.random() * 70;
  };
  for (let q = 0; q < Q.length; q++) { for (let k = 0; k < 6; k++)pat(); p += 330; const g = { k: 'g', x: p, q, res: null, done: 0 }; gt.push(g); O.push(g); p += 420 }
  return { li, L, Q, x: 0, pl: 1, py: LANE[1], hp: 3, coins: 0, ok: 0, O, gt, end: p, run: false, inv: 0, shake: 0, qshown: -1, sp: 175 + li * 9, fin: 0, dust: 0 };
}

/* ---------- Hộp thoại, câu hỏi, HUD ---------- */
const dl = $('#dlg');
function dlg(s, txt, btns) {
  dl.hidden = false; $('#qp').hidden = true;
  $('#pt').src = uri(s.look); $('#who').style.setProperty('--pc', s.c);
  $('#nm').textContent = s.w; $('#rl').textContent = s.r; $('#tx').textContent = txt;
  const bx = $('#bx'); bx.textContent = '';
  btns.forEach(([l, f, c]) => { const b = mk('button', 'btn' + (c ? ' ' + c : ''), l); b.onclick = f; bx.append(b) });
  const fb = $('button', bx); if (fb) fb.focus({ preventScroll: true });
  dl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}
const hideDlg = () => { dl.hidden = true; $('#qp').hidden = false };
function hud() {
  if (!G) return;
  $('#hn').textContent = 'Chặng ' + (G.li + 1) + ': ' + G.L.t;
  $('#hh').textContent = '♥'.repeat(Math.max(0, G.hp)) + '♡'.repeat(Math.max(0, 3 - G.hp));
  $('#hs').textContent = G.ok + '/' + G.Q.length; $('#hc').textContent = G.coins;
}
function tip() {
  $('#qi').src = uri(G.L.look); $('#qn').textContent = G.L.w;
  $('#qt').textContent = 'Nhặt xu, né rào sọc đỏ. Khi thấy ba cổng A, B, C, hãy chạy vào làn có đáp án đúng.';
  $('#qo').textContent = ''; $('#qf').textContent = '';
}
function showQ(i) {
  const q = G.Q[i];
  $('#qt').textContent = 'Câu ' + (i + 1) + '/' + G.Q.length + ': ' + q[0]; $('#qf').textContent = '';
  const qo = $('#qo'); qo.textContent = '';
  q[1].forEach((o, j) => { const d = mk('div', 'op ' + 'abc'[j]); d.append(mk('b', null, LET[j]), mk('span', null, o)); qo.append(d) });
}
function feedback(i, lane, ok) {
  const q = G.Q[i], rows = $$('.op', $('#qo'));
  rows[q[2]].classList.add('good'); if (!ok) rows[lane].classList.add('bad');
  $('#qf').textContent = ok ? 'Đúng! ' + q[3] : 'Chưa đúng, đáp án là ' + LET[q[2]] + '. ' + q[3];
}

/* ---------- Luật chơi ---------- */
function burst(x, y, txt, n = 8) {
  for (let i = 0; i < n; i++) { const a = i / n * 6.28; PT.push({ k: 's', x, y, vx: Math.cos(a) * 70, vy: Math.sin(a) * 70 - 30, l: .5 }) }
  if (txt) PT.push({ k: 't', x, y: y - 14, vx: 0, vy: -34, l: 1, s: txt });
}
function hurt() {
  G.hp--; G.inv = 1.4; G.shake = .35; hud();
  if (G.hp <= 0) {
    G.run = false;
    dlg(G.L, 'Bạn hết tim rồi, nhưng đừng nản! Đọc lại lời kể của ta rồi thử lại nhé.', [['Chạy lại chặng', () => startLevel(G.li)], ['Về menu', () => toLevels(), 'alt']]);
  }
}
function judge(g) {
  const q = G.Q[g.q], ok = G.pl === q[2]; g.res = { lane: G.pl, ok };
  if (ok) { G.ok++; burst(PX, G.py - 40, '+1 sao', 12) } else hurt();
  feedback(g.q, G.pl, ok); hud();
}
function finish() {
  G.run = false; const s = G.ok, li = G.li;
  prog.done[li] = true; prog.st[li] = Math.max(prog.st[li] || 0, s); save();
  const last = li === LV.length - 1, total = prog.st.reduce((a, b) => a + (b || 0), 0);
  const msg = 'Hoàn thành chặng! Bạn trả lời đúng ' + s + '/' + G.Q.length + ' câu và nhặt ' + G.coins + ' xu.' + (last ? ' Bạn đã chinh phục cả ' + LV.length + ' chặng với tổng cộng ' + total + '/' + LV.length * QN + ' sao. Chúc mừng!' : '');
  dlg(G.L, msg, [...(last ? [] : [['Chặng tiếp theo', () => startLevel(li + 1)]]), ['Chạy lại chặng', () => startLevel(li), 'alt'], ['Về menu', () => toLevels(), 'alt']]);
}
function update(dt) {
  if (!G) return;
  if (G.run) {
    const ahead = G.gt.find(g => !g.done); let sp = G.sp;
    if (ahead && ahead.x - G.x < 560) sp *= .72;
    G.x += sp * dt;
    G.py += (LANE[G.pl] - G.py) * Math.min(1, dt * 14);
    G.inv = Math.max(0, G.inv - dt); G.shake = Math.max(0, G.shake - dt);
    G.dust -= dt; if (G.dust <= 0) { G.dust = .09; PT.push({ k: 'd', x: PX - 10, y: G.py, vx: -40, vy: -8, l: .4 }) }
    for (const o of G.O) {
      if (o.dead) continue; const dx = o.x - G.x;
      if (o.k === 'g') { if (!o.done && G.x >= o.x + 43) { o.done = 1; judge(o) } continue }
      if (Math.abs(dx) > 22 || Math.abs(G.py - LANE[o.l]) > 26) continue;
      if (o.k === 'c') { o.dead = 1; G.coins++; prog.coins++; burst(PX + dx, LANE[o.l] - 14, null, 5); hud() }
      else if (G.inv <= 0 && G.run) { o.dead = 1; burst(PX + dx, LANE[o.l] - 14, null, 10); hurt() }
    }
    const nx = G.gt.find(g => !g.done);
    if (nx && nx.x - G.x < 800 && G.qshown !== nx.q) { G.qshown = nx.q; showQ(nx.q) }
    if (G.x > G.end && !G.fin) { G.fin = 1; finish() }
    $('#pgi').style.width = Math.min(100, G.x / G.end * 100) + '%';
  }
  for (let i = PT.length - 1; i >= 0; i--) { const p = PT[i]; p.l -= dt; p.x += p.vx * dt; p.y += p.vy * dt; if (p.l <= 0) PT.splice(i, 1) }
}

/* ---------- Vẽ ---------- */
const ell = (x, y, rx, ry) => { g.beginPath(); g.ellipse(x, y, rx, ry, 0, 0, 7) };
const cv = $('#cv'), g = cv.getContext('2d');
function far(L, off) {
  const tw = 120, base = Math.floor(off * .25 / tw), o = (off * .25) % tw;
  g.strokeStyle = INK; g.lineWidth = 2.5;
  for (let i = -1; i <= W / tw + 1; i++) {
    const x = i * tw - o, s = (((i + base) * 7) % 5 + 5) % 5, h = 34 + s * 12;
    g.fillStyle = L.c; g.globalAlpha = .85;
    switch (L.far) {
      case 'books': g.fillRect(x + 6, 150 - h, 28, h); g.strokeRect(x + 6, 150 - h, 28, h); g.fillStyle = '#F2B535'; g.fillRect(x + 40, 150 - h + 16, 22, h - 16); g.strokeRect(x + 40, 150 - h + 16, 22, h - 16); break;
      case 'stalls': g.fillRect(x + 10, 150 - 34, 70, 34); g.strokeRect(x + 10, 150 - 34, 70, 34); g.fillStyle = '#fff'; g.beginPath(); g.moveTo(x + 4, 150 - 34); g.lineTo(x + 86, 150 - 34); g.lineTo(x + 70, 150 - 56); g.lineTo(x + 20, 150 - 56); g.closePath(); g.fill(); g.stroke(); break;
      case 'chim': g.fillRect(x + 6, 150 - 40, 64, 40); g.strokeRect(x + 6, 150 - 40, 64, 40); g.fillRect(x + 48, 150 - 40 - h, 12, h); g.strokeRect(x + 48, 150 - 40 - h, 12, h); break;
      case 'tower': g.fillRect(x + 10, 150 - h - 20, 34, h + 20); g.strokeRect(x + 10, 150 - h - 20, 34, h + 20); g.fillStyle = '#EEE'; for (let k = 0; k < 4; k++)g.fillRect(x + 16, 150 - h - 12 + k * 14, 8, 6), g.fillRect(x + 30, 150 - h - 12 + k * 14, 8, 6); break;
      case 'houses': g.fillRect(x + 10, 150 - 34, 50, 34); g.strokeRect(x + 10, 150 - 34, 50, 34); g.fillStyle = '#8A5A33'; g.beginPath(); g.moveTo(x + 4, 150 - 34); g.lineTo(x + 35, 150 - 58); g.lineTo(x + 66, 150 - 34); g.closePath(); g.fill(); g.stroke(); break;
      case 'flags': g.fillStyle = INK; g.fillRect(x + 30, 150 - h - 20, 3, h + 20); g.fillStyle = RED; g.globalAlpha = 1; g.fillRect(x + 33, 150 - h - 20, 30, 20); g.strokeRect(x + 33, 150 - h - 20, 30, 20); g.fillStyle = GOLD; g.fillRect(x + 44, 150 - h - 14, 8, 8); break;
      case 'waves': g.fillStyle = '#fff'; g.beginPath(); g.moveTo(x + 10, 150); g.lineTo(x + 70, 150); g.lineTo(x + 60, 150 - 20); g.lineTo(x + 20, 150 - 20); g.closePath(); g.fill(); g.stroke(); g.fillStyle = L.c; g.fillRect(x + 38, 150 - 20 - h * .6, 3, h * .6); g.beginPath(); g.moveTo(x + 41, 150 - 20 - h * .6); g.lineTo(x + 41, 150 - 24); g.lineTo(x + 60, 150 - 24); g.closePath(); g.fill(); g.stroke(); break;
    }
  }
  g.globalAlpha = 1;
}
function ground(L, off) {
  g.fillStyle = L.gr; g.fillRect(0, 150, W, H - 150); g.strokeStyle = INK; g.lineWidth = 3; g.beginPath(); g.moveTo(0, 150); g.lineTo(W, 150); g.stroke();
  for (let i = 0; i < 3; i++) { g.fillStyle = i % 2 ? 'rgba(255,255,255,.12)' : 'rgba(24,38,43,.1)'; g.fillRect(0, LANE[i] - 31, W, 62) }
  g.strokeStyle = 'rgba(255,255,255,.7)'; g.lineWidth = 3; g.setLineDash([26, 18]); g.lineDashOffset = off % 44;
  [201, 263].forEach(y => { g.beginPath(); g.moveTo(0, y); g.lineTo(W, y); g.stroke() }); g.setLineDash([]);
}
function coin(x, y, T, k) { const w = Math.abs(Math.cos(T * 4 + k * .05)) * 8 + 2; g.fillStyle = 'rgba(24,38,43,.2)'; ell(x, y, 9, 3); g.fill(); g.fillStyle = GOLD; g.strokeStyle = INK; g.lineWidth = 2.5; ell(x, y - 16, w, 9); g.fill(); g.stroke(); g.strokeStyle = '#C98A12'; g.lineWidth = 1.5; ell(x, y - 16, w * .55, 5.5); g.stroke() }
function obs(x, y) {
  g.fillStyle = 'rgba(24,38,43,.25)'; ell(x, y, 24, 6); g.fill();
  g.fillStyle = '#fff'; g.strokeStyle = INK; g.lineWidth = 3; g.fillRect(x - 22, y - 34, 44, 26);
  g.save(); g.beginPath(); g.rect(x - 22, y - 34, 44, 26); g.clip(); g.fillStyle = RED;
  for (let k = -1; k < 5; k++) { g.beginPath(); g.moveTo(x - 22 + k * 14, y - 8); g.lineTo(x - 22 + k * 14 + 7, y - 8); g.lineTo(x - 22 + k * 14 + 17, y - 34); g.lineTo(x - 22 + k * 14 + 10, y - 34); g.closePath(); g.fill() } g.restore();
  g.strokeRect(x - 22, y - 34, 44, 26); g.fillStyle = INK; g.fillRect(x - 18, y - 8, 6, 8); g.fillRect(x + 12, y - 8, 6, 8);
}
const DC = [BLUE, GOLD, RED];
function banner(o, sx) { g.fillStyle = INK; g.fillRect(sx - 4, 96, 94, 26); g.fillStyle = '#fff'; g.font = '800 15px "Baloo 2"'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('CÂU ' + (o.q + 1) + '/' + G.Q.length, sx + 43, 110) }
function door(o, sx, i) {
  const y = LANE[i], r = o.res;
  g.fillStyle = DC[i]; g.strokeStyle = INK; g.lineWidth = 3; g.fillRect(sx, y - 56, 86, 58); g.strokeRect(sx, y - 56, 86, 58);
  g.fillStyle = 'rgba(255,255,255,.25)'; g.fillRect(sx + 6, y - 50, 74, 8);
  g.fillStyle = i === 1 ? INK : '#fff'; g.font = '800 36px "Baloo 2"'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(LET[i], sx + 43, y - 26);
  if (r) {
    const right = G.Q[o.q][2];
    if (i === right) { g.fillStyle = 'rgba(78,143,95,.85)'; g.fillRect(sx, y - 56, 86, 58); g.fillStyle = '#fff'; g.fillText('✓', sx + 43, y - 26) }
    else if (i === r.lane) { g.fillStyle = 'rgba(201,52,43,.85)'; g.fillRect(sx, y - 56, 86, 58); g.fillStyle = '#fff'; g.fillText('✗', sx + 43, y - 26) }
  }
}
function draw() {
  const T = RM ? 0 : t, L = G.L, off = G.x;
  g.save(); if (G.shake > 0) g.translate((Math.random() - .5) * 7, (Math.random() - .5) * 7);
  if (!L._g) { L._g = g.createLinearGradient(0, 0, 0, 160); L._g.addColorStop(0, L.sky); L._g.addColorStop(1, '#fff') }
  g.fillStyle = L._g; g.fillRect(-10, -10, W + 20, 170);
  g.fillStyle = GOLD; g.strokeStyle = INK; g.lineWidth = 3; ell(540, 52, 26, 26); g.fill(); g.stroke();
  g.fillStyle = 'rgba(255,255,255,.85)'; for (let k = 0; k < 3; k++)ell(((T * 10 + k * 240) % (W + 200)) - 100, 40 + k * 22, 38, 12), g.fill();
  far(L, off); ground(L, off);
  const it = [];
  for (const o of G.O) {
    if (o.dead) continue; const sx = PX + o.x - G.x; if (sx < -110 || sx > W + 60) continue;
    if (o.k === 'g') { it.push({ y: 0, f: () => banner(o, sx) }); for (let i = 0; i < 3; i++)it.push({ y: LANE[i] - .5, f: () => door(o, sx, i) }) }
    else it.push({ y: LANE[o.l], f: o.k === 'c' ? () => coin(sx, LANE[o.l], T, o.x) : () => obs(sx, LANE[o.l]) });
  }
  it.push({
    y: G.py, f: () => {
      if (G.inv > 0 && Math.floor(G.inv * 12) % 2) return;
      sprite(g, PX, G.py, CH[prog.hero], G.run ? -Math.abs(Math.sin(T * 13)) * 3 : Math.sin(T * 3) * 1, G.run ? Math.sin(T * 13) * 2.5 : 0, 1.15)
    }
  });
  it.sort((a, b) => a.y - b.y).forEach(o => o.f());
  PT.forEach(p => {
    if (p.k === 's') { g.globalAlpha = Math.max(0, p.l * 2); g.fillStyle = GOLD; g.fillRect(p.x - 2, p.y - 2, 4, 4) }
    else if (p.k === 'd') { g.globalAlpha = Math.max(0, p.l * 1.4); g.fillStyle = 'rgba(255,255,255,.8)'; g.beginPath(); g.arc(p.x, p.y, 3 + (.4 - p.l) * 8, 0, 7); g.fill() }
    else { g.globalAlpha = Math.min(1, p.l * 2); g.font = '800 18px "Baloo 2"'; g.textAlign = 'center'; g.textBaseline = 'alphabetic'; g.lineWidth = 3; g.strokeStyle = INK; g.fillStyle = GOLD; g.strokeText(p.s, p.x, p.y); g.fillText(p.s, p.x, p.y) }
    g.globalAlpha = 1
  });
  g.restore();
}
function frame(ts) { const dt = Math.min(.05, (ts - last) / 1000 || 0); last = ts; t += dt; update(dt); if (scr === 'play' && G) draw(); requestAnimationFrame(frame) }

/* ---------- Màn hình ---------- */
function show(id) { ['title', 'levels', 'play', 'lab'].forEach(s => $('#' + s).hidden = s !== id); scr = id }
function toLevels() { G = null; show('levels'); renderLevels() }
function startLevel(li) {
  prog.hero = prog.hero | 0; G = newRun(li); PT.length = 0; show('play'); hud(); tip(); $('#pgi').style.width = '0';
  $$('u', $('#prog')).forEach(u => u.remove()); G.gt.forEach(g => { const u = mk('u'); u.style.left = (g.x / G.end * 100) + '%'; $('#prog').append(u) });
  const L = G.L, pages = L.p.slice(); let i = 0;
  const guide = { w: 'Hướng dẫn', r: 'Cách chơi', look: CH[prog.hero], c: GOLD };
  const next = () => {
    if (i < pages.length) { const txt = pages[i++]; dlg(L, txt, [[i < pages.length || li === 0 ? 'Tiếp' : 'Bắt đầu chạy', next]]) }
    else if (li === 0 && i === pages.length) { i++; dlg(guide, 'Nhấn mũi tên lên xuống (hoặc W, S) để đổi làn. Phím 1, 2, 3 nhảy thẳng tới làn A, B, C. Trên điện thoại, chạm phía trên hoặc phía dưới nhân vật, hoặc dùng hai nút bên dưới. Va vào rào sọc đỏ hoặc chọn sai cổng sẽ mất một tim.', [['Bắt đầu chạy', next]]) }
    else { hideDlg(); G.run = true }
  };
  next();
}
function renderLevels() {
  const box = $('#lvs'); box.textContent = '';
  LV.forEach((L, i) => {
    const open = i === 0 || prog.done[i - 1] || prog.unlock, b = mk('button', 'lv'); b.disabled = !open;
    const pw = mk('div', 'pw'); pw.style.setProperty('--pc', L.c); const im = new Image(); im.src = uri(L.look); im.alt = L.w; pw.append(im);
    const tx = mk('div'); const s = prog.st[i] || 0;
    tx.append(mk('span', 'lvn', 'Chặng ' + (i + 1)), mk('span', null, L.t), mk('br'), mk('span', null, L.w), mk('br'), mk('span', 'stars', '★'.repeat(Math.min(s, QN)) + '☆'.repeat(Math.max(0, QN - s)) + (open ? '' : '  (khóa)')));
    b.append(pw, tx); b.onclick = () => startLevel(i); box.append(b);
  });
}

/* ---------- Điều khiển ---------- */
const lane = d => { if (G && G.run) G.pl = Math.max(0, Math.min(2, G.pl + d)) };
/* ---------- Nhạc lofi tổng hợp bằng Web Audio ---------- */
let musicContext = null, musicTimer = null, musicStep = 0, musicOscillators = [], musicGain = null;
const musicChords = [
  [174.61, 207.65, 261.63],
  [130.81, 164.81, 196.00],
  [146.83, 174.61, 220.00],
  [116.54, 146.83, 174.61]
];
function updateMusicButtons(playing, error = '') {
  $$('.music-toggle').forEach(button => {
    button.textContent = error || ('♫ Nhạc: ' + (playing ? 'bật' : 'tắt'));
    button.setAttribute('aria-pressed', String(playing));
    button.title = error || (playing ? 'Tắt nhạc' : 'Bật nhạc lofi');
  });
}
function playMusicStep() {
  if (!musicContext || musicContext.state !== 'running') return;
  const now = musicContext.currentTime + .025;
  const step = musicStep++;
  if (step % 16 === 0) {
    const chord = musicChords[(step / 16) % musicChords.length];
    musicOscillators.forEach((oscillator, i) => oscillator.frequency.setTargetAtTime(chord[i], now, .35));
  }
  const notes = [261.63, 311.13, 349.23, 392, 466.16, 392, 349.23, 311.13];
  if (step % 2 === 0) {
    const oscillator = musicContext.createOscillator(), envelope = musicContext.createGain();
    oscillator.type = 'sine'; oscillator.frequency.value = notes[(step / 2) % notes.length];
    envelope.gain.setValueAtTime(.0001, now);
    envelope.gain.exponentialRampToValueAtTime(.045, now + .025);
    envelope.gain.exponentialRampToValueAtTime(.0001, now + .42);
    oscillator.connect(envelope).connect(musicGain);
    oscillator.start(now); oscillator.stop(now + .44);
    oscillator.onended = () => { oscillator.disconnect(); envelope.disconnect() };
  }
  if (step % 4 === 0) {
    const kick = musicContext.createOscillator(), envelope = musicContext.createGain();
    kick.type = 'sine'; kick.frequency.setValueAtTime(92, now); kick.frequency.exponentialRampToValueAtTime(48, now + .13);
    envelope.gain.setValueAtTime(.055, now); envelope.gain.exponentialRampToValueAtTime(.0001, now + .16);
    kick.connect(envelope).connect(musicGain);
    kick.start(now); kick.stop(now + .17);
    kick.onended = () => { kick.disconnect(); envelope.disconnect() };
  }
}
async function toggleMusic() {
  try {
    const Audio = window.AudioContext || window.webkitAudioContext;
    if (!Audio) throw new Error('Trình duyệt không hỗ trợ Web Audio');
    if (!musicContext) {
      musicContext = new Audio();
      musicGain = musicContext.createGain(); musicGain.gain.value = .55; musicGain.connect(musicContext.destination);
      const filter = musicContext.createBiquadFilter(); filter.type = 'lowpass'; filter.frequency.value = 900;
      const padGain = musicContext.createGain(); padGain.gain.value = .012;
      filter.connect(padGain).connect(musicGain);
      musicOscillators = musicChords[0].map(frequency => {
        const oscillator = musicContext.createOscillator();
        oscillator.type = 'triangle'; oscillator.frequency.value = frequency;
        oscillator.connect(filter); oscillator.start(); return oscillator;
      });
      const buffer = musicContext.createBuffer(1, musicContext.sampleRate * 2, musicContext.sampleRate);
      const samples = buffer.getChannelData(0);
      for (let i = 0; i < samples.length; i++) samples[i] = (Math.random() * 2 - 1) * .22;
      const noise = musicContext.createBufferSource(), noiseFilter = musicContext.createBiquadFilter();
      const noiseGain = musicContext.createGain();
      noise.buffer = buffer; noise.loop = true; noiseFilter.type = 'lowpass'; noiseFilter.frequency.value = 1400;
      noiseGain.gain.value = .018; noise.connect(noiseFilter).connect(noiseGain).connect(musicGain); noise.start();
    }
    if (musicContext.state === 'running') {
      clearInterval(musicTimer); musicTimer = null;
      await musicContext.suspend();
      updateMusicButtons(false);
    } else {
      await musicContext.resume();
      playMusicStep();
      musicTimer = setInterval(playMusicStep, 375);
      updateMusicButtons(true);
    }
  } catch (error) {
    clearInterval(musicTimer); musicTimer = null;
    updateMusicButtons(false, 'Không thể phát nhạc');
    console.error('Không thể phát nhạc Web Audio:', error);
  }
}
$$('.music-toggle').forEach(button => button.addEventListener('click', toggleMusic));
addEventListener('keydown', e => {
  if (scr !== 'play' || !G) return; const k = e.key;
  if (k === 'ArrowUp' || k === 'w' || k === 'W') { lane(-1); e.preventDefault() }
  else if (k === 'ArrowDown' || k === 's' || k === 'S') { lane(1); e.preventDefault() }
  else if (k.length === 1 && '123'.includes(k) && G.run) G.pl = +k - 1;
});
cv.addEventListener('pointerdown', e => {
  if (!G || !G.run) return; const r = cv.getBoundingClientRect(), y = (e.clientY - r.top) * (H / r.height);
  if (y < G.py - 30) lane(-1); else if (y > G.py + 10) lane(1);
});
$$('.pad button').forEach(b => b.addEventListener('pointerdown', e => { e.preventDefault(); lane(+b.dataset.d) }));
$('#menu').onclick = () => toLevels();
$('#back0').onclick = () => show('title');
$('#go').onclick = () => { toLevels() };

/* ---------- Khởi tạo màn mở đầu ---------- */
const pk = $('#picks');
CH.forEach((o, i) => { const b = mk('button', 'pick'); const im = new Image(); im.src = uri(o); im.alt = ''; b.append(im, mk('span', null, ['Nam', 'Hà'][i])); b.onclick = () => { prog.hero = i; setPick(); save() }; pk.append(b) });
function setPick() { $$('.pick').forEach((b, i) => b.setAttribute('aria-pressed', i === prog.hero)) }
setPick();
if (prog.done.some(Boolean)) $('#go').textContent = 'Tiếp tục';
requestAnimationFrame(frame);
boot();
