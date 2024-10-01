class SiteFooter extends HTMLElement {
    constructor() {
      super();
    }
  
  connectedCallback() {
    this.innerHTML = `
            <img src="resources/buttons/hand_coded_html.bmp" style="padding-top: 60px;">
            <h3>Powered by <a href="https://nekoweb.org/" target="_blank" style="color: plum !important; font-weight: normal !important; text-shadow: none !important;">nekoweb</a> :3</h3>
            <h3>Version 1.0.0 <a href="changelog.html" style="color: white !important; font-weight: normal !important; text-shadow: none !important;">[Changelog] <!--Make popup modal consisting of scrollable changelog history--></a></h3>
            <h3>Last updated September 28th, 2024</h3>
            <h3>Copyright © 2024<!---2025--> VeeTHis</h3>
    `;
  }
}

customElements.define('site-footer', SiteFooter);