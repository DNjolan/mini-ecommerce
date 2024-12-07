import { createContext, ReactNode } from "react";
import useFilter from "../hooks/useFilter";

type TypeProducts = {
    id: number,
    title: string,
    price: number,
    images: string,
    category: string
}

type FilterContextType = {
    filter: {
        category: string,
        price: number,
        sort: boolean
    },
    handleChangeCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    handleChangePrice: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleChangeAsc: (e: React.ChangeEvent<HTMLInputElement>) => void,
    mappedFilterAsc: TypeProducts[]
  }

interface ChildrenProviderPros {
    children: ReactNode
}

export const FilterContext = createContext<FilterContextType | undefined>(undefined)

export default function FilterProvider ({ children }: ChildrenProviderPros) {
    const {
        filter,
        handleChangeCategory,
        handleChangePrice,
        handleChangeAsc,
        mappedFilterAsc
    } = useFilter()

    return(
        <FilterContext.Provider value={{
            filter,
            handleChangeCategory,
            handleChangePrice,
            handleChangeAsc,
            mappedFilterAsc
        }}>
            {children}
        </FilterContext.Provider>
    )
}