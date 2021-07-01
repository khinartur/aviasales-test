import React from "react";
import styles from "@/components/Button/Button.scss";

interface ButtonProps {}

export const Button: React.FC<ButtonProps> = ({
  children,
}) => {
  return (
    <button
      className={styles.button}
    >
      {children}
    </button>
  );
};
