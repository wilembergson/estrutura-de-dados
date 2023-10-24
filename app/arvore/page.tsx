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
import Arvore from "../components/arvore";

export default function Pilha() {

    type FormData = {
        valor?: number | undefined
    }

    type ObterItemForm = {
        pos?: number | undefined,
        val?: number | undefined
    }

    const [arvore, setArvore] = useState<any>()
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

    async function getArvore() {
        try {
            const res = await api.listArvore()
            setArvore(res.data)
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
            await api.saveArvore(formData)
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
            await api.removePilha()
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
            const res = await api.obterTopoPilha()
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
        getArvore()
    }, [clean, itemObtido])

    return (
        <div className="flex flex-col w-full items-center align-between">
            <Header>
                <HeaderNav />
            </Header>
            {loading ? <Loading /> : <>
                <ContentTitle>Árvore</ContentTitle>
                <div className="flex justify-between mb-4 w-4/5">
                    <OperationsContainer optionals='flex-col h-100'>
                        <FormContainer title="Adicionar" optionals="mb-6 max-h-52 pb-0">
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
                        <FormContainer title="Remover" optionals="mb-6">
                            <form className="flex relative font-principal w-3/5 align-center w-40 p-3 border-2 border-yellow rounded-b-lg rounded-tr-lg"
                                onSubmit={remove}>
                                <button className="flex items-center justify-center font-principal w-full p-2 text-white  bg-red-500 rounded-lg hover:opacity-70 transition duration-500">
                                    <MdDeleteForever size={44} />
                                </button>
                            </form>
                        </FormContainer>
                        <FormContainer title="Topo">
                            <form className="flex font-principal align-between w-40 p-3 border-2 border-yellow rounded-b-lg rounded-tr-lg"
                                onSubmit={obterItem}>
                                <section className="flex relative flex-col mr-2">
                                </section>
                                <button className="flex items-center justify-center w-full font-principal text-2xl p-2 h-full text-white  bg-blue-500 rounded-lg hover:opacity-70 transition duration-500">
                                    <ImSearch size={40} />
                                </button>
                            </form>
                        </FormContainer>
                    </OperationsContainer>
                    <div className="flex flex-col flex-wrap w-full">
                        {arvore === undefined ?
                            <h1 className="flex font-principal font-black text-gray-clear-2 text-4xl h-full items-center">
                                Árvore vazia
                            </h1>
                            : <div className="flex flex-col items-center">
                                <Arvore>{arvore}</Arvore>
                            </div>
                        }
                    </div>
                </div>
                {itemObtido ?
                    <div className="flex font-principal font-black fixed flex-col items-center right-52 top-1/2 bg-yellow rounded-xl overflow-hidden">
                        <h2 className="text-lime-600 text-xl">Topo</h2>
                        <h1 className="flex font-principal font-black items-center text-8xl p-4 text-yellow bg-lime-600">
                            {itemObtido}
                        </h1>
                    </div> : <></>}
            </>}
        </div >
    )
}