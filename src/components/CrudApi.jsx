import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";
const CrudApi = () => {
  const [db, setDb] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loagind, setLoagind] = useState(false);
  let api = helpHttp();
  let url = "http://localhost:5000/santos";

  useEffect(() => {
    setLoagind(true);
    api.get(url).then((res) => {
      if (!res.err) {
        setDb(res);
        setError(null);
      } else {
        setDb(null);
        setError(res);
      }
    });
    setLoagind(false);
  }, []);

  const createData = (data) => {
    let options = {
      body: data,
      headers: {
        "content-type": "application/json",
      },
    };
    api.post(url, options).then((res) => {
      console.log(res);
      if (!error) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  };
  const updateData = (data) => {
    let options = {
      body: data,
      headers: {
        "content-type": "application/json",
      },
    };
    let endpoint = `${url}/${data.id}`;

    api.put(endpoint, options).then((res) => {
      console.log(res);
      if (!error) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };
  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estas seguro de eliminar el registro con id = ${id}?`
    );
    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: {
          "content-type": "application/json",
        },
      };

      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>Crud API</h2>
      <hr />
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {loagind && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && (
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </div>
  );
};
export default CrudApi;
