import { useState } from "react";

export const UserInfo = ({ name, greeting }) => (
  <h1>
    Hello, {name} {greeting}
  </h1>
)

export const withLoader = (Component) => {
  return function WrapperComponent({ isLoading, ...props }) {
    if(isLoading) {
      return <div>Loading... Please wait</div>;
    }

    return <Component {...props} />;
  }
}

export const MyCounter = () => {
  // [state_variable, state_updater_function] = useState(initialValue);
  const [counter, setCounter] = useState(0);

  const handleOnClick = () => {
    setCounter(counter + 1);
  }

  const handleonClickIncrement = () => setCounter(counter + 1);
  
  const handleonClickDecrement = () => setCounter(counter - 1);
  
  
  return(
    <>
      <button onClick={handleonClickIncrement}>
        Click me to add
      </button>

      <button onClick={handleonClickDecrement}>
        Click me to subtract
      </button>
      Click counter: {counter}
    </>
  )
}

export const MyInput = () => {

  // create a component that return an input text.
  // whatever you type here should appear in a different component
  // the other component can be a <p> tag.

  const [textInput, setTextInput] = useState("");

  const handleOnchange = (e) => {
    setTextInput(e.target.value);
  } 

  return (
    <>
      <input type="text" onChange={handleOnchange} value={textInput}/>
      <p>{textInput}</p>
    </>
  )
}