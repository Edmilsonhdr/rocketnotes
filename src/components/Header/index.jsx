import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/Edmilsonhdr.png" alt="Foto do usuario" />

        <div>
          <span>Bem-vindo</span>
          <strong>Edmilson Henrique</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
