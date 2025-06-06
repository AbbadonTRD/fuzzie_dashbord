// import AgencyDetails from '@/components/forms/agency-details'
// import { getAuthUserDetails, verifyAndAcceptInvitation } from '@/lib/queries'
// import { currentUser } from '@clerk/nextjs'
// import { Plan } from '@prisma/client'
// import { redirect } from 'next/navigation'
// import React from 'react'

// const Page = async ({
//   searchParams,
// }: {
//   searchParams: { plan: Plan; state: string; code: string }
// }) => {
//   const agencyId = await verifyAndAcceptInvitation()
//   console.log(agencyId)

//   //get the users details
//   const user = await getAuthUserDetails()
//   if (agencyId) {
//     if (user?.role === 'SUBACCOUNT_GUEST' || user?.role === 'SUBACCOUNT_USER') {
//       return redirect('/subaccount')
//     } else if (user?.role === 'AGENCY_OWNER' || user?.role === 'AGENCY_ADMIN') {
//       if (searchParams.plan) {
//         return redirect(`/agency/${agencyId}/billing?plan=${searchParams.plan}`)
//       }
//       if (searchParams.state) {
//         const statePath = searchParams.state.split('___')[0]
//         const stateAgencyId = searchParams.state.split('___')[1]
//         if (!stateAgencyId) return <div>Not authorized</div>
//         return redirect(
//           `/agency/${stateAgencyId}/${statePath}?code=${searchParams.code}`
//         )
//       } else return redirect(`/agency/${agencyId}`)
//     } else {
//       return <div>Not authorized</div>
//     }
//   }
//   const authUser = await currentUser()
//   return (
//     <div className="flex justify-center items-center mt-4">
//       <div className="max-w-[850px] border-[1px] p-4 rounded-xl">
//         <h1 className="text-4xl"> Create An Agency</h1>
//         <AgencyDetails
//           data={{ companyEmail: authUser?.emailAddresses[0].emailAddress }}
//         />
//       </div>
//     </div>
//   )
// }

// export default Page



import AgencyDetails from '@/components/plura/forms/agency-details'
import React from 'react'

// Dummy user and agency data
const dummyUser = {
  role: 'AGENCY_OWNER', // Change as needed for testing different roles
  emailAddresses: [{ emailAddress: 'test@example.com' }],
};

const dummyAgencyId = 'dummyAgencyId';

const Page = async ({
  searchParams,
}: {
  searchParams: { plan?: string; state?: string; code?: string }
}) => {
  // Simulate fetching agencyId and user details
  const agencyId = dummyAgencyId;
  const user = dummyUser;

  // Role-based redirection logic
  if (agencyId) {
    if (user?.role === 'SUBACCOUNT_GUEST' || user?.role === 'SUBACCOUNT_USER') {
      return <div>Redirecting to /subaccount...</div>;
    } else if (user?.role === 'AGENCY_OWNER' || user?.role === 'AGENCY_ADMIN') {
      if (searchParams.plan) {
        return <div>Redirecting to /agency/{agencyId}/billing?plan={searchParams.plan}...</div>;
      }
      if (searchParams.state) {
        const statePath = searchParams.state.split('___')[0];
        const stateAgencyId = searchParams.state.split('___')[1];
        if (!stateAgencyId) return <div>Not authorized</div>;
        return <div>Redirecting to /agency/{stateAgencyId}/{statePath}?code={searchParams.code}...</div>;
      } else return <div>Redirecting to /agency/{agencyId}...</div>;
    } else {
      return <div>Not authorized</div>;
    }
  }

  return (
    <div className="flex justify-center items-center mt-4">
      <div className="max-w-[850px] border-[1px] p-4 rounded-xl">
        <h1 className="text-4xl">Create An Agency</h1>
        <AgencyDetails
          data={{ companyEmail: dummyUser.emailAddresses[0].emailAddress }}
        />
      </div>
    </div>
  );
}

export default Page;
