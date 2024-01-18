"use client"

import React, { useRef, useState } from 'react'
import { useAuth } from '../AuthProvider/page'
import { auth, db } from '../../firebase'
import { doc } from 'firebase/firestore'
import SignedInUserDataEditButton from "./SignedInUserDataEditButton/page"
import ProductDisplay from "../StripeTest/stripeTest"



const App = () => {
  // const [authUser,setAuthUser] = useState("");
  const {authUser,signedInUserName} = useAuth();
  
  
  // const signedInUserRef = doc(db,"users")
  // const signedInUserData = signedInUserRef.where("uid","==",uid).get()

  // console.log(signedInUserData);


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
                ようこそ{signedInUserName}さん
              </div>
              <div>
                ログイン中です
              </div>
              <div className='mt-[300px]'>
                <div className=' mx-10'>

                <SignedInUserDataEditButton />
                </div>
                <div>
                  <ProductDisplay />
                </div>
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
