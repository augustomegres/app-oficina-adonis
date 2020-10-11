import React from 'react';

import './sidebar.css';
export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="title">
          <img alt="dashboard" src="/icons/screwdriver.svg"></img>
          <h1>Oficina 2.0</h1>
        </div>
        <ul>
          <li>
            <img alt="dashboard" src="/icons/dashboard.svg"></img>
            <a href="/">Dashboard</a>
          </li>
          <li>
            <img alt="pedidos" src="/icons/box.svg"></img>
            <a href="/pedidos">Pedidos</a>
          </li>
          <li>
            <img alt="clientes" src="/icons/customer.svg"></img>
            <a href="/clientes">Clientes</a>
          </li>
          <li>
            <img alt="vendedores" src="/icons/employee.svg"></img>
            <a href="/vendedores">Vendedores</a>
          </li>
        </ul>
      </div>
    );
  }
}
