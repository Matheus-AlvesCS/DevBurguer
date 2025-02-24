import PropTypes from "prop-types";
import { useCart } from "../../hooks/CartContext";

import { Container, CardImage } from "./styles";
import { CartButton } from "../CartButton";

export function CardProduct({ product }) {
  const { addCartProduct } = useCart();

  return (
    <Container>
      <CardImage src={product.url} alt={product.name} />
      <div>
        <p>{product.name}</p>
        <strong>{product.formattedPrice}</strong>
      </div>
      <CartButton onClick={() => addCartProduct(product)}></CartButton>
    </Container>
  );
}

CardProduct.propTypes = {
  product: PropTypes.object,
};
