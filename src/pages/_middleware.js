import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

const middleware = (req) => {
  const loginPath = '/auth/login';
  const { cookies } = req;
  const token = cookies.JWTtoken;

  if (token) {
    if (verify(token, process.env.NEXT_PUBLIC_JWT_PUBLIC_KEY)) {
      return req.url == loginPath
        ? NextResponse.redirect('/')
        : NextResponse.next(req);
    }
  }

  if (req.url == loginPath) return NextResponse.next(req);

  return NextResponse.redirect(loginPath);
};

export default middleware;
