import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styels.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import StarRating from './Components/star-rating';
import Review from './Components/review';
import ReviewList from './Components/review-list';
import Movie from './Components/movie';
import { movies } from './data/movies';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Movie {...movies[0]}></Movie>
);



reportWebVitals();
