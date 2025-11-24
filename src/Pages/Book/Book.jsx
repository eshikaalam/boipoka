import React, { use } from 'react'
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';


function Book({singleBook}) {
    const {bookName, bookId, author, image, category, tags, yearOfPublishing, publisher} = singleBook;
    // const data = use(bookPromise);
  return (
   <Link to={`/bookDetails/${bookId}`}>
    <div className="card bg-base-100 w-96 shadow-sm border p-6 shadow hover:bg-amber-100" >
  <figure className='p-3 bg-gray-100 w-2/3 mx-auto'>
    <img className='h-[166px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='flex justify-center gap-10 text-cyan-600'>
      {
      tags.map(tag => <button>{tag}</button>)
    }
    </div>
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">{yearOfPublishing}</div>
    </h2>
    <p> Book by: {publisher}</p>
    <div className='border-1 border-dashed'> </div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{singleBook.rating}<FaStarHalfAlt className='text-amber-300'></FaStarHalfAlt></div>
    </div>
  </div>
</div>
   </Link>
  )
}

export default Book