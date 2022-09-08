class AppJumbotron extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <div class="jumbotron__inner">
        <h2 class="jumbotron__title">Nikmati Hidup Dengan Makan Makanan yang Disukai</h2>
        <p class="jumbotron__tagline">Tubuh yang sehat berasal dari makanan yang enak dan sehat</p>
      </div>
    `;
  }
}

customElements.define('app-jumbotron', AppJumbotron);
