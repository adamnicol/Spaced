import Image from "next/image";
import Link from "next/link";
import { Container, ThemeToggle } from "@/components/ui";
import { AccountLinks } from "./AccountLinks";

import styles from "./Header.module.scss";

const navLinks = [
  { name: "Home", href: "#top" },
  { name: "About", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "FAQ", href: "#faq" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <Image src="/logo.png" width={120} height={55} unoptimized alt="logo" />

          <nav className={styles.navigation}>
            <ul>
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
            <AccountLinks />
          </span>
        </div>
      </Container>
    </header>
  );
}
