import React from "react";
import BotTrainingForm from "@/components/(corina)/forms/settings/bot-training";
import SettingsForm from "@/components/(corina)/forms/settings/form";
import InfoBar from "@/components/(corina)/infobar";
import ProductTable from "@/components/(corina)/products";
import { redirect } from "next/navigation";

type Props = { params: { domain: string } };

// Dummy data to simulate domain info
const dummyDomains = [
  {
    id: "1",
    name: "mydomain.com",
    subscription: { plan: "STANDARD" },
    chatBot: {
      id: "chatbot-1", // Adding required 'id'
      icon: null, // Adding required 'icon' (use a string URL or null)
      welcomeMessage: "Welcome to my domain chatbot", // Adding required 'welcomeMessage'
    },
    products: [
      { id: "p1", name: "Product 1", price: 100 },
      { id: "p2", name: "Product 2", price: 200 },
    ],
  },
  {
    id: "2",
    name: "example.com",
    subscription: { plan: "PRO" },
    chatBot: {
      id: "chatbot-2",
      icon: "https://example.com/icon.png", // Providing an icon URL
      welcomeMessage: "Hello from Example Bot",
    },
    products: [],
  },
];

// { id: string; name: string; price: number; image: string; createdAt: Date; domainId: string | null; }
const products = [
  {
    id: "p1",
    name: "Product 1",
    price: 100,
    image: "https://example.com/product1.jpg",
    createdAt: new Date(),
    domainId: "1",
  },
];

// Simulating a function to fetch domain info from dummy data
const onGetCurrentDomainInfo = async (domainName: string) => {
  return dummyDomains.find((domain) => domain.name === domainName);
};

const DomainSettingsPage = async ({ params }: Props) => {
  const domain = await onGetCurrentDomainInfo(params.domain);
  if (!domain) redirect("/dashboard");

  return (
    <>
      <InfoBar />
      <div className="overflow-y-auto w-full chat-window flex-1 h-0">
        <SettingsForm
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-expect-error
          plan={domain.subscription?.plan}
          chatBot={domain.chatBot}
          id={domain.id}
          name={domain.name}
        />
        <BotTrainingForm id={domain.id} />
        <ProductTable id={domain.id} products={products || []} />
      </div>
    </>
  );
};

export default DomainSettingsPage;
