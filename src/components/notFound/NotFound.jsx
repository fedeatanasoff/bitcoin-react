import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => (
  <div className="NotFound">
    <h1 className="NotFound-title">Pagina no encontrada</h1>
    <Link to="/" className="NotFound-link">
      Volver a la pagina principal
    </Link>
  </div>
);

export default NotFound;
