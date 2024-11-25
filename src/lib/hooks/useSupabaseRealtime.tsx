import { useEffect } from "react";
import { useAppState } from "../providers/state-provider";
import { useRouter } from "next/navigation";

const useDummyDataRealtime = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-expect-error
  const { dispatch, state, workspaceId: selectedWorkspace } = useAppState();
  const router = useRouter();

  useEffect(() => {
    // Simulate a real-time event every few seconds
    const intervalId = setInterval(() => {
      // Simulating a random event
      const eventType = ["INSERT", "DELETE", "UPDATE"][
        Math.floor(Math.random() * 3)
      ];
      const dummyFile = {
        id: `file_${Math.random().toString(36).substr(2, 9)}`,
        workspaceId: selectedWorkspace,
        folderId: `folder_${Math.random().toString(36).substr(2, 9)}`,
        createdAt: new Date(),
        title: `File_${Math.random().toString(36).substr(2, 5)}`,
        iconId: `icon_${Math.random().toString(36).substr(2, 5)}`,
        data: "Some file data",
        inTrash: false,
        bannerUrl: "https://dummyimage.com/600x400/000/fff",
      };

      if (eventType === "INSERT") {
        console.log("🟢 Simulating INSERT event");
        if (
          !state.workspaces
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-expect-error
            .find((workspace) => workspace.id === selectedWorkspace)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-expect-error
            ?.folders.find((folder) => folder.id === dummyFile.folderId)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-expect-error
            ?.files.find((file) => file.id === dummyFile.id)
        ) {
          dispatch({
            type: "ADD_FILE",
            payload: {
              file: dummyFile,
              folderId: dummyFile.folderId,
              workspaceId: dummyFile.workspaceId,
            },
          });
        }
      } else if (eventType === "DELETE") {
        console.log("🔴 Simulating DELETE event");
        let workspaceId = "";
        let folderId = "";
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        const fileExists = state.workspaces.some((workspace) =>
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-expect-error
          workspace.folders.some((folder) =>
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-expect-error
            folder.files.some((file) => {
              if (file.id === dummyFile.id) {
                workspaceId = workspace.id;
                folderId = folder.id;
                return true;
              }
            })
          )
        );
        if (fileExists && workspaceId && folderId) {
          router.replace(`/dashboard/${workspaceId}`);
          dispatch({
            type: "DELETE_FILE",
            payload: { fileId: dummyFile.id, folderId, workspaceId },
          });
        }
      } else if (eventType === "UPDATE") {
        console.log("🔵 Simulating UPDATE event");
        const { folderId, workspaceId } = dummyFile;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        state.workspaces.some((workspace) =>
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-expect-error
          workspace.folders.some((folder) =>
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-expect-error
            folder.files.some((file) => {
              if (file.id === dummyFile.id) {
                dispatch({
                  type: "UPDATE_FILE",
                  payload: {
                    workspaceId,
                    folderId,
                    fileId: dummyFile.id,
                    file: {
                      title: `Updated_${dummyFile.title}`,
                      iconId: dummyFile.iconId,
                      inTrash: dummyFile.inTrash,
                    },
                  },
                });
                return true;
              }
            })
          )
        );
      }
    }, 5000); // Trigger event every 5 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch, state, selectedWorkspace, router]);

  return null;
};

export default useDummyDataRealtime;
