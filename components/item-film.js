import { LitElement, html } from 'lit-element';

class ItemFilm extends LitElement {

  static get properties() {
    return {
      film: { type: Object },
    }
  }

  constructor() {
    super();
    this.film = this.film || {};
  }

  render() {
    return html`
      <p>${this.film.type} - ${this.film.film}</p>
    `;
  }
}

customElements.define('item-film', ItemFilm);