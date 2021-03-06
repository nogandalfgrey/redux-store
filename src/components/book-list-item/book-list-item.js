import React from 'react';

import './book-list-item.css'

const BookListItem = ({ book, onAddedToCart }) => {

  const { title, author, image, price } = book;

  return (
    <div className='book-list-item'>
      <div className='book-image-wrapper'>
        <img className='book-image' src={image} alt='book'/>
      </div>
      <div className='book-info'>
        <a className='book-title' href='#'>{title}</a>
        <div className='book-author'>{author}</div>
        <div className='book-price'>{price}$</div>
        <button
            onClick={onAddedToCart}
            className='btn btn-info book-button'
        >
          Add to cart
        </button>
      </div>
    </div>
  )
};

export default BookListItem;