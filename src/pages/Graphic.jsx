import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Graphic() {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
    navigate(`/textile_design/${text}`);
  };
  return (
    <section>
      Textile & Graphic Design & project Design
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="textile id"
          value={text}
          onChange={handleChange}
        />
      </form>
    </section>
  );
}

export default Graphic;
