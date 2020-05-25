"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var clsx_1 = require("clsx");
var useOnScreen_1 = require("./hook/useOnScreen");
var useWindowSize_1 = require("./hook/useWindowSize");
var styles_module_scss_1 = require("./styles.module.scss");
var SimpleReveal = function (props) {
    var children = props.children, _a = props.position, position = _a === void 0 ? "centered" : _a, mobilePosition = props.mobilePosition, _b = props.transitionType, transitionType = _b === void 0 ? "ease-in-out" : _b, _c = props.transitionTime, transitionTime = _c === void 0 ? 500 : _c, _d = props.delay, delay = _d === void 0 ? 0 : _d;
    var revealRef = React.useRef(null);
    var onScreen = useOnScreen_1.default(revealRef);
    var size = useWindowSize_1.default();
    var mq = { mobile: 375 };
    var renderReveal = clsx_1.default(styles_module_scss_1.default["reveal-transition"], onScreen &&
        styles_module_scss_1.default["reveal-transition__" + (mobilePosition && size.width <= mq.mobile ? mobilePosition : position)]);
    var handleStyles = {
        animationDelay: (delay / 1000).toString() + "s",
        animationDuration: (transitionTime / 1000).toString() + "s",
        animationTimingFunction: transitionType,
    };
    return (React.createElement("div", { className: renderReveal, ref: revealRef, style: handleStyles }, children));
};
exports.default = SimpleReveal;
