import { clsx } from "@bayareametro/mtc-ui";
import styles from "./index.module.css";
import { HTMLAttributes } from "react";

export type AnimatedArrowProps = HTMLAttributes<HTMLDivElement>;

export const AnimatedArrow = ({ className, ...props }: AnimatedArrowProps) => (
  <div className={clsx(styles.container, className)} {...props}>
    <div className={styles.line} />
    <svg
      className={styles.arrow}
      width="28"
      height="16"
      viewBox="0 0 28 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5848 15.3918L0.608187 3.4152C-0.202729 2.66667 -0.202729 1.35673 0.608187 0.608187C1.35673 -0.202729 2.66667 -0.202729 3.4152 0.608187L14.0195 11.1501L24.5614 0.608187C25.3099 -0.202729 26.6199 -0.202729 27.3684 0.608187C28.1793 1.35673 28.1793 2.66667 27.3684 3.4152L15.3918 15.3918C14.6433 16.2027 13.3333 16.2027 12.5848 15.3918Z"
        fill="#009EDD"
      />
    </svg>
  </div>
);
