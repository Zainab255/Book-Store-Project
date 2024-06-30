import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';
import PropTypes from 'prop-types';


const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="border-2 border-sky-300 rounded-lg shadow-lg px-6 py-4 m-4 relative hover:shadow-xl transition duration-300">
    <h2 className="absolute top-2 right-2 px-3 py-1 bg-red-500 rounded-lg text-white text-xs">
      {book.publishYear}
    </h2>
    <h4 className="my-2 text-gray-600">{book._id}</h4>
    <div className="flex items-center gap-4">
      <PiBookOpenTextLight className="text-sky-500 text-3xl" />
      <h2 className="text-lg font-semibold">{book.title}</h2>
    </div>
    <div className="flex items-center gap-4">
      <BiUserCircle className="text-sky-500 text-3xl" />
      <h2 className="text-lg">{book.author}</h2>
    </div>
    <div className="flex justify-end items-center gap-4 mt-4">
      <BiShow
        className="text-3xl text-blue-800 hover:text-blue-600 cursor-pointer"
        onClick={() => setShowModal(true)}
      />
      <Link to={`/books/detail/${book._id}`}>
        <BsInfoCircle className="text-3xl text-green-600 hover:text-green-400" />
      </Link>
      <Link to={`/books/edit/${book._id}`}>
        <AiOutlineEdit className="text-3xl text-yellow-600 hover:text-yellow-400" />
      </Link>
      <Link to={`/books/delete/${book._id}`}>
        <MdOutlineDelete className="text-3xl text-red-600 hover:text-red-400" />
      </Link>
    </div>
    {showModal && <BookModal book={book} onClose={() => setShowModal(false)} />}
  </div>
  
  
  
  );
};

BookSingleCard.propTypes = {
  book: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publishYear: PropTypes.number.isRequired,
  }).isRequired,
};

export default BookSingleCard;