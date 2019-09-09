import { LitElement, html, css } from 'lit-element';
import './list-films';
import './seeker-films';

class AppShell extends LitElement {
    static get properties() {
        return {
            films: { type: Array }, // array de objetos type, film, favourite (T o F)
        }
    }

    constructor() {
        super();
        this.films = this.films || [];
    }

    render() {
        return html`
        <header>
            <seeker-films @search=${this._searchFilm} buttonLabel="Buscar" placeholder="Inserte un término de búsqueda"></seeker-films>
        </header>
        <main>
            <list-films .films=${this.films}></list-films>
        </main>
    `;
    }
    _searchFilm({ detail: topic }) {
        // recuperamos el topic para realizar la búsqueda
        console.log('toooopic', topic);
        // realizamos la búsqueda en la API

        
        // almacenamos en localstorage los datos sin machacar los favoritos


        // recuperamos de localStorage las películas
        this.films = [{ type: "ola", film: "pepe"}]
    }
}

customElements.define('app-shell', AppShell);