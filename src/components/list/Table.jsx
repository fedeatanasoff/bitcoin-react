import React from "react";
import "./Table.css";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const Table = props => {
  const { currencies, renderChangePercent, history } = props;
  return (
    <div className="Table-container">
      <table className="Table">
        <thead className="Table-head">
          <tr>
            <th>Cryptomoneda</th>
            <th>Precio USD</th>
            <th>Cap. de Mercado en USD</th>
            <th>Cambios en 24hs</th>
          </tr>
        </thead>
        <tbody className="Table-body">
          {currencies.map(currency => (
            <tr
              key={currency.id}
              onClick={() => history.push(`/currency/${currency.id}`)}
            >
              <td>
                <span className="Table-rank">{currency.rank}</span>
                {currency.name}
              </td>
              <td>
                <span className="Table-dollar">$ </span>
                {currency.price}
              </td>
              <td>
                <span className="Table-dollar">$ </span>
                {currency.marketCap}
              </td>
              <td>{renderChangePercent(currency.percentChange24h)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  currencies: PropTypes.array.isRequired,
  renderChangePercent: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(Table);
