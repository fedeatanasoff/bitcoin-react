import React, { Component } from "react";
import { API_URL } from "../../config";
import { handleResponse, renderChangePercent } from "../../helper";
import "./List.css";
import Loading from "../common/loading/Loading";
import Error from "../common/error/Error";
import Table from "../Table/Table";
import Pagination from "../Pagination/Pagination";

class List extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      currencies: [],
      error: null,
      totalPages: 0,
      page: 1
    };
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  fetchCurrencies = () => {
    this.setState({ loading: true });
    const { page } = this.state;

    fetch(`${API_URL}/cryptocurrencies?page=${page}&perPage=20`)
      .then(handleResponse)
      .then(data => {
        console.log("Success", data);
        this.setState({
          currencies: data.currencies,
          loading: false,
          totalPages: data.totalPages,
          error: null
        });
      })
      .catch(error => {
        // console.log("Error", error);
        this.setState({ loading: false, error: error.errorMessage });
      });
  };

  handlePaginationClick = direccion => {
    let nextPage = this.state.page;
    nextPage = direccion === "next" ? nextPage + 1 : nextPage - 1;

    this.setState(
      {
        page: nextPage
      },
      () => {
        this.fetchCurrencies();
      }
    );
  };

  render() {
    console.log("desde render => ", this.state.currencies);
    const { loading, error, currencies, page, totalPages } = this.state;

    if (loading) {
      return (
        <div className="loading-container mt-5">
          <Loading />
        </div>
      );
    }

    if (error) {
      return (
        <div className="container">
          <Error error={error} />
        </div>
      );
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
