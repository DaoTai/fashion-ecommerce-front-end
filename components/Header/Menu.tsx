import { navigations } from "@/utils/constants/init";
import Link from "next/link";

const Menu = () => {
  return (
    <menu id="menu" className=" hidden items-center gap-6 md:flex">
      {navigations.map((nav, i) => (
        <Link key={i} href={nav.href}>
          {nav.name}
        </Link>
      ))}
    </menu>
  );
};

export default Menu;
