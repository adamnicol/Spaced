"use client";

import { Button } from "@mantine/core";
import { Container } from "@/components/ui";
import { useRouter } from "next/navigation";

import styles from "./Welcome.module.scss";

export function Welcome() {
  const router = useRouter();

  return (
    <section id="welcome" className={styles.section}>
      <Container>
        <h1 className={styles.title}>Create flashcards and learn using spaced repitition</h1>
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
      </Container>
    </section>
  );
}
