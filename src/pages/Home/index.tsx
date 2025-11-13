import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Container } from '../../styles'
import { Grid } from './styles'
import CardRestaurante from '../../components/CardRestaurante'

type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((response) => response.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Grid>
          {restaurantes.map((restaurante) => (
            <CardRestaurante key={restaurante.id} {...restaurante} />
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  )
}

export default Home
