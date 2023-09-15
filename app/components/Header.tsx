'use client'
import { useRouter } from "next/navigation";
import HeaderItem from "./HeaderItem";
import { ReactNode } from "react";

type Props = {
    children?: ReactNode
}

export default function Header({ children }: Props) {
    const router = useRouter()

    return (
        <header className='flex relative flex-row z-1 bg-purple-600 text-yellow font-principal w-full
            py-10 px-32 font-principal text-white shadow-xl'>
            <h1 className="flex font-black text-3xl pl-15 cursor-pointer" onClick={() => router.push('/')}>
                Estrutura de dados
            </h1>
            {children}
        </header>
    )
}