import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <NavLink to='/products'>Products</NavLink>
          </li>
          <li>
            <NavLink to='/signup'>SignUp</NavLink>
          </li>
          <li>
            <NavLink to='/signin'>SignIn</NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};
