import React from "react";
import {PageProps} from "../App";

const One = ({ onNextPage }: PageProps) => (
  <button onClick={onNextPage}>Start</button>
);

export default One
