import { Model } from "mongoose";
import { User } from "src/user/interface/user.interface";
import { compareSync } from "bcrypt";
import { InjectModel } from "@nestjs/mongoose";

export class AuthService {
    constructor(
        @InjectModel('User') private readonly UserModel: Model<User>
    ) {}

    async validateUser(email: string, password: string) {
        const user = await this.UserModel.findOne({ email });
        const passwordMatch = compareSync(password, user.password);

        if (passwordMatch) return user;
    }
}