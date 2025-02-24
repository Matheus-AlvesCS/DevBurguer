import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

export function Register() {
  const navigate = useNavigate();

  const schema = yup
    .object({
      name: yup.string().required("Este campo é obrigatório"),
      email: yup
        .string()
        .email("Digite um e-mail válido.")
        .required("Este campo é obrigatório."),
      password: yup
        .string()
        .min(6, "A senha deve conter ao menos 6 caracteres.")
        .required("Este campo é obrigatório."),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "As senhas precisam ser iguais.")
        .required("Este campo é obrigatório"),
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
    try {
      const { status } = await api.post(
        "/users",
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        }
      );

      if (status === 200 || status === 201) {
        setTimeout(() => {
          navigate("/login");
        }, 2000);

        toast.success("Cadastro feito com sucesso! 😊");
      } else if (status === 409) {
        toast.error("Email já em uso.");
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error("Algum erro ocorreu na criação da conta, tente novamente");
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="Logo-devburger" />
      </LeftContainer>
      <RightContainer>
        <Title>Criar conta</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Nome</label>
            <input type="text" {...register("name")} />
            <p>{errors?.name?.message}</p>
          </InputContainer>
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
          <InputContainer>
            <label>Confirmar senha</label>
            <input type="password" {...register("confirmPassword")} />
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>
          <FormButton type="submit">Confirmar cadastro</FormButton>
        </Form>
        <p>
          Já possui uma conta? <Link to="/login">Clique aqui</Link>
        </p>
      </RightContainer>
    </Container>
  );
}
