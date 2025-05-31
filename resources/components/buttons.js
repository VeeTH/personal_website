class ButtonList extends HTMLElement {
    constructor() {
      super();
    }
  
  connectedCallback() {
    this.innerHTML = `
        <div class="js_marquee">
            <a href="https://obama.nekoweb.org/" target="_blank"><img src="https://obama.nekoweb.org/obbutton.png" alt="obama" style="padding-left: 50px;"></a> 
            <!-- <a href="https://xtract.dev/" target="_blank"><img src="https://xtract.dev/buttons/button_space.png" alt="xtract's space"></a> -->
            <a href="https://thinliquid.dev" target="_blank"><img src="https://thinliquid.dev/thnlqd.png" alt="thinliquid's button" /></a>
            <!-- <a href="https://dimden.dev/" target="_blank"><img src="https://dimden.dev/services/images/88x31.gif"></a> -->
            <!-- <a href="https://milkyway.moe/" target="_blank"><img src="https://milkyway.moe/milkybuttons/milkybtn.gif"></a> -->
            <a href="https://meteor.nekoweb.org/" target="_blank"><img src="https://meteor.nekoweb.org/button.gif"></a>
            <a href="https://max.nekoweb.org/" target="_blank"><img src="https://max.nekoweb.org/images/button.png" alt="max's apartment"></a> 
            <!-- <a href="https://jeith.com/" target="_blank"><img src="https://neocities.jeith.com/jeith.gif" alt="jeith"></a> -->
            <a href="https://boxy.neocities.org/" target="_blank"><img src="https://boxy.neocities.org/images/boxBut.png" alt="boxy"></a>
            <a href="https://sillyKitty136.neocities.org" target="_blank"><img src="https://sillyKitty136.neocities.org/Button.gif"></a>
            <a href="https://thesoupsite.neocities.org/" target="_blank" "><img src="https://thesoupsite.neocities.org/img/soupbutton2.gif" width="88px" height="31px"></a>
            <a href="https://skruffy64.neocities.org/" target="_blank"><img src="/resources/buttons/skruffy_64.gif"></a>
            <a href="https://cadnomori.neocities.org/" target="_blank"><img src="https://cadnomori.neocities.org/banners/yokobanner.png"></a>
            <a href="https://sleepycircus.neocities.org/" target="_blank"><img src="https://sleepycircus.neocities.org/button.gif"></a>
            <!-- <a href="https://adilene.net/" target="_blank"><img src="https://adilene.net/images/sitebutton.gif"></a> -->
            <a href="https://ilovekazuha.nekoweb.org/" target="_blank"><img src="https://ilovekazuha.nekoweb.org/kazuhas/kazuhalink2.gif"></a>
            <a href="https://des.neocities.org/" target="_blank"><img src="/resources/buttons/des.gif"></a>
            <a href="https://freecatpics.nekoweb.org/" target="_blank"><img src="/resources/buttons/freecatpics.png"></a>
            <a href="https://modarchive.org/" target="_blank"><img src="/resources/buttons/modarchive.png"></a>
            <a href="https://www.sheepit-renderfarm.com" target="_blank"><img src="/resources/buttons/sheepit.gif"></a>
            <a href="https://www.roblox.com/users/38524636/profile" target="_blank"><img src="/resources/buttons/roblox.gif"></a>

            <img src="/resources/buttons/queer-coded.png" style="padding-left: 50px;">
            <img src="/resources/buttons/programmingsocks.gif" width=105rem>
            <img src="/resources/buttons/femboy.gif" width=88rem>
            <img src="/resources/buttons/catboys-meow.gif">
            <img src="/resources/buttons/drmario.gif">
            <img src="/resources/buttons/jesus.png">
            <a href="https://www.youtube.com/watch?v=qpFUWNrjFUw" target="_blank"><img src="/resources/buttons/miku.gif"></a>
            <a href="https://necoarc.dev/" target="_blank"><img src="/resources/buttons/necoarc.png"></a>
            <a href="https://reddit.com/r/touhou/comments/1f5r5i8/brace_yourself_cirno" target="_blank"><img src="/resources/buttons/cirnosys.png"></a>
            <a href="https://www.youtube.com/watch?v=eRbnVqTGLUc" target="_blank"><img src="/resources/buttons/viburib.gif"></a> 
            <img src="/resources/buttons/mug.png">
            <img src="/resources/buttons/virtualinsanity.gif">
            <a href="https://www.youtube.com/watch?v=4TVik_1kAjk" target="_blank"><img src="/resources/buttons/desp-anim.gif"></a>
         
            <a href="https://ruffle.rs/" target="_blank"><img src="/resources/buttons/ruffle.png" style="padding-left: 50px;"></a>
            <a href="https://en.wikipedia.org/wiki/Windows_10" target="_blank"><img src="/resources/buttons/made_with_windows.gif"></a>
            <a href="https://www.mozilla.org/firefox/" target="_blank"><img src="/resources/buttons/firefox.gif"></a>
            <a href="https://ublockorigin.com/" target="_blank"><img src="/resources/buttons/ublock-now.png"></a>
            <img src="/resources/buttons/chrome.gif">
            <img src="/resources/buttons/webp.gif">
            <img src="/resources/buttons/copyfloppy.gif" style="padding-right: 50px;">
            <!--<img src="/resources/buttons/nft.gif">
            <img src="/resources/buttons/keep-the-web-free.gif" style="padding-right: 50px;">-->            
        </div>
    `;
  }
}

customElements.define('button-list', ButtonList);