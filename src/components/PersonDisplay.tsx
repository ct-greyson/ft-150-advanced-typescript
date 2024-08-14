import React from "react";
import { ProfileData } from "../interfaces/Person";

// React.FC<TYPE> says that the props passed into this component must be the same type as <TYPE>
// for our PersonDisplay component, our props should be of type ProfileData
// const PersonDisplay: React.FC<ProfileData> = (props) => {
//   return (
//     <>
//       <h1>Person Details</h1>
//       <h2>Name: {props.person.name}</h2>
//       <p>Age: {props.person.age}</p>
//       <p>Email: {props.person.email}</p>
//       <p>Message: {props.message}</p>
//     </>
//   );
// };

// you can also pass your prop data by destructuring using the following syntax
// {property}: customType
const PersonDisplay = ({
  person: { name, age, email },
  message,
}: ProfileData) => {
  return (
    <>
      <h1>Person Details</h1>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      {/* if email exists, display email.  if not, display "email is not provided" */}
      <p>Email: {email || "Email not provided"}</p>
      <p>Message: {message}</p>
    </>
  );
};

export default PersonDisplay;
