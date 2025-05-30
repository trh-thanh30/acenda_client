import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex items-center gap-4">
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/contact"}>Contact</Link>
      <Link href={"/users"}>Users</Link>
    </header>
  );
}
