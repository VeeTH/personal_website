class SiteFooter extends HTMLElement {
    constructor() {
      super();
    }
  
  connectedCallback() {
    this.innerHTML = `
            <span><img src="/resources/buttons/hand_coded_html.bmp" style="padding-top: 60px;"><img src="/resources/buttons/paws.png" style="padding-top: 60px; padding-left: 5px"></span>
            <h3>Powered by <a href="https://nekoweb.org/" target="_blank" style="color: plum !important; font-weight: normal !important; text-shadow: none !important;">nekoweb</a> :3</h3>
            <h3>Last updated October 19th, 2024</h3>
            <h3>Copyright © 2024<!---2025--> VeeTHis</h3>
    `;
  }
}

customElements.define('site-footer', SiteFooter);