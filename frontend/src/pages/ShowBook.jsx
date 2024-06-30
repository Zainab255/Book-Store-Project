import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className="my-4 p-4 border border-sky-300 rounded-lg shadow-sm bg-white hover:bg-sky-100 transition duration-300">
            <span className="text-xl font-medium text-gray-700 mr-4">ID :</span>
            <span className="text-lg text-gray-900">{book._id}</span>
          </div>

          <div className="my-4 p-4 border border-sky-300 rounded-lg shadow-sm bg-white hover:bg-sky-100 transition duration-300">
            <span className="text-xl font-medium text-gray-700 mr-4">Title :</span>
            <span className="text-lg text-gray-900">{book.title}</span>
          </div>

          <div className="my-4 p-4 border border-sky-300 rounded-lg shadow-sm bg-white hover:bg-sky-100 transition duration-300">
            <span className="text-xl font-medium text-gray-700 mr-4">Author :</span>
            <span className="text-lg text-gray-900">{book.author}</span>
          </div>

          <div className="my-4 p-4 border border-sky-300 rounded-lg shadow-sm bg-white hover:bg-sky-100 transition duration-300">
            <span className="text-xl font-medium text-gray-700 mr-4">Publish Year :</span>
            <span className="text-lg text-gray-900">{book.publishYear}</span>
          </div>

          <div className="my-4 p-4 border border-sky-300 rounded-lg shadow-sm bg-white hover:bg-sky-100 transition duration-300">
            <span className="text-xl font-medium text-gray-700 mr-4">Create Time :</span>
            <span className="text-lg text-gray-900">{new Date(book.createdAt).toString()}</span>
          </div>

          <div className="my-4 p-4 border border-sky-300 rounded-lg shadow-sm bg-white hover:bg-sky-100 transition duration-300">
            <span className="text-xl font-medium text-gray-700 mr-4">Last Update Time :</span>
            <span className="text-lg text-gray-900">{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
