import React, { Component } from "react";
import { API_URL } from "../../config";
import Table from "./Table";
import Loading from "../common/Loading";

class List extends Component {
  state = {
    error: null,
    loading: false,
    currencies: []
  };

  //   componentWillMount() {
  //     console.log("-> component will mount");
  //   }

  componentDidMount() {
    console.log("-> component did mount");
    this.setState({ loading: true });

    fetch(`${API_URL}/cryptocurrencies?page=1&perPage=20`)
      .then(response => {
        return response.json().then(json => {
          return response.ok ? json : Promise.reject(json);
        });
      })
      .then(data => {
        // console.log("Success", data);
        this.setState({ currencies: data.currencies, loading: false });
      })
      .catch(error => {
        // console.log("Error", error);
        this.setState({ error: error.errorMessage, loading: false });
      });
  }

  renderChangePercent(porcentaje) {
    if (porcentaje > 0) {
      return <span className="percent-raised">{porcentaje}% &uarr;</span>;
    } else if (porcentaje < 0) {
      return <span className="percent-fallen">{porcentaje}% &darr;</span>;
    } else {
      return <span>{porcentaje}</span>;
    }
  }

  render() {
    console.log("-> render");
    const { error, loading, currencies } = this.state;

    // renderiza solo si el estado en loading es true
    if (loading) {
      return (
        <div className="loading-container">
          <Loading />
        </div>
      );
    }

    // renderiza solo si hay mensaje de error al cargar la info de la API
    if (error) {
      return <div className="error">{error}</div>;
    }

    return (
      <Table
        currencies={currencies}
        renderChangePercent={this.renderChangePercent}
      />
    );
  }
}

export default List;
