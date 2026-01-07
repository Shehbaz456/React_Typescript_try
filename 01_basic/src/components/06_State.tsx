import { useState } from "react"


type LoaderState = 
| {status:"idle"} 
| {status:"loading"} 
| {status:"success",data:string} 
| { status:"error", message:string  }

type User = {
    name:string
}

function heavyDefaultMax():number{
    return 100;
}

export function LoaderDemo() {
    const [state,setState] = useState<LoaderState>({status:"idle"});
    const [n,setN] = useState(()=>heavyDefaultMax())
    const [user,setUser] = useState<User | null>(null)

    async function fetchDatafn(){
        setState({status:"loading"});

        // fetch
        setState({status:"success",data:"fetched user data"});
        // catch
        setState({status:"error",message:"fetched user data"});
    }

  return (
    <div>
      
    </div>
  )
}




