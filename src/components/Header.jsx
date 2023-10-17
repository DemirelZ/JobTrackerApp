import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h2>
        <img
          height={100}
          src="https://cdn.freebiesupply.com/logos/large/2x/job-logo-png-transparent.png"
        />
        <span>Job follow-up</span>
      </h2>
      <nav>
        <NavLink to={'/'}>Lob List</NavLink>
        <NavLink to={'/add-job'}>Add Job</NavLink>
      </nav>
    </header>
  );
};

export default Header;