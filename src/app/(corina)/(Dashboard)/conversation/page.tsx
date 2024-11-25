// import { onGetAllAccountDomains } from "@/actions/sittings";
import ConversationMenu from "@/components/(corina)/conversations";
import Messenger from "@/components/(corina)/conversations/messenger";
import InfoBar from "@/components/(corina)/infobar";
import { Separator } from "@/components/(corina)/ui/separator";
import React from "react";

const ConversationPage = async () => {
  // const domains = await onGetAllAccountDomains();
  const domain = [
    {
      name: "example.com",
      id: "1234",
      icon: "*",
    },
  ];
  return (
    <div className="w-full h-full flex">
      <ConversationMenu domains={domain} />

      <Separator orientation="vertical" className="ml-3" />
      <div className="w-full flex flex-col">
        <div className="pl-3 pr-1">
          <InfoBar />
        </div>
        <Messenger />
      </div>
    </div>
  );
};

export default ConversationPage;
