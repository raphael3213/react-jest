import React from "react";

function Greet({ name }: { name?: string }) {
  return <div>Hello, {name ? name : "Stranger"}</div>;
}

export default Greet;
