import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
export class CreateUserDto {
    @IsEmail({}, { message: 'Invalid email' })
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty({ message: 'Invalid password' })
    password: string

    @IsString()
    name: string
}
