import { ReactNode } from 'react'

type Props = {
    children: ReactNode;
}

export default function ContentTitle({ children }: Props) {
    return (
        <h1 className='flex font-principal font-black text-gray text-3xl my-10'>
            {children}
        </h1>
    )
}