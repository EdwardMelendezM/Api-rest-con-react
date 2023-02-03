import Modal from "./Modal";
import useModal from "../hooks/useModal";

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal();
  const [isOpenModal2, openModal2, closeModal2] = useModal();
  return (
    <>
      <h1>Modales</h1>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h2>Modal 1</h2>
        <p>Hola, este es e lcontenido de mi modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="animals" />
      </Modal>

      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h2>otro modal</h2>
        <p>Hola, este es e lcontenido de mi modal 2</p>
        <img src="https://placeimg.com/400/400/nature" alt="nature" />
      </Modal>
    </>
  );
};
export default Modals;
