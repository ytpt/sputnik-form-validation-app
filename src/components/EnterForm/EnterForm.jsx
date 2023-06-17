import React, { useState } from "react";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { Formik, Form, Field } from "formik";
import "./EnterForm.css";
import "../Controls/Controls.css";
import { validationSchema } from "../ValidationSchema";
// import axios from 'axios';

export function EnterForm() {

    const [isAuth, setIsAuth] = useState(false);
    const [data, setData] = useState({});

    const handleSubmit = (values) => {
        console.log(values);

        // Авторизация пользователя

        // const formData = new FormData(values);
        // axios.post('API_URL', formData)
        //     .then((response) => {
        //         setData(response.data);
        //         setIsAuth(true);
        //     });
        // };
    }

    return (
        <div className="form-container">
            <h2 className="form-title">Войдите в свой профиль</h2>
            <Formik
                initialValues={{
                    email: "",
                    password: ""
                }}
                validationSchema={ validationSchema }
                onSubmit={ handleSubmit }>
                { ({ values, errors, touched, handleChange }) => (
                    <Form className="form">
                        <label className="form-field">
                            Логин
                            <Field
                                type="email"
                                name="email"
                                className="login-form"
                                placeholder="konst.konst.konst@yandex.ru"
                                value={ values.email }
                                onChange={ handleChange }
                            />
                            { errors.email && touched.email && <ErrorMessage error={ errors.email } /> }
                        </label>
                        <label className="form-field">
                            Пароль
                            <Field
                                type="password"
                                name="password"
                                className="password-form"
                                placeholder="konst.konst.konst@yandex.ru"
                                value={ values.password }
                                onChange={ handleChange }
                            />
                            { errors.password && touched.password && <ErrorMessage error={ errors.password } /> }
                        </label>
                        <button
                            type="submit"
                            className="form-btn controls-btn">
                            Войти
                        </button>
                    </Form>
                ) }
            </Formik>
        </div>
    )
}