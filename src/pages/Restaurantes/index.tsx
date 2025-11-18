import { useParams } from 'react-router-dom'
import { useState } from 'react'
import HeaderPerfil from '../../components/HeaderPerfil'
import Footer from '../../components/Footer'
import CardProduto from '../../components/CardProduto'
import ContainerModal from '../../components/ContainerModal'
import { Container, ListaPratos } from './styles'

import { useGetCardapioQuery } from '../../services/api'

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
    return <p>Carregando cardápio...</p>
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
          <Container>
            <ListaPratos>
              {restaurante.cardapio.map((produto: Produto) => (
                <CardProduto
                  key={produto.id}
                  nome={produto.nome}
                  descricao={produto.descricao}
                  imagem={produto.foto}
                  onAdd={() => setProdutoSelecionado(produto)}
                />
              ))}
            </ListaPratos>
          </Container>
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
