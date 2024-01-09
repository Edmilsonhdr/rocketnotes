import { Container } from "./styles.js";
import { Button } from "../../components/Button";
export function Details() {
  return (
    <Container>
      <h1>Qualquer coisa</h1>
      <p>teste</p>
      <Button title="a" loading />
      <Button title="b" />
      <Button title="c" />
    </Container>
  );
}
