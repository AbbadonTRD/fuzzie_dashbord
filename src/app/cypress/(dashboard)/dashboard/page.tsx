/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import DashboardSetup from "@/components/(cypress)/dashboard-setup/dashboard-setup";
import { redirect } from "next/navigation";

// Dummy data to simulate API response
const mockUser = {
  id: "12345",
  email: "user@example.com",
  name: "John Doe",
};

const mockWorkspace = {
  id: "workspace123",
  workspaceOwner: "12345",
};

const mockSubscription = {
  id: "sub123",
  status: "active",
  plan: "premium",
};

const DashboardPage = async () => {
  // Mock user and workspace data
  const user = mockUser;

  // Simulate checking for a workspace
  const workspace = mockWorkspace;

  // Simulate checking subscription status
  const subscription = mockSubscription;

  // If no workspace exists, show the DashboardSetup component
  if (!workspace)
    return (
      <div
        className="bg-background
        h-screen
        w-screen
        flex
        justify-center
        items-center"
      >
        <DashboardSetup user={user as any} subscription={subscription as any} />
      </div>
    );

  // If workspace exists, redirect to its dashboard
  redirect(`/cypress/dashboard/${workspace.id}`);
};

export default DashboardPage;
