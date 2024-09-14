class ButtonList extends HTMLElement {
    constructor() {
      super();
    }
  
  connectedCallback() {
    this.innerHTML = `
        <marquee>
            <a href="https://obama.nekoweb.org/" target="_blank"><img src="resources/buttons/obbutton.png"></a>
            <a href="https://www.mozilla.org/firefox/" target="_blank"><img src="resources/buttons/firefoxget.gif"></a>
            <a href="https://www.roblox.com/users/38524636/profile" target="_blank"><img src="resources/buttons/roblox.gif"></a>
        </marquee>
    `;
  }
}

customElements.define('button-list', ButtonList);