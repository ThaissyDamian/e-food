import HeaderPerfil from '../../components/HeaderPerfil'
import Footer from '../../components/Footer'
import CardProduto from '../../components/CardProduto'
import { Container, ListaPratos } from './styles'

import Pizza from '../../assets/image/pizza.png'
import BannerRestaurante from '../../assets/image/spaguetti.png'
import ContainerModal from '../../components/ContainerModal'
import { useState } from 'react'

interface Produto {
  id: number
  nome: string
  descricao: string
  foto: string
}

const Restaurantes = () => {
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(
    null
  )
  const restaurante = {
    nome: 'La Dolce Vita Trattoria',
    tipo: 'Italiana',
    capa: BannerRestaurante,
    pratos: [
      {
        id: 1,
        nome: 'Pizza Marguerita',
        descricao:
          'Molho de tomate, mussarela de búfala, tomate e manjericão. Simples e deliciosa.',
        foto: Pizza
      },
      {
        id: 2,
        nome: 'Pizza Marguerita',
        descricao:
          'Molho de tomate, mussarela de búfala, tomate e manjericão. Simples e deliciosa.',
        foto: Pizza
      },
      {
        id: 3,
        nome: 'Pizza Marguerita',
        descricao:
          'Molho de tomate, mussarela de búfala, tomate e manjericão. Simples e deliciosa.',
        foto: Pizza
      },
      {
        id: 4,
        nome: 'Pizza Marguerita',
        descricao:
          'Molho de tomate, mussarela de búfala, tomate e manjericão. Simples e deliciosa.',
        foto: Pizza
      },
      {
        id: 5,
        nome: 'Pizza Marguerita',
        descricao:
          'Molho de tomate, mussarela de búfala, tomate e manjericão. Simples e deliciosa.',
        foto: Pizza
      },
      {
        id: 6,
        nome: 'Pizza Marguerita',
        descricao:
          'Molho de tomate, mussarela de búfala, tomate e manjericão. Simples e deliciosa.',
        foto: Pizza
      }
    ]
  }

  return (
    <>
      <HeaderPerfil
        tipo={restaurante.tipo}
        titulo={restaurante.nome}
        capa={restaurante.capa}
      />
      <Container>
        <ListaPratos>
          {restaurante.pratos.map((prato) => (
            <CardProduto
              key={prato.id}
              nome={prato.nome}
              descricao={prato.descricao}
              imagem={prato.foto}
              onAdd={() => setProdutoSelecionado(prato)}
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
      <Footer />
    </>
  )
}

export default Restaurantes
