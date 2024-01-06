import { memojis } from "_data/shared";
import cn from "classnames";
import { LayoutGroup, motion, useAnimation } from "framer-motion";
import { useState } from "react";
import styles from "./styles.module.scss";

export const Bio = () => {
  const [memoji, setMemoji] = useState(0);
  const controls = useAnimation();

  const pulse = async () => {
    try {
      await controls.start({
        scale: 40,
        opacity: 0,
        backgroundColor: "#ffc6d7",
        transition: {
          duration: 0.5,
          delay: 0.65,
        },
      });

      controls.set({
        scale: 0,
        opacity: 1,
        backgroundColor: "transparent",
      });
    } catch (error) {
      // Handle errors if necessary
      console.error(error);
    } finally {
      controls.stop();
    }
  };

  return (
    <div className={cn(styles.container)}>
      <div className={cn(styles.memojiContainer)}>
        <LayoutGroup>
          <motion.img
            className={styles.memoji}
            src={memojis[memoji]}
            key={memojis[memoji]}
            initial={{
              opacity: 0,
              scale: 0.4,
              rotate: memoji == 0 ? -30 : 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.4,
              rotate: memoji == 0 ? 30 : -30,
            }}
            transition={{
              ease: [0.85, 0, 0.3, 1],
              duration: 0.5,
            }}
          />
          <motion.div className={styles.pulse} animate={controls} />
        </LayoutGroup>
      </div>
      <p className={cn(styles.about)}>
        <span className={cn(styles.indentation)}>
          I&apos;m{" "}
          <span
            style={{
              fontFamily: "var(--moranga)",
              fontSize: 40,
            }}
          >
            Houssine
          </span>
          , a creative developer and graphic designer from X911, Andromeda.
          I&apos;m interested in Next.js, Node, Product Design, Startups,
          Basketball and Music.
        </span>
      </p>
      <button
        className={styles.lockdownButton}
        onClick={() => {
          pulse();
          setMemoji((prev) => {
            return 1 - prev;
          });
        }}
      >
        <motion.div
          className={styles.iconContainer}
          animate={{
            rotate: memoji ? 180 : 0,
          }}
          transition={{
            ease: [0.85, 0, 0.3, 1],
            duration: 0.5,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15.702"
            height="15.702"
            viewBox="0 0 15.702 15.702"
          >
            <g transform="translate(2.62 2.617)">
              <path
                d="M14.8,12.032a5.229,5.229,0,0,1-9.824,2.482"
                transform="translate(-4.34 -6.777)"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.4"
              ></path>
              <path
                d="M4,9.149A5.231,5.231,0,0,1,13.83,6.731"
                transform="translate(-4.004 -4)"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.4"
              ></path>
              <path
                d="M15.953,6.952h2.313V4.639"
                transform="translate(-8.135 -4.221)"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.4"
              ></path>
              <path
                d="M6.825,15.825H4.512v2.313"
                transform="translate(-4.18 -8.088)"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.4"
              ></path>
            </g>
            <path d="M0,0H15.7V15.7H0Z" fill="none"></path>
          </svg>
        </motion.div>
        <p
          style={{
            lineHeight: "normal",
            marginLeft: "6px",
          }}
        >
          Toggle Lockdown
        </p>
      </button>
    </div>
  );
};
