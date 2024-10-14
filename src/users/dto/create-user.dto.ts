import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
  @IsString({ message: "Name must be string" })
  @IsNotEmpty({ message: "Name can not be empty" })
  name: string;

  @IsEmail({}, { message: "Please provide a valid email address" })
  email: string;

  @IsEnum(["INTERN", "ENGINEER", "ADMIN"], {
    message: "Valid role required",
  })
  role: "INTERN" | "ENGINEER" | "ADMIN";
}
