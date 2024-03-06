const Ex2 = () => {
  const mystyle = {
    color: "White",
    backgroundColor: "lightblue",
    padding: "10px",
    fontFamily: "Arial",
  };
  return (
    <div>
      <h1 style={mystyle}>Style Demo</h1>
      <p style={{ color: "blue", 
      textAlign: "center" }}>
        Applying some styles here!!
      </p>
    </div>
  );
};
export default Ex2;
