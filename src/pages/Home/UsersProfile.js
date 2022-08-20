import React, { useEffect, useState } from "react";
import FilterModal from "./FilterModal";
import ProfileCard from "./ProfileCard";
import SearchArea from "./SearchArea";

const UsersProfile = () => {
  const [usersProfile, setUsersProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [textQuery, setTextQuery] = useState("");
  useEffect(() => {
    const url = `http://localhost:5000/usersprofile`;
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUsersProfile(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, []);

  const searchingUsers = usersProfile.filter((user) => {
    if (textQuery === "") {
      return user;
    } else if (user.userName.toLowerCase().includes(textQuery.toLowerCase())) {
      return user;
    }
  });

  return (
    <main className="py-8">
      <SearchArea
        usersProfile={usersProfile}
        textQuery={textQuery}
        setTextQuery={setTextQuery}
      />
      {isLoading ? (
        <>
          <p className="text-neutral text-3xl text-center">Loading...</p>
        </>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
          {searchingUsers.slice(0, 6).map((user) => (
            <ProfileCard key={user._id} user={user} />
          ))}
        </div>
      )}
      <FilterModal />
    </main>
  );
};

export default UsersProfile;
