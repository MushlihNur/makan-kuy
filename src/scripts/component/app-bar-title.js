class AppTitle extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <div class="header__inner">
        <h1 class="header__title">
          Makan Kuy
        </h1>
      </div>
    `;
  }
}

customElements.define('app-bar-title', AppTitle);
