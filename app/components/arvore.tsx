import { HiArrowNarrowRight } from 'react-icons/hi'
import { BsArrowDownLeft, BsArrowDownRight, BsArrow90DegDown, BsArrow90DegRight } from 'react-icons/bs'

type Props = {
    children: any
}

export default function Arvore({ children }: Props) {
    return Node(children)
}

function Node(node: any) {
    const style = `flex font-principal font-black rounded-full bg-purple-500 text-yellow2 text-4xl p-2 h-14`
    return (
        <section className='flex justify-center w-full'>
            {node.esq ?
                <div className='flex flex-col'>
                    <div className='flex mt-14 w-auto justify-end'>
                        <BsArrowDownLeft size={42} color='#FFBF00' background='#900C3F' />
                    </div>
                    <div className='flex'>
                        {Node(node.esq)}
                    </div>
                </div>
                : <></>}
            <section className='flex justify-center h-16 py-2 w-full border-b border-dashed border-yellow border-b-4 p-4'>
                <div className={style}>
                    {node.conteudo}
                </div>
            </section>
            {node.dir ?
                <div className='flex flex-col'>
                    <div className='flex mt-14  w-auto justify-start'>
                        <BsArrowDownRight size={42} color='#FFBF00' background='#900C3F' />
                    </div>
                    <div className='flex justify-start'>
                        {Node(node.dir)}
                    </div>
                </div>
                : <></>}
        </section>
    )
}