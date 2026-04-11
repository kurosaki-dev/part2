import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);

  return request.then((response) => response.data);
};

const create = (newPersonObject) => {
  const request = axios.post(baseUrl, newPersonObject);

  // example usage:
  /*
   personService.create(newObject)
   .then((response) => response.data)
   .then((data) => setPersons(persons.concat(data)));
  */
  return request.then((response) => response.data);
};

const deleteData = (id) => {
  const request = axios.delete(`http://localhost:3001/persons/${id}`);

  return request.then((response) => response.data);
};

const updateData = (id, personObject) => {
  const request = axios.put(
    `http://localhost:3001/persons/${id}`,
    personObject,
  );

  return request.then((response) => response.data);
};

export default { getAll, create, deleteData, updateData };
