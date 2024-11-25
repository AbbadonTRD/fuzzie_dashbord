'use client'
import Workflowform from '@/components/fuzzie/forms/workflow-form'
import CustomModal from '@/components/fuzzie/global/custom-modal'
import { Button } from '@/components/fuzzie/ui/button'
import { useBilling } from '@/providers/billing-provider'
import { useModal } from '@/providers/modal-provider'
import { Plus } from 'lucide-react'
import React from 'react'

type Props = {}

const WorkflowButton = (props: Props) => {
  const { setOpen, setClose } = useModal()
  const { credits } = useBilling()

  const handleClick = () => {
    setOpen(
      <CustomModal
      
        title="Create a Workflow Automation"
        subheading="Workflows are a powerfull that help you automate tasks."
      >
        <Workflowform />
      </CustomModal>
    )
  }

  return (
    <Button
    className='bg-black text-white'
      size={'icon'}
      // {...(credits !== '0'
      //   ? {
      //       onClick: handleClick,
            
      //     }
      //   : {
      //       disabled: true,
      //     })}
      onClick={handleClick}
    >
      <Plus />
      
    </Button>
  )
}

export default WorkflowButton
