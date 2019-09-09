import { LitElement, html } from 'lit-element';
import './item-film';

class ListFilms extends LitElement {

    static get properties() {
        return {
            films: { type: Array },
        }
    }

    constructor() {
        super();
        console.log('fiiilms', this.films);
        // this.films = this.films;
    }

    render() {
        return html`
      <ul>
        ${this.films.map(filter => html`
            <item-film .film="${filter}">
            </item-film>`
        )}
      </ul>
    `;
    }
}

customElements.define('list-films', ListFilms);