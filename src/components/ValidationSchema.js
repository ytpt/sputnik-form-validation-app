import * as yup from "yup";

export const validationSchema = yup.object().shape({
    email: yup.string()
        .required("Обязательное поле")
        .email("Неверный формат"),
    password: yup.string()
        .required("Обязательное поле")
        .min(2, "Слишком короткий пароль")
        .max(50, "Слишком длинный пароль"),

});