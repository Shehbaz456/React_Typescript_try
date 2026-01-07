import { useReducer} from "react"

type CounterState = {
  count:number,
  step:number
}

type Action =
| {type:"INCREMENT"}
| {type:"DECREMENT"}
| {type:"RESET", to?:number}


function CountReducer(state:CounterState,action:Action):CounterState{
  switch (action.type) {
    case "INCREMENT":
        return {...state , count: state.count + 1, step:state.step+1 }
    case "DECREMENT":
        return {...state , count: state.count - 1, step:state.step - 1 }
    case "RESET":
        return {...state , count: action.to?? 0}
    default: 
      return state;
  }
}

function init(initialCount:number):CounterState{
  return { count:initialCount, step:1 }
}

function TypedUseReducer({initial=0} : {initial?:number}) {
  const [state,dispatch] = useReducer(CountReducer,initial,init)
  return (
    <div>
      <p>{state.count}</p>
      <button onClick={()=>dispatch({type:"INCREMENT"})} >Increment</button>
    </div>
  )
}

export default TypedUseReducer
