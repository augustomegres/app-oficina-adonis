import React from 'react';
import './index.css';
import Sidebar from '../components/Sidebar';

export default class Index extends React.Component {
  render() {
    return (
      <div className="index">
        <Sidebar />
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-8">
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child notification">
                  <p class="title">Bloco 1</p>
                  <p class="subtitle">Texto / Info</p>
                </article>
                <article class="tile is-child notification">
                  <p class="title">Bloco 2</p>
                  <p class="subtitle">Texto / Info</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child notification">
                  <p class="title">Bloco com gráfico pequeno</p>
                  <p class="subtitle">Gráfico</p>
                  <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/640x480.png" />
                  </figure>
                </article>
              </div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification">
                <p class="title">Bloco com gráfico grande</p>
                <p class="subtitle">Gráfico gigante</p>
                <div class="content"></div>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification">
              <div class="content">
                <p class="title">Bloco com log de resumo</p>
                <p class="subtitle">Lista com resumo</p>
                <div class="content"></div>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}
