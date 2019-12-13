//Yup is a JavaScript object schema validator and object parser check documentation for more details https://www.npmjs.com/package/yup
let yup = require('yup');

let fieldRequiredMessage = 'Campo requerido';

export const validation = yup
  .object({
    email: yup
      .string('Email')
      .email('Ingresa un email válido')
      .required(fieldRequiredMessage),
    password: yup
      .string('')
      .min(8, 'Ingresa una contraseña de al menos 8 dígitos')
      .required(fieldRequiredMessage)
  })
  .shape();
