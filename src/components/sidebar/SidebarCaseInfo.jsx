import React from 'react';
import cn from 'classnames';
import {ReactComponent as Icon1} from '../../icons/achivments/award.svg';
import {ReactComponent as Icon2} from '../../icons/achivments/bulb.svg';
import {ReactComponent as Icon3} from '../../icons/achivments/clipboard.svg';
import {ReactComponent as Icon4} from '../../icons/achivments/grad.svg';
import {ReactComponent as Icon5} from '../../icons/achivments/moon.svg';
import {ReactComponent as Icon6} from '../../icons/achivments/note.svg';
import {ReactComponent as Icon7} from '../../icons/achivments/reading.svg';
import {ReactComponent as Icon8} from '../../icons/achivments/startup.svg';








import './style.css';
import { Link } from 'react-router-dom';

const ProgressBar = ({ percent, title = 'Your progress' }) => (
  <div className="ProgressBar">
    <div className="title"><span>{Math.floor(percent)}%</span>&nbsp;{title}</div>
    <div className="bar-wrap">
      <div className="bar" style={{ width: `${percent}%` }} />
    </div>
  </div>
)

const SidebarCaseInfo = ({
  currentCase: {
    item: {
      title,
      sections,
      ...rest
    },
    progress: {
      checkedSections,
      sectionId,
    },
  },
  user
}) => {
  return (
    <div className="SidebarCaseInfo">
      <div className="case-name">{title}</div>
      <div className="user-wrapper">
        <div className="avatar" />
        <div className="name">{user.full_name}</div>
      </div>

      <div className="achivments-wrap">
        <Icon1 className="achivment" />
        <Icon2 className="achivment" />
        <Icon3 className="achivment" />
        <Icon4 className="achivment" />
        <Icon5 className="achivment" />
        <Icon6 className="achivment" />
        <Icon7 className="achivment" />
        <Icon8 className="achivment" />
      </div>
      <ProgressBar percent={checkedSections.length * 100 / sections.length} />
      <div className="case-structure">
        {sections.map((section, idx) => {
          const isActive = `${section.id}` === sectionId;
          const isChecked = checkedSections.includes(`${section.id}`);
          return (
            <Link
              to={`/section/${section.id}`}
              className="no-decoration"
              onClick={e => isChecked ? null : e.preventDefault()}
            >
              <div key={`sect-${idx}`} className={cn('case-section-item', { isActive, isChecked })}>
                <div className="circle" />
                <div className="section-name">{section.title}</div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
    );
}

export default SidebarCaseInfo;
