import { ReactNode } from "react"

type Props = {
    children: ReactNode
    disabled?: string
    optionals?: string
}

export default function OperationsContainer({ children, disabled, optionals }: Props) {
    const style = `flex py-5 shadow-md bg-main-item rounded-xl ${disabled} ${optionals}`
    return (
        <div className={style}>
            {children}
        </div>
    )
}