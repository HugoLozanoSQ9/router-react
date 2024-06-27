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


# Next.js
El framework de react
hacer renderizado por parte del servidor 

Existe Next y Remix  para react

Para no solamente react podemos ocupar astro 
sveltkit para svelt
Vue --> nuxt

Objetivo :
-Conocer Next.js
-Saber cuando y por qué usarlo
-Entender que porblemas soluciona


Front end y sus inicios...

HTML CSS JS

### Modelo cliente servidor

(req, res)
Cliente manda una req, el servidor genera una res respondiendo el trio HTML CSS y Js

## Estrategias de renderizado

Client Side Rendering 

-Cargar todo el contenido del lado del cliente
-Suele ser más lento 
-Carga mucho más js al cliente
-Malo para el SEO 

Server Side Rendering (Entrega el HTML ya renderizado)
-Generar el contenido en el servidor
-Minimiza la carga para el cliente
-Aún puede ser una página interactiva que carga información de lado del cliente
-Bueno para el SEO 

Static Site Generation

-Generar el contenido en el servidor
-Vuelve casi nula la carga para el cliente
-Suele ser el más rápido de todos
-No deja cargar más contenido a la página más allá del original
-Buenisimo para el SEO 
(el server entrega el achivo que ya estaba hecho)
(No se pueden personalizar los archivos a solicitud del cliente)

## NEXT sirve para las 3
¿Por qué esto es importante? 
-Velocidad de carga = más ventas
-SEO 
-Entender que problemas resuelve

¿Que es NEXT?
Es un framework de react

