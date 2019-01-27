import React, { Component } from "react";
import { handleResponse } from "../../helper";
import { API_URL } from "../../config";
import "./Search.css";
export class Search extends Component {
  state = {
    searchQuery: "",
    loading: false,
    searchResult: []
  };

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
    return (
      <div className="form-inline my-2 my-lg-0">
        <i className="fas fa-search-dollar" />
        <input onChange={this.handleChange} placeholder="buscar moneda" />
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

export default Search;
