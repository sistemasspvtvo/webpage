class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <div class="header-container">
          <a href="index.html">
            <picture>
              <source srcset="assets/img/logo.webp" type="image/webp">
              <img src="/assets/img/logo.png" alt="Logo Monolito" width="40" height="40">
            </picture>
          </a>
          <button class="menu-toggle" id="menu-toggle" aria-expanded="false">
            <i class="fas fa-bars"></i>
          </button>
          <nav id="main-nav">
            <a href="https://monolito.lat/">Inicio</a>
            <a href="servicios">Servicios</a>
            <a href="equipo">Equipo</a>
            <a href="casos-de-éxito">Casos de Éxito</a>
            <a href="blog">Blog</a>
            <a href="contacto">Contacto</a>
          </nav>
        </div>
      </header>
    `;
    const menuToggle = this.querySelector('#menu-toggle');
    const mainNav = this.querySelector('#main-nav');
    menuToggle?.addEventListener('click', () => {
      const isExpanded = mainNav.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', isExpanded);
    });
  }
}

customElements.define('header-component', HeaderComponent);