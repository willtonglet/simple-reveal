import * as React from "react";
import clsx from "clsx";
import useOnScreen from "./hook/useOnScreen";
import useWindowSize from "./hook/useWindowSize";
import styles from "./styles.module.scss";

const SimpleReveal: React.FC<RevealProps> = (props: RevealProps) => {
  const {
    children,
    position = "centered",
    mobilePosition,
    transitionType = "ease-in-out",
    transitionTime = 500,
    delay = 0,
  } = props;

  const revealRef = React.useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(revealRef);
  const size = useWindowSize();
  const mq = { mobile: 375 };

  const renderReveal = clsx(
    styles["reveal-transition"],
    onScreen &&
      styles[
        `reveal-transition__${
          mobilePosition && size.width <= mq.mobile ? mobilePosition : position
        }`
      ]
  );

  const handleStyles = {
    animationDelay: `${(delay / 1000).toString()}s`,
    animationDuration: `${(transitionTime / 1000).toString()}s`,
    animationTimingFunction: transitionType,
  };

  return (
    <div className={renderReveal} ref={revealRef} style={handleStyles}>
      {children}
    </div>
  );
};

interface RevealProps {
  children?: React.ReactNode;
  position?: "left" | "right" | "top" | "bottom" | "centered";
  mobilePosition?: "left" | "right" | "top" | "bottom" | "centered" | "none";
  transitionType?: "ease-in-out" | "linear";
  transitionTime?: number;
  delay?: number;
}

export default SimpleReveal;
