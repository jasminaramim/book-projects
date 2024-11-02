import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { image, bookId, bookName, author, tags, category } = book;

    return (

        <Link to={`/books/${bookId}`}>
            <div className="card p-6  border border-gray-400 bg-base-100 w-96 shadow-xl">
                <figure className='bg-gray-500 rounded py-8 '>
                    <img className='h-[166px] '
                        src={image}
                        alt="Books" />
                </figure>

                <div className="card-body">

                    <div className='flex justify-center gap-4'>
                        {
                            tags.map((tag, index )  => <button
                            key={index} className='btn btn-xs bg-slate-300 text-red-500'> {tag}</button>)
                        }
                    </div>
                    <h2 className="card-title text-2xl text-white">
                        {bookName}


                    </h2>
                    <p>by : {author}</p>
                    <div class="border-t-2 mt-2 border-dashed"></div>
                    <div className='flex justify-between mt-4'>
                        <div> {category}</div>
                        <div>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-200" />

                            </div> </div>
                    </div>

                </div>
            </div>
        </Link>
    );
};

export default Book