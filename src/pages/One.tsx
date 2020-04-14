import React from "react";
import {PageProps} from "../App";

export default ({ onNextPage }: PageProps) => (
  <button onClick={onNextPage}>Start</button>
);
