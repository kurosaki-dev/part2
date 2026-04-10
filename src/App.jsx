import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName,
    };

    // first solution (the one that i came up with)
    /*
    function isPersonExist(name) {
      for (let i = 0; i < persons.length; i++) {
        if (name === persons[i].name) {
          return true;
        }
      }

      return false;
    }
      */

    // clean up solution
    const isPersonExist = (name) => {
      return persons.some((person) => person.name === name);
    };

    if (isPersonExist(personObject.name)) {
      alert(`${personObject.name} is already added to phonebook`);
      setNewName("");
    } else {
      setPersons(persons.concat(personObject));
      setNewName("");
    }
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>{person.name}</p>
      ))}
    </div>
  );
};

export default App;
