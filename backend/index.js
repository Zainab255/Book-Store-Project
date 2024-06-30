import express from 'express';
import mongoose from 'mongoose';
import { PORT, mongoDBURL } from './config.js';
import booksRoute from './Route/booksRoute.js'; 
import cors from 'cors';

console.log(`PORT: ${PORT}`);         // Logs the port number
console.log(`mongoDBURL: ${mongoDBURL}`);   // Logs the MongoDB URL

const app = express();

// Use middleware
app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  console.log(req);
  return res.status(200).send('Welcome to MERN stack app developer program');
});

// Use the books route
app.use('/books', booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
