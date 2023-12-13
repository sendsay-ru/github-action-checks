const Joi = require('joi');

module.exports = Joi.object({
  showComments: Joi.boolean(),
  useTurbo: Joi.boolean(),
  env: Joi.object(),
  jobs: Joi.array()
    .required()
    .items(
      Joi.object({
        key: Joi.string().required(),
        steps: Joi.array()
          .required()
          .items(
            Joi.object({
              key: Joi.string().required(),
              name: Joi.string().required(),
              command: Joi.string().required(),
            }),
          ),
        preCommand: Joi.string().empty(''),
        artifacts: Joi.array().items(Joi.string()),
      }),
    ),
  node: Joi.alternatives().try(Joi.number(), Joi.string().empty('')),
  installCommand: Joi.string().empty(''),
  buildCommand: Joi.string().empty(''),
});
