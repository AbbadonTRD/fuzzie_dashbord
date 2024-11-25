// import InfoBar from '@/components/plura/global/infobar'
// import Sidebar from '@/components/plura/sidebar'
// import Unauthorized from '@/components/plura/unauthorized'
// import {
//   getAuthUserDetails,
//   getNotificationAndUser,
//   verifyAndAcceptInvitation,
// } from '@/lib/queries'
// import { currentUser } from '@clerk/nextjs'
// import { Role } from '@prisma/client'
// import { redirect } from 'next/navigation'
// import React from 'react'

// type Props = {
//   children: React.ReactNode
//   params: { subaccountId: string }
// }

// const SubaccountLayout = async ({ children, params }: Props) => {
//   const agencyId = await verifyAndAcceptInvitation()
//   if (!agencyId) return <Unauthorized />
//   const user = await currentUser()
//   if (!user) {
//     return redirect('/')
//   }

//   let notifications: any = []

//   if (!user.privateMetadata.role) {
//     return <Unauthorized />
//   } else {
//     const allPermissions = await getAuthUserDetails()
//     const hasPermission = allPermissions?.Permissions.find(
//       (permissions) =>
//         permissions.access && permissions.subAccountId === params.subaccountId
//     )
//     if (!hasPermission) {
//       return <Unauthorized />
//     }

//     const allNotifications = await getNotificationAndUser(agencyId)

//     if (
//       user.privateMetadata.role === 'AGENCY_ADMIN' ||
//       user.privateMetadata.role === 'AGENCY_OWNER'
//     ) {
//       notifications = allNotifications
//     } else {
//       const filteredNoti = allNotifications?.filter(
//         (item) => item.subAccountId === params.subaccountId
//       )
//       if (filteredNoti) notifications = filteredNoti
//     }
//   }

//   return (
//     <div className="h-screen overflow-hidden">
//       <Sidebar
//         id={params.subaccountId}
//         type="subaccount"
//       />

//       <div className="md:pl-[300px]">
//         <InfoBar
//           notifications={notifications}
//           role={user.privateMetadata.role as Role}
//           subAccountId={params.subaccountId as string}
//         />
//         <div className="relative">{children}</div>
//       </div>
//     </div>
//   )
// } 

// export default SubaccountLayout


'use client' // Indicate that this is a client component

import InfoBar from '@/components/plura/global/infobar'
import Sidebar from '@/components/plura/sidebar'
import React from 'react'

// Dummy notifications for demonstration
const dummyNotifications = [
  { id: 1, message: 'New message from support', subAccountId: 'sub_001' },
  { id: 2, message: 'Your plan will expire soon', subAccountId: 'sub_001' },
]

type Props = {
  children: React.ReactNode
  params: { subaccountId: string }
}

const SubaccountLayout: React.FC<Props> = ({ children, params }) => {
  // Use dummy data to simulate notifications
  const notifications = dummyNotifications.filter(
    (notification) => notification.subAccountId === params.subaccountId
  )

  return (
    <div className="h-screen overflow-hidden">
      <Sidebar
        id={params.subaccountId}
        type="subaccount"
      />

      <div className="md:pl-[300px]">
        <InfoBar
          notifications={notifications}
          role="AGENCY_ADMIN" // Set a default role
          subAccountId={params.subaccountId}
        />
        <div className="relative">{children}</div>
      </div>
    </div>
  )
}

export default SubaccountLayout

