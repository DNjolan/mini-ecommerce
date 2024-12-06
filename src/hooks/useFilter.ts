import { useState } from "react"
// DB

import { products } from '../products/products.json'
export default function useFilter() {
    const [filter, setFilter] = useState({
        price: 0,
        category: 'All'
    })
  
    const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(prevState => ({
            ...prevState,
            price: Number(e.target.value)
        }))
        console.log(e.target.value)
    }
  
    const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(prevState => ({
          ...prevState,
          category: e.target.value
      }))
        console.log(e.target.value)
    }

    const mappedFilterProducts = products.filter(product => {return (
        product.price >= filter.price
        && (product.category === filter.category || filter.category === 'All')
    )})

    return {filter, setFilter, handleChangePrice, handleChangeCategory, mappedFilterProducts}
}