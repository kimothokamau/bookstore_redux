import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAction } from '../../redux/books/books';

const Book = ({ id, title, category }) => {
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
          { category }
        </p>
      </div>
      <button
        type="button"
        onClick={
      () => handleRemove(id)
}
      >
        Remove
      </button>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
