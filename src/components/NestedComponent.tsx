import React, { ReactNode } from "react";

interface NestedComponentProp {
  children: ReactNode;
}

const NestedComponent = (
    { children }: NestedComponentProp) => {
  return (
    <>
      <div>TOP of NestedComponent</div>
      {/* display our child component inside */}
        {children}
      <div>BOTTOM of NestedComponent</div>
    </>
  );
};

export default NestedComponent;
