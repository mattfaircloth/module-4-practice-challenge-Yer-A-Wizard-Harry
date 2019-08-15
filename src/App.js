import React, { Component } from "react";

import StorySettings from "./StorySettings";
import WizardList from "./WizardList";
import "./App.css";

class App extends Component {
  //Start your coding here!
  //Don't be afraid to add props into the provided components

  state ={
    wizards: [],
    filter: 'All',
    newWizard: {
      name: '',
      house: ''
    }
  }

  componentDidMount = () => {
    fetch('http://hp-api.herokuapp.com/api/characters/students')
    .then(res => res.json())
    .then(data => this.setState({wizards: data}))
  }

  handleFilterChange = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  handleNameChange = (event) => {
    event.persist()
    this.setState(previousState => {
      return {
          newWizard: {...previousState.newWizard, name: event.target.value}
      }
    })
  }

  handleHouseChange = (event) => {
    event.persist()
    this.setState(previousState => {
      return {
        newWizard: {...previousState.newWizard, house: event.target.value}
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let addWizard = this.state.newWizard
    this.setState({
      wizards: [...this.state.wizards, addWizard]
    })
  }


  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h2>Harry Potter Fan Fiction Story Creator</h2>
        <StorySettings handleFilterChange={this.handleFilterChange} handleNameChange={this.handleNameChange} handleHouseChange={this.handleHouseChange} handleSubmit={this.handleSubmit}/>
        <WizardList wizards={this.state.wizards} filter={this.state.filter}/>
      </div>
    );
  }
}

export default App;
