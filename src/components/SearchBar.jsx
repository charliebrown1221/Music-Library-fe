import React, { useState } from 'react';


const SearchBar = (props) => {
    const [fSong, setFSong]=useState('')
      
    const FilterSong = (data) =>  {
      let  results = data.filter((item)  => {
          if (item.title === fSong||item.artist === fSong||item.album === fSong||item.genre === fSong||item.release_date === fSong) {
              return true;}
         
         
         
      })
      console.log("filtered song data", results)
      return results;
      
    }
      
      function handelFilter(event){
        event.preventDefault();
  
        console.log();
        FilterSong(props.songs)
    
      
    }

    return (
        
       <form onSubmit={handelFilter}>
        <div> 
      <input type='text' value={fSong} onChange={(event)=> setFSong(event.target.value)} ></input>
      </div>
      <button type='submit'>Search</button>
        </form>
     );
}
 
export default SearchBar;
