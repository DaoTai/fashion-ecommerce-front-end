import { Search } from "lucide-react";

const SearchBox = () => {
  return (
    <>
      <div
        id="search-box"
        className="hidden flex-1 gap-3 rounded-3xl bg-[#F0F0F0] p-3 md:flex "
      >
        <Search className="size-6 bg-[#F0F0F0]" />
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full border-none bg-transparent outline-none"
        />
      </div>

      {/* Mobile */}
      <Search className="ml-auto block size-6 cursor-pointer md:hidden" />
    </>
  );
};

export default SearchBox;
