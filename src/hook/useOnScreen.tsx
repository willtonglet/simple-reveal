import { useEffect, useState } from "react";

export default function useOnScreen(
  ref: React.RefObject<any>,
  rootMargin = "0px"
) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const reference = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(reference);
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}
