import HeaderItem from "./HeaderItem";

export default function HeaderNav() {
    return (
        <div className="flex text-md ml-20 items-center">
            <HeaderItem route="/sequencial">Sequêncial</HeaderItem>
            <HeaderItem route="/lse">LSE</HeaderItem>
            <HeaderItem route="/">LDE</HeaderItem>
        </div>
    )
}