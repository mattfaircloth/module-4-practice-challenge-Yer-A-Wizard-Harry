import React from "react";

const StorySettings = props => {
  //Most of the form is here, but you still need to hook them up to state
  return (
    <div className="StorySettings">
      <form onSubmit={props.handleSubmit}>
        <div>
          <h3>Add a new Wizard</h3>
        </div>
        <input type="text" name="newWizard" onChange={props.handleNameChange}/>
        <select name="newWizardHouse" onChange={props.handleHouseChange}>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
        </select>
        <input type="submit" />
      </form>
      <form onChange={props.handleFilterChange}>
        <div>
          <h3>Filter By House</h3>
        </div>
        <input name="selectedHouse" type="radio" defaultChecked='true' value="All" />All
        <input name="selectedHouse" type="radio" value="Gryffindor" />Gryffindor
        <input name="selectedHouse" type="radio" value="Slytherin" />Slytherin
        <input name="selectedHouse" type="radio" value="Hufflepuff" />Hufflepuff
        <input name="selectedHouse" type="radio" value="Ravenclaw" />Ravenclaw
      </form>
    </div>
  );
};

export default StorySettings;
