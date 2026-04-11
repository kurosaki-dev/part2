import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

// services
import personService from "./services/person";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    personService.getAll().then((initial) => setPersons(initial));
  }, []);

  // for search filtering
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(search.trim().toLowerCase()),
  );

  // form submission function
  const handleSubmit = (event) => {
    event.preventDefault();

    if (newName.trim() === "" || newNumber.trim() === "") {
      alert("Please fill in both name and number.");
      return;
    }

    const personObject = {
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

    // reset name and number inputs after submission
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
      personService
        .create(personObject)
        .then((data) => {
          setPersons(persons.concat(data));
          emptyInputStates();
        })
        .catch((error) => alert("Error adding data in phonebook"));
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

  // search input
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleDelete = (person) => {
    if (window.confirm(`Delete ${person.name} ?`)) {
      personService.deleteData(person.id).then(() => {
        console.log(persons);
        setPersons(persons.filter((p) => p.id !== person.id));
      });
    } else {
      console.log("Cancelled...");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch} />

      <h3>Add New</h3>
      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        handlePersonChange={handlePersonChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>
      <Persons
        search={search}
        filteredPersons={filteredPersons}
        persons={persons}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
