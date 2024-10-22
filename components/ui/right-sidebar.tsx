import { cn } from "@/lib/utils";
import React from "react";
import Alert from "./alert";
import Avatar from "./avatar";
import UserProfile from "./user-profile";

type Props = JSX.IntrinsicElements["div"] & {};

const RightSidebar = ({ className, ...rest }: Props) => {
  return (
    <div
      className={cn(
        "bg-background border-l border-foreground/10 text-sm",
        className
      )}
      {...rest}
    >
      <div className="py-5 px-4 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="py-2 px-1 font-semibold">Notifications</div>
          <Alert
            type="bug"
            title="You have a bug that needs to be fixed"
            subTitle="Just now"
          />
          <Alert
            type="new-user"
            title="New user registered"
            subTitle="59 minutes ago"
          />
          <Alert
            type="bug"
            title="You have a bug that needs to be fixed"
            subTitle="12 hours ago"
          />
          <Alert
            type="subscription"
            title="Andi Lane subscribed to you"
            subTitle="Today, 11:59 AM"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="py-2 px-1 font-semibold">Activities</div>
          <div className="relative">
            <Alert
              icon={<Avatar src={"/images/user-1.png"} alt="user-profile" />}
              title="You have a bug that needs to be fixed"
              subTitle="Just now"
            />
            <div className="w-px h-3.5 bg-foreground/10 rounded-lg left-4 absolute -mt-2" />
            <Alert
              icon={<Avatar src={"/images/user-2.png"} alt="user-profile" />}
              title="Released a new version"
              subTitle="59 minutes ago"
              className="mt-2"
            />
            <div className="w-px h-3.5 bg-foreground/10 rounded-lg left-4 absolute -mt-2" />
            <Alert
              icon={<Avatar src={"/images/user-3.png"} alt="user-profile" />}
              title="Submitted a bug"
              subTitle="12 hours ago"
              className="mt-2"
            />
            <div className="w-px h-3.5 bg-foreground/10 rounded-lg left-4 absolute -mt-2" />
            <Alert
              icon={<Avatar src={"/images/user-4.png"} alt="user-profile" />}
              title="Modified A data in Page X"
              subTitle="Today, 11:59 AM"
              className="mt-2"
            />
            <div className="w-px h-3.5 bg-foreground/10 rounded-lg left-4 absolute -mt-2" />
            <Alert
              icon={<Avatar src={"/images/user-5.png"} alt="user-profile" />}
              title="Deleted a page in Project X"
              subTitle="Feb 2, 2023"
              className="mt-2"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="py-2 px-1 font-semibold">Contacts</div>
          <UserProfile profilePic={"/images/user-1.png"} name="Natali Craig" />
          <UserProfile profilePic={"/images/user-2.png"} name="Drew Cano" />
          <UserProfile profilePic={"/images/user-3.png"} name="Orlando Diggs" />
          <UserProfile profilePic={"/images/user-4.png"} name="Andi Lane" />
          <UserProfile profilePic={"/images/user-5.png"} name="Kate Morrison" />
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
