import React, { useState } from 'react';

const AddSong = (props) =>{
const[title, setTitle ]=useState('')
const[album, setAlbum ]=useState('')
const[artist, setArtist ]=useState('')
const[genre, setGenre ]=useState('')
const[release_date, setRelease_date]=useState('')


    function handelClick(event){
        event.preventDefault();
        let newSong={
               title:title,
               album:album,
               artist:artist,
               genre:genre,
               release_date:release_date
        }
        props.createSong(newSong)
      
    }





    return(

        <form onSubmit={handelClick}>
        <input placeholder='Enter title' value={title} onChange={(event)=> setTitle(event.target.value)}></input>
        <input placeholder='Enter album' value={album} onChange={(event)=> setAlbum(event.target.value)}></input>
        <input placeholder='Enter artist' value={artist} onChange={(event)=> setArtist(event.target.value)}></input>
        <input placeholder='Enter genre' value={genre} onChange={(event)=> setGenre(event.target.value)}></input>
        <input type='date' placeholder='Enter Release date' value={release_date} onChange={(event)=> setRelease_date(event.target.value)}></input>
        <button className='addSong' type='submit' >Submit</button>
        </form>


    )
}
export default AddSong ;