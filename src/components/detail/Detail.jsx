import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Detail.css";

class Detail extends Component {
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
