import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div class='container'>
        <ul className={styles.nav__list}>
          <li>
            <Link className={styles.nav__link} to='/'>
              Home
            </Link>
          </li>
          <li>
            <NavLink className={styles.nav__link} to='/products'>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.nav__link} to='/signup'>
              SignUp
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.nav__link} to='/signin'>
              SignIn
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};
