import cn from "classnames";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";

export const ExpandedCornerLink = ({
  href,
  active,
  title,
}: {
  href: string;
  active: boolean;
  title: string;
}) => {
  return (
    <motion.a
      href={href}
      className={cn(styles.Link_Container)}
      initial={false}
      animate={{
        width: active ? "auto" : 36,
      }}
      transition={{
        duration: 0.5,
        ease: [0.85, 0, 0.3, 1],
      }}
    >
      <motion.p
        className={cn(styles.Link__Title)}
        initial={false}
        animate={{
          opacity: active ? 1 : 0,
          x: active ? 0 : -12,
        }}
        transition={{
          duration: 0.3,
          delay: active ? 0.3 : 0,
        }}
      >
        {title}
      </motion.p>
      <div className={cn(styles.Link__ArrowContainer)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18.256"
          height="18.256"
          viewBox="0 0 18.256 18.256"
        >
          <g transform="translate(5.363 5.325)">
            <path
              d="M14.581,7.05,7.05,14.581"
              transform="translate(-7.05 -7.012)"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></path>
            <path
              d="M10,7l5.287.037.038,5.287"
              transform="translate(-7.756 -7)"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></path>
          </g>
          <path d="M0,0H18.256V18.256H0Z" fill="none"></path>
        </svg>
      </div>
    </motion.a>
  );
};
