'use client';
import { useGetCheckoutId } from '@/react-query/queries';
import { StripeElementsOptions, loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useSearchParams } from 'next/navigation';

import CheckoutForm from '@/components/Checkout/CheckoutForm';
import { CircleLoader } from 'react-spinners';

const stripePromise = loadStripe(
  'pk_test_51NKJhbHh12d4oAxire3nF7NRvaPAiIpQl47kWv4KXaJ7vfdnuNzYbGCrIftFdR37fXy7kyUk84WHcv8P3lAN1d4q00fejphYry',
);

const Checkout = () => {
  const params = useSearchParams();
  const amount = params.getAll('amount')[0] || '0';

  const { data: clientId, isLoading } = useGetCheckoutId(amount);

  const options: StripeElementsOptions = {
    clientSecret: clientId,
    appearance: {
      theme: 'stripe',
    },
  };

  return (
    <div className="w-full h-full flex justify-center items-center bg-gray-200">
      {clientId && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
      {!clientId && isLoading && <CircleLoader color="#999" size={35} />}
    </div>
  );
};

export default Checkout;
