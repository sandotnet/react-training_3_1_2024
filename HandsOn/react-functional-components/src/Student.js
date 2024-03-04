const Student = ({ name, age, std, section }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>{std}</td>
      <td>{section}</td>
    </tr>
  );
};
const ClassRoom = () => {
  return (
    <>
      <div className="container">
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Std</th>
              <th>Section</th>
            </tr>
          </thead>
          <tbody className="table-primary">
            <Student name="Jismon" age="10" std="4" section="A" />
            <Student name="Faris" age="10" std="4" section="B" />
            <Student name="Abiya" age="10" std="4" section="A" />
            <Student name="Priya" age="10" std="4" section="B" />
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ClassRoom;
