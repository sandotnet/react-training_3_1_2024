import React from "react";

export default function Ex7({ cities }) {
  return (
    <div>
      <ol>
        {cities.map((city) => (
          <li>{city}</li>
        ))}
      </ol>
    </div>
  );
}
