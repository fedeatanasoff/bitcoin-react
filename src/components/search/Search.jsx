import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { handleResponse } from "../../helper";
import { API_URL } from "../../config";
import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
      loading: false,
      searchResult: []
    };

    console.log("props =>", this.props);
  }

  handleChange = event => {
    let inputValue = event.target.value;
    this.setState({ searchQuery: inputValue });

    if (!inputValue) {
      console.log("input vacio");
      return "";
    }

    this.setState({ loading: true });

    fetch(`${API_URL}/autocomplete?searchQuery=${inputValue}`)
      .then(handleResponse)
      .then(data => {
        console.log(data);
        this.setState({ loading: false, searchResult: data });
      });
  };

  handleRedirect = currencyId => {
    this.setState({ searchQuery: "", searchResult: [] });
    console.log("enviando desde search => ", this.props.history);
    this.props.history.push(`/currency/${currencyId}`);
  };

  renderResult = () => {
    let { searchResult, searchQuery, loading } = this.state;

    if (!searchQuery) {
      return "";
    }

    if (searchResult.length > 0) {
      return (
        <ul className="list-group ul-lista">
          {searchResult.map(result => (
            <li
              key={result.id}
              className="list-group-item d-flex justify-content-between align-items-start"
              onClick={() => this.handleRedirect(result.id)}
            >
              {result.name}
            </li>
          ))}
        </ul>
      );
    }

    if (!loading) {
      return (
        <ul className="list-group ul-lista">
          <li className="list-group-item d-flex justify-content-between align-items-start">
            sin resultados
          </li>
        </ul>
      );
    }
  };

  render() {
    console.log(this.state.searchQuery);
    return (
      <div className="form-inline my-2 my-lg-0">
        <i className="fas fa-search-dollar icon-search" />
        <input
          onChange={this.handleChange}
          placeholder="buscar moneda"
          value={this.state.searchQuery}
        />
        {this.state.loading && (
          <div className="search-loading">
            <i className="fas fa-spinner fa-spin load" />
          </div>
        )}
        {this.renderResult()}
      </div>
    );
  }
}

export default withRouter(Search);
