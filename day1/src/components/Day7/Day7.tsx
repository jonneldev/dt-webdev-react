import { useState, useEffect } from "react";

export const CounterWithEffect = () => {
  const [count, setCount] = useState(0)
  const [anotherState, setAnotherState] = useState(0)

  useEffect(() => {
    console.log("Run thin on render")
  },[count])

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Update count!
      </button>
      <button onClick={(() => setAnotherState((prevState) => prevState + 1))}>
        Update another state!
      </button>
      <div>Count: {count}</div>
      <div>
        Update another state that renders entire component: {anotherState}
      </div>
    </div>
  )
}