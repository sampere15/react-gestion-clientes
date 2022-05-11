import { useFormik, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputErrorForm from "./InputErrorForm";

const NewClientForm = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            name: "",
            surname: "",
            phone: "",
        },
        onSubmit: async (values) => {
            await handleSubmit(values);
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            surname: Yup.string().required("Surname is required"),
            email: Yup.string().email().required("Email is required"),
            phone: Yup.string().required("Phone is required"),
        })
    });

    const handleSubmit = async (values) => {
        try {
            const url = "http://localhost:4000/clients";
    
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": "application/json"
                }
            });
    
            console.log(response);
            const result = await response.json();
            console.log(result);

            
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
            <h1 className="text-gray-600 font-bold text-xl uppercase text-center">Agregar cliente</h1>

            <form className="mt-10" onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="text-gray-800">
                        Nombre:
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Nombre del cliente"
                        {...formik.getFieldProps('name')}
                    />
                </div>
                {formik.errors.name ? <InputErrorForm message={formik.errors.name} /> : null}

                <div className="mb-4">
                    <label htmlFor="surname" className="text-gray-800">
                        Apellidos:
                    </label>
                    <input
                        id="surname"
                        name="surname"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Apellidos del cliente"
                        {...formik.getFieldProps('surname')}
                    />
                </div>
                {formik.errors.surname ? <InputErrorForm message={formik.errors.surname} /> : null}

                <div className="mb-4">
                    <label htmlFor="email" className="text-gray-800">
                        Email:
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Correo electrónico"
                        {...formik.getFieldProps('email')}
                    />
                </div>
                {formik.errors.email ? <InputErrorForm message={formik.errors.email} /> : null}

                <div className="mb-4">
                    <label htmlFor="phone" className="text-gray-800">
                        Teléfono:
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Teléfono"
                        {...formik.getFieldProps('phone')}
                    />
                </div>
                {formik.errors.phone ? <InputErrorForm message={formik.errors.phone} /> : null}

                <button className="mt-5 w-full bg-blue-800 p3 text-white text-lg" type="submit">
                    Crear Cliente
                </button>
            </form>
        </div>
    );
};

export default NewClientForm;
