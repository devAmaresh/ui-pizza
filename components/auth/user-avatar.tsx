"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "next-auth";

interface UserAvatarProps {
  user: Pick<User, "name" | "image">;
  className?: string;
}

export function UserAvatar({ user, className }: UserAvatarProps) {
  return (
    <Avatar className={className}>
      {user.image ? (
        <AvatarImage src={user.image} alt={user.name || "User"} />
      ) : null}
      <AvatarFallback>
        {user.name
          ? user.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase()
          : "U"}
      </AvatarFallback>
    </Avatar>
  );
}