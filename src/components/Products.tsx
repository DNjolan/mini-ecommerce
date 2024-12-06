import '../styles/Products.css'

type TypePatherProducts = {
    products: Array<TypeProducts>
}

type TypeProducts = {
    id: number,
    title: string,
    price: number,
    images: string,
    category: string
}

export const Products: React.FC<TypePatherProducts> = ({ products }) => {

    return(
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
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}