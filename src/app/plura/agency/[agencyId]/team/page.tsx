import React from 'react'
import DataTable from './data-table'
import { Plus } from 'lucide-react'
import { columns } from './columns'
import SendInvitation from '@/components/plura/forms/send-invitation'

type Props = {
  params: { agencyId: string }
}

const TeamPage = ({ params }: Props) => {
  const dummyTeamMembers = [
    {
      id: 1,
      name: 'John Doe',
      Agency: { id: params.agencyId, name: 'Dummy Agency', SubAccount: [] },
      Permissions: { id: 1, SubAccount: [] },
    },
    {
      id: 2,
      name: 'Jane Doe',
      Agency: { id: params.agencyId, name: 'Dummy Agency', SubAccount: [] },
      Permissions: { id: 2, SubAccount: [] },
    },
  ]

  const dummyAgencyDetails = {
    id: params.agencyId,
    name: 'Dummy Agency',
    SubAccount: [],
  }

  return (
    <DataTable
      actionButtonText={
        <>
          <Plus size={15} />
          Add
        </>
      }
      modalChildren={<SendInvitation agencyId={dummyAgencyDetails.id} />}
      filterValue="name"
      columns={columns}
      data={dummyTeamMembers}
    ></DataTable>
  )
}

export default TeamPage
