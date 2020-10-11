import React from 'react';
import Sidebar from '../components/Sidebar';
import api from '../service/api';
import './sellers.css';

export default class Sellers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sellers: [],
    };
  }

  componentDidMount() {
    api.get(`${process.env.REACT_APP_BASE_URL}/sellers`).then((sellers) => {
      this.setState({ sellers: sellers.data.data });
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
              <th>Cadastro</th>
            </tr>
          </thead>

          <tbody>
            {this.state.sellers.map((seller) => {
              let created_at = new Date(seller.created_at).toLocaleDateString(
                'ptB'
              );
              return (
                <tr>
                  <td>{seller.id}</td>
                  <td>{seller.name}</td>
                  <td>{created_at}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
