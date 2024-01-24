//"use client"

import React, { useState, useEffect } from 'react';
import Logo from "../Logo/page"






const productDisplay = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    

  }


  return(

  <section>
    <div className='flex'>
      <div className=" mx-10 my-5 border-2 border-blue-600 px-5 py-1">
        <Logo />
        <div className="">
          <h3>Starter plan</h3>
          <h5>$20.00 / month</h5>
        </div>
      </div>
      <div className='mx-10 my-5'>
        <form 
            action="/create-checkout-session"
            method="POST"
            // onSubmit={handleSubmit}
            >
          {/* Add a hidden field with the lookup_key of your Price */}
          <input type="hidden" name="lookup_key" value="standard-plan" />
          <button id="checkout-and-portal-button"
                  type="submit" 
                  className='border-2 border-pink-600 bg-pink-400 rounded-lg px-5 py-1 hover:scale-110 active:scale-95'
                  // onClick={handleSubmit}
                  >
            Checkout
          </button>
        </form>
      </div>
    </div>
  </section>
  )
};

export default productDisplay;

// const SuccessDisplay = ({ sessionId }) => {
//   return (
//     <section>
//       <div className="product Box-root">
//         <Logo />
//         <div className="description Box-root">
//           <h3>Subscription to starter plan successful!</h3>
//         </div>
//       </div>
//       <form action="/create-portal-session" method="POST">
//         <input
//           type="hidden"
//           id="session-id"
//           name="session_id"
//           value={sessionId}
//         />
//         <button id="checkout-and-portal-button" type="submit">
//           Manage your billing information
//         </button>
//       </form>
//     </section>
//   );
// };

// const Message = ({ message }) => (
//   <section>
//     <p>{message}</p>
//   </section>
// );

// export default function App() {
//   let [message, setMessage] = useState('');
//   let [success, setSuccess] = useState(false);
//   let [sessionId, setSessionId] = useState('');

//   useEffect(() => {
//     // Check to see if this is a redirect back from Checkout
//     const query = new URLSearchParams(window.location.search);

//     if (query.get('success')) {
//       setSuccess(true);
//       setSessionId(query.get('session_id'));
//     }

//     if (query.get('canceled')) {
//       setSuccess(false);
//       setMessage(
//         "Order canceled -- continue to shop around and checkout when you're ready."
//       );
//     }
//   }, [sessionId]);

//   if (!success && message === '') {
//     return <ProductDisplay />;
//   } else if (success && sessionId !== '') {
//     return <SuccessDisplay sessionId={sessionId} />;
//   } else {
//     return <Message message={message} />;
//   }
// }



