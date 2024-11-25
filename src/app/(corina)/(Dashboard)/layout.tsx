import { onLoginUser } from "@/actions/auth";
import SideBar from "@/components/(corina)/sidebar";
import { ChatProvider } from "@/context/user-chat-context";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const OwnerLayout = async ({ children }: Props) => {
  const authenticated = await onLoginUser("123");
  if (!authenticated) return null;

  return (
    <ChatProvider>
      <div className="flex h-screen w-full">
        <SideBar domains={[]} />
        <div className="w-full h-screen flex flex-col px-5">{children}</div>
      </div>
    </ChatProvider>
  );
};

export default OwnerLayout;
