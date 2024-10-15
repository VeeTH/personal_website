class SocialsList extends HTMLElement {
    constructor() {
      super();
    }
  
  connectedCallback() {
    this.innerHTML = `
      <h1><b>Socials</b></h1>
      <h3><!-- <img src="resources/icons/YouTube.svg" width=25rem> --><a href="https://youtube.com/c/veethis" target="_blank">YouTube</a></h3>
      <h3><a href="https://reddit.com/u/veethis" target="_blank">Reddit (NSFW)</a></h3>
      <h3><a href="https://tiktok.com/@veethis" target="_blank">TikTok</a></h3>
      <h3><a href="https://instagram.com/vee_this" target="_blank">Instagram</a></h3>
      <h3><a href="https://github.com/VeeTH" target="_blank">GitHub</a></h3>
      <h3><a href="https://bsky.app/profile/veethis.bsky.social" target="_blank">Bluesky</a></h3>
      <h3>Discord: <b>VeeTHis</b></h3>
      <h3><a href="https://www.roblox.com/users/38524636/profile" target="_blank">Roblox</a></h3>
      <h3><a href="https://www.anime-planet.com/users/VeeTHis" target="_blank">Anime Planet</a></h3>
    `;
  }
}

customElements.define('socials-list', SocialsList);