import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/AppContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faRightFromBracket,
  faCartShopping,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.css";
import { Search } from "../Search/Search";

export const Header = () => {
  const { token } = useContext(AppContext);
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <Link className={styles.logo} to="/">
          DOG<span>Food</span>
        </Link>
        <Search />
        <ul className={styles.nav__list}>
          <li>
            <NavLink className={styles.nav__link} to="/products">
              <FontAwesomeIcon icon={faList} />
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.nav__link} to="/cart">
              <FontAwesomeIcon icon={faCartShopping} />
            </NavLink>
          </li>
          {token ? (
            <li>
              <NavLink className={styles.nav__link} to="/singout">
                <FontAwesomeIcon icon={faRightFromBracket} />
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink className={styles.nav__link} to="/signin">
                <FontAwesomeIcon icon={faRightToBracket} />
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};
