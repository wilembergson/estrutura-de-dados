'use client'
import { BsArrowBarRight, BsArrowLeftRight, BsListTask } from "react-icons/bs";
import Header from "./components/Header";
import MainItem from "./components/MainItem";

export default function Home() {
  return (
    <main className="flex relative min-h-screen w-full h-full flex-col items-center">
      <Header />
      <div className="flex justify-center z-10 w-full h-full p-16 bg-white sm:flex-row flex-col space-between">
        <MainItem route="/sequencial">
          <BsListTask size={72} />
          Sequencial
        </MainItem>
        <MainItem route="/lse">
          <BsArrowBarRight size={52} />
          <h1 className="mt-4">LSE</h1>
        </MainItem>
        <MainItem route="/">
          <BsArrowLeftRight size={52} />
          <h1 className="mt-4">LDE</h1>
        </MainItem>
      </div>
    </main>
  )
}
