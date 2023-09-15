import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export default function OperationsContainer({children}: Props){
    return(
        <div className="flex py-5 shadow-md bg-main-item rounded-xl">
            {children}
        </div>
    )
}