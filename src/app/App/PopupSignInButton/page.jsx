// "use client"

// import React, { useRef, useState } from 'react'
// import {googleProvider, gitHubProvider, emailProvider, auth} from "../../../../firebase"
// import { signInWithPopup } from 'firebase/auth';
// import { useAuth } from '../../AuthProvider/page';

// const PopupSignInButton = () => {

//     const [authUser , setAuthUser] = useState("");
//     // const {authUser, setAuthUser} = useAuth();
    
    
//     const signIn = async (selectedProvider,email,password) => {

        
//         let selectedAuthProvider;
//         if(selectedProvider === 'google'){
//             selectedAuthProvider = googleProvider;
//             console.log(selectedProvider);
//         } else if (selectedProvider === 'github'){
//             selectedAuthProvider = gitHubProvider;
//             } else if (selectedProvider === 'email'){
//                 selectedAuthProvider = emailProvider
            
//             } else {
//                 throw new Error("Please select a provider");
//         }

//         try{
//             if(selectedAuthProvider) {
//                 const result = await signInWithPopup(auth,selectedAuthProvider);
//                 const signInUser =result.user
//                 setAuthUser(signInUser);
//                 console.log(signInUser);
//                 console.log(authUser);

//             }
//         }catch (error){
//             console.log('Error signing in',error);
//         }

//     }

//     // const signOut = async () => {
//     //     try{
//     //         await signOut(auth);
//     //         setAuthUser(undefined); 
//     //         console.log("サインアウト成功");
//     //     } catch(error) {
//     //         console.log("サインアウトできていません",error)
//     //     }
//     //     }

//   return (
//     <div>
//       <div>
//       <div>
//                 <button className=' border-2 border-blue-600 mx-5 my-20 px-4 py-1 bg-blue-700 text-slate-50 rounded-md font-bold hover:scale-110 active:scale-95' onClick={() => signIn('google')}>Sign in with Google</button>
//                 {/* <button className=' border-2 border-blue-600 mx-5 my-20 px-4 py-1 bg-blue-700 text-slate-50 rounded-md font-bold hover:scale-110 active:scale-95' onClick={() => signIn('facebook')}>Sign in wit FaceBook</button> */}
//                 <button className=' border-2 border-blue-600 mx-5 my-20 px-4 py-1 bg-green-700 text-slate-50 rounded-md font-bold hover:scale-110 active:scale-95' onClick={() => signIn('github')}>Sign in with GitHub</button>
//                 <button className=' border-2 border-blue-600 mx-5 my-20 px-4 py-1 bg-purple-500 text-slate-50 rounded-md font-bold hover:scale-110 active:scale-95' onClick={() => signIn('email','email@example.com','password')}>Sign in with Email</button>
//       </div>
//         <div>
//           <div>
//           {/* <div>
//       <button className='border-2 border-red-600 mx-5 my-20 px-4 py-1 bg-red-700 text-slate-50 rounded-md font-bold hover:scale-110 active:scale-95' onClick={signOut}>
//                     サインアウト
//       </button>
//     </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default PopupSignInButton
