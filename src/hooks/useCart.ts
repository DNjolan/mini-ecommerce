import {  useEffect, useState } from "react"
import { TypeProducts } from "../type/type"

// type TypeProducts = {
//     id: number,
//     title: string,
//     price: number,
//     images: string,
//     category: string
// }

export default function useCart() {
    const [cart, setCart] = useState<TypeProducts[]>(() => {
        const localCart = window.localStorage.getItem('cartLocal')
        if (localCart?.length) {
            return JSON.parse(localCart)
        }
        return []
    })

    useEffect(() => {
        window.localStorage.setItem('cartLocal', JSON.stringify(cart))
    }, [cart])

    const handleChangeCart = (idProd: number, products: TypeProducts[]) => {
        const filterProd = products.find((prod) => prod.id === idProd)
        const filterProdSome = cart.some((cart)=> cart.id === idProd)
        if (filterProd && !filterProdSome) {
            setCart((prevCart) => {
                const isAlreadyInCart = prevCart.some((prod) => prod.id === idProd);
                if (isAlreadyInCart) {
                    return prevCart;
                }
                return [...prevCart, filterProd]
            })
        }
    }

    const handleDeleteProdCart = (idProd: number) => {
        const newCart = cart.filter((prod) => prod.id !== idProd)
        setCart(newCart)
    }

    return {cart, handleChangeCart, handleDeleteProdCart}
}