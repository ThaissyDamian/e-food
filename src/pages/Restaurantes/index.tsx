import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeaderPerfil from '../../components/HeaderPerfil'
import Footer from '../../components/Footer'
import CardProduto from '../../components/CardProduto'
import { Container, ListaPratos } from './styles'
import ContainerModal from '../../components/ContainerModal'

type Produto = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

type Restaurante = {
  id: number
  titulo: string
  tipo: string
  capa: string
  cardapio: Produto[]
}

const RestaurantePage = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(
    null
  )

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((res) => setRestaurante(res))
  }, [id])

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
              {restaurante.cardapio.map((produto) => (
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
