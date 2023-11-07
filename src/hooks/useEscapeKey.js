import React from "react";

export const useEscapeKey = (callbackFunction) => {
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.code === "Escape") {
        callbackFunction();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [callbackFunction]);
};
