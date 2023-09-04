'use client'

import { useEffect, useState } from "react";
import ContentTitle from "./ContentTitle";
import api from "../api/api-connections";
import FormContainer from "./FormContainer";

export default function LSE() {

    type FormData = {
        posicao?: number | undefined,
        valor?: number | undefined
    }

    type RemoveItem = {
        posicao: number | undefined
    }

    const [list, setList] = useState<number[]>([])
    const [clean, setClean] = useState<number>(0)

    const [formData, setFormData] = useState<FormData>({
        posicao: undefined,
        valor: undefined
    })
    const [removeItem, setRemoveItem] = useState<number>()

    async function getList() {
        try {
            const res = await api.listLSE()
            setList(res.data)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    function handleChange({ target }: any) {
        setFormData({ ...formData, [target.name]: target.value })
    }

    async function save(e: any) {
        e.preventDefault()
        try {
            await api.saveLSE(formData)
            setFormData({
                posicao: 0,
                valor: 0
            })
            updatePage()
        } catch (error) {
            console.log(error)
        }
    }

    async function remove(e: any) {
        e.preventDefault()
        try {
            await api.removeLSE(removeItem!)
            setRemoveItem(0)
            updatePage()
        } catch (error) {
            console.log(error)
        }
    }

    function updatePage() {
        setClean(Math.floor(Math.random() * (1 - 100 + 1)) + 1)
    }

    useEffect(() => {
        getList()
    }, [clean])

    return (
        <div className="flex flex-col items-center">
            <ContentTitle>Lista simplismente encadeada</ContentTitle>
            <div className="flex">
                <FormContainer title="Adicionar">
                    <form className="flex font-principal flex-col align-center w-40 p-3 border-2 border-yellow rounded-b-lg rounded-tr-lg"
                        onSubmit={save}>
                        <input className='flex  bg-slate-200 focus:outline-none p-2 my-2 rounded-lg'
                            type="number"
                            placeholder="Posição"
                            onChange={(e: any) => handleChange(e)}
                            name="posicao"
                            value={formData.posicao}
                            required
                        />
                        <input className='flex bg-slate-200 focus:outline-none p-2 rounded-lg'
                            type="number"
                            placeholder="Valor"
                            onChange={(e: any) => handleChange(e)}
                            name="valor"
                            value={formData.valor}
                            required
                        />
                        <button className="flex items-center justify-center font-principal text-2xl mt-6 text-white  bg-green-500  py-1 rounded-lg hover:opacity-70 transition duration-500">
                            Salvar
                        </button>
                    </form>
                </FormContainer>
                <FormContainer title="Remover">
                    <form className="flex font-principal flex-col align-center w-40 p-3 border-2 border-yellow rounded-b-lg rounded-tr-lg"
                        onSubmit={remove}>
                        <input className='flex  bg-slate-200 focus:outline-none p-2 my-2 rounded-lg'
                            type="number"
                            placeholder="Posição"
                            onChange={(e: any) => setRemoveItem(parseInt(e.target.value))}
                            name="posicao"
                            value={removeItem}
                            required
                        />
                        <button className="flex items-center justify-center font-principal text-2xl mt-6 text-white  bg-red-500  py-1 rounded-lg hover:opacity-70 transition duration-500">
                            Remover
                        </button>
                    </form>
                </FormContainer>
            </div>
            <div className="flex my-10">
                {list.map(item => <h1 className="flex m-5">{item}</h1>)}
            </div>
        </div >
    )
}