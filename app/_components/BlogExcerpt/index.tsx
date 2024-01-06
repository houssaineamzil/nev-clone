import cn from "classnames";
import Link from "next/link";
import styles from "./styles.module.scss";

export const BlogExcerpt = ({ key }: { key?: any }) => {
  return (
    <div key={key} className={cn(styles.container)}>
      <div className={cn(styles.copy)}>
        <h2 className={cn(styles.title)} style={{ marginBottom: 4 }}>
          How it started vs. how it&apos;s going
        </h2>
        <p className={cn(styles.description)}>
          A short personal history as it relates to design and development, and
          how I&apos;ve found value in the cross-section between both
          disciplines.
        </p>
      </div>
      <div className={cn(styles.footer)}>
        <Link
          className={cn(styles.readMoreButton)}
          href="/posts/how-it-started-vs-how-its-going"
        >
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
          <p
            className={cn(styles.pica)}
            style={{ lineHeight: "normal", marginLeft: 6 }}
          >
            Read more
          </p>
        </Link>
        <p className={cn(styles.pica)} style={{ color: "#8A949E" }}>
          May 5, 2021
        </p>
      </div>
    </div>
  );
};
