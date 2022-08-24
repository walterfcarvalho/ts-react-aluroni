

import styles from './Itens.module.scss'
import Item from "./Item"
import cardapio from './Itens.json'
import { useEffect, useState } from "react";

interface Props {
  busca: string,
  filtro: number | null;
  ordenador: string;
}

export default function Itens(props: Props) {
  const [lista, setlista] = useState(cardapio)
  const { busca, filtro, ordenador } = props

  const testeBusca = (id: string) => {
    const regex = new RegExp(busca, 'i')
    return regex.test(id)
  }

  const testeFilter = (id: number) => {
    if (filtro !== null) return filtro === id
    return true
  }

  const ordena = (lista: typeof cardapio) => {

    switch (ordenador) {
      case 'porcao': return lista.sort((a, b) => a.size > b.size ? 1 : -1)
      case 'qtd_pessoas': return lista.sort((a, b) => a.serving > b.serving ? 1 : -1)
      case 'preco': return lista.sort((a, b) => a.price > b.price ? 1 : -1)
      default: return lista
    }
  }

  useEffect(() => {

    const novaLista = cardapio.filter(it =>
      testeBusca(it.title) && testeFilter(it.category.id)
    )

    setlista(ordena(novaLista))

    // eslint-disable-next-line
  }, [busca, filtro])

  return <div className={styles.itens} >
    {lista.map(item => (

      <Item
        key={item.id}
        {...item}
      />
    ))}
  </div>
}
