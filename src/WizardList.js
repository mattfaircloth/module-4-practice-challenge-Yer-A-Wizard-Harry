import React from "react";
import Wizard from "./Wizard";

const WizardList = props => {
  //display all yer wizards, or filter by house
  let allWizards;

  if (props.filter === 'Gryffindor') {
    let gryfWizards = props.wizards.filter(wizard => wizard.house === 'Gryffindor')
    allWizards = gryfWizards.map(wizard => <Wizard wizard={wizard} key={wizard.name}/>)
  } else if (props.filter === 'Slytherin') {
    let slyWizards = props.wizards.filter(wizard => wizard.house === 'Slytherin')
    allWizards = slyWizards.map(wizard => <Wizard wizard={wizard} key={wizard.name}/>)
  } else if (props.filter === 'Hufflepuff') {
    let huffWizards = props.wizards.filter(wizard => wizard.house === 'Hufflepuff')
    allWizards = huffWizards.map(wizard => <Wizard wizard={wizard} key={wizard.name}/>)
  } else if (props.filter === 'Ravenclaw') {
    let ravenWizards = props.wizards.filter(wizard => wizard.house === 'Ravenclaw')
    allWizards = ravenWizards.map(wizard => <Wizard wizard={wizard} key={wizard.name}/>)
  } else {
    allWizards = props.wizards.map(wizard => <Wizard wizard={wizard} key={wizard.name}/>)
  }


  return (
    <div className="WizardList">
      {allWizards}
    </div>
  )
};

export default WizardList;
