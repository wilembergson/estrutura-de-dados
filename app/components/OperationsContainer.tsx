import { ReactNode } from "react"

type Props = {
    children: ReactNode
    disabled?: string
}

export default function OperationsContainer({ children, disabled }: Props) {
    const style = `flex py-5 shadow-md bg-main-item rounded-xl ${disabled}`
    return (
        <div className={style}>
            {children}
        </div>
    )
}