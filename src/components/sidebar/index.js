import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserFriends, faBookmark, faCalendarTimes, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { toHHMMSS } from '../../helpers/timer';
import './style.css';

const initialTimer = 18000;

const Sidebar = () => {

  const [ timer, onTimerChange ] = useState(initialTimer);

  setInterval(() => onTimerChange(timer - 1), 1000);

  const links = [
    { to: '/profile', icon: faUser, text: 'Profile' },
    { to: '/team', icon: faUserFriends, text: 'Team' },
    { to: '/sections', icon: faBookmark, text: 'Sections' },
    { to: '/help', icon: faQuestionCircle, text: 'Help' },
  ];

  return (
    <aside className="sidebar-wrapper">
      <div className="sidebar">
        <div className="logo">Logo</div>
        <ul className="menu">
          {links.map((link, idx) => (
            <li key={idx}>
              <NavLink to={link.to} activeClassName="active-menu-link">
                <span className="menu-item-icon"><FontAwesomeIcon size="2x" icon={link.icon}/></span>
                {link.text}
                </NavLink>
            </li>
          ))}
        </ul>
        <div className="sidebar-footer">
          <div className="sidebar-timer">
            <span className="menu-item-icon">
              <FontAwesomeIcon size="2x" icon={faCalendarTimes}/>
            </span>
            <span className="sidebar-timer-time">{toHHMMSS(timer)}</span>
            </div>
        </div>
      </div>
    </aside>
  )
};

export default Sidebar;
