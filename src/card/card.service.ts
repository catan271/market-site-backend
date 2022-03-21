import { HttpException, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/user/interface/user.interface";

import { Card } from "./interface/card.interface";

export class CardService {
    constructor(
        @InjectModel('Card') private readonly CardModel: Model<Card>
    ) {}
    
    async getAllCard() {
        return this.CardModel.find({});
    }

    async updateCard(updateCardDto, user: User) {
        try {
            user.ownedCard = updateCardDto.card;

            await user.populate('ownedCard');

            const sum = user.ownedCard.reduce((acc, e: any) => acc + e.power, 0);
            if (sum > 10) {
                throw new Error('Exceed coin limit!');
            }

            await user.save();
            return user;
        } catch (e) {
            throw new HttpException(
                e.message,
                HttpStatus.BAD_REQUEST
            );
        }
    }
}