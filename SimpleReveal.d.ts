import * as React from "react";
declare const SimpleReveal: React.FC<RevealProps>;
interface RevealProps {
    children?: React.ReactNode;
    position?: "left" | "right" | "top" | "bottom" | "centered";
    mobilePosition?: "left" | "right" | "top" | "bottom" | "centered" | "none";
    transitionType?: "ease-in-out" | "linear";
    transitionTime?: number;
    delay?: number;
}
export default SimpleReveal;
