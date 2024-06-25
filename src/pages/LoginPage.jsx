import { toast } from "sonner"
import { login } from "../api"
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function LoginPage() {
    const navigate = useNavigate()

    const {
        handleSubmit,
        register,
        formState: { errors },

    } = useForm()

    async function onSubmit(data) {
        try {
            const token = await login(data.username, data.password)
            if (token) {
                window.localStorage.setItem("Token", token)
                toast.success("Sesión iniciada Owo bienvenido")
                navigate("/productos")
            }else{
                toast.error("Error al iniciar sesión")

            }

        } catch (error) {
            toast.error("Error al iniciar sesión", error)
            console.error("[Login error]", error)
        }
    }

    useEffect(()=>{
        document.title = "Login"
    },[])

    return (
        <main className="flex justify-center flex-col gap-4 items-center w-full min-h-dvh">

            <h1 className="text-4xl font-bold text-center ">Login</h1>
            {/* Para registrar  nuestro formulario tenemos que poner el onSubmit y el handleSubmit */}
            <form onSubmit={handleSubmit(onSubmit)} className="border border-thite/50 rounded p-4 flex flex-col gap-4 max-w-sm w-full" >

                <input type="text" placeholder="nombre de usuario" className="border border-thite/50 rounded p-2 text-black" {...register("username", {
                    required: { value: true, message: "El nombre de usuario es requerido" },
                })} />

                <input type="password" placeholder="contraseña" className="border border-thite/50 rounded p-2 text-black"  {...register("password", {
                    required: true, message: "Contraseña requerida",
                })} />

                <button className="bg-teal-500 p-4 text-black hover:gb-teal-300 rounded"> Ingresar</button>


            </form>
        </main>
    )
}