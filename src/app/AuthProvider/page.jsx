"use client"

import { auth, emailProvider, gitHubProvider, googleProvider,credentialProvider, db } from '@/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, } from 'firebase/auth';
import { addDoc, collection, getDoc, getDocs } from 'firebase/firestore';
import React, { createContext, useContext, useState } from 'react'
import Modal from 'react-modal';








const AuthContext = createContext("useContextのテスト");
export const useAuth = () => {
    return useContext(AuthContext);
}


 const AuthProvider = ({children}) => {

    const [user, setUser] = useState("");
    const [authUser,setAuthUser] = useState("");
    const [modalIsOpen,setModalIsOpen] = useState(false);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [displayName,setDisplayName] = useState("");



    //モーダル内で行うサインアップ時の処理

    const handleChangeDisplayName = (e) => {
      const inputDisplayName = e.target.value;
      setDisplayName(inputDisplayName);
      // console.log(displayName);
    }
    const handleChangeEmail = (e) => {
      const inputMail = e.target.value;
      setEmail(inputMail);
      // console.log(email);
    }
    const handleChangePassword = (e) => {
      const inputPassword = e.target.value;
      setPassword(inputPassword);
      // console.log(password);
    }

    const handleSignUpSubmit = async (e) => {
      e.preventDefault();
      try{
        
        const emailRef = await getDocs(collection(db,"users"))
        console.log(emailRef);
        console.log(emailRef.docs);
        for (const checkEmail of emailRef.docs){
          console.log(checkEmail.data().email);
          if(checkEmail.data().email === email){
            alert("このメールアドレスはすでに使用されています")
          } else if(checkEmail.data().email !== email) {
            const userCredential = await createUserWithEmailAndPassword(auth,email,password);
        const signUpUser = userCredential.user;
        console.log(signUpUser);
        setAuthUser(signUpUser);
          
        // const isExistingUser = await auth.checkEmail(email);

        // if(isExistingUser){
        //   //すでに登録されている場合
        //   alert("このメールアドレスはすでに登録されています。");
        //   return;
        // }
        // chek

        //メールアドレスが登録されていない場合
        //もともとはこの４行が動いていた。覚えておいてね。
        // const userCredential = await createUserWithEmailAndPassword(auth,email,password);
        // const signUpUser = userCredential.user;
        // console.log(signUpUser);
        // setAuthUser(signUpUser);
        
        

       //同じメールアドレスが存在しないかを確認し、ユーザー情報の保存を処理をしとこう 
       const saveSignInUserData = async () => {

        // const emailRef = await getDocs(collection(db,"users"))
        // console.log(emailRef);
        // console.log(emailRef.docs);
        // for (const email of emailRef.docs){
        //   console.log(email.data().email);
        //   if(email.data().email === email){
        //     throw new Error("このメールアドレスはすでに使用されています")
        //   }
        // }
        

        const data = {
         displayName : displayName,
          email: email,
          password:password,
          uid:signUpUser.uid,
        }

        const docRef = await addDoc(collection(db,"users"),data);
        

        console.log("Document written with ID :",docRef.id);

        // if(docRef.docs.length > 0){
        //   return;
        // } else {

        //   await addDoc(collection(db,"users"),{
        //     displayName: displayName,
        //     email:email,
        //   });
        //   console.log("Document written with ID",docRef.id)
        // }

       };

       if(signUpUser.uid){
        await saveSignInUserData();
       }

      }
    }
      }catch(error){
        if(error.code === "auth/email-already-in-use"){
          alert("このメールアドレスはすでに使用されています。")
        }
        const errorCode = error.code;
        const errorMessage = error.Message;
        console.log(errorCode,errorMessage);
      }
      closeModal();
    } ;

    //モーダルを閉じる
    const closeModal = () => {
      setModalIsOpen(false);
      setDisplayName(null);
      setEmail(null);
      setPassword(null);
    }


//モーダル開いている時の処理

    const afterOpenModal = async () => {
      
      try{
       
        await handleSignUpSubmit();

        setModalIsOpen(false);
      }
       catch(error){
        console.log("サインアップできていません",error);
       }
      

    }





//google、GitHubプロバイダー使ったログインの処理
  
    const signIn = async (selectedProvider,email,password) => {

        
      let selectedAuthProvider;
      if(selectedProvider === 'google'){
          selectedAuthProvider = googleProvider;
          console.log(selectedProvider);
      } else if (selectedProvider === 'github'){
          selectedAuthProvider = gitHubProvider;
            console.log(selectedAuthProvider);
          } else if (selectedProvider === 'email'){
            if (selectedProvider === 'email'){

                   setModalIsOpen(true);
             await afterOpenModal();

                    
                       

              // selectedAuthProvider = emailProvider

              // console.log(selectedAuthProvider);
            } else if(error) {
              const authUserCredential = await signInWithEmailAndPassword(auth,email,password,displayName)
              // .then((userCredential) => {
              //   setAuthUser(userCredential);
                //とりあえず書いたけど、image-uploader-sample5-clone13-2を参考にして記述してみよう
                //一旦、上２行をコメントアウトして再開2023年12月23日
                setAuthUser(authUserCredential.user);
                console.log(setAuthUser);
                console.log(authUser);

              }
            } else if(error) {
              console.log(error);
            
          
          } else {
              throw new Error("Please select a provider");
      }

      try{
          if(selectedAuthProvider) {
              const result = await signInWithPopup(auth,selectedAuthProvider);
              const signInUser =result.user
              setAuthUser(signInUser);
              console.log(signInUser);
              console.log(authUser);

          }
      }catch (error){
          console.log('Error signing in',error);
      }

  }

  
//サインアウト

  const signOut = async () => {
    try{
        await auth.signOut(auth);
        setAuthUser(undefined); 
        console.log("サインアウト成功");
    } catch(error) {
        console.log("サインアウトできていません",error)
    }
    }
    // const signOut = async () => {
    //   try{
    //     if(authUser){
  
    //       await signOutFromFirebase(auth);
    //       setAuthUser(undefined);
    //     }
    //     // setAuthUser(undefined)
    //     // console.log(setAuthUser);
    //   } catch(error) {
    //     console.log(error);
    //   }
  
  
  
    // }
    

  return (

    <div>
     

    <div className=' m-5'>
      useContextのテスト//これはdivタグの中身の出力です。"useContext"の中身はどこへ行っちゃったのかな？
    </div>
    <div>
    <div>
                <button className=' border-2 border-blue-600 mx-5 my-20 px-4 py-1 bg-blue-700 text-slate-50 rounded-md font-bold hover:scale-110 active:scale-95' onClick={() => signIn('google')}>Sign in with Google</button>
                {/* <button className=' border-2 border-blue-600 mx-5 my-20 px-4 py-1 bg-blue-700 text-slate-50 rounded-md font-bold hover:scale-110 active:scale-95' onClick={() => signIn('facebook')}>Sign in wit FaceBook</button> */}
                <button className=' border-2 border-blue-600 mx-5 my-20 px-4 py-1 bg-green-700 text-slate-50 rounded-md font-bold hover:scale-110 active:scale-95' onClick={() => signIn('github')}>Sign in with GitHub</button>
                <button className=' border-2 border-blue-600 mx-5 my-20 px-4 py-1 bg-purple-500 text-slate-50 rounded-md font-bold hover:scale-110 active:scale-95' onClick={() => signIn('email')}>Sign in with Email</button>
                <Modal
                  isOpen={modalIsOpen}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  contentLabel="EmailAuthProvider Modal"
                  className=' w-[1000px] h-[500px] mx-[240px] my-[50px]  border-2 border-blue-600 bg-slate-50 '
                > 
                <div className='flex flex-col ml-20'>
                  <div className='mt-[50px] ml-[100px]'>モーダルの中身書いてみてここでメールアドレスとパスワードをインプットさせよう</div>
                  <div className=' h-[300px]'>
                    <form action="" onSubmit={handleSignUpSubmit} >
                      <div className='flex flex-col mt-[100px] ml-[150px]'>
                        <div>
                          <label htmlFor="displayName">ユーザーネーム<span className=' text-slate-50'>...</span></label>
                          <input type="text"
                                 id='displayName'
                                //  value={displayName}
                                 onChange={handleChangeDisplayName}
                                 required
                                 className=' border-2 border-black w-[350px] h-[30px] my-5' 
                                 />
                                 
                        </div>
                        <div>
                          <label htmlFor="email">メールアドレス<span className=' text-slate-50'>...</span></label>
                          <input type="email"
                                 id='email'
                                //  value={email}
                                 onChange={handleChangeEmail}
                                 required
                                 className=' border-2 border-black w-[350px] h-[30px] my-5' 
                                 />
                                 
                        </div>
                        <div>
                          <label htmlFor="password">パスワード<span className=' text-slate-50'>..........</span></label>
                          <input type="password"
                                 id='password'
                                //  value={password}
                                 onChange={handleChangePassword}
                                 required
                                 className='border-2 border-black w-[350px] h-[30px]' 
                                 />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className='flex ml-[100px]' >

                  <button onClick={handleSignUpSubmit} className='my-10 mr-[350px] bg-blue-500 border-blue-800 text-slate-50 rounded-md w-[150px] h-[30px] hover:scale-105 active:scale-95'>
                    サインアップ
                  </button>
                  <button onClick={closeModal} className='my-10 bg-red-500 border-red-800 text-slate-50 rounded-md w-[150px] hover:scale-105 active:scale-95'>
                    キャンセル
                  </button>
                  </div>
                </div>
                </Modal>
      </div>
    </div>
    <div>
    {/* <div>
      <button className='border-2 border-red-600 mx-5 my-20 px-4 py-1 bg-red-700 text-slate-50 rounded-md font-bold hover:scale-110 active:scale-95' onClick={signOut}>
                    サインアウト
      </button>
    </div> */}
    </div>
    <div>
      <button className='border-2 border-red-600 mx-5 my-20 px-4 py-1 bg-red-700 text-slate-50 rounded-md font-bold hover:scale-110 active:scale-95' onClick={signOut}>
                    サインアウト
      </button>
    </div>

    <div>
      
    
   

    <AuthContext.Provider value={{user,setUser,authUser,setAuthUser,signIn,signOut}}>
        {children}
        {/* {useState("")} */}
    </AuthContext.Provider>
    </div>
    </div>
  )
}



export default AuthProvider;
