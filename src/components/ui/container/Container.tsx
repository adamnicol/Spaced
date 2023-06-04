import { HTMLAttributes, ReactNode } from "react";

import styles from "./Container.module.scss";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Container(props: ContainerProps) {
  const { children, className, ...attributes } = props;

  return (
    <div className={`${styles.container} ${className}`} {...attributes}>
      {children}
    </div>
  );
}
