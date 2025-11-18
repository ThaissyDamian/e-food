import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Container } from '../../styles'
import { Grid } from './styles'
import CardRestaurante from '../../components/CardRestaurante'

import { useGetRestaurantesQuery } from '../../services/api'

export type RestauranteLista = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const Home = () => {
  const { data: restaurantes, isLoading } = useGetRestaurantesQuery()

  if (isLoading) {
    return <p>Carregando restaurantes...</p>
  }
  return (
    <>
      <Header />
      <Container>
        <Grid>
          {restaurantes?.map((restaurante) => (
            <CardRestaurante key={restaurante.id} {...restaurante} />
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  )
}

export default Home
