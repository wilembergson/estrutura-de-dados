'use client'
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { useGlobalContext } from '../context/global-context';

type Props = {
    children: ReactNode;
    route: string
}

export default function HeaderItem({ children, route }: Props) {
    const router = useRouter()
    const {setLoading} = useGlobalContext()

    function goRoute(){
        setLoading(true)
        router.push(route)
    }
    
    return (
        <div className='flex mx-10 hover:text-yellow2 cursor-pointer' onClick={() => goRoute()}>
            {children}
        </div>
    )
}