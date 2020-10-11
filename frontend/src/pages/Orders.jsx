import React from 'react';
import Sidebar from '../components/Sidebar';
import api from '../service/api';
import './orders.css';

export default class Orders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: [],
    };
  }

  componentDidMount() {
    api.get(`${process.env.REACT_APP_BASE_URL}/orders`).then((orders) => {
      this.setState({ orders: orders.data.data });
    });
  }

  render() {
    return (
      <div className="index">
        <Sidebar />
        <table class="table is-hoverable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Vendedor</th>
              <th>Início do serviço</th>
              <th>Previsão</th>
              <th>Valor</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {this.state.orders.map((order) => {
              let date = new Date(order.initial_date);
              date.setDate(date.getDate() + order.prevision);
              let final_date = date.toLocaleDateString('ptB');
              let initial_date = new Date(
                order.initial_date
              ).toLocaleDateString('ptB');
              return (
                <tr>
                  <td>{order.id}</td>
                  <td>{order.customer.name}</td>
                  <td>{order.seller.name}</td>
                  <td>{initial_date}</td>
                  <td>{final_date}</td>
                  <td>{order.price}</td>
                  <th>
                    <a class="delete is-large"></a>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
