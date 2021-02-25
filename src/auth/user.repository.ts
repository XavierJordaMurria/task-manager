import * as bcrypt from "bcrypt";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { User } from "./user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User> {

    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>{
        const { userName, password } = authCredentialsDto;

        const salt = await bcrypt.genSalt();
        const user = new User();
        user.username = userName;
        user.salt = salt;
        user.password = await this.hashPassword(password, salt);

        try {
            await user.save();
        }
        catch(e) {
            console.error(e)
            if (e.code === '23505') {
                throw new ConflictException(`UserName: <${userName}> already exist!!`);
            }
            else {
                throw new InternalServerErrorException();   
            }
        }
        
    }

    private async hashPassword(password: string, salt: string): Promise<string> {
        return bcrypt.hash(password, salt);
    }
}