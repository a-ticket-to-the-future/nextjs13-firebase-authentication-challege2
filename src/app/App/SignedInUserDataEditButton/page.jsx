"use client"

import { useAuth } from '@/app/AuthProvider/page';
import { db } from '@/firebase';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';


const SignedInUserEditButton = () => {

    const {authUser , docId } = useAuth()

    const [userEditModalOpen ,setUserEditModalOpen] = useState(false);
    const [uid , setUid] = useState("")
    const [email , setEmail] = useState("")
    const [displayName , setDisplayName] = useState("")

    // setSignedInUserName(doc.data().displayName)

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
      const handleChangeUid = (e) => {
        const inputPassword = e.target.value;
        setPassword(inputPassword);
        // console.log(password);
      }

      //エディットモーダル開いている時の処理2

      const SignedInUserEditModal = async () => {

        setUserEditModalOpen(true);

        await afterUserEditModal();

      }
      const afterUserEditModal = async () => {
        
          try{
            
            const editRef = doc(db,"users",`${docId}`)
                  const editDocSnap = await getDoc(editRef);
        
                  console.log(editDocSnap.data());
                  const editUserData = editDocSnap.data();
                  console.log(editUserData.uid);
        
                    setDisplayName(editUserData.displayName);
                    setEmail(editUserData.email);
                    setUid(editUserData.uid);
            // // await handleEditSubmit();
    
            // setUserEditModalOpen(false);
          }
           catch(error){
            console.log("サインアップできていません",error);
           }
          
    
        }


      //モーダルを閉じる2
    const closeUserEditModal= () => {
        setUserEditModalOpen(false);
        setDisplayName(null);
        setEmail(null);
        setPassword(null);
      }

      const handleEditSubmit = async (e) => {
        e.preventDefault();
        try{
  
          //ここから
            // const editRef = doc(db,"users",`${docId}`)
            //       const editDocSnap = await getDoc(editRef);
        
            //       console.log(editDocSnap.data());
            //       const editUserData = editDocSnap.data();
            //       console.log(editUserData.uid);
        
            //         setDisplayName(editUserData.displayName);
            //         setEmail(editUserData.email);
            //         setUid(editUserData.uid);
            //ここまで
  
        //   if(authUser.uid){
  
        //     const q = query(collection(db,"users"),where("uid","==",`${signInUser.uid}`))
        //     console.log(q);
  
        //     const docSnapQ = await getDocs(q);
        //     docSnapQ.forEach((doc) => {
        //       console.log(doc.id, "=>" ,doc.data())
        //       setSignedInUserName(doc.data().displayName);
        //       console.log(doc.data().displayName);
        //     });
  
            //snapshot.key.path.segments[6]
  
  
            //ここから
            // const signedInUserRef = doc(db,"users",`KoN9nnWKUCcxRnR97k69`)
            // // const signedInUserRef = doc(db,"users",where("uid","==",`KA8CJbldwxUqsjsm3tVXTqgHHIF3`))
            
            // const signedInUserData = await getDoc(signedInUserRef)
            // // // const signedInUserData = await signedInUserRef.where("uid" , "==" , `${signInUser.uid}`);
            // console.log(signedInUserData);
            // // console.log(signedInUserData.docs[0].data());
            // console.log(signedInUserData.data().displayName);
            // setSignedInUserName(signedInUserData.data().displayName);
  
            // // const singnedInUserUid = docSnap. 
            //ここまで
           
        //   }
          
      
    }catch(error){
      
      const errorCode = error.code;
      const errorMessage = error.Message;
      console.log(errorCode,errorMessage);
      
      alert("入力されたメールアドレスかパスワードが間違っています。または、まだ登録がお済みでないことが考えられます。登録がお済みでない場合はサインアップボタンの方から入力をお願いいたします。")
        return;
      }
    
  
      
  
      closeUserEditModal();
  
      } ;

    //   useEffect( async () =>{

    //     const editRef = doc(db,"users",`${docId}`)
    //       const editDocSnap = await getDoc(editRef);

    //       console.log(editDocSnap.data());
    //       const editUserData = editDocSnap.data();
    //       console.log(editUserData.uid);

    //         setDisplayName(editUserData.displayName);
    //         setEmail(editUserData.email);
    //         setUid(editUserData.uid);

    //   },[])
    // useEffect(()=> {
    //     console.log(docId);
        

    // },[])


  return (
    <div>
      <button 
            className=' w-[150px] h-[30px] border-2 border-fuchsia-600 bg-fuchsia-400 rounded-lg text-slate-50 hover:scale-105 active:scale-95'
            onClick={SignedInUserEditModal}
        >
            編集
      </button>
      <Modal
        isOpen={userEditModalOpen}
        onAfterOpen={afterUserEditModal}
        onRequestClose={closeUserEditModal}
        contentLabel="EmailAuthProvider Modal"
        className=' w-[1000px] h-[500px] mx-[240px] my-[50px]  border-2 border-blue-600 bg-slate-50 '
      >
      <div className='flex flex-col ml-20'>
                  <div className='mt-[50px] ml-[100px]'>モーダルの中身書いてみてここでメールアドレスとパスワードをインプットさせよう</div>
                  <div className=' h-[300px]'>
                    <form action="" onSubmit={handleEditSubmit} >
                      <div className='flex flex-col mt-[100px] ml-[150px]'>
                        <div>
                          <label htmlFor="displayName">ユーザーネーム<span className=' text-slate-50'>...</span></label>
                          <input type="text"
                                 id='displayName'
                                 value={displayName}
                                 onChange={handleChangeDisplayName}
                                 required
                                 className=' border-2 border-black w-[350px] h-[30px] my-5' 
                                 >
                                    
                                 </input>
                                 
                                 
                        </div>
                        <div>
                          <label htmlFor="email">メールアドレス<span className=' text-slate-50'>...</span></label>
                          <input type="email"
                                 id='email'
                                 value={email}
                                 onChange={handleChangeEmail}
                                 required
                                 className=' border-2 border-black w-[350px] h-[30px] my-5' 
                                 >
                                    
                                 </input>
                                 
                                 
                        </div>
                        <div>
                          <label htmlFor="password">ユーザーID<span className=' text-slate-50'>..........</span></label>
                          <input type="text"
                                 id='password'
                                 value={uid}
                                 onChange={handleChangeUid}
                                 required
                                 className='border-2 border-black w-[350px] h-[30px]' 
                                 >
                                   
                                 </input>
                        </div>
                      </div>
                    <div>
                        
                    </div>
                    </form>
                  </div>
                  <div className='flex ml-[100px]' >

                  <button onClick={handleEditSubmit} className='my-10 mr-[350px] bg-fuchsia-400 border-fuchsia-500 text-slate-50 rounded-md w-[150px] h-[30px] hover:scale-105 active:scale-95'>
                    編集を保存
                  </button>
                  <button onClick={closeUserEditModal} className='my-10 bg-red-500 border-red-800 text-slate-50 rounded-md w-[150px] hover:scale-105 active:scale-95'>
                    キャンセル
                  </button>
                  </div>
                </div>
      </Modal>
    </div>
  )
}

export default SignedInUserEditButton
