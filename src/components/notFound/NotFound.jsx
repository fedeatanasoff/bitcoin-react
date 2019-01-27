import React from "react";
import { Link } from "react-router-dom";
import "./notFound.css";

const NotFound = () => {
  return (
    <div className="container">
      <div className="jumbotron mt-5 text-center">
        <h1 className="display-4 color-not">
          <i className="fas fa-times" />
          &nbsp; Pagina no encontrada
        </h1>
        <p className="lead text-muted">
          No hemos podido encontrar la pagina que buscas
        </p>
        <hr className="my-4" />

        <Link to="/" className="btn btn-outline-warning btn-lg">
          Volver a la pagina principal
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
