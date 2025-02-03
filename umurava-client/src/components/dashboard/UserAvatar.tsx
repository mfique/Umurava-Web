"use client";

import Image from "next/image";

interface User {
    id: string;
    name: string;
    avatar: string;
}

interface UserAvatarProps {
    user: User; // Explicitly define the type of `user`
}

export const UserAvatar = ({ user }: UserAvatarProps) => {
    return (
        <div className="flex items-center space-x-3">
            <Image
                src={user.avatar}
                alt={user.name}
                width={40}
                height={40}
                className="rounded-full"
            />
            <span className="font-medium">{user.name}</span>
        </div>
    );
};
