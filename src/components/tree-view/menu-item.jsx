import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./styles.css";

export default function MenuItem({ item }) {
  const [displayCurrChild, setDisplayCurrChild] = useState({});
  function handleToggleChild(getCurrLabel) {
    setDisplayCurrChild({
      ...displayCurrChild,
      [getCurrLabel]: !displayCurrChild[getCurrLabel],
    });
  }

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChild(item.label)}>
            {displayCurrChild[item.label] ? (
              <FaMinus color="#fff" size={25} />
            ) : (
              <FaPlus color="#fff" size={25} />
            )}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrChild[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
