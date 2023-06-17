import React, { useState } from "react";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { Formik, Form, Field } from "formik";
import "./EnterForm.css";
import "../Controls/Controls.css";
import { validationSchema } from "../ValidationSchema";

export function EnterForm() {

    const [isAuth, setIsAuth] = useState(false);

    const handleSubmit = async (values) => {
        console.log(values);

        //Отправка данных на сервер

        // Установить через терминал: npm i --save axios
        // Создать компонент в папке: axios/index.js
        // Код компонента:
        // import axios from "axios";
        // export const instance = axios.create({
        //     baseURL: 'url',
        //     timeout: 1000,
        //     headers: {"X-Custom-Header": "foobar"}
        // })
        // const userData = {
        //     values.email,
        //     values.password
        // }

        //Код функции handleSubmit:
        // const user = await instance.post(`${url}`, userData));
        //метод try catch
        // if (response.ok) {
        // setIsAuth(true);
        // }

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