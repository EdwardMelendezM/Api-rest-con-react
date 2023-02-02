import CrudApi from "./components/CrudApi";
import CrudApp from "./components/CrudApp";
import SelectsAninados from "./components/SelectsAninados";
import SongSearch from "./components/SongSearch";

function App() {
  return (
    <>
      <SelectsAninados />
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />

      <CrudApp />
    </>
  );
}

export default App;
