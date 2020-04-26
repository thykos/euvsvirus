import React, { useState, useEffect } from 'react';
import { NavLink, useHistory, Link } from 'react-router-dom';
import { toHHMMSS } from '../../helpers/timer';
import './style.css';
// assets
import { ReactComponent as BookmarkIcon } from '../../icons/bookmark.svg'
import { ReactComponent as TeamIcon } from '../../icons/team.svg'
import { ReactComponent as MessageIcon } from '../../icons/message.svg'
import { ReactComponent as AlarmIcon } from '../../icons/alarm.svg'
import SidebarCaseInfo from './SidebarCaseInfo';
import { useSelector } from 'react-redux';
import { ReactComponent as Logo } from '../../icons/itercase.svg';

const initialTimer = 18000;

const Timer = () => {
  const initTime = localStorage.getItem('timer');
  const diff = initTime !== null ? Math.round((new Date().getTime() - +initTime) / 1000)  : 0;
  const [timer, setTimer] = useState(diff);
  let timeInterval = null;
  useEffect(() => {
    timeInterval = setInterval(() => {
      setTimer(prevValue => prevValue + 1);
    }, 1000);
    return () => {
      clearInterval(timeInterval);
    }
  }, [setTimer]);

  return (
    <div className="sidebar-timer">
      <AlarmIcon className="alarm-icon"/>
      <span className="sidebar-timer-time">{toHHMMSS(timer)}</span>
    </div>
  );
}


const Sidebar = () => {

  const currentCase = useSelector(state => state.case)
  const currentUser = useSelector(state => state.user.user)
  const { location: { pathname } } = useHistory();
  const links = [
    { to: '/notes', icon: <BookmarkIcon />, text: 'Notes' },
    { to: '/my-team', icon: <TeamIcon />, text: 'My Team' },
    { to: '/help', icon: <MessageIcon />, text: 'Help' },
  ];
  return (
    <aside className="sidebar-wrapper">
      <div className="sidebar">
        {currentCase && pathname.includes('section') && <SidebarCaseInfo currentCase={currentCase} user={currentUser} />}
        <Link to="/">
          <Logo className="logo"/>
        </Link>
        <ul className="menu">
          {links.map((link, idx) => (
            <li key={idx}>
              <NavLink to={link.to} activeClassName="active-menu-link">
                <span className="menu-item-icon">{link.icon}</span>
                {link.text}
                </NavLink>
            </li>
          ))}
        </ul>
        {pathname.includes('section') && <Timer />}
      </div>
    </aside>
  )
};

export default Sidebar;
