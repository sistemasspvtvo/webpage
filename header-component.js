class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="header-container">
                <a href="index.html">

<picture>
  <source srcset="/assets/img/logo.webp" type="image/webp">
  <img src="/assets/img/logo.png" alt="Logo Monolito" width="40" height="40">
</picture>
                    </a>
                    <button class="menu-toggle" id="menu-toggle">
                        <i class="fas fa-bars"></i>
                    </button>
                    <nav id="main-nav">
                        <a href="index.html">Inicio</a>
                        <a href="servicios.html">Servicios</a>
                        <a href="equipo.html">Equipo</a>
                        <a href="casos.html">Casos de Éxito</a>
                        <a href="blog">Blog</a>
                        <a href="contacto.html">Contacto</a>
                    </nav>
                </div>
            </header>
        `;
    }
}
customElements.define('header-component', HeaderComponent);