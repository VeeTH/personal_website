class NavigBar extends HTMLElement {
    constructor() {
      super();
    }
  
  connectedCallback() {
    this.innerHTML = `
        <ul class="navbar">
          <li><h3><a href="index.html">Home</a></h3></li>
          <li><h3><a href="under_construction.html">About Me</a></h3></li>
          <li><h3><a href="under_construction.html">Blog</a></h3></li>
          <li><h3><a href="under_construction.html">Shrines</a></h3></li>
          <li><h3><a href="projects.html">Projects</a></h3></li>
          <li><h3><a href="credits.html">Credits</a></h3></li>
        </ul>
    `;
  }
}

customElements.define('navi-bar', NavigBar);