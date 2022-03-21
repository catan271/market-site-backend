import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { UserSchema } from "src/user/schema/user.schema";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./strategy/local.strategy";

@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
    providers: [LocalStrategy, AuthService],
})
export class AuthModule {}