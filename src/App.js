import React, { Component } from "react";
import Radium, { StyleRoot } from "radium";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "qweqe1", name: "Nikhil Jain", age: 31 },
      { id: "dsadas2", name: "John", age: 33 },
      { id: "xczx3", name: "Martha", age: 28 },
    ],
    showPersons: false,
  };

  deleteNameHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons,
    });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => p.id === id);
    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons,
    });
  };

  togglePersonHandler = () => {
    const showPersons = this.state.showPersons;
    this.setState({
      showPersons: !showPersons,
    });
  };

  render() {
    let persons = null;
    const buttonStyle = {
      backgroundColor: "green",
      border: "ipx solid blue",
      color: "white",
      cursor: "pointer",
      font: "inherit",
      padding: "5px",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
    };

    if (this.state.showPersons) {
      persons = this.state.persons.map((person, index) => (
        <Person
          name={person.name}
          age={person.age}
          key={person.id}
          clickName={() => this.deleteNameHandler(index)}
          changed={(event) => this.nameChangeHandler(event, person.id)}
        />
      ));
      buttonStyle.backgroundColor = "red";
      buttonStyle[":hover"] = {
        backgroundColor: "salmon",
        color: "black",
      };
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi! I am a React App</h1>
          <button style={buttonStyle} onClick={this.togglePersonHandler}>
            Toggle Persons
          </button>
          {this.state.showPersons && persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
