import React, { useState } from 'react';
import './Table.css'

const SearchBar = (props) => {
    const [fSong, setFSong]=useState('')
      
    const FilterSong = (data) =>  {
      let  results = data.filter((item)  => {
          if (item.title === fSong||item.artist === fSong||item.album === fSong||item.genre === fSong||item.release_date === fSong) {
              return true;}
      }
      )
      console.log("filtered song data", results)
      props.setSongs(results)
      return results;    
    } 
      function handelFilter(event){
        event.preventDefault();
        FilterSong(props.songs)
    
      
    }

    return (
        
       <form onSubmit={handelFilter}>
        <div className='search-bar'> 
      <input type='text' value={fSong} onChange={(event)=> setFSong(event.target.value)} ></input>
      
      <button className='button' type='submit' placeholder='What song are you looking for'>Search</button>
        </div>
        </form>
     );
}
 
export default SearchBar;
