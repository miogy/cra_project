import React from "react";
import { useParams } from "react-router-dom";

function GraphicDetail() {
  const { designId } = useParams();
  //   console.log(params);
  return (
    <>
      <section>Detail {designId}</section>
    </>
  );
}

export default GraphicDetail;
