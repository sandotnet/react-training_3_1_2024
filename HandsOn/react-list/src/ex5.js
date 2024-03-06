import React from "react";

export default function Ex5() {
  let obj = { id: 434332, name: "Preethi", age: 10, std: 2, section: "A" };
  return (
    <div className="container">
      <pre className="text-primary">
        Id:{obj.id}
        Name:{obj.name}
        Age:{obj.age}
        Class:{obj.std}
        Section:{obj.section}
      </pre>
    </div>
  );
}
