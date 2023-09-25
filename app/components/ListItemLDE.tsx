import { BsArrowLeftRight } from 'react-icons/bs'
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'
import { GoArrowSwitch } from 'react-icons/go'
import { PiArrowElbowLeftDownBold, PiArrowElbowRightDownBold } from 'react-icons/pi'

type itemLde = {
    ant: boolean,
    conteudo: number,
    prox: boolean
}

type Props = {
    children: itemLde,
    selectedItem: boolean
}

export default function ListItemLDE({ children, selectedItem }: Props) {
    const style = `flex font-principal font-black rounded-lg text-yellow2 text-4xl p-2 
    ${selectedItem ? 'bg-lime-600' : 'bg-purple-500'}  ${children.prox ? 'mr-2': ''}`
    return (
        <section className='flex items-center m-1'>
            {!children.ant ?
                <section className='flex flex-col items-end mt-16'>
                    <PiArrowElbowLeftDownBold size={32} color='#FFBF00' />
                    <div className='flex font-principal font-black rounded-lg bg-gray-clear text-gray text-xl p-2'>
                        NULL
                    </div>
                </section> : <></>}
            <div className={style}>
                {children.conteudo}
            </div>
            {children.prox ? <GoArrowSwitch size={32} color='#FFBF00' /> : <></>}
            {!children.prox ?
                <section className='flex flex-col items-start mt-16'>
                    <PiArrowElbowRightDownBold size={32} color='#FFBF00' />
                    <div className='flex font-principal font-black rounded-lg bg-gray-clear text-gray text-xl p-2'>
                        NULL
                    </div>
                </section> : <></>}
        </section>
    )
}