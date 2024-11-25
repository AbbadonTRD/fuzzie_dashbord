/* eslint-disable @typescript-eslint/no-unused-vars */
import { File, Folder, User, workspace } from "./supabase.types";

// Dummy folder data for testing
const folders = [
  {
    id: "f1",
    name: "Project A",
    workspaceId: "workspace_1",
    createdAt: new Date("2023-10-01T10:00:00Z"),
  },
  {
    id: "f2",
    name: "Project B",
    workspaceId: "workspace_1",
    createdAt: new Date("2023-10-02T11:00:00Z"),
  },
  {
    id: "f3",
    name: "Project C",
    workspaceId: "workspace_2",
    createdAt: new Date("2023-09-15T09:30:00Z"),
  },
  {
    id: "f4",
    name: "Project D",
    workspaceId: "workspace_1",
    createdAt: new Date("2023-10-03T12:00:00Z"),
  },
];

// Dummy data arrays to simulate database
const mockWorkspaces: workspace[] = [];
const mockFolders: Folder[] = [];
const mockFiles: File[] = [];

// Create Workspace
export const createWorkspace = async (workspace: workspace) => {
  mockWorkspaces.push(workspace);
  return { data: workspace, error: null };
};

// Delete Workspace
export const deleteWorkspace = async (workspaceId: string) => {
  const index = mockWorkspaces.findIndex((w) => w.id === workspaceId);
  if (index !== -1) {
    mockWorkspaces.splice(index, 1);
  }
  return { data: null, error: null };
};

// Get Workspace Details
export const getWorkspaceDetails = async (workspaceId: string) => {
  const workspace = mockWorkspaces.find((w) => w.id === workspaceId);
  return { data: workspace ? [workspace] : [], error: null };
};

// Create Folder
export const createFolder = async (folder: Folder) => {
  mockFolders.push(folder);
  return { data: folder, error: null };
};

// Delete Folder
export const deleteFolder = async (folderId: string) => {
  const index = mockFolders.findIndex((f) => f.id === folderId);
  if (index !== -1) {
    mockFolders.splice(index, 1);
  }
  return { data: null, error: null };
};

// Update Folder
export const updateFolder = async (
  folder: Partial<Folder>,
  folderId: string
) => {
  const index = mockFolders.findIndex((f) => f.id === folderId);
  if (index !== -1) {
    mockFolders[index] = { ...mockFolders[index], ...folder };
  }
  return { data: mockFolders[index], error: null };
};

// Create File
export const createFile = async (file: File) => {
  mockFiles.push(file);
  return { data: file, error: null };
};

// Delete File
export const deleteFile = async (fileId: string) => {
  const index = mockFiles.findIndex((f) => f.id === fileId);
  if (index !== -1) {
    mockFiles.splice(index, 1);
  }
  return { data: null, error: null };
};

// Update File
export const updateFile = async (file: Partial<File>, fileId: string) => {
  const index = mockFiles.findIndex((f) => f.id === fileId);
  if (index !== -1) {
    mockFiles[index] = { ...mockFiles[index], ...file };
  }
  return { data: mockFiles[index], error: null };
};

// Get Folder Details
export const getFolderDetails = async (folderId: string) => {
  const folder = mockFolders.find((f) => f.id === folderId);
  return { data: folder ? [folder] : [], error: null };
};

// Get Files by Folder
export const getFiles = async (folderId: string) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-expect-error
  const files = mockFiles.filter((f) => f.folder_id === folderId);
  return { data: files, error: null };
};

// Get User Subscription Status (Dummy Data)
export const getUserSubscriptionStatus = async (userId: string) => {
  const mockSubscription = {
    id: "sub_123456",
    user_id: userId,
    status: "active",
    current_period_start: "2023-10-01T00:00:00Z",
    current_period_end: "2023-11-01T00:00:00Z",
  };
  return { data: mockSubscription, error: null };
};

// Get Active Products with Prices (Dummy Data)
export const getActiveProductsWithPrice = () => {
  const mockProducts = [
    {
      id: 1,
      name: "Basic Plan",
      active: true,
      prices: [
        {
          id: 1,
          currency: "USD",
          amount: 10.0,
          active: true,
        },
      ],
    },
    {
      id: 2,
      name: "Premium Plan",
      active: true,
      prices: [
        {
          id: 2,
          currency: "USD",
          amount: 20.0,
          active: true,
        },
      ],
    },
  ];
  return { data: mockProducts, error: null };
};

// Add Collaborators (Dummy Data)
export const addCollaborators = async (users: User[], workspaceId: string) => {
  const response = users.forEach((user) => {
    console.log(`Added user ${user.id} to workspace ${workspaceId}`);
  });
};

// Remove Collaborators (Dummy Data)
export const removeCollaborators = async (
  users: User[],
  workspaceId: string
) => {
  const response = users.forEach((user) => {
    console.log(`Removed user ${user.id} from workspace ${workspaceId}`);
  });
};

// Find User (Dummy Data)
export const findUser = async (userId: string) => {
  const mockUser = {
    id: userId,
    full_name: "John Doe",
    email: "johndoe@example.com",
  };
  return mockUser;
};

// Get Private Workspaces (Dummy Data)
export const getPrivateWorkspaces = async (userId: string) => {
  const mockWorkspaces = [
    {
      id: "workspace_1",
      title: "Private Workspace",
      workspace_owner: userId,
      created_at: "2023-01-01T00:00:00Z",
    },
  ];
  return mockWorkspaces;
};

// Get Collaborating Workspaces (Dummy Data)
export const getCollaboratingWorkspaces = async (userId: string) => {
  const mockWorkspaces = [
    {
      id: "workspace_2",
      title: "Collaborated Workspace",
      workspace_owner: "user_123",
      created_at: "2023-01-01T00:00:00Z",
    },
  ];
  return mockWorkspaces;
};

// Get Shared Workspaces (Dummy Data)
export const getSharedWorkspaces = async (userId: string) => {
  const mockWorkspaces = [
    {
      id: "workspace_3",
      title: "Shared Workspace",
      workspace_owner: "user_456",
      created_at: "2023-01-01T00:00:00Z",
    },
  ];
  return mockWorkspaces;
};

export const getFileDetails = async (fileId: string) => {
  const file = mockFiles.find((f) => f.id === fileId);
  return { data: file ? [file] : [], error: file ? null : "File not found" };
};

export const updateWorkspace = async (
  workspace: Partial<workspace>,
  workspaceId: string
) => {
  const index = mockWorkspaces.findIndex((w) => w.id === workspaceId);
  if (index !== -1) {
    mockWorkspaces[index] = { ...mockWorkspaces[index], ...workspace };
    return { data: mockWorkspaces[index], error: null };
  } else {
    return { data: null, error: "Workspace not found" };
  }
};

export const getFolders = async (workspaceId: string) => {
  try {
    // Simulate database query with dummy data
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    const results: Folder[] = folders
      .filter((folder) => folder.workspaceId === workspaceId) // Filter by workspaceId
      .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime()); // Order by createdAt

    return { data: results, error: null };
  } catch (error) {
    console.log(error);
    return { data: null, error: "Error" };
  }
};
