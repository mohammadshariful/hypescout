import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import FilterModal from "./FilterModal";
import ProfileCard from "./ProfileCard";
import SearchArea from "./SearchArea";
const UsersProfile = () => {
  const [usersProfile, setUsersProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [textQuery, setTextQuery] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const size = 10;
  useEffect(() => {
    const url = `https://hypescout-2022.herokuapp.com/usersprofile?name=${textQuery}&page=${page}&size=${size}`;

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
  }, [textQuery, page, size]);

  useEffect(() => {
    fetch("http://localhost:5000/usersprofilecount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 10);
        setPageCount(pages);
      });
  }, []);

  const handlePageClick = (value) => {
    const targetPage = value.selected;
    setPage(targetPage);
  };

  return (
    <main className="py-8">
      <SearchArea
        usersProfile={usersProfile}
        textQuery={textQuery}
        setTextQuery={setTextQuery}
      />
      {isLoading ? (
        <>
          <p className="text-neutral text-xl lg:text-3xl text-center">
            Loading...
          </p>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
            {usersProfile.slice(0, 6).map((user) => (
              <ProfileCard key={user._id} user={user} />
            ))}
          </div>
          <ReactPaginate
            containerClassName="flex flex-wrap text-neutral justify-center space-x-4 font-semibold mt-5 lg:text-xl"
            activeClassName="bg-primary py-1 px-3 rounded-full shadow-lg"
            breakLabel="..."
            nextLabel="Next →"
            onPageChange={handlePageClick}
            pageCount={pageCount || 10}
            renderOnZeroPageCount={10}
            previousLabel="← Previous"
          />
        </>
      )}
      <FilterModal />
    </main>
  );
};

export default UsersProfile;
