import { Filter } from "_components/Filter";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export const Header = ({ setFilter }: { setFilter: any }) => {
  const controls = useAnimation();

  return (
    <motion.nav
      className={styles.header}
      animate={{ opacity: 1 }}
      initial={{ opacity: 1 }}
    >
      <div className={styles.logoWrapper}>
        <Image
          src="/images/logo.svg"
          alt=""
          width={72}
          height={24}
          className={styles.logo}
          onLoad={(e: any) => {
            e.target?.src.indexOf("data:image/gif;base64") < 0 &&
              (controls.set({
                y: 15,
                opacity: 0,
              }),
              controls.start({
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  ease: "easeInOut",
                },
              }));
          }}
        />
      </div>
      <Filter setFilter={setFilter} />
      <Link
        href="mailto:houssaineamzil18@gmail.com"
        className={styles.contactButton}
        style={{ lineHeight: "normal" }}
      >
        Contact
      </Link>
    </motion.nav>
  );
};
