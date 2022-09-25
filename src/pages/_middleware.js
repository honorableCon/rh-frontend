import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

const config = {
  matcher: '/',
};
const middleware = async (req) => {
  const loginPath = '/auth/login';
  const { cookies } = req;
  const token = cookies.JWTtoken;
  const publicKey = process.env.NEXT_PUBLIC_JWT_PUBLIC_KEY;

  if (token) {
    try {
      const decoded = verify(token, publicKey);
      if (decoded) {
        return req.url == loginPath
          ? NextResponse.redirect('/')
          : NextResponse.next();
      }
    } catch (err) {
      return NextResponse.redirect(loginPath);
    }
  }

  if (req.url == loginPath) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(loginPath);
  }
};

export { middleware, config };
