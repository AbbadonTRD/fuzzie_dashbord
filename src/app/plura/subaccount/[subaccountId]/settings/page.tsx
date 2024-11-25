// import SubAccountDetails from '@/components/plura/forms/subaccount-details'
// import UserDetails from '@/components/plura/forms/user-details'
// import BlurPage from '@/components/plura/global/blur-page'
// import { db } from '@/lib/db'
// import { currentUser } from '@clerk/nextjs'
// import React from 'react'

// type Props = {
//   params: { subaccountId: string }
// }

// const SubaccountSettingPage = async ({ params }: Props) => {
//   const authUser = await currentUser()
//   if (!authUser) return
//   const userDetails = await db.user.findUnique({
//     where: {
//       email: authUser.emailAddresses[0].emailAddress,
//     },
//   })
//   if (!userDetails) return

//   const subAccount = await db.subAccount.findUnique({
//     where: { id: params.subaccountId },
//   })
//   if (!subAccount) return

//   const agencyDetails = await db.agency.findUnique({
//     where: { id: subAccount.agencyId },
//     include: { SubAccount: true },
//   })

//   if (!agencyDetails) return
//   const subAccounts = agencyDetails.SubAccount

//   return (
//     <BlurPage>
//       <div className="flex lg:!flex-row flex-col gap-4">
//         <SubAccountDetails
//           agencyDetails={agencyDetails}
//           details={subAccount}
//           userId={userDetails.id}
//           userName={userDetails.name}
//         />
//         <UserDetails
//           type="subaccount"
//           id={params.subaccountId}
//           subAccounts={subAccounts}
//           userData={userDetails}
//         />
//       </div>
//     </BlurPage>
//   )
// }

// export default SubaccountSettingPage



import SubAccountDetails from '@/components/plura/forms/subaccount-details'
import UserDetails from '@/components/plura/forms/user-details'
import BlurPage from '@/components/plura/global/blur-page'
import React from 'react'

// Dummy data
const dummyUserDetails = {
  id: '123',
  name: 'John Doe',
  emailAddresses: [{ emailAddress: 'johndoe@example.com' }],
};

const dummySubAccount = {
  id: '456',
  agencyId: '789',
  name: 'Sub Account 1',
  // Add more fields as necessary
};

const dummyAgencyDetails = {
  id: '789',
  name: 'Agency 1',
  SubAccount: [dummySubAccount], // Example of sub-accounts
};

type Props = {
  params: { subaccountId: string }
}

const SubaccountSettingPage = ({ params }: Props) => {
  // Simulate the current user
  const authUser = dummyUserDetails; // Simulated current user

  if (!authUser) return null;

  // Use dummy data instead of fetching from the database
  const userDetails = dummyUserDetails;
  const subAccount = dummySubAccount;
  const agencyDetails = dummyAgencyDetails;

  // Use the subAccount directly from dummy data
  const subAccounts = agencyDetails.SubAccount;

  return (
    <BlurPage>
      <div className="flex lg:!flex-row flex-col gap-4">
        <SubAccountDetails
          agencyDetails={agencyDetails}
          details={subAccount}
          userId={userDetails.id}
          userName={userDetails.name}
        />
        <UserDetails
          type="subaccount"
          id={params.subaccountId}
          subAccounts={subAccounts}
          userData={userDetails}
        />
      </div>
    </BlurPage>
  )
}

export default SubaccountSettingPage;
