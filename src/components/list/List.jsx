import React, { Component } from "react";
import { API_URL } from "../../config";
import Table from "./Table";
import Pagination from "./Pagination";
import Loading from "../common/Loading";

class List extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      loading: false,
      currencies: [],
      page: 1,
      totalPages: 0
    };

    this.handlePaginationClick = this.handlePaginationClick.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  fetchCurrencies() {
    // console.log("-> component did mount");
    const { page } = this.state;
    this.setState({ loading: true });

    fetch(`${API_URL}/cryptocurrencies?page=${page}&perPage=20`)
      .then(response => {
        return response.json().then(json => {
          return response.ok ? json : Promise.reject(json);
        });
      })
      .then(data => {
        console.log("Success", data);
        this.setState({
          currencies: data.currencies,
          loading: false,
          totalPages: data.totalPages
        });
      })
      .catch(error => {
        // console.log("Error", error);
        this.setState({ error: error.errorMessage, loading: false });
      });
  }

  handlePaginationClick(direccion) {
    let nextPage = this.state.page;
    nextPage = direccion === "next" ? nextPage + 1 : nextPage - 1;
    this.setState({ page: nextPage }, () => {
      console.log("pagina: ", this.state.page);
      this.fetchCurrencies();
    });
  }

  render() {
    console.log("-> render");
    const { error, loading, currencies, totalPages, page } = this.state;

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
      <div>
        <Table currencies={currencies} />
        <Pagination
          page={page}
          totalPages={totalPages}
          handlePaginationClick={this.handlePaginationClick}
        />
      </div>
    );
  }
}

export default List;
