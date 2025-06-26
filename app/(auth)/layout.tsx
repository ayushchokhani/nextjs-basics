import { ReactNode } from "react"

export default function loader({children}: ReactNode) {
    return (
      <div>
        <div className="w-full text-xl text-center">Layout from auth</div>
        {children}
        
      </div>
    )
}