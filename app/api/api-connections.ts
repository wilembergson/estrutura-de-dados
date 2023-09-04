import axios from "axios";

const URL = 'http://localhost:8080'

type NewLSE = {
    posicao?: number | undefined,
    valor?: number | undefined
}

async function listLSE(){
    return await axios.get(`${URL}/lista-encadeada/obterlista`)
}

async function saveLSE(data: NewLSE) {
    await axios.post(`${URL}/lista-encadeada/adicionar`, data)
}

async function removeLSE(data: number) {
    await axios.delete(`${URL}/lista-encadeada/remover/${data}`)
}

const api = {
    listLSE,
    saveLSE,
    removeLSE
}

export default api