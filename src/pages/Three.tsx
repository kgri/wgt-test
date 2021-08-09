import React, {useRef, useState} from "react";
import {PageProps} from "../App";
import styles from "./Three.module.css";

const Three = ({ onNextPage }: PageProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputRef.current?.value === "Good value") {
      onNextPage();
    } else if (inputRef.current) {
      setIsErrorVisible(true);
    }
  };

  const onInputChange = () => {
    setInputValue(inputRef.current?.value ?? "");
  };

  return (
    <form action="#" onSubmit={onFormSubmit}>
      <input
        placeholder="Type here"
        ref={inputRef}
        value={inputValue}
        onChange={onInputChange}
      />
      <button
        type="submit"
        className={styles.button}
        disabled={!inputValue}
      >
        Submit
      </button>
      {isErrorVisible && (
        <div className={styles.error} data-test="errorMessage">
          You entered a bad value
        </div>
      )}
    </form>
  );
};

export default Three