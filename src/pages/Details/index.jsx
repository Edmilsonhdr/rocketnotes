import { Container, Links } from "./styles.js";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
export function Details() {
  return (
    <Container>
      <Header />
      <Section title="Links Uteis">
        <Links>
          <li>
            <a href="https://www.youtube.com/"></a>
          </li>
          <li>
            <a href="https://github.com/"></a>
          </li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="express" />
        <Tag title="node" />
      </Section>
      <Button title="Voltar" />
    </Container>
  );
}
