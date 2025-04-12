import { ApiProperty } from '@nestjs/swagger';
import * as yup from 'yup';
export interface LoginDto {
    email: string;
    password: string;
}

export class LoginSwaggerDto implements LoginDto {
    @ApiProperty() email: string;
    @ApiProperty() password: string;
}

export const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(20).required(),
})

export interface RegisterDto {
    email: string;
    password: string;
    confirmPassword: string;
}

export class RegisterSwaggerDto implements RegisterDto {
    @ApiProperty() email: string;
    @ApiProperty() password: string;
    @ApiProperty({description:"Password and confirm password must be same"}) confirmPassword: string;
}

export const registerSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(20).required(),
    confirmPassword: yup.string().min(8).max(20).required()
})