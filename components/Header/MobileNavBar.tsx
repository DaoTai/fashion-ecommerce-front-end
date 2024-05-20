"use client";
import { navigations } from "@/utils/constants/init";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const MobileNavBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <div className="block p-1 md:hidden">
      <button onClick={handleToggle}>
        <MenuIcon />
      </button>

      {toggle && (
        <div
          className="fixed inset-0 bg-black/15 backdrop-blur-sm"
          onClick={handleToggle}
        >
          <div
            className="absolute flex h-full min-w-52 flex-col  divide-y-2 rounded-sm bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            {navigations.map((nav, i) => (
              <Link
                key={i}
                href={nav.href}
                className="block w-full p-2 py-4 font-semibold transition-all duration-200 ease-in-out hover:bg-slate-50"
                onClick={handleToggle}
              >
                {nav.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavBar;
