import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href="/"
      id="logo"
      className="font-extrabold text-3xl hover:contrast-125"
    >
      SHOP.CO
    </Link>
  );
};

export default Logo;
