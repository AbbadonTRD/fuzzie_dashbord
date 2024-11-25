"use client";

import { AuthUser } from "@supabase/supabase-js";
import { Subscription } from "../supabase/supabase.types";
import { createContext, useContext, useEffect, useState } from "react";
// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"; // Comment out Supabase for now
// import { getUserSubscriptionStatus } from "../supabase/queries"; // Comment out API call
import { useToast } from "@/components/(cypress)/ui/use-toast";

// Dummy Data for Mocking
const mockUser: AuthUser = {
  id: "dummyUserId",
  email: "dummy@example.com",
  app_metadata: {},
  user_metadata: {},
  aud: "",
  created_at: "",
  role: "authenticated",
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
const mockSubscription: Subscription = {
  id: "dummySubscriptionId",
  user_id: "dummyUserId",
  status: "active",
  plan: "premium",
};

type SupabaseUserContextType = {
  user: AuthUser | null;
  subscription: Subscription | null;
};

const SupabaseUserContext = createContext<SupabaseUserContextType>({
  user: null,
  subscription: null,
});

export const useSupabaseUser = () => {
  return useContext(SupabaseUserContext);
};

interface SupabaseUserProviderProps {
  children: React.ReactNode;
}

export const SupabaseUserProvider: React.FC<SupabaseUserProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const { toast } = useToast();

  // Replace actual API call with dummy data
  useEffect(() => {
    const getUser = async () => {
      // Simulating fetching the user and subscription data
      setUser(mockUser);
      setSubscription(mockSubscription);

      // If you want to simulate an error, uncomment below:
      // toast({
      //   title: "Unexpected Error",
      //   description: "Oppse! An unexpected error happened. Try again later.",
      // });
    };
    getUser();
  }, [toast]);

  return (
    <SupabaseUserContext.Provider value={{ user, subscription }}>
      {children}
    </SupabaseUserContext.Provider>
  );
};
