import AccountBox from "./AccountBox";
import Logo from "./Logo";
import Menu from "./Menu";
import MobileNavBar from "./MobileNavBar";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <div className="fixed left-0 right-0 top-0 z-50  bg-white py-6">
      <div className="container flex h-12 w-full items-center gap-4 md:gap-10">
        <MobileNavBar />
        <Logo />
        <Menu />
        <div className="ml-auto flex flex-1 items-center gap-3 md:gap-6">
          <SearchBox />
          <AccountBox />
        </div>
      </div>
    </div>
  );
};

export default Header;
