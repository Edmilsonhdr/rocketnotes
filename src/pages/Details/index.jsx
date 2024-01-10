import { Container, Links } from "./styles.js";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
export function Details() {
  return (
    <Container>
      <Header />
      <Section>
        <Links>
          <li>
            <a href="https://www.youtube.com/"></a>
          </li>
          <li>
            <a href="https://github.com/"></a>
          </li>
        </Links>
      </Section>
      <Button title="Voltar" />
    </Container>
  );
}
