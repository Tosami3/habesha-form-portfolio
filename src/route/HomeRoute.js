import React from 'react'
import "../route/HomeRoute.css"
function HomeRoute() {
  return (
    <div className='i-card'>
      <div className='i-card-info'>

        <div className='i-card-form' >
        <span>What does it mean to be Habesha?</span>
        <span>Is it a name for all people who speak a 
          language related to Geez and share a common culture?</span>
        <span>The difference between
           being an Ethiopian and being Habesha</span>
        <button> see video for Habesha</button>
        </div>
      </div>
      
      <div className='i-image'>
      <img  src='/Image/habesha3.jpg' style={{width:"18%"}} />
      </div>
    </div>
  )
}

export default HomeRoute
