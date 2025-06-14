class SocialsList extends HTMLElement {
    constructor() {
      super();
    }
  
  connectedCallback() {
    this.innerHTML = `
      <h1><b>Socials</b></h1>
      
      <!-- OLD LAYOUT:
      <div class="social_link">
        <img src="/resources/icons/YouTube.svg" width="25rem"></img>
        <h3><a href="https://youtube.com/c/veethis" target="_blank">YouTube</a></h3>
      </div>
      <div class="social_link">
        <img src="/resources/icons/Reddit_1.svg" width="25rem"></img>
        <h3><a href="https://reddit.com/u/veethis" target="_blank">Reddit (NSFW)</a></h3>
      </div>
      <div class="social_link">
        <img src="/resources/icons/TikTok.svg" width="25rem" style="zoom:90%; position: relative; left: 1px;"></img>
        <h3><a href="https://tiktok.com/@veethis" target="_blank">TikTok</a></h3>
      </div>
      <div class="social_link">
        <img src="/resources/icons/Instagram.svg" width="25rem"></img>
        <h3><a href="https://instagram.com/vee_this" target="_blank">Instagram</a></h3>
      </div>
      <div class="social_link">
        <img src="/resources/icons/Xiaohongshu.svg" width="25rem" style="zoom: 75%; position: relative; left: 4px;"></img>
        <h3><a href="https://www.xiaohongshu.com/user/profile/6784b288000000000403ca40" target="_blank">Xiaohongshu</a></h3>
      </div>
      <div class="social_link">
        <img src="/resources/icons/GitHub.svg" width="25rem"></img>
        <h3><a href="https://github.com/VeeTH" target="_blank">GitHub</a></h3>
      </div>
      <div class="social_link">
        <img src="/resources/icons/Bluesky.svg" width="25rem" style="zoom: 80%; position: relative; left: 4px;"></img>
        <h3><a href="https://bsky.app/profile/veesdomain.xyz" target="_blank">Bluesky</a></h3>
      </div>
      <div class="social_link">
        <img src="/resources/icons/Discord New.svg" width="25rem"></img>
        <h3>Discord: <b>VeeTHis</b></h3>
      </div>
      <div class="social_link">
        <img src="/resources/icons/Furtrack.png" width="25rem" style="zoom: 85%; position: relative; left: 4px;"></img>
        <h3><a href="https://www.furtrack.com/user/VeeTHis" target="_blank">FurTrack</a></h3>
      </div> -->

    <div class="social-grid">
      <div class="social-item">
        <img src="/resources/icons/YouTube.svg" width="40rem"></img>
        <h3><a href="https://youtube.com/c/veethis" target="_blank">YouTube</a></h3>
      </div>
      <div class="social-item">
        <img src="/resources/icons/Reddit.png" width="40rem" style="zoom:95%; padding-bottom: 3px;"></img>
        <h3><a href="https://reddit.com/u/veethis" target="_blank">Reddit</a></h3>
      </div>
      <div class="social-item" style="position: relative; top: -1px;">
        <img src="/resources/icons/TikTok.svg" width="40rem" style="zoom:105%;"></img>
        <h3><a href="https://tiktok.com/@veethis" target="_blank">TikTok</a></h3>
      </div>
      <div class="social-item">
        <img src="/resources/icons/Instagram.svg" width="40rem" style="zoom: 95%; padding-top: 1px; padding-bottom: 2px;"></img>
        <h3><a href="https://instagram.com/vee_this" target="_blank">Instagram</a></h3>
      </div>
      <div class="social-item">
        <img src="/resources/icons/Xiaohongshu.svg" width="40rem"></img>
        <h3><a href="https://www.xiaohongshu.com/user/profile/6784b288000000000403ca40" target="_blank">rednote</a></h3>
      </div>
      <div class="social-item">
      <img src="/resources/icons/Bluesky.svg" width="40rem" style="padding-top: 5px; position: relative; top: -2px;"></img>
      <h3><a href="https://bsky.app/profile/veesdomain.xyz" target="_blank">Bluesky</a></h3>
      </div>
      <div class="social-item">
      <img src="/resources/icons/Telegram.svg" width="40rem"></img>
      <h3><a href="https://t.me/veethis" target="_blank">Telegram</a></h3>
      </div>
      <div class="social-item" style="position: relative; top: -3px;">
      <img src="/resources/icons/Discord New.svg" width="40rem" style="zoom: 115%;"></img>
      <h3 style="position: relative; top: -3px;"><b>@VeeTHis</b></h3>
      </div>
      <div class="social-item">
        <img src="/resources/icons/GitHub.svg" width="40rem" style="filter: invert(100%);"></img>
        <h3><a href="https://github.com/VeeTH" target="_blank">GitHub</a></h3>
      </div>
      <div class="social-item">
        <img src="/resources/icons/Furtrack.png" width="40rem"></img>
        <h3><a href="https://www.furtrack.com/user/VeeTHis" target="_blank">FurTrack</a></h3>
      </div>
      <div class="social-item">
        <img src="/resources/icons/Roblox.svg" width="40rem"></img>
        <h3><a href="https://www.roblox.com/users/38524636/profile" target="_blank">Roblox</a></h3>
      </div>
    </div>
    `;
  }
}

customElements.define('socials-list', SocialsList);