import { useState } from "react"
import type { FormEvent,ChangeEvent } from "react";

function Events() {
  const [name,setName] = useState('');

  function handleNameChange(e:ChangeEvent<HTMLInputElement>){
    setName(e.currentTarget.value);
  }

  function handleSubmit(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleNameChange} placeholder="enter name" />
        <button type="submit" >Submit</button>
      </form>
    </div>
  )
}

export default Events
