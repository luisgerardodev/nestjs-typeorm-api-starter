import { Controller, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Req() req: Request, @Res() res: Response) {
    const { username, password } = req.body;

    if (!username || !password)
      return res
        .status(400)
        .json({ error: { message: 'username and password are required' } });

    const result = this.authService.signup(username, password);

    return res.json(result);
  }

  @Post('signin')
  signin() {
    return this.authService.signin('username', 'password');
  }
}
