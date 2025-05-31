class SiteFooter extends HTMLElement {
    constructor() {
      super();
    }
  
  connectedCallback() {
    this.innerHTML = `
            <span><img src="/resources/buttons/hand_coded_html.bmp" style="padding-top: 60px;"><img src="/resources/buttons/paws.png" style="padding-top: 60px; padding-left: 5px"></span>
            <h3>Powered by <a href="https://nekoweb.org/" target="_blank" style="color: plum !important; font-weight: normal !important; text-shadow: none !important;">nekoweb</a> :3</h3>
            <h3>Last updated May 31st, 2025</h3>
            <h3><a id="licensebox_btn" style="cursor: pointer; user-select: none;">Copyright © 2024<!---2025--> VeeTHis</a></h3>

            <div id="licensebox" title="LicenseBox" style="display: none;">
              <p id="licensebox_txt">Loading license...</p>
            </div>
    `;
  }
}

customElements.define('site-footer', SiteFooter);