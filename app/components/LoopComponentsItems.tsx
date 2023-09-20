type Props = {
    length: number
}

export default function LoopComponentsItems({ length }: Props) {
    const items = []
    for (let i = 0; i < length; i++) {
        items.push(
            <div className="flex font-principal font-black rounded-lg bg-gray-clear text-gray text-4xl p-2 m-1">
                N
            </div>
        )
    }
    return (
        <section className="flex">
            {items}
        </section>
    )
}