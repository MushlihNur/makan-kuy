class AppBarMenu extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <button id="menu" class="header__menu" aria-label="navigation-menu">☰</button>
      `;
  }
}

customElements.define('app-bar-menu', AppBarMenu);
