import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form, Background } from "./styles";

import { api } from "../../services/api";

export function SignUp() {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const navigate = useNavigate();

  function handleSingUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuario cadastrado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possivel cadastrar");
        }
      });
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={(e) => SetName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(e) => SetEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => SetPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSingUp} />

        <Link to="/">Voltar para o login</Link>
      </Form>
    </Container>
  );
}
