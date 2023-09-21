import { Oval } from "react-loader-spinner";

export default function Loading() {
    return (
        <section className="flex mt-40">
            <Oval
                height={120}
                width={120}
                color="#FFBF00"
                secondaryColor="#FFBF00"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                strokeWidth={2}
                strokeWidthSecondary={2}

            />
        </section>
    )
}