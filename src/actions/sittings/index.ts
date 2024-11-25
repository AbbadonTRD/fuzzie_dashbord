"use server";

// Dummy Data
const dummyUsers = [
  {
    id: "1",
    clerkId: "user_1",
    subscription: { plan: "STANDARD" },
    domains: [],
  },
  {
    id: "2",
    clerkId: "user_2",
    subscription: { plan: "PRO" },
    domains: [
      { id: "domain_1", name: "example.com", icon: "icon1.png" },
      { id: "domain_2", name: "example2.com", icon: "icon2.png" },
    ],
  },
];

type SubscriptionPlan = "STANDARD" | "PRO" | "ULTIMATE";

const maxDomains: Record<SubscriptionPlan, number> = {
  STANDARD: 1,
  PRO: 5,
  ULTIMATE: 10,
};

// Simulated currentUser function
const currentUser = async () => {
  return { id: "user_1" };
};

export const onIntegrateDomain = async (domain: string, icon: string) => {
  const user = await currentUser();
  if (!user) return;

  const currentUserData = dummyUsers.find((u) => u.clerkId === user.id);

  if (!currentUserData) return;

  const subscription: { plan: string } = currentUserData.subscription;
  const domainExists = currentUserData.domains.some((d) => d.name === domain);

  if (!domainExists) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    if (currentUserData.domains.length < maxDomains[subscription.plan]) {
      const newDomain = {
        name: domain,
        icon,
        id: `domain_${currentUserData.domains.length + 1}`,
      };
      currentUserData.domains.push(newDomain);

      return { status: 200, message: "Domain successfully added" };
    }

    return {
      status: 400,
      message:
        "You've reached the maximum number of domains, upgrade your plan",
    };
  }
  return {
    status: 400,
    message: "Domain already exists",
  };
};

export const onGetSubscriptionPlan = async () => {
  try {
    const user = await currentUser();
    if (!user) return;

    const userData = dummyUsers.find((u) => u.clerkId === user.id);
    return userData?.subscription.plan;
  } catch (error) {
    console.log(error);
  }
};

export const onGetAllAccountDomains = async () => {
  const user = await currentUser();
  if (!user) return;

  const userData = dummyUsers.find((u) => u.clerkId === user.id);
  return { ...userData };
};

export const onUpdatePassword = async () => {
  try {
    const user = await currentUser();

    if (!user) return null;
    // Dummy password update logic
    return { status: 200, message: "Password updated" };
  } catch (error) {
    console.log(error);
  }
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
export const onGetCurrentDomainInfo = async (domain) => {
  const user = await currentUser();
  if (!user) return;

  const userData = dummyUsers.find((u) => u.clerkId === user.id);
  const userDomain = userData?.domains.find((d) => d.name === domain);

  if (userDomain) {
    return {
      subscription: {
        plan: userData?.subscription.plan,
      },
      domains: [userDomain],
    };
  }
};

export const onUpdateDomain = async (id: string, name: string) => {
  const user = await currentUser();

  if (!user) return;

  try {
    const userData = dummyUsers.find((u) => u.clerkId === user.id);

    // Ensure userData and domains are defined
    if (!userData || !userData.domains) {
      return {
        status: 404,
        message: "User or domains not found",
      };
    }

    // Get the index of the domain
    const domainIndex = userData.domains.findIndex((d) => d.id === id);

    // Check if the domain was found
    if (domainIndex !== -1) {
      // Directly access the domains array since we confirmed it's defined
      userData.domains[domainIndex].name = name;

      return {
        status: 200,
        message: "Domain updated successfully",
      };
    }

    return {
      status: 404,
      message: "Domain not found",
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "An error occurred while updating the domain",
    };
  }
};

export const onChatBotImageUpdate = async (id: string, icon: string) => {
  const user = await currentUser();

  if (!user) return;

  try {
    const userData = dummyUsers.find((u) => u.clerkId === user.id);
    const domain = userData?.domains.find((d) => d.id === id);

    if (domain) {
      domain.icon = icon;
      return {
        status: 200,
        message: "Domain updated",
      };
    }

    return {
      status: 400,
      message: "Oops something went wrong!",
    };
  } catch (error) {
    console.log(error);
  }
};

export const onUpdateWelcomeMessage = async () => {
  try {
    // Dummy welcome message update logic
    return { status: 200, message: "Welcome message updated" };
  } catch (error) {
    console.log(error);
  }
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
export const onDeleteUserDomain = async (id) => {
  const user = await currentUser();

  if (!user) return;

  try {
    const userData = dummyUsers.find((u) => u.clerkId === user.id);
    const domainIndex = userData?.domains.findIndex((d) => d.id === id);

    if (domainIndex !== -1) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      const deletedDomain = userData?.domains.splice(domainIndex, 1)[0];
      return {
        status: 200,
        message: `${deletedDomain?.name} was deleted successfully`,
      };
    }
  } catch (error) {
    console.log(error);
  }
};

export const onCreateHelpDeskQuestion = async () => {
  try {
    // Dummy help desk question logic

    return {
      id: "question",
      question: "How to set up a new domain?",
      answer:
        "Follow these steps: 1. Go to the Domains tab 2. Click Add Domain 3. Enter the domain name and click Save",
    };
  } catch (error) {
    console.log(error);
  }
};

export const onGetAllHelpDeskQuestions = async () => {
  try {
    // Dummy help desk questions
    return {
      status: 200,
      message: "Help desk questions retrieved",
      questions: [],
    };
  } catch (error) {
    console.log(error);
  }
};

export const onCreateFilterQuestions = async () => {
  try {
    // Dummy filter question creation
    return {
      id: "question",
      question: "How to set up a new domain?",
      answer:
        "Follow these steps: 1. Go to the Domains tab 2. Click Add Domain 3. Enter the domain name and click Save",
    };
  } catch (error) {
    console.log(error);
  }
};

export const onGetAllFilterQuestions = async () => {
  try {
    // Dummy filter questions retrieval
    return {
      status: 200,
      message: "",
      questions: [],
    };
  } catch (error) {
    console.log(error);
  }
};

export const onGetPaymentConnected = async () => {
  try {
    const user = await currentUser();
    if (user) {
      // Dummy payment connection status
      return "connected_stripe_id";
    }
  } catch (error) {
    console.log(error);
  }
};

export const onCreateNewDomainProduct = async () => {
  try {
    // Dummy product creation
    return {
      status: 200,
      message: "Product successfully created",
    };
  } catch (error) {
    console.log(error);
  }
};
