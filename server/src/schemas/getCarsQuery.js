import Joi from 'joi';

const schema = Joi.object({
manufacturer: Joi.string(),
    model: Joi.string().max(500),
});

export default schema;