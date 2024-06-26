import { toast } from "sonner"
import { login } from "../api"
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom"
import { useEffect, useState} from "react"
import clsx from "clsx"


export default function LoginPage() {
    const navigate = useNavigate()
    const [showPassword, setShowPassord] = useState(false)
    const {
        handleSubmit,
        register,
        formState: { errors },
        setError,

    } = useForm()

    async function onSubmit(data) {
        try {
            const token = await login(data.username, data.password)
            if (token) {
                window.localStorage.setItem("Token", token)
                toast.success("Sesión iniciada Owo bienvenido")
                navigate("/productos")
            } else {
                toast.error("Usuario o contraseña incorrectos ")
                setError("root.credentials", { type: "manual", message: "Credenciales invalidas valida tus datos" }) //cuando es para ambos inputs
                //setError("username",{type: "manual", message:"Usuario invalido"})
            }

        } catch (error) {
            toast.error("Error al iniciar sesión", error)
            console.error("[Login error]", error)
        }
    }

    useEffect(() => {
        document.title = "Login"
    }, [])

    function handleSowHidePassword(){
        // if(showPassword){
        //     setShowPassord(false)
        // }else{
        //     setShowPassord(true)
        // }
        setShowPassord(!showPassword)
    }

    return (
        <main className="flex justify-center flex-col gap-4 items-center w-full min-h-dvh">

            <h1 className="text-4xl font-bold text-center ">Login</h1>
            {/* Para registrar  nuestro formulario tenemos que poner el onSubmit y el handleSubmit */}
            <form onSubmit={handleSubmit(onSubmit)} className={clsx("border border-thite/50 rounded p-4 flex flex-col gap-4 max-w-sm w-full", {
                "border-red-500": errors.root?.credentials //null safe accesor
            })} >

                <input type="text" placeholder="nombre de usuario" className="border border-thite/50 rounded p-2 text-black" {...register("username", {
                    required: { value: true, message: "El nombre de usuario es requerido" },
                })} />

                <input type={showPassword ? "text" : "password"} placeholder="contraseña" className="border border-thite/50 rounded p-2 text-black"  {...register("password", {
                    required: true, message: "Contraseña requerida",
                })} />

                <span
                className="text-xs text-white/50 cursor-pointer hover:text-white"
                onClick={handleSowHidePassword}
                >

                {showPassword ? "ocultar":"mostrar"} password

                </span>



                <button className="bg-teal-500 p-4 text-black hover:gb-teal-300 rounded"> Ingresar</button>
                {
                    errors.root?.credentials && <p className="text-red-600 text-center"> Credenciales invalidas</p>
                }

            </form>
        </main>
    )
}