'use client'
import { useRouter } from "next/navigation";
import HeaderItem from "./HeaderItem";

export default function Header() {
    const router = useRouter()
    
    return (
        <header className='flex relative flex-row z-1 bg-purple-600 text-yellow font-principal w-full py-10 px-32 font-principal text-white'>
            <h1 className="flex font-black text-3xl pl-15 cursor-pointer" onClick={() => router.push('/')}>
                Estrutura de dados
            </h1>
            <div className="flex text-md ml-20 items-center">
                <HeaderItem route="/sequencial">Sequêncial</HeaderItem>
                <HeaderItem route="/lse">LSE</HeaderItem>
                <HeaderItem route="/">LDE</HeaderItem>
            </div>
        </header>
    )
}