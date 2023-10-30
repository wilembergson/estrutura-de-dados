import HeaderItem from "./HeaderItem";

export default function HeaderNav() {
    return (
        <div className="flex text-md ml-20 items-center">
            <HeaderItem route="/sequencial">Sequêncial</HeaderItem>
            <HeaderItem route="/lse">LSE</HeaderItem>
            <HeaderItem route="/lde">LDE</HeaderItem>
            <HeaderItem route="/pilha">Pilha</HeaderItem>
            <HeaderItem route="/fila">Fila</HeaderItem>
            <HeaderItem route="/arvore">Árvore</HeaderItem>
        </div>
    )
}