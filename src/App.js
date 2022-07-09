import './App.css';
import React from 'react'
import GetDataPhotos from './data/Data';
import {useState} from 'react';

function App() {
  const [value, setValue] = useState("");

  return (
    <div className='background'>
       <h1 className='title'> Flickr Public Photo</h1>
       <h1 className='subtitle'> Search photos what you want from Flickr Public photos </h1>

       <div className='search'>
          <input type="search"                      
              placeholder="Search photos.." 
              onChange={e=> setValue(e.target.value)}/>
        </div>
        <GetDataPhotos data={value}/>
    </div>
   
  );
}

export default App;
