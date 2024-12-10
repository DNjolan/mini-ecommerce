import { createContext, ReactNode } from "react";
import useCart from "../hooks/useCart";

type TypeChildren = {
    children: ReactNode
}

type TypeProducts = {
    id: number,
    title: string,
    price: number,
    images: string,
    category: string
}

type TypeCartContextAll = {
    cart: TypeProducts[],
    handleChangeCart: (idProd: number, products: TypeProducts[]) => void,
    handleDeleteProdCart: (idProd: number) => void
}

export const CartContext = createContext<TypeCartContextAll | undefined>(undefined)

export default function CartProvider({children}: TypeChildren) {
    const {cart, handleChangeCart, handleDeleteProdCart} = useCart()

    return(
        <CartContext.Provider value={{
            cart,
            handleChangeCart,
            handleDeleteProdCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
