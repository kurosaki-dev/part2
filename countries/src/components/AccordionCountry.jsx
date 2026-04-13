import { useState } from "react";
import Country from "./Country";

const AccordionCountry = ({ country }) => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <span>{country.name.common}</span>
      <button onClick={() => setActive(!active)}>show</button>
      {active && <Country data={country} />}
    </div>
  );
};

export default AccordionCountry;
