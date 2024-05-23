import { ShoppingCartSimple } from "phosphor-react";
import './style.css'
export function Ice() {
  return(
    <div className="ice">
      <img src="/assets/cremoso-1.png" />


      <p className="tags">Cremoso</p>
      <p className="name">Sorvete Cremoso</p>

      <footer className="ice-footer">
        <strong className="price">Kz 990</strong>
        <button className="buttonAddToCart">
          <ShoppingCartSimple />
        </button>
      </footer>
    </div>
  )
}