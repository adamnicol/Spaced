"use client";

import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";

import styles from "./Welcome.module.scss";

export function Welcome() {
  const router = useRouter();

  return (
    <section id="welcome" className={styles.section}>
      <div className="container">
        <div className={styles.title}>Create flashcards and learn using spaced repitition</div>
        <div className={styles.description}>
          Spaced lets you design your own flashcards, build custom decks, and uses advanced spaced
          repitition algorithms to aid your learning.
        </div>
        <Button.Group>
          <Button size="lg" variant="gradient" onClick={() => router.push("/register")}>
            Get started
          </Button>
          <Button size="lg" variant="light" onClick={() => router.push("#about")}>
            Learn more
          </Button>
        </Button.Group>
      </div>
    </section>
  );
}
