import { HttpException, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose"

import { User } from "./interface/user.interface";

export class UserService {
    constructor(
        @InjectModel('User') private readonly UserModel: Model<User>
    ) {}

    async register(registerDto) {
        try {
            const user = await this.UserModel.create(registerDto);
            return user;
        } catch (e) {
            throw new HttpException(
                e.message,
                HttpStatus.BAD_REQUEST
            )
        }
    }

    async getOwnedCard(email: string) {
        const user = await this.UserModel.findOne({ email }).populate('ownedCard');

        if (!user) {
            throw new HttpException(
                'Cannot find user!',
                HttpStatus.NOT_FOUND,
            )
        }
        return user.ownedCard;
    }
}