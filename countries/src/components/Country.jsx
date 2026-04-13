import { useEffect } from "react";
import Weather from "./Weather";

const Country = ({ data }) => {
  const { name, capital, area, languages, flags } = data;

  return (
    <div>
      <h1>{name.common}</h1>

      <p>{capital ? capital[0] : "No Capital"}</p>
      <p>Area {area}</p>

      {languages ? (
        <>
          <h2>Languages</h2>
          <ul>
            {Object.values(languages).map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
        </>
      ) : (
        <h2>No languages Availble</h2>
      )}

      <img src={flags.png} alt={flags.alt} />

      <Weather capital={capital[0]} />
    </div>
  );
};

export default Country;
