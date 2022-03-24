import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class CorsMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const allowedOrigin = [process.env.GAME_BACKEND];

        if (allowedOrigin.includes(req.header('Origin'))) {
            res.header("Access-Control-Allow-Origin", req.header("Origin"));
            res.header("Access-Control-Allow-Headers", "content-type");
            res.header("Access-Control-Allow-Methods", "PUT");
        } else {
            res.header("Access-Control-Allow-Origin", allowedOrigin[0]);
        }

        next();
    }
}