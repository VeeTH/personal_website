class ButtonList extends HTMLElement {
    constructor() {
      super();
    }
  
  connectedCallback() {
    this.innerHTML = `
        <marquee>
            <a href="https://obama.nekoweb.org/" target="_blank"><img src="https://obama.nekoweb.org/obbutton.png" alt="obama"></a> 
            <a href="https://xtract.dev/" target="_blank"><img src="https://xtract.dev/buttons/button_space.png" alt="xtract's space"></a>
            <a href="https://thinliquid.dev" target="_blank"><img src="https://thinliquid.dev/thnlqd.png" alt="thinliquid's button" /></a>
            <a href="https://www.mozilla.org/firefox/" target="_blank"><img src="resources/buttons/firefoxget.gif"></a>
            <a href="https://www.roblox.com/users/38524636/profile" target="_blank"><img src="resources/buttons/roblox.gif"></a>
        </marquee>
    `;
  }
}

customElements.define('button-list', ButtonList);