import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./notFound.css";

const NotFound = props => {
  return (
    <div className="container">
      <div className="jumbotron mt-5 text-center">
        <h1 className="display-4 color-not">
          <i className="fas fa-times" />
          &nbsp; Pagina no encontrada
        </h1>
        <p className="lead text-muted">
          {props.error
            ? props.error
            : "No hemos podido encontrar la pagina que estas buscando"}
        </p>
        <hr className="my-4" />

        <Link to="/" className="btn btn-outline-warning btn-lg">
          Volver a la pagina principal
        </Link>
      </div>
    </div>
  );
};

NotFound.propTypes = {
  error: PropTypes.string
};

export default NotFound;
