import { HiArrowNarrowRight } from 'react-icons/hi'
import { PiArrowElbowRightDownBold } from 'react-icons/pi'

type Props = {
    children: any,
    selectedItem?: boolean
}

export default function PilhaItem({ children }: Props) {
    const style = `flex font-principal w-full justify-center font-black rounded-lg bg-purple-500 text-yellow2 text-4xl p-2`
    return (
        <section className='flex items-center m-1'>
            <div className={style}>
                {children}
            </div>
            
        </section>
    )
}