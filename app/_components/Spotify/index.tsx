import cn from "classnames";
import styles from "./styles.module.scss";

export const Spotify = ({ key }: { key?: any }) => {
  const { name, href, type, artists } = {
    name: "Tu veux mon zizi",
    href: "https://open.spotify.com/track/1ImRLQGYsmrn3NaiKvO6pt?autoplay=true",
    type: "",
    artists: ["Francky Vincent"],
  };
  // const { name, href, type, artists } = {
  // 	name: "Kids Of The Night",
  // 	href: "https://open.spotify.com/track/5u8Zijx6NHUL8MM6dBEbkS?si=c4bb73f887a443de",
  // 	type: "",
  // 	artists: ["Elly Duhé"],
  // }
  const delays = [0.85, 1.26, 0.62];

  return (
    <div key={key} className={cn(styles.container)}>
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        width="75"
        height="75"
        viewBox="0 0 75 75"
      >
        <path
          id="spotify"
          d="M61.625,35.375c-12-7.125-32.062-7.875-43.5-4.312A3.439,3.439,0,1,1,16.062,24.5c13.313-3.938,35.25-3.187,49.125,5.063A3.624,3.624,0,0,1,66.5,34.437a3.929,3.929,0,0,1-4.875.938m-.375,10.5a2.825,2.825,0,0,1-3.937.938C47.188,40.625,31.812,38.75,20,42.5a2.847,2.847,0,1,1-1.688-5.437C32,32.937,48.875,35,60.5,42.125a2.647,2.647,0,0,1,.75,3.75m-4.5,10.313a2.228,2.228,0,0,1-3.188.75c-8.812-5.437-19.875-6.563-33-3.562a2.319,2.319,0,1,1-1.125-4.5C33.687,45.687,46.063,47,55.813,53a2.247,2.247,0,0,1,.938,3.188M39.5,2A37.5,37.5,0,1,0,77,39.5,37.514,37.514,0,0,0,39.5,2Z"
          transform="translate(-2 -2)"
          fill="#ffffff"
        />
      </svg>
      <div>
        <div className={styles.nowPlaying}>
          <div className={styles.playingIndicator}>
            {["1", "2", "3"].map((line, index) => (
              <div
                key={`line-${line}`}
                className={styles.playingIndicator__Line}
                style={{
                  animation: `playing ${delays[index]}s infinite ease`,
                }}
              ></div>
            ))}
          </div>
          <p color="#6ed2b7">
            {"top" === type ? "Offline. Last played" : "Now playing"}
          </p>
        </div>
        <h2
          className={styles.title}
          onClick={() => window.open(href, "_blank")}
        >
          {name}
        </h2>
        <p style={{ lineHeight: "22px" }}>
          {artists.map((artist, index) => {
            return artist + (index + 1 !== artists.length ? ", " : "");
          })}
        </p>
      </div>
    </div>
  );
};
