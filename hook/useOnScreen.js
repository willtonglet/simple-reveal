"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useOnScreen(ref, rootMargin) {
    if (rootMargin === void 0) { rootMargin = "0px"; }
    var _a = react_1.useState(false), isIntersecting = _a[0], setIntersecting = _a[1];
    react_1.useEffect(function () {
        var reference = ref.current;
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            setIntersecting(entry.isIntersecting);
        }, {
            rootMargin: rootMargin,
        });
        if (ref.current) {
            observer.observe(ref.current);
        }
        return function () {
            observer.unobserve(reference);
        };
    }, [ref, rootMargin]);
    return isIntersecting;
}
exports.default = useOnScreen;
