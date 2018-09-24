import React, { Component } from "react";
import { API_URL } from "../../config";
import Loading from "./Loading";
import { withRouter } from "react-router-dom";
import "./Search.css";

class Search extends Component {
  constructor() {
    super();

    this.state = {
      searchResult: [],
      name: "",
      loading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  handleRedirect(id) {
    this.setState({
      name: "",
      searchResult: []
    });

    this.props.history.push(`/currency/${id}`);
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
        this.setState({ loading: false, searchResult: data });
      });
  }

  renderSearch() {
    const { searchResult, name, loading } = this.state;

    if (!name) {
      return "";
    }

    if (searchResult.length > 0) {
      return (
        <div className="Search-result-container">
          {searchResult.map(result => (
            <div
              key={result.id}
              className="Search-result"
              onClick={() => this.handleRedirect(result.id)}
            >
              {result.name} ({result.symbol})
            </div>
          ))}
        </div>
      );
    }

    if (!loading) {
      return (
        <div className="Search-result-container">
          <div className="Search-no-result">Sin resultados</div>
        </div>
      );
    }
  }

  render() {
    const { loading, name } = this.state;
    return (
      <div className="Search">
        <span className="Search-icon" />
        <input
          className="Search-input"
          type="text"
          placeholder="buscar criptomoneda"
          onChange={this.handleChange}
          value={name}
        />
        {loading && (
          <div className="Search-loading">
            <Loading width="12px" height="12px" />
          </div>
        )}
        {this.renderSearch()}
      </div>
    );
  }
}

export default withRouter(Search);
