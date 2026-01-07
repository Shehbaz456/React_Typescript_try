import type { ReactNode } from "react"

type PannelProp = {
    title:string,
    children?:ReactNode,
}

export function Pannel({title,children}:PannelProp){
    return (
        <section>
            {title}
            {children ?? <p>Not Children Present </p> }
        </section>
    )
}
