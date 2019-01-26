import React from "react";
import PropTypes from "prop-types";
import "./Pagination.css";

const Pagination = props => {
  const { page, totalPages, handlePaginationClick } = props;
  return (
    <div className="mt-5 mb-5 d-flex justify-content-center">
      <button
        className="btn btn-success"
        onClick={() => handlePaginationClick("prev")}
        disabled={page <= 1}
      >
        <i className="fas fa-long-arrow-alt-left" />
      </button>
      <span>
        &nbsp; &nbsp; Pagina {page} de {totalPages}&nbsp; &nbsp;
      </span>
      <button
        className="btn btn-success"
        onClick={() => handlePaginationClick("next")}
        disabled={page >= totalPages}
      >
        <i className="fas fa-long-arrow-alt-right" />
      </button>
    </div>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handlePaginationClick: PropTypes.func.isRequired
};

export default Pagination;
