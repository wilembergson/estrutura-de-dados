import { ReactNode } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

type Props = {
    children: any
}

export default function ListItem({ children }: Props) {
    return (
        <section className='flex items-center m-1'>
            <div className='flex font-principal font-black rounded-lg bg-purple-500 text-yellow2 text-4xl p-2'>
                {children.conteudo}
            </div>
            <HiArrowNarrowRight 
                size={32}
                color='#FFBF00'
            />
            {!children.prox ? <div className='flex font-principal font-black rounded-lg bg-purple-500 text-yellow2 text-4xl p-2'>
                NULL
            </div> : <></>}
        </section>
    )
}