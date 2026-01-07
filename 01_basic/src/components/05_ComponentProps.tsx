import type { ComponentProps, CSSProperties } from "react"

type ButtonBaseProp = ComponentProps<"button">
type ButtonProp = ButtonBaseProp & {variant?: "primary"|"secondary" };

const variantStyles: Record<"primary" | "secondary", CSSProperties> = {
  primary: {
    backgroundColor: "blue",
    color: "white",
  },
  secondary: {
    backgroundColor: "gray",
    color: "black",
  },
};

function ComponentButton({variant="primary",style,...rest}:ButtonProp) {
    const base : CSSProperties ={
        padding:"12px",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
    }
  return ( <button style={{...base,...variantStyles[variant],...style}} {...rest} >Click</button> )
}

export default ComponentButton
