import { BrowserRouter, Routes, Route } from "react-router-dom";
import IniciarSesion from "./layout/IniciarSesion";
import Layout from "./layout/Layout";
import CreateClient from "./pages/CreateClient";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import UpdateClient from "./pages/UpdateClient";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Grupo de rutas cuando no se ha iniciado sesión */}
                <Route path="/" element={<IniciarSesion />}>
                    <Route index element={<LoginForm />} />
                </Route>

                {/* Podemos usar las nested routes y así crear grupos de rutas */}
                <Route path="/clients" element={<Layout />}>
                    {/* Con index marcamos la página por defecto dentro de ese grupo */}
                    <Route index element={<Home />} />
                    <Route path="create" element={<CreateClient />} />
                    <Route path="update/:clientId" element={<UpdateClient />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
