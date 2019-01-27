import React, { Component } from "react";
import { handleResponse } from "../../helper";
import { API_URL } from "../../config";
import "./Search.css";
export class Search extends Component {
  state = {
    searchQuery: "",
    loading: false
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
        this.setState({ loading: false });
      });
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
      </div>
    );
  }
}

export default Search;
