import { useContext } from 'react'
import '../styles/Header.css'
import { FilterContext } from '../context/filter'

export const Header = () => {
    const {filter, handleChangeCategory, handleChangePrice, handleChangeAsc} = useContext(FilterContext)!

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
                    <label htmlFor="order">Cambiar orden</label>
                    <input
                        type="checkbox"
                        id="order"
                        name="order"
                        checked={filter.sort}
                        onChange={handleChangeAsc}
                    />
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