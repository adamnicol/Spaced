import { Accordion, Container } from "@/components/ui";
import { API_URL } from "@/config";
import { FAQ } from "@prisma/client";

import styles from "./FAQ.module.scss";

async function fetchFAQ(): Promise<FAQ[]> {
  const res = await fetch(`${API_URL}/faq`, { cache: "force-cache" });
  return await res.json();
}

export async function FAQ() {
  const data = await fetchFAQ();

  return (
    <section id="faq" className={styles.section}>
      <Container>
        <h2>FAQ</h2>
        <Accordion.default>
          {data.map((faq, index) => (
            <Accordion.Item key={index} value={faq.question}>
              <Accordion.Control>{faq.question}</Accordion.Control>
              <Accordion.Panel>{faq.answer}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion.default>
      </Container>
    </section>
  );
}
