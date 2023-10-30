'use client'
import { BsArrowBarRight, BsArrowLeftRight, BsListTask } from "react-icons/bs";
import { HiMiniQueueList } from 'react-icons/hi2'
import { TfiLayoutColumn4Alt } from 'react-icons/tfi'
import { TbBinaryTree } from 'react-icons/tb'
import Header from "./components/Header";
import MainItem from "./components/MainItem";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <main className="flex relative min-h-screen w-full h-full flex-col items-center">
      <Header />
      {loading ? <Loading /> :
        <div className="flex flex-wrap justify-center w-2/3 h-full p-16 bg-white sm:flex-row flex-col space-between">
          <MainItem load={setLoading} route="/sequencial">
            <BsListTask size={72} />
            Sequencial
          </MainItem>
          <MainItem load={setLoading} route="/lse">
            <BsArrowBarRight size={52} />
            <h1 className="mt-4">LSE</h1>
          </MainItem>
          <MainItem load={setLoading} route="/lde">
            <BsArrowLeftRight size={52} />
            <h1 className="mt-4">LDE</h1>
          </MainItem>
          <MainItem load={setLoading} route="/pilha">
            <HiMiniQueueList size={52} />
            <h1 className="mt-4">Pilha</h1>
          </MainItem>
          <MainItem load={setLoading} route="/fila">
            <TfiLayoutColumn4Alt size={52} />
            <h1 className="mt-4">Fila</h1>
          </MainItem>
          <MainItem load={setLoading} route="/arvore">
            <TbBinaryTree size={52} />
            <h1 className="mt-4">Árvore</h1>
          </MainItem>
        </div>
      }
    </main>
  )
}
