import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode
    route: string
}

export default function MainItem({ children, route }: Props) {
    const router = useRouter()

    return (
        <section className="flex flex-col justify-center items-center font-principal font-black text-2xl text-yellow hover:bg-purple-500
            hover:border-purple-500 transition duration-500 border-4 border-yellow p-10 m-4 rounded-xl
            cursor-pointer w-64"
            onClick={() => router.push(route)}>
            {children}
        </section>
    )
}