import express from 'express';
// import { getNews } from '../../client/src/service/api';
import { getNews } from '../controller/news-cont.js';

const Route = express.Router();

Route.get('/news',getNews);

export default Route;