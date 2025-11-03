import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Container } from '../../styles'
import { Grid } from './styles'

import comidaJaponesa from '../../assets/image/comida_japonesa.png'
import spaguetti from '../../assets/image/spaguetti.png'
import Restaurant from '../../components/CardRestaurante'

const restaurantes = [
  {
    id: 1,
    nome: 'Sushi Hioki ',
    tipo: 'Japonesa',
    nota: 4.9,
    destaque: true,
    descricao:
      'Experiência japonesa com ingredientes frescosPeça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    imagem: comidaJaponesa
  },
  {
    id: 2,
    nome: 'La Pasta Vie Trattoria',
    tipo: 'Italiana',
    nota: 4.6,
    descricao:
      ' A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: spaguetti
  },
  {
    id: 3,
    nome: 'La Pasta Vie Trattoria',
    tipo: 'Italiana',
    nota: 4.6,
    descricao:
      ' A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: spaguetti
  },
  {
    id: 4,
    nome: 'La Pasta Vie Trattoria',
    tipo: 'Italiana',
    nota: 4.6,
    descricao:
      ' A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: spaguetti
  },
  {
    id: 5,
    nome: 'La Pasta Vie Trattoria',
    tipo: 'Italiana',
    nota: 4.6,
    descricao:
      ' A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: spaguetti
  },
  {
    id: 6,
    nome: 'La Pasta Vie Trattoria',
    tipo: 'Italiana',
    nota: 4.6,
    descricao:
      ' A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: spaguetti
  }
]
const Home = () => {
  return (
    <>
      <Container>
        <Header />
        <Grid>
          {restaurantes.map((restaurante) => (
            <Restaurant key={restaurante.id} {...restaurante} />
          ))}
        </Grid>
        <Footer />
      </Container>
    </>
  )
}

export default Home
