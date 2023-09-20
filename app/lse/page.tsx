'use client'

import { useEffect, useState } from "react";
import ContentTitle from "../components/ContentTitle";
import api from "../api/api-connections";
import FormContainer from "../components/FormContainer";
import ListItem from "../components/ListItem";
import { BsPlusCircleFill } from 'react-icons/bs'
import { MdDeleteForever } from 'react-icons/md'
import { ImSearch } from 'react-icons/im'
import Header from "../components/Header";
import HeaderNav from "../components/HeaderNav";
import OperationsContainer from "../components/OperationsContainer";
import alerts from "../utils/alerts";

export default function LSE() {

    type FormData = {
        posicao?: number | undefined,
        valor?: number | undefined
    }

    type ObterItemForm = {
        pos?: number | undefined,
        val?: number | undefined
    }

    const [list, setList] = useState<number[]>([])
    const [clean, setClean] = useState<number>(0)

    const [formData, setFormData] = useState<FormData>({
        posicao: undefined,
        valor: undefined
    })
    const [removeItem, setRemoveItem] = useState<number>()
    const [obterItemForm, setObterItemForm] = useState<ObterItemForm>({
        pos: undefined,
        val: undefined
    })
    const [itemObtido, setItemObtido] = useState<number | undefined>()

    async function getList() {
        try {
            const res = await api.listLSE()
            setList(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    function handleChange({ target }: any) {
        setFormData({ ...formData, [target.name]: target.value })
    }

    function handleChangeItem({ target }: any) {
        setObterItemForm({ ...obterItemForm, [target.name]: target.value })
    }

    async function save(e: any) {
        e.preventDefault()
        try {
            console.log(formData)
            await api.saveLSE(formData)
            setFormData({
                posicao: 0,
                valor: 0
            })
            updatePage()
        } catch (error: any) {
            alerts.showErrorAlert(error.response.data)
        }
    }

    async function remove(e: any) {
        e.preventDefault()
        try {
            await api.removeLSE(removeItem!)
            setRemoveItem(0)
            updatePage()
        } catch (error: any) {
            alerts.showErrorAlert(error.response.data)
        }
    }


    const [selectedOption, setSelectedOption] = useState('');
    const [posOrVal, setPosOrVal] = useState<number | undefined>(undefined)
    const handleOptionChange = (e: any) => {
        setSelectedOption(e.target.value);
    };

    async function obterItem(e: any) {
        e.preventDefault()
        try {
            const value = `${selectedOption}${posOrVal}`
            const res = await api.obterLSE(value)
            console.log(res.data)
            setItemObtido(res.data)
            updatePage()
        } catch (error: any) {
            alerts.showErrorAlert(error.response.data)
            setItemObtido(undefined)
        }
    }

    function updatePage() {
        setClean(Math.floor(Math.random() * (1 - 100 + 1)) + 1)
    }

    useEffect(() => {
        getList()
    }, [clean, itemObtido])

    return (
        <div className="flex flex-col w-full items-center align-between">
            <Header>
                <HeaderNav />
            </Header>
            <ContentTitle>Lista simplismente encadeada</ContentTitle>
            <OperationsContainer>
                <FormContainer title="Adicionar">
                    <form className="flex font-principal w-3/5 align-between w-40 p-3 border-2 border-yellow rounded-b-lg rounded-tr-lg"
                        onSubmit={save}>
                        <section className="flex relative flex-col mr-2">
                            <input className='flex  w-full bg-slate-200 focus:outline-none mb-2 p-2  rounded-lg'
                                type="number"
                                placeholder="Posição"
                                onChange={(e: any) => handleChange(e)}
                                name="posicao"
                                value={formData.posicao}
                                required
                            />
                            <input className='flex bg-slate-200 w-full focus:outline-none p-2 rounded-lg'
                                type="number"
                                placeholder="Valor"
                                onChange={(e: any) => handleChange(e)}
                                name="valor"
                                value={formData.valor}
                                required
                            />
                        </section>
                        <button className="flex items-center justify-center font-principal text-2xl px-2 h-full text-white  bg-green-500  py-1 rounded-lg hover:opacity-70 transition duration-500">
                            <BsPlusCircleFill size={42} />
                        </button>
                    </form>
                </FormContainer>
                <FormContainer title="Remover">
                    <form className="flex relative font-principal w-3/5  h-full align-center w-40 p-3 border-2 border-yellow rounded-b-lg rounded-tr-lg"
                        onSubmit={remove}>
                        <input className='flex  w-full bg-slate-200 focus:outline-none p-2 mr-2 rounded-lg'
                            type="number"
                            placeholder="Posição"
                            onChange={(e: any) => setRemoveItem(parseInt(e.target.value))}
                            name="posicao"
                            value={removeItem}
                            required
                        />
                        <button className="flex items-center justify-center font-principal text-2xl px-2 h-full text-white  bg-red-500  py-1 rounded-lg hover:opacity-70 transition duration-500">
                            <MdDeleteForever size={44} />
                        </button>
                    </form>
                </FormContainer>
                <FormContainer title="Pesquisar">
                    <form className="flex font-principal align-between w-40 p-3 border-2 border-yellow rounded-b-lg rounded-tr-lg"
                        onSubmit={obterItem}>
                        <section className="flex relative flex-col mr-2">
                            <input className='flex  w-full bg-slate-200 focus:outline-none mb-2 p-2  rounded-lg'
                                type="number"
                                placeholder="Posição"
                                onChange={(e: any) => setPosOrVal(e.target.value)}
                                name="posOrVal"
                                value={posOrVal}
                                required
                            />
                        </section>
                        <button className="flex items-center justify-center font-principal text-2xl px-2 h-full text-white  bg-blue-500  py-1 rounded-lg hover:opacity-70 transition duration-500">
                            <ImSearch size={40} />
                        </button>
                    </form>
                    <div className="flex font-principal font-black text-gray justify-between mt-2">
                        <label className="hover:cursor-pointer">
                            <input className="hover:cursor-pointer"
                                type="radio"
                                value="pos="
                                checked={selectedOption === 'pos='}
                                onChange={handleOptionChange}
                            />
                            Posição
                        </label>
                        <label className="hover:cursor-pointer">
                            <input className="hover:cursor-pointer"
                                type="radio"
                                value="val="
                                checked={selectedOption === 'val='}
                                onChange={handleOptionChange}
                            />
                            Valor
                        </label>
                    </div>
                </FormContainer>
                <h1 className="flex font-principal font-black items-center text-6xl p-4 rounded-xl mx-6 text-yellow bg-lime-600">
                    {itemObtido ? itemObtido : 'N'}
                </h1>
            </OperationsContainer>
            <div className="flex justify-center my-16 flex-wrap w-5/6">
                {list.length !== 0 ?
                    list.map((item: any) => <ListItem selectedItem={item.conteudo === itemObtido ? true : false}>{item}</ListItem>)
                    : <h1 className="flex font-principal font-black text-gray-clear-2 text-4xl">
                        Lista vazia
                    </h1>}
            </div>
        </div >
    )
}