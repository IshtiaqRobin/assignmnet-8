import React from 'react';
import Exercises from './components/Exercises/Exercises';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className='bg-white'>
      <Header></Header>
      <Exercises></Exercises>
    </div>
  );
};

export default App;