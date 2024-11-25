/* eslint-disable @typescript-eslint/no-explicit-any */
export const dynamic = "force-dynamic";

import React from "react";
import QuillEditor from "@/components/(cypress)/quill-editor/quill-editor";

const Folder = async ({ params }: { params: { folderId: string } }) => {
  // Dummy data to simulate folder details
  const dummyData = {
    id: params.folderId,
    name: "Sample Folder",
    description: "This is a sample folder with dummy data",
    created_at: "2024-10-10",
  };

  return (
    <div className="relative ">
      <QuillEditor
        dirType="folder"
        fileId={params.folderId}
        dirDetails={dummyData as any}
      />
    </div>
  );
};

export default Folder;
