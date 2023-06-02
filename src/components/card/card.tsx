import React from "react";

export default function Card({ title, description, implementation }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{implementation}</span>
    </div>
  );
}
