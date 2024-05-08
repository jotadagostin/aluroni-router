import Footer from "components/Footer";
import PaginaPadrao from "components/PaginaPadrao";
import Menu from "components/menu";
import Cardapio from "pages/Cardapio";
import Inicio from "pages/Inicio";
import NotFound from "pages/NotFound";
import Sobre from "pages/Sobre";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function appRouter() {
  return (
    <main>
      <Router>
        <Menu />

        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path="cardapio" element={<Cardapio />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
