import filtros from './filtros.json'
import styles from './Filtros.module.scss'
import classNames from 'classnames'

// type opcao = typeof filtros[0]

interface IOpcao {
  id:number;
  label:string;
}

interface Props {
  filtro:number|null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}


export default function Filtros({filtro, setFiltro}: Props){

  const selecionaFiltro = (opc: IOpcao) => {
    if (filtro === opc.id) return setFiltro(null)

    setFiltro(opc.id)
  }

  return <div className={ styles.filtros }>
    { filtros.map( opc => (

      <button 
        className={ classNames({
          [styles.filtros__filtros]:true,
          [styles["filtros__filtro__ativo"]] : filtro === opc.id
        })}
        key={opc.id}
        onClick={ () => selecionaFiltro(opc) }
      >
        {opc.label}
      </button>

    ))}



  </div>
}