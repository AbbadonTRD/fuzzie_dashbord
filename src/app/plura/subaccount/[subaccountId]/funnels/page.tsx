import React from 'react'
import FunnelsDataTable from './data-table'
import { Plus } from 'lucide-react'
import { columns } from './columns'
import FunnelForm from '@/components/plura/forms/funnel-form'
import BlurPage from '@/components/plura/global/blur-page'

// Dummy data for funnels
const dummyFunnels = [
  { id: '1', name: 'Funnel 1', description: 'Description for Funnel 1' },
  { id: '2', name: 'Funnel 2', description: 'Description for Funnel 2' },
  { id: '3', name: 'Funnel 3', description: 'Description for Funnel 3' },
];

const Funnels = async ({ params }: { params: { subaccountId: string } }) => {
  // Remove fetching of funnels and use dummy data instead
  const funnels = dummyFunnels;

  return (
    <BlurPage>
      <FunnelsDataTable
        actionButtonText={
          <>
            <Plus size={15} />
            Create Funnel
          </>
        }
        modalChildren={
          <FunnelForm subAccountId={params.subaccountId}></FunnelForm>
        }
        filterValue="name"
        columns={columns}
        data={funnels}
      />
    </BlurPage>
  )
}

export default Funnels
