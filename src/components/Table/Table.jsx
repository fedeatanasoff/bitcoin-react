import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { renderChangePercent } from "../../helper";
import "./Table.css";

const Table = props => {
  const { currencies, history } = props;
  return (
    <div className="mt-5 container">
      <table className="table">
        <thead className="table-active">
          <tr>
            <th scope="col">
              <span className="text-muted">Crytomoneda</span>
            </th>
            <th className="text-muted" scope="col">
              Precio
            </th>
            <th className="text-muted" scope="col">
              Cap. de Mercado
            </th>
            <th className="text-muted" scope="col">
              24hs cambios
            </th>
          </tr>
        </thead>
        <tbody>
          {currencies.map(currency => (
            <tr
              key={currency.id}
              onClick={() => history.push(`/currency/${currency.id}`)}
            >
              <td>
                <span className="span-currency rank">
                  #{currency.rank} &nbsp;
                </span>{" "}
                <span className="span-currency">{currency.name}</span>
              </td>
              <td>
                <span className="span-currency rank">$</span>{" "}
                <span className="span-currency">{currency.price}</span>
              </td>
              <td>
                <span className="span-currency rank">$</span>{" "}
                <span className="span-currency">{currency.marketCap}</span>
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
  history: PropTypes.object.isRequired
};

export default withRouter(Table);
