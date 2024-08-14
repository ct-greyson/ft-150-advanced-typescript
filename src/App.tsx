import Button from "./components/Button"
import NestedComponent from "./components/NestedComponent"
import PersonDisplay from "./components/PersonDisplay"
import Status from "./components/Status"
import { Person, ProfileData } from "./interfaces/Person"

// Person type
// name (string), age (number), email (string) OPTIONAL
// type alias
// type Person = {
//   name: string,
//   age: number,
//   email?: string
// }


function App() {
  
  const student: Person = {
    name: "Joe",
    age: 30,
    // email: "joe@email.joe"
  }

  const profileData: ProfileData = {
    person: student,
    message: "woo, typescript!"
  }

  const handleClick = (): void => {
    console.log("button clicked!")
  }

  return (
    <>
      <PersonDisplay {...profileData} />
      <Status />
      <NestedComponent>
        <h3>Hi, im the child component!</h3>
        <Status />
      </NestedComponent>
      <Button buttonClick={handleClick} />
    </>
  )
}

export default App
