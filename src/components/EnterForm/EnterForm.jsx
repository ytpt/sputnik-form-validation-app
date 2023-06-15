import React, { useState } from "react";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import "./EnterForm.css";
import "../../pages/StartPage/StartPage.css";

export function EnterForm({ title }) {

    const [isAuth, setIsAuth] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validationSchema = yup.object().shape({
        email: yup.string()
            .required("Обязательное поле")
            .email("Неверный формат"),
        password: yup.string()
            .required("Обязательное поле")
            .min(2, "Слишком короткий пароль")
            .max(50, "Слишком длинный пароль"),

    });

    const handleSubmit = async (values) => {
        setEmail(values.email);
        setPassword(values.password);

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
        //     email,
        //     password
        // }

        //Код функции handleSubmit:
        // const user = await instance.post(`${url}`, userData));
        // let res = user.data;
    }

    return (
        <div className="form-container">
            <h2 className="form-title">{ title }</h2>
            <Formik
                initialValues={{
                    email: "",
                    password: ""
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}>
                { ({ values, errors, touched, handleChange }) => (
                    <Form className="form">
                        <label className="form-field">
                            Логин
                            <Field
                                type="email"
                                name="email"
                                className="login-form"
                                placeholder="konst.konst.konst@yandex.ru"
                                value={values.email}
                                onChange={handleChange}
                            />
                            { errors.email && touched.email && <ErrorMessage error={errors.email} /> }
                        </label>
                        <label className="form-field">
                            Пароль
                            <Field
                                type="password"
                                name="password"
                                className="password-form"
                                placeholder="konst.konst.konst@yandex.ru"
                                value={values.password}
                                onChange={handleChange}
                            />
                            { errors.password && touched.password && <ErrorMessage error={errors.password} /> }
                        </label>
                        <button
                            type="submit"
                            className="form-btn start-btn">
                            Войти
                        </button>
                    </Form>
                ) }
            </Formik>
        </div>
    )
}