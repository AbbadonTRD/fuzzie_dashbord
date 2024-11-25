// import BlurPage from '@/components/plura/global/blur-page' 
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/plura/ui/avatar'
// import { Badge } from '@/components/plura/ui/badge'
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from '@/components/plura/ui/table'
// import { db } from '@/lib/db'
// import { Contact, SubAccount, Ticket } from '@prisma/client'
// import format from 'date-fns/format'
// import React from 'react'
// import CreateContactButton from './_components/create-contact-btn'

// type Props = {
//   params: { subaccountId: string }
// }

// const ContactPage = async ({ params }: Props) => {
//   type SubAccountWithContacts = SubAccount & {
//     Contact: (Contact & { Ticket: Ticket[] })[]
//   }

//   // Attempt to retrieve the subaccount with contacts
//   const contacts = await db.subAccount.findUnique({
//     where: {
//       id: params.subaccountId,
//     },
//     include: {
//       Contact: {
//         include: {
//           Ticket: {
//             select: {
//               value: true,
//             },
//           },
//         },
//         orderBy: {
//           createdAt: 'asc',
//         },
//       },
//     },
//   }) as SubAccountWithContacts | null; // Allow contacts to be null

//   // Handle the case where no subaccount is found
//   if (!contacts) {
//     return (
//       <BlurPage>
//         <h1 className="text-4xl p-4">No Contacts Found for this Subaccount</h1>
//       </BlurPage>
//     );
//   }

//   const allContacts = contacts.Contact;

//   const formatTotal = (tickets: Ticket[]) => {
//     if (!tickets || tickets.length === 0) return '$0.00';
//     const amt = new Intl.NumberFormat(undefined, {
//       style: 'currency',
//       currency: 'USD',
//     });

//     const laneAmt = tickets.reduce(
//       (sum, ticket) => sum + (Number(ticket?.value) || 0),
//       0
//     );

//     return amt.format(laneAmt);
//   }

//   return (
//     <BlurPage>
//       <h1 className="text-4xl p-4">Contacts</h1>
//       <CreateContactButton subaccountId={params.subaccountId} />
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead className="w-[200px]">Name</TableHead>
//             <TableHead className="w-[300px]">Email</TableHead>
//             <TableHead className="w-[200px]">Active</TableHead>
//             <TableHead>Created Date</TableHead>
//             <TableHead className="text-right">Total Value</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody className="font-medium truncate">
//           {allContacts.map((contact) => (
//             <TableRow key={contact.id}>
//               <TableCell>
//                 <Avatar>
//                   <AvatarImage alt={contact.name} />
//                   <AvatarFallback className="bg-primary text-white">
//                     {contact.name.slice(0, 2).toUpperCase()}
//                   </AvatarFallback>
//                 </Avatar>
//               </TableCell>
//               <TableCell>{contact.email}</TableCell>
//               <TableCell>
//                 {formatTotal(contact.Ticket) === '$0.00' ? (
//                   <Badge variant={'destructive'}>Inactive</Badge>
//                 ) : (
//                   <Badge className="bg-emerald-700">Active</Badge>
//                 )}
//               </TableCell>
//               <TableCell>{format(contact.createdAt, 'MM/dd/yyyy')}</TableCell>
//               <TableCell className="text-right">
//                 {formatTotal(contact.Ticket)}
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </BlurPage>
//   )
// }

// export default ContactPage;





import BlurPage from '@/components/plura/global/blur-page'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/plura/ui/avatar'
import { Badge } from '@/components/plura/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/plura/ui/table'
import format from 'date-fns/format'
import React from 'react'
import { db } from '@/lib/db'

type Props = {
  params: { subaccountId: string }
}

type Ticket = {
  id: string
  value: number
}

type Contact = {
  id: string
  name: string
  email: string
  createdAt: Date
  Ticket: Ticket[]
}

const ContactPage = async ({ params }: Props) => {
  const isDevelopment = process.env.NODE_ENV === 'development'
  
  let contacts: { id: string; Contact: Contact[] }

  if (isDevelopment) {
    // Use dummy data for development
    contacts = {
      id: params.subaccountId,
      Contact: [
        {
          id: 'contact1',
          name: 'John Doe',
          email: 'john.doe@example.com',
          createdAt: new Date('2023-01-01'),
          Ticket: [
            { id: 'ticket1', value: 150.0 },
            { id: 'ticket2', value: 200.5 },
          ],
        },
        {
          id: 'contact2',
          name: 'Jane Smith',
          email: 'jane.smith@example.com',
          createdAt: new Date('2023-02-15'),
          Ticket: [],
        },
        // Add more dummy contacts as needed
      ],
    }
  } else {
    // Fetch from the database
    contacts = await db.subAccount.findUnique({
      where: { id: params.subaccountId },
      include: {
        Contact: {
          include: {
            Ticket: {
              select: { value: true },
            },
          },
          orderBy: { createdAt: 'asc' },
        },
      },
    }) as { id: string; Contact: Contact[] }
  }

  const allContacts = contacts.Contact

  const formatTotal = (tickets: Ticket[]) => {
    if (!tickets || tickets.length === 0) return '$0.00'
    const formatter = new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: 'USD',
    })

    const total = tickets.reduce((sum, ticket) => sum + (ticket.value || 0), 0)
    return formatter.format(total)
  }

  return (
    <BlurPage>
      <h1 className="text-4xl p-4">Contacts</h1>
      {/* Assuming you have a CreateContactButton component */}
      {/* <CreateContactButton subaccountId={params.subaccountId} /> */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Name</TableHead>
            <TableHead className="w-[300px]">Email</TableHead>
            <TableHead className="w-[200px]">Active</TableHead>
            <TableHead>Created Date</TableHead>
            <TableHead className="text-right">Total Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="font-medium truncate">
          {allContacts.map((contact) => (
            <TableRow key={contact.id}>
              <TableCell>
                <Avatar>
                  <AvatarImage src="/avatar-placeholder.png" alt={contact.name} />
                  <AvatarFallback className="bg-primary text-white">
                    {contact.name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>
                {formatTotal(contact.Ticket) === '$0.00' ? (
                  <Badge variant="destructive">Inactive</Badge>
                ) : (
                  <Badge className="bg-emerald-700">Active</Badge>
                )}
              </TableCell>
              <TableCell>{format(contact.createdAt, 'MM/dd/yyyy')}</TableCell>
              <TableCell className="text-right">{formatTotal(contact.Ticket)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </BlurPage>
  )
}

export default ContactPage
