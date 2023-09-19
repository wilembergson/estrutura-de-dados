import { HiArrowNarrowRight } from 'react-icons/hi'

type Props = {
    children: any,
    selectedItem: boolean
}

export default function ListItemSequencial({ children, selectedItem }: Props) {
    const style = `flex font-principal font-black rounded-lg ${selectedItem ? 'bg-lime-600' : 'bg-purple-500'} text-yellow2 text-4xl p-2`
    return (
        <section className='flex items-center m-1'>
            <div className={style}>
                {!children.conteudo ? children : children.conteudo}
            </div>
        </section>
    )
}