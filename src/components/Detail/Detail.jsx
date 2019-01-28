import React from "react";
import { Link } from "react-router-dom";
import "./Detail.css";
import { API_URL } from "../../config";
import { handleResponse, renderChangePercent } from "../../helper";
import Loading from "../common/loading/Loading";
import NotFound from "../notFound/NotFound";

class Detail extends React.Component {
  state = {
    currency: {},
    loading: false,
    error: null
  };

  componentDidMount = () => {
    this.fetchCurrency();
  };

  fetchCurrency() {
    let id = this.props.match.params.id;
    this.setState({ loading: true });

    fetch(`${API_URL}/cryptocurrencies/${id}`)
      .then(handleResponse)
      .then(data => {
        // console.log("Success", data);
        this.setState({ loading: false, currency: data, error: null });
      })
      .catch(error => {
        console.log("Error", error);
        this.setState({ loading: false, error: error.errorMessage });
      });
  }

  render() {
    // console.log("detalles => ", this.state.currency);
    const { currency, loading, error } = this.state;

    if (loading) {
      return (
        <div className="loading-container mt-5">
          {" "}
          <Loading />{" "}
        </div>
      );
    }

    if (error) {
      return (
        <div>
          <NotFound error={error} />
        </div>
      );
    }

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mt-5 ">
              <div className="card-body">
                <h4 className="card-title">{currency.name}</h4>
                <h6 className="card-subtitle mb-2 text-muted">
                  {currency.symbol}
                </h6>
                <p className="">
                  <span className="span-currency rank">Ranking: </span>&nbsp;
                  <b>#</b>
                  {currency.rank}
                </p>
                <p className="">
                  <span className="span-currency rank">Precio: </span>&nbsp;
                  <b>$</b>
                  {currency.price}
                </p>
                <p className="">
                  <span className="span-currency rank">Ultimas 24hs:</span>
                  &nbsp; {renderChangePercent(currency.percentChange24h)}
                </p>
                <p className="">
                  <span className="span-currency rank">
                    Capitalizacion de Mercado:
                  </span>
                  &nbsp; <b>$</b>
                  {currency.marketCap}
                </p>
                <p className="">
                  <span className="span-currency rank">Volumen 24hs: </span>{" "}
                  &nbsp;
                  <b>$</b>
                  {currency.volume24h}
                </p>
                <p className="">
                  <span className="span-currency rank">Oferta Total: </span>
                  &nbsp;
                  <b>$</b>
                  {currency.totalSupply}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <Link to="/" className="btn btn-outline-warning mt-5 mb-3">
            Volver a la pagina principal
          </Link>
        </div>
      </div>
    );
  }
}

export default Detail;
