import { Banner, Container } from "./styles";
import { CategoryCarousel, OffersCarousel } from "../../components";

export function Home() {
  return (
    <main>
      <Banner>
        <h1>Bem-vindo(a)!</h1>
      </Banner>
      <Container>
        <div>
          <CategoryCarousel />
          <OffersCarousel />
        </div>
      </Container>
    </main>
  );
}
