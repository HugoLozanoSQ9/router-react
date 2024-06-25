import { Link } from "react-router-dom"
export default function HomePage() {
    return (
     
        <div>
            <h1 className="text-4xl font-bold text-center">
                Hoome Page
            </h1>
                <p className="text-center">
                    This is the home page
                </p>
                <div>
                    
                    <Link to="/login">Link de login</Link>
                    <Link to="/productos">Productos</Link>
                    <Link to="/productos/123">Producto 123</Link>
                </div>
        </div>

    )
}