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
        <section className='flex'>
            {node.esq ?
                <div className='flex flex-col'>
                    <div className='flex mt-14 w-auto justify-end'>
                        <BsArrowDownLeft size={42} color='#FFBF00' background='#900C3F' />
                    </div>
                    <div className='flex bg-lime-100'>
                        {Node(node.esq)}
                    </div>
                </div>
                : <></>}
            <section className='flex h-14 m-1'>
                <div className={style}>
                    {node.conteudo}
                </div>
            </section>
            {node.dir ?
                <div className='flex flex-col'>
                    <div className='flex mt-14 w-auto justify-start'>
                        <BsArrowDownRight size={42} color='#FFBF00' background='#900C3F' />
                    </div>
                    <div className='flex bg-lime-100 justify-end'>
                        {Node(node.dir)}
                    </div>
                </div>
                : <></>}
        </section>
    )
}