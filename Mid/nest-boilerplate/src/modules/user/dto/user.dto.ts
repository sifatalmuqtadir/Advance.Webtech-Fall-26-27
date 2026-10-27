export class CreateUserDto{


import{IsNotEmpty, IsOptonal} from "class-validator";
@IsNotEmpty()
email: string;


}