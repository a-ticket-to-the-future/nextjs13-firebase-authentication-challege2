"use client"

import React, { useState } from 'react'
import SignOutButton from './AuthProvider/SignOutButton/page'
import { useAuth } from './AuthProvider/page'

const App = () => {
  // const [authUser,setAuthUser] = useState("");
  const {authUser} = useAuth();

  return (
      <div>
        <div>
         {!authUser && (

          <div>
           Authentication
          </div>
         )} 
        </div>
        <div>
          {/* {authUser && ( */}
          <div>
              <div>
                ログイン中です
              </div>
              <div>
                 <SignOutButton authUser={authUser} />
              </div>
          </div>
          {/* )} */}
        </div>
      </div>
        
  )
}

export default App
