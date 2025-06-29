class HeadComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <head>
                <div class="header-container">
                <a href="index.html">
                <img src="assets/img/logo.png" loading="lazy" alt="Monolito Ingeniería - Consultores en diseño estructural CDMX" class="logo">
                    </a>
                    <button class="menu-toggle" id="menu-toggle">
                        <i class="fas fa-bars"></i>
                    </button>
                    <nav id="main-nav">
                        <a href="index.html">Inicio</a>
                        <a href="servicios.html">Servicios</a>
                        <a href="equipo.html">Equipo</a>
                        <a href="casos.html">Casos de éxito</a>
                        <a href="blog.html">Blog</a>
                        <a href="contacto.html">Contacto</a>
                    </nav>
                </div>
            </head>
        `;
    }
}
customElements.define('head-component', HeadComponent);