import { Input } from "../../components/Input/Input";
import { AuthContainer, Section } from "./AuthenticationStyled";
import { Button } from "../../components/Button/Button"

export function Authentication() {
    return (
     <AuthContainer>
        <Section type="signin">
        <h2>Entrar</h2>
        <form>
            <Input type="email" placeholder="E-mail" name="email" />
            <Input type="password" placeholder="Senha" name="password" />
            <Button type="submit" text="Entrar" />
        </form>
        </Section>
        <Section type="signup">
        <h2>Cadastrar</h2>
        <form>
            <Input type="text" placeholder="Nome" name="name" />
            <Input type="email" placeholder="E-mail" name="email" />
            <Input type="password" placeholder="Senha" name="password" />
            <Input type="password" placeholder="ConfirmarSenha" name="password" />
            <Button type="submit" text="Cadastrar" />
        </form>
        </Section>
     </AuthContainer>
    );
}

