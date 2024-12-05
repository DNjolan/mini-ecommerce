import { Products } from "./components/Products";
// DB
import { products } from './products/products.json'

export default function App() {
  return(
    <Products products={products}/>
  )
}