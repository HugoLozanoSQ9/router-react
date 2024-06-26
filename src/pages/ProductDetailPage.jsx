import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProduct } from "../api"
import { toast } from "sonner"

export default function ProductDetailPage() {
    const { id } = useParams() //Este id lo jalamos desde el main (de products/:id)
    const [product, setProduct] = useState({})

    useEffect(() => {
        const token = localStorage.getItem("Token")
        if (!token) {
            toast.error("Debes iniciar sesión para ver el producto :D!")
            navigate("/login")
            return
        }
        getProduct(id)
            .then((prod) => {
                setProduct(prod)
            })
            .catch((error) => {
                toast.error("Error al obtener el proucto")
                console.error("[getProduct error]", error)
            })
        //fetch al product by id
    }, [id])

    return (
        <main className="p-4 w-full min-h-dvh">
            <h1 className="text-4xl font-semibold text-center "> Producto {id} </h1>

            <section className="flex flex-col gap-3">
                <article className="p-4  flex flex-col items-center gap-4 " >
                    <img src={product.thumbnail} alt={product.title} className="h-[20%] w-[20%] min-h-20" />
                    <p className="text-lg text-center">{product.title}</p>
                    <p className="text-lg "> {product.description}</p>

                    <div className="flex flex-row gap-4 flex-wrap ">

                        <p className="text-lg "> Rating del producto: {product.rating}</p>
                        <p className="text-lg "> Cantidad en stock: {product.stock}</p>
                        <p className="flex gap-2">
                            {
                                product.tags?.map((tag, idx) => {
                                    return (
                                        <span key={`tag-${idx}`} className="bg-white/10 rounded px-1">
                                            {`# ${tag} `}
                                        </span>
                                    )
                                })
                            }
                        </p>

                    </div>


                    <div className="w-full">

                        <h2 className="text-center">Reviews:</h2>

                        <div className="flex flex-wrap gap-4  ">
                            {

                                product.reviews?.map((review, idx) => {
                                    return (
                                        <div className="bg-white/10 rounded p-2 flex gap-1 flex-col w-full sm:w-[45%] md:w-[40%] lg:w-[32%]" >
                                            <h3 className="text-3xl">{review.reviewerName}</h3>
                                            <h3 className="text-xs">Rating: {review.rating} Owo's</h3>
                                            <p className="text-xs">Comment: {review.comment}</p>
                                            <p className="text-xs">email: {review.reviewerEmail}</p>
                                        </div>
                                    )
                                })
                            }

                        </div>


                    </div>





                </article>
            </section>

        </main>
    )
}