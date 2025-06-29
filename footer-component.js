   class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="footer-info">
                <picture>
                    <source srcset="/assets/img/logo-blanco.webp" type="image/webp">
                    <img src="/assets/img/logo-blanco.png" alt="Logo Monolito" width="40" height="40" alt="Monolito Ingeniería - Consultoría estructural, levantamientos, inspecciones y gestorías en Coyoacán, Ciudad de México">
                </picture>
                <p class="slogan">"En Monolito Ingeniería, transformamos cálculos en soluciones seguras...<br>porque tu tranquilidad no se negocia."</p>
                <p>Monolito Ingeniería S.A. de C.V.</p>
                <p>Av. Pedro Henríquez Ureña 275, Col. Pedregal de Santo Domingo, Coyoacán, CDMX</p>
                <p>Tel: 56 4393 9397 | email: <a href="mailto:consultoria@monolito.lat">consultoria@monolito.lat</a></p>
                <div class="social-icons-footer">
                    <a href="https://wa.me/5215643939397" target="_blank" title="WhatsApp">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                    <a href="https://www.instagram.com/monolitoingenieria/" target="_blank" title="Instagram">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.x.com/Monolito_Ing/" target="_blank" title="x.com">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="mailto:consultoria@monolito.lat" title="Correo electrónico">
                        <i class="far fa-envelope"></i>
                    </a>
                </div>
                <p>&copy; ${new Date().getFullYear()} Todos los derechos reservados</p>
                </div>
                <a href="//www.dmca.com/Protection/Status.aspx?ID=9119aef2-a242-43b7-86f1-d2a5bb4a5a6c" title="DMCA.com Protection Status" class="dmca-badge"> <img src ="https://images.dmca.com/Badges/DMCA_logo-std-btn140w.png?ID=9119aef2-a242-43b7-86f1-d2a5bb4a5a6c" width="141" height="53"  alt="DMCA.com Protection Status" /></a>  <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>
            </footer>
        `;
    }
}

customElements.define('footer-component', FooterComponent);