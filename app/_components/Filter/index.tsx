import { filters } from "_data/shared";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./styles.module.scss";

export const Filter = ({ setFilter }: { setFilter: any }) => {
  const [left, setLeft] = useState(5);
  const [width, setWidth] = useState(49);

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.highlight}
        animate={{
          left: left,
          width: width,
        }}
        transition={{
          duration: 0.4,
          ease: [0.85, 0, 0.3, 1],
        }}
      />
      {filters.map((filter) => (
        <div
          key={filter}
          className={styles.option}
          onClick={(event) => {
            return ((event, filter: string) => {
              setLeft(event.currentTarget.offsetLeft);
              setWidth(event.currentTarget.offsetWidth);
              setFilter(filter.toLowerCase());
            })(event, filter);
          }}
        >
          {filter}
        </div>
      ))}
    </div>
  );
};
