import { FC, useContext } from 'react';
import './NavBar.scss';
import { NavLink } from 'react-router-dom';
import PICTURES from '../../images/pictures';
import { FintechContext } from '../../FintechContext';

export const NavBar: FC = () => {
  const {
    setIsAdvertising,
    profileInfo,
    setProfileInfo,
    setAccontsTitle
  } = useContext(FintechContext);

  function home() {
    setIsAdvertising(true);
    setProfileInfo('Profile');
    setAccontsTitle('Your accounts');
  }

  function sendMoney() {
    setIsAdvertising(false);
    setProfileInfo('Setting');
    setAccontsTitle('Send Money From:');
  }

  return (
    <nav className="nav-menu">
      <ul className="nav-menu__list">
        <li className="nav-menu__list-item">
          <NavLink to="/" className="nav-menu__list-link" onClick={home}>
            <i className="icon-home-icon nav-menu__list-icon"></i>
            Home
          </NavLink>
        </li>

        <li className="nav-menu__list-item">
          <NavLink to="/SendMoney" className="nav-menu__list-link" onClick={sendMoney}>
            <i className="icon-send-icon nav-menu__list-icon"></i>
            Send Money
          </NavLink>
        </li>

        <li className="nav-menu__list-item">
          <NavLink to="/TopUp" className="nav-menu__list-link" onClick={sendMoney}>
            <i className="icon-pig-icon nav-menu__list-icon"></i>
            Top Up
          </NavLink>
        </li>

        <li className="nav-menu__list-item">
          <NavLink to="/Accouts" className="nav-menu__list-link" onClick={sendMoney}>
            <i className="icon-wallet-icon nav-menu__list-icon"></i>
            Accouts
          </NavLink>
        </li>
      </ul>

      <span className="nav-menu__profile">
        <img className="nav-menu__icon" src={PICTURES.profile} alt="Profile" />
        <p className="nav-menu__profile-text">{profileInfo}</p>
      </span>
    </nav>
  )
};