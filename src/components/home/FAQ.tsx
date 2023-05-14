import { Accordion, Container } from "@/components/ui";
import { getFAQ } from "@/services/data.service";

import styles from "./FAQ.module.scss";

export async function FAQ() {
  const data = await getFAQ();

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
