import axios from "axios";

const URL = 'http://localhost:8080'

type NewLSE = {
    posicao?: number | undefined,
    valor?: number | undefined
}

type ObterItem = {
    pos?: number | undefined,
    val?: number | undefined
}

async function listLSE() {
    return await axios.get(`${URL}/lista-encadeada/obterlista`)
}

async function saveLSE(data: NewLSE) {
    console.log(data)
    await axios.post(`${URL}/lista-encadeada/adicionar`, data)
}

async function removeLSE(data: number) {
    await axios.delete(`${URL}/lista-encadeada/remover/${data}`)
}

async function obterLSE(data: ObterItem) {
    console.log(data)
    return await axios.get(`${URL}/lista-encadeada/obter-item/${data.pos}`)
}

const api = {
    listLSE,
    saveLSE,
    removeLSE,
    obterLSE
}

export default api