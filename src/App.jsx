import ContactForm from "./components/ContactForm";
import CrudApi from "./components/CrudApi";
import CrudApp from "./components/CrudApp";
import Modals from "./components/Modals";
import SelectsAninados from "./components/SelectsAninados";
import SongSearch from "./components/SongSearch";

function App() {
  return (
    <>
      <Modals />
      <hr />
      <ContactForm />
      <hr />
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
