// components/UserButton.tsx
import React from "react";

interface UserButtonProps {
  name?: string;
  avatarUrl?: string;
}

const UserButton: React.FC<UserButtonProps> = ({
  name = "John Doe",
  avatarUrl = "https://randomuser.me/api/portraits/men/32.jpg", // Static image URL
}) => {
  return (
    <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
      {/* Avatar */}
      <img
        src={avatarUrl}
        alt="User Avatar"
        className="w-10 h-10 rounded-full object-cover"
      />

      {/* User Information */}
      {/* <div>
        <p className="text-sm font-medium">{name}</p>
      </div> */}
    </div>
  );
};

export default UserButton;
