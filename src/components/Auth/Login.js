import React from 'react';
import useFormValidation from './useFormValidation';
import validateLogin from './validateLogin';

function Login(props) {
  const intialState = {
    name: '',
    email: '',
    password: '',
  };

  const [login, setLogin] = React.useState(true);

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    isSubmitting,
  } = useFormValidation(intialState, validateLogin);

  return (
    <div>
      <h2 className="mv3">{login ? 'Login' : 'Create Account'}</h2>
      <form className="flex flex-column" onSubmit={handleSubmit}>
        {!login && (
          <input
            type="text"
            name="name"
            value={values.name}
            placeholder="Your name"
            className={errors.email && 'error-input'}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        )}
        <input
          type="email"
          name="email"
          value={values.email}
          placeholder="Your email"
          className={errors.password && 'error-input'}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && <p className='error-text'> {errors.email} </p>}
        <input
          type="password"
          name="password"
          value={values.password}
          placeholder="Choose a secure password"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && <p className='error-text'> {errors.password} </p>}
        <div className="flex mt3">
          <button type="submit" className="button pointer mr2" disabled={isSubmitting} style={{ background: isSubmitting? 'gray': 'orange'}}>
            submit
          </button>
          <button
            type="button"
            className="pointer button"
            onClick={() => setLogin(prevLogin => !prevLogin)}
          >
            {login ? 'need to create an account' : 'already have an account'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
