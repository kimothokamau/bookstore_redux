import React from 'react';
import PropTypes from 'prop-types';
import Details from './details';
import Progress from './progress';
import Chapter from './chapter';
import '../../styles/book.css';

const Book = ({ id, title, author }) => (
  <li id={id} className="Li-Lesson-Panel row mb-3">
    <Details id={id} title={title} category={category} />
    <Progress />
    <Chapter />
  </li>
)

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
