import { Route, Routes } from "react-router";

import {
  Cart,
  Home,
  Login,
  Menu,
  Register,
  Checkout,
  CompletedPayment,
  Orders,
  NewProduct,
  EditProduct,
  Products,
} from "../pages";
import { UserLayout } from "../layout/UserLayout";
import { AdminLayout } from "../layout/AdminLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Menu />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/complete" element={<CompletedPayment />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="/admin/pedidos" element={<Orders />} />
        <Route path="/admin/novo-produto" element={<NewProduct />} />
        <Route path="/admin/editar-produto" element={<EditProduct />} />
        <Route path="/admin/produtos" element={<Products />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
    </Routes>
  );
}

// const routes = createBrowserRouter([
//
//
//
//   {
//     path: "/carrinho",
//     element: <Cart />,
//   },
//   {
//     path: "/checkout",
//     element: <Checkout />,
//   },
//   {
//     path: "/complete",
//     element: <CompletedPayment />,
//   },
// ]);
