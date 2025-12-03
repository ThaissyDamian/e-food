import { useParams } from 'react-router-dom'
import { useState } from 'react'

import HeaderPerfil from '../../components/HeaderPerfil'
import Footer from '../../components/Footer'
import CardProduto from '../../components/CardProduct'
import ContainerModal from '../../components/ContainerModal'
import Loader from '../../Loader'

import { useGetCardapioQuery } from '../../services/api'

import * as S from './styles'

export type Produto = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

export type RestauranteDetalhe = {
  id: number
  titulo: string
  tipo: string
  capa: string
  cardapio: Produto[]
}

const RestaurantePage = () => {
  const { id } = useParams()
  const { data: restaurante, isLoading } = useGetCardapioQuery(id ?? '')
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(
    null
  )

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      {restaurante && (
        <>
          <HeaderPerfil
            tipo={restaurante.tipo}
            titulo={restaurante.titulo}
            capa={restaurante.capa}
          />
          <S.Container>
            <S.ListaPratos>
              {restaurante.cardapio.map((produto: Produto) => (
                <CardProduto
                  key={produto.id}
                  nome={produto.nome}
                  descricao={produto.descricao}
                  imagem={produto.foto}
                  onAdd={() => setProdutoSelecionado(produto)}
                />
              ))}
            </S.ListaPratos>
          </S.Container>
          {produtoSelecionado && (
            <ContainerModal
              produto={produtoSelecionado}
              onClose={() => setProdutoSelecionado(null)}
            />
          )}
        </>
      )}
      <Footer />
    </>
  )
}

export default RestaurantePage
