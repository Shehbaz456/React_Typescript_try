import OptionalUserCard from "./components/01_RequiredOptionalProps.tsx"
// import GreetA from "./components/02_DefaultProps.tsx"
// import { Pannel } from "./components/03_ChildrenReactNode.tsx"
import Badge from "./components/04_AsContsVariable.tsx";

function App() {

  return (
    <>
     <h1 className="text-3xl font-bold underline text-center">
    React TS
  </h1>

  <OptionalUserCard id="4ew3de" name="shehbaz" />
    <Badge label="Salman khan" />

  {/* <GreetA />
  <Pannel title="shehbaz khan" children={
    <ul><li>One</li><li>two</li></ul>
  } />


  <Pannel title="shehbaz khan" >
    <div>
    <ul>
      <li>One</li>
      <li>two</li>
    </ul>
    </div>
  </Pannel> */}

    </>
  )
}

export default App
