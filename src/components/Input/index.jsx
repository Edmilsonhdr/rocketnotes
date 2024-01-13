import { Container } from "./styles";

export function Input({ icon, ...rest }) {
  return (
    <Container>
      <Icon />
      <input {...rest} />
    </Container>
  );
}
