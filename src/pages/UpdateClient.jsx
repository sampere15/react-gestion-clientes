import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewClientForm2 from "../components/NewClientForm2";
import Spinner from "../components/Spinner";

const UpdateClient = () => {
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
                    const result = await response.json();
                    setClient(result);
                }
            } catch (error) {
                alert(error.message);
            }

            setloading(false);
        };

        getuser();
    }, []);

    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Update Client</h1>
            <p>Utiliza este formulario para editar los datos</p>

            {loading === true ? (
                <Spinner />
            ) : Object.keys(client).length > 0 ? (
                <NewClientForm2 client={client} />
            ) : (
                <h2 className="text-center">Client not found</h2>
            )}
        </>
    );
};

export default UpdateClient;
