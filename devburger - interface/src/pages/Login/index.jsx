import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUser } from "../../hooks/UserContext";

import api from "../../services/api";

import {
  Container,
  LeftContainer,
  RightContainer,
  Title,
  InputContainer,
  Form,
  FormButton,
  Link,
} from "./styles";

import Logo from "../../assets/logo.svg";

export function Login() {
  const navigate = useNavigate();
  const { putUserData } = useUser();

  const schema = yup
    .object({
      email: yup
        .string()
        .email("Digite um e-mail válido.")
        .required("Este campo é obrigatório."),
      password: yup
        .string()
        .min(6, "A senha deve conter ao menos 6 caracteres.")
        .required("Este campo é obrigatório."),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { data: userData } = await toast.promise(
      api.post("/session", {
        email: data.email,
        password: data.password,
      }),
      {
        pending: "Verificando seu Login.",
        success: {
          render() {
            setTimeout(() => {
              if (userData?.admin) {
                navigate("/admin/pedidos");
              } else {
                navigate("/");
              }
            }, 2000);

            return "Seja Bem-vindo(a)! 😊";
          },
        },
        error: "Verifique se seus dados estão corretos.",
      }
    );

    putUserData(userData);
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="Logo-devburger" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, Seja bem vindo ao <span>Dev Burger!</span>
          <br />
          Acesse com seu <span>Login e senha.</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type="email" {...register("email")} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register("password")} />
            <p>{errors?.password?.message}</p>
          </InputContainer>
          <FormButton type="submit">Entrar</FormButton>
        </Form>
        <p>
          Não possui conta? <Link to="/cadastro">Clique aqui</Link>
        </p>
      </RightContainer>
    </Container>
  );
}
