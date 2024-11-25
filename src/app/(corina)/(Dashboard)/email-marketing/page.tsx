import EmailMarketing from "@/components/(corina)/email-marketing";
import InfoBar from "@/components/(corina)/infobar";
import React from "react";

const Page = async () => {
  // Dummy data for customers and campaigns
  const customers = {
    subscription: [
      { id: "sub1", email: "customer1@example.com", status: "active" },
      { id: "sub2", email: "customer2@example.com", status: "inactive" },
    ],
    domains: [
      {
        customer: [
          {
            Domain: { name: "example.com" },
            id: "cust1",
            email: "customer1@example.com",
          },
          {
            Domain: { name: "anotherdomain.com" },
            id: "cust2",
            email: "customer2@example.com",
          },
        ],
      },
    ],
  };

  const campaigns = {
    campaign: [
      { id: "campaign1", name: "Welcome Campaign", status: "ongoing" },
      { id: "campaign2", name: "Follow-up Campaign", status: "completed" },
    ],
  };

  return (
    <>
      <InfoBar />
      <EmailMarketing
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        campaign={campaigns?.campaign}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        subscription={customers?.subscription}
        domains={customers?.domains}
      />
    </>
  );
};

export default Page;
