import HeaderPerfil from '../../components/HeaderPerfil'
import Footer from '../../components/Footer'
import CardProduto from '../../components/CardProduto'
import { Container, ListaPratos } from './styles'

import Pizza from '../../assets/image/pizza.png'
import BannerRestaurante from '../../assets/image/spaguetti.png'

const Restaurantes = () => {
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
              onAdd={() => console.log(`${prato.nome} adicionado`)}
            />
          ))}
        </ListaPratos>
      </Container>
      <Footer />
    </>
  )
}

export default Restaurantes
