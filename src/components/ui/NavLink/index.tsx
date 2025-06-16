"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface INavLinkProps {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
}
export default function NavLink({ children, href, onClick }: INavLinkProps) {
  const pathName = usePathname();
  return (
    <Link
      onClick={onClick}
      href={href}
      className={`hover:cursor-pointer hover:text-primary-500 text-nowrap text-sm font-semibold  transition-colors ${
        pathName === href ? "text-primary-500" : "text-midnightBlue-950"
      }`}>
      {children}
    </Link>
  );
}
