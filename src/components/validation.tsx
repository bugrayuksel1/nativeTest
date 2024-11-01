import {object, ref, string} from 'yup';

const validations = object({
  name: string().required(),
  email: string().email().required(),
  password: string().min(5).required(),
  passwordConfirm: string().oneOf([ref('password')]),
});
