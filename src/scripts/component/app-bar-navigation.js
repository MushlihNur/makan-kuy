class AppBarNavigation extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  _render() {
    this.innerHTML = `
      <ul class="nav__list">
        <li class="nav__item"><a href="#/home">Home</a></li>
        <li class="nav__item"><a href="#/favorite">Favorite</a></li>
        <li class="nav__item"><a href="https://www.instagram.com/mushlih.nuris/">About Us</a></li>
      </ul>
    `;

    this.querySelector('.nav__item').addEventListener('click', this._clickEvent);
  }
}

customElements.define('app-bar-nav', AppBarNavigation);
