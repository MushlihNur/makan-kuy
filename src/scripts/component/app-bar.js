import './app-bar-title';
import './app-bar-menu';
import './app-bar-navigation';

class AppBar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    const appBarTitle = document.createElement('app-bar-title');
    const appBarMenu = document.createElement('app-bar-menu');
    const appBarNav = document.createElement('app-bar-nav');

    appBarNav.setAttribute('id', 'drawer');
    appBarNav.classList.add('nav');

    this.appendChild(appBarTitle);
    this.appendChild(appBarMenu);
    this.appendChild(appBarNav);
  }
}

customElements.define('app-bar', AppBar);
