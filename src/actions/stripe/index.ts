'use server';

// Dummy data to simulate user information and subscription details
const dummyUsers = [
  {
    id: '1',
    clerkId: 'user_1',
    subscription: {
      plan: 'STANDARD',
      credits: 10,
    },
  },
  {
    id: '2',
    clerkId: 'user_2',
    subscription: {
      plan: 'PRO',
      credits: 50,
    },
  },
];

const dummyUserId = 'user_1'; // Simulating a logged-in user

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const onCreateCustomerPaymentIntentSecret = (amount: number, stripeId: string) => {
  try {
    // Simulating payment intent creation
    const paymentIntent = {
      client_secret: 'dummy_client_secret', // Dummy secret for testing
    };

    if (paymentIntent) {
      return { secret: paymentIntent.client_secret };
    }
  } catch (error) {
    console.log(error);
  }
};

export const onUpdateSubscription = async (
  plan: 'STANDARD' | 'PRO' | 'ULTIMATE'
) => {
  try {
    // Simulating user retrieval
    const user = dummyUsers.find(user => user.clerkId === dummyUserId);
    if (!user) return;

    // Update subscription in dummy data
    user.subscription.plan = plan;
    user.subscription.credits = plan === 'PRO' ? 50 : plan === 'ULTIMATE' ? 500 : 10;

    return {
      status: 200,
      message: 'Subscription updated',
      plan: user.subscription.plan,
    };
  } catch (error) {
    console.log(error);
  }
};

const setPlanAmount = (item: 'STANDARD' | 'PRO' | 'ULTIMATE'): number => {
  switch (item) {
    case 'PRO':
      return 1500;
    case 'ULTIMATE':
      return 3500;
    case 'STANDARD':
    default:
      return 0; // Amount for STANDARD plan
  }
};

export const onGetStripeClientSecret = async (
  item: 'STANDARD' | 'PRO' | 'ULTIMATE'
) => {
  try {
    const amount = setPlanAmount(item);

    // Simulating payment intent creation using the calculated amount
    const paymentIntent = {
      client_secret: 'dummy_payment_client_secret', // Dummy secret for testing
      amount: amount, // Store amount for any future use or logging if needed
    };

    if (paymentIntent) {
      return { secret: paymentIntent.client_secret };
    }
  } catch (error) {
    console.log(error);
  }
};
