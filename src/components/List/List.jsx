import React, { Component } from "react";
import { API_URL } from "../../config";
import { handleResponse } from "../../helper";
import "./List.css";
import Loading from "../common/loading/Loading";

class List extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      currencies: [],
      error: null
    };
  }

  componentDidMount = () => {
    this.setState({ loading: true });

    fetch(`${API_URL}/cryptocurrencies?page=1&perPage=20`)
      .then(handleResponse)
      .then(data => {
        // console.log("Success", data);
        this.setState({ currencies: data.currencies, loading: false });
      })
      .catch(error => {
        // console.log("Error", error);
        this.setState({ loading: false, error: error.errorMessage });
      });
  };

  renderChangePercent = percent => {
    if (percent > 0) {
      return (
        <span className="text-success">
          {percent}% &nbsp; <i class="fas fa-caret-up" />
        </span>
      );
    } else if (percent < 0) {
      return (
        <span className="text-danger">
          {percent}% &nbsp;
          <i class="fas fa-caret-down" />
        </span>
      );
    } else {
      return <span>{percent}%</span>;
    }
  };

  render() {
    console.log("desde render => ", this.state.currencies);
    const { loading, error, currencies } = this.state;

    if (loading) {
      return (
        <div className="loading-container mt-5">
          <Loading />
        </div>
      );
    }

    if (error) {
      return (
        <div class="alert  alert-danger mt-5">
          <p>
            <i class="fas fa-exclamation-circle" /> &nbsp;{error}
          </p>
        </div>
      );
    }

    return (
      <div className="mt-5">
        <table className="table">
          <thead className="table-active">
            <tr>
              <th scope="col">
                <span className="text-muted">Crytomoneda</span>
              </th>
              <th className="text-muted" scope="col">
                Precio
              </th>
              <th className="text-muted" scope="col">
                Cap. de Mercado
              </th>
              <th className="text-muted" scope="col">
                24hs cambios
              </th>
            </tr>
          </thead>
          <tbody>
            {currencies.map(currency => (
              <tr key={currency.id}>
                <td>
                  <span className="span-currency rank">
                    #{currency.rank} &nbsp;
                  </span>{" "}
                  <span className="span-currency">{currency.name}</span>
                </td>
                <td>
                  <span className="span-currency">$ {currency.price}</span>
                </td>
                <td>
                  <span className="span-currency">$ {currency.marketCap}</span>
                </td>
                <td>{this.renderChangePercent(currency.percentChange24h)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;
