"use client";
import { AuthUser } from "@supabase/supabase-js";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { v4 } from "uuid";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import EmojiPicker from "../global/emoji-picker";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Loader from "../global/Loader";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { useAppState } from "@/lib/providers/state-provider";
// import { z } from "zod";

// Mock the user and subscription details
const mockUser: AuthUser = {
  id: "dummy-user-id",
  email: "dummyuser@example.com",
  app_metadata: {},
  user_metadata: {},
  aud: "",
  created_at: "",
};

const mockSubscription = {
  status: "active",
};

interface DashboardSetupProps {
  user?: AuthUser;
  subscription?: "";
}

const DashboardSetup: React.FC<DashboardSetupProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  subscription = mockSubscription,
  user = mockUser,
}) => {
  const { toast } = useToast();
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-expect-error
  const { dispatch } = useAppState();
  const [selectedEmoji, setSelectedEmoji] = useState("💼");
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting: isLoading, errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      logo: "",
      workspaceName: "",
    },
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-expect-error
  const onSubmit: SubmitHandler = async (value) => {
    // Mock file upload and workspace creation
    const workspaceUUID = v4();
    const filePath = "dummy-logo-path.png"; // Mocked file path

    const newWorkspace = {
      id: workspaceUUID,
      title: value.workspaceName,
      workspaceOwner: user.id,
      logo: filePath,
      iconId: selectedEmoji,
    };

    // Mock dispatch action to add workspace
    dispatch({
      type: "ADD_WORKSPACE",
      payload: { ...newWorkspace, folders: [] },
    });

    console.log("Workspace created with dummy data:", newWorkspace);

    toast({
      title: "Workspace Created",
      description: `${newWorkspace.title} has been created successfully (dummy).`,
    });

    // Redirect to the new workspace (mock)
    router.replace(`/cypress/dashboard/${newWorkspace.id}`);
    reset();
  };

  return (
    <Card className="w-[800px] h-screen sm:h-auto">
      <CardHeader>
        <CardTitle>Create A Workspace</CardTitle>
        <CardDescription>
          {
            "Let's create a private workspace to get you started. You can add collaborators later from the workspace settings tab."
          }
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="text-5xl">
                <EmojiPicker getValue={(emoji) => setSelectedEmoji(emoji)}>
                  {selectedEmoji}
                </EmojiPicker>
              </div>
              <div className="w-full">
                <Label
                  htmlFor="workspaceName"
                  className="text-sm text-muted-foreground"
                >
                  Name
                </Label>
                <Input
                  id="workspaceName"
                  type="text"
                  placeholder="Workspace Name"
                  disabled={isLoading}
                  {...register("workspaceName", {
                    required: "Workspace name is required",
                  })}
                />
                <small className="text-red-600">
                  {errors?.workspaceName?.message?.toString()}
                </small>
              </div>
            </div>
            <div>
              <Label htmlFor="logo" className="text-sm text-muted-foreground">
                Workspace Logo
              </Label>
              <Input
                id="logo"
                type="file"
                accept="image/*"
                placeholder="Workspace Logo"
                {...register("logo")}
              />
              <small className="text-muted-foreground">
                (Dummy file upload. No actual file will be uploaded.)
              </small>
            </div>
            <div className="self-end">
              <Button disabled={isLoading} type="submit">
                {!isLoading ? "Create Workspace" : <Loader />}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default DashboardSetup;
