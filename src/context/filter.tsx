import { createContext } from "react";
import useFilter from "../hooks/useFilter";
import { TypeChildren, FilterContextType } from '../type/type'

// type FilterContextType = {
//     filter: {
//         category: string,
//         price: number,
//         sort: boolean
//     },
//     handleChangeCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void,
//     handleChangePrice: (e: React.ChangeEvent<HTMLInputElement>) => void,
//     handleChangeAsc: (e: React.ChangeEvent<HTMLInputElement>) => void,
//     mappedFilterAsc: TypeProducts[]
// }

export const FilterContext = createContext<FilterContextType | undefined>(undefined)

export default function FilterProvider ({ children }: TypeChildren) {
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