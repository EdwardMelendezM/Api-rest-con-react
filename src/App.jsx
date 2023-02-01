import CrudApi from "./components/CrudApi";
import CrudApp from "./components/CrudApp";
import SongSearch from "./components/SongSearch";

function App() {
  return (
    <>
      <SongSearch />
      <CrudApi />
      <CrudApp />
    </>
  );
}

export default App;
