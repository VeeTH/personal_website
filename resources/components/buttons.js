class ButtonList extends HTMLElement {
    constructor() {
      super();
    }
  
  connectedCallback() {
    this.innerHTML = `
        <marquee behavior="alternate">
            <a href="https://obama.nekoweb.org/" target="_blank"><img src="https://obama.nekoweb.org/obbutton.png" alt="obama" style="padding-left: 50px;"></a> 
            <a href="https://xtract.dev/" target="_blank"><img src="https://xtract.dev/buttons/button_space.png" alt="xtract's space"></a>
            <a href="https://thinliquid.dev" target="_blank"><img src="https://thinliquid.dev/thnlqd.png" alt="thinliquid's button" /></a>
            <a href="https://dimden.dev/" target="_blank"><img src="https://dimden.dev/services/images/88x31.gif"></a>
            <a href="https://milkyway.moe/" target="_blank"><img src="https://milkyway.moe/milkybuttons/milkybtn.gif"></a>
            <a href="https://meteor.nekoweb.org/" target="_blank"><img src="https://meteor.nekoweb.org/button.gif"></a>
            <a href="https://modarchive.org/" target="_blank"><img src="resources/buttons/modarchive.png"></a>

            <img src="resources/buttons/queer-coded.png" style="padding-left: 50px;">
            <img src="resources/buttons/programmingsocks.gif" width="8.75%">
            <img src="resources/buttons/catboys-meow.gif">
            <img src="resources/buttons/jesus.png">
            <a href="https://www.youtube.com/watch?v=qpFUWNrjFUw" target="_blank"><img src="resources/buttons/miku.gif"></a>
            <a href="https://necoarc.dev/" target="_blank"><img src="resources/buttons/necoarc.png"></a>
            <a href="https://reddit.com/r/touhou/comments/1f5r5i8/brace_yourself_cirno" target="_blank"><img src="resources/buttons/cirnosys.png"></a>
            <a href="https://www.youtube.com/watch?v=eRbnVqTGLUc" target="_blank"><img src="resources/buttons/viburib.gif"></a> 
            <img src="resources/buttons/mug.png">
         
            <a href="https://en.wikipedia.org/wiki/Windows_10" target="_blank"><img src="resources/buttons/made_with_windows.gif" style="padding-left: 50px;"></a>
            <a href="https://www.mozilla.org/firefox/" target="_blank"><img src="resources/buttons/firefox.gif"></a>
            <a href="https://ublockorigin.com/" target="_blank"><img src="resources/buttons/ublock-now.png"></a>
            <img src="resources/buttons/chrome.gif" style="padding-right: 50px;">
            <!--<img src="resources/buttons/nft.gif">
            <img src="resources/buttons/keep-the-web-free.gif" style="padding-right: 50px;">-->            
        </marquee>
    `;
  }
}

customElements.define('button-list', ButtonList);