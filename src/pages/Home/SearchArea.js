import { BiFilterAlt, BiSearch } from "react-icons/bi";
const SearchArea = () => {
  return (
    <div className="my-6 p-4 bg-primary rounded-lg">
      <div className="flex justify-between items-center flex-col lg:flex-row gap-3">
        <p className="text-neutral font-semibold text-xl lg:text-2xl">
          Profile(100)
        </p>
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search Profile"
            class="input input-bordered w-[300px] pl-10 text-xl  lg:w-full bg-transparent border border-3 border-purple-300 text-neutral"
          />
          <BiSearch className="absolute top-4 left-3 text-accent text-xl " />
        </div>
        <div className="text-neutral bg-purple-700 rounded-md px-3 py-2">
          <button className="flex items-center font-semibold space-x-2">
            <BiFilterAlt />
            <p>Advance Filter</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchArea;