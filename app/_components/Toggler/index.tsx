import cn from "classnames";
import { LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import styles from "./styles.module.scss";

export const Toggler = ({
  key,
  themeToggler,
}: {
  key?: any;
  themeToggler: () => void;
}) => {
  const [on, setOn] = useState(false);

  return (
    <div key={key} className={cn(styles.container)}>
      <motion.div
        className={cn(styles.background)}
        onClick={() => {
          themeToggler();
          setOn((prev) => {
            return !prev;
          });
        }}
        transition={{
          duration: 0.25,
        }}
        layout={true}
      >
        <motion.div
          className={cn(styles.switch)}
          style={{
            left: !on ? "6px" : "",
            right: on ? "6px" : "",
          }}
          layout={true}
          transition={{
            duration: 0.5,
            ease: [0.85, 0, 0.3, 1],
          }}
        >
          <LayoutGroup>
            {on ? (
              <motion.svg
                key="sun"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className={styles.moonIcon}
                initial={{
                  scale: 0,
                  rotate: 90,
                }}
                animate={{
                  scale: 1,
                  rotate: 0,
                }}
                exit={{
                  scale: 0,
                  rotate: 90,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <path
                  id="sun"
                  d="M12,0a.945.945,0,0,0-1,1V2a1,1,0,0,0,2,0V1A.945.945,0,0,0,12,0ZM4.2,3.2a.986.986,0,0,0-.7.3.967.967,0,0,0,0,1.4l.7.7A.99.99,0,0,0,5.6,4.2l-.7-.7A.991.991,0,0,0,4.2,3.2Zm15.6,0a.991.991,0,0,0-.7.3l-.7.7a.99.99,0,0,0,1.4,1.4l.7-.7a.967.967,0,0,0,0-1.4A.986.986,0,0,0,19.8,3.2ZM12,5a7,7,0,1,0,7,7,7,7,0,0,0-7-7ZM1,11a1,1,0,0,0,0,2H2a1,1,0,0,0,0-2Zm21,0a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM4.9,18.1a.991.991,0,0,0-.7.3l-.7.7a.99.99,0,0,0,1.4,1.4l.7-.7a.967.967,0,0,0,0-1.4A.986.986,0,0,0,4.9,18.1Zm14.2,0a.986.986,0,0,0-.7.3.967.967,0,0,0,0,1.4l.7.7a.99.99,0,0,0,1.4-1.4l-.7-.7A.991.991,0,0,0,19.1,18.1ZM12,21a.945.945,0,0,0-1,1v1a1,1,0,0,0,2,0V22A.945.945,0,0,0,12,21Z"
                  fill="#ffe3a4"
                ></path>
              </motion.svg>
            ) : (
              <motion.svg
                key="moon"
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="19"
                viewBox="0 0 17 19"
                className={styles.moonIcon}
                initial={{
                  scale: 0,
                  rotate: -90,
                }}
                animate={{
                  scale: 1,
                  rotate: 0,
                }}
                exit={{
                  scale: 0,
                  rotate: -90,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <path
                  id="moon"
                  d="M36.7,18.974a9.469,9.469,0,0,0,7.369-3.513.445.445,0,0,0-.428-.717A7.432,7.432,0,0,1,38.571.982a.445.445,0,0,0-.139-.824A9.488,9.488,0,1,0,36.7,18.974Z"
                  transform="translate(-27.211)"
                  fill="#ffe3a4"
                ></path>
              </motion.svg>
            )}
          </LayoutGroup>
        </motion.div>
      </motion.div>
    </div>
  );
};
