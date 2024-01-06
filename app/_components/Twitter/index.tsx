"use client";

import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";

const Link = ({ href, to }: { href?: string; to?: string }) => {
  const router = useRouter();
  return (
    <div
      className={styles.link}
      onMouseDown={() =>
        href ? window.open(href, "_blank") : to ? router.push(to) : null
      }
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.8198 5.28849L5.28784 12.8205M7.53214 5.25049L12.8198 5.28749L12.8578 10.5752"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export const Twitter = () => {
  return (
    <div className={styles.container}>
      <svg
        width="75"
        height="75"
        viewBox="0 0 75 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.icon}
      >
        <path
          d="M67.1218 22.5109C67.1672 23.1671 67.1672 23.8234 67.1672 24.4857C67.1672 44.6661 51.8043 67.9403 23.7125 67.9403V67.9282C15.4141 67.9403 7.28813 65.5633 0.302246 61.0815C1.5089 61.2266 2.7216 61.2992 3.93733 61.3022C10.8143 61.3083 17.4948 59.0008 22.9051 54.7518C16.3698 54.6278 10.6389 50.3667 8.63692 44.146C10.9262 44.5875 13.2851 44.4968 15.5321 43.8829C8.40709 42.4434 3.28108 36.1833 3.28108 28.9131V28.7196C5.40406 29.902 7.78108 30.5583 10.2125 30.6309C3.50184 26.146 1.43329 17.2186 5.48571 10.2387C13.2397 19.78 24.6803 25.5804 36.9615 26.1944C35.7307 20.8899 37.4121 15.3315 41.3799 11.6026C47.5311 5.82037 57.2055 6.11674 62.9877 12.2649C66.4081 11.5905 69.6863 10.3355 72.6863 8.55726C71.5462 12.0925 69.1601 15.0956 65.9726 17.0038C68.9998 16.647 71.9575 15.8365 74.7428 14.5996C72.6924 17.6722 70.1097 20.3486 67.1218 22.5109Z"
          fill="currentColor"
        ></path>
      </svg>
      <Link href="https://twitter.com/houssaineamzil" />
    </div>
  );
};
