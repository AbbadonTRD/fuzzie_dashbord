"use client";

import DashboardCard from "@/components/(corina)/dashboard/cards";
import { PlanUsage } from "@/components/(corina)/dashboard/plan-usage";
import InfoBar from "@/components/(corina)/infobar";
import { Separator } from "@/components/(corina)/ui/separator";
import CalIcon from "@/icons/cal-icon";
import PersonIcon from "@/icons/person-icon";
import { TransactionsIcon } from "@/icons/transactions-icon";
import { DollarSign } from "lucide-react";
import React from "react";

// type Props = {}

const Page = () => {
  //   const clients = await getUserClients()
  //   const sales = await getUserBalance()
  //   const bookings = await getUserAppointments()
  //   const plan = await getUserPlanInfo()
  //   const transactions = await getUserTransactions()
  //   const products = await getUserTotalProductPrices()

  const transactions = {
    data: [
      {
        id: 1,
        date: "2022-01-01",
        amount: 1000,
        type: "Deposit",
        calculated_statement_descriptor: "Initial deposit",
      },
    ],
  };

  return (
    <>
      <InfoBar />
      <div className="custom-scroll-hide w-full chat-window flex-1 h-0 px-5">
        <div className="flex gap-5 flex-wrap">
          <DashboardCard
            value={0 || 0}
            title="Potential Clients"
            icon={<PersonIcon />}
          />
          <DashboardCard
            value={7}
            sales
            title="Pipline Value"
            icon={<DollarSign />}
          />
          <DashboardCard value={9} title="Appointments" icon={<CalIcon />} />
          <DashboardCard
            value={10}
            sales
            title="Total Sales"
            icon={<DollarSign />}
          />
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 py-10">
          <div>
            <div>
              <h2 className="font-bold text-2xl">Plan Usage</h2>
              <p className="text-sm font-light">
                A detailed overview of your metrics, usage, customers and more
              </p>
            </div>
            <PlanUsage plan={"STANDARD"} credits={8} domains={7} clients={6} />
          </div>
          <div className="flex flex-col">
            <div className="w-full flex justify-between items-start mb-5">
              <div className="flex gap-3 items-center">
                <TransactionsIcon />
                <p className="font-bold">Recent Transactions</p>
              </div>
              <p className="text-sm">See more</p>
            </div>
            <Separator orientation="horizontal" />
            {transactions &&
              transactions.data.map((transaction) => (
                <div
                  className="flex gap-3 w-full justify-between items-center border-b-2 py-5"
                  key={transaction.id}
                >
                  <p className="font-bold">
                    {transaction.calculated_statement_descriptor}
                  </p>
                  <p className="font-bold text-xl">
                    ${transaction.amount / 100}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
