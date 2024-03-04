const Ex5 = () => {
  const x = 6;
  let message = "";
  if (x > 4) message = "Good Morning Students";
  else message = "Good Night Students";
  const element = <h1>{message}</h1>;
  return (
    <>
      {/* {message} */}
      {element}
      <h2>{x > 4 ? "Good Moring Students" : "Good Night Students"}</h2>
    </>
  );
};
export default Ex5;
