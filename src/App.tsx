import { useDispatch, useSelector } from "react-redux"
import { RootState } from "./redux/store"
import { decrement, increment } from "./redux/features/counter/CounterSlice"


function App() {

const {count} = useSelector((state:RootState) => state.counter)
const dispatch=useDispatch()

  return (
    <>
      <div>
        <div>
          <button onClick={()=>dispatch(increment())}>increment</button>
        </div>
        <div>{count}</div>
        <div>
          <button  onClick={()=>dispatch(decrement())}>decrement</button>
        </div>
      </div>
    </>
  )
}

export default App
