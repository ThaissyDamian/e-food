import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CardRestaurante from '../../components/CardRestaurant'
import Loader from '../../Loader'

import { useGetRestaurantesQuery } from '../../services/api'

import { Container } from '../../styles'
import { Grid } from './styles'

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
    return <Loader />
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
