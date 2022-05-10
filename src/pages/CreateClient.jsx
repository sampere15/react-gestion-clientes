import React from "react";
import NewClientForm from "../components/NewClientForm";

const CreateClient = () => {
    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">New Client</h1>

            <NewClientForm />
        </>
    );
};

export default CreateClient;
