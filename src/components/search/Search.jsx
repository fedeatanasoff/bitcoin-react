import React, { Component } from "react";

export class Search extends Component {
  state = {
    searchQuery: ""
  };

  handleChange = event => {
    let inputValue = event.target.value;
    this.setState({ searchQuery: inputValue });
    console.log(this.state);
  };

  render() {
    return (
      <form className="form-inline my-2 my-lg-0">
        <input onChange={this.handleChange} />
      </form>
    );
  }
}

export default Search;
