import { Link } from "react-router-dom"
export default function HomePage() {
    return (
     
        <div>
            <h1 className="text-4xl font-bold text-center">
                Home Page
            </h1>
                <p className="text-center">
                    This is the home page
                </p>
                <div className="flex flex-col items-center pt-4 gap-2 text-3xl">
                    
                    <Link to="/login" className="bg-white/10 p-3 rounded w-[15%] text-center">Link de login</Link>
                    <Link to="/productos" className="bg-white/10 p-3 rounded w-[15%] text-center">Productos</Link>
                   
                </div>
        </div>

    )
}