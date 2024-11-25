'use server'
import { Option } from '@/components/fuzzie/ui/multiple-selector'

// Static dummy data to replace database
const dummyUser = {
  id: 'dummyUserId',
  googleResourceId: 'dummyGoogleResourceId',
}

const dummyWorkflows = [
  {
    id: 'workflow1',
    name: 'Workflow 1',
    description: 'Test Workflow 1',
    publish: false,
    userId: 'dummyUserId',
    discordTemplate: '',
    slackTemplate: '',
    slackChannels: [] as string[],  // Change to string[]
    slackAccessToken: '',
    notionTemplate: '',
    notionAccessToken: '',
    notionDbId: '',
    nodes: [] as any[], // If nodes and edges have dynamic structures, you may want to use a more specific type
    edges: [] as any[],
  },
];



export const getGoogleListener = async () => {
  // Static mock user data
  const userId = dummyUser.id

  if (userId) {
    const listener = { googleResourceId: dummyUser.googleResourceId }
    return listener
  }
}

export const onFlowPublish = async (workflowId: string, state: boolean) => {
  console.log(state)
  const workflow = dummyWorkflows.find((wf) => wf.id === workflowId)

  if (workflow) {
    workflow.publish = state
    return workflow.publish ? 'Workflow published' : 'Workflow unpublished'
  }

  return 'Workflow not found'
}

export const onCreateNodeTemplate = async (
  content: string,
  type: string,
  workflowId: string,
  channels?: Option[],
  accessToken?: string,
  notionDbId?: string
) => {
  const workflow = dummyWorkflows.find((wf) => wf.id === workflowId)

  if (!workflow) return 'Workflow not found'

  if (type === 'Discord') {
    workflow.discordTemplate = content
    return 'Discord template saved'
  }

  if (type === 'Slack') {
    workflow.slackTemplate = content
    workflow.slackAccessToken = accessToken || ''
    workflow.slackChannels = channels?.map((channel) => channel.value) || []
    return 'Slack template saved'
  }

  if (type === 'Notion') {
    workflow.notionTemplate = content
    workflow.notionAccessToken = accessToken || ''
    workflow.notionDbId = notionDbId || ''
    return 'Notion template saved'
  }
}

export const onGetWorkflows = async () => {
  // Returning all workflows for the static user
  return dummyWorkflows.filter((workflow) => workflow.userId === dummyUser.id)
}

export const onCreateWorkflow = async (name: string, description: string) => {
  const user = dummyUser

  if (user) {
    // Create new workflow with dummy data
    const newWorkflow = {
      id: `workflow${dummyWorkflows.length + 1}`,
      userId: user.id,
      name,
      description,
      publish: false,
      discordTemplate: '',
      slackTemplate: '',
      slackChannels: [],
      notionTemplate: '',
      notionAccessToken: '',
      notionDbId: '',
      nodes: [],
      edges: [],
    }

    dummyWorkflows.push(newWorkflow as any)
    return { message: 'Workflow created' }
  }

  return { message: 'Oops! try again' }
}

export const onGetNodesEdges = async (flowId: string) => {
  const workflow = dummyWorkflows.find((wf) => wf.id === flowId)

  if (workflow) {
    return {
      nodes: workflow.nodes,
      edges: workflow.edges,
    }
  }

  return { message: 'Workflow not found' }
}
