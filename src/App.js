import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
// import Radium, { StyleRoot } from "radium";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Max", age: 28 },
      { id: "2", name: "Manu", age: 29 },
      { id: "3", name: "Stephanie", age: 26 }
    ],
    showPerson: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    // This creates a copy for immutability
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
      // ":hover": {
      //   backgroundColor: "lightgreen",
      //   color: "black"
      // }
    };

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black"
      // };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); // classes = ['red'];
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold"); // classes = ['red', 'bold'];
    }

    return (
      // <StyleRoot>
      <div className="App">
        <h1>Hi, I'm me bruh</h1>
        <p className={classes.join(" ")}>helloooooooo</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch A Name
        </button>
        {persons}
      </div>
      // </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'does it work???'))
  }
}

export default App;
