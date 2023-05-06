import {useState, useRef, useCallback} from "react";

const useInfiniteScroll = (initialCount, downThreshold = 1, upThreshold = 0) => {
  const [displayedCount, setDisplayedCount] = useState(initialCount);
  const lastElementRef = useRef(null);
  const firstElementRef = useRef(null);

  const handleObserverDown = useCallback(
    (node) => {
      const observerDown = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setDisplayedCount((prevCount) => prevCount + 10);
          }
        },
        {threshold: downThreshold},
      );

      if (lastElementRef.current) {
        observerDown.disconnect();
      }

      if (node) {
        observerDown.observe(node);
      }

      lastElementRef.current = observerDown;
    },
    [downThreshold],
  );

  const handleObserverUp = useCallback(
    (node) => {
      const observerUp = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setDisplayedCount((prevCount) => Math.max(prevCount - 10, initialCount));
          }
        },
        {threshold: upThreshold},
      );

      if (firstElementRef.current) {
        observerUp.disconnect();
      }

      if (node) {
        observerUp.observe(node);
      }

      firstElementRef.current = observerUp;
    },
    [upThreshold, initialCount],
  );

  return [displayedCount, handleObserverDown, handleObserverUp];
};

export default useInfiniteScroll;
