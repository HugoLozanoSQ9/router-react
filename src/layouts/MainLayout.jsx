import { Link, Outlet , useNavigate} from "react-router-dom"

const links = [
    { to: "/", label: "Home", authRequired:false },
    { to: "/productos", label: "Productos" , authRequired:true},
    { to: "/login", label: "Login", authRequired:false }
]



export default function MainLayout() {
    const isAuth = !!localStorage.getItem("Token") //convertimos el valor isAuth a un booleano  (de trusly a true)
    const navigate = useNavigate()

    function handleLogout(){
        localStorage.removeItem("Token")
        navigate("/")
    }

    return (
        <main className="h-full min-h-dvh">
            <nav className="bg-white/50 flex flex-row justify-around text-lg font-semibold">

                {
                    links.map((link)=>{

                        if(link.authRequired && !isAuth)return null
                        if(isAuth && link.to === "/login")return null

                        return (
                            <Link key={`link-${link.to}`} to={link.to} className="hover:bg-black/50 w-full h-full text-center p-4 ">
                            {link.label}
                            </Link>
                        )
                    })
                }
                {isAuth &&(
                    <button onClick={handleLogout} className="w-full hover:bg-black/50 h-full text-center p-4 cursor-pointer"> Log-out</button>
                )}


            </nav>
            {/*  El outlet es un elemento variable (como tal no existe pero se deja un espacio para que se pueda ocupar como children en main.jsx) */}
            <Outlet /> 

                <footer className="w-full bg-teal-600 text-center text-black">
                    Este es el footer
                </footer>


        </main>
    )
}