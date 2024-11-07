import { BrowserRouter, Routes, Route } from "react-router-dom";

import Initial from "./pages/index";
import Layout from "./components/layout";
import Detalhes from "./pages/detalhes";
import Cadastro from "./pages/cadastro";
import { Provider } from "react-redux";
import { store } from "./store";
import AdicionarResenha from "./pages/adicionarResenha";
import ExibirResenhas from "./pages/exibirResenhas";

function Routers() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" Component={Initial} />
            <Route path="/cadastro" Component={Cadastro} />
            <Route path="/detalhes/:id?" Component={Detalhes} />
            <Route path="/resenhas/:id?" Component={ExibirResenhas} />
            <Route path="/adicionar-resenha/:id?" Component={AdicionarResenha} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default Routers;
