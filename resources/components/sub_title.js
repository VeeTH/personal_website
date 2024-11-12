class SubTitle extends HTMLElement {
    constructor() {
      super();
    }
  
  connectedCallback() {
    this.innerHTML = `
        <h3 style="float: right; position: relative; top: 100px; left: 100%;">Latest commit: <a target="_blank" id="commit-link"><span id="latest-commit" style="text-decoration: underline;">Fetching...</span></a></h3>
        <h2>Free Palestine</h2>
        <h2>Slava Ukraini</h2>
        <img src="/resources/mlm_flag.png" width="7%" height="20%"><a href="https://www.mabsland.com/Adoption.html" target="_blank"><img src="/resources/buttons/Censor_14c.gif" height="20.5%" style="padding-left: 10px;"></a>
    `;
  }
}

customElements.define('sub-title', SubTitle);