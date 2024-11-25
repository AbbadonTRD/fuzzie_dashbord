'use server'

// Dummy data to simulate users and domains
const users = [
  { id: '1', fullname: 'John Doe', clerkId: '123', type: 'admin', subscription: {} },
  { id: '2', fullname: 'Jane Smith', clerkId: '456', type: 'user', subscription: {} },
];

// Dummy function to simulate getting account domains
const onGetAllAccountDomains = async () => {
  return { domains: ['example.com', 'another-domain.com'] };
};

// Simulate user registration
export const onCompleteUserRegistration = async (
  fullname: string,
  clerkId: string,
  type: string
) => {
  try {
    const newUser = {
      id: `${users.length + 1}`, // Simulate auto-increment ID
      fullname,
      clerkId,
      type,
      subscription: {}, // Simulating the subscription data
    };

    users.push(newUser); // Add the new user to the dummy array

    return { status: 200, user: { fullname: newUser.fullname, id: newUser.id, type: newUser.type } };
  } catch (error) {
    console.log(error)
    return { status: 400, message: 'Registration failed' };
  }
};

// Simulate user login
export const onLoginUser = async (clerkId: string) => {
  try {
    const authenticated = users.find(user => user.clerkId === clerkId);

    if (authenticated) {
      const domains = await onGetAllAccountDomains();
      return { status: 200, user: authenticated, domain: domains?.domains };
    } else {
      return { status: 404, message: 'User not found' };
    }
  } catch (error) {
    console.log(error)
    return { status: 400, message: 'Login failed' };
  }
};
