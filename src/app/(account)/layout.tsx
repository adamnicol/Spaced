import styles from "./layout.module.scss";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <div className={styles.panelLeft}></div>
      <div className={styles.panelRight}>{children}</div>
    </div>
  );
}
