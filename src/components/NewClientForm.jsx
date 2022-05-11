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
        onSubmit: (values) => {
            console.log(formik.touched);
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            surname: Yup.string().required("Surname is required"),
            email: Yup.string().email().required("Email is required"),
            phone: Yup.string().required("Phone is required"),
        })
    });

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
                        onChange={formik.handleChange}
                        value={formik.values.name}
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
                        onChange={formik.handleChange}
                        value={formik.values.surname}
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
                        onChange={formik.handleChange}
                        value={formik.values.email}
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
                        onChange={formik.handleChange}
                        value={formik.values.phone}
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
