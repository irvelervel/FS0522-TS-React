import { useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'

interface ExampleFuncComponentProps {
  title: string
}

interface MyObjFutureValue {
  name: string
  job: string
}

const ExampleFuncComponent = ({ title }: ExampleFuncComponentProps) => {
  const params = useParams<{ id: string }>()
  const location = useLocation()
  // full location object, fully typed :)

  const [counter, setCounter] = useState(0)

  //   const [reservations, setReservations] = useState([])

  const [myObj, setMyObj] = useState<null | MyObjFutureValue>(null)
  // TS complains that we cannot assign an object value to myObj,
  // since it has been initialized with a null value and therefore
  // type inference automatically detected that myObj is of TYPE null
  // and so will never be able to get any other value than null... :(

  // the solution would be to inform useState that even if we initialized
  // myObj with null, that must not become its type!
  // we want a type for it like this: null | { name: string, job: string }

  // and for doing this, we pass a type argument to useState!

  return (
    <div>
      <h1>{title}</h1>
      <h3>Let's see how this works...{params.id}</h3>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setMyObj({ name: 'Stefano', job: 'teacher' })}>
        FILL OBJECT
      </button>
      {myObj && <div>myObj is ready!</div>}
    </div>
  )
}

export default ExampleFuncComponent
