import { Body, Controller, Get, Param, Post } from "@nestjs/common";

import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Post('register')
    async register(@Body() registerDto) {
        return await this.userService.register(registerDto);
    }

    @Get(':email')
    async getOwnedCard(@Param() { email }) {
        return await this.userService.getOwnedCard(email);
    }
}