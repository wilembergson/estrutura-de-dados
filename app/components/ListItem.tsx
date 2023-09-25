import { HiArrowNarrowRight } from 'react-icons/hi'
import { PiArrowElbowRightDownBold } from 'react-icons/pi'

type Props = {
    children: any,
    selectedItem: boolean
}

export default function ListItem({ children, selectedItem }: Props) {
    const style = `flex font-principal font-black rounded-lg ${selectedItem ? 'bg-lime-600' : 'bg-purple-500'} text-yellow2 text-4xl p-2`
    return (
        <section className='flex items-center m-1'>
            <div className={style}>
                {children.conteudo}
            </div>
            {children.prox ? <HiArrowNarrowRight size={32} color='#FFBF00' /> : <></>}
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