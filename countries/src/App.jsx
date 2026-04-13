import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Country from "./components/Country";
import AccordionCountry from "./components/AccordionCountry";

const App = () => {
  const [countries, setCountries] = useState([]);

  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => setCountries(response.data));
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(query.trim().toLowerCase()),
  );

  let content = <p>Start searching your favorite country!</p>;

  if (query.trim()) {
    if (filteredCountries.length > 10) {
      content = <p>Too many matches, specify another filter.</p>;
    } else if (filteredCountries.length === 1) {
      const data = filteredCountries[0];

      content = <Country data={data} />;
    } else if (filteredCountries.length > 1) {
      content = filteredCountries.map((country) => (
        <AccordionCountry country={country} />
      ));
    } else {
      content = <p>No matches found.</p>;
    }
  }

  return (
    <main>
      <div>
        <span>find countries</span>
        <input
          id="search-country"
          name="search-country"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      {/* countries results */}
      <div>{content}</div>
    </main>
  );
};

export default App;
