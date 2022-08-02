import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

const middleware = (req) => {
  const loginPath = '/auth/login';
  const { cookies } = req;
  const token = cookies.JWTtoken;

  if (token) {
    try {
      const decoded = verify(token, process.env.NEXT_PUBLIC_JWT_PUBLIC_KEY);
      if (decoded) {
        return req.url == loginPath
          ? NextResponse.redirect('/')
          : NextResponse.next(req);
      }
    } catch (err) {
      return NextResponse.redirect(loginPath);
    }
  }

  if (req.url == loginPath) return NextResponse.next(req);

  return NextResponse.redirect(loginPath);
};

export default middleware;
