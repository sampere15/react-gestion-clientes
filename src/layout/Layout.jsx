import { Link, Outlet, useLocation } from "react-router-dom";

// Este Layout hace como de MasterPage, como el base template de Laravel. Este componente será fijo
// Y lo que cambie se irá cargando de forma dinámica en el Outlet
const Layout = () => {
    const location = useLocation();
    const urlActual = location.pathname;

    return (
        <div className="md:flex md:min-h-screen">
            <div className="md:w-1/4 bg-blue-900 px-5 py-10">
                <h1 className="text-3xl font-black text-center">Gestión Clientes</h1>

                <nav className="mt-10">
                    <Link 
                        to="/clients" 
                        className={`${urlActual == "/clients" ? 'text-blue-300' : 'text-white'} 
                            text-2xl block mt-2 hover:text-blue-300`}
                    >
                        Clientes
                    </Link>
                    <Link 
                        to="/clients/create"
                        className={`${urlActual == "/clients/create" ? 'text-blue-300' : 'text-white'} 
                        text-2xl block mt-2 hover:text-blue-300`}
                    >Nuevo Cliente</Link>
                </nav>
            </div>

            <div className="md:w-3/4 p-10 md:h-screen overflow-scroll bg-gray-100">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
