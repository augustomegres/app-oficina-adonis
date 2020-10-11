import React from 'react';
import Sidebar from '../components/Sidebar';
import api from '../service/api';
import './customers.css';

export default class Customers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: [],
    };
  }

  componentDidMount() {
    api.get(`${process.env.REACT_APP_BASE_URL}/customers`).then((customers) => {
      this.setState({ customers: customers.data.data });
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
              <th>CPF</th>
              <th>Telefone</th>
              <th>Nascimento</th>
            </tr>
          </thead>

          <tbody>
            {this.state.customers.map((customer) => {
              let born_date = new Date(customer.born_date).toLocaleDateString(
                'ptB'
              );
              return (
                <tr>
                  <td>{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.cpf}</td>
                  <td>{customer.phone}</td>
                  <td>{born_date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
