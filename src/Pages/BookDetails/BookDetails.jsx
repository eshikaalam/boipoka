import React from 'react'
import { useLoaderData, useParams } from 'react-router'

function BookDetails() {
  const { id } = useParams();  // here the fetched id is string
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find(book => book.bookId === bookId);
  const { bookName, image, author, category, review } = singleBook;
  return (
    <div className='w-2/3 mx-auto flex justify-around gap-6'>
      <img className='w-48' src={image} alt="" />
      <div>
        <h1 className='text-3xl mb-3'>Book Name:{bookName}</h1>
        <p className='border-b-2 border-dashed mb-3'>By: {author}</p>
        <p>{category}</p>
        <p className='border-b-2 border-dashed mb-3'>Review: <small>{review}</small></p>
        <button className="btn btn-accent m-2">Read</button>
      <button className="btn btn-info n-2">WishList</button>
      </div>

      
    </div>
  )
}

export default BookDetails