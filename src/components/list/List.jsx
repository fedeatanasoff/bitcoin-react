import React, { Component } from "react";
import { API_URL } from "../../config";
import "./Table.css";

class List extends Component {
  state = {
    error: null,
    loading: false,
    currencies: []
  };

  //   componentWillMount() {
  //     console.log("-> component will mount");
  //   }

  componentDidMount() {
    console.log("-> component did mount");
    this.setState({ loading: true });

    fetch(`${API_URL}/cryptocurrencies?page=1&perPage=20`)
      .then(response => {
        return response.json().then(json => {
          return response.ok ? json : Promise.reject(json);
        });
      })
      .then(data => {
        // console.log("Success", data);
        this.setState({ currencies: data.currencies, loading: false });
      })
      .catch(error => {
        // console.log("Error", error);
        this.setState({ error: error.errorMessage, loading: false });
      });
  }
  render() {
    console.log("-> render");
    console.log(this.state);
    return (
      <div>
        {this.state.currencies.map(currency => (
          <div key={currency.id}>{currency.id}</div>
        ))}
      </div>
    );
  }
}

export default List;
