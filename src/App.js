import './App.css';
import React from 'react'
import GetDataPhotos from './Data'
import Gallery from './Gallery'
function App() {
  return (
    <div>
       <h1 className='title'> Image Gallery</h1>
       <GetDataPhotos/>
    </div>
   
  );
}

export default App;
