import type { ReactNode } from 'react'
interface UserCardProps {
    id:string,
    name?:string,
    subtitle?:ReactNode
}

function OptionalUserCard({id,name,subtitle}:UserCardProps) {
    const displayname = name ?? "Guest"
  return (
    <div>
        <p>{id}</p>
        <p>{displayname}</p>
        {subtitle? <p>{subtitle}</p> : null  }
    </div>
  )
}

export default OptionalUserCard
