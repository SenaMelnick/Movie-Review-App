import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styels.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import MovieList from './Components/movie-list';
import { movies } from './data/movies';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MovieList {...movies}/>
);



reportWebVitals();
