import React, { Component } from "react";
import { API_URL } from "../../config";
import { handleResponse } from "../../helper";
import "./List.css";
import Loading from "../common/loading/Loading";
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
          totalPages: data.totalPages
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

  renderChangePercent = percent => {
    if (percent > 0) {
      return (
        <span className="text-success">
          {percent}&nbsp;% &nbsp; <i className="fas fa-caret-up" />
        </span>
      );
    } else if (percent < 0) {
      return (
        <span className="text-danger">
          {percent}&nbsp;% &nbsp;
          <i className="fas fa-caret-down" />
        </span>
      );
    } else {
      return <span className="text-info">{percent}&nbsp;%</span>;
    }
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
        <div class="alert  alert-danger mt-5">
          <p>
            <i class="fas fa-exclamation-circle" /> &nbsp;{error}
          </p>
        </div>
      );
    }

    return (
      <div>
        <Table
          currencies={currencies}
          renderChangePercent={this.renderChangePercent}
        />

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
