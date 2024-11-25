import InfoBar from "@/components/(corina)/infobar";
import BillingSettings from "@/components/(corina)/settings/billing-settings";
import ChangePassword from "@/components/(corina)/settings/change-password";
import DarkModetoggle from "@/components/(corina)/settings/dark-mode";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <InfoBar />
      <div className="overflow-y-auto w-full chat-window flex-1 h-0 flex flex-col gap-10">
        <BillingSettings />
        <DarkModetoggle />
        <ChangePassword />
      </div>
    </>
  );
};

export default Page;
