import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/AppContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faRightFromBracket,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.css";

export const Header = () => {
  const { token } = useContext(AppContext);
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <Link className={styles.logo} to="/">
            ૮₍ • ᴥ • ₎ა
          </Link>
          <form action="">
            <input type="text" />
          </form>
          <ul className={styles.nav__list}>
            <li>
              <NavLink className={styles.nav__link} to="/products">
                <FontAwesomeIcon icon={faList} />
                Продукты
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.nav__link} to="/cart">
                <FontAwesomeIcon icon={faCartShopping} />
                Корзина
              </NavLink>
            </li>
            {token ? (
              <li>
                <NavLink className={styles.nav__link} to="/signin">
                  <FontAwesomeIcon icon={faRightFromBracket} />
                  Выйти
                </NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink className={styles.nav__link} to="/signup">
                    Регистрация
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.nav__link} to="/signin">
                    Войти
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};
