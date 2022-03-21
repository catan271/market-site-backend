import { HttpException, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class CorsMiddleware implements NestMiddleware {
    use(req, res, next) {
        const allowedOrigin = [process.env.GAME_BACKEND];

        if (allowedOrigin.includes(req.header('Origin'))) {
            res.header("Access-Control-Allow-Origin", req.header("Origin"));
            res.header("Access-Control-Allow-Headers", "content-type");
            res.header("Access-Control-Allow-Methods", "PUT");
        } else {
            res.header("Access-Control-Allow-Origin", "");
        }

        next();
    }
}