import React from "react";

// Union String Literal
interface StatusProp {
  status: "success" | "loading" | "error";
}

const Status = () => {
  const statusInput: StatusProp = {
    status: "error"
  }  

  let message: string = "";

  if(statusInput.status === "loading"){
    message = "Loading..."
  } else if (statusInput.status === "error"){
    message = "ERROR!"
  } else if (statusInput.status === "success") {
    message = "successfully loaded data!"
  }


  return <h3>Status: {message}</h3>;
};

export default Status;
