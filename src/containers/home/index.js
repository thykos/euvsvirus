import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Preview from '../../components/preview';
import './style.css';

const Home = ({ cse }) => {
  return (
    <div className="home-wrapper">
      <Preview item={cse} />
    </div>
  )
};

const mapStateToProps = state => ({
  cse: state.case.item
});

Home.propTypes = {
  cse: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Home);
