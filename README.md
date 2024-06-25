# React router

Como crear rutas "virtuales" en una misma página

# Planitlla que usamos pa los formularios jeje 

import { login } from "../api"
import { useForm } from 'react-hook-form'


export default function LoginPage() {

    const {
        handleSubmit,
        register,
        formState: { errors },

    } = useForm()

    function onSubmit(data){

    }

    return (
        // Para registrar  nuestro formulario tenemos que poner el onSubmit y el handleSubmit
        <form onSubmit={handleSubmit(onSubmit)} >
            <input type="text" {...register("username",{
                required: {value: true, message: "El nombre de usuario es requerido"},
            })} />
            <input type="password" {...register("password", {
                required:true, message: "Contraseña requerida",
            })} />
            
            <button> Ingresar</button>


        </form>
    )
}