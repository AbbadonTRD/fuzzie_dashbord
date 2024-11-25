"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

interface LogoutButtonProps {
  children: React.ReactNode;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ children }) => {
  const router = useRouter();
  const logout = async () => {
    router.refresh();
  };
  return (
    <Button variant="ghost" size="icon" className="p-0" onClick={logout}>
      {children}
    </Button>
  );
};

export default LogoutButton;
