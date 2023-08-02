import React from "react";
import { useParams } from "react-router-dom";

function TextileDetail() {
  const { designId } = useParams();
  //   console.log(params);
  return (
    <>
      <section>Detail {designId}</section>
    </>
  );
}

export default TextileDetail;
