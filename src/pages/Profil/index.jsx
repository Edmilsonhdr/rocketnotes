import { FiArrowLeft, FiUser, FiMail, FiLock } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form } from "./styles";
export function Profil() {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
        </a>
      </header>

      <Form>
        <Input placeholder="Nome" type="text" icon={FiUser}></Input>
        <Input placeholder="E-mail" type="text" icon={FiMail}></Input>
        <Input placeholder="Senha Atual" type="password" icon={FiLock}></Input>
        <Input placeholder="Nova senha" type="password" icon={FiLock}></Input>
        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
