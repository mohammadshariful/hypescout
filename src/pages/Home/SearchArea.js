import { BiFilterAlt, BiSearch } from "react-icons/bi";
const SearchArea = ({ usersProfile, textQuery, setTextQuery }) => {
  return (
    <div className="mb-6 p-4 bg-primary rounded-lg">
      <div className="flex justify-between items-center flex-col md:flex-row gap-3">
        <p className="text-neutral font-semibold text-xl lg:text-2xl">
          Profile({usersProfile.length})
        </p>
        <div className="flex-1 relative">
          <input
            defaultValue={textQuery}
            onChange={(e) => setTextQuery(e.target.value)}
            type="text"
            placeholder="Search Profile"
            className="input input-bordered w-[300px] pl-10 text-xl  md:w-full bg-transparent border border-3 border-purple-300 text-neutral"
          />
          <BiSearch className="absolute top-4 left-3 text-accent text-xl " />
        </div>
        <div className="text-neutral bg-purple-700 rounded-md px-3 py-2 ">
          <label
            htmlFor="filterModal"
            className="flex items-center font-semibold space-x-2 modal-button cursor-pointer"
          >
            <BiFilterAlt />
            <p>Advance Filter</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SearchArea;
