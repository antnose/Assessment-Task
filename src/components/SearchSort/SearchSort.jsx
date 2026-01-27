import search from "../../assets/search.png";
import dropdown from "../../assets/dropdown.png";
const SearchSort = () => {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-6">
      <div className="flex-1 min-w-75 relative">
        <img
          src={search}
          alt="search"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search by phone number, issue type..."
          className="w-full bg-[#111827]/50 border border-slate-800 rounded-xl
               py-2.5 pl-12 pr-4 text-slate-300
               focus:outline-none focus:ring-2 focus:ring-blue-500/50
               transition-all"
        />
      </div>

      <div className="flex items-center gap-3">
        {["All Type", "All Issues", "Today"].map((label) => (
          <button
            key={label}
            className="bg-[#111827] border border-slate-800 text-slate-300 px-4 py-2.5 rounded-xl text-sm flex items-center gap-2 hover:bg-slate-800 transition-colors"
          >
            {label}
            <img src={dropdown} alt="" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchSort;
