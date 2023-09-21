'use client'
import { Dispatch, SetStateAction, createContext, useState, useContext } from 'react'

interface ContextProps {
    loading: boolean,
    setLoading: Dispatch<SetStateAction<boolean>>
}

const GlobalContext = createContext<ContextProps>({
    loading: true,
    setLoading: (): boolean => true
})

export const GlobalContextProvider = ({ children }: any) => {
    const [loading, setLoading] = useState(true)
    return (
        <GlobalContext.Provider value={{ loading, setLoading }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)