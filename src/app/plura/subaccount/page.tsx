'use client' // Add this line to indicate that this is a client component

import React from 'react'

// Dummy data to simulate the availability of subaccounts
const dummySubaccounts = [
  { subAccountId: 'sub_001', name: 'Subaccount One' },
  { subAccountId: 'sub_002', name: 'Subaccount Two' },
]

type Props = {
  searchParams: { state: string; code: string }
}

const SubAccountMainPage: React.FC<Props> = ({ searchParams }) => {
  // Handle redirection logic with dummy data
  const handleRedirect = () => {
    if (searchParams.state) {
      const [statePath, stateSubaccountId] = searchParams.state.split('___')
      if (stateSubaccountId) {
        // Redirect to a dummy subaccount path
        window.location.href = `/subaccount/${stateSubaccountId}/${statePath}?code=${searchParams.code}`
      } else {
        // Render message or allow access with dummy data
        return <UnauthorizedMessage />
      }
    } else {
      // Redirect to the first dummy subaccount
      const firstSubaccount = dummySubaccounts[0]
      if (firstSubaccount) {
        window.location.href = `/subaccount/${firstSubaccount.subAccountId}`
      } else {
        // Render Unauthorized component or a placeholder message
        return <UnauthorizedMessage />
      }
    }
  }

  // Render the redirection logic
  React.useEffect(() => {
    handleRedirect()
  }, [searchParams])

  // Placeholder component for Unauthorized access
  const UnauthorizedMessage = () => (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Unauthorized Access</h1>
        <p className="mt-4 text-lg">You do not have permission to view this page.</p>
      </div>
    </div>
  )

  // Since redirection is handled in useEffect, render nothing or a loading state
  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-xl">Redirecting...</p>
    </div>
  )
}

export default SubAccountMainPage
