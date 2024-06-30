// import React from 'react'; // Remove this line
import { Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import ShowBook from "./pages/ShowBook";
import CreateBook from "./pages/CreateBook";

const App = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center p-12 bg-gradient-to-r from-sky-400 to-sky-600 text-white shadow-lg rounded-lg transform transition duration-300 hover:scale-90">Book Store Project</h1>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/create' element={<CreateBook/>}/>
      <Route path='/books/detail/:id' element={<ShowBook/>}/>
      <Route path='/books/edit/:id' element={<EditBook/>}/>
      <Route path='/books/delete/:id' element={<DeleteBook/>}/>

    </Routes>
    </div>
  )
}

export default App