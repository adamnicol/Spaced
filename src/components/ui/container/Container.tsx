import { ReactNode } from "react";

import styles from "./Container.module.scss";

export function Container(props: { children: ReactNode }) {
  return <div className={styles.container}>{props.children}</div>;
}
