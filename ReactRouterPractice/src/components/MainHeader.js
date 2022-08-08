import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink
            activeClassName={classes.active} to="/welcome">Welcome</Link>
          </li>
          <li>
            <NavLink activeClassName={classes.active}  to="/products">products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader