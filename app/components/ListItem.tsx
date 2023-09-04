import { ReactNode } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

type Props = {
    children: ReactNode
}

export default function ListItem({ children }: Props) {
    return (
        <section className='flex items-center mx-1'>
            <div className='flex font-principal font-black rounded-lg bg-purple-500 text-yellow2 text-4xl p-2'>
                {children}
            </div>
            <HiArrowNarrowRight 
                size={32}
                color='#FFBF00'
            />
        </section>
    )
}