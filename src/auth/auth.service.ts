import { Injectable , UnauthorizedException} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(private userService : UserService, private jwtService: JwtService){}
    
    async signIn(username: string, pass: string): Promise<any> {
        const user = await this.userService.findOneByUsername(username);
        if (user?.password !== pass) {
          throw new UnauthorizedException();
        }
        const { password, ...payload } = user;
        
        // TODO: Generate a JWT and return it here
        // instead of the user object
        return {
            access_token : await this.jwtService.signAsync(payload),
        };
      }
}
