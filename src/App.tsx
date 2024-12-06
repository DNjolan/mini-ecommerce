import { Header } from "./components/Header";
import { Products } from "./components/Products";
// CustomeHooks
import useFilter from "./hooks/useFilter";

export default function App() {
  const {filter, handleChangeCategory, handleChangePrice, mappedFilterProducts} = useFilter()
  
  return(
    <>
    <Header filter={filter} handleChangePrice={handleChangePrice} handleChangeCategory={handleChangeCategory}/>
    <Products products={mappedFilterProducts}/>
    </>
  )
}