import React, { useState } from "react";

export default function Student() {
  const [student, setStudent] = useState({
    id: 4320384,
    name: "Preethi",
    std: 3,
    section: "A",
  });
  const updateStudent = () => {
    //prvstate object keep persist prev data whille update the state
    setStudent((prvstate) => ({
      ...prvstate,
      std: 4,
      section: "B",
    }));
  };
  return (
    <div>
      Student Details
      <br />
      Id:{student.id} <br />
      Name:{student.name} <br />
      Std:{student.std} <br />
      Section:{student.section} <br />
      <button onClick={updateStudent}>Update</button>
    </div>
  );
}
