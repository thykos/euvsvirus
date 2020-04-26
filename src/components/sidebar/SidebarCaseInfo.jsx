import React from 'react';
import cn from 'classnames';

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
        <div className="achivment" />
        <div className="achivment" />
        <div className="achivment" />
        <div className="achivment" />
        <div className="achivment" />
        <div className="achivment" />
        <div className="achivment" />
        <div className="achivment" />
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
