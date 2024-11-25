// 'use client'
// import { getPipelines } from '@/lib/queries'
// import { Prisma } from '@prisma/client'
// import React, { useEffect, useMemo, useState } from 'react'
// import { Card, CardContent, CardDescription, CardHeader } from '../ui/card'
// import { Progress } from '../ui/progress'
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from '../ui/select'

// type Props = {
//   subaccountId: string
// }

// const PipelineValue = ({ subaccountId }: Props) => {
//   const [pipelines, setPipelines] = useState<
//     Prisma.PromiseReturnType<typeof getPipelines>
//   >([])

//   const [selectedPipelineId, setselectedPipelineId] = useState('')
//   const [pipelineClosedValue, setPipelineClosedValue] = useState(0)

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await getPipelines(subaccountId)
//       setPipelines(res)
//       setselectedPipelineId(res[0]?.id)
//     }
//     fetchData()
//   }, [subaccountId])

//   const totalPipelineValue = useMemo(() => {
//     if (pipelines.length) {
//       return (
//         pipelines
//           .find((pipeline) => pipeline.id === selectedPipelineId)
//           ?.Lane?.reduce((totalLanes, lane, currentLaneIndex, array) => {
//             const laneTicketsTotal = lane.Tickets.reduce(
//               (totalTickets, ticket) => totalTickets + Number(ticket?.value),
//               0
//             )
//             if (currentLaneIndex === array.length - 1) {
//               setPipelineClosedValue(laneTicketsTotal || 0)
//               return totalLanes
//             }
//             return totalLanes + laneTicketsTotal
//           }, 0) || 0
//       )
//     }
//     return 0
//   }, [selectedPipelineId, pipelines])

//   const pipelineRate = useMemo(
//     () =>
//       (pipelineClosedValue / (totalPipelineValue + pipelineClosedValue)) * 100,
//     [pipelineClosedValue, totalPipelineValue]
//   )

//   return (
//     <Card className="relative w-full xl:w-[350px]">
//       <CardHeader>
//         <CardDescription>Pipeline Value</CardDescription>
//         <small className="text-xs text-muted-foreground">
//           Pipeline Progress
//         </small>
//         <div className="flex items-center justify-between">
//           <div>
//             <p className="text-xs text-muted-foreground">
//               Closed ${pipelineClosedValue}
//             </p>
//           </div>
//           <div>
//             <p className="text-xs text-muted-foreground">
//               Total ${totalPipelineValue + pipelineClosedValue}
//             </p>
//           </div>
//         </div>
//         <Progress
//           color="green"
//           value={pipelineRate}
//           className="h-2"
//         />
//       </CardHeader>
//       <CardContent className="text-sm text-muted-foreground">
//         <p className="mb-2">
//           Total value of all tickets in the given pipeline except the last lane.
//           Your last lane is considered your closing lane in every pipeline.
//         </p>
//         <Select
//           value={selectedPipelineId}
//           onValueChange={setselectedPipelineId}
//         >
//           <SelectTrigger className="w-[180px]">
//             <SelectValue placeholder="Select a pipeline" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectGroup>
//               <SelectLabel>Pipelines</SelectLabel>
//               {pipelines.map((pipeline) => (
//                 <SelectItem
//                   value={pipeline.id}
//                   key={pipeline.id}
//                 >
//                   {pipeline.name}
//                 </SelectItem>
//               ))}
//             </SelectGroup>
//           </SelectContent>
//         </Select>
//       </CardContent>
//     </Card>
//   )
// }

// export default PipelineValue




'use client'
import React, { useEffect, useMemo, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader } from '../ui/card'
import { Progress } from '../ui/progress'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

type Props = {
  subaccountId: string
}

const dummyPipelines = [
  {
    id: 'pipeline1',
    name: 'Sales Pipeline',
    Lane: [
      {
        Tickets: [
          { value: 100 },
          { value: 200 },
          { value: 300 },
        ],
      },
      {
        Tickets: [
          { value: 400 },
          { value: 500 },
        ],
      },
    ],
  },
  {
    id: 'pipeline2',
    name: 'Marketing Pipeline',
    Lane: [
      {
        Tickets: [
          { value: 150 },
          { value: 250 },
        ],
      },
      {
        Tickets: [
          { value: 350 },
        ],
      },
    ],
  },
]

const PipelineValue = ({ subaccountId }: Props) => {
  const [pipelines, setPipelines] = useState(dummyPipelines)
  const [selectedPipelineId, setSelectedPipelineId] = useState('')
  const [pipelineClosedValue, setPipelineClosedValue] = useState(0)

  useEffect(() => {
    setSelectedPipelineId(pipelines[0]?.id)
  }, [pipelines])

  const totalPipelineValue = useMemo(() => {
    if (pipelines.length) {
      return (
        pipelines
          .find((pipeline) => pipeline.id === selectedPipelineId)
          ?.Lane?.reduce((totalLanes, lane, currentLaneIndex, array) => {
            const laneTicketsTotal = lane.Tickets.reduce(
              (totalTickets, ticket) => totalTickets + Number(ticket?.value),
              0
            )
            if (currentLaneIndex === array.length - 1) {
              setPipelineClosedValue(laneTicketsTotal || 0)
              return totalLanes
            }
            return totalLanes + laneTicketsTotal
          }, 0) || 0
      )
    }
    return 0
  }, [selectedPipelineId, pipelines])

  const pipelineRate = useMemo(
    () =>
      (pipelineClosedValue / (totalPipelineValue + pipelineClosedValue)) * 100,
    [pipelineClosedValue, totalPipelineValue]
  )

  return (
    <Card className="relative w-full xl:w-[350px]">
      <CardHeader>
        <CardDescription>Pipeline Value</CardDescription>
        <small className="text-xs text-muted-foreground">
          Pipeline Progress
        </small>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">
              Closed ${pipelineClosedValue}
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">
              Total ${totalPipelineValue + pipelineClosedValue}
            </p>
          </div>
        </div>
        <Progress
          color="green"
          value={pipelineRate}
          className="h-2"
        />
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        <p className="mb-2">
          Total value of all tickets in the given pipeline except the last lane.
          Your last lane is considered your closing lane in every pipeline.
        </p>
        <Select
          value={selectedPipelineId}
          onValueChange={setSelectedPipelineId}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a pipeline" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Pipelines</SelectLabel>
              {pipelines.map((pipeline) => (
                <SelectItem
                  value={pipeline.id}
                  key={pipeline.id}
                >
                  {pipeline.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  )
}

export default PipelineValue
