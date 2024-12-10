import { useContext } from "react";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
// CustomeHooks
import { FilterContext } from "./context/filter";
import Cart from "./components/Cart";
import CartProvider from "./context/cartContext";



export default function App() {
  const {mappedFilterAsc} = useContext(FilterContext)!
  // const {cart} = useContext(CartContext)!

  return(
    <>
    <Header/>
    <CartProvider>
      <Products products={mappedFilterAsc}>
        <Cart />
      </Products>
    </CartProvider>
    </>
  )
}