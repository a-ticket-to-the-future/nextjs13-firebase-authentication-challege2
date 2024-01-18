//use client

import React, { useState, useEffect } from 'react';

const ProductDisplay = () => (
  <section>
    <div className=' flex'>
    <div className=" border-2 border-blue-500 m-10 w-[300px] h-[60px] ">
      {/* <Logo /> */}
      <div className=" border-green-400 px-20 py-1">
        <h3>Starter plan</h3>
        <h5>$20.00 / month</h5>
      </div>
    </div>
    <form action="/create-checkout-session" method="POST">
      {/* Add a hidden field with the lookup_key of your Price */}
      <input
        type="hidden"
        name="lookup_key"
        value="test-plan"
      />
      <button id="checkout-and-portal-button"
              type="submit"
              className=' border-pink-400 bg-pink-500 rounded-lg hover:scale-110 active:scale-95 m-10 w-[100px] h-[30px]'
              >
        Checkout
      </button>
    </form>
    </div>
  </section>
);

export default ProductDisplay;