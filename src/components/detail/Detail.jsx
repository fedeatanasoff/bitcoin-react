import React, { Component } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../config";
import "./Detail.css";

class Detail extends Component {
  componentDidMount() {
    const currencyId = this.props.match.params.id;
    console.log(currencyId);

    fetch(`${API_URL}/cryptocurrencies/${currencyId}`)
      .then(response => {
        return response.json().then(json => {
          return response.ok ? json : Promise.reject(json);
        });
      })
      .then(data => console.log(data))
      .catch(error => {
        console.log("error", error);
      });
  }

  render() {
    return (
      <div>
        <h1>Detalles</h1>
        <Link to="/" className="NotFound-link">
          Volver a la pagina principal
        </Link>
      </div>
    );
  }
}

export default Detail;
