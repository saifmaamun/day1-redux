import { useSelector } from "react-redux"
import { RootState } from "./redux/store"


function App() {

const {count} = useSelector((state:RootState) => state.counter)


  return (
    <>
      <div>
        <div>
          <button>increment</button>
        </div>
        <div>{count}</div>
        <div>
          <button>decrement</button>
        </div>
      </div>
    </>
  )
}

export default App
