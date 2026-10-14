import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Generative Ai Engineer",
          "Ai Engineer Intern",
          "Software Developer Intern",
          "Prompt Engineer Intern",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

