import React from 'react'
import loading from "./Spinner-1s-200px.gif";

 const Spiner =()=> {
  
    return (
      <div  className='text-center'>
        <img src={loading} style={{height:"88px"}} className='text-center sm-6' alt="loading" ></img>
      </div>
    )
 
}
export default Spiner
