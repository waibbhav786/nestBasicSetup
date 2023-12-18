import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { UserSchema } from "src/schemas/user.scema";
@Module({
    imports: [MongooseModule.forFeature([{ name: 'USER_MODEL', schema: UserSchema }]),
    MongooseModule.forRoot("mongodb+srv://singhwaibbhav:00012389@cluster0.esrmjar.mongodb.net/")],
    providers:[UserService],
    controllers:[UserController]
})

export class user{

}



/*. Imports:

@nestjs/common: Provides essential modules and utilities for NestJS applications.
@nestjs/mongoose: Provides integration with the Mongoose ODM for working with MongoDB databases.
2. MongooseModule.forFeature:

This line configures Mongoose for a specific model named "USER_MODEL".
name: 'USER_MODEL': Defines the name of the model in the application.
schema: UserSchema: Specifies the schema object used for the model, likely defined in the user.scema file.
3. Providers:

UserService: This array injects the UserService class into the module, making it available for dependency injection in other classes.
4. Controllers:

UserController: This array injects the UserController class into the module, making it responsible for handling user-related routes and requests.
5. Module definition:

user: This is the name of the module, used for identification and referencing in other parts of the application.
Overall, this code snippet defines a module that configures Mongoose for a user model, provides access to the UserService and UserController, and makes them available for use in your NestJS application.

Do you have any further questions about specific parts of the code or the overall functionality of the module? I'm happy to help you understand it better!

*/