"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useWindowSize() {
    var isClient = typeof window === "object";
    function getSize() {
        return {
            width: isClient ? window.innerWidth : 0,
            height: isClient ? window.innerHeight : 0,
        };
    }
    var _a = react_1.useState(getSize), windowSize = _a[0], setWindowSize = _a[1];
    react_1.useEffect(function () {
        if (!isClient) {
            return false;
        }
        function handleResize() {
            setWindowSize(getSize());
        }
        window.addEventListener("resize", handleResize);
        return function () { return window.removeEventListener("resize", handleResize); };
    }, []);
    return windowSize;
}
exports.default = useWindowSize;
