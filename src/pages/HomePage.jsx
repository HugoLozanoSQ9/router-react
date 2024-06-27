import { Link } from "react-router-dom"
import PageSection from "../components/PageSection"
import clsx from "clsx"
export default function HomePage() {
    return (

        <div>
            <h1 className="text-4xl font-bold text-center">
                Home Page
            </h1>
            <p className="text-center">
                This is the home page
            </p>
            <PageSection title="Un titulo" >
                <h2>Vendemos de todo :D!</h2>
            </PageSection>

            <PageSection title="Una imagen" className={clsx("bg-pink-600")} contentClassName={clsx("bg-teal-300")}>
                <div className="w-full grid grid-cols-2 gap-2 bg-green-500">
                    <img src="https://icons.veryicon.com/png/o/miscellaneous/home-icon-1/house-30.png" alt="" />
                    <p>Hola soy un texto owo</p>

                </div>
            </PageSection>
            
        </div>

    )
}