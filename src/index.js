import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styels.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import StarRating from './Components/star-rating';
import { movies } from './data/movies';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StarRating></StarRating>
);



reportWebVitals();
