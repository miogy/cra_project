import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Textile() {
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
    <div>
      Textile Design
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="textile id"
          value={text}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Textile;
