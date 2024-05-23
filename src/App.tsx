import { Header } from "./components/Header";
import { Ice } from "./components/Ice";
import { Title } from "./components/Title";

import './index.css'
export default function App() {
  return (
    <>
      <Header />

      <div className="container-wrapper">
        <Title content="Nossos sorvetes"/>

        <div className="ices">
          <Ice />
        </div>
      </div>
      
    </>
  )
}
