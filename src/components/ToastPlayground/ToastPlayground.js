import React from "react";

import Button from "../Button";
import ToastShelf from "../ToastShelf";
import { ToastContext } from "../ToastProvider/ToastProvider";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const { toasts, setToasts } = React.useContext(ToastContext);
  const [toastMessage, setToastMessage] = React.useState();
  const [toastVariant, setToastVariant] = React.useState("notice");

  const handleSubmitToast = (e) => {
    e.preventDefault();

    setToasts((currentToasts) => {
      const newToasts = [
        { message: toastMessage, variant: toastVariant, id: Math.random() * 5 },
        ...currentToasts,
      ];
      return newToasts;
    });
    setToastMessage("");
    setToastVariant("notice");
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf />
      <form onSubmit={handleSubmitToast}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={toastMessage}
                onChange={(e) => setToastMessage(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((variantOption) => {
                return (
                  <label
                    key={variantOption}
                    htmlFor={`variant-${variantOption}`}
                  >
                    <input
                      id={`variant-${variantOption}`}
                      type="radio"
                      name="variant"
                      value={variantOption}
                      checked={toastVariant === variantOption}
                      onChange={(e) => setToastVariant(e.target.value)}
                    />
                    {variantOption}
                  </label>
                );
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
