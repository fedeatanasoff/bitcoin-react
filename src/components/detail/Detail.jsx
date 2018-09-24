import React, { Component } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../config";
import Loading from "../common/Loading";
import { renderChangePercent } from "../../helper";
import "./Detail.css";

class Detail extends Component {
  state = {
    currency: {},
    loading: false,
    error: null
  };

  componentDidMount() {
    const currencyId = this.props.match.params.id;
    console.log(currencyId);
    this.fetchCurrency(currencyId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      const newCurrency = nextProps.match.params.id;
      console.log("nueva currencu", newCurrency);
      this.fetchCurrency(newCurrency);
    }
  }

  fetchCurrency(currencyId) {
    this.setState({ loading: true });

    fetch(`${API_URL}/cryptocurrencies/${currencyId}`)
      .then(response => {
        return response.json().then(json => {
          return response.ok ? json : Promise.reject(json);
        });
      })
      .then(data => {
        this.setState({
          loading: false,
          currency: data,
          error: null
        });
        console.log(this.state.currency);
      })
      .catch(error => {
        console.log("error", error);
        this.setState({
          loading: false,
          error: error.errorMessage
        });
      });
  }

  render() {
    const { loading, error, currency } = this.state;

    // Renderiza solo si el estado del loading cambia a true
    if (loading) {
      return (
        <div className="loading-container">
          <Loading />
        </div>
      );
    }

    if (error) {
      return <div className="error">{error}</div>;
    }

    return (
      <div className="Detail">
        <h1 className="Detail-heading">
          {currency.name} ({currency.symbol})
        </h1>
        <div className="Detail-container">
          <div className="Detail-item">
            Precio <span className="Detail-value">$ {currency.price}</span>
          </div>
          <div className="Detail-item">
            Ranking <span className="Detail-value">{currency.rank}</span>
          </div>
          <div className="Detail-item">
            Cambios en las ultimas 24hs{" "}
            <span className="Detail-value">
              {renderChangePercent(currency.percentChange24h)}
            </span>
          </div>
          <div className="Detail-item">
            <span className="Detail-title">Cap. de Mercado</span>
            <span className="Detail-dollar">$</span>
            {currency.marketCap}
          </div>
          <div className="Detail-item">
            <span className="Detail-title">Volumen 24hs</span>
            <span className="Detail-dollar">$</span>
            {currency.volume24h}
          </div>
          <div className="Detail-item">
            <span className="Detail-title">Oferta total</span>
            <span className="Detail-dollar">$</span>
            {currency.totalSupply}
          </div>
        </div>
        <Link to="/" className="NotFound-link">
          Volver a la pagina principal
        </Link>
      </div>
    );
  }
}

export default Detail;
