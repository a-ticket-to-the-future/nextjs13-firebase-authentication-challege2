"use client"

import React, { useRef, useState } from 'react'
import { useAuth } from '../AuthProvider/page'
import { auth } from '../../firebase'

const App = () => {
  // const [authUser,setAuthUser] = useState("");
  const {authUser} = useAuth();


  // const res = useRef();
  // console.log(res);


  return (
      <div>
        <div>
         {!authUser && (
          <div>
          <div>
           Authentication
          </div>
          <div>
          {/* <PopupSignInButton  /> */}
          </div>
          </div>
         )} 
        </div>
        <div>
          {authUser && (
          <div>
              <div>
                ログイン中です
              </div>
              {/* <div>
                 <SignOutButton  />
              </div> */}
          </div>
          )}
        </div>
      </div>
        
  )
}

export default App
