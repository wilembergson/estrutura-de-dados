'use client'
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    route: string
}

export default function HeaderItem({ children, route }: Props) {
    const router = useRouter()
    
    return (
        <section className='flex mx-10 hover:text-yellow2 cursor-pointer' onClick={() => router.push(route)}>
            {children}
        </section>
    )
}