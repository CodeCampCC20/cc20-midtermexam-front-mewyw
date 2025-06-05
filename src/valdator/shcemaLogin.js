import * as Yup from 'yup'

export const schamaLogin = Yup.object({
  email: Yup.string().email().max(50).required('Plaese enter your Email'),
  password: Yup.string().max(20).required('Password is required')
})

export const schemaRegister = Yup.object({
  email: Yup.string().email().max(50).required('Email is required'),
  password: Yup.string().max(20).required('Password is required')
})