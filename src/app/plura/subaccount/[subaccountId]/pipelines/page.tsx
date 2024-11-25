// // import { db } from '@/lib/db'
// import { redirect } from 'next/navigation'
// import React from 'react'

// type Props = {
//   params: { subaccountId: string }
// }

// const Pipelines = async ({ params }: Props) => {
//   const pipelineExists = await db.pipeline.findFirst({
//     where: { subAccountId: params.subaccountId },
//   })

//   if (pipelineExists)
//     return redirect(
//       `/subaccount/${params.subaccountId}/pipelines/${pipelineExists.id}`
//     )

//   try {
//     const response = await db.pipeline.create({
//       data: { name: 'First Pipeline', subAccountId: params.subaccountId },
//     })

//     return redirect(
//       `/subaccount/${params.subaccountId}/pipelines/${response.id}`
//     )
//   } catch (error) {
//     console.log()
//   }
// }

// export default Pipelines




// import { db } from '@/lib/db'
import { redirect } from 'next/navigation'
import React from 'react'

// Dummy data to simulate the database operations
const mockDb = {
  pipelines: [] as { id: string; name: string; subAccountId: string }[],
  findFirst: async (query: { where: { subAccountId: string } }) => {
    return mockDb.pipelines.find(pipeline => pipeline.subAccountId === query.where.subAccountId) || null;
  },
  create: async (data: { name: string; subAccountId: string }) => {
    const newPipeline = { id: `${mockDb.pipelines.length + 1}`, ...data };
    mockDb.pipelines.push(newPipeline);
    return newPipeline;
  },
};

type Props = {
  params: { subaccountId: string }
}

const Pipelines = async ({ params }: Props) => {
  const pipelineExists = await mockDb.findFirst({
    where: { subAccountId: params.subaccountId },
  });

  if (pipelineExists) {
    return redirect(
      `/subaccount/${params.subaccountId}/pipelines/${pipelineExists.id}`
    );
  }

  try {
    const response = await mockDb.create({
      name: 'First Pipeline',
      subAccountId: params.subaccountId,
    });

    return redirect(
      `/subaccount/${params.subaccountId}/pipelines/${response.id}`
    );
  } catch (error) {
    console.error('Error creating pipeline:', error);
  }
}

export default Pipelines;
