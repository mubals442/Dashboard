import React from "react";

function Button({ icon, text }: { icon: string; text: string }) {
  return (
    <a href="" className="flex">
      <h1 className="mr-2">{icon}</h1>
      <h1>{text}</h1>
    </a>
  );
}

export default Button;
