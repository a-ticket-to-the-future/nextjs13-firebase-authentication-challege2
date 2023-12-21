"use client"

import Image from 'next/image'
import AuthProvider, { useAuth } from './AuthProvider/page'
import App from './App/page'

export default function Home() {
// const [authUser,setAuthUser] = useAuth();

  return (
    <AuthProvider>
    <div className=' w-[1400px] h-[500px] m-5 border-2 border-orange-500 '>
      <div>
        <div>
          <div>
           <App  />
          </div>
        </div>
      </div>
    </div>
    </AuthProvider>
  )
}
