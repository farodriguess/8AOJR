import { Button, Container, Logo, SignInArea } from "./styles";
import { useSignIn } from "./useSignIn";
import { Input } from "../../../lib";

export function SignIn() {
  const { handleHome } = useSignIn();

  return (
    <Container>
      <SignInArea>
        <Logo src="filmes.webp" />
        <Input
          id="email"
          type="email"
          label="E-mail"
          placeholder="Digite aqui seu e-mail"
        />
        <Input
          id="password"
          type="password"
          label="Senha"
          placeholder="Digite aqui sua senha"
          errorMessage="Senha inválida"
        />
        <Button onClick={handleHome}>Entrar</Button>
      </SignInArea>
    </Container>
  );
}
