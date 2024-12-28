import React from "react";

function Navbar({ onSelectTask }) {
  return (
    <nav style={{ display: "flex", gap: "10px", padding: "10px", backgroundColor: "#eee" }}>
      <button onClick={() => onSelectTask(1)}>Завдання 1</button>
      <button onClick={() => onSelectTask(2)}>Завдання 2</button>
    </nav>
  );
}

export default Navbar;