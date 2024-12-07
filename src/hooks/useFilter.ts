import { useState } from "react"
// DB
import { products } from '../products/products.json'

export default function useFilter() {
    const [filter, setFilter] = useState({
        price: 0,
        category: 'All',
        sort: false
    })
  
    const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(prevState => ({
            ...prevState,
            price: Number(e.target.value)
        }))
    }
  
    const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(prevState => ({
          ...prevState,
          category: e.target.value
      }))
    }

    const handleChangeAsc = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(prevState => ({
          ...prevState,
          sort: e.target.checked
      }))
    }

    const mappedProducts = products.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        images: product.images,
        category: product.category
    }))

    const mappedFilterProducts = mappedProducts.filter(product => {return (
        product.price >= filter.price
        && (product.category === filter.category || filter.category === 'All')
    )})

    let mappedFilterAsc
    if (filter.sort) {
        mappedFilterAsc = mappedFilterProducts.sort((a, b) => {return b.price- a.price})
    } else {
        mappedFilterAsc = mappedFilterProducts.sort((a, b) => {return a.price - b.price})
    }
    return {filter, setFilter, handleChangePrice, handleChangeCategory, handleChangeAsc, mappedFilterAsc}
}