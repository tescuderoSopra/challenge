import { LitElement, html } from 'lit-element';

class SeekerFilms extends LitElement {

  static get properties() {
    return {
      buttonLabel: { type: String },
      placeholder: { type: String }
    }
  }

  constructor() {
    super();
    this.buttonLabel = this.buttonLabel || 'Search';
    this.placeholder = this.placeholder || 'Write your movie / series'
  }

  _search() {
      const topic = this.shadowRoot.getElementById('search').value;
      if(topic) {
          this.dispatchEvent(new CustomEvent('search', { detail: topic }));
      }
  }

  render() {
    return html`
      <div class="seeker">
        <input id="search" placeholder=${this.placeholder} />
        <button @click="${this._search}">${this.buttonLabel}</button>
      </div>
    `;
  }
}

customElements.define('seeker-films', SeekerFilms);