import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputErrorForm from "./InputErrorForm";
import { useNavigate } from "react-router-dom";

const NewClientForm2 = ({ client }) => {
    const navigate = useNavigate();
    console.log(client);

    const handleSubmit = async (values) => {
        try {
            // Si estamos actualizando un cliente
            if (client?.id) {
                const url = `http://localhost:4000/clients/${client.id}`;
                await fetch(url, {
                    method: "PUT",
                    body: JSON.stringify(values),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
            }
            // Si estamos creando un nuevo cliente
            else {
                const url = "http://localhost:4000/clients";
                await fetch(url, {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
            <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
                {client?.id ? "Actualizar Cliente" : "Crear Cliente"}
            </h1>

            <Formik
                initialValues={{
                    email: client?.email ?? "",
                    name: client?.name ?? "",
                    surname: client?.surname ?? "",
                    phone: client?.phone ?? "",
                }}
                enableReinitialize={true}
                validationSchema={Yup.object({
                    name: Yup.string().required("Name is required"),
                    surname: Yup.string().required("Surname is required"),
                    email: Yup.string().email().required("Email is required"),
                    phone: Yup.string().required("Phone is required"),
                })}
                onSubmit={async (values, { resetForm }) => {
                    await handleSubmit(values);
                    resetForm();
                    navigate("/clients");
                }}
            >
                {({ errors, touched }) => {
                    return (
                        <Form>
                            <div className="mb-4">
                                <label htmlFor="name" className="text-gray-800">
                                    Name:
                                </label>
                                <Field
                                    name="name"
                                    type="text"
                                    placeholder="Client name"
                                    className="mt-2 block w-full p-3 bg-gray-50"
                                />
                                {errors.name && touched.name ? <InputErrorForm message={errors.name} /> : null}

                                <label htmlFor="surname" className="text-gray-800">
                                    Surname:
                                </label>
                                <Field
                                    name="surname"
                                    type="text"
                                    placeholder="Client surname"
                                    className="mt-2 block w-full p-3 bg-gray-50"
                                />
                                {errors.surname && touched.surname ? <InputErrorForm message={errors.surname} /> : null}

                                <label htmlFor="email" className="text-gray-800">
                                    Email:
                                </label>
                                <Field
                                    name="email"
                                    type="text"
                                    placeholder="correo@correo.com"
                                    className="mt-2 block w-full p-3 bg-gray-50"
                                />
                                {errors.email && touched.email ? <InputErrorForm message={errors.email} /> : null}

                                <label htmlFor="phone" className="text-gray-800">
                                    Phone number:
                                </label>
                                <Field
                                    name="phone"
                                    type="text"
                                    placeholder="Client phone"
                                    className="mt-2 block w-full p-3 bg-gray-50"
                                />
                                {errors.phone && touched.phone ? <InputErrorForm message={errors.phone} /> : null}

                                <input
                                    type="submit"
                                    value={client?.id ? "Actualizar Cliente" : "Crear Cliente"}
                                    className="mt-5 w-full bg-blue-800 p-3 text-white font-bold rounded-md"
                                />
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};

NewClientForm2.defaultProps = {
    client: {},
};

export default NewClientForm2;
