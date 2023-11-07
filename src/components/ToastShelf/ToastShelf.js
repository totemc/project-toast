import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toasts, setToasts } = React.useContext(ToastContext);

  const handleCloseToast = (index) => {
    setToasts((previousToasts) => {
      const newToasts = previousToasts.toSpliced(index, 1);
      return newToasts;
    });
  };

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="notification"
    >
      {toasts.map((toast, index) => {
        return (
          <li className={styles.toastWrapper} key={toast.id}>
            <Toast
              variant={toast.variant}
              handleCloseToast={() => handleCloseToast(index)}
            >
              {toast.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
