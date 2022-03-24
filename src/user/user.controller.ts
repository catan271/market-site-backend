import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

import { GetOwnedCardDto } from "./dto/get-owned-card.dto";
import { RegisterDto } from "./dto/register.dto";
import { UserService } from "./user.service";

@ApiTags('User')
@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Post('register')
    @ApiOperation({
        summary: 'Register'
    })
    async register(@Body() registerDto: RegisterDto) {
        return await this.userService.register(registerDto);
    }

    @Get(':email')
    @ApiOperation({
        summary: 'Get owned card'
    })
    async getOwnedCard(@Param() { email }: GetOwnedCardDto) {
        return await this.userService.getOwnedCard(email);
    }
}