import React, { Component } from "react";
import { API_URL } from "../../config";
import Loading from "./Loading";
import "./Search.css";

class Search extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      loading: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const nombre = e.target.value;

    this.setState({ name: nombre });

    // si no hay nombre que no haya una peticion al servidor
    if (!nombre) {
      console.log("input vacio");
      return "";
    }

    this.setState({ loading: true });

    fetch(`${API_URL}/autocomplete?searchQuery=${nombre}`)
      .then(response => {
        return response.json().then(json => {
          return response.ok ? json : Promise.reject(json);
        });
      })
      .then(data => {
        console.log(data);
        this.setState({ loading: false });
      });
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="Search">
        <span className="Search-icon" />
        <input
          className="Search-input"
          type="text"
          placeholder="buscar criptomoneda"
          onChange={this.handleChange}
        />
        {loading && (
          <div className="Search-loading">
            <Loading width="12px" height="12px" />
          </div>
        )}
      </div>
    );
  }
}

export default Search;
