import cn from "classnames";
import { useState } from "react";
import { ExpandedCornerLink } from "./ExpandedCornerLink";
import styles from "./styles.module.scss";

export const CaseStudy = ({
  key,
  bg,
  image,
  title,
  href,
}: {
  key?: any;
  bg: string;
  image: string;
  title: string;
  href: string;
}) => {
  const [active, setActive] = useState(false);

  return (
    <div
      key={key}
      className={cn(styles.container)}
      onMouseEnter={() => {
        return setActive(true);
      }}
      onMouseLeave={() => {
        return setActive(false);
      }}
    >
      <img
        src={bg}
        className={cn(styles.backgroundSVG)}
        style={{ opacity: "var(--caseStudyBgOpacity)" }}
      />
      <img src={image} className={cn(styles.image)} />
      <ExpandedCornerLink href={href} active={active} title={title} />
    </div>
  );
};
