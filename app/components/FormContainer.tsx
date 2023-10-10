import { ReactNode } from "react"

type Props = {
    title: string,
    children: ReactNode,
    optionals?: string
}

export default function FormContainer({ title, children, optionals }: Props) {
    const style = `flex w-auto flex-col mx-5 ${optionals}`
    return (
        <section className={style}>
            <h3 className="flex font-principal rounded-t-lg justify-center mr-0 bg-yellow text-white w-20">
                {title}
            </h3>
            {children}
        </section>
    )
}