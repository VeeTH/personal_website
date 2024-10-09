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
          <li class="dropdown">
            <h3><a href="#" class="navbar-settings">Shrines</a></h3>
            <div class="dropdown-content">
              <h3><a href="under_construction.html">Vocaloid</a></h3>
              <h3><a href="under_construction.html">Genshin Impact</a></h3>
            </div>
          </li> 
          <li><h3><a href="projects.html">Projects</a></h3></li>
          <li><h3><a href="credits.html">Credits</a></h3></li>
        </ul>
    `;
  }
}

customElements.define('navi-bar', NavigBar);