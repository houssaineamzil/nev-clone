"use client";

import { Grid } from "_components/Grid";
import { Header } from "_components/Header";
import { FilterType } from "_types/types";
import cn from "classnames";
import { motion, useAnimation } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const Page = () => {
  const controls = useAnimation();
  const { theme, setTheme } = useTheme();
  const [filter, setFilter] = useState<FilterType>("all");

  useEffect(() => {
    controls.set({
      y: 15,
      opacity: 0,
    });

    controls.start({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    });
  }, []);

  return (
    <motion.div className={styles.container}>
      <Header setFilter={setFilter} />
      <motion.div
        className={cn(styles.GridContainer, styles.list)}
        animate={controls}
      >
        <Grid
          themeToggler={() => {
            theme == "light" ? setTheme("dark") : setTheme("light");
          }}
          filter={filter}
        />
      </motion.div>
    </motion.div>
  );
};

export default Page;
