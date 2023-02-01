const Mensaje = ({ msg, bgColor }) => {
  let styles = {
    padding: "1rem",
    marginBotton: "1rem",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: bgColor,
  };
  return (
    <div style={styles}>
      <h2>{msg}</h2>
    </div>
  );
};

export default Mensaje;
