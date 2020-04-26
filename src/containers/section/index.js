import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { findIndex } from 'lodash';
import { useParams, Link, Redirect } from 'react-router-dom';
import { setSection, setChecked, setAnswer } from '../../store/case';
import Part from '../../components/part';
import './style.css';

const Section = (props) => {
  const { id } = useParams();
  const { cse, onSet, progress, onNext, onAnswer } = props;
  useEffect(() => {
    onSet(id);
  }, [id]);

  const section = cse.sections.find(item => item.id === parseInt(id, 10));
  const sectionIds = cse.sections.map(item => item.id);
  const currentSectionIndex = findIndex(sectionIds, idx => idx === parseInt(id, 10));
  const nextSectionId = sectionIds[currentSectionIndex + 1];
  const prevSectionId = sectionIds[currentSectionIndex - 1];
  const nextLink = nextSectionId ? `/section/${nextSectionId}` : null;
  const prevLink = prevSectionId ? `/section/${prevSectionId}` : null;

  const onClickNext = () => {
    const checkedProgress = progress.checkedSections;
    const nextChecked = checkedProgress.includes(id) ? checkedProgress : [...checkedProgress, id];
    onNext(nextChecked);
  };

  const link = (link, handler, text, type) => link ? <Link to={link} onClick={handler}><button className={`btn big ${type}`}>{text}</button></Link> : <button className={`btn big ${type}`} disabled>{text}</button>;
  return id && section ? (
    <div className="section-wrapper">
      <div className="section-caption">{section.caption}</div>
      {section.parts.map((part, idx) => <Part part={part} key={idx} progress={progress} sectionId={parseInt(id, 10)} onAnswer={onAnswer}/>)}
      <div className="btns-wrapper">
        {link(prevLink, () => {}, 'Previous', 'outline')}
        {link(nextLink, onClickNext, 'Next')}
      </div>
    </div>
  ) : (<Redirect to="/"/>);
};

const mapStateToProps = state => ({
  cse: state.case.item,
  progress: state.case.progress
});

Section.propTypes = {
  cse: PropTypes.object.isRequired,
  progress: PropTypes.object.isRequired,
  onSet: PropTypes.func.isRequired,
  onAnswer: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { onSet: setSection, onNext: setChecked, onAnswer: setAnswer })(Section);
