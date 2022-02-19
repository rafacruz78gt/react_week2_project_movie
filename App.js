import React from 'react';
import MovieList from './Components/MovieList';

import './App.css';

function App() {

  return (
    <div className="MovieApp">
      <h1>Student: Jorge Cruz de Leon</h1>
      <h1>Movie Reviews: Marvel Universe: SpiderMan</h1>
      <div className="container">
        <div><MovieList />
        </div>
      </div>
    </div>
  )
  
}


export default App;
