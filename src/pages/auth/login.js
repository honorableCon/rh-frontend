import React from 'react';
import Image from 'next/image';
import ErrorHelper from '../../components/Form/ErrorHelper';
import { login } from '../../service/login';
import Logo from './assets/logo.png';
import BackgroundImage from './assets/gmd-login-bg.jpeg';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const [showHelper, setShowHelper] = React.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const { email, password } = Object.fromEntries(data.entries());

    login(email, password)
      .then((res) => {
        router.push('/');
      })
      .catch((err) => {
        setShowHelper(true);
      });
  };

  return (
    <div className="grid md:grid-cols-2 h-full w-full">
      <div className="flex flex-col gap-6 justify-center items-center bg-gradient-to-r from-primary-500 to-secondary-700">
        <div className="w-3/4 md:w-2/4 flex flex-col gap-5">
          <div width="100" height="100">
            <Image src={Logo} width="100" height="100" />
          </div>

          <h1 className="text-3xl font-semibold">
            Se connecter à votre compte
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white-300"
              >
                Votre adresse email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="modou@gmd.sn"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Votre mot de passe
              </label>
              <input
                name="password"
                type="password"
                id="password"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-secondary-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Se connecter
            </button>
            {showHelper && <ErrorHelper error="email or password incorrect" />}
          </form>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url('${BackgroundImage.src}')`,
          backgroundPosition: 'center',
        }}
        className={`bg-cover bg-no-repeat hidden md:flex`}
      ></div>
    </div>
  );
};

export default Login;
