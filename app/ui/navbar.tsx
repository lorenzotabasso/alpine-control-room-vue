"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Webcams", href: "/webcams" },
  {
    name: "Map",
    href: "/map",
  },
  { name: "Reports", href: "/reports" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className={styles.navbar}>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx({
              "outlined": pathname === link.href,
            })}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
