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
    return await axios.get(`${URL}/lse/obterlista`)
}

async function saveLSE(data: NewData) {
    console.log(data)
    await axios.post(`${URL}/lse/adicionar`, data)
}

async function removeLSE(data: number) {
    await axios.delete(`${URL}/lse/remover/${data}`)
}

async function obterLSE(value: string) {
    return await axios.get(`${URL}/lse/obter-item?${value}`)
}


//LDE ENDPOINTS
async function listLDE() {
    return await axios.get(`${URL}/lde/obterlista`)
}

async function saveLDE(data: NewData) {
    console.log(data)
    await axios.post(`${URL}/lde/adicionar`, data)
}

async function removeLDE(data: number) {
    await axios.delete(`${URL}/lde/remover/${data}`)
}

async function obterLDE(value: string) {
    return await axios.get(`${URL}/lde/obter-item?${value}`)
}

const api = {
    listSequencial,
    saveSequencial,
    removeSequencial,
    obterSequencial,
    obterTamanhoMax,
    setTamanhoMax,
    listLSE,
    saveLSE,
    removeLSE,
    obterLSE,
    listLDE,
    saveLDE,
    removeLDE,
    obterLDE
}

export default api