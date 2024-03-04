function Car({ brand, color }) {
  return (
    <>
      <h2>I am a {brand}</h2>
      <h3>With Color {color}</h3>
    </>
  );
}
function Garage(props) {
  return (
    <>
      <Car brand={props.brand} color={props.color} />
    </>
  );
}
export default Garage;
