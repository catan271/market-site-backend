import { ApiProperty } from "@nestjs/swagger";

export class GetOwnedCardDto {
    @ApiProperty({
        example: 'email@example.com'
    })
    readonly email: string;
}