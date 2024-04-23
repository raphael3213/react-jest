import React from "react";

function Greet({ name }: { name?: string }) {
  return <div>Hello {name}</div>;
}

export default Greet;
