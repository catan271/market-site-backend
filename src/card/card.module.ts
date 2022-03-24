import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { CorsMiddleware } from "src/middleware/cors.middleware";
import { CardController } from "./card.controller";
import { CardService } from "./card.service";
import { CardSchema } from "./schema/card.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Card', schema: CardSchema }])],
    controllers: [CardController],
    providers: [CardService],
})
export class CardModule implements NestModule {
    configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
        consumer.apply(CorsMiddleware).forRoutes({ path: 'card', method: RequestMethod.PUT });
    }
}