import React from "react";
import "./add.scss";
import { ChangeTheme } from "../../context/ThemeContext";
const Add = ({ setOpen, columns, slug }) => {
  const { theme } = ChangeTheme();
  const handleSubmit = (e) => {
    e.preventDefault();

    // API
  };
  return (
    <div className={`add ${theme}`}>
      <div className="modal">
        <span
          className="close"
          onClick={() => {
            setOpen(false);
          }}
        >
          X
        </span>

        <h1>Add new {slug}</h1>

        <form onSubmit={handleSubmit}>
          {columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item" key={column.field}>
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
