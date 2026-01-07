type GreetProps ={
    name?:string,
    shout?:boolean
}
// shap the data 

export const GreetA = ({name="guest", shout=false}:GreetProps)=> {
 const text = shout? name.toLocaleUpperCase() : name;
  return ( <p>{text}</p>  )
}

export default GreetA
