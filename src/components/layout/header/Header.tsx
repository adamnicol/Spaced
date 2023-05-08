"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@mantine/core";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useRouter } from "next/navigation";

import styles from "./Header.module.scss";

const navLinks = [
  { name: "Home", href: "#top" },
  { name: "About", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "FAQ", href: "#faq" },
];

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <Image src="/logo.png" width={120} height={55} unoptimized alt="logo" />

          <nav>
            <ul className={styles.navigation}>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className={styles.navLink}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <span className={styles.headerRight}>
            <ThemeToggle />
            <Button.Group>
              <Button variant="outline" onClick={() => router.push("/login")}>
                Login
              </Button>
              <Button variant="gradient" onClick={() => router.push("/register")}>
                Sign Up
              </Button>
            </Button.Group>
          </span>
        </div>
      </div>
    </header>
  );
}
