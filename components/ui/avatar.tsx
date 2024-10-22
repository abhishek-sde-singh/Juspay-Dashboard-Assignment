import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import React from "react";

type Props = ImageProps & {
  size?: number;
};

const Avatar = ({ className, size = 24, ...rest }: Props) => {
  return (
    <Image className={cn("rounded-full object-contain", className)} width={size} height={size} {...rest} />
  );
};

export default Avatar;
