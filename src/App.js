import React,{useEffect, useState} from 'react';
import axios from 'axios';
import MusicTable from './components/MusicTable';

function App() {


    const [songs, setSongs]= useState([]);

       
    useEffect(()=>{
      getAllSongs();
    },[])

    async function getAllSongs() {
      let response = await axios.get('http://127.0.0.1:8000/song/')
      setSongs(response.data)
      console.log(response.data)
    }





  return (
  <div>
    <MusicTable songs = {songs}/>
    
    
    </div>
  );
}

export default App;


