// File: src/app/agency/[agencyId]/billing/page.tsx

import React from 'react'
import { Separator } from '@/components/plura/ui/separator'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/plura/ui/table'
import clsx from 'clsx'
import PricingCard from '../../agency/[agencyId]/billing/_components/pricing-card'
import SubscriptionHelper from '@/app/plura/agency/[agencyId]/billing/_components/subscription-helper'

type Props = {
  params: { agencyId: string }
}

// Dummy Data Definitions
const dummyAddOns = [
  {
    id: 'addon1',
    default_price: { unit_amount: 500 },
    title: '24/7 Priority Support',
    description: 'Dedicated support line & Teams channel for support',
  },
  {
    id: 'addon2',
    default_price: { unit_amount: 1000 },
    title: 'Advanced Analytics',
    description: 'Access to advanced analytics and reporting tools',
  },
]

const dummyAgencySubscription = {
  customerId: 'dummy_customer_id_123',
  Subscription: { active: true, priceId: 'price_123' },
}

const dummyPrices = {
  data: [
    { id: 'price_123', unit_amount: 1000, product: 'product_123' },
    { id: 'price_456', unit_amount: 2000, product: 'product_456' },
  ],
}

const dummyPricingCards = [
  {
    priceId: 'price_123',
    price: '$10',
    description: 'Basic Plan',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    title: 'Starter',
  },
  {
    priceId: 'price_456',
    price: '$20',
    description: 'Premium Plan',
    features: ['Feature A', 'Feature B', 'Feature C'],
    title: 'Premium',
  },
]

const dummyAllCharges = [
  {
    description: 'Subscription Payment',
    id: 'charge_1',
    date: '12:00 PM 10/10/2024',
    status: 'Paid',
    amount: '$10',
  },
  {
    description: 'Additional Support',
    id: 'charge_2',
    date: '01:00 PM 09/10/2024',
    status: 'Paid',
    amount: '$5',
  },
  {
    description: 'Advanced Analytics',
    id: 'charge_3',
    date: '02:30 PM 08/10/2024',
    status: 'Paid',
    amount: '$10',
  },
]

const Page: React.FC<Props> = ({ params }) => {
  // Assign dummy data to variables
  const addOns = dummyAddOns
  const agencySubscription = dummyAgencySubscription
  const prices = dummyPrices
  const pricingCards = dummyPricingCards
  const currentPlanDetails = pricingCards.find(
    (c) => c.priceId === agencySubscription.Subscription.priceId
  )
  const allCharges = dummyAllCharges

  return (
    <>
      <SubscriptionHelper
        prices={prices.data}
        customerId={agencySubscription.customerId}
        planExists={agencySubscription.Subscription.active}
      />
      <h1 className="text-4xl p-4">Billing</h1>
      <Separator className="mb-6" />
      <h2 className="text-2xl p-4">Current Plan</h2>
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <PricingCard
          planExists={agencySubscription.Subscription.active}
          prices={prices.data}
          customerId={agencySubscription.customerId}
          amt={
            agencySubscription.Subscription.active
              ? currentPlanDetails?.price || '$0'
              : '$0'
          }
          buttonCta={
            agencySubscription.Subscription.active ? 'Change Plan' : 'Get Started'
          }
          highlightDescription="Want to modify your plan? You can do this here. If you have
          further questions, contact support@plura-app.com"
          highlightTitle="Plan Options"
          description={
            agencySubscription.Subscription.active
              ? currentPlanDetails?.description || 'Let’s get started'
              : 'Let’s get started! Pick a plan that works best for you.'
          }
          duration="/ month"
          features={
            agencySubscription.Subscription.active
              ? currentPlanDetails?.features || []
              : pricingCards.find((pricing) => pricing.title === 'Starter')?.features ||
                []
          }
          title={
            agencySubscription.Subscription.active
              ? currentPlanDetails?.title || 'Starter'
              : 'Starter'
          }
        />
        {addOns.map((addOn) => (
          <PricingCard
            planExists={agencySubscription.Subscription.active}
            prices={prices.data}
            customerId={agencySubscription.customerId}
            key={addOn.id}
            amt={
              addOn.default_price.unit_amount
                ? `$${addOn.default_price.unit_amount / 100}`
                : '$0'
            }
            buttonCta="Subscribe"
            description={addOn.description}
            duration="/ month"
            features={[]}
            title={addOn.title}
            highlightTitle="Get support now!"
            highlightDescription="Get priority support and skip the long wait with the click of a button."
          />
        ))}
      </div>
      <h2 className="text-2xl p-4">Payment History</h2>
      <Table className="bg-card border border-border rounded-md">
        <TableHeader className="rounded-md">
          <TableRow>
            <TableHead className="w-[200px]">Description</TableHead>
            <TableHead className="w-[200px]">Invoice ID</TableHead>
            <TableHead className="w-[300px]">Date</TableHead>
            <TableHead className="w-[200px]">Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="font-medium truncate">
          {allCharges.map((charge) => (
            <TableRow key={charge.id}>
              <TableCell>{charge.description}</TableCell>
              <TableCell className="text-muted-foreground">{charge.id}</TableCell>
              <TableCell>{charge.date}</TableCell>
              <TableCell>
                <p
                  className={clsx('', {
                    'text-emerald-500': charge.status.toLowerCase() === 'paid',
                    'text-orange-600': charge.status.toLowerCase() === 'pending',
                    'text-red-600': charge.status.toLowerCase() === 'failed',
                  })}
                >
                  {charge.status.toUpperCase()}
                </p>
              </TableCell>
              <TableCell className="text-right">{charge.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

export default Page
