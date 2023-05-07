import joi from "joi";

const cpfPattern = /^\d{3}.\d{3}.\d{3}-\d{2}$/;

export const signUpSchema = joi.object({
    name: joi.string().min(3).max(30).required().messages({
        "string.base": "Nome deve ser um texto.",
        "string.empty": "Nome não pode ser vazio.",
        "string.min": "Nome deve ter no mínimo {#limit} caracteres.",
        "string.max": "Nome deve ter no máximo {#limit} caracteres.",
        "any.required": "Nome é obrigatório.",
    }),
    email: joi.string().email().required().messages({
        "string.base": "E-mail deve ser um texto.",
        "string.empty": "E-mail não pode ser vazio.",
        "string.email": "E-mail inválido.",
        "any.required": "E-mail é obrigatório.",
    }),
    password: joi.string().min(8).required().messages({
        "string.base": "Senha deve ser um texto.",
        "string.empty": "Senha não pode ser vazia.",
        "string.min": "Senha deve ter no mínimo {#limit} caracteres.",
        "any.required": "Senha é obrigatória.",
    }),
    confirmPassword: joi.any().equal(joi.ref("password")).required().messages({
        "any.only": "Senhas não coincidem.",
        "any.required": "Confirmar senha é obrigatório.",
    }),
    cpf: joi
        .string()
        .regex(cpfPattern)
        .messages({
            "string.empty": "Por favor, informe o seu CPF.",
            "string.pattern.base": "CPF deve seguir o padrão XXX.XXX.XXX-XX.",
        })
        .required(),
});

export const signInSchema = joi.object({
    email: joi.string().email().required().messages({
        "string.base": "E-mail deve ser um texto.",
        "string.empty": "E-mail não pode ser vazio.",
        "string.email": "E-mail inválido.",
        "any.required": "E-mail é obrigatório.",
    }),
    password: joi.string().required().messages({
        "string.base": "Senha deve ser um texto.",
        "string.empty": "Senha não pode ser vazia.",
        "any.required": "Senha é obrigatória.",
    }),
});
