import React from "react";
import NewClientForm from "../components/NewClientForm";
import NewClientForm2 from "../components/NewClientForm2";

const CreateClient = () => {
    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">New Client</h1>

            <NewClientForm2 />
        </>
    );
};

export default CreateClient;
