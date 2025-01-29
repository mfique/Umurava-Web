import React from 'react';

const UserAvatar = ({ user }) => {
    const userImage = "https://example.com/user.jpg";

    return (
        <div className="flex items-center">
            <img src={userImage} alt={user.name}
                 className="w-10 h-10 rounded-full mr-2" />
        </div>
    );
};

export default UserAvatar;