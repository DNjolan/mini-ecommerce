import { useState } from "react"

export default function useFilter() {
    const [filter, setFilter] = useState({
        price: 0,
        category: 'All'
    })

    const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter({
            ...filter,
            price: Number(e.target.value)
        })
        console.log(e.target.value)
    }

    const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter({
            ...filter,
            category: e.target.value
        })
        console.log(e.target.value)
    }

    return {filter, setFilter, handleChangePrice, handleChangeCategory}
}