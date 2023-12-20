"use client"

import React, { useState } from 'react'
import SignOutButton from './AuthProvider/SignOutButton/page'
import { useAuth } from './AuthProvider/page'

const App = () => {
  // const [authUser,setAuthUser] = useState("");
  const {authUser,setAuthUser} = useAuth();

  return (
      <div>
        <div>
         {!setAuthUser && (

          <div>
           Authentication
          </div>
         )} 
        </div>
        <div>
          {setAuthUser && (
          <div>
              <div>
                ログイン中です
              </div>
              <div>
                 <SignOutButton  />
              </div>
          </div>
          )}
        </div>
      </div>
        
  )
}

export default App
