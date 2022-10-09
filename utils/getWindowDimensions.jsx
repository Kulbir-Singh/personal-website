import { useEffect, useState } from "react";
import { debounce } from "lodash";

export function useWindowSize(delay = 0) {
  const [windowDimensions, setWindowDimensions] = useState();

  useEffect(() => {
    console.log(window.innerWidth);
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    function handleResize() {
      const { innerWidth: width, innerHeight: height } = window;
      return setWindowDimensions({ width, height });
    }
    const debouncedHandleResize = debounce(handleResize, delay);
    window.addEventListener("resize", debouncedHandleResize);
    return () => window.removeEventListener("resize", debouncedHandleResize);
  }, [delay]);

  return windowDimensions;
}

export function useContainerSize(selectorID, delay = 0) {
  const [windowDimensions, setWindowDimensions] = useState();

  useEffect(() => {
    function handleResize() {
      const { innerWidth: width, innerHeight: height } = window;
      return setWindowDimensions({ width, height });
    }
    const debouncedHandleResize = debounce(handleResize, delay);
    document
      .getElementById(selectorID)
      .addEventListener("resize", debouncedHandleResize);
    return () =>
      document
        .getElementById(selectorID)
        .removeEventListener("resize", debouncedHandleResize);
  }, [delay]);

  return windowDimensions;
}
