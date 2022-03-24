import { ApiProperty } from "@nestjs/swagger";

export class UpdateCardDto {
    @ApiProperty({
        example: 'email@example.com'
    })
    readonly email: string;

    @ApiProperty({
        example: 'Abcd1234'
    })
    readonly password: string;

    @ApiProperty({
        example: [
            "62345cc43cebbdec915a45ea",
            "62345cc43cebbdec915a45ef",
            "62345cc43cebbdec915a45f4",
            "62345cc43cebbdec915a45f9"
        ]
    })
    readonly card: [string];
}