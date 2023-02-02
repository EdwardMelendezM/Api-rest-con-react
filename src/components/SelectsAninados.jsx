import SelectsList from "./SelectsList";
import React, { useState } from "react";

const SelectsAninados = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");
  const TOKEN = "d81a7ac7-976d-4e1e-b7d3-b1979d791b6c";
  return (
    <div>
      <h2>Selects anidados</h2>
      <h3>Mexico</h3>
      <SelectsList
        title="estados"
        url={`https://api.copomex.com/query/get_estados?token=${TOKEN}`}
        handleChange={(e) => {
          setState(e.target.value);
        }}
      />
      <SelectsList
        title="municipios"
        url={`https://api.copomex.com/query/get_municipio_por_estado/Aguascalientes?token=${TOKEN}`}
        handleChange={(e) => {
          setTown(e.target.value);
        }}
      />
      <SelectsList
        title="colonia"
        url={`https://api.copomex.com/query/get_colonia_por_municipio/Xochimilco?token=${TOKEN}`}
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
