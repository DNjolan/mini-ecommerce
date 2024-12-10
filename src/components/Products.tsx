import { useContext } from 'react'
import '../styles/Products.css'
import { CartContext } from '../context/cartContext'
import { TypePatherProducts } from '../type/type'

// type TypePatherProducts = {
//     products: Array<TypeProducts>
//     children: ReactNode
// }

// type TypeProducts = {
//     id: number,
//     title: string,
//     price: number,
//     images: string,
//     category: string
// }

export const Products: React.FC<TypePatherProducts> = ({ products, children }) => {
    const {handleChangeCart} = useContext(CartContext)!

    return(
        <>
        {children}
        <main className="containerMain">
            <ul>
                {products.map((product) => {
                    return(
                        <li key={product.id}>
                            <h3>{product.title}</h3>
                            <img
                                src={product.images}
                                alt={product.title}
                            />
                            <p>Precio: ${product.price}</p>
                            <button onClick={() => handleChangeCart(product.id, products)}>Agregar al carro</button>
                        </li>
                    )
                })}
            </ul>
        </main>
        </>
    )
}