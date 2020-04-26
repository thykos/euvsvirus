import React from 'react';
import PropTypes from 'prop-types';
import Hero from './hero';
import Quote from './quote';
import Text from './text';
import ImageWithText from './imageWithText';
import Title from './title';
import Video from './video';
import Image from './image';
import File from './file';
import QuestionWithComment from './questionWithComment';
import Question from './question';
import './style.css';

const Part = ({ part, progress, onAnswer, sectionId }) => {
  const components = {
    hero: Hero,
    quote: Quote,
    text: Text,
    imageWithText: ImageWithText,
    title: Title,
    video: Video,
    image: Image,
    file: File,
    questionWithComment: QuestionWithComment,
    question: Question
  };

  return (
    <div className="part-wrapper">
      { React.createElement(components[part.type], { part, progress, onAnswer, sectionId }) }
    </div>
  )
};

Part.propTypes = {
  progress: PropTypes.object.isRequired,
  sectionId: PropTypes.number.isRequired,
  onAnswer: PropTypes.func.isRequired,
  part: PropTypes.object.isRequired
};

export default Part;
