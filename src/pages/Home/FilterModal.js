const FilterModal = () => {
  const handleFormSubmit = (e) => e.preventDefault();
  return (
    <div>
      <input type="checkbox" id="filterModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-primary">
          <label
            htmlFor="filterModal"
            className="btn bg-primary text-neutral btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-neutral font-semibold text-xl">Filter Options</h3>
          <hr className="my-3 " />
          <form onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-1 justify-items-center">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-neutral text-lg">
                    Influencer's Industry
                  </span>
                </label>
                <select
                  defaultValue={"option"}
                  className="select select-bordered bg-secondary text-accent"
                >
                  <option>Select Option</option>
                </select>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-neutral text-lg">
                    Influencer's Country
                  </span>
                </label>
                <select
                  defaultValue={"option"}
                  className="select select-bordered bg-secondary text-accent"
                >
                  <option>Select Option</option>
                </select>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-neutral text-lg">
                    Audience's Country
                  </span>
                </label>
                <select
                  defaultValue={"option"}
                  className="select select-bordered bg-secondary text-accent"
                >
                  <option>Select Option</option>
                </select>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-neutral text-lg">
                    Influencer's Social Media Platform
                  </span>
                </label>
                <select
                  defaultValue={"option"}
                  className="select select-bordered bg-secondary text-accent"
                >
                  <option>Select Option</option>
                </select>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-neutral text-lg">
                    Influencer's Social Media Platform
                  </span>
                </label>
                <input
                  type="range"
                  className="range bg-primary mb-2"
                  step="25"
                />
                <div className="w-full flex justify-between text-xs px-2 text-accent">
                  <span>1k</span>
                  <span>25k</span>
                  <span>50k</span>
                  <span>100k</span>
                  <span>250k</span>
                  <span>500k</span>
                  <span>1000k</span>
                </div>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-neutral text-lg">
                    Influencer's Gender
                  </span>
                </label>
                <div className="flex justify-around  items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="radio-2"
                      className="radio radio-accent"
                      checked
                    />
                    <label htmlFor="male" className="text-accent">
                      Male
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 ">
                    <input
                      type="radio"
                      name="radio-2"
                      className="radio radio-accent"
                    />
                    <label htmlFor="female" className="text-accent">
                      Female
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center mt-3 space-x-3">
              <button
                type="reset"
                className="btn btn-md bg-secondary text-accent border-transparent hover:bg-secondary hover:border-transparent"
              >
                Reset
              </button>
              <button
                type="submit"
                className="btn btn-md bg-purple-700 text-neutral border-transparent hover:bg-purple-700 hover:border-transparent"
              >
                Apply
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
