import SelectsList from "./SelectsList";
import React, { useState } from "react";

const SelectsAninados = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");
  return (
    <div>
      <h2>Selects anidados</h2>
      <h3>Mexico</h3>
      <SelectsList
        title="estados"
        url=""
        handleChange={(e) => {
          setState(e.target.value);
        }}
      />
      <SelectsList
        title="municipios"
        url=""
        handleChange={(e) => {
          setTown(e.target.value);
        }}
      />
      <SelectsList
        title="colonias"
        url=""
        handleChange={(e) => {
          setSuburb(e.target.value);
        }}
      />
      <pre>
        <code>
          {state}-{town}-{suburb}
        </code>
      </pre>
    </div>
  );
};

export default SelectsAninados;
