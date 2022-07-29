import axios from 'axios';
import { verify } from 'jsonwebtoken';

const AUTH_URL = process.env.NEXT_PUBLIC_JWT_AUTH_SERVER_URL;

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${AUTH_URL}/user/login`, {
      email,
      password,
    });
    const decoded = verify(
      response.data.token,
      process.env.NEXT_PUBLIC_JWT_PUBLIC_KEY,
    );

    const { token } = response.data;
    const { expiresIn } = response.data;
    const cookie = `JWTtoken=${token}; expires=${expiresIn}; path=/`;
    document.cookie = cookie;
    return decoded;
  } catch (err) {
    throw err;
  }
};
