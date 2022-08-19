import React from "react";
import ProfileCard from "./ProfileCard";

const UsersProfile = () => {
  const usersProfile = [1, 2, 3, 4, 5, 6];
  return (
    <main className="my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
        {usersProfile.map((user, index) => (
          <ProfileCard key={index} />
        ))}
      </div>
    </main>
  );
};

export default UsersProfile;