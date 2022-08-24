import styles from './Ordenador.module.scss'
import opcoes from './opcoes.json'
import { useState } from "react"
import classNames from "classnames"
import {MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

interface Props {
  ordenador:string,
  setOrdenador: React.Dispatch<React.SetStateAction<string>>
}

export default function Ordenador({ordenador, setOrdenador}: Props) {
  const [aberto, setAberto] = useState(false)


  return <button 
    className={styles.ordenador} 
    onClick={() => setAberto(!aberto)} 
    onBlur={()=> setAberto(false)}
  >
    <span> Ordenar Por {ordenador ? `:` : `` } {ordenador} </span>
    {aberto ?  < MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown  size={20}/>   }

    <div className={classNames({
        [styles.ordenador__options]:true,
        [styles["ordenador__options--ativo"]]:aberto
    })} 
    > 
      {opcoes.map( opc => (
        <div onClick={()=> setOrdenador(opc.value)}
          key={opc.value}
          className={styles.ordenador__option}
        >
          {opc.nome}
        </div>
      ))}
    </div>

  </button>

}