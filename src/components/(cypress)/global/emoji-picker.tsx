"use client";
import dynamic from "next/dynamic";
// import { useRouter } from "next/navigation";
import React from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/(cypress)/ui/popover";

interface EmojiPickerProps {
  children: React.ReactNode;
  getValue?: (emoji: string) => void;
}

const EmojiPicker: React.FC<EmojiPickerProps> = ({ children, getValue }) => {
  // const route = useRouter();
  const Picker = dynamic(() => import("emoji-picker-react"));
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-expect-error
  const onClick = (selectedEmoji) => {
    if (getValue) getValue(selectedEmoji.emoji);
  };
  return (
    <div className="flex items-center">
      <Popover>
        <PopoverTrigger className="cursor-pointer">{children}</PopoverTrigger>
        <PopoverContent
          className="p-0
          border-none
        "
        >
          <Picker onEmojiClick={onClick} />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default EmojiPicker;
