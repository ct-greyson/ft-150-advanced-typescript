// Interface
// basically the exact same thing as a type alias, you can use them interchangably
export interface Person {
  name: string;
  age: number;
  email?: string;
}

export interface ProfileData {
  person: Person;
  message: string;
}
