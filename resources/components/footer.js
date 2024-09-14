class SiteFooter extends HTMLElement {
    constructor() {
      super();
    }
  
  connectedCallback() {
    this.innerHTML = `
            <img src="resources/buttons/hand_coded_html.bmp">
            <h3>Powered by <a href="https://nekoweb.org/" target="_blank" style="color: plum !important; font-weight: normal !important;">nekoweb</a> :3</h3>
            <h3>Version 1.0.0 <a href="changelog.html" style="color: white !important; font-weight: normal !important;">[Changelog] <!--Make popup modal consisting of scrollable changelog history--></a></h3>
            <!--<h3>Last updated XXX</h3>-->
            <h3>Copyright © 2024 VeeTHis</h3>
    `;
  }
}

customElements.define('site-footer', SiteFooter);