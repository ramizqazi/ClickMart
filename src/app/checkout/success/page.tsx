'use client';

import { CheckCircle } from 'react-feather';

const CheckoutSuccess = () => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-gray-200">
      <div className="flex flex-col items-center space-y-5">
        <div className="w-16 h-16 rounded-full flex justify-center items-center bg-red-500">
          <CheckCircle size={35} color="white" />
        </div>
        <div>
          <h1 className="text-center text-red-500 text-2xl font-bold">
            Checkout Successfull
          </h1>
          <p className="text-center text-black text-md">
            your order will be delivered soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
