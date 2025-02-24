import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

import api from "../../../services/api";

import { Image } from "@phosphor-icons/react";
import {
  Container,
  Form,
  InputGroup,
  Input,
  Label,
  LabelUpload,
  SelectCategory,
  SubmitButton,
  ErrorMessage,
  ContainerCheckbox,
} from "./styles";

const schema = yup.object({
  name: yup.string().required("Digite um nome."),
  price: yup
    .number()
    .positive()
    .required("Defina um preço.")
    .typeError("Defina um preço."),
  category: yup.object().required("Escolha uma categoria."),
  offer: yup.bool(),
  file: yup
    .mixed()
    .test("required", "Escolha um arquivo.", (value) => {
      return value && value.length > 0;
    })
    .test("fileSize", "O arquivo pode conter até 5MB.", (value) => {
      return value && value.length > 0 && value[0].size <= 50000;
    })
    .test("type", "O arquivo deve ser PNG ou JPEG.", (value) => {
      return (
        value &&
        value.length > 0 &&
        (value[0].type === "image/png" || "image/jpeg")
      );
    }),
});

export function NewProduct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("/categories");

      setCategories(data);
    }

    loadCategories();
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const productFormData = new FormData();

    productFormData.append("name", data.name);
    productFormData.append("price", data.price * 100);
    productFormData.append("category_id", data.category.id);
    productFormData.append("offer", data.offer);
    productFormData.append("file", data.file[0]);

    await toast.promise(api.post("/products", productFormData), {
      pending: "Criando produto...",
      error: "Não foi possível criar o produto.",
      success: "Produto criado com sucesso!",
    });

    setTimeout(() => {
      navigate("/admin/produtos");
    }, 2000);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label>Nome</Label>
          <Input type="text" {...register("name")} />
          <ErrorMessage>{errors?.name?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label>Preço</Label>
          <Input type="number" {...register("price")} />
          <ErrorMessage>{errors?.price?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <LabelUpload>
            <Image />
            <input
              type="file"
              {...register("file")}
              accept="image/png, image/jpeg"
              onChange={(value) => {
                setFileName(value?.target?.files[0]?.name);
                register("file").onChange(value);
              }}
            />
            {fileName || "Upload do produto"}
          </LabelUpload>
          <ErrorMessage>{errors?.file?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label>Categoria</Label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <SelectCategory
                {...field}
                options={categories}
                getOptionLabel={(category) => category.name}
                getOptionValue={(category) => category.id}
                placeholder="Categorias"
                menuPortalTarget={document.body}
              />
            )}
          />
          <ErrorMessage>{errors?.category?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <ContainerCheckbox>
            <input type="checkbox" {...register("offer")} />
            <Label>Produto em oferta ?</Label>
          </ContainerCheckbox>
        </InputGroup>

        <SubmitButton>Adicionar produto</SubmitButton>
      </Form>
    </Container>
  );
}
