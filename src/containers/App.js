import React, { Component } from "react";
import CardList from "../components/CardList";
import Searchbox from "../components/SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      actors: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/person/popular?api_key=d1ccda07fd874dc9393ac5829e89c12e&page=1")
      .then((response) => response.json())
      .then((users) => users.results)
      .then((users) => this.setState({ actors: users }));
  }
  
  onSearchChange = (event) => {
    // this.state.searchfield = event.target.value
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { actors, searchfield } = this.state;

    const filteredActors = actors.filter((actor) => {
      return actor.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    if (!actors.length) {
      return <h1 className="tc">Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">ACTORS</h1>
          <Searchbox SearchChange={this.onSearchChange} />
          <CardList actors={filteredActors} />
        </div>
      );
    }
  }
}

export default App;