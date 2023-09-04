import { ReactNode } from 'react';


type Props = {
    children: ReactNode;
}

export default function HeaderItem({ children }: Props) {
    return (
        <section className='flex mx-10 hover:text-yellow2 cursor-pointer'>
            {children}
        </section>
    )
}