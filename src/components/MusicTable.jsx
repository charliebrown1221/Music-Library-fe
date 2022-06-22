import React, { useState } from 'react';





const MusicTable = (props) => {


    return ( 
        <table>
        <thead>
         <tr>
           <th>Title</th>
           <th>Album</th>
           <th>Artist</th>
           <th>Genre</th>
           <th>Release Date</th>
         </tr>
         </thead>
        <tbody>
       
        {props.songs.map((item)  =>{
           return (
             <tr >
               <td>{item.title}</td>
               <td>{item.album}</td>
               <td>{item.artist}</td>
               <td>{item.genre}</td>
               <td>{item.release_date}</td>
             </tr>
           );
         })}
        </tbody>
     </table>   
    );
}

 
export default MusicTable