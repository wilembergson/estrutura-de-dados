import axios from "axios";

const URL = 'http://localhost:8080'

type NewData = {
    posicao?: number | undefined,
    valor?: number | undefined
}

type ObterItem = {
    pos?: number | undefined,
    val?: number | undefined
}

//LISTA SEQUENCIAL ENDPOINTS
async function listSequencial() {
    return await axios.get(`${URL}/lista-sequencial/obterlista`)
}

async function saveSequencial(data: NewData) {
    await axios.post(`${URL}/lista-sequencial/adicionar`, data)
}

async function removeSequencial(data: number) {
    await axios.delete(`${URL}/lista-sequencial/remover/${data}`)
}

async function obterSequencial(value: string) {
    return await axios.get(`${URL}/lista-sequencial/obter-item?${value}`)
}

async function obterTamanhoMax() {
    return await axios.get(`${URL}/lista-sequencial/tamanho-max`)
}

async function setTamanhoMax(tamanho: number) {
    return await axios.post(`${URL}/lista-sequencial/tamanho-max`, {
        tamanho 
    })
}


//LSE ENDPOINTS
async function listLSE() {
    return await axios.get(`${URL}/lista-encadeada/obterlista`)
}

async function saveLSE(data: NewData) {
    console.log(data)
    await axios.post(`${URL}/lista-encadeada/adicionar`, data)
}

async function removeLSE(data: number) {
    await axios.delete(`${URL}/lista-encadeada/remover/${data}`)
}

async function obterLSE(value: string) {
    return await axios.get(`${URL}/lista-encadeada/obter-item?${value}`)
}

const api = {
    listLSE,
    saveLSE,
    removeLSE,
    obterLSE,
    listSequencial,
    saveSequencial,
    removeSequencial,
    obterSequencial,
    obterTamanhoMax,
    setTamanhoMax
}

export default api