import { useState, useEffect } from "react";
import Client from "../components/Client";
import Spinner from "../components/Spinner";

const Home = () => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(false);

    // El array vacío es para que este hook sólo se llame una vez
    useEffect(() => {
        setLoading(true);

        const obtenerClientesAPI = async () => {
            try {
                const url = "http://localhost:4000/clients";
                const response = await fetch(url);
                const result = await response.json();
                setLoading(false);

                setClients(result);
            } catch (error) {
                alert(error.message);
            }
        };

        obtenerClientesAPI();
    }, []);

    const handleDelete = async (clientId) => {
        const confirm = window.confirm("Are you sure?");

        if (confirm) {
            try {
                const url = `http://localhost:4000/clients/${clientId}`;
                const response = await fetch(url, {
                    method: "DELETE",
                });

                console.log(response);

                // Si se ha borrado correctamente lo ocultamos
                if (response.status == 200) {
                    setClients(clients.filter((client) => client.id !== clientId));
                }
            } catch (error) {
                alert(error.message);
            }
        }
    };

    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Client List</h1>
            <p className="mt-3">Manage your clients</p>

            {loading ? (
                <Spinner />
            ) : clients.length > 0 ? (
                <table className="w-full mt-5 table-auto shadow bg-white">
                    <thead className="bg-blue-800 text-white">
                        <tr>
                            <th className="p-2">Name</th>
                            <th className="p-2">Surname</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">Phone</th>
                            <th className="p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map((client) => (
                            <Client key={client.id} client={client} handleDelete={handleDelete} />
                        ))}
                    </tbody>
                </table>
            ) : (
                <h2 className="text-center text-4xl">Todavía no hay clientes</h2>
            )}
        </>
    );
};

export default Home;
