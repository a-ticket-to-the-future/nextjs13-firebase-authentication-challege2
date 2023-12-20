"use client"

import { auth } from '@/firebase'
import React, { useState } from 'react'
import AuthProvider, { useAuth } from '../page'
import {signOut as signOutFromFirebase} from "firebase/auth"

const SignOutButton = () => {
  const {authUser,setAuthUser} = useAuth();
  // console.log(authUser)
  

  const signOut = async () => {
    try{
        await auth.signOut(auth);
        setAuthUser(undefined); 
        console.log("サインアウト成功");
    } catch(error) {
        console.log("サインアウトできていません",error)
    }
    }

  return (
    <div>
      <button className='border-2 border-red-600 mx-5 my-20 px-4 py-1 bg-red-700 text-slate-50 rounded-md font-bold hover:scale-110 active:scale-95' onClick={signOut}>
                    サインアウト
      </button>
    </div>
  )
}

export default SignOutButton
