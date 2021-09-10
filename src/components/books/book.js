import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAction } from '../../redux/books/books';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeBookAction(id));
  };

  return (
    <li id={id}>
      <div>
        <h4>
          { title }
        </h4>
        <p>
          { author }
        </p>
      </div>
      <button type="button" className="btn">Comments</button>
      <button type="button" className="btn" onClick={() => handleRemove(id)}>Remove</button>
      <button type="button" className="btn">Edit</button>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
