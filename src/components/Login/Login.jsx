import React, { Fragment } from 'react';
import { TextField, Button, Box, Grid } from '@material-ui/core';
import { Formik } from 'formik';

let initialValues = { name: '', email: '' };

export const LoginForm = props => {
  let yup = require('yup');

  let fieldRequiredMessage = 'Campo requerido';
  const validation = yup
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

  return (
    <Box m={5} mx="auto">
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        isInitialValid={validation.isValidSync(initialValues)}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {props => (
          <form onSubmit={props.handleSubmit}>
            <TextField
              id="email"
              name="email"
              helperText={props.touched.email ? props.errors.email : ''}
              error={props.touched.email && Boolean(props.errors.email)}
              label="Correo electrónico"
              fullWidth
              value={props.values.email}
              onChange={props.handleChange}
            />

            <TextField
              id="password"
              name="password"
              helperText={props.touched.password ? props.errors.password : ''}
              error={props.touched.password && Boolean(props.errors.password)}
              label="Contraseña"
              fullWidth
              value={props.values.password}
              onChange={props.handleChange}
            />
            <Box m={2}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={props.disabled}
                onClick={props.onClick}
              >
                Entrar
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
