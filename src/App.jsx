import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: "Arto Hellas", number: "046-12-345" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newName.trim() === "" || newNumber.trim() === "") {
      alert("Please fill in both name and number.");
      return;
    }

    const personObject = {
      id: String(persons.length + 1),
      name: newName,
      number: newNumber,
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

    const isNumberExist = (number) => {
      return persons.some((person) => person.number === number);
    };

    const emptyInputStates = () => {
      setNewName("");
      setNewNumber("");
    };

    if (isPersonExist(personObject.name)) {
      alert(`${personObject.name} is already added to phonebook`);
      emptyInputStates();
    } else if (isNumberExist(personObject.number)) {
      alert(`${personObject.number} is already registered.`);
      emptyInputStates();
    } else {
      setPersons(persons.concat(personObject));
      emptyInputStates();
    }
  };

  // name input
  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  // number input
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.id}>
          {person.name} <span>{person.number}</span>
        </p>
      ))}
    </div>
  );
};

export default App;
