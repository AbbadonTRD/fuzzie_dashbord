import agencyDetails from "@/components/plura/forms/agency-details";
import AgencyDetails from "@/components/plura/forms/agency-details";
import UserDetails from "@/components/plura/forms/user-details";

import React from "react";

type Props = {
  params: { agencyId: string };
};

const SettingsPage = async ({ params }: Props) => {
  return (
    <div className="flex lg:!flex-row flex-col gap-4">
      <AgencyDetails data={agencyDetails} />
      <UserDetails
        type="agency"
        id={params.agencyId}
        subAccounts={[
          {
            id: "user-123",
            role: "AGENCY_ADMIN",
            name: "Jane Doe",
            createdAt: new Date("2023-01-01"),
            updatedAt: new Date(),
            agencyId: "agency-456",
            avatarUrl: "https://via.placeholder.com/150",
            email: "jane.doe@example.com",
          },
        ]}
        userData={{
          id: "agency-456",
          address: "123 Main St",
          name: "Example Agency",
          connectAccountId: null,
          companyEmail: "contact@exampleagency.com",
          companyPhone: "+1 (555) 123-4567",
          city: "Metropolis",
          zipCode: "12345",
        }}
      />
    </div>
  );
};

export default SettingsPage;
