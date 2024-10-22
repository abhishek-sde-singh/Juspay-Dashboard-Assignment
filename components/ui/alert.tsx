import BugIcon from "@/icons/bug-icon";
import SubscriptionIcon from "@/icons/subscription-icon";
import UserIcon from "@/icons/user-icon";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type TAlertIconType = "bug" | "new-user" | "subscription";

type Props = JSX.IntrinsicElements["div"] & {
  type?: TAlertIconType;
  title: string;
  subTitle?: string;
  icon?: ReactNode;
};

const AlertIcon = ({ type }: { type?: TAlertIconType }) => {
  switch (type) {
    case "bug":
      return (
        <div className="bg-primary-blue p-1 h-fit w-fit rounded-lg text-primary-black">
          <BugIcon />
        </div>
      );
    case "new-user":
      return (
        <div className="bg-primary-purple p-1 h-fit w-fit rounded-lg text-primary-black">
          <UserIcon />
        </div>
      );
    case "subscription":
      return (
        <div className="bg-primary-purple p-1 h-fit w-fit rounded-lg text-primary-black">
          <SubscriptionIcon />
        </div>
      );
  }
};

const Alert = ({ type, title, subTitle, className, icon, ...rest }: Props) => {
  return (
    <div
      className={cn(
        "rounded-lg p-1 flex items-start gap-2 text-sm text-foreground",
        className
      )}
      {...rest}
    >
      {icon || <AlertIcon type={type} />}
      <div>
        <abbr
          title={title}
          className="max-w-[200px] truncate block no-underline"
        >
          {title}
        </abbr>
        <p className="text-foreground/40 text-xs">{subTitle}</p>
      </div>
    </div>
  );
};

export default Alert;
