import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import useOnScreen from "./hook/useOnScreen";
import useWindowSize from "./hook/useWindowSize";

const useStyles = makeStyles({
  simpleReveal: {
    opacity: 0,
    animationFillMode: "forwards",
  },
  centered: {
    animationName: "fadeIn",
  },
  left: {
    animationName: "fadeIn, left",
  },
  right: {
    animationName: "fadeIn, left",
  },
  top: {
    animationName: "fadeIn, left",
  },
  bottom: {
    animationName: "fadeIn, left",
  },
  none: {
    animationName: "nonet",
  },

  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  "@keyframes left": {
    "0%": {
      transform: "translateX(-30vh)",
    },
    "100%": {
      transform: "translateX(0)",
    },
  },
  "@keyframes right": {
    "0%": {
      transform: "translateX(30vh)",
    },
    "100%": {
      transform: "translateX(0)",
    },
  },
  "@keyframes top": {
    "0%": {
      transform: "translateY(-30vh)",
    },
    "100%": {
      transform: "translateY(0)",
    },
  },
  "@keyframes bottom": {
    "0%": {
      transform: "translateY(30vh)",
    },
    "100%": {
      transform: "translateY(0)",
    },
  },
});

const SimpleReveal: React.FC<RevealProps> = (props: RevealProps) => {
  const {
    children,
    position = "centered",
    mobilePosition,
    transitionType = "ease-in-out",
    transitionTime = 500,
    delay = 0,
  } = props;

  const styles = useStyles();

  const revealRef = React.useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(revealRef);
  const size = useWindowSize();
  const mq = { mobile: 375 };

  const renderReveal = clsx(
    styles.simpleReveal,
    onScreen &&
      styles[
        mobilePosition && size.width <= mq.mobile ? mobilePosition : position
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
