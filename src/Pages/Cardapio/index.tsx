import { useState } from "react"
import styles from './Cardapio.module.scss'
import { ReactComponent as Logo} from 'assets/logo.svg'
import Buscador from "./Buscador"
import Filtros from "Pages/Buscador/Filtros"
import Ordenador from "Pages/Carrinho/Ordenador"
import Itens from "./Itens"

const Cardapio = () => {
  const [busca, setBusca] = useState<string>("")
  const [filtro, setFiltro] = useState<number| null  >(null)
  const [ordenador, setOrdenador] = useState<string>("")
  return <main>

    <nav className={styles.menu}> 
      <Logo/>
    </nav>

    <header className={styles.header}>

      <div className={styles.header__text}>
        A casa da massa do lugar
      </div>

    </header>

    <section className={styles.cardapio}>
      <h3 className={styles.cardapio__titulo}>Cardápio</h3>
      
      <Buscador busca={busca} setBusca={setBusca}  />
      
      <div className={styles.cardapio__filtros}>
        <Filtros
          filtro={filtro}
          setFiltro={setFiltro}
        />

        <Ordenador 
          ordenador={ordenador}
          setOrdenador={setOrdenador}
        />

      </div>
      
      <Itens 
        busca={busca}  
        filtro={filtro}
        ordenador={ordenador}  
      />

    </section>



  </main>

} 

export default Cardapio