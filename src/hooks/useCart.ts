import {  useState } from "react"

type TypeProducts = {
    id: number,
    title: string,
    price: number,
    images: string,
    category: string
}

export default function useCart() {
    const [cart, setCart] = useState<TypeProducts[]>([])
    
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
        console.log('Delete ', idProd)
    }

    // useEffect(() => {
    //     console.log('Carrito de compra: ', cart)
    // }, [cart])

    return {cart, handleChangeCart, handleDeleteProdCart}
}