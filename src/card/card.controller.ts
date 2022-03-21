import { Body, Controller, Get, Put, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { CardService } from "./card.service";

@Controller('card')
export class CardController {
    constructor(
        private readonly cardService: CardService
    ) {}

    @Get()
    async getAll() {
        return await this.cardService.getAllCard();
    }

    @Put()
    @UseGuards(AuthGuard('local'))
    async updateCard(@Body() updateCardDto, @Request() req) {
        return await this.cardService.updateCard(updateCardDto, req.user);
    }
}