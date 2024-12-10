import { ReactNode } from "react"

export type TypeChildren = {
    children: ReactNode
}

export type TypeProducts = {
    id: number,
    title: string,
    price: number,
    images: string,
    category: string
}

export type TypeCartContextAll = {
    cart: TypeProducts[],
    handleChangeCart: (idProd: number, products: TypeProducts[]) => void,
    handleDeleteProdCart: (idProd: number) => void
}

export type TypePatherProducts = {
    products: Array<TypeProducts>
    children: ReactNode
}

export type FilterContextType = {
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