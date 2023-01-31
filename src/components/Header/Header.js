import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContextProvider';
import styles from './Header.module.css';

export const Header = () => {
  const { token } = useContext(AppContext);
  return (
    <header className={styles.header}>
      <div className='container'>
        <ul className={styles.nav__list}>
          <li>
            <Link className={styles.nav__link} to='/'>
              Главная
            </Link>
          </li>
          <li>
            <NavLink className={styles.nav__link} to='/products'>
              Продукты
            </NavLink>
          </li>
          {token ? (
            <li>
              <NavLink className={styles.nav__link} to='/signin'>
                Выйти
              </NavLink>
            </li>
          ) : (
            <>
              <li>
                <NavLink className={styles.nav__link} to='/signup'>
                  Регистрация
                </NavLink>
              </li>
              <li>
                <NavLink className={styles.nav__link} to='/signin'>
                  Войти
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};
