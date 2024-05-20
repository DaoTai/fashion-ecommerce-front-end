import AccountBox from "./AccountBox";
import Logo from "./Logo";
import Menu from "./Menu";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50  bg-white py-6">
      <div className="h-12 flex items-center w-full gap-10 container">
        <Logo />
        <Menu />
        <SearchBox />
        <AccountBox />
      </div>
    </div>
  );
};

export default Header;
