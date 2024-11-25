// import { getAuthUserDetails } from '@/lib/queries'
// import { off } from 'process'
// import React from 'react'
// import MenuOptions from './menu-options'

// type Props = {
//   id: string
//   type: 'agency' | 'subaccount'
// }

// const Sidebar = async ({ id, type }: Props) => {
//   const user = await getAuthUserDetails()
//   if (!user) return null

//   if (!user.Agency) return

//   const details =
//     type === 'agency'
//       ? user?.Agency
//       : user?.Agency.SubAccount.find((subaccount) => subaccount.id === id)

//   const isWhiteLabeledAgency = user.Agency.whiteLabel
//   if (!details) return

//   let sideBarLogo = user.Agency.agencyLogo || '/assets/plura-logo.svg'

//   if (!isWhiteLabeledAgency) {
//     if (type === 'subaccount') {
//       sideBarLogo =
//         user?.Agency.SubAccount.find((subaccount) => subaccount.id === id)
//           ?.subAccountLogo || user.Agency.agencyLogo
//     }
//   }

//   const sidebarOpt =
//     type === 'agency'
//       ? user.Agency.SidebarOption || []
//       : user.Agency.SubAccount.find((subaccount) => subaccount.id === id)
//           ?.SidebarOption || []

//   const subaccounts = user.Agency.SubAccount.filter((subaccount) =>
//     user.Permissions.find(
//       (permission) =>
//         permission.subAccountId === subaccount.id && permission.access
//     )
//   )

//   return (
//     <>
//       <MenuOptions
//         defaultOpen={true}
//         details={details}
//         id={id}
//         sidebarLogo={sideBarLogo}
//         sidebarOpt={sidebarOpt}
//         subAccounts={subaccounts}
//         user={user}
//       />
//       <MenuOptions
//         details={details}
//         id={id}
//         sidebarLogo={sideBarLogo}
//         sidebarOpt={sidebarOpt}
//         subAccounts={subaccounts}
//         user={user}
//       />
//     </>
//   )
// }

// export default Sidebar


import React from 'react';
import MenuOptions from './menu-options';
 // Adjust the import path as necessary

const Sidebar = () => {
  // Sample data for the sidebar
  const sidebarLogo = '/assets/plura-logo.svg'; // Update with your logo path
  const details = {
    name: 'Your Agency Name',
    address: '123 Main St, City, Country',
  };

  // Sample sidebar options
  const sidebarOpt = [
    { id: '1', link: '/dashboard', name: 'Dashboard', icon: 'dashboardIcon' },
    { id: '2', link: '/profile', name: 'Profile', icon: 'profileIcon' },
    { id: '3', link: '/settings', name: 'Settings', icon: 'settingsIcon' },
    // Add more options as needed
  ];

  return (
    <div className="sidebar-container">
      <MenuOptions
        sidebarLogo={sidebarLogo}
        details={details}
        sidebarOpt={sidebarOpt}
        defaultOpen={true} // Set this to true to have it open by default
      />
    </div>
  );
};

export default Sidebar;

