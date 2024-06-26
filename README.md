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

# Use Effect

    /*
    useEffect() se ejecuta cuando: 
    1.- Al terminar de renderizar el componente
    2.- Al cambiar alguna de sus dependencias    

    Recibe 2 parámentros:
    1.- Funcion a ejecutar (callback)
    2.- Un arreglo de dependencias
    useEffect(()=>{},[])
    */
   //Se ejecuta al terminar de renderizar el componente
   useEffect(()=>{
    console.log("terminó de renderizarse el componente :D!")
   },[])
   //Se ejecuta al cambiar la dependencia count y al terminar de renderizar el componente
   useEffect(()=> {
    console.log("use effect count", count)
   },[count])

   useEffect(()=>{
    console.log("sin dependencias")
   }) //Esto hace que siempre que cambie un estado se va a ejecutar
// loop infinito
//    useEffect(()=>{
//     setCount(count+1)
//     console.log("wooo")
//    }, [count])