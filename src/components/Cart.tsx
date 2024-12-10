import { useContext, useState } from "react"
import { CartContext } from "../context/cartContext"
import '../styles/Cart.css'

export default function Cart() {
    const [showCart, setShowCart] = useState(false)
    const {cart, handleDeleteProdCart} = useContext(CartContext)!

    console.log('Render Cart: ', cart)

    return(
    <div className="cartContainer">
        <div>
            <label htmlFor="cart" onClick={() => setShowCart(!showCart)}>Carrito</label>
            <input
                id="cart"
                type="checkbox"
                hidden
        />
        </div>
        {showCart && !cart.length && <p>No hay productos en el carrito</p>}
        {showCart && cart &&
        <aside>
            <ul>
                {cart.map((product) => {
                    return(
                        <li key={product.id}>
                            <h3>{product.title}</h3>
                            <img
                                src={product.images}
                                alt={product.title}
                            />
                            <p>Precio: ${product.price}</p>
                            <button onClick={() => handleDeleteProdCart(product.id)}>Eliminar</button>
                        </li>
                    )
                })}
            </ul>
        </aside>}
    </div>
    )
}