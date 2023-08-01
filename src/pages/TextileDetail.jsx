import React from "react";
import { useParams } from "react-router-dom";

function TextileDetail() {
  const { designId } = useParams();
  //   console.log(params);
  return <>Detail {designId}</>;
}

export default TextileDetail;
