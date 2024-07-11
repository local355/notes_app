
import express from 'express';
import path from 'path';
// import cookieParser from 'cookie-parser';
import cors from 'cors'
import logger from 'morgan';


import notesRouter from './routes/notes';

let app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/notes', notesRouter);


app.options('/notes/:id', cors()) // enable pre-flight request for DELETE request

export default  app;
