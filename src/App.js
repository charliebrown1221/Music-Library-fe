import React,{useEffect, useState} from 'react';
import axios from 'axios';
import MusicTable from './components/MusicTable';
import SearchBar from  './components/SearchBar';

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
  <div>
    <MusicTable songs = {songs}/>
  </div>
  <div>
    <SearchBar  songs = {songs}/>
  </div>
   </div>
  );
}

export default App;


