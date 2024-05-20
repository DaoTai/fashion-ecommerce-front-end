import { Search } from "lucide-react";

const SearchBox = () => {
  return (
    <div
      id="search-box"
      className="bg-[#F0F0F0] flex-1 rounded-3xl  flex p-3 gap-3"
    >
      <Search className="bg-[#F0F0F0] size-6" />
      <input
        type="text"
        placeholder="Search for products..."
        className="border-none bg-transparent outline-none w-full"
      />
    </div>
  );
};

export default SearchBox;
