import joi from "joi";

export const transferSchema = joi.object({
    destinationAddress: joi.string().required(),
    amount: joi.number().required(),
});
