// import BlurPage from '@/components/global/blur-page'
// import InfoBar from '@/components/global/infobar'
// import Sidebar from '@/components/sidebar'
// import Unauthorized from '@/components/unauthorized'
// import {
//   getNotificationAndUser,
//   verifyAndAcceptInvitation,
// } from '@/lib/queries'
// import { currentUser } from '@clerk/nextjs'
// import { redirect } from 'next/navigation'
// import React from 'react'

// type Props = {
//   children: React.ReactNode
//   params: { agencyId: string }
// }

// const layout = async ({ children, params }: Props) => {
//   const agencyId = await verifyAndAcceptInvitation()
//   const user = await currentUser()

//   if (!user) {
//     return redirect('/')
//   }

//   if (!agencyId) {
//     return redirect('/agency')
//   }

//   if (
//     user.privateMetadata.role !== 'AGENCY_OWNER' &&
//     user.privateMetadata.role !== 'AGENCY_ADMIN'
//   )
//     return <Unauthorized />

//   let allNoti: any = []
//   const notifications = await getNotificationAndUser(agencyId)
//   if (notifications) allNoti = notifications

 

//   return (
//     <div className="h-screen overflow-hidden">
//       <Sidebar
//         id={params.agencyId}
//         type="agency"
//       />
//       <div className="md:pl-[300px]">
//         <InfoBar
//           notifications={allNoti}
//           role={allNoti.User?.role}
//         />
//         <div className="relative">
//           <BlurPage>{children}</BlurPage>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default layout



import BlurPage from '@/components/plura/global/blur-page'
import InfoBar from '@/components/plura/global/infobar'
import Sidebar from '@/components/plura/sidebar'
import Unauthorized from '@/components/plura/unauthorized'
import React from 'react'

// Dummy data for testing
const dummyUser = {
  privateMetadata: {
    role: 'AGENCY_OWNER', // Change this to test different roles
  },
};
const dummyAgencyId = 'dummyAgencyId';
const dummyNotifications = [{ message: 'Notification 1' }, { message: 'Notification 2' }];

type Props = {
  children: React.ReactNode
  params: { agencyId: string }
}

const Layout = ({ children, params }: Props) => {
  const agencyId = dummyAgencyId; // Dummy agency ID
  const user = dummyUser; // Dummy user

  // Using dummy notifications
  const allNoti = dummyNotifications;

  // Check if agencyId is present
  if (!agencyId) {
    return <Unauthorized />;
  }

  // Check user role for InfoBar

  return (
    <div className="h-screen overflow-hidden">
      <Sidebar
        
     
      />
      <div className="md:pl-[300px]">
        
          <InfoBar
            notifications={allNoti}
            role={user.privateMetadata.role}
          />
        
        <div className="relative">
          <BlurPage>{children}</BlurPage>
        </div>
      </div>
    </div>
  );
}

export default Layout;
