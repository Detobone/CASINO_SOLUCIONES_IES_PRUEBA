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
    <div className="login">
      <form
        className="login-form"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off">
        <label className="login-form__label" htmlFor="username">
          Nombre:&nbsp;
          {errors.name?.type === 'required' && (
            <p className="error-message">* Campo requerido</p>
          )}
          <input
            className="login-form__input"
            type="text"
            placeholder="Ingrese su nombre de usuario"
            id="username"
            autoComplete="off"
            {...register('name', { required: true })}
          />
        </label>

        <label className="login-form__label" htmlFor="login-password">
          Contraseña:&nbsp;
          {errors.password?.type === 'required' && (
            <p className="error-message">* Campo requerido</p>
          )}
          <input
            className="login-form__input"
            type="password"
            placeholder="Ingrese su Contraseña"
            id="login-password"
            autoComplete="off"
            {...register('password', { required: true })}
          />
        </label>
        <button className="btn " type="submit">
          Iniciar sesión
        </button>
        {/* <label htmlFor="stay-logged">
            <input type="checkbox" name="" id="stay-logged" />
          </label> */}
      </form>
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          {/* <source
            src="./public/1079053388-preview.mp4"
            // type="video/webm"
          /> */}
          <source src="./src/assets/videos/slot.mp4" type="video/mp4" />
          Your browser is not supported!
        </video>
      </div>
    </div>
  );
};
