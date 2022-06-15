import { FC } from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';

export const NavBar: FC = () => {


  return (
    <nav className="nav-menu">
      <ul className="nav-menu__list">
        <li className="nav-menu__list-item">
          <img className="nav-menu__icon nav-menu__icon_home" src="/images/icons/home-icon.svg" alt="home icon" />
          <Link to="/" className="nav-menu__link">Home</Link>
        </li>

        <li className="nav-menu__list-item">
          <img className="nav-menu__icon nav-menu__icon_send" src="/images/icons/send-icon.svg" alt="home icon" />
          <Link to="/SendMoney" className="nav-menu__link">Send Money</Link>
        </li>

        <li className="nav-menu__list-item">
          <img className="nav-menu__icon nav-menu__icon_pig" src="/images/icons/pig-icon.svg" alt="home icon" />
          <Link to="/TopUp" className="nav-menu__link">Top Up</Link>
        </li>

        <li className="nav-menu__list-item">
          <img className="nav-menu__icon nav-menu__icon_wallet" src="/images/icons/wallet-icon.svg" alt="home icon" />
          <Link to="/Accouts" className="nav-menu__link">Accouts</Link>
        </li>
      </ul>

      <span className="nav-menu__profile">
        <img className="nav-menu__icon" src="/images/pictures/profile-img.png" alt="Profile" />
        <p className="nav-menu__profile-text">Profile</p>
      </span>
    </nav>
  )
};