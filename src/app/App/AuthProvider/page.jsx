"use client"

import React, { createContext, useContext, useState } from 'react'
import PopupSignInButton from "./PopupSignInButton/page"



const AuthContext = createContext("useContextのテスト");
export const useAuth = () => {
    return useContext(AuthContext);
}


 const AuthProvider = ({children}) => {

    const [user, setUser] = useState("");
    const [authUser,setAuthUser] = useState("");

  

    const signOut = async () => {
      try{
        if(authUser){
  
          await signOutFromFirebase(auth);
          setAuthUser(undefined);
        }
        // setAuthUser(undefined)
        // console.log(setAuthUser);
      } catch(error) {
        console.log(error);
      }
  
  
  
    }
    

  return (

    <div>
     

    <div className=' m-5'>
      useContextのテスト//これはdivタグの中身の出力です。"useContext"の中身はどこへ行っちゃったのかな？
    </div>
    <div>
      <PopupSignInButton setAuthUser={setAuthUser} />
    </div>
    <div>
    <div>
      <button className='border-2 border-red-600 mx-5 my-20 px-4 py-1 bg-red-700 text-slate-50 rounded-md font-bold hover:scale-110 active:scale-95' onClick={signOut}>
                    サインアウト
      </button>
    </div>
    </div>

    <div>
      
    
   

    <AuthContext.Provider value={{user,setUser,authUser,setAuthUser}}>
        {children}
        {/* {useState("")} */}
    </AuthContext.Provider>
    </div>
    </div>
  )
}

export default AuthProvider;
