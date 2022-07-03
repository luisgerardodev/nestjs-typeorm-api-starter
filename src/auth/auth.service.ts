import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup(username: string, password: string): object {
    return { message: 'signup' };
  }
  signin(username: string, password: string): object {
    return { message: 'signin' };
  }
}
