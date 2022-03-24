import { ApiProperty } from "@nestjs/swagger";

export class RegisterDto {
    @ApiProperty({
        example: 'email@example.com'
    })
    readonly email: string;

    @ApiProperty({
        example: 'Abcd1234'
    })
    readonly password: string;S
}