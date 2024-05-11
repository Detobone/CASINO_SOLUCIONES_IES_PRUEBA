import React from 'react';
import { useForm } from 'react-hook-form';
import { casinosApiAuth } from '../api/casinosApi';
import axios from 'axios';

export const userAuthenticate = async (body) => {
  const { data } = await casinosApiAuth.post('/authenticate', body);
  console.log(data);
  return data;
};
export const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm({ defaultValues: {} });

  const onSubmit = (e) => {
    e.preventDefault;
    const formData = {
      username: watch('name'),
      password: watch('password'),
      rememberMe: false,
    };

    // userAuthenticate(formData);

    axios
      .post(
        'http://smol-plus.dev2.ies-gaming.com:8282/api/authenticate',
        formData
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.error(error.message));
    reset();
    console.log(formData);
  };

  //   useEffect(() => {
  //     const form = document.getElementById('login-form');
  //     form.setAttribute('autocomplete', 'off');
  //   }, []);

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <label htmlFor="username">
            Nombre:&nbsp;
            {errors.name?.type === 'required' && (
              <p className="form__error-message">* Campo requerido</p>
            )}
            <input
              type="text"
              placeholder="Ingrese su nombre de usuario"
              id="username"
              autoComplete="off"
              {...register('name', { required: true })}
            />
          </label>

          <label htmlFor="login-password">
            Contraseña:&nbsp;
            {errors.password?.type === 'required' && (
              <p className="form__error-message">* Campo requerido</p>
            )}
            <input
              type="password"
              placeholder="Ingrese su Contraseña"
              id="login-password"
              autoComplete="off"
              {...register('password', { required: true })}
            />
          </label>
          <button type="submit">Iniciar sesión</button>
          {/* <label htmlFor="stay-logged">
            <input type="checkbox" name="" id="stay-logged" />
          </label> */}
        </form>
      </div>
    </>
  );
};
