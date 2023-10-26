import axios from "axios";

const URL = 'http://localhost:8080'

type NewData = {
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

//PILHA ENDPOINTS
async function listPilha() {
    return await axios.get(`${URL}/pilha/obter-pilha`)
}

async function savePilha(data: NewData) {
    console.log(data)
    await axios.post(`${URL}/pilha/adicionar`, data)
}

async function removePilha() {
    await axios.delete(`${URL}/pilha/remover-topo`)
}

async function obterTopoPilha() {
    return await axios.get(`${URL}/pilha/obter-topo`)
}

//FILA ENDPOINTS
async function listFila() {
    return await axios.get(`${URL}/fila/obter-fila`)
}

async function saveFila(data: NewData) {
    console.log(data)
    await axios.post(`${URL}/fila/adicionar`, data)
}

async function removeFila() {
    await axios.delete(`${URL}/fila/remover`)
}

async function obterInicioFila() {
    return await axios.get(`${URL}/fila/obter-primeiro`)
}

//ARVORE ENDPOINTS
async function listArvore() {
    return await axios.get(`${URL}/arvore/listar`)
}

async function saveArvore(data: NewData) {
    await axios.post(`${URL}/arvore/adicionar`, data)
}

async function obterArvore(value: string) {
    return await axios.get(`${URL}/arvore/obter/${value}`)
}

async function removeArvore(value: string) {
    return await axios.delete(`${URL}/arvore/delete/${value}`)
}

async function preOrdem() {
    return await axios.get(`${URL}/arvore/preordem`)
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
    obterLDE,
    listPilha,
    savePilha,
    removePilha,
    obterTopoPilha,
    listFila,
    saveFila,
    removeFila,
    obterInicioFila,
    listArvore,
    saveArvore,
    obterArvore,
    removeArvore,
    preOrdem
}

export default api