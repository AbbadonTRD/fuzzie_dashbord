// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/plura/ui/tabs'
// import { db } from '@/lib/db'
// // import {
// //   getLanesWithTicketAndTags,
// //   getPipelineDetails,
// //   updateLanesOrder,
// //   updateTicketsOrder,
// // } from '@/lib/queries'
// import { LaneDetail } from '@/lib/types'
// import { redirect } from 'next/navigation'
// import React from 'react'
// import PipelineInfoBar from '../_components/pipeline-infobar'
// import PipelineSettings from '../_components/pipeline-settings'
// import PipelineView from '../_components/pipeline-view'

// type Props = {
//   params: { subaccountId: string; pipelineId: string }
// }

// const PipelinePage = async ({ params }: Props) => {
//   const pipelineDetails = await getPipelineDetails(params.pipelineId)
//   if (!pipelineDetails)
//     return redirect(`/subaccount/${params.subaccountId}/pipelines`)

//   const pipelines = await db.pipeline.findMany({
//     where: { subAccountId: params.subaccountId },
//   })

//   const lanes = (await getLanesWithTicketAndTags(
//     params.pipelineId
//   )) as LaneDetail[]

//   return (
//     <Tabs
//       defaultValue="view"
//       className="w-full"
//     >
//       <TabsList className="bg-transparent border-b-2 h-16 w-full justify-between mb-4">
//         <PipelineInfoBar
//           pipelineId={params.pipelineId}
//           subAccountId={params.subaccountId}
//           pipelines={pipelines}
//         />
//         <div>
//           <TabsTrigger value="view">Pipeline View</TabsTrigger>
//           <TabsTrigger value="settings">Settings</TabsTrigger>
//         </div>
//       </TabsList>
//       <TabsContent value="view">
//         <PipelineView
//           lanes={lanes}
//           pipelineDetails={pipelineDetails}
//           pipelineId={params.pipelineId}
//           subaccountId={params.subaccountId}
//           updateLanesOrder={updateLanesOrder}
//           updateTicketsOrder={updateTicketsOrder}
//         />
//       </TabsContent>
//       <TabsContent value="settings">
//         <PipelineSettings
//           pipelineId={params.pipelineId}
//           pipelines={pipelines}
//           subaccountId={params.subaccountId}
//         />
//       </TabsContent>
//     </Tabs>
//   )
// }

// export default PipelinePage

'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/plura/ui/tabs'
import React from 'react'
import PipelineInfoBar from '../_components/pipeline-infobar'
import PipelineSettings from '../_components/pipeline-settings'
import PipelineView from '../_components/pipeline-view'
import { LaneDetail } from '@/lib/types'

type Props = {
  params: { subaccountId: string; pipelineId: string }
}

// Dummy data for demonstration
const dummyPipelineDetails = {
  id: 'dummyPipelineId',
  name: 'Dummy Pipeline',
  description: 'This is a dummy pipeline for demonstration purposes.',
}

const dummyPipelines = [
  { id: 'pipeline1', name: 'Pipeline 1' },
  { id: 'pipeline2', name: 'Pipeline 2' },
]

const dummyLanes: LaneDetail[] = [
  {
    id: 'lane1',
    title: 'Lane 1',
    tickets: [
      { id: 'ticket1', title: 'Ticket 1', tags: ['tag1', 'tag2'] },
      { id: 'ticket2', title: 'Ticket 2', tags: ['tag3'] },
    ],
  },
  {
    id: 'lane2',
    title: 'Lane 2',
    tickets: [],
  },
]

const PipelinePage = async ({ params }: Props) => {
  // Replace actual data fetching with dummy data
  const pipelineDetails = dummyPipelineDetails
  const pipelines = dummyPipelines
  const lanes = dummyLanes

  // Local functions to handle lane and ticket order updates
  const updateLanesOrder = (newOrder: LaneDetail[]) => {
    console.log('Updated Lane Order:', newOrder)
  }

  const updateTicketsOrder = (laneId: string, newOrder: string[]) => {
    console.log(`Updated Tickets Order for Lane ${laneId}:`, newOrder)
  }

  return (
    <Tabs defaultValue="view" className="w-full">
      <TabsList className="bg-transparent border-b-2 h-16 w-full justify-between mb-4">
        <PipelineInfoBar
          pipelineId={params.pipelineId}
          subAccountId={params.subaccountId}
          pipelines={pipelines}
        />
        <div>
          <TabsTrigger value="view">Pipeline View</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </div>
      </TabsList>
      <TabsContent value="view">
        <PipelineView
          lanes={lanes}
          pipelineDetails={pipelineDetails}
          pipelineId={params.pipelineId}
          subaccountId={params.subaccountId}
          updateLanesOrder={updateLanesOrder}   // Now defined locally
          updateTicketsOrder={updateTicketsOrder} // Now defined locally
        />
      </TabsContent>
      <TabsContent value="settings">
        <PipelineSettings
          pipelineId={params.pipelineId}
          pipelines={pipelines}
          subaccountId={params.subaccountId}
        />
      </TabsContent>
    </Tabs>
  )
}

export default PipelinePage
