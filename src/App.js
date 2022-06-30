import React,{useEffect, useState} from 'react';
import axios from 'axios';
import MusicTable from './components/MusicTable';
import SearchBar from  './components/SearchBar';
import AddSong from './components/AddSong';
import NavigationBar from './components/NavigationBar';
import './App.css'



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
    async function createSong(newSong){
      let response = await axios.post('http://127.0.0.1:8000/song/', newSong)
      if (response.status===201){
        getAllSongs()
      }
    }




  return (
  <div>
    <div className='nav'>
    <NavigationBar />
    </div>
    <div className='add'>
    <AddSong createSong={createSong}/>
    </div>
  <div className=''>
    <MusicTable songs = {songs}/>
  </div>
  <div className='search-bar'>
    <SearchBar setSongs= {setSongs}songs = {songs}/>
  </div>
   </div>
  );
}

export default App;


