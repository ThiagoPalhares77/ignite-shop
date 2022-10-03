import { useRouter } from 'next/router'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails
} from '../../styles/pages/product'

export default function Product() {
  const { query } = useRouter()
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed iste
          quaerat quo velit cum? Hic omnis cupiditate explicabo asperiores nam
          ex, eius cum. Amet facere ab rerum aut odio placeat.
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
