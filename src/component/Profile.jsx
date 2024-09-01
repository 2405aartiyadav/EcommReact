import React, { useContext } from 'react'
import { LoginContext } from '../Context/LoginContext';

function Profile() {
  const { logedInUser} =useContext(LoginContext);

  return (
    <div>
        {console.log(logedInUser)}
        
        <h1>Welcome {logedInUser}</h1>
    </div>
  )
}

export default Profile