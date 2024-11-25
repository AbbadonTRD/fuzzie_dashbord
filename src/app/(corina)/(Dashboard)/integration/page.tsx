// import { onGetPaymentConnected } from "@/actions/sittings";
import InfoBar from "@/components/(corina)/infobar";
import IntegrationsList from "@/components/(corina)/integrations";

const IntegrationsPage = async () => {
  //   const payment = await onGetPaymentConnected();

  // const connections = {
  //   stripe: payment ? true : false,
  // };

  const connections = [
    {
      name: "stripe",
      connected: true,
    },
  ];
  return (
    <>
      <InfoBar />
      <IntegrationsList connections={connections} />
    </>
  );
};

export default IntegrationsPage;
