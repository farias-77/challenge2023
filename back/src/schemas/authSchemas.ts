import joi from "joi";

export const signUpSchema = joi.object({
    email: joi
        .string()
        .email()
        .messages({
            "string.empty": "Por favor, insira um e-mail",
            "string.email": "Por favor, insira um e-mail válido",
        })
        .required(),
    username: joi
        .string()
        .messages({ "string.empty": "Por favor, insira um username" })
        .required(),
    password: joi
        .string()
        .messages({ "string.empty": "Por favor, insira uma senha" })
        .required(),
    confirmPassword: joi
        .string()
        .messages({
            "string.empty": "Por favor, insira uma confirmação de senha",
        })
        .required(),
});

export const signInSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
});
