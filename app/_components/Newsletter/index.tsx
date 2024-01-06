import { Fireworks } from "_components/Fireworks";
import axios from "axios";
import cn from "classnames";
import { LayoutGroup, motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const confettiConfig = {
  angle: 90,
  spread: "144",
  startVelocity: "23",
  elementCount: 40,
  dragFriction: 0.12,
  duration: 3000,
  stagger: "2",
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#6ed2b7", "#98d0ff", "#ffc6d7", "#ffe3a4", "#1ac194"],
};

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [active, setActive] = useState(false);
  const [memberCount, setMemberCount] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    getSubscriberCount();
  }, []);

  useEffect(() => {
    success &&
      setTimeout(function () {
        setActive(true);
      }, 600);
  }, [success]);

  const getSubscriberCount = async () => {
    try {
      const response = await axios.get("api/subscriber-count");
      const count = response.data.count;
      setMemberCount(count);
    } catch (error) {
      console.log(error);
    }
  };

  const setSubscriberCount = async () => {
    try {
      await axios.post("api/subscribe", {
        email: email,
      });
      setSuccess(true);
    } catch (error) {
      console.log(error);
      controls.start({
        x: [0, 5, -5, 5, -5, 0],
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.copy}>
        <h2 className={styles.title} style={{ marginBottom: 4 }}>
          Shall I keep you in the loop?
        </h2>
        <p className={styles.body}>
          Content includes articles, early access to products, and ongoing
          learnings.
        </p>
      </div>
      <motion.input
        name="email"
        className={styles.emailInput}
        placeholder="Email address"
        value={email}
        onChange={(event) => {
          return setEmail(event.target.value);
        }}
        animate={controls}
      />
      <div className={styles.footer}>
        <button className={styles.subscribeButton} onClick={setSubscriberCount}>
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
          Subscribe
        </button>
        <p
          style={{ color: "#8A949E" }}
          className={cn(styles.pica, styles.counter)}
        >
          You&apos;ll be subscriber number{" "}
          <span
            className={styles.count}
            style={{
              fontFamily: "var(--moranga)",
              fontSize: 24,
              color: "var(--text)",
            }}
          >
            {memberCount}
          </span>
        </p>
        <p
          style={{ color: "#8A949E" }}
          className={cn(styles.pica, styles.mobileCounter)}
        >
          <span
            className={styles.count}
            style={{
              fontFamily: "var(--moranga)",
              fontSize: 24,
              color: "var(--text)",
            }}
          >
            {memberCount}
          </span>{" "}
          subscribers
        </p>
      </div>
      <LayoutGroup>
        {success && (
          <motion.div
            className={styles.success}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <motion.img
              className={styles.memoji}
              src="images/memoji-3.png"
              initial={{
                scale: 0,
                rotate: 45,
              }}
              animate={{
                scale: 1,
                rotate: 0,
              }}
              transition={{
                delay: 0.5,
              }}
            />
            <div className={styles.confettiContainer}>
              <Fireworks active={active} config={confettiConfig} />
            </div>
          </motion.div>
        )}
      </LayoutGroup>
    </div>
  );
};
