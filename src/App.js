import React,{useEffect, useState} from 'react';
import axios from 'axios';

function App() {


    const [songs, setSongs]= useState([]);

       
    useEffect(()=>{
      getAllsongs();
    },[])

    async function getAllsongs() {
      let response = await axios.get('http://127.0.0.1:8000/song/')
      setSongs(response.data)
      console.log(response)
    }





  return (
    <div>
      <header >
        hellooo
        
      </header>
    </div>
  );
}

export default App;
