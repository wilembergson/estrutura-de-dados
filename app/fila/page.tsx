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
import { useGlobalContext } from "../context/global-context";
import Loading from "../components/Loading";
import ListItemLDE from "../components/ListItemLDE";
import PilhaItem from "../components/PilhaItem";
import FilaItem from "../components/FilaItem";

export default function Fila() {

    type FormData = {
        valor?: number | undefined
    }

    type ObterItemForm = {
        pos?: number | undefined,
        val?: number | undefined
    }

    const [list, setList] = useState<number[]>([])
    const [clean, setClean] = useState<number>(0)

    const [formData, setFormData] = useState<FormData>({
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
            const res = await api.listFila()
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
            await api.saveFila(formData)
            setFormData({
                valor: 0
            })
            setItemObtido(undefined)
            updatePage()
        } catch (error: any) {
            alerts.showErrorAlert(error.response.data)
        }
    }

    async function remove(e: any) {
        e.preventDefault()
        try {
            await api.removeFila()
            setRemoveItem(0)
            setItemObtido(undefined)
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
            const res = await api.obterInicioFila()
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

    const { loading, setLoading } = useGlobalContext()
    useEffect(() => {
        setLoading(false)
    }, [])

    useEffect(() => {
        getList()
    }, [clean, itemObtido])

    return (
        <div className="flex flex-col w-full items-center align-between">
            <Header>
                <HeaderNav />
            </Header>
            {loading ? <Loading /> : <>
                <ContentTitle>Fila</ContentTitle>
                <div className="flex flex-col items-center mb-4">
                    <OperationsContainer optionals="w-full">
                        <FormContainer title="Adicionar">
                            <form className="flex font-principal w-3/5 align-between w-40 p-3 border-2 border-yellow rounded-b-lg rounded-tr-lg"
                                onSubmit={save}>
                                <section className="flex relative flex-col mr-2">
                                    <input className='flex bg-slate-200 w-full focus:outline-none p-2 rounded-lg'
                                        type="number"
                                        placeholder="Valor"
                                        onChange={(e: any) => handleChange(e)}
                                        name="valor"
                                        value={formData.valor}
                                        required
                                    />
                                </section>
                                <button className="flex items-center justify-center font-principal text-2xl p-2 h-full text-white  bg-green-500 rounded-lg hover:opacity-70 transition duration-500">
                                    <BsPlusCircleFill size={42} />
                                </button>
                            </form>
                        </FormContainer>
                        <FormContainer title="Remover">
                            <form className="flex relative font-principal w-3/5 align-center w-40 p-3 border-2 border-yellow rounded-b-lg rounded-tr-lg"
                                onSubmit={remove}>
                                <button className="flex items-center justify-center font-principal w-full p-2 text-white  bg-red-500 rounded-lg hover:opacity-70 transition duration-500">
                                    <MdDeleteForever size={44} />
                                </button>
                            </form>
                        </FormContainer>
                        <FormContainer title="Primeiro">
                            <form className="flex font-principal align-between w-40 p-3 border-2 border-yellow rounded-b-lg rounded-tr-lg"
                                onSubmit={obterItem}>
                                <section className="flex relative flex-col mr-2">
                                </section>
                                <button className="flex items-center justify-center w-full font-principal text-2xl p-2 h-full text-white  bg-blue-500 rounded-lg hover:opacity-70 transition duration-500">
                                    <ImSearch size={40} />
                                </button>
                            </form>
                        </FormContainer>
                        {
                            <div className="flex font-principal font-black flex-col w-2xl mx-5 items-center bg-yellow rounded-xl overflow-hidden">
                                <h2 className="text-lime-600 text-xl mx-8">primeiro</h2>
                                <h1 className="flex font-principal font-black w-full justify-center items-center text-6xl p-4 text-yellow bg-lime-600">
                                    {itemObtido ? itemObtido : ' - - '}
                                </h1>
                            </div>}
                    </OperationsContainer>
                    <div className="flex flex-col flex-wrap mt-14">
                        {list.length === 0 ?
                            <h1 className="flex font-principal font-black text-gray-clear-2 text-4xl h-full items-center">
                                Fila vazia
                            </h1>
                            : <div className="flex flex-col items-center rounded-xl bg-gray-clear-2 shadow-md">
                                <div className="flex flex-row rounded-lg justify-center p-1">
                                    {list.map((item: any, index) => <FilaItem selectedItem={(itemObtido === item && index === 0) ? true : false}>
                                        {item}
                                    </FilaItem>)}
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </>}
        </div >
    )
}