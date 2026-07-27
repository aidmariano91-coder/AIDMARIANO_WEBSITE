// Header e footer condivisi (iniettati) — così si mantengono in un solo posto.
(function () {
  const atRoot = !location.pathname.includes('/pages/');
  const base = atRoot ? '' : '../';
  const page = document.body.dataset.page || '';

  const links = [
    ['index.html', 'Home', 'home'],
    ['pages/eventi.html', 'Eventi', 'eventi'],
    ['pages/galleria.html', 'Galleria', 'galleria'],
    ['pages/giornalino.html', 'Giornalino', 'giornalino'],
    ['pages/ricette.html', 'Ricette', 'ricette'],
    ['pages/direttivo.html', 'Associazione', 'direttivo'],
    ['pages/contatti.html', 'Contatti', 'contatti'],
  ];

  const nav = links.map(([href, label, id]) =>
    `<li><a class="${page === id ? 'active' : ''}" href="${base}${href}">${label}</a></li>`
  ).join('');

  const header = `
  <div class="tricolor"><span></span><span></span><span></span></div>
  <header class="site-header">
    <nav class="nav">
      <a class="brand" href="${base}index.html">
        <img src="${base}assets/logo.png" alt="Logo AID Mariano">
        <span><b>Associazione Intercomunale<br>Diabetici OdV</b><small>Mariano Comense · dal 1991</small></span>
      </a>
      <button class="nav-toggle" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
      <ul class="nav-links" id="menu">
        ${nav}
        <li><a class="nav-cta ${page === 'area' ? 'active' : ''}" href="${base}pages/area-soci.html">Area Soci</a></li>
      </ul>
    </nav>
  </header>`;

  const footer = `
  <footer class="site-footer">
    <div class="container foot-grid">
      <div>
        <h4>Associazione Intercomunale Diabetici OdV</h4>
        <p>c/o Presidio Polispecialistico "Felice Villa"<br>via Isonzo 42/B — 22066 Mariano Comense (CO)</p>
        <p class="mt-s">C.F. 90004110137 · Iscritta al RUNTS<br>Email: <a href="mailto:aidmariano91@gmail.com">aidmariano91@gmail.com</a></p>
      </div>
      <div>
        <h4>Naviga</h4>
        <ul class="foot-links">
          <li><a href="${base}pages/eventi.html">Eventi e iniziative</a></li>
          <li><a href="${base}pages/giornalino.html">Giornalino</a></li>
          <li><a href="${base}pages/ricette.html">Ricette</a></li>
          <li><a href="${base}pages/direttivo.html">L'Associazione</a></li>
        </ul>
      </div>
      <div>
        <h4>Area riservata</h4>
        <ul class="foot-links">
          <li><a href="${base}pages/area-soci.html">Area Soci</a></li>
          <li><a href="${base}pages/direttivo.html#trasparenza">Trasparenza</a></li>
          <li><a href="${base}pages/contatti.html">Contatti</a></li>
        </ul>
      </div>
    </div>
    <div class="container foot-bottom">
      <span>© 2026 Associazione Intercomunale Diabetici OdV — Mariano Comense</span>
      <span>Facebook · Instagram · WhatsApp</span>
    </div>
  </footer>`;

  document.body.insertAdjacentHTML('afterbegin', header);
  document.body.insertAdjacentHTML('beforeend', footer);

  // Menu mobile
  const btn = document.querySelector('.nav-toggle');
  const menu = document.getElementById('menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
  }
})();
