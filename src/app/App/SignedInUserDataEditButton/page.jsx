"use client"

import { useAuth } from '@/app/AuthProvider/page';
import { auth, db } from '@/firebase';
import { deleteUser, reauthenticateWithCredential, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateEmail, verifyBeforeUpdateEmail, } from 'firebase/auth';
import { update } from 'firebase/database';
import { deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';


const SignedInUserEditButton = () => {

    const {authUser , docId,password,signOut } = useAuth()

    const [userEditModalOpen ,setUserEditModalOpen] = useState(false);
    const [uid , setUid] = useState("")
    const [email , setEmail] = useState("")
    const [displayName , setDisplayName] = useState("")
    const [newEmail , setNewEmail] = useState("");
    const [reauthPassword,setReauthPassword] = useState("");
    const router = useRouter();

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
        // const inputPassword = e.target.value;
        // setPassword(inputPassword);
        // console.log(password);
      }
      const handleChangeUpdateEmail= (e) => {
        const inputNewEmail = e.target.value;
        setNewEmail(inputNewEmail);
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
                  console.log(editUserData.email);
        
                    setDisplayName(editUserData.displayName);
                    setEmail(editUserData.email);
                    setUid(editUserData.uid);

                    setReauthPassword(password);
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
        // setPassword(null);
      }

      const handleEditSubmit = async (e) => {
        e.preventDefault();
        try{
  

          const updateUserDataRef = doc(db,"users",`${docId}`)

          await updateDoc(updateUserDataRef,{
            displayName:displayName
            
          })
          alert("ユーザー情報を更新しました")

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

    //一度書いたそれっぽい記述/ここから
    // // const updateCredential = await promptForCredentials()
    //   // console.log(auth.currentUser);
    //   const newEmail = prompt("新しいメールアドレスを入力して下さい")

    //   if(!newEmail){
    //     alert("新しいメールアドレスを入力して下さい")
    //     return;
    //   } else {
    //     // const user = auth.currentUser
    //   signInWithEmailAndPassword(auth,email,"grandemilan2011").then((userCredential) => {
    //     // console.log(userCredential);
    //     // const user = userCredential.user
    //     const user = auth.currentUser
    //     console.log(user);
    //     // const emailUpdateUser = updateUserCredential.user;
    //     // console.log(emailUpdateUser);
    //     if(user){
    //       updateEmail(auth,user,newEmail).then(() => {
    //         alert("メールアドレスが更新されました")
    //       }).catch((error) => {
    //         alert("メールアドレスが更新できませんでした")
    //       })
    //     } else{
    //       const errorCode = error.code;
    //     const errorMessage = error.Message;
    //       alert("ログインの確認ができていません")
    //       console.log(errorCode,errorMessage)
    //     }

    //   }).catch((error) => {
    //     //認証に失敗した場合
    //     const errorCode = error.code;
    //     const errorMessage = error.Message;

    //     alert("エラー",errorCode,errorMessage);
    //   })
    //   }
    //ここまで

    const handleUpdateUserEmail = async (e) => {

      e.preventDefault();

      const user = auth.currentUser
      
      //firebaseauth.configs.getHashConfig
      
      
      await sendEmailVerification(auth.currentUser).then(()=> {
        alert("ログインユーザーに確認メールを送信しました")
        console.log(auth.currentUser)

        
      
      }).catch((error) => {
        alert("確認メールの送信に失敗しました")
      })
      
       

      if ( user && user.emailVerified) {

       
      
          const newEmail = prompt("新しいメールアドレスを入力してください")
    
          // const user = auth.currentUser
          const updatedEmail = auth.currentUser.email
    
           await signInWithEmailAndPassword(auth,updatedEmail,`grandemilan2007`).then((credentialUser) => {
            const user = credentialUser.user
    
            if(user && newEmail){
              //auth.currentUser
              verifyBeforeUpdateEmail(auth.currentUser,`${newEmail}`).then(()=>{
                alert("新しいメールアドレスに確認メールが送信されました")
                // sendEmailVerification(user);

                // console.log(auth.currentUser);
                //"KoN9nnWKUCcxRnR97k69"
                const updateUserDataRef = doc(db,"users",`${docId}`)
                console.log(updateUserDataRef);
                 updateDoc(updateUserDataRef,{
                  email:`${newEmail}`
                })
                console.log("firestoreのemail登録データを更新しました")

              }).catch((error) => {
                const errorCode = error.code
                const errorMessage = error.Message
                console.log(errorCode,errorMessage);
                alert("新しいメールアドレスへの更新に失敗しました")
              })
            } else {
              const errorCode = error.code
                const errorMessage = error.Message
                console.log(errorCode,errorMessage);
              alert("現在ログイン中のユーザー情報の変更に失敗しました")
            }
          })
    
          

      }

      

      



      

      

      


    }

    const handleUpdateUserPassword = async () => {

      await sendPasswordResetEmail(auth,email).then(() => {
        alert("パスワード再設定用のメールを登録されているメールアドレスに送信いたしました。")
      }).catch((error) =>{
        const errorCode = error.code;
        const errorMessage = error.Message;
        console.log(errorCode,errorMessage);
        
      })

    }

    const handleDeleteUser = async () => {

      const user = auth.currentUser

      await sendEmailVerification(user).then(() => {
        alert("ログインユーザーに確認メールを送信しました")
        console.log(user.emailVerified)
      }).catch((error) => {
        alert("確認メールの送信に失敗しました")
      })

      if(user && user.emailVerified){

        deleteUser(user).then(()=>{
          alert("ユーザーアカウントを削除しました")
          deleteDoc(doc((db,"users",`${docId}`)))
          closeUserEditModal()
          auth.signOut(auth);
          router.push("/")
        }).catch((error) => {
          alert("ユーザーアカウントの削除に失敗しました")
        })

      } else {
        alert("ログインユーザーの確認に失敗しました")
      }

    }


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
                  <div className='mt-[20px] ml-[100px]'>モーダルの中身書いてみてここでメールアドレスとパスワードをインプットさせよう</div>
                  <div className=' h-[200px]'>
                    <form action="" onSubmit={handleEditSubmit} >
                      <div className='flex flex-col mt-[40px] ml-[150px]'>
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
                          <label htmlFor="uid">ユーザーID<span className=' text-slate-50'>..........</span></label>
                          <input type="text"
                                 id='uid'
                                 value={uid}
                                 onChange={handleChangeUid}
                                 required
                                 className='border-2 border-black w-[350px] h-[30px]' 
                                 >
                                   
                                 </input>
                        </div>
                        <div>
                          <label htmlFor="email">新しいメールアドレス<span className=' text-slate-50'></span></label>
                          <input type="email"
                                 id='newEmail'
                                //  value={uid}
                                 onChange={handleChangeUpdateEmail}
                                 required
                                 className='border-2 border-black w-[350px] h-[30px] my-5' 
                                 >
                                   
                                 </input>
                        </div>
                      </div>
                    <div>
                        
                    </div>
                    </form>
                  </div>
                  <div className=' flex flex-col mt-10'>
                      <div className='flex ml-[100px] ' >

                          <button onClick={handleEditSubmit} className='my-10 mx-5 bg-fuchsia-400 border-fuchsia-500 text-slate-50 rounded-md w-[150px] h-[30px] hover:scale-105 active:scale-95'>
                            編集を保存
                          </button>
                          <button onClick={handleDeleteUser} className='my-10 mx-5 bg-gray-600 border-gray-700 text-slate-50 rounded-md w-[200px] h-[30px] hover:scale-105 active:scale-95'>
                            アカウントを削除する
                          </button>
                          <button onClick={closeUserEditModal} className='my-10 mx-5 bg-red-500 border-red-800 text-slate-50 rounded-md w-[150px] hover:scale-105 active:scale-95'>
                            キャンセル
                          </button>
                      </div>
                          <div className='flex ml-[100px]' >

                          <button onClick={handleUpdateUserEmail} className='my-10 mr-[350px] bg-amber-400 border-amber-500 text-slate-50 rounded-md w-[200px] h-[30px] hover:scale-105 active:scale-95'>
                            メールアドレスを変更する
                          </button>
                          <button onClick={handleUpdateUserPassword} className='my-10 bg-rose-400 border-rose-500 text-slate-50 rounded-md w-[200px] hover:scale-105 active:scale-95'>
                            パスワードを変更する
                          </button>
                      </div>
                  </div>
                </div>
      </Modal>
    </div>
  )
}

export default SignedInUserEditButton
