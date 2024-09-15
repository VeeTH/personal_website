class SocialsList extends HTMLElement {
    constructor() {
      super();
    }
  
  connectedCallback() {
    this.innerHTML = `
      <h1><b>Socials</b></h1>
      <h3><img src="resources/icons/YouTube.svg">YouTube</h3>
      <h3>Reddit</h3>
      <h3>TikTok</h3>
      <h3>Instagram</h3>
      <h3>GitHub</h3>
      <h3>Bluesky</h3>
      <h3>Discord: VeeTHis</h3>
    `;
  }
}

customElements.define('socials-list', SocialsList);