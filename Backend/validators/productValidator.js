const Joi = require("joi")

const validator = (schema)=> (payload) => {
    return schema.validate(payload, { abortEarly: false })
}

const productSchema = Joi.object({
    user_id: Joi.string(),
    name: Joi.string().min(3).max(35),
    category: Joi.string().required().min(3).max(20),
    description: Joi.string().min(10),
    image: Joi.string(),
    averageBuyPrice: Joi.string(),
    amazonLink: Joi.string()
})

exports.ValidateProduct = validator(productSchema);