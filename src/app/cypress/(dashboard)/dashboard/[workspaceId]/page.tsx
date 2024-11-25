export const dynamic = "force-dynamic";

import QuillEditor from "@/components/(cypress)/quill-editor/quill-editor";
import { redirect } from "next/navigation";
import React from "react";

// Mock workspace details
const mockWorkspaceData = {
  id: "dummy-workspace-id",
  title: "Cypress Workspace",
  description: "This is a dummy workspace used for testing purposes.",
  createdAt: new Date().toISOString(),
  // Add other necessary fields that your QuillEditor expects
};

const Workspace = async ({ params }: { params: { workspaceId: string } }) => {
  // Use mock data instead of fetching from API
  const data = [mockWorkspaceData]; // Mocked data array
  const error = null; // No error

  // Check if there's an error or no data, redirect if so
  if (error || !data.length) redirect("/cypress/dashboard");

  return (
    <div className="relative">
      <QuillEditor
        dirType="workspace"
        fileId={params.workspaceId}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        dirDetails={data[0] || {}} // Use the first item of the mock data
      />
    </div>
  );
};

export default Workspace;
