//use client

import React, { useState, useEffect } from 'react';

// const ProductDisplay = () => (
//   <section>
//     <div className=' flex'>
//     <div className=" border-2 border-blue-500 m-10 w-[300px] h-[60px] ">
//       {/* <Logo /> */}
//       <div className=" border-green-400 px-20 py-1">
//         <h3>Starter plan</h3>
//         <h5>$20.00 / month</h5>
//       </div>
//     </div>
//     <form action="/create-checkout-session" method="POST">
//       {/* Add a hidden field with the lookup_key of your Price */}
//       <input
//         type="hidden"
//         name="lookup_key"
//         value="test-plan"
//       />
//       <button id="checkout-and-portal-button"
//               type="submit"
//               className=' border-pink-400 bg-pink-500 rounded-lg hover:scale-110 active:scale-95 m-10 w-[100px] h-[30px]'
//               >
//         Checkout
//       </button>
//     </form>
//     </div>
//   </section>
// );

// export default ProductDisplay;





// import React, { useState, useEffect } from 'react';
// import './App.css';

const ProductDisplay = () => (
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
        <form action="/create-checkout-session" method="POST">
          {/* Add a hidden field with the lookup_key of your Price */}
          <input type="hidden" name="lookup_key" value="test-plan" />
          <button id="checkout-and-portal-button"
                  type="submit" 
                  className='border-2 border-pink-600 bg-pink-400 rounded-lg px-5 py-1 hover:scale-110 active:scale-95'
                  >
            Checkout
          </button>
        </form>
      </div>
    </div>
  </section>
);

const SuccessDisplay = ({ sessionId }) => {
  return (
    <section>
      <div className="product Box-root">
        <Logo />
        <div className="description Box-root">
          <h3>Subscription to starter plan successful!</h3>
        </div>
      </div>
      <form action="/create-portal-session" method="POST">
        <input
          type="hidden"
          id="session-id"
          name="session_id"
          value={sessionId}
        />
        <button id="checkout-and-portal-button" type="submit">
          Manage your billing information
        </button>
      </form>
    </section>
  );
};

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function App() {
  let [message, setMessage] = useState('');
  let [success, setSuccess] = useState(false);
  let [sessionId, setSessionId] = useState('');

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get('success')) {
      setSuccess(true);
      setSessionId(query.get('session_id'));
    }

    if (query.get('canceled')) {
      setSuccess(false);
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, [sessionId]);

  if (!success && message === '') {
    return <ProductDisplay />;
  } else if (success && sessionId !== '') {
    return <SuccessDisplay sessionId={sessionId} />;
  } else {
    return <Message message={message} />;
  }
}

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="14px"
    height="16px"
    viewBox="0 0 14 16"
    version="1.1"
  >
    <defs />
    <g id="Flow" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g
        id="0-Default"
        transform="translate(-121.000000, -40.000000)"
        fill="#E184DF"
      >
        <path
          d="M127,50 L126,50 C123.238576,50 121,47.7614237 121,45 C121,42.2385763 123.238576,40 126,40 L135,40 L135,56 L133,56 L133,42 L129,42 L129,56 L127,56 L127,50 Z M127,48 L127,42 L126,42 C124.343146,42 123,43.3431458 123,45 C123,46.6568542 124.343146,48 126,48 L127,48 Z"
          id="Pilcrow"
        />
      </g>
    </g>
  </svg>
);

