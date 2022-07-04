import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup(username: string, password: string): object {
    console.log({ username, password });
    return { message: 'signup' };
  }
  signin(username: string, password: string): object {
    console.log({ username, password });
    return { message: 'signin' };
  }
}
