import { useEffect } from "react";
import * as WebBrowser from "expo-web-browser";

// Custom React Hook for warming up and cooling down the WebBrowser module
export const useWarmUpBrowser = () => {
  useEffect(() => {
    // When the component mounts, warm up the WebBrowser module
    void WebBrowser.warmUpAsync();

    // When the component is unmounted, cool down the WebBrowser module
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount
};
