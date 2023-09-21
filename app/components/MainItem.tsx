import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode
    route: string
    load: any
}

export default function MainItem({ children, route, load}: Props) {

    return (
        <Link onClick = {() => load(true)} href={route} className="flex flex-col justify-center items-center font-principal font-black text-2xl text-yellow
            bg-main-item hover:bg-purple-500 transition duration-500 p-10 m-4 rounded-xl
            cursor-pointer w-64 shadow-lg">
            {children}
        </Link >
    )
}