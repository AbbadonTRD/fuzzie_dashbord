// 'use client'

// import clsx from 'clsx'
// import { ColumnDef } from '@tanstack/react-table'
// import {
//   Agency,
//   AgencySidebarOption,
//   Permissions,
//   Prisma,
//   Role,
//   SubAccount,
//   User,
// } from '@prisma/client'
// import Image from 'next/image'

// import { Badge } from '@/components/plura/ui/badge'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@/components/plura/ui/dropdown-menu'
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from '@/components/plura/ui/alert-dialog'
// import { Button } from '@/components/plura/ui/button'
// import { Copy, Edit, MoreHorizontal, Trash } from 'lucide-react'
// import { useModal } from '@/providers/modal-provider'
// import UserDetails from '@/components/plura/forms/user-details'

// // import { deleteUser, getUser } from '@/lib/queries'
// import { useToast } from '@/components/plura/ui/use-toast'
// import { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { UsersWithAgencySubAccountPermissionsSidebarOptions } from '@/lib/types'
// import CustomModal from '@/components/plura/global/custom-modal'

// export const columns: ColumnDef<UsersWithAgencySubAccountPermissionsSidebarOptions>[] =
//   [
//     {
//       accessorKey: 'id',
//       header: '',
//       cell: () => {
//         return null
//       },
//     },
//     {
//       accessorKey: 'name',
//       header: 'Name',
//       cell: ({ row }) => {
//         const avatarUrl = row.getValue('avatarUrl') as string
//         return (
//           <div className="flex items-center gap-4">
//             <div className="h-11 w-11 relative flex-none">
//               <Image
//                 src={avatarUrl}
//                 fill
//                 className="rounded-full object-cover"
//                 alt="avatar image"
//               />
//             </div>
//             <span>{row.getValue('name')}</span>
//           </div>
//         )
//       },
//     },
//     {
//       accessorKey: 'avatarUrl',
//       header: '',
//       cell: () => {
//         return null
//       },
//     },
//     { accessorKey: 'email', header: 'Email' },

//     {
//       accessorKey: 'SubAccount',
//       header: 'Owned Accounts',
//       cell: ({ row }) => {
//         const isAgencyOwner = row.getValue('role') === 'AGENCY_OWNER'
//         const ownedAccounts = row.original?.Permissions.filter(
//           (per) => per.access
//         )

//         if (isAgencyOwner)
//           return (
//             <div className="flex flex-col items-start">
//               <div className="flex flex-col gap-2">
//                 <Badge className="bg-slate-600 whitespace-nowrap">
//                   Agency - {row?.original?.Agency?.name}
//                 </Badge>
//               </div>
//             </div>
//           )
//         return (
//           <div className="flex flex-col items-start">
//             <div className="flex flex-col gap-2">
//               {ownedAccounts?.length ? (
//                 ownedAccounts.map((account) => (
//                   <Badge
//                     key={account.id}
//                     className="bg-slate-600 w-fit whitespace-nowrap"
//                   >
//                     Sub Account - {account.SubAccount.name}
//                   </Badge>
//                 ))
//               ) : (
//                 <div className="text-muted-foreground">No Access Yet</div>
//               )}
//             </div>
//           </div>
//         )
//       },
//     },
//     {
//       accessorKey: 'role',
//       header: 'Role',
//       cell: ({ row }) => {
//         const role: Role = row.getValue('role')
//         return (
//           <Badge
//             className={clsx({
//               'bg-emerald-500': role === 'AGENCY_OWNER',
//               'bg-orange-400': role === 'AGENCY_ADMIN',
//               'bg-primary': role === 'SUBACCOUNT_USER',
//               'bg-muted': role === 'SUBACCOUNT_GUEST',
//             })}
//           >
//             {role}
//           </Badge>
//         )
//       },
//     },
//     {
//       id: 'actions',
//       cell: ({ row }) => {
//         const rowData = row.original

//         return <CellActions rowData={rowData} />
//       },
//     },
//   ]

// interface CellActionsProps {
//   rowData: UsersWithAgencySubAccountPermissionsSidebarOptions
// }

// const CellActions: React.FC<CellActionsProps> = ({ rowData }) => {
//   const { data, setOpen } = useModal()
//   const { toast } = useToast()
//   const [loading, setLoading] = useState(false)
//   const router = useRouter()
//   if (!rowData) return
//   if (!rowData.Agency) return

//   return (
//     <AlertDialog>
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button
//             variant="ghost"
//             className="h-8 w-8 p-0"
//           >
//             <span className="sr-only">Open menu</span>
//             <MoreHorizontal className="h-4 w-4" />
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent align="end">
//           <DropdownMenuLabel>Actions</DropdownMenuLabel>
//           <DropdownMenuItem
//             className="flex gap-2"
//             onClick={() => navigator.clipboard.writeText(rowData?.email)}
//           >
//             <Copy size={15} /> Copy Email
//           </DropdownMenuItem>
//           <DropdownMenuSeparator />
//           <DropdownMenuItem
//             className="flex gap-2"
//             onClick={() => {
//               setOpen(
//                 <CustomModal
//                   subheading="You can change permissions only when the user has an owned subaccount"
//                   title="Edit User Details"
//                 >
//                   <UserDetails
//                     type="agency"
//                     id={rowData?.Agency?.id || null}
//                     subAccounts={rowData?.Agency?.SubAccount}
//                   />
//                 </CustomModal>,
//                 async () => {
//                   return { user: await getUser(rowData?.id) }
//                 }
//               )
//             }}
//           >
//             <Edit size={15} />
//             Edit Details
//           </DropdownMenuItem>
//           {rowData.role !== 'AGENCY_OWNER' && (
//             <AlertDialogTrigger asChild>
//               <DropdownMenuItem
//                 className="flex gap-2"
//                 onClick={() => {}}
//               >
//                 <Trash size={15} /> Remove User
//               </DropdownMenuItem>
//             </AlertDialogTrigger>
//           )}
//         </DropdownMenuContent>
//       </DropdownMenu>
//       <AlertDialogContent>
//         <AlertDialogHeader>
//           <AlertDialogTitle className="text-left">
//             Are you absolutely sure?
//           </AlertDialogTitle>
//           <AlertDialogDescription className="text-left">
//             This action cannot be undone. This will permanently delete the user
//             and related data.
//           </AlertDialogDescription>
//         </AlertDialogHeader>
//         <AlertDialogFooter className="flex items-center">
//           <AlertDialogCancel className="mb-2">Cancel</AlertDialogCancel>
//           <AlertDialogAction
//             disabled={loading}
//             className="bg-destructive hover:bg-destructive"
//             onClick={async () => {
//               setLoading(true)
//               await deleteUser(rowData.id)
//               toast({
//                 title: 'Deleted User',
//                 description:
//                   'The user has been deleted from this agency they no longer have access to the agency',
//               })
//               setLoading(false)
//               router.refresh()
//             }}
//           >
//             Delete
//           </AlertDialogAction>
//         </AlertDialogFooter>
//       </AlertDialogContent>
//     </AlertDialog>
//   )
// }


'use client'

import clsx from 'clsx'
import { ColumnDef } from '@tanstack/react-table'
import {
  Role,
} from '@prisma/client'
import Image from 'next/image'

import { Badge } from '@/components/plura/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/plura/ui/dropdown-menu'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/plura/ui/alert-dialog'
import { Button } from '@/components/plura/ui/button'
import { Copy, Edit, MoreHorizontal, Trash } from 'lucide-react'
import { useModal } from '@/providers/modal-provider'
import UserDetails from '@/components/plura/forms/user-details'

import { useToast } from '@/components/plura/ui/use-toast'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { UsersWithAgencySubAccountPermissionsSidebarOptions } from '@/lib/types'
import CustomModal from '@/components/plura/global/custom-modal'

// Dummy data for users
const dummyUsers: UsersWithAgencySubAccountPermissionsSidebarOptions[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatarUrl: '/avatars/john.png',
    role: 'AGENCY_ADMIN',
    Agency: {
      id: 'agency1',
      name: 'Dummy Agency',
      SubAccount: [
        { id: 'sub1', name: 'Sub Account 1' },
        { id: 'sub2', name: 'Sub Account 2' },
      ],
    },
    Permissions: [
      {
        id: 'perm1',
        access: true,
        SubAccount: { id: 'sub1', name: 'Sub Account 1' },
      },
      {
        id: 'perm2',
        access: false,
        SubAccount: { id: 'sub2', name: 'Sub Account 2' },
      },
    ],
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    avatarUrl: '/avatars/jane.png',
    role: 'SUBACCOUNT_USER',
    Agency: {
      id: 'agency1',
      name: 'Dummy Agency',
      SubAccount: [
        { id: 'sub1', name: 'Sub Account 1' },
        { id: 'sub2', name: 'Sub Account 2' },
      ],
    },
    Permissions: [
      {
        id: 'perm3',
        access: true,
        SubAccount: { id: 'sub1', name: 'Sub Account 1' },
      },
    ],
  },
  // Add more dummy users as needed
]

// Dummy implementations for deleteUser and getUser
const deleteUser = async (userId: string) => {
  console.log(`User with ID ${userId} has been deleted.`)
  // Simulate a network request delay
  return new Promise((resolve) => setTimeout(resolve, 1000))
}

const getUser = async (userId: string) => {
  console.log(`Fetching details for user ID ${userId}.`)
  // Return dummy user data
  return dummyUsers.find((user) => user.id === userId) || null
}

export const columns: ColumnDef<UsersWithAgencySubAccountPermissionsSidebarOptions>[] = [
  {
    accessorKey: 'id',
    header: '',
    cell: () => {
      return null
    },
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => {
      const avatarUrl = row.getValue('avatarUrl') as string
      return (
        <div className="flex items-center gap-4">
          <div className="h-11 w-11 relative flex-none">
            <Image
              src={avatarUrl}
              fill
              className="rounded-full object-cover"
              alt="avatar image"
            />
          </div>
          <span>{row.getValue('name')}</span>
        </div>
      )
    },
  },
  {
    accessorKey: 'avatarUrl',
    header: '',
    cell: () => {
      return null
    },
  },
  { accessorKey: 'email', header: 'Email' },

  {
    accessorKey: 'SubAccount',
    header: 'Owned Accounts',
    cell: ({ row }) => {
      const isAgencyOwner = row.getValue('role') === 'AGENCY_OWNER'
      const permissions = row.original?.Permissions

      if (!Array.isArray(permissions)) {
        return <div className="text-muted-foreground">No Access Yet</div>
      }

      const ownedAccounts = permissions.filter((per) => per.access)

      if (isAgencyOwner) {
        return (
          <div className="flex flex-col items-start">
            <div className="flex flex-col gap-2">
              <Badge className="bg-slate-600 whitespace-nowrap">
                Agency - {row.original.Agency?.name}
              </Badge>
            </div>
          </div>
        )
      }

      return (
        <div className="flex flex-col items-start">
          <div className="flex flex-col gap-2">
            {ownedAccounts.length ? (
              ownedAccounts.map((account) => (
                <Badge
                  key={account.id}
                  className="bg-slate-600 w-fit whitespace-nowrap"
                >
                  Sub Account - {account.SubAccount.name}
                </Badge>
              ))
            ) : (
              <div className="text-muted-foreground">No Access Yet</div>
            )}
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: ({ row }) => {
      const role: Role = row.getValue('role')
      return (
        <Badge
          className={clsx({
            'bg-emerald-500': role === 'AGENCY_OWNER',
            'bg-orange-400': role === 'AGENCY_ADMIN',
            'bg-primary': role === 'SUBACCOUNT_USER',
            'bg-muted': role === 'SUBACCOUNT_GUEST',
          })}
        >
          {role}
        </Badge>
      )
    },
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const rowData = row.original

      return <CellActions rowData={rowData} />
    },
  },
]

interface CellActionsProps {
  rowData: UsersWithAgencySubAccountPermissionsSidebarOptions
}

const CellActions: React.FC<CellActionsProps> = ({ rowData }) => {
  const { setOpen } = useModal()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  if (!rowData) return null
  if (!rowData.Agency) return null

  return (
    <AlertDialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            className="flex gap-2"
            onClick={() => navigator.clipboard.writeText(rowData.email)}
          >
            <Copy size={15} /> Copy Email
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="flex gap-2"
            onClick={() => {
              setOpen(
                <CustomModal
                  subheading="You can change permissions only when the user has an owned subaccount"
                  title="Edit User Details"
                >
                  <UserDetails
                    type="agency"
                    id={rowData.Agency?.id || null}
                    subAccounts={rowData.Agency?.SubAccount}
                  />
                </CustomModal>,
                async () => {
                  // Dummy implementation; no actual data fetching
                  return { user: dummyUsers.find((u) => u.id === rowData.id) }
                }
              )
            }}
          >
            <Edit size={15} />
            Edit Details
          </DropdownMenuItem>
          {rowData.role !== 'AGENCY_OWNER' && (
            <AlertDialogTrigger asChild>
              <DropdownMenuItem className="flex gap-2">
                <Trash size={15} /> Remove User
              </DropdownMenuItem>
            </AlertDialogTrigger>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-left">
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-left">
            This action cannot be undone. This will permanently delete the user and related data.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex items-center">
          <AlertDialogCancel className="mb-2">Cancel</AlertDialogCancel>
          <AlertDialogAction
            disabled={loading}
            className="bg-destructive hover:bg-destructive"
            onClick={async () => {
              setLoading(true)
              await deleteUser(rowData.id)
              toast({
                title: 'Deleted User',
                description:
                  'The user has been deleted from this agency and no longer has access to the agency.',
              })
              setLoading(false)
              // Since we're using dummy data, we'll just log and refresh the router
              router.refresh()
            }}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default columns
