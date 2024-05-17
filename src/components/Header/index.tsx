import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import './style.css'
export function Header() {
  return (
    <header className="header-container">
      <h1 className="logo">
        <a href="#">IceShop</a>
      </h1>

      <div className="header-buttons">
        <button className='button-variant-primary'>
          <MapPin size={20}/>
          <span>Luanda, Angola</span>
        </button>

        <button className="button-variant-secondary">
          <ShoppingCartSimple weight='fill' size={20}/>
          <span>0</span>
        </button>
      </div>
    </header>
  )
}