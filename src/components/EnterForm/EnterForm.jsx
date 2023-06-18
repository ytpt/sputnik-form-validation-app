import React, { useState, useContext } from "react";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { Formik, Form, Field } from "formik";
import "./EnterForm.css";
import "../StartPage/StartPage.css";
import { validationSchema } from "../ValidationSchema";
import { ModalContext } from "../../context/ModalContext";
import { Profile } from "../Profile";
// import axios from 'axios';

export function EnterForm() {

    // const [isAuth, setIsAuth] = useState(false);
    const { openModal } = useContext(ModalContext);

    const openSuccessModal = (userDataArg) => {
        openModal({
            title: `Пользователь: ${userDataArg.email}`,
            children: <Profile key="profile" userData={ userDataArg } />
        })
    }

    const handleSubmit = (values) => {
        // Авторизация пользователя

        // axios.post("API_TOKEN", values)
        //     .then(response => {
        //     if (response.ok) {
        //     setIsAuth(true);
                openSuccessModal(values);
        //     }
        //     .catch(err) => console.log(err)
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