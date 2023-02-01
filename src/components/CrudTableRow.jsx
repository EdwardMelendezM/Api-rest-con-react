const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, constellation, id } = el;
  return (
    <tr>
      <th>{el.name}</th>
      <th>{el.constellation}</th>
      <th>
        <button
          onClick={() => {
            setDataToEdit(el);
          }}
        >
          Editar
        </button>
        <button
          onClick={() => {
            deleteData(el.id);
          }}
        >
          Eliminar
        </button>
      </th>
    </tr>
  );
};

export default CrudTableRow;
