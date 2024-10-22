import { cn } from "@/lib/utils";
import React from "react";
import Avatar from "./avatar";

type Props = JSX.IntrinsicElements["div"] & {
  name: string;
  profilePic: string;
};

const UserProfile = ({ name, profilePic, className, ...rest }: Props) => {
  return (
    <div
      className={cn(
        "rounded-lg p-1 flex items-center gap-2 text-sm text-foreground",
        className
      )}
      {...rest}
    >
      <Avatar src={profilePic} alt={`${name} profile`} />
      <div>{name}</div>
    </div>
  );
};

export default UserProfile;
