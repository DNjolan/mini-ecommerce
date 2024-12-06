import '../styles/Header.css'

type TypeFilter = {
    filter: {
        category: string,
        price: number
    },
    handleChangePrice: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleChangeCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const Header: React.FC<TypeFilter> = ({filter, handleChangePrice, handleChangeCategory}) => {
    return(
        <header className="containerHeader">
            <h1>E-Commerce</h1>
            <section>
                <div>
                    <label htmlFor="price">Precio</label>
                    <input
                        type="range"
                        id="price"
                        name="price"
                        min="0"
                        max="1000"
                        onChange={handleChangePrice}
                        value={filter.price}
                    />
                    <span>{filter.price}</span>
                </div>
                <div>
                    <label htmlFor="category">Categoría</label>
                    <select
                        name="category"
                        id="category"
                        onChange={handleChangeCategory}
                    >
                        <option value="All">Todos</option>
                        <option value="laptops">Portátiles</option>
                        <option value="smartphones">Teléfonos</option>
                    </select>
                </div>
            </section>
        </header>
    )
}