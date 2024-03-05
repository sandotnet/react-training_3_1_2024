function Garage(props) {
  const cars = props.cars;
  return(
  <div>
    {cars.length > 0 ? (
      <h2>You have {cars.length} cars in Garage</h2>
    ) : (
      <h2>No Cars!! in Garage</h2>
    )}
  </div>)
}
export default Garage;
