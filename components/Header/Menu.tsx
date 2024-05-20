import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <menu id="menu" className="flex flex-1 items-center gap-6">
      <Link href="/" className="flex items-center">
        Shop
        <ChevronDown />
      </Link>
      <Link href="/">On Sale</Link>
      <Link href="/">New Arrivals</Link>
      <Link href="/">Brands</Link>
    </menu>
  );
};

export default Menu;
