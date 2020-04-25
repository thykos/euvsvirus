import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { findIndex } from 'lodash';
import { useParams, Link, Redirect } from 'react-router-dom';
import { setSection } from '../../store/case';
import Part from '../../components/part';
import './style.css';

const Section = (props) => {
  const { id } = useParams();
  const { cse, onSet } = props;
  useEffect(() => {
    onSet(id);
  }, []);

  const section = cse.sections.find(item => item.id === parseInt(id));
  const sectionIds = cse.sections.map(item => item.id);
  const currentSectionIndex = findIndex(sectionIds, idx => idx === parseInt(id));
  const nextSectionId = sectionIds[currentSectionIndex + 1];
  const prevSectionId = sectionIds[currentSectionIndex - 1];
  const nextLink = nextSectionId ? `/section/${nextSectionId}` : '/';
  const prevLink = prevSectionId ? `/section/${prevSectionId}` : '/';
  return id ? (
    <div className="section-wrapper">
      {section && section.parts.map((part, idx) => <Part part={part} key={idx}/>)}
      <div className="btns-wrapper">
        <Link to={prevLink}><button className="btn big">Previous</button></Link>
        <Link to={nextLink}><button className="btn big">Next</button></Link>
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
  onSet: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { onSet: setSection })(Section);
