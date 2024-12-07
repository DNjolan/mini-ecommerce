import { useContext } from "react";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
// CustomeHooks
import { FilterContext } from "./context/filter";

export default function App() {
  const {mappedFilterAsc} = useContext(FilterContext)!
  
  return(
    <>
    <Header/>
    <Products products={mappedFilterAsc}/>
    </>
  )
}