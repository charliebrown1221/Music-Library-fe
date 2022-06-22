import React, { useState } from 'react';



const SearchBar = (props) => {
    const [fSong, setFSong]=useState('')
      
    const FilterSong = (data) =>  {
      let  results = data.filter((item)  => {
          if (item.title === fSong){
              return true;
        }  else (item.artist === fSong){
            return true;
        }
        
         return results;
      })
      console.logs("filtered song data", results)
      


    }

      

    
    return (
      <div>   
       <form>
      <input type='text' value={fSong} onChange={(event)=> setFSong(event.target.value)} ></input>
      </form>
      <button>Search</button>
        </div>
     );
}
 
export default SearchBar   ;
