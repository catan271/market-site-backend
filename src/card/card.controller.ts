import { Body, Controller, Get, Put, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

import { CardService } from "./card.service";
import { UpdateCardDto } from "./dto/update-card.dto";

@ApiTags('Card')
@Controller('card')
export class CardController {
    constructor(
        private readonly cardService: CardService
    ) {}

    @Get()
    @ApiOperation({
        summary: 'Get all cards'
    })
    async getAll() {
        return await this.cardService.getAllCard();
    }

    @Put()
    @ApiOperation({
        summary: 'Update owned cards'
    })
    @UseGuards(AuthGuard('local'))
    async updateCard(@Body() updateCardDto: UpdateCardDto, @Request() req) {
        return await this.cardService.updateCard(updateCardDto, req.user);
    }
}