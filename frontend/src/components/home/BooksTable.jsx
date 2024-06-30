import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import PropTypes from 'prop-types';


const BooksTable = ({ books }) => {
  return (
    <table className="w-full border-separate border-spacing-2 bg-white shadow-lg rounded-lg overflow-hidden">
    <thead className="bg-sky-300">
      <tr>
        <th className="border border-gray-300 p-3 rounded-tl-lg">No</th>
        <th className="border border-gray-300 p-3">Title</th>
        <th className="border border-gray-300 p-3 max-md:hidden">Author</th>
        <th className="border border-gray-300 p-3 max-md:hidden">Publish Year</th>
        <th className="border border-gray-300 p-3 rounded-tr-lg">Operations</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book, index) => (
        <tr key={book._id} className="hover:bg-sky-100 transition-colors duration-200">
          <td className="border border-gray-300 p-3 text-center">{index + 1}</td>
          <td className="border border-gray-300 p-3 text-center">{book.title}</td>
          <td className="border border-gray-300 p-3 text-center max-md:hidden">{book.author}</td>
          <td className="border border-gray-300 p-3 text-center max-md:hidden">{book.publishYear}</td>
          <td className="border border-gray-300 p-3 text-center">
            <div className="flex justify-center gap-4">
              <Link to={`/books/detail/${book._id}`}>
                <BsInfoCircle className="text-2xl text-green-600 hover:text-green-800 transition-colors duration-200" />
              </Link>
              <Link to={`/books/edit/${book._id}`}>
                <AiOutlineEdit className="text-2xl text-yellow-500 hover:text-yellow-700 transition-colors duration-200" />
              </Link>
              <Link to={`/books/delete/${book._id}`}>
                <MdOutlineDelete className="text-2xl text-red-500 hover:text-red-700 transition-colors duration-200" />
              </Link>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  
  );
};


BooksTable.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publishYear: PropTypes.number.isRequired,
  })).isRequired,
};

export default BooksTable;
