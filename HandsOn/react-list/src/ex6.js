const Student = ({ student }) => {
  return (
    <tr>
      <td>{student.id}</td>
      <td>{student.name}</td>
      <td>{student.age}</td>
      <td>{student.std}</td>
      <td>{student.section}</td>
    </tr>
  );
};
const School = () => {
  let students = [
    { id: 434332, name: "Preethi", age: 10, std: 3, section: "A" },
    { id: 434334, name: "Tarun", age: 11, std: 4, section: "A" },
    { id: 434378, name: "Kadir", age: 12, std: 5, section: "A" },
    { id: 434362, name: "Vaishu", age: 10, std: 2, section: "B" },
    { id: 434398, name: "Gayatri", age: 11, std: 3, section: "B" },
  ];
  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Std</th>
            <th>Section</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <Student student={student} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default School;
