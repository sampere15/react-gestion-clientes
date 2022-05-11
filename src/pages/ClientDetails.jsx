import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const ClientDetails = () => {
    const { clientId } = useParams();
    const [client, setClient] = useState({});
    const [loading, setloading] = useState(false);

    useEffect(() => {
        setloading(true);

        const getuser = async () => {
            try {
                const url = `http://localhost:4000/clients/${clientId}`;
                const response = await fetch(url);
                if (response.status == 200) {
                    console.log("encontrado");
                    const result = await response.json();
                    setClient(result);
                }
            } catch (error) {
                console.log("catch");
                alert(error.message);
            }

            setloading(false);
        };

        getuser();
    }, []);

    return (
        <div>
            {loading ? (
                <Spinner />
            ) : Object.keys(client).length === 0 ? (
                <h2 className="text-center">No hay resultados</h2>
            ) : (
                <p>
                    <label className="text-gray-700 font-bold">Cliente: </label>
                    {client.name}
                </p>
            )}
        </div>
    );
};

export default ClientDetails;
