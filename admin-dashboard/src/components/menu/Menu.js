import React from "react";
import "./menu.scss";
import { menu } from "../../data";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title titled">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link
              to={listItem.url}
              className="listItem hover"
              key={listItem.id}
            >
              <img src={listItem.icon} alt="icon" />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
