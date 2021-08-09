import React, {useRef} from "react";
import {PageProps} from "../App";

const Two =  ({ onNextPage }: PageProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputRef.current?.value === "WomenGoTech") {
      onNextPage();
    } else if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <form action="#" onSubmit={onFormSubmit}>
      <input placeholder="Type here" ref={inputRef} autoFocus={true} />
    </form>
  );
};

export default Two