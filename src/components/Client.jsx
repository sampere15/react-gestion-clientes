import { useNavigate } from "react-router-dom";

const Client = ({ client, handleDelete }) => {
    const navigate = useNavigate();

    return (
        <tr className="border hover:bg-gray-50">
            <td className="p-3">{client.name}</td>
            <td className="p-3">{client.surname}</td>
            <td className="p-3">{client.email}</td>
            <td className="p-3">{client.phone}</td>
            <td className="p-3">
                <button
                    type="button"
                    className="bg-yellow-500 hover:bg-yellow-600 w-full text-white p-2 uppercase font-bold text-xs"
                    onClick={() => navigate(`/clients/${client.id}`)}
                >
                    Ver
                </button>
                <button
                    type="button"
                    className="bg-blue-600 hover:bg-blue-700 mt-3 w-full text-white p-2 uppercase font-bold text-xs"
                    onClick={() => navigate(`/clients/update/${client.id}`)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="bg-red-600 hover:bg-red-700 mt-3 w-full text-white p-2 uppercase font-bold text-xs"
                    onClick={() => handleDelete(client.id)}
                >
                    Elliminar
                </button>
            </td>
        </tr>
    );
};

export default Client;
