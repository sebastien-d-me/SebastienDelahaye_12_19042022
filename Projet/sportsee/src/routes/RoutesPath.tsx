import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import Accueil from "../pages/Accueil/Accueil";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardMock from "../pages/DashboardMock/DashboardMock";
import Erreur from "../pages/Erreur/Erreur";

function RoutesPath() {
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Layout>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
          <Route path="/dashboard-mock/:id" element={<DashboardMock />} />
          <Route path="*" element={<Erreur />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default RoutesPath;