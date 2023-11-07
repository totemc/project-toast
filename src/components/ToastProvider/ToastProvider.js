import React from "react";
import { useEscapeKey } from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  useEscapeKey(() => setToasts([]));

  const toastProviderValue = React.useMemo(() => {
    return {
      toasts,
      setToasts,
    };
  }, [toasts]);

  return (
    <ToastContext.Provider value={toastProviderValue}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
