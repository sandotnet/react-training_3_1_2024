const Car = ({ brand }) => {
  return <li>I am a {brand}</li>;
};
const Garage = () => {
  let cars = ["Audi", "MG", "Benz", "Tata"];
  return (
    <div>
      {cars.map((c) => (
        <Car brand={c} />
      ))}
    </div>
  );
};
export default Garage;
