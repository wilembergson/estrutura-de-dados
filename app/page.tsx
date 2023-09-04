import Header from "./components/Header";
import LSE from "./components/LSE";

export default function Home() {
  return (
    <main className="flex relative min-h-screen w-full h-full flex-col items-center">
      <Header />
      <div className="flex justify-center z-10 w-full h-full  bg-white sm:flex-row flex-col space-between">
        <LSE />
      </div>
    </main>
  )
}
